##### Copy this snapshot in the overview panel

```js
import React from "react";
import IconCard from "@bit/totalsoft_oss.react-mui.icon-card";
import FastfoodIcon from '@material-ui/icons/Fastfood';

export default (
	<IconCard
		icon={FastfoodIcon}
		iconColor="theme"
		title="Shrimp and Chorizo Paella"
		content={<span>This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</span>}
	/>
);
```


##### Copy this snapshot in the overview panel

```js
import React from "react";
import IconCard from "@bit/totalsoft_oss.react-mui.icon-card";
import Assignment from '@material-ui/icons/Assignment';
import CardTitle from "@bit/totalsoft_oss.react-mui.card-title";
import AddButton from "@bit/totalsoft_oss.react-mui.add-button";
import CustomTextField from "@bit/totalsoft_oss.react-mui.custom-text-field";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Grid } from "@material-ui/core";

export default (
	<IconCard
		icon={Assignment}
		iconColor="theme"
		title={
			<CardTitle
				title={"Documents"}
				actions={[<AddButton key='addButton' title={"Add document"} />]}
			/>
		}
		content={
			<Grid>
				<Table>
					<Thead>
						<Tr>
							<Th >{"File names"}</Th>
							<Th >{"Description"}</Th>
							<Th />
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td >
								<CustomTextField
									fullWidth
									value={"File name"}
									onChange={() => { }}
								/>
							</Td>
							<Td>
								<CustomTextField
									fullWidth
									value={"Description"}
									onChange={() => { }}
								/>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</Grid>
		}
	/>
);
```