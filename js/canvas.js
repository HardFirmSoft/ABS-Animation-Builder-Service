window.onload = function(){
    if(storageAvailable(sessionStorage)){
        if(sessionStorage.length!=0){

        }else{
            var i = 0;
            initialize();
        }
    }else{
        window.alert("Your browser does not support sessionStorage! Saving might not work!");
    }
}

function initialize(){
    var stages = [];
    stages[i] = new createjs.Stage("content-pane");
    i++;
}

function update(){
    sessionStorage.setItem('i', i);
}

function addChild(){

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