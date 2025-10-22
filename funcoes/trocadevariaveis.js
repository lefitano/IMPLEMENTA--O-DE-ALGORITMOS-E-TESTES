function trocadevariaveis(a, b) {
    console.log(`Valores iniciais: A=${a}, B=${b}`);
    
    let aux;
    
    aux = a;
    a = b;
    b = aux;
    
    console.log(`Valores finais: A=${a}, B=${b}`);
    return { a: a, b: b }; 
}
module.exports = {trocadevariaveis};
