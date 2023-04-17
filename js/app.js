import * as UI from "./interfaz.js"
import {API} from "./api.js"

UI.formularioBuscar.addEventListener("submit", validarForm)

function validarForm(e) {
    e.preventDefault()

    const artista = document.querySelector("#artista").value
    const cancion = document.querySelector("#cancion").value

    if(artista === "" || cancion === "" ) {
        UI.Mensaje("Debe rellenar ambos campos", "error")
        return
    }

    //consultar API
    const consultarAPI = new API(artista, cancion )
    consultarAPI.consultarAPI()

}

