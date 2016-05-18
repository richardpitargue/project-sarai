import React from 'react';
import classNames from 'classnames';

class AWSSquares extends React.Component {
  constructor() {
    super()
    this.selectAWS = this.selectAWS.bind(this)
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

  selectAWS() {

  }

  renderSquares() {
    const squareClass = classNames('aws-square', 'mdl-cell', 'mdl-cell--1-col-desktop', 'mdl-cell--1-col-tablet', 'mdl-cell--1-col-phone')

    return this.props.weatherStations.map(( station, key) => {
      return (

        <div className={squareClass} key={key} onClick={this.selectAWS}>
          {station.id}
        </div>
      )
    })

  }

  render() {
    // const className = classNames('mdl-layout-title', 'app-title', classList);

    return (
      <div id="squares-grid" className="mdl-grid mdl-grid--no-spacing">
        {this.renderSquares()}
      </div>
    );
  }
}


export default AWSSquares;
