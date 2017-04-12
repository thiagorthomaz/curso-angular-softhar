angular.module('cadastroApp', ['ngResource']).
controller('MainCtrl', [function() {
    var self = this;
    self.tab = 'cadastrar';
    self.open = function(tab) {
        self.tab = tab;
    };
}]).
controller('ListarCtrl', function(CadastroAPI) {
    var self = this;
    
    self.cadastros = CadastroAPI.listar();
    
}).
controller('ConsultarCEPCtrl', function(ConsultarCEPAPI) {
    var self = this;
    
    self.consultar = function(_cep_){
        ConsultarCEPAPI.get({cep : _cep_}, function(r) {
            self.dados = r;
            return r;
        });
    }

})
.service('ConsultarCEPAPI', function($resource) {

    return $resource("https://viacep.com.br/ws/:cep/json/", { cep: "@cep" }, {
      get: {method: 'GET', cache: false, isArray: false}
    });

    
    
})
.controller('CadastroCtrl', function(CadastroAPI) {
    var self = this;

    self.listaEstados = [
        {uf : 'PR'},
        {uf : 'SC'},
        {uf : 'RS'}
    ];

    self.submit = function() {
        console.log('User clicked submit with ', self.user);

        CadastroAPI.add(self.user);
        console.log(CadastroAPI.listar());

    };

    self.CEPValido = function(_cep_){
        var _exp = RegExp("^[0-9]{2}.[0-9]{3}-[0-9]{3}$");
        var _cep_limpo = trim(_cep_);
        
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

}).service('CadastroAPI', function(){

    _lista = new Array();

    _lista.push({nome: "Thiago", endereco: {cep:"82310030",logradouro:"Rua",numero:176}} );

    this.add = function(_user_){
        _lista.push(_user_);
    }

    this.listar = function(){
        return _lista;
    }
    

});