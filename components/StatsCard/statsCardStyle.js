import styles from '../../assets/jss/styles.js';

const statsCardStyle = theme => {
  const {
    card,
    cardHeader,
    defaultFont,
    orangeCardHeader,
    greenCardHeader,
    redCardHeader,
    blueCardHeader,
    purpleCardHeader,
    cardActions,
    grayColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    primaryColor,
    roseColor
  } = styles(theme);

  return {
    card: card,
    cardHeader: {
      ...cardHeader,
      float: "left",
      textAlign: "center"
    },
    orangeCardHeader: orangeCardHeader,
    greenCardHeader: greenCardHeader,
    redCardHeader: redCardHeader,
    blueCardHeader: blueCardHeader,
    purpleCardHeader: purpleCardHeader,
    cardContent: {
      textAlign: "right",
      fontSize: "10px",
      paddingTop: "10px",
      padding: "2px 10px"
    },
    cardIcon: {
      width: "28px",
      height: "24px",
      fill: "#fff"
    },
    cardAvatar: {
      margin: "10px 8px 10px",
      display: "flex",
      fontSize: "10px"
    },
    cardCategory: {
      marginBottom: "0",
      color: grayColor,
      margin: "0 0 10px",
      ...defaultFont
    },
    cardTitle: {
      margin: "0",
      ...defaultFont,
      fontSize: "1.825em"
    },
    cardTitleSmall: {
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
      color: "#777"
    },
    cardActions: {
      ...cardActions,
      padding: "2px 0 0 0!important"
    },
    cardStats: {
      lineHeight: "22px",
      color: grayColor,
      fontSize: "12px",
      display: "inline-block",
      margin: "0!important"
    },
    cardStatsIcon: {
      position: "relative",
      top: "4px",
      width: "16px",
      height: "16px"
    },
    warningCardStatsIcon: {
      color: warningColor
    },
    primaryCardStatsIcon: {
      color: primaryColor
    },
    dangerCardStatsIcon: {
      color: dangerColor
    },
    successCardStatsIcon: {
      color: successColor
    },
    infoCardStatsIcon: {
      color: infoColor
    },
    roseCardStatsIcon: {
      color: roseColor
    },
    grayCardStatsIcon: {
      color: grayColor
    },
    cardStatsLink: {
      color: primaryColor,
      textDecoration: "none",
      ...defaultFont
    }
  }
};

export default statsCardStyle;