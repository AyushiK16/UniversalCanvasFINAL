
var db_drawing = [];
var database;
var hypnoticBall, potition;
var middlePoints = [];
var drawing = [];
var newButton;
//var drawing

function setup(){
    //should be the first line
    //database = firebase.database();


    database = firebase.database();
    createCanvas(500,500);
    background("lightBlue");
   
    //newBall = rect(250,250,10,10);
    //newBall.shapeColor = "red";
    //var newBallPosition = database.ref('ball/position');
    //newBallPosition.on("value", readPosition);
    //drawing = new Drawing();

   newButton = new ClearButton();

   //var clearButton = select('#clearButton');
   //clearButton.mousePressed(clearDrawing)
    
}

function mouseDragged(){
    //fill("black");

    //var positionX = mouseX;
    //var positionY = mouseY

    var point = {x : mouseX, y : mouseY}

    drawing.push(point);

    var drawingRef = database.ref('drawing')
    drawingRef.set({ 
        //storing the points in this node
        //storing the value in the node d
        "d":drawing
    }) 

    //middlePoints.push(positionX, positionY);

    console.log("drag");
    
}


function draw(){

    newButton.display();
    
    readData();

    beginShape();
    noFill();
    for(var i = 0; i<db_drawing.length; i ++){
        vertex(db_drawing[i].x, db_drawing[i].y);
        i = i+1;
    }
    endShape();

}

function readData(){
    database.ref('drawing/').on('value', (data) => { 
        db_drawing = data.val().d
    }) 
}




/*

function clearDrawing() { 
    db_drawing = []; 
    var adaRef = database.ref('drawing'); 
    adaRef.remove() 
}

function readPosition(){
    position = data.val();
    newBall.x = position.x;
    newBall.y = position.y;
    //console.log(newBallPosition);
}

//so that it only workd when the values have been defined ( not undefined)
    //otherwise it will disappear.
    
    i = i+1;
   if(i%2 === 0){
    //strokeWeight(4);
    //line(mouseX, mouseY, mouseX, mouseY);
    fill("black");
    var point = ellipse(mouseX, mouseY, 10,10)
    lineArray.push(point);
    console.log(lineArray);
   }
   for(var i = 0; i<100; i++){
        startPointA = startDrawing[i];
        int(startPointA);
        startPointB = startDrawing[i+1];
        int(startPointB);

        endPointA = endDrawing[i];
        int(endPointA);
        endPointB = endDrawing[i+1];
        int(endPointB);


        beginShape();
        vertex(startPointA, startPointB);
        vertex(endPointA, endPointB);
        endShape();

        i = i + 1;
    }   




function mousePressed(){
    var pointA = mouseX;
    int(pointA);
    startDrawing.push(pointA);
    var pointB = mouseY;
    int(pointB);
    startDrawing.push(pointB);

    //console.log(pointA);
    //console.log(pointB);
}




function mouseReleased(){

    //console.log(middlePoints);
    var pointC = mouseX ; 
    int(pointC);
    endDrawing.push(pointC);
    var pointD = mouseY;
    int(pointD);
    endDrawing.push(pointD);

    
    startPointA = startDrawing[0];
    int(startPointA);
    startPointB = startDrawing[1];
    int(startPointB);

    console.log("relase");
}

for(var i=0; i<1000; i++){
        //vertex(drawing[i][0], drawing[i][1]);
        vertex(middlePoints[i], middlePoints[i+1]);
        vertex(middlePoints[i+2], middlePoints[i+3]);
        console.log(middlePoints[i], middlePoints[i+1])
    }

    for(var i = 0; i<100000; i++){
        
        beginShape();
        vertex(drawing[i], drawing[i+1]);
        vertex(drawing[i+2], drawing[i+3]);
        endShape();
        
       image(dotImage, drawing[i], drawing[i+1]);
        i = i + 1;  
    }   



    for(var i=0; i>-1 ; i++){
        currentPath = drawing[i];
        beginShape();
        vertex(20,20);
        vertex(40,40);
        endShape();
    }
    console.log("HELLLOOO");
    







THIS IS ALL THE EXTRA CODE. IT CONTAINS THE VARIOUS WAYS I TRIED
TO DO THIS TASK. SOME OF THEM HAVE ALSO WORKED!

for(var i=0; i>-1 ; i++){
        rect(drawing[i[0]], drawing[i[1]], 20,20);
    }
function readPosition(data){
    //read the data in the position ( which has the x and y values) 
    //these values are being passed.
    position = data.val();
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;

    function mouseDragged(){
    fill("black");
    var point = ({x: mouseX, y: mouseY},10,10);
    ellipse(point.x, point.y, 10, 10);
    lineArray.push(point.x, point.y);
    console.log(lineArray);

}
}
function writePosition(x,y){
    //update the values to the database - always be in sync.
    database.ref('ball/position').set({
        'x': position.x + x, 
        'y': position.y + y
    })
}
function showError(){
    console.log("Error is : writing the value is the database.")
}
*/