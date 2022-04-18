import React, { useState, useCallback } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles
} from "@material-ui/core";
import iconCollapseCardStyle from "./iconCollapseCardStyle";
import Typography from "../Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(iconCollapseCardStyle);

function IconCollapseCard({
  defaultExpanded,
  onToggle,
  expanded,
  title,
  content,
  iconColor,
  footer,
  plain,
  customCardContentClass,
  icon: Icon,
  summary,
  canExpand,
  className,
}) {
  const [localExpanded, setExpanded] = useState(defaultExpanded || false);
  const classes = useStyles();

  const handleToggle = useCallback(
    (_, eventExpanded) => {
      if (typeof onToggle !== "undefined") onToggle(_, eventExpanded);
      else {
        setExpanded(eventExpanded);
      }
    },
    [onToggle]
  );

  const exp = expanded || localExpanded;
  const canExp = typeof canExpand === "undefined" ? true : canExpand;

  const cardClasses =
    classes.card +
    " " +
    cx({
      [classes.cardPlain]: plain
    }) +
    " " +
    cx({
      [className]: className != null
    });

  const cardContentClasses =
    classes.cardContent +
    " " +
    cx({
      [customCardContentClass]: customCardContentClass !== undefined
    });

  return (
    <Card className={cardClasses}>
      <CardHeader
        classes={{
          root: classes.cardHeader + " " + classes[iconColor + "CardHeader"],
          avatar: classes.cardAvatar,
        }}
        avatar={<Icon className={classes.cardIcon} />}
      />
      <CardContent className={cardContentClasses}>
        {canExp ? (
          <Accordion
            onChange={handleToggle}
            disabled={!canExp}
            expanded={exp}
            className={classes.accordionRoot}
          >
            <AccordionSummary
              classes={{ content: classes.content, root: classes.summaryRoot }}
              expandIcon={<ExpandMoreIcon />}
            >
              {(exp || (!exp && !summary)) && (
                <Typography variant="subtitle1" className={classes.cardTitle}>
                  {title}
                </Typography>
              )}
              {!exp && summary && (
                <div style={{ width: "100%" }}>{summary}</div>
              )}
            </AccordionSummary>
            <AccordionDetails className={classes.expansionPanelDetails}>
              {content}
            </AccordionDetails>
          </Accordion>
        ) : (
          <Accordion
            onChange={handleToggle}
            expanded={false}
            className={classes.accordionRoot}
          >
            <AccordionSummary
              classes={{ content: classes.content, root: classes.summaryRoot }}
            >
              {(exp || (!exp && !summary)) && (
                <Typography variant="subtitle1" className={classes.cardTitle}>
                  {title}
                </Typography>
              )}
              {!exp && summary && (
                <div style={{ width: "100%" }}>{summary}</div>
              )}
            </AccordionSummary>
          </Accordion>
        )}
      </CardContent>
      {footer && <div className={classes.cardFooter}>{footer}</div>}
    </Card>
  );
}

IconCollapseCard.defaultProps = {
  iconColor: "theme",
};

IconCollapseCard.propTypes = {
  /**
   * Icon to be displayed. This property is mandatory
   */
  icon: PropTypes.object.isRequired,
  /**
   * The color of the icon that will be displayed
   */
  iconColor: PropTypes.oneOf([
    "orange",
    "green",
    "red",
    "blue",
    "purple",
    "rose",
    "theme",
    "themeWithGradient"
  ]),
  /**
   * The title to be displayed. This property can be a string or a component
   */
  title: PropTypes.node,
  /**
   * The content of the card. This property can be a string or a component
   */
  content: PropTypes.node,
  /**
   * The footer to be displayed. This property can be a string or a component
   */
  footer: PropTypes.node,
  /**
   * If set to true, the background will be transparent
   */
  plain: PropTypes.bool,
  /**
   * Override or extend the styles applied to the content of the card
   */
  customCardContentClass: PropTypes.string,
  /**
   * The summary of the card
   */
  summary: PropTypes.node,
  /**
   * If set to true, the card will be expanded
   */
  expanded: PropTypes.bool,
  /**
   * If set to true, the card can be expanded
   */
  canExpand: PropTypes.bool,
  /**
   * Default value for expanded property. If it's not provided will be set to false
   */
  defaultExpanded: PropTypes.bool,
  /**
   * @param {object} event The event source of the callback.
   * @param {boolean} expanded The `expanded` state of the card.
   */
  onToggle: PropTypes.func,
  /**
   * The className of card.
   */
  className: PropTypes.string,
};

export default IconCollapseCard;
