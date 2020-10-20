export interface DialogDisplayProps {
    /**
    * The id(s) of the element(s) that label the dialog.
    */
    id: string;
    /**
    * If true, the dialog is open.
    * @default false
    */
    open?: boolean
    /**
    *Callback fired when the component requests to be closed.
    * Signature:
    * function(event: object, reason: string) => void
    * event: The event source of the callback.
    * reason: Can be: "escapeKeyDown", "backdropClick".
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

}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/dialog-display
 *
 * 
 */
export default function DialogDisplay(props: DialogDisplayProps): JSX.Element;