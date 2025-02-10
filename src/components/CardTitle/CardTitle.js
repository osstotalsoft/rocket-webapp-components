import React from "react";
import PropTypes from "prop-types";
import cardTitleStyle from "./cardTitleStyle";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(cardTitleStyle);

export default function CardTitle({ title, actions, ...rest }) {
  const classes = useStyles();

  return (
    <Box className={classes.container} >
      <Box className={classes.cardTitle}>{title}</Box>
      {actions.map(
        (action, index) => (
          <Box key={index} ml={1} {...rest}>
            {action}
          </Box>
        )
      )}
    </Box>
  );
}

CardTitle.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.node).isRequired
};