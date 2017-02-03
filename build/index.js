'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // TODO Fix filter options (remove values from options).
// Doesn't work, because AutoComplete has a cache for the async.


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hireFormsList = require('hire-forms-list');

var _hireFormsList2 = _interopRequireDefault(_hireFormsList);

var _hireFormsAutocomplete = require('hire-forms-autocomplete');

var _hireFormsAutocomplete2 = _interopRequireDefault(_hireFormsAutocomplete);

var _hireFormsPropTypes = require('hire-forms-prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutocompleteList = function AutocompleteList(props) {
	var autocomplete = _react2.default.createElement(_hireFormsAutocomplete2.default, _extends({}, props, {
		onChange: function onChange(value) {
			return props.onChange(props.values.concat(value));
		}
	}));

	var list = _react2.default.createElement(_hireFormsList2.default, _extends({}, props, {
		mutable: true,
		onChange: function onChange(values) {
			return props.onChange(values);
		}
	}));

	return _react2.default.createElement(
		'div',
		{ className: 'hire-forms-autocomplete-list' },
		props.renderListBeforeAutocomplete ? list : autocomplete,
		props.renderListBeforeAutocomplete ? autocomplete : list
	);
};

AutocompleteList.defaultProps = {
	options: [],
	ordered: false,
	renderListBeforeAutocomplete: false,
	values: []
};

AutocompleteList.propTypes = {
	async: _react.PropTypes.func,
	onChange: _react.PropTypes.func.isRequired,
	options: _hireFormsPropTypes.arrayOfKeyValueMaps,
	ordered: _react.PropTypes.bool,
	placeholder: _react.PropTypes.string,
	renderListBeforeAutocomplete: _react.PropTypes.bool,
	values: _hireFormsPropTypes.arrayOfKeyValueMaps
};

exports.default = AutocompleteList;
