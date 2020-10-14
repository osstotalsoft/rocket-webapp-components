export interface ChartCardProps {
    /**
    * The main content of chart.
    */
    chart: React.ReactNode;
    /**
     * The actions(made of array of buttons) of card.
     */
    title?: String
    /**
    * The text content of chart.
    */
    text?: String
    /**
    * The icon of chart.
    */
    StatIcon: React.ReactNode
    /**
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
    statText: String
    /**
    * If true, the chart moves up on click hover.
    */
    hover: Boolean
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
 * Warning: 
 * This component will be provided only through ChartFactory API. This approach is not compulsory
 *  but it's recommended to ensure the correct behavior of the component.
 */
export default function ChartCard(props: ChartCardProps): JSX.Element;