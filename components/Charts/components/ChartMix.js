import React from "react";
import ChartCard from "../../ChartCard";
import PropTypes from "prop-types";
import { Scatter } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

export const ChartMix = ({ chartColor, dataInfo, displayDataLabels, options, ...other }) => {
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
    },
    ...other
  };

  return (
    <ChartCard chart={<Scatter data={dataInfo} options={opts} height={500} />} chartColor={chartColor || "white"} />
  );
};

ChartMix.propTypes = {
  dataInfo: PropTypes.object,
  displayDataLabels: PropTypes.bool,
  chartColor: PropTypes.string,
  options: PropTypes.object
};

export default ChartMix;