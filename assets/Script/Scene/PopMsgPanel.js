// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        closeBtn : {
            default : null,
            type : cc.Button,
        },

        cancelBtn : {
            default : null,
            type : cc.Button,
        },

        confirmBtn : {
            default : null,
            type : cc.Button,
        },

        headLabel : {
            default : null,
            type : cc.Label,
        },

        contentLabel : {
            default : null,
            type : cc.Label,
        },

        callBackHandle : {
            default : null,
            visible : false,
        },
    },

    start () {

    },

    init (handle,content,head) {
        this.callBackHandle = handle;
        if(content){
            this.setContentString(content);
        }

        if(head){
            this.setHeadString(content);
        }
    },

    setHeadString : function(str){
        this.headLabel.string = str;
    },

    setContentString : function(str){
        this.contentLabel.string = str;
    },

    onClickCloseBtn (event){
        this.node.destroy();
    },

    onClickConfirmBtn (event){
        if(this.callBackHandle){
            this.callBackHandle();
        }
        this.node.destroy();
    },

    onClickCancleBtn (event){
        this.node.destroy();
    },
});
