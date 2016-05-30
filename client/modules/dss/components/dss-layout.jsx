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
    const {map, chart, customModules, spacing, classList, minorHeader} = this.props

    const noSpacing = 'mdl-grid--no-spacing';
    const className = spacing ? classNames('mdl-grid', 'section-list', classList)
      : classNames('mdl-grid', 'section-list', noSpacing, classList);
    const rowName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone', 'dash-charts')


    return(
      <div className={className}>
        <div className={rowName}>
          {minorHeader}
          <div className="mdl-grid">
            {customModules}
          </div>
          <hr />
        </div>
      </div>

    )
  }
}

export default DSSLayout;