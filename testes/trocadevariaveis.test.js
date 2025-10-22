const {trocadevariaveis} = require('../funcoes/trocadevariaveis'); 

describe('Algoritmo de Troca de Variáveis', () => {
    // Teste 1: Troca básica de inteiros
    test('Deve trocar dois números inteiros corretamente', () => {
        expect(trocadevariaveis(5, 10)).toEqual({ a: 10, b: 5 });
    });
    
    // Teste 2: Troca de strings (garantindo que funciona com outros tipos)
    test('Deve trocar strings corretamente', () => {
        expect(trocadevariaveis('Primeiro', 'Segundo')).toEqual({ a: 'Segundo', b: 'Primeiro' });
    });
});