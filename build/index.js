(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsAutocompleteList = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsAutocomplete = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsInput = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var Input = (function (_React$Component) {
	_inherits(Input, _React$Component);

	function Input(props) {
		_classCallCheck(this, Input);

		_get(Object.getPrototypeOf(Input.prototype), "constructor", this).call(this, props);

		this.state = {
			valid: true,
			invalidMessage: null
		};
	}

	_createClass(Input, [{
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (this.props.value === nextProps.value) {
				return;
			}

			if (nextProps.value === "") {
				if (!this.state.valid) {
					this.setState({
						valid: true,
						invalidMessage: null
					});
				}

				return;
			} else if (this.props.validate) {
				var validator = this.props.validate(nextProps.value);

				this.setState({
					valid: validator.isValid,
					invalidMessage: validator.message
				});

				if (!validator.isValid && this.props.onInvalid) {
					this.props.onInvalid(validator.message, nextProps.value);
				}
			}
		}
	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps, nextState) {
			return this.props.value !== nextProps.value;
		}
	}, {
		key: "handleChange",
		value: function handleChange(ev) {
			this.props.onChange(ev.currentTarget.value, ev);
		}
	}, {
		key: "render",
		value: function render() {
			var invalidMessage = this.state.invalidMessage ? _react2["default"].createElement(
				"div",
				{ className: "hire-forms-invalid-message" },
				this.state.invalidMessage
			) : null;

			return _react2["default"].createElement(
				"div",
				{
					className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }) },
				_react2["default"].createElement("input", {
					onBlur: this.props.onBlur,
					onChange: this.handleChange.bind(this),
					onFocus: this.props.onFocus,
					onKeyDown: this.props.onKeyDown,
					onKeyUp: this.props.onKeyUp,
					placeholder: this.props.placeholder,
					style: this.props.style,
					value: this.props.value }),
				invalidMessage
			);
		}
	}]);

	return Input;
})(_react2["default"].Component);

Input.propTypes = {
	onBlur: _react2["default"].PropTypes.func,
	onChange: _react2["default"].PropTypes.func.isRequired,
	onFocus: _react2["default"].PropTypes.func,
	onInvalid: _react2["default"].PropTypes.func,
	onKeyDown: _react2["default"].PropTypes.func,
	onKeyUp: _react2["default"].PropTypes.func,
	placeholder: _react2["default"].PropTypes.string,
	style: _react2["default"].PropTypes.object,
	valid: _react2["default"].PropTypes.bool,
	validate: _react2["default"].PropTypes.func,
	value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
};

Input.defaultProps = {
	value: ""
};

exports["default"] = Input;
module.exports = exports["default"];

},{"classnames":"classnames","react":"react"}]},{},[1])(1)
});
},{}],2:[function(_dereq_,module,exports){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.node_modules||(g.node_modules = {}));g=(g.binderequirebuildindex||(g.binderequirebuildindex = {}));g.js = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsOptions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var keyValueMap = _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
});

exports.keyValueMap = keyValueMap;
// ARRAY OF

var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

exports.arrayOfStrings = arrayOfStrings;
var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

exports.arrayOfElements = arrayOfElements;
// OR

var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

exports.stringOrKeyValueMap = stringOrKeyValueMap;
var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;

},{"react":"react"}]},{},[1])(1)
});
},{"react":"react"}],2:[function(_dereq_,module,exports){

/*
 * @param {Array} list
 * @returns {Boolean}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isListOfStrings = isListOfStrings;
exports.isKeyValueMap = isKeyValueMap;
exports.castArray = castArray;
exports.castKeyValue = castKeyValue;
exports.castKeyValueArray = castKeyValueArray;

function isListOfStrings(list) {
  if (!Array.isArray(list) || !list.length) {
    return false;
  }

  return list.every(function (item) {
    return typeof item === "string";
  });
}

/*
 * @param {Object} map
 * @returns {Boolean}
 */

function isKeyValueMap(map) {
  if (map == null) {
    return false;
  }

  return map.hasOwnProperty("key") && map.hasOwnProperty("value");
}

/*
 * Always return an array.
 *
 * @param {String|Array} arr
 * @returns {Array}
 */

function castArray(arr) {
  return Array.isArray(arr) ? arr : [arr];
}

;

/*
 * Always return a key/value map.
 *
 * @param {Number|String|Boolean|Object} item
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValue(item) {
  return isKeyValueMap(item) ? item : {
    key: item,
    value: item
  };
}

/*
 * Always return an array of key/value maps.
 *
 * @param {Number|String|Boolean|Array|Object} list
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValueArray(list) {
  list = castArray(list);

  return list.map(castKeyValue);
}

},{}],3:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = _dereq_('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _hireFormsPropTypes = _dereq_('hire-forms-prop-types');

var _hireFormsUtils = _dereq_('hire-forms-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               TODO move listitem to seperate component (so we don't have to store data-key
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               and data-value as attributes)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               TODO Move util functions to seperate module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var hasKeyValue = function hasKeyValue(list, item) {
	return list.filter(function (li) {
		return li.key === item.key;
	}).length > 0;
};

/**
 * Options are rendered beneath the autocomplete and select components.
 *
 * @class
 * @extends React.Component
 */

var Options = function (_React$Component) {
	_inherits(Options, _React$Component);

	function Options() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, Options);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Options)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (ev) {
			_this.props.onChange(_this.getOptionData(ev.currentTarget));
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Options, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var node = this.refs.options;

			if (node) {
				node.style.zIndex = 1000;
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			var node = this.refs.options;
			if (node) {
				node.style.zIndex = 0;
			}
		}

		/**
   * Get the key (id) and value (display name) of an option DOM element.
   *
   * @param {Object} el - Option DOM element
   * @returns {Object}
   */

	}, {
		key: 'getOptionData',
		value: function getOptionData(el) {
			return {
				key: el.getAttribute('data-key'),
				value: el.getAttribute('data-value')
			};
		}
	}, {
		key: 'highlight',


		/*
   * highlight the currently highlighted option.
   *
   * @param {Object} target An HTMLElement or event object
   * @param {String} className Name of the highlight class
   */
		value: function highlight(target, className) {
			// Check if target is an event object.
			if (target.hasOwnProperty('currentTarget')) {
				target = target.currentTarget;
			}

			target.classList.add(className);
		}

		/**
   * Unhighlight the currently highlighted option.
   *
   * @param {String} className Name of the highlight class
   * @return {Object} The unhighlighted HTMLElement
   */

	}, {
		key: 'unhighlight',
		value: function unhighlight(className) {
			var el = void 0;
			var node = this.refs.options;

			if (node) {
				el = node.querySelector('li.' + className);

				if (el) {
					el.classList.remove(className);
				}
			}

			return el;
		}
	}, {
		key: 'highlightPrev',
		value: function highlightPrev() {
			var prev = void 0;
			var current = this.unhighlight(this.props.highlightClass);

			if (current) {
				prev = current.previousElementSibling;
			}

			// If current and prev aren't found, start at the top.
			// Current is not found if there is no list item highlighted.
			// Prev is not found if the first list item is highlighted.
			if (!prev) {
				prev = this.refs.options.lastChild;
			}

			this.highlight(prev, this.props.highlightClass);
		}
	}, {
		key: 'highlightNext',
		value: function highlightNext() {
			var next = void 0;
			var current = this.unhighlight(this.props.highlightClass);

			if (current) {
				next = current.nextElementSibling;
			}

			// If current and next aren't found, start at the top.
			// Current is not found if there is no list item highlighted.
			// Next is not found if the last list item is highlighted.
			if (!next) {
				next = this.refs.options.firstChild;
			}

			this.highlight(next, this.props.highlightClass);
		}
	}, {
		key: 'select',
		value: function select() {
			var current = this.unhighlight(this.props.highlightClass);

			if (current) {
				this.props.onChange(this.getOptionData(current));
			}
		}

		/**
   * Sort values on relevance. A result is more relevant when the search
   * query is more at the beginning of the string. In other words:
   * String.indexOf(props.query): lower is better.
   * @param {Array<Object>} value An array of key/value maps
   * @param {String} query A search query
   * @returns {Array<Object>} Sorted values on relevance
   */

	}, {
		key: 'sortRelevance',
		value: function sortRelevance(values, query) {
			return values.sort(function (a, b) {
				a = a.value.toLowerCase();
				b = b.value.toLowerCase();

				var indexA = a.indexOf(query);
				var indexB = b.indexOf(query);

				if (indexA > indexB) {
					return 1;
				}

				if (indexA < indexB) {
					return -1;
				}

				if (indexA === indexB) {
					if (a > b) {
						return 1;
					}

					if (a < b) {
						return -1;
					}
				}

				return 0;
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (this.props.values.length === 0 && this.props.children == null) {
				return null;
			}

			var values = this.props.sort || this.props.sortRelevance && this.props.query !== '' ? this.sortRelevance(this.props.values, this.props.querySelector) : this.props.values;

			var listitems = values.map(function (data, index) {
				var displayValue = data.value;

				if (_this2.props.query.length) {
					var re = new RegExp(_this2.props.query, 'ig');
					displayValue = data.value.replace(re, '<span class="highlight">$&</span>');
				}

				return _react2.default.createElement('li', {
					className: (0, _classnames2.default)({
						'hire-forms-option': true,
						selected: hasKeyValue((0, _hireFormsUtils.castArray)(_this2.props.value), data)
					}),
					dangerouslySetInnerHTML: { __html: displayValue },
					'data-key': data.key,
					'data-value': data.value,
					key: index,
					onClick: _this2.handleClick
				});
			});

			var children = this.props.children != null ? _react2.default.createElement(
				'li',
				null,
				this.props.children
			) : null;

			return _react2.default.createElement(
				'ul',
				{
					className: 'hire-options',
					ref: 'options'
				},
				children,
				listitems
			);
		}
	}]);

	return Options;
}(_react2.default.Component);

Options.defaultProps = {
	highlightClass: 'highlight',
	query: '',
	sort: false,
	sortRelevance: true,
	value: { key: '', value: '' },
	values: []
};

Options.propTypes = {
	children: _react2.default.PropTypes.node,
	highlightClass: _react2.default.PropTypes.string,
	onChange: _react2.default.PropTypes.func.isRequired,
	query: _react2.default.PropTypes.string,
	querySelector: _react2.default.PropTypes.string,
	sort: _react2.default.PropTypes.bool,
	sortRelevance: _react2.default.PropTypes.bool,
	value: _hireFormsPropTypes.keyValueMapOrArrayOfKeyValueMaps,
	values: _hireFormsPropTypes.arrayOfKeyValueMaps
};

exports.default = Options;

},{"classnames":"classnames","hire-forms-prop-types":1,"hire-forms-utils":2,"react":"react"}]},{},[3])(3)
});
},{"classnames":"classnames","hire-forms-prop-types":3,"hire-forms-utils":5,"react":"react"}],3:[function(_dereq_,module,exports){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsOptions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var keyValueMap = _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
});

exports.keyValueMap = keyValueMap;
// ARRAY OF

var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

exports.arrayOfStrings = arrayOfStrings;
var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

exports.arrayOfElements = arrayOfElements;
// OR

var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

exports.stringOrKeyValueMap = stringOrKeyValueMap;
var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;

},{"react":"react"}]},{},[1])(1)
});
},{"react":"react"}],4:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var keyValueMap = _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
});

exports.keyValueMap = keyValueMap;
// ARRAY OF

var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

exports.arrayOfStrings = arrayOfStrings;
var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

exports.arrayOfElements = arrayOfElements;
// OR

var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

exports.stringOrKeyValueMap = stringOrKeyValueMap;
var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;

},{"react":"react"}],5:[function(_dereq_,module,exports){

/*
 * @param {Array} list
 * @returns {Boolean}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isListOfStrings = isListOfStrings;
exports.isKeyValueMap = isKeyValueMap;
exports.castArray = castArray;
exports.castKeyValue = castKeyValue;
exports.castKeyValueArray = castKeyValueArray;

function isListOfStrings(list) {
  if (!Array.isArray(list) || !list.length) {
    return false;
  }

  return list.every(function (item) {
    return typeof item === "string";
  });
}

/*
 * @param {Object} map
 * @returns {Boolean}
 */

function isKeyValueMap(map) {
  if (map == null) {
    return false;
  }

  return map.hasOwnProperty("key") && map.hasOwnProperty("value");
}

/*
 * Always return an array.
 *
 * @param {String|Array} arr
 * @returns {Array}
 */

function castArray(arr) {
  return Array.isArray(arr) ? arr : [arr];
}

;

/*
 * Always return a key/value map.
 *
 * @param {Number|String|Boolean|Object} item
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValue(item) {
  return isKeyValueMap(item) ? item : {
    key: item,
    value: item
  };
}

/*
 * Always return an array of key/value maps.
 *
 * @param {Number|String|Boolean|Array|Object} list
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValueArray(list) {
  list = castArray(list);

  return list.map(castKeyValue);
}

},{}],6:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = _dereq_('react');

var _react2 = _interopRequireDefault(_react);

var _hireFormsInput = _dereq_('hire-forms-input');

var _hireFormsInput2 = _interopRequireDefault(_hireFormsInput);

var _hireFormsOptions = _dereq_('hire-forms-options');

var _hireFormsOptions2 = _interopRequireDefault(_hireFormsOptions);

var _hireFormsPropTypes = _dereq_('hire-forms-prop-types');

var _hireFormsUtils = _dereq_('hire-forms-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Rebuild build


var Autocomplete = function (_React$Component) {
	_inherits(Autocomplete, _React$Component);

	function Autocomplete(props) {
		_classCallCheck(this, Autocomplete);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Autocomplete).call(this, props));

		_this.cache = {};

		_this.state = {
			options: [],
			query: props.value.value
		};
		return _this;
	}

	_createClass(Autocomplete, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				query: nextProps.value.value,
				options: []
			});
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(inputValue) {
			// Return empty options if inputValue length is beneath a treshold.
			if (inputValue.length < this.props.minLength) {
				return this.setState({
					query: inputValue,
					options: []
				});
			}

			// Return cache if inputValue is found in the cache.
			if (this.cache.hasOwnProperty(inputValue)) {
				return this.setState({
					query: inputValue,
					options: this.cache[inputValue]
				});
			}

			if (this.props.async == null) {
				this.filter(inputValue);
			} else {
				this.filterAsync(inputValue);
			}
		}
	}, {
		key: 'filterAsync',
		value: function filterAsync(inputValue) {
			this.setState({ 'query': inputValue });

			var done = function done(response) {
				// Add the options to the cache.
				this.cache[inputValue] = response;

				// Get the cache from the current (!!!) inputValue. The results trail behind
				// the user typing, so we have to pass the options of the current inputValue,
				// not the options of the inputValue of the fetch.
				var state = this.cache.hasOwnProperty(this.state.query) ? { options: this.cache[this.state.query] } : { options: [] };

				this.setState(state);
			};

			this.props.async(inputValue, done.bind(this));
		}
	}, {
		key: 'filter',
		value: function filter(inputValue) {
			this.cache[inputValue] = inputValue === '' ? [] : this.props.options.filter(function (value) {
				if ((0, _hireFormsUtils.isKeyValueMap)(value)) {
					value = value.value;
				}

				return value.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
			});

			this.setState({
				query: inputValue,
				options: this.cache[inputValue]
			});
		}
	}, {
		key: 'handleInputKeyDown',
		value: function handleInputKeyDown(ev) {
			// Escape
			if (ev.keyCode === 27) {
				this.setState({
					options: [],
					query: ''
				});
			}

			if (this.refs.options == null) {
				return;
			}

			// Up
			if (ev.keyCode === 38) {
				this.refs.options.highlightPrev();
			}

			// Down
			if (ev.keyCode === 40) {
				this.refs.options.highlightNext();
			}

			// Enter
			if (ev.keyCode === 13) {
				this.refs.options.select();
			}
		}

		/*
   * @param {Object} value Key/value map, ie: {key: 'A', value: 'A'}
   */

	}, {
		key: 'handleOptionsChange',
		value: function handleOptionsChange(value) {
			this.props.onChange(value);
		}
	}, {
		key: 'render',
		value: function render() {
			var options = this.state.options.length !== 0 ? _react2.default.createElement(_hireFormsOptions2.default, {
				onChange: this.handleOptionsChange.bind(this),
				query: this.state.query,
				ref: 'options',
				value: this.props.value,
				values: (0, _hireFormsUtils.castKeyValueArray)(this.state.options) }) : null;

			return _react2.default.createElement(
				'div',
				{
					className: 'hire-forms-autocomplete',
					style: { position: 'relative' } },
				_react2.default.createElement(_hireFormsInput2.default, {
					onChange: this.handleInputChange.bind(this),
					onKeyDown: this.handleInputKeyDown.bind(this),
					placeholder: this.props.placeholder,
					ref: 'input',
					value: this.state.query }),
				this.props.children,
				options
			);
		}
	}]);

	return Autocomplete;
}(_react2.default.Component);

Autocomplete.propTypes = {
	async: _react2.default.PropTypes.func,
	children: _react2.default.PropTypes.element,
	minLength: _react2.default.PropTypes.number,
	onChange: _react2.default.PropTypes.func,
	options: _hireFormsPropTypes.arrayOfKeyValueMaps,
	placeholder: _react2.default.PropTypes.string,
	value: _hireFormsPropTypes.keyValueMap
};

Autocomplete.defaultProps = {
	minLength: 1,
	value: {
		key: '',
		value: ''
	}
};

exports.default = Autocomplete;

},{"hire-forms-input":1,"hire-forms-options":2,"hire-forms-prop-types":4,"hire-forms-utils":5,"react":"react"}]},{},[6])(6)
});
},{}],2:[function(_dereq_,module,exports){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsList = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsInput = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var Input = (function (_React$Component) {
	_inherits(Input, _React$Component);

	function Input(props) {
		_classCallCheck(this, Input);

		_get(Object.getPrototypeOf(Input.prototype), "constructor", this).call(this, props);

		this.state = {
			valid: true,
			invalidMessage: null
		};
	}

	_createClass(Input, [{
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (this.props.value === nextProps.value) {
				return;
			}

			if (nextProps.value === "") {
				if (!this.state.valid) {
					this.setState({
						valid: true,
						invalidMessage: null
					});
				}

				return;
			} else if (this.props.validate) {
				var validator = this.props.validate(nextProps.value);

				this.setState({
					valid: validator.isValid,
					invalidMessage: validator.message
				});

				if (!validator.isValid && this.props.onInvalid) {
					this.props.onInvalid(validator.message, nextProps.value);
				}
			}
		}
	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps, nextState) {
			return this.props.value !== nextProps.value;
		}
	}, {
		key: "handleChange",
		value: function handleChange(ev) {
			this.props.onChange(ev.currentTarget.value, ev);
		}
	}, {
		key: "render",
		value: function render() {
			var invalidMessage = this.state.invalidMessage ? _react2["default"].createElement(
				"div",
				{ className: "hire-forms-invalid-message" },
				this.state.invalidMessage
			) : null;

			return _react2["default"].createElement(
				"div",
				{
					className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }) },
				_react2["default"].createElement("input", {
					onBlur: this.props.onBlur,
					onChange: this.handleChange.bind(this),
					onFocus: this.props.onFocus,
					onKeyDown: this.props.onKeyDown,
					onKeyUp: this.props.onKeyUp,
					placeholder: this.props.placeholder,
					style: this.props.style,
					value: this.props.value }),
				invalidMessage
			);
		}
	}]);

	return Input;
})(_react2["default"].Component);

Input.propTypes = {
	onBlur: _react2["default"].PropTypes.func,
	onChange: _react2["default"].PropTypes.func.isRequired,
	onFocus: _react2["default"].PropTypes.func,
	onInvalid: _react2["default"].PropTypes.func,
	onKeyDown: _react2["default"].PropTypes.func,
	onKeyUp: _react2["default"].PropTypes.func,
	placeholder: _react2["default"].PropTypes.string,
	style: _react2["default"].PropTypes.object,
	valid: _react2["default"].PropTypes.bool,
	validate: _react2["default"].PropTypes.func,
	value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
};

Input.defaultProps = {
	value: ""
};

exports["default"] = Input;
module.exports = exports["default"];

},{"classnames":"classnames","react":"react"}]},{},[1])(1)
});
},{}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var keyValueMap = _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
});

exports.keyValueMap = keyValueMap;
// ARRAY OF

var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

exports.arrayOfStrings = arrayOfStrings;
var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

exports.arrayOfElements = arrayOfElements;
// OR

var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

exports.stringOrKeyValueMap = stringOrKeyValueMap;
var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;

},{"react":"react"}],3:[function(_dereq_,module,exports){

/*
 * @param {Array} list
 * @returns {Boolean}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isListOfStrings = isListOfStrings;
exports.isKeyValueMap = isKeyValueMap;
exports.castArray = castArray;
exports.castKeyValue = castKeyValue;
exports.castKeyValueArray = castKeyValueArray;

function isListOfStrings(list) {
  if (!Array.isArray(list) || !list.length) {
    return false;
  }

  return list.every(function (item) {
    return typeof item === "string";
  });
}

/*
 * @param {Object} map
 * @returns {Boolean}
 */

function isKeyValueMap(map) {
  if (map == null) {
    return false;
  }

  return map.hasOwnProperty("key") && map.hasOwnProperty("value");
}

/*
 * Always return an array.
 *
 * @param {String|Array} arr
 * @returns {Array}
 */

function castArray(arr) {
  return Array.isArray(arr) ? arr : [arr];
}

;

/*
 * Always return a key/value map.
 *
 * @param {Number|String|Boolean|Object} item
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValue(item) {
  return isKeyValueMap(item) ? item : {
    key: item,
    value: item
  };
}

/*
 * Always return an array of key/value maps.
 *
 * @param {Number|String|Boolean|Array|Object} list
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValueArray(list) {
  list = castArray(list);

  return list.map(castKeyValue);
}

},{}],4:[function(_dereq_,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],5:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _listItem = _dereq_("./list-item");

var _listItem2 = _interopRequireDefault(_listItem);

var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

var _hireFormsUtils = _dereq_("hire-forms-utils");

var List = (function (_React$Component) {
	_inherits(List, _React$Component);

	function List(props) {
		_classCallCheck(this, List);

		_get(Object.getPrototypeOf(List.prototype), "constructor", this).call(this, props);

		this.state = {
			editItemIndex: null
		};
	}

	_createClass(List, [{
		key: "handleListItemClick",
		value: function handleListItemClick(index, ev) {
			this.setState({
				editItemIndex: index
			});

			if (this.props.onClick) {
				this.props.onClick(index, ev);
			}
		}
	}, {
		key: "handleListItemChange",
		value: function handleListItemChange(index, newValue) {
			this.setState({ editItemIndex: null });

			this.props.values[index] = newValue;
			this.props.onChange(this.props.values);
		}
	}, {
		key: "handleListItemRemove",
		value: function handleListItemRemove(index) {
			this.setState({ editItemIndex: null });

			this.props.values.splice(index, 1);
			this.props.onChange(this.props.values);
		}
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			var list = this.props.values.map(function (item, index) {
				return _react2["default"].createElement(_listItem2["default"], {
					active: _this.state.editItemIndex === index,
					editable: _this.props.editable,
					key: index,
					mutable: _this.props.mutable,
					onCancel: function () {
						return _this.setState({ editItemIndex: null });
					},
					onChange: _this.handleListItemChange.bind(_this, index),
					onClick: _this.handleListItemClick.bind(_this, index),
					onRemove: _this.handleListItemRemove.bind(_this, index),
					value: (0, _hireFormsUtils.castKeyValue)(item) });
			});

			list = list.length ? this.props.ordered ? _react2["default"].createElement(
				"ol",
				null,
				list
			) : _react2["default"].createElement(
				"ul",
				null,
				list
			) : _react2["default"].createElement(
				"span",
				{ className: "hire-empty-list" },
				"The list is empty"
			);

			return _react2["default"].createElement(
				"div",
				{ className: (0, _classnames2["default"])("hire-forms-list", {
						mutable: this.props.mutable,
						editable: this.props.editable
					}) },
				list
			);
		}
	}]);

	return List;
})(_react2["default"].Component);

List.defaultProps = {
	editable: false,
	ordered: false,
	mutable: false,
	values: []
};

List.propTypes = {
	editable: _react2["default"].PropTypes.bool,
	mutable: _react2["default"].PropTypes.bool,
	onChange: _react2["default"].PropTypes.func,
	onClick: _react2["default"].PropTypes.func,
	options: _hireFormsPropTypes.arrayOfStringsOrArrayOfKeyValueMaps,
	ordered: _react2["default"].PropTypes.bool,
	values: _hireFormsPropTypes.arrayOfStringsOrArrayOfKeyValueMaps
};

exports["default"] = List;
module.exports = exports["default"];

},{"./list-item":6,"classnames":"classnames","hire-forms-prop-types":2,"hire-forms-utils":3,"react":"react"}],6:[function(_dereq_,module,exports){
// TODO merge with static-list/list-item?

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _insertCss = _dereq_("insert-css");

var _insertCss2 = _interopRequireDefault(_insertCss);

var _hireFormsInput = _dereq_("hire-forms-input");

var _hireFormsInput2 = _interopRequireDefault(_hireFormsInput);

var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");


var css = Buffer("CmxpLmhpcmUtZm9ybXMtbGlzdC1pdGVtIGlucHV0LApsaS5oaXJlLWZvcm1zLWxpc3QtaXRlbSBzcGFuLnZhbHVlLApsaS5oaXJlLWZvcm1zLWxpc3QtaXRlbSBidXR0b24ucmVtb3ZlIHsKCWRpc3BsYXk6IGlubGluZS1ibG9jazsKCWJveC1zaXppbmc6IGJvcmRlci1ib3g7Cgl2ZXJ0aWNhbC1hbGlnbjogdG9wOwp9CgpkaXYuaGlyZS1mb3Jtcy1saXN0IGxpLmhpcmUtZm9ybXMtbGlzdC1pdGVtIGlucHV0LApkaXYuaGlyZS1mb3Jtcy1saXN0IGxpLmhpcmUtZm9ybXMtbGlzdC1pdGVtIHNwYW4udmFsdWUgewoJd2lkdGg6IDEwMCUKfQoKZGl2LmhpcmUtZm9ybXMtbGlzdC5tdXRhYmxlIGxpLmhpcmUtZm9ybXMtbGlzdC1pdGVtIGlucHV0LApkaXYuaGlyZS1mb3Jtcy1saXN0Lm11dGFibGUgbGkuaGlyZS1mb3Jtcy1saXN0LWl0ZW0gc3Bhbi52YWx1ZSB7Cgl3aWR0aDogOTAlCn0KCmRpdi5oaXJlLWZvcm1zLWxpc3QuZWRpdGFibGUgbGkuaGlyZS1mb3Jtcy1saXN0LWl0ZW0gc3Bhbi52YWx1ZXsKCWN1cnNvcjogcG9pbnRlcjsKfQoKbGkuaGlyZS1mb3Jtcy1saXN0LWl0ZW0gYnV0dG9uLnJlbW92ZSB7CgljdXJzb3I6IHBvaW50ZXI7CglvcGFjaXR5OiAwOwoJd2lkdGg6IDEwJQp9CgpsaS5oaXJlLWZvcm1zLWxpc3QtaXRlbTpob3ZlciBidXR0b24ucmVtb3ZlIHsKCW9wYWNpdHk6IDE7Cn0K","base64");

if (typeof window !== "undefined" && window.document) {
	(0, _insertCss2["default"])(css, { prepend: true });
}

var ListItem = (function (_React$Component) {
	_inherits(ListItem, _React$Component);

	function ListItem(props) {
		_classCallCheck(this, ListItem);

		_get(Object.getPrototypeOf(ListItem.prototype), "constructor", this).call(this, props);

		this.state = {
			value: props.value.value
		};
	}

	_createClass(ListItem, [{
		key: "componentWillUpdate",
		value: function componentWillUpdate(nextProps, nextState) {
			if (!nextProps.active) {
				nextState.value = nextProps.value.value;
			}
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			if (this.props.active && this.props.editable) {
				var node = this.refs.input;
				node.focus();
				node.value = node.value;
			}
		}
	}, {
		key: "onInputChange",
		value: function onInputChange(value) {
			this.setState({ value: value });
		}
	}, {
		key: "onInputKeyDown",
		value: function onInputKeyDown(ev) {
			// if keyCode is "enter" or "tab"
			if (ev.keyCode === 13 || ev.keyCode === 9) {
				if (this.state.value === this.props.value.value) {
					this.props.onCancel();
				} else {
					this.props.onChange(this.state.value);
				}
			}

			// if keyCode is "escape"
			if (ev.keyCode === 27) {
				this.props.onCancel();
			}
		}
	}, {
		key: "render",
		value: function render() {
			var remove = undefined;

			var el = this.props.active && this.props.editable ? _react2["default"].createElement(_hireFormsInput2["default"], {
				onChange: this.onInputChange.bind(this),
				onKeyDown: this.onInputKeyDown.bind(this),
				ref: "input",
				value: this.state.value }) : _react2["default"].createElement(
				"span",
				{
					className: "value",
					onClick: this.props.onClick.bind(this) },
				this.props.value.value
			);

			if (this.props.mutable) {
				remove = _react2["default"].createElement(
					"button",
					{
						className: "remove",
						onClick: this.props.onRemove },
					"x"
				);
			}

			return _react2["default"].createElement(
				"li",
				{
					className: (0, _classnames2["default"])("hire-forms-list-item", { active: this.props.active }) },
				el,
				remove
			);
		}
	}]);

	return ListItem;
})(_react2["default"].Component);

ListItem.defaultProps = {
	active: false,
	editable: false,
	mutable: false
};

ListItem.propTypes = {
	active: _react2["default"].PropTypes.bool,
	editable: _react2["default"].PropTypes.bool,
	mutable: _react2["default"].PropTypes.bool,
	onCancel: _react2["default"].PropTypes.func,
	onChange: _react2["default"].PropTypes.func,
	onClick: _react2["default"].PropTypes.func,
	onRemove: _react2["default"].PropTypes.func,
	value: _hireFormsPropTypes.keyValueMap
};

exports["default"] = ListItem;
module.exports = exports["default"];

},{"classnames":"classnames","hire-forms-input":1,"hire-forms-prop-types":2,"insert-css":4,"react":"react"}]},{},[5])(5)
});
},{}],3:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var keyValueMap = _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
});

exports.keyValueMap = keyValueMap;
// ARRAY OF

var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

exports.arrayOfStrings = arrayOfStrings;
var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

exports.arrayOfElements = arrayOfElements;
// OR

var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

exports.stringOrKeyValueMap = stringOrKeyValueMap;
var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;

},{"react":"react"}],4:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = _dereq_('react');

var _react2 = _interopRequireDefault(_react);

var _hireFormsList = _dereq_('hire-forms-list');

var _hireFormsList2 = _interopRequireDefault(_hireFormsList);

var _hireFormsAutocomplete = _dereq_('hire-forms-autocomplete');

var _hireFormsAutocomplete2 = _interopRequireDefault(_hireFormsAutocomplete);

var _hireFormsPropTypes = _dereq_('hire-forms-prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // TODO Fix filter options (remove values from options).
// Doesn't work, because AutoComplete has a cache for the async.


var AutocompleteList = function (_React$Component) {
	_inherits(AutocompleteList, _React$Component);

	function AutocompleteList() {
		_classCallCheck(this, AutocompleteList);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AutocompleteList).apply(this, arguments));
	}

	_createClass(AutocompleteList, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var autocomplete = _react2.default.createElement(_hireFormsAutocomplete2.default, {
				async: this.props.async,
				onChange: function onChange(value) {
					return _this2.props.onChange(_this2.props.values.concat(value));
				},
				options: this.props.options,
				placeholder: this.props.placeholder,
				ref: 'autocomplete'
			});

			var list = _react2.default.createElement(_hireFormsList2.default, {
				mutable: true,
				onChange: function onChange(values) {
					return _this2.props.onChange(values);
				},
				ordered: this.props.ordered,
				values: this.props.values
			});

			return _react2.default.createElement(
				'div',
				{ className: 'hire-forms-autocomplete-list' },
				this.props.renderListBeforeAutocomplete ? list : autocomplete,
				this.props.renderListBeforeAutocomplete ? autocomplete : list
			);
		}
	}]);

	return AutocompleteList;
}(_react2.default.Component);

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

},{"hire-forms-autocomplete":1,"hire-forms-list":2,"hire-forms-prop-types":3,"react":"react"}]},{},[4])(4)
});