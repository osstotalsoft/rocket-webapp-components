import React, { useCallback } from "react";
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
import cx from "classnames";

const useStyles = makeStyles(dialogDisplayStyle);

const DialogDisplay = ({
  id,
  open,
  title,
  onClose,
  content,
  actions,
  overflowY,
  disableBackdropClick,
  disableEscapeKeyDown,
  ...rest
}) => {
  const classes = useStyles();
  const contentClasses = cx({
    [classes[overflowY]]: overflowY
  });

  const handleClose = useCallback(
    (event, reason) => {
      if (disableBackdropClick && reason === "backdropClick") return;
      if (disableEscapeKeyDown && reason === "escapeKeyDown") return;

      onClose(event, reason ? reason : "closeActionClick");
    },
    [disableBackdropClick, disableEscapeKeyDown, onClose]
  );

  return (
    <Dialog
      PaperProps={{
        className: classes.paper
      }}
      open={open}
      onClose={handleClose}
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
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.content + " " + contentClasses}>
        {content}
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

DialogDisplay.defaultProps = {
  overflowY: "auto"
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
   * Callback fired when the component requests to be closed.
   * Signature: function(event: object, reason: string) => void
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: "escapeKeyDown", "backdropClick", "closeActionClick".
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
   * The value of the overflowY CSS property
   */
  overflowY: PropTypes.oneOf(["scroll", "hidden", "visible", "auto"]),
  /**
   * If true, clicking the backdrop will not fire the onClose callback.
   */
  disableBackdropClick: PropTypes.bool,
  /**
   * If true, hitting escape will not fire the onClose callback.
   */
  disableEscapeKeyDown: PropTypes.bool
};

export default DialogDisplay;
