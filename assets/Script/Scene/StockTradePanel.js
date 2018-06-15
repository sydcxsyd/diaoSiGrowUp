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
        closeBtn : {
            default : null,
            type : cc.Button,
        },

        buyBtn : {
            default : null,
            type : cc.Button,
        },

        sellBtn : {
            default : null,
            type : cc.Button,
        },

        stockName : {
            default : null,
            type : cc.Label,
        },

        gotLabel : {
            default : null,
            type : cc.Label,
        },

        gotCostLabel : {
            default : null,
            type : cc.Label,
        },

        sellPriceLabel : {
            default : null,
            type : cc.Label,
        },

        sellGotLabel : {
            default : null,
            type : cc.Label,
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

        this.stockName.string = "持有:" + baseData.name + "股";
        this.gotLabel.string = "持有:" + data.gotNum + "股";
        this.gotCostLabel.string = "成本:" + data.gotCost + "元";
        this.sellPriceLabel.string = "现价:" + data.nowPrice + "元";
        this.sellGotLabel.string = "市值:" + (data.nowPrice * data.gotNum) + "元";
    },

    clickClose (){
        this.node.destroy();
    },

    clickBuyBtn (){

    },

    clickSellBtn (){

    },
});
