import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from '@material-ui/core';

const ExpandingText = ({ text, minLength, showLessText, showMoreText }) => {

    const [expanded, setExpanded] = React.useState(false);
    const handleChange = _ => {
        setExpanded(!expanded);
    }
    
    return (
        !expanded ?
            <React.Fragment>
                <div>
                    <FormControlLabel
                        control={<div> {text.substring(0, minLength)} <br /> {text.length > minLength ?
                            <div onClick={handleChange} style={{ cursor: "pointer", "color": "blue" }}>{showMoreText}</div> : ""}</div>}
                    />
                </div>
            </React.Fragment> :
            <React.Fragment>
                <div>
                    <FormControlLabel
                        control={<div> {text} <br />
                            <div onClick={handleChange} style={{ cursor: "pointer", "color": "blue" }}>{showLessText}</div></div>}
                    />
                </div>
            </React.Fragment>
    )
}

ExpandingText.defaultProps = {
    minLength: 2000,
    showLessText: "Show less",
    showMoreText: "Show more"
}

ExpandingText.propTypes = {
    text: PropTypes.string.isRequired,
    minLength: PropTypes.number,
    showLessText: PropTypes.string.isRequired,
    showMoreText: PropTypes.string.isRequired
};

export default ExpandingText;