import React from 'react'
import classNames from 'classnames'

class CurrentWeather extends React.Component {
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
    const {classList, observationTime, tempC, iconURL, feelsLikeC, weather, relativeHumidity, pressureMB, windDir, windGustKPH} = this.props
    const gridClass = classNames('mdl-grid', 'mdl-grid--no-spacing', classList)

    return (
      <div className={gridClass}>
        <div id="cw-last-updated" className="mdl-cell mdl-cell--12-col">
          {observationTime}
        </div>

        <div id="cw-temp" className="mdl-cell mdl-cell--6-col">
          {tempC} °C
        </div>

        <div id="cw-weather-icon" className="mdl-cell mdl-cell--6-col">
          <img src={iconURL} />
        </div>

        <div id="cw-heat-index" className="mdl-cell mdl-cell--6-col">
          Feels like <span className="value">{feelsLikeC} °C</span>
          <hr />
        </div>

        <div id="cw-weather-description" className="mdl-cell mdl-cell--6-col">
          {weather}
          <hr />
        </div>

        <div id="cw-humidity" className="mdl-cell mdl-cell--6-col">
          <span className="value">{relativeHumidity}</span> Humidity
        </div>

        <div id="cw-pressure" className="mdl-cell mdl-cell--6-col">
          <span className="value">{pressureMB}</span> mb of atmospheric pressure
        </div>

        <div id="cw-wind-dir" className="mdl-cell mdl-cell--6-col">
          Winds from <span className="value">{windDir}</span>
        </div>

        <div id="cw-wind-spd" className="mdl-cell mdl-cell--6-col">
          Gusts of <span className="value">{windGustKPH}</span> km/h
        </div>

      </div>
    )
  }
}

export default CurrentWeather;