const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const canvas = document.querySelector("#memory-graph");
const hud = document.querySelector("#graph-hud");

if (canvas && hud) {
  const context = canvas.getContext("2d");
  const hudTitle = hud.querySelector("h2");
  const hudText = hud.querySelector(".hud-text");
  const pixelRatio = Math.max(window.devicePixelRatio || 1, 1);

  const nodes = [
    { id: "e01", label: "User Intent", text: "Сигнал входа. Здесь память фиксирует не вопрос, а событие запуска новой линии рассуждения.", x: 0.12, y: 0.31, size: 4 },
    { id: "e02", label: "Context Cut", text: "Граница внимания. После нее обычная LLM теряет прямую связанность событий.", x: 0.22, y: 0.2, size: 5 },
    { id: "e03", label: "Memory Trigger", text: "Активация узла. Событие не извлекается как chunk, а включает локальную карту зависимостей.", x: 0.34, y: 0.36, size: 6 },
    { id: "e04", label: "Causal Shift", text: "Новый факт меняет не только содержание памяти, но и силу маршрутов между узлами.", x: 0.47, y: 0.16, size: 4 },
    { id: "e05", label: "Temporal Link", text: "Событие существует как часть хронологии, а не как отдельная запись в хранилище.", x: 0.57, y: 0.29, size: 5 },
    { id: "e06", label: "State Mutation", text: "Память адаптируется в реальном времени и перестраивает ближайшее окружение узла.", x: 0.7, y: 0.19, size: 4 },
    { id: "e07", label: "Recall Route", text: "Вспоминание идет по цепочке связей, а не через единичный retrieval hit.", x: 0.8, y: 0.35, size: 6 },
    { id: "e08", label: "Latent Edge", text: "Слабая связь остается в графе как потенциальный канал будущей активации.", x: 0.89, y: 0.23, size: 4 },
    { id: "e09", label: "Event Drift", text: "Новые события деформируют старую карту памяти, сохраняя структуру эволюции.", x: 0.16, y: 0.49, size: 4 },
    { id: "e10", label: "Adaptive Cluster", text: "Локальный кластер возникает из множества слабых связей при выборе центрального узла.", x: 0.32, y: 0.54, size: 5 },
    { id: "e11", label: "Inference Echo", text: "Следы предыдущих активаций усиливают вероятность повторного маршрута.", x: 0.5, y: 0.47, size: 5 },
    { id: "e12", label: "Random Bridge", text: "Полуслучайные связи нужны как шаг к real-time memory, напоминающей живые ассоциации.", x: 0.66, y: 0.55, size: 6 },
    { id: "e13", label: "Persistent State", text: "Событие не исчезает после запроса, а остается частью измененной структуры.", x: 0.82, y: 0.49, size: 4 }
  ];

  const edges = [
    ["e01", "e03"], ["e02", "e03"], ["e02", "e04"], ["e03", "e05"], ["e03", "e10"],
    ["e04", "e05"], ["e04", "e06"], ["e05", "e07"], ["e06", "e07"], ["e07", "e08"],
    ["e09", "e10"], ["e10", "e11"], ["e11", "e12"], ["e12", "e13"], ["e05", "e11"],
    ["e07", "e13"], ["e03", "e11"], ["e01", "e09"], ["e06", "e12"], ["e05", "e12"]
  ];

  let activeNodeId = "e03";
  let previousActiveNodeId = activeNodeId;
  let transitionStart = performance.now();
  const transitionDuration = 900;
  let animationFrame = 0;
  let phase = 0;
  let metrics = { width: 0, height: 0, displayWidth: 0, displayHeight: 0 };

  const getNodeById = (id) => nodes.find((node) => node.id === id);

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    metrics.displayWidth = rect.width;
    metrics.displayHeight = rect.height;
    metrics.width = Math.round(rect.width * pixelRatio);
    metrics.height = Math.round(rect.height * pixelRatio);

    canvas.width = metrics.width;
    canvas.height = metrics.height;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function buildNeighborSet(id) {
    return new Set(
      edges
        .filter(([a, b]) => a === id || b === id)
        .flat()
    );
  }

  function getTargetProjection(node, focusId) {
    const active = getNodeById(focusId);
    const neighborIds = buildNeighborSet(focusId);
    const isActive = node.id === focusId;
    const isNeighbor = neighborIds.has(node.id);

    let x = node.x;
    let y = node.y;
    let size = node.size;

    if (isActive) {
      x = 0.5;
      y = 0.31;
      size = node.size + 6;
    } else if (isNeighbor) {
      const dx = node.x - active.x;
      const dy = node.y - active.y;
      x = 0.5 + dx * 0.72;
      y = 0.31 + dy * 0.62;
      size = node.size + 2;
    }

    return { x, y, size, isActive, isNeighbor };
  }

  function easeOutExpo(t) {
    if (t >= 1) return 1;
    return 1 - 2 ** (-10 * t);
  }

  function project(node, progress) {
    const from = getTargetProjection(node, previousActiveNodeId);
    const to = getTargetProjection(node, activeNodeId);

    const x = from.x + (to.x - from.x) * progress;
    const y = from.y + (to.y - from.y) * progress;
    const size = from.size + (to.size - from.size) * progress;

    return {
      ...node,
      px: x * metrics.displayWidth,
      py: y * metrics.displayHeight,
      radius: size + Math.sin(phase + node.x * 8) * 0.6,
      isActive: progress < 1 ? to.isActive : node.id === activeNodeId,
      isNeighbor: to.isNeighbor
    };
  }

  function draw(now) {
    phase += 0.015;
    context.clearRect(0, 0, metrics.displayWidth, metrics.displayHeight);

    const progress = easeOutExpo(
      Math.min((now - transitionStart) / transitionDuration, 1)
    );
    const projectedNodes = nodes.map((node) => project(node, progress));
    const projectedMap = new Map(projectedNodes.map((node) => [node.id, node]));

    edges.forEach(([a, b], index) => {
      const source = projectedMap.get(a);
      const target = projectedMap.get(b);
      const activeEdge = a === activeNodeId || b === activeNodeId;

      context.beginPath();
      context.moveTo(source.px, source.py);
      context.lineTo(target.px, target.py);
      context.lineWidth = activeEdge ? 1.8 + progress * 0.8 : 1;
      context.strokeStyle = activeEdge
        ? "rgba(255, 59, 48, 0.88)"
        : `rgba(255, 255, 255, ${0.08 + (index % 4) * 0.02})`;
      context.stroke();
    });

    projectedNodes.forEach((node) => {
      context.beginPath();
      context.arc(node.px, node.py, node.radius * 2.2, 0, Math.PI * 2);
      context.fillStyle = node.isActive
        ? "rgba(255, 59, 48, 0.18)"
        : node.isNeighbor
          ? "rgba(255, 59, 48, 0.1)"
          : "rgba(255, 255, 255, 0.04)";
      context.fill();

      context.beginPath();
      context.arc(node.px, node.py, Math.max(node.radius, 3), 0, Math.PI * 2);
      context.fillStyle = node.isActive ? "#ff3b30" : node.isNeighbor ? "#ffffff" : "rgba(255, 255, 255, 0.72)";
      context.fill();
    });

    animationFrame = window.requestAnimationFrame(draw);
  }

  function updateHud() {
    const active = getNodeById(activeNodeId);
    hudTitle.textContent = active.label;
    hudText.textContent = active.text;
  }

  function pickNode(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const projectedNodes = nodes.map((node) => project(node, 1));

    let closest = null;
    let closestDistance = Infinity;

    projectedNodes.forEach((node) => {
      const dx = x - node.px;
      const dy = y - node.py;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closest = node;
        closestDistance = distance;
      }
    });

    if (closest && closestDistance < 36) {
      if (closest.id !== activeNodeId) {
        previousActiveNodeId = activeNodeId;
        activeNodeId = closest.id;
        transitionStart = performance.now();
        updateHud();
      }
    }
  }

  canvas.addEventListener("click", (event) => pickNode(event.clientX, event.clientY));
  canvas.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    if (touch) {
      pickNode(touch.clientX, touch.clientY);
    }
  });

  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();
  updateHud();
  draw(performance.now());

  window.addEventListener("beforeunload", () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
  });
}
