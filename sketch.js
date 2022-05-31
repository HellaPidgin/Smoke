// Testing Snakecase compatitbility
const FETCH_RECHARGING = null;
const SMOKE_RECHARGING = null;

// Testing file link
console.log("Welcome to P5");
console.log("Hello World!!");

// Turns on the animation driver.
const displacementSwitch = true
var x = 0;
var y = 0;
var multiple = 0.16
var keyAutoMove = false;
var v = 1;

// setting up p5 dependencies
function setup() {
    // put setup code here
    const tacos= [];
    const burritos= 2;
    const abogada = "bat";
    const cheeseCake = 2;
    var height = 3840;
    var width = 2160;
    
    
    createCanvas(height * multiple, width * multiple)

    }

    const powerObserve = () => {

    }

    // Log exciting render 5 projects.
    function draw() {
        background(169)
        
        ellipse(50 + x, 50 + y, 40, 120);
        // if(displacementSwitch){
        //     const move = () => {
        //         x = .5;
        //         y = .5;
        //         for (var i = 0; i !== 300; i++){
        //             x = x + .5
        //             ellipse(50, 50, 80 + x, 80 + y);
        //         }
        //     }
        // }

        if(keyAutoMove){
            y = y + v;
        }
        if (keyIsPressed) {
            if ((key == 'h') || (key == 'H')) { 
                keyAutoMove = !keyAutoMove
            }
        }
  

        if(y === height*multiple){
            console.log("Y Max")
            y++;
        }
        if (x < 300 && displacementSwitch){
            var speed = 0.5;
            var radians = 0.1
            //console.log(Math.sin(x))
            x = Math.sin(x + radians);
        }
     
    // put drawing code here

    }