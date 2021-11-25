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
    color: "theme",
    fontSize: "small",
    size: "medium"
};

BackToButton.propTypes = {
    /**
  * The title of button.
  */
    title: PropTypes.string,
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
    ]),
    /**
  * The path where the browser will be directed to when the button is clicked.
  */
    path: PropTypes.string
}

export default BackToButton;