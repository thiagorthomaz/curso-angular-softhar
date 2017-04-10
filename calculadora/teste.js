// File: chapter2/exercicio/teste.js
describe('Controller: MainCtrl', function() {
  // Instantiate a new version of my module before each test
  beforeEach(module('calculadoraApp'));

    var ctrl;

    // Before each unit test, instantiate a new instance
    // of the controller
    beforeEach(inject(function($controller) {
        ctrl = $controller('MainCtrl');
    }));

    it('Deve ter os operadores carregados', function() {
        expect(ctrl.operacoes).toEqual([
            {id: 1,operador: '+'},
            {id: 2,operador: '-'},
            {id: 3,operador: '/'},
            {id: 4,operador: '*'}
        ]);
    });

    it('Teste dos operadores', function() {

    var Somar = {
        valor_1 : 8,
        valor_2 : 2,
        operacao_selecionada : {id: 1,operador: '+'}
    };
    
    var Subtrair = {
        valor_1 : 8,
        valor_2 : 2,
        operacao_selecionada : {id: 2,operador: '-'}
    };

    var Dividir = {
        valor_1 : 8,
        valor_2 : 2,
        operacao_selecionada : {id: 3,operador: '/'}
    };

    var Multiplicar = {
        valor_1 : 8,
        valor_2 : 2,
        operacao_selecionada : {id: 3,operador: '*'}
    };


    expect(ctrl.calcular(Somar)).toEqual(10);
    expect(ctrl.calcular(Subtrair)).toEqual(6);
    expect(ctrl.calcular(Dividir)).toEqual(4);
    expect(ctrl.calcular(Multiplicar)).toEqual(16);

    });

    it ('Teste de divisão por zero', function() {
        var Dividir = {
            valor_1 : 8,
            valor_2 : 0,
            operacao_selecionada : {id: 3,operador: '/'}
        };

        expect(ctrl.calcular(Dividir)).toEqual("Não é possivel dividir por 0");

    });




});
