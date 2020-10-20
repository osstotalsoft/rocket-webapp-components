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
  header,
  canExpand
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
          avatar: classes.cardAvatar
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
              {(exp || (!exp && !header)) && (
                <Typography variant="subtitle1" className={classes.cardTitle}>
                  {title}
                </Typography>
              )}
              {!exp && header && <div style={{ width: "100%" }}>{header}</div>}
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
              {(exp || (!exp && !header)) && (
                <Typography variant="subtitle1" className={classes.cardTitle}>
                  {title}
                </Typography>
              )}
              {!exp && header && <div style={{ width: "100%" }}>{header}</div>}
            </AccordionSummary>
          </Accordion>
        )}
      </CardContent>
      {footer && <div className={classes.cardFooter}>{footer}</div>}
    </Card>
  );
}

IconCollapseCard.defaultProps = {
  iconColor: "theme"
};

IconCollapseCard.propTypes = {
  icon: PropTypes.object.isRequired,
  iconColor: PropTypes.oneOf([
    "orange",
    "green",
    "red",
    "blue",
    "purple",
    "rose",
    "theme"
  ]),
  title: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
  plain: PropTypes.bool,
  customCardContentClass: PropTypes.string,
  header: PropTypes.node,
  expanded: PropTypes.bool,
  canExpand: PropTypes.bool,
  defaultExpanded: PropTypes.bool,
  onToggle: PropTypes.func
};

export default IconCollapseCard;
