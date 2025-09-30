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

class cuenta {
  #titular;
  #saldo;

  constructor(titular) {
    this.titular = titular; //nombre del titular
    this.saldo = 0; //saldo inicial
  }

  //Getter del titular
  get(titular) {
    return this.#titular;
  }
  //Getter del saldo
  get(saldo) {
    return this.#saldo;
  }
}
