import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

const NotFound = ({ ...props }) => {
    const { title } = props;
    return (
        <Card>
            <React.Fragment>
                {title}
            </React.Fragment>
        </Card>
    )
}

NotFound.propTypes = {
    title: PropTypes.string
}

export default NotFound;