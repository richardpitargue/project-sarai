import React from 'react';
import classNames from 'classnames';
import math from 'mathjs';

class YieldCalculator extends React.Component {
  constructor() {
    super()
    this.handleChangeMaxTemperature = this.handleChangeMaxTemperature.bind(this)
    this.handleChangeMinTemp = this.handleChangeMinTemp.bind(this)
    this.handleChangeRainfall = this.handleChangeRainfall.bind(this)
    this.handleChangeSRad = this.handleChangeSRad.bind(this)
    this.renderDescription = this.renderDescription.bind(this)
    this.getWeekNumber = this.getWeekNumber.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleChangeMinTemp(e) {
    this.setState({minTemperature: e.target.value})
  }

  handleChangeMaxTemperature(e) {

  }

  handleChangeRainfall(e) {

  }

  handleChangeSRad(e) {

  }

  getWeekNumber() {
    const today = new Date
    let d = new Date(+today);
    d.setHours(0,0,0);
    d.setDate(d.getDate()+4-(d.getDay()||7));
    return (Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7)) - 1;
  }

  handleSubmit() {
    const {closestFormula} = this.props
    const {spy} = this.props

    const scope = {
      plantingDate: this.getWeekNumber(),
      solarRadiation: parseFloat(this.srad.value),
      maxTemperature: parseFloat(this.maxTemp.value),
      minTemperature: parseFloat(this.minTemp.value),
      rainfall: parseFloat(this.rain.value)
    }

    // math.config({
    //   number: 'BigNumber',
    //   precision: 10
    // })

    let result = math.eval(closestFormula.expression, scope)
    result = Math.round(result * 100) / 100

    console.log(scope)
    console.log(result)

    spy(result)
  }

  renderDescription() {
    const {closestFormula, predictedYield} = this.props
    const twoCol = classNames('mdl-cell', 'mdl-cell--6-col-desktop', 'mdl-cell--4-col-tablet', 'mdl-cell--4-col-phone')

    if (predictedYield) {
      return (
        <div className={twoCol}>
          <div className="yc-advisory">
            Planting <span className="yc-advisory-emp">{closestFormula.variety} {closestFormula.crop}</span> this week has a predicted yield of <span className="yc-advisory-emp"> {predictedYield} kg/ha*</span>
            <br /><br />
            *Using the model for {closestFormula.location.label} ({closestFormula.yearClassification} year)
          </div>
        </div>
      )
    }

    else {
      return (
        <div className={twoCol}>

        </div>
      )
    }
  }

  render() {
    const {spacing, classList, station, maxTemperature, minTemperature, rainfall, minorHeader} = this.props;

    const noSpacing = 'mdl-grid--no-spacing';
    const className = spacing ? classNames('mdl-grid', 'section-list', classList)
      : classNames('mdl-grid', 'section-list', noSpacing, classList);
    const rowName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone', 'dash-charts')

    const twoCol = classNames('mdl-cell', 'mdl-cell--6-col-desktop', 'mdl-cell--4-col-tablet', 'mdl-cell--4-col-phone')

    const message = station ? 'Auto-filled the form using data from ' : 'Select a location on the map'
    const label = station ? station.label : ''

    const srad = (c) => {
      this.srad = c
    }

    const maxTemp = (c) => {
      this.maxTemp = c
    }

    const minTemp = (c) => {
      this.minTemp = c
    }

    const rain = (c) => {
      this.rain = c
    }

    const title = 'YIELD CALCULATOR'

    return (
      <div className={className}>
        <div className={rowName}>
          {minorHeader}
          <div className="mdl-grid">
            <div className={twoCol}>
              <div className="yc-message">{message}<span className="yc-selected-location">{label}</span></div>
              <div className="mdl-cell mdl-cell--12-col yc-input-row">
                <div className="yc-input yc-input-srad">
                  <input
                    type="number"
                    className="yc-input__number"
                    id="solar-radiation"
                    placeholder="Solar Radation"
                    ref={srad}
                    />
                </div>
              </div>

              <div className="mdl-cell mdl-cell--12-col yc-input-row">
                <div className="yc-input yc-input-temp">
                  <input
                    type="number"
                    className="yc-input__number"
                    id="minimum-temperature"
                    placeholder="Minimum Temperature"
                    ref={minTemp}
                    value={minTemperature}
                    onChange={this.handleChangeMinTemp}
                    />
                </div>
              </div>

              <div className="mdl-cell mdl-cell--12-col yc-input-row">
                <div className="yc-input yc-input-temp">
                  <input
                    type="number"
                    className="yc-input__number"
                    id="maximum-temperature"
                    placeholder="Maximum Temperature"
                    ref={maxTemp}
                    value={maxTemperature}
                    onChange={this.handleChangeMaxTemperature}
                    />
                </div>
              </div>

              <div className="mdl-cell mdl-cell--12-col yc-input-row">
                <div className="yc-input yc-input-rain">
                  <input
                    type="number"
                    className="yc-input__number yc-input__number-rain"
                    id="precipitation"
                    placeholder="Precipitation"
                    ref={rain}
                    value={rainfall}
                    onChange={this.handleChangeRainfall}
                    />
                </div>
              </div>

              <div className="mdl-cell mdl-cell--12-col yc-input-row">
                <button id="calculate-yield-button" className="mdl-button mdl-js-button mdl-button--raised" onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>
            </div>

            {this.renderDescription()}

          </div>
        </div>
      </div>
    );
  }
}

export default YieldCalculator;