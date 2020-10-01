import React from "react";
import PropTypes from "prop-types";
import AddIcon from '@material-ui/icons/Add';
import CustomIconButton from '../IconButton';


const AddButton = ({ title, onClick, disabled, fontSize, ...rest }) => (
    <CustomIconButton aria-label="Add" onClick={onClick} disabled={disabled} tooltip={title} {...rest}>
        <AddIcon fontSize={fontSize} />
    </CustomIconButton>
)

AddButton.defaultProps = {
    color: "themeNoBackground",
    fontSize: "small",
    size: "small"
};

AddButton.propTypes = {
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

export default AddButton;