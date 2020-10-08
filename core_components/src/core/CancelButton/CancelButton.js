import React from "react";
import PropTypes from "prop-types";
import CancelIcon from '@material-ui/icons/Cancel';
import CustomIconButton from '../IconButton';

const CancelButton = ({ title, onClick, disabled, fontSize, ...rest }) => (
    <CustomIconButton aria-label="Cancel" onClick={onClick} disabled={disabled} tooltip={title} {...rest}>
        <CancelIcon fontSize={fontSize} />
    </CustomIconButton>
)

CancelButton.defaultProps = {
    color: "themeNoBackground",
    fontSize: "small",
    size: "medium"
};

CancelButton.propTypes = {
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

export default CancelButton;