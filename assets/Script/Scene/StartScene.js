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
    	cc.director.loadScene('GameScene');
    },

    // called every frame
    update: function (dt) {

    },
});
