(this["webpackJsonpirgendwas-mit-hardware"]=this["webpackJsonpirgendwas-mit-hardware"]||[]).push([[0],{76:function(e,t,n){e.exports=n(86)},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),c=n.n(i),o=n(35),l=n(36),u=n(120),s=n(15),m=n(133),d=n(135),f=n(136),b=n(137),p=n(125),h=n(52),g=n(152),E=n(140),v=n(138),S=n(139),k=n(141),w=n(130),T=n(129),G=n(32),O=n(87),B=n(123),F=n(124),j=n(128),y=n(126),z=n(127),x=Object(u.a)((function(e){return{active:{backgroundColor:e.palette.action.selected},nested:{paddingLeft:e.spacing(4)}}})),M=function(e){var t=e.text,n=e.to,a=e.nested,i=e.children,c=x(),l=r.a.useState(!0),u=Object(o.a)(l,2),s=u[0],m=u[1],d=r.a.forwardRef((function(e,t){return r.a.createElement(G.b,Object.assign({to:n||"",activeClassName:c.active},e,{ref:t}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{button:!0,component:n?d:"div",className:a?c.nested:void 0},r.a.createElement(B.a,{primary:t}),i&&r.a.createElement(F.a,null,r.a.createElement(p.a,{edge:"end",onClick:function(){m(!s)}},s?r.a.createElement(y.a,null):r.a.createElement(z.a,null)))),i&&r.a.createElement(j.a,{in:s},r.a.createElement(R,{component:"div",value:i,nested:!0})))},R=function(e){var t=e.component,n=e.value,a=e.nested;return r.a.createElement(T.a,{component:t,disablePadding:a},n.map((function(e,t){return r.a.createElement(M,{key:t,text:e.text,to:e.to,nested:a,children:e.children})})))},C=[{text:"Home",to:"/home"},{text:"Netzwerk",children:[{text:"Kabel",to:"/network/cable"},{text:"WLAN / Wi-Fi",to:"/network/wifi"}]},{text:"RAM",to:"/memory"},{text:"USB",to:"/usb"}],N=Object(u.a)((function(e){return{toolbar:e.mixins.toolbar}})),U=function(){var e=N();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.toolbar}),r.a.createElement(w.a,null),r.a.createElement(R,{component:"nav",value:C}))},A=n(131),D=n(132),H=Object(u.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),P=function(e){var t=e.children,n=H(),a=Object(A.a)({disableHysteresis:!0,threshold:100});return r.a.createElement(D.a,{in:a},r.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root},t))},q=n(134),W=function(e){var t=e.children,n=Object(s.a)(),a=Object(m.a)(n.breakpoints.down("xs")),i=Object(A.a)();return r.a.createElement(q.a,{appear:!1,direction:"down",in:!a||!i},t)},I=n(10),L=Object(u.a)((function(e){return{root:{display:"flex"},drawer:Object(l.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(l.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(l.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,grow:{flexGrow:1},drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}})),J=function(e){var t=L(),n=Object(s.a)(),i=Object(I.g)(),c=r.a.useState(!1),l=Object(o.a)(c,2),u=l[0],w=l[1],T=Object(m.a)(n.breakpoints.down("xs"));Object(a.useEffect)((function(){w(!1)}),[i]);var G=function(){w(!u)};return r.a.createElement("div",{className:t.root},r.a.createElement(d.a,null),r.a.createElement(W,null,r.a.createElement(f.a,{position:"fixed",className:t.appBar},r.a.createElement(b.a,null,r.a.createElement(p.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:G,className:t.menuButton},r.a.createElement(v.a,null)),r.a.createElement(h.a,{variant:"h6",noWrap:!0,className:t.grow},"Irgendwas mit Hardware"),r.a.createElement(p.a,{"aria-label":"search",color:"inherit"},r.a.createElement(S.a,null))))),r.a.createElement("nav",{className:t.drawer},r.a.createElement(g.a,{variant:T?"temporary":"permanent",anchor:T&&"rtl"===n.direction?"right":"left",open:u,onClose:G,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement(U,null))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar,id:"back-to-top-anchor"}),e.children,r.a.createElement(P,null,r.a.createElement(E.a,{color:"secondary",size:"small","aria-label":"scroll back to top"},r.a.createElement(k.a,null)))))},K=n(14),V=n(143),X=function(e,t,n){return{type:e,frequency:t,timing:n}},$=n(65),Q=n(150),Y=n(142),Z=function(e){var t=e.value,n=e.options,a=e.renderOption,i=e.onChange,c=e.children,o=Object($.a)(e,["value","options","renderOption","onChange","children"]),l=n.indexOf(t);return r.a.createElement(Q.a,Object.assign({},o,{value:l,onChange:function(e){i&&i(Object(K.a)(Object(K.a)({},e),{},{target:Object(K.a)(Object(K.a)({},e.target),{},{value:n[e.target.value]})}))},select:!0}),c&&r.a.createElement(Y.a,{disabled:!0,value:-1},c),n.map((function(e,t){return r.a.createElement(Y.a,{key:t,value:t},a?a(e):e)})))},_=[X("DDR",2133,10),X("DDR",2400,12),X("DDR",3200,16),X("DDR",3600,18)],ee=function(e){var t=e.value,n=e.onChange,a=_.find((function(e){return e.type===t.type&&e.frequency===t.frequency&&e.timing===t.timing}));return r.a.createElement(Z,{label:"Presets",value:a,options:_,renderOption:function(e){return"".concat(e.type," ").concat(e.frequency,"MHz CL").concat(e.timing)},onChange:function(e){n(e.target.value)}},"Custom")},te=function(e){var t=e.value,n=e.onChange,a=isFinite(t)?t.toString():"";return r.a.createElement(Q.a,Object.assign({},e,{value:a,onChange:function(e){n&&n(Object(K.a)(Object(K.a)({},e),{},{target:Object(K.a)(Object(K.a)({},e.target),{},{value:parseFloat(e.target.value)})}))}}))},ne=function(){var e=Object(a.useState)(X("DDR",3200,16)),t=Object(o.a)(e,2),n=t[0],i=t[1],c=n.type,l=n.frequency,u=n.timing,s=function(e,t){return e/(1e3*t)}(l,function(e){switch(e){case"SDR":return 1;case"DDR":return 2}}(c)),m=function(e){return 1/e}(s),d=function(e,t){return e*t}(u,m);return r.a.createElement(V.a,{container:!0,spacing:2},r.a.createElement(V.a,{item:!0},r.a.createElement(Z,{label:"Typ",value:c,options:["SDR","DDR"],onChange:function(e){i((function(t){return Object(K.a)(Object(K.a)({},t),{},{type:e.target.value})}))}})),r.a.createElement(V.a,{item:!0},r.a.createElement(te,{label:"Speichertakt",helperText:"In MHz",value:l,onChange:function(e){i((function(t){return Object(K.a)(Object(K.a)({},t),{},{frequency:e.target.value})}))}})),r.a.createElement(V.a,{item:!0},r.a.createElement(te,{label:"Taktzyklusdauer",helperText:"In ns",disabled:!0,value:s})),r.a.createElement(V.a,{item:!0},r.a.createElement(te,{label:"Taktzyklen pro ns",helperText:"Taktzyklen",disabled:!0,value:m})),r.a.createElement(V.a,{item:!0},r.a.createElement(te,{label:"Timing",helperText:"Taktzyklen",value:u,onChange:function(e){i((function(t){return Object(K.a)(Object(K.a)({},t),{},{timing:e.target.value})}))}})),r.a.createElement(V.a,{item:!0},r.a.createElement(te,{label:"Effektive Latenz",helperText:"In ns",disabled:!0,value:d})),r.a.createElement(V.a,{item:!0},r.a.createElement(ee,{value:n,onChange:function(e){i(e)}})))},ae=function(){return r.a.createElement(r.a.Fragment,null,"Home")},re=function(e,t,n,a,r){return{name:e,bandwidth:t,transferRates:n,shielding:a,notes:r}},ie=n(144),ce=n(145),oe=n(146),le=n(147),ue=n(148),se=n(149),me=Object(u.a)((function(e){return{toolbar:{paddingLeft:e.spacing(2)}}})),de=function(e){var t=e.caption,n=e.columns,a=e.value,i=e.legend,c=me();return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(b.a,{className:c.toolbar},r.a.createElement(h.a,{variant:"h6"},t)),r.a.createElement(ie.a,null,r.a.createElement(ce.a,null,r.a.createElement(oe.a,null,r.a.createElement(le.a,null,n.map((function(e,t){return r.a.createElement(ue.a,{key:t},e.header)})))),r.a.createElement(se.a,null,a.map((function(e,t){return r.a.createElement(le.a,{key:t,hover:!0},n.map((function(n,a){return r.a.createElement(ue.a,{key:a,component:0===a?"th":void 0,scope:0===a?"row":void 0},n.render(e,t))})))}))))),i&&r.a.createElement(b.a,{className:c.toolbar},i))},fe=[{designation:"U/UTP",cable:"",pair:""},{designation:"U/FTP",cable:"",pair:"Folie"},{designation:"F/UTP",cable:"Folie",pair:""},{designation:"S/UTP",cable:"Drahtgeflecht",pair:""},{designation:"SF/UTP",cable:"Drahtgeflecht und Folie",pair:""},{designation:"F/FTP",cable:"Folie",pair:"Folie"},{designation:"S/FTP",cable:"Drahtgeflecht",pair:"Folie"},{designation:"SF/FTP",cable:"Drahtgeflecht und Folie",pair:"Folie"}],be=function(){return r.a.createElement(de,{caption:"Schirmung",columns:[{id:"designation",header:"Bezeichnung (ISO/IEC 11801)",render:function(e){return e.designation}},{id:"cable",header:"Gesamtschirm",render:function(e){return e.cable}},{id:"pair",header:"Adernpaarschirm",render:function(e){return e.pair}}],value:fe,legend:"U = ungeschirmt, F = Folie, S = Drahtgeflecht, SF = Drahtgeflecht und Folie, TP = Twisted Pair"})},pe=[re("CAT 5","100 MHz",["100 Mbit/s (100BASE-TX)"],"UTP",""),re("CAT 5e","100 MHz",["1 Gbit/s (1000BASE-T)","2,5 Gbit/s (2.5GBASE-T)","5 Gbit/s (5GBASE-T) bis 75m"],"UTP",""),re("CAT 6","250 MHz",["5 Gbit/s (5GBASE-T)","10 Gbit/s (10GBASE-T) bis 55m"],"UTP",""),re("CAT 6a","500 MHz",["10 Gbit/s (10GBASE-T)"],"STP",""),re("CAT 7","600 MHz",["10 Gbit/s (10GBASE-T)"],"S/FTP","GG45 Stecker erforderlich"),re("CAT 7a","1000 MHz",["10 Gbit/s (10GBASE-T)"],"S/FTP","GG45 Stecker erforderlich"),re("CAT 8","2000 MHz",["25 Gbit/s (25GBASE-T)","40 Gbit/s (40GBASE-T)"],"S/FTP","")],he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(de,{caption:"Kategorien",columns:[{id:"name",header:"Bezeichnung",render:function(e){return e.name}},{id:"bandwidth",header:"Bandbreite",render:function(e){return e.bandwidth}},{id:"transferRates",header:"\xdcbertragungsrate",render:function(e){return e.transferRates.map((function(e,t){return r.a.createElement("div",{key:t},e)}))}},{id:"shielding",header:"Schirmung",render:function(e){return e.shielding}},{id:"notes",header:"Anmerkungen",render:function(e){return e.notes}}],value:pe}),r.a.createElement(be,null))},ge=[{name:"Low Speed",transferMode:"USB 1.0",oldNames:[],transferRate:"1,5 Mbit/s",notes:""},{name:"Full Speed",transferMode:"USB 1.0",oldNames:[],transferRate:"12 Mbit/s",notes:""},{name:"Hi-Speed",transferMode:"USB 2.0",oldNames:[],transferRate:"480 Mbit/s",notes:""},{name:"SuperSpeed USB",transferMode:"USB 3.2 Gen 1",oldNames:["USB 3.0","USB 3.1 Gen 1"],transferRate:"5 Gbit/s",notes:""},{name:"SuperSpeed USB 10 Gbit/s",transferMode:"USB 3.2 Gen 2",oldNames:["USB 3.1","USB 3.1 Gen 2"],transferRate:"10 Gbit/s",notes:""},{name:"SuperSpeed USB 20 Gbit/s",transferMode:"USB 3.2 Gen 2x2",oldNames:[],transferRate:"20 Gbit/s",notes:"USB-C Stecker erforderlich"}],Ee=function(){return r.a.createElement(de,{caption:"USB",columns:[{id:"name",header:"Bezeichnung",render:function(e){return e.name}},{id:"transferMode",header:"Spezifikation",render:function(e){return e.transferMode}},{id:"oldNames",header:"Alte Bezeichnungen",render:function(e){return e.oldNames.map((function(e,t){return r.a.createElement("div",{key:t},e)}))}},{id:"transferRate",header:"\xdcbertragungsrate",render:function(e){return e.transferRate}},{id:"notes",header:"Anmerkungen",render:function(e){return e.notes}}],value:ge})},ve=[{name:"Wi-Fi 1",ieeeStandard:"802.11b",transferRate:"1-11 Mbit/s",frequencies:["2,4 GHz"],notes:"inoffizieller Name"},{name:"Wi-Fi 2",ieeeStandard:"802.11a",transferRate:"1,5-54 Mbit/s",frequencies:["5 GHz"],notes:"inoffizieller Name"},{name:"Wi-Fi 3",ieeeStandard:"802.11g",transferRate:"3-54 Mbit/s",frequencies:["2,4 GHz"],notes:"inoffizieller Name"},{name:"Wi-Fi 4",ieeeStandard:"802.11n",transferRate:"72-600 Mbit/s",frequencies:["2,4 GHz","5 GHz"],notes:""},{name:"Wi-Fi 5",ieeeStandard:"802.11ac",transferRate:"433-6933 Mbit/s",frequencies:["2,4 GHz"],notes:""},{name:"Wi-Fi 6",ieeeStandard:"802.11ax",transferRate:"600-9608 Mbit/s",frequencies:["2,4 GHz","5 GHz"],notes:""}],Se=function(){return r.a.createElement(de,{caption:"Standards",columns:[{id:"name",header:"Bezeichnung",render:function(e){return e.name}},{id:"ieeeStandard",header:"IEEE Standard",render:function(e){return e.ieeeStandard}},{id:"transferRate",header:"\xdcbertragungsrate",render:function(e){return e.transferRate}},{id:"frequencies",header:"Frequenzbereich",render:function(e){return e.frequencies.map((function(e,t){return r.a.createElement("div",{key:t},e)}))}},{id:"notes",header:"Anmerkungen",render:function(e){return e.notes}}],value:ve})},ke=function(){return r.a.createElement(J,null,r.a.createElement(I.d,null,r.a.createElement(I.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(I.b,{path:"/home",component:ae}),r.a.createElement(I.b,{path:"/usb",component:Ee}),r.a.createElement(I.b,{path:"/memory",component:ne}),r.a.createElement(I.b,{exact:!0,path:"/network/cable",component:he}),r.a.createElement(I.b,{exact:!0,path:"/network/wifi",component:Se})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G.a,{basename:"/irgendwas-mit-hardware"},r.a.createElement(ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.62b81ff5.chunk.js.map