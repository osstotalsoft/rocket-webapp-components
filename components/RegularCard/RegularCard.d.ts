import { CardProps } from '@material-ui/core/Card';
import { CardContentProps } from '@material-ui/core/CardContent';
import { CardHeaderProps } from '@material-ui/core/CardHeader';

export interface Props {

    /**
     * Override or extend the styles applied to the card
     */
    customCardClasses?: string;

    /**
     * Override or extend the styles applied to the title of the card
     */
    customCardTitleClasses?: string;

    /**
     * If set to true, the background will be transparent
     */
    plainCard?: boolean;

    /**
     * The title of the card
     */
    cardTitle?: React.ReactNode;

    /**
     * The subtitle of the card
     */
    cardSubtitle?: React.ReactNode;

    /**
     * The content of the card
     */
    content?: React.ReactNode;

    /**
     * Title alignment
     */
    titleAlign?: "right" |
    "left" |
    "center"

    /**
     * Content alignment
     */
    contentAlign?: "right" |
    "left" |
    "center"

    /**
     * Subtitle alignment
     */
    subtitleAlign?: "right" |
    "left" |
    "center"

    /**
     * Demos:
     * 
     * - https://bit.dev/totalsoft_oss/react-mui/regular-card
     * 
     *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/RegularCard/RegularCard.js
     */

}

export type RegularCardProps = Props | CardProps | CardContentProps | CardHeaderProps

export default function RegularCard(props: RegularCardProps): JSX.Element;