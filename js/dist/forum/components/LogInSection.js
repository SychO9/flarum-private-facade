"use strict";(self.webpackChunkmodule_exports=self.webpackChunkmodule_exports||[]).push([[556],{908:(e,r,l)=>{l.r(r),l.d(r,{default:()=>o});var s=l(192),a=l(208),n=l.n(a),i=l(801),t=l.n(i);function u(e,r){const l=null==e?void 0:e.children;return l instanceof Array&&"map"in l&&(e.children=null==l?void 0:l.map(r).map((e=>{var l;return(null==(l=(null==e?void 0:e.children)||null)?void 0:l.length)&&u(e,r)||e}))),e}flarum.reg.add("sychoprivate-facade","forum/utils/mapChildren",u);class o extends(n()){title(){return[m(t(),{name:"fas fa-sign-in-alt"}),super.title()]}view(){var e;const r=super.view();return u(r,(e=>{var r;return null!=e&&null!=(r=e.attrs)&&null!=(r=r.className)&&r.includes("Modal-header")&&e.children.push(super.footer()[0]),e})),r.attrs.className=null==(e=r.attrs)||null==(e=e.className)?void 0:e.replace("fade",""),r}footer(){const e=super.footer();return app.forum.attribute("allowSignUp")&&e.children instanceof Array&&(e.children[1]=this.attrs.routeSwitcher()),e}}(0,s.A)(o,"isDismissibleViaCloseButton",!1),(0,s.A)(o,"isDismissibleViaBackdropClick",!1),(0,s.A)(o,"isDismissibleViaEscKey",!1),flarum.reg.add("sychoprivate-facade","forum/components/LogInSection",o)}}]);
//# sourceMappingURL=LogInSection.js.map