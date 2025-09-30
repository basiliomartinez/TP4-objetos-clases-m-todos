/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
Producto - Dificultad:  🟢🟡
*/

//Propiedades privadas (#alto, #ancho).
//get y set para modificarlas.
//Métodos para mostrar datos, calcular perímetro y área.
//document.writeln para que se vea en el navegador, más console.log para verificar.

class Rectangulo {
  // Propiedades privadas
  #alto;
  #ancho;

  //Constructor
  constructor(alto, ancho) {
    this.#alto = alto;
    this.#ancho = ancho;
  }

  //Getters
  get alto() {
    return this.#alto;
  }
  get ancho() {
    return this.#ancho;
  }

  // Setters
  set alto(nuevoAlto) {
    if (nuevoAlto > 0) {
      this.#alto = nuevoAlto;
    }
  }
  set ancho(nuevoAncho) {
    if (nuevoAncho > 0) {
      this.#ancho = nuevoAncho;
    }
  }

  //Metodo para mostrar propiedades

  mostrarDatos() {
    document.writeln(`<h3>Rectangulo</h3>`);
    document.writeln(`<ul>
        <li>Alto: ${this.#alto}</li>
        <li>Ancho: ${this.#ancho}</li>
        </ul>`);
  }
}

//Usamos la clase
const r1 = new Rectangulo(10, 5);

//Mostramos los datos iniciales
r1.mostrarDatos();

/*
class Rectangulo {
  // --- Propiedades privadas ---
  #alto;
  #ancho;

  // Constructor
  constructor(alto, ancho) {
    this.#alto = alto;
    this.#ancho = ancho;
  }

  // --- Getters ---
  get alto() {
    return this.#alto;
  }

  get ancho() {
    return this.#ancho;
  }

  // --- Setters ---
  set alto(nuevoAlto) {
    if (nuevoAlto > 0) {
      this.#alto = nuevoAlto;
    }
  }

  set ancho(nuevoAncho) {
    if (nuevoAncho > 0) {
      this.#ancho = nuevoAncho;
    }
  }

  // Método para mostrar propiedades
  mostrarDatos() {
    console.log(`Rectángulo → Alto: ${this.#alto}, Ancho: ${this.#ancho}`);
    document.writeln(`<h3>Rectángulo</h3>`);
    document.writeln(`<ul>
      <li>Alto: ${this.#alto}</li>
      <li>Ancho: ${this.#ancho}</li>
    </ul>`);
  }

  // Método para calcular el perímetro
  calcularPerimetro() {
    const perimetro = 2 * (this.#alto + this.#ancho);
    console.log(`Perímetro: ${perimetro}`);
    document.writeln(`<p>Perímetro: ${perimetro}</p>`);
  }

  // Método para calcular el área
  calcularArea() {
    const area = this.#alto * this.#ancho;
    console.log(`Área: ${area}`);
    document.writeln(`<p>Área: ${area}</p>`);
  }
}

// --- Usar la clase ---
// Crear dos objetos rectángulo
const r1 = new Rectangulo(10, 5);
const r2 = new Rectangulo(7, 3);

// Mostrar datos iniciales
r1.mostrarDatos();
r1.calcularPerimetro();
r1.calcularArea();

r2.mostrarDatos();
r2.calcularPerimetro();
r2.calcularArea();

// Modificar propiedades usando los setters
r1.alto = 15;
r1.ancho = 8;

// Mostrar nuevamente con los valores actualizados
r1.mostrarDatos();
r1.calcularPerimetro();
r1.calcularArea();

*/
