import React from 'react'

class DSSAdminHeader extends React.Component {
  constructor() {
    super()
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

  render(){
    const {title} = this.props

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--1-offset-desktop mdl-cell--6-col-tablet mdl-cell--1-offset-tablet mdl-cell--4-col-phone">
          <h3>{title}</h3>
        </div>
      </div>
    )
  }

}

export default DSSAdminHeader