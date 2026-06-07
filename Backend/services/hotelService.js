const axios = require("axios");

const getHotels = async(city)=>{

const options = {
method:"GET",
url:"https://booking-com.p.rapidapi.com/v1/hotels/locations",
params:{
name:city,
locale:"en-gb"
},
headers:{
"X-RapidAPI-Key":process.env.RAPID_API_KEY
}
};

const response = await axios.request(options);

return response.data;
};

module.exports = getHotels;