(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{536:function(a,e,t){},568:function(a,e,t){"use strict";t(536)},591:function(a,e,t){"use strict";t.r(e);var n={name:"demo-draggable-container",data:function(){return{activeTab:"1",value:[{title:"tab1",name:"1"},{title:"tab2",name:"2"},{title:"tab3",name:"3"},{title:"tab4",name:"4"}]}},mounted:function(){},methods:{}},l=(t(568),t(2)),i=Object(l.a)(n,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"demo demo-draggable"},[t("div",{staticClass:"tag-list"},[t("plh-draggable",{attrs:{containerSelector:".el-tabs__nav",draggableClassName:"el-tabs__item"},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}},[t("el-tabs",{model:{value:a.activeTab,callback:function(e){a.activeTab=e},expression:"activeTab"}},a._l(a.value,(function(e){return t("el-tab-pane",{key:e.name,staticClass:"item",attrs:{label:e.title,name:e.name}},[a._v("\n          "+a._s(e.title)+"\n        ")])})),1)],1),a._v(" "),t("p",{staticClass:"code"},[a._v("\n      "+a._s(JSON.stringify(a.value))+"\n    ")])],1)])}),[],!1,null,null,null);e.default=i.exports}}]);