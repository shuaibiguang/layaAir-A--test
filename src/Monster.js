//怪物类用来生成怪物
var Monster = (function (_super){
    
    function Monster(){
        Monster.super(this);
    }
    Laya.class(Monster, "Monster", _super);

    var _proto = Monster.prototype;

    /**
     * _speed 速度曲率
     */
    _proto.init = function (_speed){

        this.speed = _speed;
        this.speedSin = 0;

        var monster = new Laya.Sprite();
        this.addChild(monster);

        monster.pos(Laya.Browser.width / 2, 10);
        monster.graphics.drawRect(0, 0, 10, 10 , '#CC9999');
    }

    //怪物自动寻路
    Monster.onAutoPath = function (){

    }

    return Monster;
})(Laya.Sprite);