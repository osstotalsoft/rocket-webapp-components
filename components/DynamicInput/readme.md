##### Copy this snapshot in the overview panel
 ```js
import React, { useState } from 'react';
import DynamicInput from '@bit/totalsoft_oss.react-mui.dynamic-input';

const App = () => {
	const [dynamicInputValue, setDynamicInputValue] = useState(null);
	const onDynamicInputChange = onPropertyChange => (_, value) => onPropertyChange(value)
	const handleDynamicPropertyChange = value => setDynamicInputValue(value)

	return (
		<DynamicInput
			label='NumberTextField'
			id={'NumberTextField'}
			controlType={"NUM"}
			onChange={onDynamicInputChange(handleDynamicPropertyChange)}
			value={dynamicInputValue}
			customInputProps={{
				decimalScale: 3,
				fixedDecimalScale: true,
				prefix: '$'
			}}
		/>
	)
}

export default (
	<App />
)
 ```

 ##### Copy this snapshot in the overview panel
 ```js
import React, { useState } from 'react';
import DynamicInput from '@bit/totalsoft_oss.react-mui.dynamic-input';

const App = () => {
	const [value, setValue] = useState(null);
	const onDynamicInputChange = onPropertyChange => (_, value) => onPropertyChange(value)
	const handleDynamicPropertyChange = value => setValue(value)

	return (
		<DynamicInput
			label='TextField'
			id={'TextField'}
			controlType={"STR"}
			onChange={onDynamicInputChange(handleDynamicPropertyChange)}
			value={value}
		/>
	)
}

export default (
	<App />
)
 ```

 
 ##### Copy this snapshot in the overview panel
 ```js
import React, { useState } from 'react';
import DynamicInput from '@bit/totalsoft_oss.react-mui.dynamic-input';

const App = () => {
	const [value, setValue] = useState(false);
	const onDynamicInputChange = onPropertyChange => value => onPropertyChange(value)
	const handleDynamicBoolPropertyChange = value => setValue(value)

	return (
		<DynamicInput
			label='Switch'
			id={'Switch'}
			controlType={"BOOL"}
			onChange={onDynamicInputChange(handleDynamicBoolPropertyChange)}
			value={value}
		/>
	)
}

export default (
	<App />
)
 ```