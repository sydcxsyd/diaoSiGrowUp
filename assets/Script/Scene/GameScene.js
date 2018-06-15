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
    },

    onLoad () {
        
    },

    start () {
        G_Game.gameInit();
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
        let listContent = cc.find("buyScrollList/view/content");
        listContent.removeAllChildren();
        for(let i = 0 ; i < listContent.stockList.length ; i ++){
            let packageNode = cc.instantiate(this.stockPre);
            packageNode.parent = listContent;
        }
        this.reloadStockData();
    },

    reloadStockData (){
        let listContent = cc.find("buyScrollList/view/content");
        for(let i = 0 ; i < listContent.stockList.length ; i ++){
            let stockId = G_Game.stockList[i].stockId;
            let packageNode = listContent.children[i];
            packageNode.setStockId(stockId)
        }
    },

});
