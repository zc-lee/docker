webpackJsonp([18],{"p26+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("xzFr"),s=a("iz/j"),i=a("VnLn"),o=a("ryJa"),c=a.n(o),l={data:function(){return{breadcrumb:{items:[{index:1,title:"首页"},{index:2,title:"回收站"}]},tabs:{active:"1"},search:{keyword:""},table:{loading:!1,selection:[],dataList:[]},pageObject:{page:this.$global.pageParam.page,size:this.$global.pageParam.size,total:this.$global.pageParam.total}}},mounted:function(){this.listRecycleBin()},methods:{listRecycleBin:function(){var t=this;this.table.loading=!0,Object(i.A)(this.getRequestParams()).then(function(e){var a=e.data.data;t.pageObject.total=a.total,t.table.dataList=a.list,t.table.loading=!1}).catch(function(e){t.table.loading=!1})},handleChange:function(){this.listRecycleBin()},getRequestParams:function(){var t={page:this.pageObject.page,size:this.pageObject.size};return this.search.keyword&&(t.keyword=this.search.keyword),t},formatTimeStamp:function(t){return c()(t).format("YYYY-MM-DD HH:mm:ss")},selectionChange:function(t){this.table.selection=t.map(function(t){return t.companyId})},pickUpPrivate:function(){var t=this;0!==this.table.selection.length?this.$confirm("是否确定将选择的客户捡回私海","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.c)(t.table.selection).then(function(e){e.data.code===t.$global.successCode&&(t.$message({message:"捡回私海成功",type:"success"}),t.listRecycleBin())}).catch(function(t){})}).catch(function(){}):this.$message({message:"请选择客户",type:"warning"})},backToHighSea:function(){var t=this;0!==this.table.selection.length?this.$confirm("是否确定将选择的客户放回公海","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.e)({customerIds:t.table.selection,position:0}).then(function(e){e.data.code===t.$global.successCode&&(t.$message({message:"放回公海成功",type:"success"}),t.listRecycleBin())}).catch(function(t){})}).catch(function(){}):this.$message({message:"请选择客户",type:"warning"})},deleteCustomer:function(){var t=this;0!==this.table.selection.length?this.$confirm("是否确定将选择的客户删除","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.e)({customerIds:t.table.selection,position:-2}).then(function(e){e.data.code===t.$global.successCode&&(t.$message({message:"删除客户成功",type:"success"}),t.listRecycleBin())}).catch(function(t){})}).catch(function(){}):this.$message({message:"请选择客户",type:"warning"})}},components:{pagination:n.a,breadcrumb:s.a}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("div",{staticClass:"tabs-box"},[a("div",{staticClass:"common-operation"},[a("div",{staticClass:"button-box-one"},[a("el-button",{attrs:{type:"text"},on:{click:t.backToHighSea}},[t._v("放回公海")]),t._v(" "),a("b",[t._v("|")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:t.pickUpPrivate}},[t._v("捡回私海")]),t._v(" "),a("b",[t._v("|")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:t.deleteCustomer}},[t._v("删除")])],1),t._v(" "),a("div",{staticClass:"search-box"},[a("div",{staticClass:"search-keyword"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容","suffix-icon":"el-icon-search"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.listRecycleBin(e)}},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1),t._v(" "),a("breadcrumb",{staticClass:"common-breadcrumb",attrs:{items:t.breadcrumb.items}})],1)]),t._v(" "),a("div",{staticClass:"common-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],staticStyle:{width:"100%"},attrs:{data:t.table.dataList,height:"100%"},on:{"selection-change":t.selectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyName",width:"250",label:"公司名称","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"公司地址","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"region",label:"区域",width:"150","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"industry",label:"行业",width:"250","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{sortable:"",label:"创建时间",width:"160","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.formatTimeStamp(e.row.openTime)))])]}}])})],1)],1),t._v(" "),a("pagination",{attrs:{"page-object":t.pageObject},on:{pageChange:t.handleChange}})],1)])},staticRenderFns:[]};var u=a("C7Lr")(l,r,!1,function(t){a("qWis")},"data-v-04f624bc",null);e.default=u.exports},qWis:function(t,e){}});