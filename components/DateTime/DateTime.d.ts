import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

export interface DateTimeProps {
    /**
    * Picker value
    * @default null
    */
    value?: ParsableDate
    /**
     * onChange callback
     * @default () => { }
     */
    onChange?: (date: DateIOType) => void
    /**
    * Date format string.
    * @default  'HH:mm'
    */
    dateFormat?: String
    /**
    * Time format string.
    * @default  'DD-MM-YYYY'
    */
    timeFormat?: String
    /**
    * If true, the picker and text field will be disabled.
    * @default false
    */
    disabled?: Boolean
    /**
    * Picker container option.
    * @defualt 'inline'
    */
    variant?: "dialog" | "inline" | "static"
    /**
   * Array of views to show
   * @default ["date"]
   */
    views?: ("date" | "year" | "month" | "hours" | "minutes")[]
    /**
    * If true, the time is shown.
    * @default false
    */
    showTime?: Boolean
    /**
   * If true, the error data is provided.
   * @default false
   */
    error?: Boolean
    /**
   * The text content in case of failure.
   */
    helperText?: String
    /**
    * If true, show clear action in picker dialog.
    */
    clearable?: Boolean
    /**
    * Message, appearing when date cannot be parsed.
    * @default 'Invalid Date Format'
    */
    InvalidDateMessage?: React.ReactNode
    /**
    * Error message, shown if date is more then maximal date. 
    * @default 'Date should not be after maximal date'
    */
    maxDateMessage?: React.ReactNode
    /**
    * Error message, shown if date is less then minimal date
     * @default 'Date should not be before minimal date'
    */
    minDateMessage?: React.ReactNode
    /**
    * The current language, preferably gotten from the i18next (i18.language)
    */
    language?: String
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/date-time
 *
 */
export default function DateTime(props: DateTimeProps): JSX.Element;