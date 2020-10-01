import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import CustomIconButton from '../IconButton';

function BackToButton({ title, path, fontSize, ...rest }) {
    const history = useHistory();

    const onBackToList = useCallback(() => {
        history.push(path);
    }, [history, path])

    return (
        <CustomIconButton aria-label="Back" onClick={onBackToList} tooltip={title} {...rest}>
            <ArrowBack fontSize={fontSize} />
        </CustomIconButton>
    )
}

BackToButton.defaultProps = {
    color: "themeWithBackground",
    fontSize: "small",
    size: "small"
};

BackToButton.propTypes = {
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
    ]),
    title: PropTypes.string,
    path: PropTypes.string
}

export default BackToButton;