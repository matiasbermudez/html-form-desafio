const form = document.querySelector('#formulario');
console.log(form)

function main() {

    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        const evento = event.target
        const checkbox = document.querySelectorAll('input[name="dificultad"]:checked')
        const valores = Array.from(checkbox).map(cb => cb.value)
        const formulario = {
            nombre : evento.nombre.value,
            opciones: evento.opciones.value,
            estudiar: evento.estudiar.value,
            dificultad: valores
        }
        console.log(formulario)

        console.log('************************************************')
        
        const data = new FormData(evento)
        const objeto = Object.fromEntries(data.entries())
        objeto.dificultad = data.getAll('dificultad')
        console.log(objeto)
    })
}
main();