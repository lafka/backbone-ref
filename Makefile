EPM?=~/bin/epm

DEPS=bootstrap jquery

all: deps $(DEPS)

deps:
	$(EPM) deps sync

jquery:
	$(foreach target, $(wildcard vendor/jquery/*), \
               (cd $(target) && npm install && npm install grunt-cli && node_modules/grunt-cli/bin/grunt))

bootstrap:
	$(foreach target, $(wildcard vendor/bootstrap/*), \
               (cd $(target) && npm install && make))
