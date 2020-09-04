.PHONY: up down restart rebuild vue yarn set-up-project

cmd=""

up:
	docker-compose up -d

down:
	docker-compose down

restart:
	docker-compose down && docker-compose up -d

rebuild:
	docker-compose down && docker-compose build && docker-compose up -d

vue:
	docker-compose exec nodejs vue $(cmd)

yarn:
	docker-compose exec nodejs yarn $(cmd)

set-up-project:
	docker-compose build
	docker-compose run --rm nodejs yarn install
	docker-compose up -d
