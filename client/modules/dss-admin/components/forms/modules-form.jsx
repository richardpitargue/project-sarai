import React from 'react'

class ModulesForm extends React.Component {
  constructor() {
    super()
    this.handleFormTypeChange = this.handleFormTypeChange.bind(this)
    this.renderSelect = this.renderSelect.bind(this)
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
    const {setFormType} = this.props

    setFormType(this.formType.value)
  }

  renderSelect() {
    const {selectDisabled, moduleType} = this.props
    const formType = (c) => {
      this.formType = c
    }

    console.log(`selectDisabled: ${selectDisabled}`)
    if (selectDisabled) {
      return (
        <select ref={formType} id="select-module-type" onChange={this.handleFormTypeChange} value={moduleType} disabled>
          <option value="MIN_RAIN_ADVISORY">Minimum Rain Advisory</option>
          <option value="YIELD_CALCULATOR">Yield Calculator</option>
          <option value="SOIL_MOISTURE">Soil Moisture Advisory</option>
        </select>
      )
    }

    else {
      return (
        <select ref={formType} id="select-module-type" onChange={this.handleFormTypeChange}>
          <option value="MIN_RAIN_ADVISORY">Minimum Rain Advisory</option>
          <option value="YIELD_CALCULATOR">Yield Calculator</option>
          <option value="SOIL_MOISTURE">Soil Moisture Advisory</option>
         </select>
      )
    }
  }

  render() {
    const {moduleForm, selectDisabled} = this.props
    const sd = (selectDisabled) ? 'disabled' : ''



    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--1-offset">

          {this.renderSelect()}

          <br/>
          {moduleForm}


        </div>
      </div>
    )
  }

}

export default ModulesForm