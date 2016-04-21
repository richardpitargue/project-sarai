import React from 'react';
import highcharts from 'highcharts';

class RainChartWithForecast extends React.Component {
  constructor() {
    super()
    this.getMeteogramOptions = this.getMeteogramOptions.bind(this);
    this.getSampleData = this.getSampleData.bind(this);
    this.getSampleForecast = this.getSampleForecast.bind(this);
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
      // {date: {year: '2016',  month: '02', day: '20'}, rainm: '0'},
      // {date: {year: '2016',  month: '02', day: '21'}, rainm: '0'},
      {date: {year: '2016',  month: '02', day: '22'}, rainm: '0'},
      {date: {year: '2016',  month: '02', day: '23'}, rainm: '0'},
      {date: {year: '2016',  month: '02', day: '24'}, rainm: '0'},
      {date: {year: '2016',  month: '02', day: '25'}, rainm: '3.8'},
      {date: {year: '2016',  month: '02', day: '26'}, rainm: '0'},
      {date: {year: '2016',  month: '02', day: '27'}, rainm: '0'},
      {date: {year: '2016',  month: '02', day: '28'}, rainm: '0'},
      {date: {year: '2016',  month: '02', day: '29'}, rainm: '0'},
      {date: {year: '2016',  month: '02', day: '30'}, rainm: '0'},
      {date: {year: '2016',  month: '02', day: '31'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '1'}, rainm: '3.6'},
      {date: {year: '2016',  month: '03', day: '2'}, rainm: '0.3'},
      {date: {year: '2016',  month: '03', day: '3'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '4'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '5'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '6'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '7'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '8'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '9'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '10'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '11'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '12'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '13'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '14'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '15'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '16'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '17'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '18'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '19'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '20'}, rainm: '0.3'},
      // {date: {year: '2016',  month: '03', day: '21'}, rainm: '0'},
    ]

    const rainfall = []
    const accumulatedRainfall = []

    let totalRainfall = 0

    for (let entry of pastMonthRainfall) {
      const utcDate = Date.UTC(entry.date.year, entry.date.month, entry.date.day);

      totalRainfall += parseFloat(entry.rainm)

      // rainfall.push([utcDate, parseFloat(entry.rainm)]);
      // accumulatedRainfall.push([utcDate, parseFloat(totalRainfall)])
      rainfall.push({x: utcDate, y: parseFloat(entry.rainm)})
      accumulatedRainfall.push({x: utcDate, y: parseFloat(totalRainfall)})
    }

    data = {
      "rainfall": rainfall,
      "accumulatedRainfall": accumulatedRainfall
    }

    return data
  }

  getSampleForecast() {
    const tenDayForecast = [
      {date: {year: '2016',  month: '03', day: '21'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '22'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '23'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '24'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '25'}, rainm: '1'},
      {date: {year: '2016',  month: '03', day: '26'}, rainm: '0'},
      {date: {year: '2016',  month: '03', day: '27'}, rainm: '3'},
      {date: {year: '2016',  month: '03', day: '28'}, rainm: '5'},
      {date: {year: '2016',  month: '03', day: '29'}, rainm: '6'},
      {date: {year: '2016',  month: '03', day: '30'}, rainm: '3'},
    ]

    forecast = []
    forecastAccumulation = []

    const ar = this.getSampleData().accumulatedRainfall

    let totalRainfall = ar[ar.length - 1].y

    for (let entry of tenDayForecast) {
      const utcDate = Date.UTC(entry.date.year, entry.date.month, entry.date.day);

      totalRainfall += parseFloat(entry.rainm)

      // forecast.push([utcDate, parseFloat(entry.rainm)])
      // forecastAccumulation.push([utcDate, parseFloat(totalRainfall)])

      forecast.push({x: utcDate, y: parseFloat(entry.rainm)})
      forecastAccumulation.push({x: utcDate, y: parseFloat(totalRainfall)})
    }

    const lastIndex = forecast.length - 1
    const startDate = forecast[0].x
    const endDate = forecast[lastIndex].x

    data = {
      "forecast": forecast,
      "forecastAccumulation": forecastAccumulation,
      "startDate": startDate,
      "endDate": endDate
    }

    return data
  }



  getMeteogramOptions() {
    // const {chartData} = this.props;

    //past 30-day rainfall and 10-day forecast will be passed separately and concatenaed
    //Obtain: Day today (for plotband), 
    //
    const data = this.getSampleData()
    const forecast = this.getSampleForecast()

    const dateToday = new Date().toJSON().slice(0,10);

    const completeRainfall = data.rainfall.concat(forecast.forecast)
    const completeAccumulatedRainfall = data.accumulatedRainfall.concat(forecast.forecastAccumulation)


    //This must be configurable
    const requiredRainfall = 8
    
    const canPlantToday = (data.accumulatedRainfall[data.accumulatedRainfall.length - 1].y >= requiredRainfall) ? true : false

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
            from: forecast.startDate,
            to: forecast.endDate,
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

  render() {
    const style = {
      'width': '100%'
    }

    return (
      <div id="meteogram"/>
    )
  }
}

export default RainChartWithForecast;