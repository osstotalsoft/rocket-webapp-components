##### Copy this snapshot in the overview panel
 ```js
import React, { useState } from 'react';
import CustomTextField from '@bit/totalsoft_oss.react-mui.custom-text-field';

const App = () => {
   const onCustomInputChange = event => setValue(event.target.value)
   const [value, setValue] = useState(1);

   return (
       <CustomTextField
           fullWidth
           label={'CustomTextField'}
           value={value || ""}
           onChange={onCustomInputChange}
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
import CustomTextField from '@bit/totalsoft_oss.react-mui.custom-text-field';

const App = () => {
	const onCustomInputChange = value => setValue(value)
	const [value, setValue] = useState(1);

	return (
		<CustomTextField
			fullWidth
			label={'CustomTextField'}
			value={value || ""}
			onChange={onCustomInputChange}
			isNumeric
			customInputProps={{
				decimalScale: 3,
				thousandSeparator: false,
				prefix: '$'
			}}
		/>
	)
}

export default (
	<App />
)
 ```