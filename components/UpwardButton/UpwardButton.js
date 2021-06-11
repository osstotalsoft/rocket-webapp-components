import React from "react";
import PropTypes from "prop-types";
import { ArrowUpward } from '@material-ui/icons';
import CustomIconButton from '../IconButton';

function UpwardButton({ title, onClick, disabled, fontSize, ...rest }) {
    return (
        <CustomIconButton aria-label="Upward" disabled={disabled} onClick={onClick} tooltip={title} {...rest}>
            <ArrowUpward fontSize={fontSize} />
        </CustomIconButton>
    )
}

UpwardButton.defaultProps = {
    color: "theme",
    fontSize: "small",
    size: "medium"
};

UpwardButton.propTypes = {
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
}

export default UpwardButton;