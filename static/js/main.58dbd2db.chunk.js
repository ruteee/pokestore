(this.webpackJsonppokestore=this.webpackJsonppokestore||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),o=(t(73),t(13)),i=t(12),m=(t(74),t(127)),s=(t(75),t(53)),u=t.n(s);var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pokeHeader"},r.a.createElement("img",{src:u.a,alt:"A logo for the pokestore"})),r.a.createElement("div",{className:"pokeClose"}),r.a.createElement("div",{className:"pokeCloseInside"}))},E=t(36),d=t.n(E),g=t(54),f=t(139),h=t(130),v=t(132),b=t(133),k=t(134),x=t(135),w=t(136),j=t(137),N=t(138),O=Object(m.a)({root:{maxWidth:200},media:{alignItems:"center",alignText:"center",height:100,width:100,maxWidth:"100%",objectFit:"contain"},content:{textTransform:"capitalize"}});for(var y=function(e){var a=O();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:a.root,coins:e.price},r.a.createElement(x.a,null,r.a.createElement(w.a,{className:a.media,image:e.image,title:"This is suposed to be a Pok\xe9mon"}),r.a.createElement(v.a,{className:a.content},r.a.createElement(b.a,null,r.a.createElement(k.a,{component:"span"},e.name),r.a.createElement(k.a,{component:"span"},"".concat(e.price," coins"))))),r.a.createElement(j.a,null,r.a.createElement(N.a,{size:"small",variant:"contained",color:"primary",onClick:function(t){e.log([r.a.createElement(h.a,{className:a.card},r.a.createElement(v.a,{className:a.cardContent},r.a.createElement(b.a,null,r.a.createElement(k.a,null,r.a.createElement("strong",null,"Pokemon:")," ",e.name),r.a.createElement(k.a,null,r.a.createElement("strong",null,"Price: ")," ",e.price," coins")))),e.price]),t.preventDefault()}},"Add to cart now"))))},S=t(56),F=t.n(S),I={},A=1;A<=808;A++)I[A]=Math.floor(1e3*Math.random()+1);var C=function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),c=t[0],l=t[1],o="https://pokeapi.co/api/v2/pokemon?limit=1&offset=807";function m(a){e.logapp(a)}function s(){return console.log(c),c.map((function(e,a){return r.a.createElement(f.a,{key:a,item:!0,xs:2},r.a.createElement(y,{name:e.name,image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.url.split("/")[e.url.split("/").length-2],".png"),price:I[e.url.split("/")[e.url.split("/").length-2]],log:m}))}))}return Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get(o);case 2:a=e.sent,l(a.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{container:!0,spacing:1},r.a.createElement(f.a,{container:!0,item:!0,xs:12,spacing:1},r.a.createElement(s,null))))},P=t(140),T=t(142),W=t(17),z=t(57),B=t.n(z),H=Object(m.a)({root:{},card:{width:"100%"},cardHeader:{fontSize:"40px",textAlign:"center"}}),M=0;var J=function(e){M+=Number(e.price);var a=H();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(P.a,{className:a.cardHeader,title:"Cart",avatar:r.a.createElement(T.a,null,r.a.createElement(B.a,null))}),r.a.createElement(f.a,{container:!0,direction:"row",spacing:1,xs:12},r.a.createElement(f.a,{container:!0,item:!0,xs:12,spacing:1},r.a.createElement(f.a,{item:!0,xs:12},e.cartItem))),r.a.createElement(v.a,null,r.a.createElement(W.a,{component:"p"}," ",r.a.createElement("strong",null," Total:  "),M," coins")),r.a.createElement(j.a,null,r.a.createElement(N.a,{variant:"contained",color:"primary"}," Buy"))))},D=(t(99),t(143)),G=t(141);var $=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,null,r.a.createElement(G.a,{label:"pok\xe9mon",variant:"outlined",id:"pokeSearch"}),r.a.createElement(N.a,{variant:"contained",color:"default"}," Search")))},q=Object(m.a)((function(e){return{root:{flexGrow:1,marginTop:100}}}));var K=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),m=Object(i.a)(l,2),s=m[0],u=m[1],E=q();return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(f.a,{container:!0,direction:"row",justify:"center",spacing:2,className:E.root},r.a.createElement(f.a,{container:!0,item:!0,xs:9},r.a.createElement(C,{logapp:function(e){console.log("on app ",e[0]),c([].concat(Object(o.a)(t),[e[0]])),u(e[1])}})),r.a.createElement(f.a,{container:!0,item:!0,xs:3,direction:"column"},r.a.createElement($,null),r.a.createElement(J,{cartItem:t,price:s}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,a,t){e.exports=t.p+"static/media/logo.abe1febe.png"},68:function(e,a,t){e.exports=t(100)},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.58dbd2db.chunk.js.map