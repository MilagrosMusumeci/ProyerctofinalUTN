const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const asunto= document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')
const telefono = document.querySelector('#telefono')
const email = document.querySelector('#email')
const enviar = document.querySelector('#enviar')

let addDatos = () =>{
    
        console.log(nombre.value);
        console.log(apellido.value);
        console.log(asunto.value);
        console.log(mensaje.value);
        console.log(telefono.value);
        console.log(email.value);
        console.log(asunto.value);
        console.log(enviar.value);
        
    
}

enviar.addEventListener('click', addDatos)