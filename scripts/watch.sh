#!/bin/sh

node_modules/.bin/watchify src/index.jsx \
	--detect-globals false \
	--extension=.jsx \
	--external react \
	--external immutable \
	--outfile 'derequire > build/index.js' \
	--standalone HireFormsAutocompleteList \
	--transform [ babelify --plugins object-assign ] \
	--verbose