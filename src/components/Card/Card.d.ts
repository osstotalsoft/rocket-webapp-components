export interface CardProps {
    /**
    * The className of card.
    */
    className?: string;
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
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/Card/Card.js
 */
export default function Card(props: CardProps): JSX.Element;