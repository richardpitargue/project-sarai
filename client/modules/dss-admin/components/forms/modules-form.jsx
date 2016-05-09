import React from 'react'

class ModulesForm extends React.Component {
  constructor() {
    super()
    this.changedFormType = this.changedFormType.bind(this)
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

  renderFormType() {
    switch(Session.get('FORM_TYPE')) {
      case 'MIN_RAIN_ADVISORY':
        return (
          <div>mra goes here</div>
        )
      case 'SOIL_MOISTURE':
        return (
          <div>sm goes here</div>
        )
      case 'YIELD_CALCULATOR':
        return (
          <div>ya goes here</div>
        )
    }
  }

  changedFormType(event) {
    console.log(event.target.value)
    Session.set('something', 'asdf')
    Session.set('FORM_TYPE', event.target.value)
  }

  render() {
    return (
      <div>
          TYPE
          <select onChange={this.changedFormType}>
            <option value="MIN_RAIN_ADVISORY">Minimum Rain Advisory</option>
            <option value="YIELD_CALCULATOR">Yield Calculator</option>
            <option value="SOIL_MOISTURE">Soil Moisture Advisory</option>
          </select>

          {this.renderFormType()}
      </div>
    )
  }

}

export default ModulesForm