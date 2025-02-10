import styles from "../../assets/jss/styles";
import defaultTheme from "../themes/defaultTheme";

const autocompleteStyle = theme => {
  const { defaultFont } = styles(theme);

  return {
    input: {
      ...defaultFont,
      display: "flex",
      whiteSpace: "nowrap"
    },
    labelRoot: {
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    labelShrink: {
      maxWidth: "133%"
    },
    option: {
      ...defaultFont,
      display: "block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "100%"
    },
    noOptionsMessage: {
      ...defaultFont,
      padding: `${theme.spacing()}px ${theme.spacing(2)}px`
    },
    colorInherit: {
      color: "inherit"
    },
    colorPrimary: {
      color: theme.palette.primary.main || defaultTheme?.palette.primary.main
    },
    colorSecondary: {
      color:
        theme.palette.secondary.main || defaultTheme?.palette.secondary.main
    },
    colorTextPrimary: {
      color: theme.palette.text.primary || defaultTheme?.palette.text.primary
    },
    colorTextSecondary: {
      color: theme.palette.text.secondary || defaultTheme?.palette.text.darkGrey
    },
    colorError: {
      color:
        theme.palette.error.main || defaultTheme?.palette.timColors.dangerColor
    }
  };
};

export default autocompleteStyle;
