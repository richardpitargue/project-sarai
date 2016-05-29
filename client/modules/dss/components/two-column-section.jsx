import React from 'react';
import classNames from 'classnames';

class TwoColumnSection extends React.Component {
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
  renderSections() {
    return this.props.sections.map((section, key) => {
      return (
        <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone module-cell"
          key={key}
        >
          {section}
        </div>
      );
    });
  }
  render() {
    const {spacing, classList} = this.props;

    const noSpacing = 'mdl-grid--no-spacing';
    const gridClass = spacing ? classNames('mdl-grid', classList) : classNames('mdl-grid', noSpacing, classList);

    return (
      <div className={gridClass}>
        {this.renderSections()}
      </div>
    );
  }
}

TwoColumnSection.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  sections: React.PropTypes.arrayOf(React.PropTypes.element),
  spacing: React.PropTypes.bool
};

TwoColumnSection.defaultProps = {
  classList: [],
  sections: [],
  spacing: true
};

export default TwoColumnSection;
