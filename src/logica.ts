namespace General{


    export class logica{

        private listsAutos: Array<Persona> ;


        public constructor() {

           this.listsAutos= new Array<Persona>();

        }
        public getListPersonas(): Array<Persona> {

            return this.listsAutos;

        }

        public setListPersonas(persona: Persona): void {

            this.listsAutos.push(persona);

        }

    }
   
    

}