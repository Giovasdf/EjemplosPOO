function Cuadrado (lado){
    this.lado = lado;
}

Cuadrado.prototype.CalcularArea = function(){
    return this.lado * this.lado;
}

Cuadrado.prototype.calcularPerimetro = function(){
    return this.lado * 4;
}



let c1 = new Cuadrado(2);
console.log(c1.calcularArea());
console.log(c1.calcularPerimetro());

