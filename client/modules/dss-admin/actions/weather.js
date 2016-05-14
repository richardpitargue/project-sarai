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

  insertWeatherStation(context, station) {

  },

  editWeatherStation(context, id, station) {

  },

  deleteWeatherStation(context, id) {
    Meteor.call('DSS.deleteWeatherStation', id, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        //nothing
      }
    })
  }
}