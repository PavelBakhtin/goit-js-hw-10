const countryInfo = document.querySelector('.country-info')
export default function countryCardMakupMaker(dataArray) {
     const templateInfo = dataArray.flatMap(({name, capital, population, flags, languages}) => { 
        return `<div class="country-name"><img src="${flags.svg}" alt="${flags}" width ="50" height = "30"><h2>${name.common}</h2></div><p><span class="country-attr">Capital: </span>${capital}</p><p><span class="country-attr">Population: </span>${population}</p><p><span class="country-attr">Languages: </span>${Object.values(languages).join(", ")}</p>`})
        countryInfo.insertAdjacentHTML("beforeend", templateInfo)}
            
