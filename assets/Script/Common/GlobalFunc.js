// window.globalVar = window.globalVar;
window.G_Func = {
	//接受参数
	//() 取一个0到1的随机数
	//(max) 取一个0到max的随机数
	//(min，max) 取一个min到max的随机数max>min
	getRandom : function(){
	    if(arguments.length < 1){
	        return Math.random()
	    }else if(arguments.length == 1){
	        return parseInt(Math.random()*1000000)%arguments[0];
	    }else if(arguments.length == 2){
	        return parseInt(Math.random()*(arguments[1]-arguments[0]+1) + arguments[0]);
	    }
	},

	//mean中值，std_dev标准差
    getNumberInNormalDistribution (mean,std_dev){
    	return mean+(this.randomNormalDistribution()*std_dev);
	},

	randomNormalDistribution(){
		var u=0.0, v=0.0, w=0.0, c=0.0;
		do{
			//获得两个（-1,1）的独立随机变量
			u=Math.random()*2-1.0;
			v=Math.random()*2-1.0;
			w=u*u+v*v;
		}while(w==0.0||w>=1.0)
		//这里就是 Box-Muller转换
		c=Math.sqrt((-2*Math.log(w))/w);
		//返回2个标准正态分布的随机数，封装进一个数组返回
		//当然，因为这个函数运行较快，也可以扔掉一个
		//return [u*c,v*c];
		return u*c;
	},

	resetNodeBoxCollider : function(node){
		var box = node.getComponent(cc.BoxCollider);
		var nodeSize = node.getContentSize();
		box.size = nodeSize;
		box.offset = cc.v2((0.5 - node.anchorX) * nodeSize.width,(0.5 - node.anchorY) * nodeSize.height)
    },

}

