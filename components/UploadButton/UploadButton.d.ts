export interface UploadButtonProps {

    /**
     * The text displayed when user hover over the button
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
     * The content of the button
     */
    children?: React.ReactNode;

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
     * @default "medium"
     * The size of the font
     
     */
    fontSize?: "inherit" |
                "small" |
                "medium" |
                "large"

    /**
    * Override or extend the styles applied to the component
    */
    customClass?: string
    
    /**
    * @default "false"
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
    * - https://bit.dev/totalsoft_oss/react-mui/upload-button
    * 
    *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/UploadButton/UploadButton.js
    * 
    * Bit component used:
    * 
    * - IconButton: https://bit.dev/totalsoft_oss/react-mui/icon-button
    *
    */
}

export default function UploadButton(props: UploadButtonProps): JSX.Element;