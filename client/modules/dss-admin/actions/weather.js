export default {

  getYesterdayWeather(context, weatherStations) {

    for (let station of weatherStations) {
      const xhr = new XMLHttpRequest()
      const stationID = station.id

      xhr.open('GET', `http:\/\/api.wunderground.com/api/9470644e92f975d3/yesterday/q/pws:${stationID}.json`, true)

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const data = JSON.parse(xhr.responseText)

          const date = data.history.date
          const rainfall = data.history.dailysummary[0].precipm

          const newRecord = {
            id: stationID,
            date: {
              year: parseInt(date.year),
              month: parseInt(date.mon) - 1,
              day: parseInt(date.mday)
            },
            data: {
              rainfall: parseInt(rainfall)
            }
          }

          console.log(newRecord)
          Meteor.call('DSS.insertWeatherData', newRecord, (err, res) => {
            if (err) {
              console.error(err)
            } else {
              // console.log(res);
            }
          })
        }
      }

      xhr.send()

    }
  },

  goToAddPage(context) {
    const {FlowRouter} = context

    FlowRouter.go('/dss/admin/weather-stations/add')
  },

  insertWeatherStation(context, _id, id, label, coords0, coords1) {
    const {FlowRouter, Meteor} = context

    const newRecord = {
      "id": id,
      "label": label,
      "coords": [coords0, coords1]
    }
    console.log('Inserting new record')
    console.log(newRecord)

    Meteor.call('DSS.updateWeatherStation', newRecord, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        FlowRouter.go('/dss/admin/weather-stations')
        //nothing
      }
    })
  },

  goToEditPage(context, id) {
    const {FlowRouter, dssAdminStore} = context

    dssAdminStore.dispatch({
      type: 'SET-WS-ID',
      wsID: id
    })

    FlowRouter.go('/dss/admin/weather-stations/edit')
  },

  setWSId(context, id) {
    const {FlowRouter, dssAdminStore} = context
    dssAdminStore.dispatch({
      type: 'SET-WS-ID',
      wsID: id
    })
    // console.log(dssAdminStore.getState())
  },



  editWeatherStation(context, _id, id, label, coords0, coords1) {
    const {FlowRouter, Meteor} = context

    const updatedRecord = {
      "id": id,
      "label": label,
      "coords": [coords0, coords1]
    }

    Meteor.call('DSS.updateWeatherStation', _id, updatedRecord, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        FlowRouter.go('/dss/admin/weather-stations')
        //nothing
      }
    })
  },

  deleteWeatherStation(context, _id) {
    Meteor.call('DSS.deleteWeatherStation', _id, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        //nothing
      }
    })
  }
}