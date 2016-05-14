import React from 'react'
import classNames from 'classnames'
import L from 'leaflet';

class DSSAdminWSMap extends React.Component {
  constructor() {
    super()
    this.renderWSData = this.renderWSData.bind(this)

    this.handleChangeId = this.handleChangeId.bind(this)
    this.handleChangeLabel = this.handleChangeLabel.bind(this)
    this.handleChangeCoords0 = this.handleChangeCoords0.bind(this)
    this.handleChangeCoords1 = this.handleChangeCoords1.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const {weatherStations} = this.props;
    Session.set('weatherStations', weatherStations)

    //Store all this data in db
    const northEast = L.latLng(21.924058, 115.342984);
    const southWest = L.latLng(4.566972, 128.614468);
    const bounds = L.latLngBounds(southWest, northEast);

    const map = L.map('admin-ws-map', {
      maxBounds: bounds,
      center: [14.154604, 121.247505],
      zoom: 8,
      minZoom: 7
    });

    const markerIcon = L.icon({
      iconUrl: '/images/weather-monitoring/map/marker.png',
      iconSize: [40, 40],
      iconAnchor: [20, 39],
      popupAnchor: [0, -40]
    });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      // maxZoom: 14,
      id: 'mcarandang.p67769a5',
      accessToken: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
    }).addTo(map);

    map.on('click', (e) => {
      this.coords0.value = e.latlng.lat
      this.coords1.value = e.latlng.lng
    })

    for (let station of Session.get('weatherStations')) {
      L.marker(
        [station.coords[0], station.coords[1]],
        {icon: markerIcon})
      .bindPopup(`<h5>${station.label}</h5>`)
      .on('click', () => {
        Session.set('ws', station)
      })
      .addTo(map);
    }
  }

  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  handleChangeId(e) {
    this.setState({id: e.target.value})
  }

  handleChangeLabel(e) {
    this.setState({label: e.target.value})
  }

  handleChangeCoords0(e) {
    this.setState({coords0: e.target.value})
  }

  handleChangeCoords1(e) {
    this.setState({coords1: e.target.value})
  }

  handleSave() {
    const {editWS} = this.props

    editWS(this.id.value, this.label.value, this.coords0.value, this.coords1.value)

    //Then bring up a toast
  }

  renderWSData() {
    const id = (c) => {
      this.id = c
    }

    const label = (c) => {
      this.label = c
    }

    const coords0 = (c) => {
      this.coords0 = c
    }

    const coords1 = (c) => {
      this.coords1 = c
    }

    if (Session.get('ws')) {
      const station = Session.get('ws')

      return (
        <div>

          <input
            type="text"
            defaultValue={station.id}
            ref={id}
            onChange={this.handleChangeId} />

          <textarea
            defaultValue={station.label}
            ref={label}
            onChange={this.handleChangeLabel}>
          </textarea>

          <input
            type="number"
            defaultValue={station.coords[0]}
            ref={coords0}
            onChange={this.handleChangeCoords0} />

          <input
            type="number"
            defaultValue={station.coords[1]}
            ref={coords1}
            onChange={this.handleChangeCoords1} />

          <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.handleSave}>
            Update
          </button>
        </div>
      )
    }

    else {
      return (
        <div className="default-instruction">
          Select a <br/> weather station <br/>on the map<br/> to edit it.
        </div>
      )
    }
    return (
      <div>
        {Session.get('ws')? Session.get('ws').label: 'Nothing to display'}
      </div>
    )
  }

  render() {
    const rowClassName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone')
    const twoCol = classNames('mdl-cell', 'mdl-cell--6-col-desktop', 'mdl-col--4-col-tablet', 'mdl-cell--4-col-phone')

    return (
      <div className={rowClassName}>
        <div className="mdl-grid">
          <div id="admin-ws-map" className={twoCol}>
          </div>
          <div className={twoCol}>
            {this.renderWSData()}
          </div>
        </div>
      </div>
    )
  }
}

export default DSSAdminWSMap;