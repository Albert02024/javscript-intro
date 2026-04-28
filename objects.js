let estudiante ={
    nombre: 'Hernan ', 
    apellido:'Franco',
    edad: 20,
    habilidades: ['Redes', 'Programacion', 'Bases de datos']
}

console.log(estudiante.nombre)
console.log(estudiante.apellido)
console.log(estudiante.edad)
console.log(estudiante.habilidades) 

// Destucturing
const {nombre, edad} = estudiante
console.log(nombre, edad)

let calificacion = [
    {nombre: 'Mateo', nota:10},
    {nombre: 'Maria', nota:9},
    {nombre: 'Juan', nota:8},
    {nombre: 'Pedro', nota:7},
    {nombre: 'Ana', nota:6}
]



console.log('La cantidad de calificaciones es', calificacion.length)


