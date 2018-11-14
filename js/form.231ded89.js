(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"+Xjy":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"step-form"},[a("el-page-header",{attrs:{title:"分步表单",content:"将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"}}),a("el-grid-content",[a("el-card",{attrs:{shadow:"never"}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:18,xl:12}},[a("el-steps",{attrs:{simple:"",active:e.currentStep,"finish-status":"finish"}},[a("el-step",{attrs:{title:"填写转账信息"}},[a("span",{attrs:{slot:"icon"},slot:"icon"},[e._v("\n                1\n              ")])]),a("el-step",{attrs:{title:"确认转账信息"}},[a("span",{attrs:{slot:"icon"},slot:"icon"},[e._v("\n                2\n              ")])]),a("el-step",{attrs:{title:"完成"}},[a("span",{attrs:{slot:"icon"},slot:"icon"},[e._v("\n                3\n              ")])])],1)],1)],1),a("el-row",{staticClass:"children",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:24}},[a("router-view")],1)],1)],1)],1)],1)},l=[],o=(a("f3/d"),{name:"StepForm",data:function(){return{currentStep:0}},watch:{$route:{immediate:!0,handler:function(e){switch(e.name){case"StepFormInfo":this.currentStep=0;break;case"StepFormConfirm":this.currentStep=1;break;case"StepFormResult":this.currentStep=2;break;default:this.currentStep=0}}}}}),s=o,i=(a("k97r"),a("KHd+")),n=Object(i["a"])(s,r,l,!1,null,"27fe869b",null);t["default"]=n.exports},"3uUm":function(e,t,a){"use strict";var r=a("k+MB"),l=a.n(r);l.a},"4E9U":function(e,t,a){},CjBJ:function(e,t,a){"use strict";var r=a("sfLx"),l=a.n(r);l.a},DNmn:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-page-header",{attrs:{title:"基础表单",content:"表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"}}),a("el-grid-content",[a("el-card",[a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"},on:{submit:e.onSubmit}},[a("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"活动时间",required:""}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"date1"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1)],1),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"date2"}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1)],1),a("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[a("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),a("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),a("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),a("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),a("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),a("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"线上品牌商赞助"}}),a("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),a("el-form-item",{attrs:{label:"活动形式"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("立即创建")]),a("el-button",[e._v("取消")])],1)],1)],1)],1)],1)},l=[],o=a("zcDO"),s=a("TwqC"),i={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{onSubmit:function(){s["a"].showMessage(new o["a"]("MBM001S",["","创建"]))},resetForm:function(e){this.$refs[e].resetFields()}}},n=i,c=(a("CjBJ"),a("KHd+")),m=Object(c["a"])(n,r,l,!1,null,"4c783aef",null);t["default"]=m.exports},EJ7t:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"step-info"},[a("el-form",{staticClass:"step-form",attrs:{rules:e.rules,model:e.form,size:"small","label-position":"right"},on:{submit:e.handleNext}},[a("el-form-item",{attrs:{label:"付款账户：",prop:"payAccount","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[a("el-select",{attrs:{placeholder:"请选择付款账户"},model:{value:e.form.payAccount,callback:function(t){e.$set(e.form,"payAccount",t)},expression:"form.payAccount"}},[a("el-option",{attrs:{label:"setaria@alipay.com",value:"setaria@alipay.com"}}),a("el-option",{attrs:{label:"ant-design@alipay.com",value:"ant-design@alipay.com"}})],1)],1),a("el-form-item",{attrs:{label:"收款账户：",prop:"receiverAccount","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[a("el-input",{model:{value:e.form.receiverAccount,callback:function(t){e.$set(e.form,"receiverAccount",t)},expression:"form.receiverAccount"}},[a("el-select",{staticClass:"receiver-type",attrs:{slot:"prepend",placeholder:"请选择付款账户"},slot:"prepend",model:{value:e.form.receiverType,callback:function(t){e.$set(e.form,"receiverType",t)},expression:"form.receiverType"}},[a("el-option",{attrs:{label:"银联卡",value:"1"}}),a("el-option",{attrs:{label:"支付宝",value:"2"}})],1)],1)],1),a("el-form-item",{attrs:{label:"收款人姓名：",prop:"receiverName","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[a("el-input",{model:{value:e.form.receiverName,callback:function(t){e.$set(e.form,"receiverName",t)},expression:"form.receiverName"}})],1),a("el-form-item",{attrs:{label:"转账金额：",prop:"amount","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[a("el-input",{model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}},[a("template",{slot:"prepend"},[e._v("￥")])],2)],1),a("el-form-item",{attrs:{label:"","label-width":{},"wrapper-width":{span:18,offset:6}}},[a("el-button",{attrs:{type:"primary","native-type":"submit",loading:e.submitting}},[e._v("下一步")])],1)],1),a("el-divider"),e._m(0)],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"desc"},[a("h3",[e._v("说明")]),a("h4",[e._v("转账到支付宝账户")]),a("p",[e._v("\n      如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。\n    ")]),a("h4",[e._v("转账到银行卡")]),a("p",[e._v("\n      如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。\n    ")])])}],o=(a("ls82"),a("MECJ")),s={name:"Step1",data:function(){var e=this,t=function(t){return e.$store.state.form.step[t]||null};return{form:{payAccount:t("payAccount"),receiverType:"1",receiverAccount:t("receiverAccount"),receiverName:t("receiverName"),amount:t("amount")},rules:{payAccount:[{required:!0,message:"请选择付款账户"}],receiverType:[{required:!0,message:"请选择收款方式"}],receiverAccount:[{required:!0,message:"请输入收款账户"}],receiverName:[{required:!0,message:"请输入收款人姓名"}],amount:[{required:!0,message:"请输入转账金额"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"请输入合法金额数字"}]},itemLayout:{labelWidth:{span:6},wrapperWidth:{span:18}}}},computed:{submitting:function(){return this.$store.state.loading.actions["form/submitStepForm"]}},methods:{handleNext:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.form.amount=parseFloat(this.form.amount),e.next=3,this.$store.dispatch("form/submitStepForm",this.form);case 3:this.$router.push({name:"StepFormConfirm"});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},i=s,n=(a("aW2p"),a("KHd+")),c=Object(n["a"])(i,r,l,!1,null,"27925994",null);t["default"]=c.exports},Ktur:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},l=[],o=a("KHd+"),s={},i=Object(o["a"])(s,r,l,!1,null,null,null);t["default"]=i.exports},SCYZ:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{staticClass:"step-form",attrs:{rules:e.rules,model:e.form,size:"small","label-position":"right"},on:{submit:e.handleNext}},[a("el-alert",{attrs:{title:"确认转账后，资金将直接打入对方账户，无法退回。",closable:"","show-icon":""}}),a("el-form-item",{attrs:{label:"付款账户：","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[e._v("\n    "+e._s(e.form.payAccount)+"\n  ")]),a("el-form-item",{attrs:{label:"收款账户：","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[e._v("\n    "+e._s(e.form.receiverAccount)+"\n  ")]),a("el-form-item",{attrs:{label:"收款人姓名：","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[e._v("\n    "+e._s(e.form.receiverName)+"\n  ")]),a("el-form-item",{attrs:{label:"转账金额：",prop:"amount","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[e._v("\n    "+e._s(e.form.amount)+"（"+e._s(e.digitUppercase(e.form.amount))+"）\n  ")]),a("el-divider"),a("el-form-item",{attrs:{label:"支付密码",prop:"payPassword","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[a("el-input",{attrs:{type:"password"},model:{value:e.form.payPassword,callback:function(t){e.$set(e.form,"payPassword",t)},expression:"form.payPassword"}})],1),a("el-form-item",{attrs:{label:"","label-width":{},"wrapper-width":{span:18,offset:6}}},[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("提交")]),a("el-button",{on:{click:e.handlePrev}},[e._v("上一步")])],1)],1)},l=[],o=a("ii1/"),s={name:"Step2",data:function(){var e=this,t=function(t){return e.$store.state.form.step[t]||null};return{form:{payAccount:t("payAccount"),receiverType:"1",receiverAccount:t("receiverAccount"),receiverName:t("receiverName"),amount:t("amount"),payPassword:"123456"},itemLayout:{labelWidth:{span:6},wrapperWidth:{span:18}},rules:{payPassword:[{required:!0,message:"需要支付密码才能进行支付"}]}}},methods:{handlePrev:function(){this.$router.push({name:"StepFormInfo"})},handleNext:function(){this.$router.push({name:"StepFormResult"})},digitUppercase:function(e){return Object(o["c"])(e)}}},i=s,n=(a("3uUm"),a("KHd+")),c=Object(n["a"])(i,r,l,!1,null,"027f0b86",null);t["default"]=c.exports},USfy:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-page-header",{attrs:{title:"动态表单",content:"通过定义JSON-Schema格式的表单结构，可以快速构建一个常用的表单页面。"}}),a("el-grid-content",[a("el-card",[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("el-dynamic-form",{attrs:{model:e.formData,schema:e.schema,"ui-schema":e.uiSchema,"label-width":"100px",columns:e.columns},on:{submit:e.doSubmit}},[a("div",{staticClass:"form-button-container",attrs:{slot:"button"},slot:"button"},[a("el-button",{staticClass:"form-button",attrs:{type:"primary","native-type":"submit"}},[e._v("保存")]),a("el-button",{staticClass:"form-button",on:{click:e.doCancel}},[e._v("返回")])],1)])],1)],1)],1)],1)],1)},l=[],o=(a("xfY5"),a("zcDO")),s=a("TwqC"),i={props:{columns:{type:Number,default:2}},data:function(){return{schema:{title:"A registration form",type:"object",required:["name","gender"],properties:{name:{type:"string",title:"姓名",minLength:2,maxLength:6},gender:{type:"string",title:"性别",oneOf:[{const:1,title:"男"},{const:2,title:"女"}]},birth:{type:"string",title:"出生日期",format:"date"},mobile:{type:"integer",title:"手机号"},activeFlag:{type:"integer",title:"状态",oneOf:[{const:1,title:"有效"},{const:2,title:"无效"}]}}},uiSchema:{gender:{"ui:widget":"radio"}},formData:{name:"",gender:"",birth:"",mobile:"",activeFlag:""}}},created:function(){this.doFetch()},methods:{doFetch:function(){},doSubmit:function(){s["a"].showMessage(new o["a"]("MBM001S",["用户","新增"])),this.$router.forwardTo("EntitySearch")},doCancel:function(){this.$router.forwardTo("EntitySearch")}}},n=i,c=(a("ujWG"),a("KHd+")),m=Object(c["a"])(n,r,l,!1,null,"b5559564",null);t["default"]=m.exports},UYiP:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"advanced-form"},[a("el-page-header",{attrs:{title:"高级表单",content:"高级表单常见于一次性输入和提交大批量数据的场景。"}}),a("el-grid-content",[a("el-card",{attrs:{header:"仓库管理",shadow:"never"}},[a("el-form",{ref:"houseForm",attrs:{size:"small",model:e.houseForm,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{lg:6,md:12,sm:24}},[a("el-form-item",{attrs:{label:e.fieldLabels["name"],prop:"name"}},[a("el-input",{ref:"name",attrs:{id:"name",placeholder:"请输入仓库名称"},model:{value:e.houseForm.name,callback:function(t){e.$set(e.houseForm,"name",t)},expression:"houseForm.name"}})],1)],1),a("el-col",{attrs:{offset:2,lg:7,md:12,sm:24}},[a("el-form-item",{attrs:{label:e.fieldLabels["url"],prop:"url"}},[a("el-input",{ref:"url",attrs:{id:"url"},model:{value:e.houseForm.url,callback:function(t){e.$set(e.houseForm,"url",t)},expression:"houseForm.url"}},[a("template",{slot:"prepend"},[e._v("http://")]),a("template",{slot:"append"},[e._v(".com")])],2)],1)],1),a("el-col",{attrs:{offset:2,lg:7,md:12,sm:24}},[a("el-form-item",{attrs:{label:e.fieldLabels["owner"],prop:"owner"}},[a("el-select",{ref:"owner",attrs:{placeholder:"请选择管理员"},model:{value:e.houseForm.owner,callback:function(t){e.$set(e.houseForm,"owner",t)},expression:"houseForm.owner"}},[a("el-option",{attrs:{label:"付晓晓",value:"xiao"}}),a("el-option",{attrs:{label:"周毛毛",value:"mao"}})],1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{lg:6,md:12,sm:24}},[a("el-form-item",{attrs:{label:e.fieldLabels["approver"],prop:"approver"}},[a("el-select",{ref:"approver",attrs:{placeholder:"请选择审批人"},model:{value:e.houseForm.approver,callback:function(t){e.$set(e.houseForm,"approver",t)},expression:"houseForm.approver"}},[a("el-option",{attrs:{label:"付晓晓",value:"xiao"}}),a("el-option",{attrs:{label:"周毛毛",value:"mao"}})],1)],1)],1),a("el-col",{attrs:{offset:2,lg:7,md:12,sm:24}},[a("el-form-item",{attrs:{label:e.fieldLabels["dateRange"],prop:"dateRange"}},[a("el-date-picker",{ref:"dateRange",attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.houseForm.dateRange,callback:function(t){e.$set(e.houseForm,"dateRange",t)},expression:"houseForm.dateRange"}})],1)],1),a("el-col",{attrs:{offset:2,lg:7,md:12,sm:24}},[a("el-form-item",{attrs:{label:e.fieldLabels["type"],prop:"type"}},[a("el-select",{ref:"type",attrs:{placeholder:"请选择仓库类型"},model:{value:e.houseForm.type,callback:function(t){e.$set(e.houseForm,"type",t)},expression:"houseForm.type"}},[a("el-option",{attrs:{label:"私密",value:"private"}}),a("el-option",{attrs:{label:"公开",value:"public"}})],1)],1)],1)],1)],1)],1),a("el-card",{attrs:{header:"任务管理",shadow:"never"}},[a("el-form",{ref:"taskForm",attrs:{size:"small",model:e.taskForm,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{lg:6,md:12,sm:24}},[a("el-form-item",{attrs:{label:e.fieldLabels["taskName"],prop:"taskName"}},[a("el-input",{ref:"taskName",attrs:{id:"taskName",placeholder:"请输入任务名称"},model:{value:e.taskForm.taskName,callback:function(t){e.$set(e.taskForm,"taskName",t)},expression:"taskForm.taskName"}})],1)],1),a("el-col",{attrs:{offset:2,lg:7,md:12,sm:24}},[a("el-form-item",{attrs:{label:e.fieldLabels["desc"],prop:"desc"}},[a("el-input",{ref:"desc",model:{value:e.taskForm.desc,callback:function(t){e.$set(e.taskForm,"desc",t)},expression:"taskForm.desc"}})],1)],1),a("el-col",{attrs:{offset:2,lg:7,md:12,sm:24}},[a("el-form-item",{attrs:{label:e.fieldLabels["executor"],prop:"executor"}},[a("el-select",{ref:"executor",attrs:{placeholder:"请选择执行人"},model:{value:e.taskForm.executor,callback:function(t){e.$set(e.taskForm,"executor",t)},expression:"taskForm.executor"}},[a("el-option",{attrs:{label:"付晓晓",value:"xiao"}}),a("el-option",{attrs:{label:"周毛毛",value:"mao"}})],1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{lg:6,md:12,sm:24}},[a("el-form-item",{attrs:{label:e.fieldLabels["taskOwner"],prop:"taskOwner"}},[a("el-select",{ref:"taskOwner",attrs:{placeholder:"请选择责任人"},model:{value:e.taskForm.taskOwner,callback:function(t){e.$set(e.taskForm,"taskOwner",t)},expression:"taskForm.taskOwner"}},[a("el-option",{attrs:{label:"付晓晓",value:"xiao"}}),a("el-option",{attrs:{label:"周毛毛",value:"mao"}})],1)],1)],1),a("el-col",{attrs:{offset:2,lg:7,md:12,sm:24}},[a("el-form-item",{attrs:{label:e.fieldLabels["validTime"],prop:"validTime"}},[a("el-time-picker",{ref:"validTime",attrs:{type:"validTime"},model:{value:e.taskForm.validTime,callback:function(t){e.$set(e.taskForm,"validTime",t)},expression:"taskForm.validTime"}})],1)],1),a("el-col",{attrs:{offset:2,lg:7,md:12,sm:24}},[a("el-form-item",{attrs:{label:e.fieldLabels["taskType"],prop:"taskType"}},[a("el-select",{ref:"taskType",attrs:{placeholder:"请选择任务类型"},model:{value:e.taskForm.taskType,callback:function(t){e.$set(e.taskForm,"taskType",t)},expression:"taskForm.taskType"}},[a("el-option",{attrs:{label:"私密",value:"private"}}),a("el-option",{attrs:{label:"公开",value:"public"}})],1)],1)],1)],1)],1)],1),a("el-card",{staticClass:"member",attrs:{header:"成员管理",shadow:"never"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isTableDataLoading,expression:"isTableDataLoading"}],attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"成员姓名"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?a("el-input",{model:{value:e.cacheOriginData[t.row.key].name,callback:function(a){e.$set(e.cacheOriginData[t.row.key],"name",a)},expression:"cacheOriginData[scope.row.key].name"}}):a("span",[e._v(e._s(t.row.name))])]}}])}),a("el-table-column",{attrs:{label:"工号"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?a("el-input",{model:{value:e.cacheOriginData[t.row.key].workId,callback:function(a){e.$set(e.cacheOriginData[t.row.key],"workId",a)},expression:"cacheOriginData[scope.row.key].workId"}}):a("span",[e._v(e._s(t.row.workId))])]}}])}),a("el-table-column",{attrs:{label:"所属部门"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?a("el-input",{model:{value:e.cacheOriginData[t.row.key].department,callback:function(a){e.$set(e.cacheOriginData[t.row.key],"department",a)},expression:"cacheOriginData[scope.row.key].department"}}):a("span",[e._v(e._s(t.row.department))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable&&t.row.isNew?a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.handleSaveRow(t.row)}}},[e._v("添加")]),a("el-divider",{attrs:{type:"vertical"}}),a("el-popover",{attrs:{placement:"top",width:"200",trigger:"click","popper-class":"advanced-form-delete-button-popover"},model:{value:t.row.isDeleteTip,callback:function(a){e.$set(t.row,"isDeleteTip",a)},expression:"scope.row.isDeleteTip"}},[a("div",[e._v("\n                  是否要删除此行？\n                ")]),a("div",{staticStyle:{float:"right"}},[a("el-button",{staticClass:"cancel-button",attrs:{size:"small"},on:{click:function(e){t.row.isDeleteTip=!1}}},[e._v("取消")]),a("el-button",{staticClass:"confirm-button",attrs:{size:"small",type:"primary"},on:{click:function(a){e.handleRemoveMember(t.row)}}},[e._v("确定")])],1),a("el-button",{attrs:{slot:"reference",type:"text"},on:{click:function(e){t.row.isDeleteTip=!0}},slot:"reference"},[e._v("删除")])],1)],1):t.row.editable?a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.handleSaveRow(t.row)}}},[e._v("保存")]),a("el-divider",{attrs:{type:"vertical"}}),a("el-button",{attrs:{type:"text"},on:{click:function(a){e.handleToggleEditable(t.row)}}},[e._v("取消")])],1):a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.handleToggleEditable(t.row)}}},[e._v("编辑")]),a("el-divider",{attrs:{type:"vertical"}}),a("el-popover",{attrs:{placement:"top",width:"200",trigger:"click","popper-class":"advanced-form-delete-button-popover"},model:{value:t.row.isDeleteTip,callback:function(a){e.$set(t.row,"isDeleteTip",a)},expression:"scope.row.isDeleteTip"}},[a("div",[e._v("\n                  是否要删除此行？\n                ")]),a("div",{staticStyle:{float:"right"}},[a("el-button",{staticClass:"cancel-button",attrs:{size:"small"},on:{click:function(e){t.row.isDeleteTip=!1}}},[e._v("取消")]),a("el-button",{staticClass:"confirm-button",attrs:{size:"small",type:"primary"},on:{click:function(a){e.handleRemoveMember(t.row)}}},[e._v("确定")])],1),a("el-button",{attrs:{slot:"reference",type:"text"},on:{click:function(e){t.row.isDeleteTip=!0}},slot:"reference"},[e._v("删除")])],1)],1)]}}])})],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-button",{staticClass:"insert-button",on:{click:e.handleNewMember}},[a("i",{staticClass:"el-icon-plus"}),e._v("新增成员\n          ")])],1)],1)],1),a("el-footer-toolbar",[a("template",{slot:"children"},[a("el-popover",{attrs:{"popper-class":"advanced-form-error-list-poperover",placement:"top",width:"256",trigger:"click",title:"表单校验信息"},model:{value:e.isErrorTipShow,callback:function(t){e.isErrorTipShow=t},expression:"isErrorTipShow"}},[a("div",{staticStyle:{height:"215px","overflow-y":"auto"}},e._l(e.errorObject,function(t,r){return a("li",{key:r,staticClass:"error-list-item",on:{click:function(a){e.handleScrollToField(t[0].field)}}},[a("div",{staticClass:"error-icon"},[a("i",{staticClass:"el-icon-circle-close"})]),a("div",[a("div",[e._v(e._s(t[0].message))]),a("div",{staticClass:"error-field"},[e._v(e._s(e.fieldLabels[t[0].field]))])])])})),e.errorCount>0?a("span",{staticClass:"error-icon",attrs:{slot:"reference"},on:{click:function(t){e.isErrorTipShow=!e.isErrorTipShow}},slot:"reference"},[a("i",{staticClass:"el-icon-warning"}),e._v(e._s(e.errorCount)+"\n          ")]):e._e()]),a("el-button",{staticClass:"submit-button",attrs:{type:"primary",size:"small",loading:e.submitting},on:{click:e.validate}},[e._v("提交")])],1)],2)],1)],1)},l=[],o=(a("INYr"),a("yT7P")),s=(a("dRSK"),a("f3/d"),a("91GP"),a("rGqo"),a("RW0V"),a("zcDO")),i=a("TwqC"),n=a("ii1/"),c={name:"AdvancedForm",data:function(){var e=[{key:"1",workId:"00001",name:"John Brown",department:"New York No. 1 Lake Park"},{key:"2",workId:"00002",name:"Jim Green",department:"London No. 1 Lake Park"},{key:"3",workId:"00003",name:"Joe Black",department:"Sidney No. 1 Lake Park"}];return{houseForm:{name:"",url:"",owner:"",approver:"",dateRange:null,type:""},taskForm:{taskName:"",desc:"",executor:"",taskOwner:"",validTime:null,taskType:""},fieldLabels:{name:"仓库名",url:"仓库域名",owner:"仓库管理员",approver:"审批人",dateRange:"生效日期",type:"仓库类型",taskName:"任务名",desc:"任务描述",executor:"执行人",taskOwner:"责任人",validTime:"生效日期",taskType:"任务类型"},rules:{name:[{required:!0,message:"请输入仓库名称"}],url:[{required:!0,message:"请输入仓库域名"}],owner:[{required:!0,message:"请选择仓库管理员"}],approver:[{required:!0,message:"请选择审批人"}],dateRange:[{required:!0,message:"请选择生效日期"}],type:[{required:!0,message:"请选择仓库类型"}],taskName:[{required:!0,message:"请输入任务名称"}],desc:[{required:!0,message:"请输入任务描述"}],executor:[{required:!0,message:"请选择执行人"}],taskOwner:[{required:!0,message:"请选择任务责任人"}],validTime:[{required:!0,message:"请选择任务生效日期"}],taskType:[{required:!0,message:"请选择任务类型"}]},errorObject:{},isErrorTipShow:!1,cacheOriginData:{},tableData:e,isTableDataLoading:!1,insertMemberIndex:0}},computed:{submitting:function(){return this.$store.state.loading.actions["form/submitAdvancedForm"]},errorCount:function(){return Object.keys(this.errorObject).length}},methods:{validate:function(){this.errorObject={};var e={};this.$refs.houseForm.validate(function(t,a){t||(e=Object.assign({},e,a))}),this.$refs.taskForm.validate(function(t,a){t||(e=Object.assign({},e,a))}),0===Object.keys(e).length?this.$store.dispatch("form/submitAdvancedForm").then(function(){i["a"].showMessage(new s["a"]("MBM001S",["","提交"]))}):this.errorObject=e},handleScrollToField:function(e){var t=document.querySelector('label[for="'.concat(e,'"]'));t&&(t.scrollIntoView(!0),this.isErrorTipShow=!1)},handleSaveRow:function(e){var t=this;this.isTableDataLoading=!0,setTimeout(function(){var a=t.cacheOriginData[e.key]||{},r=a.name,l=a.workId,o=a.department;if(Object(n["k"])(r)||Object(n["k"])(l)||Object(n["k"])(o))return i["a"].showMessage(new s["a"]("MBM006E")),void(t.isTableDataLoading=!1);var c=t.tableData.find(function(t){return t.key===e.key});c&&Object.assign(c,t.cacheOriginData[e.key]),c.isNew&&(c.isNew=!1),t.isTableDataLoading=!1,t.handleToggleEditable(e)},500)},handleToggleEditable:function(e){var t=e;t.editable=!t.editable,t.editable&&(this.cacheOriginData[e.key]=Object(o["a"])({},e));var a=Object(n["b"])(this.tableData);this.$set(this,"tableData",a)},handleRemoveMember:function(e){var t=this.tableData.findIndex(function(t){return t.key===e.key});-1!==t&&this.tableData.splice(t,1)},handleNewMember:function(){var e={key:"NEW_TEMP_ID_".concat(this.insertMemberIndex),workId:"",name:"",department:"",editable:!0,isNew:!0};this.tableData.push(e),this.cacheOriginData[e.key]=e,this.insertMemberIndex+=1}}},m=c,u=(a("mHXq"),a("aeMs"),a("KHd+")),p=Object(u["a"])(m,r,l,!1,null,"2c5eb187",null);t["default"]=p.exports},UekJ:function(e,t,a){},Va1Y:function(e,t,a){},aW2p:function(e,t,a){"use strict";var r=a("Va1Y"),l=a.n(r);l.a},aeMs:function(e,t,a){"use strict";var r=a("UekJ"),l=a.n(r);l.a},"eL/7":function(e,t,a){},"k+MB":function(e,t,a){},k97r:function(e,t,a){"use strict";var r=a("4E9U"),l=a.n(r);l.a},mHXq:function(e,t,a){"use strict";var r=a("eL/7"),l=a.n(r);l.a},nzXY:function(e,t,a){"use strict";var r=a("zgPG"),l=a.n(r);l.a},sfLx:function(e,t,a){},tq2Y:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-result",{staticClass:"step-result",attrs:{type:"success",title:"操作成功",description:"预计两小时内到账"}},[a("el-form",{attrs:{slot:"extra",model:e.form,size:"small","label-position":"right"},slot:"extra"},[a("el-form-item",{attrs:{label:"付款账户：","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[e._v("\n        "+e._s(e.form.payAccount)+"\n      ")]),a("el-form-item",{attrs:{label:"收款账户：","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[e._v("\n        "+e._s(e.form.receiverAccount)+"\n      ")]),a("el-form-item",{attrs:{label:"收款人姓名：","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[e._v("\n        "+e._s(e.form.receiverName)+"\n      ")]),a("el-form-item",{attrs:{label:"转账金额：",prop:"amount","label-width":e.itemLayout.labelWidth,"wrapper-width":e.itemLayout.wrapperWidth}},[e._v("\n        "+e._s(e.form.amount)+" 元\n      ")])],1),a("div",{attrs:{slot:"actions"},slot:"actions"},[a("el-button",{staticClass:"button",attrs:{type:"primary",size:"small"},on:{click:e.handleFinish}},[e._v("再转一笔")]),a("el-button",{staticClass:"button",attrs:{size:"small"}},[e._v("查看账单")])],1)],1)],1)},l=[],o={name:"Step3",data:function(){var e=this,t=function(t){return e.$store.state.form.step[t]||null};return{form:{payAccount:t("payAccount"),receiverType:"1",receiverAccount:t("receiverAccount"),receiverName:t("receiverName"),amount:t("amount"),payPassword:"123456"},itemLayout:{labelWidth:{span:8},wrapperWidth:{span:16}}}},methods:{handleFinish:function(){this.$router.push({name:"StepFormInfo"})}}},s=o,i=(a("nzXY"),a("KHd+")),n=Object(i["a"])(s,r,l,!1,null,"3ddd13f9",null);t["default"]=n.exports},ujWG:function(e,t,a){"use strict";var r=a("wPPz"),l=a.n(r);l.a},wPPz:function(e,t,a){},zgPG:function(e,t,a){}}]);