/*
Modelando clases

Cuenta bancaria - Dificultad:  🟢🟡
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

*/

/*
Clase con propiedades privadas (#titular, #saldo).
Métodos para ingresar, extraer e informar.
Uso de get / set donde corresponde.
Comentarios línea por línea.
document.writeln para mostrar los resultados en el navegador.
 */

//Clase que modela una cuenta bancaria

class Cuenta {
  #titular;
  #saldo;

  constructor(titular) {
    this.#titular = titular; //nombre del titular
    this.#saldo = 0; //saldo inicial
  }

  //Getter del titular
  get(titular) {
    return this.#titular;
  }
  //Getter del saldo
  get(saldo) {
    return this.#saldo;
  }

  //Metodo para ingresar dinero
  ingresar(cantidad) {
    if (cantidad > 0) {
      this.#saldo += cantidad; //sumo al saldo
      document.writeln(`<p>Se ingresaron $ ${cantidad}</p>`);
    } else {
      document.writeln(`<p>La cantidad debe ser positiva</p>`);
    }
  }

  //Metodo para extraer dinero
  extraer(cantidad) {
    if (cantidad > 0 && cantidad <= this.#saldo) {
      this.#saldo -= cantidad; //resto al saldo
      document.writeln(`<p>Se extrajeron $ ${cantidad}</p>`);
    } else {
      document.writeln(`No se puede extraer dinero`);
    }
  }

  //Metodo para mostrar la informacion de la cuenta
  informar() {
    document.writeln(`<h3>Estado de la cuenta</h3>`);
    document.writeln(`<ul>
    <li>Titular : ${this.#titular}</li>
    <li>Saldo : $${this.#saldo}</li>
    </ul>`);
  }
}
//Usamos la clase
//Creamos un objeto "cuenta" con titular Alex
const cuenta = new Cuenta("Alex");

//Mostrar estado inicial
console.log("Estado Inicial, cuenta");
cuenta.informar();

// Ingreso dinero
cuenta.ingresar(500);
console.log("Despues de ingresar dinero:", cuenta);

// Extraccion de dinero
cuenta.extraer(200);
console.log("Desoues de extraer dinero:", cuenta);

// Mostrar estado final
cuenta.informar();
