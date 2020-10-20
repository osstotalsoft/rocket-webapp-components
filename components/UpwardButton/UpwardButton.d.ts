export interface UpwardButtonProps {

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
     * The color of the button
     * @default "themeWithBackground"
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
     * The size of the button
     * @default "medium"
     */
    size?: "small" |
    "medium"

    /**
     * The size of the font
     * @default "small"
     */
    fontSize?: "inherit" |
    "default" |
    "small" |
    "large"

    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/upward-button
    * 
    */

}

export default function UpwardButton(props: UpwardButtonProps): JSX.Element;