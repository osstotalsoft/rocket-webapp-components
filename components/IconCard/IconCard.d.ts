export interface IconCardProps {

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
     * @default ""
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
     * Override or extend the styles applied to the card
     */
    customCardClass?: String;

    /**
     * Demos:
     * 
     * - https://bit.dev/totalsoft_oss/react-mui/icon-card
     * 
     */

}

export default function IconCard(props: IconCardProps): JSX.Element;