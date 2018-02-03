/* Animation Builder - canvas.js
/* Seng Chiat Haw & Francis Piche
/* Copyright (c) 2018
/*
/* For any problems/diagnostics, refer to https://www.createjs.com/docs/easeljs/modules/EaselJS.html
/*

/*window.onload = function(){
    if(storageAvailable(sessionStorage)){
        if(sessionStorage.length!=0){

        }else{
            var i = 0;
            initialize();
        }
    }else{
        window.alert("Your browser does not support sessionStorage! Saving might not work!");
    }
}*/

window.onload = initialize();

function initialize(){
    //Create a stage by getting a reference to the canvas
    var stage = new createjs.Stage("#content-pane");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);
    //Set position of Shape instance.
    circle.x = circle.y = 50;
    //Add Shape instance to stage display list.
    stage.addChild(circle);
    //Update stage will render next frame
    stage.update();

    /*var stages = [];
    stages[i] = new createjs.Stage("content-pane");
    i++;
    stage[0].addChild(SunShine);
    stage.update();*/
}

function updateSession(){
    sessionStorage.setItem('i', i);
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