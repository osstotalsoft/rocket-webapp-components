import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import forbiddenStyle from './forbiddenStyle';
import PropTypes from "prop-types";

const useStyles = makeStyles(forbiddenStyle);

const Forbidden = ({ forbiddenText }) => {
    const classes = useStyles();

    return (
        <Card className={classes.cardStyle}>
            <Typography align={"center"} variant={"h6"} className={classes.textStyle}>{forbiddenText}</Typography>
        </Card>
    )
}

Forbidden.defaultProps = {
    forbiddenText: "Not allowed to see this page!"
}

Forbidden.propTypes = {
    forbiddenText: PropTypes.string
};

export default Forbidden;