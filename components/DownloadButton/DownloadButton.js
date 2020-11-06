import React from "react";
import PropTypes from "prop-types";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CustomIconButton from '../IconButton';

const DownloadButton = ({ title, onClick, disabled, fontSize, ...rest }) => (
    <CustomIconButton aria-label="Download" onClick={onClick} disabled={disabled} tooltip={title} {...rest}>
        <CloudDownloadIcon fontSize={fontSize} />
    </CustomIconButton>
)

DownloadButton.defaultProps = {
    color: "theme",
    fontSize: "default",
    size: "medium"
};

DownloadButton.propTypes = {
    /**
    * The title of button.
    */
    title: PropTypes.string,
    /**
    * Callback fired when a "click" event is detected.
    */
    onClick: PropTypes.func,
    /**
    * The color of button.
    * @default "theme"
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
    * @default "medium"
    */
    size: PropTypes.oneOf([
        "small",
        "medium"
    ]),
    /**
    * The fontSize of button's content.
    * @default "default" 
    */
    fontSize: PropTypes.oneOf([
        "inherit",
        "default",
        "small",
        "large"
    ]),
    /**
    * If true, the button will be disabled.
    */
    disabled: PropTypes.bool
};

export default DownloadButton;