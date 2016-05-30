import React from 'react'
import classNames from 'classnames'

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

    const row = classNames('mdl-cell', 'mdl-cell--12-col')
    const labelRow = classNames('mdl-cell', 'mdl-cell--12-col', 'form-label-row')
    const inputRow = classNames('mdl-cell', 'mdl-cell--12-col', 'form-input-row')

    const formType = (c) => {
      this.formType = c
    }

    console.log(`selectDisabled: ${selectDisabled}`)
    if (selectDisabled) {
      return (
        <div className={row}>
          <div className={labelRow}>
            Module Type
          </div>
          <div className={inputRow}>
            <select ref={formType} id="select-module-type" onChange={this.handleFormTypeChange} value={moduleType} disabled>
              <option value="MIN_RAIN_ADVISORY">Minimum Rain Advisory</option>
              <option value="YIELD_CALCULATOR">Yield Calculator</option>
              <option value="SOIL_MOISTURE">Soil Moisture Advisory</option>
            </select>
          </div>
        </div>
      )
    }

    else {
      return (
        <div className={row}>
          <div className={labelRow}>
            Module Type
          </div>
          <div className={inputRow}>
            <select ref={formType} id="select-module-type" onChange={this.handleFormTypeChange}>
              <option value="MIN_RAIN_ADVISORY">Minimum Rain Advisory</option>
              <option value="YIELD_CALCULATOR">Yield Calculator</option>
              <option value="SOIL_MOISTURE">Soil Moisture Advisory</option>
            </select>
          </div>
        </div>

      )
    }
  }

  render() {
    const {header, moduleForm, selectDisabled} = this.props
    const sd = (selectDisabled) ? 'disabled' : ''
    const rowClassName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone')
    const row = classNames('mdl-cell', 'mdl-cell--12-col')
    const labelRow = classNames('mdl-cell', 'mdl-cell--12-col', 'form-label-row')
    const inputRow = classNames('mdl-cell', 'mdl-cell--12-col', 'form-input-row')


    return (
      <div>
        {header}
        <div className="mdl-grid">
          <div className={rowClassName}>
            <div className="mdl-grid">

              {this.renderSelect()}

              <br/>
              {moduleForm}

            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ModulesForm