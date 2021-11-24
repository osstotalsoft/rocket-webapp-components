import DefaultLogo from "@bit/totalsoft_oss.react-mui.default-logo";

const defaultFont = {
  fontFamily: "Source Sans Pro",
  fontSize: 14,
  lineHeight: "1.5em"
};

const palette = {
  primary: {
    main: "#444444"
  },
  secondary: {
    main: "#ff0000"
  },
  text: {
    dark: "rgb(3, 19, 3)",
    white: "rgb(255, 255, 255)",
    darkGrey: "rgb(169,169,169)",
    highlight: "rgb(36, 76, 140)",
    primary: "#444444"
  },
  sideMenu: {
    bkColor: "#fff",
    activeLinkColor: "#fff",
    activeBkColor: "#ff0000",
    activeBk: "#ff0000",
    hoverBgColor: "transparent",
    hoverTextColor: "#ff0000",
    color: "#444444",
    bkOpacity: "0.8",
    focusBgColor: "#F6F4F1",
    dividerColor: "#444444"
  },
  topBar: {
    bkColor: "#FFFF"
  },
  timColors: {
    primary: "#ff0000",
    primaryRGBA: "rgba(255, 0, 0, 1)",
    warningColor: "#ff9800",
    dangerColor: "#f44336",
    successColor: "#4caf50",
    infoColor: "#00acc1",
    lightBackground: "#BCE4FA",
    blueColor: "#26C6DA",
    iconCardColor: "#ff0000",
    themeColor: "#ff0000",
    themeColorGradient:['#ff0000', '#ff2929'],
    themeColorRGBA: "rgba(255, 0, 0, 1)",
    themeShadowColor: "#EA5E6F",
    themeShadowColorRGBA: "rgba(225, 25, 50, 1)",
    roseColor: "#e91e63",
    grayColor: "#999999",
    blackColor: "#000"
  },
  snackbar: {
    infoBgColor: "#ccf1ff",
    infoColor: "#444444",
    dangerBgColor: "#f44336",
    dangerColor: "#ffffff",
    successBgColor: "#36b37e",
    successColor: "#ffffff",
    warningBgColor: "#ff9800",
    warningColor: "#ffffff"
  },
  card: {
    gray500: "#D7D7D7",
    orange800: "#B35500",
    orange500: "#fb8c00",
    orange400: "#ffa726",
    green500: "#43a047",
    green400: "#66bb6a",
    blue500: "#26c6da",
    blue400: "#00acc1",
    red400: "#FF6666",
    red500: "#FF5555"
  },
  amount: {
    positive: "#01b25a",
    negative: "#f55",
    faded: "#60768f",
    active: "#f44336"
  },
  bg: {
    main: "#ddd8d3"
  },
  activeColor: "#444444",
  button: {
    theme: "#ff0000",
    themeHoverBk: "transparent",
    themeHoverColor: "#ff0000",
    themeHoverShadow:
      "0 2px 2px 0 rgba(225, 25, 50, 0.42), 0 3px 1px -2px rgba(225, 25, 50, 0.12), 0 1px 5px 0 rgba(225, 25, 50, 0.2)",
    themeShadow:
      "0 2px 2px 0 rgba(225, 25, 50, 0.14), 0 3px 1px -2px rgba(225, 25, 50, 0.2), 0 1px 5px 0 rgba(225, 25, 50, 0.12)"
  }
};

export const theme = {
  logo: DefaultLogo,
  input: {
    height: "1.1875em"
  },
  defaultFont,
  palette,
  typography: {
    ...defaultFont,
    useNextVariants: true,
    htmlFontSize: 14,
    fontWeightMedium: 300,
    button: {
      ...defaultFont,
      textAlign: "center",
      fontStretch: "normal",
      fontStyle: "normal"
    },
    body: {
      ...defaultFont,
      fontSize: 14
    }
  },
  overrides: {
    MuiCollapse: {
      entered: {
        height: "auto",
        overflow: "visible"
      }
    },
    MuiCardHeader: {
      content: {
        width: "100%"
      }
    },
    MuiDivider: {
      root: {
        height: "2px"
      }
    },
    MuiTablePagination: {
      actions: {
        marginLeft: 0
      },
      toolbar: {
        paddingLeft: 0
      }
    },
    MuiStepIcon: {
      root: {
        "&$active": {
          color: "#ff0000"
        }
      }
    }
  },
  table: {
    main: {
      marginTop: "15px",
      marginBottom: "15px",
      borderSpacing: 0
    },
    tableHeader: {
      textAlign: "left",
      backgroundColor: palette.secondary.main,
      padding: "10px",
      borderBottom: "1px solid #ddd",
      color: palette.text.white
    },
    tableContent: {
      textAlign: "left",
      padding: "10px ",
      borderBottom: "1px solid #eee"
    },
    itemSelected: {
      background: "#ccf1ff",
      color: palette.text.main
    }
  },
  autoComplete: {
    valueContainer: {
      display: "flex",
      flexWrap: "wrap",
      flex: 1,
      alignItems: "center",
      paddingBottom: "5px"
    },
    input: {
      fontFamily: "Source Sans Pro !important",
      fontSize: "14px !important",
      fontWeight: "normal !important",
      fontStretch: "normal !important",
      fontStyle: "normal !important",
      lineHeight: "1.29 !important",
      color: "#444444 !important"
    },
    selectedInputColor: palette.text.main,
    hoverBgColor: "#ff0000 !Important",
    hoverTextColor: "#ffffff",
    selectedBgColor: palette.text.white,
    selectedTextColor: palette.secondary.main
  },
  card: {
    height: "auto",
    width: "auto",
    borderRadius: "5px",
    boxShadow: "0 2px 9px 0 rgba(0, 0, 0, 0.14)",
    backgroundColor: "#ffffff"
  },
  header: {
    title: {
      borderRadius: "3px",
      textTransform: "none",
      fontWeight: "bold",
      color: palette.primary.main,
      "&:hover,&:focus": {
        background: "transparent"
      }
    },
    titleMobile: {
      borderRadius: "3px",
      textTransform: "none",
      fontWeight: "bold",
      color: palette.primary.main,
      "&:hover,&:focus": {
        background: "transparent"
      }
    }
  }
};
