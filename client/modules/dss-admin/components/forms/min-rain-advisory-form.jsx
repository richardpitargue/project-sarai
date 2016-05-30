import React from 'react'
import classNames from 'classnames'

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
    const rowClassName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone')
    const row = classNames('mdl-cell', 'mdl-cell--12-col')
    const labelRow = classNames('mdl-cell', 'mdl-cell--12-col', 'form-label-row')
    const inputRow = classNames('mdl-cell', 'mdl-cell--12-col', 'form-input-row')
    const actionsRow = classNames('mdl-cell', 'mdl-cell--12-col', 'form-actions-row')

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
      <div className={rowClassName}>
        <div className="mdl-grid">

          <div className={labelRow}>
            Title
          </div>

          <div className={inputRow}>
            <input
              type="text"
              id="min-rain-title"
              ref={minRainTitle}
              defaultValue={title}
              onChange={this.handleChangeTitle}
            />
          </div>

          <div className={labelRow}>
            Minimum Rainfall
          </div>

          <div className={inputRow}>
            <input
              type="number"
              id="min-rain"
              ref={minRain}
              defaultValue={minimumRainfall}
              onChange={this.handleChangeMinRain}
            />
          </div>

          <div className={labelRow}>
            Message Condition: Threshold was met in the last 30 days
          </div>

          <div className={inputRow}>
            <textarea
                id="met-message"
                ref={metMessage}
                defaultValue={m1}
                onChange={this.handleChangeM1}
                ></textarea>
          </div>


          <div className={labelRow}>
            Message Condition: Threshold will be met in the next 10 days
          </div>

          <div className={inputRow}>
            <textarea
                id="forecast-message"
                ref={forecastMessage}
                defaultValue={m2}
                onChange={this.handleChangeM2}
                ></textarea>
          </div>


          <div className={labelRow}>
            Message Condition: Threshold will not be met
          </div>

          <div className={inputRow}>
            <textarea
                id="not-met-message"
                ref={notMetMessage}
                defaultValue={m3}
                onChange={this.handleChangeM3}
                ></textarea>
          </div>

          <div className={actionsRow}>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    )
  }

}

export default MinRainAdvisoryForm