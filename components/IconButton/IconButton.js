import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { IconButton, makeStyles, deprecatedPropType } from "@material-ui/core";
import Tooltip from '../Tooltip/Tooltip';
import iconButtonStyle from "./iconButtonStyle";
import { dissoc } from 'ramda'

const useStyles = makeStyles(iconButtonStyle);

// eslint-disable-next-line react/prop-types
const Button = ({ children, color, className, ...rest }) => {
  const classes = useStyles();
  const buttonClasses =
    classes.button +
    cx({
      [" " + classes[color]]: color,
      [" " + className]: className
    });
  const restData = dissoc('title', { ...rest })
  return <IconButton {...restData} className={buttonClasses}>
    {children}
  </IconButton>
}

function CustomIconButton({ tooltip, ...rest }) {
  const title = tooltip ? tooltip : rest?.title
  return title ? (
    <Tooltip title={title}>
      <Button {...rest} />
    </Tooltip>
  ) : (
    <Button {...rest} />
  )
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
    "defaultNoBackground",
    "primaryNoBackground",
    "infoNoBackground",
    "successNoBackground",
    "warningNoBackground",
    "dangerNoBackground",
    "roseNoBackground",
    "themeWithGradient"
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
  customClass: deprecatedPropType(
    PropTypes.string,
    'Use `className` instead.',
  ),
  /**
  * Override or extend the styles applied to the component
  */
  className: PropTypes.string,
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