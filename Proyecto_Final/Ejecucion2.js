Tiempolvl2 = 55 //VARIBLE DE INICIO TIEMPO
Puntajelvl2 = 0 //VARIABLE DE INICIO PUNTOS





//CONTENEDOR QUE CONTEIENE TOO EL JUEGO
//DE POR SI ESTA FUNCION NO SE EJECUTA HASTA QUE SE LA LLAMA, MAS ADELANTE LA LLAMAREMOS
//PARA QUE EL JUEGO INICIE UNA VEZ SE PRESIONE JUGAR
function JUEGOlvl2(){

    function Tiempo_Disminurlvl2(){ //FUNCION QUE REDUCE EL TIEMPO Y RESETEAL EL RESULTADO UNA VEZ LLEGUE A 0
        Tiempolvl2--;
        document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2
        if(Tiempolvl2 == 0){
            Tiempolvl2 = 55
            Puntajelvl2 = 0
            alert("Lo lamento perdiste")} }

    
        Restar_Tiempolvl2 = setInterval(Tiempo_Disminurlvl2, 1000)

        //AÑADIMOS LA FUNCION AUMENTAR PUNTOS AL PASAR EL CURSOR SOBRE LOS METIORITOS
        document.getElementById("Meteioritolvl2").addEventListener('mouseover', Aumentar_Puntoslvl2)
        document.getElementById("Meteiorito2lvl2").addEventListener('mouseover', Aumentar_Puntoslvl2)
        document.getElementById("Meteiorito3lvl2").addEventListener('mouseover', Aumentar_Puntoslvl2)


        //FUNCION QUE UNICAMENTE AUMENTA PUNTOS Y RESETEA LAS VARIABLES AL LLEGAR A CIERTO LIMITE
        function Aumentar_Puntoslvl2(){
            Puntajelvl2++;
            document.getElementById("Puntajelvl2").innerHTML = Puntajelvl2 + " / 38"
            if(Puntajelvl2 == 1){
                Puntajelvl2 = 0 
                Tiempolvl2 = 55
                document.getElementById("NEXT").addEventListener('click', Habilitar_Siguienten_LVL)
                document.getElementById("Fondo_Undertale").pause()
                document.getElementById("Triunfo").play()
                function Habilitar_Siguienten_LVL(){
                document.getElementById("NIVEL_01").style.display = "none"
                document.getElementById("NIVEL_02").style.display = "none"
                document.getElementById("NIVEL3").style.display = "block"}
                
                clearInterval(Reanudar_trayectorialvl2)
                clearInterval(Reanudar_trayectoria2lvl2)
                clearInterval(Reanudar_trayectoria3lvl2) 
                clearInterval(Restar_Tiempolvl2)               
                document.getElementById("Triunfo").play()
                document.getElementById("GanastePantallaLvL2").style.display = "flex"
                Swal.fire({
                    title : 'Felicitaciones',
                    html: '<b class="Aumentar puntos">Sabia que lo lograrias, nos savlaste de la destruccion, ahora que esperas para seguir jugando</b>',
                    icon: 'sucess',
                    width: '50%',
                    height: '80%',
                    timer: 5000,
                    
                    timerProgressbar: true,
                    /*Funcion de cerrar la alerta*/
                    allowOutsideClick: true,
                    allowEscapeKey: false,
                    allowEnterkey: false,
                    stopKeydownPropagation: false,
                    });

                function Ganaste_Pantallalvl2(){

                    document.getElementById("Meteioritolvl2").style.left = "-70%"
                    document.getElementById("Meteioritolvl2").style.transition = "0s"

                    document.getElementById("Meteiorito2lvl2").style.left = "-70%"
                    document.getElementById("Meteiorito2lvl2").style.transition = "0s"
                    
                    document.getElementById("Meteiorito3lvl2").style.left = "-70%"
                    document.getElementById("Meteiorito3lvl2").style.transition = "0s"}

                Desbloquear_Pantallalvl2  =  setInterval(Ganaste_Pantallalvl2, 1)

                document.getElementById("Volver_a_intentarlvl2").addEventListener('click', Intentarlo_de_nuevolvl2) 

                function Intentarlo_de_nuevolvl2(){
                    clearInterval(Desbloquear_Pantallalvl2)
                    document.getElementById("Meteioritolvl2").style.transition = "2s"
                    document.getElementById("Meteiorito2lvl2").style.transition = "2s"
                    document.getElementById("Meteiorito3lvl2").style.transition = "2s"
                    document.getElementById("GanastePantallaLvL2").style.display = "none"

                    function Tiempo_Disminurlvl2(){ 
                        Tiempolvl2--;
                        document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2
                        if(Tiempolvl2 == 0){
                            Tiempolvl2 = 55
                            Puntajelvl2 = 0
                            alert("Lo lamento perdiste")} }
                
                    
                        Restar_Tiempolvl2 = setInterval(Tiempo_Disminurlvl2, 1000)


                    function Metiorito_Direccionlvl2(){
                        Distancia1lvl2 = 80
                        Altura1lvl2 = Math.round(Math.random()* 450)
            
                        document.getElementById("Meteioritolvl2").style.left = Distancia1lvl2 + "%"
                        document.getElementById("Meteioritolvl2").style.top = Altura1lvl2 + "px"}
            
                        setTimeout(Metiorito_Direccionlvl2, 1700)
                        Reanudar_trayectorialvl2 = setInterval(Metiorito_Direccionlvl2, 2030)
         
                    function Metiorito_Direccion2lvl2(){
                        Distancia2lvl2 = 80
                        Altura2lvl2 = Math.round(Math.random()* 400)
            
                        document.getElementById("Meteiorito2lvl2").style.left = Distancia2lvl2 + "%"
                        document.getElementById("Meteiorito2lvl2").style.top = Altura2lvl2 + "px"}
            
                        setTimeout(Metiorito_Direccion2lvl2, 2000)
                        Reanudar_trayectoria2lvl2 = setInterval(Metiorito_Direccion2lvl2, 2750)
            
                        function Metiorito_Direccion3lvl2(){
                            Distancia3lvl2 = 80
                            Altura3lvl2 = Math.round(Math.random()* 350)
                
                            document.getElementById("Meteiorito3lvl2").style.left = Distancia3lvl2 + "%"
                            document.getElementById("Meteiorito3lvl2").style.top = Altura3lvl2 + "px"}
                
                            setTimeout(Metiorito_Direccion3lvl2, 2200)
                        Reanudar_trayectoria3lvl2 = setInterval(Metiorito_Direccion3lvl2, 2570)
                            }
                                }
                                     }

        //ESTA FUNCION DIRIGE AL PRIMER METIORITO 1 A LA TIERRA 
        function Metiorito_Direccionlvl2(){
            Distancia1lvl2 = 80
            Altura1lvl2 = Math.round(Math.random()* 450)

            document.getElementById("Meteioritolvl2").style.left = Distancia1lvl2 + "%"
            document.getElementById("Meteioritolvl2").style.top = Altura1lvl2 + "px"}

            setTimeout(Metiorito_Direccionlvl2, 1700)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
            Reanudar_trayectorialvl2 = setInterval(Metiorito_Direccionlvl2, 2030)//LUEGO SE VA A LLAMAR A LOS METIORITOS CADA 2,4 SEGUNDOS


        //ESTA FUNCION DIRIGE AL PRIMER METIORITO 2 A LA TIERRA         
        function Metiorito_Direccion2lvl2(){
            Distancia2lvl2 = 80
            Altura2lvl2 = Math.round(Math.random()* 450)

            document.getElementById("Meteiorito2lvl2").style.left = Distancia2lvl2 + "%"
            document.getElementById("Meteiorito2lvl2").style.top = Altura2lvl2 + "px"}

            setTimeout(Metiorito_Direccion2lvl2, 2000)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
            Reanudar_trayectoria2lvl2 = setInterval(Metiorito_Direccion2lvl2, 2750)//LUEGO SE VA A LLAMAR A LOS METIORITOS CADA 2,3 SEGUNDOS

            //ESTA FUNCION DIRIGE AL PRIMER METIORITO 3 A LA TIERRA
            function Metiorito_Direccion3lvl2(){
                Distancia3lvl2 = 80
                Altura3lvl2 = Math.round(Math.random()* 450)
    
                document.getElementById("Meteiorito3lvl2").style.left = Distancia3lvl2 + "%"
                document.getElementById("Meteiorito3lvl2").style.top = Altura3lvl2 + "px"}
    
                setTimeout(Metiorito_Direccion3lvl2, 2200)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
            Reanudar_trayectoria3lvl2 = setInterval(Metiorito_Direccion3lvl2, 2570)//LUEGO SE VA A LLAMAR A LOS METIORITOS CADA 2,3 SEGUNDOS
       


        //AQUI ADJUNTAMOS LA ACCION DE LA FUNCION EXPULZAR AL PASAR SOBRE EL METIORITO
        document.getElementById("Meteioritolvl2").addEventListener('mouseover', Explulsarlvl2)
        document.getElementById("Meteiorito2lvl2").addEventListener('mouseover', Explulsar2lvl2)
        document.getElementById("Meteiorito3lvl2").addEventListener('mouseover', Explulsar3lvl2)

        //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 1 DE MANERA ALEATORIA FUERA DEL MAPA
        function Explulsarlvl2 (){
            document.getElementById("Puntos_sound").play()
            Distancialvl2 = "-500"
            Alturalvl2 = Math.round(Math.random()* 500)
            document.getElementById("Punto3").play()
            document.getElementById("Meteioritolvl2").style.left = Distancialvl2 + "px"
            document.getElementById("Meteioritolvl2").style.top = Alturalvl2 + "px"
            document.getElementById("Meteioritolvl2").style.transition = "1.8s"}


        //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 2 DE MANERA ALEATORIA FUERA DEL MAPA
        function Explulsar2lvl2 (){
            document.getElementById("Punto2").play()
            Distancialvl2 = "-500"
            Alturalvl2 = Math.round(Math.random()* 500)
            document.getElementById("Punto2").play()
            document.getElementById("Meteiorito2lvl2").style.left = Distancialvl2 + "px"
            document.getElementById("Meteiorito2lvl2").style.top = Alturalvl2 + "px"
            document.getElementById("Meteiorito2lvl2").style.transition = "1.8s"}

         //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 3 DE MANERA ALEATORIA FUERA DEL MAPA
        function Explulsar3lvl2 (){
            document.getElementById("Punto3").play()
            Distancialvl2 = "-500"
            Alturalvl2 = Math.round(Math.random()* 500)
            document.getElementById("Puntos_sound").play()
            document.getElementById("Meteiorito3lvl2").style.left = Distancialvl2 + "px"
            document.getElementById("Meteiorito3lvl2").style.top = Alturalvl2 + "px"
            document.getElementById("Meteiorito3lvl2").style.transition = "1.8s"}




        
        //ESTA FUNCION SE ENCARGA DE ALERTARTE UNA VEZ EL METIORITO CRUZE LA LINEA CON UN PERDISTE
        //TAMBIEN RESETEA LOS VALORES Y LLEVA A LOS METIORITOS FUERA DEL MAPA DE MANERA INSTANTANEA
        function perdistelvl2 (){
            if((document.getElementById("Meteioritolvl2").offsetLeft > 630) ||
            (document.getElementById("Meteiorito2lvl2").offsetLeft > 630) ||
            (document.getElementById("Meteiorito3lvl2").offsetLeft > 630))
            
            {
                document.getElementById("Perdiste_sound").play()
            
                alert("YA ES DEMASIADO TARDE LOS METIORITOS DESTRUYERON GRAN PARTE DEL CONTINENTE LO MEJOR ES ESPERAR LO PEOR")


                document.getElementById("Meteioritolvl2").style.left = "-70%"
                document.getElementById("Meteioritolvl2").style.transition = "0s"

                document.getElementById("Meteiorito2lvl2").style.left = "-70%"
                document.getElementById("Meteiorito2lvl2").style.transition = "0s"

                document.getElementById("Meteiorito3lvl2").style.left = "-70%"
                document.getElementById("Meteiorito3lvl2").style.transition = "0s"

                Tiempolvl2 = 60
                Puntajelvl2 = 0 }
        
            else {
                document.getElementById("Meteioritolvl2").style.transition = "2s"
                document.getElementById("Meteiorito2lvl2").style.transition = "2s"
                document.getElementById("Meteiorito3lvl2").style.transition = "2s"           
            } }

        setInterval(perdistelvl2, 1)//LE COLOCAMOS UNO PARA QUE SIEMPRE SE ESTE EJECUTANDO, DADO A 
        //QUE NO SABEMOS CUANDO EL METIORITO VA A SUPERAR EL LIMITE
        }

        
        //LE DECIMOS QUE AL PRECIONAR EL BOTON JUGAR EJECUTARA LA FUNCION PLAY     
        document.getElementById("Playlvl2").addEventListener('click', PLAYlvl2)

        Conteolvl2 = 4 //ESTE ES EL CONTEO DE LA CUENTA REGRESIVA QUE SE DA DESPUEZ DE PRESINAR JUGAR
            
            //ESTA FUNCION EJECUTA UN CONJUNTO DE ACCIONES AL PRESIONAR JUGAR
            function PLAYlvl2(){
                document.getElementById("Fondo_Undertale").play()
                //MUEVE EL TITULO FUERA DEL CONTENEDOR UNA VEZ DE CLICK A JUGAR
                document.getElementById("Texolvl2").style.left = "-900px" 
                //MUEVE AL BOTON PLAY TRANS PRESIONAR PRESIONAR AL MISMO BOTON
                document.getElementById("Playlvl2").style.left = "-900px" 
                    //ESTA FUNCION CONTIENE AL JUEGO COMO TAL
                    function ARRACARlvl2(){    
                        JUEGOlvl2()}
                //INVOCA AL JUEGO UNA VEZ PASEN 4 SEGUNDO - OSEA UNA VEZ TERMINE EL CONTADOR
                tiempo_de_arranquelvl2 =  setTimeout(ARRACARlvl2, 4100)
                //ESTA FUNCION EJECUTA LA CUENTA REGRESIVA Y RETIRA LA PANTALLA START 
                function ESPERARlvl2(){
                    function Cuenta_rglvl2(){
                        Conteolvl2--;
                        document.getElementById("RGBlvl2").innerHTML = Conteolvl2
                        if(Conteolvl2 == -1){
                        document.getElementById("Contenedor_contadorlvl2").style.display = "none"
                        function Borrarlvl2(){
                        document.getElementById("Startlvl2").style.display = "none"

                            DETENER_JUEGOlvl2() }//HABILITA LA FUNCION DE PAUSE Y REANUDAR UNA VEZ CARGUE EL JUEGO
                        setTimeout(Borrarlvl2, 500) }  }
                        setInterval (Cuenta_rglvl2, 1000)}

                        setTimeout(ESPERARlvl2, 350)}//SE EJECUTARA EN UN LAPSO DE 350, DESPUES DE PRESIONAR EL BOTON


            //ESTA FUNCION CONTIENE EL REANUDE Y PAUSE DEL BOTON
            function DETENER_JUEGOlvl2 (){
                //INDICA QUE LA FUNCION DE PAUSE SE EJECUTARA UNA VEZ SE DE CLICK AL BOTON DE PAUSE        
                document.getElementById("Pauselvl2").addEventListener('click', PAUSElvl2)
                //ESTA VARIABLE INDICA SI SE EJECUTA O NO EL DESPAUSEO
                Activolvl2 = 1 
                    //HACE QUE EL JUEGO SE DETENGA
                    function PAUSElvl2(){
                        //SI LLEGA A UNA EJECUTA LA FUNCION PAUSE
                        if (Activolvl2 == 1){
                        document.getElementById("Pausa_Pantallalvl2").style.display = "table"
                        document.getElementById("Fondo_Undertale").pause()
                        clearInterval(Restar_Tiempolvl2)//BORRAMOS LA FUNCION DE TIEMPO
                        document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2
                            clearInterval(Reanudar_trayectorialvl2)
                            clearInterval(Reanudar_trayectoria2lvl2)
                            clearInterval(Reanudar_trayectoria3lvl2)

                            function Metiorito_detenerlvl2 (){   
                            document.getElementById("Meteioritolvl2").style.left = document.getElementById("Meteioritolvl2").offsetLeft + "px" 
                            document.getElementById("Meteiorito2lvl2").style.left = document.getElementById("Meteiorito2lvl2").offsetLeft + "px" 
                            document.getElementById("Meteiorito3lvl2").style.left = document.getElementById("Meteiorito3lvl2").offsetLeft + "px" 

                            document.getElementById("Meteioritolvl2").style.top = document.getElementById("Meteioritolvl2").offsetTop + "px" 
                            document.getElementById("Meteiorito2lvl2").style.top = document.getElementById("Meteiorito2lvl2").offsetTop + "px" 
                            document.getElementById("Meteiorito3lvl2").style.top = document.getElementById("Meteiorito3lvl2").offsetTop + "px" }

                            Pusae_offflvl2 = setInterval(Metiorito_detenerlvl2, 0.01) //LE ASEGNAMOS UNA ID, PARA BORRALO UNA VEZ SE DESPAUSEE
                            Activolvl2 = 2} //CAMBIAMOS EL VALOR PARA QUE AL VOLVER A DARLE CLICK EJECUTE LA CONDICIONAL DE REANUDAR

                        else { //LA FUNCION DE REANUDAR
                            clearInterval(Pusae_offflvl2) 
                            document.getElementById("Pausa_Pantallalvl2").style.display = "none"
                            document.getElementById("Fondo_Undertale").play()
                            function Tiempo_Disminurlvl2(){//VOLVEMOS A CREAR LA FUNCION DE TIEMPO PARA QUE REANUEDE EL CONTEO
                                Tiempolvl2--;
                                document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2
                                if(Tiempolvl2 == 0){
                                    Tiempolvl2 = 55
                                    Puntajelvl2 = 0
                                alert("Lo lamento perdiste") } }

                                Restar_Tiempolvl2 = setInterval(Tiempo_Disminurlvl2, 1000)
        
                        document.getElementById("Meteioritolvl2").style.left = Distancia1lvl2 + "%"
                        document.getElementById("Meteioritolvl2").style.top = Altura1lvl2 + "px"
                        document.getElementById("Meteioritolvl2").style.transition = "2s"

                        document.getElementById("Meteiorito2lvl2").style.left = Distancia2lvl2 + "%"
                        document.getElementById("Meteiorito2lvl2").style.top = Altura2lvl2 + "px"
                        document.getElementById("Meteiorito2lvl2").style.transition = "2s"

                        document.getElementById("Meteiorito3lvl2").style.left = Distancia3lvl2 + "%"
                        document.getElementById("Meteiorito3lvl2").style.top = Altura3lvl2 + "px"
                        document.getElementById("Meteiorito3lvl2").style.transition = "2s"

                        function Metiorito_Direccionlvl2(){
                            Distancia1lvl2 = 80
                            Altura1lvl2 = Math.round(Math.random()* 450)
                
                            document.getElementById("Meteioritolvl2").style.left = Distancia1lvl2 + "%"
                            document.getElementById("Meteioritolvl2").style.top = Altura1lvl2 + "px"}
                
                            setTimeout(Metiorito_Direccionlvl2, 1700)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
                            Reanudar_trayectorialvl2 = setInterval(Metiorito_Direccionlvl2, 2430)//LUEGO SE VA A LLAMAR A LOS METIORITOS CADA 2,4 SEGUNDOS
                
                
                            function Metiorito_Direccion2lvl2(){
                                Distancia2lvl2 = 80
                                Altura2lvl2 = Math.round(Math.random()* 400)
                
                                document.getElementById("Meteiorito2lvl2").style.left = Distancia2lvl2 + "%"
                                document.getElementById("Meteiorito2lvl2").style.top = Altura2lvl2 + "px"}
                
                                setTimeout(Metiorito_Direccion2lvl2, 1)
                                Reanudar_trayectoria2lvl2 = setInterval(Metiorito_Direccion2lvl2, 2050)
                
                            
                            function Metiorito_Direccion3lvl2(){
                                Distancia3lvl2 = 80
                                Altura3lvl2 = Math.round(Math.random()* 350)
                    
                                document.getElementById("Meteiorito3lvl2").style.left = Distancia3lvl2 + "%"
                                document.getElementById("Meteiorito3lvl2").style.top = Altura3lvl2 + "px"}
                    
                                setTimeout(Metiorito_Direccion3lvl2, 1700)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
                                Reanudar_trayectoria3lvl2 = setInterval(Metiorito_Direccion3lvl2, 2570)//LUEGO SE VA A LLAMAR A LOS METIORITOS CADA 2,3 SEGUNDOS

                        Activolvl2 = 1 } } } //CAMBIAMOS EL VALOR DE NUEVO A 1 PARA QUE AL SIGUIENTE CLICK SE EJECUTE EL PAUSE  S 

                