import React from 'react';

class MinorHeader extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const {id} = this.props
    const helpIconID = `#${id}-help-icon`
    const helpDialogID = `#${id}-help-dialog`

    const helpDialog = document.querySelector(helpDialogID);
    const showDialogButton = document.querySelector(helpIconID);
    showDialogButton.addEventListener('click', function() {
      helpDialog.showModal();
    });

    if (! helpDialog.showModal) {
      dialogPolyfill.registerDialog(helpDialog);
    }
    helpDialog.querySelector('.close').addEventListener('click', function() {
      helpDialog.close();
    });

  }

  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  render() {
    const {title, helpText, id} = this.props

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

    const helpIconID = `${id}-help-icon`
    const helpDialogID = `${id}-help-dialog`

    return(
      <div className="mdl-cell mdl-cell--12-col">
        <div style={titleStyle}>
          {title}
        </div>

        <div style={helpDivStyle}>
          <a href="#"><i style={helpIconStyle} id={helpIconID} className="material-icons">help</i></a>
        </div>
        <div style={clear}></div>

        <dialog id={helpDialogID} className="mdl-dialog">
          <div className="mdl-dialog__content">
            {helpText}
          </div>
          <div className="mdl-dialog__actions">
            <button type="button" className="mdl-button close">OK</button>
          </div>
        </dialog>
      </div>
    )
  }
}

export default MinorHeader;