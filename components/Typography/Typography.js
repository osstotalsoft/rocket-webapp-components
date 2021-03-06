import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography as BaseTypography } from "@material-ui/core";
import Tooltip from '../Tooltip/Tooltip';
import typographyStyle from './typographyStyle';

const useStyles = makeStyles(typographyStyle)

const Typography = ({ tooltip, ...res }) => {
    const classes = useStyles();
    const base = <BaseTypography className={classes.defaultFont} {...res} />
    return tooltip ? <Tooltip title={tooltip}>{base}</Tooltip> : base
}

Typography.defaultProps = {
    variant: 'inherit'
}

Typography.propTypes = {
    tooltip: PropTypes.string,
    variant: PropTypes.oneOf([
        'inherit',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline'
    ]),
    color: PropTypes.oneOf([
        'initial',
        'inherit',
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'error'
    ]),
    align: PropTypes.oneOf([
        'inherit',
        'left',
        'center',
        'right',
        'justify'
    ])
}

export default Typography;