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

		gotNum : 0,
        gotCost : 0,
	},

	//-----------game data -----------

	//----------- get --------------

    getUserName (){

    },

    getNowTimeStr (){

    },

    //----------- game contorl --------------
	gameInit (){
        G_User.stockList = {};
        this.stockInit();
	},

	stockInit (){
		for(let i in G_Stock){
            let obj = Object.create(this._stockObj);
            let data = G_Stock[i];
            obj.stockId = data.id;
            obj.nowPrice = data.basePrice;
            obj.priceHistory = {};
            obj.type = this._stockType.normal;
            G_User.stockList[obj.stockId] = obj;
		}
	},

	//时间流逝
	monthPass (monthsNum /* = 1 */){
        monthsNum = monthsNum || 1;
		this.randomPrice();
		this.randomEvent();
		this.checkEnd();
	},

	//随机商品价格
	randomPrice (){

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
        costMoney = costMoney * (1 + (G_User.tradeCostPer/100));
		if(G_User.money >= costMoney){
            G_User.money -= costMoney;
            stockData.gotNum += num;
		}else{
            cc.error("buyStock error!!!")
        }
	},
	//出售
	sellStock (stockId,num){
        let stockData = G_User.stockList[stockId];
        let gotMoney = stockData.nowPrice * num;
        G_User.money += gotMoney;
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