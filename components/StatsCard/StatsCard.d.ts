import { CardProps } from '@material-ui/core/Card';
import { CardContentProps } from '@material-ui/core/CardContent';
import { CardHeaderProps } from '@material-ui/core/CardHeader';
import { CardActionsProps } from '@material-ui/core/CardActions';

export interface Props {

    /**
     * The icon to be displayed. This property is required
     */
    Icon: React.ReactNode;

    /**
     * The color of the icon
     * @default "blue"
     */
    iconColor?: "orange" |
    "green" |
    "red" |
    "blue" |
    "purple"

    /**
     * The tile of the card
     */
    title?: React.ReactNode;

    /**
     * Description of the card content
     */
    description?: React.ReactNode;

    /**
     * Footer for description
     */
    Small?: React.ReactNode;

    /**
     * Icon for content
     */
    StatIcon?: React.ReactNode;

    /**
     * @default "gray"
     */
    statIconColor?: "warning" |
    "primary" |
    "danger" |
    "success" |
    "info" |
    "rose" |
    "gray"

    /**
     * Link for content
     */
    statLink?: Object;

    /**
     * Text for content
     */
    statText?: React.ReactNode;

    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/stats-card
    * 
    */

}

export type StatsCardProps = Props | CardProps | CardContentProps | CardHeaderProps | CardActionsProps

export default function StatsCard(props: StatsCardProps): JSX.Element;