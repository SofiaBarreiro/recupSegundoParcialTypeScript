var General;
(function (General) {
    var logica = /** @class */ (function () {
        function logica() {
            this.listasPersonas = new Array();
        }
        logica.prototype.getListPersonas = function () {
            return this.listasPersonas;
        };
        logica.prototype.setListPersonas = function (persona) {
            this.listasPersonas.push(persona);
        };
        logica.prototype.borrarLista = function () {
            if (this.listasPersonas.length > 0) {
                this.listasPersonas.splice(this.listasPersonas.length - 1, 1);
            }
        };
        return logica;
    }());
    General.logica = logica;
})(General || (General = {}));
