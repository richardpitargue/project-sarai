export default {

  getRainfallData(context, stationID) {
    console.log(`Dispatching station id: ${stationID}`)

    const {dssStore} = context
    const xhr = new XMLHttpRequest()

    xhr.open('GET', `http:\/\/api.wunderground.com/api/9470644e92f975d3/forecast10day/q/pws:${stationID}.json`, true)

    xhr.onreadystatechange = () => {
      console.log(`readyState: ${xhr.readyState}, status: ${xhr.status}`)
      if (xhr.readyState === 4 && xhr.status === 200) {

        const data = JSON.parse(xhr.responseText)
        // var data = eval("(" + responseText + ")");

        //Collate forecasted rain
        const forecastRain = []

        for (let entry of data.forecast.simpleforecast.forecastday) {
          const utcDate = Date.UTC(entry.date.year, entry.date.month - 1, entry.date.day);

          forecastRain.push({x: utcDate, y: parseInt(entry.qpf_allday.mm)})
          //forecastTemp.push([parseInt(entry.high.celsius), parseInt(entry.low.celsius)])
        }



        // const chartData = {
        //   // "pastRainfall" : pastRainfall,
        //   // "accumulatedRainfall" : accumulatedRainfall,
        //   "forecastRain" : forecastRain,
        //   // "forecastAccumulation" : forecastAccumulation
        // }



        // console.log(`Finished chart data`)
        // console.log(chartData)

        const {dssStore} = context

        dssStore.dispatch({
          type: 'SET-FORECAST-DATA',
          stationID: stationID,
          forecast: forecastRain
        })

      } else {
        console.log(`Waiting for the forecast from wunderground... ${xhr.readyState}`)
      }
    }

    xhr.send()

  },

  updateWeatherData(context) {
    const someData = 'some data'
    Meteor.call('DSS.insertWeatherData', someData, (err, res) => {
      if (err) {
        console.error(err)
      } else {
        console.log(res)
      }
    })
  }

}