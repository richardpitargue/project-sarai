import React from 'react';

class BarChart extends React.Component {
  componentDidMount() {
    const {
      id,
      chartName,
      chartTitle,
      chartSeries} = this.props;

    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const idTemp = `#${id}`;

    $(idTemp).highcharts(
      'StockChart',
      {
         title: {
            text: chartTitle
        },

        xAxis: {
            type: 'datetime'
        },

        yAxis: {
            title: {
                text: null
            }
        },

        tooltip: {
            shared: true,
            valueSuffix: 'mm'
        },

        legend: {
          enabled: true,
          layout: 'horizontal',
          align: 'left',
          x: 100,
          verticalAlign: 'top',
          y: 70,
          floating: true
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

BarChart.propTypes = {
  chartData: React.PropTypes.object,
  id: React.PropTypes.string
};

export default BarChart;
