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
    /**
   * The color of the component.
   * @default "gray"
   */
    color: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    /**
    * The variant to use. Use indeterminate or query when there is no progress value.
    * @default "indeterminate"
    */
    variant: PropTypes.oneOf([
        "determinate",
        "indeterminate",
        "buffer",
        "query"
    ]),
    /**
    * The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100.
    */
    value: PropTypes.number
};