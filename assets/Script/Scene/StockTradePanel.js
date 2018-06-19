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

        buyAllBtn : {
            default : null,
            type : cc.Button,
        },

        sellAllBtn : {
            default : null,
            type : cc.Button,
        },


        addButton : {
            default : null,
            type : cc.Button,
        },

        reduceButton : {
            default : null,
            type : cc.Button,
        },

        tradeNumLabel : {
            default : null,
            type : cc.Label,
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
        this.tradeNumLabel.string = 0;
    },

    setStockId (stockId){
        this.stockId = stockId;
        this.reload();
    },

    reload (){
        let data = G_User.stockList[this.stockId];
        let baseData = G_Stock[this.stockId];

        this.stockName.string = baseData.name;
        this.gotLabel.string = "持有:" + data.gotNum + "股";
        this.gotCostLabel.string = "成本:" + data.gotCost + "元";
        this.sellPriceLabel.string = "现价:" + data.nowPrice + "元";
        this.sellGotLabel.string = "市值:" + (data.nowPrice * data.gotNum) + "元";
    },

    clickClose (){
        this.node.destroy();
    },

    clickBuyBtn (){
        let tradeNum = this.tradeNumLabel.string;
        G_Game.buyStock(this.stockId,tradeNum);
    },

    clickSellBtn (){
        let tradeNum = this.tradeNumLabel.string;
        G_Game.sellStock(this.stockId,tradeNum);
    },

    clickBuyAllBtn (){
        let tradeNum = G_Game.getMaxEnableNum(this.stockId);
        G_Game.buyStock(this.stockId,tradeNum);
    },

    clickSellAllBtn (){
        let tradeNum = G_User.stockList[this.stockId].gotNum;
        G_Game.sellStock(this.stockId,tradeNum);
    },

    clickAddBtn (){
        let tradeNum = parseInt(this.tradeNumLabel.string);
        tradeNum += 100;
        this.tradeNumLabel.string = tradeNum;
        // if(tradeNum <= G_Game.getMaxEnableNum(this.stockId)){
        //
        // }
    },

    clickReduceBtn (){
        let tradeNum = parseInt(this.tradeNumLabel.string);
        tradeNum -= 100;
        tradeNum = Math.max(0,tradeNum);
        this.tradeNumLabel.string = tradeNum;
    },
});
