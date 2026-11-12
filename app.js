//=====================================
// VARIABLES
//=====================================

let nombre = "Mario";
let edad = 40;
let ciudad = "Bogotá";
let carrera = "Ingeniería de Sistemas";
let universidad = "Universidad del Tolima";

//=====================================
// MOSTRAR VARIABLES
//=====================================

console.log(nombre);
console.log(edad);
console.log(ciudad);
console.log(carrera);
console.log(universidad);

//=====================================
// TIPOS DE DATOS
//=====================================

let activo = true;
let estatura = 1.75;

console.log(activo);
console.log(estatura);

//=====================================
// OPERADORES ARITMÉTICOS
//=====================================

let nota1 = 4.2;
let nota2 = 3.8;

let promedio = (nota1 + nota2) / 2;

console.log(promedio);

//=====================================
// OPERADORES RELACIONALES
//=====================================

console.log(promedio >= 3.0);
console.log(edad >= 18);
console.log(edad < 18);

//=====================================
// OBJETO BÁSICO
//=====================================

let estudiante = {

    nombre: "Mario",
    edad: 40,
    ciudad: "Bogotá"

};

console.log(estudiante);

console.log(estudiante.nombre);
console.log(estudiante.edad);
console.log(estudiante.ciudad);

//=====================================
// CLASE
//=====================================

class LugarTuristico {

    // Encapsulamiento
    #visitas = 0;

    constructor(id, nombre, direccion, descripcion, imagen, categoria = "Naturaleza y ciudad") {

        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.categoria = categoria;
        this.tipo = "turistico";

    }

    mostrar() {

        console.log("Lugar turístico");
        console.log(this.nombre);
        console.log(this.direccion);

    }

}

//=====================================
// HERENCIA
//=====================================

class LugarHistorico extends LugarTuristico {

    constructor(id, nombre, direccion, descripcion, imagen, categoria = "Historia y cultura") {

        super(id, nombre, direccion, descripcion, imagen, categoria);
        this.tipo = "historico";

    }

    // Polimorfismo
    mostrar() {

        console.log("Lugar histórico");
        console.log(this.nombre);
        console.log(this.direccion);

    }

}

//=====================================
// CREAR OBJETOS
//=====================================

// Información del lugar: https://monserrate.co/es/preparar-visita/
let lugar1 = new LugarTuristico(
    1,
    "Monserrate",
    "Cerros orientales, acceso por la carrera 2 Este con calle 21",
    "Contempla Bogotá desde uno de sus cerros más emblemáticos. El santuario, los miradores y los caminos entre vegetación combinan paisaje y tradición; puedes llegar en teleférico, funicular o por el sendero peatonal, según su disponibilidad.",
    "imagenes/Monserrate.jpg",
    "Paisaje y tradición"
);

// Información del lugar: https://www.banrepcultural.org/bogota/museo-del-oro/visita
let lugar2 = new LugarHistorico(
    2,
    "Museo del Oro",
    "Carrera 6 # 15-88, junto al Parque Santander",
    "Descubre la orfebrería y las formas de vida de las sociedades prehispánicas de Colombia. Sus salas acercan al significado del oro, los rituales y la relación con la naturaleza a través de piezas como la balsa muisca y el poporo quimbaya.",
    "imagenes/Museo del Oro.jpeg",
    "Museos y patrimonio"
);

// Información del lugar: https://visitbogota.co/es/rutas-turisticas/ruta-de-imperdibles-entre-cielos-y-oro-monserrate-y-candelaria
let lugar3 = new LugarHistorico(
    3,
    "Plaza de Bolívar",
    "Carrera 7 con calle 11, centro histórico",
    "El corazón cívico de Bogotá reúne siglos de historia en una sola plaza. Recorre su entorno para reconocer la Catedral Primada, el Capitolio Nacional, el Palacio de Justicia y el Palacio Liévano, y observar la vida cotidiana del centro.",
    "imagenes/Plaza de Bolivar.jpeg",
    "Historia y ciudad"
);

// Información del lugar: https://www.biblored.gov.co/bibliotecas/biblioteca-virgilio
let lugar4 = new LugarHistorico(
    4,
    "Biblioteca Virgilio Barco",
    "Avenida Carrera 60 # 57-60, Teusaquillo",
    "Diseñada por Rogelio Salmona, esta biblioteca integra el ladrillo, el agua y los jardines en un recorrido lleno de luz. Sus espacios de lectura y encuentro cultural invitan a disfrutar la arquitectura y el paisaje del entorno del Parque Simón Bolívar.",
    "imagenes/Biblioteca Virgilio Barco.jpeg",
    "Arquitectura y lectura"
);

// Información del lugar: https://visitbogota.co/es/rutas-turisticas/ruta-de-imperdibles-entre-cielos-y-oro-monserrate-y-candelaria
let lugar5 = new LugarHistorico(
    5,
    "La Candelaria",
    "Centro histórico, entorno del Chorro de Quevedo y la Plaza de Bolívar",
    "Camina entre casas de colores, balcones y calles que conservan la memoria de Bogotá. El barrio reúne museos, teatros, cafés y espacios como el Chorro de Quevedo: una invitación a descubrir el patrimonio y la cultura a pie.",
    "imagenes/La Candelaria.jpeg",
    "Calles y memoria"
);

// Información del lugar: https://eneldelia.gov.co/historia-3/
let lugar6 = new LugarHistorico(
    6,
    "Teatro Colón",
    "Calle 10 # 5-32, La Candelaria",
    "Diseñado por Pietro Cantini en el siglo XIX, este teatro destaca por su sala en forma de herradura, sus palcos y su ornamentación. Forma parte del Centro Nacional de las Artes Delia Zapata Olivella y es un referente de las artes escénicas del país.",
    "imagenes/Teatro Colon.jpeg",
    "Teatro y arquitectura"
);

// Información del lugar: https://formulariovisitas.presidencia.gov.co/
let lugar7 = new LugarHistorico(
    7,
    "Casa de Nariño",
    "Carrera 8 # 7-26, centro histórico",
    "La sede de la Presidencia de Colombia forma parte del paisaje monumental del centro histórico. Su arquitectura y su entorno permiten acercarse a la historia institucional del país; las visitas al interior requieren reserva previa y están sujetas a disponibilidad.",
    "imagenes/Palacio Nariño.jpeg",
    "Historia y arquitectura"
);

// Información del lugar: https://www.idrd.gov.co/parques-y-escenarios/parque-simon-bolivar
let lugar8 = new LugarTuristico(
    8,
    "Parque Simón Bolívar",
    "Sector central entre calles 53 y 63 y carreras 60 y 68, Teusaquillo",
    "Un gran espacio verde para hacer una pausa en medio de la ciudad. Su lago, sus senderos y sus praderas invitan a caminar, hacer ejercicio y compartir al aire libre; también es uno de los escenarios de encuentro y eventos de Bogotá.",
    "imagenes/Parque Simon Bolivar.jpeg",
    "Parques y naturaleza"
);

// Información del lugar: https://www.idrd.gov.co/parques-y-escenarios/parque-nacional-enrique-olaya-herrera
let lugar9 = new LugarTuristico(
    9,
    "Parque Nacional Enrique Olaya Herrera",
    "Carrera 7, entre calles 36 y 39, al pie de los cerros orientales",
    "Árboles, senderos y monumentos conectan este parque con la memoria urbana de Bogotá. Recorre su sector histórico, reconoce el reloj y sus esculturas, y disfruta de un espacio de encuentro entre la carrera Séptima y los cerros orientales.",
    "imagenes/Parque Nacional.jpeg",
    "Parques y memoria"
);

// Información del lugar: https://librobogotatucasa.visitbogota.co/pdf/cultura_bogotatucasa2025.pdf
let lugar10 = new LugarHistorico(
    10,
    "Basílica de Nuestra Señora de Lourdes",
    "Carrera 13 # 63-27, Chapinero",
    "Sus torres, arcos apuntados y vitrales hacen de este templo un referente de la arquitectura religiosa de Chapinero. La plaza que lo rodea es un punto de encuentro para apreciar su fachada y descubrir la vida comercial y cultural del sector.",
    "imagenes/Iglesia Lourdes.jpeg",
    "Arquitectura religiosa"
);

// Información del lugar: https://www.idrd.gov.co/parques/escenarios-idrd/escenarios-idrd
let lugar11 = new LugarTuristico(
    11,
    "Estadio El Campín",
    "Avenida NQS con calle 57, Teusaquillo",
    "El estadio Nemesio Camacho El Campín es uno de los escenarios emblemáticos del fútbol bogotano. Vinculado a la historia de Millonarios y Santa Fe, reúne la pasión deportiva de la ciudad; el acceso depende de la programación y las condiciones de cada evento.",
    "imagenes/El Campin.jpeg",
    "Deporte y ciudad"
);

// Información del lugar: https://bogota.gov.co/que-hacer/cultura/planes-en-bogota-en-mes-del-patrimonio-tercera-semana
let lugar12 = new LugarHistorico(
    12,
    "Plaza Cultural La Santamaría",
    "Carrera 5 # 26B-72, sector de San Diego",
    "Conoce la antigua plaza de toros La Santamaría, un edificio patrimonial que destaca por su fachada de ladrillo. Su entorno, junto al Parque de la Independencia y las Torres del Parque, permite recorrer distintas épocas de la arquitectura bogotana.",
    "imagenes/Plazade Toros.jpeg",
    "Patrimonio y arquitectura"
);

//=====================================
// MOSTRAR OBJETOS
//=====================================

console.log(lugar1);
console.log(lugar2);
console.log(lugar3);
console.log(lugar4);

//=====================================
// LLAMAR MÉTODOS
//=====================================

lugar1.mostrar();
lugar2.mostrar();
lugar3.mostrar();
lugar4.mostrar();


//=====================================
// REGISTRAR SERVICE WORKER
//=====================================

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("service-worker.js")

        .then(() => {

            console.log("Service Worker registrado correctamente");

        })

        .catch(() => {

            console.log("Error al registrar el Service Worker");

        });

}

//=====================================
// ARREGLO DE LUGARES TURÍSTICOS
//=====================================

// Orden editorial: primero los referentes más emblemáticos para una primera visita.
// Los IDs identifican cada lugar; no determinan su posición en la página.
let lugares = [
    lugar1, lugar2, lugar5, lugar3, lugar6, lugar7,
    lugar8, lugar4, lugar9, lugar10, lugar11, lugar12
];

//=====================================
// CONTENEDORES
//=====================================

const contenedor = document.getElementById("lugares");

const detalle = document.getElementById("detalle");

const buscador = document.querySelector(".busqueda input");


//=====================================
// MOSTRAR LUGARES
//=====================================

function mostrarLugares(lista){

    contenedor.innerHTML = "";

    lista.forEach((lugar)=>{

        contenedor.innerHTML += `

            <div class="tarjeta">

                <img src="${lugar.imagen}" alt="${lugar.nombre}" loading="lazy" decoding="async">

                <div class="tarjeta-contenido">
                    <span class="categoria">${lugar.categoria}</span>
                    <h3>${lugar.nombre}</h3>
                    <p>${lugar.descripcion}</p>
                    <button data-id="${lugar.id}" aria-label="Ver más sobre ${lugar.nombre}" aria-haspopup="dialog" aria-controls="detalle">
                        Ver más <span aria-hidden="true">+</span>
                    </button>
                </div>

            </div>

        `;

    });

    configurarBotones();

}


//=====================================
// CONFIGURAR BOTONES
//=====================================

function configurarBotones(){

    const botones = document.querySelectorAll(".tarjeta button");

    botones.forEach((boton)=>{

        boton.addEventListener("click", ()=>{

            const id = Number(boton.dataset.id);

            const lugar = lugares.find((lugar)=>{

                return lugar.id === id;

            });

            document.getElementById("titulo-detalle").textContent = lugar.nombre;
            document.getElementById("categoria-detalle").textContent =
                lugar.categoria;
            document.getElementById("direccion-detalle").textContent = lugar.direccion;
            document.getElementById("descripcion-detalle").textContent = lugar.descripcion;

            const imagen = document.getElementById("imagen-detalle");
            imagen.src = lugar.imagen;
            imagen.alt = lugar.nombre;

            detalle.showModal();
            document.body.classList.add("modal-abierto");

        });

    });

}


// Restaurar el desplazamiento al cerrar, también al pulsar Escape.
detalle.addEventListener("close", () => {
    document.body.classList.remove("modal-abierto");
});

// Cerrar solo si el clic empieza y termina fuera del cuadro del modal.
let inicioFueraDelDetalle = false;

function fueraDelDetalle(event) {
    const limites = detalle.getBoundingClientRect();
    return event.clientX < limites.left || event.clientX > limites.right
        || event.clientY < limites.top || event.clientY > limites.bottom;
}

detalle.addEventListener("pointerdown", (event) => {
    inicioFueraDelDetalle = fueraDelDetalle(event);
});

detalle.addEventListener("click", (event) => {
    if (inicioFueraDelDetalle && fueraDelDetalle(event)) {
        detalle.close();
    }
    inicioFueraDelDetalle = false;
});


//=====================================
// BUSCADOR
//=====================================

buscador.addEventListener("input", ()=>{

    const texto = buscador.value.toLowerCase();

    const resultados = lugares.filter((lugar)=>{

        return lugar.nombre
            .toLowerCase()
            .includes(texto);

    });

    mostrarLugares(resultados);

});


//=====================================
// MOSTRAR TODOS AL INICIAR
//=====================================

mostrarLugares(lugares);


//=====================================
// INDEXEDDB
//=====================================

const solicitud = indexedDB.open(
    "BogotaExplorando",
    2
);

solicitud.onupgradeneeded = (event)=>{

    const db = event.target.result;

    db.createObjectStore(
        "lugares",
        {
            keyPath: "id"
        }
    );

    console.log("Base de datos creada");

};

solicitud.onerror = () => {
    console.warn("No se pudo abrir IndexedDB; se muestran los lugares iniciales.");
};

solicitud.onsuccess = (event)=>{

    const db = event.target.result;

    console.log("IndexedDB conectada correctamente");

    const transaccion = db.transaction(
        "lugares",
        "readwrite"
    );

    const almacen = transaccion.objectStore(
        "lugares"
    );

    const solicitudLectura = almacen.getAll();

    solicitudLectura.onsuccess = ()=>{

        const registros = new Map(
            solicitudLectura.result.map((registro) => [registro.id, registro])
        );

        // El catálogo actualiza las rutas y los datos de las publicaciones existentes.
        // Recorrer lugares conserva el orden editorial, independiente de los IDs.
        lugares = lugares.map((lugar) => {
            const registro = { ...registros.get(lugar.id), ...lugar };
            almacen.put(registro);

            // IndexedDB no conserva los métodos: reconstruir la clase correspondiente.
            const ClaseLugar = registro.tipo === "historico"
                ? LugarHistorico
                : LugarTuristico;

            return new ClaseLugar(
                registro.id,
                registro.nombre,
                registro.direccion,
                registro.descripcion,
                registro.imagen,
                registro.categoria
            );
        });

        console.log(lugares);

        mostrarLugares(lugares);

    };



     console.log(lugar1);




};