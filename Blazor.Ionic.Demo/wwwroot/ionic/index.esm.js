import"./p-53b5a7f5.js";export{g as getPlatforms,i as isPlatform}from"./p-275c7570.js";import"./p-a07772f1.js";export{c as createAnimation}from"./p-986d0fc8.js";export{a as LIFECYCLE_DID_ENTER,c as LIFECYCLE_DID_LEAVE,L as LIFECYCLE_WILL_ENTER,b as LIFECYCLE_WILL_LEAVE,d as LIFECYCLE_WILL_UNLOAD}from"./p-31a14cff.js";export{iosTransitionAnimation}from"./p-95a0a8a3.js";export{mdTransitionAnimation}from"./p-b52c4353.js";export{g as getTimeGivenProgression}from"./p-bac8255f.js";import"./p-0d9cab2d.js";export{createGesture}from"./p-a013b234.js";export{I as IonicSafeString}from"./p-1f87b1b9.js";import"./p-28891211.js";export{m as menuController}from"./p-669f6e03.js";export{b as actionSheetController,a as alertController,l as loadingController,m as modalController,p as pickerController,c as popoverController,t as toastController}from"./p-d8e5ca41.js";const o=o=>{const r=window,t=r.Ionic;if(!t||!t.config||"Object"===t.config.constructor.name)return r.Ionic=r.Ionic||{},r.Ionic.config=Object.assign(Object.assign({},r.Ionic.config),o),r.Ionic.config;console.error("ionic config was already initialized")},r=()=>{const o=window,r=o&&o.Ionic&&o.Ionic.config;return r?r.mode?r.mode:r.get("mode"):"md"};export{r as getMode,o as setupConfig}