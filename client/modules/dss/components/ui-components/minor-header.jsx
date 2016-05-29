import React from 'react';

class MinorHeader extends React.Component {
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

  render() {
    const {title, helpText} = this.props

    const titleStyle = {
      float: 'left',
      fontWeight: 'bold',
      fontSize: '1.2em',
      color: '#878787'
    }

    const helpDivStyle = {
      float: 'right'
    }

    const helpIconStyle = {
      color: '#878787'
    }

    const clear = {
      clear: 'both'
    }

    return(
      <div className="mdl-cell mdl-cell--12-col">
        <div style={titleStyle}>
          {title}
        </div>

        <div style={helpDivStyle}>
          <a href="#"><i style={helpIconStyle} id="help-icon" className="material-icons">help</i></a>
        </div>
        <div style={clear}></div>
      </div>
    )
  }
}

export default MinorHeader;