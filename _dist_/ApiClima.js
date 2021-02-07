
//vamos agregar todos los elementos en un contenedor, el cual lo 
//pondremos en index.html
//y desde aqui lo llenaremos

//web API llamada Intl (Internacionalizacion), que sirve para dar:
// 1.- formato de fechas  window.Intl.DateTimeFormat
// 2.- formato a monedas  window.Intl.NumberFormat 
//     El primer parametro: es el locate: es el pais en donde se encuentra el usuario
//     El segundo parametro: opciones del formato {}

const redondear = (numero) => Math.ceil(numero)

//web API llamada fetch

const baseUrl = "https://api.openweathermap.org";
const baseIcon = "http://openweathermap.org/img/wn";

const apiKey = document.querySelector('#clave');
const appNode = document.querySelector('#app');


//en lugar de ponerlo en el body, lo vamos a poner dentro de un contenedor:
//Pasos:
const getAPIClimaCiudad = async function getDataClima(city) {
    const url = `${baseUrl}/data/2.5/weather?q=${city}&units=metric&appid=${apiKey.value}`
    console.log(`Iniciando llamada a la api de clima... ${url}`);
// 1.- Conectarnos al servidor
    try {
        const response = await fetch(url)
    // 2.- Proesar la respuesta, y convertirla en JSON
        const reponseJson = await response.json()
    // 3.- JSON --> Data --> Renderizar la infor del data al browser
        console.log(reponseJson);
        //debugger
        const item = reponseJson

        if(item.cod === 200) {
            console.log('Resultado de la consulta: OK');
            const ciudad = document.createElement('label')
            ciudad.className = "font-medium";
            ciudad.textContent = item.name;
            const pais = document.createElement('label')
            pais.className = "text-xs font-medium p-0 align-text-top border-solid border-2 border-yellow-200 rounded-full bg-yellow-400";
            pais.textContent = item.sys.country;

            const visibilidad = document.createElement('h2')
            visibilidad.textContent = item.visibility;
            const cloudsAll = document.createElement('h2')
            cloudsAll.textContent = item.clouds.all;
            //const rain1h = document.createElement('h2')
            //rain1h.textContent = item.rain.all;
            const windSpeed = document.createElement('h2')
            windSpeed.textContent = item.wind.speed;
            const windDeg = document.createElement('h2')
            windDeg.textContent = item.wind.deg;
                    
            const temperatura = document.createElement('label')
            temperatura.className = "text-3xl font-bold align-baseline md:text-left"
            temperatura.textContent = redondear(item.main.temp)
            const grados = document.createElement('label')
            grados.className = "text-3x1 font-bold align-top"
            grados.textContent = '°C'
            
            const containerTempertura = document.createElement('div')
            containerTempertura.className = "md:text-left";
            containerTempertura.append(temperatura, grados)

            const feelsLike = document.createElement('h2')
            feelsLike.textContent = item.main.feels_like;
            const temperaturaMinima = document.createElement('h2')
            temperaturaMinima.textContent = item.main.temp_min;
            const temperaturaMaxima = document.createElement('h2')
            temperaturaMaxima.textContent = item.main.temp_max;

            const presion = document.createElement('h2')
            presion.textContent = item.main.pressure;
            const hunedad = document.createElement('h2')
            hunedad.textContent = item.main.humidity;

            const weatherMain = document.createElement('label')
            weatherMain.textContent = item.weather[0].main;
            const weatherDescription = document.createElement('label')
            weatherDescription.textContent = ' ' + item.weather[0].description;

            const image = document.createElement('img')
            image.src = `${baseIcon}/${item.weather[0].icon}@2x.png`;  //URL de la imagen
            image.className = 'rounded-full mx-auto';
            
            const containerCiudad = document.createElement('div')
            containerCiudad.className = "align-baseline md:text-left";
            containerCiudad.append(ciudad, pais, containerTempertura)

            const containerClima = document.createElement('div')
            containerClima.className = "text-xs Roboto italic font-bold text-green-500 font-light uppercase hover:shadow-lg focus:bg-yellow-200 p-3";
            containerClima.append(image, weatherMain, weatherDescription)

            /*
            title.className = 'text-xl text-red-600';
            price.className = 'text-lg text-blue-500';
            subTitle.className = 'text-base md:text-left text-yellow-500 font-bold';
            description.className = 'text-xs md:text-right text-blue-500';
            */

            //contenedor Global: de cardUp y cardDown
            const card = document.createElement('div')
            card.className = "group hover:shadow-lg hover:border-transparent md:flex-wrap bg-yellow-50 rounded-lg p-6 hover:bg-yellow-100 border-solid border-2 border-green-200";

            /*
            card.append(containerCiudadPais,visibilidad,cloudsAll,windSpeed,
                        windDeg,weatherMain,weatherDescription,
                        temperatura,feelsLike,temperaturaMinima,
                        temperaturaMaxima,presion,hunedad,image)
            */

            card.append(containerCiudad, containerClima)
            
            console.log(card)
            appNode.append(card)
        } else if (item.cod === "404") {
            console.log('Resultado de la consulta: Not Found');
            alert(item.message)
        } else {
            console.log('Resultado de la consulta: Error');
            alert(`Error en la consulta intente más tarde ( respuesta : ${item.cod})`)
        }
    } catch (error) {
        console.log(`Ocurrio un Error: ${error}`)
    }
    
};

 export default getAPIClimaCiudad;