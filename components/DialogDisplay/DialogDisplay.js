import React from "react";
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, makeStyles, Typography, IconButton, DialogContent, DialogActions } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import dialogDisplayStyle from './dialogDisplayStyle';

const useStyles = makeStyles(dialogDisplayStyle);

const DialogDisplay = (props) => {
    const { id, open, title, onClose, content, actions } = props
    const classes = useStyles()

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby={`${id}-dialog-display-title`}
            maxWidth="xl"
        >
            <DialogTitle id={`${id}-dialog-display-title`}>
                <Typography className={classes.modalTitle}>{title}</Typography>
                <IconButton size="small" className={classes.modalCloseButton} aria-label="Close" onClick={onClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                {actions}
            </DialogActions>
        </Dialog>)
}

DialogDisplay.propTypes = {
    /**
* The id(s) of the element(s) that label the dialog.
*/
    id: PropTypes.string.isRequired,
    /**
* If true, the dialog is open.
* @default false
*/
    open: PropTypes.bool,

    title: PropTypes.string,
    /**
    *Callback fired when the component requests to be closed.
   * Signature:
   * function(event: object, reason: string) => void
   * event: The event source of the callback.
   * reason: Can be: "escapeKeyDown", "backdropClick".
    */
    onClose: PropTypes.func,
    /**
* The content of dialog.
*/
    content: PropTypes.node,
    /**
* The actions provided below the dialog.  
*/
    actions: PropTypes.node
}

export default DialogDisplay