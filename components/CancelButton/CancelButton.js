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

export default CancelButton;