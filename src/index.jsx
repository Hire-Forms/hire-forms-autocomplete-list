// TODO Fix filter options (remove values from options).
// Doesn't work, because AutoComplete has a cache for the async.
import React, { PropTypes } from 'react';
import List from 'hire-forms-list';
import Autocomplete from 'hire-forms-autocomplete';
import { arrayOfKeyValueMaps } from 'hire-forms-prop-types';

const AutocompleteList = (props) => {
	const autocomplete = (
		<Autocomplete
			{...props}
			onChange={(value) =>
				props.onChange(props.values.concat(value))
			}
		/>
	);

	const list = (
		<List
			{...props}
			mutable
			onChange={(values) => props.onChange(values)}
		/>
	);

	return (
		<div className="hire-forms-autocomplete-list">
			{props.renderListBeforeAutocomplete ? list : autocomplete}
			{props.renderListBeforeAutocomplete ? autocomplete : list}
		</div>
	);
};

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
