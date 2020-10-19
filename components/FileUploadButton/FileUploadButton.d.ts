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
     */
    onFileSelected?: (file: File) => void

    /**
     * If one of them is true, button will be disabled
     */
    uploading?: Boolean;
    disabled?: Boolean;

    /**
     * Accepted type of file to upload
     */
    accept?: String;

    /**
     * The minimum size of the file to be uploaded
     */
    minSize?: Number;

    /**
     * The maximum size of the file to be uploaded
     */
    maxSize?: Number;

    /**
     * Text shown when a file is uploading
     * @default "Uploading"
     */
    uploadingText?: String;

    /**
     * Text to be displayed
     * @default "Upload"
     */
    uploadText?: String;

    /**
     * If the file type isn't the same with the one received in the accept prop, it will be prompted this text
     * @default "Invalid file type. Please upload type {{accept}}"
     */
    invalidTypeText?: String;

    /**
     * If the file size exceeded maxSize, it wil be prompted this text
     * { maxSize: (maxSize / 1024) > 1024 ? (maxSize / (1024 * 1024)).toFixed(2) + "MB" : (maxSize / 1024) + "KB" }
     * @default "Maximum allowed size of {{maxSize}} exceeded."
     */
    tooLargeText?: String;

    /**
     * If the file size is less than minSize, it wil be prompted this text
     * { minSize: (minSize / 1024) > 1024 ? (minSize / (1024 * 1024)).toFixed(2) + "MB" : (minSize / 1024) + "KB" }
     * @default "Minimum allowed size of upload is {{minSize}}."
     */
    tooSmallText?: String;

    /**
     * Demos:
     * 
     * - https://bit.dev/totalsoft_oss/react-mui/file-upload-button
     * 
     */
}

export default function FileUploadButtonProps(props: FileUploadButtonProps): JSX.Element;