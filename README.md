# vite-app

A landing page built with Typescript, Vite and React-Three-Fiber (r3f).

## Requirements

- `node` and `pnpm` installed locally or,
- `docker` and `compose` plugin installed locally or,
- `kubectl` with a `KUBECONFIG` file configured to a running cluster.

## Usage

Use Make to streamline local development for this project (like a task-runner with straightforward rules). Launch project locally via `node` with `pnpm` (1), `docker` with `compose` plugin (2), or `kubectl` with a configured Kubernetes cluster (3). Note that these rules are tailored for local use and aren't intended for production scenarios.

### Node usage

Simplify the management of your Node.js application's lifecycle with these rules:

- `node.all`: Installs dependencies, builds the project, and starts it.
- `node.install`: Install project dependencies using pnpm.
- `node.dev`: Start the project in development mode using pnpm.
- `node.build`: Build the project.
- `node.start`: Start the project in preview mode.

### Docker usage

Easier and clearer application lifecycle management, monitoring and more with Docker containers using these rules:

- `docker.all`: Build images, pull the latest versions, and start containers.
- `docker.clean`: Stop containers, remove images, and clean up volumes.
- `docker.build`: Build compose images.
- `docker.pull`: Pull the latest image for a specific service.
- `docker.up`: Start compose containers in detached mode.
- `docker.down`: Stop compose containers for a specific service.
- `docker.down.images`: Stop containers and remove associated images.
- `docker.down.volumes`: Stop containers and delete volumes.
- `docker.ps`: List containers for a specific service in JSON format.
- `docker.top`: Display running processes of a specific container.
- `docker.events`: Stream Docker events for a specific service in JSON format.
- `docker.logs`: Stream logs for containers or a specific service.
- `docker.exec`: Execute a command inside a specific container. Require SVC, CMD values.
- `docker.cp.from`: Copy files from a container to the host. Require SVC, SRC, DST values.
- `docker.cp.to`: Copy files from the host to a container. Require SVC, SRC, DST values.

Docker rules can optionally take a SVC value parameter to narrow command to a specific service.

### Kubernetes usage

Manage and monitor Kubernetes resources using these rules based on Kustomize:

- `k8s.apply`: Apply Kubernetes resources defined in `deploy/`.
- `k8s.delete`: Delete Kubernetes resources defined in `deploy/`.
- `k8s.get`: Retrieve and display Kubernetes resources from `deploy/`.
- `k8s.describe`: Describe Kubernetes resources from `deploy/`.
- `k8s.logs`: Stream logs from Kubernetes resources in `deploy/`.

## Repository

### `/src` directory

### `/public` directory

### `/deploy` directory

### `/.github` directory

Configuration related to repository or application lifecycle lies on repository root:
- application lifecycle management (`Makefile`, `Dockerfile.{dev,prod}`, `docker-compose.yaml`),
- configuration for application (`package.json`, `*-lock.yaml`, `tsconfig*.json`, `vite.config.ts` and `.eslintrc.cjs`).

## Toolchain

## Roadmap

- Migrate from `vite` to `nextjs` (from a single-page application to a hybrid server-sided renderer).

## Author

[@gmarcha](https://github.com/gmarcha)

## License

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
