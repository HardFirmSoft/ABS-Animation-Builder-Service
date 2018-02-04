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

var children = []; var i;
var coordinatesX = [];
var coordinatesY = [];

window.onload = function(){
    scene = new createjs.Stage("content-pane");
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
        $( "#slider" ).slider();
    } );
}

function initialize(){
    scene.addChildAt(SunShine, i);
    children.push(i);
    scene.getChildAt(i).on("click", function(event){
        editChild(scene.getChildAt(i));
    });
    i++;
    updateSession();
    createjs.Ticker.addEventListener("tick", handleTick);
    scene.update();
}

function handleTick(event){
    scene.update(event);
}

function updateSession(){
    for(j=0; j<i; j++){
        coordinatesX[j] = scene.getChildAt(j).x;
        coordinatesY[j] = scene.getChildAt(j).y;
    }
    sessionStorage.clear();
    sessionStorage.setItem("sceneObj", JSON.stringify(children));
    sessionStorage.setItem("cX", JSON.stringify(coordinatesX));
    sessionStorage.setItem("cY", JSON.stringify(coordinatesY));
}

function createChild(e){
    scene.addChildAt(presets[e], i);
    children.push(e);
    scene.getChildAt(i).on("click", function(event){
        editChild(scene.getChildAt(i));
    });
    i++;
    updateSession();
}

function editChild(e){
    document.getElementById("noclick").style.display = "none";
    document.getElementById("clicked").style.display = "initial";
    var cid = scene.getChildIndex(e);
    document.getElementById("clickTT").innerHTML = "Item #"+(cid+1);
}

function deleteChild(){

}

function animateStage(){

}

function clearSelection(){
    document.getElementById("clicked").style.display = "none";
    document.getElementById("noclick").style.display = "initial";
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