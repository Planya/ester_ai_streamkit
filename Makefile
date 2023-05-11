# устанавливаем зависимости
install:
	yarn

# хук для быстрого коммита
commit:
	npm version patch --no-git-tag-version && \
	git add . && \
	git commit -am "${m}" && \
	git push origin main

# запускаем в дев моде
dev: install
	yarn dev

# билдим в прод
build: install
	yarn build