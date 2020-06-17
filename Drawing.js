class Drawing{
    constructor(){
        this.drawing = middlePoints;
        this.value = null;
    }
    getPoints(){
        var drawingPoints = database.ref('drawing/middlePoints');
        drawingPoints.on("value", function(data){
            drawingPoints = data.val();
        })
    }
    update(){
        var currentDrawing = "drawing/middlePoints";
        database.ref(currentDrawing).set({
            drawing: this.drawing
        })
    }
    
}