##### Copy this snapshot in the overview panel
 ```js
import React, { useState } from 'react';
import DynamicInput from '@bit/totalsoft_oss.react-mui.dynamic-input';
import { Grid } from '@material-ui/core';

const App = () => {
	const [dynamicInputValue, setDynamicInputValue] = useState(null);
	const [dynamicInputDatetimeValue, setDynamicInputDatetimeValue] = useState(null);
	const [dynamicBoolValue, setDynamicBoolValue] = useState(false);
	const onDynamicInputChange = onPropertyChange => (_, value) => onPropertyChange(value)
	const handleDynamicPropertyChange = value => setDynamicInputValue(value)
	//For DynamicInput - Datetime
	const handleDynamicDatetimePropertyChange = value => setDynamicInputDatetimeValue(value)
	const handleDynamicBoolPropertyChange = value => setDynamicBoolValue(value)

	return (
		<Grid container spacing={1}>
			<Grid item xs={12} sm={6} md={6} lg={3}>
				<DynamicInput
					label='DynamicInput - NumberTextField'
					id={'testId'}
					controlType={"TP_NUM"}
					onChange={onDynamicInputChange(handleDynamicPropertyChange)}
					value={dynamicInputValue}
					disabled={false}
				/>
			</Grid>

			<Grid item xs={12} sm={6} md={6} lg={3}>
				<DynamicInput
					label='DynamicInput - TextField'
					id={'testId'}
					controlType={"TP_TEXT"}
					onChange={onDynamicInputChange(handleDynamicPropertyChange)}
					value={dynamicInputValue}
					disabled={false}
				/>
			</Grid>

			<Grid item xs={12} sm={6} md={6} lg={3}>
				<DynamicInput
					label='DynamicInput - Checkbox'
					id={'testId'}
					controlType={"BOOL"}
					onChange={onDynamicInputChange(handleDynamicBoolPropertyChange)}
					value={dynamicBoolValue}
					disabled={false}
				/>
			</Grid>

			<Grid item xs={12} sm={6} md={6} lg={3}>
				<DynamicInput
					label='DynamicInput - Datetime'
					id={'testId'}
					controlType={"TP_DATE"}
					onChange={onDynamicInputChange(handleDynamicDatetimePropertyChange)}
					value={dynamicInputDatetimeValue}
					disabled={false}
					timeFormat={false}
					editable={false}
					maskable={false}
					clearable={true}
					dateFormat="DD-MMMM-YYYY"
				/>
			</Grid>
		</Grid>
	)
}

export default (
	<App />
)
 ```