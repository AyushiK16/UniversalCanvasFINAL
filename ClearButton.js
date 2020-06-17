class ClearButton{
    constructor(){
        this.button = createButton("Clear Drawing");
        this.greeting = createElement('h2');
    }

    hide(){
        this.greeting.hide();
    }

    display(){
        this.button.position(370, 110);
        this.button.mousePressed(()=>{
            console.log("Hello");
            drawing = [];
            db_drawing = []; 
            var adaRef = database.ref('drawing/d'); 
            adaRef.remove() 

            background("lightBlue");

            this.greeting.html("Your drawing has been cleared.")
            this.greeting.position(75,40);
        })

    }
}