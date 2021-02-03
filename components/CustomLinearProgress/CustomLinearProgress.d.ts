import { LinearProgressProps } from "@material-ui/core";

export interface CustomLinearProgressProps extends Omit<LinearProgressProps, 'color' | 'variant' | 'value'> {
        /**
        *  @default "gray"
        *  The color of the component.
        */
        color?: "primary" |
        "warning" |
        "danger" |
        "success" |
        "info" |
        "rose" |
        "gray"
        /**
        *  @default "indeterminate"
        * The variant to use. Use indeterminate or query when there is no progress value.
        */
        variant?: "determinate" |
        "indeterminate" |
        "buffer" |
        "query"
        /**
        * The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100.
        */
        value?: number
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/custom-linear-progress
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/CustomLinearProgress/CustomLinearProgress.js
 */
export default function CustomLinearProgress(props: CustomLinearProgressProps): JSX.Element;