import React from 'react';

class MinRainAdvisory extends React.Component {
  constructor() {
    super()
    this.parseMessage = this.parseMessage.bind(this)
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

  parseMessage() {
    const {data, minimumRainfall, dateOfSufficientRain} = this.props

    const message = data.message.replace("{minimumRainfall}", minimumRainfall)

    return message
  }

  render() {
    const {minimumRainfall, dateOfSufficientRain} = this.props

    this.parseMessage()

    if (dateOfSufficientRain == -1) {
      return (
        <div>
          <h3>Minimum required rainfall of {minimumRainfall} mm was not reached.</h3>
        </div>
      )
    } else if (dateOfSufficientRain > 0) {
      const date = new Date(dateOfSufficientRain)
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

      return (
        <div>
          <h3>Minimum required rainfall of {minimumRainfall} mm will be reached on {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</h3>
        </div>
      )
    } else {
      return (
        <div>
          <h3></h3>
        </div>
      )
    }
  }
}

export default MinRainAdvisory;