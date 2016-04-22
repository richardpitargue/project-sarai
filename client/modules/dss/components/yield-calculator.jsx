import React from 'react'

class YieldCalculator extends React.Component {
  constructor() {
    super()
    this.renderForm = this.renderForm.bind(this)
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

  renderSelectOptions(data) {
    return data.map((option, key) => {
      return (
        <option value={option.value} key={key}>{option.text}</option>
      )
    })
  }

  renderForm() {
    return (
      <div id="dss-yield-calculator">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col yc-top-row">
            <a href="#" className="yc-help-icon"><i id="help-icon" className="help-options material-icons">help</i></a>
          </div>

          <div className="mdl-cell mdl-cell--12-col yc-input-row">
            <div className="yc-dropdown">
              <select className="yc-dropdown__select" id="location" defaultValue="0">
                <option value="0" className="no-display">Select Location</option>
              </select>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col yc-input-row">
            <div className="yc-dropdown">
              <select className="yc-dropdown__select" id="planting-date" defaultValue="0">
                <option value="0" className="no-display">Select Planting Date</option>

              </select>
            </div>
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

            <div className="yc-dropdown">
              <select id="soil-texture" className="yc-dropdown__select" defaultValue="0">
                <option value="0" className="no-display">Select Soil Type</option>
              </select>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col yc-input-row">
            <div className="yc-input yc-input-elev">
              <input type="number" className="yc-input__number" id="elevation" placeholder="Elevation" />
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col">
            <button id="calculate-yield-button" className="mdl-button mdl-js-button mdl-button--raised" onClick="">
              Submit
            </button>
          </div>

        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderForm()}
      </div>
    )
  }
}

export default YieldCalculator