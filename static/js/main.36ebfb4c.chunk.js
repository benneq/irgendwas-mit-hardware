(this["webpackJsonpirgendwas-mit-hardware"]=this["webpackJsonpirgendwas-mit-hardware"]||[]).push([[0],{82:function(e,t,a){e.exports=a(94)},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),i=a(132),o=a(16),s=a(145),m=a(153),b=a(154),d=a(151),p=a(137),u=a(45),g=a(169),h=a(156),E=a(155),O=a(157),v=a(142),j=a(141),f=a(29),N=a(95),S=a(135),y=a(136),w=a(140),C=a(138),M=a(139);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const k=Object(i.a)(e=>({active:{backgroundColor:e.palette.action.selected},nested:{paddingLeft:e.spacing(4)}}));var R=e=>{const{text:t,to:a,nested:n,children:l}=e,c=k(),[i,o]=r.a.useState(!0),s=r.a.forwardRef((e,t)=>r.a.createElement(f.b,T({to:a||"",activeClassName:c.active},e,{ref:t})));return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{button:!0,component:a?s:"div",className:n?c.nested:void 0},r.a.createElement(S.a,{primary:t}),l&&r.a.createElement(y.a,null,r.a.createElement(p.a,{edge:"end",onClick:()=>{o(!i)}},i?r.a.createElement(C.a,null):r.a.createElement(M.a,null)))),l&&r.a.createElement(w.a,{in:i},r.a.createElement(B,{component:"div",value:l,nested:!0})))};var B=e=>{const{component:t,value:a,nested:n}=e;return r.a.createElement(j.a,{component:t,disablePadding:n},a.map((e,t)=>r.a.createElement(R,{key:t,text:e.text,to:e.to,nested:n,children:e.children})))};const G=[{text:"Home",to:"/home"},{text:"Netzwerk",children:[{text:"Kabel",to:"/network/cable"},{text:"WLAN / Wi-Fi",to:"/network/wifi"}]},{text:"RAM",to:"/memory"},{text:"USB",to:"/usb"},{text:"PCIe",to:"/pcie"},{text:"HDD",to:"/hdd"}],x=Object(i.a)(e=>({toolbar:e.mixins.toolbar}));var z=()=>{const e=x();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.toolbar}),r.a.createElement(v.a,null),r.a.createElement(B,{component:"nav",value:G}))},F=a(143),P=a(144);const D=Object(i.a)(e=>({root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}));var I=e=>{const{children:t}=e,a=D(),n=Object(F.a)({disableHysteresis:!0,threshold:100});return r.a.createElement(P.a,{in:n},r.a.createElement("div",{onClick:e=>{const t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.root},t))},A=a(146);var U=e=>{const{children:t}=e,a=Object(o.a)(),n=Object(s.a)(a.breakpoints.down("xs")),l=Object(F.a)();return r.a.createElement(A.a,{appear:!1,direction:"down",in:!n||!l},t)},H=a(12),L=a(152),q=a(149),W=a(9),X=a(166),V=a(148),$=a(150),J=a(167);const K=["USB","HDD","Festplatte","PMR","CMR","LMR","SMR","RAM","Arbeitsspeicher","latency","Latenz","Wi-Fi","WLAN","PCIe","network","Netzwerk"];function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Y=Object(i.a)(e=>({search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(W.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(W.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%",[e.breakpoints.up("sm")]:{marginLeft:e.spacing(1),width:"auto"}},inputRoot:{color:"inherit",paddingLeft:e.spacing(2)},inputInput:{padding:e.spacing(1,1,1,0),transition:e.transitions.create("width"),width:"100%",[e.breakpoints.up("sm")]:{width:"20ch"}},option:{paddingTop:0,paddingBottom:0},optionText:{flexGrow:1},arrowIcon:{transform:"rotate(-45deg)"},clearIndicator:{color:"inherit",marginRight:e.spacing(1)}}));var Z=e=>{const{value:t,onChange:a,onSubmit:n,showSearchIcon:l}=e,c=Y();return r.a.createElement(J.a,{className:c.search,inputValue:t,onInputChange:(e,t)=>{a(t)},onChange:(e,t)=>{t&&(a(t),n(t))},options:K,clearOnEscape:!0,freeSolo:!0,filterOptions:(e,t)=>t.inputValue.toLowerCase()?e.filter(e=>e.toLowerCase().startsWith(t.inputValue)):[],renderInput:({InputProps:{className:e,...t},...a})=>r.a.createElement(X.a,Q({placeholder:"Suche...",InputProps:{...t,disableUnderline:!0,classes:{root:c.inputRoot,input:c.inputInput},startAdornment:l&&r.a.createElement(V.a,{position:"start"},r.a.createElement(q.a,null))}},a)),renderOption:e=>{return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c.optionText},e),r.a.createElement(p.a,{edge:"end",onClick:(t=e,e=>{e.stopPropagation(),a(t)})},r.a.createElement($.a,{className:c.arrowIcon})));var t},classes:{option:c.option,clearIndicator:c.clearIndicator}})},_=a(72);var ee=()=>{const e=Object(o.a)(),t=Object(s.a)(e.breakpoints.down("xs")),[a,n]=r.a.useState(""),[l,c]=r.a.useState(!1),i=Object(H.g)(),m=()=>{c(!1)},b=e=>{n(e)},u=e=>{Object(_.isString)(e)||(e=a),c(!1),i.push({pathname:"/search",search:new URLSearchParams({q:e}).toString()})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{anchor:"top",open:t&&l,onClose:m},r.a.createElement(d.a,null,r.a.createElement(p.a,{edge:"start",onClick:m},r.a.createElement(L.a,null)),r.a.createElement(Z,{value:a,onChange:b,onSubmit:u}),r.a.createElement(p.a,{edge:"end",onClick:u},r.a.createElement(q.a,null)))),t?r.a.createElement(p.a,{edge:"end","aria-label":"search",color:"inherit",onClick:()=>{c(!0)}},r.a.createElement(q.a,null)):r.a.createElement(Z,{value:a,onChange:b,onSubmit:u,showSearchIcon:!0}))};const te=Object(i.a)(e=>({root:{display:"flex"},drawer:{[e.breakpoints.up("sm")]:{width:240,flexShrink:0}},appBar:{[e.breakpoints.up("sm")]:{width:"calc(100% - 240px)",marginLeft:240}},menuButton:{marginRight:e.spacing(2),[e.breakpoints.up("sm")]:{display:"none"}},toolbar:e.mixins.toolbar,grow:{flexGrow:1},drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}));var ae=e=>{const t=te(),a=Object(o.a)(),l=Object(H.h)(),[c,i]=r.a.useState(!1),v=Object(s.a)(a.breakpoints.down("xs"));Object(n.useEffect)(()=>{i(!1)},[l]);const j=()=>{i(!c)};return r.a.createElement("div",{className:t.root},r.a.createElement(m.a,null),r.a.createElement(U,null,r.a.createElement(b.a,{position:"fixed",className:t.appBar},r.a.createElement(d.a,null,r.a.createElement(p.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:j,className:t.menuButton},r.a.createElement(E.a,null)),r.a.createElement(u.a,{variant:"h6",noWrap:!0,className:t.grow},"Irgendwas mit Hardware"),r.a.createElement(ee,null)))),r.a.createElement("nav",{className:t.drawer},r.a.createElement(g.a,{variant:v?"temporary":"permanent",anchor:v&&"rtl"===a.direction?"right":"left",open:c,onClose:j,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement(z,null))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar,id:"back-to-top-anchor"}),e.children,r.a.createElement(I,null,r.a.createElement(h.a,{color:"secondary",size:"small","aria-label":"scroll back to top"},r.a.createElement(O.a,null)))))},ne=a(159);const re=(e,t,a)=>({type:e,frequency:t,timing:a});var le=a(158);function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var ie=e=>{const{value:t,options:a,renderOption:n,onChange:l,children:c,...i}=e,o=a.indexOf(t);return r.a.createElement(X.a,ce({},i,{value:o,onChange:e=>{l&&l({...e,target:{...e.target,value:a[e.target.value]}})},select:!0}),c&&r.a.createElement(le.a,{disabled:!0,value:-1},c),a.map((e,t)=>r.a.createElement(le.a,{key:t,value:t},n?n(e):e)))};const oe=[re("DDR",2133,10),re("DDR",2400,12),re("DDR",3200,16),re("DDR",3600,18)];var se=e=>{const{value:t,onChange:a}=e,n=oe.find(e=>e.type===t.type&&e.frequency===t.frequency&&e.timing===t.timing);return r.a.createElement(ie,{label:"Presets",value:n,options:oe,renderOption:e=>`${e.type} ${e.frequency}MHz CL${e.timing}`,onChange:e=>{a(e.target.value)}},"Custom")};function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var be=e=>{const{value:t,onChange:a}=e,n=isFinite(t)?t.toString():"";return r.a.createElement(X.a,me({},e,{value:n,onChange:e=>{a&&a({...e,target:{...e.target,value:parseFloat(e.target.value)}})}}))};var de=()=>{const[e,t]=Object(n.useState)(re("DDR",3200,16)),{type:a,frequency:l,timing:c}=e,i=((e,t)=>e/(1e3*t))(l,(e=>{switch(e){case"SDR":return 1;case"DDR":return 2}})(a)),o=(e=>1/e)(i),s=((e,t)=>e*t)(c,o);return r.a.createElement(ne.a,{container:!0,spacing:2},r.a.createElement(ne.a,{item:!0},r.a.createElement(ie,{label:"Typ",value:a,options:["SDR","DDR"],onChange:e=>{t(t=>({...t,type:e.target.value}))}})),r.a.createElement(ne.a,{item:!0},r.a.createElement(be,{label:"Speichertakt",helperText:"In MHz",value:l,onChange:e=>{t(t=>({...t,frequency:e.target.value}))}})),r.a.createElement(ne.a,{item:!0},r.a.createElement(be,{label:"Taktzyklusdauer",helperText:"In ns",disabled:!0,value:i})),r.a.createElement(ne.a,{item:!0},r.a.createElement(be,{label:"Taktzyklen pro ns",helperText:"Taktzyklen",disabled:!0,value:o})),r.a.createElement(ne.a,{item:!0},r.a.createElement(be,{label:"Timing",helperText:"Taktzyklen",value:c,onChange:e=>{t(t=>({...t,timing:e.target.value}))}})),r.a.createElement(ne.a,{item:!0},r.a.createElement(be,{label:"Effektive Latenz",helperText:"In ns",disabled:!0,value:s})),r.a.createElement(ne.a,{item:!0},r.a.createElement(se,{value:e,onChange:e=>{t(e)}})))};var pe=()=>r.a.createElement(r.a.Fragment,null,"Home");const ue=(e,t,a,n,r)=>({name:e,bandwidth:t,transferRates:a,shielding:n,notes:r});var ge=a(160),he=a(161),Ee=a(162),Oe=a(163),ve=a(164),je=a(165);const fe=Object(i.a)(e=>({toolbar:{paddingLeft:e.spacing(2)}}));var Ne=e=>{const{caption:t,columns:a,value:n,legend:l}=e,c=fe();return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(d.a,{className:c.toolbar},r.a.createElement(u.a,{variant:"h6"},t)),r.a.createElement(ge.a,null,r.a.createElement(he.a,null,r.a.createElement(Ee.a,null,r.a.createElement(Oe.a,null,a.map((e,t)=>r.a.createElement(ve.a,{key:t},e.header)))),r.a.createElement(je.a,null,n.map((e,t)=>r.a.createElement(Oe.a,{key:t,hover:!0},a.map((a,n)=>r.a.createElement(ve.a,{key:n,component:0===n?"th":void 0,scope:0===n?"row":void 0},a.render(e,t)))))))),l&&r.a.createElement(d.a,{className:c.toolbar},l))};const Se=[{designation:"U/UTP",cable:"",pair:""},{designation:"U/FTP",cable:"",pair:"Folie"},{designation:"F/UTP",cable:"Folie",pair:""},{designation:"S/UTP",cable:"Drahtgeflecht",pair:""},{designation:"SF/UTP",cable:"Drahtgeflecht und Folie",pair:""},{designation:"F/FTP",cable:"Folie",pair:"Folie"},{designation:"S/FTP",cable:"Drahtgeflecht",pair:"Folie"},{designation:"SF/FTP",cable:"Drahtgeflecht und Folie",pair:"Folie"}];var ye=()=>r.a.createElement(Ne,{caption:"Schirmung",columns:[{id:"designation",header:"Bezeichnung (ISO/IEC 11801)",render:e=>e.designation},{id:"cable",header:"Gesamtschirm",render:e=>e.cable},{id:"pair",header:"Adernpaarschirm",render:e=>e.pair}],value:Se,legend:"U = ungeschirmt, F = Folie, S = Drahtgeflecht, SF = Drahtgeflecht und Folie, TP = Twisted Pair"});const we=[ue("CAT 5","100 MHz",["100 Mbit/s (100BASE-TX)"],"UTP",""),ue("CAT 5e","100 MHz",["1 Gbit/s (1000BASE-T)","2,5 Gbit/s (2.5GBASE-T)","5 Gbit/s (5GBASE-T) bis 75m"],"UTP",""),ue("CAT 6","250 MHz",["5 Gbit/s (5GBASE-T)","10 Gbit/s (10GBASE-T) bis 55m"],"UTP",""),ue("CAT 6a","500 MHz",["10 Gbit/s (10GBASE-T)"],"STP",""),ue("CAT 7","600 MHz",["10 Gbit/s (10GBASE-T)"],"S/FTP","GG45 Stecker erforderlich"),ue("CAT 7a","1000 MHz",["10 Gbit/s (10GBASE-T)"],"S/FTP","GG45 Stecker erforderlich"),ue("CAT 8","2000 MHz",["25 Gbit/s (25GBASE-T)","40 Gbit/s (40GBASE-T)"],"S/FTP","")];var Ce=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,{caption:"Kategorien",columns:[{id:"name",header:"Bezeichnung",render:e=>e.name},{id:"bandwidth",header:"Bandbreite",render:e=>e.bandwidth},{id:"transferRates",header:"\xdcbertragungsrate",render:e=>e.transferRates.map((e,t)=>r.a.createElement("div",{key:t},e))},{id:"shielding",header:"Schirmung",render:e=>e.shielding},{id:"notes",header:"Anmerkungen",render:e=>e.notes}],value:we}),r.a.createElement(ye,null)),Me=a(4);function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const ke={};function Re({components:e,...t}){return Object(Me.b)("wrapper",Te({},ke,t,{components:e,mdxType:"MDXLayout"}),Object(Me.b)("h6",null,"Standards"),Object(Me.b)("table",null,Object(Me.b)("thead",{parentName:"table"},Object(Me.b)("tr",{parentName:"thead"},Object(Me.b)("th",Te({parentName:"tr"},{align:null}),"Bezeichnung"),Object(Me.b)("th",Te({parentName:"tr"},{align:null}),"Spezifikation"),Object(Me.b)("th",Te({parentName:"tr"},{align:null}),"Alte Bezeichnungen"),Object(Me.b)("th",Te({parentName:"tr"},{align:null}),"\xdcbertragungsrate"),Object(Me.b)("th",Te({parentName:"tr"},{align:null}),"Anmerkungen"))),Object(Me.b)("tbody",{parentName:"table"},Object(Me.b)("tr",{parentName:"tbody"},Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"Low Speed"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"USB 1.0"),Object(Me.b)("td",Te({parentName:"tr"},{align:null})),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"1,5 Mbit/s"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}))),Object(Me.b)("tr",{parentName:"tbody"},Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"Full Speed"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"USB 1.0"),Object(Me.b)("td",Te({parentName:"tr"},{align:null})),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"12 Mbit/s"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}))),Object(Me.b)("tr",{parentName:"tbody"},Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"Hi-Speed"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"USB 2.0"),Object(Me.b)("td",Te({parentName:"tr"},{align:null})),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"480 Mbit/s"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}))),Object(Me.b)("tr",{parentName:"tbody"},Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"SuperSpeed USB"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"USB 3.2 Gen 1"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"USB 3.0",Object(Me.b)("br",null),"USB 3.1 Gen 1"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"5 Gbit/s"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}))),Object(Me.b)("tr",{parentName:"tbody"},Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"SuperSpeed USB 10 Gbit/s"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"USB 3.2 Gen 2"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"USB 3.1",Object(Me.b)("br",null),"USB 3.1 Gen 2"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"10 Gbit/s"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}))),Object(Me.b)("tr",{parentName:"tbody"},Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"SuperSpeed USB 20 Gbit/s"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"USB 3.2 Gen 2x2"),Object(Me.b)("td",Te({parentName:"tr"},{align:null})),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"20 Gbit/s"),Object(Me.b)("td",Te({parentName:"tr"},{align:null}),"USB-C Stecker erforderlich")))))}Re.isMDXComponent=!0;var Be=()=>r.a.createElement(Re,null);const Ge=[{name:"Wi-Fi 1",ieeeStandard:"802.11b",transferRate:"1-11 Mbit/s",frequencies:["2,4 GHz"],notes:["inoffizielle Bezeichnung"]},{name:"Wi-Fi 2",ieeeStandard:"802.11a",transferRate:"1,5-54 Mbit/s",frequencies:["5 GHz"],notes:["inoffizielle Bezeichnung"]},{name:"Wi-Fi 3",ieeeStandard:"802.11g",transferRate:"3-54 Mbit/s",frequencies:["2,4 GHz"],notes:["inoffizielle Bezeichnung"]},{name:"Wi-Fi 4",ieeeStandard:"802.11n",transferRate:"72-600 Mbit/s",frequencies:["2,4 GHz","5 GHz"],notes:["bis zu 4x4 MIMO"]},{name:"Wi-Fi 5",ieeeStandard:"802.11ac",transferRate:"433-6933 Mbit/s",frequencies:["5 GHz"],notes:["bis zu 8x8 MIMO","unterst\xfczt MU-MIMO ab Wave 2","unterst\xfczt Beamforming"]},{name:"Wi-Fi 6",ieeeStandard:"802.11ax",transferRate:"600-9608 Mbit/s",frequencies:["2,4 GHz","5 GHz"],notes:[]}];var xe=()=>r.a.createElement(Ne,{caption:"Standards",columns:[{id:"name",header:"Bezeichnung",render:e=>e.name},{id:"ieeeStandard",header:"IEEE Standard",render:e=>e.ieeeStandard},{id:"transferRate",header:"\xdcbertragungsrate",render:e=>e.transferRate},{id:"frequencies",header:"Frequenzbereich",render:e=>e.frequencies.map((e,t)=>r.a.createElement("div",{key:t},e))},{id:"notes",header:"Anmerkungen",render:e=>e.notes.map((e,t)=>r.a.createElement("div",{key:t},e))}],value:Ge});function ze(){return(ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Fe={};function Pe({components:e,...t}){return Object(Me.b)("wrapper",ze({},Fe,t,{components:e,mdxType:"MDXLayout"}),Object(Me.b)("h6",null,"Standards"),Object(Me.b)("table",null,Object(Me.b)("thead",{parentName:"table"},Object(Me.b)("tr",{parentName:"thead"},Object(Me.b)("th",ze({parentName:"tr"},{align:null}),"Bezeichnung"),Object(Me.b)("th",ze({parentName:"tr"},{align:null}),"\xdcbertragungsrate"),Object(Me.b)("th",ze({parentName:"tr"},{align:null}),"Leitungscode"),Object(Me.b)("th",ze({parentName:"tr"},{align:null}),"Bandbreite pro Lane"),Object(Me.b)("th",ze({parentName:"tr"},{align:null})))),Object(Me.b)("tbody",{parentName:"table"},Object(Me.b)("tr",{parentName:"tbody"},Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"PCIe 1.0"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"2,5 GT/s"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"8b/10b"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"250 MB/s"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}))),Object(Me.b)("tr",{parentName:"tbody"},Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"PCIe 2.0"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"5,0 GT/s"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"8b/10b"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"500 MB/s"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}))),Object(Me.b)("tr",{parentName:"tbody"},Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"PCIe 3.0"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"8,0 GT/s"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"128b/130b"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"984,6 MB/s"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}))),Object(Me.b)("tr",{parentName:"tbody"},Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"PCIe 4.0"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"16,0 GT/s"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"128b/130b"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"1969,2 MB/s"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}))),Object(Me.b)("tr",{parentName:"tbody"},Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"PCIe 5.0"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"32,0 GT/s"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"128b/130b"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}),"3938,5 MB/s"),Object(Me.b)("td",ze({parentName:"tr"},{align:null}))))))}Pe.isMDXComponent=!0;var De=()=>{const[e,t]=Object(n.useState)({transferRate:8,lineCodeWords:128,lineCodeSymbols:130,lanes:16}),{transferRate:a,lineCodeWords:l,lineCodeSymbols:c,lanes:i}=e,o=a*(l/c)*i/8*1e3;return r.a.createElement(ne.a,{container:!0,spacing:2},r.a.createElement(ne.a,{item:!0},r.a.createElement(be,{label:"\xdcbertragungsrate",helperText:"In GT/s",value:a,onChange:e=>{t(t=>({...t,transferRate:e.target.value}))}})),r.a.createElement(ne.a,{item:!0},r.a.createElement(be,{label:"Leitungscode Datenbits",helperText:"In bit",value:l,onChange:e=>{t(t=>({...t,lineCodeWords:e.target.value}))}})),r.a.createElement(ne.a,{item:!0},r.a.createElement(be,{label:"Leitungscode Codebits",helperText:"In bit",value:c,onChange:e=>{t(t=>({...t,lineCodeSymbols:e.target.value}))}})),r.a.createElement(ne.a,{item:!0},r.a.createElement(be,{label:"Lanes",helperText:"Anzahl",value:i,onChange:e=>{t(t=>({...t,lanes:e.target.value}))}})),r.a.createElement(ne.a,{item:!0},r.a.createElement(be,{label:"Bandbreite",helperText:"In MB/s",disabled:!0,value:o})))};var Ie=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,null),r.a.createElement(De,null));var Ae=()=>{const{search:e}=Object(H.h)(),t=new URLSearchParams(e).get("q");return r.a.createElement("div",null,'Ergebnisse f\xfcr "',t,'":')};var Ue=()=>r.a.createElement("div",null,"LMR (Longitudinal Magnetic Recording), PMR (Perpendicular Magnetic Recording) = CMR und SMR, CMR (Conventional Magnetic Recording), SMR (Shingled Magnetic Recording), DM-SMR (Device Managed Shingled Magnetic Recording), HM-SMR (Host Managed Shingled Magnetic Recording), TDMR (Two-Dimentional Magnetic Recording)");var He=()=>r.a.createElement(ae,null,r.a.createElement(H.d,null,r.a.createElement(H.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(H.b,{path:"/home",component:pe}),r.a.createElement(H.b,{path:"/search",component:Ae}),r.a.createElement(H.b,{path:"/usb",component:Be}),r.a.createElement(H.b,{path:"/memory",component:de}),r.a.createElement(H.b,{exact:!0,path:"/network/cable",component:Ce}),r.a.createElement(H.b,{exact:!0,path:"/network/wifi",component:xe}),r.a.createElement(H.b,{path:"/pcie",component:Ie}),r.a.createElement(H.b,{path:"/hdd",component:Ue})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const qe={h1:e=>r.a.createElement(u.a,Le({variant:"h1"},e)),h2:e=>r.a.createElement(u.a,Le({variant:"h2"},e)),h3:e=>r.a.createElement(u.a,Le({variant:"h3"},e)),h4:e=>r.a.createElement(u.a,Le({variant:"h4"},e)),h5:e=>r.a.createElement(u.a,Le({variant:"h5"},e)),h6:e=>r.a.createElement(u.a,Le({variant:"h6"},e)),table:e=>r.a.createElement(he.a,e),tr:e=>{const t=Array.isArray(e.children)?e.children[0]:e.children;return r.a.createElement(Oe.a,Le({hover:!!t&&"td"===t.props.mdxType},e))},td:({align:e,...t})=>r.a.createElement(ve.a,Le({align:e||void 0},t)),tbody:e=>r.a.createElement(je.a,e),th:({align:e,...t})=>r.a.createElement(ve.a,Le({align:e||void 0},t)),thead:e=>r.a.createElement(Ee.a,e),hr:v.a};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Me.a,{components:qe},r.a.createElement(f.a,{basename:"/irgendwas-mit-hardware"},r.a.createElement(He,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}},[[82,1,2]]]);
//# sourceMappingURL=main.36ebfb4c.chunk.js.map