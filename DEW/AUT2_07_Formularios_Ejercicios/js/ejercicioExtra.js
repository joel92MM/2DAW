function extras(){
            /**
             * Funcion que retorna un numero aleatorio entre un minimo y maximo
             */
            function aleatorio(min,max) {
                return Math.floor(Math.random()*(max-min)+min);
            }
            let encontrado=0;
            do {
                
                let num=aleatorio(0,30)
                encontrado+=1;

                let jugadores = 
                new Map([[0,'Prosper Chigumba'], [5,'Valentine Musarurwa'], [16,'Jorum Muchambo'], 
                     [20,'Cabby Kamhapa'], [29,'Justice Jangano'], [22,'John Takudzwa'], 
                     [6,'Hardlife Zvirekwi'], [23,'Carlton Munzabwa'],]);
            
                    if(jugadores.keys==num){
                        console.log(num);
                        console.log("El jugador: "+ jugadores.values+" con el numero: "+ 
                        jugadores.keys+" ya existe")
                        
                    }
                console.log(encontrado);
            
            } while (encontrado<5);



     

         

}
