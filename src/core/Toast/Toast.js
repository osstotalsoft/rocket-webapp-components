import { toast } from "react-toastify";
import { makeStyles } from "@material-ui/core";
import toastStyle from "./toastStyle";
import cx from "classnames";

const useStyles = makeStyles(toastStyle);

export function useToast() {
    const classes = useStyles();
    return (message, variant, autoClose = variant !== 'error') => {
        const toastClasses = cx({
            [classes[variant]]: variant,
            [classes['default']]: true
        });

        switch (variant) {
            case 'error':
                toast.error(message, { autoClose: false, className: toastClasses, closeOnClick: false, draggable: false })
                break;
            case 'info':
                toast.info(message, { autoClose, className: toastClasses })
                break;
            case 'success':
                toast.success(message, { autoClose, className: toastClasses })
                break;
            case 'warning':
                toast.warn(message, { autoClose, className: toastClasses })
                break;
            default:
                toast(message, { autoClose, className: toastClasses })
                break;
        }
    }
}