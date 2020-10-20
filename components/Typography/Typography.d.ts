import { TypographyProps as BaseProps } from '@material-ui/core/Typography'

export interface TypographyProps extends BaseProps {

    /**
     * If provided, a text will appear on hover
     */
    tooltip?: string;

    /**
     * Applies the theme typography styles.
     * @default 'inherit'
     */
    variant?: 'inherit' |
    'h1' |
    'h2' |
    'h3' |
    'h4' |
    'h5' |
    'h6' |
    'subtitle1' |
    'subtitle2' |
    'body1' |
    'body2' |
    'caption' |
    'button' |
    'overline'

    /**
     * The color of the component
     */
    color?: 'initial' |
    'inherit' |
    'primary' |
    'secondary' |
    'textPrimary' |
    'textSecondary' |
    'error'

    /**
     * Set the text-align on the component.
     */
    align?: 'inherit' |
    'left' |
    'center' |
    'right' |
    'justify'

    /**
     * Demos:
     * 
     * - https://bit.dev/totalsoft_oss/react-mui/typography
     * 
     */

}

export default function Typography(props: TypographyProps): JSX.Element;