(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1-RLF",icon:"HeaderCartButton_icon__2S6Rg",badge:"HeaderCartButton_badge__1tLbD",bump:"HeaderCartButton_bump__1vXLz"}},,,function(e,t,n){e.exports={meal:"ItemInfo_meal__2O9GC",description:"ItemInfo_description__LeVXm",price:"ItemInfo_price__1x53V"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3iXHD",modal:"Modal_modal__30MRu","slide-down":"Modal_slide-down__294fH"}},,function(e,t,n){e.exports={header:"Header_header__2O1C4","main-image":"Header_main-image__90nQ_"}},,function(e,t,n){e.exports={summary:"ItemSummary_summary__Ltr1G"}},function(e,t,n){e.exports={meals:"AvailableItems_meals__1lD8K","meals-appear":"AvailableItems_meals-appear__1b7kZ"}},function(e,t,n){e.exports={card:"Card_card__1te4P"}},function(e,t,n){e.exports={form:"ItemInfoForm_form__bs6JM"}},function(e,t,n){e.exports={input:"Input_input__HkNJD"}},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),a=n.n(c),i=(n(25),n(3)),r=n(1),o=n.n(r),s=n(14),l=n.n(s),m=n.p+"static/media/village.52b2b984.jpg",d=n(8),u=n.n(d),j=n(0),b=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},O=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),x=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],a=n[1],o=Object(r.useContext)(O),s=o.items.reduce((function(e,t){return e+t.amount}),0),l="".concat(u.a.button," ").concat(c?u.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.items.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[o.items]),Object(j.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(j.jsx)("span",{className:u.a.icon,children:Object(j.jsx)(b,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:u.a.badge,children:s})]})},p=function(e){return Object(j.jsxs)(o.a.Fragment,{children:[Object(j.jsxs)("header",{className:l.a.header,children:[Object(j.jsx)("h1",{children:"Tribal Buy"}),Object(j.jsx)(x,{onClick:e.onClickShow})]}),Object(j.jsx)("div",{className:l.a["main-image"],children:Object(j.jsx)("img",{src:m,alt:"Traditional villages from Uttrakhand"})})]})},h=(n(27),n(16)),_=n.n(h),f=function(e){return Object(j.jsxs)("section",{className:_.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"]})},v=n(17),C=n.n(v),g=n(18),I=n.n(g),N=function(e){return Object(j.jsx)("div",{className:I.a.card,children:e.children})},k=n(11),A=n.n(k),y=n(19),w=n.n(y),H=n(2),B=n(20),D=n.n(B),F=o.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:D.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(H.a)({ref:t},e.input))]})})),M=n(10),R=function(e){var t=Object(r.useRef)(),n=Object(M.useState)(!0),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(j.jsxs)("form",{className:w.a.form,onSubmit:function(n){n.preventDefault();var c=t.current.value,a=+c;0===c.trim().length||a<1||a>5?o(!1):e.onAddToCart(a)},children:[Object(j.jsx)(F,{ref:t,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:"+ Add"}),!a&&Object(j.jsx)("p",{children:"Please enter a correct amount (1-5)"})]})},S=function(e){var t=Object(r.useContext)(O),n="\u20b9".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:A.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:A.a.description,children:e.description}),Object(j.jsx)("div",{className:A.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(R,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},E=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],T=function(e){return Object(j.jsx)("section",{className:C.a.meals,children:Object(j.jsx)(N,{children:Object(j.jsx)("ul",{children:E.map((function(e){return Object(j.jsx)(S,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}))})})})},L=function(e){return Object(j.jsxs)(o.a.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(T,{})]})},P=n(4),V=n.n(P),z=n(12),J=n.n(z),G=function(e){return Object(j.jsx)("div",{className:J.a.backdrop,onClick:e.onClickClose})},Q=function(e){return Object(j.jsx)("div",{className:J.a.modal,children:Object(j.jsx)("div",{className:J.a.content,children:e.children})})},U=document.getElementById("overlays"),X=function(e){return Object(j.jsxs)(o.a.Fragment,{children:[a.a.createPortal(Object(j.jsx)(G,{onClickClose:e.onClickClose}),U),a.a.createPortal(Object(j.jsx)(Q,{children:e.children}),U)]})},q=n(5),K=n.n(q),Y=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:K.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:K.a.summary,children:[Object(j.jsx)("span",{className:K.a.price,children:t}),Object(j.jsxs)("span",{className:K.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:K.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Z=function(e){var t=Object(M.useContext)(O),n="\u20b9".concat(t.totalAmount.toFixed(2)),c=t.items.lenght>0,a=function(e){t.removeItem(e)},i=function(e){var n=Object(H.a)(Object(H.a)({},e),{},{amount:1});t.addItem(n)},r=t.items.map((function(e){return Object(j.jsx)(Y,{name:e.name,amount:e.amount,id:e.id,price:e.price,onAdd:i.bind(null,e),onRemove:a.bind(null,e.id)},e.id)}));return Object(j.jsxs)(X,{onClickClose:e.onClickClose,children:[Object(j.jsx)("ul",{className:V.a["cart-items"],children:r}),Object(j.jsxs)("div",{className:V.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("div",{className:V.a.actions,children:[Object(j.jsx)("button",{className:V.a["button--alt"],onClick:e.onClickClose,children:"Close"}),c&&Object(j.jsx)("button",{className:V.a.button,children:"Order"})]})]})},$=n(15),W={items:[],totalAmount:0},ee=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[a];if(i){var r=Object(H.a)(Object(H.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object($.a)(e.items))[a]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],m=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(H.a)(Object(H.a)({},l),{},{amount:l.amount-1});(o=Object($.a)(e.items))[s]=d}return{items:o,totalAmount:m}}return W},te=function(e){var t=Object(r.useReducer)(ee,W),n=Object(i.a)(t,2),c=n[0],a=n[1],o={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})}};return Object(j.jsx)(O.Provider,{value:o,children:e.children})};var ne=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(te,{children:[n&&Object(j.jsx)(Z,{onClickClose:function(){c(!1)}}),Object(j.jsx)(p,{onClickShow:function(){c(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(L,{})})]})};a.a.render(Object(j.jsx)(ne,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.d2df2c63.chunk.js.map