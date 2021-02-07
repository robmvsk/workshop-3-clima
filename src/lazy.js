let totalImagenes = 0
let totalCargadas = 0

const isIntersecting = (entry) => {
    //podemos hacer algo asi: si estas a 200px lejos de la pantalla -- X, Y has algo
    return entry.isIntersecting  //true: visible dentro de la pantalla
}

const accion = (entry) =>  {
    const nodo = entry.target  //IMPORTANTE: es la imagen o es el contenedor div? es el contenedor (div)
    
    const imagen = nodo.firstChild  //nodo.querySelector('img')
    const url = imagen.dataset.src
    
    //ahora si se realiza la carga real de la imagen
    imagen.src = url

    imagen.onload = () => {  //Este evento se ejecuta despues de cargar la imagen
        totalCargadas += 1
        logState();

        //quita la clase lds-hourglass
        nodo.className = "p-1 py-1 mt-6 bg-green-300 rounded-md mx-auto ajustar-margen"
        //nodo.classList.remove("lds-hourglass")

        //ya no se requiere porque la clase ajustar-margen, 
        //incluye estas 3 instrucciones pero en CSS
            //nodo.style.minHeight = "100px";
            //nodo.style.minWidth = "320px";
            //nodo.style.display = "inline-block";
        
    };

    //debugger;

    //accion a realizar, en este caso mostrar el mensaje
    console.log(`hey imagen! ya te estoy observando. nodo.nodeName: ${nodo.nodeName}`)

    //1era forma: que le pasaramos al lazy loading la imagen a cargar
    //imagen.src = `https://randomfox.ca/images/${imageRandom()}.jpg`

    //des-registrar la imagen (unlisten) ya no la observes
    //una vez cargada la imagen ya no debe volver a cargarla nuevamente, 
    //porque solo es ncesario cargarla una unica vez
    observer.unobserve(nodo)  //y ahora si, si hace scroll hacia arriba o hacia abajo tantas veces, solo la 1era vez carga y el mensaje solo se imprime una sola vez
}

//const observer = new IntersectionObserver(funcionQueHacerPorCadaImagen)
const observer = new IntersectionObserver( (entries) => {
    console.log('Hey, estoy creando el Intersection Observer...')
    //entries, son todos los elementos que el Obserer esta observando y verificando si so o no visibles
    entries
        .filter(isIntersecting)  //queremos saber si hay una interseccion con el viewport
        .forEach(accion)  //y por cada elemento que este dentro del viewport o dentro de la pantalla haremos algo
})

//funcion para registrar una imagen
//le va a indicar al observador que observe la imagen que esta recibiendo y la escuche
const registerImage = (image) => {
    //Intersection Observer --> observer (imagen)
    observer.observe(image)

    totalImagenes += 1
    logState()
}

function logState() {
    console.log(`⚪️ Total Imágenes: ${totalImagenes}`);
    console.log(`🟣 Imágenes cargadas: ${totalCargadas}`);
    console.log("--------------------------------------");
  }

  export const limpiarReporte = () => {
    totalImagenes = 0
    totalCargadas = 0
  }

export default registerImage;