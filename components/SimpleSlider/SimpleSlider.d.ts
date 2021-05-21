import { FormControlProps } from '@material-ui/core/FormControl'
import { FormHelperTextProps } from '@material-ui/core/FormHelperText'

export interface Props {

    /**
     * The value of the label
     */
    label?: string;

    /**
     * The value of the slider. For ranged sliders, provide an array with two values.
     */
    value?: number | number[];

    /**
     * Callback function that is fired when the slider's value changed.
     * event: The event source of the callback.
     * value: The new value.
     */
    onChange?: (event: object, value: number | number[]) => void;

    /**
     * If true, the component will take up the full width of its container.
     */
    fullWidth?: boolean;

    /**
     * The minimum allowed value of the slider. Should not be equal to max.
     */
    min?: number;

    /**
     * The maximum allowed value of the slider. Should not be equal to min.
     */
    max?: number;

    /**
     * The granularity with which the slider can step through values. (A "discrete" slider.)
     * The min prop serves as the origin for the valid values. We recommend (max - min) to be evenly divisible by the step.
     * When step is null, the thumb can only be slid onto marks provided with the marks prop.
     */
    step?: number;

    /**
     * Marks indicate predetermined values to which the user can move the slider. If true the marks will be spaced according 
     * the value of the step prop. If an array, it should contain objects with value and an optional label keys.
     */
    marks?: boolean | array;

    /**
     * If true, the error data is provided.
     */
    error?: boolean;

    /**
     * The helper text content.
     */
    helperText?: string;

    /**
     * If true, the label is displayed as required and the input element` will be required.
     */
    required?: boolean;

    /**
     * number of decimals to be displayed
     */
    decimalScale?: number;

    /**
     * If true, the slider will be disabled
     */
    disabled?: boolean;

    /**
     * If true, the slider limits will be displayed
     */
    showSliderLimits?: boolean;

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: 'primary' | 'secondary';

    /**
     * The slider orientation.
     */
    orientation?: 'horizontal' | 'vertical';

    /**
     * Demos:
     * 
     * - https://bit.dev/totalsoft_oss/react-mui/simple-slider
     * 
     *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/SimpleSlider/SimpleSlider.js
     * 
     * Material-UI component used:
     * 
     * - Slider: https://material-ui.com/api/slider/
     * 
     */

}

export type SimpleSliderProps = Props | FormControlProps | FormHelperTextProps

export default function SimpleSlider(props: SimpleSliderProps): JSX.Element;