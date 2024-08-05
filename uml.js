function Persona(nombre,mascota){
    this.nombre = nombre;
    this.mascota = mascota;
}

function Mascota(nombre){
    this.nombre = nombre;
}

var m1 = new Mascota("T-Rex");
var p1 = new Persona("Giovanni",m1);

console.log(p1);
console.log(m1);
