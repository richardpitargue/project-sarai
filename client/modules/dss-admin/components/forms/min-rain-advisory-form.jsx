import React from 'react'

class MinRainAdvisoryForm extends React.Component {
  constructor() {
    super()
    this.handleSave = this.handleSave.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeMinRain = this.handleChangeMinRain.bind(this)
    this.handleChangeM1 = this.handleChangeM1.bind(this)
    this.handleChangeM2 = this.handleChangeM2.bind(this)
    this.handleChangeM3 = this.handleChangeM3.bind(this)
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

  handleSave() {
    const {callback, id} = this.props

    callback(id, 'MIN_RAIN_ADVISORY', this.minRainTitle.value, this.minRain.value, this.metMessage.value, this.forecastMessage.value, this.notMetMessage.value)
  }

  handleChangeTitle(e) {
    this.setState({minRainTitle: e.target.value})
  }

  handleChangeMinRain(e) {
    this.setState({minRain: e.target.value})
  }

  handleChangeM1(e) {
    this.setState({metMessage: e.target.value})
  }

  handleChangeM2(e) {
    this.setState({forecastMessage: e.target.value})
  }

  handleChangeM3(e) {
    this.setState({notMetMessage: e.target.value})
  }

  render() {
    let {title, minimumRainfall, m1, m2, m3} = this.props

    const minRainTitle = (c) => {
      this.minRainTitle = c
    }

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

          <input
            type="text"
            id="min-rain-title"
            ref={minRainTitle}
            defaultValue={title}
            onChange={this.handleChangeTitle}
          />
          <br />
          Minimum Rain:
          <input
            type="number"
            id="min-rain"
            ref={minRain}
            defaultValue={minimumRainfall}
            onChange={this.handleChangeMinRain}
          />
          <br />

          Advisories:
          <ul>
            <li>Condition: MET<br/>
              <textarea
                id="met-message"
                ref={metMessage}
                defaultValue={m1}
                onChange={this.handleChangeM1}
                ></textarea>
            </li>
            <li>Condition: MET_FORECAST<br/>
              <textarea
                id="forecast-message"
                ref={forecastMessage}
                defaultValue={m2}
                onChange={this.handleChangeM2}
                ></textarea>
            </li>
            <li>Condition: NOT_MET<br/>
              <textarea
                id="not-met-message"
                ref={notMetMessage}
                defaultValue={m3}
                onChange={this.handleChangeM3}
                ></textarea>
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