/*
var nombre=""
var nombreUsuario= prompt("Digite su nombre por favor");

 if(nombre= nombreUsuario){
    alert("Bienvenido "+ nombre);
}
else{
    alert("Digite su usuario por favor")
}
*/

/*1
let edad_1= parseInt( prompt("Digite su edad por favor"));
let edad_2= parseInt(prompt("Digite su edad por favor"));


if(edad_1 > edad_2){
    document.write("La edad mayor es de: "+ edad_1)
    
    document.write("La edad menor es de: "+ edad_2)
 }
 
else if(edad_1 < edad_2){
    document.write("La edad mayor es "+ edad_2)
    document.write("La edad menor es "+ edad_1)
}
*/


/* 2
let contador= 0;
let limite= parseInt(prompt("Digite la cantidad de estudiantes"));
let prom= 0;
let acum= 0;

while( contador <= limite){
   let notasEstudiantes= parseInt(prompt("Digite las notas de los estudiantes: ")) 

  console.log(notasEstudiantes + "<br>");

   acum= (notasEstudiantes + acum);
console.log("El total d notas es de: "+ acum);
   
prom= acum/contador;
console.log("El promedio de notas es de: "+ acum);
contador++
}
*/

/* 3
var respuesta= "dom"
var acierto= false;
let contador= 0;

while(contador < 2 && acierto=== false){
    let respuestaUsuario= prompt("Digite la clave secreta ");
    
    if(respuestaUsuariodom=== respuesta){
        acierto= true;
        alert("Bienvenidos al nuevo club de los magios");
    }

    contador++;
     
    if(acierto== false){
        alert("No puedes ingresar, no eres un miembro")
    }

}
*/


/* 4
alert("Para ver la funcion de Batman es importante saber la siguente condicion")
let datosVacuna= parseInt(prompt("¿Estas vacunado? marca 1 o 2: \n 1. Sí \n 2. No"));
 
switch(datosVacuna){
    case 1:
        alert("Bienvenido")
        break;
        
    case 2:
        alert("Por favor ve a vacunarte")
        break;

    default:
        alert("Si no legiste ninguna entonces no puedes entrar al cine")
         
}
*/

/* No supe como resolverlo
 let diaNacimiento= prompt("Digite su día de nacimiento");
 let mesNAcimiento= prompt("Digite su mes de nacimiento");
 let anioNacimiento= parseInt(prompt("Digite su año de nacimiento"));
let contador= 2022;

while( contador != anioNacimiento ){
    document.write(diaNacimiento + mesNAcimiento + anioNacimiento + " - " + anioActual + "=" + (contador-anioNacimiento));

    contador++;
}
*/


/* 6
let aviso= alert("Selecciona cual quier pais de la lista")
let paises= parseInt(prompt(""));

switch(paises){
    case 1:
        alert("La capital de Colombia es Bogotá")
        break;
     
     case 2:
        alert("La capital de Argentina es Buenos Aires")
        break;

      case 3:
        alert("La capital de Perú es Lima")
        break;

      case 4:
        alert("La capital de Japón es Tokio")
        break;

        case 5:
          alert("La capital de Alemania es Berlin")
          break;

 
}
*/

/* 7
let contador= 0;
let tabla= 5;

while( contador <= 20){
    
    document.write(tabla + " x " + contador + " = " + (tabla * contador) + "<br>");
    
    contador++;
}
*/


/* 8
let traductor=alert("Elija por favor la palabra que quiere traducir")
let palabras= parseInt(prompt("\n 1.Correr \n 2.Dormir \n 3.Hablar \n 4.Dar \n 5.Pensar "));

switch(palabras){
case 1:
    document.write("Correr es: Run")
    break;

    case 2:
        document.write("Dormir es: Sleep")
        break;

        case 3:
            document.write("Hablar es: Speak")
            break;

            case 4:
                document.write("Dar es: Give")
                break;
                
                case 5:
                    document.write("Pensar es: Think")
                    break;
default:
    document.write("No hay mas palabras")
    break;
 }
 */