// TODO Fix filter options (remove values from options). Doesn't work, because AutoComplete has a cache for the async.
import React, { PropTypes } from 'react';
import List from 'hire-forms-list';
import Autocomplete from 'hire-forms-autocomplete';
import {arrayOfKeyValueMaps} from 'hire-forms-prop-types';

class AutocompleteList extends React.Component {
	handleEditableListChange(values) {
		this.props.onChange(values);
	}

	render() {
		return (
			<div className="hire-forms-autocomplete-list">
				<List
					mutable
					onChange={this.handleEditableListChange.bind(this)}
					ordered={this.props.ordered}
					values={this.props.values} />
				<Autocomplete
					async={this.props.async}
					onChange={(value) =>
						this.props.onChange(this.props.values.concat(value))
					}
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
	async: PropTypes.func,
	onChange: PropTypes.func.isRequired,
	options: arrayOfKeyValueMaps,
	ordered: PropTypes.bool,
	placeholder: PropTypes.string,
	values: arrayOfKeyValueMaps
};

export default AutocompleteList;
