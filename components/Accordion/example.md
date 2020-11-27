##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import Accordion from '@bit/totalsoft_oss.react-mui.accordion';

const arr = [{
	title: 'Title 1',
	value: 'Client 1'
}, {
	title: 'Title 2',
	value: 'Client 2'
},
{
	title: 'Title 3',
	value: 'Client 3'
}
]

export default (
	<Accordion
		active={0}
		content={arr.map(item => {
			return {
				title: item.title,
				content: (
					<div>
						{item.value}
					</div>
				)
			};
		})}
	/>
)
 ```