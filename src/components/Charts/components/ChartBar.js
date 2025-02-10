import React from "react";
import ChartCard from "../../ChartCard";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

export const ChartBar = ({
  labels,
  title,
  displayDataLabels,
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
      chart={<Bar data={{ labels: labels, datasets: data }} options={opts} />}
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

ChartBar.propTypes = {
  labels: PropTypes.array,
  dataInfo: PropTypes.object,
  underChart: PropTypes.object,
  chartColor: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  StatIcon: PropTypes.any,
  statText: PropTypes.string,
  hover: PropTypes.bool,
  displayDataLabels: PropTypes.bool,
  options: PropTypes.object
};

ChartBar.defaultProps = {
  displayDataLabels: true
};

export default ChartBar;