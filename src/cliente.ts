namespace General{

    export class Cliente extends Persona{

        private edad: number;
        private sexo: Sexo;



        public constructor(id: number, nombre: string, apellido: string, edad: number, sexo:Sexo) {
            super(id, nombre, apellido);

            this.edad = edad;
            this.sexo = sexo;


        }

        public getEdad(): number {

            return this.edad;

        }

        public setEdad(edad: number): void {

            this.edad = edad;

        }


        public getSexo(): Sexo {

            return this.sexo;

        }

        public setSexo(sexo: Sexo): void {

            this.sexo = sexo;

        }

    }
    enum Sexo{
        Mujer,
        Hombre


    }


}