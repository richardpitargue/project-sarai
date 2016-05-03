import React from 'react';
import classNames from 'classnames';

class DSSLayout extends React.Component {
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
    const {map, chart} = this.props

    return(
      <div className="mdl-cell mdl-cell--1-offset-desktop mdl-cell--10-col-desktop mdl-cell--1-offset-tablet mdl-cell--6-col-tablet mdl-cell--4-phone">
        <div className="mdl-grid">
          {map}

          <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
            {chart}
          </div>
        </div>
      </div>
    )
  }
}

export default DSSLayout;