import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";

const NotFound = ({ title }) => {
  return <Card>{title}</Card>;
};

NotFound.propTypes = {
  title: PropTypes.string
};

export default NotFound;
