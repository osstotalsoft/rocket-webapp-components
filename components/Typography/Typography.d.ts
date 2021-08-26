import { TypographyProps as BaseProps } from "@material-ui/core/Typography";

export interface TypographyProps extends BaseProps {
  /**
   * If provided, a text will appear on hover
   */
  tooltip?: string;

  /**
         * @default 'inherit' 
        * Applies the theme typography styles.
        
         */
  variant?:
    | "inherit"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";

  /**
   * The color of the component
   */
  color?:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";

  /**
   * Set the text-align on the component.
   */
  align?: "inherit" | "left" | "center" | "right" | "justify";

  /**
   * @default 'initial'
   * Controls the display type
   */
  display?: "initial" | "block" | "inline";

  /**
   * @default false
   * If true, the text will have a bottom margin.
   */
  gutterBottom?: boolean;

  /**
   * @default false
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements (the element needs
   * to have a width in order to overflow).
   */
  noWrap?: boolean;

  /**
   * @default false
   * If true, the text will have a bottom margin.
   */
  paragraph?: boolean;

  /**
   * Control the text emphasis
   */
  emphasis?:
    | "bold"
    | "italic"
    | "underline"
    | "line-through"
    | "overline"
    | ("bold" | "italic" | "underline" | "line-through" | "overline")[];

  /**
   * Demos:
   *
   * - https://bit.dev/totalsoft_oss/react-mui/typography
   *
   *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/Typography/Typography.js
   *
   * Material-UI component used:
   *
   * - Typography: https://material-ui.com/api/typography/
   *
   */
}

export default function Typography(props: TypographyProps): JSX.Element;
