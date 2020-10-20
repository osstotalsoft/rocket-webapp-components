##### Copy this snapshot in the overview panel
 ```js
import React, { useState } from 'react';
import Autocomplete from '@bit/totalsoft_oss.react-mui.autocomplete';
import curry from 'lodash.curry';

const arr = [{ id: '1', name: 'Approved' }, { id: '2', name: 'Cancelled' }]

const App = () => {
	const [localFilters, setLocalFilters] = useState(' ');
	const handleFilterPropertyChange = curry((prop, value) =>
		setLocalFilters(prevFilters => ({ ...prevFilters, [prop]: value }))
	);

	return (
		<Autocomplete
			label={"Status"}
			options={arr}
			fullWidth
			simpleValue={true}
			isClearable={true}
			value={localFilters.statusId || ''}
			onChange={handleFilterPropertyChange('id')}
		/>
	)
}

export default (
	<App />
)
 ```