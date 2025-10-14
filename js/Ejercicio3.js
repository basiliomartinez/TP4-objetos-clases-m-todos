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
  // Metodo para calcular perimetro
  calcularPerimetro() {
    const perimetro = 2 * (this.#alto + this.#ancho);
    document.writeln(`<p>El perimetro es: ${perimetro}</p>`);
  }

  //Metodo para calcular area
  calcularArea() {
    const area = this.#alto * this.#ancho;
    document.writeln(`<p>El Area es: ${area}</p>`);
  }
}

//Usamos la clase
const r1 = new Rectangulo(10, 5);
const r2 = new Rectangulo(20, 10);

//Mostramos los datos iniciales
r1.mostrarDatos();
r1.calcularPerimetro();
r1.calcularArea();

r2.mostrarDatos();
r2.calcularPerimetro();
r2.calcularArea();

//Modificar propiedades utilizando los setters
r1.alto = 30;
r1.ancho = 50;

//Mostramos nuevamente los valores actualizados
r1.mostrarDatos();
r1.calcularPerimetro();
r1.calcularArea();
