


function obtenerNonmbre(codigo){
    return codigo.split(":")[1]
}

console.log(obtenerNonmbre("456:juan"))

//function flecha

let obtenerNonmbreFlecha = (codigo) =>  codigo.split(":")[1]


console.log(obtenerNonmbreFlecha("hffiu22:mauroElrabioso"))