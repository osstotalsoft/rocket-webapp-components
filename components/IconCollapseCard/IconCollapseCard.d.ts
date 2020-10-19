import { func } from "prop-types";

export interface IconCollapseCardProps {

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
     * The title to be displayed
     */
    title?: React.ReactNode;

    /**
     * 
     */
    category?: React.ReactNode;

    /**
     * The content of the card
     */
    content?: React.ReactNode;

    /**
     * 
     */
    footer?: React.ReactNode;

    /**
     * If set to true, the background will be transparent
     */
    plain?: Boolean;

    /**
     * Override or extend the styles applied to the content of the card
     */
    customCardContentClass?: String;

    /**
     * The header of the card
     */
    header?: React.ReactNode;

    /**
     * If set to true, the card will be expanded
     */
    expanded?: Boolean;

    /**
     * If set to true, the card can be expanded
     */
    canExpand?: Boolean;

    /**
     * Default value for expanded property. If it;s not provided will be set to false
     */
    defaultExpanded?: Boolean;

    /**
     * 
     */
    onToggle?: Function;

}

export default function IconCollapseCard(props: IconCollapseCardProps): JSX.Element;