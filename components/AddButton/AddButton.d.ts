export interface AddButtonProps {
    /**
    * The title of button.
    */
    title?: String;
    /**
     * Callback fired when a "click" event is detected.
     */
    onClick?: () => void
    /**
    * If true, the button will be disabled.
    */
    disabled?: Boolean
    /**
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
            "roseNoBackground"
    /**
      * The size of button.
      */
    size?: "medium" | "small"
    /**
    * The fontSize of button's content.
    */
    fontSize?: "inherit" | "default" | "small" | "large"

}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/add-button
 *
 * 
 */
export default function AddButton(props: AddButtonProps): JSX.Element;