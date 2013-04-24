EPM?=~/bin/epm

DEPS=backbone underscore bootstrap jquery requirejs

all: deps $(DEPS)

deps:
	$(EPM) deps sync

$(DEPS): ;

jquery:
	$(foreach target, $(wildcard vendor/js/jquery/*), \
               (cd $(target) && make jquery))

bootstrap:
	$(foreach target, $(wildcard vendor/css/bootstrap/*), \
               (cd $(target) && make))

