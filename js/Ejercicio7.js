/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.*/

// Clase contacto
class Contacto {
  // Propiedades privadas
  #nombre; //nobre de contacto que es clave para comprar igualdad
  #telefono; //

  // Constructor para establecer nombre y contacto al crear el objeto
  constructor(nombre, telefono) {
    this.#nombre = nombre; //guardo nombre
    this.#telefono = telefono; //guardo telefonos
  }
  //Getters para leer nombres privados
  get nombre() {
    return this.#nombre;
  }
  get telefono() {
    return this.#telefono;
  }
  //Setters para mofificar de forma controlada
  set nombre(nuevoNombre) {
    //Validacion, que tenga texto
    if (typeof nuevoNombre === "string" && nuevoNombre.trim().length > 0) {
      this.#nombre = nuevoNombre.trim();
    }
  }
  set telefono(nuevoTelefono) {
    // permitimos string para soportar formatos con guiones/espacios
    if (typeof nuevoTelefono === "string" && nuevoTelefono.trim().length > 0) {
      this.#telefono = nuevoTelefono.trim();
    }
  }
}

/*


  // Setters: permiten modificar de forma controlada

  }
  set telefono(nuevoTelefono) {
    // permitimos string para soportar formatos con guiones/espacios
    if (typeof nuevoTelefono === "string" && nuevoTelefono.trim().length > 0) {
      this.#telefono = nuevoTelefono.trim();
    }
  }

  // Método equals: define igualdad de contactos por NOMBRE (ignorando mayúsc/minúsc y espacios)
  equals(otro) {
    // normalizo ambos nombres a minúsculas y sin espacios en los bordes
    const a = this.#nombre.trim().toLowerCase();
    const b = otro.nombre.trim().toLowerCase();
    return a === b; // true si los nombres coinciden
  }
}

// =====================
// Clase Agenda
// =====================
class Agenda {
  // Propiedades privadas
  #contactos;  // array de Contacto
  #capacidad;  // número máximo de contactos

  // Constructor: recibe capacidad opcional; si no se pasa, usa 10
  constructor(capacidad = 10) {
    this.#capacidad = capacidad; // capacidad máxima
    this.#contactos = [];        // arranca vacía
  }

  // Getter para ver la capacidad (si hiciera falta)
  get capacidad() {
    return this.#capacidad;
  }

  // Método: indica si la agenda está llena (true/false)
  agendaLlena() {
    // llena si la cantidad de contactos alcanza la capacidad
    return this.#contactos.length >= this.#capacidad;
  }

  // Método: indica cuántos huecos libres quedan
  huecosLibres() {
    // diferencia entre capacidad y ocupados (nunca menor que 0)
    const libres = this.#capacidad - this.#contactos.length;
    return libres >= 0 ? libres : 0;
  }

  // Método: verifica si existe ya un contacto (por nombre)
  existeContacto(unContacto) {
    // buscamos alguno igual (misma "clave" nombre)
    const existe = this.#contactos.some((c) => c.equals(unContacto));
    return existe; // true/false
  }

  // Método: añade un contacto si hay espacio y no está repetido
  aniadirContacto(unContacto) {
    // primero verificamos si la agenda está llena
    if (this.agendaLlena()) {
      // informo por pantalla y por consola
      document.writeln(`<p>⚠️ La agenda está llena: no se puede agregar más contactos.</p>`);
      console.log("Agenda llena: no hay espacio para agregar");
      return; // corto la ejecución
    }

    // luego verificamos si ya existe uno con el mismo nombre
    if (this.existeContacto(unContacto)) {
      document.writeln(`<p>⚠️ Ya existe un contacto con ese nombre.</p>`);
      console.log("Contacto duplicado por nombre");
      return;
    }

    // si todo ok, lo agregamos al array
    this.#contactos.push(unContacto);
    document.writeln(`<p>✅ Contacto agregado: ${unContacto.nombre} (${unContacto.telefono})</p>`);
    console.log("Contacto agregado:", unContacto);
  }

  // Método: lista todos los contactos por pantalla
  listarContactos() {
    // título de la lista
    document.writeln(`<h3>📒 Listado de contactos</h3>`);

    // si no hay contactos, aviso
    if (this.#contactos.length === 0) {
      document.writeln(`<p>No hay contactos cargados.</p>`);
      console.log("Agenda vacía");
      return;
    }

    // recorro el array y muestro cada contacto
    document.writeln(`<ul>`);
    this.#contactos.forEach((c) => {
      document.writeln(`<li>${c.nombre} — ${c.telefono}</li>`);
    });
    document.writeln(`</ul>`);
  }

  // Método: buscar por nombre y mostrar su teléfono
  buscarContacto(nombreBuscado) {
    // normalizo el nombre buscado
    const clave = nombreBuscado.trim().toLowerCase();

    // encuentro el primer contacto cuyo nombre coincida
    const encontrado = this.#contactos.find(
      (c) => c.nombre.trim().toLowerCase() === clave
    );

    // muestro resultado
    if (encontrado) {
      document.writeln(`<p>🔎 ${encontrado.nombre}: ${encontrado.telefono}</p>`);
      console.log("Contacto encontrado:", encontrado);
    } else {
      document.writeln(`<p>🔎 No se encontró el contacto "${nombreBuscado}".</p>`);
      console.log("Contacto no encontrado:", nombreBuscado);
    }
  }

  // Método: eliminar un contacto por objeto Contacto (se compara por nombre)
  eliminarContacto(unContacto) {
    // obtengo el nombre normalizado del contacto a eliminar
    const clave = unContacto.nombre.trim().toLowerCase();

    // busco el índice en el array
    const idx = this.#contactos.findIndex(
      (c) => c.nombre.trim().toLowerCase() === clave
    );

    // si lo encuentro, lo elimino con splice
    if (idx !== -1) {
      const eliminado = this.#contactos.splice(idx, 1)[0];
      document.writeln(`<p>🗑️ Se eliminó: ${eliminado.nombre}</p>`);
      console.log("Contacto eliminado:", eliminado);
    } else {
      document.writeln(`<p>⚠️ No se encontró el contacto a eliminar.</p>`);
      console.log("No se eliminó: no encontrado");
    }
  }
}

// =====================
// Programa principal con Menú (prompt)
// =====================

// Creo una agenda con capacidad por defecto 10 (o podés pasar un número: new Agenda(5))
const agenda = new Agenda(); // capacidad = 10

// Función para mostrar el menú y devolver la opción elegida
function pedirOpcion() {
  // texto del menú para el usuario
  const textoMenu = `
AGENDA TELEFÓNICA
-----------------
1) Añadir contacto
2) Existe contacto
3) Listar contactos
4) Buscar contacto por nombre
5) Eliminar contacto
6) ¿Agenda llena?
7) Huecos libres
0) Salir

Elegí una opción:`;

  // retorno el valor que ingrese el usuario
  const opcion = prompt(textoMenu);
  return opcion; // string (después lo convertimos)
}

// Bucle principal del menú
let seguir = true; // bandera para cortar cuando elija "0"

while (seguir) {
  // pido una opción
  const opcionStr = pedirOpcion();
  // convierto a número (NaN si no es válido)
  const opcion = Number(opcionStr);

  // separador visual en pantalla
  document.writeln(`<hr>`);

  // según la opción, hago algo
  switch (opcion) {
    case 1: {
      // Añadir contacto
      // pido nombre y teléfono
      const nombre = prompt("Ingresá el nombre:");
      const telefono = prompt("Ingresá el teléfono:");
      // creo el objeto Contacto
      const c = new Contacto(nombre, telefono);
      // intento añadirlo a la agenda
      agenda.aniadirContacto(c);
      break;
    }
    case 2: {
      // Existe contacto
      const nombre = prompt("Ingresá el nombre a verificar:");
      // creo un contacto temporal con ese nombre (teléfono vacío)
      const c = new Contacto(nombre, "");
      // consulto si existe
      const existe = agenda.existeContacto(c);
      // muestro resultado
      document.writeln(
        `<p>¿Existe "${nombre}"? <b>${existe ? "Sí" : "No"}</b></p>`
      );
      console.log("Existe contacto:", nombre, existe);
      break;
    }
    case 3: {
      // Listar contactos
      agenda.listarContactos();
      break;
    }
    case 4: {
      // Buscar contacto por nombre
      const nombre = prompt("Ingresá el nombre a buscar:");
      agenda.buscarContacto(nombre);
      break;
    }
    case 5: {
      // Eliminar contacto
      const nombre = prompt("Ingresá el nombre a eliminar:");
      const c = new Contacto(nombre, "");
      agenda.eliminarContacto(c);
      break;
    }
    case 6: {
      // ¿Agenda llena?
      const llena = agenda.agendaLlena();
      document.writeln(
        `<p>¿Agenda llena? <b>${llena ? "Sí" : "No"}</b></p>`
      );
      console.log("Agenda llena:", llena);
      break;
    }
    case 7: {
      // Huecos libres
      const libres = agenda.huecosLibres();
      document.writeln(`<p>Huecos libres: <b>${libres}</b></p>`);
      console.log("Huecos libres:", libres);
      break;
    }
    case 0: {
      // Salir
      document.writeln(`<p>👋 Saliendo de la agenda...</p>`);
      console.log("Fin del programa");
      seguir = false; // corto el bucle
      break;
    }
    default: {
      // opción inválida
      document.writeln(`<p>Opción inválida. Intentá de nuevo.</p>`);
      console.warn("Opción inválida:", opcionStr);
      break;
    }
  }
}

*/
