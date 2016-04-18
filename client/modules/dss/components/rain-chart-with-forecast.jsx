import React from 'react';
import highcharts from 'highcharts';

class RainChartWithForecast extends React.Component {
  constructor() {
    super()
    this.getMeteogramOptions = this.getMeteogramOptions.bind(this);
    this.getSampleData = this.getSampleData.bind(this);
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const meteogramID = `meteogram`;

    $('#meteogram').highcharts(
      this.getMeteogramOptions());
  }

  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  getSampleData() {
    const pastMonthRainfall = [
      // {date: {year: '2016',  month: '03', day: '16'}, rainm: '0'},
      // {date: {year: '2016',  month: '03', day: '17'}, rainm: '0'},
      // {date: {year: '2016',  month: '03', day: '18'}, rainm: '0'},
      // {date: {year: '2016',  month: '03', day: '19'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '20'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '21'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '22'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '23'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '24'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '25'}, rainm: '3.8'},
      {date: {year: '2016',  month: '03', day: '26'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '27'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '28'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '29'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '30'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '31'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '1'}, rainm: '3.6'},
      {date: {year: '2016',  month: '04', day: '2'}, rainm: '0.3'},
      {date: {year: '2016',  month: '04', day: '3'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '4'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '5'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '6'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '7'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '8'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '9'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '10'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '11'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '12'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '13'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '14'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '15'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '16'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '17'}, rainm: '0'},
      {date: {year: '2016',  month: '04', day: '18'}, rainm: '0'}
    ]

    const rainfall = []
    const accumulatedRainfall = []

    let totalRainfall = 0

    for (let entry of pastMonthRainfall) {
      const utcDate = Date.UTC(entry.date.year, entry.date.month, entry.date.day);

      totalRainfall += parseFloat(entry.rainm)

      console.log(totalRainfall)
      rainfall.push([utcDate, parseFloat(entry.rainm)]);
      accumulatedRainfall.push([utcDate, parseFloat(totalRainfall)])
    }

    data = {
      "rainfall": rainfall,
      "accumulatedRainfall": accumulatedRainfall
    }

    return data
  }

  getMeteogramOptions() {
    // const {chartData} = this.props;
    const data = this.getSampleData()

    return {
      title: {
          text: 'Past 30-Day Rainfall'
      },
      yAxis: [
        {
          title: {
            text: 'Millimeters of Rain',
            style: {
              fontWeight: 'bold'
            }
          },
          labels: {
            format: '{value} mm',
            style: {
              color: '#0066cc',
              fontWeight: 'bold'
            }
          }
        }
      ],
      xAxis: [
        {
          labels: {
            formatter: function () {
              var s = highcharts.dateFormat('%e %b', new Date(this.value));

              return s;
            }
          }
        }
      ],
      series: [{
          type: 'column',
          name: 'Rainfall',
          data: data.rainfall
      }, {
          type: 'spline',
          name: 'Accumulated Rainfall',
          data: data.accumulatedRainfall
      }],

      tooltip: {
        borderColor: '#cccccc',
        formatter: function( ) {
          var s = '<b>' + highcharts.dateFormat('%e %b', new Date(this.x)) + '</b>';

          s += '<br />' + this.points[0].series.name + ': ' + this.points[0].y + ' mm';
          s += '<br />' + this.points[1].series.name + ': ' + this.points[1].y + ' mm';


          // $.each(this.points, function () {
          //     s += '<br/>' + this.series.name + ': ' + this.y + 'm';
          // });

          return s;
        },
        shared: true
      }
    }

  }

  render() {
    return (
      <div id="meteogram"/>
    )
  }
}

export default RainChartWithForecast;