import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Card, CardContent, CardHeader, CardActions, makeStyles } from "@material-ui/core";
import Typography from '../Typography';
import chartCardStyle from "./chartCardStyle";

const useStyles = makeStyles(chartCardStyle);

function ChartCard(props) {
  const classes = useStyles();
  const [hoverLocal, setHoverLocal] = useState(false);
  const {
    chartColor,
    statIconColor,
    chart,
    title,
    text,
    statLink,
    statText,
    underChart,
    hover,
    StatIcon
  } = props;
  const cardHeaderClasses =
    classes.cardHeader +
    " " +
    classes[chartColor + "CardHeader"] +
    cx({
      [" " + classes.moveChartUp]: hoverLocal && hover
    });
  var addHoverEvent = {};

  if (hover) {
    if (navigator.userAgent.match(/iPad/i) != null) {
      addHoverEvent.onClick = () =>
        setHoverLocal(h => !h);
    } else {
      addHoverEvent.onMouseEnter = () => setHoverLocal(true);
      addHoverEvent.onMouseLeave = () => setHoverLocal(false)
    }
  }

  return (
    <Card className={classes.card} {...addHoverEvent}>
      <CardHeader className={cardHeaderClasses} subheader={chart} />
      <CardContent className={classes.cardContent}>
        {hover ? (
          <div className={classes.underChart}>{underChart}</div>
        ) : null}
        <Typography
          variant="subtitle1"
          className={classes.cardTitle}
        >
          {title}
        </Typography>
        <Typography component="p" className={classes.cardCategory}>
          {text}
        </Typography>
      </CardContent>
      {StatIcon !== undefined ||
        statLink !== undefined ||
        statText !== undefined ? (
          <CardActions className={classes.cardActions}>
            <div className={classes.cardStats}>
              {StatIcon !== undefined ? (
                <StatIcon
                  className={
                    classes.cardStatsIcon +
                    " " +
                    classes[statIconColor + "CardStatsIcon"]
                  }
                />
              ) : null}{" "}
              {statLink !== undefined ? (
                <a href={statLink.href} className={classes.cardStatsLink}>
                  {statLink.text}
                </a>
              ) : statText !== undefined ? (
                statText
              ) : null}
            </div>
          </CardActions>
        ) : null}
    </Card>
  );
}

ChartCard.defaultProps = {
  statIconColor: "gray",
  chartColor: "purple",
  hover: false
};

ChartCard.propTypes = {
  chart: PropTypes.object.isRequired,
  title: PropTypes.node,
  text: PropTypes.node,
  StatIcon: PropTypes.func,
  statIconColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  chartColor: PropTypes.oneOf([
    "orange",
    "green",
    "red",
    "blue",
    "purple",
    "rose",
    "white"
  ]),
  statLink: PropTypes.object,
  statText: PropTypes.node,
  // if the chart should move up on hover
  hover: PropTypes.bool,
  // what to be displayed under the chart on hover
  underChart: PropTypes.node
};

export default ChartCard;