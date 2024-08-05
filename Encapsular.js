function Estudiante(nombrePorParametro){
    this.nombre = nombrePorParametro;
}

var estudiante1 = new Estudiante("Juan");
console.log(estudiante1.nombre);