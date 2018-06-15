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

    },

    update (dt) {

    },

    reload (){
        this.reloadTable();
        this.reloadStock();
    },

    reloadTable (){
        this.moneyLabel.stirng = G_User.money;
        this.yeahpayLabel.stirng = G_User.yeahpay;
        this.yeahpayLabel.stirng = G_Game.getNowTimeStr();
    },

    reloadStock (){

    },


    getStockNode (data){
        let packageNode = cc.instantiate(this.stockPre);
        let pageName = packageNode.getChildByName("pageName").getComponent("cc.Label");
        pageName.string = data.parid + "号包裹";

        let packageContentLabel1 = packageNode.getChildByName("packageContentLabel1").getComponent("cc.Label");
        packageContentLabel1.string = data.ticket_prices/G_Con.bigNum;

        let packageContentLabel2 = packageNode.getChildByName("packageContentLabel2").getComponent("cc.Label");
        packageContentLabel2.string = data.cost_min/G_Con.bigNum + "-" + (data.cost_max/G_Con.bigNum);

        packageNode.package_data = data;
        packageNode.on(cc.Node.EventType.TOUCH_END,function(Event){
            this.createNewBig(Event.currentTarget.package_data);
        },this);

        if(data.parstatus == G_Con.packageState.enable){
            let timeFuc = function (dt) {
                let endTime = this.package_data.recycle_time;
                let nowDate = new Date();
                let nowTime = parseInt(nowDate.getTime()/1000);
                let leftSecond = endTime - nowTime;
                let packageContentLabel3 = this.getChildByName("packageContentLabel3").getComponent("cc.Label");

                if(leftSecond < 0){
                    packageContentLabel3.string = "已过期";
                }else{
                    if(leftSecond / 3600 > 24){
                        packageContentLabel3.string = "剩余：" + parseInt(leftSecond / (3600 * 24)) + "天";
                    }else{
                        packageContentLabel3.string = "剩余：" + G_Func.formatSeconds(leftSecond);
                    }
                }
            }.bind(packageNode);
            packageNode.getComponent(cc.Component).schedule(timeFuc,1)
            timeFuc();
        }else if(data.parstatus == G_Con.packageState.eaten){
            let packageContentLabel3 = packageNode.getChildByName("packageContentLabel3").getComponent("cc.Label");
            packageContentLabel3.string = "实际获得：" + data.final_prices/G_Con.bigNum;
        }else if(data.parstatus == G_Con.packageState.outDate){
            let packageContentLabel3 = packageNode.getChildByName("packageContentLabel3").getComponent("cc.Label");
            packageContentLabel3.string = "已过期";
        }

        return packageNode;
    },
});
