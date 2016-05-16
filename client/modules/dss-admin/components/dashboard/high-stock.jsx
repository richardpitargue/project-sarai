import React from 'react';

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
