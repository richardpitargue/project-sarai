import React from 'react'

class DSSAdminModules extends React.Component {
  constructor() {
    super()
    this.renderModulesList = this.renderModulesList.bind(this)
    this.renderModules = this.renderModules.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const {toast} = this.props

    if (toast) {
      (function() {
        'use strict';
        const snackbarContainer = document.querySelector('#demo-toast-example');

        const data = {
          message: toast,
          timeout: 3500
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
      }())
    }


  }

  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  handleEdit(e) {
    const {setModuleToEdit, modules} = this.props
    const id = e.target.id
    const index = id.substring(5)

    setModuleToEdit(modules[index]._id)
  }

  handleDelete(e) {
    const {deleteModule, modules} = this.props
    const id = e.target.id
    const index = id.substring(7)
    deleteModule(modules[index]._id)
  }

  handleAdd() {
    const {setFormModeAdd} = this.props
    setFormModeAdd()
  }

  renderModules() {
    return this.props.modules.map((module, key) => {
      return (
        <tr key={key}>
          <td className="mdl-data-table__cell--non-numeric">{module.title}</td>
          <td className="mdl-data-table__cell--non-numeric">{module.type}</td>
          <td>


            <a href="#" onClick={this.handleEdit}>
              <i id={`edit-${key}`} className="material-icons">mode_edit</i>
            </a>&nbsp;
            <a href="#" onClick={this.handleDelete}>
              <i id={`delete-${key}`} className="material-icons">delete</i>
            </a>

          </td>
        </tr>
      )
    })
  }

  renderModulesList() {

    return (
      <table id="modules-list" className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Title</th>
            <th className="mdl-data-table__cell--non-numeric">Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderModules()}
        </tbody>
      </table>
    )

  }

  render() {
    return (
      <div className="mdl-grid">

        <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--1-offset-desktop mdl-cell--6-col-tablet mdl-cell--1-offset-tablet mdl-cell--4-col-phone add-new-module-row">
          <button onClick={this.handleAdd} type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            <i className="material-icons">add</i>&nbsp;Add Module
          </button>
        </div>

        <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--1-offset-desktop mdl-cell--6-col-tablet mdl-cell--1-offset-tablet mdl-cell--4-col-phone">

          {this.renderModulesList()}

        </div>

        <div id="demo-toast-example" className="mdl-js-snackbar mdl-snackbar">
          <div className="mdl-snackbar__text"></div>
          <button className="mdl-snackbar__action" type="button"></button>
        </div>
      </div>
    )
  }
}

export default DSSAdminModules;