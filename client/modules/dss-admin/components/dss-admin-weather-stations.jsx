import React from 'react'

class DSSAdminWeatherStations extends React.Component {
  constructor() {
    super()
    this.updateWeatherData = this.updateWeatherData.bind(this)
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

  updateWeatherData() {
    const {weatherStations, getYesterdayWeather} = this.props

    getYesterdayWeather(weatherStations)
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--10-col mdl-cell--1-offset">
          <h4>Hi! Welcome to the DSS Admin page for weather stations</h4>

          <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.updateWeatherData}>
            Update Weather Data
          </button>
        </div>
      </div>
    )
  }
}

export default DSSAdminWeatherStations;