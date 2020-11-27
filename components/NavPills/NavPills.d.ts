import { TabProps } from '@material-ui/core/Tab'
import { TabsProps } from '@material-ui/core/Tabs'

export interface Props {

    /**
     * Index of the default active pill
     * @default 0
     */
    active?: number;

    /**
     * The content of the component
     */
    tabs: {
        tabButton: string,
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
     * If set to true, the tabs will be displayed horizontal
     * @default true
     */
    horizontal?: boolean

    /**
     * If set to true, the alignment of pills will be centered
     */
    alignCenter?: boolean;

    /**
     * This property is required
     * @param {object} event The event source of the callback.
     * @param {any} value We default to the index of the child (number)
     */
    onChange: (event: React.SyntheticEvent, value: any) => void;

    /**
     * A list of actions available in this component
     * @default []
     */
    actions?: string[];

    /**
     * Demos:
     * 
     * - https://bit.dev/totalsoft_oss/react-mui/nav-pills
     * 
     *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/NavPills/NavPills.js
     */
}

export type NavPillsProps = Props | TabProps | TabsProps

export default function NavPills(props: NavPillsProps): JSX.Element;