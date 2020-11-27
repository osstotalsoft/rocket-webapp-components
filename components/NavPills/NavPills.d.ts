import { TabProps } from '@material-ui/core/Tab'
import { TabsProps } from '@material-ui/core/Tabs'

export interface Props {
    /**
     * @default 0 
    * Index of the default active pill
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
     * @default "theme" 
    * The color of the component
     */
    color?: "primary" |
            "warning" |
            "danger" |
            "success" |
            "info" |
            "rose" |
            "theme"

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
    alignCenter?: boolean;

    /**
    * This property is required
    * @param {object} event The event source of the callback.
    * @param {any} value We default to the index of the child (number)
    */
    onChange: (event: React.SyntheticEvent, value: any) => void;

    /**
    * @default [] 
    * A list of actions available in this component
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