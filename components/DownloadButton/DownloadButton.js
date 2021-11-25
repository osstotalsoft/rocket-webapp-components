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
    fontSize: "medium",
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
        "roseNoBackground",
        "themeWithGradient"
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
        "small",
        "medium",
        "large"
    ]),
    /**
    * If true, the button will be disabled.
    */
    disabled: PropTypes.bool
};

export default DownloadButton;