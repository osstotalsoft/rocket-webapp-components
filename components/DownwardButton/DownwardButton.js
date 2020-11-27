import React from "react";
import PropTypes from "prop-types";
import { ArrowDownward } from '@material-ui/icons';
import CustomIconButton from '../IconButton';

function DownwardButton({ title, onClick, disabled, fontSize, ...rest }) {
    return (
        <CustomIconButton aria-label="Downward" disabled={disabled} onClick={onClick} tooltip={title} {...rest}>
            <ArrowDownward fontSize={fontSize} />
        </CustomIconButton>
    )
}

DownwardButton.defaultProps = {
    color: "theme",
    fontSize: "small",
    size: "medium"
};

DownwardButton.propTypes = {
   /** 
   * The title of button.
   */
    title: PropTypes.string,
   /**
    * Callback fired when a "click" event is detected.
    */
    onClick: PropTypes.func,
    /**
   * If true, the button will be disabled.
   */
    disabled: PropTypes.bool,
    /**
   * The color of button.
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
    * The size of button.
    */
    size: PropTypes.oneOf([
        "small",
        "medium"
    ]),
    /**
   * The fontSize of button's content.
   */
    fontSize: PropTypes.oneOf([
        "inherit",
        "default",
        "small",
        "large"
    ])
}

export default DownwardButton;