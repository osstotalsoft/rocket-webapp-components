export interface ToastContainerProps {

    /**
     * @default "top-center" 
    * The position of the notification. This property is required
    
     */
    position?: string;

    /**
       * @default 3000 
    * How long the notification will close automatically(milliseconds). This property is required
  
     */
    autoClose: number;

    /**
     * @default false
    * If true, the progress bar will be displayed. This property is required
    
     */
    hideProgressBar: boolean;

    /**
      * @default false 
    * If true, the writing will start from right. This property is required
   
     */
    rtl: boolean

    /**
      * @default 5 
    * The number of toasts that can appear on screen. This property is required
   
     */
    limit: number;

    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/toast
    * 
    *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/Toast/ToastContainer.js
    */

}

export default function ToastContainer(props: ToastContainerProps): JSX.Element;