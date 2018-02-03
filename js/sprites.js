var Sun = {
    images:["spritesheets/Sun500x400.bmp"],
    frames: {width: 500, height:400},
    animations: {
        shine: [0,2]
    }
};
var SunSS = new createjs.SpriteSheet(Sun);
var SunShine = new createjs.Sprite(SunSS, "shine");