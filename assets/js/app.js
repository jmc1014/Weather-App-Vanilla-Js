const cityFrom = document.querySelector('.form');
const card = document.querySelector('.card-js');
const divDetails = document.querySelector('.details-js');
const time = document.querySelector('.time-js');
const icon = document.querySelector('.icon-js img');

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getForcast(cityDetails.Key);
    return { cityDetails, weather }
};

const updateUI = data => {
    // Destructure properties
    const { cityDetails, weather } = data;

    divDetails.innerHTML = `
        <h3 class="text-xl uppercase">${cityDetails.EnglishName}</h3>
        <p class="opacity-50">${weather.WeatherText}</p>
        <h4 class="text-5xl my-4">${weather.Temperature.Metric.Value}<sup>&deg;</sup>C</h4>
    `;

    const iconSrc = `assets/images/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    if (weather.IsDayTime) {
        time.classList.remove('bg-blue-900');
        time.classList.add('bg-blue-300');
    } else {
        time.classList.remove('bg-blue-300');
        time.classList.add('bg-blue-900');
    }

    if (card.classList.contains('hidden')) {
        card.classList.remove('hidden');
    }


} 

cityFrom.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityFrom.city.value.trim();
    console.log(city)
    cityFrom.reset();

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err,'sad'));
});