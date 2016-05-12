import React from 'react'

class DSSTextArea extends React.Component {
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
    return (
      <div>
        text area
      </div>
    )
  }

}

export default DSSTextArea