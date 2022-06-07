module.exports=function(t){var e={};function r(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=17)}([function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e,r){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e)}r.d(e,"a",(function(){return o}))},,function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,e){t.exports=flarum.core.compat["common/utils/extractText"]},function(t,e){t.exports=flarum.core.compat["forum/components/HeaderSecondary"]},function(t,e){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["forum/components/LogInModal"]},function(t,e){t.exports=flarum.core.compat["forum/components/SignUpModal"]},function(t,e){t.exports=flarum.core.compat["common/components/Page"]},function(t,e){t.exports=flarum.core.compat["common/utils/classList"]},function(t,e){t.exports=flarum.core.compat["forum/components/HeaderPrimary"]},function(t,e){t.exports=flarum.core.compat["common/components/Navigation"]},function(t,e){t.exports=flarum.core.compat["common/resolvers/DefaultResolver"]},function(t,e,r){"use strict";r.r(e);var a=r(0),o=r.n(a),c=r(1),n=r(3),i=r.n(n),u=r(10),l=r.n(u),s=r(6),f=r.n(s);var h=function(t){function e(){return t.apply(this,arguments)||this}return Object(c.a)(e,t),e.prototype.view=function(){return m(p,{routeSwitcher:this.attrs.routeSwitcher,animateShow:function(){return null}})},e}(i.a),p=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var r=e.prototype;return r.title=function(){return[f()("fas fa-sign-in-alt"),t.prototype.title.call(this)]},r.view=function(){var e=this,r=t.prototype.view.call(this);return function t(e,r){var a=null==e?void 0:e.children;return a instanceof Array&&"map"in a&&(e.children=null==a?void 0:a.map(r).map((function(e){var a;return(null==(a=(null==e?void 0:e.children)||null)?void 0:a.length)&&t(e,r)||e}))),e}(r,(function(r){var a,o;return null!=r&&null!=(a=r.attrs)&&null!=(o=a.className)&&o.includes("Modal-header")&&r.children.push(t.prototype.footer.call(e)[0]),r})),r},r.footer=function(){var e=t.prototype.footer.call(this);return delete e[0],e[1]=this.attrs.routeSwitcher(),e},e}(l.a);p.isDismissible=!1;var v=function(t){function e(){return t.apply(this,arguments)||this}return Object(c.a)(e,t),e.prototype.view=function(){var t=o.a.forum.attribute("sycho-private-facade.illustration_url");return t?m("img",{src:t,alt:""}):m("svg",{width:"900",height:"600",viewBox:"0 0 900 600",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{fill:"transparent",d:"M0 0h900v600H0z"}),m("rect",{x:"342.141",y:"162",width:"42.461",height:"112.141",rx:"21.231",transform:"rotate(90 342.141 162)",fill:"#E1E4E5"}),m("rect",{x:"337.265",y:"166.331",width:"33.751",height:"33.751",rx:"16.876",transform:"rotate(90 337.265 166.331)",fill:"#fff"}),m("rect",{x:"516.369",y:"401",width:"42.461",height:"112.141",rx:"21.231",transform:"rotate(90 516.369 401)",fill:"#E1E4E5"}),m("rect",{x:"511.493",y:"405.331",width:"33.751",height:"33.751",rx:"16.876",transform:"rotate(90 511.493 405.331)",fill:"#fff"}),m("rect",{x:"141.84",y:"291.334",width:"161.335",height:"161.335",rx:"80.668",fill:"#666AF6"}),m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M259.171 405.842v5.394c0 2.977-2.385 5.394-5.323 5.394h-63.876c-2.939 0-5.323-2.417-5.323-5.394v-5.481c0-16.322 18.407-26.926 37.261-26.926 18.854 0 37.261 10.61 37.261 26.926m-23.901-74.313c7.381 7.381 7.381 19.348 0 26.729-7.381 7.382-19.349 7.382-26.73 0-7.381-7.381-7.381-19.348 0-26.729s19.349-7.381 26.73 0z",fill:"#fff"}),m("rect",{x:"584.96",y:"317.464",width:"161.335",height:"161.335",rx:"80.668",fill:"#666AF6"}),m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M702.292 431.972v5.394c0 2.977-2.385 5.394-5.323 5.394h-63.877c-2.938 0-5.323-2.417-5.323-5.394v-5.481c0-16.322 18.407-26.927 37.261-26.927 18.855 0 37.262 10.61 37.262 26.927m-23.902-74.313c7.381 7.381 7.381 19.348 0 26.729-7.381 7.382-19.348 7.382-26.729 0-7.382-7.381-7.382-19.348 0-26.729 7.381-7.381 19.348-7.381 26.729 0z",fill:"#fff"}),m("rect",{x:"370",y:"181",width:"161.335",height:"161.335",rx:"80.668",fill:"#666AF6"}),m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M487.331 295.507v5.394c0 2.978-2.385 5.394-5.323 5.394h-63.876c-2.938 0-5.323-2.416-5.323-5.394v-5.48c0-16.322 18.407-26.927 37.261-26.927 18.854 0 37.261 10.61 37.261 26.927m-23.901-74.313c7.381 7.381 7.381 19.348 0 26.729-7.382 7.381-19.349 7.381-26.73 0s-7.381-19.348 0-26.729c7.381-7.382 19.348-7.382 26.73 0z",fill:"#fff"}),m("path",{d:"M259.701 232.542h.147c.874 12.56 10.079 12.753 10.079 12.753s-10.15.201-10.15 14.714c0-14.513-10.151-14.714-10.151-14.714s9.201-.193 10.075-12.753zm303.761 89.277h.147c.874 12.56 10.079 12.753 10.079 12.753s-10.151.202-10.151 14.714c0-14.512-10.15-14.714-10.15-14.714s9.201-.193 10.075-12.753zm-218.839 29.397h.148c.873 12.559 10.079 12.753 10.079 12.753s-10.151.201-10.151 14.713c0-14.512-10.151-14.713-10.151-14.713s9.202-.194 10.075-12.753zm27.452-212.791h.148c.873 12.559 10.079 12.753 10.079 12.753s-10.151.201-10.151 14.713c0-14.512-10.151-14.713-10.151-14.713s9.202-.194 10.075-12.753zm222.918 53.989h.071c.422 6.062 4.865 6.155 4.865 6.155s-4.9.097-4.9 7.102c0-7.005-4.899-7.102-4.899-7.102s4.441-.093 4.863-6.155zm-468.977 116.34h.072c.421 6.063 4.864 6.156 4.864 6.156s-4.899.097-4.899 7.102c0-7.005-4.899-7.102-4.899-7.102s4.441-.093 4.862-6.156zm-9.798 121.94h.071c.422 6.062 4.865 6.156 4.865 6.156s-4.9.097-4.9 7.101c0-7.004-4.899-7.101-4.899-7.101s4.441-.094 4.863-6.156zm657.604-71.857h.071c.422 6.062 4.865 6.155 4.865 6.155s-4.9.097-4.9 7.102c0-7.005-4.899-7.102-4.899-7.102s4.441-.093 4.863-6.155z",fill:"#E1E4E5"}),m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M735.689 297.235h3.597c.87 0 1.57.708 1.57 1.57v3.598c0 .869-.707 1.57-1.57 1.57h-3.597c-.863 0-1.57-.708-1.57-1.57v-3.598c-.008-.862.7-1.57 1.57-1.57zm12.472 0h3.597c.863 0 1.571.708 1.571 1.57v3.598c0 .869-.708 1.57-1.571 1.57h-3.597c-.862 0-1.57-.708-1.57-1.57v-3.598c0-.862.708-1.57 1.57-1.57zm12.481 0h3.597c.862 0 1.57.708 1.57 1.57v3.598c0 .869-.708 1.57-1.57 1.57h-3.597a1.577 1.577 0 0 1-1.571-1.57v-3.598a1.568 1.568 0 0 1 1.571-1.57zm12.472 0h3.597c.863 0 1.57.708 1.57 1.57v3.598c0 .869-.707 1.57-1.57 1.57h-3.597c-.87 0-1.578-.708-1.578-1.57v-3.598a1.588 1.588 0 0 1 1.578-1.57zm12.473 0h3.597c.87 0 1.578.708 1.578 1.57v3.598c0 .869-.708 1.57-1.578 1.57h-3.597c-.863 0-1.57-.708-1.57-1.57v-3.598c0-.862.707-1.57 1.57-1.57zm-36.969 13.601h3.598c.862 0 1.57.707 1.57 1.57v3.604c0 .863-.708 1.571-1.57 1.571h-3.598c-.869 0-1.57-.708-1.57-1.571v-3.597a1.568 1.568 0 0 1 1.57-1.577zm12.473 0h3.597c.863 0 1.57.707 1.57 1.57v3.604c0 .863-.707 1.571-1.57 1.571h-3.597c-.863 0-1.57-.708-1.57-1.571v-3.597c-.008-.87.7-1.577 1.57-1.577zm12.473 0h3.597c.87 0 1.578.707 1.578 1.57v3.604c0 .863-.708 1.571-1.578 1.571h-3.597c-.863 0-1.57-.708-1.57-1.571v-3.597c0-.87.707-1.577 1.57-1.577zm-12.922-28.212h3.597c.862 0 1.57.708 1.57 1.571v3.597c0 .87-.708 1.57-1.57 1.57h-3.597a1.577 1.577 0 0 1-1.571-1.57v-3.597a1.568 1.568 0 0 1 1.571-1.571zm12.472 0h3.597c.863 0 1.57.708 1.57 1.571v3.597c0 .87-.707 1.57-1.57 1.57h-3.597c-.87 0-1.578-.708-1.578-1.57v-3.597a1.588 1.588 0 0 1 1.578-1.571zM318.698 439.861h3.598c.87 0 1.57.708 1.57 1.57v3.598c0 .869-.708 1.57-1.57 1.57h-3.598c-.862 0-1.57-.708-1.57-1.57v-3.598a1.568 1.568 0 0 1 1.57-1.57zm12.473 0h3.597c.862 0 1.57.708 1.57 1.57v3.598c0 .869-.708 1.57-1.57 1.57h-3.597c-.863 0-1.57-.708-1.57-1.57v-3.598c0-.862.707-1.57 1.57-1.57zm12.48 0h3.597c.863 0 1.571.708 1.571 1.57v3.598c0 .869-.708 1.57-1.571 1.57h-3.597c-.862 0-1.57-.708-1.57-1.57v-3.598c-.007-.862.7-1.57 1.57-1.57zm12.472 0h3.598c.862 0 1.57.708 1.57 1.57v3.598c0 .869-.708 1.57-1.57 1.57h-3.598c-.87 0-1.577-.708-1.577-1.57v-3.598a1.587 1.587 0 0 1 1.577-1.57zm12.473 0h3.598c.87 0 1.577.708 1.577 1.57v3.598c0 .869-.707 1.57-1.577 1.57h-3.598c-.862 0-1.57-.708-1.57-1.57v-3.598c0-.862.708-1.57 1.57-1.57zm-36.968 13.601h3.597c.863 0 1.57.707 1.57 1.57v3.604c0 .863-.707 1.571-1.57 1.571h-3.597c-.87 0-1.57-.708-1.57-1.571v-3.597c-.008-.87.7-1.577 1.57-1.577zm12.472 0h3.597c.863 0 1.571.707 1.571 1.57v3.604c0 .863-.708 1.571-1.571 1.571H344.1c-.862 0-1.57-.708-1.57-1.571v-3.597c-.007-.87.7-1.577 1.57-1.577zm12.473 0h3.598c.869 0 1.577.707 1.577 1.57v3.604c0 .863-.708 1.571-1.577 1.571h-3.598c-.862 0-1.57-.708-1.57-1.571v-3.597c0-.87.708-1.577 1.57-1.577zm-12.922-28.212h3.597c.863 0 1.571.708 1.571 1.571v3.597c0 .87-.708 1.57-1.571 1.57h-3.597c-.862 0-1.57-.708-1.57-1.57v-3.597a1.567 1.567 0 0 1 1.57-1.571zm12.472 0h3.598c.862 0 1.57.708 1.57 1.571v3.597c0 .87-.708 1.57-1.57 1.57h-3.598c-.87 0-1.577-.708-1.577-1.57v-3.597a1.587 1.587 0 0 1 1.577-1.571zm185.495-284.639h3.597c.87 0 1.57.707 1.57 1.57v3.597c0 .87-.708 1.57-1.57 1.57h-3.597c-.863 0-1.57-.707-1.57-1.57v-3.597c-.008-.863.7-1.57 1.57-1.57zm12.472 0h3.597c.862 0 1.57.707 1.57 1.57v3.597c0 .87-.708 1.57-1.57 1.57h-3.597a1.576 1.576 0 0 1-1.571-1.57v-3.597c0-.863.708-1.57 1.571-1.57zm12.48 0h3.597c.863 0 1.571.707 1.571 1.57v3.597c0 .87-.708 1.57-1.571 1.57h-3.597c-.862 0-1.57-.707-1.57-1.57v-3.597c-.007-.863.7-1.57 1.57-1.57zm12.472 0h3.598c.862 0 1.57.707 1.57 1.57v3.597c0 .87-.708 1.57-1.57 1.57h-3.598c-.87 0-1.577-.707-1.577-1.57v-3.597a1.587 1.587 0 0 1 1.577-1.57zm12.473 0h3.598c.87 0 1.577.707 1.577 1.57v3.597c0 .87-.707 1.57-1.577 1.57h-3.598c-.862 0-1.57-.707-1.57-1.57v-3.597c0-.863.708-1.57 1.57-1.57zm-36.968 13.6h3.597c.863 0 1.571.708 1.571 1.57v3.605c0 .862-.708 1.57-1.571 1.57h-3.597c-.87 0-1.57-.708-1.57-1.57v-3.597c-.007-.87.7-1.578 1.57-1.578zm12.472 0h3.598c.862 0 1.57.708 1.57 1.57v3.605c0 .862-.708 1.57-1.57 1.57h-3.598c-.862 0-1.57-.708-1.57-1.57v-3.597c-.007-.87.7-1.578 1.57-1.578zm12.473 0h3.598c.87 0 1.577.708 1.577 1.57v3.605c0 .862-.707 1.57-1.577 1.57h-3.598c-.862 0-1.57-.708-1.57-1.57v-3.597c0-.87.708-1.578 1.57-1.578zM566.57 126h3.597c.863 0 1.571.708 1.571 1.57v3.597c0 .87-.708 1.571-1.571 1.571h-3.597c-.862 0-1.57-.708-1.57-1.571v-3.597c-.007-.862.7-1.57 1.57-1.57zm12.472 0h3.598c.862 0 1.57.708 1.57 1.57v3.597c0 .87-.708 1.571-1.57 1.571h-3.598c-.87 0-1.577-.708-1.577-1.571v-3.597a1.587 1.587 0 0 1 1.577-1.57z",fill:"#E1E4E5"}),m("path",{d:"M107 247.088c14.587-17.039 40.212-44.843 26.019-19.749-17.74 31.367 14.784 10.455 26.02 0 11.235-10.456 37.846-18.007 18.923 9.294-18.923 27.3 35.481 11.036 45.534-9.294",stroke:"#E1E4E5","stroke-width":"4.355"}),m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M625.244 189.227c0-32.6 26.428-59.027 59.028-59.027h50.701c32.6 0 59.027 26.427 59.027 59.027s-26.427 59.028-59.027 59.028h-16.962l-26.588 21.366c-1.968 1.582-4.892.181-4.892-2.345v-19.021h-2.259c-32.6 0-59.028-26.428-59.028-59.028z",fill:"#666AF6"}),m("rect",{width:"43.623",height:"7.036",rx:"3.518",transform:"matrix(-1 0 0 1 750.256 167.808)",fill:"#fff"}),m("rect",{width:"66.842",height:"7.036",rx:"3.518",transform:"matrix(-1 0 0 1 750.256 186.102)",fill:"#fff"}),m("rect",{width:"91.468",height:"7.036",rx:"3.518",transform:"matrix(-1 0 0 1 750.256 204.396)",fill:"#fff"}),m("circle",{r:"10.343",transform:"matrix(-1 0 0 1 654.343 99.343)",fill:"#E1E4E5"}),m("circle",{r:"4",transform:"matrix(-1 0 0 1 491 144)",fill:"#E1E4E5"}),m("circle",{r:"10.343",transform:"matrix(-1 0 0 1 155.449 290.79)",fill:"#E1E4E5"}),m("circle",{r:"10.343",transform:"matrix(-1 0 0 1 552.842 433.416)",fill:"#E1E4E5"}),m("circle",{r:"5.444",transform:"matrix(-1 0 0 1 623.067 286.979)",fill:"#E1E4E5"}),m("circle",{r:"5.444",transform:"matrix(-1 0 0 1 197.366 485.132)",fill:"#E1E4E5"}))},e}(i.a),d=r(11),y=r.n(d),g=function(t){function e(){return t.apply(this,arguments)||this}return Object(c.a)(e,t),e.prototype.view=function(){return m(b,{routeSwitcher:this.attrs.routeSwitcher,animateShow:function(){return null}})},e}(i.a),b=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var r=e.prototype;return r.title=function(){return[f()("fas fa-user-plus"),t.prototype.title.call(this)]},r.footer=function(){var e=t.prototype.footer.call(this);return e[0]=this.attrs.routeSwitcher(),e},e}(y.a);b.isDismissible=!1;var x=r(5),w=r.n(x),_=r(7),z=r.n(_),E=r(12),O=r.n(E),P=r(13),F=r.n(P),j=function(t){function e(){for(var e,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).currentRoute=void 0,e.routes=void 0,e}Object(c.a)(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.routes={"sycho-private-facade.login":{label:z()(o.a.translator.trans("sycho-private-facade.forum.log_in_label")),component:h,next:"sycho-private-facade.signup"},"sycho-private-facade.signup":{label:z()(o.a.translator.trans("sycho-private-facade.forum.sign_up_label")),component:g,next:"sycho-private-facade.login"}},this.currentRoute=this.routes[o.a.current.data.routeName],o.a.setTitle(this.currentRoute.label),document.body.classList.contains("body--privateFacade")||document.body.classList.add("body--privateFacade");var r=!["show_only_logo","hide_secondary_items"].includes(o.a.forum.attribute("sycho-private-facade.header_layout"));this.bodyClass=F()({"App--privateFacade":!0,"App--privateFacade--showHeader":r,"App--privateFacade--logoOnly":!r,"App--privateFacade--primaryBg":o.a.forum.attribute("sycho-private-facade.primary_color_bg")})},r.view=function(){var t=this;return m("div",{className:"PrivateFacade"},m("div",{className:"PrivateFacade-container container"},m("div",{className:"PrivateFacade-AuthView"},m("div",{className:"PrivateFacade-AuthView-interface","data-primary-background":o.a.forum.attribute("sycho-private-facade.primary_color_bg")},m("h2",{className:"PrivateFacade-AuthView-interface-title"},o.a.forum.attribute("sycho-private-facade.screen_banner_title")),m("p",{className:"PrivateFacade-AuthView-interface-message"},m.trust(o.a.forum.attribute("sycho-private-facade.screen_banner_message"))),m(v,null)),m("div",{className:"PrivateFacade-AuthView-form"},m(this.currentRoute.component,{routeSwitcher:function(){return m("[",null,m("div",{className:"PrivateFacade-AuthView-separator"},m("span",{class:"PrivateFacade-AuthView-separator-label"},o.a.translator.trans("sycho-private-facade.forum.or_label"))),m(w.a,{className:"Button Button--block PrivateFacade-Button--outline PrivateFacade-Button",onclick:function(){var e,r;["sycho-private-facade.login","sycho-private-facade.signup"].includes(null==(e=o.a.history.getPrevious())?void 0:e.name)&&(null==(r=o.a.history.getPrevious())?void 0:r.name)===t.currentRoute.next?o.a.history.back():(o.a.history.push(t.currentRoute.next,t.routes[t.currentRoute.next].label,o.a.route(t.currentRoute.next)),m.route.set(o.a.route(t.currentRoute.next)))}},t.routes[t.currentRoute.next].label))}})))))},e}(O.a),A=r(14),M=r.n(A),S=r(4),N=r(8),B=r.n(N),k=r(15),R=r.n(k),V=r(9),H=r.n(V),L=r(16),C=r.n(L);o.a.initializers.add("sycho/flarum-private-facade",(function(){o.a.routes["sycho-private-facade.login"]={path:"/login",component:j},o.a.routes["sycho-private-facade.signup"]={path:"/signup",component:j};var t=function(){return["sycho-private-facade.login","sycho-private-facade.signup"].includes(o.a.current.data.routeName)};Object(S.override)(B.a.prototype,"view",(function(e){if(t()&&["show_only_logo","hide_secondary_items"].includes(o.a.forum.attribute("sycho-private-facade.header_layout")))return null;for(var r=arguments.length,a=new Array(r>1?r-1:0),c=1;c<r;c++)a[c-1]=arguments[c];return e.apply(void 0,a)})),Object(S.override)(M.a.prototype,"view",(function(e){if(t()&&"show_only_logo"===o.a.forum.attribute("sycho-private-facade.header_layout"))return null;for(var r=arguments.length,a=new Array(r>1?r-1:0),c=1;c<r;c++)a[c-1]=arguments[c];var n=e.apply(void 0,a);return t()&&n&&o.a.forum.attribute("sycho-private-facade.primary_color_bg")&&"show_header"!==o.a.forum.attribute("sycho-private-facade.header_layout")&&(n.attrs["data-primary-background"]=!0),n})),Object(S.override)(R.a.prototype,"getBackButton",(function(e){if(t())return null;for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return e.apply(void 0,a)})),Object(S.extend)(B.a.prototype,"items",(function(t){t.has("logIn")&&t.setContent("logIn",m(H.a,{className:"Button Button--link",href:o.a.route("sycho-private-facade.login")},o.a.translator.trans("core.forum.header.log_in_link"))),t.has("signUp")&&t.setContent("signUp",m(H.a,{className:"Button Button--link",href:o.a.route("sycho-private-facade.signup")},o.a.translator.trans("core.forum.header.sign_up_link")))})),Object(S.override)(C.a.prototype,"onmatch",(function(t,e,r,a){return o.a.forum.attribute("sycho-private-facade.route_exclusions").includes(this.routeName)?t(e,r,a):m.route.SKIP}))}))}]);
//# sourceMappingURL=forum.js.map