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
    color: "theme",
    fontSize: "small",
    size: "medium"
};

AddButton.propTypes = {
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

export default AddButton;