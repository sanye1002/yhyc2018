webpackJsonp([5],{Ahrm:function(t,e,s){s("hfYZ");var a=s("mEwh")(s("C6as"),s("F8XJ"),"data-v-7ddaa13d",null);t.exports=a.exports},C6as:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Bh5c");e.default={data:function(){return{inputType:"password",inputFlag:!0,forgetPassword:!0,flag:!0,loginType:!0,disabled:!1,verifyFlag:!1,time:60,timeCode:"获取验证码",phone:"",password:"",password2:"",password3:"",password4:"",codeForget:"",codeRegister:"",font:"正在登陆请稍后..."}},created:function(){var t=this.$route.query.QQOpenID,e=this.$route.query.QQAccessToken,o=s("mw3O"),i=this;this.$http.post("https://news.immnc.com/api/user/oauth/qq",o.stringify({QQOpenID:t,QQAccessToken:e})).then(function(t){if(0==(t=t.data).code){var e=t.data.userVO;Object(a.i)(e.userId,e.nikeName,e.avatar,e.qq,e.sex,e.email,e.city,e.birthday,e.signature,e.backgroundImg,e.phone,e.fansCounts,e.followCounts,!0);var s=Object(a.e)();i.$Notice.success({title:"登陆成功"}),""==s||null==s?setTimeout(function(){i.$router.push("/home")},1e3):setTimeout(function(){window.location.href=s},1e3)}}).catch(function(t){})}}},F8XJ:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loginWrapper"},[a("img",{staticClass:"login_bg",attrs:{src:s("hreQ")}}),t._v(" "),a("div",{staticClass:"loginCardWrapper"},[a("Card",{staticClass:"loginCard"},[a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:"/home"}},[a("img",{attrs:{src:s("eOq7")}})])],1),t._v(" "),a("div",[a("h2",[t._v("了解世界,从妙漫开始")])]),t._v(" "),a("div",{staticClass:"login_page"},[a("div",[a("h2",{staticStyle:{color:"#333"}},[t._v(t._s(t.font))]),t._v(" "),a("h3",{staticStyle:{color:"rgb(45, 140, 240)","text-align":"center"}},[a("a",{attrs:{href:"http://www.immnc.com/"}},[t._v("如果没有跳转,请点击这里")])])])])])],1)])},staticRenderFns:[]}},hfYZ:function(t,e){}});
//# sourceMappingURL=5.f83dc8084d838f95a43b.js.map