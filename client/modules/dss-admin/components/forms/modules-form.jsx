import React from 'react'

class ModulesForm extends React.Component {
  constructor() {
    super()
    this.handleFormTypeChange = this.handleFormTypeChange.bind(this)
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
    const {insertModule} = this.props

    insertModule('MIN_RAIN_ADVISORY', this.minRain.value, this.metMessage.value, this.forecastMessage.value, this.notMetMessage.value)
  }

  handleFormTypeChange() {
    console.log('changing forms')
    const {setFormType} = this.props

    setFormType(this.formType.value)
  }

  render() {
    const {moduleForm} = this.props

    const formType = (c) => {
      this.formType = c
    }

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--1-offset">

          <select ref={formType} id="select-module-type" onChange={this.handleFormTypeChange}>
            <option value="MIN_RAIN_ADVISORY">Minimum Rain Advisory</option>
            <option value="YIELD_CALCULATOR">Yield Calculator</option>
            <option value="SOIL_MOISTURE">Soil Moisture Advisory</option>
          </select>

          <br/>
          Real stuff goes here:
          <br/>
          {moduleForm}


        </div>
      </div>
    )
  }

}

export default ModulesForm