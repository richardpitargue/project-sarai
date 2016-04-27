import React from 'react';

class AAARoot extends React.Component {
  constructor() {
    super()
    this.doSomething = this.doSomething.bind(this)
    this.pissOff = this.pissOff.bind(this)
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

  }

  doSomething() {
    console.log("doing something..")

    const {sample} = this.props

    sample()
  }

  pissOff() {
    console.log('piss off...')

    const {addSomething} = this.props

    addSomething()
  }

  render() {
    const {stationID} = this.props

    return (
      <div>
        <h4>Something goes here</h4>
        <h5>Station ID: {stationID}</h5>

        <button onClick={this.doSomething} >Button</button>
        <button onClick={this.pissOff} >Add</button>

      </div>
    )
  }

}

export default AAARoot;