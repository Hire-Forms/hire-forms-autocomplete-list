// TODO Fix filter options (remove values from options).
// Doesn't work, because AutoComplete has a cache for the async.
import React, { PropTypes } from 'react';
import List from 'hire-forms-list';
import Autocomplete from 'hire-forms-autocomplete';
import { arrayOfKeyValueMaps } from 'hire-forms-prop-types';

class AutocompleteList extends React.Component {
	render() {
		const autocomplete = (
			<Autocomplete
				{...this.props}
				onChange={(value) =>
					this.props.onChange(this.props.values.concat(value))
				}
				ref="autocomplete"
			/>
		);

		const list = (
			<List
				{...this.props}
				mutable
				onChange={(values) => this.props.onChange(values)}
			/>
		);

		return (
			<div className="hire-forms-autocomplete-list">
				{this.props.renderListBeforeAutocomplete ? list : autocomplete}
				{this.props.renderListBeforeAutocomplete ? autocomplete : list}
			</div>
		);
	}
}

AutocompleteList.defaultProps = {
	options: [],
	ordered: false,
	renderListBeforeAutocomplete: false,
	values: [],
};

AutocompleteList.propTypes = {
	async: PropTypes.func,
	onChange: PropTypes.func.isRequired,
	options: arrayOfKeyValueMaps,
	ordered: PropTypes.bool,
	placeholder: PropTypes.string,
	renderListBeforeAutocomplete: PropTypes.bool,
	values: arrayOfKeyValueMaps,
};

export default AutocompleteList;
