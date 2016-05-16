import React from 'react';
// import classNames from 'classnames';
// import highcharts from 'highcharts/highcharts';
// require('highcharts/modules/exporting')(highcharts)
// require('highcharts/highcharts-more')(highcharts)


class HighStock extends React.Component {
  componentDidMount() {
    const {
      id,
      chartName,
      chartRange,
      chartTitle,
      chartSeries} = this.props;

    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const idTemp = `#${id}`;

    // const chart = new highcharts.Chart(
    //   {
    //     chart: {
    //       // type: 'arearange',
    //       // type: 'line',
    //       renderTo: 'temp-range'
    //     },

    //     title: {
    //       text: 'title'
    //     },

    //     // tooltip: {
    //     //   valueSuffix: 'C'
    //     // },

    //     series: [
    //       {
    //         name: 'Temperature',
    //         data: [{
    //           name: 'Temperature',
    //           data: [
    //             [1, 1.1],
    //             [2, 1.8],
    //             [3, 1.7],
    //             [4, 2.6],
    //             [5, 3.3],
    //             [6, 3.0],
    //             [7, 3.9],
    //             [8, 3.9]
    //           ]
    //         }]
    //       }
    //     ]
    //   }
    // )

    console.log('Creating chart')
    console.log(chartSeries)

    $(idTemp).highcharts(
      'StockChart',
      {
        chart: {
            type: 'arearange'
        },

        series: chartSeries
      }
    )

  }

  componentDidUpdate() {
    const {id} = this.props;

    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  render() {
    // const className = classNames('mdl-layout-title', 'app-title', classList);
    const {id} = this.props;

    return (
      <div>
        chart goes here
        <div
          id={id}
        >
        </div>
      </div>
    );
  }
}

HighStock.propTypes = {
  chartData: React.PropTypes.object,
  id: React.PropTypes.string
};

export default HighStock;
