(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"2cd8":function(e,a,t){},"3be1":function(e,a,t){"use strict";var n=t("2cd8"),o=t.n(n);o.a},a9c3:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-layout",{attrs:{view:"lHh Lpr lFf"}},[t("q-header",{attrs:{elevated:""}},[t("q-toolbar",[t("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(a){e.leftDrawerOpen=!e.leftDrawerOpen}}}),t("q-toolbar-title",{staticClass:"judul"},[e._v("Manajemen Proyek IT")]),t("div",[e._v(e._s(e.tanggal))])],1)],1),t("q-footer",[t("q-tabs",e._l(e.navs,(function(e){return t("q-route-tab",{key:e.label,attrs:{to:e.to,icon:e.icon,label:e.label}})})),1)],1),t("q-drawer",{attrs:{breakpoint:767,width:250,bordered:"","content-class":"bg-primary"},model:{value:e.leftDrawerOpen,callback:function(a){e.leftDrawerOpen=a},expression:"leftDrawerOpen"}},[t("q-list",{attrs:{dark:""}},[t("q-item-label",{attrs:{header:""}},[e._v("Monitoring")]),e._l(e.navs,(function(a){return t("q-item",{key:a.label,staticClass:"text-grey-4",attrs:{to:a.to,exact:"",clickable:""}},[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:a.icon}})],1),t("q-item-section",[t("q-item-label",[e._v(e._s(a.label))])],1)],1)}))],2)],1),t("q-page-container",[t("router-view")],1)],1)},o=[],r=t("b06b"),l=t("bd4c");let i=Date.now(),s=l["b"].formatDate(i,"DD-MM-YYYY");var c={name:"MainLayout",data(){return{tanggal:s,leftDrawerOpen:this.$q.platform.is.desktop,navs:[{label:"On Proses",icon:"list",to:"/"},{label:"Selesai",icon:"check",to:"/selesai"},{label:"Info",icon:"info",to:"/info"}]}},methods:{openURL:r["a"]}},b=c,u=(t("3be1"),t("2877")),f=t("4d5a"),d=t("e359"),p=t("65c6"),m=t("9c40"),q=t("6ac5"),w=t("7ff0"),v=t("429b"),Q=t("7867"),k=t("9404"),D=t("1c1c"),_=t("0170"),g=t("66e5"),h=t("4074"),y=t("0016"),O=t("09e3"),I=t("eebe"),L=t.n(I),M=Object(u["a"])(b,n,o,!1,null,null,null);a["default"]=M.exports;L()(M,"components",{QLayout:f["a"],QHeader:d["a"],QToolbar:p["a"],QBtn:m["a"],QToolbarTitle:q["a"],QFooter:w["a"],QTabs:v["a"],QRouteTab:Q["a"],QDrawer:k["a"],QList:D["a"],QItemLabel:_["a"],QItem:g["a"],QItemSection:h["a"],QIcon:y["a"],QPageContainer:O["a"]})}}]);