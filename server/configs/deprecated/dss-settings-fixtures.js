import {DSSSettings} from '/lib/collections';

if (!DSSSettings.findOne({name: 'wunderground-api-key'})) {
  DSSSettings.insert({
    name: 'wunderground-api-key',
    value: '9470644e92f975d3'
  });
}

if (!DSSSettings.findOne({name: 'mapbox-access-token'})) {
  DSSSettings.insert({
    name: 'mapbox-access-token',
    value: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
  });
}

if (!DSSSettings.findOne({name: 'mapbox-tileset-id'})) {
  DSSSettings.insert({
    name: 'mapbox-tileset-id',
    value: 'mcarandang.p67769a5'
  });
}

// if (!DSSSettings.findOne({name: 'weather-last-update'})) {
//   name: 'weather-last-update',
//   value: '<Date UTC>'
// }

