import React from 'react'
import classNames from 'classnames'

class YieldFormulasTable extends React.Component {
  constructor() {
    super()
    this.handleAdd = this.handleAdd.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.renderRows = this.renderRows.bind(this)
    this.renderTable = this.renderTable.bind(this)
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


  handleAdd() {
    const {goToAddPage} = this.props

    goToAddPage()
  }

  handleEdit(e) {
    const {goToEditPage, formulas} = this.props

    const id = e.target.id
    const index = id.substring(5)

    goToEditPage(formulas[index]._id)
  }

  handleDelete(e) {
    const {deleteItem, formulas} = this.props

    const id = e.target.id
    const index = id.substring(7)

    deleteItem(formulas[index]._id)
  }

  renderRows() {

    return this.props.formulas.map((formula, key) => {
      return (
        <tr key={key}>
          <td className="mdl-data-table__cell--non-numeric">{formula.crop}</td>
          <td className="mdl-data-table__cell--non-numeric">{formula.variety}</td>
          <td className="mdl-data-table__cell--non-numeric">{formula.yearClassification}</td>
          <td className="mdl-data-table__cell--non-numeric">{formula.location.label}</td>
          <td className="mdl-data-table__cell--non-numeric">
            {`[${formula.location.coords[0]}, ${formula.location.coords[1]}]`}
          </td>
          <td className="mdl-data-table__cell--non-numeric">{`${formula.expression.substring(0, 20)}...`}</td>
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

  renderTable() {
    return (
      <table id="modules-list" className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Crop</th>
            <th className="mdl-data-table__cell--non-numeric">Variety</th>
            <th className="mdl-data-table__cell--non-numeric">Year Classification</th>
            <th className="mdl-data-table__cell--non-numeric">Location</th>
            <th className="mdl-data-table__cell--non-numeric">Coords</th>
            <th className="mdl-data-table__cell--non-numeric">Expression</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  render() {
    const rowClassName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone')
    const itemCount = this.props.formulas.length

    return (
      <div className="mdl-grid">
        <div className={rowClassName}>
          <button onClick={this.handleAdd} type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            <i className="material-icons">add</i>&nbsp;Add Yield Formula
          </button>
        </div>
        <div className={rowClassName}>
          <h5>{itemCount} Formulas</h5>
          {this.renderTable()}
        </div>

        <div className={rowClassName}>
          <hr />
        </div>


      </div>
    )
  }
}

export default YieldFormulasTable;