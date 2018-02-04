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

var children = [];

window.onload = function(){
    if(storageAvailable('sessionStorage')){
      //  if(sessionStorage.length != 0){
        //    i = sessionStorage.getItem('i');
        //    stages = sessionStorage.getItem('stages');
        //}else{
            initialize();
        //}
    }else{
        window.alert("Your browser does not support sessionStorage! Saving might not work!");
    }
}

function initialize(){
    scene = new createjs.Stage("content-pane");
    scene.addChild(SunShine);
    children.push(presets.indexOf(SunShine));
    updateSession();
    createjs.Ticker.addEventListener("tick", handleTick);
    scene.update();
}

function handleTick(event){
    scene.update(event);
}

function updateSession(){
    sessionStorage.clear();
    sessionStorage.setItem("sceneObj", JSON.stringify(children));
}

function createChild(e){
    scene.addChild(presets[e]);
    children.push(e);
    updateSession();
}

function editChild(e){
    
}

function deleteChild(){

}

function animateStage(){

}

function newStage(){

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