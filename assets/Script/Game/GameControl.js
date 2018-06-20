window.G_Game = {

	_stockType : {
		normal : 1,
		pause : 2,
	},

	_stockObj : {
        stockId : 0,
		nowPrice : 0,
		priceHistory : null,
        type : 0,

        _gotNum : 0,
        set gotNum(newValue){
            this._gotNum = newValue;
            G_EventManager.pushEvent(G_Event.property_stockGotNumChanged,[newValue])
        },

        get gotNum(){
            return this._gotNum;
        },

        gotPrice : 0,

        randomPrice : function(){
            let stockBaseData = G_Stock[this.stockId];
            this.nowPrice = G_Func.getNumberInNormalDistribution(stockBaseData.basePrice,stockBaseData.std_dev)
            this.nowPrice = parseInt(this.nowPrice * 10) / 10;
        },
	},

	//-----------game data -----------

	//----------- get --------------

    getUserName (){

    },

    getNowTimeStr (){
        let year = parseInt(G_User.passMonths/12);
        let month = G_User.passMonths%12;
        let reStr = "第" + year + "年" + month + "月";
		return reStr
    },

    getStockChangePercent (stockId){
		let data = G_User.stockList[stockId];
		if(data.priceHistory[data.priceHistory.length - 1]){
            let percent = data.priceHistory[data.priceHistory.length - 1]/data.nowPrice;
            percent = parseInt(percent * 1000)/10;
            percent -= 100;
            return percent;
		}else{
			return 0;
		}

	},

    //----------- game contorl --------------
	gameInit (){
        G_User.stockList = {};
        this.stockInit();
        G_User.initUserProperties();
        G_User.money = G_Con.baseMoney;
        G_User.yeahpay = G_Con.baseYeahpay;
        G_User.passMonths = 0;

	},

	stockInit (){
		for(let i in G_Stock){
            let obj = Object.create(this._stockObj);
            let data = G_Stock[i];
            obj.stockId = data.id;
            obj.nowPrice = data.basePrice;
            obj.priceHistory = [];
            obj.type = this._stockType.normal;
            obj.gotNum = 0;
            obj.gotPrice = 0;
            G_User.stockList[obj.stockId] = obj;
		}
	},

	//时间流逝
	monthPass (monthsNum /* = 1 */){
        monthsNum = monthsNum || 1;
        G_User.passMonths += monthsNum;
		this.randomPrice();
		this.randomEvent();
		this.checkEnd();
	},

	//随机价格
	randomPrice (){
	    for(let i in G_User.stockList){
            G_User.stockList[i].randomPrice();
        }
	},

	//随机事件
	randomEvent (){

	},

	//检查结束
	checkEnd (){

	},

	//获取最大可以购买的数量（为100的整数倍）
    getMaxEnableNum (stockId){
        let stockData = G_User.stockList[stockId];
        let costMoney = stockData.nowPrice * (1 + (G_User.tradeCostPer/100));
        let num = G_User.money/costMoney;
        num = parseInt(num/100) * 100;
        return num;
	},

	//购买
	buyStock (stockId,num){
        let stockData = G_User.stockList[stockId];
        let costMoney = stockData.nowPrice * num;
        let gotCost = stockData.gotPrice * stockData.gotNum;
        costMoney = costMoney * (1 + (G_User.tradeCostPer/100));
		if(G_User.money >= costMoney){
            G_User.money -= costMoney;
            stockData.gotNum += num;
            stockData.gotPrice = (gotCost + costMoney)/stockData.gotNum;
		}else{
            cc.error("buyStock error!!!")
        }
	},
	//出售
	sellStock (stockId,num){
        let stockData = G_User.stockList[stockId];
        if(stockData.gotNum >= num){
            stockData.gotNum -= num;
            let gotMoney = stockData.nowPrice * num;
            G_User.money += gotMoney;
            if(stockData.gotNum == 0){
                stockData.gotPrice = 0;
            }
		}else{
            cc.error("sellStock error!!!")
		}

	},

	//购买余额
	buyYeahpay (num){
		if(G_User.money >= num){
            G_User.money -= num;
            G_User.yeahpay += num;
		}else{
			cc.error("buyYeahpay error!!!")
		}
	},
    //出售余额
    sellYeahpay (num){
        if(G_User.yeahpay >= num){
            G_User.money += num;
            G_User.yeahpay -= num;
        }else{
            cc.error("sellYeahpay error!!!")
        }
    },

	//去打工
	doPartTimeJob (months){

	},

	//购房
	buyHouse (houseId){

	},

	sellHouse (houseId){

	},

	//买车
	buyCar (carId){

	},

	//娶妻
	buyWife (wifeId){

	},


};