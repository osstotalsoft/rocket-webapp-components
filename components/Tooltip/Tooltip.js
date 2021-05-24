import React from "react";
import PropTypes from "prop-types";
import { Tooltip as BaseTooltip } from "@material-ui/core";

const Tooltip = ({ children, ...rest }) => {
  return (
    <BaseTooltip {...rest}>
      <span>{children}</span>
    </BaseTooltip>
  );
};

Tooltip.propTypes = {
  /**
   * The component(s) wrapped
   */
  children: PropTypes.node
};

export default Tooltip;
