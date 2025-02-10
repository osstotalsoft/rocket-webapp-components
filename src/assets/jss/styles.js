import { theme as defaultTheme } from "../../components/themes/defaultTheme";

const styles = theme => {
  const hexToRgb = input => {
    input = input + "";
    input = input.replace("#", "");
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
      throw new Error("input is not a valid hex color.");
    }
    let first = input[0];
    let second = input[1];
    let last = input[2];
    if (input.length === 3) {
      input = first + first + second + second + last + last;
    }

    input = input.toUpperCase(input);
    first = input[0] + input[1];
    second = input[2] + input[3];
    last = input[4] + input[5];
    return (
      parseInt(first, 16) +
      ", " +
      parseInt(second, 16) +
      ", " +
      parseInt(last, 16)
    );
  };

  const whiteColor = "#FFF";

  const drawerWidth = 260;
  const rightDrawerWidth = 360;

  const drawerMiniWidth = 80;

  const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
  };

  const containerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    "&:before,&:after": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  };

  const container = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    "@media (min-width: 768px)": {
      width: "750px"
    },
    "@media (min-width: 992px)": {
      width: "970px"
    },
    "@media (min-width: 1200px)": {
      width: "1170px"
    },
    "&:before,&:after": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  };

  const boxShadow = {
    boxShadow:
      "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  };

  const card = {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "6px",
    color: theme.palette?.activeColor || defaultTheme.palette?.activeColor,
    background: "#fff",
    overflow: "visible"
  };

  const slimPadding = {
    padding: "2px",
    margin: "0 8px"
  };

  const defaultFont = {
    ...(theme.defaultFont || defaultTheme.defaultFont),
    fontWeight: "300",
    lineHeight: "1.5em"
  };

  const primaryColor =
    theme.palette.timColors?.primary || defaultTheme.palette?.timColors.primary;
  const primaryColorRGBA =
    theme.palette.timColors?.primaryRGBA ||
    defaultTheme.palette?.timColors.primaryRGBA;
  const warningColor =
    theme.palette.timColors?.warningColor ||
    defaultTheme.palette?.timColors.warningColor;
  const dangerColor =
    theme.palette.timColors?.dangerColor ||
    defaultTheme.palette?.timColors.dangerColor;
  const successColor =
    theme.palette.timColors?.successColor ||
    defaultTheme.palette?.timColors.successColor;
  const infoColor =
    theme.palette.timColors?.infoColor ||
    defaultTheme.palette?.timColors.infoColor;
  const blueColor =
    theme.palette.timColors?.blueColor ||
    defaultTheme.palette?.timColors.blueColor;
  const roseColor =
    theme.palette.timColors?.roseColor ||
    defaultTheme.palette?.timColors.roseColor;
  const grayColor =
    theme.palette.timColors?.grayColor ||
    defaultTheme.palette?.timColors.grayColor;
  const blackColor =
    theme.palette.timColors?.blackColor ||
    defaultTheme.palette?.timColors.blackColor;
  //theme colors
  const themeColor =
    theme.palette?.timColors?.themeColor ||
    defaultTheme.palette.timColors.themeColor;
  const themeColorGradient =
    theme.palette?.timColors?.themeColorGradient ||
    defaultTheme.palette.timColors.themeColorGradient;
  const themeRGBAColor =
    theme.palette?.timColors?.themeColorRGBA ||
    defaultTheme.palette.timColors.themeColorRGBA;
  const themeShadowColor =
    theme.palette?.timColors?.themeShadowColor ||
    defaultTheme.palette.timColors.themeShadowColor;
  const themeShadowRGBAColor =
    theme.palette?.timColors?.themeShadowColorRGBA ||
    defaultTheme.palette.timColors.themeShadowColorRGBA;

  const menuActiveColor =
    theme.palette?.sideMenu?.activeLinkColor ||
    defaultTheme.palette.sideMenu.activeLinkColor;
  const menuActiveBkColor =
    theme.palette?.sideMenu?.activeBkColor ||
    defaultTheme.palette.sideMenu.activeBkColor;
  const menuActiveBk =
    theme.palette?.sideMenu?.activeBk || defaultTheme.palette.sideMenu.activeBk;
  const menuBkColor =
    theme.palette?.sideMenu?.bkColor || defaultTheme.palette.sideMenu.bkColor;
  const menuColor =
    theme.palette?.sideMenu?.color || defaultTheme.palette.sideMenu.color;
  const menuBkOpacity =
    theme.palette?.sideMenu?.bkOpacity ||
    defaultTheme.palette.sideMenu.bkOpacity;
  const topBarBkColor =
    theme.palette?.topBar?.bkColor || defaultTheme.palette.topBar.bkColor;

  const snackSuccessBgColor =
    theme.palette?.snackbar?.successBgColor ||
    defaultTheme.palette?.snackbar?.successBgColor;
  const snackSuccessColor =
    theme.palette?.snackbar?.successColor ||
    defaultTheme.palette?.snackbar?.successColor;
  const snackWarningBgColor =
    theme.palette?.snackbar?.warningBgColor ||
    defaultTheme.palette?.snackbar?.warningBgColor;
  const snackWarningColor =
    theme.palette?.snackbar?.warningColor ||
    defaultTheme.palette?.snackbar?.warningColor;
  const snackInfoBgColor =
    theme.palette?.snackbar?.infoBgColor ||
    defaultTheme.palette?.snackbar?.infoBgColor;
  const snackInfoColor =
    theme.palette?.snackbar?.infoColor ||
    defaultTheme.palette?.snackbar?.infoColor;
  const snackDangerBgColor =
    theme.palette?.snackbar?.dangerBgColor ||
    defaultTheme.palette?.snackbar?.dangerBgColor;
  const snackDangerColor =
    theme.palette?.snackbar?.dangerColor ||
    defaultTheme.palette?.snackbar?.dangerColor;
  const activeColor =
    theme.palette?.activeColor || defaultTheme.palette?.activeColor;

  const primaryBoxShadow = {
    boxShadow:
      "0 12px 20px -10px " +
      primaryColorRGBA +
      ", 0 4px 20px 0px " +
      primaryColorRGBA +
      ", 0 7px 8px -5px " +
      primaryColorRGBA
  };
  const infoBoxShadow = {
    boxShadow:
      "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
  };
  const successBoxShadow = {
    boxShadow:
      "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
  };
  const warningBoxShadow = {
    boxShadow:
      "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
  };
  const dangerBoxShadow = {
    boxShadow:
      "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
  };
  const roseBoxShadow = {
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
  };
  const purpleBoxShadow = {
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(142, 36, 170, 0.4)"
  };
  const themeBoxShadow = {
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px " + themeRGBAColor
  };

  const themeBoxSecondaryShadow = {
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px " +
      themeShadowRGBAColor
  };

  const orangeCardHeader = {
    background:
      "linear-gradient(60deg, " +
      (theme.palette?.card?.orange400 || defaultTheme.palette?.card.orange400) +
      ", " +
      (theme.palette?.card?.orange500 || defaultTheme.palette?.card.orange500) +
      ")",
    ...warningBoxShadow
  };
  const greenCardHeader = {
    background:
      "linear-gradient(60deg, " +
      (theme.palette?.card?.green400 || defaultTheme.palette?.card.green400) +
      ", " +
      (theme.palette?.card?.green500 || defaultTheme.palette?.card.green500) +
      ")",
    ...successBoxShadow
  };
  const redCardHeader = {
    background:
      "linear-gradient(60deg, " +
      (theme.palette?.card?.red400 || defaultTheme.palette.card.red400) +
      ", " +
      (theme.palette?.card?.red500 || defaultTheme.palette.card.red500) +
      ")",
    ...dangerBoxShadow
  };
  const blueCardHeader = {
    background:
      "linear-gradient(60deg, " +
      (theme.palette?.card?.blue400 || defaultTheme.palette.card.blue400) +
      ", " +
      (theme.palette?.card?.blue500 || defaultTheme.palette.card.blue500) +
      ")",
    ...infoBoxShadow
  };
  const purpleCardHeader = {
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    ...purpleBoxShadow
  };
  const roseCardHeader = {
    background: "linear-gradient(60deg, #ec407a, #d81b60)",
    ...roseBoxShadow
  };
  const themeCardHeader = {
    background:
      "linear-gradient(60deg, " + themeColor + ", " + themeColor + ")",
    ...themeBoxShadow
  };
  const themeWithGradientCardHeader = {
    background: `linear-gradient(60deg, ${themeColorGradient[0]}, ${themeColorGradient[1]})`,
    ...themeBoxShadow
  };

  const cardActions = {
    margin: "0 20px 10px",
    paddingTop: "10px",
    borderTop: "1px solid #eeeeee",
    height: "auto",
    ...defaultFont
  };

  const cardHeader = {
    margin: "-20px 15px 0",
    borderRadius: "3px",
    padding: "5px"
  };

  const defaultBoxShadow = {
    border: "0",
    borderRadius: "3px",
    boxShadow:
      "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    padding: "10px 0",
    transition: "all 150ms ease 0s"
  };

  const tooltip = {
    padding: "10px 15px",
    minWidth: "130px",
    color: "#FFFFFF",
    lineHeight: "1.7em",
    background: "rgba(85,85,85,0.9)",
    border: "none",
    borderRadius: "3px",
    opacity: "1!important",
    boxShadow:
      "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily:
      theme.defaultFont?.fontFamily || defaultTheme.defaultFont?.fontFamily,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  };

  const capitalize = {
    textTransform: "capitalize"
  };

  const buttonColors = {
    primary: {
      backgroundColor: primaryColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(primaryColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(primaryColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(primaryColor) +
        ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: primaryColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(primaryColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(primaryColor) +
          ", 0.2)"
      }
    },
    primaryNoBackground: {
      "&,&:hover,&:focus": {
        color: primaryColor,
        backgroundColor: "transparent",
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(primaryColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(primaryColor) +
          ", 0.2)"
      }
    },
    info: {
      backgroundColor: infoColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(infoColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(infoColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(infoColor) +
        ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: infoColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(infoColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(infoColor) +
          ", 0.2)"
      }
    },
    infoNoBackground: {
      color: infoColor,
      boxShadow: "none",
      backgroundColor: "transparent",
      "&:hover,&:focus": {
        backgroundColor: "transparent",
        color: infoColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(infoColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(infoColor) +
          ", 0.2)"
      }
    },
    success: {
      backgroundColor: successColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(successColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(successColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(successColor) +
        ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: successColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(successColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(successColor) +
          ", 0.2)"
      }
    },
    successNoBackground: {
      color: successColor,
      boxShadow: "none",
      backgroundColor: "transparent",
      "&:hover,&:focus": {
        backgroundColor: "transparent",
        color: successColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(successColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(successColor) +
          ", 0.2)"
      }
    },
    warning: {
      backgroundColor: warningColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(warningColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(warningColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(warningColor) +
        ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: warningColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(warningColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(warningColor) +
          ", 0.2)"
      }
    },
    warningNoBackground: {
      color: warningColor,
      boxShadow: "none",
      backgroundColor: "transparent",
      "&:hover,&:focus": {
        backgroundColor: "transparent",
        color: warningColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(warningColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(warningColor) +
          ", 0.2)"
      }
    },
    danger: {
      backgroundColor: dangerColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(dangerColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(dangerColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(dangerColor) +
        ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: dangerColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(dangerColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(dangerColor) +
          ", 0.2)"
      }
    },
    dangerNoBackground: {
      color: dangerColor,
      boxShadow: "none",
      backgroundColor: "transparent",
      "&:hover,&:focus": {
        backgroundColor: "transparent",
        color: dangerColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(dangerColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(dangerColor) +
          ", 0.2)"
      }
    },
    rose: {
      backgroundColor: roseColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(roseColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(roseColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(roseColor) +
        ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: roseColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(roseColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(roseColor) +
          ", 0.2)"
      }
    },
    roseNoBackground: {
      color: roseColor,
      boxShadow: "none",
      backgroundColor: "transparent",
      "&:hover,&:focus": {
        backgroundColor: "transparent",
        color: roseColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(roseColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(roseColor) +
          ", 0.2)"
      }
    },
    white: {
      "&,&:focus,&:hover": {
        backgroundColor: whiteColor,
        color: grayColor
      }
    },
    transparent: {
      "&,&:focus,&:hover": {
        color: "inherit",
        background: "transparent",
        boxShadow: "none",
        "& svg": {
          color: "inherit"
        },
        "&$justIcon": {
          color: "inherit"
        }
      }
    },
    theme: {
      backgroundColor:
        theme.palette?.button?.theme || defaultTheme.palette.button.theme,
      boxShadow:
        theme.palette?.button?.themeShadow ||
        defaultTheme.palette?.button?.themeShadow,
      "&:hover,&:focus": {
        backgroundColor: whiteColor,
        color:
          theme.palette?.button?.theme || defaultTheme.palette.button.theme,
        boxShadow:
          theme.palette?.button?.themeHoverShadow ||
          defaultTheme.palette?.button?.themeHoverShadow
      }
    },
    themeNoBackground: {
      backgroundColor: "transparent",
      color: theme.palette?.button?.theme || defaultTheme.palette.button.theme,
      boxShadow: "none",
      "&:hover,&:focus": {
        backgroundColor: "transparent",
        color:
          theme.palette?.button?.theme || defaultTheme.palette.button.theme,
        boxShadow:
          theme.palette?.button?.themeHoverShadow ||
          defaultTheme.palette?.button?.themeHoverShadow
      }
    },
    themeWithBackground: {
      backgroundColor: "transparent",
      color: theme.palette?.button?.theme || defaultTheme.palette.button.theme,
      boxShadow:
        theme.palette?.button?.themeHoverShadow ||
        defaultTheme.palette?.button?.themeHoverShadow,
      "&:hover,&:focus": {
        backgroundColor:
          theme.palette?.button?.theme || defaultTheme.palette.button.theme,
        color: whiteColor,
        boxShadow:
          theme.palette?.button?.themeHoverShadow ||
          defaultTheme.palette?.button?.themeHoverShadow
      }
    },
    themeWithGradient: {
      background: `linear-gradient(60deg, ${themeColorGradient[0]}, ${themeColorGradient[1]})`,
      "&:hover,&:focus": {
        backgroundColor: `linear-gradient(60deg, ${themeColorGradient[0]}, ${themeColorGradient[1]})`,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(themeColorGradient[0]) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(themeColorGradient[0]) +
          ", 0.2)"
      }
    },
    disabled: {
      opacity: "0.5",
      pointerEvents: "none",
      backgroundColor: grayColor,
      color: whiteColor,
      "&:hover,&:focus": {
        backgroundColor: grayColor,
        color: whiteColor
      },
      "&$justIcon &svg": {
        pointerEvents: "none",
        color: whiteColor
      },
      "&$roseNoBackground,&$themeNoBackground,&$defaultNoBackground,&$primaryNoBackground,&$infoNoBackground,&$successNoBackground,&$warningNoBackground,&$dangerNoBackground,&$white,&$transparent": {
        background: "transparent",
        color: grayColor,
        "&$justIcon &svg": {
          color: grayColor
        },
        "&:hover,&:focus": {
          background: "transparent",
          color: grayColor
        }
      }
    },
    defaultNoBackground: {
      color: grayColor,
      boxShadow: "none",
      backgroundColor: "transparent",
      "&:hover,&:focus": {
        color: grayColor,
        backgroundColor: "transparent",
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(grayColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(grayColor) +
          ", 0.2)"
      }
    }
  };

  return {
    drawerWidth,
    rightDrawerWidth,
    drawerMiniWidth,
    transition,
    container,
    containerFluid,
    boxShadow,
    card,
    defaultFont,
    themeColor,
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    blueColor,
    roseColor,
    grayColor,
    blackColor,
    primaryBoxShadow,
    infoBoxShadow,
    successBoxShadow,
    warningBoxShadow,
    dangerBoxShadow,
    roseBoxShadow,
    orangeCardHeader,
    greenCardHeader,
    redCardHeader,
    blueCardHeader,
    purpleCardHeader,
    roseCardHeader,
    themeColorGradient,
    themeCardHeader,
    themeWithGradientCardHeader,
    themeBoxShadow,
    cardActions,
    cardHeader,
    defaultBoxShadow,
    tooltip,
    slimPadding,
    menuActiveColor,
    menuActiveBkColor,
    menuActiveBk,
    topBarBkColor,
    menuBkColor,
    menuColor,
    menuBkOpacity,
    primaryColorRGBA,
    capitalize,
    snackWarningColor,
    snackWarningBgColor,
    snackSuccessColor,
    snackSuccessBgColor,
    snackInfoBgColor,
    snackInfoColor,
    snackDangerBgColor,
    snackDangerColor,
    activeColor,
    whiteColor,
    themeShadowColor,
    themeBoxSecondaryShadow,
    buttonColors,
    hexToRgb
  };
};

export default styles;
