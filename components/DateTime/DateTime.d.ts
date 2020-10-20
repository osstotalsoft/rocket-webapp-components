import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

import { KeyboardDateTimePickerProps } from "@material-ui/pickers";

export interface DateTimeProps extends KeyboardDateTimePickerProps {
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
    language?: string
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/date-time
 *
 */
export default function DateTime(props: DateTimeProps): JSX.Element;