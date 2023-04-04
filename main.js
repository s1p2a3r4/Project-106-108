function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json",modelloaded);
}

function modelloaded(){
    classifier.classify(gotresult);
}

function gotresult(error, results){ 
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r= Math.floor(Math.random()*255)+1;
        random_g= Math.floor(Math.random()*255)+1;
        random_b= Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can Hear-"+results[0].label;
        document.getElementById("result_confidence").innerHTML="accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        img= document.getElementById("ear.jpg");

        if(results[0].label=="barking"){
            img.src="Puppy.jpg";
        }

        else if(results[0].label=="meowing"){
            img.src="Cat.jpg";
        }

        else if(results[0].label=="roaring"){
            img.src="lion.jpg";
        }

        else{
            img.src="cow.jpg";
        }
    }
}