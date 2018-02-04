var Sun = {
    images:["spritesheets/Sun100x80.bmp"],
    frames: {width: 100, height:80},
    animations: {
        shine: [0,2]
    }
};
var SunSS = new createjs.SpriteSheet(Sun);
var SunShine = new createjs.Sprite(SunSS, "shine");