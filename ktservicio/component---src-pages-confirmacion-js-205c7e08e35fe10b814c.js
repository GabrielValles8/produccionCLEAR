"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[222],{2926:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(7294),o=a(3639),c=a(994),r=a(7408),i=a(3134),l=a(1082),s=a(7655),u=a(9357),m=a(3635),d=a(9034),f=a(5936),g=(a(7580),a(2449)),E=a.n(g);function v(){var e=(0,n.useState)(!1),t=e[0],a=e[1],g=(0,n.useState)(!1),v=g[0],C=g[1],p=(0,n.useState)(0),N=p[0],Z=p[1],b=(0,n.useState)(!1),h=b[0],S=b[1],k=(0,n.useState)(!1),y=(k[0],k[1]),w=(0,n.useState)(""),j=w[0],I=w[1],O=(0,n.useState)({inpName:"",layoName:"phone",name:"",value:{}}),_=O[0],x=O[1],A=(0,n.useRef)();return n.createElement(s.Z,{backUrl:"/datos-actuales"},n.createElement(u.Z,{title:"Auto servicio"}),n.createElement(o.Z,{className:"container-sin-cita",onClick:function(){y(!0)}},n.createElement(c.Z,{className:"row-cita-arriba"},n.createElement("div",{className:"container-cita"},n.createElement(c.Z,null,n.createElement(r.Z,{className:"titulo-cita"},n.createElement("h1",{className:"titulo-h1"},"Confirmación de Cliente"))),n.createElement(c.Z,null,n.createElement(r.Z,{className:"titulo-cita"},n.createElement("p",{className:"texto-gris"},"Te acabamos de enviar tu código de verificación."))),n.createElement(c.Z,{className:"row-cita-abajo",style:{marginBottom:0}},n.createElement(r.Z,{lg:6},n.createElement("input",{autoComplete:"off",type:"text",id:!0===h?"inputContactoError":"inputContacto",className:"form-control",placeholder:"Ingresar el código de verificación",onClick:function(){return a(!0)},onFocus:function(){return x(Object.assign({},_,{inpName:"Codigo"}))},value:_.value.Codigo||""}))),n.createElement(c.Z,null,n.createElement(r.Z,{className:"titulo-cita"},n.createElement("p",{className:"texto-gris"},"¿Aún no lo tienes?, vuelve a recibir el código de verificación aquí: ",n.createElement("u",null,n.createElement("a",{onClick:function(){return e={envio:"envio codigo",contacto:JSON.parse(localStorage.getItem("informacion")).contactoCliente.email,medio:"correo"},void E().CodigosVerficiacion(e).then((function(e){})).catch((function(e){return console.log("Error, ",e)}));var e}},"reenviar"))))),n.createElement(i.Z,{ref:A,onClick:function(){return function(){if(void 0===_.value.Codigo||""===_.value.Codigo)Z(0),C(!0),S(!0);else{var e=JSON.parse(localStorage.getItem("informacion")),t={envio:"valida codigo",codigo:_.value.Codigo,correo:e.contactoCliente.email};E().CodigosVerficiacion(t).then((function(e){"Código Incorrecto"===e.result?(Z(14),C(!0),S(!0),I(n.createElement("center",null,n.createElement("div",null,"❌ Codigo incorrecto, hubo un error en tu código de confirmación.")))):(0,l.navigate)("/datos-facturacion")})).catch((function(e){return console.log("Error, ",e)}))}}()},style:{display:"none"}}),!0===t?n.createElement("center",{className:"pt-5"},n.createElement(m.Z,{options:_,setOptionsKeyboard:x,optionsKeyboard:_})):null)),n.createElement(c.Z,{className:"row-cita-abajo"},n.createElement(d.Z,{refForm:A,none:"tiene"}))),n.createElement(f.Z,{modal:v,setModal:C,error:N,setClick:y,mensajeModal:j}))}}}]);
//# sourceMappingURL=component---src-pages-confirmacion-js-205c7e08e35fe10b814c.js.map