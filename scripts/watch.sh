#!/bin/sh

node_modules/.bin/watchify src/index.jsx \
	--detect-globals false \
	--extension=.jsx \
	--external react \
	--external immutable \
	--outfile 'derequire > build/index.js' \
	--standalone HireFormsAutocompleteList \
	--transform [ babelify --presets [ es2015 react ] ] \
	--verbose
