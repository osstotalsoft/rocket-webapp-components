import styles from '@bit/totalsoft_components.react-mui.styles';
import { theme as DefaultTheme } from '@bit/totalsoft_components.react-mui.themes.default-theme';

const cardTitleStyle = theme => {
  const {
    defaultFont
  } = styles(theme);

  return ({
    defaultFont,
    cardTitle: {
      ...theme.header?.title || DefaultTheme.header?.title,
      display: 'flex',
      flexGrow: 1,
      padding: '5px'
    },
    container: { 
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  })
};

export default cardTitleStyle;