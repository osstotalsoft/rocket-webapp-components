export interface ExpandingTextProps {
   /**
   * The text content.
   */
    text: String;
    /**
     * Tooltip reference element.
     */
    minLength?: Number;
    /**
     * Do not respond to focus events.
     */
    showLessText: String;
    /**
     * Do not respond to hover events.
     */
    showMoreText?: String;
}
/**
 *
 * Demos:
 *
 * - [Tooltips](https://material-ui.com/components/tooltips/)
 *
 * API:
 *
 * - [Tooltip API](https://material-ui.com/api/tooltip/)
 */
export default function ExpandingText(props: ExpandingTextProps): JSX.Element;