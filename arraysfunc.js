let frutas = ['Manzana', 'Pera', 'Naranja', 'Uva', 'Melon'] 
console.log('arreglo original',frutas)   

// Agregar un nuevo elemento
frutas.push('Naranja')
console.log(frutas)

// Eliminar el ultimo elemento
frutas.pop()
console.log(frutas)

// Eliminar el primer elemento
frutas.shift()
console.log(frutas)

// Agregar el primer elemento
frutas.unshift('Kiwi')
console.log(frutas)

// Ordenar alfabeticamente
frutas.sort()
console.log(frutas)

// Ordenar de forma descendente
frutas.reverse()
console.log(frutas)

// Encontrar la posicion de un elemento
console.log(frutas.indexOf('Mango'))

// Eliminar un elemento por su posicion
frutas.splice(1, 1)
console.log(frutas)

// Eliminar un rango de elementos
frutas.splice(1, 2)
console.log(frutas)

// Buscar un elemento
console.log(frutas.find(fruta => fruta === 'Mango'))

// Buscar un elemento por indice
console.log(frutas.findIndex(fruta => fruta === 'Mango'))

// Verificar si un elemento existe
console.log(frutas.includes('Mango'))

// Contar elementos que cumplen una condicion
console.log(frutas.filter(fruta => fruta.length > 5))

// Transformar cada elemento
console.log(frutas.map(fruta => fruta.toUpperCase()))

// Ordenar por longitud
frutas.sort((a, b) => a.length - b.length)

// Ordenar por longitud descendente
frutas.sort((a, b) => b.length - a.length)

// Ordenar por longitud descendente
frutas.sort((a, b) => b.length - a.length)
