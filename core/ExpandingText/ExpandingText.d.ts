export interface ExpandingTextProps {
   /**
   * The text content.
   */
    text: String;
    /**
     * The minimum length of the narrow text.
     */
    minLength?: Number;
    /**
     * The content of the button when the text is narrow.
     */
    showLessText: String;
    /**
     *  The content of the button when the text is wide.
     */
    showMoreText?: String;
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/expanding-text
 *
 */
export default function ExpandingText(props: ExpandingTextProps): JSX.Element;