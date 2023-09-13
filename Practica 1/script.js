class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }

    calcularPerimetro() {
        return 4 * this.lado;
    }
}

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }

    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro() {
        return 3 * this.base;
    }
}


class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * (this.radio * this.radio);
    }

    calcularPerimetro() {
        return (2 * Math.PI) * this.radio;
    }
}

function calcular() {
    const figura = document.getElementById("figura").value;
    const resultadoDiv = document.getElementById("resultado");
    const cuadradoInputs = document.getElementById("cuadrado-inputs");
    const rectanguloInputs = document.getElementById("rectangulo-inputs");
    const trianguloInputs = document.getElementById("triangulo-inputs");
    const circuloInputs = document.getElementById("circulo-inputs");

    cuadradoInputs.style.display = "none";
    rectanguloInputs.style.display = "none";
    trianguloInputs.style.display = "none";
    circuloInputs.style.display = "none";
    resultadoDiv.style.display = "none"; 

    let figuraCalculo;

    switch (figura.toLowerCase()) {
        case "cuadrado":
            cuadradoInputs.style.display = "block";
            const ladoCuadrado = parseFloat(document.getElementById("lado").value);
            figuraCalculo = new Cuadrado(ladoCuadrado);
            break;

        case "rectangulo":
            rectanguloInputs.style.display = "block";
            const anchoRectangulo = parseFloat(document.getElementById("ancho").value);
            const altoRectangulo = parseFloat(document.getElementById("alto").value);
            figuraCalculo = new Rectangulo(anchoRectangulo, altoRectangulo);
            break;

        case "triangulo":
            trianguloInputs.style.display = "block";
            // const ladoTriangulo = parseFloat(document.getElementById("ladoTriangulo").value);
            const baseTriangulo = parseFloat(document.getElementById("base").value);
            const alturaTriangulo = parseFloat(document.getElementById("altura").value);
            figuraCalculo = new Triangulo(baseTriangulo, alturaTriangulo);
            break;

        case "circulo":
            circuloInputs.style.display = "block";
            const radioCirculo = parseFloat(document.getElementById("radio").value);
            figuraCalculo = new Circulo(radioCirculo);
            break;

        default:
            resultadoDiv.innerHTML = "Figura no reconocida.";
            break;
    }

    if (figuraCalculo) {
        const area = figuraCalculo.calcularArea();
        const perimetro = figuraCalculo.calcularPerimetro();
        
        const areaTexto = Number.isInteger(area) ? area.toString() : area.toFixed(2);
        const perimetroTexto = Number.isInteger(perimetro) ? perimetro.toString() : perimetro.toFixed(2);

        resultadoDiv.innerHTML = `Área: ${areaTexto}<br>Perímetro: ${perimetroTexto}`;
    }
    resultadoDiv.style.display = "block";
}

document.getElementById("figura").addEventListener("change", function() {
    const figura = this.value;
    const cuadradoInputs = document.getElementById("cuadrado-inputs");
    const rectanguloInputs = document.getElementById("rectangulo-inputs");
    const trianguloInputs = document.getElementById("triangulo-inputs");
    const circuloInputs = document.getElementById("circulo-inputs");

    cuadradoInputs.style.display = figura === "cuadrado" ? "block" : "none";
    rectanguloInputs.style.display = figura === "rectangulo" ? "block" : "none";
    trianguloInputs.style.display = figura === "triangulo" ? "block" : "none";
    circuloInputs.style.display = figura === "circulo" ? "block" : "none";
});
