(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{511:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={name:"刘备",male:!0,remark:"汉昭烈帝刘备（161年－223年6月10日），字玄德，涿郡涿县（今河北省涿州市）人，西汉中山靖王刘胜之后，蜀汉开国皇帝（221年9月22日－223年6月10日）、政治家。史家多称其为先主。"}},597:function(e,t,n){"use strict";n.r(t);n(83),n(30),n(8),n(15),n(32);var a=n(0),r=n(511),i={name:"DemoTableFetch",data:function(){var e=this.$createElement;return{tableData:[],columns:[{type:"expand",fixed:"left",render:function(e,t){var n=t.row;return e("el-form",{attrs:{"label-position":"left",inline:!1},class:"demo-table-expand"},[e("el-form-item",{attrs:{label:"姓名"}},[e("span",[n.name])]),e("el-form-item",{attrs:{label:"性别"}},[e("span",[n.male?"男":"女"])]),e("el-form-item",{attrs:{label:"介绍"}},[e("span",[n.remark])])])}},{type:"selection",fixed:"left"},{label:"ID",prop:"id",width:"60px"},{title:"姓名",key:"name",width:"140px",align:"center",renderHeader:function(e,t){var n=t.column;return e("span",["render ".concat(n.label)])}},{label:"性别",prop:"male",width:"80px",format:function(t,n,a,r){return e("span",[a?"男":"女"])}},{label:"介绍",prop:"remark",showOverflowTooltip:!0},{title:"操作",key:"operation",width:"80px",fixed:"right",render:function(e,t){t.row;return e("plh-button",{attrs:{type:"primary"}},["编辑"])}}]}},created:function(){},methods:{getDataApi:function(e){return new Promise((function(t){setTimeout((function(){var n={code:0,msg:"请求成功",data:{entries:Array.from({length:e.pageSize}).map((function(t,n){return Object(a.a)(Object(a.a)({},r.a),{},{id:(e.current-1)*e.pageSize+n+1})})),total:56}};t(n)}),500)}))},handleSelectionChange:function(e){console.log("selection",e)}}},l=n(2),o=Object(l.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"demo demo-table"},[t("h3",[this._v("配置项")]),this._v(" "),t("div",{staticClass:"mt10"},[t("plh-table",{ref:"table",staticStyle:{width:"100%"},attrs:{columns:this.columns,api:this.getDataApi,pagination:{current:1,pageSize:10},keys:{list:"entries",total:"total"}},on:{"selection-change":this.handleSelectionChange}})],1)])}),[],!1,null,null,null);t.default=o.exports}}]);