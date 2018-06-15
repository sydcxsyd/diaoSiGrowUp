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
		isGotNum : 0,
	},

	//-----------game data -----------

	//----------- get --------------

    getUserName (){

    },

    getNowTimeStr (){

    },

    //----------- game contorl --------------
	stockList : null,
	gameInit (){
        this.stockList = {};
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
            this.stockList[obj.stockId] = obj;
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

	//购买
	buyStock (stockId,num){

	},
	//出售
	sellStock (stockId,num){

	},

	//购买余额
	buyYeahpay (){

	},
    //出售余额
    sellYeahpay (){

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