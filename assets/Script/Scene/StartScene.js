cc.Class({
    extends: cc.Component,

    properties: {
        startBtn: {
            default: null,
            type: cc.Button
        },
    },

    // use this for initialization
    onLoad: function () {
        
    },

    onClickStart(){
        G_Game.gameInit();
    	cc.director.loadScene('gameScene');
    },

    // called every frame
    update: function (dt) {

    },
});
