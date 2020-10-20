import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';

export interface ExpandingTextProps extends FormControlLabelProps {
    /**
    * The text content.
    */
    text: string;
    /**
    * The minimum length of the narrow text.
    * @default 2000
    */
    minLength?: number;
    /**
    * The content of the button when the text is narrow.
    * @default "Show less"
    */
    showLessText: string;
    /**
    *  The content of the button when the text is wide.
    * @default "Show more"
    */
    showMoreText?: string;
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