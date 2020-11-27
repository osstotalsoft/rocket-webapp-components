import React, { useState } from "react";
import PropTypes from "prop-types";
import { Accordion as AccordionBase, AccordionSummary, AccordionDetails, makeStyles } from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import accordionStyle from "./accordionStyle";
const useStyles = makeStyles(accordionStyle);

const Accordion = ({ content, active }) => {

    const [localActive, setLocalActive] = useState(active)
    const handleChange = panel => (_, expanded) => setLocalActive(expanded ? panel : -1)
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {content.map((prop, key) => {
                return (
                    <AccordionBase
                        expanded={localActive === key}
                        onChange={handleChange(key)}
                        key={key}
                        classes={{
                            root: classes.expansionPanel,
                            expanded: classes.expansionPanelExpanded
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            classes={{
                                root: classes.expansionPanelSummary,
                                expanded: classes.expansionPanelSummaryExpaned,
                                content: classes.expansionPanelSummaryContent,
                                expandIcon: classes.expansionPanelSummaryExpandIcon,
                                //expandIconExpanded: classes.expansionPanelSummaryExpandIconExpanded
                            }}
                        >
                            <h4 className={classes.title}>{prop.title}</h4>
                        </AccordionSummary>
                        <AccordionDetails className={classes.expansionPanelDetails}>
                            {prop.content}
                        </AccordionDetails>
                    </AccordionBase>
                );
            })}
        </div>
    );
}


Accordion.defaultProps = {
    active: -1
};

Accordion.propTypes = {
    /**
    * The index of the active child.
    */
    active: PropTypes.number,
    /**
    * The content of accordion.
    */
    content: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.node
        })
    ).isRequired
};

export default Accordion;