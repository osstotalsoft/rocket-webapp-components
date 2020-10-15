export interface AccordionProps {
    /**
    * The index of the active child.
    * @default -1
    */
    active?: Number;
    /**
     * The content of accordion.
     */
    content: {
        title: String,
        content: React.ReactNode
    }[];
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/accordion
 *
 * 
 */
export default function Accordion(props: AccordionProps): JSX.Element;