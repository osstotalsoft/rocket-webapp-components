##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import Charts from '@bit/totalsoft_oss.react-mui.charts';

const labels = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"]

const series = [
	[12, 28, 38, 5, 8, 13, 11, 22, 44, 103, 99, 27],
	[221, 240, 445, 474, 324, 180, 117, 137, 277, 801, 508, 114]
]

const options = {
	maintainAspectRatio: false,
	title: {
		display: false,
		text: ""
	},
	layout: {
		padding: {
			left: 0,
			right: 20,
			top: 20,
			bottom: 0
		}
	},
	legend: {
		display: false,
		position: "bottom"
	},
	scales: {
		xAxes: [
			{
				offset: false,
				gridLines: {
					display: true,
					color: "white",
					borderDash: [1, 5],
					zeroLineColor: "rgb(255,255,255)",
					drawBorder: false,
					zeroLineWidth: 0
				},
				scaleLabel: {
					display: false,
					labelString: "",
					fontColor: "black"
				},
				ticks: {
					fontColor: "white",
					autoSkip: false
				},
				barPercentage: 0.2
			}
		],
		yAxes: [
			{
				gridLines: {
					display: true,
					color: "white",
					borderDash: [1, 5],
					zeroLineColor: "rgb(255,255,255)",
					drawBorder: false,
					zeroLineBorderDash: [1, 5]
				},
				scaleLabel: {
					display: false,
					labelString: "",
					fontColor: "black"
				},
				ticks: {
					fontColor: "white"
				}
			}
		]
	}
};

export default (
	<Grid container spacing={1}>
		<Grid item xs={12} sm={12} md={12} lg={12}>
			<ChartFactory
				type="Line"
				labels={labels}
				dataInfo={{
					datasets: [
						{
							data: series[0],
							color: "white",
							label: "Approved"
						},

						{
							data: series[1],
							color: "yellow",
							label: "In work"
						}
					]
				}}
				underChart={
					<div>
						Some content under chart
                        </div>
				}
				chartColor={"blue"}
				StatIcon={AccessTime}
				statText={'Text description'}
				title={'Title'}
				hover={true}
				displayDataLabels={false}
				borderWidth={5}
				options={options}
				fill={false}
			/>
		</Grid>

		<Grid item xs={12} sm={12} md={12} lg={12}>
			<ChartFactory
				type="Bar"
				labels={labels}
				dataInfo={{
					datasets: [
						{
							data: series[0],
							color: "white"
						}
					]
				}}
				underChart={
					<div>
						Some content under chart
                        </div>
				}
				chartColor={"orange"}
				title={'Title'}
				StatIcon={AccessTime}
				statText={'Status text'}
				hover={true}
				displayDataLabels={false}
				options={options}
			/>
		</Grid>
	</Grid>
)
 ```