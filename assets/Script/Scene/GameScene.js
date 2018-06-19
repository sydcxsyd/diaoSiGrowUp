cc.Class({
    extends: cc.Component,

    properties: {
        moneyLabel : {
            default : null,
            type : cc.Label,
        },

        yeahpayLabel : {
            default : null,
            type : cc.Label,
        },

        timeLabel : {
            default : null,
            type : cc.Label,
        },

        stockPre : {
            default : null,
            type : cc.Prefab,
        },

        stockTradePre : {
            default : null,
            type : cc.Prefab,
        },
    },

    start () {
        this.init();
    },

    update (dt) {

    },

    init (){
        this.reloadTable();
        this.reloadStock();
    },

    reload (){
        this.reloadTable();
        this.reloadStockData();
    },

    reloadTable (){
        this.moneyLabel.stirng = G_User.money;
        this.yeahpayLabel.stirng = G_User.yeahpay;
        this.yeahpayLabel.stirng = G_Game.getNowTimeStr();
    },

    reloadStock (){
        let listContent = cc.find("Canvas/buyScrollList/view/content");
        listContent.removeAllChildren();
        for(let i in G_User.stockList){
            let packageNode = cc.instantiate(this.stockPre);
            packageNode.parent = listContent;
        }
        this.reloadStockData();
    },

    reloadStockData (){
        let listContent = cc.find("Canvas/buyScrollList/view/content");
        let index = 0;
        for(let i in G_User.stockList){
            let stockId = G_User.stockList[i].stockId;
            let packageNode = listContent.children[index];
            packageNode.getComponent("").setStockId(stockId)
        }
    },

});
