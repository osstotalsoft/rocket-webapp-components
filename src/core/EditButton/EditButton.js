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
    size: "small"
};

EditButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    editMode: PropTypes.bool,
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

export default EditButton;