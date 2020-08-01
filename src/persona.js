var General;
(function (General) {
    var Persona = /** @class */ (function () {
        function Persona(id, nombre, apellido) {
            this.id = 0;
            this.nombre = "";
            this.apellido = "";
            if (!isNaN(id)) {
                this.id = id;
            }
            this.nombre = nombre;
            this.apellido = apellido;
        }
        Persona.prototype.getID = function () {
            return this.id;
        };
        Persona.prototype.setID = function (id) {
            this.id = id;
        };
        Persona.prototype.getNombre = function () {
            return this.nombre;
        };
        Persona.prototype.setNombre = function (nombre) {
            this.nombre = nombre;
        };
        Persona.prototype.getApellido = function () {
            return this.apellido;
        };
        Persona.prototype.setApellido = function (apellido) {
            this.apellido = apellido;
        };
        return Persona;
    }());
    General.Persona = Persona;
})(General || (General = {}));
