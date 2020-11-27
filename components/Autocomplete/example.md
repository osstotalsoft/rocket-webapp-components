##### Copy this snapshot in the overview panel
 ```js
import React, { useState } from 'react';
import Autocomplete from '@bit/totalsoft_oss.react-mui.autocomplete';
import curry from 'lodash.curry';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const arr = [{ id: '1', name: 'Approved' }, { id: '2', name: 'Cancelled' }]

const App = () => {
	const toggleClearable = () => setClearable(!isClearable);
	const toggleDisabled = () => setDisabled(!isDisabled);
	const toggleSearchable = () => setSearchable(!isSearchable);
	const toggleMultiSelection = () => setMultiSelection(!isMultiSelection);

	const [localFilters, setLocalFilters] = useState(' ');
	const handleFilterPropertyChange = curry((prop, value) =>
		setLocalFilters(prevFilters => ({ ...prevFilters, [prop]: value }))
	);

	const [isClearable, setClearable] = useState(false);
	const [isDisabled, setDisabled] = useState(false);
	const [isSearchable, setSearchable] = useState(false);
	const [isMultiSelection, setMultiSelection] = useState(false);

	return (
		<>
			<div style={{ "minWidth": "300px", marginLeft: "10%" }}>
				<Autocomplete
					label={"Status"}
					options={arr}
					simpleValue
					disabled={isDisabled}
					isSearchable={isSearchable}
					isClearable={isClearable}
					value={localFilters.id || ''}
					onChange={handleFilterPropertyChange('id')}
					isMultiSelection={isMultiSelection}
				/>
			</div>

			<div style={{ display: "block", marginLeft: "10%" }}>
				<FormControlLabel
					control={
						<Checkbox
							checked={isClearable}
							onChange={toggleClearable}
						/>
					}
					label="Clearable"
				/>

				<FormControlLabel
					control={
						<Checkbox
							checked={isSearchable}
							onChange={toggleSearchable}
						/>
					}
					label="Searchable"
				/>

				<FormControlLabel
					control={
						<Checkbox
							checked={isDisabled}
							onChange={toggleDisabled}
						/>
					}
					label="Disabled"
				/>

				<FormControlLabel
					control={
						<Checkbox
							checked={isMultiSelection}
							onChange={toggleMultiSelection}
						/>
					}
					label="Multiselection"
				/>
			</div>
		</>
	)
}

export default (
	<App />
)
 ```


 ##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import Autocomplete from '@bit/totalsoft_oss.react-mui.autocomplete';
import Typography from '@material-ui/core/Typography';

const colourOptions = [
	{ id: 'ocean', name: 'Ocean' },
	{ id: 'blue', name: 'Blue' },
	{ id: 'purple', name: 'Purple' },
	{ id: 'red', name: 'Red' },
	{ id: 'orange', name: 'Orange' },
	{ id: 'yellow', name: 'Yellow' },
	{ id: 'green', name: 'Green' },
	{ id: 'forest', name: 'Forest' },
	{ id: 'slate', name: 'Slate' },
	{ id: 'silver', name: 'Silver' }
];

const flavourOptions = [
	{ id: 'vanilla', name: 'Vanilla' },
	{ id: 'chocolate', name: 'Chocolate' },
	{ id: 'strawberry', name: 'Strawberry' },
	{ id: 'salted-caramel', name: 'Salted Caramel' },
];

const groupedOptions = [
	{
		label: 'Colours',
		options: colourOptions,
	},
	{
		label: 'Flavours',
		options: flavourOptions,
	},
];

const groupStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
};
const groupBadgeStyles = {
	backgroundColor: '#EBECF0',
	borderRadius: '2em',
	color: '#172B4D',
	display: 'inline-block',
	fontSize: 12,
	fontWeight: 'normal',
	lineHeight: '1',
	minWidth: 1,
	padding: '0.16666666666667em 0.5em',
	textAlign: 'center',
};

const formatGroupLabel = data => (
	<div style={groupStyles}>
		<span>{data.label}</span>
		<span style={groupBadgeStyles}>{data.options.length}</span>
	</div>
);

const App = () => {
	return (
		<div style={{ "minWidth": "300px", marginLeft: "10%" }}>
			<Typography variant="h4" component="h2" gutterBottom>
				Grouped
      </Typography>

			<Autocomplete
				label={"Color"}
				options={groupedOptions}
				formatGroupLabel={formatGroupLabel}
			/>
		</div>
	)
}

export default (
	<App />
)
 ```


  ##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import Autocomplete from '@bit/totalsoft_oss.react-mui.autocomplete';
import Typography from '@material-ui/core/Typography';

const colourOptions = [
	{ id: 'ocean', name: 'Ocean' },
	{ id: 'blue', name: 'Blue' },
	{ id: 'purple', name: 'Purple' },
	{ id: 'red', name: 'Red' },
	{ id: 'orange', name: 'Orange' },
	{ id: 'yellow', name: 'Yellow' },
	{ id: 'green', name: 'Green' },
	{ id: 'forest', name: 'Forest' },
	{ id: 'slate', name: 'Slate' },
	{ id: 'silver', name: 'Silver' }
];

const filterColors = inputValue => {
	return colourOptions.filter(i =>
		i.name.toLowerCase().includes(inputValue.toLowerCase())
	);
};

const promiseOptions = inputValue =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(filterColors(inputValue));
		}, 1000);
	});

const App = () => {
	return (
		<div style={{ "minWidth": "300px", marginLeft: "10%" }}>
			<Typography variant="h4" component="h2" gutterBottom>
				Async
      </Typography>

			<Typography component="h2" gutterBottom>
				The loadOptions prop allows users to resolve from a returned promise
      </Typography>

			<Autocomplete
				label={"Color"}
				loadOptions={promiseOptions}
				isSearchable
				isClearable
				defaultOptions
			/>
		</div>
	)
}

export default (
	<App />
)
 ```


   ##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import Autocomplete from '@bit/totalsoft_oss.react-mui.autocomplete';
import Typography from '@material-ui/core/Typography';

const colourOptions = [
	{ id: 'ocean', name: 'Ocean' },
	{ id: 'blue', name: 'Blue' },
	{ id: 'purple', name: 'Purple' },
	{ id: 'red', name: 'Red' },
	{ id: 'orange', name: 'Orange' },
	{ id: 'yellow', name: 'Yellow' },
	{ id: 'green', name: 'Green' },
	{ id: 'forest', name: 'Forest' },
	{ id: 'slate', name: 'Slate' },
	{ id: 'silver', name: 'Silver' }
];

const filterColors = inputValue => {
	return colourOptions.filter(i =>
		i.name.toLowerCase().includes(inputValue.toLowerCase())
	);
};

const promiseOptions = inputValue =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(filterColors(inputValue));
		}, 1000);
	});

const App = () => {
	return (
		<div style={{ "minWidth": "300px", marginLeft: "10%" }}>
			<Typography variant="h4" component="h2" gutterBottom>
				Async Creatable
      </Typography>

			<Autocomplete
				label={"Color"}
				loadOptions={promiseOptions}
				isSearchable
				isClearable
				defaultOptions
				creatable
				createdLabel={"Create option "}
			/>
		</div>
	)
}

export default (
	<App />
)
 ```