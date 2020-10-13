import React, { useState } from "react";
import PropTypes from "prop-types";

// material-ui components
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, makeStyles } from "@material-ui/core";

// material-ui-icons
import { ExpandMore } from "@material-ui/icons";
import accordionStyle from "./accordionStyle";
const useStyles = makeStyles(accordionStyle);
const Piano = ({ active, collapses }) => {

    const [localSctive, setLocalActive] = useState(active)
    const classes = useStyles();

    const handleChange = panel => (_, expanded) => {
        if (expanded) {
            const list = [...localSctive, panel];
            setLocalActive(list)
        }
        else {
            const list = localSctive.filter((item, index) => panel !== item);
            setLocalActive(list)
        }
    };

    return (
        <div className={classes.root}>
            {collapses.map((prop, key) => {
                return (
                    <ExpansionPanel
                        expanded={localSctive.includes(key)}
                        onChange={handleChange(key)}
                        key={key}
                        classes={{
                            root: classes.expansionPanel,
                            expanded: classes.expansionPanelExpanded
                        }}
                    >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMore />}
                            classes={{
                                root: classes.expansionPanelSummary,
                                expanded: classes.expansionPanelSummaryExpaned,
                                content: classes.expansionPanelSummaryContent,
                                expandIcon: classes.expansionPanelSummaryExpandIcon
                            }}
                        >
                            <h4 className={classes.title}>{prop.title}</h4>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                            {prop.content}
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                );
            })}
        </div>
    );
}

Piano.defaultProps = {
    active: -1
};

Piano.propTypes = {
    active: PropTypes.array, // indexes of the default active collapses
    collapses: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.node
        })
    ).isRequired
};

export default Piano;
