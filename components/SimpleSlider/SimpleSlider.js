import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormHelperText } from '@material-ui/core';
import CustomTextField from "../CustomTextField";
import Typography from '../Typography';
import Slider from '@material-ui/core/Slider';
import debounce from 'lodash.debounce';
import simpleSliderStyle from "./simpleSliderStyle";

const useStyles = makeStyles(simpleSliderStyle);

const SimpleSlider = ({ label, fullWidth, value, min, max, step, onChange, error,
    helperText, required, decimalScale, thousandSeparator, disabled, showSliderLimits, ...other }) => {
    const classes = useStyles();

    const onTextChanged = useCallback(event => {
        if (event.target && event.target.value) {
            if (event.target.value <= min) {
                onChange(null, min);
            }
            else if (event.target.value >= max) {
                onChange(null, max);
            }
            else {
                onChange(null, event.target.value);
            }
        }
        else {
            onChange(null, min);
        }
    }, [onChange, min, max])

    const OnTextChangedDebounced = debounce(onTextChanged, 1000)

    return (
        <FormControl fullWidth={fullWidth} className={classes.formControl} error={error} required={required}>
            <CustomTextField
                label={label}
                fullWidth={fullWidth}
                required={required}
                value={value}
                onChange={OnTextChangedDebounced}
                isNumeric={true}
                inputProps={{ decimalScale: decimalScale, thousandSeparator: thousandSeparator }}
                disabled={disabled}
            />

            <Slider classes={{ root: classes.sliderRoot, track: error ? classes.sliderTrackError : null, thumb: classes.sliderThumb }}
                value={value}
                min={min}
                max={max}
                step={step}
                aria-labelledby="continuous-slider"
                onChange={onChange}
                disabled={disabled}
                {...other}
            />

            {showSliderLimits && (
                <div className={classes.sliderLimits}>
                    <Typography variant="overline" className={classes.disabledText}>{min ? min.toFixed(decimalScale) : min}</Typography>
                    <Typography variant="overline" className={classes.disabledText} style={{ textAlign: 'end' }}>{max ? max.toFixed(decimalScale) : max}</Typography>
                </div>
            )}
            <FormHelperText error={error}>{helperText}</FormHelperText>
        </FormControl>
    )
}

SimpleSlider.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    fullWidth: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    decimalScale: PropTypes.number,
    thousandSeparator: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    disabled: PropTypes.bool,
    showSliderLimits: PropTypes.bool
};

export default SimpleSlider;
