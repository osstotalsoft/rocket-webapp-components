export interface ChartCardProps {
    /**
    * The main content of chart.
    */
    chart: React.ReactNode;
    /**
     * The actions(made of array of buttons) of card.
     */
    title?: string
    /**
    * The text content of chart.
    */
    text?: string
    /**
    * The icon of chart.
    */
    StatIcon: unknown
    /**
    * @default "gray"
    * The icon's color of chart.
    */
    statIconColor: "warning" |
                    "primary" |
                    "danger" |
                    "success" |
                    "info" |
                    "rose" |
                    "gray"
    /**
    * @default "purple"
    * The color of chart.
    */
    chartColor: "orange" |
                "green" |
                "red" |
                "blue" |
                "purple" |
                "rose" |
                "white"
    /**
    * The color of chart.
    */
    statLink: React.ReactNode
    /**
    * The text status of chart.
    */
    statText: string
    /**
    * @default false
    * If true, the chart moves up on click hover.
    */
    hover: boolean
    /**
    * If provided, its content will appear just below the main content.
    */
    underChart: React.ReactNode
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/chart-card
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/ChartCard/ChartCard.js
 * 
 * Warning: 
 * This component will be provided only through ChartFactory API. This approach is not compulsory
 *  but it's recommended to ensure the correct behavior of the component.
 */
export default function ChartCard(props: ChartCardProps): JSX.Element;