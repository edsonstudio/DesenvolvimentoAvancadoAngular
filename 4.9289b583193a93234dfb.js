(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"E6/q":function(t,n,e){"use strict";e.r(n),e.d(n,"ProductModule",function(){return M});var o=e("ofXK"),c=e("vT00"),r=e.n(c),i=e("fXoL"),a=e("tk/3");let p=(()=>{class t{constructor(t){this.http=t,this.UrlServiceV1="https://json-server-angular.herokuapp.com/"}getProducts(){return this.http.get(this.UrlServiceV1+"products")}}return t.\u0275fac=function(n){return new(n||t)(i["\u0275\u0275inject"](a.b))},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})();var d=e("tyNb");let s=(()=>{class t{contadorAtivos(){if(this.products)return this.products.filter(t=>t.active).length}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i["\u0275\u0275defineComponent"]({type:t,selectors:[["product-count"]],inputs:{products:"products"},decls:7,vars:2,template:function(t,n){1&t&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"h2"),i["\u0275\u0275text"](2,"Products"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"div"),i["\u0275\u0275text"](4),i["\u0275\u0275element"](5,"br"),i["\u0275\u0275element"](6,"br"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&t&&(i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate2"](" Produtos ativos: ",n.contadorAtivos()," no total de ",n.products.length," produtos. "))},encapsulation:2}),t})();const l=function(t,n){return[t,"BRL",n,"1.2-2","pt"]};function g(t,n){if(1&t&&(i["\u0275\u0275elementStart"](0,"h3"),i["\u0275\u0275text"](1),i["\u0275\u0275pipe"](2,"currency"),i["\u0275\u0275elementEnd"]()),2&t){const t=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBindV"](2,1,i["\u0275\u0275pureFunction2"](7,l,t.product.price,t.symbol)))}}function u(t,n){if(1&t&&(i["\u0275\u0275elementStart"](0,"h5"),i["\u0275\u0275text"](1,"De: "),i["\u0275\u0275elementStart"](2,"del"),i["\u0275\u0275text"](3),i["\u0275\u0275pipe"](4,"currency"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&t){const t=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBindV"](4,1,i["\u0275\u0275pureFunction2"](7,l,t.product.price,t.symbol)))}}function m(t,n){if(1&t&&(i["\u0275\u0275elementStart"](0,"h3"),i["\u0275\u0275text"](1),i["\u0275\u0275pipe"](2,"currency"),i["\u0275\u0275elementEnd"]()),2&t){const t=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"]("Por: ",i["\u0275\u0275pipeBindV"](2,1,i["\u0275\u0275pureFunction2"](7,l,t.product.pricePromo,t.symbol)),"")}}function f(t,n){1&t&&(i["\u0275\u0275elementStart"](0,"a",9),i["\u0275\u0275text"](1,"Buy Now"),i["\u0275\u0275elementEnd"]())}function x(t,n){1&t&&(i["\u0275\u0275elementStart"](0,"a",9),i["\u0275\u0275text"](1,"SOLD!!!"),i["\u0275\u0275elementEnd"]())}let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i["\u0275\u0275defineComponent"]({type:t,selectors:[["product-card-detail"]],inputs:{product:"product"},decls:30,vars:10,consts:[[1,"card"],[1,"imgBx"],[3,"src","alt"],[1,"prices"],[4,"ngIf"],[1,"content"],[1,"size"],[1,"color"],["href","#",4,"ngIf"],["href","#"]],template:function(t,n){1&t&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275element"](2,"img",2),i["\u0275\u0275elementStart"](3,"h2"),i["\u0275\u0275text"](4),i["\u0275\u0275pipe"](5,"titlecase"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",3),i["\u0275\u0275template"](7,g,3,10,"h3",4),i["\u0275\u0275template"](8,u,5,10,"h5",4),i["\u0275\u0275template"](9,m,3,10,"h3",4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"div",5),i["\u0275\u0275elementStart"](11,"div",6),i["\u0275\u0275elementStart"](12,"h3"),i["\u0275\u0275text"](13,"Size: "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"span"),i["\u0275\u0275text"](15,"7"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](16,"span"),i["\u0275\u0275text"](17,"8"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](18,"span"),i["\u0275\u0275text"](19,"9"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](20,"span"),i["\u0275\u0275text"](21,"10"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](22,"div",7),i["\u0275\u0275elementStart"](23,"h3"),i["\u0275\u0275text"](24,"Color: "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](25,"span"),i["\u0275\u0275element"](26,"span"),i["\u0275\u0275element"](27,"span"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](28,f,2,0,"a",8),i["\u0275\u0275template"](29,x,2,0,"a",8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&t&&(i["\u0275\u0275advance"](2),i["\u0275\u0275propertyInterpolate1"]("src","assets/",n.product.image,"",i["\u0275\u0275sanitizeUrl"]),i["\u0275\u0275propertyInterpolate"]("alt",n.product.name),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](5,8,n.product.name)),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngIf",!n.product.promo),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.product.promo),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.product.promo),i["\u0275\u0275advance"](19),i["\u0275\u0275property"]("ngIf",n.product.active),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!n.product.active))},directives:[o.l],pipes:[o.s,o.d],styles:[".card[_ngcontent-%COMP%]{width:300px;height:400px;margin:20px 40px;background:#ffffff0d;box-shadow:0 10px 25px #0003;backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border-radius:.625rem;background-color:hsla(0,2%,40%,.096)}.card[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column}.card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]{padding:20px;transition:.5s ease-in-out}.card[_ngcontent-%COMP%]:hover   .imgBx[_ngcontent-%COMP%]{transform:translateY(-100px)}.card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;margin:0 0 20px;transition:.5s ease-in-out}.card[_ngcontent-%COMP%]:hover   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:translate(-20px,-40px) rotate(-25deg) scale(1.4)}.card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:absolute;bottom:20px;display:flex;justify-content:center;align-items:center;flex-direction:column;transition:.5s ease-in-out;opacity:0;visibility:hidden}.card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%]{opacity:1;visibility:visible}.card[_ngcontent-%COMP%]:hover   .imgBx[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:translateY(-60px)}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]{display:flex;justify-content:center;max-height:30px;padding:5px}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:300;font-size:14px;text-transform:uppercase;letter-spacing:2px}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:26px;height:26px;text-align:center;line-height:24px;display:inline-block;color:#111;background:#fff;border-radius:4px;font-size:14px;font-weight:500;margin:0 5px;transition:.5s;cursor:pointer}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{background:#9bdc28}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:20px;height:20px;background:red;border-radius:50%;margin:0 5px;border:2px solid #fff;cursor:pointer}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){background:#9bdc28}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){background:#03a9f4}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){background:#e91e63}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;top:10px;display:inline-block;padding:12px 30px;background:#fff;border-radius:40px;font-weight:600;letter-spacing:1px;color:#111;text-decoration:none;text-transform:uppercase}"]}),t})();function C(t,n){1&t&&i["\u0275\u0275element"](0,"product-card-detail",3),2&t&&i["\u0275\u0275property"]("product",n.$implicit)}const O=[{path:"",component:(()=>{class t{constructor(t){this.productsService=t}ngOnInit(){this.productsService.getProducts().subscribe(t=>{this.products=t,console.log(t)},t=>console.log(t))}}return t.\u0275fac=function(n){return new(n||t)(i["\u0275\u0275directiveInject"](p))},t.\u0275cmp=i["\u0275\u0275defineComponent"]({type:t,selectors:[["app-product-dashboard"]],decls:4,vars:2,consts:[[1,"container"],[3,"product",4,"ngFor","ngForOf"],[3,"products"],[3,"product"]],template:function(t,n){1&t&&(i["\u0275\u0275elementStart"](0,"section"),i["\u0275\u0275elementStart"](1,"div",0),i["\u0275\u0275template"](2,C,1,1,"product-card-detail",1),i["\u0275\u0275element"](3,"product-count",2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&t&&(i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",n.products),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("products",n.products))},directives:[o.k,s,P],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");*[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0;font-family:Poppins,sans-serif}section[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;overflow:hidden;padding:100px 20px;box-sizing:border-box}section[_ngcontent-%COMP%]:before{-webkit-clip-path:circle(65% at 100% -20%);clip-path:circle(65% at 100% -20%)}section[_ngcontent-%COMP%]:after, section[_ngcontent-%COMP%]:before{content:"";position:fixed;top:0;left:0;width:100%;height:100%;background:var(--primary-color)}section[_ngcontent-%COMP%]:after{-webkit-clip-path:circle(35% at 0 100%);clip-path:circle(35% at 0 100%)}.container[_ngcontent-%COMP%]{position:relative;z-index:10;display:flex;justify-content:center;align-items:center;flex-wrap:wrap}']}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=i["\u0275\u0275defineInjector"]({imports:[[d.c.forChild(O)],d.c]}),t})();Object(o.v)(r.a);let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=i["\u0275\u0275defineInjector"]({providers:[p],imports:[[o.c,h]]}),t})()}}]);