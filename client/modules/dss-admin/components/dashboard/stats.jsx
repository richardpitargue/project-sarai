import React from 'react';
import classNames from 'classnames';

class Stats extends React.Component {
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

  renderLists() {

  }

  renderLists() {
     const listRow = classNames('mdl-cell', 'mdl-cell--6-col-desktop', 'mdl-cell--4-col-tablet', 'mdl-cell--4-col-phone')

    return this.props.lists.map((list, key) => {
      return (
        <div className={listRow} key={key}>
          {list}
        </div>
      )
    })
  }

  render() {
    const {spacing, classList} = this.props;

    const noSpacing = 'mdl-grid--no-spacing';
    const className = spacing ? classNames('mdl-grid', 'section-list', classList)
      : classNames('mdl-grid', 'section-list', noSpacing, classList);
    const rowName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone', 'dash-charts')

    return (
      <div className={className}>
        <div className={rowName}>
          <div className="mdl-grid mdl-grid--no-spacing">
            {this.renderLists()}
          </div>
        </div>
      </div>
    );
  }
}

Stats.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  sections: React.PropTypes.arrayOf(React.PropTypes.element),
  spacing: React.PropTypes.bool
};

Stats.defaultProps = {
  classList: [],
  sections: [],
  spacing: true
};

export default Stats;
