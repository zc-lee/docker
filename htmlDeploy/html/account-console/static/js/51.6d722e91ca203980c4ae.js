webpackJsonp([51],{HVTm:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("L+8a"),i={data:function(){return{addDataList:[],userAppLicenseId:"",value2:[],appId:0,appName:"",user:{loading:!1,userId:"",data:[]},visible:{peopleList:!1,peopleDetail:!1},people:{dataList:[],search:{keyword:""},pageObject:{page:1,sizes:20,total:0}},table:{search:{keyword:""},pageObject:{page:1,sizes:20,total:0},dataList:[]}}},created:function(){this.getComAppList()},methods:{changeAppPage:function(e){this.people.pageObject.page=e,this.getPeopleList()},changeAppPageSize:function(e){this.people.pageObject.sizes=e,this.getPeopleList()},changePage:function(e){this.table.pageObject.page=e,this.getComAppList()},changePageSize:function(e){this.table.pageObject.sizes=e,this.getComAppList()},timestampToTime:function(e){return new Date(e+288e5).toJSON().substr(0,19).replace("T"," ")},getComAppList:function(e){var t=this;1===e&&(this.table.pageObject.page=1),Object(s.v)({page:this.table.pageObject.page,size:this.table.pageObject.sizes,keyword:this.table.search.keyword}).then(function(e){e.data.code===t.$global.successCode&&(t.table.dataList=e.data.data.list,t.table.pageObject.total=e.data.data.total)})},getPeopleList:function(e){var t=this;1===e&&(this.people.pageObject.page=1),Object(s.w)({appId:this.appId,page:this.people.pageObject.page,size:this.people.pageObject.sizes,keyword:this.people.search.keyword}).then(function(e){e.data.code===t.$global.successCode&&(t.people.dataList=e.data.data.list,t.people.pageObject.total=e.data.data.total)})},getNotInPeopleList:function(){var e=this;Object(s.t)({appId:this.appId}).then(function(t){e.addDataList=[],e.value2=[],t.data.data.forEach(function(t){e.addDataList.push({label:t.userName,key:t.userId})})})},getPeople:function(e){this.visible.peopleList=!0,this.appName=e.row.appName,this.appId=e.row.appId,this.people.pageObject.page=1,this.getPeopleList()},deleteUser:function(e){var t=this;this.$confirm("是否确定删除该成员:【"+e.row.userName+"】","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.s)({appUserId:e.row.userAppLicenseId}).then(function(e){e.data.code===t.$global.successCode&&(t.$message({showClose:!0,message:"删除成功!",type:"success"}),t.getPeopleList(),t.getComAppList())})}).catch(function(){})},postAddPeople:function(){var e=this;this.value2.length?Object(s.r)({appid:this.appId,userIdList:this.value2}).then(function(t){t.data.code===e.$global.successCode&&(console.log("[CODE]:",t.data.code),e.$message({showClose:!0,message:"增加成功！",type:"success"}),e.getPeopleList(),e.visible.peopleDetail=!1,e.getComAppList()),e.value2=[]}):this.$message({showClose:!0,message:"请选择要添加的用户！",type:"warning"})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[e._m(0),e._v(" "),a("div",{staticClass:"clear"}),e._v(" "),a("div",{staticClass:"application_item",staticStyle:{height:"calc(100vh - 153px)"}},[a("div",{staticClass:"common-setting-tab-content"},[a("div",{staticClass:"common-transverse-operation"},[a("div",{staticClass:"search-input"},[a("el-input",{attrs:{placeholder:"应用名称","suffix-icon":"el-icon-search"},on:{change:function(t){return e.getComAppList(1)}},model:{value:e.table.search.keyword,callback:function(t){e.$set(e.table.search,"keyword",t)},expression:"table.search.keyword"}})],1)]),e._v(" "),a("el-dialog",{staticClass:"private-pop",attrs:{title:"添加人员",visible:e.visible.peopleDetail,width:"600px"},on:{"update:visible":function(t){return e.$set(e.visible,"peopleDetail",t)}}},[a("div",{staticClass:"feedback-content"},[a("el-transfer",{attrs:{filterable:"","filter-placeholder":"请输入姓名",data:e.addDataList,titles:["未选中人员","选中人员"]},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.postAddPeople}},[e._v("确定")]),e._v(" "),a("el-button",{staticClass:"el-button--gry",attrs:{size:"medium"},on:{click:function(t){e.visible.peopleDetail=!1}}},[e._v("取消")])],1)]),e._v(" "),a("el-dialog",{staticClass:"private-pop",attrs:{title:"包含人员",visible:e.visible.peopleList,width:"950px"},on:{"update:visible":function(t){return e.$set(e.visible,"peopleList",t)}}},[a("div",{staticStyle:{"margin-bottom":"50px"}},[a("el-input",{staticStyle:{float:"left",width:"300px"},attrs:{placeholder:"搜索人员","suffix-icon":"el-icon-search"},on:{change:function(t){return e.getPeopleList(1)}},model:{value:e.people.search.keyword,callback:function(t){e.$set(e.people.search,"keyword",t)},expression:"people.search.keyword"}}),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"medium"},on:{click:function(t){e.visible.peopleDetail=!0,e.getNotInPeopleList()}}},[e._v("添加人员")])],1),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.people.dataList,height:"300px"}},[a("el-table-column",{attrs:{type:"index"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"姓名",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orgName",label:"部门",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"postName",label:"岗位"}}),e._v(" "),a("el-table-column",{attrs:{width:"140",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.deleteUser(t)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"common-paging-content",staticStyle:{"padding-bottom":"20px"}},[a("el-pagination",{attrs:{"current-page":e.people.pageObject.page,"page-sizes":[10,20,50,100],"page-size":e.people.pageObject.sizes,layout:"total, sizes, prev, pager, next, jumper",total:e.people.pageObject.total},on:{"size-change":e.changeAppPageSize,"current-change":e.changeAppPage}})],1)]),e._v(" "),a("div",{staticClass:"common-table"},[a("el-table",{ref:"postsTable",attrs:{data:e.table.dataList,height:"100%"}},[a("el-table-column",{attrs:{type:"index"}}),e._v(" "),a("el-table-column",{attrs:{prop:"appMark",label:"应用代码",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"appName",label:"应用名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"licnums",label:"许可人数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"hasnums",label:"已有人数"}}),e._v(" "),a("el-table-column",{attrs:{label:"许可开始日期","show-overflow-tooltip":!0,width:"155"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(e.timestampToTime(t.row.licenseBeginTime))}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"许可结束日期","show-overflow-tooltip":!0,width:"155"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(e.timestampToTime(t.row.licenseEndTime))}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"是否可增菜单",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.isMenu?a("i",{staticClass:"el-icon-check"}):e._e(),e._v(" "),1!==t.row.isMenu?a("i",{staticClass:"el-icon-close"}):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.getPeople(t)}}},[e._v("分配")])]}}])}),e._v(" "),a("el-table-column")],1)],1),e._v(" "),a("div",{staticClass:"common-paging-content"},[a("el-pagination",{attrs:{"current-page":e.table.pageObject.page,"page-sizes":[10,20,50,100],"page-size":e.table.pageObject.sizes,layout:"total, sizes, prev, pager, next, jumper",total:e.table.pageObject.total},on:{"size-change":e.changePageSize,"current-change":e.changePage}})],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title_warp"},[t("h2",{staticClass:"title2"},[t("span",[this._v("系统设置")]),this._v(" > 应用管理")])])}]};var o=a("C7Lr")(i,l,!1,function(e){a("m5vM")},"data-v-28a22dc4",null);t.default=o.exports},m5vM:function(e,t){}});