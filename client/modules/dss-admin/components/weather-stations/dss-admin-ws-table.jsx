import React from 'react'
import classNames from 'classnames'

class DSSAdminWeatherStations extends React.Component {
  constructor() {
    super()
    this.handleAdd = this.handleAdd.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.renderWSList = this.renderWSList.bind(this)
    this.renderStations = this.renderStations.bind(this)
    this.updateWeatherData = this.updateWeatherData.bind(this)
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

  updateWeatherData() {
    const {weatherStations, getYesterdayWeather} = this.props

    getYesterdayWeather(weatherStations)
  }

  handleAdd() {
    const {goToAddPage} = this.props

    goToAddPage()
  }

  handleEdit(e) {
    const {goToEditPage, weatherStations} = this.props

    const id = e.target.id
    const index = id.substring(5)

    console.log(`Edit by table. ID: ${weatherStations[index].id}`)
    goToEditPage(weatherStations[index].id)
  }

  handleDelete(e) {
    const {deleteWS, weatherStations} = this.props

    const id = e.target.id
    const index = id.substring(7)

    deleteWS(weatherStations[index]._id)
  }

  renderStations() {
    return this.props.weatherStations.map((station, key) => {
      return (
        <tr key={key}>
          <td className="mdl-data-table__cell--non-numeric">{station.label}</td>
          <td className="mdl-data-table__cell--non-numeric">{station.id}</td>
          <td className="mdl-data-table__cell--non-numeric">
            {`[${station.coords[0]}, ${station.coords[1]}]`}
          </td>
          <td>
            <a href="#" onClick={this.handleEdit}>
              <i id={`edit-${key}`} className="material-icons">mode_edit</i>
            </a>&nbsp;
            <a href="#" onClick={this.handleDelete}>
              <i id={`delete-${key}`} className="material-icons">delete</i>
            </a>
            <a href="#">
              <i id={`view-data-${key}`} className="material-icons">view_module</i>
            </a>
          </td>
        </tr>
      )
    })

  }

  renderWSList() {
    return (
      <table id="modules-list" className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Label</th>
            <th className="mdl-data-table__cell--non-numeric">Station ID</th>
            <th className="mdl-data-table__cell--non-numeric">Coordinates</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderStations()}
        </tbody>
      </table>
    )
  }

  render() {

    const rowClassName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone')

    return (
      <div className="mdl-grid">
        <div className={rowClassName}>
          <button onClick={this.handleAdd} type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            <i className="material-icons">add</i>&nbsp;Add Weather Station
          </button>
        </div>
        <div className={rowClassName}>
          {this.renderWSList()}
        </div>

        <div className={rowClassName}>
          <hr />
        </div>

        <div className={rowClassName}>
          Misc Settings
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.updateWeatherData}>
            Update Weather Data
          </button>
        </div>
      </div>
    )
  }
}

export default DSSAdminWeatherStations;