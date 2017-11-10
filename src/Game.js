//游戏主入口文件
var Game = (function (){
    (function (){
        Laya.init(Laya.Browser.width, 600, Laya.WebGL);
        Laya.stage.bgColor = '#FFFFCC';

        //生成背景元素
        this.background = new Background();
        background.init();

        Laya.stage.addChild(this.background);
        //生成一个怪物测试
        this.monster = new Monster();
        monster.init(0.05);

        Laya.stage.addChild(this.monster);
        Laya.timer.frameLoop(1, this, onLoop);

        //绑定鼠标操作，记录点的坐标
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, onMouse);

        //使用A*寻路
        
    })();

    function onMouse(){
        // console.log('x：'+Laya.stage.mouseX + 'y：'+Laya.stage.mouseY);
    }
    function onLoop(){
        //游戏的主要帧操作
        this.monster.speedSin += this.monster.speed;
        var sin_speed = Math.sin(this.monster.speedSin);
        // this.monster.y += Math.abs(sin_speed);
        // this.monster.y += (sin_speed < 0) ? 0: sin_speed;
    }
})();