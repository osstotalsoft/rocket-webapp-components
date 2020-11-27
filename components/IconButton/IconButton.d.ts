import { IconButtonProps as BaseProps } from '@material-ui/core/IconButton';

export interface IconButtonProps extends Omit<BaseProps, 'color'> {
    /**
     * The content of the button
     */
    children?: React.ReactNode;
    /**
    * @default "theme"
    * The color of the button
    */
    color?: "primary" |
    "info" |
    "theme" |
    "themeNoBackground" |
    "themeWithBackground" |
    "success" |
    "warning" |
    "danger" |
    "rose" |
    "white" |
    "simple" |
    "defaultNoBackground" |
    "primaryNoBackground" |
    "infoNoBackground" |
    "successNoBackground" |
    "warningNoBackground" |
    "dangerNoBackground" |
    "roseNoBackground"
    /**
    * @default "medium"
    * The size of the button
    */
    size?: "small" | "medium"
    /**
     * Override or extend the styles applied to the component
     */
    customClass?: string;
    /**
    * If true, button will be disabled. Default is set to false
    */
    disabled?: boolean;
    /**
     * The text to be displayed when the user hover over the button
     */
    tooltip?: string;
    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/icon-button
    * 
    *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/IconButton/IconButton.js
    */
}

export default function IconButton(props: IconButtonProps): JSX.Element;