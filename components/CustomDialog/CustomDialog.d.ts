export interface CustomDialogProps {
    /**
    * 	The id(s) of the element(s) that label the dialog.
    */
    id: String
    /**
     * If true, the dialog is open.
     * @default false
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
    * Callback fired when a "click" event is detected.
    */
    onYes?: () => void
    /**
    *  Callback fired when a "click" event is detected.
    */
    onClose?: () => void
    /**
    * If true, the actions(buttons) below are shown.
    */
    showActions?: Boolean
    /**
   * Determine the max-width of the container. The container width grows with the size of the screen. Set to false to disable maxWidth.
   */
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
    /**
   * 	If true, the button will take up the full width of its container.
   */
    fullWidth?: Boolean
    /**
   * the text content of the first action.(the button for denial)
   */
    textDialogYes?: String
    /**
   * the text content of the second action.(the button for approval)
   */
    textDialogNo?: String
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/custom-dialog
 *
 */
export default function CustomDialog(props: CustomDialogProps): JSX.Element;