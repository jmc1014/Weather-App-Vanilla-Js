const key = 'X9tTzanamhEGkLu4HZ4fBRkBcbtarClH';


const getForcast = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch (base + query);
    const data = await response.json();

    return data[0];

}


const getCity = async (city) => {
    
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    console.log('getcity');
    return data[0];

};

// getCity('Manila')
//     .then(data => {
//         return getForcast(data.Key);
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
