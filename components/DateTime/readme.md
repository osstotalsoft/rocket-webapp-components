##### Copy this snapshot in the overview panel
 ```js
import React, { useState } from 'react';
import DateTime from '@bit/totalsoft_oss.react-mui.date-time';
import { Grid } from '@material-ui/core';

const App = () => {
	const [dateValue, setDateValue] = useState(null);
	const onDateTimeChanged = value => setDateValue(value)

	const [dateValue1, setDateValue1] = useState(null);
	const onDateTimeChanged1 = value => setDateValue1(value)

	const [dateValue2, setDateValue2] = useState(null);
	const onDateTimeChanged2 = value => setDateValue2(value)

	return (
		<Grid container spacing={1}>
			<Grid item xs={12} sm={6} md={6} lg={3}>
				<div>Non-editable datetime and not-clearable</div>
				<DateTime
					value={dateValue || null}
					label={'Datetime'}
					onChange={onDateTimeChanged}
					dateFormat="DD-MMMM-YYYY"
					timeFormat={false}
					editable={false}
					maskable={true}
					clearable={false}
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={3}>
				<div>Editable datetime and clearable</div>
				<DateTime
					value={dateValue1 || null}
					label={'Datetime'}
					onChange={onDateTimeChanged1}
					dateFormat="DD-MMMM-YYYY"
					timeFormat={false}
					editable={false}
					maskable={true}
					clearable={true}
				/>
			</Grid>

			<Grid item xs={12} sm={6} md={6} lg={3}>
				<div>Calendar mask:YYYY-MM and clearable</div>
				<DateTime
					value={dateValue2 || null}
					label={'Datetime'}
					onChange={onDateTimeChanged2}
					dateFormat="YYYY-MM"
					timeFormat={false}
					editable={false}
					maskable={true}
					clearable={true}
				/>
			</Grid>
		</Grid>
	)
}

export default (
	<App />
)
 ```