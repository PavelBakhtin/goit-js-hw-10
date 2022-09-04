import './css/styles.css';
import Notiflix from 'notiflix';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import clearContainer from './js/ClearConatainer'
const countryList = document.querySelector(".country-list")

const DEBOUNCE_DELAY = 300;
const input = document.getElementById('search-box')


input.addEventListener('input', debounce((e)=>{
    clearContainer()
     const countryNameInput = e.target.value.trim()
    if(countryNameInput === "") {
        return
    }
     
    fetchCountries(countryNameInput)
    
   
},DEBOUNCE_DELAY))

