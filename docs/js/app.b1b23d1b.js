(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},i={app:0},r=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-71367435":"e627a7ce"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-71367435":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-71367435":"9031dd55"}[t]+".css",i=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],m.parentNode.removeChild(m),n(r)},m.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(m)})).then((function(){o[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}i[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1bab":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("bc3a"),o=n.n(a);function i(t){var e=o.a.create({baseURL:"https://e023c809-e7bf-479b-b0ec-ecf089c638f1.bspapp.com/http",headers:{"Content-Type":"application/json"},timeout:8e3});return e(t)}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-app-bar",{attrs:{color:"#48466D",dark:"",app:""}},[t.logined?n("v-app-bar-nav-icon",{on:{click:function(e){t.open=!0}}}):t._e(),n("v-toolbar-title",[t._v("星芒")])],1),n("v-main",[n("router-view")],1),n("v-navigation-drawer",{staticClass:"main-background-color",attrs:{absolute:"",temporary:"",dark:""},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("v-list-item",[n("v-list-item-content",[n("div",{staticClass:"special-title"},[t._v(" 星芒袋："+t._s(this.$store.state.coin)+" 星芒 ")])])],1),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(n){return t.listClick(e.id)}}},[n("v-list-item-icon",[n("span",{staticClass:"material-icons"},[t._v(" "+t._s(e.icon)+" ")])]),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)],1)},i=[],r={data:function(){return{open:!1,items:[{id:1,icon:"handyman",title:"刻印工房"},{id:2,icon:"auto_awesome",title:"星台"},{id:3,icon:"logout",title:"退出登录"}]}},computed:{logined:function(){return this.$store.state.logined}},methods:{listClick:function(t){3==t&&(localStorage.removeItem("account"),localStorage.removeItem("password"),this.$store.commit("changeLogined",!1),this.$router.push("/login"))}}},s=r,c=(n("034f"),n("2877")),u=Object(c["a"])(s,o,i,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-overlay",{attrs:{value:!t.init}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),n("v-row",{staticStyle:{"margin-left":"0","margin-right":"0","margin-top":"1rem"},attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"11",lg:"6"}},[n("v-card",{directives:[{name:"show",rawName:"v-show",value:t.init,expression:"init"}],attrs:{elevation:"3"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",[n("div",{staticClass:"text-center top-margin-medium"},[t._v(" 你好, "+t._s(t.username)+" ")])])],1),n("v-row",{staticClass:"top-bar",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("div",{staticClass:"text-center"},[t._v(" 已连续签到 "+t._s(this.$store.state.continuity)+" 天 ")])]),n("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[n("div",[t._v("已累计签到 "+t._s(this.$store.state.days)+" 天")])])],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",id:"btn-col"}},[n("v-btn",{attrs:{loading:t.bigBtnLoading,color:"#424874",id:"check-btn",fab:"",dark:""},on:{click:t.doing}},[t.todayTimes<t.distTimes&&t.nextTimeArrive?n("v-icon",{staticClass:"btn-img",attrs:{large:""}},[t._v("mdi-check-bold")]):t._e(),t.todayTimes==t.distTimes?n("v-icon",{staticClass:"btn-img",attrs:{large:""}},[t._v("mdi-check-decagram")]):t._e(),!t.nextTimeArrive&&t.todayTimes<t.distTimes?n("span",{staticClass:"material-icons btn-img"},[t._v(" more_time ")]):t._e()],1)],1)],1),this.todayTimes!=this.distTimes?n("v-row",{attrs:{justify:"center"}},[t.todayChecked?t._e():n("v-col",{staticClass:"text-center",attrs:{cols:"auto"}},[t._v(" 今天还没有签到哦 ")]),t.todayChecked?n("v-col",{staticClass:"text-center",attrs:{cols:"auto"}},[t._v(" 今天已签到 "+t._s(t.todayTimes)+" 次"),n("br"),t._v(" 上次签到是 "+t._s(t.lastTime)+" "),n("br"),t.nextTimeArrive?t._e():n("span",[t._v(" 距离下次签到时间还有 "+t._s(t.nextTime)+"。 ")]),t.nextTimeArrive?n("span",[t._v(" 已经可以签到啦~ ")]):t._e()]):t._e()],1):t._e(),n("v-row",{attrs:{justify:"center"}},[this.todayTimes==this.distTimes?n("v-col",{staticClass:"text-center",attrs:{cols:"auto"}},[t._v(" 今天的签到已经完成了哦~ ")]):t._e()],1)],1)],1)],1),n("v-snackbar",{attrs:{top:""},model:{value:t.snackBar1,callback:function(e){t.snackBar1=e},expression:"snackBar1"}},[n("div",{staticClass:"text-center"},[t._v(" "+t._s(t.snackText1)+" ")])])],1)},v=[],f=(n("a9e3"),n("1bab"));function p(t){var e=t.account,n=t.date;return Object(f["a"])({url:"/check",method:"POST",data:{type:1,account:e,date:n}})}function h(t){var e=t.account,n=t.date,a=t.times;return Object(f["a"])({url:"/check",method:"POST",data:{type:2,account:e,date:n,times:a}})}var g=n("8d85"),b={name:"Home",components:{},data:function(){return{buttonIcon:!0,today:"2019-01-08",username:"",todayTimes:0,lastTime:"",nextTime:"",lastTimeStemp:"",snackBar1:!1,snackText1:"",todayChecked:!1,nextTimeArrive:!0,distTimes:2,init:!1,bigBtnLoading:!1}},mounted:function(){var t=this,e=this.$store.state.logined;e?(this.username=localStorage.getItem("account"),this.getTodayCheckData()):this.$router.push("/login");var n=this;this.loopNextTime(n),setInterval((function(){t.loopNextTime(n)}),500)},methods:{loopNextTime:function(t){if(t.todayChecked){var e=Number(this.lastTimeStemp)+36e6,n=(new Date).getTime(),a=(e-n)/1e3,o=parseInt(a/86400),i=parseInt(a/3600)-24*o,r=parseInt(a%3600/60),s=parseInt(a%60);this.nextTimeArrive=s<0,this.nextTime=i+"小时"+r+"分"+s+"秒",this.init=!0}},doing:function(){var t=this;if(this.bigBtnLoading=!0,this.todayTimes<this.distTimes)if(1==this.nextTimeArrive){var e=localStorage.getItem("account");h({account:e,date:this.today,times:this.todayTimes+1}).then((function(){t.$store.commit("setCoin",t.$store.state.coin+100);var n=localStorage.getItem("password");Object(g["d"])({account:e,password:n,coin:t.$store.state.coin}).then((function(){if(t.todayTimes+1==t.distTimes){var e=localStorage.getItem("account");Object(g["a"])({account:e,password:n}).then((function(){t.bigBtnLoading=!1,location.reload()}))}else t.bigBtnLoading=!1,location.reload()}))}))}else this.showSnackBar1("还没有到下次签到的时间哦"),this.bigBtnLoading=!1;else this.showSnackBar1("今天已经完成签到了哦，明天再来吧"),this.bigBtnLoading=!1},getTodayCheckData:function(){var t=this,e=localStorage.getItem("account"),n=new Date,a=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();this.today=a,p({account:e,date:a}).then((function(e){if(1==e.data["nomatch"])t.todayChecked=!1,t.init=!0;else{t.todayChecked=!0,t.todayTimes=e.data["check_times"];var n=new Date(Number(e.data["check_time"]));t.lastTimeStemp=n,t.lastTime=n.getHours()+":"+n.getMinutes()+":"+n.getSeconds()}}))},showSnackBar1:function(t){this.snackText1=t,this.snackBar1=!0}}},y=b,T=(n("cccb"),Object(c["a"])(y,m,v,!1,null,null,null)),_=T.exports;a["default"].use(d["a"]);var k=[{path:"/",name:"Home",component:_},{path:"/login",name:"Login",component:function(){return n.e("chunk-71367435").then(n.bind(null,"a55b"))}}],w=new d["a"]({routes:k}),C=w,x=n("2f62");a["default"].use(x["a"]);var S=new x["a"].Store({state:{logined:!1,coin:0,days:0,continuity:0},mutations:{changeLogined:function(t,e){t.logined=e},setCoin:function(t,e){t.coin=e},setDays:function(t,e){t.days=e},setContinuity:function(t,e){t.continuity=e}},actions:{},modules:{}}),j=(n("d1e78"),n("5363"),n("ce5b")),O=n.n(j);n("bf40");a["default"].use(O.a);var B={},L=new O.a(B);a["default"].config.productionTip=!1,new a["default"]({router:C,store:S,vuetify:L,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},"8d85":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s}));var a=n("1bab");function o(t){var e=t.account,n=t.password;return Object(a["a"])({url:"/user",method:"POST",data:{type:1,account:e,password:n}})}function i(t){var e=t.account,n=t.password;return Object(a["a"])({url:"/user",method:"POST",data:{type:2,account:e,password:n}})}function r(t){var e=t.account,n=t.password,o=t.coin;return Object(a["a"])({url:"/user",method:"POST",data:{type:3,account:e,password:n,coin:o}})}function s(t){var e=t.account,n=t.password;return Object(a["a"])({url:"/user",method:"POST",data:{type:4,account:e,password:n}})}},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.b1b23d1b.js.map