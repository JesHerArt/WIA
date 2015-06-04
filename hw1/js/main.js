/*
     Name: Jessica J. Hernandez
     Date: June 03, 2015
     Class & Section:  WIA-201506-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
// Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
// Use Modernizr to verify that your browser supports canvas, include a fallback message
********************************************/

window.onload = function() {
    
if(Modernizr.canvas){
	// Canvas is supported. Drawing may begin.
    
    //Create array variables to fill in the canvas and context data with a for loop.
    var canvas = Array();
    var context = Array();
    
    for( var i =0; i <=6; i++)
    {
        canvas[i] = document.getElementById("canvas" + (i+1));
        context[i] = canvas[i].getContext("2d");
    }

    /*******************************************
    PART 1

    Draw a rectangle starting at point (0 ,0)
    That has a width of 50 px and a heigh of 100px
    Set the color of the rectangle to a shade of blue.
    Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

    Reminder - set the style first then draw.
    ********************************************/
    //Draw Rectangle here
    if(context[0])
    {
        var ctx = context[0];
        
        ctx.fillStyle = "#1EBBDB";
        ctx.strokeStyle = "black";
        
        ctx.fillRect(0, 0, 50, 100);
        ctx.strokeRect(0, 0, 50, 100);
    }
    


    /*******************************************
    PART 2

    Draw a circle starting at point (50 ,50)
    That has a radius of 20 px 
    Set the color of the circle to a shade of red and set the alpha to .5
    Set the stroke color to black and use a radius of 30px for this circle.

    Reminder - set the style first then draw.
    Use the arc method
    ********************************************/
    //Draw Circle here
    if(context[1])
    {
        var ctx = context[1];
        
        ctx.fillStyle = "rgba(255, 71, 71, 0.5)";
        
        ctx.beginPath();
        ctx.arc(50, 50, 20, 0*Math.PI, 2*Math.PI, false);
        
        ctx.fill();
        
        ctx.strokeStyle = "black";
        
        ctx.beginPath();
        ctx.arc(50, 50, 30, 0*Math.PI, 2*Math.PI, false);
        
        ctx.stroke();
    }



    /*******************************************
    PART 3

    Practice using Path drawing.
    Create a 5-point star shaped pattern using the lineTo method.
    Begin this shape at (100, 100)

    Height and width and color are up to you.

    ********************************************/
    //Draw Star here
    if(context[2])
    {
        var ctx = context[2];
        
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#E3D34F";
        ctx.fillStyle = "#FFE26A";
        
        ctx.beginPath();
        ctx.moveTo(100, 200);
        ctx.lineTo(150, 70);
        ctx.lineTo(200, 200);
        ctx.lineTo(75, 120);
        ctx.lineTo(225, 120);
        ctx.closePath();
        
        ctx.stroke();
        ctx.fill();
    }

    

    /*******************************************
    PART 4

    Practice drawing with Bezier curves.
    Try drawing the top to an umbrella.
    This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

    Position, height, width and color are your choice.
    Do not overlap any other object.

    ********************************************/
    //Draw Umbrella top here
    if(context[3])
    {
        var ctx = context[3];
        
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#807DFF";
        ctx.fillStyle = "#50336E";
        
        ctx.beginPath();
        ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, 100, 1*Math.PI, 2*Math.PI, false);
        
        ctx.bezierCurveTo(ctx.canvas.width/2 + 100, ctx.canvas.height/2 - 15, ctx.canvas.width/2 + 50, ctx.canvas.height/2 - 25, ctx.canvas.width/2 + 50, ctx.canvas.height/2);
        ctx.bezierCurveTo(ctx.canvas.width/2 + 50, ctx.canvas.height/2 - 20, ctx.canvas.width/2, ctx.canvas.height/2 - 25, ctx.canvas.width/2, ctx.canvas.height/2);
        ctx.bezierCurveTo(ctx.canvas.width/2, ctx.canvas.height/2 - 25, ctx.canvas.width/2 - 50, ctx.canvas.height/2 - 20, ctx.canvas.width/2 - 50, ctx.canvas.height/2);
        ctx.bezierCurveTo(ctx.canvas.width/2 - 50, ctx.canvas.height/2 - 25, ctx.canvas.width/2 - 100, ctx.canvas.height/2 - 15, ctx.canvas.width/2 - 100, ctx.canvas.height/2);
        ctx.closePath();
        
        ctx.fill();
        ctx.stroke();
    }
    
    

    /*******************************************
    PART 5

    Practice using text.
    Draw text into your canvas.  It can said whatever you would like in any color.

    ********************************************/
    //Draw text here
    if(context[4])
    {
        var ctx = context[4];
        
        var japaneseText = "Sumimasen, anata wa nihongo ga wakarimasu ka";
        ctx.font = "13pt Verdana";
        ctx.fillStyle = "#00A651";
        ctx.fillText(japaneseText, 35, 100);
        
        var englishText = '"Excuse me, do you understand Japanese?"';
        ctx.font = "10pt Verdana";
        ctx.fillStyle = "#7CC576";
        ctx.fillText(englishText, 105, 150);
    }
    
    

    /*******************************************
    PART 6

    Pixel manipulation.
    Draw the image logo.png into the canvas in the following 3 ways.
    1. The image exactly as it is.
    2. Shrink the image by 50%
    3. Slice a section of the logo out and draw that onto the canvas.

    Reminder to use the drawImage method for all 3 of the ways.

    ********************************************/
    //Draw images here
    if(context[5])
    {
        var ctx = context[5];
        
        var srcImg = document.getElementById("img1");
        
        ctx.drawImage(srcImg, 10, 10);
        
        ctx.drawImage(srcImg, 90, 165, 150, 49.5);
        
        ctx.drawImage(srcImg, 20, 50, 37, 50, 270, 75, 200, 250);
    }



    /*******************************************
    PART 7

    Putting it all together. 

    Using a combination of all the methods. 
    Create a complex scene.
    You must use at least 3 different methods.

    ********************************************/
    // Draw scene here
    if(context[6])
    {
        var ctx = context[6];
        
        //create background
        var linearGradient = ctx.createLinearGradient(0, 0, 0, 300);
        linearGradient.addColorStop(0.3, "#74D5FF");
        linearGradient.addColorStop(0.8, "#C0ECFF");
        
        ctx.fillStyle = linearGradient;
        ctx.fillRect(0, 0, 500, 300);
        
        
        //create rotating lines
        var radians = (Math.PI / 180) * 40;
        ctx. translate(100, 100);
        
        ctx.lineWidth = 4;
        ctx.lineCap = "round"
        ctx.strokeStyle = "yellow";
        
        for(var degrees=0; degrees<360; degrees+=40)
        {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(85, 0);
            ctx.stroke();
            ctx.rotate(radians);
        }
        
        
        //create sun circle
        ctx. translate(-100, -100);
        ctx.moveTo(0, 0);

        ctx.fillStyle = "#FFD856";
        
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0*Math.PI, 2*Math.PI, false);
        ctx.closePath();
        
        ctx.fill();
        ctx.stroke();
        
        
        //create waves
        ctx.fillStyle = "#00B3E0";
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#0055BA";
        
        ctx.beginPath();
        for(var i = 0, j=31.25, k=31.25; i <8 ; i++)
        {
            ctx.arc(j, 220, k, 1*Math.PI, 2*Math.PI, true);
            j += 62.5;
        }
        
        ctx.lineTo(500, 300);
        ctx.lineTo(0, 300);
        ctx.closePath();
        
        ctx.fill();
        ctx.stroke();
        
        
        //create bird
        ctx.lineCap = "miter";
        ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        
        ctx.beginPath();
        ctx.moveTo(350,88);
        ctx.bezierCurveTo(360, 85, 390, 80, 400, 100);
        ctx.bezierCurveTo(410, 100, 440, 90, 450, 112);
        ctx.bezierCurveTo(458, 160, 460, 90, 400, 100);
        ctx.bezierCurveTo(390,70, 300, 112, 350, 88);
        ctx.closePath();

        ctx.fill();
        ctx.stroke();
    }

    
    
} else {
    //Canvas is not supported
    alert("Unfortunately your browser does not support the Canvas HTML5 feature.");		
}

}