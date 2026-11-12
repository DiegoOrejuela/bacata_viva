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

    constructor(id, nombre, direccion, descripcion, imagen) {

        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.descripcion = descripcion;
        this.imagen = imagen;
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

    constructor(id, nombre, direccion, descripcion, imagen) {

        super(id, nombre, direccion, descripcion, imagen);
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

let lugar1 = new LugarTuristico(
    1,
    "Monserrate",
    "Cerro Oriental",
    "Un lugar para disfrutar de una vista panorámica de Bogotá desde los cerros orientales.",
    "imagenes/monserrate.png"
);

let lugar2 = new LugarHistorico(
    2,
    "Museo del Oro",
    "Centro de Bogotá",
    "Un museo para conocer el trabajo en oro y la historia de las culturas prehispánicas de Colombia.",
    "imagenes/museo_oro.png"
);

let lugar3 = new LugarHistorico(
    3,
    "Plaza Bolívar",
    "La Candelaria",
    "Una plaza del centro histórico rodeada de edificios representativos de Bogotá.",
    "imagenes/plaza_bolivar.png"
);

//=====================================
// MOSTRAR OBJETOS
//=====================================

console.log(lugar1);
console.log(lugar2);
console.log(lugar3);

//=====================================
// LLAMAR MÉTODOS
//=====================================

lugar1.mostrar();
lugar2.mostrar();
lugar3.mostrar();


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

let lugares = [lugar1, lugar2, lugar3];

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

                <img src="${lugar.imagen}" alt="${lugar.nombre}">

                <h3>${lugar.nombre}</h3>

                <p>${lugar.descripcion}</p>

                <button data-id="${lugar.id}">
                    Ver más
                </button>

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

            detalle.innerHTML = `

                <div class="detalleLugar">

                    <h2>${lugar.nombre}</h2>

                    <img src="${lugar.imagen}" alt="${lugar.nombre}">

                    <p>${lugar.descripcion}</p>

                    <button id="cerrarDetalle">
                        Cerrar
                    </button>

                </div>

            `;

            const cerrar =
                document.getElementById("cerrarDetalle");

            cerrar.addEventListener("click", ()=>{

                detalle.innerHTML = "";

            });

        });

    });

}


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

        if (solicitudLectura.result.length > 0) {
            // IndexedDB guarda datos, pero no conserva los métodos de las clases.
            lugares = solicitudLectura.result.map((registro) => {
                const ClaseLugar = registro.tipo === "historico"
                    ? LugarHistorico
                    : LugarTuristico;

                return new ClaseLugar(
                    registro.id,
                    registro.nombre,
                    registro.direccion,
                    registro.descripcion,
                    registro.imagen
                );
            });
        } else {
            // Guardar las instancias iniciales cuando todavía no hay registros.
            lugares.forEach((lugar) => almacen.add(lugar));
        }

        console.log(lugares);

        mostrarLugares(lugares);

    };



     console.log(lugar1);




};