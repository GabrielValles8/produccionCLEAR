"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[10],{1524:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var o=a(7294),c=a(3639),n=a(994),l=a(7408),r=a(3134),i=a(1082),m=a(7655),s=a(9357),u=(a(3635),a(9034)),f=a(5936),d=(a(7580),a(2449)),E=a.n(d);function p(){var e=(0,o.useState)(!1),t=(e[0],e[1],(0,o.useState)(!1)),a=t[0],d=t[1],p=(0,o.useState)(0),g=p[0],N=(p[1],(0,o.useState)(!1)),Z=(N[0],N[1]),b=(0,o.useState)({nombre:"",correo:"",telefono:""}),C=b[0],v=b[1],h=(0,o.useRef)();return(0,o.useEffect)((function(){if("undefined"!=typeof window){var e=JSON.parse(localStorage.getItem("informacion")),t=e.contactoCliente.email,a=e.datosCliente.fullName,o=e.contactoCliente.mobile,c=t.replace(/(\w{4}).*?@/,"$1****@"),n=a.replace(/,/g," ").split(/[" "]+/).map((function(e){return e.slice(0,3)+"******"})).join(" "),l=o.replace(/^(\d{6})|\d?\d?(\d{4}$)|(\d)/,"****");v(Object.assign({},C,{correo:c,nombre:n,telefono:l}))}}),[]),o.createElement(m.Z,{backUrl:"/kilometraje"},o.createElement(s.Z,{title:"Auto servicio"}),o.createElement(c.Z,{className:"container-sin-cita",onClick:function(){Z(!0)}},o.createElement(n.Z,{className:"row-cita-arriba"},o.createElement("div",{className:"container-cita"},o.createElement(n.Z,null,o.createElement(l.Z,{className:"titulo-cita"},o.createElement("h1",{className:"titulo-h1"},"Datos actuales"))),o.createElement(n.Z,null,o.createElement(l.Z,{className:"titulo-cita"},o.createElement("p",{className:"texto-gris"},"Te enviaremos un código de verificación."))),o.createElement(n.Z,{className:"row-cita-abajo",style:{marginBottom:0}},o.createElement(l.Z,{lg:9},o.createElement("p",{className:"texto-negro"},"Nombre: "),o.createElement("input",{disabled:!0,autoComplete:"off",type:"text",id:"inputContacto",className:"form-control",placeholder:C.nombre})),o.createElement(l.Z,{lg:9},o.createElement("p",{className:"texto-negro"},"Correo: "),o.createElement("input",{disabled:!0,autoComplete:"off",type:"text",id:"inputContacto",className:"form-control",placeholder:C.correo})),o.createElement(l.Z,{lg:9},o.createElement("p",{className:"texto-negro"},"Telefono: "),o.createElement("input",{disabled:!0,autoComplete:"off",type:"text",id:"inputContacto",className:"form-control",placeholder:C.telefono}))),o.createElement(n.Z,{style:{height:"10%"},className:"titulo-cita"},o.createElement(l.Z,{lg:9,className:"minititulo-cita"},o.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"Enviar mi código de verificación a: "))),o.createElement(n.Z,null,o.createElement(l.Z,{className:"titulo-cita"},o.createElement(r.Z,{onClick:function(){return e={envio:"envio codigo",contacto:JSON.parse(localStorage.getItem("informacion")).contactoCliente.email,medio:"correo"},E().CodigosVerficiacion(e).then((function(e){})).catch((function(e){return console.log("Error, ",e)})),void(0,i.navigate)("/confirmacion");var e},className:"btn-celeste"},"Correo electrónico"))))),o.createElement(n.Z,{className:"row-cita-abajo"},o.createElement(u.Z,{refForm:h,none:"none"}))),o.createElement(f.Z,{modal:a,setModal:d,error:g,setClick:Z}))}}}]);
//# sourceMappingURL=component---src-pages-datos-actuales-js-d8c1bd84f3cf2a0cd707.js.map