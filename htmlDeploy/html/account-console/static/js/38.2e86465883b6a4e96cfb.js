webpackJsonp([38],{Cw81:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("5MsS"),i=a("ryJa"),n=a.n(i),o={name:"WorkOrder",data:function(){return{pagination:{page:1,sizes:20,total:0,corId:9},radio:0,multipleSelection:[],allTableData:[],totalTableData:[],totalTableData2:[],filterTableData:[],search:{date:[],keyword:"",keywordOfName:"",startTime:"",endTime:"",timeout:null,dataList:[],userNameList:[]},dataList:[],questionTableDate:[]}},created:function(){this.getQuestionLists()},methods:{dateFormat:function(t,e){var a=t[e.property];return void 0===a?"":n()(a).format("YYYY-MM-DD HH:ss:mm")},dateFrm:function(t){return n()(t).format("YYYY-MM-DD")},getQuestionLists:function(t){var e=this;1===t&&(this.pagination.page=1),Object(s.d)({begin:this.search.startTime,end:this.search.endTime,page:this.pagination.page,size:this.pagination.sizes,keyword:this.search.keyword}).then(function(t){t.data.code===e.$global.successCode&&(e.questionTableDate=t.data.data.list,e.pagination.total=t.data.data.total)},function(t){console.log("请求数据失败",t)})},handleCurrentChange:function(t){this.pagination.page=t,this.getQuestionLists()},handleSizeChange:function(t){this.pagination.sizes=t,this.getQuestionLists()},getTimeDate:function(){var t=this;this.search.date?(this.search.date.forEach(function(e,a){t.dataList[a]=t.dateFrm(e)}),this.search.startTime=this.dataList[0],this.search.endTime=this.dataList[1],this.getQuestionLists(1)):(this.search.startTime="",this.search.endTime="",this.getQuestionLists(1))},deleteQuestion:function(t){var e=this;this.$confirm("是否确定删除该工单信息","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.b)({cqoId:t}).then(function(t){t.data.code===e.$global.successCode&&e.getQuestionLists()},function(t){console.log("删除工单信息数据失败",t)})}).catch(function(){})},handleSelectionChange:function(t){this.multipleSelection=t}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[t._m(0),t._v(" "),a("div",{staticClass:"clear"}),t._v(" "),a("div",{staticClass:"application_item2"},[a("div",{staticClass:"common-transverse-operation",staticStyle:{height:"40px"}},[a("div",{staticClass:"search-date",staticStyle:{float:"left"}},[a("el-date-picker",{attrs:{clearable:"",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.getTimeDate},model:{value:t.search.date,callback:function(e){t.$set(t.search,"date",e)},expression:"search.date"}})],1),t._v(" "),a("div",{staticClass:"search-input",staticStyle:{float:"left","margin-left":"20px"}},[a("el-input",{attrs:{placeholder:"关键字搜索","suffix-icon":"el-icon-search"},on:{change:function(e){return t.getQuestionLists(1)}},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1)]),t._v(" "),a("div",{staticClass:"table_item",staticStyle:{"margin-top":"20px"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",data:t.questionTableDate,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"cqoNo",label:"工单编号",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"overflowdiv",staticStyle:{width:"130px"},attrs:{title:e.row.cqoNo}},[t._v("\n              "+t._s(e.row.cqoNo)+"\n            ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"优先级",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.row.cqoType,expression:"scope.row.cqoType == 1"}]},[t._v("一般")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0==e.row.cqoType,expression:"scope.row.cqoType == 0"}],staticStyle:{color:"#f00"}},[t._v("重要")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"提交时间",formatter:t.dateFormat,width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"overflowdiv",staticStyle:{width:"140px"},attrs:{title:t.dateFrm(e.row.createTime)}},[t._v("\n              "+t._s(t.dateFrm(e.row.createTime))+"\n            ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"提交人",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.row.state,expression:"scope.row.state == 1"}]},[t._v("关闭")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0==e.row.state,expression:"scope.row.state == 0"}]},[t._v("正在处理")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"content",label:"问题内容",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"overflowdiv",staticStyle:{width:"200px"},attrs:{title:e.row.content}},[t._v("\n              "+t._s(e.row.content)+"\n            ")])]}}])}),t._v(" "),a("el-table-column"),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return t.deleteQuestion(e.row.cqoId)}}},[t._v("删除")]),t._v(" |\n            "),a("el-button",{attrs:{size:"mini",type:"text"}},[a("router-link",{attrs:{to:"/workorder/workorder-info/"+e.row.cqoId}},[t._v("详情")])],1)]}}])})],1)],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"page-sizes":[10,20,50,100],"page-size":t.pagination.sizes,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total,"current-page":t.pagination.page},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title_warp"},[e("h2",{staticClass:"title2"},[e("span",[this._v("工单管理")]),this._v(" > 我的工单")])])}]};var l=a("C7Lr")(o,r,!1,function(t){a("E/VB")},"data-v-59d1242c",null);e.default=l.exports},"E/VB":function(t,e){}});