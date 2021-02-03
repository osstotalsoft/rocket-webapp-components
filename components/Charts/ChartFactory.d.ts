export interface ChartFactoryProps {
    /**
    * The options of chart.
    */
    options: Object
    /**
     * The type of chart.
     */
    type?: "Line" |
    "Bar" |
    "Mix"
    /**
    * The labels of chart.
    */
    labels?: string[]
    /**
    * The info of chart.(see the sample provided in demos)
    */
    dataInfo: Object
    /**
   * If true, the labels are shown.
   */
    displayDataLabels: boolean
    /**
   * The color of chart.
    */
    chartColor: string
    /**
    * The title of chart.
    */
    title?: string
    /**
    * The text status of chart.
    */
    text?: string
    /**
    * If true, the chart moves up on click hover.
    */
    hover: boolean
    /**
    * If provided, its content will appear just below the main content.
    */
    underChart: React.ReactNode
    /**
    * The status icon.
    */
    StatIcon: unknown
    borderWidth: Number
    statText: string
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/charts
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/Charts/ChartFactory.js
 */
export default function Charts(props: ChartFactoryProps): JSX.Element;