ENV ?= dev
COMPOSE ?= docker-compose.yaml
KUBECONFIG ?= $(HOME)/.kube/config
NS ?= default
OUT ?= wide

DOCKER := docker compose -f $(COMPOSE) --profile $(ENV)
KUBECTL := kubectl --kubeconfig $(KUBECONFIG) -n $(NS)
TYPE := type > /dev/null
YQ := docker run -i --rm -v $(PWD):/workdir mikefarah/yq

# Common rules

all: help

help:
	@ echo "Usage: make <target>"
	@ echo ""
	@ echo "Node targets:"
	@ echo "  node.all"
	@ echo "  node.install"
	@ echo "  node.dev"
	@ echo "  node.build"
	@ echo "  node.start"
	@ echo ""
	@ echo "Docker targets:"
	@ echo "  docker.all"
	@ echo "  docker.clean"
	@ echo "  docker.build"
	@ echo "  docker.pull"
	@ echo "  docker.up"
	@ echo "  docker.down"
	@ echo "  docker.down.images"
	@ echo "  docker.down.volumes"
	@ echo "  docker.ps"
	@ echo "  docker.top"
	@ echo "  docker.events"
	@ echo "  docker.logs"
	@ echo "  docker.exec"
	@ echo "  docker.cp.from"
	@ echo "  docker.cp.to"
	@ echo ""
	@ echo "Kubernetes targets:"
	@ echo "  k8s.apply"
	@ echo "  k8s.delete"
	@ echo "  k8s.get"
	@ echo "  k8s.describe"
	@ echo "  k8s.logs"
	
# Node rules

## Node orchestration rules
## - manage node application lifecycle.

node.all: node.install node.dev

node.install:
	pnpm i

node.dev:
	pnpm dev

node.build:
	pnpm build

node.start:
	pnpm preview

# Docker compose rules

## Docker compose orchestration rules
## - manage docker containers lifecycle.

docker.all: docker.build docker.pull docker.up

docker.clean: docker.down.images # docker.down.volumes
# docker.clean: docker.down.images docker.down.volumes

docker.build:
	$(DOCKER) build $(SVC)

docker.pull:
	$(DOCKER) pull $(SVC)

docker.up:
	$(DOCKER) up -d --remove-orphans $(SVC)

docker.down:
	$(DOCKER) down $(SVC)

docker.down.images:
	$(DOCKER) down --rmi all $(SVC)

docker.down.volumes:
	$(DOCKER) down --volumes $(SVC)

## Docker compose monitoring rules
## - monitor docker containers status, processes, events, logs.

docker.ps:
	$(DOCKER) ps -a --format json $(SVC) | $(YQ) -P

docker.top:
	$(DOCKER) top $(SVC)

docker.events:
	$(DOCKER) events --json $(SVC) | $(YQ) -P

docker.logs:
ifeq ($(SVC),)
	$(DOCKER) logs -tf
else
	$(DOCKER) logs -tf --no-log-prefix $(SVC)
endif

## Docker compose misc rules
## - execute command or copy files inside docker containers.

docker.exec:
ifeq ($(or $(SVC), $(CMD)),)
	@ echo "Usage: make docker.exec SVC=<service> CMD=<command>"
else
	$(DOCKER) exec $(SVC) $(CMD)
endif

docker.cp.from:
ifeq ($(or $(SVC), $(SRC), $(DST)),)
	@ echo "Usage: make docker.cp SVC=<service> SRC=<source> DST=<destination>"
else
	$(DOCKER) cp -L $(SVC):$(SRC) $(DST)
endif

docker.cp.to:
ifeq ($(or $(SVC), $(SRC), $(DST)),)
	@ echo "Usage: make docker.cp SVC=<service> SRC=<source> DST=<destination>"
else
	$(DOCKER) cp -L $(SRC) $(SVC):$(DST)
endif

# Kubernetes rules

## Kubernetes orchestration rules

k8s.apply:
	$(KUBECTL) apply -k deploy/

k8s.delete:
	$(KUBECTL) delete -k deploy/

## Kubernetes monitoring rules

k8s.get:
	$(KUBECTL) get -w -k deploy/ -o $(OUT)

k8s.logs:
	$(KUBECTL) logs -f -k deploy/

k8s.describe:
	$(KUBECTL) describe -k deploy/
