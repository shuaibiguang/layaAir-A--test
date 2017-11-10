//用来存储一些全局的配置文件
//路的坐标
ROAD_PATH = [];
ROAD_PATH.push(430, 0);
ROAD_PATH.push(430, 320);
ROAD_PATH.push(160 , 320);
ROAD_PATH.push(160, 410);

ROAD_PATH.push(520, 410);
ROAD_PATH.push(520, 0);

//计算出来这些障碍的坐标
luzhang = {};
for(var i = 1; i <= ROAD_PATH.length; i++) {
    if (i %2 == 0 && i >= 4) {
        var start_x = ROAD_PATH[i-4],
            start_y = ROAD_PATH[i-3],
            end_x = ROAD_PATH[i-2],
            end_y = ROAD_PATH[i-1];
            var num = (Math.abs(end_x - start_x) > Math.abs(end_y - start_y)) ? Math.abs(end_x - start_x) : Math.abs(end_y - start_y);
            var temp_x = end_x,temp_y = end_y;
            for (var j = 0; j <= num ; j++){
                
                if (luzhang[temp_x] == undefined) {
                    var t = {};
                    t[temp_y] = 1
                    luzhang[temp_x] = t;
                } else {
                    var t = luzhang[temp_x];
                    t[temp_y] = 1;
                    luzhang[temp_x] = t;
                }
                
                // console.log("temp_x:"+temp_x + ",temp_y:" + temp_y + ', start_x：' + start_x + ', start_y：' + start_y);
                if (temp_x > start_x) {
                    if (temp_y > start_y) {temp_y--} else if (temp_y < start_y){ temp_y ++};
                    temp_x--;
                } else if (temp_x < start_x) {
                    if (temp_y > start_y) {temp_y--} else if (temp_y < start_y){ temp_y ++};                    
                    temp_x++;
                } else {
                    if (temp_y > start_y) {temp_y--} else if (temp_y < start_y){ temp_y ++};
                }
            }
            // break;
    }

}
var count = 0;
for (zxc in luzhang) {
    count += zxc.length;
    count ++;
}
console.log(count);