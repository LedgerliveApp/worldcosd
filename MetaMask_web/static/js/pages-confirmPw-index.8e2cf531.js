(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-confirmPw-index"],{"0143":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{isCheck:!1,blurIndex:-1,isShowPw:!1,pw:"",confirmPw:"",isConfirm:!1}},methods:{back:function(){uni.navigateBack()},inputFun:function(t){this.blurIndex=t},handlePw:function(){""!==this.pw&&""!==this.confirmPw?this.pw.length<8?this.isConfirm=!1:this.pw===this.confirmPw&&this.isCheck?this.isConfirm=!0:this.isConfirm=!1:this.isConfirm=!1},toLink:function(){uni.showLoading(),setTimeout((function(){uni.hideLoading(),uni.navigateTo({url:"/pages/confirmPw/stepSecond"})}),1e3)}}};i.default=n},"113a":function(t,i,e){"use strict";e.r(i);var n=e("f9e1"),a=e("f539");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("853e");var s=e("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"97437052",null,!1,n["a"],void 0);i["default"]=c.exports},2765:function(t,i,e){var n=e("5e50");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("172308e0",n,!0,{sourceMap:!1,shadowMode:!1})},"5e50":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.wapper[data-v-97437052]{display:flex;padding:%?40?%;flex-direction:column}.wapper .top[data-v-97437052]{display:flex;justify-content:space-between}.wapper .top uni-image[data-v-97437052]{height:%?64?%}.content[data-v-97437052]{border:1px solid #d6d9dc;margin:%?40?% 0;padding:%?50?% %?40?%;border-radius:%?16?%;display:flex;flex-direction:column}.step[data-v-97437052]{display:flex;justify-content:space-between;position:relative}.step i[data-v-97437052]{z-index:1;position:absolute;left:16.666%;top:0;display:flex;width:66.66%;height:%?34?%;border-bottom:1px solid #d6d9dc}.step .step-item[data-v-97437052]{display:flex;align-items:center;flex-direction:column;flex:0 0 33.33%}.step .step-item span[data-v-97437052]{position:relative;z-index:2}.step .step-item span[data-v-97437052]:nth-child(1){width:%?60?%;height:%?60?%;border-radius:100%;display:flex;justify-content:center;align-items:center;font-size:%?26?%;border:2px solid #d6d9dc;color:#535a61;margin-bottom:%?16?%;background-color:#fff}.step .step-item span[data-v-97437052]:nth-child(2){font-size:%?24?%}.step .step-item.active span[data-v-97437052]{color:#0376c9}.step .step-item.active span[data-v-97437052]:nth-child(1){border:2px solid #0376c9}.head[data-v-97437052]{position:relative;display:flex;flex-direction:column;justify-content:center}.head .tit[data-v-97437052]{font-size:%?56?%;font-weight:700;color:#000;margin:%?50?% 0 %?10?%;text-align:center}.head .tit2[data-v-97437052]{font-size:%?32?%;color:#222;text-align:center;line-height:1.6}.head .cont[data-v-97437052]{display:flex;flex-direction:column}.head .cont .tit[data-v-97437052]{margin:%?40?% 0 %?10?%;display:flex;justify-content:space-between}.head .cont .tit span[data-v-97437052]{font-size:%?24?%;color:#222;font-weight:600}.head .cont .tit span[data-v-97437052]:nth-child(2){color:#0376c9;font-weight:500}.head .cont .input[data-v-97437052]{position:relative;height:%?100?%}.head .cont .input uni-input[data-v-97437052]{width:100%;border:1px solid #ccc;font-size:%?32?%;border-radius:%?10?%;padding:%?0?% %?24?%;height:%?100?%;box-sizing:border-box}.head .cont .input uni-input.active[data-v-97437052]{border:1px solid #333}.footer[data-v-97437052]{justify-self:flex-end;display:flex;flex-direction:column;margin:%?16?% 0 0 0}.footer .checkbox[data-v-97437052]{display:flex;justify-content:center;width:100%;margin-bottom:%?26?%}.footer .checkbox .check-img[data-v-97437052]{flex:0 0 %?42?%;width:%?42?%;height:%?42?%;margin-right:%?6?%;position:relative;top:%?2?%}.footer .checkbox uni-text[data-v-97437052]{font-size:%?28?%}.footer .btn-box .btn[data-v-97437052]{display:flex;background-color:#0376c9;font-size:%?32?%;padding:%?32?% 0;color:#fff;flex:1;justify-content:center;border-radius:%?50?%;opacity:.2}.footer .btn-box .btn.active[data-v-97437052]{opacity:1}',""]),t.exports=i},"853e":function(t,i,e){"use strict";var n=e("2765"),a=e.n(n);a.a},a256:function(t,i,e){t.exports=e.p+"static/img/metamask-fox.c06f3a3e.svg"},a8af:function(t,i){t.exports="data:image/png;base64,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"},cc59:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAACMxJREFUeF7tm71uVEcYhr9ZAzeAG7gCIgEpgV3Ax2HXDgV0UINASpRIlFBiSiiREiUSCGrooCC2l/gY2AXKAFK4AmjMDWC8ExmCkkj8fbM5c9b7PrR8c2bed55H6/WRg/GPBmjgow0EuqEBGvh4AwgCHTTwiQYQBDxoAEFggAbSGuATJK03Vok0gCAiF03MtAYQJK03Vok0gCAiF03MtAYQJK03Vok0gCAiF03MtAYQJK03Vok0gCAiF03MtAYQJK03Vok0gCAiF03MtAYQJK03Vok0gCAiF03MtAYQJK03Vok0gCAiF03MtAYQJK03Vok0gCAiF03MtAYQJK03Vok0gCAiF03MtAYQJK03Vok0gCAiF03MtAZGTpD5pf6OiRC/iRaOmcVJC7bVok2a2ea0iKwa0QZWLdiKRXtlFlaCxZtrMfw+O918PkrnHRlBFpZ6J0Kw78xs7ygVxFmyN/AoRvt1Zrp1PfvOH9iwdkHulg+PDGztjFloj0IhnGFUGojdhk1cPlTsu13niWoVpFv2zkazi3UWwN6j3UAwO9cuWpfqOmVtgswv3Z9rhMb5uoKz78ZpYBAHF2anD8zVceJaBOku90/FGK/UEZg9N2YDIYTT7anm1dynzy7IQtk/FizeyB2U/TZ+A9HC8ZmieTNnkqyCvPtCPriVMyB7jVcDDWsczfnFPasgi+WDRX5bNV7A5k8Tu51ifyfXvtkE+fs9x7VcwdhnfBuI0U7mek+STZDF5f4ji3HP+F4bybI1EMLjzlQzywvlLILc6d7bvWnTxB/ZCmSjsW/gzZu1rw+3Dz6pOmgWQXghWPU16j0/1wvELIIslv0ls1joXSOJq2sglJ2iOV3d8989OZMgvadmtrPqMDxfqoFnnaK1q+rEeQRZ7r2waNuqDsPzhRoI9rIz1dpedeI8gpS918P9PUcoqy6C59fRwFA/dq92itaWqk+dS5A4XJA8P28Od0ZWexr4P76XdopW5fxWvsF6aYtlD0E89AjMIsi/LhlBBIh3RkQQBHEiozWOIAiiRbwzLYIgiBMZrXEEQRAt4p1pEQRBnMhojSMIgmgR70yLIAjiREZrHEEQRIt4Z1oEQRAnMlrjCIIgWsQ70yIIgjiR0RpHEATRIt6ZFkEQxImM1jiCIIgW8c60CIIgTmS0xhEEQbSId6ZFEARxIqM1jiAIokW8My2CIIgTGa1xBEEQLeKdaREEQZzIaI0jCIJoEe9MiyAI4kRGaxxBEESLeGdaBEEQJzJa4wiCIFrEO9MiCII4kdEaRxAE0SLemRZBEMSJjNY4giCIFvHOtAiCIE5ktMYRBEG0iHemRRAEcSKjNY4gCKJFvDMtgiCIExmtcQRBEC3inWkRBEGcyGiNIwiCaBHvTIsgCOJERmscQRBEi3hnWgRBECcyWuMIgiBaxDvTIgiCOJHRGkcQBNEi3pkWQRDEiYzWOIIgiBbxzrQIgiBOZLTGEQRBtIh3pkUQBHEiozWOIAiiRbwzLYIgiBMZrXEEQRAt4p1pEQRBnMhojSMIgmgR70yLIAjiREZrHEEQRIt4Z1oEQRAnMlrjCIIgWsQ70yIIgjiR0RpHEATRIt6ZFkEQxImM1jiCIIgW8c60CIIgTmS0xhEEQbSId6ZFEARxIqM1jiAIokW8My2CIIgTGa1xBEEQLeKdaREEQZzIaI0jCIJoEe9MiyAI4kRGaxxBEESLeGdaBEEQJzJa4wiCIFrEO9MiCII4kdEaRxAE0SLemRZBEMSJjNY4giCIFvHOtAiCIE5ktMYRBEG0iHemRRAEcSKjNY4gCKJFvDMtgiCIExmtcQRBEC3inWkRBEGcyGiNIwiCaBHvTIsgCOJERmscQRBEi3hnWgRBECcyWuMIgiBaxDvTIgiCOJHRGkcQBNEi3pkWQRDEiYzWOIIgiBbxzrQIgiBOZLTGEQRBtIh3pkUQBHEiozWOIAiiRbwzLYIgiBMZrXEEQRAt4p1pEQRBnMhojSMIgmgR70yLIAjiREZrHEEQRIt4Z1oEQRAnMlrjCIIgWsQ70yIIgjiR0RpHEATRIt6ZFkEQxImM1jiCIIgW8c60CIIgTmS0xhEEQbSId6ZFEARxIqM1jiD/FeS1mW1ORyCU6WtZOboNxGKIs612itaWIdZ/0dLwRVNDDi0u915YtG1DPoblNPBPA8FedqZa26uuJI8gZe+pme2sOgzPl2rgWado7ao6cSZB+ktmQ32cVt0Dz99wDYSyUzSnqz52FkG6Ze+HaPZT1WF4vk4DwezHdtH6uerEWQSZX+rvaIT4Z9VheL5OA4MYvpqdbj6vOnEWQdZDLJa9h2a2t+pAPF+igUedorUvR9Jsgiws9U6EYNdyhGKP8W4gRjs5M926niNlNkHefYo8WDQL7RzB2GNcG4jdTrG/kytdVkHulg+PDGxwK1c49hm/BhrWOHqo2Hc7V7KsgqyH6pa9s9HsYq6A7DM+DQSzc+2idSlnouyCrIebX7o/1wiN8zmDstfGbmAQBxdmpw/M5U5RiyBvP0mW+6dijFdyB2a/jddACOF0e6p5tY6T1ybIetiFsn8sWLxRR3D23BgNRAvHZ4rmzbpOW6sg66HffXFfO8Nvt+pCYFT3jd2GTVzO+YX8Q03ULsj7Q719T9II31uMe0b1yjhXhgZCeBwH8Zdc7zk+l2hkBHl/0Dvde7s3b5r4Nlo4bBYnLdhWizY53N+TfK4G/r+GBlYt2IpFe2UWVoLFO6tv1n473D74pIazfHTLkRNklMrhLDSAIDBAA59oAEHAgwYQBAZoIK0BPkHSemOVSAMIInLRxExrAEHSemOVSAMIInLRxExrAEHSemOVSAMIInLRxExrAEHSemOVSAMIInLRxExrAEHSemOVSAMIInLRxExrAEHSemOVSAMIInLRxExrAEHSemOVSAMIInLRxExrAEHSemOVSAMIInLRxExrAEHSemOVSAMIInLRxExrAEHSemOVSAMIInLRxExrAEHSemOVSAN/AbZDjBSGhYfJAAAAAElFTkSuQmCC"},f539:function(t,i,e){"use strict";e.r(i);var n=e("0143"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},f9e1:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"wapper"},[n("div",{staticClass:"top"},[n("v-uni-image",{attrs:{src:e("a256"),mode:"heightFix"}})],1),n("div",{staticClass:"content"},[n("div",{staticClass:"step"},[n("div",{staticClass:"step-item active"},[n("span",[t._v("1")]),n("span",[t._v("Create password")])]),n("div",{staticClass:"step-item"},[n("span",[t._v("2")]),n("span",[t._v("Secure wallet")])]),n("div",{staticClass:"step-item"},[n("span",[t._v("3")]),n("span",[t._v("Confirm secret recovery phrase")])]),n("i")]),n("div",{staticClass:"head"},[n("div",{staticClass:"tit"},[t._v("Create password")]),n("div",{staticClass:"tit2"},[t._v("This password will unlock your MetaMask wallet only on this device. MetaMask can not recover this password.")]),n("div",{staticClass:"cont"},[n("div",{staticClass:"tit"},[n("span",[t._v("New password (8 characters min)")]),n("span",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.isShowPw=!t.isShowPw}}},[t._v(t._s(t.isShowPw?"Hide":"Show"))])]),n("div",{staticClass:"input"},[n("v-uni-input",{class:{active:1===t.blurIndex},attrs:{password:!t.isShowPw,placeholder:""},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.inputFun(-1)},focus:function(i){arguments[0]=i=t.$handleEvent(i),t.inputFun(1)},input:function(i){arguments[0]=i=t.$handleEvent(i),t.handlePw.apply(void 0,arguments)}},model:{value:t.pw,callback:function(i){t.pw=i},expression:"pw"}})],1),n("div",{staticClass:"tit"},[n("span",[t._v("Confirm password")])]),n("div",{staticClass:"input"},[n("v-uni-input",{class:{active:2===t.blurIndex},attrs:{password:!t.isShowPw,placeholder:""},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.inputFun(-1)},focus:function(i){arguments[0]=i=t.$handleEvent(i),t.inputFun(2)},input:function(i){arguments[0]=i=t.$handleEvent(i),t.handlePw.apply(void 0,arguments)}},model:{value:t.confirmPw,callback:function(i){t.confirmPw=i},expression:"confirmPw"}})],1)])]),n("div",{staticClass:"footer"},[n("div",{staticClass:"checkbox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.isCheck=!t.isCheck}}},[t.isCheck?n("v-uni-image",{staticClass:"check-img",attrs:{src:e("a8af"),mode:"heightFix"}}):n("v-uni-image",{staticClass:"check-img",attrs:{src:e("cc59"),mode:"heightFix"}}),n("v-uni-text",{staticStyle:{color:"#24272a"}},[t._v("I understand that MetaMask cannot recover this password for me."),n("v-uni-text",{staticStyle:{color:"#0376c9"}},[t._v("Learn more")])],1)],1),n("div",{staticClass:"btn-box"},[n("span",{staticClass:"btn",class:{active:t.isConfirm},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toLink()}}},[t._v("Create a new wallet")])])])])])},a=[]}}]);