(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76298a19"],{"9d0b":function(t,o,a){"use strict";var r=a("ebdb"),c=a.n(r);c.a},ebdb:function(t,o,a){},fce6:function(t,o,a){"use strict";a.r(o);var r=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"main"},[a("a-breadcrumb",[a("a-breadcrumb-item",[t._v("首页")]),a("a-breadcrumb-item",[t._v("零部件管理")]),a("a-breadcrumb-item",[t._v("添加零部件")])],1),a("a-row",[a("a-col",{style:{textAlign:"left"},attrs:{span:4}},[a("h2",{staticClass:"title"},[t._v("添加零部件")])]),a("a-col",{staticStyle:{"text-align":"right","margin-top":"-3px"},attrs:{span:20}},[a("a-button",{staticStyle:{"margin-left":"8px","margin-right":"20px"},attrs:{type:"primary"},on:{click:t.addProductsDatas}},[t._v("保存")])],1)],1),a("div",{staticClass:"content_box"},[a("a-layout",[a("a-layout-content",[a("div",{staticClass:"dialog_form dialog_formgukuan"},[a("div",{staticClass:"top_form"},[a("tab-warpformInfo",{ref:"WarpFormDatas",attrs:{productId:-1,ProductForm:t.ProductForm},on:{changeComponent1Data:t.component1DataChange}})],1)]),a("div",{staticClass:"dialog_tab"},[a("div",{staticClass:"dialog_form2 dialog_formgukuan"},[a("a-tabs",{attrs:{defaultActiveKey:"1"},on:{change:t.callback}},[a("a-tab-pane",{key:"1",attrs:{tab:"常规"}},[a("tab-routineformInfo",{ref:"RoutineFormDatas",attrs:{productId:-1}})],1),a("a-tab-pane",{key:"2",staticClass:"dialog_tab_table",attrs:{tab:"物流信息"}},[a("tab-packingInfo",{attrs:{productId:-1},on:{changeCallBack:t.changePackingDatas}})],1),a("a-tab-pane",{key:"3",staticClass:"dialog_tab_table",attrs:{tab:"扩展属性"}},[a("a-table",{attrs:{columns:t.attributescolumns,dataSource:t.ProductForm.productAttributesList,bordered:"",pagination:t.showPagination,rowKey:function(t,o){return o}},scopedSlots:t._u([{key:"attName",fn:function(o,r){return[a("span",{staticClass:"lineEllipsis2"},[a("editable-cell",{attrs:{text:o},on:{change:function(o){return t.onCellChange(r,"attName",o)}}})],1)]}},{key:"attValue",fn:function(o,r){return[a("span",{staticClass:"lineEllipsis2"},[a("editable-cell",{attrs:{text:o},on:{change:function(o){return t.onCellChange(r,"attValue",o)}}})],1)]}}])})],1),a("a-tab-pane",{key:"4",staticClass:"dialog_tab_table",attrs:{tab:"技术文档"}},[a("tab-documentInfo",{attrs:{productId:-1},on:{changeCallBack:t.changeDocumentDatas}})],1),a("a-tab-pane",{key:"5",staticClass:"dialog_tab_table",attrs:{tab:"图纸"}},[a("tab-drawingInfo",{attrs:{productId:-1},on:{changeCallBack:t.changeDrawingDatas}})],1)],1)],1)])])],1)],1)],1)},c=[],e=(a("608b"),a("4964")),s=a("b56a"),n=a("12d6"),u=a("7f70"),i=a("1662"),d=a("41af"),l=a("eba2"),p=a("94b8"),m=a("9c7f"),g=[{title:"属性名称",dataIndex:"attName",key:"attName",width:200,align:"center"},{title:"属性值",dataIndex:"attValue",key:"attValue",scopedSlots:{customRender:"attValue"},width:200,align:"center"}],h={components:{"tab-packingInfo":n["a"],"tab-attributesInfo":u["a"],"tab-routineformInfo":i["a"],"tab-warpformInfo":d["a"],"tab-documentInfo":l["a"],"tab-drawingInfo":p["a"],EditableCell:m["a"]},data:function(){return{ProductForm:{claCode:"",delProductAttributesList:[],delProductDocumentationList:[],delProductDrawingList:[],delProductPackingList:[],productAttributesList:[],productChart:"",productCode:"",productDescribe:"",productDocumentationList:[],productDrawingList:[],productId:null,productMaterialQuality:"",productModel:"",productName:"",productPackingList:[],productPicture:null,productRoutine:{productBrand:"",productCode:"",productDiameter:"",productImprint:"",productLength:"",productMaterial:"",productMaterialRemark:"",productStandard:"",productSurface:"",productSurfaceRemark:"",productToothPitch:"",productToothType:"",productUnit:"",productWeight:"",remark:"",routId:null},productSpecs:""},curproductCode:null,curclaCode1:null,curclaCode2:null,showPagination:!1,confirmLoading:!1,attributesdata:[],attributescolumns:g,attributescount:0,loading:!1}},created:function(){},methods:{component1DataChange:function(t){this.ProductForm=t},callback:function(t){},changePackingDatas:function(t){this.ProductForm.productPackingList=t.productPackingList,this.ProductForm.delProductPackingList=t.delProductPackingList,console.log("===========新增、修改、删除物流"),console.log(this.ProductForm)},changeAttributesDatas:function(t){this.ProductForm.productAttributesList=t.productAttributesList,this.ProductForm.delProductAttributesList=[],console.log("===========新增、修改、删除扩展属性"),console.log(this.ProductForm)},changeDocumentDatas:function(t){console.log(t),this.ProductForm.productDocumentationList=t.productDocumentationList,this.ProductForm.delProductDocumentationList=[],console.log("===========新增、修改、删除技术文档"),console.log(this.ProductForm)},changeDrawingDatas:function(t){console.log(t),this.ProductForm.productDrawingList=t.productDrawingList,this.ProductForm.delProductDrawingList=[],console.log("===========新增、修改、删除图纸"),console.log(this.ProductForm)},changeRoutineFormDatas:function(){console.log("===========新增、修改常规表单信息"),this.ProductForm.productRoutine=this.$refs.RoutineFormDatas.productRoutineForm2,console.log(this.ProductForm.productRoutine)},changeWarpFormDatas:function(){console.log("===========新增、修改最外层表单信息"),this.ProductForm.productChart=this.$refs.WarpFormDatas.productWarpForm2.productChart,this.ProductForm.productCode=this.$refs.WarpFormDatas.productWarpForm2.productCode,this.ProductForm.productDescribe=this.$refs.WarpFormDatas.productWarpForm2.productDescribe,this.ProductForm.productMaterialQuality=this.$refs.WarpFormDatas.productWarpForm2.productMaterialQuality,this.ProductForm.productModel=this.$refs.WarpFormDatas.productWarpForm2.productModel,this.ProductForm.productName=this.$refs.WarpFormDatas.productWarpForm2.productName,this.ProductForm.productSpecs=this.$refs.WarpFormDatas.productWarpForm2.productSpecs,this.ProductForm.claCode=this.$refs.WarpFormDatas.productWarpForm2.claCode,this.ProductForm.productPicture=this.$refs.WarpFormDatas.productWarpForm2.productPicture,console.log(this.ProductForm)},addProductsDatas:function(t){var o=this;this.changeRoutineFormDatas(),this.changeWarpFormDatas(),""!==this.ProductForm.productName&&null!==this.ProductForm.claCode?Object(s["f"])(this.ProductForm).then(function(t){t.data.code===o.$global.successCode?(o.$message.success("添加零部件成功!"),o.$emit("getProduct"),o.$emit("close")):o.$message.error(t.data.message)},function(t){console.log("添加零部件失败",t)}):this.$message.error("零部件名称或者零部件分类为空")},onCellChange:function(t,o,a){console.log("dataIndex"),console.log(o),console.log("value"),console.log(a),console.log("corRow"),console.log(t);var r=Object(e["a"])(this.ProductForm.productAttributesList),c=r.find(function(o){return o.attName===t.attName});c&&(c[o]=a,r.productCode=this.curproductCode,console.log("data1"),console.log(r),this.ProductForm.productAttributesList=r,console.log("this.ProductForm333"),console.log(this.ProductForm))}}},b=h,f=(a("9d0b"),a("17cc")),F=Object(f["a"])(b,r,c,!1,null,"649debbb",null);o["default"]=F.exports}}]);
//# sourceMappingURL=chunk-76298a19.f7c2dee3.js.map