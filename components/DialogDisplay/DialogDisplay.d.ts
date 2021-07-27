import { DialogProps } from '@material-ui/core/Dialog';

export interface DialogDisplayProps extends Omit<DialogProps, 'open' | 'onClose'> {
    /**
     * The id(s) of the element(s) that label the dialog.
     */
    id: string;
    /**
    *  @default false
     * If true, the dialog is open.
     */
    open?: boolean
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
     * Callback fired when the component requests to be closed.
     * Signature: function(event: object, reason: string) => void
     * @param {object} event The event source of the callback.
     * @param {string} reason Can be: "escapeKeyDown", "backdropClick", "closeActionClick".
     */
    onClose?: (event: object, reason: string) => void
    /**
     * The content of dialog.
     */
    content?: React.ReactNode
    /**
     * The actions provided below the dialog.
     */
    actions?: React.ReactNode
    /**
     * The title of dialog.
     */
    title?: string | React.ReactNode
    /**
     * The value of the overflowY CSS property
     */
    overflowY?: "scroll" | "hidden" | "visible" | "auto"
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/dialog-display
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/DialogDisplay/DialogDisplay.js
 * 
 *  Material UI components used:
 * 
 * - Dialog: https://material-ui.com/api/dialog/
 * - DialogTitle: https://material-ui.com/api/dialog-title/
 * - DialogContent: https://material-ui.com/api/dialog-content/
 * - DialogContentText: https://material-ui.com/api/dialog-content-text/
 * - DialogActions: https://material-ui.com/api/dialog-actions/
 * 
 */
export default function DialogDisplay(props: DialogDisplayProps): JSX.Element;