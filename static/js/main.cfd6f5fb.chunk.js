(this["webpackJsonpirgendwas-mit-hardware"]=this["webpackJsonpirgendwas-mit-hardware"]||[]).push([[0],{80:function(e,t,n){e.exports=n(90)},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),c=n.n(i),o=n(26),l=n(30),u=n(123),s=n(15),d=n(136),m=n(142),b=n(143),f=n(140),h=n(128),p=n(49),g=n(157),E=n(145),v=n(144),S=n(146),w=n(133),O=n(132),k=n(37),C=n(91),T=n(126),j=n(127),B=n(131),G=n(129),R=n(130),M=Object(u.a)((function(e){return{active:{backgroundColor:e.palette.action.selected},nested:{paddingLeft:e.spacing(4)}}})),z=function(e){var t=e.text,n=e.to,a=e.nested,i=e.children,c=M(),l=r.a.useState(!0),u=Object(o.a)(l,2),s=u[0],d=u[1],m=r.a.forwardRef((function(e,t){return r.a.createElement(k.b,Object.assign({to:n||"",activeClassName:c.active},e,{ref:t}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{button:!0,component:n?m:"div",className:a?c.nested:void 0},r.a.createElement(T.a,{primary:t}),i&&r.a.createElement(j.a,null,r.a.createElement(h.a,{edge:"end",onClick:function(){d(!s)}},s?r.a.createElement(G.a,null):r.a.createElement(R.a,null)))),i&&r.a.createElement(B.a,{in:s},r.a.createElement(y,{component:"div",value:i,nested:!0})))},y=function(e){var t=e.component,n=e.value,a=e.nested;return r.a.createElement(O.a,{component:t,disablePadding:a},n.map((function(e,t){return r.a.createElement(z,{key:t,text:e.text,to:e.to,nested:a,children:e.children})})))},x=[{text:"Home",to:"/home"},{text:"Netzwerk",children:[{text:"Kabel",to:"/network/cable"},{text:"WLAN / Wi-Fi",to:"/network/wifi"}]},{text:"RAM",to:"/memory"},{text:"USB",to:"/usb"},{text:"PCIe",to:"/pcie"}],F=Object(u.a)((function(e){return{toolbar:e.mixins.toolbar}})),P=function(){var e=F();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.toolbar}),r.a.createElement(w.a,null),r.a.createElement(y,{component:"nav",value:x}))},A=n(134),U=n(135),D=Object(u.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),I=function(e){var t=e.children,n=D(),a=Object(A.a)({disableHysteresis:!0,threshold:100});return r.a.createElement(U.a,{in:a},r.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root},t))},N=n(137),H=function(e){var t=e.children,n=Object(s.a)(),a=Object(d.a)(n.breakpoints.down("xs")),i=Object(A.a)();return r.a.createElement(N.a,{appear:!1,direction:"down",in:!a||!i},t)},q=n(11),W=n(14),L=n(158),K=n(138),J=n(139),V=n(141),X=Object(u.a)((function(e){return{search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(W.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(W.b)(e.palette.common.white,.25)},marginLeft:0,paddingLeft:e.spacing(2),width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),$=function(){var e=X(),t=r.a.useState(""),n=Object(o.a)(t,2),a=n[0],i=n[1];return r.a.createElement("div",{className:e.search},r.a.createElement(L.a,{value:a,onChange:function(e){i(e.target.value)},onKeyDown:function(e){"Escape"===e.key&&(i(""),e.currentTarget.blur())},placeholder:"Suche...",fullWidth:!0,classes:{root:e.inputRoot,input:e.inputInput},startAdornment:r.a.createElement(K.a,{position:"start"},r.a.createElement(J.a,null)),inputProps:{"aria-label":"search"}}))},Q=function(){var e=Object(s.a)(),t=r.a.useState(!1),n=Object(o.a)(t,2),a=n[0],i=n[1],c=Object(d.a)(e.breakpoints.down("xs")),l=function(){i(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{anchor:"top",open:c&&a,onClose:l},r.a.createElement(f.a,null,r.a.createElement(h.a,{edge:"start",onClick:l},r.a.createElement(V.a,null)),r.a.createElement($,null))),c?r.a.createElement(h.a,{"aria-label":"search",color:"inherit",onClick:function(){i(!0)}},r.a.createElement(J.a,null)):r.a.createElement($,null))},Y=Object(u.a)((function(e){return{root:{display:"flex"},drawer:Object(l.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(l.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(l.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,grow:{flexGrow:1},drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}})),Z=function(e){var t=Y(),n=Object(s.a)(),i=Object(q.g)(),c=r.a.useState(!1),l=Object(o.a)(c,2),u=l[0],w=l[1],O=Object(d.a)(n.breakpoints.down("xs"));Object(a.useEffect)((function(){w(!1)}),[i]);var k=function(){w(!u)};return r.a.createElement("div",{className:t.root},r.a.createElement(m.a,null),r.a.createElement(H,null,r.a.createElement(b.a,{position:"fixed",className:t.appBar},r.a.createElement(f.a,null,r.a.createElement(h.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:k,className:t.menuButton},r.a.createElement(v.a,null)),r.a.createElement(p.a,{variant:"h6",noWrap:!0,className:t.grow},"Irgendwas mit Hardware"),r.a.createElement(Q,null)))),r.a.createElement("nav",{className:t.drawer},r.a.createElement(g.a,{variant:O?"temporary":"permanent",anchor:O&&"rtl"===n.direction?"right":"left",open:u,onClose:k,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement(P,null))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar,id:"back-to-top-anchor"}),e.children,r.a.createElement(I,null,r.a.createElement(E.a,{color:"secondary",size:"small","aria-label":"scroll back to top"},r.a.createElement(S.a,null)))))},_=n(10),ee=n(148),te=function(e,t,n){return{type:e,frequency:t,timing:n}},ne=n(70),ae=n(155),re=n(147),ie=function(e){var t=e.value,n=e.options,a=e.renderOption,i=e.onChange,c=e.children,o=Object(ne.a)(e,["value","options","renderOption","onChange","children"]),l=n.indexOf(t);return r.a.createElement(ae.a,Object.assign({},o,{value:l,onChange:function(e){i&&i(Object(_.a)(Object(_.a)({},e),{},{target:Object(_.a)(Object(_.a)({},e.target),{},{value:n[e.target.value]})}))},select:!0}),c&&r.a.createElement(re.a,{disabled:!0,value:-1},c),n.map((function(e,t){return r.a.createElement(re.a,{key:t,value:t},a?a(e):e)})))},ce=[te("DDR",2133,10),te("DDR",2400,12),te("DDR",3200,16),te("DDR",3600,18)],oe=function(e){var t=e.value,n=e.onChange,a=ce.find((function(e){return e.type===t.type&&e.frequency===t.frequency&&e.timing===t.timing}));return r.a.createElement(ie,{label:"Presets",value:a,options:ce,renderOption:function(e){return"".concat(e.type," ").concat(e.frequency,"MHz CL").concat(e.timing)},onChange:function(e){n(e.target.value)}},"Custom")},le=function(e){var t=e.value,n=e.onChange,a=isFinite(t)?t.toString():"";return r.a.createElement(ae.a,Object.assign({},e,{value:a,onChange:function(e){n&&n(Object(_.a)(Object(_.a)({},e),{},{target:Object(_.a)(Object(_.a)({},e.target),{},{value:parseFloat(e.target.value)})}))}}))},ue=function(){var e=Object(a.useState)(te("DDR",3200,16)),t=Object(o.a)(e,2),n=t[0],i=t[1],c=n.type,l=n.frequency,u=n.timing,s=function(e,t){return e/(1e3*t)}(l,function(e){switch(e){case"SDR":return 1;case"DDR":return 2}}(c)),d=function(e){return 1/e}(s),m=function(e,t){return e*t}(u,d);return r.a.createElement(ee.a,{container:!0,spacing:2},r.a.createElement(ee.a,{item:!0},r.a.createElement(ie,{label:"Typ",value:c,options:["SDR","DDR"],onChange:function(e){i((function(t){return Object(_.a)(Object(_.a)({},t),{},{type:e.target.value})}))}})),r.a.createElement(ee.a,{item:!0},r.a.createElement(le,{label:"Speichertakt",helperText:"In MHz",value:l,onChange:function(e){i((function(t){return Object(_.a)(Object(_.a)({},t),{},{frequency:e.target.value})}))}})),r.a.createElement(ee.a,{item:!0},r.a.createElement(le,{label:"Taktzyklusdauer",helperText:"In ns",disabled:!0,value:s})),r.a.createElement(ee.a,{item:!0},r.a.createElement(le,{label:"Taktzyklen pro ns",helperText:"Taktzyklen",disabled:!0,value:d})),r.a.createElement(ee.a,{item:!0},r.a.createElement(le,{label:"Timing",helperText:"Taktzyklen",value:u,onChange:function(e){i((function(t){return Object(_.a)(Object(_.a)({},t),{},{timing:e.target.value})}))}})),r.a.createElement(ee.a,{item:!0},r.a.createElement(le,{label:"Effektive Latenz",helperText:"In ns",disabled:!0,value:m})),r.a.createElement(ee.a,{item:!0},r.a.createElement(oe,{value:n,onChange:function(e){i(e)}})))},se=function(){return r.a.createElement(r.a.Fragment,null,"Home")},de=function(e,t,n,a,r){return{name:e,bandwidth:t,transferRates:n,shielding:a,notes:r}},me=n(149),be=n(150),fe=n(151),he=n(152),pe=n(153),ge=n(154),Ee=Object(u.a)((function(e){return{toolbar:{paddingLeft:e.spacing(2)}}})),ve=function(e){var t=e.caption,n=e.columns,a=e.value,i=e.legend,c=Ee();return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(f.a,{className:c.toolbar},r.a.createElement(p.a,{variant:"h6"},t)),r.a.createElement(me.a,null,r.a.createElement(be.a,null,r.a.createElement(fe.a,null,r.a.createElement(he.a,null,n.map((function(e,t){return r.a.createElement(pe.a,{key:t},e.header)})))),r.a.createElement(ge.a,null,a.map((function(e,t){return r.a.createElement(he.a,{key:t,hover:!0},n.map((function(n,a){return r.a.createElement(pe.a,{key:a,component:0===a?"th":void 0,scope:0===a?"row":void 0},n.render(e,t))})))}))))),i&&r.a.createElement(f.a,{className:c.toolbar},i))},Se=[{designation:"U/UTP",cable:"",pair:""},{designation:"U/FTP",cable:"",pair:"Folie"},{designation:"F/UTP",cable:"Folie",pair:""},{designation:"S/UTP",cable:"Drahtgeflecht",pair:""},{designation:"SF/UTP",cable:"Drahtgeflecht und Folie",pair:""},{designation:"F/FTP",cable:"Folie",pair:"Folie"},{designation:"S/FTP",cable:"Drahtgeflecht",pair:"Folie"},{designation:"SF/FTP",cable:"Drahtgeflecht und Folie",pair:"Folie"}],we=function(){return r.a.createElement(ve,{caption:"Schirmung",columns:[{id:"designation",header:"Bezeichnung (ISO/IEC 11801)",render:function(e){return e.designation}},{id:"cable",header:"Gesamtschirm",render:function(e){return e.cable}},{id:"pair",header:"Adernpaarschirm",render:function(e){return e.pair}}],value:Se,legend:"U = ungeschirmt, F = Folie, S = Drahtgeflecht, SF = Drahtgeflecht und Folie, TP = Twisted Pair"})},Oe=[de("CAT 5","100 MHz",["100 Mbit/s (100BASE-TX)"],"UTP",""),de("CAT 5e","100 MHz",["1 Gbit/s (1000BASE-T)","2,5 Gbit/s (2.5GBASE-T)","5 Gbit/s (5GBASE-T) bis 75m"],"UTP",""),de("CAT 6","250 MHz",["5 Gbit/s (5GBASE-T)","10 Gbit/s (10GBASE-T) bis 55m"],"UTP",""),de("CAT 6a","500 MHz",["10 Gbit/s (10GBASE-T)"],"STP",""),de("CAT 7","600 MHz",["10 Gbit/s (10GBASE-T)"],"S/FTP","GG45 Stecker erforderlich"),de("CAT 7a","1000 MHz",["10 Gbit/s (10GBASE-T)"],"S/FTP","GG45 Stecker erforderlich"),de("CAT 8","2000 MHz",["25 Gbit/s (25GBASE-T)","40 Gbit/s (40GBASE-T)"],"S/FTP","")],ke=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,{caption:"Kategorien",columns:[{id:"name",header:"Bezeichnung",render:function(e){return e.name}},{id:"bandwidth",header:"Bandbreite",render:function(e){return e.bandwidth}},{id:"transferRates",header:"\xdcbertragungsrate",render:function(e){return e.transferRates.map((function(e,t){return r.a.createElement("div",{key:t},e)}))}},{id:"shielding",header:"Schirmung",render:function(e){return e.shielding}},{id:"notes",header:"Anmerkungen",render:function(e){return e.notes}}],value:Oe}),r.a.createElement(we,null))},Ce=[{name:"Low Speed",transferMode:"USB 1.0",oldNames:[],transferRate:"1,5 Mbit/s",notes:""},{name:"Full Speed",transferMode:"USB 1.0",oldNames:[],transferRate:"12 Mbit/s",notes:""},{name:"Hi-Speed",transferMode:"USB 2.0",oldNames:[],transferRate:"480 Mbit/s",notes:""},{name:"SuperSpeed USB",transferMode:"USB 3.2 Gen 1",oldNames:["USB 3.0","USB 3.1 Gen 1"],transferRate:"5 Gbit/s",notes:""},{name:"SuperSpeed USB 10 Gbit/s",transferMode:"USB 3.2 Gen 2",oldNames:["USB 3.1","USB 3.1 Gen 2"],transferRate:"10 Gbit/s",notes:""},{name:"SuperSpeed USB 20 Gbit/s",transferMode:"USB 3.2 Gen 2x2",oldNames:[],transferRate:"20 Gbit/s",notes:"USB-C Stecker erforderlich"}],Te=function(){return r.a.createElement(ve,{caption:"USB",columns:[{id:"name",header:"Bezeichnung",render:function(e){return e.name}},{id:"transferMode",header:"Spezifikation",render:function(e){return e.transferMode}},{id:"oldNames",header:"Alte Bezeichnungen",render:function(e){return e.oldNames.map((function(e,t){return r.a.createElement("div",{key:t},e)}))}},{id:"transferRate",header:"\xdcbertragungsrate",render:function(e){return e.transferRate}},{id:"notes",header:"Anmerkungen",render:function(e){return e.notes}}],value:Ce})},je=[{name:"Wi-Fi 1",ieeeStandard:"802.11b",transferRate:"1-11 Mbit/s",frequencies:["2,4 GHz"],notes:["inoffizielle Bezeichnung"]},{name:"Wi-Fi 2",ieeeStandard:"802.11a",transferRate:"1,5-54 Mbit/s",frequencies:["5 GHz"],notes:["inoffizielle Bezeichnung"]},{name:"Wi-Fi 3",ieeeStandard:"802.11g",transferRate:"3-54 Mbit/s",frequencies:["2,4 GHz"],notes:["inoffizielle Bezeichnung"]},{name:"Wi-Fi 4",ieeeStandard:"802.11n",transferRate:"72-600 Mbit/s",frequencies:["2,4 GHz","5 GHz"],notes:["bis zu 4x4 MIMO"]},{name:"Wi-Fi 5",ieeeStandard:"802.11ac",transferRate:"433-6933 Mbit/s",frequencies:["5 GHz"],notes:["bis zu 8x8 MIMO","unterst\xfczt MU-MIMO ab Wave 2","unterst\xfczt Beamforming"]},{name:"Wi-Fi 6",ieeeStandard:"802.11ax",transferRate:"600-9608 Mbit/s",frequencies:["2,4 GHz","5 GHz"],notes:[]}],Be=function(){return r.a.createElement(ve,{caption:"Standards",columns:[{id:"name",header:"Bezeichnung",render:function(e){return e.name}},{id:"ieeeStandard",header:"IEEE Standard",render:function(e){return e.ieeeStandard}},{id:"transferRate",header:"\xdcbertragungsrate",render:function(e){return e.transferRate}},{id:"frequencies",header:"Frequenzbereich",render:function(e){return e.frequencies.map((function(e,t){return r.a.createElement("div",{key:t},e)}))}},{id:"notes",header:"Anmerkungen",render:function(e){return e.notes.map((function(e,t){return r.a.createElement("div",{key:t},e)}))}}],value:je})},Ge=function(){var e=Object(a.useState)({transferRate:8,lineCodeWords:128,lineCodeSymbols:130,lanes:16}),t=Object(o.a)(e,2),n=t[0],i=t[1],c=n.transferRate,l=n.lineCodeWords,u=n.lineCodeSymbols,s=n.lanes,d=c*(l/u)*s/8*1e3;return r.a.createElement(ee.a,{container:!0,spacing:2},r.a.createElement(ee.a,{item:!0},r.a.createElement(le,{label:"\xdcbertragungsrate",helperText:"In GT/s",value:c,onChange:function(e){i((function(t){return Object(_.a)(Object(_.a)({},t),{},{transferRate:e.target.value})}))}})),r.a.createElement(ee.a,{item:!0},r.a.createElement(le,{label:"Leitungscode Datenbits",helperText:"In bit",value:l,onChange:function(e){i((function(t){return Object(_.a)(Object(_.a)({},t),{},{lineCodeWords:e.target.value})}))}})),r.a.createElement(ee.a,{item:!0},r.a.createElement(le,{label:"Leitungscode Codebits",helperText:"In bit",value:u,onChange:function(e){i((function(t){return Object(_.a)(Object(_.a)({},t),{},{lineCodeSymbols:e.target.value})}))}})),r.a.createElement(ee.a,{item:!0},r.a.createElement(le,{label:"Lanes",helperText:"Anzahl",value:s,onChange:function(e){i((function(t){return Object(_.a)(Object(_.a)({},t),{},{lanes:e.target.value})}))}})),r.a.createElement(ee.a,{item:!0},r.a.createElement(le,{label:"Bandbreite",helperText:"In MB/s",disabled:!0,value:d})))},Re=[{name:"PCIe 1.0",transferRate:"2,5 GT/s",lineCode:"8b/10b",bandwidth:"250 MB/s"},{name:"PCIe 2.0",transferRate:"5,0 GT/s",lineCode:"8b/10b",bandwidth:"500 MB/s"},{name:"PCIe 3.0",transferRate:"8,0 GT/s",lineCode:"128b/130b",bandwidth:"984,6 MB/s"},{name:"PCIe 4.0",transferRate:"16,0 GT/s",lineCode:"128b/130b",bandwidth:"1969,2 MB/s"},{name:"PCIe 5.0",transferRate:"32,0 GT/s",lineCode:"128b/130b",bandwidth:"3938,5 MB/s"}],Me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,{caption:"Standards",columns:[{id:"name",header:"Bezeichnung",render:function(e){return e.name}},{id:"transferRate",header:"\xdcbertragungsrate",render:function(e){return e.transferRate}},{id:"lineCode",header:"Leitungscode",render:function(e){return e.lineCode}},{id:"bandwidth",header:"Bandbreite pro Lane",render:function(e){return e.bandwidth}}],value:Re}),r.a.createElement(Ge,null))},ze=function(){return r.a.createElement(Z,null,r.a.createElement(q.d,null,r.a.createElement(q.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(q.b,{path:"/home",component:se}),r.a.createElement(q.b,{path:"/usb",component:Te}),r.a.createElement(q.b,{path:"/memory",component:ue}),r.a.createElement(q.b,{exact:!0,path:"/network/cable",component:ke}),r.a.createElement(q.b,{exact:!0,path:"/network/wifi",component:Be}),r.a.createElement(q.b,{path:"/pcie",component:Me})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k.a,{basename:"/irgendwas-mit-hardware"},r.a.createElement(ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[80,1,2]]]);
//# sourceMappingURL=main.cfd6f5fb.chunk.js.map