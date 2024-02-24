LwristX = 0;
RwristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(650,500);
    canvas.position(550,150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Posenet model has been Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        LwristX = results[0].pose.leftWrist.x;
        RwristX = results[0].pose.rightWrist.x;
        difference = floor(LwristX-RwristX);
        console.log("LwristX = " + LwristX + "RwristX = " + RwristX + "difference" + difference);
    }
}

function draw(){
    background("#5191a6");
    textSize(difference); 
    fill(0);
    text("Katha", LwristX, RwristX);
}
