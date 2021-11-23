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
    color: "theme",
    fontSize: "medium",
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
    */
    editMode: PropTypes.bool,
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
    ])
};

export default EditButton;