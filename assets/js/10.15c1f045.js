(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{509:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var l=["default","primary","success","warning","danger","info","text"]},510:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));a(30);var l=a(0),r=a(509),i={tag:"el-radio-group",children:{tag:"el-radio-button",options:[{label:"是",value:!0},{label:"否",value:!1}]}},n={size:{tag:"el-radio-group",label:"尺寸(size)",key:"size",children:{tag:"el-radio-button",options:[{label:"large",value:"large"},{label:"medium",value:"medium"},{label:"small",value:"small"},{label:"mini",value:"mini"}]}},tootipEffect:{tag:"el-radio-group",label:"主题(effect)",key:"effect",children:{tag:"el-radio-button",options:[{label:"dark",value:"dark"},{label:"light",value:"light"}]}},btnType:function(e){return Object(l.a)({tag:"el-radio-group",label:"按钮类型(type)",key:"type",children:{tag:"el-radio-button",options:r.a.map((function(e){return{label:e,value:e}}))}},e)}}},511:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var l={name:"刘备",male:!0,remark:"汉昭烈帝刘备（161年－223年6月10日），字玄德，涿郡涿县（今河北省涿州市）人，西汉中山靖王刘胜之后，蜀汉开国皇帝（221年9月22日－223年6月10日）、政治家。史家多称其为先主。"}},513:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return s}));var l=a(0),r=a(510),i={tag:"el-input-number",label:"高度(height)",key:"height",props:{min:200,max:1600,step:100,precision:0,"step-strictly":!0}},n=[Object(l.a)({},r.b.size),Object(l.a)(Object(l.a)({},r.a),{},{label:"斑马样式(stripe)",key:"stripe"}),Object(l.a)(Object(l.a)({},r.a),{},{label:"边框样式(border)",key:"border"}),Object(l.a)(Object(l.a)({},r.a),{},{label:"列自动撑开(fit)",key:"fit"}),Object(l.a)(Object(l.a)({},r.a),{},{label:"显示header(show-header)",key:"show-header"}),Object(l.a)(Object(l.a)({},r.b.tootipEffect),{},{label:"tooltip主题(tooltip-effect)",key:"tooltip-effect"}),Object(l.a)(Object(l.a)({},r.a),{},{label:"多选行为(select-on-indeterminate)",key:"select-on-indeterminate"}),Object(l.a)(Object(l.a)({},r.a),{},{label:"显示合计行(show-summary)",key:"show-summary"}),{tag:"el-input",label:"合计数据(sum-text)",key:"sum-text"},{tag:"el-input-number",label:"默认分页数量(pageSize)",key:"pageSize",props:{min:1,max:15,step:1,precision:0,"step-strictly":!0}}],o=[Object(l.a)({},i),Object(l.a)(Object(l.a)({},i),{},{label:"最大高度(max-height)",key:"max-height"})],c=[Object(l.a)(Object(l.a)({},r.a),{},{label:"是否懒加载(lazy)",key:"lazy"}),Object(l.a)(Object(l.a)({},r.a),{},{label:"默认展开全部(default-expand-all)",key:"default-expand-all"}),{tag:"el-input-number",label:"缩进(indent)",key:"indent",props:{min:0,max:40,step:2,precision:0,"step-strictly":!0}}],s=[{tag:"el-input",label:"无数据(empty-text)",key:"empty-text"}]},598:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a(3),i=a(513),n=a(511),o={name:"DemoTableFixed",data:function(){var e=this.$createElement;return{searchList:Object(r.a)(i.d),params:{height:400,"max-height":500},tableData:[],total:34,columns:[{label:"ID",prop:"id",width:"60px"},{title:"姓名",key:"name",width:"140px",align:"center",renderHeader:function(e,t){var a=t.column;return e("span",["render ".concat(a.label)])}},{label:"性别",prop:"male",width:"80px",format:function(t,a,l,r){return e("span",[l?"男":"女"])}},{label:"介绍",prop:"remark",showOverflowTooltip:!0},{title:"操作",key:"operation",width:"80px",fixed:"right",render:function(e,t){t.row;return e("plh-button",{attrs:{type:"primary"}},["编辑"])}}]}},created:function(){this.createData()},methods:{createData:function(){for(var e=0;e<this.total;e++)this.tableData.push(Object(l.a)(Object(l.a)({},n.a),{},{id:e+1}))},handleSearch:function(e){this.params=Object(l.a)({},e)}}},c=a(2),s=Object(c.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo demo-table"},[a("h3",[e._v("配置项")]),e._v(" "),a("plh-search",{attrs:{params:e.params,searchList:e.searchList,showSubmit:!1,collapse:!1},on:{submit:e.handleSearch}}),e._v(" "),a("div",{staticClass:"mt10"},[a("plh-table",{ref:"table",attrs:{columns:e.columns,tableData:e.tableData,height:e.params.height,"max-height":e.params["max-height"]}})],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);