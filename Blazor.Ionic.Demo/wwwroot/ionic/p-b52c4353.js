import"./p-53b5a7f5.js";import"./p-a07772f1.js";import{c as t}from"./p-986d0fc8.js";import{g as a}from"./p-31a14cff.js";const o=(o,r)=>{const i="back"===r.direction,s=r.leavingEl,p=a(r.enteringEl),c=p.querySelector("ion-toolbar"),n=t();if(n.addElement(p).fill("both").beforeRemoveClass("ion-page-invisible"),i?n.duration(r.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration(r.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),c){const a=t();a.addElement(c),n.addAnimation(a)}if(s&&i){n.duration(r.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const o=t();o.addElement(a(s)).onFinish((t=>{1===t&&o.elements.length>0&&o.elements[0].style.setProperty("display","none")})).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),n.addAnimation(o)}return n};export{o as mdTransitionAnimation}