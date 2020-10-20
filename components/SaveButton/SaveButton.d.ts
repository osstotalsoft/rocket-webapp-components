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
    * - https://bit.dev/totalsoft_oss/react-mui/save-button
    * 
    */
}

export default function SaveButton(props: SaveButtonProps): JSX.Element;