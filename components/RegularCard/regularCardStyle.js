import styles from '../../assets/jss/styles.js';

const regularCardStyle = theme => {
  const { card, defaultFont } = styles(theme);

  return {
    card,
    cardPlain: {
      background: "transparent",
      boxShadow: "none"
    },
    cardFooter: {
      margin: "0 20px 10px",
      paddingTop: "10px",
      borderTop: "1px solid #eeeeee"
    },
    cardHeader: {
      padding: "15px 20px 0",
      zIndex: "3"
    },
    cardTitle: {
      ...defaultFont,
      marginTop: "0",
      marginBottom: "3px",
      fontWeight: "bold",
      fontSize: "20px",
      "& small": {
        fontWeight: "bold",
        lineHeight: "24px",
        color: "#777"
      }
    },
    right: {
      textAlign: "right"
    },
    left: {
      textAlign: "left"
    },
    center: {
      textAlign: "center"
    },
    cardSubtitle: {
      ...defaultFont,
      color: "#999999",
      fontSize: "14px",
      margin: "0 0 10px"
    },
    cardContent: {
      padding: "15px 20px !important",
      position: "relative"
    }
  };
};

export default regularCardStyle;
