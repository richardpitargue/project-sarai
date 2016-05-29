import React from 'react';

class MinRainAdvisory extends React.Component {
  constructor() {
    super()
    this.parseMessage = this.parseMessage.bind(this)
    this.completeMessage = this.completeMessage.bind(this)
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

  completeMessage(message) {
    const {data, dateOfSufficientRain} = this.props

    const date = new Date(dateOfSufficientRain)
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July']


    let finishedMessage = message.replace("{minimumRainfall}", data.minimumRainfall)
    finishedMessage = finishedMessage.replace("{dateOfSufficientRain}", `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`)

    return finishedMessage
  }

  parseMessage() {
    const {data, dateOfSufficientRain} = this.props

    const dosr = new Date(dateOfSufficientRain)
    const dateToday = new Date()

    for (let message of data.messages) {

      switch(message.condition) {
        case "MET":
          if (dateOfSufficientRain != -1 && dosr < dateToday) {
            return this.completeMessage(message.message)
          }
          break
        case "MET_FORECAST":
          if (dateOfSufficientRain != -1 && dosr > dateToday) {
            return this.completeMessage(message.message)
          }
          break
        case "NOT_MET":
          if (dateOfSufficientRain == -1) {
            return this.completeMessage(message.message)
          }
          break
      }

    }
    return 'nothing'

  }

  render() {
    const {title} = this.props

    return(
      <div>
        <h5 className="mra-title">{title}</h5><hr/>
        <div className="mra-message">
          {this.parseMessage()}
        </div>
      </div>
    )
  }
}

export default MinRainAdvisory;