// TODO Fix filter options (remove values from options).
// Doesn't work, because AutoComplete has a cache for the async.
import * as React from 'react';
import List, {IListProps} from 'hire-forms-list';
import Autocomplete, {IAutocompleteProps} from 'hire-forms-autocomplete';

interface IAutocompleteListProps {
	listBeforeAutocomplete?: boolean;
}

type ICombined = IAutocompleteListProps & IAutocompleteProps & IListProps;

const autocomplete = (props: ICombined) =>
	<Autocomplete
		{...props}
		onChange={(value) => props.onChange(props.values.concat(value))}
		onInputChange={props.onInputChange}
	/>;

const list = (props: ICombined) =>
	<List
		{...props}
		mutable
		onChange={(values) => props.onChange(values)}
	/>;

const AutocompleteList: React.SFC<ICombined> = (props) =>
	<div className="hire-forms-autocomplete-list">
		{props.listBeforeAutocomplete ? list(props) : autocomplete(props)}
		{props.listBeforeAutocomplete ? autocomplete(props) : list(props)}
	</div>;

export default AutocompleteList;
