import { InputAdornmentProps } from '@material-ui/core/InputAdornment'

export interface PasswordFieldProps extends InputAdornmentProps {
    /**
    * @default "Hide password"
    * The text to be displayed on tooltip when the user wants to hide the password
    */
    hidePasswordText?: string;
    /**
    * @default "Show password text"
    * The text to be displayed on tooltip when the user wants to show the password
    */
    showPasswordText?: string;
    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/password-field
    * 
    *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/PasswordField/PasswordField.js
    */

}

export default function PasswordField(props: PasswordFieldProps): JSX.Element;