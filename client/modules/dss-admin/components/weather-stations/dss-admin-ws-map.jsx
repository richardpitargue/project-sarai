import React from 'react'
import classNames from 'classnames'
import L from 'leaflet';

class DSSAdminWSMap extends React.Component {
  constructor() {
    super()
    this.renderWSData = this.renderWSData.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const {weatherStations, setWSId} = this.props;

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
      // this.coords0.value = e.latlng.lat
      // this.coords1.value = e.latlng.lng
    })

    for (let station of weatherStations) {
      L.marker(
        [station.coords[0], station.coords[1]],
        {icon: markerIcon})
      .bindPopup(`<h5>${station.label}</h5>`)
      .on('click', () => {
        setWSId(station.id)
        Session.set('station', station)
      })
      .addTo(map);
    }
  }

  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  handleEdit(e) {
    const {goToEditPage} = this.props

    // goToEditPage(station.id)
    goToEditPage(Session.get('station').id)
  }

  handleDelete() {
    const {deleteWS} = this.props

    deleteWS(Session.get('station')._id)
  }

  renderWSData() {
    // const {station} = this.props

    if (Session.get('station')) {
      return (
        <div className="ws-info">
          <div></div>

          <div>
            <button onClick={this.handleEdit} type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect crud-button">
              <i className="material-icons">mode_edit</i>&nbsp;Edit
            </button>

          </div>
        </div>
      )
    }

    else {
      return (
        <div className="default-instruction">
          Select a weather station <br/>on the map to edit it.
        </div>
      )
    }
  }

  render() {
    const rowClassName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone')
    const entireRow = classNames('mdl-cell', 'mdl-cell--12-col')
    const twoCol = classNames('mdl-cell', 'mdl-cell--6-col-desktop', 'mdl-col--4-col-tablet', 'mdl-cell--4-col-phone')

    return (
      <div className={rowClassName}>
        <div className="mdl-grid">
         <div className={entireRow}>
            {this.renderWSData()}
          </div>
          <div id="admin-ws-map" className={entireRow}>
          </div>
        </div>
      </div>
    )
  }
}

export default DSSAdminWSMap;