webpackJsonp([26],{P8TL:function(e,l){},RKtG:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("Ln58"),o={props:["mentId","linkId"],data:function(){return{typeOptions:[{value:"0",label:"空文本"},{value:"1",label:"日期"},{value:"2",label:"日期时间",disabled:!0},{value:"3",label:"整数"},{value:"4",label:"两位小数"},{value:"5",label:"四位小数"},{value:"6",label:"六位小数"},{value:"7",label:"状态"}],mobileOptions:[{value:"H1",label:"H1"},{value:"H2",label:"H2"},{value:"H3",label:"H3"},{value:"H4",label:"H4"},{value:"H5",label:"H5"}],modal:{visible:!1,mentId:"",labelWidth:"110px",form:{columnOrder:"",columnType:"",formTitle:"",linkId:"",listShow:"",objType:"",pk:"",sapColumns:"",sapColumnsCn:"",tableType:"",tableTypeCn:"",wdColumnsId:"",wdIsSearch:"",wdTableId:Number(this.mentId)}},update:{visible:!1,mentId:"",labelWidth:"110px",columnOrderLabel:"",form:{columnOrder:"",columnType:"",formTitle:"",linkId:"",listShow:"",objType:"",pk:"",sapColumns:"",sapColumnsCn:"",tableType:"",tableTypeCn:"",wdColumnsId:"",wdIsSearch:"",wdTableId:""}},table:{search:{keyword:""},pageObject:{page:1,sizes:20,total:100},dataList:[]},columnList:[]}},methods:{sequence:function(e,l){var t=this;Object(a.t)({linkId:e.linkId,order:e.wdOrder,type:l,wdTableId:e.wdTableId}).then(function(e){e.data.code===t.$global.successCode&&(t.$message({message:"字段排序成功",type:"success"}),t.getSapTableData())})},getColumn:function(){var e=this,l=Number(this.mentId);Object(a.m)({mentId:l,type:1}).then(function(l){l.data.code===e.$global.successCode&&(e.columnList=l.data.data)})},openUpdateDialog:function(e){this.update.visible=!0,"ASC"===e.columnOrder?this.update.columnOrderLabel=1:"DESC"===e.columnOrder?this.update.columnOrderLabel=0:this.update.columnOrderLabel="",this.update.form={columnOrder:e.columnOrder,columnType:e.columnType,formTitle:e.formTitle,linkId:e.linkId,listShow:e.listShow,objType:e.objType,pk:e.pk,sapColumns:e.sapColumns,sapColumnsCn:e.sapColumnsCn,tableType:e.tableType,tableTypeCn:e.tableTypeCn,wdColumnsId:e.wdColumnsId,wdIsSearch:e.wdIsSearch,wdTableId:e.wdTableId}},updateTableField:function(){var e=this;this.update.form.columnOrder=this.update.columnOrderLabel,Object(a.v)(this.update.form).then(function(l){l.data.code===e.$global.successCode&&(e.$message({message:"字段更新成功",type:"success"}),e.update.visible=!1,e.getSapTableData())})},getSapTableData:function(e){var l=this,t=Number(this.mentId);1===e&&(this.table.pageObject.page=1),Object(a.p)({ment_id:t,page:this.table.pageObject.page,size:this.table.pageObject.sizes,keyword:this.table.search.keyword}).then(function(e){e.data.code===l.$global.successCode&&(l.table.dataList=e.data.data.list,l.table.pageObject.total=e.data.data.total)})},addTableField:function(){var e=this,l=Number(this.mentId),t=Number(this.linkId);Object(a.c)({columnOrder:this.modal.form.columnOrder,columnType:this.modal.form.columnType,formTitle:this.modal.form.formTitle,linkId:t,listShow:this.modal.form.listShow,objType:this.modal.form.objType,pk:this.modal.form.pk,sapColumns:this.modal.form.sapColumns,sapColumnsCn:this.modal.form.sapColumnsCn,tableType:this.modal.form.tableType,tableTypeCn:this.modal.form.tableTypeCn,wdColumnsId:this.modal.form.wdColumnsId,wdIsSearch:this.modal.form.wdIsSearch,wdTableId:l}).then(function(l){l.data.code===e.$global.successCode&&(e.$message({message:"字段添加成功",type:"success"}),e.modal.visible=!1,e.modal.form={},e.getSapTableData())})},deleteForm:function(e){var l=this;this.$confirm("是否确定删除该条数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.h)({linkId:e.linkId,sapColumns:e.sapColumns,wdTableId:e.wdTableId}).then(function(e){e.data.code===l.$global.successCode&&(l.$message({message:"删除数据成功",type:"success"}),l.getSapTableData())})}).catch(function(){l.$message("取消删除操作")})},handleCurrentChange:function(e){this.table.pageObject.page=e,this.getSapTableData()},handleSizeChange:function(e){this.table.pageObject.sizes=e,this.getSapTableData()}},created:function(){this.getSapTableData(),this.getColumn()}},s={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"application_item",staticStyle:{height:"calc(100vh - 153px)",padding:"0"}},[t("div",{staticClass:"common-setting-tab-content"},[t("div",{staticClass:"common-transverse-operation"},[t("el-button",{attrs:{type:"primary"},on:{click:function(l){e.modal.visible=!0}}},[e._v("添加字段")]),e._v(" "),t("div",{staticClass:"search-input"},[t("el-input",{attrs:{placeholder:"搜索...","suffix-icon":"el-icon-search"},on:{change:function(l){return e.getSapTableData(1)}},model:{value:e.table.search.keyword,callback:function(l){e.$set(e.table.search,"keyword",l)},expression:"table.search.keyword"}})],1)],1),e._v(" "),t("el-dialog",{staticStyle:{"font-weight":"bold"},attrs:{title:"添加主表字段",visible:e.modal.visible},on:{"update:visible":function(l){return e.$set(e.modal,"visible",l)}}},[t("el-row",{attrs:{gutter:5}},[t("el-col",{attrs:{xs:12,sm:12,md:12,lg:12,xl:12}},[t("div",{staticClass:"grid-content bg-purple"},[t("el-form",{staticClass:"common-modal-input",attrs:{model:e.modal.form}},[t("el-form-item",{attrs:{label:"SAP表中文名","label-width":e.modal.labelWidth,required:""}},[t("el-input",{model:{value:e.modal.form.sapColumnsCn,callback:function(l){e.$set(e.modal.form,"sapColumnsCn",l)},expression:"modal.form.sapColumnsCn"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"表类型","label-width":e.modal.labelWidth,required:""}},[t("el-input",{model:{value:e.modal.form.tableType,callback:function(l){e.$set(e.modal.form,"tableType",l)},expression:"modal.form.tableType"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"SAP字段","label-width":e.modal.labelWidth,required:""}},[t("el-input",{model:{value:e.modal.form.sapColumns,callback:function(l){e.$set(e.modal.form,"sapColumns",l)},expression:"modal.form.sapColumns"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"主表名称","label-width":e.modal.labelWidth,required:""}},[t("el-input",{model:{value:e.modal.form.tableTypeCn,callback:function(l){e.$set(e.modal.form,"tableTypeCn",l)},expression:"modal.form.tableTypeCn"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"表单ID","label-width":e.modal.labelWidth,required:""}},[t("el-input",{attrs:{disabled:""},model:{value:e.modal.form.wdTableId,callback:function(l){e.$set(e.modal.form,"wdTableId",l)},expression:"modal.form.wdTableId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"字段名称ID","label-width":e.modal.labelWidth,required:""}},[t("el-select",{model:{value:e.modal.form.wdColumnsId,callback:function(l){e.$set(e.modal.form,"wdColumnsId",l)},expression:"modal.form.wdColumnsId"}},e._l(e.columnList,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1)]),e._v(" "),t("el-col",{attrs:{xs:12,sm:12,md:12,lg:12,xl:12}},[t("div",{staticClass:"grid-content bg-purple-light"},[t("el-form",{staticClass:"common-modal-input",attrs:{model:e.modal.form}},[t("el-form-item",{attrs:{label:"手机端显示","label-width":e.modal.labelWidth}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.modal.form.formTitle,callback:function(l){e.$set(e.modal.form,"formTitle",l)},expression:"modal.form.formTitle"}},e._l(e.mobileOptions,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"字段类型","label-width":e.modal.labelWidth}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.modal.form.columnType,callback:function(l){e.$set(e.modal.form,"columnType",l)},expression:"modal.form.columnType"}},e._l(e.typeOptions,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"是否显示列表","label-width":e.modal.labelWidth}},[t("el-radio-group",{model:{value:e.modal.form.listShow,callback:function(l){e.$set(e.modal.form,"listShow",l)},expression:"modal.form.listShow"}},[t("el-radio",{attrs:{label:1}},[e._v("是    ")]),e._v(" "),t("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"是否查询字段","label-width":e.modal.labelWidth}},[t("el-radio-group",{model:{value:e.modal.form.wdIsSearch,callback:function(l){e.$set(e.modal.form,"wdIsSearch",l)},expression:"modal.form.wdIsSearch"}},[t("el-radio",{attrs:{label:1}},[e._v("是    ")]),e._v(" "),t("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"是否主键","label-width":e.modal.labelWidth}},[t("el-radio-group",{model:{value:e.modal.form.pk,callback:function(l){e.$set(e.modal.form,"pk",l)},expression:"modal.form.pk"}},[t("el-radio",{attrs:{label:1}},[e._v("是    ")]),e._v(" "),t("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"排序","label-width":e.modal.labelWidth}},[t("el-radio-group",{model:{value:e.modal.form.columnOrder,callback:function(l){e.$set(e.modal.form,"columnOrder",l)},expression:"modal.form.columnOrder"}},[t("el-radio",{attrs:{che:"",label:1}},[e._v("升序")]),e._v(" "),t("el-radio",{attrs:{label:0}},[e._v("降序")])],1)],1)],1)],1)])],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.addTableField}},[e._v("确 定")]),e._v(" "),t("el-button",{on:{click:function(l){e.modal.visible=!1}}},[e._v("取 消")])],1)],1),e._v(" "),t("el-dialog",{staticStyle:{"font-weight":"bold"},attrs:{title:"更新主表字段",visible:e.update.visible},on:{"update:visible":function(l){return e.$set(e.update,"visible",l)}}},[t("el-row",{attrs:{gutter:5}},[t("el-col",{attrs:{xs:12,sm:12,md:12,lg:12,xl:12}},[t("div",{staticClass:"grid-content bg-purple"},[t("el-form",{staticClass:"common-modal-input",attrs:{model:e.update.form}},[t("el-form-item",{attrs:{label:"SAP表中文名","label-width":e.update.labelWidth,required:""}},[t("el-input",{model:{value:e.update.form.sapColumnsCn,callback:function(l){e.$set(e.update.form,"sapColumnsCn",l)},expression:"update.form.sapColumnsCn"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"表类型","label-width":e.update.labelWidth,required:""}},[t("el-input",{model:{value:e.update.form.tableType,callback:function(l){e.$set(e.update.form,"tableType",l)},expression:"update.form.tableType"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"SAP字段","label-width":e.update.labelWidth,required:""}},[t("el-input",{attrs:{disabled:""},model:{value:e.update.form.sapColumns,callback:function(l){e.$set(e.update.form,"sapColumns",l)},expression:"update.form.sapColumns"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"主表名称","label-width":e.update.labelWidth,required:""}},[t("el-input",{model:{value:e.update.form.tableTypeCn,callback:function(l){e.$set(e.update.form,"tableTypeCn",l)},expression:"update.form.tableTypeCn"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"表单ID","label-width":e.update.labelWidth,required:""}},[t("el-input",{attrs:{disabled:""},model:{value:e.update.form.wdTableId,callback:function(l){e.$set(e.update.form,"wdTableId",l)},expression:"update.form.wdTableId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"字段名称ID","label-width":e.update.labelWidth,required:""}},[t("el-select",{model:{value:e.update.form.wdColumnsId,callback:function(l){e.$set(e.update.form,"wdColumnsId",l)},expression:"update.form.wdColumnsId"}},e._l(e.columnList,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1)]),e._v(" "),t("el-col",{attrs:{xs:12,sm:12,md:12,lg:12,xl:12}},[t("div",{staticClass:"grid-content bg-purple-light"},[t("el-form",{staticClass:"common-modal-input",attrs:{model:e.update.form}},[t("el-form-item",{attrs:{label:"手机端显示","label-width":e.modal.labelWidth}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.update.form.formTitle,callback:function(l){e.$set(e.update.form,"formTitle",l)},expression:"update.form.formTitle"}},e._l(e.mobileOptions,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"字段类型","label-width":e.update.labelWidth}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.update.form.columnType,callback:function(l){e.$set(e.update.form,"columnType",l)},expression:"update.form.columnType"}},e._l(e.typeOptions,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"是否显示列表","label-width":e.update.labelWidth}},[t("el-radio-group",{model:{value:e.update.form.listShow,callback:function(l){e.$set(e.update.form,"listShow",l)},expression:"update.form.listShow"}},[t("el-radio",{attrs:{label:1}},[e._v("是    ")]),e._v(" "),t("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"是否查询字段","label-width":e.update.labelWidth}},[t("el-radio-group",{model:{value:e.update.form.wdIsSearch,callback:function(l){e.$set(e.update.form,"wdIsSearch",l)},expression:"update.form.wdIsSearch"}},[t("el-radio",{attrs:{label:1}},[e._v("是    ")]),e._v(" "),t("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"是否主键","label-width":e.update.labelWidth}},[t("el-radio-group",{model:{value:e.update.form.pk,callback:function(l){e.$set(e.update.form,"pk",l)},expression:"update.form.pk"}},[t("el-radio",{attrs:{label:1}},[e._v("是    ")]),e._v(" "),t("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"字段排序","label-width":e.update.labelWidth}},[t("el-radio-group",{model:{value:e.update.columnOrderLabel,callback:function(l){e.$set(e.update,"columnOrderLabel",l)},expression:"update.columnOrderLabel"}},[t("el-radio",{attrs:{label:1}},[e._v("升序")]),e._v(" "),t("el-radio",{attrs:{label:0}},[e._v("降序")])],1)],1)],1)],1)])],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.updateTableField}},[e._v("确 定")]),e._v(" "),t("el-button",{on:{click:function(l){e.update.visible=!1}}},[e._v("取 消")])],1)],1),e._v(" "),t("div",{staticClass:"common-table"},[t("el-table",{ref:"postsTable",attrs:{data:e.table.dataList,height:"100%"}},[t("el-table-column",{attrs:{type:"index",width:"60"}}),e._v(" "),t("el-table-column",{attrs:{label:"SAP表中文名",width:"120"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("span",{staticClass:"click-col",on:{click:function(t){return e.openUpdateDialog(l.row)}}},[e._v(e._s(l.row.sapColumnsCn))])]}}])}),e._v(" "),t("el-table-column",{attrs:{width:"100",label:"排序"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"向上移动",placement:"top"}},[t("i",{staticClass:"el-icon-upload2",staticStyle:{color:"#00aaee"},on:{click:function(t){return e.sequence(l.row,1)}}})]),e._v(" "),t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"向下移动",placement:"top"}},[t("i",{staticClass:"el-icon-download",staticStyle:{color:"#00aaee"},on:{click:function(t){return e.sequence(l.row,2)}}})])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"sapColumns",label:"SAP表字段",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{prop:"sapColumnsCn",label:"SAP表字段名",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"wdTableId",label:"表单编号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"wdTableName",label:"表名",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{prop:"tableType",label:"表类型"}}),e._v(" "),t("el-table-column",{attrs:{prop:"tableTypeCn",label:"表类型名称",width:"110"}}),e._v(" "),t("el-table-column",{attrs:{prop:"wdColumnsName",label:"控件字段名",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{prop:"wdColumnsId",label:"控件字段ID",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{prop:"formTitle",label:"手机端显示",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{prop:"listShow",label:"是否显示列表",width:"110"},scopedSlots:e._u([{key:"default",fn:function(l){return[1===l.row.listShow?t("span",[e._v("是")]):e._e(),e._v(" "),0==l.row.listShow?t("span",[e._v("否")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"pk",label:"是否主键",width:"100"},scopedSlots:e._u([{key:"default",fn:function(l){return[1===l.row.pk?t("span",[e._v("是")]):e._e(),e._v(" "),0==l.row.pk?t("span",[e._v("否")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"wdIsSearch",label:"是否查询字段",width:"120"},scopedSlots:e._u([{key:"default",fn:function(l){return[1===l.row.wdIsSearch?t("span",[e._v("是")]):e._e(),e._v(" "),0==l.row.wdIsSearch?t("span",[e._v("否")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"columnType",label:"字段类型",width:"100"},scopedSlots:e._u([{key:"default",fn:function(l){return["0"===l.row.columnType||"null"===l.row.columnType||null===l.row.columnType?t("span",[e._v("空文本")]):e._e(),e._v(" "),"1"===l.row.columnType?t("span",[e._v("日期")]):e._e(),e._v(" "),"2"===l.row.columnType?t("span",[e._v("日期时间")]):e._e(),e._v(" "),"3"===l.row.columnType?t("span",[e._v("整数")]):e._e(),e._v(" "),"4"===l.row.columnType?t("span",[e._v("两位小数")]):e._e(),e._v(" "),"5"===l.row.columnType?t("span",[e._v("四位小数")]):e._e(),e._v(" "),"6"===l.row.columnType?t("span",[e._v("六位小数")]):e._e(),e._v(" "),"7"===l.row.columnType?t("span",[e._v("状态")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"columnOrder",label:"字段排序",width:"100"},scopedSlots:e._u([{key:"default",fn:function(l){return["ASC"===l.row.columnOrder?t("span",[e._v("升序")]):e._e(),e._v(" "),"DESC"==l.row.columnOrder?t("span",[e._v("降序")]):e._e(),e._v(" "),null==l.row.columnOrder||""==l.row.columnOrder?t("span",[e._v("无")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.deleteForm(l.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),t("div",{staticClass:"common-paging-content"},[t("el-pagination",{attrs:{"current-page":e.table.pageObject.page,"page-sizes":[10,20,50,100],"page-size":e.table.pageObject.sizes,layout:"total, sizes, prev, pager, next, jumper",total:e.table.pageObject.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var r=t("C7Lr")(o,s,!1,function(e){t("P8TL")},"data-v-92f65a62",null);l.default=r.exports}});