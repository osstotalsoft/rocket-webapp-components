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
    color: "themeNoBackground",
    fontSize: "default",
    size: "medium"
};

DownloadButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
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
    fontSize: PropTypes.oneOf([
        "inherit",
        "default",
        "small",
        "large"
    ])
};

export default DownloadButton;