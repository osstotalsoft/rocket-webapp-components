import styles from "../../assets/jss/styles.js";
import defaultTheme from "../themes/defaultTheme.js";

const iconCollapseCardStyle = theme => {
  const {
    card,
    cardHeader,
    orangeCardHeader,
    greenCardHeader,
    redCardHeader,
    blueCardHeader,
    purpleCardHeader,
    roseCardHeader,
    themeCardHeader,
    themeWithGradientCardHeader
  } = styles(theme);

  return {
    card,
    cardPlain: {
      background: "transparent",
      boxShadow: "none"
    },
    cardHeader: {
      ...cardHeader,
      float: "left"
    },
    orangeCardHeader,
    greenCardHeader,
    redCardHeader,
    blueCardHeader,
    purpleCardHeader,
    roseCardHeader,
    themeCardHeader,
    themeWithGradientCardHeader,
    cardContent: {
      padding: "15px 20px",
      position: "relative"
    },
    cardAvatar: {
      margin: "0px"
    },
    cardIcon: {
      paddingTop: "3px",
      paddingLeft: "3px",
      paddingRight: "3px",
      color: "#FFFFFF",
      width: "30px",
      height: "30px"
    },
    cardTitle: {
      ...(theme.header?.title || defaultTheme?.header?.title),
      display: "flex",
      marginBottom: "3px",
      width: "100%"
    },
    cardCategory: {
      color: "#999999",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "1",
      marginBottom: "0"
    },
    cardFooter: {
      margin: "0 20px 10px",
      paddingTop: "10px",
      borderTop: "1px solid #eeeeee"
    },
    accordionRoot: {
      boxShadow: "none",
      backgroundColor: "transparent",
      padding: "0px"
    },
    expansionPanelDetails: {
      "@media (max-width: 480px)": {
        padding: "4px"
      }
    },
    content: {
      margin: "0px !Important",
      padding: "0px"
    },
    summaryRoot: {
      padding: "0px"
    }
  };
};

export default iconCollapseCardStyle;
