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
    labels?: String[]
    /**
    * The info of chart.(see the sample provided in demos)
    */
    dataInfo: Object
    /**
   * If true, the labels are shown.
   */
    displayDataLabels: Boolean
    /**
   * The color of chart.
    */
    chartColor: String
    /**
    * The title of chart.
    */
    title?: String
    /**
    * The text status of chart.
    */
    text?: String
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
 * - https://bit.dev/totalsoft_oss/react-mui/charts
 *
 * Warning: 
 * This component will be provided only through ChartFactory API. This approach is not compulsory
 *  but it's recommended to ensure the correct behavior of the component.
 */
export default function Charts(props: ChartFactoryProps): JSX.Element;