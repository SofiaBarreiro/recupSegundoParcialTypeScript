var General;
(function (General) {
    var logica = /** @class */ (function () {
        function logica() {
            this.listsAutos = new Array();
        }
        logica.prototype.getListPersonas = function () {
            return this.listsAutos;
        };
        logica.prototype.setListPersonas = function (persona) {
            this.listsAutos.push(persona);
        };
        return logica;
    }());
    General.logica = logica;
})(General || (General = {}));
