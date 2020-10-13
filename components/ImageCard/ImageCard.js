import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";
import Card from '../Card';
import imageCardStyle from "./imageCardStyle";

const useStyles = makeStyles(imageCardStyle);

function ImageCard({ children, image, imageSize, alternateText, ...rest }) {
    const classes = useStyles();

    return (
        <Card {...rest}>
            <Grid container justify='center'>
                <img className={classes.image + ' ' + classes[imageSize]} src={image} alt={alternateText} />
            </Grid>
            {children}
        </Card>
    );
}

ImageCard.defaultProps = {
    imageSize: 's'
};

ImageCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    image: PropTypes.string,
    //Specifies an alternate text for the image, if the image for some reason cannot be displayed
    alternateText: PropTypes.string,
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ]),
    imageSize: PropTypes.oneOf(['s', 'm', 'l'])
};

export default ImageCard;