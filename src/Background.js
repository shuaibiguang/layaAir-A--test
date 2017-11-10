var Background = (function (_super){
    function Background(){
        Background.super(this);

    }

    Laya.class(Background, 'Background', _super);

    var _proto = Background.prototype;

    _proto.init = function () {
        this.road = new Laya.Sprite();
        this.addChild(this.road);

        this.road.graphics.drawPoly(0, 0, ROAD_PATH, '#CCCC99');
    }

    return Background;
})(Laya.Sprite)