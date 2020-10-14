export interface ButtonProps {
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
            "roseNoBackground" |
            "white" |
            "simple" |
            "transparent"
     /**
      * If true, rounded corners are enabled.
      */
    round?: Boolean
    /**
    * 	The content of the component.
    */
    children?: React.ReactNode
    /**
    * 	If true, the button will take up the full width of its container.
    */
    fullWidth?: Boolean
    /**
    * If true, the button will be disabled.
    */
    disabled?: Boolean
    /**
    * A custom class provided.
    */
    customClass?: String
    /**
    * If true,  the button's min width will be set to 160px.
    */
    wd?: Boolean
    /**
    * If true, the button will be smaller.
    */
    justIcon?: Boolean
    /**
    * If true, the button will float to the right.
    */
    right?: Boolean
    /**
    * The size of the button.
    */
    size?: "sm" | "lg" | "xs"
    /**
    * The tooltip of the button.
    */
    tooltip?: String

}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/button
 *
 * 
 */
export default function Button(props: ButtonProps): JSX.Element;