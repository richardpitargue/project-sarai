import React from 'react';
import classNames from 'classnames';
import math from 'mathjs';

class SoilMoisture extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  render() {
    const {spacing, classList, station, minorHeader} = this.props;

    const noSpacing = 'mdl-grid--no-spacing';
    const className = spacing ? classNames('mdl-grid', 'section-list', classList)
      : classNames('mdl-grid', 'section-list', noSpacing, classList);
    const rowName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone', 'dash-charts')

    const twoCol = classNames('mdl-cell', 'mdl-cell--6-col-desktop', 'mdl-cell--4-col-tablet', 'mdl-cell--4-col-phone')

    const message = station ? 'Auto-filled the form using data from ' : 'Select a location on the map'
    const label = station ? station.label : ''


    return (
      <div className={className}>
        <div className={rowName}>
          {minorHeader}
          <div className="mdl-grid">
            <div className={twoCol}>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default SoilMoisture;