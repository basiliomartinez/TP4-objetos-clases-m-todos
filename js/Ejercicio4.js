/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

Generaciones - Dificultad:  🟢🟡🔴

 */

//Propiedades: codigo, nombre, precio
//Metodo: Imprime datos

class Producto {
  //Propiedades privadas
  #codigo;
  #nombre;
  #precio;

  //Hacemos el constructor
  constructor(codigo, nombre, precio) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#precio = precio;
  }

  //Getters
  get codigo() {
    return this.#codigo;
  }
  get nombre() {
    return this.#nombre;
  }
  get precio() {
    return this.#precio;
  }

  //Setters
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }

  //Metodo para imprimir datos
  imprimirDatos() {
    document.writeln(`<h3>Producto</h3>`);
    document.writeln(`<ul>
        <li>Codigo: ${this.#codigo}</li>
        <li>Nombre: ${this.#nombre}</li>
        <li>Precio: ${this.#precio}</li>
        </ul>`);
  }
}

//Crear 3 Instancias de Producto
const p1 = new Producto(101, "Mouse Gamer", 3000);
const p2 = new Producto(102, "Safari play", 5000);
const p3 = new Producto(103, "War game", 7000);

//Guardo en el array
const productos = [p1, p2, p3];

//Mostrar los datos de todos los productos
document.writeln("<h2>Listado de productos</h2>");
productos.forEach((producto) => {
  producto.imprimeDatos();
});
