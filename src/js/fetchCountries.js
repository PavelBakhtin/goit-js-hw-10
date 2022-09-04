const axios = require('axios').default
import Notiflix from "notiflix"
import listMakupMaker from "./ListTemplate"

import countryCardMakupMaker from "./CardTemplate"

export default function fetchCountries(name) {
   
    const url = `https://restcountries.com/v3.1/name/${name}?name,capital,population,flags.svg,languages`
   
    axios.get(url).then(data => data.data)
    .then(dataArray => {
            if(dataArray.length > 10) {
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
        }
        else if(dataArray.length<10 && dataArray.length>1){
            listMakupMaker(dataArray)
        }
        else if(dataArray.length === 1) {         
            countryCardMakupMaker(dataArray)
        }
    }).catch(err => {
        console.log(err)
        Notiflix.Notify.failure("Oops, there is no country with that name")})
}

