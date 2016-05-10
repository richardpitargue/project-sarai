import React from 'react'

class DSSAdminModules extends React.Component {
  constructor() {
    super()
    this.renderModulesList = this.renderModulesList.bind(this)
    this.renderModules = this.renderModules.bind(this)
    this.handleANM = this.handleANM.bind(this)
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



  renderModules() {
    return this.props.modules.map((module, key) => {

      return (
        <tr key={key}>
          <td className="mdl-data-table__cell--non-numeric">{module.type}</td>
          <td>
            <a href="#">
              <i className="material-icons">mode_edit</i>
            </a>&nbsp;
            <a href="#">
              <i className="material-icons">delete</i>
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

  handleANM() {

    FlowRouter.go('/dss/admin/modules/add')
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--10-col mdl-cell--1-offset">
          <div>
            <h4>Hi! Welcome to the DSS Admin page for modules</h4>

            {this.renderModulesList()}
          </div>
            <form action="/dss/admin/modules/add">
              <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
                Add New Module
              </button>
            </form>

        </div>
      </div>
    )
  }
}

export default DSSAdminModules;