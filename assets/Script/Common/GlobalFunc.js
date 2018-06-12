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

	resetNodeBoxCollider : function(node){
		var box = node.getComponent(cc.BoxCollider);
		var nodeSize = node.getContentSize();
		box.size = nodeSize;
		box.offset = cc.v2((0.5 - node.anchorX) * nodeSize.width,(0.5 - node.anchorY) * nodeSize.height)
    },

}

