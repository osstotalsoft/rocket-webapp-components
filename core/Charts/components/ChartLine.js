import React from "react";
import ChartCard from "../../ChartCard";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

export const ChartLine = ({
  labels,
  title,
  displayDataLabels,
  borderWidth,
  dataInfo,
  underChart,
  chartColor,
  text,
  StatIcon,
  statText,
  hover,
  options,
  ...other
}) => {
  let data =
    dataInfo.datasets &&
    dataInfo.datasets.map(value => {
      return {
        ...value,
        borderColor: value.color,
        borderWidth: borderWidth,
        backgroundColor: value.color,
        ...other
      };
    });

  let opts = {
    ...options,
    plugins: {
      datalabels: {
        formatter: function (value) {
          return value;
        },
        align: "top",
        font: {
          size: 8
        },
        display: displayDataLabels
      }
    }
  };

  return (
    <ChartCard
      chart={<Line data={{ labels: labels, datasets: data }} options={opts} />}
      underChart={underChart}
      chartColor={chartColor || "white"}
      title={title}
      text={text}
      StatIcon={StatIcon}
      statText={statText}
      hover={hover}
    />
  );
};

ChartLine.propTypes = {
  labels: PropTypes.array,
  dataInfo: PropTypes.object,
  underChart: PropTypes.object,
  chartColor: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  StatIcon: PropTypes.object,
  statText: PropTypes.string,
  hover: PropTypes.bool,
  displayDataLabels: PropTypes.bool,
  borderWidth: PropTypes.number,
  options: PropTypes.object
};

ChartLine.defaultProps = {
  displayDataLabels: true,
  borderWidth: 1
};

export default ChartLine;