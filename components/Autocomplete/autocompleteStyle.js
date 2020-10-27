import { emphasize } from '@material-ui/core/styles/colorManipulator';
import styles from '@bit/totalsoft_oss.react-mui.styles';
import { theme as DefaultTheme } from '@bit/totalsoft_oss.react-mui.themes.default-theme';

const autocompleteStyle = theme => {
  const { dangerColor, successColor, defaultFont } = styles(theme);

  return ({
    root: {
      flexGrow: 1,
      height: 250,
    },
    input: {
      ...defaultFont,
      display: 'flex',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    label: {
      ...defaultFont
    },
    labelError: {
      color: dangerColor[0] + " !important"
    },
    labelSuccess: {
      color: successColor[0] + " !important"
    },
    valueContainer: {
      ...theme.autoComplete?.valueContainer || DefaultTheme.autoComplete.valueContainer,
      '& input': {
        ...theme.autoComplete?.input || DefaultTheme.autoComplete.input
      }
    },
    chip: {
      margin: `${theme.spacing(0.5)}px ${theme.spacing(0.25)}px`,
    },
    chipFocused: {
      backgroundColor: emphasize(
        theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
        0.08,
      ),
    },
    noOptionsMessage: {
      padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
    },
    singleValue: {
      ...defaultFont
    },
    placeholder: {
      ...defaultFont,
      position: 'absolute',
      left: 2
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing(),
      left: 0,
      right: 0,
    },
    divider: {
      height: theme.spacing(2),
    },
    selectStyles: {
      input: base => ({
        ...base,
        color: theme.palette?.text?.primary || DefaultTheme.palette.text.primary
      }),
    }
  })
};

export default autocompleteStyle;