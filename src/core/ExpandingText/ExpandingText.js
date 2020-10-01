import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FormControlLabel } from '@material-ui/core';

const ExpandingText = ({ text, minLength }) => {

    const [expanded, setExpanded] = React.useState(false);
    const { t } = useTranslation();
    const handleChange = _ => {
        setExpanded(!expanded);
    }

    return (
        !expanded ?
            <React.Fragment>
                <div>
                    <FormControlLabel
                        control={<div> {text.substring(0, minLength)} <br /> {text.length > minLength ?
                            <div onClick={handleChange} style={{ cursor: "pointer", "color": "blue" }}>{t("ShowMore")}</div> : ""}</div>}
                    />
                </div>
            </React.Fragment> :
            <React.Fragment>
                <div>
                    <FormControlLabel
                        control={<div> {text} <br />
                            <div onClick={handleChange} style={{ cursor: "pointer", "color": "blue" }}>{t("ShowLess")}</div></div>}
                    />
                </div>
            </React.Fragment>
    )
}

ExpandingText.defaultProps = {
    minLength: 2000
}

ExpandingText.propTypes = {
    text: PropTypes.string.isRequired,
    minLength: PropTypes.number
};

export default ExpandingText;