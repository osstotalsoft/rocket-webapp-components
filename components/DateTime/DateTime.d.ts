import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

import { KeyboardDateTimePickerProps } from "@material-ui/pickers";

export interface DateTimeProps extends Omit<KeyboardDateTimePickerProps, 'onChange' | 'value'> {
    /**
    * Picker value.
    * @default null
    */
    value?: ParsableDate
    /**
    * onChange callback.
    * @default () => { }
    */
    onChange?: (date: DateIOType) => void
    /**
    * Date format string.
    * @default  'HH:mm'
    */
    dateFormat?: string
    /**
    * Time format string.
    * @default  'DD-MM-YYYY'
    */
    timeFormat?: string
    /**
    * If true, the picker and text field will be disabled.
    * @default false
    */
    disabled?: boolean
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
    showTime?: boolean
    /**
    * If true, the error data is provided.
    * @default false
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
    * Message, appearing when date cannot be parsed.
    * @default 'Invalid Date Format'
    */
    invalidDateMessage?: React.ReactNode
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
    * To use another localization import "moment/locale/[lang]" in your app
    * The current language, preferably taken from the i18next (i18.language) or another internationalization library
    * @default "en"
    */
    language?: string
    /**
    * Hide toolbar and show only date/time views
    * @default false
    */
    disableToolbar: boolean
    /**
    * Auto accept date on selection
    * @default false
    */
    autoOk: boolean
    /**
    * Disable picker and text field
    * @default false
    */
    disabled: boolean
    /**
    * 12h/24h view for hour selection clock
    * @default true
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