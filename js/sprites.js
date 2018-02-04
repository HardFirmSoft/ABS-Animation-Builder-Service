
/* <-- FIX CROSS ORIGIN ISSUE -->
    var image = new Image();
    img.crossOrigin="Anonymous";
    img.src = "http://server-with-CORS-support.com/path/to/image.jpg";
*/

//define the presets array
var presets = [];
var animations = [];

//below goes the animation presets
//0
var Sun = {
    framerate:3,
    images:["spritesheets/Sun100x80.bmp"],
    frames: {width: 100, height:80},
    animations: {
        shine: [0,2,"shine"]
    }
};

presets.push(Sun);
animations.push("shine");


var Tree = {
    framerate:3,
    images:["spritesheets/Tree69x80.bmp"],
    frames: {width: 69, height:80},
    animations: {
        shine: [0,2,"jump"]
    }
};
presets.push(Tree);
animations.push("jump");

var Cloud = {
    framerate:3,
    images:["spritesheets/Cloud100x80.bmp"],
    frames: {width: 100, height:80},
    animations: {
        puff: [0,2,"puff"]
    }
};
presets.push(Cloud);
animations.push("puff");

var Octo = {
    framerate:3,
    images:["spritesheets/Octocat100x80.bmp"],
    frames: {width: 100, height:80},
    animations: {
        shine: [0,3,"crawl"],
    }
};
presets.push(Octo);
animations.push("crawl");

var Star = {
    framerate:3,
    images:["spritesheets/Star100x80.bmp"],
    frames: {width: 100, height:80},
    animations: {
        shine: [0,3,"flip"],
    }
};
presets.push(Star);
animations.push("flip")

function instantiate(e){
    return new createjs.Sprite(new createjs.SpriteSheet(presets[e]), animations[e]);
}

function dragDrop(e){
    e.regX = 50;
    e.regY = 50;
    e.x = 500;
    e.y = 135;
    e.on("pressmove", function(event){
        event.target.x = event.stageX;
        event.target.y = event.stageY;
    });
    e.on("pressup", function(event) {
        e.x = event.stageX;
        e.y = event.stageY;
        updateSession();
    });
}


