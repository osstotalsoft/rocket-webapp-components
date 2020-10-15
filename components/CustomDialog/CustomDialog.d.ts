export interface CustomDialogProps {
    /**
    * 	The id(s) of the element(s) that label the dialog.
    */
    id: String
    /**
     * If true, the dialog is open.
     */
    open?: Boolean
    /**
    * The title of dialog.
    */
    title?: String
    /**
    * The color of actions.
    */
    buttonColor?: "primary" |
    "info" |
    "theme" |
    "themeNoBackground" |
    "themeWithBackground" |
    "success" |
    "warning" |
    "danger" |
    "rose" |
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
   * The size of buttons.
   */
    buttonSize?: "sm" | "lg" | "xs"
    /**
    * The content of dialog.
    */
    textContent: String
    /**
    * The content of dialog.
    */
    content: React.ReactNode
    /**
    * The text status of chart.
    */
    statText: String
    /**
    * If true, the chart moves up on click hover.
    */
    hover: Boolean
    /**
    * If provided, its content will appear just below the main content.
    */
    underChart: React.ReactNode
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/chart-card
 *
 * Warning: 
 * This component will be provided only through ChartFactory API. This approach is not compulsory
 *  but it's recommended to ensure the correct behavior of the component.
 */
export default function CustomDialog(props: CustomDialogProps): JSX.Element;