var config = [
    { x: 0, y: 0, walkable: true, image: "true_png" },
    { x: 1, y: 0, walkable: true, image: "true_png" },
    { x: 2, y: 0, walkable: true, image: "true_png" },
    { x: 3, y: 0, walkable: false, image: "false_png" },
    { x: 4, y: 0, walkable: true, image: "true_png" },
    { x: 5, y: 0, walkable: true, image: "true_png" },
    { x: 6, y: 0, walkable: true, image: "true_png" },
    { x: 7, y: 0, walkable: true, image: "true_png" },
    { x: 8, y: 0, walkable: true, image: "true_png" },
    { x: 9, y: 0, walkable: true, image: "true_png" },
    { x: 0, y: 1, walkable: true, image: "true_png" },
    { x: 1, y: 1, walkable: false, image: "false_png" },
    { x: 2, y: 1, walkable: true, image: "true_png" },
    { x: 3, y: 1, walkable: false, image: "false_png" },
    { x: 4, y: 1, walkable: false, image: "false_png" },
    { x: 5, y: 1, walkable: false, image: "false_png" },
    { x: 6, y: 1, walkable: false, image: "false_png" },
    { x: 7, y: 1, walkable: true, image: "true_png" },
    { x: 8, y: 1, walkable: false, image: "false_png" },
    { x: 9, y: 1, walkable: true, image: "true_png" },
    { x: 0, y: 2, walkable: true, image: "true_png" },
    { x: 1, y: 2, walkable: false, image: "false_png" },
    { x: 2, y: 2, walkable: true, image: "true_png" },
    { x: 3, y: 2, walkable: true, image: "true_png" },
    { x: 4, y: 2, walkable: true, image: "true_png" },
    { x: 5, y: 2, walkable: true, image: "true_png" },
    { x: 6, y: 2, walkable: true, image: "true_png" },
    { x: 7, y: 2, walkable: true, image: "true_png" },
    { x: 8, y: 2, walkable: false, image: "false_png" },
    { x: 9, y: 2, walkable: true, image: "true_png" },
    { x: 0, y: 3, walkable: true, image: "true_png" },
    { x: 1, y: 3, walkable: false, image: "false_png" },
    { x: 2, y: 3, walkable: false, image: "false_png" },
    { x: 3, y: 3, walkable: false, image: "false_png" },
    { x: 4, y: 3, walkable: true, image: "true_png" },
    { x: 5, y: 3, walkable: true, image: "true_png" },
    { x: 6, y: 3, walkable: false, image: "false_png" },
    { x: 7, y: 3, walkable: false, image: "false_png" },
    { x: 8, y: 3, walkable: false, image: "false_png" },
    { x: 9, y: 3, walkable: true, image: "true_png" },
    { x: 0, y: 4, walkable: true, image: "true_png" },
    { x: 1, y: 4, walkable: true, image: "true_png" },
    { x: 2, y: 4, walkable: true, image: "true_png" },
    { x: 3, y: 4, walkable: false, image: "false_png" },
    { x: 4, y: 4, walkable: true, image: "true2_png" },
    { x: 5, y: 4, walkable: true, image: "true2_png" },
    { x: 6, y: 4, walkable: false, image: "false_png" },
    { x: 7, y: 4, walkable: true, image: "true_png" },
    { x: 8, y: 4, walkable: true, image: "true_png" },
    { x: 9, y: 4, walkable: true, image: "true_png" },
    { x: 0, y: 5, walkable: true, image: "true_png" },
    { x: 1, y: 5, walkable: true, image: "true_png" },
    { x: 2, y: 5, walkable: true, image: "true_png" },
    { x: 3, y: 5, walkable: false, image: "false_png" },
    { x: 4, y: 5, walkable: true, image: "true2_png" },
    { x: 5, y: 5, walkable: true, image: "true2_png" },
    { x: 6, y: 5, walkable: false, image: "false_png" },
    { x: 7, y: 5, walkable: true, image: "true_png" },
    { x: 8, y: 5, walkable: true, image: "true_png" },
    { x: 9, y: 5, walkable: true, image: "true_png" },
    { x: 0, y: 6, walkable: true, image: "true_png" },
    { x: 1, y: 6, walkable: false, image: "false_png" },
    { x: 2, y: 6, walkable: false, image: "false_png" },
    { x: 3, y: 6, walkable: false, image: "false_png" },
    { x: 4, y: 6, walkable: false, image: "false_png" },
    { x: 5, y: 6, walkable: false, image: "false_png" },
    { x: 6, y: 6, walkable: false, image: "false_png" },
    { x: 7, y: 6, walkable: false, image: "false_png" },
    { x: 8, y: 6, walkable: false, image: "false_png" },
    { x: 9, y: 6, walkable: true, image: "true_png" },
    { x: 0, y: 7, walkable: true, image: "true_png" },
    { x: 1, y: 7, walkable: false, image: "false_png" },
    { x: 2, y: 7, walkable: true, image: "true_png" },
    { x: 3, y: 7, walkable: true, image: "true_png" },
    { x: 4, y: 7, walkable: true, image: "true_png" },
    { x: 5, y: 7, walkable: true, image: "true_png" },
    { x: 6, y: 7, walkable: true, image: "true_png" },
    { x: 7, y: 7, walkable: true, image: "true_png" },
    { x: 8, y: 7, walkable: false, image: "false_png" },
    { x: 9, y: 7, walkable: true, image: "true_png" },
    { x: 0, y: 8, walkable: true, image: "true_png" },
    { x: 1, y: 8, walkable: false, image: "false_png" },
    { x: 2, y: 8, walkable: true, image: "true_png" },
    { x: 3, y: 8, walkable: false, image: "false_png" },
    { x: 4, y: 8, walkable: false, image: "false_png" },
    { x: 5, y: 8, walkable: false, image: "false_png" },
    { x: 6, y: 8, walkable: false, image: "false_png" },
    { x: 7, y: 8, walkable: true, image: "true_png" },
    { x: 8, y: 8, walkable: false, image: "false_png" },
    { x: 9, y: 8, walkable: true, image: "true_png" },
    { x: 0, y: 9, walkable: true, image: "true_png" },
    { x: 1, y: 9, walkable: true, image: "true_png" },
    { x: 2, y: 9, walkable: true, image: "true_png" },
    { x: 3, y: 9, walkable: true, image: "true_png" },
    { x: 4, y: 9, walkable: true, image: "true_png" },
    { x: 5, y: 9, walkable: true, image: "true_png" },
    { x: 6, y: 9, walkable: false, image: "false_png" },
    { x: 7, y: 9, walkable: true, image: "true_png" },
    { x: 8, y: 9, walkable: true, image: "true_png" },
    { x: 9, y: 9, walkable: true, image: "true_png" },
];
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(data) {
        _super.call(this);
        this.init(data);
    }
    var d = __define,c=Tile,p=c.prototype;
    p.init = function (data) {
        this.x = data.x * TileMap.TileSize;
        this.y = data.y * TileMap.TileSize;
        this.image = data.image;
        var bitmap = new egret.Bitmap();
        bitmap.width = TileMap.TileSize;
        bitmap.height = TileMap.TileSize;
        bitmap.texture = RES.getRes(this.image);
        this.addChild(bitmap);
    };
    return Tile;
}(egret.DisplayObjectContainer));
egret.registerClass(Tile,'Tile');
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.call(this);
        this.MySta = new StateMachine;
        this.MoveSpeed = 20;
        this.Modle = 0;
        this.IdleAnime = new Array();
        this.MoveAnime = new Array();
        this.Polepic = this.createBitmapByName("01_png");
        this.Polepic.width = 0.7 * TileMap.TileSize;
        this.Polepic.height = TileMap.TileSize;
        this.addChild(this.Polepic);
        this.LoadPic();
    }
    var d = __define,c=Player,p=c.prototype;
    p.LoadPic = function () {
        var texture = RES.getRes("01_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("01_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("02_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("03_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("04_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("05_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("06_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("07_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("08_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("09_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("2_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("3_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("4_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("5_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("6_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("7_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("8_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("9_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("10_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("11_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("12_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("13_png");
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    p.PlayAnimation = function (Ani) {
        var count = 0;
        var Bit = this.Polepic;
        var M = this.Modle;
        //console.log("M:"+M);
        var timer = new egret.Timer(100, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, Play, this);
        timer.start();
        function Play() {
            Bit.texture = Ani[count];
            if (count < Ani.length - 1) {
                //   console.log(Ani.length+" "+count);
                count++;
            }
            else {
                count = 0;
            }
            if (this.Modle != M) {
                //console.log("tM:"+M+" nowM:"+this.Modle); 
                timer.stop();
            }
        }
    };
    p.Move = function () {
        var MS = new Move(this);
        this.MySta.Reload(MS);
    };
    p.Idle = function () {
        var IS = new Idle(this);
        this.MySta.Reload(IS);
    };
    Player.PlayerSpeed = 2;
    return Player;
}(egret.DisplayObjectContainer));
egret.registerClass(Player,'Player');
var Idle = (function () {
    function Idle(Player) {
        this.Player = Player;
    }
    var d = __define,c=Idle,p=c.prototype;
    p.Load = function () {
        this.Player.PlayAnimation(this.Player.IdleAnime);
    };
    p.exit = function () {
        this.Player.Modle++;
    };
    return Idle;
}());
egret.registerClass(Idle,'Idle',["State"]);
var Move = (function () {
    function Move(Player) {
        this.Player = Player;
    }
    var d = __define,c=Move,p=c.prototype;
    p.Load = function () {
        this.Player.PlayAnimation(this.Player.MoveAnime);
    };
    p.exit = function () {
        this.Player.Modle++;
    };
    return Move;
}());
egret.registerClass(Move,'Move',["State"]);
var StateMachine = (function () {
    function StateMachine() {
    }
    var d = __define,c=StateMachine,p=c.prototype;
    p.Reload = function (S) {
        if (this.nowSta) {
            this.nowSta.exit();
        }
        this.nowSta = S;
        this.nowSta.Load();
    };
    return StateMachine;
}());
egret.registerClass(StateMachine,'StateMachine');
var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.init = function () {
        //地图
        for (var i = 0; i < config.length; i++) {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }
        //角色
        var player = new Player();
        player.width = TileMap.Playerwidth;
        player.height = TileMap.Playerheight;
        var playerX = 0;
        var playerY = 0;
        this.addChild(player);
        //站立
        player.Idle();
        var move = false;
        var playerTween;
        var time = 0;
        this.timer = new egret.Timer(50, time);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            playerTween = egret.Tween.get(player);
            var localX = e.localX;
            var localY = e.localY;
            var gridX = Math.floor(localX / TileMap.TileSize);
            var gridY = Math.floor(localY / TileMap.TileSize);
            //tilenode节点
            var grid = new Grid(10, 10);
            for (var i = 0; i < config.length; i++) {
                grid.setWalkable(config[i].x, config[i].y, config[i].walkable);
            }
            var aStar = new AStar();
            grid.setStartNode(playerX, playerY);
            grid.setEndNode(gridX, gridY);
            //findPath
            if (aStar.findPath(grid)) {
                var path = aStar.PATH;
                var pathX = 0;
                var pathY = 0;
                var distance = 0;
                for (var i = 0; i < path.length; i++) {
                    move = true;
                    pathX = path[i].x * TileMap.TileSize;
                    pathY = path[i].y * TileMap.TileSize;
                    playerX = gridX;
                    playerY = gridY;
                    distance = path.length * TileMap.TileSize;
                    console.log("distance:", distance);
                    time = distance / Player.PlayerSpeed;
                    console.log("start");
                    //this.timer.start();
                    playerTween.to({ x: pathX, y: pathY }, distance / Player.PlayerSpeed, egret.Ease.sineIn).call(function () {
                        console.log("time", distance / Player.PlayerSpeed);
                        if (Math.abs(player.x - (gridX * TileMap.TileSize)) < 10 && Math.abs(player.y - (gridY * TileMap.TileSize)) < 10) {
                            player.Idle();
                        }
                    });
                    player.Move();
                }
            }
        }, this);
    };
    TileMap.TileSize = 64;
    TileMap.Playerwidth = 64;
    TileMap.Playerheight = 64;
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
//# sourceMappingURL=TileMap.js.map