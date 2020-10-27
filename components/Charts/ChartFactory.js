import React from "react";
import { ChartLine } from "./components/ChartLine";
import { ChartBar } from "./components/ChartBar";
import { ChartMix } from "./components/ChartMix";
import PropTypes from "prop-types";

export const ChartFactory = ({
  type,
  labels,
  dataInfo,
  underChart,
  chartColor,
  title,
  text,
  StatIcon,
  statText,
  hover,
  displayDataLabels,
  borderWidth,
  options,
  ...other
}) => {
  switch (type) {
    case "Line": {
      return (
        <ChartLine
          labels={labels}
          dataInfo={dataInfo}
          underChart={underChart}
          chartColor={chartColor}
          title={title}
          text={text}
          StatIcon={StatIcon}
          statText={statText}
          hover={hover}
          displayDataLabels={displayDataLabels}
          borderWidth={borderWidth}
          options={options}
          {...other}
        />
      );
    }

    case "Bar": {
      return (
        <ChartBar
          labels={labels}
          dataInfo={dataInfo}
          underChart={underChart}
          chartColor={chartColor}
          title={title}
          text={text}
          StatIcon={StatIcon}
          statText={statText}
          hover={hover}
          displayDataLabels={displayDataLabels}
          options={options}
          {...other}
        />
      );
    }

    case "Mix": {
      return (
        <ChartMix
          dataInfo={dataInfo}
          chartColor={chartColor}
          title={title}
          options={options}
          displayDataLabels={displayDataLabels}
          {...other}
        />
      );
    }

    default:
      return undefined;
  }
};

ChartFactory.propTypes = {
  options: PropTypes.object.isRequired,
  type: PropTypes.oneOf([
    "Line",
    "Bar",
    "Mix"
  ]).isRequired,
  labels: PropTypes.array,
  dataInfo: PropTypes.object.isRequired,
  displayDataLabels: PropTypes.bool.isRequired,
  chartColor: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  StatIcon: PropTypes.any,
  statText: PropTypes.string,
  hover: PropTypes.bool,
  borderWidth: PropTypes.number,
  underChart: PropTypes.object
};

export default ChartFactory;
