import React from 'react';
import classNames from 'classnames';

class YieldCalculator extends React.Component {
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
    const {spacing, classList} = this.props;
    const noSpacing = 'mdl-grid--no-spacing';
    const className = spacing ? classNames('mdl-grid', 'section-list', classList)
      : classNames('mdl-grid', 'section-list', noSpacing, classList);
    const rowName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone', 'dash-charts')

    const twoCol = classNames('mdl-cell', 'mdl-cell--6-col-desktop', 'mdl-cell--4-col-tablet', 'mdl-cell--4-col-phone')

    return (
      <div className={className}>
        <div className={rowName}>
          <div className="mdl-grid">
            <div className={twoCol}>
              <div className="mdl-cell mdl-cell--12-col yc-top-row">
                <a href="#" className="yc-help-icon"><i id="help-icon" className="help-options material-icons">help</i></a>
              </div>

              <div className="mdl-cell mdl-cell--12-col yc-input-row">
                <div className="yc-input yc-input-srad">
                  <input type="number" className="yc-input__number" id="solar-radiation" placeholder="Solar Radation"/>
                </div>
              </div>

              <div className="mdl-cell mdl-cell--12-col yc-input-row">
                <div className="yc-input yc-input-temp">
                  <input type="number" className="yc-input__number" id="minimum-temperature" placeholder="Minimum Temperature" />
                </div>
              </div>

              <div className="mdl-cell mdl-cell--12-col yc-input-row">
                <div className="yc-input yc-input-temp">
                  <input type="number" className="yc-input__number" id="maximum-temperature" placeholder="Maximum Temperature" />
                </div>
              </div>

              <div className="mdl-cell mdl-cell--12-col yc-input-row">
                <div className="yc-input yc-input-rain">
                  <input type="number" className="yc-input__number yc-input__number-rain" id="precipitation" placeholder="Precipitation" />
                </div>
              </div>

              <div className="mdl-cell mdl-cell--12-col yc-input-row">
                <button id="calculate-yield-button" className="mdl-button mdl-js-button mdl-button--raised" onClick={''}>
                  Submit
                </button>
              </div>
            </div>

            <div className={twoCol}>
              Description goes here
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default YieldCalculator;