import { PaperProps } from "@material-ui/core/Paper";

export interface LoadingFakeTextProps extends PaperProps {
    /**
    * The number of lines appearing.
    */
    lines?: number;
    /**
    * If true, the fake text will be drawn on a Paper.
    */
    onPaper?: boolean;
}
/**
*
* Demos:
*
* - https://bit.dev/totalsoft_oss/react-mui/fake-text
*
 Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/FakeText/LoadingFakeText.js
*/
export default function LoadingFakeText(props: LoadingFakeTextProps): JSX.Element;