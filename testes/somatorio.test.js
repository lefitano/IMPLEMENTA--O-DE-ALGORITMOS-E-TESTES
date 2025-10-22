const { somatorio } = require('../funcoes/somatorio'); 

describe('Algoritmo de Somatório', () => {
    // Teste 1: Soma de números positivos
    test('Deve somar corretamente números inteiros positivos (1+2+3+4=10)', () => {
        expect(somatorio([1, 2, 3, 4])).toBe(10);
    });
    
    // Teste 2: Somatório de array vazio (deve ser 0)
    test('Deve retornar 0 para um array vazio', () => {
        expect(somatorio([])).toBe(0);
    });
});