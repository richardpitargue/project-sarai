import React from 'react'

class MinRainAdvisoryForm extends React.Component {
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
    const minRain = (c) => {
      this.minRain = c
    }

    const metMessage = (c) => {
      this.metMessage = c
    }

    const forecastMessage = (c) => {
      this.forecastMessage = c
    }

    const notMetMessage = (c) => {
      this.notMetMessage = c
    }

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--1-offset">
          Minimum Rain:
          <input
            type="number"
            id="min-rain"
            ref={minRain}
          />
          <br />

          Advisories:
          <ul>
            <li>Condition: MET<br/>
              <textarea id="met-message" ref={metMessage}></textarea>
            </li>
            <li>Condition: MET_FORECAST<br/>
              <textarea id="forecast-message" ref={forecastMessage}></textarea>
            </li>
            <li>Condition: NOT_MET<br/>
              <textarea id="not-met-message" ref={notMetMessage}></textarea>
            </li>
          </ul>
          <br/>

          <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.handleSave}>
            Save
          </button>
        </div>
      </div>
    )
  }

}

export default MinRainAdvisoryForm