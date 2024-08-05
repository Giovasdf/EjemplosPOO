function Estudiante(nombre){
    this.nombre = nombre;
}

let e1 = new Estudiante("Javiera");
let e2 = new Estudiante("Francisco");
let e3 = new Estudiante("Diana");



console.log(e1);
console.log(e2);
console.log(e3);

e1.saludar = function(){
    console.log("Hola soy "+ this.nombre);
};

e1.saludar();

e2.saludar = function(){
    console.log("Hola soy "+ this.nombre);
};

e2.saludar();