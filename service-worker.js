//=====================================
// NOMBRE DEL CACHE
//=====================================

const CACHE_NAME = "bogota-explorando-v2";

//=====================================
// ARCHIVOS A GUARDAR
//=====================================

const urlsToCache = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json",
    "./imagenes/Monserrate.jpg",
    "./imagenes/Museo del Oro.jpeg",
    "./imagenes/Plaza de Bolivar.jpeg",
    "./imagenes/Biblioteca Virgilio Barco.jpeg",
    "./imagenes/La Candelaria.jpeg",
    "./imagenes/Teatro Colon.jpeg",
    "./imagenes/Palacio Nariño.jpeg",
    "./imagenes/Parque Simon Bolivar.jpeg",
    "./imagenes/Parque Nacional.jpeg",
    "./imagenes/Iglesia Lourdes.jpeg",
    "./imagenes/El Campin.jpeg",
    "./imagenes/Plazade Toros.jpeg",
    "./icons/bacata-viva-32.png",
    "./icons/bacata-viva-192.png",
    "./icons/bacata-viva-512.png",
    "./imagenes/portada.jpeg"
];

//=====================================
// INSTALACIÓN
//=====================================

self.addEventListener("install", (event)=>{

    console.log("Service Worker instalado");

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then((cache)=>{

            console.log("Archivos almacenados");

            return cache.addAll(urlsToCache);

        })

    );

});

//=====================================
// FETCH
//=====================================

self.addEventListener("fetch", (event)=>{

    event.respondWith(

        caches.match(event.request)

        .then((response)=>{

            if(response){

                return response;

            }

            return fetch(event.request);

        })

    );

});

//=====================================
// NOTIFICACIONES PUSH
//=====================================

self.addEventListener("push", (event)=>{

    self.registration.showNotification(
        "Bacatá Viva",
        {
            body: "Hay nuevos lugares turísticos para explorar."
        }
    );

});