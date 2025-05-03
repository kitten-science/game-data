.PHONY: default build clean docs git-hook pretty lint test run

default: build lib

build: output

clean:
	rm --force --recursive kittensgame node_modules output tsconfig.tsbuildinfo

docs:
	@echo "No documentation included by default."

git-hook:
	echo "make pretty" > .git/hooks/pre-commit; chmod +x .git/hooks/pre-commit

pretty: node_modules
	yarn biome check --write --no-errors-on-unmatched
	npm pkg fix

lint: node_modules
	yarn biome check .
	yarn tsc --noEmit

test: run

run: output kittensgame
	@cd lib; node ../output/main.js ../kittensgame

lib: output kittensgame
	@mkdir lib || true
	cd lib; node ../output/main.js ../kittensgame

node_modules:
	yarn install

output: node_modules kittensgame
	node build.js

kittensgame:
	git clone --branch "master" --single-branch "https://github.com/nuclear-unicorn/kittensgame.git"
