import React from 'react';
import classNames from 'classnames';

class DSSAdmin extends React.Component {
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
    const {appBar, appDrawer, classList, content, footer} = this.props;
    const className = classNames('landing', classList);
    return (
      <div className={className}>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">
          {appBar}
          {appDrawer}
          <main className="mdl-layout__content">
            {content}
            {footer}
          </main>
        </div>
      </div>
    );
  }
}

DSSAdmin.propTypes = {
  appBar: React.PropTypes.element,
  appDrawer: React.PropTypes.element,
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  content: React.PropTypes.element,
  footer: React.PropTypes.element
};

DSSAdmin.defaultProps = {
  appBar: null,
  appDrawer: null,
  classList: [],
  content: null,
  footer: null
};

export default DSSAdmin;
