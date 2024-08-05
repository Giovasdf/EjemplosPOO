function Vehiculos(marca){
  var _marca = marca;
  Object.defineProperty(this, "_getMarca", {
    get: function () {
      return _marca;
    },
  });
    Object.defineProperty(this, "_setMarca", {
      set: function (marca) {
        _marca = marca;
      },
    });
}

Vehiculos.prototype.getMarca = function(){
    return this._getMarca;
};

Vehiculos.prototype.setMarca = function(marca){
    this._setMarca = marca;
};

let v1 = new Vehiculos("Ford");
console.log(v1.getMarca());

v1.setMarca("Kia");
console.log(v1.getMarca());
