

Webcam.set({
    width:360,
    height: 250,
    image_format:'png',
    png_quality:100
   
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function Take_snapshot(){
 Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='capturedimg' src='"+ data_uri+"'>";
 });
}


console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XZ1psvZpY/model.json',modelLoaded);
function modelLoaded(){
    console.log("modalLoaded");
}


function check(){
    img=document.getElementById("capturedimg");
    classifier.classify(img,gotResult);
    console.log("check");

}

/*function gotResult(error, results) 
{ if (error) { console.error(error); }
 else { console.log(results); document.getElementById("result_object_name").innerHTML = results[0].label;
  document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3); } */






function gotResult(error,results){
    console.log("gotresults");
if (error) {
 console.error(error);

}
else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}


}