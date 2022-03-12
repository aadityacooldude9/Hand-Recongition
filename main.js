prediction_1= "";
prediction_2= "";


Webcam.set({
height: 300,
width: 450,
image_format: 'png',
png_quality: 90
});

camera= document.getElementById("webcam");
Webcam.attach('#webcam');

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="final_result" src="'+data_uri+'"/>';
});
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y6UyNvanL/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
    }

    function speak(){
    var synth= window.speechSynthesis;
    speak_data_1= "The First Prediction is "+prediction_1;
    speak_data_2= "The Second Prediction is "+prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
    }

    function check(){
    var image= document.getElementById("final_result");
    classifier.classify(image, gotResult);
    }

    function gotResult(error, results){
    if(error){
    console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("result_hand_name").innerHTML=results[0].label;
    document.getElementById("result_hand_name2").innerHTML=results[1].label;
    prediction_1= results[0].label;
    prediction_2= results[1].label;
    speak();
if(results[0].label=="amazing")
{
document.getElementById("update_hand").innerHTML="&#128076;";
}
if(results[0].label=="victory"){
document.getElementById("update_hand").innerHTML="&#128077;";
}
if(results[0].label=="thumbs"){
    document.getElementById("update_hand").innerHTML="9996;";
    }
if(results[1].label=="amazing")
{
document.getElementById("update_hand2").innerHTML="&#128076;";
}
if(results[1].label=="victory"){
document.getElementById("update_hand2").innerHTML="&#128077;";
}
if(results[1].label=="thumbs"){
    document.getElementById("update_hand2").innerHTML="9996;";
    }
    }
    }
    