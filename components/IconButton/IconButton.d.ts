import { IconButtonProps as BaseProps } from '@material-ui/core/IconButton';

export interface IconButtonProps extends Omit<BaseProps, 'color'> {
    /**
    * The content of the button
    */
    children?: React.ReactNode
    /**
    * @default "theme"
    * The color of the button
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
    "roseNoBackground"
    /**
    * @default "medium"
    * The size of the button
    */
    size?: "small" | "medium"
    /**
    * Override or extend the styles applied to the component
    */
    className?: string
    /**
    * @default false
    * If true, button will be disabled.
    */
    disabled?: boolean
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
    /**
    * The text to be displayed when the user hovers over the button
    */
    tooltip?: string
    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/icon-button
    * 
    *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/IconButton/IconButton.js
    * 
    * Material-UI component used:
    * 
    * - IconButton: https://material-ui.com/api/icon-button/
    * 
    */
}

export default function IconButton(props: IconButtonProps): JSX.Element;