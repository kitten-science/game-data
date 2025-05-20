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
	npm exec -- biome check --write --no-errors-on-unmatched
	npm pkg fix

lint: node_modules
	npm exec -- biome check .
	npm exec -- tsc --noEmit

test: run

run: output kittensgame
	@cd lib; node ../output/main.js ../kittensgame

lib: lib/master
lib/master: output kittensgame
	@mkdir -p lib/master || true
	cd lib/master; node ../../output/main.js ../../kittensgame
lib/alpha: output kittensgame
	@mkdir -p lib/alpha || true
	cd lib/alpha; node ../../output/main.js ../../kittensgame
lib/beta: output kittensgame
	@mkdir -p lib/beta || true
	cd lib/beta; node ../../output/main.js ../../kittensgame

node_modules:
	npm install

output: node_modules kittensgame
	node build.js

kittensgame:
	git clone --branch "master" --single-branch "https://github.com/nuclear-unicorn/kittensgame.git"
