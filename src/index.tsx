// TODO Fix filter options (remove values from options).
// Doesn't work, because AutoComplete has a cache for the async.
import * as React from 'react';
import List from 'hire-forms-list';
import Autocomplete from 'hire-forms-autocomplete';

interface IAutocompleteListProps {
	renderListBeforeAutocomplete: boolean;
}

const autocomplete = (props) =>
	<Autocomplete
		{...props}
		onChange={(value) => props.onChange(props.values.concat(value))}
		onInputChange={props.onInputChange}
	/>;

const list = (props) =>
	<List
		{...props}
		mutable
		onChange={(values) => props.onChange(values)}
	/>;

const AutocompleteList: React.Component = (props: IAutocompleteListProps) =>
	<div className="hire-forms-autocomplete-list">
		{props.renderListBeforeAutocomplete ? list(props) : autocomplete(props)}
		{props.renderListBeforeAutocomplete ? autocomplete(props) : list(props)}
	</div>;

AutocompleteList.defaultProps = {
	renderListBeforeAutocomplete: false,
};

export default AutocompleteList;
