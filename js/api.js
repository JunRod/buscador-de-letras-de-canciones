import * as UI from "./interfaz.js"

export class API {
    constructor (artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        const URL = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`

        const spinner = document.createElement("div")
        spinner.className = "spinner"
        UI.divResultado.appendChild(spinner)
        fetch(URL)
            .then( respuesta => respuesta.json())
            .then( resultado => {
                const {lyrics} = resultado
                if(resultado.error) {
                    spinner.remove()
                    UI.Mensaje("No se encontró la letra", "error")
                    return
                }
                spinner.remove()
                UI.divHeading.textContent = `${this.artista} | ${this.cancion}`
                UI.divResultado.textContent = lyrics

            } )

    }

}