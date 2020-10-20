export interface AccordionProps {
    /**
    * The index of the active child.
    * @default -1
    */
    active?: number;
    /**
     * The content of accordion.
     */
    content: {
        title: string,
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