(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{Etkw:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-grid-content",[a("el-card",[a("el-row",[a("el-col",{attrs:{xs:24,sm:8}},[a("info",{attrs:{title:"我的待办",value:"8个任务",bordered:""}})],1),a("el-col",{attrs:{xs:24,sm:8}},[a("info",{attrs:{title:"本周任务平均处理时间",value:"32分钟",bordered:""}})],1),a("el-col",{attrs:{xs:24,sm:8}},[a("info",{attrs:{title:"本周完成任务数",value:"24个任务"}})],1)],1)],1),a("el-card",{staticClass:"basic-list__card"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"title"},[t._v("标准列表")]),a("div",{staticClass:"extra-content"},[a("div",[a("el-radio-group",{attrs:{size:"medium"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[a("el-radio-button",{attrs:{label:"all"}},[t._v("全部")]),a("el-radio-button",{attrs:{label:"progress"}},[t._v("进行中")]),a("el-radio-button",{attrs:{label:"waiting"}},[t._v("等待中")])],1),a("el-input",{staticClass:"search",attrs:{placeholder:"请输入内容",size:"medium"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)])]),a("el-button",{staticClass:"insert-button",attrs:{size:"medium"},on:{click:t.handleCreate}},[a("i",{staticClass:"el-icon-plus"}),a("span",[t._v("添加")])]),a("el-list",{staticClass:"list"},t._l(t.taskList,function(e){return a("el-list-item",{key:e.id},[a("el-list-item-meta",{attrs:{title:e.title}},[a("span",{attrs:{slot:"avatar"},slot:"avatar"},[a("img",{attrs:{src:e.avatar}})]),a("span",{attrs:{slot:"description"},slot:"description"},[t._v("\n            "+t._s(e.description)+"\n          ")])]),a("div",{staticClass:"content"},[a("div",{staticClass:"content-item"},[a("span",[t._v("Owner")]),a("p",[t._v(t._s(e.owner.name))])]),a("div",{staticClass:"content-item"},[a("span",[t._v("开始时间")]),a("p",[t._v(t._s(e.startDateTime))])]),a("div",{staticClass:"content-item"},[a("el-progress",{attrs:{percentage:100*e.percent,status:0===e.status?"exception":""}})],1)]),a("div",{attrs:{slot:"actions"},slot:"actions"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleModify(e)}}},[t._v("编辑")]),a("el-divider",{attrs:{type:"vertical"}}),a("el-dropdown",{on:{command:function(a){t.handleRowMultiAction(a,e.id)}}},[a("span",{staticClass:"dropdown-link"},[a("span",[t._v("更多")]),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"modify"}},[t._v("编辑")]),a("el-dropdown-item",{attrs:{command:"remove"}},[t._v("删除")])],1)],1)],1)],1)})),a("el-pagination",{staticClass:"pagination",attrs:{"page-sizes":[5,10,30,50],"page-size":5,layout:"sizes, prev, pager, next, jumper",total:100}})],1),a("el-dialog",{staticClass:"basic-list__form",attrs:{title:"任务"+("object"===typeof t.selectedTask?"编辑":"添加"),visible:t.formVisible},on:{"update:visible":function(e){t.formVisible=e}}},[t.formVisible?a("basic-form",{ref:"taskForm",model:{value:t.selectedTask,callback:function(e){t.selectedTask=e},expression:"selectedTask"}}):t._e(),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.handleCloseForm}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.handleUpdateForm}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{visible:t.resultVisible,width:"640px"},on:{"update:visible":function(e){t.resultVisible=e}}},[a("el-result",{attrs:{title:"操作成功",description:"一系列的信息描述，很短同样也可以带标点。"}},[a("div",{attrs:{slot:"actions"},slot:"actions"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.resultVisible=!1}}},[t._v("知道了")])],1)])],1)],1)},i=[],r=(a("INYr"),a("dRSK"),a("ls82"),a("MECJ")),s=a("zcDO"),l=a("TwqC"),o=a("5KvI");function c(){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",o["a"].get("tasks"));case 1:case"end":return t.stop()}},t,this)})),u.apply(this,arguments)}var p=a("ii1/"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-position":"right"}},[a("el-form-item",{attrs:{label:"任务名称","label-width":t.itemLayout.labelWidth,"wrapper-width":t.itemLayout.wrapperWidth,prop:"title"}},[a("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"开始时间","label-width":t.itemLayout.labelWidth,"wrapper-width":t.itemLayout.wrapperWidth,prop:"startDateTime"}},[a("el-date-picker",{staticClass:"start-datetime",attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:""},model:{value:t.form.startDateTime,callback:function(e){t.$set(t.form,"startDateTime",e)},expression:"form.startDateTime"}})],1),a("el-form-item",{attrs:{label:"任务负责人","label-width":t.itemLayout.labelWidth,"wrapper-width":t.itemLayout.wrapperWidth,prop:"owner.name"}},[a("el-select",{model:{value:t.form.owner.name,callback:function(e){t.$set(t.form.owner,"name",e)},expression:"form.owner.name"}},t._l(t.userList,function(t){return a("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})}))],1),a("el-form-item",{attrs:{label:"任务描述","label-width":t.itemLayout.labelWidth,"wrapper-width":t.itemLayout.wrapperWidth,prop:"description"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)},m=[];a("RW0V"),a("rGqo");function h(){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",o["a"].get("users"));case 1:case"end":return t.stop()}},t,this)})),f.apply(this,arguments)}function b(){return{title:"",description:"",startDateTime:null,owner:{name:""}}}var v={name:"TaskForm",props:{value:Object},data:function(){return{form:{},ownerName:"",userList:[],itemLayout:{labelWidth:{span:6},wrapperWidth:{span:13}},rules:{title:[{required:!0,message:"请输入任务名称！"}],startDateTime:[{required:!0,message:"请输入开始时间！"}],"owner.name":[{required:!0,message:"请选择任务负责人！"}],description:[{min:5,message:"请输入至少五个字符的任务描述！"}]}}},created:function(){var t=this;if(this.fetchUser(),Object(p["j"])(this.value.id))this.form=this.value;else{var e=b();Object.keys(e).forEach(function(a){t.$set(t.form,a,e[a])})}},watch:{form:{immediate:!0,handler:function(t){this.$emit("input",t)}}},methods:{fetchUser:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:e=t.sent,this.userList=e;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),validate:function(){return this.$refs.form.validate()}}},w=v,g=(a("m25Y"),a("KHd+")),y=Object(g["a"])(w,d,m,!1,null,"0e7f5efe",null),S=y.exports,k={name:"BasicList",data:function(){return{status:"all",taskList:[],selectedTask:null,formVisible:!1,resultVisible:!1}},components:{info:{props:{title:String,value:String,bordered:Boolean},render:function(){var t=arguments[0],e=this.bordered,a=this.title,n=this.value;return t("div",{class:"basic-list__info"},[t("span",[a]),t("p",[n]),e?t("em"):null])}},BasicForm:S},created:function(){this.fetchList()},methods:{fetchList:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c();case 2:this.taskList=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleCreate:function(){this.selectedTask={},this.toggleFormVisible(!0)},handleModify:function(t){this.selectedTask=Object(p["b"])(t),this.toggleFormVisible(!0)},handleRowMultiAction:function(t,e){if("modify"===t){var a=this.taskList.find(function(t){return t.id===e});this.handleModify(a)}},handleCloseForm:function(){this.selectedTask={},this.toggleFormVisible(!1)},handleUpdateForm:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,n,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$refs.taskForm.validate();case 2:e=t.sent,e&&(Object(p["j"])(this.selectedTask.id)?(n=this.taskList.findIndex(function(t){return t.id===i.selectedTask.id}),-1!==n&&(this.taskList[n]=this.selectedTask),this.resultVisible=!0):(a=Object(p["b"])(this.selectedTask),a.id=this.taskList.length,a.avatar="http://dummyimage.com/48x48/79f2ed",a.percent=0,a.status=1,this.taskList.push(a),l["a"].showMessage(new s["a"]("MBM001S",["","添加"]))),this.selectedTask={}),this.handleCloseForm();case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),toggleFormVisible:function(t){this.formVisible=t}}},C=k,_=(a("mcsB"),a("bxKo"),Object(g["a"])(C,n,i,!1,null,"6cf67f41",null));e["default"]=_.exports},INYr:function(t,e,a){"use strict";var n=a("XKFU"),i=a("CkkT")(6),r="findIndex",s=!0;r in[]&&Array(1)[r](function(){s=!1}),n(n.P+n.F*s,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(r)},Ie0B:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-list"},[a("el-page-header",{attrs:{title:"查询表格"}}),a("el-grid-content",[a("el-card",[a("div",[a("el-form",{ref:"form",attrs:{model:t.form,size:"small"},on:{submit:t.handleSearch}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"规则名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"使用状态",prop:"status"}},[a("el-select",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.statusLabelList,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})}))],1)],1),a("el-col",{attrs:{span:8}},[t.isSimpleSearchCondition?a("div",[a("el-button",{staticClass:"button",attrs:{type:"primary","native-type":"submit",size:"small"}},[t._v("查询")]),a("el-button",{staticClass:"button",attrs:{size:"small"},on:{click:t.handleResetSearchCondition}},[t._v("重置")]),a("el-button",{staticClass:"button",attrs:{type:"text",size:"small"},on:{click:function(e){t.isSimpleSearchCondition=!t.isSimpleSearchCondition}}},[t._v("\n                  "+t._s(t.isSimpleSearchCondition?"展开":"收起")+"\n                  "),a("i",{class:{"el-icon-arrow-down":t.isSimpleSearchCondition,"el-icon-arrow-up":!t.isSimpleSearchCondition}})])],1):a("el-form-item",{attrs:{label:"调用次数",prop:"callNo"}},[a("el-input-number",{model:{value:t.form.callNo,callback:function(e){t.$set(t.form,"callNo",e)},expression:"form.callNo"}})],1)],1)],1),t.isSimpleSearchCondition?t._e():a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"更新日期",prop:"updateDate"}},[a("el-date-picker",{model:{value:t.form.updateDate,callback:function(e){t.$set(t.form,"updateDate",e)},expression:"form.updateDate"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"使用状态",prop:"status1"}},[a("el-select",{model:{value:t.form.status1,callback:function(e){t.$set(t.form,"status1",e)},expression:"form.status1"}},t._l(t.statusLabelList,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})}))],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"使用状态",prop:"status2"}},[a("el-select",{model:{value:t.form.status2,callback:function(e){t.$set(t.form,"status2",e)},expression:"form.status2"}},t._l(t.statusLabelList,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})}))],1)],1)],1),t.isSimpleSearchCondition?t._e():a("el-row",[a("el-col",{style:{"text-align":"right"},attrs:{span:8,offset:16}},[a("el-button",{staticClass:"button",attrs:{type:"primary","native-type":"submit",size:"small"}},[t._v("查询")]),a("el-button",{staticClass:"button",attrs:{"native-type":"reset",size:"small"}},[t._v("重置")]),a("el-button",{staticClass:"button",attrs:{type:"text",size:"small"},on:{click:function(e){t.isSimpleSearchCondition=!t.isSimpleSearchCondition}}},[t._v("\n                "+t._s(t.isSimpleSearchCondition?"展开":"收起")+"\n                "),a("i",{class:{"el-icon-arrow-down":t.isSimpleSearchCondition,"el-icon-arrow-up":!t.isSimpleSearchCondition}})])],1)],1)],1),a("el-row",{staticClass:"list-operator"},[a("el-col",{staticClass:"col",attrs:{span:16}},[a("el-button",{staticClass:"button",attrs:{type:"primary",icon:"el-icon-plus",size:"small"},on:{click:t.handleCreate}},[t._v("新建")]),t.tableSelectionList.length>0?a("el-button",{staticClass:"button",attrs:{size:"small"}},[t._v("批量操作")]):t._e(),t.tableSelectionList.length>0?a("el-dropdown",{staticClass:"more-action",on:{command:t.handleMoreAction}},[a("el-button",{staticClass:"button",attrs:{size:"small"}},[t._v("\n                更多操作 "),a("i",{staticClass:"el-icon-arrow-down"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"delete"}},[t._v("删除")]),a("el-dropdown-item",[t._v("批量审批")])],1)],1):t._e()],1)],1),a("el-alert",{staticClass:"table-alert",attrs:{title:"",closable:!1}},[a("i",{staticClass:"el-icon-info"}),a("span",[t._v("\n            已选择\n            "),a("a",{staticClass:"key-text"},[t._v(" "+t._s(t.tableSelectionCount)+" ")]),t._v(" 项\n            "),a("span",{staticClass:"call-total-no"},[t._v("\n              服务调用次数总计\n              "),a("span",{staticClass:"key-text"},[t._v(" "+t._s(t.tableSelectedTotalCallNo)+" 万 ")])]),a("el-button",{staticClass:"clear-selection",attrs:{type:"text"},on:{click:t.hanleClearTableSelection}},[t._v("清空")])],1)]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoadingSearchResultList,expression:"isLoadingSearchResultList"}],ref:"table",attrs:{data:t.searchResultList,stripe:""},on:{"filter-change":t.handleTableFilterChange,select:t.handleTableRowSelect,"select-all":t.handleTableRowSelectAll,"sort-change":t.handleTableSortChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",selectable:t.tableRowSelectable}}),a("el-table-column",{attrs:{label:"规则名称",prop:"name"}}),a("el-table-column",{attrs:{label:"描述",prop:"desc"}}),a("el-table-column",{attrs:{label:"服务调用次数",prop:"callNo","column-key":"callNo",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(e.row.callNo)+"万\n            ")]}}])}),a("el-table-column",{attrs:{label:"状态",prop:"status","column-key":"status",filters:t.statusFilterList,"filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-badge",{attrs:{status:t.statusValueMap[e.row.status],text:t.statusLabelList[e.row.status]}})]}}])}),a("el-table-column",{attrs:{label:"上次调度时间",prop:"updatedAt","column-key":"updatedAt",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(t.formatDate(e.row.updatedAt))+"\n            ")]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleConfigRule(e.row)}}},[t._v("配置")]),a("el-divider",{attrs:{type:"vertical"}}),a("el-button",{attrs:{type:"text"}},[t._v("订阅警报")])]}}])})],1),a("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.pagination.current,"page-sizes":[10,20,30,40],"page-size":t.pagination.pageSize,layout:"sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)])],1),a("el-dialog",{staticClass:"table-list__dialog",attrs:{title:"新建规则",visible:t.createFormVisible},on:{"update:visible":function(e){t.createFormVisible=e}}},[t.createFormVisible?a("create-form",{ref:"createForm",model:{value:t.selectedRule,callback:function(e){t.selectedRule=e},expression:"selectedRule"}}):t._e(),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:t.handleCloseCreateForm}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleCreateRule}},[t._v("确 定")])],1)],1),a("el-dialog",{staticClass:"table-list__dialog",attrs:{title:"规则配置",visible:t.allocationStepFormVisible},on:{"update:visible":function(e){t.allocationStepFormVisible=e}}},[t.allocationStepFormVisible?a("allocation-step-form",{attrs:{"current-step":t.currentStep},on:{"update:currentStep":function(e){t.currentStep=e},complete:t.handleUpdateRule},model:{value:t.selectedRule,callback:function(e){t.selectedRule=e},expression:"selectedRule"}}):t._e(),a("span",{attrs:{slot:"footer"},slot:"footer"},[t.currentStep>0?a("el-button",{staticClass:"prev-step-button",attrs:{size:"small"},on:{click:t.handlePrev}},[t._v("上一步")]):t._e(),a("el-button",{attrs:{size:"small"},on:{click:function(e){t.handleUpdateAllocationStepFormVisible()}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleNext}},[2===t.currentStep?[t._v("\n          完成\n        ")]:[t._v("\n          下一步\n        ")]],2)],1)],1)],1)},i=[],r=(a("f3/d"),a("INYr"),a("dRSK"),a("91GP"),a("ls82"),a("MECJ")),s=(a("rGqo"),a("zcDO")),l=a("TwqC"),o=a("5KvI");function c(t){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",o["a"].get("rule",e,{showLoading:!1}));case 1:case"end":return t.stop()}},t,this)})),u.apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",o["a"].post("rule",{desc:e,method:"post"},{showLoading:!1}));case 1:case"end":return t.stop()}},t,this)})),d.apply(this,arguments)}function m(t,e,a){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark(function t(e,a,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",o["a"].post("rule",{key:e,name:a,desc:n,method:"update"},{showLoading:!1}));case 1:case"end":return t.stop()}},t,this)})),h.apply(this,arguments)}function f(t){return b.apply(this,arguments)}function b(){return b=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",o["a"].post("rule",{key:e,method:"delete"},{showLoading:!1}));case 1:case"end":return t.stop()}},t,this)})),b.apply(this,arguments)}var v=a("ii1/"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-grid-content",{staticClass:"allocation-step-form"},[a("el-steps",{staticClass:"steps",attrs:{active:t.active,"finish-status":"success",simple:""}},[a("el-step",{attrs:{title:"基本信息"}}),a("el-step",{attrs:{title:"配置规则属性"}}),a("el-step",{attrs:{title:"设定调度周期"}})],1),a(t.componentId,{ref:"stepForm",tag:"component",model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)},g=[],y=(a("xfY5"),{name:"AllocationStepForm",props:{value:{required:!0,type:Object},currentStep:{required:!0,type:Number}},data:function(){return{active:0,form:{name:""}}},computed:{componentId:function(){var t="";switch(this.active){case 0:t="basic";break;case 1:t="ruleAttribute";break;case 2:t="frequency";break;default:t="basic"}return t}},watch:{currentStep:{immediate:!0,handler:function(t){var e=this;this.active>t?this.active=t<0?0:t:this.active!==t&&this.$refs.stepForm.validate().then(function(){e.active=t,3===t&&e.$emit("complete")}).catch(function(){e.active=t-1,e.$emit("update:currentStep",t-1)})}},form:{deep:!0,handler:function(t){this.$emit("input",t)}}},created:function(){this.form=this.value},methods:{validate:function(){}},components:{basic:{props:{value:{required:!0,type:Object}},data:function(){return{form:{},rules:{name:[{required:!0,message:"请输入规则名称"}],desc:[{required:!0,message:"请输入至少五个字符的规则描述！"},{min:5,message:"请输入至少五个字符的规则描述！"}]},itemLayout:{labelWidth:{span:7},wrapperWidth:{span:12}}}},watch:{value:{immediate:!0,handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.form=t}}},methods:{validate:function(){return this.$refs.form.validate()}},render:function(){var t=arguments[0],e=this.form,a=this.itemLayout,n=this.rules;return t("el-form",{ref:"form",attrs:{rules:n,model:e,"label-position":"right",size:"small"}},[t("el-form-item",{attrs:{label:"规则名称",prop:"name","label-width":a.labelWidth,"wrapper-width":a.wrapperWidth}},[t("el-input",{attrs:{value:e.name},on:{input:function(t){e.name=t}}})]),t("el-form-item",{attrs:{label:"规则描述",prop:"desc","label-width":a.labelWidth,"wrapper-width":a.wrapperWidth}},[t("el-input",{attrs:{type:"textarea",value:e.desc},on:{input:function(t){e.desc=t}}})])])}},ruleAttribute:{props:{value:{required:!0,type:Object}},data:function(){return{form:{},itemLayout:{labelWidth:{span:7},wrapperWidth:{span:12}}}},watch:{value:{immediate:!0,handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.form=t}},form:{deep:!0,handler:function(t){this.$emit("input",t)}}},methods:{validate:function(){return new Promise(function(t){t()})}},render:function(){var t=arguments[0],e=this.form,a=this.itemLayout;return t("el-form",{ref:"form",attrs:{model:e,"label-position":"right",size:"small"}},[t("el-form-item",{attrs:{label:"监控对象",prop:"target","label-width":a.labelWidth,"wrapper-width":a.wrapperWidth}},[t("el-select",{attrs:{value:e.target},on:{input:function(t){e.target=t}}},[t("el-option",{attrs:{label:"表一",value:"1"}}),t("el-option",{attrs:{label:"表二",value:"2"}})])]),t("el-form-item",{attrs:{label:"规则模板",prop:"template","label-width":a.labelWidth,"wrapper-width":a.wrapperWidth}},[t("el-select",{attrs:{value:e.template},on:{input:function(t){e.template=t}}},[t("el-option",{attrs:{label:"规则模板一",value:"1"}}),t("el-option",{attrs:{label:"规则模板二",value:"2"}})])]),t("el-form-item",{attrs:{label:"规则类型",prop:"type","label-width":a.labelWidth,"wrapper-width":a.wrapperWidth}},[t("el-radio-group",{attrs:{value:e.type},on:{input:function(t){e.type=t}}},[t("el-radio",{attrs:{label:"1"}},["强"]),t("el-radio",{attrs:{label:"2"}},["弱"])])])])}},frequency:{props:{value:{required:!0,type:Object}},data:function(){return{form:{},itemLayout:{labelWidth:{span:7},wrapperWidth:{span:12}},rules:{startTime:[{required:!0,message:"请选择开始时间！"}]}}},watch:{value:{immediate:!0,handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.form=t}},form:{deep:!0,handler:function(t){this.$emit("input",t)}}},methods:{validate:function(){return this.$refs.form.validate()}},render:function(){var t=arguments[0],e=this.form,a=this.itemLayout,n=this.rules;return t("el-form",{ref:"form",attrs:{rules:n,model:e,"label-position":"right",size:"small"}},[t("el-form-item",{attrs:{label:"开始时间",prop:"startTime","label-width":a.labelWidth,"wrapper-width":a.wrapperWidth,"value-format":"yyyy-MM-dd HH:mm:ss"}},[t("el-date-picker",{attrs:{type:"datetime",value:e.startTime},on:{input:function(t){e.startTime=t}},style:{width:"100%"}})]),t("el-form-item",{attrs:{label:"调度周期",prop:"frequency","label-width":a.labelWidth,"wrapper-width":a.wrapperWidth}},[t("el-select",{attrs:{value:e.frequency},on:{input:function(t){e.frequency=t}}},[t("el-option",{attrs:{label:"月",value:"1"}}),t("el-option",{attrs:{label:"周",value:"2"}})])])])}}}}),S=y,k=(a("bSEG"),a("m/9U"),a("KHd+")),C=Object(k["a"])(S,w,g,!1,null,"58aa6639",null),_=C.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-position":"right"}},[a("el-form-item",{attrs:{label:"描述","label-width":t.itemLayout.labelWidth,"wrapper-width":t.itemLayout.wrapperWidth,prop:"desc"}},[a("el-input",{model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)],1)},L=[];a("RW0V");function R(){return{desc:""}}var F={name:"CreateForm",props:{value:Object},data:function(){return{form:{},itemLayout:{labelWidth:{span:6},wrapperWidth:{span:13}},rules:{desc:[{required:!0,message:"请输入至少五个字符的规则描述！"},{min:5,message:"请输入至少五个字符的规则描述！"}]}}},created:function(){var t=this,e=R();Object.keys(e).forEach(function(a){t.$set(t.form,a,e[a])})},watch:{form:{immediate:!0,deep:!0,handler:function(t){this.$emit("input",t)}}},methods:{validate:function(){return this.$refs.form.validate()}}},j=F,z=Object(k["a"])(j,x,L,!1,null,null,null),O=z.exports,T={name:"TableList",components:{AllocationStepForm:_,CreateForm:O},data:function(){var t=["关闭","运行中","已上线","异常"];return{form:{name:null,callNo:null,status:null,updateDate:"",status1:null,status2:null},searchCondition:{status:null,sorter:null},isSimpleSearchCondition:!0,searchResultList:[],pagination:{current:1,pageSize:10,total:null},statusValueMap:["default","processing","success","error"],statusLabelList:t,statusFilterList:t.map(function(t,e){var a={text:t,value:e};return a}),isLoadingSearchResultList:!1,tableSelectionList:[],createFormVisible:!1,selectedRule:{},currentStep:0,allocationStepFormVisible:!1}},computed:{tableSelectionCount:function(){return Object(v["i"])(this.tableSelectionList)?0:this.tableSelectionList.length},tableSelectedTotalCallNo:function(){if(Object(v["i"])(this.tableSelectionList))return 0;var t=0;return this.tableSelectionList.forEach(function(e){t+=e.callNo}),t}},created:function(){this.fetch()},methods:{fetch:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,n,i,r,s,l,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoadingSearchResultList=!0,e=this.searchCondition,a=e.sorter,n=e.status,i=this.pagination,r=i.current,s=i.pageSize,t.next=5,c(Object.assign({},{currentPage:r,pageSize:s},{status:n,sorter:a}));case 5:l=t.sent,this.pagination.total=l.pagination.total,this.searchResultList=l.list||[],this.isLoadingSearchResultList=!1,this.$nextTick(function(){o.toggleRowSelection(!0)});case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),toggleRowSelection:function(t){var e=this;Object(v["i"])(this.tableSelectionList)||this.searchResultList.forEach(function(a,n){var i=e.tableSelectionList.find(function(t){return t.key===a.key});Object(v["i"])(i)||e.$refs.table.toggleRowSelection(e.searchResultList[n],t)})},formatDate:function(t){return Object(v["e"])(t,"YYYY-MM-DD HH:mm:ss")},handleSearch:function(){var t=this.form.status;this.searchCondition.status="".concat(Object(v["j"])(t)?t:""),this.pagination.current=1,this.fetch()},handleResetSearchCondition:function(){this.$refs.form.resetFields()},handleCreate:function(){this.createFormVisible=!0},handleMoreAction:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var a,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("delete"!==e){t.next=7;break}return a=this.tableSelectionList.map(function(t){return t.key}),this.isLoadingSearchResultList=!0,t.next=5,f(a);case 5:a.forEach(function(t){var e=n.tableSelectionList.findIndex(function(e){return e.key===t});-1!==e&&n.tableSelectionList.splice(e,1)}),this.fetch();case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),hanleClearTableSelection:function(){var t=this;this.toggleRowSelection(!1),this.$nextTick(function(){t.tableSelectionList=[]})},handleCurrentChange:function(t){this.pagination.current=t,this.fetch()},handleSizeChange:function(t){this.pagination.pageSize=t,this.fetch()},handleTableFilterChange:function(t){var e=t.status,a=null;Object(v["i"])(e)||(a=e.join(",")),this.searchCondition.status=a,this.pagination.current=1,this.fetch()},handleTableRowSelect:function(t,e){var a=!Object(v["i"])(t.find(function(t){return t.key===e.key})),n=this.tableSelectionList.findIndex(function(t){return t.key===e.key});a?-1===n&&this.tableSelectionList.push(e):-1!==n&&this.tableSelectionList.splice(n,1)},handleTableRowSelectAll:function(t){var e=this,a=t;Object(v["i"])(t)&&(a=[]),this.searchResultList.forEach(function(t){e.handleTableRowSelect(a,t)})},handleTableSortChange:function(t){var e=t.prop,a=t.order;this.searchCondition.sorter=null===e?null:"".concat(e,"_").concat("ascending"===a?"ascend":"descend"),this.fetch()},handleCloseCreateForm:function(){this.createFormVisible=!1},handleCreateRule:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$refs.createForm.validate();case 2:if(e=t.sent,!e){t.next=10;break}return t.next=6,p(this.selectedRule.desc);case 6:l["a"].showMessage(new s["a"]("MBM001S",["","添加"])),this.selectedRule={},this.handleCloseCreateForm(),this.fetch();case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleConfigRule:function(t){var e=t.key,a=t.name,n=t.desc;this.selectedRule={key:e,name:a,desc:n,target:"1",template:"2",type:"2",startTime:null,frequency:"1"},this.allocationStepFormVisible=!0},handleUpdateAllocationStepFormVisible:function(t){this.allocationStepFormVisible=!!t,this.allocationStepFormVisible||(this.currentStep=0)},handlePrev:function(){this.currentStep-=1},handleNext:function(){this.currentStep+=1},handleUpdateRule:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.handleUpdateAllocationStepFormVisible(),e=this.selectedRule,a=e.key,n=e.name,i=e.desc,t.next=4,m(a,n,i);case 4:l["a"].showMessage(new s["a"]("MBM001S",["","配置"])),this.selectedRule={},this.fetch();case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),tableRowSelectable:function(t){var e=t.disabled;return!e}}},M=T,W=(a("zH8I"),a("YgMY"),Object(k["a"])(M,n,i,!1,null,"4e6beab2",null));e["default"]=W.exports},LwC8:function(t,e,a){"use strict";var n=a("dENJ"),i=a.n(n);i.a},RMjs:function(t,e,a){},StWk:function(t,e,a){},V6x5:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},i=[],r=a("KHd+"),s={},l=Object(r["a"])(s,n,i,!1,null,null,null);e["default"]=l.exports},YgMY:function(t,e,a){"use strict";var n=a("StWk"),i=a.n(n);i.a},bSEG:function(t,e,a){"use strict";var n=a("vHit"),i=a.n(n);i.a},bxKo:function(t,e,a){"use strict";var n=a("RMjs"),i=a.n(n);i.a},cLCY:function(t,e,a){},dENJ:function(t,e,a){},"m/9U":function(t,e,a){"use strict";var n=a("qwMc"),i=a.n(n);i.a},m25Y:function(t,e,a){"use strict";var n=a("cLCY"),i=a.n(n);i.a},mRzU:function(t,e,a){},mcsB:function(t,e,a){"use strict";var n=a("xOVi"),i=a.n(n);i.a},qwMc:function(t,e,a){},vHit:function(t,e,a){},xOVi:function(t,e,a){},zH8I:function(t,e,a){"use strict";var n=a("mRzU"),i=a.n(n);i.a},zJy1:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-page-header",{attrs:{title:"动态查询列表",content:"通过定义JSON-Schema格式的检索条件和检索结果的结构，可以快速构建一个常用的检索页面。"}}),a("el-grid-content",[a("el-card",[a("el-template-base-search",{ref:"searchDataList",staticClass:"search-list",attrs:{"condition-schema":t.conditionSchema,condition:t.condition,"result-schema":t.resultSchema,"result-ui-schema":t.resultUiSchema,"get-result":t.doGetResult,pagination:"full","page-size":t.pageSize,"pagination-layout":"prev, pager, next, jumper","result-column-auto-align":""},scopedSlots:t._u([{key:"tableRowButton",fn:function(e){return a("div",{},[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.doUpdate(e.row)}}},[t._v("修改")]),a("span",{staticClass:"button-separator"},[t._v("|")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.doDelete(e.row)}}},[t._v("删除")])],1)}},{key:"columnActiveFlag",fn:function(e){return[a("span",{class:{invalid:"无效"===e.row.activeFlag}},[t._v("\n            "+t._s(e.row.activeFlag)+"\n          ")])]}}])},[a("div",{attrs:{slot:"tableButton"},slot:"tableButton"},[a("el-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:t.doCreate}},[t._v("新增")])],1)])],1)],1)],1)},i=[],r=(a("f3/d"),a("ls82"),a("MECJ")),s=a("zcDO"),l=a("TwqC"),o=a("5KvI"),c={data:function(){return{condition:{name:"",theFetchStart:0,theFetchSize:10},conditionSchema:{name:{type:"string",title:"用户姓名"}},resultSchema:{name:{type:"string",title:"姓名"},gender:{type:"string",title:"性别"},birth:{type:"string",title:"出生日期",format:"date"},mobile:{type:"integer",title:"手机号"},activeFlag:{type:"string",title:"状态"}},resultUiSchema:{birth:{"ui:minWidth":"120px"},mobile:{"ui:minWidth":"120px","ui:headerAlign":"right"}},tableData:[],pageSize:10,selectionRows:[]}},methods:{doGetResult:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.condition.theFetchStart=1===a?0:(a-1)*this.condition.theFetchSize,t.abrupt("return",o["a"].get("users"));case 2:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),doCreate:function(){l["a"].showMessage(new s["a"]("MBM004I",["新增"]))},doUpdate:function(t){var e=t.name;l["a"].showMessage(new s["a"]("MBM004I",["修改".concat(e)]))},doDelete:function(t){var e=t.name;l["a"].showMessageBox(new s["a"]("MBM002I",["删除".concat(e)])).then(function(){l["a"].showMessage(new s["a"]("MBM001S",[e,"删除"]))})}}},u=c,p=(a("LwC8"),a("KHd+")),d=Object(p["a"])(u,n,i,!1,null,"b1c6cb50",null);e["default"]=d.exports}}]);