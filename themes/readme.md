##### This chunk could be put in the bootstrapper of the react application.

##### Please note that the components from Bit is using by default a default theme.

##### If you want to learn more about how the theme is assembled, take a look at https://github.com/osstotalsoft/rocket-webapp-components/tree/master/themes

##### In the overview of each theme you can find a printscreen of how the it looks.

 ```js
import React from 'react';
import { MuiThemeProvider } from "@material-ui/core";
import RedTheme from '@bit/totalsoft_oss.react-mui.themes.red-theme';

ReactDOM.render(
    <AreasWrapper>
        <MuiThemeProvider theme={createMuiTheme(RedTheme)}>
          {children}
        </MuiThemeProvider>
    </AreasWrapper>,
    document.getElementById("root")
);
 ```