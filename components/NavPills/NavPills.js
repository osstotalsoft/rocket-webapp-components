import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Tab, Tabs, Grid, Box, makeStyles } from "@material-ui/core";
import navPillsStyle from "./navPillsStyle.js";

const useStyles = makeStyles(navPillsStyle);

const NavPills = ({ tabs, color, horizontal, alignCenter, active, onChange, actions }) => {
    const classes = useStyles();
    const tabButtons = (
        <Box className={classes.container} >
            <Box className={classes.tabsContainer} >
                <Tabs
                    className={classes.root}
                    TabIndicatorProps={{ className: classes.displayNone }}
                    orientation={horizontal ? "horizontal" : "vertical"}
                    value={active}
                    onChange={onChange}
                    centered={alignCenter}
                >
                    {tabs.map((tab, key) => {
                        var icon = {};
                        if (tab.tabIcon !== undefined) {
                            icon["icon"] = <tab.tabIcon className={classes.tabIcon} />;
                        }
                        const pillsClasses =
                            classes.pills +
                            " " +
                            cx({
                                [classes.verticalPills]: !horizontal,
                                [classes.pillsWithIcons]: tab.tabIcon !== undefined
                            });
                        return (
                            <Tab
                                label={tab.tabButton}
                                value={tab.value}
                                key={key}
                                {...icon}
                                classes={{
                                    root: pillsClasses,
                                    selected: classes[color]
                                }}
                            />
                        );
                    })}
                </Tabs>
            </Box>
        </Box>
    );

    const tabActions = (
        <Box className={classes.container} >
            {actions.map(
                (action, index) => (
                    <Box key={index} ml={1}>
                        {action}
                    </Box>
                )
            )}
        </Box>
    )

    const tabContent = (
        <div className={classes.contentWrapper}>
            {tabs.map((tab, key) => {
                return (
                    (key === active) && (<div className={classes.tabContent} key={key}>
                        {tab.tabContent}
                    </div>)
                );
            })}
        </div>
    );

    return horizontal ? (<>
        <Box className={classes.grid} display="flex">
            <Box flexGrow={1} className={classes.tabItemGrid}>{tabButtons}</Box>
            <Box className={classes.itemGrid}>{tabActions}</Box>
        </Box>
        <Box>
            <Box className={classes.itemGrid}>{tabContent}</Box>
        </Box>
    </>) : (<Grid container>
            <Grid item lg={2}>{tabButtons}</Grid>
            <Grid item lg={9}>{tabContent}</Grid>
            <Grid item lg={1}>{tabActions}</Grid>
        </Grid>);
}

NavPills.defaultProps = {
    active: 0,
    color: "primary",
    actions: [],
    horizontal: true
};

NavPills.propTypes = {
    // index of the default active pill
    active: PropTypes.number,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            tabButton: PropTypes.string,
            tabIcon: PropTypes.object,
            tabContent: PropTypes.node
        })
    ).isRequired,
    color: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose"
    ]),
    horizontal: PropTypes.bool,
    alignCenter: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    actions: PropTypes.array
};

export default NavPills;