##### Please note that the components from Bit is using by default a default theme.

##### If you want to learn more about how the theme is assembled, take a look at https://github.com/osstotalsoft/rocket-webapp-components/tree/master/themes

##### This chunk could be put in the bootstrapper of the react application.
 ```js
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {redTheme} from '@bit/totalsoft_oss.react-mui.themes';

ReactDOM.render(
    <AreasWrapper>
        <MuiThemeProvider theme={createMuiTheme(redTheme)}>
          {children}
        </MuiThemeProvider>
    </AreasWrapper>,
    document.getElementById("root")
);
 ```

 ##### Copy this snapshot in the overview panel. This way you can use a theme. Switch between themes to notice the differences.
  ```js
import React from 'react';
import { defaultTheme, redTheme } from '@bit/totalsoft_oss.react-mui.themes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Accordion } from '@bit/totalsoft_oss.react-mui.kit.core';

const arr = [{
	title: 'Accordion 1',
	value: 'Client 1'
}, {
	title: 'Accordion 2',
	value: 'Client 2'
},
{
	title: 'Accordion 3',
	value: 'Client 3'
}
]

const App = () => {

	return (
		<>
			<MuiThemeProvider theme={createMuiTheme(defaultTheme)}>
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

			</MuiThemeProvider>

			<MuiThemeProvider theme={createMuiTheme(redTheme)}>
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

			</MuiThemeProvider>
		</>
	)
}

export default (
	<App />
)
 ```