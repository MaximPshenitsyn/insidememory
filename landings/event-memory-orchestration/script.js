const translations = {
  en: {
    meta: {
      title: "Event Memory Orchestration in LLM",
      description:
        "Event memory orchestration: an alternative memory branch for LLMs where events form a graph of relationships instead of a flat retrieval layer."
    },
    brand: {
      project: "Event Memory Orchestration"
    },
    nav: {
      problem: "Problem",
      manifesto: "Manifesto",
      classification: "Classification"
    },
    hero: {
      title: "An event should not disappear when it leaves the attention window.",
      lead:
        "Event memory orchestration builds memory as a graph of events that adapts to incoming facts. It is not another retrieval layer for RAG. It is a separate branch of memory organization where knowledge is stored as evolving relationships rather than as a queue of context fragments."
    },
    graph: {
      eyebrow: "Interactive Event Graph",
      hudLabel: "Selected Event"
    },
    sections: {
      problem: {
        eyebrow: "Problem",
        title: "Context solves attention, but not memory.",
        p1:
          "Today, LLM memory is too often reduced to whatever is currently inside the context window. That means an event exists only while its tokens remain inside the active inference zone. Once it leaves the window, it stops being a full part of the larger structure.",
        p2:
          "The second problem goes deeper: events are not meaningfully connected outside the model's immediate attention. Even if two facts once appeared together, that does not mean their causal or temporal dependency survives as a persistent memory object."
      },
      manifesto: {
        eyebrow: "Manifesto",
        title: "Memory should store not only a fact, but the trajectory of an event.",
        p1:
          'This memory graph is designed around incoming events and the restructuring of existing access routes. What matters is not only the answer to "what happened", but also the relationship pattern: "what followed from this", "what does this activate", and "which nodes should become stronger".',
        p2:
          "This is still not human memory. But it moves closer to it than systems where the past is stored as a static set of chunks for later retrieval. The project's goal is to push models toward real-time memory through a layer of random and semi-random links that resemble living neural associations."
      },
      classification: {
        eyebrow: "Classification",
        title: "Memory classification for LLMs should distinguish retrieval from orchestration.",
        items: {
          context: {
            title: "Context-Bound Memory",
            text:
              "Memory is almost identical to the attention window. The system is fast, but knowledge is unstable and constantly requires reloading."
          },
          rag: {
            title: "RAG Systems",
            text:
              "External memory in the form of documents and a search layer. It retrieves data well, but does not build an autonomous graph logic of events."
          },
          orchestration: {
            title: "Event Memory Orchestration",
            text:
              "An alternative development branch. Memory is built as an adaptive event graph where the key task is not retrieving a similar fragment, but managing relationships, activation, and structural evolution."
          },
          realtime: {
            title: "Real-Time Neural Memory",
            text:
              "A long-term target: memory with continuously emerging random links similar to living associative circuits."
          }
        }
      },
      repository: {
        eyebrow: "Repository",
        title: "Explore the code, graph architecture, and project direction.",
        cta: "Open GitHub Repository"
      },
      graphNodes: {
        e01: {
          label: "User Intent",
          text: "Input signal. Here memory captures not the question itself, but the event that starts a new reasoning line."
        },
        e02: {
          label: "Context Cut",
          text: "The boundary of attention. Beyond it, a standard LLM loses direct event connectivity."
        },
        e03: {
          label: "Memory Trigger",
          text: "Activating a node reveals its local dependency map instead of retrieving a single chunk."
        },
        e04: {
          label: "Causal Shift",
          text: "A new fact changes not only memory content, but also the strength of routes between nodes."
        },
        e05: {
          label: "Temporal Link",
          text: "An event exists as part of a chronology rather than as an isolated record in storage."
        },
        e06: {
          label: "State Mutation",
          text: "Memory adapts in real time and restructures the local neighborhood of a node."
        },
        e07: {
          label: "Recall Route",
          text: "Recall follows a chain of relationships rather than a single retrieval hit."
        },
        e08: {
          label: "Latent Edge",
          text: "A weak relationship remains in the graph as a potential channel for future activation."
        },
        e09: {
          label: "Event Drift",
          text: "New events deform the old memory map while preserving the structure of its evolution."
        },
        e10: {
          label: "Adaptive Cluster",
          text: "A local cluster emerges from many weak links when one node becomes central."
        },
        e11: {
          label: "Inference Echo",
          text: "Traces of previous activations increase the probability of the same route being used again."
        },
        e12: {
          label: "Random Bridge",
          text: "Semi-random links are a step toward real-time memory that resembles living associations."
        },
        e13: {
          label: "Persistent State",
          text: "An event does not disappear after a request but remains part of a modified structure."
        }
      }
    }
  },
  ru: {
    meta: {
      title: "Event Memory Orchestration in LLM",
      description:
        "Event memory orchestration: альтернативная ветвь памяти для LLM, где события образуют граф связей вместо плоского retrieval."
    },
    brand: {
      project: "Event Memory Orchestration"
    },
    nav: {
      problem: "Проблема",
      manifesto: "Манифест",
      classification: "Классификация"
    },
    hero: {
      title: "Событие не должно исчезать, когда оно покидает окно внимания.",
      lead:
        "Event memory orchestration строит память как граф событий, адаптирующийся к поступлению новых фактов. Это не новый слой retrieval для RAG. Это отдельная ветвь организации памяти, где знание хранится как динамика связей, а не как очередь фрагментов контекста."
    },
    graph: {
      eyebrow: "Интерактивный граф событий",
      hudLabel: "Выбранное событие"
    },
    sections: {
      problem: {
        eyebrow: "Проблема",
        title: "Контекст решает задачу внимания, но не задачу памяти.",
        p1:
          "Сегодня память LLM слишком часто редуцируется до того, что сейчас помещено в окно контекста. Это означает, что событие существует только пока его токены находятся в зоне активного inference. Покинув окно, оно перестает быть полноценной частью общей структуры.",
        p2:
          "Вторая проблема глубже: события не связаны между собой за пределами внимания модели. Даже если два факта были когда-то рядом, это не значит, что их причинная или временная зависимость сохранится как самостоятельный объект памяти."
      },
      manifesto: {
        eyebrow: "Манифест",
        title: "Память должна хранить не только факт, но и траекторию события.",
        p1:
          "Мой граф памяти ориентирован на поступление новых событий и на перестройку уже существующих маршрутов доступа. Важен не только ответ на вопрос «что было», но и форма связи «что из этого последовало», «что это активирует», «какие узлы должны усилиться».",
        p2:
          "Это все еще не человеческая память. Но это движение ближе к ней, чем системы, где прошлое хранится как статический набор чанков для последующего retrieval. Цель проекта в том, чтобы подвести модели к real-time памяти через слой случайных и полуслучайных связей, напоминающих поведение живых нейронных ассоциаций."
      },
      classification: {
        eyebrow: "Классификация",
        title: "Классификация памяти для LLM должна различать retrieval и orchestration.",
        items: {
          context: {
            title: "Context-Bound Memory",
            text:
              "Память почти равна окну внимания. Система работает быстро, но знание нестабильно и постоянно требует повторной загрузки."
          },
          rag: {
            title: "RAG Systems",
            text:
              "Внешняя память в виде документов и поискового слоя. Хорошо возвращает данные, но не строит автономную графовую логику событий."
          },
          orchestration: {
            title: "Event Memory Orchestration",
            text:
              "Альтернативная ветвь развития. Память строится как адаптивный граф событий, где главное не поиск похожего куска, а управление связями, активацией и эволюцией структуры."
          },
          realtime: {
            title: "Real-Time Neural Memory",
            text:
              "Дальняя цель: память с постоянно возникающими случайными связями, похожими на живые ассоциативные контуры."
          }
        }
      },
      repository: {
        eyebrow: "Репозиторий",
        title: "Посмотреть код, архитектуру графа и направление развития проекта.",
        cta: "Открыть GitHub репозиторий"
      },
      graphNodes: {
        e01: {
          label: "User Intent",
          text: "Сигнал входа. Здесь память фиксирует не вопрос, а событие запуска новой линии рассуждения."
        },
        e02: {
          label: "Context Cut",
          text: "Граница внимания. После нее обычная LLM теряет прямую связанность событий."
        },
        e03: {
          label: "Memory Trigger",
          text: "Активация узла включает локальную карту зависимостей, а не извлекает один chunk."
        },
        e04: {
          label: "Causal Shift",
          text: "Новый факт меняет не только содержание памяти, но и силу маршрутов между узлами."
        },
        e05: {
          label: "Temporal Link",
          text: "Событие существует как часть хронологии, а не как отдельная запись в хранилище."
        },
        e06: {
          label: "State Mutation",
          text: "Память адаптируется в реальном времени и перестраивает ближайшее окружение узла."
        },
        e07: {
          label: "Recall Route",
          text: "Вспоминание идет по цепочке связей, а не через единичный retrieval hit."
        },
        e08: {
          label: "Latent Edge",
          text: "Слабая связь остается в графе как потенциальный канал будущей активации."
        },
        e09: {
          label: "Event Drift",
          text: "Новые события деформируют старую карту памяти, сохраняя структуру эволюции."
        },
        e10: {
          label: "Adaptive Cluster",
          text: "Локальный кластер возникает из множества слабых связей при выборе центрального узла."
        },
        e11: {
          label: "Inference Echo",
          text: "Следы предыдущих активаций усиливают вероятность повторного маршрута."
        },
        e12: {
          label: "Random Bridge",
          text: "Полуслучайные связи нужны как шаг к real-time memory, напоминающей живые ассоциации."
        },
        e13: {
          label: "Persistent State",
          text: "Событие не исчезает после запроса, а остается частью измененной структуры."
        }
      }
    }
  }
};

const getTranslation = (language, path) =>
  path.split(".").reduce((value, key) => value?.[key], translations[language]);

const languageButtons = Array.from(document.querySelectorAll("[data-lang-switch]"));
const descriptionElement = document.querySelector("#page-description");
let currentLanguage = "en";

function applyLanguage(language) {
  const safeLanguage = translations[language] ? language : "en";
  currentLanguage = safeLanguage;

  document.documentElement.lang = safeLanguage;
  document.title = translations[safeLanguage].meta.title;
  descriptionElement?.setAttribute("content", translations[safeLanguage].meta.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getTranslation(safeLanguage, key);

    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === safeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (typeof window.updateGraphLanguage === "function") {
    window.updateGraphLanguage(safeLanguage);
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langSwitch || "en"));
});

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
    { id: "e01", label: "", text: "", x: 0.12, y: 0.31, size: 4 },
    { id: "e02", label: "", text: "", x: 0.22, y: 0.2, size: 5 },
    { id: "e03", label: "", text: "", x: 0.34, y: 0.36, size: 6 },
    { id: "e04", label: "", text: "", x: 0.47, y: 0.16, size: 4 },
    { id: "e05", label: "", text: "", x: 0.57, y: 0.29, size: 5 },
    { id: "e06", label: "", text: "", x: 0.7, y: 0.19, size: 4 },
    { id: "e07", label: "", text: "", x: 0.8, y: 0.35, size: 6 },
    { id: "e08", label: "", text: "", x: 0.89, y: 0.23, size: 4 },
    { id: "e09", label: "", text: "", x: 0.16, y: 0.49, size: 4 },
    { id: "e10", label: "", text: "", x: 0.32, y: 0.54, size: 5 },
    { id: "e11", label: "", text: "", x: 0.5, y: 0.47, size: 5 },
    { id: "e12", label: "", text: "", x: 0.66, y: 0.55, size: 6 },
    { id: "e13", label: "", text: "", x: 0.82, y: 0.49, size: 4 }
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

  function syncGraphNodes(language) {
    const localizedNodes = translations[language].sections.graphNodes;

    nodes.forEach((node) => {
      const localized = localizedNodes[node.id];
      if (localized) {
        node.label = localized.label;
        node.text = localized.text;
      }
    });
  }

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

  window.updateGraphLanguage = (language) => {
    syncGraphNodes(language);
    updateHud();
  };

  resizeCanvas();
  syncGraphNodes(currentLanguage);
  updateHud();
  draw(performance.now());

  window.addEventListener("beforeunload", () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
  });
}

applyLanguage("en");
