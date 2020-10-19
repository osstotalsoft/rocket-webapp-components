export interface ImageCardProps {

    /**
     * Override or extend the styles applied to the component
     */
    className?: String;

    /**
     * The content of the card
     */
    children?: React.ReactNode;

    /**
     * The image to be displayed
     */
    image?: String;

    /**
     * If the image cannot be displayed for some reason, this text will be shown
     */
    alternateText?: String;

    /**
     * The color of the card
     */
    color?: "primary" |
    "info" |
    "success" |
    "warning" |
    "danger" |
    "rose"

    /**
     * The size of the image
     * @default 's'
     */
    imageSize?: 's' | 'm' | 'l'

}

export default function ImageCard(props: ImageCardProps): JSX.Element;