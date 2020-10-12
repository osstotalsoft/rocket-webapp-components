import React from "react";
import PropTypes from "prop-types";
import { makeStyles, LinearProgress } from "@material-ui/core";
import customLinearProgressStyle from "./customLinearProgressStyle";

const useStyles = makeStyles(customLinearProgressStyle);

export default function CustomLinearProgress(props) {
    const { color, variant, value, ...rest } = props;
    const classes = useStyles();
    return (
        <LinearProgress
            value={value} variant={variant} {...rest}
            classes={{
                root: classes.root + " " + classes[color + "Background"],
                bar: classes.bar + " " + classes[color]
            }}
        />
    );
}

CustomLinearProgress.defaultProps = {
    color: "gray",
    variant: "indeterminate"
};

CustomLinearProgress.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    variant: PropTypes.oneOf([
        "determinate",
        "indeterminate",
        "buffer",
        "query"
    ]),
    value: PropTypes.number
};