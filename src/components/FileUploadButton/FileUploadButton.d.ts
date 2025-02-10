export interface FileUploadButtonProps {
    /**
    * The component to render. If component prop isn't provided, UploadButton will be rendered.
    */
    component?: Object;
    /**
    * The content of the button
    */
    children?: React.ReactNode;
    /**
    * This function is called after a file is selected
    * @param {file} file 
    */
    onFileSelected?: (file: File) => void
    /**
    * If one of them is true, button will be disabled
    */
    uploading?: boolean;
    disabled?: boolean;
    /**
    * Accepted type of file to upload
    */
    accept?: string;
    /**
    * The minimum size of the file to be uploaded
    */
    minSize?: number;
    /**
    * The maximum size of the file to be uploaded
    */
    maxSize?: number;
    /**
    * @default "Uploading"
    * Text shown when a file is uploading
    */
    uploadingText?: string;
    /**
    * @default "Upload" 
    * Text to be displayed 
    */
    uploadText?: string;
    /**
    * @default "Invalid file type. Please upload type {{accept}}"
    * If the file type isn't the same with the one received in the accept prop, it will be prompted this text
    */
    invalidTypeText?: string;
    /**
    * @default "Maximum allowed size of {{maxSize}} exceeded."
    * If the file size exceeded maxSize, it wil be prompted this text
    * { maxSize: (maxSize / 1024) > 1024 ? (maxSize / (1024 * 1024)).toFixed(2) + "MB" : (maxSize / 1024) + "KB" }
    */
    tooLargeText?: string;
    /**
    * @default "Minimum allowed size of upload is {{minSize}}."
    * If the file size is less than minSize, it wil be prompted this text
    * { minSize: (minSize / 1024) > 1024 ? (minSize / (1024 * 1024)).toFixed(2) + "MB" : (minSize / 1024) + "KB" }
    */
    tooSmallText?: string;
    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/file-upload-button
    * 
    *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/FileUploadButton/FileUploadButton.js
    *
    * Material-UI component used:
    * 
    * - IconButton: https://material-ui.com/api/icon-button/
    * 
    */
}

export default function FileUploadButtonProps(props: FileUploadButtonProps): JSX.Element;