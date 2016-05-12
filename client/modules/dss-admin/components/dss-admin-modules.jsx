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
    console.log(id)
    console.log(index)
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
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
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
        <div className="mdl-cell mdl-cell--10-col mdl-cell--1-offset">
          <div>
            <h4>Hi! Welcome to the DSS Admin page for modules</h4>

            {this.renderModulesList()}
          </div>

          <button onClick={this.handleAdd} type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Add New Module
          </button>

        </div>
      </div>
    )
  }
}

export default DSSAdminModules;