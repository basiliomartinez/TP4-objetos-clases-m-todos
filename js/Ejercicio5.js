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
  //Propiedades
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #anioNacimiento;

  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#sexo = sexo; //H o M
    this.#peso = peso;
    this.#altura = altura;
    this.#anioNacimiento = anioNacimiento;
    this.#dni = this.generaDNI(); //se genera automatico
  }

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

  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) this.#nombre = nuevoNombre;
  }
  set edad(nuevaEdad) {
    if (nuevaEdad > 0) this.#edad = nuevaEdad;
  }
  set sexo(nuevoSexo) {
    if (nuevoSexo === H || nuevoSexo === M) this.#sexo = nuevoSexo;
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

  //METODOS
  //Metodo DNI automatico
  generaDNI() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }

  //Mostras generacion y rasgo
  mostrasGeneracion() {
    let generacion = "";
    let rasgo = "";
    if (this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2000) {
      generacion = "Generacion Z";
      rasgo = "Irreverencia";
    } else if (this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993) {
      generacion = "Generacion Y (Milennials)";
      rasgo = "Frustracion";
    } else if (this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980) {
      generacion = "Generacion X";
      rasgo = "Obsecion por el exito";
    } else if (this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968) {
      generacion = "Generacion Baby Boom";
      rasgo = "Ambicion";
    } else if (this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948) {
      generacion = "Silent Generation";
      rasgo = "Auteridad";
    } else {
      generacion = "Fuera de rango";
      rasgo = "No definido";
    }
    document.writeln(
      `<p>${this.nombre} pertenece a la ${generacion} y su rasgo caracteristico es: ${rasgo}</p>`
    );
  }

  //Metodo si es mayor de edad
  mayorEdad() {
    if (this.#edad >= 18) {
      document.writeln(`<p>${this.#nombre} es Mayor de edad</p>`);
    } else {
      document.writeln(`<p>${this.#nombre} es Menor de edad</p>`);
    }
  }
  //Metodo mostrarDatos: devuelve toda la información del objeto.
mostrarDatos(){
    document.writeln(`<h3>Datos de la persona</h3>`)
    document.writeln(`<ul>
        <li>Nombre: ${this.#nombre}</li>
        <li>Edad: ${this.#edad}</li>
        <li>DNI: ${this.#dni}</li>
        <li>Sexo: ${this.#sexo}</li>
        <li>Peso: ${this.#altura}</li>
        <li>Año de nacimiento: ${this.#anioNacimiento}</li>
        </ul>`)
}
}

// Solo para probar
const personaPrueba = new Persona("Test", 70, "H", 0, 0, 2000);
console.log(personaPrueba.generaDNI());
document.writeln(`<p>DNI generado: ${personaPrueba.generaDNI()}</p>`);
personaPrueba.mostrasGeneracion();
personaPrueba.mayorEdad();
personaPrueba.mostrarDatos()

//nombre, edad, sexo, peso, altura, anioNacimiento
const persona1= new Persona ("Jhon", 43, 'H', 86, 1.80, 1981)
persona1.mostrarDatos()
persona1.mayorEdad()
persona1.mostrasGeneracion()