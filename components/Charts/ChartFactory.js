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
  /**
  * The options of chart.
  */
  options: PropTypes.object.isRequired,
  /**
  * The type of chart.
  */
  type: PropTypes.oneOf([
    "Line",
    "Bar",
    "Mix"
  ]).isRequired,
  /**
  * The labels of chart.
  */
  labels: PropTypes.array,
  /**
  * The info of chart.(see the sample provided in demos)
  */
  dataInfo: PropTypes.object.isRequired,
  /**
  * If true, the labels are shown.
  */
  displayDataLabels: PropTypes.bool.isRequired,
  /**
  * The color of chart.
  */
  chartColor: PropTypes.string.isRequired,
  /**
  * The title of chart.
  */
  title: PropTypes.string,
  /**
  * The text status of chart.
  */
  text: PropTypes.string,
  /**
  * The status icon.
  */
  StatIcon: PropTypes.any,
  statText: PropTypes.string,
  /**
  * If true, the chart moves up on click hover.
  */
  hover: PropTypes.bool,
  borderWidth: PropTypes.number,
  /**
  * If provided, its content will appear just below the main content.
  */
  underChart: PropTypes.object
};

export default ChartFactory;
