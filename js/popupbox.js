var span = document.getElementById("close");
var span1 = document.getElementById("close1");

var modelBtn = document.getElementById("modelsBtn");
var modelModal= document.getElementById("modelModal");


var backgrndBtn = document.getElementById("backgroundBtn");
var backgrndModal = document.getElementById("backgroundModal");

//model popup logic
modelBtn.onclick = function() {
    modelModal.style.display = "block";
};

span.onclick = function() {
    modelModal.style.display = "none";
};




//background popup logic
backgrndBtn.onclick = function() {
    backgrndModal.style.display = "block";
};

span1.onclick = function() {
    backgrndModal.style.display = "none";
};

var greenFieldBtn = document.getElementById("greenField");

greenFieldBtn.onclick = function(){
    var canvas = document.getElementById("content-pane");
    canvas.style.background = "url(images/background.bmp)";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
};

//other popup logic
/*
modelBtn.onclick = function() {
    modelModal.style.display = "block";
}

span.onclick = function() {
    modelModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modelModal) {
        modelModal.style.display = "none";
    }
}
*/

