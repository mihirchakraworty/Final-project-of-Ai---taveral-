const axios = require("axios");

const getHotels = async(city)=>{

const options = {
method:"GET",
url:"",
params:{
name:city,
locale:"en-gb"
},
headers:{
"
}
};

const response = await axios.request(options);

return response.data;
};

module.exports = getHotels;
