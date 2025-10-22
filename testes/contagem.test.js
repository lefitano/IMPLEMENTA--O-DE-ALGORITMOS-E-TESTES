const {contagem} = require('../funcoes/contagem'); 

describe('Algoritmo de Contagem de Frequência', () => {
    // Teste 1: Contagem de números
    test('Deve contar a frequência correta de números', () => {
        const arr = [1, 2, 2, 3, 1, 1];
        // Note que as chaves em JS são sempre strings
        expect(contagem(arr)).toEqual({ '1': 3, '2': 2, '3': 1 }); 
    });
    
    // Teste 2: Contagem com array vazio
    test('Deve retornar um objeto vazio para um array vazio', () => {
        expect(contagem([])).toEqual({});
    });
});