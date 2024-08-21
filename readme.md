# Proyecto Clima - JavaScript Moderno

Este proyecto es una aplicación web sencilla que permite a los usuarios consultar el clima de una ciudad específica. Utiliza HTML, CSS, JavaScript y Tailwind CSS para la parte visual, y consume una API externa para obtener los datos meteorológicos.

## Características

- **Consulta del Clima:** Los usuarios pueden introducir el nombre de una ciudad y seleccionar un país para obtener el clima actual.
- **Interfaz Sencilla:** La aplicación tiene un diseño limpio y simple, utilizando Tailwind CSS para la estilización.
- **Consumo de API:** La aplicación hace una solicitud a una API meteorológica para obtener datos en tiempo real.

Aquí tienes un archivo README.md para tu proyecto que usa una API para consultar el clima:

markdown

# Proyecto Clima - JavaScript Moderno

Este proyecto es una aplicación web sencilla que permite a los usuarios consultar el clima de una ciudad específica. Utiliza HTML, CSS, JavaScript y Tailwind CSS para la parte visual, y consume una API externa para obtener los datos meteorológicos.

## Características

- **Consulta del Clima:** Los usuarios pueden introducir el nombre de una ciudad y seleccionar un país para obtener el clima actual.
- **Interfaz Sencilla:** La aplicación tiene un diseño limpio y simple, utilizando Tailwind CSS para la estilización.
- **Consumo de API:** La aplicación hace una solicitud a una API meteorológica para obtener datos en tiempo real.

## Uso

    Abre la aplicación en tu navegador.
    Introduce el nombre de una ciudad en el campo de texto.
    Selecciona el país correspondiente del menú desplegable.
    Haz clic en el botón "Obtener Clima".
    El clima actual de la ciudad se mostrará en la pantalla.

## API Usada

La aplicación utiliza la API de OpenWeatherMap para obtener los datos del clima. Necesitarás una clave API para hacer solicitudes.
Ejemplo de Uso de la API en app.js:

    const apiKey = 'TU_CLAVE_API_AQUÍ';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}&units=metric`;

## Contribuciones

    Las contribuciones son bienvenidas. Siéntete libre de abrir un issue o hacer un pull request.
