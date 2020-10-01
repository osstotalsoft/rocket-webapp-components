import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, makeStyles } from "@material-ui/core";
import iconCardStyle from "./iconCardStyle";
import Typography from '../Typography';

const useStyles = makeStyles(iconCardStyle);

const IconCard = (props) => {

  const classes = useStyles();
  const {
    title,
    content,
    iconColor,
    category,
    footer,
    plain,
    customCardContentClass,
    customCardClass,
    icon: Icon
  } = props;
  const cardClasses =
    classes.card +
    " " +
    cx({
      [classes.cardPlain]: plain,
      [customCardClass]: customCardClass
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
        <Typography className={classes.cardTitle} variant='subtitle1'>
          {title}
        </Typography>
        {category !== undefined ? (
          <small className={classes.cardCategory}>{category}</small>
        ) : null}
        {content}
      </CardContent>
      {footer !== undefined ? (
        <div className={classes.cardFooter}>{footer}</div>
      ) : null}
    </Card>
  )
}

IconCard.defaultProps = {
  iconColor: "theme",
  title: ""
};

IconCard.propTypes = {
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
  category: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
  plain: PropTypes.bool,
  customCardContentClass: PropTypes.string,
  customCardClass: PropTypes.string
};

export default IconCard;