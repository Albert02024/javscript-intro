function saludar(){
    console.log('Hola a todos!!!')
}

const despedir = function(){
    console.log('Buenas noches a todos!!!')
} 

const despertar = () => {   
     console.log('Buenos dias hora de despertar')
}   



//saludar() 
//despedir() 
//despertar()
const bienvenido =(nombre, curso)=>{
    console.log(`Hola ${nombre}, bienvenido  al curso de ${curso}`)
}

bienvenido('ALIS', 'Programacion') //Funcion con parametros     

// Parametros por defecto
const multiplicar =(a, b = 2) => {
    console.log('El resultado de multiplicar es:', a*b)
} 

multiplicar(5, 20) 

/*FUNCION QUE DETERMINE POR MEDIO DE UN PARAMETRO SI ESTOY APROBADO O REPROBADO NOTA MINIMA ES : 7*/
