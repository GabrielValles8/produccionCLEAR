"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[93],{4778:function(e,t,r){r.r(t),r.d(t,{default:function(){return K}});var a=r(2982),n=r(7294),c=r(4942),l=r(5987),o=r(5900),i=r.n(o),s=r(9541),m=r(8870),u=r(6132),d=r(5893),f=["bsPrefix","className","variant","as"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var y=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.variant,o=e.as,m=void 0===o?"img":o,u=(0,l.Z)(e,f),y=(0,s.vE)(r,"card-img");return(0,d.jsx)(m,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:i()(n?"".concat(y,"-").concat(n):y,a)},u))}));y.displayName="CardImg";var E=y,b=n.createContext(null);b.displayName="CardHeaderContext";var h=b,g=["bsPrefix","className","as"];function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,c=e.as,o=void 0===c?"div":c,m=(0,l.Z)(e,g),u=(0,s.vE)(r,"card-header"),f=(0,n.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return(0,d.jsx)(h.Provider,{value:f,children:(0,d.jsx)(o,v(v({ref:t},m),{},{className:i()(a,u)}))})}));w.displayName="CardHeader";var j=w,P=["bsPrefix","className","bg","text","border","body","children","as"];function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=(0,u.Z)("h5"),S=(0,u.Z)("h6"),k=(0,m.Z)("card-body"),C=(0,m.Z)("card-title",{Component:x}),D=(0,m.Z)("card-subtitle",{Component:S}),A=(0,m.Z)("card-link",{Component:"a"}),I=(0,m.Z)("card-text",{Component:"p"}),T=(0,m.Z)("card-footer"),R=(0,m.Z)("card-img-overlay"),z=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.bg,c=e.text,o=e.border,m=e.body,u=e.children,f=e.as,p=void 0===f?"div":f,y=(0,l.Z)(e,P),E=(0,s.vE)(r,"card");return(0,d.jsx)(p,N(N({ref:t},y),{},{className:i()(a,E,n&&"bg-".concat(n),c&&"text-".concat(c),o&&"border-".concat(o)),children:m?(0,d.jsx)(k,{children:u}):u}))}));z.displayName="Card",z.defaultProps={body:!1};var B=Object.assign(z,{Img:E,Title:C,Subtitle:D,Body:k,Link:A,Text:I,Header:j,Footer:T,ImgOverlay:R}),H=r(994),L=r(7408),F=r(3639),M=r(3134),_=r(1082),q=r(7655),W=r(9357),X=r(9034),$=r(5936),U=(r(7580),r(2449)),J=r.n(U),G=r(9324);function K(e){var t=(0,n.useState)(!1),r=(t[0],t[1],(0,n.useState)(!1)),c=r[0],l=r[1],o=(0,n.useState)(!1),i=(o[0],o[1],(0,n.useState)(0)),s=i[0],m=(i[1],(0,n.useState)(!1)),u=(m[0],m[1]),d=(0,n.useState)({Proteccion:"",Estetica:"",Eliminadores:""}),f=d[0],p=d[1],y=(0,n.useState)([]),E=y[0],b=y[1],h=(0,n.useRef)(),g=[0,1].map((function(e,t){return n.createElement("label",{style:{width:"50%"},key:t},n.createElement(H.Z,null,n.createElement(L.Z,{style:{width:"100%",height:"100%"},lg:6},n.createElement(G.Z,null))))}));function O(e,t){var r={servicio:e,precio:t};b((function(t){return t.some((function(t){return t.servicio===e}))?t.filter((function(t){return t.servicio!==e})):[].concat((0,a.Z)(t),[r])}))}return(0,n.useEffect)((function(){J().getServiciosAdicionales().then((function(e){p(Object.assign({},f,{Proteccion:e.data.categorias["PROTECCION ADICIONAL"].adicionales,Estetica:e.data.categorias["ESTETICA AUTOMOTRIZ"].adicionales,Eliminadores:e.data.categorias["ELIMINADORES DE MALOS OLORES / ANTIBACTERIALES"].adicionales}))}))}),[]),n.createElement(q.Z,{backUrl:"/comentarios-paquetes"},n.createElement(W.Z,{title:"Auto servicio"}),n.createElement(F.Z,{className:"container-sin-cita",onClick:function(){u(!0)}},n.createElement(H.Z,{className:"row-cita-arriba"},n.createElement("div",{className:"container-cita"},n.createElement(H.Z,null,n.createElement(L.Z,{lg:12,className:"titulo-cita"},n.createElement("h1",{className:"titulo-h1"},"Servicios adicionales "))),n.createElement(L.Z,{lg:12,className:"titulo-cita"},n.createElement("p",{className:"texto-gris",style:{marginBottom:5}},"Seleccione algún servicio adicional que desee agregar, esto es opcional.")),n.createElement(L.Z,{lg:12,className:"titulo-cita"},n.createElement("h5",{style:{color:"#0d6efd"}},"Proteccion Adicional")),n.createElement(H.Z,{style:{width:"100%",overflowX:"scroll",flexWrap:"nowrap",height:185}},f&&f.Proteccion&&f.Proteccion.length>0?f.Proteccion.map((function(e,t){return n.createElement("label",{style:{width:"45%",height:"95%"},key:t},n.createElement("input",{class:"item-check",name:"keywords[]",type:"checkbox",value:"1"}),n.createElement(L.Z,{style:{width:"100%",height:"95%"},className:"item-name"},n.createElement(B,{style:{width:"100%",height:"100%"},onClick:function(t){return O(e.nombre,e.precio)}},n.createElement(B.Header,{style:{fontSize:14}},e.nombre),n.createElement(B.Body,null,n.createElement(B.Text,{className:"texto-gris",style:{fontSize:13}},e.detalle)),n.createElement(B.Footer,null,n.createElement("center",null,n.createElement("small",{className:"text-muted"},"$ ",e.precio," pesos"))))))})):g),n.createElement(L.Z,{lg:12,className:"titulo-cita",style:{padding:5}},n.createElement("h5",{style:{color:"#0d6efd"}},"Eliminadores de malos olores/antibacteriales")),n.createElement(H.Z,{style:{width:"100%",overflowX:"scroll",flexWrap:"nowrap",height:185}},f&&f.Eliminadores&&f.Eliminadores.length>0?f.Eliminadores.map((function(e,t){return n.createElement("label",{style:{width:"45%",height:"95%"},key:t},n.createElement("input",{class:"item-check",name:"keywords[]",type:"checkbox",value:"1"}),n.createElement(L.Z,{style:{width:"100%",height:"95%"},className:"item-name"},n.createElement(B,{style:{width:"100%",height:"100%"},onClick:function(t){return O(e.nombre,e.precio)}},n.createElement(B.Header,{style:{fontSize:14}},e.nombre),n.createElement(B.Body,null,n.createElement(B.Text,{className:"texto-gris",style:{fontSize:13}},e.detalle)),n.createElement(B.Footer,null,n.createElement("center",null,n.createElement("small",{className:"text-muted"},"$ ",e.precio," pesos"))))))})):g),n.createElement(L.Z,{lg:12,className:"titulo-cita",style:{padding:5}},n.createElement("h5",{style:{color:"#0d6efd"}},"Estetica automotriz")),n.createElement(H.Z,{style:{width:"100%",overflowX:"scroll",flexWrap:"nowrap",height:185}},f&&f.Estetica&&f.Estetica.length>0?f.Estetica.map((function(e,t){return n.createElement("label",{style:{width:"45%",height:"95%"},key:t},n.createElement("input",{class:"item-check",name:"keywords[]",type:"checkbox",value:"1"}),n.createElement(L.Z,{style:{width:"100%",height:"95%"},className:"item-name"},n.createElement(B,{style:{width:"100%",height:"100%"},onClick:function(t){return O(e.nombre,e.precio)}},n.createElement(B.Header,{style:{fontSize:14}},e.nombre),n.createElement(B.Body,null,n.createElement(B.Text,{className:"texto-gris",style:{fontSize:13}},e.detalle)),n.createElement(B.Footer,null,n.createElement("center",null,n.createElement("small",{className:"text-muted"},"$ ",e.precio," pesos"))))))})):g))),n.createElement(M.Z,{ref:h,onClick:function(){return function(){(0,_.navigate)("/resumen-servicios");var e={paquetesAdicionales:E};localStorage.setItem("adicionales",JSON.stringify(e))}()},style:{display:"none"}}),n.createElement(H.Z,{className:"row-cita-abajo"},n.createElement(X.Z,{refForm:h,none:"tiene"}))),n.createElement($.Z,{modal:c,error:s,setModal:l,setClick:u}))}}}]);
//# sourceMappingURL=component---src-pages-servicios-adicionales-js-41f0ed36157feb221f32.js.map