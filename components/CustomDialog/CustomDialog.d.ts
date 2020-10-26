import { DialogProps } from "@material-ui/core";

export interface CustomDialogProps extends Omit<DialogProps, 'open' | 'fullWidth' | 'maxWidth' | 'onClose'> {
    /**
    * 	The id(s) of the element(s) that label the dialog.
    */
    id: string
    /**
    * If true, the dialog is open.
    * @default false
    */
    open: boolean
    /**
    * The title of dialog.
    */
    title?: string
    /**
    * The color of actions.
    * @default "primary"
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
    * @default "sm"
    */
    buttonSize?: "sm" | "lg" | "xs"
    /**
    * The content of dialog.
    */
    textContent: string
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
    * @default false
    */
    showActions?: boolean
    /**
    * Determine the max-width of the container. The container width grows with the size of the screen. Set to false to disable maxWidth.
    * @default "md"
    */
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
    /**
    * 	If true, the button will take up the full width of its container.
    * @default true
    */
    fullWidth?: boolean
    /**
    * the text content of the first action.(the button for denial)
    * @default "Yes"
    */
    textDialogYes?: string
    /**
    * the text content of the second action.(the button for approval)
    * @default "No"
    */
    textDialogNo?: string
    /**
    * the additional properties you can send to Dialog component
    */
    otherDialogProps: Object
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/custom-dialog
 *
 */
export default function CustomDialog(props: CustomDialogProps): JSX.Element;