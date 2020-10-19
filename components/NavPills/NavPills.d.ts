export interface NavPillsProps {

    /**
     * Index of the default active pill
     * @default 0
     */
    active?: Number;

    /**
     * The content of the component
     */
    tabs: {
        tabButton: String,
        tabIcon: Object,
        tabContent: React.ReactNode
    }[];

    /**
     * The color of the component
     * @default "primary"
     */
    color?: "primary" |
    "warning" |
    "danger" |
    "success" |
    "info" |
    "rose"

    /**
     * 
     */
    horizontal?: {
        tabsGrid: Object,
        contentGrid: Object
    };

    /**
     * If set to true, the alignment of pills will be centered
     */
    alignCenter?: Boolean;

    /**
     * This property is required
     */
    onChange: Function;

    /**
     * A list of actions available in this component
     * @default []
     */
    actions?: String[];
}

export default function NavPills(props: NavPillsProps): JSX.Element;