import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  makeStyles,
  IconButton,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import dialogDisplayStyle from "./dialogDisplayStyle";

const useStyles = makeStyles(dialogDisplayStyle);

const DialogDisplay = props => {
  const {
    id,
    open,
    title,
    onClose,
    content,
    actions,
    overflowY,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <Dialog
      PaperProps={{
        className: classes.paper
      }}
      open={open}
      onClose={onClose}
      aria-labelledby={`${id}-dialog-display-title`}
      maxWidth="xl"
      {...rest}
    >
      <DialogTitle id={`${id}-dialog-display-title`} className={classes.text}>
        {title}
        <IconButton
          size="small"
          className={classes.modalCloseButton}
          aria-label="Close"
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>
      <DialogContent
        className={`${classes.content} ${overflowY && classes.overflowY}`}
      >
        {content}
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

DialogDisplay.propTypes = {
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  id: PropTypes.string.isRequired,
  /**
   * If true, the dialog is open.
   */
  open: PropTypes.bool,
  /**
   * The title of dialog.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
  actions: PropTypes.node,
  /**
   * The content will overflow
   */
  overflowY: PropTypes.bool
};

export default DialogDisplay;
