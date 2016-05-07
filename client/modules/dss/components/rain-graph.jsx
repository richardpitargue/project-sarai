import React from 'react';
import highcharts from 'highcharts';

class RainGraph extends React.Component {
  constructor() {
    super()
    this.getMeteogramOptions = this.getMeteogramOptions.bind(this);
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const {chartData} = this.props

    if (chartData) {
      const meteogramID = `meteogram`;

      $('#meteogram').highcharts(
      this.getMeteogramOptions(chartData));
    }
  }

  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const {chartData} = this.props

    if (chartData) {
      const meteogramID = `meteogram`;

      $('#meteogram').highcharts(
      this.getMeteogramOptions(chartData));
    }
  }

  getMeteogramOptions(chartData) {
    const completeRainfall = chartData.pastRainfall.concat(chartData.forecastRain)
    const completeAccumulatedRainfall = chartData.accumulatedRainfall.concat(chartData.forecastAccumulation)

    const plotBandStart = chartData.forecastRain[0].x
    const plotBandEnd = chartData.forecastRain[chartData.forecastRain.length - 1].x


    //This must be configurable
    const requiredRainfall = 8

    let potentialPlantingDate = null

    for (let entry of completeAccumulatedRainfall) {
      if (entry.y >= requiredRainfall) {
        potentialPlantingDate = entry.x
      }
    }

    //TODO add message depending on result
    //TODO make message collection

    return {
      title: {
          text: 'Past 30-Day Rainfall'
      },
      plotOptions: {
        line: {
          marker: {
            enabled: false
          }
        },
        series: {
          allowPointSelect: true,
          point: {
            events: {
              select: function(e) {
                console.log(highcharts.dateFormat('%e %b', new Date(e.target.x)))
              }
            }
          }
        }
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
          },

          plotBands: [{
            color: '#FCFFC5',
            from: plotBandStart,
            to: plotBandEnd,
            label: {
              text: '10-Day Forecast',
              align: 'center',
              style: {
                fontWeight: 'bold',
                color: '#707070'
              }
            }
          }],
        }
      ],
      series: [{
          type: 'column',
          name: 'Rainfall',
          data: completeRainfall
      }, {
          type: 'line',
          name: 'Accumulated Rainfall',
          data: completeAccumulatedRainfall
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

  renderRecommendation() {
    const {minimumRainfall, dateOfSufficientRain} = this.props


    if (dateOfSufficientRain == -1) {
      return (
        <div>
          <h3>Minimum required rainfall of {minimumRainfall} mm was not reached.</h3>
        </div>
      )
    } else if (dateOfSufficientRain > 0) {
      const date = new Date(dateOfSufficientRain)
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

      return (
        <div>
          <h3>Minimum required rainfall of {minimumRainfall} mm will be reached on {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</h3>
        </div>
      )
    } else {
      return (
        <div>
          <h3></h3>
        </div>
      )
    }
  }

  render() {
    return (
      <div id="meteogram" />
    )
  }
}

export default RainGraph;