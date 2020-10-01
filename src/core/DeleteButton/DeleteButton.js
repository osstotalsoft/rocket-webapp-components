import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from '@material-ui/icons/Delete';
import CustomIconButton from '../IconButton';

const DeleteButton = ({ title, onClick, disabled, fontSize, ...rest }) => (
    <CustomIconButton aria-label="Delete" onClick={onClick} disabled={disabled} tooltip={title} {...rest}>
        <DeleteIcon fontSize={fontSize} />
    </CustomIconButton>
)

DeleteButton.defaultProps = {
    color: "themeNoBackground",
    fontSize: "default",
    size: "small"
};

DeleteButton.propTypes = {
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

export default DeleteButton;