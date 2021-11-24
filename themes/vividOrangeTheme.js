import DefaultLogo from "@bit/totalsoft_oss.react-mui.default-logo";

const defaultFont = {
  fontFamily: "Source Sans Pro",
  fontSize: 14,
  lineHeight: "1.5em"
};

const palette = {
  primary: {
    main: "#555555"
  },
  secondary: {
    main: "#00497b"
  },
  text: {
    dark: "rgb(3, 19, 3)",
    white: "rgb(255, 255, 255)",
    darkGrey: "rgb(169,169,169)",
    highlight: "rgb(36, 76, 140)",
    primary: "#343434"
  },
  sideMenu: {
    bkColor: "#000",
    activeLinkColor: "#fff",
    activeBkColor: "#26C6DA",
    activeBk: "linear-gradient(60deg, #FF6F00, #f78c39)",
    hoverBgColor: "rgba(200, 200, 200, 0.2)",
    hoverTextColor: "#fff",
    color: "#fff",
    bkOpacity: "0.8",
    focusBgColor: "#26C6DA"
  },
  topBar: {
    bkColor: "#FFFF"
  },
  timColors: {
    primary: "#555555",
    primaryRGBA: "rgba(85, 85, 85, 1)",
    warningColor: "#ff9800",
    dangerColor: "#f44336",
    successColor: "#4caf50",
    infoColor: "#00acc1",
    blueColor: "#26C6DA",
    iconCardColor: "#FF6F00",
    themeColor: "#FF6F00",
    themeColorGradient:['#FF6F00', '#f78c39'],
    themeColorRGBA: "rgba(85, 85, 85, 1)",
    themeShadowColor: "#555555",
    themeShadowColorRGBA: "rgba(51, 51, 51, 0.38)",
    roseColor: "#e91e63",
    grayColor: "#999999",
    blackColor: "#000"
  },
  snackbar: {
    infoBgColor: "#ccf1ff",
    infoColor: "#555555",
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
    main: "#eee"
  },
  activeColor: "#555555",
  button: {
    theme: "#555555",
    themeHoverBk: "transparent",
    themeHoverColor: "#555555",
    themeHoverShadow:
      "0 2px 2px 0 rgba(85, 85, 85, 0.42), 0 3px 1px -2px rgba(85, 85, 85, 0.12), 0 1px 5px 0 rgba(85, 85, 85, 0.2)",
    themeShadow:
      "0 2px 2px 0 rgba(85, 85, 85, 0.14), 0 3px 1px -2px rgba(85, 85, 85, 0.2), 0 1px 5px 0 rgba(85, 85, 85, 0.12)"
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
          color: "#00497b"
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
      backgroundColor: "#f0fbff",
      padding: "10px",
      color: "#555555",
      borderBottom: "1px solid #ddd"
    },
    tableContent: {
      textAlign: "left",
      padding: "10px ",
      borderBottom: "1px solid #eee"
    },
    itemSelected: {
      background: "#ccf1ff",
      color: "#555555"
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
      color: "#a8a8a8 !important"
    },
    selectedInputColor: "#000",
    hoverBgColor: "rgba(0, 0, 0, 0.08)",
    hoverTextColor: palette.text.primary,
    selectedBgColor: "rgba(0, 0, 0, 0.14)",
    selectedTextColor: palette.text.primary,
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
