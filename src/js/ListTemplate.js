const countryList = document.querySelector(".country-list")

export default function listMakupMaker(dataArray) {
   
    const templateLi = dataArray.map(({flags, name}) => {
    
    return `<li><img src="${flags.svg}" alt="${flags}" width ="20">${name.common}</li>`
    }).join('')
    
    countryList.insertAdjacentHTML("beforeend", templateLi)
    
}