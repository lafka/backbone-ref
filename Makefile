EPM?=~/bin/epm

DEPS=bootstrap jquery

all: deps $(DEPS)

deps:
	$(EPM) deps sync

jquery:
	$(foreach target, $(wildcard vendor/jquery/*), \
               (cd $(target) && make jquery))

bootstrap:
	$(foreach target, $(wildcard vendor/bootstrap/*), \
               (cd $(target) && make))
