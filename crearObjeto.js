let carro = new Object();

carro.marca = "Toyota";
carro.cantRuedas = 4;
carro.combustible = "Bencina";
carro.fecha = 2020;

console.log(carro);

let rectangulo = new Object();
rectangulo.ancho = 10;
rectangulo.largo = 5;

console.log(rectangulo);
console.log(rectangulo.ancho);


rectangulo.ancho = 15;
console.log(rectangulo.ancho);

//Ejercicio Vaca Objeto+Metodo

let vaca = new Object();
vaca.sonido = function(){
    console.log("MUUUUUUU");
};

vaca.sonido();

//Otra Notación

perro = {
    hablar: function(){
        console.log("Guau Guau");
    }
}
perro.hablar();


//Operador This
let persona = new Object();
persona.nombre = "Camila";
persona.edad = 20;

persona.saludar = function(){
    console.log("Hola soy "+ this.nombre);
};

persona.DecirEdad = function(){
    console.log("Tengo "+ this.edad + " Años");
};

persona.saludar();
persona.DecirEdad();


let lapiz = new Object();

lapiz.forma = "rectangular";