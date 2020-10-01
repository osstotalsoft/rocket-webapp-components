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
    id: PropTypes.string.isRequired,
    open: PropTypes.bool,
    title: PropTypes.string,
    onClose: PropTypes.func,
    content: PropTypes.element,
    actions: PropTypes.element
}

export default DialogDisplay