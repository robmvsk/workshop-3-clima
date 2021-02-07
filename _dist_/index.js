
//vamos agregar todos los elementos en un contenedor, el cual lo 
//pondremos en index.html
//y desde aqui lo llenaremos
import getAPIClimaCiudad from './ApiClima.js';

const claves = document.querySelector('#clave');
const ciudad = document.getElementById('nombreCiudad');
const buscar = document.getElementById('buscarCiudad');
const cleanButton = document.querySelector("button[type='reset']");


const focusCiudad = () => {
    ciudad.value = ""
    ciudad.focus()
}

//buscar el clima de la ciudad cada vez que presione click en el boton
const addClima = () => {
    const valor = ciudad.value
    const key = claves.value
    if (key.length > 10) {
        if (valor.length > 1) {
            getAPIClimaCiudad(ciudad.value)
        } else {
            alert('Debe escribir la ciudad. Mínimo 2 letras')
        }
    } else {
        alert('Debe agregar la api key de https://openweathermap.org')
    }
    focusCiudad()
}

const addClimaCiudad = (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        buscar.click();
    }
}

buscar.addEventListener('click', addClima) 
ciudad.addEventListener('keyup', addClimaCiudad) 


//otra forma: const cleanButton = document.getElementById('limpiar')
//evento para limpiar las ciudades que existan
const cleanCity = () => {
    const nodoImagenes = document.getElementById('app')
    nodoImagenes.innerHTML = ""
    focusCiudad()
}

cleanButton.addEventListener('click', cleanCity)

//getAPIClimaCiudad('London')
//debuggers


 