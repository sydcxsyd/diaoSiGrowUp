window.G_User = {
    userBaseName : "",
    
    money : 0,//钱

    yeahpay : 0,//余额宝

    tradeCostPer : 0,
    //经过的时间
    passMonths : 0,
    //第几代
    generation : 0,
    //属性
    userProperties : {
        happy : 0,//幸福感
    },

    stockList : null,//股票列表

    propertyListenList : ["money","yeahpay"],

    initUserProperties (){
        for(var i in this.propertyListenList){
            this._addPropertyChangeEvent(this.propertyListenList[i]);
        }
    },

    _addPropertyChangeEvent (propertyName){
        Object.defineProperty(this, propertyName, {
            set : function(newValue){
                G_EventManager.pushEvent(G_Event.PROPERTY_CHANGED + propertyName,[newValue]);
            },
        });
    }
};