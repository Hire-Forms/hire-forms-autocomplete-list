// TODO Fix filter options (remove values from options). Doesn't work, because AutoComplete has a cache for the async.
import React from "react";

import List from "hire-forms-list";
import Autocomplete from "hire-forms-autocomplete";

import {arrayOfKeyValueMaps} from "hire-forms-prop-types";

class AutocompleteList extends React.Component {
	handleEditableListChange(values) {
		this.props.onChange(values);
	}

	handleAutocompleteChange(value) {
		this.props.values.push(value);
		this.props.onChange(this.props.values);

		// this.refs.autocomplete.clear();
	}

	render() {
		// console.log(this.props.values);
		// let options = this.props.options.filter((option) => {
		// 	return !this.props.values.contains(option);
		// });

		return (
			<div className="hire-forms-autocomplete-list">
				<List
					editable={false}
					onChange={this.handleEditableListChange.bind(this)}
					values={this.props.values} />
				<Autocomplete
					async={this.props.async}
					onChange={this.handleAutocompleteChange.bind(this)}
					options={this.props.options}
					placeholder={this.props.placeholder}
					ref="autocomplete" />
			</div>
		);
	}
}

AutocompleteList.defaultProps = {
	options: [],
	ordered: false,
	values: []
};
AutocompleteList.propTypes = {
	async: React.PropTypes.func,
	onChange: React.PropTypes.func.isRequired,
	options: arrayOfKeyValueMaps,
	ordered: React.PropTypes.bool,
	placeholder: React.PropTypes.string,
	values: arrayOfKeyValueMaps
};

export default AutocompleteList;