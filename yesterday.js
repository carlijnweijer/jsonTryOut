const axios = require('axios')

async function yesterday(){
    const url = "http://localhost:3000/json"
    const response = await axios.get(url)

    const { data } = response

    console.log(data.yesterday);
}

yesterday()