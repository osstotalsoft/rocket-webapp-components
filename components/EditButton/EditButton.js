import React from "react";
import PropTypes from "prop-types";
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CustomIconButton from '../IconButton';

const EditButton = ({ title, onClick, editMode, disabled, fontSize, ...rest }) => (
    <CustomIconButton aria-label="Edit" onClick={onClick} disabled={disabled} tooltip={title} {...rest}>
        {editMode === true
            ? <EditIcon fontSize={fontSize} />
            : <VisibilityIcon fontSize={fontSize} />}
    </CustomIconButton>
)

EditButton.defaultProps = {
    editMode: true,
    color: "themeNoBackground",
    fontSize: "default",
    size: "medium"
};

EditButton.propTypes = {
    /**
    * The title of button.
    */
    title: PropTypes.string,
    /**
    * Callback fired when a "click" event is detected.
    */
    onClick: PropTypes.func,
    /**
    * If true, the edit icon will be visible.
    * @default true
    */
    editMode: PropTypes.bool,
    /**
    * If true, the button will be disabled.
   */
    disabled: PropTypes.bool,
    /**
    * The color of button.
    * @default "themeNoBackground"
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
    ])
};

export default EditButton;