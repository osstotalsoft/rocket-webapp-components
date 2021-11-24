import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Button, makeStyles, deprecatedPropType } from "@material-ui/core";
import Tooltip from "../Tooltip/Tooltip";
import buttonStyle from "./buttonStyle";

const useStyles = makeStyles(buttonStyle);

function RegularButton({
  tooltip,
  color,
  round,
  children,
  fullWidth,
  disabled,
  className,
  right,
  justIcon,
  size,
  wd,
  ...rest
}) {
  const classes = useStyles();
  const btnClasses = cx({
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [className]: className,
    [classes.right]: right,
    [classes.justIcon]: justIcon,
    [classes.wd]: wd,
    [classes[size]]: size
  });
  const classNames = `${classes.button} ${btnClasses}`;

  return tooltip ? (
    <Tooltip title={tooltip}>
      <Button {...rest} className={classNames}>
        {children}
      </Button>
    </Tooltip>
  ) : (
    <Button {...rest} className={classNames}>
      {children}
    </Button>
  );
}

RegularButton.propTypes = {
  /**
   * The color of button.
   */
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "theme",
    "themeNoBackground",
    "themeWithBackground",
    "defaultNoBackground",
    "primaryNoBackground",
    "infoNoBackground",
    "successNoBackground",
    "warningNoBackground",
    "dangerNoBackground",
    "roseNoBackground",
    "white",
    "transparent",
    "themeWithGradient"
  ]),
  /**
   * If true, rounded corners are enabled.
   */
  round: PropTypes.bool,
  /**
   * 	The content of the component.
   */
  children: PropTypes.node,
  /**
   * 	If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component
   */
  customClass: deprecatedPropType(PropTypes.string, "Use `className` instead."),
  /**
   * A custom class provided.
   */
  className: PropTypes.string,
  /**
   * If true,  the button's min width will be set to 160px.
   */
  wd: PropTypes.bool,
  /**
   * If true, the button will be smaller.
   */
  justIcon: PropTypes.bool,
  /**
   * If true, the button will float to the right.
   */
  right: PropTypes.bool,
  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(["sm", "lg", "xs"]),
  /**
   * The tooltip of the button.
   */
  tooltip: PropTypes.string
};

export default RegularButton;
