export interface CardTitleProps {
    /**
    * The title of card.
    */
    title?: String;
    /**
     * The actions(made of array of buttons) of card.
     */
    actions: React.ReactNode[]
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/card-title
 *
 * 
 */
export default function CardTitle(props: CardTitleProps): JSX.Element;