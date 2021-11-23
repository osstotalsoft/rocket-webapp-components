import { ButtonProps } from '@material-ui/core/Button';

export interface EditButtonProps extends Omit<ButtonProps, 'color' | 'disabled'> {
    /**
    * The title of button.
    */
    title?: string;
    /**
    * Callback fired when a "click" event is detected.
    */
    onClick?: () => void
    /**
    * If true, the button will be disabled.
    */
    disabled?: boolean
    /**
    * @default true
    * If true, the edit icon will be visible.
    */
    editMode?: boolean
    /**
    * @default "theme"
    * The color of button.
    */
    color?: "primary" |
    "info" |
    "theme" |
    "themeNoBackground" |
    "themeWithBackground" |
    "success" |
    "warning" |
    "danger" |
    "rose" |
    "white" |
    "simple" |
    "defaultNoBackground" |
    "primaryNoBackground" |
    "infoNoBackground" |
    "successNoBackground" |
    "warningNoBackground" |
    "dangerNoBackground" |
    "roseNoBackground" |
    "themeWithGradient"
    /**
    * @default "medium"
    * The size of button. 
    */
    size?: "medium" | "small"
    /**
    * @default "medium"
    * The fontSize of button's content.
    */
    fontSize?: "inherit" | "small" | "medium" | "large"
    /**
    * Override or extend the styles applied to the component
    */
    className?: string
    /**
    * @default false
    * If true, the keyboard focus ripple will be disabled. 
    */
    disableFocusRipple?: boolean
    /**
     * If true, the ripple effect will be disabled.
     */
    disableRipple?: boolean
    /**
     * @default "false"
     * If given, uses a negative margin to counteract the padding on one side 
     * (this is often helpful for aligning the left or right side of the icon 
     * with content above or below, without ruining the border size and shape).
     */
    edge?: "start" | "end" | "false"
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/edit-button
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/EditButton/EditButton.js
 * 
 * Bit component used:
 * 
 * - IconButton: https://bit.dev/totalsoft_oss/react-mui/icon-button
 * 
 */
export default function EditButton(props: EditButtonProps): JSX.Element;