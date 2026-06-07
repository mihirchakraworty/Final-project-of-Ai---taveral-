const axios = require("axios");

const getTrains = async(from,to)=>{

const options = {

method:"GET",

url:
`https://indian-railway-irctc.p.rapidapi.com/api/trains-search/v1/trainBetweenStations`,

params:{
fromStationCode:from,
toStationCode:to
},

headers:{
"X-RapidAPI-Key":process.env.RAPID_API_KEY
}

};

const response = await axios.request(options);

return response.data;

};

module.exports = getTrains;