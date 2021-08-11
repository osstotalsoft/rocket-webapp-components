export interface SaveButtonProps {

    /**
     * The text to be displayed on tooltip
     */
    title?: string;

    /**
     * Callback fired when a "click" event is detected
     * @param {object} event The event source of the callback.
     */
    onClick: (event: React.SyntheticEvent) => void

    /**
     * If set to true, the button will be disabled
     */
    disabled?: boolean

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
    size?: "small" |
    "medium"

    /**
    * @default "small"
    * The size of the font
     */
    fontSize?: "inherit" |
    "small" |
    "large"
    
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

    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/save-button
    * 
    *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/SaveButton/SaveButton.js
    * 
    * Bit component used:
    * 
    * - IconButton: https://bit.dev/totalsoft_oss/react-mui/icon-button
    * 
    */
}

export default function SaveButton(props: SaveButtonProps): JSX.Element;