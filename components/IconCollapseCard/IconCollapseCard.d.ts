import { CardProps } from '@material-ui/core/Card';
import { CardContentProps } from '@material-ui/core/CardContent';
import { CardHeaderProps } from '@material-ui/core/CardHeader';
import { AccordionProps } from '@material-ui/core/Accordion';
import { AccordionDetailsProps } from '@material-ui/core/AccordionDetails';
import { AccordionSummaryProps } from '@material-ui/core/AccordionSummary';
export interface Props {

    /**
     * Icon to be displayed. This property is mandatory
     */
    icon: Object;

    /**
     * The color of the icon that will be displayed
     * @default "theme"
     */
    iconColor?: "orange" |
    "green" |
    "red" |
    "blue" |
    "purple" |
    "rose" |
    "theme"

    /**
     * The title to be displayed. This property can be a string or a component
     */
    title?: React.ReactNode;

    /**
     * The content of the card. This property can be a string or a component
     */
    content?: React.ReactNode;

    /**
     * The footer to be displayed. This property can be a string or a component
     */
    footer?: React.ReactNode;

    /**
     * If set to true, the background will be transparent
     */
    plain?: boolean;

    /**
     * Override or extend the styles applied to the content of the card
     */
    customCardContentClass?: string;

    /**
     * The header of the card
     */
    header?: React.ReactNode;

    /**
     * If set to true, the card will be expanded
     */
    expanded?: boolean;

    /**
     * If set to true, the card can be expanded
     */
    canExpand?: boolean;

    /**
     * Default value for expanded property. If it's not provided will be set to false
     */
    defaultExpanded?: boolean;

    /**
     * @param {object} event The event source of the callback.
     * @param {boolean} expanded The `expanded` state of the card.
     */
    onToggle?: (event: React.SyntheticEvent, eventExpanded: boolean) => void;

    /**
     * Demos:
     * 
     * - https://bit.dev/totalsoft_oss/react-mui/icon-collapse-card
     * 
     *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/IconCollapseCard/IconCollapseCard.js
     */

}

export type IconCollapseCardProps = Props | CardProps | CardContentProps | CardHeaderProps | AccordionProps | AccordionDetailsProps | AccordionSummaryProps

export default function IconCollapseCard(props: IconCollapseCardProps): JSX.Element;