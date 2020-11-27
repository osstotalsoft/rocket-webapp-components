import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, makeStyles } from "@material-ui/core";
import iconCardStyle from "./iconCardStyle";
import Typography from "../Typography";

const useStyles = makeStyles(iconCardStyle);

const IconCard = props => {
  const classes = useStyles();
  const {
    title,
    content,
    iconColor,
    subtitle,
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
        <Typography className={classes.cardTitle} variant="subtitle1">
          {title}
        </Typography>
        {subtitle && (
          <Typography className={classes.cardCategory} variant="subtitle2">
            {subtitle}
          </Typography>
        )}
        {content}
      </CardContent>
      {footer && <div className={classes.cardFooter}>{footer}</div>}
    </Card>
  );
};

IconCard.defaultProps = {
  iconColor: "theme",
  title: ""
};

IconCard.propTypes = {
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
    "theme"
  ]),
  /**
  * The title to be displayed. This property can be a string or a component 
  */
  title: PropTypes.node,
  /**
  * The subtitle to be displayed. This property can be a string or a component
  */
  subtitle: PropTypes.node,
  /**
  * The content of the card
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
  * Override or extend the styles applied to the card
  */
  customCardClass: PropTypes.string
};

export default IconCard;
