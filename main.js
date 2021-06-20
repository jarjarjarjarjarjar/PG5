function preload(){

};

function setup() {
        canvas = createCanvas(640, 500);
        canvas.position(350,100);
        video = createCapture(VIDEO)
        video.hide();

}


function draw() {
    image(video, 120, 80, 320, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0)
    circle(50, 50, 80)
    circle(50, 410, 80)
    circle(510,50,80)
    circle(510, 410, 80)
    fill(112,234,123)
    stroke(112,234,123)
    rect(90,40,380,20)    
    rect(40,70,20,300)
    rect(50,400,460,20)
    rect(500,70,20,300)
    fill(100,50,200)
    stroke(50,100,200)
    ellipse(50,49,55,55)
    ellipse(50,410,55,55)
    ellipse(510,49,55,55)
    ellipse(510,410,55,55)
}

function snapshot(){
    save("YOUR_FACE_OR_SOMTHING_ELSE.png")
}