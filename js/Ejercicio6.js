/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class Libro {
  //Propiedades privadas (encapsuladas)
  #isbn;
  #titulo;
  #autor;
  #paginas;
  constructor(isbn, titulo, autor, paginas) {
    //asigno valores recibidos a las propiedades privadas
    this.#isbn = isbn;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#paginas = paginas;
  }
  //Getters para que me devuelvan los valores de la propiedad privada
  get isbn() {
    return this.#isbn;
  }
  get titulo() {
    return this.#titulo;
  }
  get autor() {
    return this.#autor;
  }
  get paginas() {
    return this.#paginas;
  }

  //Setter para cambiar el valor de forma controlada
  set isbn(nuevoIsbn) {
    //validacion que exista algun texto
    if (typeof nuevoIsbn === "string" && nuevoIsbn.trim().length > 0) {
      this.#isbn = nuevoIsbn.trim();
    }
  }
  set titulo(nuevoTitulo) {
    if (typeof nuevoTitulo === "string" && nuevoTitulo.trim().length > 0) {
      this.#isbn = nuevoTitulo.trim();
    }
  }
  set autor(nuevoAutor) {
    if (typeof nuevoAutor === "string" && nuevoAutor.trim().length > 0) {
      this.#isbn = nuevoAutor.trim();
    }
  }
  set paginas(nuevasPaginas) {
    //validacion que exista algun numero
    if (typeof nuevasPaginas === "number" && nuevasPaginas > 0) {
      this.#paginas = Math.floor(nuevasPaginas); //entero para mayor prolijidad
    }
  }
  //Metodos
  mostrarLibro() {
    document.writeln(
      `<p>El libro ${this.#titulo} con ISBN ${this.#isbn} creado por el autor ${
        this.#autor
      } tiene ${this.#paginas} paginas</p>`
    );
  }

  //Metodo para comparar paginas
  compararPagina(otroLibro) {
    //Comparo el numero de paginas del libro actual (this) con otroLibro
    if (this.#paginas > otroLibro.paginas) {
      document.writeln(
        `<p>${this.#titulo} tiene mas paginas (${this.#paginas}) que ${
          otroLibro.titulo
        } (${otroLibro.paginas})</p>`
      );
    } else if (this.#paginas < otroLibro.paginas) {
      document.writeln(
        `<p>${otroLibro.titulo} tiene mas paginas (${otroLibro.paginas}) que ${
          this.#titulo
        } (${this.#paginas})</p>`
      );
    } else {
      document.writeln(
        `<p>Ambos libros ${this.#titulo} y ${
          otroLibro.titulo
        } tienen la misma cantidad de paginas ${this.#paginas}</p>`
      );
    }
  }
}

//Creo un objeto de prueba

const Libro1 = new Libro(
  "978-978",
  "El principito",
  "Antoine de Saint-Exupery",
  96
);
console.log(Libro1);
const Libro2 = new Libro("664-094", "Rayuela", "Julio Cortazar", 756);

//Utilizo los metodos finales
Libro1.mostrarLibro();
Libro2.mostrarLibro();
Libro1.compararPagina(Libro2)

