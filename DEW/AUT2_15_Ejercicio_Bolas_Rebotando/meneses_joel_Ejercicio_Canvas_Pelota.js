
        //Declaracion vaiables
        var canvas, cxt, ancho_rectangulo, alto_rectangulo;
        
        canvas = document.getElementById('canvas');
        cxt = canvas.getContext('2d');
        ancho_rectangulo = canvas.width;
        alto_rectangulo = canvas.height;

        canvas.style.width= window.innerWidth ;
        canvas.style.height= window.innerHeight ;

        
        /*
         * Funcion que crea la pelota
         */   
        function circulo(x,y,r,color){
            cxt.fillStyle = color;
            cxt.beginPath();
            cxt.arc(x, y, r, 0, Math.PI*2, true);
            cxt.closePath();
            cxt.fill();
        }
           
        /*
         * Funcion que crea un rectangulo.
         */ 
        function rect(x, y, w, h, color){
            cxt.fillStyle = color;
            cxt.fillRect(x, y, w, h);
        }
           
        /*
         * Funcion que crea un objeto pelota.
         */
        function pelota(x, y, r, color){
            this.x = x;
            this.y = y;
            this.r = r;
            this.color = color;
            this.dx = 1;
            this.dy = 1.1;
            this.speed = 3;
            this.center = this.r/2;
                  
            this.update = function(){   
                if (this.x+this.center > ancho_rectangulo || this.x-this.center < 0) {
                    this.dx = -this.dx;
                }
                if (this.y+ this.center > alto_rectangulo || this.y-this.center < 0) {
                    this.dy = -this.dy;
                }
                this.x += this.dx * this.speed;
                this.y += this.dy * this.speed;          
            }
                   
            this.draw = function(){
                circulo(this.x, this.y, this.r, this.color);
            }
        }
           
        /*
         * Funcion que inicia el programa.
         * creamos un objeto pelota haciendo que se mueva por el rectangulo.
         */
        function init(){
            pelota = new pelota(50, 50, 10, "#008f39");
            intervalId = setInterval(bucleJuego, 1200/60);
        }
           
        /*
         * Funcion que actualiza y dibuja la pelota.
         */
        function bucleJuego(){
            limpiar();
            pelota.update();
            pelota.draw();
        }
          
        /*
         * Funcion que limpia los pasos de la pelota.
         */ 
        function limpiar(){
            cxt.fillStyle = "#FFF";
            rect(0, 0, ancho_rectangulo, alto_rectangulo);
        }
          
	// Se inicia la aplicacion. 
        init();
 