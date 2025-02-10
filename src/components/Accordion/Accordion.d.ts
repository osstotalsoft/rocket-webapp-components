export interface AccordionProps {
    /**
    * @default -1
    * The index of the active child.
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
 * - Take a look over the code for further information: https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/Accordion/Accordion.js
 * 
 * Material-UI components used:
 * 
 * - Accordion: https://material-ui.com/api/accordion/
 * - AccordionSummary: https://material-ui.com/api/accordion-summary/
 * - AccordionDetails: https://material-ui.com/api/accordion-details/
 * 
 */
export default function Accordion(props: AccordionProps): JSX.Element;