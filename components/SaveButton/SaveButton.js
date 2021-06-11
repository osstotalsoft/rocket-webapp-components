import React from "react";
import PropTypes from "prop-types";
import SaveIcon from '@material-ui/icons/Save';
import CustomIconButton from '../IconButton';

const SaveButton = ({ title, onClick, disabled, fontSize, ...rest }) => (
    <CustomIconButton aria-label="Save" onClick={onClick} disabled={disabled} tooltip={title} {...rest}>
        <SaveIcon fontSize={fontSize} />
    </CustomIconButton>
)

SaveButton.defaultProps = {
    color: "theme",
    size: "medium",
    fontSize: "small"
};

SaveButton.propTypes = {
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
        "medium",
        "large"
    ])
};

export default SaveButton;