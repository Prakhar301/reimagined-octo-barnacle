input="";
noline="";
function preload(){
}
function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
    input=document.getElementById("object").value;
}
function modelLoaded(){
    console.log("Model Loaded");
    noline=true;
}
function draw(){
    image(video,0,0,400,300);
}