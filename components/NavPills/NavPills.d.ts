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
    * @default [] 
    * A list of actions available in this component
    */
    actions?: string[];

    /**
     * @default "standard"
     * Determines additional display behavior of the tabs:
        - scrollable will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar.
        - fullWidth will make the tabs grow to use all the available space, which should be used for small views, like on mobile.
        - standard will render the default state.
     */
    variant?:   "scrollable" |
                "fullWidth" |
                "standard"

    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/nav-pills
    * 
    *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/NavPills/NavPills.js
    * 
    * Material-UI components used:
    * 
    * - Tab: https://material-ui.com/api/tab/
    * - Tabs: https://material-ui.com/api/tabs/
    * 
    */
}

export type NavPillsProps = Props | TabProps | TabsProps

export default function NavPills(props: NavPillsProps): JSX.Element;