(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(8),i=n.n(a),l=(n(15),n(2)),d=n(3),o=n(5),u=n(4),j=function(e){return e.children},b=(n(16),n(17),n.p+"static/media/burger-logo.ec69c7f6.png"),h=(n(18),function(){return Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:b,alt:"MyBurger"})})}),O=(n(19),n(20),function(e){var t=e.children,n=e.link,r=e.active;return Object(c.jsx)("li",{className:"item",children:Object(c.jsx)("a",{href:n,className:r?"active":null,children:t})})}),x=function(){return Object(c.jsxs)("ul",{className:"items",children:[Object(c.jsx)(O,{link:"#",active:!0,children:"Burger Builder"}),Object(c.jsx)(O,{link:"#",children:"Checkout"})]})},p=(n(21),function(e){var t=e.clicked;return Object(c.jsxs)("div",{className:"drawerToggle",onClick:t,children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})}),v=function(e){e.open;var t=e.toggled;return Object(c.jsxs)("header",{className:"toolbar",children:[Object(c.jsx)("div",{className:"toolbarLogo",children:Object(c.jsx)(h,{})}),Object(c.jsx)(p,{clicked:t}),Object(c.jsx)("nav",{className:"desktop",children:Object(c.jsx)(x,{})})]})},m=(n(22),function(e){var t=e.show,n=e.clicked;return t?Object(c.jsx)("div",{className:"backdrop",onClick:n}):null}),f=(n(23),function(e){var t=e.closed,n=e.open,r=["drawer","close"];return n&&(r=["drawer","open"]),Object(c.jsxs)(j,{children:[Object(c.jsx)(m,{show:n,clicked:t}),Object(c.jsxs)("div",{className:r.join(" "),children:[Object(c.jsx)("div",{className:"drawerLogo",children:Object(c.jsx)(h,{})}),Object(c.jsx)("nav",{children:Object(c.jsx)(x,{})})]})]})}),g=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).sideDrawerClosedHandler=function(){c.setState({showSideDrawer:!1})},c.sideDrawerToggleHandler=function(){c.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},c.state={showSideDrawer:!1},c}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(j,{children:[Object(c.jsx)(v,{toggled:this.sideDrawerToggleHandler}),Object(c.jsx)(f,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(c.jsx)("main",{className:"content",children:this.props.children})]})}}]),n}(r.Component),k=n(6),N=n(9),w=(n(24),n(25),function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(c.jsx)("div",{className:"BreadBottom"});break;case"bread-top":t=Object(c.jsxs)("div",{className:"BreadTop",children:[Object(c.jsx)("div",{className:"Seeds1"}),Object(c.jsx)("div",{className:"Seeds2"})]});break;case"meat":t=Object(c.jsx)("div",{className:"Meat"});break;case"cheese":t=Object(c.jsx)("div",{className:"Cheese"});break;case"lettuce":t=Object(c.jsx)("div",{className:"Lettuce"});break;case"bacon":t=Object(c.jsx)("div",{className:"Bacon"});break;default:t=null}return t}),C=function(e){var t=e.ingredients,n=Object.keys(t).map((function(e){return Object(N.a)(Array(t[e])).map((function(t,n){return Object(c.jsx)(w,{type:e},e+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===n.length&&(n=Object(c.jsx)("p",{children:"Please start adding ingredients."})),Object(c.jsxs)("div",{className:"burger",children:[Object(c.jsx)(w,{type:"bread-top"}),n,Object(c.jsx)(w,{type:"bread-bottom"})]})},y=(n(26),n(27),function(e){var t=e.label,n=e.added,r=e.removed,s=e.disabled;return Object(c.jsxs)("div",{className:"control",children:[Object(c.jsx)("div",{className:"label",children:t}),Object(c.jsx)("button",{className:"less",onClick:r,disabled:s,children:"Remove"}),Object(c.jsx)("button",{className:"more",onClick:n,children:"Add"})]})}),S=[{label:"Lettuce",type:"lettuce"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],P=function(e){var t=e.ingredientAdded,n=e.ingredientRemoved,r=e.disabled,s=e.price,a=e.purchasable,i=e.ordered;return Object(c.jsxs)("div",{className:"controls",children:[Object(c.jsxs)("p",{children:["Current Price: ",Object(c.jsxs)("strong",{children:["$",s.toFixed(2)]})]}),S.map((function(e){return Object(c.jsx)(y,{label:e.label,added:function(){return t(e.type)},removed:function(){return n(e.type)},disabled:r[e.type]},e.label)})),Object(c.jsx)("button",{disabled:!a,onClick:i,className:"orderBtn mt3",children:"ORDER NOW"})]})},B=(n(28),function(e){var t=e.children,n=e.show,r=e.modalClosed;return Object(c.jsxs)(j,{children:[Object(c.jsx)(m,{show:n,clicked:r}),Object(c.jsx)("div",{className:"modal",style:{transform:n?"translateY(0)":"translateY(-100vh)",opacity:n?"1":"0"},children:t})]})}),D=(n(29),function(e){var t=e.children,n=e.clicked,r=e.btnType;return Object(c.jsx)("button",{className:["grow","button",r].join(" "),onClick:n,children:t})}),T=function(e){var t=e.ingredients,n=e.purchaseCancel,r=e.purchaseContinue,s=e.price,a=Object.keys(t).map((function(e){return Object(c.jsxs)("li",{className:"ttc",children:[e,": ",t[e]]},e)}));return Object(c.jsxs)(j,{children:[Object(c.jsx)("h3",{className:"tc",children:"Your Order"}),Object(c.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(c.jsx)("ul",{children:a}),Object(c.jsx)("p",{children:Object(c.jsxs)("strong",{children:["Total Price: $",s.toFixed(2)," "]})}),Object(c.jsx)("p",{children:"Continue to checkout?"}),Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)(D,{btnType:"danger",clicked:n,children:"CANCEL"}),Object(c.jsx)(D,{btnType:"success",clicked:r,children:"CONTINUE"})]})]})},H={lettuce:.15,bacon:.75,cheese:.5,meat:1.3},I=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).addIngredientHandler=function(e){var t=c.state.ingredients[e]+1,n=Object(k.a)({},c.state.ingredients);n[e]=t;var r=H[e],s=c.state.totalPrice+r;c.setState({totalPrice:s,ingredients:n}),c.updatePurchase(n)},c.removeIngredientHandler=function(e){var t=c.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(k.a)({},c.state.ingredients);r[e]=n;var s=H[e],a=c.state.totalPrice-s;c.setState({totalPrice:a,ingredients:r}),c.updatePurchase(r)}},c.purchaseHandler=function(){c.setState({purchasing:!0})},c.purchaseCancel=function(){c.setState({purchasing:!1})},c.purchaseContinue=function(){alert("You continue!")},c.state={ingredients:{lettuce:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},c}return Object(d.a)(n,[{key:"updatePurchase",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(k.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return Object(c.jsxs)(j,{children:[Object(c.jsx)(B,{show:this.state.purchasing,modalClosed:this.purchaseCancel,children:Object(c.jsx)(T,{ingredients:this.state.ingredients,purchaseCancel:this.purchaseCancel,purchaseContinue:this.purchaseContinue,price:this.state.totalPrice})}),Object(c.jsx)(C,{ingredients:this.state.ingredients}),Object(c.jsx)(P,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice})]})}}]),n}(r.Component),L=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(g,{children:Object(c.jsx)(I,{})})})}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(30);i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),A()}],[[31,1,2]]]);
//# sourceMappingURL=main.0e5257e1.chunk.js.map