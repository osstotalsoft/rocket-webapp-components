import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';

export interface ExpandingTextProps extends FormControlLabelProps {
    /**
    * The text content.
    */
    text: string;
    /**
    * @default 2000
    * The minimum length of the narrow text.
    */
    minLength?: number;
    /**
    * @default "Show less"
    * The content of the button when the text is narrow. 
    */
    showLessText: string;
    /**
    * @default "Show more"
    *  The content of the button when the text is wide.
    */
    showMoreText?: string;
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/expanding-text
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/ExpandingText/ExpandingText.js
 */
export default function ExpandingText(props: ExpandingTextProps): JSX.Element;