import { PaperProps } from "@material-ui/core/Paper";

export interface LoadingFakeTextProps extends PaperProps {
    /**
    * The number of lines appearing.
    */
    lines?: Number;
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
*/
export default function LoadingFakeText(props: LoadingFakeTextProps): JSX.Element;