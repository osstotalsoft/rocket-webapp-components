import React, { useCallback } from "react";
import PropTypes from "prop-types";
import accepts from 'attr-accept'
import { useToast } from '../Toast';
import UploadButton from '../UploadButton';

function FileUploadButton({ component, children, onFileSelected,
  uploading, disabled, accept, maxSize, minSize, uploadText, uploadingText,
  invalidTypeText, tooLargeText, tooSmallText, ...rest }) {
  const addToast = useToast();
  const Component = component || UploadButton
  const defaultTitle = !component && uploading ? uploadingText : uploadText


  const onInputFileSelected = useCallback(({ target }) => {
    const { validity, files: [file] } = target

    if (!validity.valid) {
      // Ignore, no validation used on input field
      return;
    }

    if (accept && !accepts(file, accept)) {
      addToast(invalidTypeText, 'error')
      return;
    }

    if (maxSize && file.size > maxSize) {
      addToast(tooLargeText, 'error');
      return;
    }

    if (minSize && file.size < minSize) {
      addToast(tooSmallText, 'error');
      return;
    }

    // Reset input value to allow re-seletion
    target.value = null;

    onFileSelected(file);
  }, [onFileSelected, accept, maxSize, minSize, addToast, t])

  return (
    <Component
      variant="contained"
      component="label"
      disabled={uploading || disabled}
      title={defaultTitle}
      {...rest}>
      {children}
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        onChange={onInputFileSelected}
      />
    </Component>
  );
}

FileUploadButton.defaultProps = {
  uploadingText: "Uploading",
  uploadText: "Upload",
  invalidTypeText: "Invalid file type. Please upload type {{accept}}",
  tooLargeText: "Maximum allowed size of {{maxSize}} exceeded.",
  tooSmallText: "Minimum allowed size of upload is {{minSize}}."
}

FileUploadButton.propTypes = {
  component: PropTypes.object,
  children: PropTypes.node,
  onFileSelected: PropTypes.func,
  uploading: PropTypes.bool,
  disabled: PropTypes.bool,
  accept: PropTypes.string,
  minSize: PropTypes.number,
  maxSize: PropTypes.number,
  uploadingText: PropTypes.string,
  uploadText: PropTypes.string,
  /**Only the {{accept}} type is accepted  */
  invalidTypeText: PropTypes.string,
  /**{ maxSize: (maxSize / 1024) > 1024 ? (maxSize / (1024 * 1024)).toFixed(2) + "MB" : (maxSize / 1024) + "KB" }  */
  tooLargeText: PropTypes.string,
  /** { minSize: (minSize / 1024) > 1024 ? (minSize / (1024 * 1024)).toFixed(2) + "MB" : (minSize / 1024) + "KB" }  */
  tooSmallText: PropTypes.string
};

export default FileUploadButton;