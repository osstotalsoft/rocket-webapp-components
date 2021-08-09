import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Tab, Tabs, Grid, Box, makeStyles } from "@material-ui/core";
import navPillsStyle from "./navPillsStyle.js";

const useStyles = makeStyles(navPillsStyle);

const NavPills = ({ tabs, color, horizontal, alignCenter, active, onChange, actions, variant }) => {
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
                    variant={variant}
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
    horizontal: true,
    variant: "standard"
};

NavPills.propTypes = {
    /**
    * Index of the default active pill
    */
    active: PropTypes.number,
    /**
    * The content of the component
    */
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            tabButton: PropTypes.string,
            tabIcon: PropTypes.object,
            tabContent: PropTypes.node
        })
    ).isRequired,
    /**
    * The color of the component
    */
    color: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "theme"
    ]),
    horizontal: PropTypes.bool,
    alignCenter: PropTypes.bool,
    /**
    * This property is required
    * @param {object} event The event source of the callback.
    * @param {any} value We default to the index of the child (number)
    */
    onChange: PropTypes.func.isRequired,
    /**
    * A list of actions available in this component
    */
    actions: PropTypes.array,
    /**
     * Determines additional display behavior of the tabs:
        - scrollable will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar.
        - fullWidth will make the tabs grow to use all the available space, which should be used for small views, like on mobile.
        - standard will render the default state.
     */
    variant: PropTypes.oneOf([
        "scrollable",
        "fullWidth",
        "standard"
    ]),
};

export default NavPills;