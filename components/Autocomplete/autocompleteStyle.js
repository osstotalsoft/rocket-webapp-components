import { emphasize } from '@material-ui/core/styles/colorManipulator';
import styles from '../../assets/jss/styles';
import { theme as defaultTheme } from '../../themes/defaultTheme';

export const selectedColor = (theme, inputSelectedColor) => {
  return { color: inputSelectedColor ? inputSelectedColor : theme.autoComplete.selectedInputColor }
}

const autocompleteStyle = theme => {
  const {
    dangerColor,
    successColor,
    defaultFont
  } = styles(theme);


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
      ...theme.autoComplete?.valueContainer || defaultTheme.autoComplete.valueContainer,
      '& input': {
        ...theme.autoComplete?.input || defaultTheme.autoComplete.input
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
      ...defaultFont,
      color: theme.palette?.text?.primary || defaultTheme.palette.text.primary
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
      singleValue: base => ({
        ...base,
        color: theme.palette?.text?.primary || defaultTheme.palette.text.primary
      }),
      input: base => ({
        ...base,
        color: theme.palette?.text?.primary || defaultTheme.palette.text.primary
      })
    }
  })
};

export default autocompleteStyle;