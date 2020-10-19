import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';

export interface ExpandingTextProps extends FormControlLabelProps {
    /**
    * The text content.
    */
    text: String;
    /**
    * The minimum length of the narrow text.
    * @default 2000
    */
    minLength?: Number;
    /**
    * The content of the button when the text is narrow.
    * @default "Show less"
    */
    showLessText: String;
    /**
    *  The content of the button when the text is wide.
    * @default "Show more"
    */
    showMoreText?: String;
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/expanding-text
 *
 * 
 */
export default function ExpandingText(props: ExpandingTextProps): JSX.Element;