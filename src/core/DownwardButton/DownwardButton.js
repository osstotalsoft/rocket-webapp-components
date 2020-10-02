import React from "react";
import PropTypes from "prop-types";
import { ArrowDownward } from '@material-ui/icons';
import CustomIconButton from '../IconButton';

function DownwardButton({ title, onClick, disabled, fontSize, ...rest }) {
    return (
        <CustomIconButton aria-label="Downward" disabled={disabled} onClick={onClick} tooltip={title} {...rest}>
            <ArrowDownward fontSize={fontSize} />
        </CustomIconButton>
    )
}

DownwardButton.defaultProps = {
    color: "themeNoBackground",
    fontSize: "small",
    size: "medium"
};

DownwardButton.propTypes = {
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
}

export default DownwardButton;