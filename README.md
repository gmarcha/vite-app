# vite-app

A landing page built with Typescript, Vite and React-Three-Fiber (r3f).

## Requirements

- `make`[^1] with:
  - `node` and `pnpm` installed locally[^2] or,
  - `docker` and `compose` plugin installed locally[^3] or,
  - `kubectl` with a `KUBECONFIG` file configured to a running cluster[^4].

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

Repository contains javascript/typescript, static assets and configuration resources for a Vite application.

`Vite` uses a static HTML file as entrypoint (`/index.html`) and loads modules in javascript or typescript format. In development mode, `Vite` starts a node server to watch change in `/src` directory and provide hot-reload functionality. In production mode, there are two steps. At first, you need to use `Vite` to build your application into static content in a `/dist` directory. Then you serve it with an express-like server (or any node-compatible environment) on a dedicated server or through any static content delivery service like `Netlify`, `Cloudflare`, `Vercel`, etc...

Static resources in `/dist` directory are bundled, minified and optimized `Javascript` assets built by a typescript-compiler from source code containing typescript-react components. `Typescript` adds a strong-typing system which improves drastically code completion and error detection from a developer perspective. Components are written with `React` because even if, nowadays, "vanilla" javascript has built-in high-level functionalities, `React` became a lot like node itself: it is not only used for the reason that it provides great benefits but rather than it has a rich and strong ecosystem. Various node libraries offers built-in integration for react and numerous libraries are even built-on react hooks or `JSX` functionalities. `JSX` (or `TSX` for typescript) is the format used in react ecosystem to write `HTML` templates.

Styles are directly written in components thanks to `Emotion` "css-in-js" engine. It integrates flawlessly with existing css-component libraries like `Tailwindcss`. You could use react-component libraries such as `Mantine` (or more opinionated `MaterialUI`) to import ready-to-use components for layouts, form inputs, theming (dark, light, others), notification system... `Mantine` components are fully customizable through `Emotion` API. Global `CSS` directives should be avoided to ensure maintainability (!important directives notably).

For 3D integration, three.js is a very known library in javascript ecosystem. It provides a wrapper on WebGL to create scenes, cameras, meshes in web canvas. Nevertheless it is still complex to design performant 3D interfaces with a "simple" library. You should use react-three-fiber ecosystem as a framework to build such a system. It provides react components with out-of-the-box functionalities through libraries such as `@react-three/fiber`, `@react-three/drei` (++), `@react-three/a11y` or `@react-three/postprocessing`. Thus it leverages react hydration capabilities to provide dynamic, flexible and very efficient interfaces.

Use `node`/`pnpm` to start and use project locally. You could like to use `docker compose` to integrate other services with a `Vite` application, manage multiple applications or to build a micro-service architecture. However micro-service architecture depends on complex interconnectivity between components of an ecosystem, thus requires intensive proxying or a service-mesh based architecture. Kubernetes helps to leverage this kind of architecture.

Configuration related to repository or application lifecycle lies on repository root:
- repository configuration (`/.gitignore`, `/.gitattributes`),
- application lifecycle management (`/Makefile`, `/Dockerfile.{dev,prod}`, `/docker-compose.yaml`),
- application configuration (`/package.json`, `/tsconfig*.json`, `/vite.config.ts` and `/.eslintrc.cjs`),
- application entrypoint (`/index.html`).

### `/.github/` directory

- Contains `Github Actions` workflows to build and push application image on registry (here, ghcr.io) on `push/tags` events,
  - pipeline in `/.github/workflows/ci.yaml` (based on `Docker` public actions).

### `/src` directory

- Contains application source code in `*.tsx` format,
  - application code entrypoint (root react element) in `/src/main.tsx`,
  - application main component (app component) in `/src/App.tsx`,
  - application components in `/src/components/**/*.tsx` (such as `@react-three/gltfjsx` components[^5]),
  - internal static assets in `/src/assets/**/*` (such as `*.svg` and `*.glb` 3D models).

### `/public` directory

- Contains public static assets, i.e. statically served to users (contrarly to `/src/assets/` directory, only accessible internally).
  - application favicon (`/public/palm-tree-icon.png`).

### `/dist` directory

- Contains static resources to serve application content in production,
  - HTML and public resources in `/dist/**/*`,
  - javascript and internal assets in `/dist/assets/**/*`.

### `/deploy` directory

- Contains Kubenetes `YAML` manifests to deploy application in production,
  - application manifests are stored in the same repository as the source code,
  - infrastructure manifests live on their own repository-ies,
- Contains sample Kubernetes resources for a deployment,
  - a clusterIP service,
  - a secured ingress serving one host,
  - a deployment for a pod with one container based on image hosted on private registry.

## Toolchain

## Roadmap

- Add animation to `*.glb` 3D models.
- Migrate from `vite` to `nextjs` (from a single-page application to a hybrid server-sided renderer)?

## Author

[@gmarcha](https://github.com/gmarcha)

## License

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

[^1]: `sudo apt install make`, `sudo dnf install make`,  or building from [source](https://ftp.gnu.org/gnu/make/) for non-managed distros.
[^2]: [follow instructions](https://github.com/nodesource/distributions) depending on your os-family, then install pnpm globally with node default package manager, npm: `npm -g i pnpm`.
[^3]: [follow instructions](https://docs.docker.com/engine/install/#server) for server (and not desktop) version depending on your distribution, then [follow post-install instructions](https://docs.docker.com/engine/install/linux-postinstall/).
[^4]: [install kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/), [install k3d](https://k3d.io/v5.5.2/#installation) to run a local cluster with docker ([configure k3d](https://k3d.io/v5.5.2/usage/exposing_services/)).
[^5]: use `npx gltfjsx -ts <model.glb>` to create TSX component (with shadows) from gltf model.
