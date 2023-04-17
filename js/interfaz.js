export const formularioBuscar = document.querySelector("#formulario-buscar"),
            divResultado = document.querySelector("#resultado"),
            divHeading = document.querySelector(".letra-resultado h2")

export function Mensaje (texto, tipo) {
    Swal.fire({
                  position: 'center',
                  icon: tipo,
                  title: texto,
                  showConfirmButton: false,
                  timer: 1500
              })
}


