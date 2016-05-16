import React from 'react';
// import classNames from 'classnames';
import highcharts from 'highcharts/highstock';
require('highcharts/highcharts-more')(highcharts)

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

    $(idTemp).highcharts(
      {
        chart: {
          type: 'arearange'
        },

        rangeSelector: {
          selected: 2
        },

        title: {
          text: 'title'
        },

        xAxis: {
            type: 'datetime'
        },

        yAxis: {
            title: {
                text: null
            }
        },

        // tooltip: {
        //   valueSuffix: 'C'
        // },

        series: [
          {
            name: 'Temperature',
            data: chartSeries
          }
        ]
      }
    );

  }

  componentDidUpdate() {
    const {id, chartData} = this.props;

    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const idTemp = `#${id}`;

    $(idTemp).highcharts(

    );
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
