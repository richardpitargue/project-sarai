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
        Something
      </div>
    )
  }
}

export default DSSAdminWeatherStations;