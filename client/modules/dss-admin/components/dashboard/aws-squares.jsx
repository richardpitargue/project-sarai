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

  selectAWS(e) {
    const {setStationID} = this.props

    setStationID(e.target.id)
  }

  renderSquares() {
    // const squareClass = classNames('aws-square', 'mdl-cell', 'mdl-cell--1-col-desktop', 'mdl-cell--1-col-tablet', 'mdl-cell--1-col-phone')
    const common = ['mdl-cell', 'mdl-cell--1-col-desktop', 'mdl-cell--1-col-tablet', 'mdl-cell--1-col-phone']
    const {wsID} = this.props

    return this.props.weatherStations.map(( station, key) => {
      const finalClass = (station.id == wsID) ? classNames(common, 'aws-square-selected') : classNames(common, 'aws-square')

      return (
        <div className={finalClass} key={key} id={station.id} onClick={this.selectAWS}>
          {station.id}
        </div>
      )
    })

  }

  render() {
    // const className = classNames('mdl-layout-title', 'app-title', classList);
    const innerRow = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone', 'squares-row')

    return (
      <div id="squares-grid" className="mdl-grid mdl-grid--no-spacing">
        <div className={innerRow}>
          <div className="mdl-grid mdl-grid--no-spacing">
            {this.renderSquares()}
          </div>
        </div>
      </div>
    );
  }
}


export default AWSSquares;
