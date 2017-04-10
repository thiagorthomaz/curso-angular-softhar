
angular.module('calculadoraApp', [])
.controller('MainCtrl', [function() {

    var self = this;

    self.operacoes = [
        {id: 1,operador: '+'},
        {id: 2,operador: '-'},
        {id: 3,operador: '/'},
        {id: 4,operador: '*'}
    ];


    self.calcular = function(Calc) {
        var operador = Calc.operacao_selecionada.operador;

        if (Calc.valor_2 === 0) {
            return "Não é possivel dividir por 0";
        }

        switch(operador) {
            case "+":
                self.resultado = Calc.valor_1 + Calc.valor_2;
            break;
            case "-":
                self.resultado = Calc.valor_1 - Calc.valor_2;
            break;
            case "*":
                self.resultado = Calc.valor_1 * Calc.valor_2;
            break;
            case "/":
                self.resultado = Calc.valor_1 / Calc.valor_2;
            break;
        }

        return self.resultado;
    }


  }]);