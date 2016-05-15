import React from 'react'
import classNames from 'classnames'
import L from 'leaflet';

class WSForm extends React.Component {
  constructor() {
    super()
    this.handleChangeId = this.handleChangeId.bind(this)
    this.handleChangeLabel = this.handleChangeLabel.bind(this)
    this.handleChangeCoords0 = this.handleChangeCoords0.bind(this)
    this.handleChangeCoords1 = this.handleChangeCoords1.bind(this)
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

  handleChangeId(e) {
    this.setState({id: e.target.value})
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

  handleSave() {
    const {editWS, station} = this.props

    editWS(station._id, this.wsID.value, this.label.value, this.coords0.value, this.coords1.value)
    //Then bring up a toast
  }

  handleDelete() {
    const {deleteWS, station} = this.props

    deleteWS(station._id)
  }


  render() {
    const rowClassName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone')

    const labelCol = classNames('mdl-cell', 'mdl-cell--4-col', 'form-label')
    const inputCol = classNames('mdl-cell', 'mdl-cell--8-col')

    const {station} = this.props

    const wsID = (c) => {
      this.wsID = c
    }

    const label = (c) => {
      this.label = c
    }

    const coords0 = (c) => {
      this.coords0 = c
    }

    const coords1 = (c) => {
      this.coords1 = c
    }

    return (
      <div className="mdl-grid">
        <div className={rowClassName}>
          <div className="mdl-grid">
            <div className={labelCol}>
              Weather Station ID
            </div>

            <div className={inputCol}>
              <input
                type="text"
                defaultValue={station.id}
                ref={wsID}
                onChange={this.handleChangeId} />
            </div>

            <div className={labelCol}>
              Station Label
            </div>

            <div className={inputCol}>
              <textarea
                defaultValue={station.label}
                ref={label}
                onChange={this.handleChangeLabel}>
              </textarea>
            </div>

            <div className={labelCol}>
              Geographical Coordinates
            </div>

            <div className={inputCol}>
              <input
                type="number"
                defaultValue={station.coords[0]}
                ref={coords0}
                onChange={this.handleChangeCoords0} />

              <input
                type="number"
                defaultValue={station.coords[1]}
                ref={coords1}
                onChange={this.handleChangeCoords1} />
            </div>

            <div className={labelCol}>
              Geographical Coordinates
            </div>

            <div className={inputCol}>
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
    )
  }
}

export default WSForm;