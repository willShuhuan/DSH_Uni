(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/components/testcomponent"],{"4e46":function(t,n,e){"use strict";e.r(n);var u=e("911d"),c=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);n["default"]=c.a},"56b1":function(t,n,e){"use strict";e.r(n);var u=e("7f37"),c=e("4e46");for(var a in c)"default"!==a&&function(t){e.d(n,t,(function(){return c[t]}))}(a);var r,o=e("f0c5"),s=Object(o["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=s.exports},"7f37":function(t,n,e){"use strict";var u,c=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return u}))},"911d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"testComponent",props:{msg:{type:String,default:"default msg"}},methods:{clickFun:function(){this.msg="改变后的组件属性",this.$emit("clickFun",this.msg)}},data:function(){return{code:200,message:"success",data:{name:"vue"}}}};n.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/components/testcomponent-create-component',
    {
        'pages/components/testcomponent-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("56b1"))
        })
    },
    [['pages/components/testcomponent-create-component']]
]);
