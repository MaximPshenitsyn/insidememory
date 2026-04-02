# InsideMemory

InsideMemory is a repository for the landings and articles of the InsideMemory organization.

The main goal of the organization is to research memory, with a primary focus on memory in neural networks and LLM-based systems. This includes how memory can be structured, activated, persisted, and evolved beyond a simple context window or document retrieval layer.

## Repository Structure

`landings/` contains one-page projects, landing pages, and article-style pages published under the InsideMemory domain.

Current example:

- `landings/event-memory-orchestration`

## Running a Landing with Docker

This repository includes an `nginx` setup and a `docker-compose.yml` file for serving landing pages by URL path.

For example, the landing in `landings/event-memory-orchestration` is available at:

`http://insidememory.org/event-memory-orchestration/`

### Start the server

```bash
docker compose up -d
```

### Stop the server

```bash
docker compose down
```

## Routing

`nginx` serves content from the `landings/` directory and maps specific URL paths to specific landing folders.

At the moment, the following route is configured:

- `/event-memory-orchestration/` -> `landings/event-memory-orchestration/`
