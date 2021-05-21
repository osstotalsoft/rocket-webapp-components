import React from "react";
import { Card, CardContent, CardHeader, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import cx from "classnames";

import regularCardStyle from "./regularCardStyle";
const useStyles = makeStyles(regularCardStyle);

const RegularCard = ({
  plainCard,
  cardTitle,
  cardSubtitle,
  content,
  titleAlign,
  customCardClasses,
  contentAlign,
  subtitleAlign,
  customCardTitleClasses,
  customCardContentClasses,
  footer
}) => {
  const classes = useStyles();

  const cardClasses =
    classes.card +
    cx({
      [" " + classes.cardPlain]: plainCard,
      [" " + customCardClasses]: customCardClasses !== undefined
    });
  return (
    <Card className={cardClasses}>
      {cardTitle !== undefined || cardSubtitle !== undefined ? (
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title:
              classes.cardTitle +
              " " +
              classes[titleAlign] +
              cx({
                [" " + customCardTitleClasses]: customCardTitleClasses !== undefined
              }),
            subheader: classes.cardSubtitle + " " + classes[subtitleAlign]
          }}
          title={cardTitle}
          subheader={cardSubtitle}
        />
      ) : null}
      <CardContent
        className={
          classes.cardContent + " " + classes[contentAlign] +
          cx({
            [" " + customCardContentClasses]: customCardContentClasses !== undefined
          })
        }
      >
        {content}
      </CardContent>
      {footer && <div className={classes.cardFooter}>{footer}</div>}
    </Card>
  );
};

RegularCard.propTypes = {
  /**
 * Override or extend the styles applied to the card
 */
  customCardClasses: PropTypes.string,

  /**
   * Override or extend the styles applied to the title of the card
   */
  customCardTitleClasses: PropTypes.string,
  /**
  * Override or extend the styles applied to the content of the card
  */
  customCardContentClasses: PropTypes.string,
  /**
  * The footer to be displayed. This property can be a string or a component
  */
  footer: PropTypes.node,
  /**
   * If set to true, the background will be transparent
   */
  plainCard: PropTypes.bool,
  /**
 * The title of the card
 */
  cardTitle: PropTypes.node,
  /**
 * The subtitle of the card
 */
  cardSubtitle: PropTypes.node,
  /**
  * The content of the card
  */
  content: PropTypes.node,
  /**
 * Title alignment
 */
  titleAlign: PropTypes.oneOf(["right", "left", "center"]),
  /**
 * Content alignment
 */
  contentAlign: PropTypes.oneOf(["right", "left", "center"]),
  /**
   * Subtitle alignment
   */
  subtitleAlign: PropTypes.oneOf(["right", "left", "center"])
};

export default RegularCard;
