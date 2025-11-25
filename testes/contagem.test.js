const { contagem } = require('../funcoes/contagem'); 

describe('Algoritmo de Contagem por Intervalo', () => {
    // Teste 1: Contagem básica de números no intervalo
    test('Deve contar corretamente números entre o primeiro elemento e N', () => {
        expect(contagem([10, 15, 20, 5], 18)).toBe(2);  // o limite inferior e o limite superior contam se estiverem 
    });
    
    // Teste 2: Todos os números estão no intervalo
    test('Deve retornar a quantidade total quando todos estão no intervalo', () => {
        expect(contagem([5, 6, 7, 8, 10], 10)).toBe(5);
    });
});