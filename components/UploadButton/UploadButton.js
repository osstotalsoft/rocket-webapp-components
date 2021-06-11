import React from "react";
import PropTypes from "prop-types";
import BackupIcon from '@material-ui/icons/Backup';
import CustomIconButton from '../IconButton';

const UploadButton = ({ title, onClick, disabled, children, fontSize, ...rest }) => (
    <CustomIconButton aria-label="Upload" onClick={onClick} disabled={disabled} tooltip={title} {...rest}>
        {children}
        <BackupIcon fontSize={fontSize} />
    </CustomIconButton>
)

UploadButton.defaultProps = {
    color: "theme",
    size: "medium",
    fontSize: "default"
};

UploadButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node,
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
        "medium",
        "large"
    ])
};

export default UploadButton;