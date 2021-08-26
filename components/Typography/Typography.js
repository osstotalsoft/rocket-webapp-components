import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography as BaseTypography } from "@material-ui/core";
import Tooltip from "../Tooltip/Tooltip";
import typographyStyle, { emphasisType } from "./typographyStyle";
import * as R from "ramda";

const useStyles = makeStyles(typographyStyle);
const getEmphasis = R.flip(R.prop)(emphasisType);
const mergeStyles = (k, l, r) => (k === "textDecoration" ? `${l} ${r}` : r);
const reduceEmphasis = R.reduce(
  (acc, elem) => R.mergeWithKey(mergeStyles, acc, getEmphasis(elem)),
  {}
);
const transformEmphasisToStyle = R.cond([
  [R.is(Array), reduceEmphasis],
  [R.is(String), getEmphasis],
  [R.T, _ => {}]
]);
const checkStyle = R.anyPass([R.isNil, R.isEmpty]);
const defaultToEmpty = R.defaultTo({});

const Typography = ({ tooltip, emphasis, style, ...res }) => {
  const classes = useStyles();
  const emphasisStyle = transformEmphasisToStyle(emphasis);
  const mergedStyle = R.mergeWithKey(
    mergeStyles,
    emphasisStyle,
    defaultToEmpty(style)
  );
  const cleanStyle = R.when(checkStyle, R.always(undefined), mergedStyle);
  const base = (
    <BaseTypography
      className={classes.defaultFont}
      style={cleanStyle}
      {...res}
    />
  );
  return tooltip ? <Tooltip title={tooltip}>{base}</Tooltip> : base;
};

Typography.defaultProps = {
  variant: "inherit"
};

Typography.propTypes = {
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf([
    "inherit",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline"
  ]),
  color: PropTypes.oneOf([
    "initial",
    "inherit",
    "primary",
    "secondary",
    "textPrimary",
    "textSecondary",
    "error"
  ]),
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  emphasis: PropTypes.oneOfType([
    PropTypes.oneOf([
      "bold",
      "italic",
      "underline",
      "line-through",
      "overline"
    ]),
    PropTypes.arrayOf(
      PropTypes.oneOf([
        "bold",
        "italic",
        "underline",
        "line-through",
        "overline"
      ])
    )
  ])
};

export default Typography;
