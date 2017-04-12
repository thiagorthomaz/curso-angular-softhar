// File: chapter2/exercicio/teste.js
describe('Controller: CadastroCtrl', function() {
    // Instantiate a new version of my module before each test
    beforeEach(module('cadastroApp'));

    var ctrl;

    var cep = "80010010";

    // Before each unit test, instantiate a new instance
    // of the controller
    beforeEach(inject(function($controller) {
        ctrl = $controller('CadastroCtrl');
    }));

    it('Deve ter as UFs caregadas', function() {
        expect(ctrl.listaEstados).toEqual([
            {uf : 'PR'},
            {uf : 'SC'},
            {uf : 'RS'}
        ]);
    });

    it ('Deve ter CEP valido', function(){
        expect(ctrl.CEPValido('80.010-010')).toBeTruthy();
        expect(ctrl.CEPValido('80010010')).toBeFalsy();
    });

});


describe('Controller: ConsultarCEPCtrl', function() {
    // Instantiate a new version of my module before each test
    beforeEach(module('cadastroApp'));

    it('returns 1', function(done) {

        var $injector = angular.injector([ 'cadastroApp' ]);
        var myService = $injector.get( 'ConsultarCEPAPI' );
        var $timeout = $injector.get('$timeout');
        var a = myService.get({cep : '80010010'});

        $timeout(function() {
            expect( a.cep ).toEqual('80010-010');
            done();
        }, 500);

    });

});
