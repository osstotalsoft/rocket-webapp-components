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
    title?: string | React.ReactNode
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
     * Callback fired when a "click" event is detected.
     */
    onClose?: () => void
    /**
     * Callback fired when the backdrop is clicked.
     */
    onBackdropClick?: () => void
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
     * If true, the button will take up the full width of its container.
     */
    fullWidth?: boolean
    /**
     * @default false
     * If true, the dialog will be full-screen.
     */
    fullScreen?: boolean
    /**
     * @default 'paper'
     * Determine the container for scrolling the dialog.
     */
    scroll?: 'body' | 'paper'
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
     * @default false
     * If true, clicking the backdrop will not fire the onClose callback.
     */
    disableBackdropClick?: boolean
    /**
     * @default false
     * If true, hitting escape will not fire the onClose callback.
     */
    disableEscapeKeyDown?: boolean
    /**
     * if true, the dialog will have a close button
     */
    showX?: boolean
    /**
     * The value of the overflowY CSS property
     */
    overflowY?: "scroll" | "hidden" | "visible" | "auto"
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/custom-dialog
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/CustomDialog/CustomDialog.js
 * 
 * Material-UI components used:
 * 
 * - Dialog: https://material-ui.com/api/dialog/
 * - DialogTitle: https://material-ui.com/api/dialog-title/
 * - DialogContent: https://material-ui.com/api/dialog-content/
 * - DialogContentText: https://material-ui.com/api/dialog-content-text/
 * 
 */
export default function CustomDialog(props: CustomDialogProps): JSX.Element;