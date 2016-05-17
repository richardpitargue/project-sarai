import React from 'react';
import classNames from 'classnames';

class TopList extends React.Component {
  constructor() {
    super()
    this.renderListItems = this.renderListItems.bind(this)
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

  renderListItems() {

    return this.props.items.map((item, key) => {
      return (
        <tr key={key}>
          <td className="mdl-data-table__cell--non-numeric">{item.label}</td>
          <td className="mdl-data-table__cell--non-numeric">{item.id}</td>
          <td className="mdl-data-table__cell--non-numeric">{item.runningValue} mm</td>
        </tr>
      )
    })
  }

  render() {
    const {valueLabel, title} = this.props

    return (
      <div>
        <h5>{title}</h5>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Label</th>
              <th className="mdl-data-table__cell--non-numeric">ID</th>
              <th className="mdl-data-table__cell--non-numeric">{valueLabel}</th>
            </tr>
          </thead>
          <tbody>
            {this.renderListItems()}
          </tbody>
        </table>
      </div>
    );
  }
}

TopList.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  sections: React.PropTypes.arrayOf(React.PropTypes.element),
  spacing: React.PropTypes.bool
};

TopList.defaultProps = {
  classList: [],
  sections: [],
  spacing: true
};

export default TopList;
