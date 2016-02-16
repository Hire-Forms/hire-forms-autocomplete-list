#!/bin/sh

node_modules/.bin/watchify src/index.jsx \
	--detect-globals false \
	--extension=.jsx \
	--external react \
	--external immutable \
	--external react-dom \
	--external classnames \
	--outfile 'derequire > build/index.js' \
	--standalone HireFormsAutocompleteList \
	--transform [ babelify --plugins object-assign ] \
	--verbose