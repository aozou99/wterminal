(function(t){function e(e){for(var r,s,u=e[0],a=e[1],c=e[2],f=0,l=[];f<u.length;f++)s=u[f],o[s]&&l.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);p&&p(e);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var p=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"252b":function(t,e,n){"use strict";var r=n("e7fa"),o=n.n(r);o.a},"2c22":function(t,e,n){"use strict";var r=n("dd08"),o=n.n(r);o.a},5680:function(t,e,n){"use strict";var r=n("fdbf"),o=n.n(r);o.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._l(t.history,function(e,r){return n("HistoryLine",t._b({key:r},"HistoryLine",e,!1))}),n("InputLine",{on:{enter:t.exec}})],2)},i=[],s=n("9ab4"),u=n("60a3"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{ref:"line"},[n("span",{ref:"prefix"},[t._v(t._s(t.prefix))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.command,expression:"command"}],ref:"input",style:{width:t.width()},attrs:{type:"text"},domProps:{value:t.command},on:{keyup:t.onKeyUp,input:function(e){e.target.composing||(t.command=e.target.value)}}})])},c=[],p=n("f499"),f=n.n(p),l=n("86a7"),h=Object(l["createLocalStorage"])(),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.command="",e.prefix="$ ",e.lineW=0,e.prefixW=0,e.history=[],e.histIdx=0,e}return s["b"](e,t),e.prototype.mounted=function(){var t=h.getItem("command_history");null!==t&&(this.history=JSON.parse(t),this.histIdx=this.history.length),this.handleFocusInput(),this.lineW=window.innerWidth,this.prefixW=this.getHTMLElement("prefix").offsetWidth,window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleFocusInput)},e.prototype.beforeDestroy=function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("keydown",this.handleFocusInput)},e.prototype.width=function(){return this.lineW-this.prefixW-35+"px"},e.prototype.handleResize=function(){this.lineW=window.innerWidth},e.prototype.handleFocusInput=function(t){t&&(t.ctrlKey||t.altKey||t.metaKey||t.shiftKey)||this.getHTMLElement("input").focus()},e.prototype.getHTMLElement=function(t){return this.$refs[t]},e.prototype.enter=function(t,e){},e.prototype.onKeyUp=function(t){switch(t.key.toLowerCase()){case"enter":this.enter(this.command,this.prefix),this.history.push(this.command),h.setItem("command_history",f()(this.history)),this.command="",this.histIdx=this.history.length;break;case"arrowup":this.histIdx>0&&(this.histIdx--,this.command=this.history[this.histIdx]);break;case"arrowdown":this.histIdx<this.history.length&&(this.histIdx++,this.command=this.history[this.histIdx]);break;default:break}},s["a"]([Object(u["b"])()],e.prototype,"enter",null),e=s["a"]([u["a"]],e),e}(u["d"]),m=d,y=m,b=(n("2c22"),n("2877")),v=Object(b["a"])(y,a,c,!1,null,"2f058d50",null),g=v.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"history-line"},[t._v(t._s(t.prefix)+" "),n("span",{domProps:{innerHTML:t._s(t.content)}})])},x=[],S=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s["b"](e,t),s["a"]([Object(u["c"])()],e.prototype,"content",void 0),s["a"]([Object(u["c"])()],e.prototype,"prefix",void 0),e=s["a"]([u["a"]],e),e}(u["d"]),w=S,_=w,I=(n("252b"),Object(b["a"])(_,O,x,!1,null,null,null)),A=I.exports;n("28a5");function k(){return function(t){}}var M,N=n("a4bb"),j=n.n(N);(function(t){t[t["Semicolon"]=0]="Semicolon",t[t["Ampersand"]=1]="Ampersand",t[t["And"]=2]="And",t[t["Or"]=3]="Or"})(M||(M={}));var L={"&&":M.And,"||":M.Or,";":M.Semicolon,"&":M.Ampersand};function C(t){return L[t]}function P(){return j()(L)}var T=n("85f2"),U=n.n(T),B=(n("14b9"),n("55dd"),n("6762"),n("2fdb"),n("20d6"),function(){function t(t){this.command=t}var e;return e=t,t.parse=function(t,n){var r=new e(t),o=n.concat();return{mainOptions:r.parseMainOptions(o,!0),subCommand:r.parseSubCommand(o,!0),subOptions:r.parseSubOptions(o,!0),subArgs:r.parseSubArgs(o)}},t.prototype.parseMainOptions=function(t,n){void 0===n&&(n=!1);var r,o=this.command.SUB_COMMANDS,i=t.findIndex(function(t){return o.includes(t)});return r=i>-1?t.slice(0,i):t.concat(),e.filterOptions(r,this.command.MAIN_OPTIONS,n,t)},t.prototype.parseSubCommand=function(t,e){if(void 0===e&&(e=!1),!(t.length<1)&&this.command.SUB_COMMANDS.includes(t[0]))return e?t.shift():t[0]},t.prototype.parseSubOptions=function(t,n){return void 0===n&&(n=!1),e.filterOptions(t,this.command.SUB_OPTIONS,n,t)},t.prototype.parseSubArgs=function(t){return t},t.filterOptions=function(t,e,n,r){for(var o={},i=[],s=0,u=j()(e);s<u.length;s++){var a=u[s],c=void 0;if(!((c=t.indexOf(a))<0)){var p=void 0;e[a]&&void 0!==t[c+1]&&0!==t[c+1].indexOf("-")&&(p=t[c+1]),o[a]=p,n&&i.push(c)&&p&&i.push(c+1)}}if(n)for(var f=0,l=i.sort(function(t,e){return e-t});f<l.length;f++){var h=l[f];r.splice(h,1)}return o},t=e=s["a"]([k()],t),t}()),E=function(){function t(t,e,n){this.command=t,this.args=e,this.define=n,this.parsedArgs=B.parse(n,e)}return t}(),W=n("2ef0"),$=n.n(W),H={sushi:{photo:"🍣",price:300},agari:{photo:"🍵",price:0},oden:{photo:"🍢",price:80},ebifly:{photo:"🍤",price:150},beer:{photo:"🍺",price:380},sake:{photo:"🍶",price:600}},J=$.a.mapValues(H,function(t){return t.photo}),K=$.a.mapValues(H,function(t){return t.price}),z=function(){function t(){}var e;return e=t,t.convert=function(t,e){return void 0===e&&(e=!1),e?J[t]:J[t]||t},t.convertAll=function(t){for(var n=[],r=0,o=t;r<o.length;r++){var i=o[r];n.push(e.convert(i))}return n},t=e=s["a"]([k()],t),t}(),D=(n("c5f6"),n("4917"),function(){function t(){}return t.separate=function(t){return t.split(",").reduce(function(t,e){var n=e.split(":");return 2!==n.length?(1===n.length&&n[0].match(/^\d+$/)&&(t["all"]=Number(n[0])),t):(t[n[0]]=n[1].match(/^\d+$/)?Number(n[1]):1,t)},{})},t=s["a"]([k()],t),t}()),F=function(t){function e(n){return t.call(this,"taisyo",n,e)||this}return s["b"](e,t),e.prototype.execute=function(t){if(!this.doShowUsage(t,this.prefix,this.subCommand,this.subArgs))switch(this.subCommand){case"order":case"menu":case"bill":this[this.subCommand](t,this.prefix,this.subOptions,this.subArgs,e.localStorage);break;default:break}},e.prototype.bill=function(t,e,n,r,o){var i=JSON.parse(o.getItem("order_history")||"{}"),s=JSON.parse(o.getItem("bill_history")||"{}");t.out(e+" あいよ!");var u=0;$.a.each(i,function(e,n){void 0===s[n]&&(s[n]=0);var r=e-s[n];if(r>0){var o=r*K[n];t.out(J[n]+" : "+r+" ✖ "+K[n]+" = "+o.toLocaleString()+"円"),u+=o,s[n]+=r}}),u>0?t.out(e+" 毎度！しめて合計で<b>"+u.toLocaleString()+"</b>円だよ！"):t.out(e+" って何も食ってないんかーい！"),t.out("&nbsp;"),o.setItem("bill_history",f()(s))},e.prototype.menu=function(t,e){t.out(e+" あいよ！!"),$.a.each(H,function(e,n){t.out(n+" : "+e.photo+" : "+e.price+"円")})},e.prototype.order=function(t,e,n,r,o){var i=JSON.parse(o.getItem("order_history")||"{}"),s={},u=!1;if(n)for(var a=0,c=j()(n);a<c.length;a++){var p=c[a];switch(p){case"-n":s=D.separate(n[p]||"");break;case"-r":u=!0;break;default:break}}if(0!==j()(s).filter(function(t){return"all"!=t}).length||0!==r.length){var l=j()(s).filter(function(t){return"all"!=t&&!H[t]}),h=r.filter(function(t){return z.convert(t,!0)}),d=r.filter(function(t){return!z.convert(t,!0)}).concat(l).join();$.a.each(l,function(t){return delete s[t]}),d.length>0&&t.out(e+" "+d+" なんてのはメニューにないねぇ.");for(var m=0,y=h;m<y.length;m++){var b=y[m];s[b]=s[b]?s[b]+1:1}var v=0;"all"in s&&(v=s["all"]||1,delete s["all"]);for(var g=0,O=j()(s);g<O.length;g++){var x=O[g],S=u?"roll":"",w=v||s[x],_='<span class="'+S+'">'+z.convert(x)+"</span>";t.out(e+" あいよ! "+x+" "+w+"丁!"),t.out("(´･ω･)つ "+_.repeat(w)),t.out("&nbsp;"),i[x]||(i[x]=0),i[x]+=w}o.setItem("order_history",f()(i))}else t.out(e+" 食べたいものを注文しておくれやす.")},e.prototype.doShowUsage=function(t,e,n,r){var o=void 0===n;return o&&(void 0!==r&&r.length>0?t.out(e+" '"+r[0]+"' is not a taisyo command. See 'taisyo --help.'"):t.out("See 'taisyo --help.'")),o},U()(e.prototype,"subCommand",{get:function(){return this.parsedArgs.subCommand},enumerable:!0,configurable:!0}),U()(e.prototype,"subArgs",{get:function(){return this.parsedArgs.subArgs},enumerable:!0,configurable:!0}),U()(e.prototype,"subOptions",{get:function(){return this.parsedArgs.subOptions},enumerable:!0,configurable:!0}),U()(e.prototype,"prefix",{get:function(){return"(´･ω･) "},enumerable:!0,configurable:!0}),e.MAIN_OPTIONS={},e.SUB_COMMANDS=["order","menu","bill"],e.SUB_OPTIONS={"-n":"string","-r":void 0},e.localStorage=Object(l["createLocalStorage"])(),e}(E),R={taisyo:F},V=function(t){function e(n,r){return t.call(this,r,n,e)||this}return s["b"](e,t),e.prototype.execute=function(t){t.out("😇 : "+this.command+": command not found")},e.MAIN_OPTIONS={},e.SUB_COMMANDS=[],e.SUB_OPTIONS={},e}(E),q=function(){function t(){}return t.generate=function(t,e){var n=R[t];return void 0===n?new V(e,t):new n(e)},t=s["a"]([k()],t),t}(),G=function(){function t(){}var e;return e=t,t.separate=function(t){for(var n=[],r=e.separateBy(t,P()),o=0,i=r;o<i.length;o++){var s=i[o];if("number"!==typeof C(s)){var u=s.split(" ").map(function(t){return t.indexOf("--")<0&&0===t.indexOf("-")?t.substr(1).split("").map(function(t){return"-"+t}):t});u=Array.prototype.concat.apply([],u),n.push(q.generate(u.shift()||"",u))}else n.push(C(s))}return n},t.separateBy=function(t,n){var r=[],o=n.filter(function(e){return t.indexOf(e)>-1});if(0===o.length)return[t];for(var i=0,s=o;i<s.length;i++){var u=s[i],a=t.split(u);if(a.length>1){for(var c=0,p=a;c<p.length;c++){var f=p[c];r.push(e.separateBy(f,o)),r.push(u)}r.pop();break}}return Array.prototype.concat.apply([],r).filter(function(t){return""!==t}).map(function(t){return t.trim()})},t=e=s["a"]([k()],t),t}(),Q=function(){function t(t){this.output=t}return t.prototype.out=function(t){this.output.push({content:t})},t.prototype.error=function(t){this.output.push({content:this.css(t,{color:"red"})})},t.prototype.css=function(t,e){for(var n=[],r=0,o=j()(e);r<o.length;r++){var i=o[r];n.push(i+":"+e[i]+";")}return'<span style="'+n.join()+'">'+t+"</span>"},t}(),X=function(){function t(){}return t.init=function(e){t.system=new Q(e)},t.manage=function(e){for(var n=0,r=G.separate(e);n<r.length;n++){var o=r[n];switch(o){case M.Ampersand:break;case M.And:break;case M.Or:break;case M.Semicolon:break;default:o.execute(t.system);break}}},t}(),Y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.history=[],e}return s["b"](e,t),e.prototype.mounted=function(){X.init(this.history)},e.prototype.exec=function(t,e){this.history.push({content:t,prefix:e}),t.length>0&&X.manage(t)},e=s["a"]([Object(u["a"])({components:{InputLine:g,HistoryLine:A}})],e),e}(u["d"]),Z=Y,tt=Z,et=(n("5680"),Object(b["a"])(tt,o,i,!1,null,null,null)),nt=et.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(nt)}}).$mount("#app")},dd08:function(t,e,n){},e7fa:function(t,e,n){},fdbf:function(t,e,n){}});
//# sourceMappingURL=app.a82b9fc9.js.map