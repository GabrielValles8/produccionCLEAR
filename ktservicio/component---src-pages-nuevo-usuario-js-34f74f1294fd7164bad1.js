(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[809],{5058:function(e,o,t){var a=t(4687),n=t(7156),r=t(9728),l=function(){"use strict";function e(){}var o=e.prototype;return o.ValidadorWhatsApp=function(){var e=n(a.mark((function e(o){var t,n,r;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,n=!1,void 0===o||""===o?(t=0,n=!0):10===o.length?(t=5,n=!1):(t=2,n=!0),r={data:t,boolean:n},e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}(),o.ValidadorCorreo=function(){var e=n(a.mark((function e(o){var t,n,r;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,n=!1,void 0===o||""===o?(t=0,n=!0):!0===/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(o)?(t=5,n=!1):(t=1,n=!0),r={data:t,boolean:n},e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}(),o.ValidadorVIN=function(){var e=n(a.mark((function e(o){var t,n,r;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,n=!1,console.log("Entra validador"),void 0===o||""===o?(t=0,n=!0):8===o.length?(t=5,n=!1):(t=3,n=!0),r={data:t,boolean:n},e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}(),o.ValidadorRFC=function(){var e=n(a.mark((function e(o,t){var n,r,l,i;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,r=!1,l=!1,"Selecciona"===t?(n=8,l=!0):"Física"===t?(l=!1,""===o||void 0===o?(console.log("llega aquí vacio"),n=0,r=!0):(console.log("llega aquí tiene valores"),13===o.length?(n=5,r=!1):(n=9,r=!0))):"Moral"===t&&(l=!1,""===o||void 0===o?(n=0,r=!0):12===o.length?(n=5,r=!1):(n=9,r=!0)),i={data:n,booleanRFC:r,booleanRegimen:l},e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(o,t){return e.apply(this,arguments)}}(),o.ValidadorGenero=function(){var e=n(a.mark((function e(o){var t,n,r;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,n=!1,"Selecciona"===o?(t=8,n=!0):(t=5,n=!1),r={data:t,boolean:n},e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}(),o.ValidadorNombre=function(){var e=n(a.mark((function e(o){var t,n,r;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,n=!1,""===o||void 0===o?(t=0,n=!0):(t=5,n=!1),r={data:t,boolean:n},e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}(),o.ValidadorCamposFacturacion=function(){var e=n(a.mark((function e(o){var t;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,t=""===o.Calle||""===o.Celular||""===o.Colonia||""===o.Correo||""===o.Nombre||""===o.RFC||""===o.Telefono||""===o.CodigoP?0:5,e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}(),o.ValidadorCamposNuevoUsuario=function(){var e=n(a.mark((function e(o){var t,n,r,l,i,u,c,s,m,f,v;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=5,e.next=3,this.ValidadorNombre(o.Nombre);case 3:return n=e.sent,e.next=6,this.ValidadorCorreo(o.Correo);case 6:return r=e.sent,e.next=9,this.ValidadorWhatsApp(o.Celular);case 9:return l=e.sent,e.next=12,this.ValidadorRFC(o.RFC,o.Regimen);case 12:return i=e.sent,e.next=15,this.ValidadorGenero(o.Genero);case 15:return u=e.sent,e.next=18,this.ValidadorNombre(o.Calle);case 18:return c=e.sent,e.next=21,this.ValidadorNombre(o.Numero);case 21:return s=e.sent,e.next=24,this.ValidadorNombre(o.Colonia);case 24:return m=e.sent,e.next=27,this.ValidadorNombre(o.CPostal);case 27:return f=e.sent,0===n.data||0===r.data||0===l.data||0===i.data||0===c.data||0===s.data||0===m.data||0===f.data?t=0:1===r.data?t=r.data:2===l.data?t=l.data:8===i.data||9===i.data?t=i.data:8===u.data&&(t=u.data),v={error:t,nombre:n,correo:r,celular:l,rfc:i,genero:u,calle:c,numero:s,colonia:m,cpostal:f},e.abrupt("return",v);case 31:case"end":return e.stop()}}),e,this)})));return function(o){return e.apply(this,arguments)}}(),o.ValidadorCamposDatosAutos=function(){var e=n(a.mark((function e(o){var t,n,r,l,i,u,c;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.next=3,this.ValidadorNombre(o.Color);case 3:return n=e.sent,e.next=6,this.ValidadorNombre(o.Anio);case 6:return r=e.sent,e.next=9,this.ValidadorNombre(o.VINDatos);case 9:return l=e.sent,e.next=12,this.ValidadorNombre(o.Placas);case 12:return i=e.sent,e.next=15,this.ValidadorNombre(o.Kilometraje);case 15:return u=e.sent,t=0===n.data||0===r.data||0===l.data||0===i.data||0===u.data?0:5,c={error:t,color:n,anio:r,vin:l,placas:i,kilometraje:u},e.abrupt("return",c);case 19:case"end":return e.stop()}}),e,this)})));return function(o){return e.apply(this,arguments)}}(),r(e,null,[{key:"instance",get:function(){return null===e._val&&(e._val=new e),e._val}}]),e}();l._val=null,e.exports=l.instance},6209:function(e,o,t){"use strict";function a(e,o,t,a,n,r,l){try{var i=e[r](l),u=i.value}catch(c){return void t(c)}i.done?o(u):Promise.resolve(u).then(a,n)}function n(e){return function(){var o=this,t=arguments;return new Promise((function(n,r){var l=e.apply(o,t);function i(e){a(l,n,r,i,u,"next",e)}function u(e){a(l,n,r,i,u,"throw",e)}i(void 0)}))}}t.r(o),t.d(o,{default:function(){return F}});var r=t(4687),l=t.n(r),i=t(7294),u=t(3639),c=t(994),s=t(7408),m=t(2082),f=t(3134),v=t(1082),d=t(7655),p=t(5058),N=t.n(p),C=t(9357),g=t(3635),b=t(9034),E=t(5936),h=(t(7580),t(2449)),y=t.n(h);function F(){var e=(0,i.useState)(!1),o=e[0],t=e[1],a=(0,i.useState)(!1),r=a[0],p=a[1],h=(0,i.useState)(0),F=h[0],Z=h[1],S=(0,i.useState)(!1),w=S[0],x=(S[1],(0,i.useState)({Nombreform:!1,Correoform:!1,Celularform:!1,Regimenform:!1,RFCform:!1,Fnacimientoform:!1,Generoform:!1,Calleform:!1,Numeroform:!1,Coloniaform:!1,CPostalform:!1})),j=x[0],O=x[1],k=(0,i.useState)(!1),R=(k[0],k[1]),V=(0,i.useState)({inpName:"",layoName:"default",name:"",value:{NombreNuevo:void 0,CorreoNuevo:void 0,RFCNuevo:void 0,CelularNuevo:void 0,TelefonoNuevo:void 0,fNacimiento:void 0,ColoniaNuevo:void 0,NumeroNuevo:void 0,CalleNuevo:void 0,CodigoPNuevo:void 0}}),P=V[0],I=V[1],T=(0,i.useState)({regimen:void 0,genero:void 0,fNacimiento:void 0}),D=T[0],M=T[1],A=(0,i.useState)({estado:"",municipio:""}),z=A[0],G=A[1],_=(0,i.useState)({estados:{},ciudades:{}}),B=_[0],L=_[1],K=(0,i.useRef)();function U(e){var o;console.log("Recibo: ",e);var t=((null===(o=e.ParamEstado)||void 0===o?void 0:o.normalize("NFD").replace(/[^a-zA-Z0-9 ]/g,""))||"nuevo leon").toLowerCase(),a=e.ParamMuni.normalize("NFD").replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase();y().getMunicipios(t).then((function(e){console.log("Tengo los estados: ",e);var o=e.estados.map((function(e){var o=e.toLowerCase();if((null==o?void 0:o.normalize("NFD").replace(/[^a-zA-Z0-9 ]/g,""))===t)return e})).filter((function(e){return void 0!==e})),n=e.ciudades.map((function(e){var o=e.toLowerCase();if((null==o?void 0:o.normalize("NFD").replace(/[^a-zA-Z0-9 ]/g,""))===a)return e})).filter((function(e){return void 0!==e}));G(Object.assign({},z,{estado:o[0],municipio:n[0]})),L(Object.assign({},B,{estados:e.estados,ciudades:e.ciudades}))}))}function W(){return(W=n(l().mark((function e(){var o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o={Nombre:P.value.NombreNuevo,Correo:P.value.CorreoNuevo,Regimen:D.regimen,RFC:P.value.RFCNuevo,Celular:P.value.CelularNuevo,Telefono:P.value.TelefonoNuevo,Nacimiento:D.fNacimiento,Genero:D.genero,Colonia:P.value.ColoniaNuevo,Numero:P.value.NumeroNuevo,Calle:P.value.CalleNuevo,CPostal:P.value.CodigoPNuevo},N().ValidadorCamposNuevoUsuario(o).then((function(e){if(O(Object.assign({},j,{Nombreform:e.nombre.boolean,Correoform:e.correo.boolean,Celularform:e.celular.boolean,Regimenform:e.rfc.booleanRegimen,RFCform:e.rfc.booleanRFC,Generoform:e.genero.boolean,Calleform:e.calle.boolean,Numeroform:e.numero.boolean,Coloniaform:e.colonia.boolean,CPostalform:e.cpostal.boolean})),0===e.error||1===e.error||2===e.error||8===e.error||9===e.error)Z(e.error),p(!0);else if(5===e.error){var o=P.value.TelefonoNuevo||"",t={data:{},id:0,codigo:0,datosCliente:{Nombre:P.value.NombreNuevo,RFC:P.value.RFCNuevo,DiaNacimiento:D.fNacimiento},direccionCliente:{Calle:P.value.CalleNuevo,Numero:P.value.NumeroNuevo,Colonia:P.value.ColoniaNuevo,CodigoPostal:P.value.CodigoPNuevo,Estado:z.estado,Municipio:z.municipio,Pais:"MEXICO"},clienteContacto:{Celular:P.value.CelularNuevo,Telefono:o,Correo:P.value.CorreoNuevo,Preferencia:"WhatsApp"}};(0,v.navigate)("/registrar-vehiculo"),localStorage.setItem("RutaNavegacion","nuevo-usuario"),localStorage.setItem("informacion",JSON.stringify(t))}}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,i.useEffect)((function(){if("undefined"!=typeof window){console.log("we are running on the client"),I(Object.assign({},P,{value:{NombreNuevo:localStorage.getItem("NombreNuevo")||"",CorreoNuevo:localStorage.getItem("CorreoNuevo")||"",RFCNuevo:localStorage.getItem("RFCNuevo")||"",CelularNuevo:localStorage.getItem("CelularNuevo")||"",TelefonoNuevo:localStorage.getItem("TelefonoNuevo")||"",fNacimiento:localStorage.getItem("fNacimiento")||"",ColoniaNuevo:localStorage.getItem("ColoniaNuevo")||"",NumeroNuevo:localStorage.getItem("NumeroNuevo")||"",CalleNuevo:localStorage.getItem("CalleNuevo")||"",CodigoPNuevo:localStorage.getItem("CodigoPNuevo")||""}})),M(Object.assign({},D,{regimen:localStorage.getItem("regimen")||"",genero:localStorage.getItem("genero")||"",fNacimiento:localStorage.getItem("fNacimiento")||""}));U({ParamEstado:"Nuevo León",ParamMuni:""})}else console.log("we are running on the server")}),[]),i.createElement(d.Z,{backUrl:"/"},i.createElement(C.Z,{title:"Auto servicio"}),i.createElement(u.Z,{className:"container-sin-cita",onClick:function(){R(!0)}},i.createElement(c.Z,{className:"row-cita-arriba"},i.createElement("form",{className:"container-cita",style:{overflowY:"scroll",height:"100%"}},i.createElement(c.Z,null,i.createElement(s.Z,{className:"titulo-cita"},i.createElement("h1",{className:"titulo-h1",style:{marginTop:"0.8rem"}},"Datos del usuario"))),i.createElement(c.Z,{className:"titulo-cita"},i.createElement("h3",{className:"titulo-h1",style:{marginTop:"0.6rem",marginBottom:"0.6rem"}},"Cliente"),i.createElement(u.Z,null,i.createElement(c.Z,null,i.createElement(s.Z,{lg:4},"Nombre completo:",i.createElement("input",{autoComplete:"off",type:"text",id:!0===j.Nombreform?"inputContactoError":"inputContacto",className:"form-control",onClick:function(){t(!0),I(Object.assign({},P,{layoName:"default"}))},onFocus:function(){return I(Object.assign({},P,{inpName:"NombreNuevo"}))},value:P.value.NombreNuevo||""})),i.createElement(s.Z,{lg:4},"Correo electrónico:",i.createElement("input",{autoComplete:"off",type:"text",id:!0===j.Correoform?"inputContactoError":"inputContacto",className:"form-control",onClick:function(){t(!0),I(Object.assign({},P,{layoName:"default"}))},onFocus:function(){return I(Object.assign({},P,{inpName:"CorreoNuevo"}))},value:P.value.CorreoNuevo||""})),i.createElement(s.Z,{lg:2},i.createElement("div",{style:{paddingBottom:10}},"Tipo de regimen: "),i.createElement(m.Z.Select,{"aria-label":"Default select example",id:!0===j.Regimenform?"inputContactoError":"inputContacto",className:"form-control",onChange:function(e){console.log("Estamos en el select de regimen",e.target.value),M(Object.assign({},D,{regimen:e.target.value}))},value:D.regimen},i.createElement("option",{value:"Selecciona"},"Selecciona"),i.createElement("option",{value:"Física"},"Física"),i.createElement("option",{value:"Moral"},"Moral"))),i.createElement(s.Z,{lg:2},"RFC:",i.createElement("input",{autoComplete:"off",type:"text",id:!0===j.RFCform?"inputContactoError":"inputContacto",className:"form-control",onClick:function(){t(!0),I(Object.assign({},P,{layoName:"vin"}))},onFocus:function(){return I(Object.assign({},P,{inpName:"RFCNuevo"}))},value:P.value.RFCNuevo||""}))),i.createElement(c.Z,null,i.createElement(s.Z,{lg:3},"Celular:",i.createElement("input",{autoComplete:"off",type:"text",id:!0===j.Celularform?"inputContactoError":"inputContacto",className:"form-control",onClick:function(){t(!0),I(Object.assign({},P,{layoName:"phone"}))},onFocus:function(){return I(Object.assign({},P,{inpName:"CelularNuevo"}))},value:P.value.CelularNuevo||""})),i.createElement(s.Z,{lg:3},"Teléfono:",i.createElement("input",{autoComplete:"off",type:"text",id:!0===w?"inputContactoError":"inputContacto",className:"form-control",onClick:function(){t(!0),I(Object.assign({},P,{layoName:"phone"}))},onFocus:function(){return I(Object.assign({},P,{inpName:"TelefonoNuevo"}))},value:P.value.TelefonoNuevo||""})),i.createElement(s.Z,{lg:3},"Fecha de nacimiento:",i.createElement("input",{autoComplete:"off",type:"date",id:"inputContacto",className:"form-control",onChange:function(e){M(Object.assign({},D,{fNacimiento:e.target.value}))},value:D.fNacimiento})),i.createElement(s.Z,{lg:3},i.createElement("div",{style:{paddingBottom:10}},"Genero: "),i.createElement(m.Z.Select,{"aria-label":"Default select example",id:!0===j.Generoform?"inputContactoError":"inputContacto",className:"form-control",onChange:function(e){console.log("Selecciono la fecha: ",e.target.value),M(Object.assign({},D,{genero:e.target.value}))},value:D.genero},i.createElement("option",null,"Selecciona"),i.createElement("option",{value:"Hombre"},"Hombre"),i.createElement("option",{value:"Mujer"},"Mujer")))))),i.createElement(c.Z,{className:"titulo-cita"},i.createElement("h3",{className:"titulo-h1",style:{marginTop:"0.6rem",marginBottom:"0.6rem"}},"Domicilio"),i.createElement(u.Z,null,i.createElement(c.Z,null,i.createElement(s.Z,{lg:4},"Calle:",i.createElement("input",{autoComplete:"off",type:"text",id:!0===j.Calleform?"inputContactoError":"inputContacto",className:"form-control",onClick:function(){t(!0),I(Object.assign({},P,{layoName:"default"}))},onFocus:function(){return I(Object.assign({},P,{inpName:"CalleNuevo"}))},value:P.value.CalleNuevo||""})),i.createElement(s.Z,{lg:4},"Número:",i.createElement("input",{autoComplete:"off",type:"text",id:!0===j.Numeroform?"inputContactoError":"inputContacto",className:"form-control",onClick:function(){t(!0),I(Object.assign({},P,{layoName:"phone"}))},onFocus:function(){return I(Object.assign({},P,{inpName:"NumeroNuevo"}))},value:P.value.NumeroNuevo||""})),i.createElement(s.Z,{lg:4},"Colonia:",i.createElement("input",{autoComplete:"off",type:"text",id:!0===j.Coloniaform?"inputContactoError":"inputContacto",className:"form-control",onClick:function(){t(!0),I(Object.assign({},P,{layoName:"default"}))},onFocus:function(){return I(Object.assign({},P,{inpName:"ColoniaNuevo"}))},value:P.value.ColoniaNuevo||""}))),i.createElement(c.Z,null,i.createElement(s.Z,{lg:4},i.createElement("div",{style:{paddingBottom:10}},"Estado: "),i.createElement(m.Z.Select,{"aria-label":"Default select example",id:"inputContacto",className:"form-control",onChange:function(e){U({ParamEstado:e.target.value,ParamMuni:""})},value:z.estado},i.createElement("option",{value:"Selecciona"},"Seleccionar"),B&&B.estados&&B.estados.length>0?B.estados.map((function(e,o){return i.createElement(i.Fragment,null,i.createElement("option",{value:e},e))})):null)),i.createElement(s.Z,{lg:4},i.createElement("div",{style:{paddingBottom:10}},"Municipio: "),i.createElement(m.Z.Select,{"aria-label":"Default select example",id:"inputContacto",className:"form-control",onChange:function(e){G(Object.assign({},z,{municipio:e.target.value}))},value:z.municipio},i.createElement("option",{value:"Selecciona"},"Seleccionar"),B&&B.ciudades&&B.ciudades.length>0?B.ciudades.map((function(e,o){return i.createElement(i.Fragment,null,i.createElement("option",{value:e},e))})):null)),i.createElement(s.Z,{lg:4},"Código postal:",i.createElement("input",{autoComplete:"off",type:"text",id:!0===j.CPostalform?"inputContactoError":"inputContacto",className:"form-control",onClick:function(){t(!0),I(Object.assign({},P,{layoName:"phone"}))},onFocus:function(){return I(Object.assign({},P,{inpName:"CodigoPNuevo"}))},value:P.value.CodigoPNuevo||""}))))),!0===o?i.createElement("center",{className:"pt-3"},i.createElement(g.Z,{options:P,setOptionsKeyboard:I,optionsKeyboard:P})):null)),i.createElement(f.Z,{ref:K,onClick:function(){return function(){return W.apply(this,arguments)}()},style:{display:"none"}}),i.createElement(c.Z,{className:"row-cita-abajo"},i.createElement(b.Z,{refForm:K,none:"tiene"}))),i.createElement(E.Z,{modal:r,error:F,setModal:p,setClick:R}))}}}]);
//# sourceMappingURL=component---src-pages-nuevo-usuario-js-34f74f1294fd7164bad1.js.map