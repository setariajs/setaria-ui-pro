(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{JuBm:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("router-view")},l=[],o=s("KHd+"),r={},n=Object(o["a"])(r,e,l,!1,null,null,null);a["default"]=n.exports},O3ma:function(t,a,s){},"cE4+":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("el-grid-content",[s("el-row",{staticClass:"chart",attrs:{gutter:10}},[s("el-col",{attrs:{md:12,lg:6}},[s("el-chart-card",{attrs:{total:t.miniBarTotal}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("访问量")]),s("span",{attrs:{slot:"action"},slot:"action"},[s("el-tooltip",{attrs:{slot:"title",content:"指标说明",placement:"top"},slot:"title"},[s("i",{staticClass:"el-icon-info"})])],1),s("el-mini-bar",{attrs:{height:46,data:t.miniBarData}}),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n          日访问量 "+t._s(t.miniBarFooter)+"\n        ")])],1)],1),s("el-col",{attrs:{md:12,lg:6}},[s("el-chart-card",{attrs:{total:t.miniAreaTotal}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("搜索用户数量")]),s("span",{attrs:{slot:"action"},slot:"action"},[s("el-tooltip",{attrs:{slot:"title",content:"指标说明",placement:"top"},slot:"title"},[s("i",{staticClass:"el-icon-info"})])],1),s("el-mini-area",{attrs:{height:46,"border-width":2,data:t.miniAreaData}}),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n          转化率 "+t._s(t.miniAreaFooter)+"\n        ")])],1)],1),s("el-col",{attrs:{md:12,lg:6}},[s("el-chart-card",{staticClass:"trend",attrs:{total:t.textTotal,"content-height":46}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("总销售额")]),s("span",{attrs:{slot:"action"},slot:"action"},[s("el-tooltip",{attrs:{slot:"title",content:"指标说明",placement:"top"},slot:"title"},[s("i",{staticClass:"el-icon-info"})])],1),s("div",{staticClass:"trend-item"},[s("span",[t._v("周同比")]),s("el-trend",{attrs:{flag:"up"}},[t._v("12%")])],1),s("div",{staticClass:"trend-item"},[s("span",[t._v("日环比")]),s("el-trend",{attrs:{flag:"down"}},[t._v("10%")])],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n          日均销售额 "+t._s(t.miniAreaFooter)+"\n        ")])])],1),s("el-col",{attrs:{md:12,lg:6}},[s("el-chart-card",{staticClass:"progress",attrs:{total:t.progressTotal,"content-height":46}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("运营活动效果")]),s("span",{attrs:{slot:"action"},slot:"action"},[s("el-tooltip",{attrs:{slot:"title",content:"指标说明",placement:"top"},slot:"title"},[s("i",{staticClass:"el-icon-info"})])],1),s("el-progress",{attrs:{"text-inside":!0,"stroke-width":13,percentage:t.progressComponentValue}}),s("div",{staticClass:"progress-footer",attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"trend-item"},[s("span",[t._v("周同比")]),s("el-trend",{attrs:{flag:"up"}},[t._v("12%")])],1),s("div",{staticClass:"trend-item"},[s("span",[t._v("日环比")]),s("el-trend",{attrs:{flag:"down"}},[t._v("10%")])],1)])],1)],1)],1),s("el-card",{staticClass:"analysis_sales",attrs:{"tab-list":t.salesTabList,"active-tab-name":t.salesActiveTabName},on:{"update:activeTabName":function(a){t.salesActiveTabName=a}}},["sales"===t.salesActiveTabName?s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{xl:16,lg:16,md:12,sm:24,xs:24}},[s("el-bar",{attrs:{title:"销售额趋势",data:t.barData,height:300}})],1),s("el-col",{attrs:{xl:8,lg:8,md:12,sm:24,xs:24}},[s("div",{staticClass:"sales-rank"},[s("h4",[t._v("门店销售额排名")]),s("ul",{staticClass:"sales-raning-list"},t._l(t.salesRankData,function(a,e){return s("li",{key:e},[s("span",{class:e<3?"active":""},[t._v(t._s(e))]),s("span",[t._v(t._s(a.title))]),s("span",[t._v(t._s(a.total))])])}))])])],1):s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{xl:16,lg:16,md:12,sm:24,xs:24}},[s("el-bar",{attrs:{title:"访问量趋势",data:t.barData,height:300}})],1),s("el-col",{attrs:{xl:8,lg:8,md:12,sm:24,xs:24}},[s("div",{staticClass:"sales-rank"},[s("h4",[t._v("门店访问量排名")]),s("ul",{staticClass:"sales-raning-list"},t._l(t.salesRankData,function(a,e){return s("li",{key:e},[s("span",{class:e<3?"active":""},[t._v(t._s(e))]),s("span",[t._v(t._s(a.title))]),s("span",[t._v(t._s(a.total))])])}))])])],1)],1)],1)},l=[],o=s("ZhIB"),r=s.n(o),n=s("ii1/"),i={data:function(){for(var t=[],a=new Date,s=0;s<20;s+=1)t.push({x:Object(n["e"])(Object(n["a"])(a,s,"days"),"YYYY-MM-DD"),y:Math.floor(100*Math.random())+10});for(var e=[],l=0;l<12;l+=1)e.push({x:"".concat(l+1,"月"),y:Math.floor(1e3*Math.random())+200});for(var o=[],i=0;i<7;i+=1)o.push({title:"工专路 ".concat(i," 号店"),total:r()(323234).format("0,0")});return{miniAreaTotal:r()(12321).format("0,0"),miniAreaFooter:r()(.76).format("0%"),miniAreaData:t,miniBarTotal:r()(8846).format("0,0"),miniBarFooter:r()(1234).format("0,0"),miniBarData:t,barData:e,textTotal:"¥ ".concat(r()(129102).format("0,0")),progressValue:.78,salesTabList:[{label:"销售额",name:"sales"},{label:"访问量",name:"views"}],salesActiveTabName:"sales",salesRankData:o}},computed:{progressTotal:function(){return r()(this.progressValue).format("0%")},progressComponentValue:function(){return 100*this.progressValue}},created:function(){},components:{}},c=i,m=(s("zwHL"),s("KHd+")),p=Object(m["a"])(c,e,l,!1,null,"419cdf66",null);a["default"]=p.exports},s5tM:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{lg:12,xs:24}},[t._v("\n    A\n  ")]),s("el-col",{attrs:{lg:12,xs:24}},[t._v("\n    B\n  ")])],1)},l=[],o=s("KHd+"),r={},n=Object(o["a"])(r,e,l,!1,null,null,null);a["default"]=n.exports},zwHL:function(t,a,s){"use strict";var e=s("O3ma"),l=s.n(e);l.a}}]);