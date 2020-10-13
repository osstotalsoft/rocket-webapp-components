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
 * 
 * Example:
 ```
 import React from 'react';
import ExpandingText from '@bit/totalsoft_oss.react-mui.expanding-text';

export default (
    <ExpandingText minLength={100}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />

)
 ```
 */
export default function ExpandingText(props: ExpandingTextProps): JSX.Element;