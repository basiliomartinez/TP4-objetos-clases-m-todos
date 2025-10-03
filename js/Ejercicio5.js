/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/
class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #anioNacimiento;
}

/*
class Persona {
  // Todas las propiedades privadas
  

  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#sexo = sexo; // "H" o "M"
    this.#peso = peso;
    this.#altura = altura;
    this.#anioNacimiento = anioNacimiento;
    this.#dni = this.generaDNI(); // se genera automático
  }

  // Getters
  get nombre() {
    return this.#nombre;
  }
  get edad() {
    return this.#edad;
  }
  get sexo() {
    return this.#sexo;
  }
  get peso() {
    return this.#peso;
  }
  get altura() {
    return this.#altura;
  }
  get anioNacimiento() {
    return this.#anioNacimiento;
  }
  get dni() {
    return this.#dni;
  }

  // Setters (opcionales, con validaciones simples)
  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) this.#nombre = nuevoNombre;
  }
  set edad(nuevaEdad) {
    if (nuevaEdad > 0) this.#edad = nuevaEdad;
  }
  set sexo(nuevoSexo) {
    if (nuevoSexo === "H" || nuevoSexo === "M") this.#sexo = nuevoSexo;
  }
  set peso(nuevoPeso) {
    if (nuevoPeso > 0) this.#peso = nuevoPeso;
  }
  set altura(nuevaAltura) {
    if (nuevaAltura > 0) this.#altura = nuevaAltura;
  }
  set anioNacimiento(nuevoAnio) {
    if (nuevoAnio > 1900) this.#anioNacimiento = nuevoAnio;
  }

  // Método para generar un número de 8 cifras aleatorio
  generaDNI() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }

  // Método que dice a qué generación pertenece según su año de nacimiento
  mostrarGeneracion() {
    let generacion = "";
    let rasgo = "";

    if (this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
    } else if (this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993) {
      generacion = "Generación Y (Millennials)";
      rasgo = "Frustración";
    } else if (this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
    } else if (this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambición";
    } else if (this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948) {
      generacion = "Silent Generation";
      rasgo = "Austeridad";
    } else {
      generacion = "Fuera de rango";
      rasgo = "No definido";
    }

    document.writeln(
      `<p>${this.#nombre} pertenece a la <b>${generacion}</b> y su rasgo característico es: <b>${rasgo}</b>.</p>`
    );
  }

  // Método que indica si la persona es mayor de edad
  esMayorDeEdad() {
    if (this.#edad >= 18) {
      document.writeln(`<p>${this.#nombre} es mayor de edad.</p>`);
    } else {
      document.writeln(`<p>${this.#nombre} es menor de edad.</p>`);
    }
  }

  // Método que imprime todas las propiedades de la persona
  mostrarDatos() {
    document.writeln(`<h3>Datos de la persona</h3>`);
    document.writeln(`<ul>
      <li>Nombre: ${this.#nombre}</li>
      <li>Edad: ${this.#edad}</li>
      <li>DNI: ${this.#dni}</li>
      <li>Sexo: ${this.#sexo}</li>
      <li>Peso: ${this.#peso} kg</li>
      <li>Altura: ${this.#altura} m</li>
      <li>Año de nacimiento: ${this.#anioNacimiento}</li>
    </ul>`);
  }
}

// --- Probar la clase ---
const persona1 = new Persona("Marcos", 25, "H", 70, 1.75, 1999);
persona1.mostrarDatos();
persona1.esMayorDeEdad();
persona1.mostrarGeneracion();


*/
