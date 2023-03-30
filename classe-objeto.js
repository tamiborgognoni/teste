
class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm) {
        this.marca  = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularViagem(distancia, precoCombustivel) {
        return distancia * this.gastoPorKm * precoCombustivel;
    }

}

const uno = new Carro('fiat', 'prata', 1/10)


console.log(uno.calcularViagem(70,5));