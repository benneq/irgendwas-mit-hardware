(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"Enj/":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t("zLVn"),i=(t("q1tI"),t("7ljp")),s=t("4ZNZ"),a=t.n(s),l=t("YBNr"),u=t.n(l),b=t("jFwm"),g=t.n(b),c={title:"Lüfter Anschlüsse"},h={_frontmatter:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object.assign({},h,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h4",null,"2-Pin"),Object(i.b)("p",null,"Masse (0 V), Versorgungsspannung (+12 V)"),Object(i.b)("img",{src:a.a,height:"80"}),Object(i.b)("h5",null,"Drehzahlregelung"),Object(i.b)("p",null,"Je nach verwendetem Lüfter ist die Regelung der Drehzahl in einem bestimmten Bereich möglich. Nähere Infos dazu sind dem Datenblatt des jeweiligen Modells zu entnehmen. Erst wenn die Spannung für die Mindestdrehzahl (Anlaufspannung) ausreicht, beginnt sich der Lüfter zu drehen."),Object(i.b)("p",null,"Die Drehzahl kann über die anliegende Spannung verändert werden, welche der Differenz zwischen Masse und der Versorgungsspannung entspricht. Es ist also beispielsweise möglich -5 V und +5 V an Masse und Versorgungsspannung zu legen, um den Lüfter mit effektiv 10 V zu betreiben."),Object(i.b)("h4",null,"3-Pin (Tacho)"),Object(i.b)("p",null,"Masse (0 V), Versorgungsspannung (+12 V), Tachosignal"),Object(i.b)("img",{src:u.a,height:"80"}),Object(i.b)("p",null,"Der einzige Unterschied zu 2-Pin-Lüftern ist der Rückkanal über das Tachosignal zur Übertragung der aktuellen Drehzahl."),Object(i.b)("h4",null,"4-Pin (Tacho und PWM)"),Object(i.b)("p",null,"Masse (0 V), Versorgungsspannung (+12 V), Tachosignal, PWM-Signal (Duty Cycle)"),Object(i.b)("img",{src:g.a,height:"80"}),Object(i.b)("p",null,"Im Vergleich zu 2- und 3-Pin-Lüftern liegt bei PWM-Lüftern eine konstante Versorgungsspannung an. Die Drehzahl wird über das PWM-Signal geregelt."),Object(i.b)("h5",null,"Drehzahlregelung"),Object(i.b)("p",null,"Das PWM-Signal wird üblicherweise in Prozent angegeben und signalisiert dem Lüfter wie schnell er drehen soll. Da allerdings die eigentliche Steuerungselektronik im Lüfter selbst verbaut ist, ist es vom Hersteller abhängig wie dieses Signal genau interpretiert wird.\nGrundsätzlich werden 3 Arten der PWM-Regelung unterschieden:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Type A:")," Der Lüfter dreht immer mindestens mit einer bestimmten Drehzahl.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Type B:")," Der Lüfter stoppt bei einem PWM-Signal von exakt 0%. Oberhalb dieses Werts verhält er sich wie Type A.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Type C:")," Die Drehzahl skaliert linear mit dem PWM-Signal, vergleichbar mit der Änderung der Versorgungsspannung bei 2- und 3-Pin-Lüftern. Das hat zur Folge, dass der Lüfter erst zu drehen anfängt, wenn das PWM-Signal der Mindestdrehzahl entspricht."))),Object(i.b)("p",null,"Je nach verwendeter Lüftersteuerung bzw. Mainboard kann es zusätzlich noch die Möglichkeit geben, die Versorgungsspannung abzuschalten, um so einen Type-A-Lüfter zum Stillstand zu bringen."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-fan-connectors-mdx-91ad4c85d8c7df089e5c.js.map