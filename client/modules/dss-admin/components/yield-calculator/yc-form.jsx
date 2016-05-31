import React from 'react'
import classNames from 'classnames'

class YCForm extends React.Component {
  constructor() {
    super()
    this.handleChangeCrop = this.handleChangeCrop.bind(this)
    this.handleChangeVariety = this.handleChangeVariety.bind(this)
    this.handleChangeYear = this.handleChangeYear.bind(this)
    this.handleChangeLabel = this.handleChangeLabel.bind(this)
    this.handleChangeCoords0 = this.handleChangeCoords0.bind(this)
    this.handleChangeCoords1 = this.handleChangeCoords1.bind(this)
    this.handleChangeExpression = this.handleChangeExpression.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
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

  handleChangeCrop(e) {

  }

  handleChangeVariety(e) {

  }

  handleChangeYear(e) {

  }

  handleChangeLabel(e) {
    this.setState({label: e.target.value})
  }

  handleChangeCoords0(e) {
    this.setState({coords0: e.target.value})
  }

  handleChangeCoords1(e) {
    this.setState({coords1: e.target.value})
  }

  handleChangeExpression(e) {

  }

  handleSave() {
    const {callback, _id} = this.props

    // let db_id = _id ? _id : ''
    console.log(_id)

    callback(_id, this.crop_ref.value, this.variety_ref.value, this.year_ref.value, this.label_ref.value, this.coords0_ref.value, this.coords1_ref.value, this.exp_ref.value)
    //Then bring up a toast
  }

  handleDelete() {
    const {deleteItem, _id} = this.props

    deleteItem(_id)
  }


  render() {
    const rowClassName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone')

    const row = classNames('mdl-cell', 'mdl-cell--12-col')
    const labelRow = classNames('mdl-cell', 'mdl-cell--12-col', 'form-label-row')
    const inputRow = classNames('mdl-cell', 'mdl-cell--12-col', 'form-input-row')
    const actionsRow = classNames('mdl-cell', 'mdl-cell--12-col', 'form-actions-row')


    const {header, _id, crop, variety, yearClassification, label, coords0, coords1, expression} = this.props

    const crop_ref = (c) => {
      this.crop_ref = c
    }

    const variety_ref = (c) => {
      this.variety_ref = c
    }

    const year_ref = (c) => {
      this.year_ref = c
    }

    const label_ref = (c) => {
      this.label_ref = c
    }

    const coords0_ref = (c) => {
      this.coords0_ref = c
    }

    const coords1_ref = (c) => {
      this.coords1_ref = c
    }

    const exp_ref = (c) => {
      this.exp_ref = c
    }

    return (
      <div>
        {header}
        <div className="mdl-grid">
          <div className={rowClassName}>
            <div className="mdl-grid">

              <div className={labelRow}>
                Crop
              </div>

              <div className={inputRow}>
                <input
                  type="text"
                  defaultValue={crop}
                  ref={crop_ref}
                  onChange={this.handleChangeCrop}
                />
              </div>

              <div className={labelRow}>
                Variety
              </div>

              <div className={inputRow}>
                <input
                  type="text"
                  defaultValue={variety}
                  ref={variety_ref}
                  onChange={this.handleChangeVariety}
                />
              </div>

              <div className={labelRow}>
                Year Classification
              </div>

              <div className={inputRow}>
                <input
                  type="text"
                  defaultValue={yearClassification}
                  ref={year_ref}
                  onChange={this.handleChangeYear}
                />
              </div>

              <div className={labelRow}>
                Label
              </div>

              <div className={inputRow}>
                <input
                  type="text"
                  defaultValue={label}
                  ref={label_ref}
                  onChange={this.handleChangeLabel} />
              </div>

              <div className={labelRow}>
                Coordinates
              </div>

              <div className={inputRow}>
                <input
                  className="coords"
                  type="number"
                  defaultValue={coords0}
                  ref={coords0_ref}
                  onChange={this.handleChangeCoords0} />

                <input
                  className="coords"
                  type="number"
                  defaultValue={coords1}
                  ref={coords1_ref}
                  onChange={this.handleChangeCoords1} />
              </div>

              <div className={labelRow}>
                Expression
                <br />Variables: [plantingDate, solarRadiation, maxTemperature, minTemperature]
              </div>

              <div className={inputRow}>
                <textarea
                  defaultValue={expression}
                  ref={exp_ref}
                  onChange={this.handleChangeExpression}>
                </textarea>
              </div>

              <div className={actionsRow}>
                <button onClick={this.handleSave} type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
                  Save
                </button>

                <button onClick={this.handleDelete} type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
                  Delete
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default YCForm;