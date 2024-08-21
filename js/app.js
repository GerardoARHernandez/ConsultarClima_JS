
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
});

function buscarClima(e){
    e.preventDefault();

    //Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        //Hubo un error
        mostrarError('Ambos campos son obligatorios');

        return;
    }

    //Consultar la API
    consultarAPI(ciudad, pais);

}

function mostrarError(mensaje){
    const alerta = document.querySelector('.bg-red-200');

    if (!alerta) {
        //Crear una alerta
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-200', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'uppercase');

        alerta.innerHTML = `
            <strong class="font-bold">¡Error!</strong>
            <span class="block">${mensaje}</span>
        `;

        container.appendChild(alerta);

        //Se elimina despues de 3s
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
    
}

function consultarAPI(ciudad, pais){
    const appID = 'd0a5b70cb10bb63e26e375abcd2998b6';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    Spinner(); //Muestra el spinner de carga

    fetch(url)
        .then( respuesta => {

            return respuesta.json();
        })
        .then( datos => {
            //Limpia el html previo
            limpiarHTML();

            if (datos.cod === "404") {
                mostrarError('Ciudad no encontrada');

                return;
            }

            //Imprime la respuesta en el HTML
            mostrarClima(datos);
        })

}

function mostrarClima(datos){
    const { name, main: { temp, temp_max, temp_min } } = datos;

    const celsius = kelvinACelsius(temp);
    const max = kelvinACelsius(temp_max);
    const min = kelvinACelsius(temp_min);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('p');
    actual.classList.add('font-bold', 'text-6xl');
    actual.innerHTML = ` ${celsius} &#8451; `;

    const tempMax = document.createElement('p');
    tempMax.classList.add('text-xl')
    tempMax.innerHTML = `Max: ${max} &#8451; `;

    const tempMin = document.createElement('p');
    tempMin.classList.add('text-xl')
    tempMin.innerHTML = `Min: ${min} &#8451; `;

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMax);
    resultadoDiv.appendChild(tempMin);

    resultado.appendChild(resultadoDiv);
    
}

function kelvinACelsius(grados){
    //Lo convierte a celsius y se mantienen 2 decimales
    return parseFloat(grados - 273.15).toFixed(2);
}

function limpiarHTML(){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function Spinner(){
    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
            <div class="sk-circle1 sk-circle"></div>
            <div class="sk-circle2 sk-circle"></div>
            <div class="sk-circle3 sk-circle"></div>
            <div class="sk-circle4 sk-circle"></div>
            <div class="sk-circle5 sk-circle"></div>
            <div class="sk-circle6 sk-circle"></div>
            <div class="sk-circle7 sk-circle"></div>
            <div class="sk-circle8 sk-circle"></div>
            <div class="sk-circle9 sk-circle"></div>
            <div class="sk-circle10 sk-circle"></div>
            <div class="sk-circle11 sk-circle"></div>
            <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(divSpinner)
}