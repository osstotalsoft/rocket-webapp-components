import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  makeStyles
} from "@material-ui/core";
import Typography from "../Typography";
import PropTypes from "prop-types";
import statsCardStyle from "./statsCardStyle";

const useStyles = makeStyles(statsCardStyle);

const StatsCard = ({
  title,
  description,
  statLink,
  subContent,
  footer,
  statIconColor,
  iconColor,
  Icon,
  StatIcon
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          root: classes.cardHeader + " " + classes[iconColor + "CardHeader"],
          avatar: classes.cardAvatar
        }}
        avatar={<Icon className={classes.cardIcon} />}
      />
      <CardContent className={classes.cardContent}>
        <Typography component="p" className={classes.cardCategory}>
          {title}
        </Typography>
        <Typography variant="h5" component="h2" className={classes.cardTitle}>
          {description}
          {subContent && <small className={classes.cardTitleSmall}>{subContent}</small>}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.cardStats}>
          <StatIcon
            className={
              classes.cardStatsIcon +
              " " +
              classes[statIconColor + "CardStatsIcon"]
            }
          />{" "}
          {statLink !== undefined ? (
            <a href={statLink.href} className={classes.cardStatsLink}>
              {statLink.text}
            </a>
          ) : footer !== undefined ? (
            footer
          ) : null}
        </div>
      </CardActions>
    </Card>
  );
};

StatsCard.defaultProps = {
  iconColor: "blue",
  statIconColor: "gray"
};

StatsCard.propTypes = {
  Icon: PropTypes.any.isRequired,
  iconColor: PropTypes.oneOf(["orange", "green", "red", "blue", "purple"]),
  title: PropTypes.node,
  description: PropTypes.node,
  subContent: PropTypes.node,
  StatIcon: PropTypes.any,
  statIconColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  statLink: PropTypes.object,
  footer: PropTypes.node
};

export default StatsCard;
