import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, useMediaQuery, useTheme } from "@material-ui/core";
import Button from '../Button';
import customDialogStyle from './customDialogStyle';

const useStyles = makeStyles(customDialogStyle);

const CustomDialog = props => {
    const { id, open, title, content, textContent, onYes,
        onClose, buttonColor, buttonSize, showActions,
        fullWidth, maxWidth, textDialogYes, textDialogNo,
        ...otherDialogProps } = props;
        
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    return <Dialog
        PaperProps={{
            className: classes.paper
        }}
        open={open}
        onClose={onClose}
        aria-labelledby={`${id}-dialog-yes-no-title`}
        aria-describedby={`${id}-dialog-yes-no-description`}
        maxWidth={maxWidth}
        fullScreen={fullScreen}
        fullWidth={fullWidth}
        {...otherDialogProps}
    >
        <DialogTitle id={`${id}-dialog-yes-no-title`} className={classes.text}>
            {title}
        </DialogTitle>
        <DialogContent className={classes.content}>
            <Grid item lg={12}>
                {textContent &&
                    <DialogContentText id={`${id}-dialog-yes-no-description`}>
                        {textContent}
                    </DialogContentText>}
            </Grid>
            <Grid item lg={12}>
                {content}
            </Grid>
            <Grid item container justify="flex-end" alignItems="center" lg={12}>
                {showActions && <>
                    <Button right size={buttonSize} color={buttonColor} onClick={onYes}>{textDialogYes}</Button>
                    <Button right size={buttonSize} color={buttonColor} onClick={onClose}>{textDialogNo}</Button>
                </>
                }
            </Grid>
        </DialogContent>
    </Dialog >
}

CustomDialog.defaultProps = {
    buttonColor: "primary",
    buttonSize: "sm",
    showActions: false,
    maxWidth: "md",
    fullWidth: true,
    textDialogYes: "Yes",
    textDialogNo: "No"
}

CustomDialog.propTypes = {
    /**
    * The id(s) of the element(s) that label the dialog.
    */
    id: PropTypes.string.isRequired,
    /**
    * If true, the dialog is open.
    */
    open: PropTypes.bool.isRequired,
    /**
    * The title of dialog.
    */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    * The color of actions.
    */
    buttonColor: PropTypes.oneOf([
        "primary",
        "info",
        "theme",
        "themeNoBackground",
        "themeWithBackground",
        "success",
        "warning",
        "danger",
        "rose",
        "defaultNoBackground",
        "primaryNoBackground",
        "infoNoBackground",
        "successNoBackground",
        "warningNoBackground",
        "dangerNoBackground",
        "roseNoBackground",
        "white",
        "simple",
        "transparent"
    ]),
    /**
    * The size of buttons.
    */
    buttonSize: PropTypes.oneOf(["sm", "lg", "xs"]),
    /**
    * The content of dialog.
    */
    textContent: PropTypes.string,
    /**
    * The content of dialog.
    */
    content: PropTypes.node,
    /**
    * Callback fired when a "click" event is detected.
    */
    onYes: PropTypes.func,
    /**
    * Callback fired when a "click" event is detected.
    */
    onClose: PropTypes.func,
    /**
    * If true, the actions(buttons) below are shown.
    */
    showActions: PropTypes.bool,
    /**
    * Determine the max-width of the container. The container width grows with the size of the screen. Set to false to disable maxWidth.
    */
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
    /**
    * If true, the button will take up the full width of its container.
    */
    fullWidth: PropTypes.bool,
    /**
    * the text content of the first action.(the button for denial)
    */
    textDialogYes: PropTypes.string,
    /**
    * the text content of the second action.(the button for approval)
    */
    textDialogNo: PropTypes.string,
    /**
    * the additional properties you can send to Dialog component
    */
    otherDialogProps: PropTypes.object
}

export default CustomDialog