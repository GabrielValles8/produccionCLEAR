"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[111],{3134:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(4942),r=a(885),l=a(5987),c=a(5900),o=a.n(c),i=a(7294),s=a(5893),u=["as","disabled"];function m(e){var t=e.tagName,a=e.disabled,n=e.href,r=e.target,l=e.rel,c=e.role,o=e.onClick,i=e.tabIndex,s=void 0===i?0:i,u=e.type;t||(t=null!=n||null!=r||null!=l?"a":"button");var m={tagName:t};if("button"===t)return[{type:u||"button",disabled:a},m];var d=function(e){(a||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),a?e.stopPropagation():null==o||o(e)};return"a"===t&&(n||(n="#"),a&&(n=void 0)),[{role:null!=c?c:"button",disabled:void 0,tabIndex:a?void 0:s,href:n,target:"a"===t?r:void 0,"aria-disabled":a||void 0,rel:"a"===t?l:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},m]}var d=i.forwardRef((function(e,t){var a=e.as,n=e.disabled,l=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,u),c=m(Object.assign({tagName:a,disabled:n},l)),o=(0,r.Z)(c,2),i=o[0],d=o[1].tagName;return(0,s.jsx)(d,Object.assign({},l,i,{ref:t}))}));d.displayName="Button";var g=a(9541),E=["as","bsPrefix","variant","size","active","className"];function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p=i.forwardRef((function(e,t){var a=e.as,n=e.bsPrefix,c=e.variant,i=e.size,u=e.active,d=e.className,v=(0,l.Z)(e,E),p=(0,g.vE)(n,"btn"),b=m(f({tagName:a},v)),y=(0,r.Z)(b,2),N=y[0],h=y[1].tagName;return(0,s.jsx)(h,f(f(f({},N),v),{},{ref:t,className:o()(d,p,u&&"active",c&&"".concat(p,"-").concat(c),i&&"".concat(p,"-").concat(i),v.href&&v.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};var b=p},3639:function(e,t,a){var n=a(4942),r=a(5987),l=a(5900),c=a.n(l),o=a(7294),i=a(9541),s=a(5893),u=["bsPrefix","fluid","as","className"];function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,l=e.as,o=void 0===l?"div":l,m=e.className,g=(0,r.Z)(e,u),E=(0,i.vE)(a,"container"),v="string"==typeof n?"-".concat(n):"-fluid";return(0,s.jsx)(o,d(d({ref:t},g),{},{className:c()(m,n?"".concat(E).concat(v):E)}))}));g.displayName="Container",g.defaultProps={fluid:!1},t.Z=g},5936:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(8840),l=a(994),c=a(3639),o=a(7408),i=a(3134),s=a(1082),u=a.p+"static/encontrar-el-vin-b5e6b18a09e9e0287a03706b8c19951e.jpg";function m(e){var t=e.modal,a=e.error,m=e.setModal,d=e.registro,g=e.setClick,E=e.mensajeModal,v=e.pagoRepetir,f=e.repetir,p=e.pagoFinalizado,b="undefined"!=typeof window&&window,y=function(){if(m(!1),g(!0),!0!==f&&!0!==f||v("Inicia"),!0===p){(0,s.navigate)("/");var e=b.localStorage.getItem("token");b.localStorage.clear(),b.localStorage.setItem("token",e)}};return n.createElement(r.Z,{show:t,onHide:y,centered:!0,id:"modal-content"},n.createElement(r.Z.Header,{style:{display:"flex",justifyContent:"start"}},n.createElement(r.Z.Title,null,"Grupo Rivero informa:")),n.createElement(r.Z.Body,null,0===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"Campos vacíos, favor de verificar."))):null,1===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"El correo electrónico ingresado es incorrecto o no existe, asegurate que esté escrito correctamente."))):null,2===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"El TELEFONO ingresado es incorrecto o no existe, asegurate que esté escrito correctamente."))):null,3===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"El VIN ingresado es incorrecto o no existe, asegurate que esté escrito correctamente."))):null,4===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"Problema con el servidor, favor de intenar más tarde."))):null,5===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"No se encontraron citas."),n.createElement("div",null,"Favor de contactarse con un asesor."))):null,6===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"Error, no se pudo crear tu orden de servicio, contacta a un agente."))):null,7===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"Error al procesar envio."))):null,8===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"Favor de seleccionar una opción."))):null,9===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"El RFC ingresado es incorrecto o no existe, asegurate que esté escrito correctamente."))):null,10===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"El tiempo de sesión va a expirar pronto, ¿quieres continuar con la sesión?."))):null,11===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"El número de orden de servicio es incorrecto o aún no está terminada."))):null,12===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,n.createElement("img",{src:u})))):null,13===a?n.createElement(l.Z,{className:"pb-1"},n.createElement("center",null,n.createElement("div",null,"Favor de seleccionar un paquete."))):null,14===a?n.createElement(l.Z,{className:"pb-1"},E):null),n.createElement(r.Z.Footer,null,n.createElement(c.Z,null,n.createElement(l.Z,null,!0===d?n.createElement(o.Z,{lg:8,style:{display:"flex",justifyContent:"end"}},n.createElement("div",null,"¿Aún no eres cliente Rivero? ",n.createElement(s.Link,{to:"/nuevo-usuario"},"Registrarse"))):n.createElement(o.Z,{lg:8}),n.createElement(o.Z,{lg:4,style:{display:"flex",justifyContent:"center"}},n.createElement(i.Z,{variant:"secondary",onClick:y},"Aceptar"))))))}},9034:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(994),l=a(7408),c=a(3134),o=a.p+"static/video_interior-9bbf670160eb076e7923e5031313f860.mp4";function i(e){var t=e.refForm,a=e.none,i=(0,n.useState)("flex"),s=(i[0],i[1]),u=(0,n.useState)(8),m=u[0],d=u[1];return(0,n.useEffect)((function(){"none"===a?(s("none"),d(12)):(d(8),s("flex"))}),[m]),n.createElement(n.Fragment,null,n.createElement(r.Z,{style:{height:"14vh",paddingTop:5}},n.createElement(l.Z,{lg:m,className:"colVideoSeccion"},n.createElement("center",null,n.createElement("video",{id:"video_interior",autoPlay:!0,muted:!0,loop:!0},n.createElement("source",{src:o,type:"video/mp4"})))),n.createElement(l.Z,{lg:4,className:"none"===a?"colVideoSeccionOcultado":"colVideoSeccion"},n.createElement(c.Z,{onClick:function(){return t.current.click()},style:{width:"85%",height:"55%",borderRadius:25}},n.createElement(r.Z,null,n.createElement(l.Z,{lg:7,style:{display:"flex",justifyContent:"end",alignItems:"center",fontSize:"2vh"}},"Avanzar"),n.createElement(l.Z,{lg:5,style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.createElement("img",{className:"btn-imagenSiguiente",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDcuMjQgMzgzLjU2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZmZmZjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxnIGlkPSJDYXBhXzEtMiIgZGF0YS1uYW1lPSJDYXBhIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI2Ljg4LDIyMy4xN2EzMi4wNywzMi4wNywwLDAsMCw1LjU0LjQxSDM0Ny45NGwtNi44OCwzLjJBNjMuODcsNjMuODcsMCwwLDAsMzIzLDIzOS41OEwyMzQuNSwzMjguMDZhMzMuMTEsMzMuMTEsMCwwLDAtNC42NCw0Mi40LDMyLDMyLDAsMCwwLDQ4LDQuMTZsMTYwLTE2MGEzMiwzMiwwLDAsMCwwLTQ1LjI1bDAsMC0xNjAtMTYwYTMyLDMyLDAsMCwwLTQ1LjI2LjA2LDMyLjU5LDMyLjU5LDAsMCwwLTIuNzQsMy4xNCwzMy4xMSwzMy4xMSwwLDAsMCw0LjY0LDQyLjRsODguMzIsODguNjRhNjMuODgsNjMuODgsMCwwLDAsMTYsMTEuNjhsOS42LDQuMzJIMzQuMThBMzMuMTEsMzMuMTEsMCwwLDAsLjQyLDE4Ni40NiwzMiwzMiwwLDAsMCwyNi44OCwyMjMuMTdaIi8+PC9nPjwvZz48L3N2Zz4="})))))))}},766:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),r=a(3639),l=a(994),c=a(7408),o=a(1082),i=a(8904),s=a(7655),u=a(9357),m=a(9034),d=a(2449),g=a.n(d),E=(a(5414),a(5936)),v=(a.p,a.p+"static/tarjeta-credito-bb42458470d3c93b388dc11cc806cb63.png");function f(e){var t=(0,n.useRef)(),a=(0,n.useState)(!1),d=a[0],f=a[1],p=(0,n.useState)(0),b=p[0],y=p[1],N=(0,n.useState)(!1),h=(N[0],N[1]),w=(0,n.useState)(!1),M=w[0],j=w[1],Z=(0,n.useState)(!1),C=Z[0],S=Z[1],x=(0,n.useState)(""),O=x[0],I=x[1],D=(0,n.useState)(!1),L=D[0],P=D[1],z=(0,n.useState)({tipoTranc:"",tipoCita:""}),T=(z[0],z[1],(0,n.useState)(!1)),k=T[0],R=T[1],A="undefined"!=typeof window&&window;function B(){"sin-cita"===localStorage.getItem("RutaNavegacion")?g().postCrearCita().then((function(e){R(!0),g().getNetPay().then((function(t){"Mensaje enviado exitosamente"===t.message?(I(n.createElement("center",null,n.createElement("div",null,"🟡 Espere mientras validamos su pago... "),n.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"* Esto puede tardar un momento. "))),f(!0),y(14),setTimeout((function(){g().getValidadorNetPay(e.result.data.htracabe[0].id).then((function(t){if(""===t);else if("Promocion no valida para el tipo de tarjeta"===t)I(n.createElement("center",null,n.createElement("div",null,"❌ ",t,", favor de intentarlo de nuevo. "))),P(!0);else if("Transacción valida"===t||"Transacción exitosa"===t){j(!0),I(n.createElement("center",null,n.createElement("div",null,"✅ Su transacción ha sido exitosa."),n.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"* No olvide entregar sus llaves. "),n.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"* Realice su inventario del vehiculo. "))),g().enviaCorreoOrden(e.result.data.htracabe[0].w32process.emitir.codigoht).then((function(e){console.log(e)})),S(!1),(0,o.navigate)("/");var a=A.localStorage.getItem("token");A.localStorage.clear(),A.localStorage.setItem("token",a)}else"Cancelado por el usuario"===t?(I(n.createElement("center",null,n.createElement("div",null,"❌ Su transacción ha sido cancelada, favor de intentarlo de nuevo. "))),P(!0)):"Transacción rechazada"===t&&(I(n.createElement("center",null,n.createElement("div",null,"❌ ",t,", favor de intentarlo de nuevo. "))),P(!0))}))}),6e4)):(I(n.createElement("center",null,n.createElement("div",null,"❌ Error, hubo un problema con la terminal, favor de intentarlo de nuevo. "))),P(!0))})).catch((function(e){I(n.createElement("center",null,n.createElement("div",null,"❌ Error, hubo un problema con la terminal, favor de intentarlo de nuevo. "),n.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"* Contacte a un agente. "))),P(!0)}))})).catch((function(e){I(n.createElement("center",null,n.createElement("div",null,"❌ Error, no se pudo crear tu orden de servicio, contacta a un agente. ")))})):"orden-reparacion"===localStorage.getItem("RutaNavegacion")?g().postConCita().then((function(e){R(!0),g().getNetPay().then((function(t){"Mensaje enviado exitosamente"===t.message?(I(n.createElement("center",null,n.createElement("div",null,"🟡 Espere mientras validamos su pago... "),n.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"* Esto puede tardar un momento. "))),f(!0),y(14),setTimeout((function(){g().getValidadorNetPay(t.data.id).then((function(t){if(""===t);else if("Promocion no valida para el tipo de tarjeta"===t)I(n.createElement("center",null,n.createElement("div",null,"❌ ",t,", favor de intentarlo de nuevo. "))),P(!0);else if("Transacción valida"===t||"Transacción exitosa"===t){j(!0),I(n.createElement("center",null,n.createElement("div",null,"✅ Su transacción ha sido exitosa."),n.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"* No olvide entregar sus llaves. "),n.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"* Realice su inventario del vehiculo. "))),g().enviaCorreoOrden(e.result.data.htracabe[0].w32process.emitir.codigoht).then((function(e){console.log(e)})),S(!1),(0,o.navigate)("/");var a=A.localStorage.getItem("token");A.localStorage.clear(),A.localStorage.setItem("token",a)}else"Cancelado por el usuario"===t?(I(n.createElement("center",null,n.createElement("div",null,"❌ Su transacción ha sido cancelada, favor de intentarlo de nuevo. "))),P(!0)):"Transacción rechazada"===t&&(I(n.createElement("center",null,n.createElement("div",null,"❌ ",t,", favor de intentarlo de nuevo. "))),P(!0))}))}),6e4)):(I(n.createElement("center",null,n.createElement("div",null,"❌ Error, hubo un problema con la terminal, favor de intentarlo de nuevo. "))),P(!0))})).catch((function(e){I(n.createElement("center",null,n.createElement("div",null,"❌ Error, hubo un problema con la terminal, favor de intentarlo de nuevo. "),n.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"* Contacte a un agente. "))),P(!0)}))})).catch((function(e){I(n.createElement("center",null,n.createElement("div",null,"❌ Error, no se pudo crear tu orden de servicio, contacta a un agente. ")))})):"realizar-pago"===localStorage.getItem("RutaNavegacion")&&(R(!0),g().getNetPay().then((function(e){"Mensaje enviado exitosamente"===e.message?(I(n.createElement("center",null,n.createElement("div",null,"🟡 Espere mientras validamos su pago... "),n.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"* Esto puede tardar un momento. "))),f(!0),y(14),setTimeout((function(){g().getValidadorNetPay(e.data.id).then((function(e){if(""===e);else if("Promocion no valida para el tipo de tarjeta"===e)I(n.createElement("center",null,n.createElement("div",null,"❌ ",e,", favor de intentarlo de nuevo. "))),P(!0);else if("Transacción valida"===e||"Transacción exitosa"===e){j(!0),I(n.createElement("center",null,n.createElement("div",null,"✅ Su transacción ha sido exitosa."),n.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"* No olvide entregar sus llaves. "),n.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"* Realice su inventario del vehiculo. "))),(0,o.navigate)("/");var t=A.localStorage.getItem("token");A.localStorage.clear(),A.localStorage.setItem("token",t)}else"Cancelado por el usuario"===e?(I(n.createElement("center",null,n.createElement("div",null,"❌ Su transacción ha sido cancelada, favor de intentarlo de nuevo. "))),P(!0)):"Transacción rechazada"===e&&(I(n.createElement("center",null,n.createElement("div",null,"❌ ",e,", favor de intentarlo de nuevo. "))),P(!0))}))}),6e4)):(I(n.createElement("center",null,n.createElement("div",null,"❌ Error, hubo un problema con la terminal, favor de intentarlo de nuevo. "))),P(!0))})).catch((function(e){I(n.createElement("center",null,n.createElement("div",null,"❌ Error, hubo un problema con la terminal, favor de intentarlo de nuevo. "),n.createElement("p",{style:{marginBottom:0},className:"texto-gris"},"* Contacte a un agente. "))),P(!0)})))}return(0,n.useEffect)((function(){}),[]),n.createElement(s.Z,null,n.createElement(u.Z,{title:"Auto servicio"}),!0===C?n.createElement(r.Z,{style:{position:"absolute",zIndex:100,height:"80%",display:"flex",justifyContent:"center",alignItems:"center"}},n.createElement(i.gy,{height:"100",width:"100",color:"#0d6efd",ariaLabel:"tail-spin-loading",radius:"0",wrapperStyle:{},wrapperClass:"",visible:!0})):null,n.createElement(r.Z,{className:"container-sin-cita"},n.createElement(l.Z,{className:"row-cita-arriba"},n.createElement("div",{className:"container-cita"},n.createElement(l.Z,null,n.createElement(c.Z,{className:"titulo-cita"},n.createElement("h1",{className:"titulo-h1"},"Método de pago"))),n.createElement(r.Z,{className:"p-5"},!0===k?n.createElement(l.Z,null,n.createElement(c.Z,{lg:3,className:"col-diagnostico"},n.createElement(l.Z,{style:{display:"flex",justifyContent:"center"}},n.createElement(c.Z,{lg:12,className:"btn-celeste-grande",style:{width:"100% !important"}},n.createElement("div",{style:{height:"65%",display:"flex",justifyContent:"center"}},n.createElement("img",{src:v,className:"img-servicios",style:{marginBottom:0}})),n.createElement("div",{className:"flexCenter"},n.createElement("h5",{style:{marginTop:0},className:"titulo-h1"},"Terminal"))))),n.createElement(c.Z,{lg:9,style:{paddingLeft:60}},n.createElement(l.Z,{className:"btn-naranja-diagnostico"},n.createElement("div",{className:"flexCenter"},n.createElement("h5",{className:"titulo-h1-blanco"},"Chevolet Rivero Agradece su preferencia.")),n.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",paddingLeft:60}},n.createElement("p",null,". Inserte su tarjeta "),n.createElement("p",null,". Escriba su NIP "),n.createElement("p",null,". Recoja su ticket y orden de reparación impresa "))))):n.createElement(l.Z,null,n.createElement(l.Z,{className:"flexCenter pt-5"},n.createElement(c.Z,{lg:12,className:"btn-celeste-pagoTerminal mb-4",onClick:function(){return B()}},"Pagar ahora. ","(Con terminal)"),n.createElement(c.Z,{lg:12,className:"btn-celeste-pagoTerminal",onClick:function(){return function(){if(S(!0),"sin-cita"===localStorage.getItem("RutaNavegacion"))g().postCrearCita().then((function(e){g().enviaCorreoOrden(e.result.data.htracabe[0].w32process.emitir.codigoht).then((function(e){})),S(!1),(0,o.navigate)("/");var t=A.localStorage.getItem("token");A.localStorage.clear(),A.localStorage.setItem("token",t)})).catch((function(e){I(n.createElement("center",null,n.createElement("div",null,"❌ Error, no se pudo crear tu orden de servicio, contacta a un agente. ")))}));else if("orden-reparacion"===localStorage.getItem("RutaNavegacion"))g().postConCita().then((function(e){g().enviaCorreoOrden(e.result.data.htracabe[0].w32process.emitir.codigoht).then((function(e){})),S(!1),(0,o.navigate)("/");var t=A.localStorage.getItem("token");A.localStorage.clear(),A.localStorage.setItem("token",t)})).catch((function(e){I(n.createElement("center",null,n.createElement("div",null,"❌ Error, no se pudo crear tu orden de servicio, contacta a un agente. ")))}));else if("realizar-pago"===localStorage.getItem("RutaNavegacion")){(0,o.navigate)("/");var e=A.localStorage.getItem("token");A.localStorage.clear(),A.localStorage.setItem("token",e)}}()}},"Pagar después.")))))),n.createElement(l.Z,{className:"row-cita-abajo"},n.createElement(m.Z,{refForm:t,none:"none"}))),n.createElement(E.Z,{modal:d,error:b,setModal:f,registro:!1,pagoFinalizado:M,setClick:h,mensajeModal:O,pagoRepetir:function(e){B()},repetir:L}))}}}]);
//# sourceMappingURL=component---src-pages-postpago-tarjeta-js-fe7a20e4bf25990974c7.js.map