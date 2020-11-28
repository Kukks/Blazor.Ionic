var __awaiter=this&&this.__awaiter||function(e,o,t,r){function i(e){return e instanceof t?e:new t((function(o){o(e)}))}return new(t||(t=Promise))((function(t,n){function a(e){try{p(r.next(e))}catch(o){n(o)}}function s(e){try{p(r["throw"](e))}catch(o){n(o)}}function p(e){e.done?t(e.value):i(e.value).then(a,s)}p((r=r.apply(e,o||[])).next())}))};var __generator=this&&this.__generator||function(e,o){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,i,n,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(o){return p([e,o])}}function p(a){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(n=a[0]&2?i["return"]:a[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;if(i=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:t.label++;return{value:a[1],done:false};case 5:t.label++;i=a[1];a=[0];continue;case 7:a=t.ops.pop();t.trys.pop();continue;default:if(!(n=t.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){t.label=a[1];break}if(a[0]===6&&t.label<n[1]){t.label=n[1];n=a;break}if(n&&t.label<n[2]){t.label=n[2];t.ops.push(a);break}if(n[2])t.ops.pop();t.trys.pop();continue}a=o.call(e,t)}catch(s){a=[6,s];i=0}finally{r=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-0ebf7899.system.js","./p-ef6c2508.system.js","./p-8458728b.system.js","./p-e8c3daea.system.js","./p-8ef2b4a8.system.js","./p-99a53bfc.system.js","./p-0733cc45.system.js","./p-af7d7be2.system.js","./p-42e53900.system.js"],(function(e){"use strict";var o,t,r,i,n,a,s,p,l,c,d,v,f,u,h,m;return{setters:[function(e){o=e.r;t=e.e;r=e.h;i=e.H;n=e.i},function(e){a=e.b},function(){},function(e){s=e.c},function(e){p=e.e},function(){},function(e){l=e.B;c=e.e;d=e.d;v=e.f;f=e.g},function(e){u=e.g},function(e){h=e.a;m=e.d}],execute:function(){var b=function(e,o){var t="top";var r="left";var i=e.querySelector(".popover-content");var n=i.getBoundingClientRect();var a=n.width;var p=n.height;var l=e.ownerDocument.defaultView.innerWidth;var c=e.ownerDocument.defaultView.innerHeight;var d=o&&o.target&&o.target.getBoundingClientRect();var v=d!=null&&"top"in d?d.top:c/2-p/2;var f=d!=null&&"left"in d?d.left:l/2;var u=d&&d.width||0;var h=d&&d.height||0;var m=e.querySelector(".popover-arrow");var b=m.getBoundingClientRect();var g=b.width;var y=b.height;if(d==null){m.style.display="none"}var w={top:v+h,left:f+u/2-g/2};var k={top:v+h+(y-1),left:f+u/2-a/2};var D=false;var P=false;if(k.left<x+25){D=true;k.left=x}else if(a+x+k.left+25>l){P=true;k.left=l-a-x;r="right"}if(v+h+p>c&&v-p>0){w.top=v-(y+1);k.top=v-p-(y-1);e.className=e.className+" popover-bottom";t="bottom"}else if(v+h+p>c){i.style.bottom=x+"%"}m.style.top=w.top+"px";m.style.left=w.left+"px";i.style.top=k.top+"px";i.style.left=k.left+"px";if(D){i.style.left="calc("+k.left+"px + var(--ion-safe-area-left, 0px))"}if(P){i.style.left="calc("+k.left+"px - var(--ion-safe-area-right, 0px))"}i.style.transformOrigin=t+" "+r;var E=s();var S=s();var _=s();S.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);_.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);return E.addElement(e).easing("ease").duration(100).addAnimation([S,_])};var x=5;var g=function(e){var o=s();var t=s();var r=s();t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return o.addElement(e).easing("ease").duration(500).addAnimation([t,r])};var y=function(e,o){var t=12;var r=e.ownerDocument;var i=r.dir==="rtl";var n="top";var a=i?"right":"left";var p=e.querySelector(".popover-content");var l=p.getBoundingClientRect();var c=l.width;var d=l.height;var v=r.defaultView.innerWidth;var f=r.defaultView.innerHeight;var u=o&&o.target&&o.target.getBoundingClientRect();var h=u!=null&&"bottom"in u?u.bottom:f/2-d/2;var m=u!=null&&"left"in u?i?u.left-c+u.width:u.left:v/2-c/2;var b=u&&u.height||0;var x={top:h,left:m};if(x.left<t){x.left=t;a="left"}else if(c+t+x.left>v){x.left=v-c-t;a="right"}if(h+b+d>f&&h-d>0){x.top=h-d-b;e.className=e.className+" popover-bottom";n="bottom"}else if(h+b+d>f){p.style.bottom=t+"px"}var g=s();var y=s();var w=s();var k=s();var D=s();y.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);w.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);k.addElement(p).beforeStyles({top:x.top+"px",left:x.left+"px","transform-origin":n+" "+a}).fromTo("transform","scale(0.001)","scale(1)");D.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1);return g.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([y,w,k,D])};var w=function(e){var o=s();var t=s();var r=s();t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return o.addElement(e).easing("ease").duration(500).addAnimation([t,r])};var k='.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}';var D=".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}";var P=e("ion_popover",function(){function e(e){var r=this;o(this,e);this.didPresent=t(this,"ionPopoverDidPresent",7);this.willPresent=t(this,"ionPopoverWillPresent",7);this.willDismiss=t(this,"ionPopoverWillDismiss",7);this.didDismiss=t(this,"ionPopoverDidDismiss",7);this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.translucent=false;this.animated=true;this.onDismiss=function(e){e.stopPropagation();e.preventDefault();r.dismiss()};this.onBackdropTap=function(){r.dismiss(undefined,l)};this.onLifecycle=function(e){var o=r.usersElement;var t=E[e.type];if(o&&t){var i=new CustomEvent(t,{bubbles:false,cancelable:false,detail:e.detail});o.dispatchEvent(i)}}}e.prototype.connectedCallback=function(){c(this.el)};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,o,t;return __generator(this,(function(r){switch(r.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".popover-content");if(!e){throw new Error("container is undefined")}o=Object.assign(Object.assign({},this.componentProps),{popover:this.el});t=this;return[4,h(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],o)];case 1:t.usersElement=r.sent();return[4,p(this.usersElement)];case 2:r.sent();return[2,d(this,"popoverEnter",b,y,this.event)]}}))}))};e.prototype.dismiss=function(e,o){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(r){switch(r.label){case 0:return[4,v(this,e,o,"popoverLeave",g,w,this.event)];case 1:t=r.sent();if(!t)return[3,3];return[4,m(this.delegate,this.usersElement)];case 2:r.sent();r.label=3;case 3:return[2,t]}}))}))};e.prototype.onDidDismiss=function(){return f(this.el,"ionPopoverDidDismiss")};e.prototype.onWillDismiss=function(){return f(this.el,"ionPopoverWillDismiss")};e.prototype.render=function(){var e;var o=a(this);var t=this.onLifecycle;return r(i,{"aria-modal":"true","no-router":true,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},u(this.cssClass)),(e={},e[o]=true,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},r("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),r("div",{tabindex:"0"}),r("div",{class:"popover-wrapper ion-overlay-wrapper"},r("div",{class:"popover-arrow"}),r("div",{class:"popover-content"})),r("div",{tabindex:"0"}))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return e}());var E={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};P.style={ios:k,md:D}}}}));