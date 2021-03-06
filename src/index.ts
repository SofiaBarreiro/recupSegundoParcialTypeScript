namespace General {

    window.addEventListener('load', function () {

        var encabezados = ["ID", "Nombre", "Apellido", "Edad", "Accion"];
        crearTabla("tablaPersonasM", encabezados);

        crearTabla("tablaPersonasF", encabezados);


        agregarEventosCheckBox();
        const nuevaLogica: logica = new logica();


        var form = <HTMLInputElement>document.getElementById("form");
        var botonCerrar = <HTMLInputElement>document.getElementById("cerrar");
        var botonAgregar = <HTMLInputElement>document.getElementById("agregar");
        var botonGuardar = <HTMLInputElement>document.getElementById("guardar");

        var botonEdades = <HTMLInputElement>document.getElementById("botonEdades");
        var inputEdades = <HTMLInputElement>document.getElementById("inputEdades");


        const selectPersonaForm = <HTMLInputElement>document.getElementById("selectPersonaForm");

        var botonLimpiar = <HTMLInputElement>document.getElementById("botonLimpiar");


        botonLimpiar.addEventListener("click", function () {

            nuevaLogica.borrarLista();
            eliminarFilasViejas();
            var promedios = <HTMLInputElement>document.getElementById("inputEdades");
            promedios.value = "0";

        });

        botonEdades.addEventListener("click", function () {

            var select = <HTMLInputElement>document.getElementById("selectSexo");
            var sumador = 0;
            var array = [];
            var promesa = new Promise((resolve) => {

                if (select.value == "Femenino") {

                    array = nuevaLogica.getListPersonas().filter(value => { return value.getSexo() == 0 });
                } else {
                    array = nuevaLogica.getListPersonas().filter(value => { return value.getSexo() == 1 });

                }
                resolve(array);

            });

            promesa.then((successMessage) => {


                var sumador = 0;

                array.map(value => {

                    return sumador = sumador + value.getEdad();

                });
                inputEdades.value = sumador.toString();

            });

        });



        document.getElementById("zonaTablas").hidden = false;

        agregarEventosSelect();

        var ID = <HTMLInputElement>document.getElementById("inputID");
        ID.value = (nuevaLogica.getListPersonas().length + 1).toString();

        //botonAbrirForm
        botonAgregar.addEventListener("click", function () {

            form.hidden = false;
            document.getElementById("zonaTablas").hidden = true;

            ID.value = (nuevaLogica.getListPersonas().length + 1).toString();


            // if (lista.length > 0) {

            //     ids = lista.map(lista => { 
            //         ids.push(lista.getID()); });
            //     console.log(ids);

            // } else {
            //     ID.value = "1";

            //     // idMasAlto = array.map(element => { array.push(element.getID()); });



            // }


        });



        //botonCerrarForm
        botonCerrar.addEventListener("click", function () {

            form.hidden = true;
            limpiarCamposInput();
            document.getElementById("zonaTablas").hidden = false;


        });


        botonGuardar.addEventListener("click", (e) => {

            e.preventDefault();
            form.hidden = true;

            traerDatosForm(nuevaLogica);

            eliminarFilasViejas();

            recorrerArrayYAgregarFila(nuevaLogica.getListPersonas());
            document.getElementById("zonaTablas").hidden = false;
            limpiarCamposInput();

            ID.value = (nuevaLogica.getListPersonas().length + 1).toString();



        });


    });



    function limpiarCamposInput() {

        var input = <HTMLInputElement>document.getElementById("inputID");
        input.value = "";
        input = <HTMLInputElement>document.getElementById("inputNombre");
        input.value = "";

        input = <HTMLInputElement>document.getElementById("inputApellido");
        input.value = "";

        input = <HTMLInputElement>document.getElementById("inputEdad");
        input.value = "";

    }


    function eliminarFilasViejas() {


        var tablaPersonasF = <HTMLInputElement>document.getElementById("tablaPersonasF");

        tablaPersonasF.querySelectorAll("tr").forEach((value, index) => {

            if (index != 0) {

                tablaPersonasF.removeChild(value);

            }



        });

        var tablaPersonasM = <HTMLInputElement>document.getElementById("tablaPersonasM");

        tablaPersonasM.querySelectorAll("tr").forEach((value, index) => {

            if (index != 0) {

                tablaPersonasM.removeChild(value);

            }



        });


    }


    function traerDatosForm(nuevaLogica) {

        var ID = <HTMLInputElement>document.getElementById("inputID");
        var nombre = <HTMLInputElement>document.getElementById("inputNombre");
        var Apellido = <HTMLInputElement>document.getElementById("inputApellido");
        var edad = <HTMLInputElement>document.getElementById("inputEdad");
        var select = <HTMLInputElement>document.getElementById("selectSexoForm");

        if (select.value == "Femenino") {

            const nuevaMujer: Cliente = new Cliente(parseInt(ID.value), nombre.value, Apellido.value, parseInt(edad.value), General.Sexo.Femenino);


            nuevaLogica.setListPersonas(nuevaMujer);

        } else {

            const nuevoHombre: Cliente = new Cliente(parseInt(ID.value), nombre.value, Apellido.value, parseInt(edad.value), General.Sexo.Masculino);


            nuevaLogica.setListPersonas(nuevoHombre);


        }


    }
    function agregarEventosSelect() {


        var select = <HTMLInputElement>document.getElementById("selectSexo");


        select.addEventListener("change", function () {

            var value = select.options[select.selectedIndex].value;
            var text = select.options[select.selectedIndex].text;


            if (text == "Masculino") {

                document.getElementById("tablaPersonasM").hidden = false;
                document.getElementById("tablaPersonasF").hidden = true;


                var promedios = <HTMLInputElement>document.getElementById("inputEdades");

                promedios.value = "0";
            } else {

                document.getElementById("tablaPersonasF").hidden = false;
                document.getElementById("tablaPersonasM").hidden = true;

            }

        });

    }




    function agregarEventosCheckBox() {

        var ID = document.getElementById("chID");
        var Nombre = document.getElementById("chNombre");
        var Apellido = document.getElementById("chApellido");
        var Edad = document.getElementById("chEdad");


        agregarEventoClickCheck(ID);
        agregarEventoClickCheck(Nombre);
        agregarEventoClickCheck(Apellido);
        agregarEventoClickCheck(Edad);

    }



    function crearTabla(idTabla, encabezados) {

        var tabla = document.getElementById(idTabla);


        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        tr.setAttribute('id', 'thead');

        thead.appendChild(tr);

        encabezados.forEach((value) => {

            var th = document.createElement('th');
            var text = document.createTextNode(value);
            th.appendChild(text);
            tr.appendChild(th);

        });

        tabla.appendChild(thead);
    }

    function agregarEventoClickCheck(element) {

        var tablaPersonasM = document.getElementById("tablaPersonasM");
        var tablaPersonasF = document.getElementById("tablaPersonasF");


        element.addEventListener('click', function () {
            var indextd;
            switch (element.nextSibling.textContent) {

                case "ID":
                    indextd = 0;
                    break;
                case "Nombre":
                    indextd = 1;
                    break;
                case "Apellido":
                    indextd = 2;
                    break;

            }

            if (element.checked == true) {

                tablaPersonasM.querySelectorAll("th").forEach((element, index) => {

                    if (index == indextd) {
                        element.hidden = true;
                    }
                });


                tablaPersonasM.querySelectorAll("td").forEach((element, index) => {

                    if (index == indextd) {
                        element.hidden = true;
                    }
                });

                tablaPersonasF.querySelectorAll("th").forEach((element, index) => {

                    if (index == indextd) {
                        element.hidden = true;
                    }
                });


                tablaPersonasF.querySelectorAll("td").forEach((element, index) => {

                    if (index == indextd) {
                        element.hidden = true;
                    }
                });


                //ocultar
            } else {

                tablaPersonasM.querySelectorAll("th").forEach((element, index) => {


                    if (index == indextd) {

                        element.hidden = false;
                    }


                });


                tablaPersonasM.querySelectorAll("td").forEach((element, index) => {

                    if (index == indextd) {
                        element.hidden = false;
                    }
                });

                tablaPersonasF.querySelectorAll("th").forEach((element, index) => {


                    if (index == indextd) {

                        element.hidden = false;
                    }


                });


                tablaPersonasF.querySelectorAll("td").forEach((element, index) => {

                    if (index == indextd) {
                        element.hidden = false;
                    }
                });
                //mostrar


            }


        });
    }


    function recorrerArrayYAgregarFila(lista) {

        var tablaPersonasM = document.getElementById("tablaPersonasM");
        var tablaPersonasF = document.getElementById("tablaPersonasF");

        lista.forEach((element) => {

            var tr = document.createElement('tr');


            var id = element.getID().toString();
            var nombre = element.getNombre();
            var apellido = element.getApellido();
            var edad = element.getEdad().toString();
            var sexo = element.getSexo().toString();

            var array = [id, nombre, apellido, edad];


            switch (sexo) {
                case "0":
                    array.forEach(value => {

                        var td = document.createElement('td');
                        var text = document.createTextNode(value);
                        td.appendChild(text);
                        tr.appendChild(td);


                    });

                    crearColumnaBoton(tr);


                    tablaPersonasF.appendChild(tr);
                    break;
                case "1":

                    array.forEach(value => {

                        var td = document.createElement('td');
                        var text = document.createTextNode(value);
                        td.appendChild(text);
                        tr.appendChild(td);

                    });



                    crearColumnaBoton(tr);

                    tablaPersonasM.appendChild(tr);


                    break;


                default:
                    break;
            }



        });

    }



    function crearColumnaBoton(tr) {


        var td = document.createElement('td');
        tr.appendChild(td);

        var botonEliminar = document.createElement("button");
        botonEliminar.setAttribute("type", "button");
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.setAttribute('class', 'btnEliminar');

        td.appendChild(botonEliminar);

        botonEliminar.addEventListener("click", (e) => {


            //borrarTodas las filas


            //volver a agregarlas

            // var filaBoton = e.target.parentNode.parentNode

        });


        return tr;

    }


}

