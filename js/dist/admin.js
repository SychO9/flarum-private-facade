module.exports=function(t){var e={};function a(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=17)}({1:function(t,e,a){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}a.d(e,"a",(function(){return n}))},17:function(t,e,a){"use strict";a.r(e);var r=a(2),n=a.n(r);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t}).apply(this,arguments)}var i=a(1),s=a(4),c=function(t){function e(){for(var e,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).loading=!1,e}Object(i.a)(e,t);var a=e.prototype;return a.view=function(e){return this.attrs.loading=this.loading,this.attrs.className=(this.attrs.className||"")+" Button",n.a.data.settings[this.attrs.setting]?(this.attrs.onclick=this.remove.bind(this),m("div",{className:"UploadImageButton-container"},m("div",{className:"UploadImageButton-image-container"},m("img",{className:"UploadImageButton-image",src:n.a.forum.attribute(this.attrs.serializedName),alt:""})),t.prototype.view.call(this,o({},e,{children:m("[",null,n.a.translator.trans("core.admin.upload_image.remove_button"))})))):(this.attrs.onclick=this.upload.bind(this),t.prototype.view.call(this,o({},e,{children:m("[",null,n.a.translator.trans("core.admin.upload_image.upload_button"))})))},a.upload=function(){var t=this;this.loading||$('<input type="file">').appendTo("body").hide().click().on("change",(function(e){var a=new FormData;a.append(t.attrs.name,$(e.target)[0].files[0]),t.loading=!0,m.redraw(),n.a.request({method:"POST",url:t.resourceUrl(),serialize:function(t){return t},body:a}).then(t.success.bind(t),t.failure.bind(t))}))},a.remove=function(){this.loading=!0,m.redraw(),n.a.request({method:"DELETE",url:this.resourceUrl()}).then(this.success.bind(this),this.failure.bind(this))},a.resourceUrl=function(){return n.a.forum.attribute("apiUrl")+"/"+this.attrs.routeName},a.success=function(){window.location.reload()},a.failure=function(){this.loading=!1,m.redraw()},e}(a.n(s).a);n.a.initializers.add("sycho/flarum-private-facade",(function(t){t.extensionData.for("sycho-private-facade").registerSetting({setting:"sycho-private-facade.header_layout",label:t.translator.trans("sycho-private-facade.admin.settings.header_layout.title"),default:"show_only_logo",options:{show_header:t.translator.trans("sycho-private-facade.admin.settings.header_layout.options.show_header"),show_only_logo:t.translator.trans("sycho-private-facade.admin.settings.header_layout.options.show_only_logo"),hide_secondary_items:t.translator.trans("sycho-private-facade.admin.settings.header_layout.options.hide_secondary_items")},type:"select"}).registerSetting((function(){var e=this.setting("sycho-private-facade.use_welcome_hero_text")();console.log(typeof e,e);var a=!0===e||"1"===e;return m("div",{className:"Form-group BasicsPage-welcomeBanner-input PrivateFacade-screenBanner"},m("label",null,t.translator.trans("sycho-private-facade.admin.settings.screen_banner_heading")),m("input",{disabled:a,type:"text",className:"FormControl",placeholder:t.translator.trans("sycho-private-facade.admin.settings.screen_banner_title"),"aria-label":t.translator.trans("sycho-private-facade.admin.settings.screen_banner_title"),bidi:this.setting("sycho-private-facade.screen_banner_title")}),m("textarea",{disabled:a,className:"FormControl",placeholder:t.translator.trans("sycho-private-facade.admin.settings.screen_banner_description"),"aria-label":t.translator.trans("sycho-private-facade.admin.settings.screen_banner_description"),bidi:this.setting("sycho-private-facade.screen_banner_message")}))})).registerSetting({setting:"sycho-private-facade.use_welcome_hero_text",label:t.translator.trans("sycho-private-facade.admin.settings.use_welcome_hero_text"),default:!0,type:"boolean"}).registerSetting({setting:"sycho-private-facade.primary_color_bg",label:t.translator.trans("sycho-private-facade.admin.settings.primary_color_bg"),default:!0,type:"boolean"}).registerSetting({setting:"sycho-private-facade.force_redirect",label:t.translator.trans("sycho-private-facade.admin.settings.force_redirect"),default:!0,type:"boolean"}).registerSetting((function(){return m("div",{className:"Form-group HeroImageForm"},m("label",{for:"sycho-private-facade.illustration_path"},t.translator.trans("sycho-private-facade.admin.settings.illustration_path")),m(c,{setting:"sycho-private-facade.illustration_path",serializedName:"sycho-private-facade.illustration_url",routeName:"private_facade_illustration",name:"private_facade_illustration"}))}))}))},2:function(t,e){t.exports=flarum.core.compat["admin/app"]},4:function(t,e){t.exports=flarum.core.compat["common/components/Button"]}});
//# sourceMappingURL=admin.js.map