class Form{
    constructor(){
        this.input  = createInput("  ");
       
        this.PlayB = createButton("Play");
        this.startB = createButton("Start Match");
        this.name = createElement("h3")
        this.nametag = createSprite(windowWidth-150,50,250,100);
        this.nametag.visible = false;


    
    }
    display(){
        this.nametag.addImage(nametag)


        this.startB.position(10,10)
        this.PlayB.position(windowWidth/2,windowHeight/4*3);
        this.input.position(windowWidth/2,windowHeight/3*2)
  
        this.name.position(windowWidth-125,25);

        this.name.hide();
        this.startB.hide();
        
        this.PlayB.mousePressed(()=>{
            ETL.play()
            var name = this.input.value()
            this.startB.show();
            this.name.show();
            this.name.html(name);
            this.input.hide();
     
            this.PlayB.hide();
            this.nametag.visible = true;
            gameState = 1

        })
        this.startB.mousePressed(()=>{
            EWG.play()
            this.startB.hide();
            gameState = 2;
           

        })
    }
}