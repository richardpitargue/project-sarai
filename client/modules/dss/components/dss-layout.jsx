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
    const {map, chart, customModules, spacing, classList} = this.props

    const noSpacing = 'mdl-grid--no-spacing';
    const className = spacing ? classNames('mdl-grid', classList)
      : classNames('mdl-grid', noSpacing, classList);

    return(
      <div className="mdl-cell mdl-cell--1-offset-desktop mdl-cell--10-col-desktop mdl-cell--1-offset-tablet mdl-cell--4-col-tablet mdl-cell--4-phone">
        <div className={className}>
          {customModules}
        </div>
      </div>
    )
  }
}

export default DSSLayout;