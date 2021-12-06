function modelloaded() {
    console.log("model is loaded");
    classifier.classify(gotresults);
}

function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Z8iW1-gDt/model.json", modelloaded);
}

function gotresults(error, results) {
    if (error)

    { 
        
        console.log(error);
    
    }

    else
    
    { 
        
        console.log(results);
    
    }

}
function gotresults(error, results) {
    if (error)

    { 
        
        console.log(error);
    
    }

    else
    
    { 
        
        console.log(results);


        rnr = Math.floor(Math.random()*255) + 1;
        rnb = Math.floor(Math.random()*255) + 1;
        rng = Math.floor(Math.random()*255) + 1;

        document.getElementById("soundrecognizer").innerHTML = 'I can hear : ' + results[0].label + '.';
        document.getElementById("accuracy").innerHTML =  'Accuracy : '   + results[0].confidence + '.';
        document.getElementById("soundrecognizer").style.color = "rgb(" + rnr + "," + rnb + "," + rng + ")";
        document.getElementById("accuracy").style.color = "rgb(" + rnr + "," + rnb + "," + rng + ")";

        i1 = document.getElementById("im1");
        i2 = document.getElementById("im2");
        i3 = document.getElementById("im3");
        i4 = document.getElementById("im4");
        
        if(results[0].label == "Meowing"){
            i1.src = "cat2.gif";
            i2.src = "cow1.png";
            i3.src = "dog1.png";
            i4.src = "lion1.png";

            
            
        }
        else if(results[0].label == "Bark"){
            i1.src = "cat1.png";
            i2.src = "cow1.png";
            i3.src = "dog2.gif";
            i4.src = "lion1.png";
            
            
            
        }
        else if(results[0].label == "Roar"){
            i1.src = "cat1.png";
            i2.src = "cow1.png";
            i3.src = "dog1.png";
            i4.src = "lion2.gif";
            
            
            
        }
        else {
            i1.src = "cat1.png";
            i2.src = "cow2.gif";
            i3.src = "dog1.png";
            i4.src = "lion1.png";
            
            
            
        }


        }

}

