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
  color: "theme",
  size: "medium"
}

CustomIconButton.propTypes = {
  /**
   * The color of the button
   */
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
  /**
  * The size of the button
  */
  size: PropTypes.oneOf([
    "small",
    "medium"
  ]),
  /**
 * Override or extend the styles applied to the component
 */
  customClass: PropTypes.string,
  /**
  * If true, button will be disabled. Default is set to false
  */
  disabled: PropTypes.bool,
  /**
  * The text to be displayed when the user hover over the button
  */
  tooltip: PropTypes.string,
  /**
   * The content of the button
   */
  children: PropTypes.node
};

export default CustomIconButton;