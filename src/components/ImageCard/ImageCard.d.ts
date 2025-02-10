export interface ImageCardProps {

  /**
   * Override or extend the styles applied to the component
   */
  className?: string;

  /**
   * The content of the card
   */
  children?: React.ReactNode;

  /**
   * The image to be displayed
   */
  image?: string | React.ReactNode;

  /**
   * If the image cannot be displayed for some reason, this text will be shown
   */
  alternateText?: string;

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
   * @default 's'
   * The size of the image
   */
  imageSize?: 's' | 'm' | 'l'

  /**
   * Demos:
   * 
   * - https://bit.dev/totalsoft_oss/react-mui/image-card
   * 
   *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/ImageCard/ImageCard.js
   */

}

export default function ImageCard(props: ImageCardProps): JSX.Element;