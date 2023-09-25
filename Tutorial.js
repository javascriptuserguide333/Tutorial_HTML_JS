/*1.- Crea una función que tome dos números y devuelva cual es el menor. Muestra por pantalla una frase indicando cual es el menor 
/ de los números y mostrando el valor del mismo*/
<script type="text/javascript">

        let numeros ={
            numeroMenos: function (num, numeroD){
                if(num < numeroD){
                    document.write('<br>' + 'El número menor es: ' + num + '<br>')
                }
                else{
                    document.write('<br>' + 'El número menor es: ' + numeroD)
                }
            }
        }
        numeros.numeroMenos(20, 10)
        numeros.numeroMenos(40, 50);
        document.write('<br>');

</script>

/*2.-Escribe una función que tome una cadena de texto como parámetro y compruebe si la cadena es mayor o igual que 20 dígitos devolverá 
/ 'Es un texto largo', si la cadena es menor o igual que 18 dígitos devolverá 'Es un texto corto' y si la cadena es igual a a 19 dígitos 
/ devolverá 'Es una cadena mediana'.*/
<script type="text/javascript">       

        function comprobarCadena(texto){
                if(texto.length >= 20){
                    document.write('Es un texto largo');
                }
                else if(texto.length <= 18){
                    document.write('Es un texto corto');
                }
                else {
                    document.write('Es un texto mediano');
                }
            }
        comprobarCadena('<br>' + 'Hola me llamo Paula Hola me llamo Paula ');
        document.write('<br>');

</script>

/*3.-Crea un script que pida tres números al usuario y los almace cada uno en su variable y contenga una función para calcular 
/ la media de los números introducidos.
Dos cosas nuevas:
        -Para recoger datos de un usuario necesitamos utilizar el comando prompt.
        -Para cambiar cualquier string a number necesitamos utilizar parseFloat.
Os dejo cómo se escribe una sentencia para pedir datos al usuario, almacenarlos en una variable y convertirlos a number.
        let num1 = parseFloat(prompt_('introduce el primer número:'));*/
<script type="text/javascript">
        let n1 = parseFloat(prompt('Introduce el primer número: '));
        let n2 = parseFloat(prompt('Introduce el segundo número: '));
        let n3 = parseFloat(prompt('Introduce el tercer número: '));
        function media (){
            document.write('<br>' + (n1 + n2 + n3)/3)
        }
        media();
        document.write('<br>');

</script>

/*4.-Crea un script en el que pidas al usuario su nombre, su primer apellido y su segundo apellido. Concatena los tres en una 
/ variable y muéstralos por pantalla.*/
<script type="text/javascript">

        let nombre = (prompt('Introduce tu nombre: '));
        let apellidoUno = (prompt('Introduce tu primer apellido: '));
        let apellidoDos = (prompt('Introduce tu segundo apellido: '));
        document.write('<br>' + nombre + ' ' + apellidoUno + ' ' + apellidoDos)
        document.write('<br>');

    </script>

/*5.-Crea un script que pidas al usuario su edad y compruebes si es mayor o menor de edad. Devuelve por pantalla si es mayor de 
/ edad o si es menor de edad.*/
        //REHACER PEDIR EDAD AL USUARIO
<script type="text/javascript">

        let edadUsuario= parseFloat (prompt('Introduce tu edad'))
            function mayorEdad(){
                if (edadUsuario < 18){
                    return `No és mayor de edad`
                }
                else{
                    return `És mayor de edad`
                }
            }
        document.write('<br>' + mayorEdad(20))
        document.write('<br>');

</script>

/*6.-Crea un script que realice operaciones matemáticas simples utilizando funciones.
/ Deben de realizar sumas, restas, multiplicaciones y divisiones. Sigue estos pasos: Crea cuatro funciones diferentes, 
/ una para cada operación matemática: suma, resta, multiplicación y división. Cada función debe tomar dos parámetros y 
/ realizar la operación correspondiente. Muestra los resultados por pantalla*/
<script type="text/javascript">

        let operacionesS = {
            suma: function (a , b){
                document.write(a + b)
            },
            resta: function (c , d){
                document.write(c - d)
            },
            multiplicacion: function(e , f){
                document.write(e * f)
            },
            division: function(g , h){
                document.write(g / h)
            },
        }
        document.write('<br>');
        operacionesS.suma(2 , 3);
        document.write('<br>');
        operacionesS.resta(3 , 1);
        document.write('<br>');
        operacionesS.multiplicacion(5 , 5);
        document.write('<br>');
        operacionesS.division(15 , 5);
        document.write('<br>');

</script>

/*7.- Crea un script que calcule el precio después de aplicar un descuento a un producto utilizando funciones anónimas. 
/ Para ello necesitarás una función que tome dos números números como parámetros en la que calcularás el precio con el descuento.
Muestra por pantalla el precio con descuento de un producto*/
<script type="text/javascript">

        let precio = function(n1, n2) {
            let precioDes = n1 * n2 / 100;
            let precioTotal = n1 - precioDes;
            document.write ('El precio con descuento es de ' + precioTotal + '<br>')
        }
        precio(50 , 20);
        document.write('<br>');

</script>

/*8.- Crea un split que calcule el cuadrado de un número utilizando la función flecha que tome un número como parámetro 
/ y calcula el cuadro en la función. Muestra por pantalla el cuadrado del número que indiques*/
<script type="text/javascript">

        let cuadrado = (a) => a ** 2;
        document.write ('El cuadrado es de ' + cuadrado(3) + '<br>')
        document.write('<br>');

</script>

/*9.- Crea un split que comprobar si un alumno puede obtener o no el carnet de conducir . El usuario debe responder a las 
/ siguiente preguntas: ¿El alumno/a ha aprobado el examen teórico? , Introduce la edad del alumno/a, ¿Cuántas practicas ha realizado el alumno/a?, ¿El alumno/a aprobado el examen práctico?, Si todas estas condiciones se cumplen la función escribirá por pantalla '¡Enhorabuena!Has conseguido el carnet de conducir', si no se cumplen 'Lo siento, no cumples con los requisitos mínimos para obtener el carnet de conducir' */
<script type="text/javascript">

        let pregunta1 = prompt('¿El alumno/a ha aprobado el examen teórico?');
        let pregunta2 = parseFloat(prompt('Introduce la edad del alumno/a'));
        let pregunta3 = parseFloat(prompt('¿Cuántas practicas ha realizado el alumno/a?'));
        let pregunta4 = prompt('¿El alumno/a aprobado el examen práctico?');
        function respuestaPantalla(){
            if(pregunta1 == 'Si' && pregunta4 == 'Si' && pregunta2 >= 18 && pregunta3 >= 10 ){
                return `¡Enhorabuena! Has conseguido el carnet de conducir`;
            }
            else{
                return `Lo siento, no cumples con los requisitos mínimos para obtener el carnet de 			conducir`;
            }
        }
        document.write(respuestaPantalla() + '<br>')
        document.write('<br>');

</script>

/*10.- Escribr un script que pida el nombre del usuario y compruebe que el usuario ha introducido un nombre, si lo ha introducido 
/ debe mostrar por pantalla 'No ha introducido ningún nombre de usuario'. Utiliza condicionales para realizar este ejercicio*/
<script type="text/javascript">

        let usuario = prompt('Introduce tu nombre');
        function usuarioPantalla(){
            if(usuario){
                return `Bienvenido ${usuario}`;
            }
            else{
                return `No ha introducido ningún nombre de usuario`;
            }
        }
        document.write(usuarioPantalla() + '<br>');
        document.write('<br>');

</script>

/*11.- Escribe un script que pida un número al usuario y compruebe si es divisible por 2,3,5 y 7, si es divisible por uno  de 
/ los cuatro números devolverá '¡Enhorabuena! Has encontrado un número divisible por 2,3,5 o 7' si no es divisible por ninguno de estos 
/ devolverá '¡Lo siento! Este número no es divisible por 2,3,5 ni 7'. Utiliza condicionales para realizarlo.*/
<script type="text/javascript">

        let numeroUsu = parseFloat(prompt('Introduce un número que pueda ser divisible por 2,3,5 o 	7'));
        function numeroCorrecto(){
            if(numeroUsu % 2 ===0 || numeroUsu % 3 ===0 || numeroUsu % 5 ===0 || numeroUsu % 7 ===0){
                return `¡Enhorabuena! Has encontrado un número divisible por 2,3,5 o 7`
            }
            else{
                return `¡Lo siento! Este número no es divisible por 2,3,5 ni 7`
            }
        }
        document.write(numeroCorrecto() + '<br>')
        document.write('<br>');

</script>

/*12.- Crea un script en el que determines si un alumno a aprobado o suspendido. Para aprobar el alumno necesitará tener una nota 
/ superior a 75 y los trabajos entregados. Utiliza condicionales.*/
<script type="text/javascript">
        function notaAlumno(nota, trabajos){
            if(nota >=75 && trabajos == true){
                return `Estas aprobado`;
            }
            else{
                return `Estas suspendido`;
            }
        }
        document.write(notaAlumno(70, true) + '<br>')
        document.write('<br>');

</script>

/*13.- Crea un script que determine el rango de una temperatura. Dado una temperatura. Dado una tempera en grados Celsius, 
/ determina en qué rango se encuentra dependiendo de:
        -Si la temperatura es menor que 0, es frío.
        -Si la temperatura está entre 0 y 30 (inclusive), es templado.
        -Si la temperatura es mayor que 30, es caliente
Utiliza condicionales para realizar este ejercicio*/
<script type="text/javascript">
        function temperatura(grados){
            if(grados < 0){
                return `Hace frío`;
            }
            else if (grados <= 30){
                return `Hace templado`;
            }
            else{
                return `Hace calor`;
            }
        }
        document.write(temperatura(35) + '<br>')
        document.write('<br>');

</script>
/*14.- Crea un split en el que se compruebe el tipo de descuento basándote en el importe total de la compra. Si la compra es 
/ mayor que 50 se aplicará un descuento de un 10% sino no se aplicará descuento. Muestra por pantalla el importe con el  descuento si 
/ la compra supero los 50 euros, y lo siento no has obtenido descuento si la compra nno supera los 50 euros.
Utiliza operadores ternarios para realizar este ejercicio.*/
<script type="text/javascript">
        const COMPRA = 40;
        const DESCUENTO = 10;
        let precioFinal = COMPRA > 50
            ?document.write('La compra tiene un 10% de descuento')
            :document.write('Lo siento no has obtenido descuento')
        document.write('<br>');

</script>

/*15.- Crea un script en el que determines el estado de una bombilla. Si la bombilla está encendida devolverá 'Bombilla encendida' 
/ si está apagada devolverá 'Bombilla apagada'. Utiliza operadores ternarios para realizar el ejercicio.*/
<script type="text/javascript">

        function bombilla(estado) {
            return estado == true
            ? `Bombilla encendida`
            : `Bombilla apagada`;
        }
        document.write('<br>' + bombilla(true) + '<br>');
        document.write('<br>');

</script>

/*16.- Crea tres objetos libro, película y canción, con tres propiedades cada uno, Propiedades de libro: título, autor, añoDePublicacion. Propiedades de película: titulo, director, añoEstreno. Propiedades de canción: título, artista, duración.
Accede a las propiedades de cada uno de los objetos mostrando por pantalla 'Mi libro favorito es ... título, autor y año','Mí película favorita es... título, director y año' y 'Mi canción favoritaa es ... título, artista y duración'.
Actualiza la información de los tres títulos y muestralos por pantalla de nuevo con las tres frases anteriores (para ello debes acceder a la propiedad y asignarle un nuevo valor). Por último, borra loa años de publicación de los tres objetos con:
delete objeto.propiedad. Utiliza la declaración literal o sencilla para realizar este ejercicio.*/
<script type="text/javascript">

        let libro ={
            nombre: 'Perdona si te llamo Cayetano',
            autor: 'Raquel Tirado Fernández',
            añoDePublicacion: 2023,
            nuevoNombre: function (nombre2){
                this.nombre = nombre2
            }
        }
        let pelicula ={
            titulo: 'Perdona si te llamo amor',
            director: 'Joaquín Llamas',
            añoEstreno: 2014,
            nuevotitulo: function (titulo2){
                this.titulo = titulo2
            }
        }
        let cancion={
            titulo: 'Coti x Coti',
            artista: 'The Tyets',
            duracion: '2:57',
            nuevotitu: function (titu2){
                this.titulo = titu2
            }
        }
        document.write('Mi libro favorito es ' + '"' + libro.nombre + '"' + ', la autora es ' + libro.autor + ' y el año de publicación es ' + libro.añoDePublicacion + '. <br>');
        document.write('Mi película favorita es ' + '"' + pelicula.titulo +  '"' + ', el director es ' + pelicula.director + ' y el año de estreno es ' + pelicula.añoEstreno + '. <br>');
        document.write('Mi cancion favorita es ' + '"' + cancion.titulo + '"' + ', el artista es ' + cancion.artista + ' y la duracion de la canción es de ' + cancion.duracion + '. <br>');
        
        libro.nuevoNombre('Si me dices que no');
        document.write('<br>' + 'Mi libro favorito es ' + '"' + libro.nombre + '"' + ', la autora es ' + libro.autor + ' y el año de publicación es ' + libro.añoDePublicacion + '. <br>');
        pelicula.nuevotitulo('Culpa mia');
        document.write('Mi película favorita es ' + '"' + pelicula.titulo + '"' + ', el director es ' + pelicula.director + ' y el año de estreno es ' + pelicula.añoEstreno + '. <br>');
        cancion.nuevotitu('Olívia')
        document.write('Mi cancion favorita es ' + '"' + cancion.titulo + '"' + ', el artista es ' + cancion.artista + ' y la duracion de la canción es de ' + cancion.duracion + '. <br>');
        document.write('<br>');
        
        delete libro.añoDePublicacion;
        document.write(libro.añoDePublicacion + '<br>' );
        delete pelicula.añoEstreno;
        document.write(pelicula.añoEstreno + '<br>');
        delete cancion.duracion;
        document.write(cancion.duracion + '<br>');
        document.write('<br>');

    </script>

/*17.- Crea un objeto cuentaBancaria con métodos (funciones) para ingresar dinero y para sacar dinero de tu cuenta. Para ello debes crear un objeto con las siguientes propiedades, propiedad 1: numeroCuenta (debe tener 20 digitos), propiedad 2: saldo, propiedad 3: ingresarDinero, propiedad 4: retirarDinero.
La propiedad 3 y la 4 serán dos métodos, la propiedad 3 ingresarDinero lo que hará será añadir dinero al saldo inicial de la cuenta. La propiedad 4 sacarDinero, lo que hará será comprobar que el saldo de la cuenta sea mayor que el dinero a sacar y si es menor no nos permitirá sacar dinero, sino es menor (es decir, quiero sacar más dinero del que tengo) no me permitirá sacar dinero. Ejecuta los dos métodos y consulta el saldo de tu cuenta en varias ocasiones para saber que está funcionando correctamente.  Utiliza la declaración literal o sencilla de objetos para realizar este ejercicio.*/
<script type="text/javascript">

        const cuentaBancaria = {
            numeroCuenta: '01234567890123456789',
            saldo: 1000,
    
        ingresarDinero: function(monto) {
            if (monto > 0) {
                this.saldo += monto;
                document.write('Has ingresado '  + monto + ' dinero a tu cuenta.' + '<br>');
                }
                else {
                document.write('El saldo a ingresar debe ser mayor que cero.' + '<br>');
                }
            },

        retirarDinero: function(monto) {
            if (monto > 0) {
                if (monto <= this.saldo) {
                    this.saldo -= monto;
                    document.write('Has retirado ' + monto + ' dinero de tu cuenta.' + '<br>');
                }
                else {
                    document.write('Saldo insuficiente para realizar esta operación.' + '<br>');
                }
                }
                else {
                    document.write('El saldo a retirar debe ser mayor que cero.' + '<br>');
                }
        },

        consultarSaldo: function() {
            document.write('Saldo actual en tu cuenta:' + this.saldo + '<br>');
        }
        };

        cuentaBancaria.consultarSaldo();
        cuentaBancaria.ingresarDinero(500);
        cuentaBancaria.retirarDinero(200);
        cuentaBancaria.consultarSaldo();
        cuentaBancaria.retirarDinero(1500);
        document.write('<br>');

    </script>

/*18.- Crea un objeto cocheDeCarreras con un método para acelerar y uno para frenar. El objeto debe tener dos propiedades, velocidad, 
/ acelerar que será un método que añada 10 km a la velocidad del coche y frenar que consultará la velocidad y la pondrá en 0. Ejecuta los 
/ métodos en varias ocasiones para comprobar que el coche está acelerando y frenando correctamente.*/
        
<script type="text/javascript">
        const cocheDeCarreras = {
            velocidad: 0,
            acelerar: function() {
                this.velocidad += 10;
                document.write('El coche ha acelerado. Velocidad actual: ' + this.velocidad + ' km/h' + '<br>');
            },
            frenar: function() {
                this.velocidad = 0;
                document.write('El coche ha frenado. Velocidad actual: ' + this.velocidad + ' km/h' + '<br>');
            }
        };
        cocheDeCarreras.acelerar();
        cocheDeCarreras.acelerar();
        cocheDeCarreras.frenar();   
        cocheDeCarreras.acelerar();
        document.write('<br>');

</script>

/*19.- Crea un objeto llamado dado con un método para lanzar el dado y obtener un número al azar. Para ello necesitarás 
/ un método que genere números aleatorios del 1 al 6. Cuidado porque tu dado no puede devolver el 0 como número aleatorio.
Ejecuta en repetidas ocasiones el método para ver que funciona correctamente.*/
<script type="text/javascript">
        var dado = {
            lanzarDado: function () {
                let numeroAleatorio = Math.floor(Math.random() * 6) + 1;
                return numeroAleatorio;
            }
        };

        for (var i = 0; i < 10; i++) {
            let resultado = dado.lanzarDado();
            document.write('Resultado del lanzamiento: ' + resultado + '<br>');
        }

    </script>

/*20.- Crea un objeto con un método para mostrar la hora actual. Mostrando por pantalla horas, minutos y segundos.*/
<script type="text/javascript">
        let reloj = {
            obtenerHoraActual: function() {
                let fechaActual = new Date();
                let horas = fechaActual.getHours().toString().padStart(2, '0');
                let minutos = fechaActual.getMinutes().toString().padStart(2, '0');
                let segundos = fechaActual.getSeconds().toString().padStart(2, '0');
                document.write('Hora actual: ' + horas + ':' + minutos + ':' + segundos);
            }
        };
        document.write('<br>');
        reloj.obtenerHoraActual();
        document.write('<br>');

</script>

/*21.- Crea un script que calcule la edad de una persona a partir de su fecha de nacimiento y la fecha actual. Para ello 
/ necesitarás pedirle al usuario su fecha de nacimiento y desglosarla creando un array (para desglosar una cadena generando un array 
/ puedes utilizar el método Split, pasándole el carácter con el que quieres separar la cadena) con el fin de almacenar el año en una 
/ variable y restarle al año actual el año de nacimiento. */
<script type="text/javascript">

        let fechaNacimiento = prompt("Por favor, ingresa tu fecha de nacimiento en formato AÑO-	MES-DIA:");
        let fechaActual = new Date();
        let partesFecha = fechaNacimiento.split("-");
        let añoNacimiento = parseInt(partesFecha[0]);
        let edad = fechaActual.getFullYear() - añoNacimiento;
        document.write('<br>' + 'Tu edad es: ' + edad + ' años' + '<br>');
        document.write('<br>');

    </script>

/*22.-Crea un script en el que se genere un número aleatorio entre 1 y 10 y que pida al usuario que adivine el número. El usuario debe tener sólo tres intentos, dale pistas sobre si el número correcto es mayor o es menor hasta que consiga adivinarlo.Te lo indico por pasos:
        -Primero genera un número aleatorio entre 1 y 10.
        -Segundo crea una función que tenga un parámetro que defina el número de intentos. Lo 	primero que va a hacer esta función es comprobar si el número de intentos es igual a 	cero mostrará en una ventana de alerta que no te quedan más intentos y mostrará el	número aleatorio generado. Dentro de este condicional deberás parar la ejecución de 	código con un return. Después lo que hará la función será pedir al usuario que 	introduzca un número para adivinar. Lo tercero que hará será comprobar si el número 	aleatorio es igual al número introducido mostrará con una ventana de alerta ‘Has 	adivinado’, si el numero aleatorio generado es mayor que el introducido por el usuario, 	mostrará que el número es mayor y restará un intento a tu parámetro intentos, (para 	restar un intento debes hacerlo de la siguiente forma 	nombreFuncion(parametroIntentos – 1), y por último si el numero aleatorio generado 	es menor mostrara en una ventana de alerta ‘Es menor’.
Es un ejercicio un poco complicado, no te agobies y sigue los pasos que te detallo.*/
<script type="text/javascript">

	let numeroAleatorio = Math.round(Math.random() * 10 + 1);
        function adivinaNumero(intentos){
            console.log(numeroAleatorio);
            if (intentos === 0) {
                alert(`Te quedan ${intentos} intentos. El número es ${numeroAleatorio}.`);
                document.write('Lo sentimos.')
                return;
            }
            let intentoUsuario = parseInt(prompt("Ingresa tu número."));
            if (intentoUsuario === numeroAleatorio){
                alert("¡Felicidades! Has adivinado el número.");
                document.write('Enhorabuena.')
            }
            else if (intentoUsuario > numeroAleatorio){
                alert("El número es menor.");
                adivinaNumero(intentos - 1);
            }
            else{
                alert("El número es mayor.");
                adivinaNumero(intentos - 1);
            }
        }
        adivinaNumero(3);

</script>

/*23.- Crea un script en el que declares un array que contenga cinco números enteros. Luego muestra por pantalla el tercer número del array.*/
<script type="text/javascript">

        let numerosEnteros = [1 , 7 , 5 , 8 , 3];
        document.write('El tercer número es: ' + numerosEnteros[2] + '<br>');
        document.write('<br>');

</script>

/*24.- Crea un array llamado frutas con tres frutas (manzana, pera y uva), después cambia el valor de la pera por plátano, 
/ finalmente muestra el array completo por consola.*/
<script type="text/javascript">

        let frutas = ['manzana', 'pera', 'uva'];
        frutas[1] = 'plátano';
        console.log(frutas);

    </script>

/*25.- Crea un array vacío llamado personajes. Luego agrega tres nombres de personajes al array usando el método push(). 
/ Finalmente, muestra el array por pantalla.*/
<script type="text/javascript">

        let personajes = [];
        personajes.push('Mario');
        personajes.push(' Luigi');
        personajes.push(' Princesa Peach');
        document.write('Los personajes son: ' + personajes + '<br>');
        document.write('<br>');
    
</script>

/*26.- Crea un array de números con al menos cinco elementos. Luego, utiliza un bucle for para recorrer el array y mostrar cada número 
/ multiplicado por 2 en pantalla.*/
<script type="text/javascript">

        var numeros = [3, 7, 12, 5, 8];
        for (var i = 0; i < numeros.length; i++) {
            var numeroMultiplicado = numeros[i] * 2;
            document.write(numeroMultiplicado + '<br>');
        }
        document.write('<br>');

</script>

/*27.- Crea un script que genere una actividad aleatoria de una lista de actividades. Para ello necesitarás un array con la lista de 
/ actividades, generar la tarea aleatoria que vas a mostrar de tu lista de tareas y mostrar por pantalla la actividad elegida.*/
<script type="text/javascript">

	let actividades = [
		'Hacer ejercicio' , 'Leer un libro' , 'Aprender algo nuevo', 'Cocinar una nueva receta' , 		'Ver una película'
		'Pasar tiempo al aire libre' , 'Resolver acertijos' , 'Hacer una caminata', 'Practicar un 		hobby' , 'Visitar un museo'
	];

        let indiceAleatorio = Math.floor(Math.random() * actividades.length);
        let actividadAleatoria = actividades[indiceAleatorio];
        document.write('Actividad elegida: ' + actividadAleatoria);
        document.write('<br>');
        
    </script>

/*28.- Crea un script en el cual puedas enseñar a tu mascota trucos, como dar la patita, pedir cuches, saltar a la orden… y a que pueda realizar estos trucos. Para ello sigue los pasos que te detallo a continuación: Primero debes crear un objeto de tu mascota que tenga las siguientes propiedades:
        -Propiedad 1. Nombre de la mascota.
        -Propiedad 2. Trucos, será un array vacío que almacenará los trucos que le enseñes a tu 	mascota.
        -Propiedad 3. Enseñar trucos, será un método que pedirá al usuario por pantalla el truco 	que le quieras enseñar a su mascota y añadirá el truco que le enseñes a tu array de 	trucos. Teniendo en cuenta que la mascota sólo podrá aprender como máximo 5 trucos.
        -Propiedad 4. Realizar trucos, será un método que consultará si la mascota sabe algún 	truco, si la mascota ha aprendido trucos,
        	devolverá un truco aleatorio de los aprendidos. Si no ha aprendido trucos, la mascota 	devolverá que no sabe hacer trucos.*/
<script type="text/javascript">
      
let mascota = {
            nombre: "Poner nombre",
            trucos: [],
            enseñarTrucos : function () {
                if(this.trucos.length>=5){
                    document.write('<br> No se puede aprender más trucos');
                    return;
                }
                else{
                    let trucoEnseñar = prompt('¿Que truco quieres enseñarle?');
                    this.trucos.push(trucoEnseñar);
                    document.write('<br> Enhorabuena ha aprendido ' + trucoEnseñar + '<br>');
                }
            },
            realizarTrucos : function (){
                if (mascota.trucos.length > 0) {
                    let trucoAleatorio = Math.floor(Math.random() * this.trucos.length);
                    let trucosAprendido = this.trucos[trucoAleatorio];
                    console.log(trucoAleatorio);
                    console.log(trucosAprendido);
                    document.write('<br>El truco aleatorio realizado es '  + trucoAprendido)
                }
            }
        }
        mascota.enseñarTrucos();
        mascota.enseñarTrucos();
        mascota.enseñarTrucos();
        mascota.enseñarTrucos();
        mascota.enseñarTrucos();
        mascota.realizarTrucos();

</script>

<!--29.- Crea una página HTML con un elemento <p> que tenga un ID único. Luego, utiliza JavaScript para cambiar el texto del párrafo-->
    <p id="miParrafo">Este es un párrafo con un ID único.</p>
    <script type="text/javascript">

        let parrafo = document.getElementById("miParrafo");
        parrafo.innerHTML = "¡El texto ha sido cambiado con JavaScript!";

    </script>

<!--30.-Crea una página HTML con 6 elementos <p>, luego utiliza JavaScript para cambiar el color de fondo de todos los párrafos.-->
    <p>Este es el párrafo 1.</p>
    <p>Este es el párrafo 2.</p>
    <p>Este es el párrafo 3.</p>
    <p>Este es el párrafo 4.</p>
    <p>Este es el párrafo 5.</p>
    <p>Este es el párrafo 6.</p>

    <script type="text/javascript">
        let parrafo = document.getElementsByTagName('p');
        for (var i = 0; i < parrafo.length; i++) {
            parrafo[i].style.backgroundColor = "red";
        }

</script>

<!--31.-Crea una página HTML con una lista <ul> vacía. Luego utiliza JavaScript para añadir un nuevo elemento <li> a la lista.-->
    <ul id="lista">
        
    </ul>

    <script type="text/javascript">

            let ulVacio = ['Elemento 1'];
            let lista = document.getElementById('lista');
            for (let i = 0; i < ulVacio.length; i++) {
                let li = document.createElement('li');
                li.textContent = ulVacio[i];
                lista.appendChild(li);
            }
    </script>

<!--32.- Crea una página HTML con varios elementos de diferentes etiquetas (<p>, <h1>, <div>) luego utiliza querySelector para seleccionar y cambiar el contenido de un elemento específico cuando pasen dos segundos.-->
    <h1>Este es un título</h1>
    <p>Este es un párrafo.</p>
    <div>Este es un div.</div>

    <script type="text/javascript">

        let elementoACambiar = document.querySelector('p');
        setTimeout(function() {
            elementoACambiar.textContent = 'El contenido ha cambiado después de 2 segundos.';
        }, 2000);

    </script>

<!--33.-Crea un HTML con una lista desordenada vacía en la que vas a añadir una lista de tareas que cogerás de un array de JavaScript. Por pasos: Crea tu HTML, con una lista desordenada vacía, añádele un id para que te sea más fácil seleccionarlo.
Después crea tu array de tareas en JavaScript, selecciona el elemento donde quieres añadir tus tareas y recorre el array para ir añadiendo las tareas una por una.-->
    <h1>Lista de tareas</h1>
    <ul id="lista-tareas"></ul>

<script type="text/javascript">
        let tareas = [
            'Hacer la compra' , 'Lavar el coche' , 'Estudiar para el examen' , 'Hacer ejercicio'
        ];
        let listaTareas = document.getElementById('lista-tareas');
        tareas.forEach(function(tarea) {
            let li = document.createElement('li');
            li.textContent = tarea;
            listaTareas.appendChild(li);
        });

</script>

<!--34.- Crea una página HTML con un botón y un área de texto. Cuando se haga clic en el botón, cambia el color de fondo del área de texto. Si hago un click cambio a otro color, si vuelvo a hacer un clic lo pongo en blanco, otro clic le devuelvo el color y así sucesivamente.-->
    <button id="cambiarColorBtn">Cambiar Color de Fondo</button>
    <textarea id="areaTexto"></textarea>

    <script type="text/javascript">

        let botonCambiarColor = document.getElementById('cambiarColorBtn');
        let areaTexto = document.getElementById('areaTexto');
        let colores = ['#FF5733', '#33FF57', '#5733FF'];
        let indiceColorActual = 0;

        function cambiarColorFondo() {
            areaTexto.style.backgroundColor = colores[indiceColorActual];
            indiceColorActual = (indiceColorActual + 1) % colores.length;
        }
        botonCambiarColor.addEventListener('click', cambiarColorFondo);
        
    </script>

<!--35.- Crea una página HTML con un botón que muestra un contador de clics. Al hacer clic en el botón, incrementa el contador y muestra el nuevo valor.-->
    <h1>Contador de Clics</h1>
    <button id="botonClics">Haz clic aquí</button>
    <p id="contador">0</p>
    
    <script type="text/javascript">

        const botonClics = document.getElementById('botonClics');
        const contador = document.getElementById('contador');

        let contadorClics = 0;

        function incrementarContador() {
            contadorClics++;
            contador.textContent = contadorClics;
        }

        botonClics.addEventListener('click', incrementarContador);
        
    </script>

<!--36.- Crea una página con un párrafo que cuando el usuario pase el ratón sobre el párrafo cambie su texto.-->
    <p id="parrafo" onmouseover="cambiarTexto()">Pasa el ratón sobre este párrafo.</p>

    <script type="text/javascript">

        function cambiarTexto() {
            let parrafo = document.getElementById('parrafo');
            parrafo.textContent = '¡El ratón está sobre el párrafo!';
        }
        
    </script>

<!--37.-Crea una página HTML con un botón y un párrafo que cuando se haga clic en el botón, el párrafo debería alternar entre
        mostrarse y ocultarse.-->
    <button id="miBoton">Mostrar/Ocultar Párrafo</button>
    <p id="miParrafo">Este es un párrafo que se puede mostrar y ocultar.</p>

    <script type="text/javascript">

        let boton = document.getElementById("miBoton");
        let parrafo = document.getElementById("miParrafo");

        boton.addEventListener("click", function() {
            if (parrafo.style.display === "none") {
                parrafo.style.display = "block";
            }
            else {
                parrafo.style.display = "none";
            }
        });
        
    </script>
