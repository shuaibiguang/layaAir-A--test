(function()
{
	var Sprite  = Laya.Sprite;
	var Stage   = Laya.Stage;
	var Texture = Laya.Texture;
	var Browser = Laya.Browser;
	var Handler = Laya.Handler;
	var WebGL   = Laya.WebGL;

	var ape;
    var apeWidth = 20;
    var apeHeight = 20;
	var apePosHeihgt = 50;
	var SinP = 0.00;
	(function()
	{
		// 不支持WebGL时自动切换至Canvas
		Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);

		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;

		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#fff";

		showApe();
        //监听键盘按下和抬起处理;
        setup();
	})();

    function setup(){
        
    }

	function showApe()
	{
        //绘制矩形， 运动测试
		ape = new Sprite();
		Laya.stage.addChild(ape);

        ape.graphics.drawRect(50, apePosHeihgt, apeWidth, apeHeight, "#006666");

        Laya.timer.frameLoop(1, this, animate);
	}

    function animate(){
		SinP += 0.5;
		SinData = Math.sin(SinP);
		ape.y = apePosHeihgt + SinData * 30;
        // if (ape.x <= Browser.clientWidth - apeWidth) {
        //     ape.x += 2;
        // }
    }
})();