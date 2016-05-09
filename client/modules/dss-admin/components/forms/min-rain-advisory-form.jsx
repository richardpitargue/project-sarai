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
    return (
      <div>
        <h3>Min Rain Advisory Form </h3>
      </div>
    )
  }

}

export default MinRainAdvisoryForm