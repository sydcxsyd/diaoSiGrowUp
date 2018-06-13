window.G_Game = {

	gameInit (){

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