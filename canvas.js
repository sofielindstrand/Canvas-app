window.onload = function() { //Berättar att funktionen körs när sidan laddas
    var canvas = document.getElementById("myCanvas"); //Hämtar canvasfrån HTMLfilen
    var context = canvas.getContext("2d"); //Det här ger 2D-renderingskontexten för ritytan av ett <canvas> -element

    var box = new Object(); // en varibel som fylls med en box 
    box.x = 0;
    box.y = 0;
    box.moveRight = function() {
        box.x++;
    } // en funktion för att boxen ska gå åt höger på knapptryck höger
    box.moveLeft = function() {
        box.x--;
    } // en funktion för att boxen ska gå åt vänster på knapptryck vänster
    box.moveUp = function() {
        box.y--;
    } // en funktion för att boxen ska gå uppåt på knapptryck uppåt
    box.moveDown = function() {
        box.y++;
    } // en funktion för att boxen ska gå nedåt på knapptryck nedåt 
    box.draw = function() { // en funktion för att rita

        context.strokeStyle = "#000000"; //färg
        context.stroke();
        context.fillRect(box.x, box.y, 150, 75); //berättar var den ska börja rita upp boxen 
        context.fillStyle = "#000000";
        context.fill();
    }

    box.erase = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    box.draw();

    document.onkeydown = function(e) { //tillderlar piltangenterna dess funktioner så att objektet flyttar sig och en IF funktion i funktionen så att objektet inte flyttar utanför canvasen, detsamma gäller nedan funtkioner för att diverse piltangenter ska radera, flytta sig och rita upp. 
        if (e.keyCode == 40) {
            if (box.y < 200) {
                box.erase();
                box.moveDown();
                box.draw();
            }
        } else
        if (e.keyCode == 38) {
            if (box.y > 1) {
                box.erase();
                box.moveUp();
                box.draw();
            }
        } else
        if (e.keyCode == 39) {
            if (box.x < 150) {
                box.erase();
                box.moveRight();
                box.draw();
            }
        } else
        if (e.keyCode == 37) {
            if (box.x > 1) {
                box.erase();
                box.moveLeft();
                box.draw();
            }
        }
    }
};
