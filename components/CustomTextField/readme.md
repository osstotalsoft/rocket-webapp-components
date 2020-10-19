##### Copy this snapshot in the overview panel
 ```js
import React, { useState } from 'react';
import CustomTextField from '@bit/totalsoft_oss.react-mui.custom-text-field';

const App = () => {
	const onCustomInputChange = value => setCustomInputValue(value)
	const [customInputValue, setCustomInputValue] = useState(1);

	return (
		<CustomTextField
			fullWidth
			label={'CustomTextField'}
			value={customInputValue || ""}
			onChange={onCustomInputChange}
			decimalScale={0}
			thousandSeparator={"."}
		/>
	)
}

export default (
	<App />
)
 ```