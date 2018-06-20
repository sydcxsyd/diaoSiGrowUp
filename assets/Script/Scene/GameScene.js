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

        gameEventList : {
            default : [],
            visible : false,
        },
    },

    start () {
        this.init();
        this.regist(G_Event.onClickTradeStock,this.openTrade);
        this.regist(G_Event.property_stockGotNumChanged,this.reloadStockData);
    },

    onDestroy (){
        this.unRegistAll();
    },

    regist : function(eventName,callBack){
        G_EventManager.registerListener(eventName,callBack,this);
        this.gameEventList.push(eventName);
    },

    unRegistAll (){
        for(var i in this.gameEventList){
            let eventName = this.gameEventList[i];
            G_EventManager.unRegisterListener(eventName,this);
        }
    },

    openTrade (stockId){
        let tradeNode = cc.instantiate(this.stockTradePre);
        tradeNode.getComponent("StockTradePanel").setStockId(stockId);
        tradeNode.parent = this.node;
    },

    update (dt) {

    },

    init (){
        this.nodeBindData();
        this.reloadTable();
        this.reloadStock();
    },

    // reload (){
    //     this.reloadTable();
    //     this.reloadStockData();
    // },

    nodeBindData (){
        G_User.bindData(G_User.proDic.property_money,this.reloadTable.bind(this));
        G_User.bindData(G_User.proDic.property_yeahpay,this.reloadTable.bind(this));
        G_User.bindData(G_User.proDic.property_passMonths,this.reloadTable.bind(this));
    },

    reloadTable (){
        this.moneyLabel.string = G_User.money;
        this.yeahpayLabel.string = G_User.yeahpay;
        this.timeLabel.string = G_Game.getNowTimeStr();
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
            packageNode.getComponent("StockPanel").setStockId(stockId)
        }
    },

});
