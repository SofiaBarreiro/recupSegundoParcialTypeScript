namespace General{

    export class Cliente extends Persona{

        private edad: number = 0;
        private sexo: Sexo;

       
        public constructor(id: number, nombre: string, apellido: string, edad: number, sexo:Sexo) {
            super(id, nombre, apellido);

            if(!isNaN(edad)){
                this.edad = edad;

            }

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
    export enum Sexo{
        Femenino,
        Masculino


    }

    


}
