import math from 'mathjs';

export default {

  calculateGroupA(context, input) {
    const {Meteor, LocalState} = context
    //plantingDate, solarRadiation, maxTemperature, minTemperature, precipitation, soilTexture, elevation

    /*[yield] = 2432.594 – 0.347([planting date])2 + 

0.013([solar radiation)3 +0.022([maximum 

temperature])3 – 0.045([minimum temperature])3 

+ 36.100log([precipitation])  + 3.904[soil 

texture] + 1.818[elevation]*/
    // const yield = math.sqrt(parseInt(input.toString()))



    return yield
  }
}