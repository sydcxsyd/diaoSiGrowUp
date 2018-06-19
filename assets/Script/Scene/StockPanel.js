// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel : {
            default : null,
            type : cc.Label,
        },

        valueLabel : {
            default : null,
            type : cc.Label,
        },

        percentLabel : {
            default : null,
            type : cc.Label,
        },

        gotLabel : {
            default : null,
            type : cc.Label,
        },

        buyAndSell : {
            default : null,
            type : cc.Button,
        },

        iconSprite : {
            default : null,
            type : cc.Sprite,
        },

        stockId : {
            default : 0,
            visible : false,
        },
    },

    start () {

    },

    setStockId (stockId){
        this.stockId = stockId;
        this.reload();
    },

    reload (){
        let data = G_User.stockList[this.stockId];
        let baseData = G_Stock[this.stockId];

        this.nameLabel.string = baseData.name;
        this.valueLabel.string = "现价：" + data.nowPrice;
        this.percentLabel.string = G_Game.getStockChangePercent(this.stockId) + "%";
        this.gotLabel.string = data.gotNum + "股";
    },

    onClickTrade (){
        G_EventManager.pushEvent(G_Event.onClickTradeStock,[this.stockId]);
    },

    // update (dt) {},
});
