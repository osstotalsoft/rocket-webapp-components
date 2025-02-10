import styles from "../../assets/jss/styles";
import defaultTheme from "../themes/defaultTheme";

const sideMenuStyle = theme => {
  const { whiteColor, grayColor } = styles(theme);

  return {
    sideMenu: {
      position: "fixed",
      top: "180px",
      right: 0,
      width: "44px",
      height: "38px",
      background: "rgba(0, 0, 0, 0.3)",
      zIndex: 1031,
      borderRadius: "8px 0 0 8px",
      textAlign: "center"
    },
    moreButton: {
      display: "flex",
      justifyContent: "center",
      height: "100%",
      "&:hover": {
        outline: "none",
        backgroundColor:
          theme?.palette?.sideMenu?.hoverBgColor ||
          defaultTheme?.palette?.sideMenu?.hoverBgColor,
        boxShadow: "none",
        cursor: "pointer"
      }
    },
    sideMenuIcon: {
      color: `${whiteColor}`,
      height: "100%"
    },
    menuContainer: {
      position: "absolute",
      top: "8px",
      right: "60px",
      zIndex: 1000,
      display: "none",
      float: "left",
      minWidth: "160px",
      minHeight: "40px",
      backgroundColor: `${whiteColor}`,
      opacity: 0,
      border: "1px solid #ccc",
      borderRadius: "4px",
      WebkitBoxShadow: "0 6px 12px rgba(0, 0, 0, 0.175)",
      WebkitTransform: "translateY(-15%)",
      transformOrigin: "0 0",
      margin: "5px",
      padding: "10px",
      "&:before, &:after": {
        content: '""',
        display: "inline-block",
        position: "absolute",
        top: "8%"
      },
      "&:before": {
        borderBottom: "16px solid transparent",
        borderLeft: `16px solid ${grayColor}`,
        borderTop: "16px solid transparent",
        right: "-17px"
      },
      "&:after": {
        borderBottom: "16px solid transparent",
        borderLeft: `16px solid ${whiteColor}`,
        borderTop: "16px solid transparent",
        right: "-16px"
      }
    },
    menuShow: {
      opacity: 1,
      WebkitTransform: "translateY(-13%)",
      transformOrigin: "0 0",
      display: "block"
    }
  };
};

export default sideMenuStyle;
