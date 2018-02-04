/* Animation Builder - canvas.js
/* Seng Chiat Haw & Francis Piche
/* Copyright (c) 2018
/*
/* For any problems/diagnostics, refer to https://www.createjs.com/docs/easeljs/modules/EaselJS.html
*/

//createjs.Ticker.addEventListener("tick", animateStage);

/*
function handleTick() {
 //Circle will move 10 units to the right.
    circle.x += 10;
    //Will cause the circle to wrap back
    if (circle.x > stage.canvas.width) { circle.x = 0; }
    stage.update();
}
*/

var i;
var coordinatesX = [];
var coordinatesY = [];

window.onload = function(){
    scene = new createjs.Stage("content-pane");
    var xSpinner = $("#cX").spinner();
    var ySpinner = $("#cY").spinner();
    if(storageAvailable('sessionStorage')){
      //  if(sessionStorage.length != 0){
        //    i = sessionStorage.getItem('i');
        //    stages = sessionStorage.getItem('stages');
        //}else{
            i = 0;
            initialize();
        //}
    }else{
        window.alert("Your browser does not support sessionStorage! Saving might not work!");
    }
    scene.on("stagemousedown", function(event){
        clearSelection();
    });
    $( function() {
        $( "#slider" ).slider({
            slide: function(event, ui){
                $("#time").text("  "+((ui.value)*0.6).toFixed(1)+" s");
                renderFrames(ui.value);
            }
        });
        $("#cX").spinner({
            spin: function(event, ui){
                scene.getChildAt(sessionStorage.getItem("selected")).x = ui.value;
            }
        });
        $("#cY").spinner({
            spin: function(event, ui){
                scene.getChildAt(sessionStorage.getItem("selected")).y = ui.value;
            }
        });
    });
    $('#setFrame').on("click", function(){
        setWaypoint(sessionStorage.getItem("selected"), $("#cX").spinner("value"), $("#cY").spinner("value"), $( "#slider" ).slider("value"));
    });
}

function initialize(){
    createjs.Ticker.addEventListener("tick", handleTick);
    scene.update();
}

function handleTick(event){
    scene.update(event);
}

function updateSession(){
    for(j=0; j<i; j++){
        if(scene.getChildAt(j) == null) continue;
        coordinatesX[j] = scene.getChildAt(j).x;
        coordinatesY[j] = scene.getChildAt(j).y;
    }
    var opt_sel;
    if(sessionStorage.getItem("selected") != null){
        opt_sel = sessionStorage.getItem("selected");
    }

    sessionStorage.setItem("cX", JSON.stringify(coordinatesX));
    sessionStorage.setItem("cY", JSON.stringify(coordinatesY));
    if(opt_sel != null){
        sessionStorage.setItem("selected", opt_sel);
        $("#cX").spinner("value", coordinatesX[opt_sel]);
        $("#cY").spinner("value", coordinatesY[opt_sel]);
    }
}

//accepts the index number of preset and creates an instance
function createChild(e){
    scene.addChildAt(instantiate(e), i);
    scene.getChildAt(i).id = i;
    scene.getChildAt(i).on("click", function(event){
        editChild(scene.getChildAt(this.id));
    });
    dragDrop(scene.getChildAt(i));
    i++;
    updateSession();
}

function editChild(e){
    document.getElementById("noclick").style.display = "none";
    document.getElementById("clicked").style.display = "block";
    var cid = scene.getChildIndex(e);
    e.alpha = 0.5;
    sessionStorage.setItem("selected", cid);
    document.getElementById("clickTT").innerHTML = "Item #"+(cid+1);
}

function deleteChild(){
    document.getElementById("clicked").style.display = "none";
    document.getElementById("noclick").style.display = "block";
    scene.removeChildAt(sessionStorage.getItem("selected"));
    sessionStorage.removeItem("selected");
    updateSession();
}

function animateStage(){

}

function clearSelection(){
    document.getElementById("clicked").style.display = "none";
    document.getElementById("noclick").style.display = "block";
    scene.getChildAt(sessionStorage.getItem("selected")).alpha = 1;
    sessionStorage.removeItem("selected");
}

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}   

    //logic for adding a Sun
    var sunBtn = document.getElementById("sunBtn");
    sunBtn.onclick = function(){
        createChild(0);
    };  
    