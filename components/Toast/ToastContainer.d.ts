export interface ToastContainerProps {

    /**
     * The position of the notification. This property is required
     * @default "top-center"
     */
    position?: string;

    /**
     * How long the notification will close automatically(milliseconds). This property is required
     * @default 3000
     */
    autoClose: number;

    /**
     * If true, the progress bar will be displayed. This property is required
     * @default false
     */
    hideProgressBar: boolean;

    /**
     * If true, the writing will start from right. This property is required
     * @default false
     */
    rtl: boolean

    /**
     * The number of toasts that can appear on screen. This property is required
     * @default 5
     */
    limit: number;

    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/toast
    * 
    */

}

export default function ToastContainer(props: ToastContainerProps): JSX.Element;