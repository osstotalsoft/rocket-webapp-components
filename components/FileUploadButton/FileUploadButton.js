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

    // Reset input value to allow re-selection
    target.value = null;

    onFileSelected(file);
  }, [onFileSelected, accept, maxSize, minSize, addToast])

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
/**
* The component to render. If component prop isn't provided, UploadButton will be rendered.
*/
  component: PropTypes.object,
/**
* The content of the button
*/
  children: PropTypes.node,
/**
* This function is called after a file is selected
* @param {file} file 
*/
  onFileSelected: PropTypes.func,
/**
* If one of them is true, button will be disabled
*/
  uploading: PropTypes.bool,
  disabled: PropTypes.bool,
/**
* Accepted type of file to upload
*/
  accept: PropTypes.string,
/**
* The minimum size of the file to be uploaded
*/
  minSize: PropTypes.number,
/**
 * The maximum size of the file to be uploaded
 */
  maxSize: PropTypes.number,
/**
* Text shown when a file is uploading
*/
  uploadingText: PropTypes.string,
/**
* Text to be displayed 
*/
  uploadText: PropTypes.string,
/**
* If the file type isn't the same with the one received in the accept prop, it will be prompted this text
*/
  invalidTypeText: PropTypes.string,
/**
* If the file size exceeded maxSize, it wil be prompted this text
* { maxSize: (maxSize / 1024) > 1024 ? (maxSize / (1024 * 1024)).toFixed(2) + "MB" : (maxSize / 1024) + "KB" }
*/
  tooLargeText: PropTypes.string,
/**
* If the file size is less than minSize, it wil be prompted this text
* { minSize: (minSize / 1024) > 1024 ? (minSize / (1024 * 1024)).toFixed(2) + "MB" : (minSize / 1024) + "KB" }
*/
  tooSmallText: PropTypes.string
};

export default FileUploadButton;