var get_lang=function(){
    var lang=localStorage.getItem('lang');
    if(lang){
        return lang;
    }
    lang=localStorage.getItem('umi_locale');
    if(lang){
        return lang;
    }
    return 'en-US';
}
var COM_LANG={
    en:{
        BTN1:'Confirm',
        BTN2:'Cancel'
    },
    de:{
        BTN1:'Bestätigen',
        BTN2:'Abbrechen'
    },
    fr:{
        BTN1:'Confirmer',
        BTN2 :'Annuler'
    },
    it:{
        BTN1:'Conferma',
        BTN2:'Annulla'
    },
    tr:{
        BTN1:'Onayla',
        BTN2:'İptal'
    },
    es:{
        BTN1: 'Confirmar',
        BTN2: 'Cancelar'
    }
}

var ltext_c=function(key){
    var lang=get_lang().split('-')[0];
    var obj=COM_LANG[lang];
    if(obj){
        return obj[key];
    }
    return COM_LANG['en'][key];
}
/**
 * 判断是否为空
 * @param {*} str 
 * @returns 
 */
var isEmpty=function(str){
    if(str==undefined||str==null||str==''){
        return false;
    }
    return true;
}
//验证全是数字
var isNum=function (value){
    var n = /^[0-9]*$/;
    var re = new RegExp(n);
    if (re.test(value))
    {
        return true;
    }
    else
    {
        return false;
    }
}
/**
 * 手机号输入
 * @param  tel 
 * @returns 
 */
var getTel=function(tel){
    tel=tel.split("+").join("").split(" ").join("");
    if(isEmpty(tel)){
        if(/^\d+$/.test(tel)){
            if(tel.length>5&&tel.length<12){
                return "63"+tel;
            }
        }
    }
    return tel;
}
/**
 * URL 重定向
 * @param {*} url 
 */
var openUrl=function(url){
    // var index=layer.load(1, {shade: [0.2,'#000']});
    location.href=url;
    // layer.close(index); 
}
/**
 * AJAX POST 请求
 * @param {*} url  请求地址
 * @param {*} data  数据
 * @param {*} onSuccess  成功回调
 * @param {*} onFail  失败回调
 */
var ajaxPost=function(url,data,onSuccess,onFail){
    var index = layer.load(1, {shade: [0.2,'#000']});
    $.ajax({
        url: url,
        data: data,
        type: 'POST',
        error:function(request){
       
        },
        complete:function(){
            layer.close(index);   
        },
        success: function (result) {
            const {status,mapMsg}=result;
            message=mapMsg[get_lang()];
            if(status==='SUCCESS'){
                onSuccess(result);
            }
            else{
                Popup.tip(message);
            }
        }
    });
}

var ajaxGet=function(url,data,onSuccess){
    var index = layer.load(1, {shade: [0.2,'#000']});
    $.ajax({
        url: url,
        data:data,
        type: 'GET',
        error:function(request){

        },
        complete:function(){
            layer.close(index);   
        },
        success: function (result) {
            const {status,mapMsg}=result;
            message=mapMsg[get_lang()];
            if(status==='SUCCESS'){
                onSuccess(result);
            }
            else{
                Popup.tip(message);
            }
        }
    });
}
var openPop=function(url,title,param,cancel,data){
    ajaxGet(url,param,function(html){
        var config={
            title:title, 
            type: 1, 
            shadeClose: true,
            shade: 0.2,
            content:html,
            maxmin: true,
            cancel:cancel,
            area: ['800px', 'auto'],
        };
        Object.assign(config,data);
        layer.open(config); 
    });
}
/**
 * 发送短信验证码
 * @param {} ele 
 * @param {*} tel 
 * @returns 
 */
var onSendCode=function onSendCode(ele,tel,uid) {
    if (ele.getAttribute("data-countting")) {
      return;
    }
    ajaxPost($(ele).attr('surl'),{tel:getTel(tel),uid:uid},function(){
        ele.classList.add("active");
        var text = "Send OTP";
        var time = 180;
        function countDown() {
          var counter = 0;
          var timer = setInterval(function () {
            counter++;
            var textEle = ele.querySelector("small");
            if (counter === time) {
              ele.setAttribute("data-countting", "");
              clearInterval(timer);
              textEle.textContent = text;
              ele.classList.remove("active");
              return;
            }
            textEle.textContent = (time - counter)+'s';
            ele.setAttribute("data-countting", counter);
          }, 1000);
        }
        countDown();
    });
  }

/**
 * 复杂内容
 * @param {*} text 
 */
var  copy=function(text) {
    let sk = navigator.userAgent.match(/(iPhone|iPod|iPad);?/i);
    const textarea = document.createElement("textarea");
    textarea.style.position = 'fixed' ;
    textarea.style.top = 0 ;
    textarea.style.left = 0 ;
    textarea.style.border = 'none' ;
    textarea.style.outline = 'none' ;
    textarea.style.resize = 'none';
    textarea.style.background = 'transparent' ;
    textarea.style.color = 'transparent';
    textarea.value = text ;// 修改文本框的内容
    document.body.appendChild(textarea);
    textarea.select()// 选中文本
    try {
        const msg = document.execCommand('copy') ?
            'Copied' : 'failed' ;
        layer.msg(msg);
    } catch (err) {
        layer.msg('failed');
    }
    document.body.removeChild(textarea);
}

var change_usdt=function(num,flag=1){
    var res=0;
    $.ajax({
        url: '/index/api/change_usdt',
        data:{num,flag},
        type: 'POST',
        async: false,
        success: function (result) {
            res=result;
        }
    });
    return res;
}
//上传文件
var Upload = {
    //上传图片
    image: function (elem, success, fail) {
       return  layui.upload.render({
           elem: elem //绑定元素
           , exts: 'jpg|png|gif|bmp|jpeg'
          , url: 'https://file.trx-tron.net/file/upload' //上传接口
          , done: function (result) {
              if (result.status == 'SUCCESS') {
                  if (success) {
                      success(result.data);
                  }
              }
              else {
                  Popup.error(result.message);
                  if (fail) {
                      fail(result);
                  }
              }
          }
          , error: function () {
              //请求异常回调
              Popup.error("请求接口异常");
              if (fail) {
                  fail();
              }
          }
        });
    },
    //上传PDF
    pdf: function (elem, success, fail) {
        var result=layui.upload.render({
            elem: elem //绑定元素
            , exts: 'pdf|PDF'
            ,accept:'application/pdf'
            , url: 'https://file.trx-tron.net/file/upload' //上传接口
            , done: function (result) {
        if (result.code == 1) {
            Popup.success("上传成功");
            if (success) {
                success(result.data);
            }
        }
        else {
            Popup.error(result.msg);
            if (fail) {
                fail(result);
            }
        }
    }
    , error: function () {
        //请求异常回调
        Popup.error("请求接口异常");
        if (fail) {
            fail();
        }
    }
        });
        $(elem).next("input[type=file]").attr("accept", "application/pdf");
        return result;
    },
    //上传文件
    file: function (elem, success, fail) {
        var exts=$(elem).attr('exts')||'jpg|png|gif|bmp|jpeg|pdf|zip|rar|doc|docx|xls|xlsx';
        return  layui.upload.render({
        elem: elem //绑定元素
        , exts: exts
       , url: 'https://file.trx-tron.net/file/upload' //上传接口
       , done: function (result) {
           if (result.uploaded) {
               Popup.success("上传成功");
               if (success) {
                   success(result.url,result.filename);
               }
           }
           else {
               Popup.error(result.error['message']);
               if (fail) {
                   fail(result);
               }
           }
       }
       , error: function () {
           //请求异常回调
           Popup.error("请求接口异常");
           if (fail) {
               fail();
           }
       }
    });
}
}
/*
*弹出提示
*/
var Popup = {
    loading: function () {
       return layer.load(3, { shade: [0.3,'#000'] });
    },
    success: function (msg,end) {
        layer.msg(msg, {
            icon: 6, shade: 0.2, shadeClose: true, time: 1000, end: end
        });
    },
    error: function (msg,end) {
        layer.msg(msg, { icon: 5, shade: 0.2, shadeClose: true, time: 3000, end: end });
    },
    tip: function (msg) {
        layer.msg(msg, { offset: '100px' });
    },
    confirm: function (msg, successFun, defaultFun) {
        layer.confirm(msg, {
            btn: [ltext_c('BTN1'), ltext_c('BTN2')] //按钮
        }, function () {
            layer.closeAll();
            successFun();
        }, function () {
            layer.closeAll();
            if (defaultFun) {
                defaultFun();
            }
        });
    },
    alert: function (title,msg, successFun) {
        layer.confirm(msg, {
            title:title,
            btn: [ltext_c('BTN2')] //按钮
        }, function () {
            layer.closeAll();
            if (successFun) {
                successFun();
            }
        });
    },
    prompt: function (title, successFun, formType) {
        layer.prompt({
            title: title,
            formType: formType,
            btn: [ltext_c('BTN1'),ltext_c('BTN2')] //按钮
        },
			function (text, index) {
			    layer.close(index);
			    successFun(text);
			});
    },
    popwin: function (option, data) {
        var content;
        var _width = "auto", _height = "auto";
        if (option.tpl) {
            content = layui.laytpl($(option.tpl).html()).render(data);
            delete option.tpl;
        }
        else {
            if (typeof (option.content) == "string"
                && option.content.indexOf('#') == 0) {
                content = $(option.content).html();
            }
            else {
                content = option.content;
            }
        }
        delete option.content;
        if (option.full) {
            _height = $(window.top.$('iframe')).height() + 'px';
        }
        var _option = {
            type: 1,
            area: [_width, _height],
            content: content
        };
        $.extend(true, _option, option);
        var index = layer.open(_option);
        if (option.full) {
            //全屏
            layer.full(index);
        }
        //绑定化表单数据
        if (data) {
            Common.bindFormData('#layui-layer' + index, data);
        }
        layui.form.render();
        return index;
    }
}
/**
 * 
 * @returns 判断手机端
 */
var isMobile= function() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return true; //是手机
    } else {
        return false; //是电脑
    }
}

//写Cookie
function addCookie(objName, objValue, objHours=72) {
    var str = objName + "=" + escape(objValue); //编码
    if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
}

//读Cookie
function getCookie(objName) {//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);  //解码
    }
    return "";
}
//获取URL地址参数
function getUrlQueryString(names, urls) {
    urls = urls || window.location.href;
    urls && urls.indexOf("?") > -1 ? urls = urls.substring(urls.indexOf("?") + 1) : "";
    var reg = new RegExp("(^|&)" + names + "=([^&]*)(&|$)", "i");
    var r = urls ? urls.match(reg) : window.location.search.substr(1).match(reg);
    if (r != null && r[2] != "")return unescape(r[2]);
    return null;
}


const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res) => {
                    resolve(res)
                },
                error: (error) => {
                    reject(error)
                },
                complete:function(){
                    reject()  
                }
            })
            func(args)
        })
    }
}
async function ajaxAsync({ url, data , type='POST'}){
    var index = layer.load(1, {shade: [0.2,'#000']});
    const result = await promisic($.ajax)({url, data, type});
    layer.close(index);   
    const {status,mapMsg}=result;
    if(mapMsg&&status!=='SUCCESS'){
        const message=mapMsg[get_lang()];
        Popup.tip(message);
        return {status,message,data:null};
    }
    return result;
}
var TimeTool={
    //字符串时间转换成时间戳
    toTimestamp:function(time){
        dateTmp = time.replace(/-/g,'/')   //为了兼容IOS，需先将字符串转换为'2018/9/11 9:11:23'
        timestamp = Date.parse(dateTmp);
        return timestamp; 
    },
    //时间戳转字符串时间 zone 时差（小时）
    toTimeString:function(timestamp,zone=0){
        timestamp=timestamp+zone*3600*1000;
        var time = new Date(timestamp)    //先将时间戳转为Date对象，然后才能使用Date的方法
        var year = time.getFullYear(),
            month = time.getMonth() + 1 ,  //月份是从0开始的
            day = time.getDate(),
            hour = time.getHours(),
            minute = time.getMinutes(),
            second = time.getSeconds()
        return  year+'-'+this.add0(month)+'-'+ this.add0(day)+' '+this.add0(hour)+':'+this.add0(minute);//+':'+this.add0(second);  
    },
    revertZoneTime:function(time){
       var timestamp=this.toTimestamp(time);
       var zone=-13;//美国时间减13小时
       var newTime=this.toTimeString(timestamp,zone);
       return newTime;
    },
    //补零
    add0:function(m){
        return m < 10 ? '0' + m: m
    }
}

function getUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  
// JS下的操作方法
// 获取键值：localStorage.getItem(“key”)
// 设置键值：localStorage.setItem(“key”,”value”)
// 清除键值：localStorage.removeItem(“key”)
// 清除所有键值：localStorage.clear()
// 获取键值2：localStorage.keyName
// 设置键值2：localStorage.keyName = “value”
// JQ下的操作方法（JS方法前加”window.”）
// 获取键值：window.localStorage.getItem(“key”)
// 设置键值：window.localStorage.setItem(“key”,”value”)
// 清除键值：window.localStorage.removeItem(“key”)
// 清除所有键值：window.localStorage.clear()
// 获取键值2：window.localStorage.keyName
// 设置键值2：window.localStorage.keyName = “value”