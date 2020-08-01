namespace General{


    export class logica{

        private listasPersonas: Array<Cliente> ;


        public constructor() {

           this.listasPersonas= new Array<Cliente>();

        }
        public getListPersonas(): Array<Cliente> {

            return this.listasPersonas;

        }

        public setListPersonas(persona: Cliente): void {

            this.listasPersonas.push(persona);

        }

        public borrarLista(){
            if(this.listasPersonas.length > 0){
                this.listasPersonas.splice(this.listasPersonas.length-1, 1);
            }

        }


    }
   
    

}