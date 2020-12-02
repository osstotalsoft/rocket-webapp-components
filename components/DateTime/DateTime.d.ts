import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

import { KeyboardDateTimePickerProps } from "@material-ui/pickers";

export interface DateTimeProps extends Omit<KeyboardDateTimePickerProps, 'onChange' | 'value'> {
    /**
    * Picker value.
    * @default null
    */
    value?: ParsableDate
    /**
    * @default () => { }
    * onChange callback.
    */
    onChange?: (date: DateIOType) => void
    /**
    * @default  'HH:mm'
    * Date format string.
    */
    dateFormat?: string
    /**
    * @default  'DD-MM-YYYY'
    * Time format string.
    */
    timeFormat?: string
    /**
    * @default false
    * If true, the picker and text field will be disabled.
    */
    disabled?: boolean
    /**
    * @defualt 'inline'
    * Picker container option.
    */
    variant?: "dialog" | "inline" | "static"
    /**
    * @default ["date"]
    * Array of views to show
    */
    views?: ("date" | "year" | "month" | "hours" | "minutes")[]
    /**
    * @default false
    * If true, the time is shown.
    */
    showTime?: boolean
    /**
    * @default false
    * If true, the error data is provided.
    */
    error?: boolean
    /**
    * The text content in case of failure.
    */
    helperText?: string
    /**
    * If true, show clear action in picker dialog.
    */
    clearable?: boolean
    /**
    * @default 'Invalid Date Format'
    * Message, appearing when date cannot be parsed.
    */
    invalidDateMessage?: React.ReactNode
    /**
    * @default 'Date should not be after maximal date'
    * Error message, shown if date is more then maximal date. 
    */
    maxDateMessage?: React.ReactNode
    /**
    * @default 'Date should not be before minimal date'
    * Error message, shown if date is less then minimal date
    */
    minDateMessage?: React.ReactNode
    /**
    * @default "en"
    * To use another localization import "moment/locale/[lang]" in your app
    * The current language, preferably taken from the i18next (i18.language) or another internationalization library
    */
    language?: string
    /**
    * Hide toolbar and show only date/time views
    * @default false
    */
    disableToolbar: boolean
    /**
    * @default false
    * Auto accept date on selection
    */
    autoOk: boolean
    /**
    * @default true
    * 12h/24h view for hour selection clock
    */
    ampm: boolean
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/date-time
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/DateTime/DateTime.js
 */
export default function DateTime(props: DateTimeProps): JSX.Element;