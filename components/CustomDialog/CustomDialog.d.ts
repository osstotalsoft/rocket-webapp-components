import { DialogProps } from "@material-ui/core";

export interface CustomDialogProps extends Omit<DialogProps, 'open' | 'fullWidth' | 'maxWidth' | 'onClose'> {
    /**
    * 	The id(s) of the element(s) that label the dialog.
    */
    id: string
    /**
    * @default false
    * If true, the dialog is open.
    */
    open: boolean
    /**
    * The title of dialog.
    */
    title?: string
    /**
    * @default "primary"
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
    * @default "sm"
    * The size of buttons.
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
    * @default false
    * If true, the actions(buttons) below are shown.
    */
    showActions?: boolean
    /**
    * @default "md"
    * Determine the max-width of the container. The container width grows with the size of the screen. Set to false to disable maxWidth.
    */
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
    /**
    * @default true
    * 	If true, the button will take up the full width of its container.
    */
    fullWidth?: boolean
    /**
    * @default "Yes"
    * the text content of the first action.(the button for denial)
    */
    textDialogYes?: string
    /**
    * @default "No"
    * the text content of the second action.(the button for approval)
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
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/CustomDialog/CustomDialog.js
 */
export default function CustomDialog(props: CustomDialogProps): JSX.Element;