export default {

  getRainfallData(context, stationID) {
    console.log(`Dispatching station id: ${stationID}`)
    const {dssStore} = context

    dssStore.dispatch({
      type: 'SET-STATION-ID',
      stationID: stationID
    })
  }
}