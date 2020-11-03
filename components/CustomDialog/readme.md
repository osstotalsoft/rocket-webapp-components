##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import CustomDialog from '@bit/totalsoft_oss.react-mui.custom-dialog';

export default (
	<CustomDialog
		id={"id"}
		open={true}
		title={"Title"}
		content={<div>Content</div>}
		textContent={"Text content"}
		fullWidth
		maxWidth
		showActions
	/>
)
 ```