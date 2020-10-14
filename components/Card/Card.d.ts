export interface CardProps {
    /**
    * The className of card.
    */
    className?: String;
    /**
     * The color of card.
     */
    color?: "primary" |
            "info" |
            "success" |
            "warning" |
            "danger" |
            "rose"
    /**
    * The content of card.
    */
    children?: React.ReactNode
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/card
 *
 * 
 */
export default function Card(props: CardProps): JSX.Element;