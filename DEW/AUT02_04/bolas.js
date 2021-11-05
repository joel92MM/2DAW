function bola(){
    //creamos el objeto bola
    class bola{
        

        constructor (coordX,coordY,velX,velY,color,size){
            this.coordX=coordX;
            this.coordY=coordY;
            this.velX=velX;
            this.color=color;
            this.size=size;
        }

        dibuja(){
            console.log("Coordenada X: " + this.coordX+ ", Coordenada Y:"+ this.coordY);
        }
        mover(){
            this.coordX+=this.velX;
            this.coordY+=this.velY;
        }

        }
    
    
    
}