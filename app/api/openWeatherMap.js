import axios from "axios";


const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3549b07b06ada67be7025e033e2ba32a&units=metric&type=accurate';
// key - 3549b07b06ada67be7025e033e2ba32a

function getTemp(location) {
    let encodedLocation = encodeURIComponent(location); //lokaciya otformatirovalas v 4itabelnuyu dlya brauzera
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((res) => {
        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
                return res.data.main.temp;
        }

    }).catch((res) => {
        throw new Error(res.data.message);
    });
}

export default { getTemp }


//todo: eto vse ne rabotaet tak kak mne ne prixodit ob'ekt(res) s takimi svoystvami

