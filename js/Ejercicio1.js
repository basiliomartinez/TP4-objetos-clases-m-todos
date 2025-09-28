/*
Crear objetos
Dificultad:  🟢
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó

*/
const auto = {
  color: "blanco",
  marca: "Toyota",
  modelo: "Corolla",
  encendido: false,

  // Método para encender el auto
  encender: function () {
    this.encendido = true;
    console.log(this);
    document.writeln("<p>El auto se encendio</p>");
  },

  apagar: function () {
    this.encendido = false;
    console.log(this);
    document.writeln("<p>El auto se apago</p>");
  },
};

// Mostrar el estado Inicial
console.log("Estado Inicial:", auto);

//Muestro propiedades antes de llamar a los metodos
document.writeln("<h2>Auto</h2>");
document.writeln("<ul>");
document.writeln(`<li>Color: ${auto.color}</li>`);
document.writeln(`<li>Marca: ${auto.marca}</li>`);
document.writeln(`<li>Modelo: ${auto.modelo}</li>`);
document.writeln("<br></l>");

//Llamo a los metodos
auto.encender();
auto.apagar();
