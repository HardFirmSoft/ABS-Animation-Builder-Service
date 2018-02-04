/* Animation Builder - canvas.js
/* Seng Chiat Haw & Francis Piche
/* Copyright (c) 2018
/*
/* For any problems/diagnostics, refer to https://www.createjs.com/docs/easeljs/modules/EaselJS.html
*/

var i; var stages = [];
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

window.onload = function(){
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
}

function initialize(){
    stages.push(new createjs.Stage("content-pane"));
    i++;
    stages[0].addChild(SunShine);
    updateSession();
    stages[0].update();
}

function updateSession(){
    sessionStorage.setItem('i', i);
    sessionStorage.setItem('stages', stages);
}

function createChild(){

}

function editChild(){

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