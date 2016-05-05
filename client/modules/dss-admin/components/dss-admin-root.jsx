import React from 'react'

class DSSAdminRoot extends React.Component {
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

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--10-col mdl-cell--1-offset">
          <h4>Hi! Welcome to the DSS admin page. Here you can customize options.</h4>
        </div>
      </div>
    )
  }
}

export default DSSAdminRoot;