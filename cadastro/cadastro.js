angular.module('cadastroApp', [])
.controller('MainCtrl', [function() {
    var self = this;

    self.listaEstados = [
        {uf : 'PR'},
        {uf : 'SC'},
        {uf : 'RS'}
    ];

    self.submit = function() {
        console.log('User clicked submit with ', self.user);
    };

    self.CEPValido = function(_cep_){
        var _exp = RegExp("^[0-9]{2}.[0-9]{3}-[0-9]{3}$");
        var _cep_limpo = trim(_cep_);
        
        console.log(_cep_limpo);
        console.log(_exp.test(_cep_limpo));

        if ((_cep_limpo.length > 0) && _exp.test(_cep_limpo) ) {
            return true;
        } else {
            return false;
        }

    }

    function trim(strTexto){
        // Substitúi os espaços vazios no inicio e no fim da string por vazio.
        return strTexto.replace(/^s+|s+$/g, '');
    }

}]);