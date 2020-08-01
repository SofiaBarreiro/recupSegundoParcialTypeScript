namespace General{

    export class Persona {

        private id: number = 0;
        private nombre: string = "";
        private apellido: string = "";


        public constructor(id: number, nombre: string, apellido: string) {


            if(!isNaN(id)){
                this.id = id;
            }
            this.nombre = nombre;
            this.apellido = apellido;

        }

        public getID(): number {

            return this.id;

        }

        public setID(id: number): void {

            this.id = id;

        }



        public getNombre(): string {

            return this.nombre;

        }

        public setNombre(nombre: string): void {

            this.nombre = nombre;

        }


        public getApellido(): string {

            return this.apellido;

        }

        public setApellido(apellido: string): void {

            this.apellido = apellido;

        }


    }
}
