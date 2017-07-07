"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const hire_forms_list_1 = require("hire-forms-list");
const hire_forms_autocomplete_1 = require("hire-forms-autocomplete");
const autocomplete = (props) => React.createElement(hire_forms_autocomplete_1.default, Object.assign({}, props, { onChange: (value) => props.onChange(props.values.concat(value)), onInputChange: props.onInputChange }));
const list = (props) => React.createElement(hire_forms_list_1.default, Object.assign({}, props, { mutable: true, onChange: (values) => props.onChange(values) }));
const AutocompleteList = (props) => React.createElement("div", { className: "hire-forms-autocomplete-list" },
    props.renderListBeforeAutocomplete ? list(props) : autocomplete(props),
    props.renderListBeforeAutocomplete ? autocomplete(props) : list(props));
exports.default = AutocompleteList;
