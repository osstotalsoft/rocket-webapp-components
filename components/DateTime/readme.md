##### Copy this snapshot in the overview panel
 ```js
import React, { useState } from 'react';
import DateTime from '@bit/totalsoft_oss.react-mui.date-time';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const App = () => {
	const [value, setValue] = useState(null);
	const onChange = value => setValue(value)

	return (
		<List component="nav">
			<ListItem>
				<p style={{ color: "red", fontWeight: "bold" }}>Please, in order to view the components properly drag the paint window to right</p>
			</ListItem>
			<ListItem>
				<div style={{ dispaly: "block", float: "left" }}>
					<DateTime
						value={value || null}
						label={'Start from'}
						onChange={onChange}
						dateFormat="DD-MMMM-YYYY"
						editable={false}
						maskable={true}
						clearable={false}
					/>
				</div>
			</ListItem>
		</List>
	)
}

export default (
	<App />
)
 ```



 ##### Copy this snapshot in the overview panel
 ```js
import React, { useState } from 'react';
import DateTime from '@bit/totalsoft_oss.react-mui.date-time';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const App = () => {
	const [value, setValue] = useState(null);
	const onChange = value => setValue(value)

	return (
		<List component="nav">
			<ListItem>
				<p style={{ color: "red", fontWeight: "bold" }}>Please, in order to view the components properly drag the paint window to right</p>
			</ListItem>
			<ListItem>
				<div style={{ dispaly: "block", float: "left" }}>
					<DateTime
						value={value || null}
						label={'Start from'}
						onChange={onChange}
						dateFormat="DD-MMMM-YYYY"
						editable={false}
						maskable={true}
						clearable={true}
						disableToolbar={false}
						showTime
					/>
				</div>
			</ListItem>
		</List>
	)
}

export default (
	<App />
)
 ```



  ##### Copy this snapshot in the overview panel
 ```js
import React, { useState } from 'react';
import DateTime from '@bit/totalsoft_oss.react-mui.date-time';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const App = () => {
	const [value, setValue] = useState(null);
	const onChange = value => setValue(value)

	return (
		<List component="nav">
			<ListItem>
				<p style={{ color: "red", fontWeight: "bold" }}>Please, in order to view the components properly drag the paint window to right</p>
			</ListItem>
			<ListItem>
				<div style={{ dispaly: "block", float: "left" }}>
					<DateTime
						value={value || null}
						label={'Start from'}
						onChange={onChange}
						dateFormat="YYYY-MM"
						editable={false}
						maskable={true}
						clearable={true}
					/>
				</div>
			</ListItem>
		</List>
	)
}

export default (
	<App />
)
 ```