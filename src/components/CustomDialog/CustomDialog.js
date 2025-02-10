import React, { useCallback } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Button from "../Button";
import customDialogStyle from "./customDialogStyle";
import cx from "classnames";

const useStyles = makeStyles(customDialogStyle);

const CustomDialog = ({
  id,
  open,
  title,
  content,
  textContent,
  onYes,
  onClose,
  buttonColor,
  buttonSize,
  showActions,
  fullWidth,
  maxWidth,
  textDialogYes,
  textDialogNo,
  showX,
  overflowY,
  disableBackdropClick,
  disableEscapeKeyDown,
  ...rest
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
      aria-labelledby={`${id}-dialog-yes-no-title`}
      aria-describedby={`${id}-dialog-yes-no-description`}
      maxWidth={maxWidth}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      {...rest}
    >
      <DialogTitle id={`${id}-dialog-yes-no-title`} className={classes.text}>
        {title}
        {showX && (
          <IconButton
            size="small"
            className={classes.modalCloseButton}
            aria-label="Close"
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent className={classes.content + " " + contentClasses}>
        <Grid item lg={12}>
          {textContent && (
            <DialogContentText id={`${id}-dialog-yes-no-description`}>
              {textContent}
            </DialogContentText>
          )}
        </Grid>
        <Grid item lg={12}>
          {content}
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          alignItems="center"
          lg={12}
        >
          {showActions && (
            <>
              <Button
                right
                size={buttonSize}
                color={buttonColor}
                onClick={onYes}
              >
                {textDialogYes}
              </Button>
              <Button
                right
                size={buttonSize}
                color={buttonColor}
                onClick={handleClose}
              >
                {textDialogNo}
              </Button>
            </>
          )}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

CustomDialog.defaultProps = {
  buttonColor: "primary",
  buttonSize: "sm",
  showActions: false,
  maxWidth: "md",
  fullWidth: true,
  textDialogYes: "Yes",
  textDialogNo: "No"
};

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
   * Callback fired when the component requests to be closed.
   * Signature: function(event: object, reason: string) => void
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: "escapeKeyDown", "backdropClick", "closeActionClick".
   */
  onClose: PropTypes.func,
  /**
   * If true, the actions(buttons) below are shown.
   */
  showActions: PropTypes.bool,
  /**
   * Determine the max-width of the container. The container width grows with the size of the screen. Set to false to disable maxWidth.
   */
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", false]),
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
   * if true, the dialog will have a close button
   */
  showX: PropTypes.bool,
  /**
   * the value of the overflowY CSS property
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

export default CustomDialog;
