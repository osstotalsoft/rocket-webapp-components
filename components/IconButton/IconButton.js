import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import iconButtonStyle from "./iconButtonStyle";

const useStyles = makeStyles(iconButtonStyle);

// eslint-disable-next-line react/prop-types
const Button = ({ children, color, customClass, ...rest }) => {
  const classes = useStyles();
  const buttonClasses =
    classes.button +
    cx({
      [" " + classes[color]]: color,
      [" " + customClass]: customClass
    });
  return <IconButton {...rest} className={buttonClasses}>
    {children}
  </IconButton>
}

function CustomIconButton({ tooltip, ...rest }) {
  return tooltip ?
    <Tooltip title={tooltip}>
      <span>
        <Button {...rest} />
      </span>
    </Tooltip>
    :
    <Button {...rest} />
}

CustomIconButton.defaultProps = {
  color: "defaultNoBackground",
  size: "medium"
}

CustomIconButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "theme",
    "themeNoBackground",
    "themeWithBackground",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "simple",
    "defaultNoBackground",
    "primaryNoBackground",
    "infoNoBackground",
    "successNoBackground",
    "warningNoBackground",
    "dangerNoBackground",
    "roseNoBackground"
  ]),
  size: PropTypes.oneOf([
    "small",
    "medium"
  ]),
  customClass: PropTypes.string,
  disabled: PropTypes.bool,
  tooltip: PropTypes.string,
  children: PropTypes.node
};

export default CustomIconButton;