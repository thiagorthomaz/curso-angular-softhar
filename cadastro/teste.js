// File: chapter2/exercicio/teste.js
describe('Controller: MainCtrl', function() {
  // Instantiate a new version of my module before each test
  beforeEach(module('cadastroApp'));

    var ctrl;

    // Before each unit test, instantiate a new instance
    // of the controller
    beforeEach(inject(function($controller) {
        ctrl = $controller('MainCtrl');
    }));

    it('Deve ter as UFs caregadas', function() {
        expect(ctrl.listaEstados).toEqual([
            {uf : 'PR'},
            {uf : 'SC'},
            {uf : 'RS'}
        ]);
    });

    it ('Deve ter CEP valido', function(){
       expect(ctrl.CEPValido('82.310-030')).toBeTruthy();
       expect(ctrl.CEPValido('82310030')).toBeFalsy();
    });




});
