class Rectangulo{
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea(){
    return this.ancho * this.alto;
}

calcularPerimetro(){
    return 2 * (this.ancho + this.alto);
}
}
const miRectangulo = new Rectangulo(5,3);
console.log("Area:", miRectangulo.calcularArea());
console.log("Perimetro:", miRectangulo.calcularPerimetro());

// Mostramos resultados en la página HTML
document.getElementById("resultado").innerHTML =
  "Área: " + miRectangulo.calcularArea() + "<br>" +
  "Perímetro: " + miRectangulo.calcularPerimetro();

