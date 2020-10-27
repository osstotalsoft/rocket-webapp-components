import { LinearProgressProps } from "@material-ui/core";

export interface CustomLinearProgressProps extends Omit<LinearProgressProps, 'color' | 'variant' | 'value'> {
        /**
        *  The color of the component.
        * @default "gray"
        */
        color?: "primary" |
        "warning" |
        "danger" |
        "success" |
        "info" |
        "rose" |
        "gray"
        /**
        * The variant to use. Use indeterminate or query when there is no progress value.
        * @default "indeterminate"
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
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/CustomLinearProgress/CustomLinearProgress.js
 */
export default function CustomLinearProgress(props: CustomLinearProgressProps): JSX.Element;