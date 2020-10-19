export interface IconButtonProps {

    /**
     * The content of the button
     */
    children?: React.ReactNode;

    /**
     * The color of the button
     * @default "defaultNoBackground"
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
    size?: "small" | "medium"

    /**
     * Override or extend the styles applied to the component
     */
    customClass?: String;

    /**
     * If true, button will be disabled. Default is set to false
     */
    disabled?: Boolean;

    /**
     * The text to be displayed when the user hover over the button
     */
    tooltip?: String;

    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/icon-button
    * 
    */
}

export default function IconButton(props: IconButtonProps): JSX.Element;