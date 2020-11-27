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
    color: "theme",
    fontSize: "default",
    size: "medium"
};

DeleteButton.propTypes = {
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
};

export default DeleteButton;