(function(){"use strict";var t={98:function(t,n,l){var e=l(963),a=l(252),u=l(577),o=l.p+"img/6439010002.282a90a8.jpg";const r=(0,a._)("img",{alt:"Vue logo",src:o},null,-1),i=(0,a._)("label",{for:""},"กรุณากรอกชื่อเล่น : ",-1),s=(0,a._)("br",null,null,-1),c=(0,a._)("label",{for:""},"กรุณากรอกชื่อจริง : ",-1),p=(0,a._)("br",null,null,-1),f=(0,a._)("label",{for:""},"กรุณากรอกนามสกุล : ",-1),b=(0,a._)("br",null,null,-1),h=(0,a._)("label",{for:""},"กรุณากรอกอายุ : ",-1),g=(0,a._)("br",null,null,-1),_=(0,a._)("label",{for:""},"กรุณากรอก ว/ด/ป : ",-1),m=(0,a._)("br",null,null,-1),v=(0,a._)("label",{for:""},"กรุณากรอกสาขา : ",-1),w=(0,a._)("br",null,null,-1),y=(0,a._)("label",{for:""},"กรุณากรอกห้อง : ",-1),d=(0,a._)("br",null,null,-1),k=(0,a._)("label",{for:""},"กรุณากรอกคติประจำใจ : ",-1),x=(0,a._)("br",null,null,-1),j=(0,a._)("label",{for:""},"กรุณากรอกสถานที่เรียนต่อ : ",-1),z=(0,a._)("br",null,null,-1),I=(0,a._)("label",{for:""},"กรุณากรอกวิชาที่ไม่ชอบ : ",-1);function O(t,n,l,o,O,C){return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("h1",null,(0,u.zw)(O.firstname)+" "+(0,u.zw)(O.lastname),1),(0,a._)("button",{onClick:n[0]||(n[0]=(...t)=>C.showalert&&C.showalert(...t))},"แสดงชื่อ"),(0,a._)("button",{onClick:n[1]||(n[1]=(...t)=>C.showalert2&&C.showalert2(...t))},"แสดงชื่อ"),(0,a._)("h1",null,(0,u.zw)(O.age),1),(0,a._)("button",{onClick:n[2]||(n[2]=(...t)=>C.plus&&C.plus(...t))},"เพิ่มตัวเลข"),(0,a._)("button",{onClick:n[3]||(n[3]=(...t)=>C.minus&&C.minus(...t))},"ลดตัวเลข"),(0,a._)("button",{onClick:n[4]||(n[4]=(0,e.iM)(((...t)=>C.plus2&&C.plus2(...t)),["ctrl"]))},"เพิ่มตัวเลข +5"),(0,a._)("button",{onContextmenu:n[5]||(n[5]=(0,e.iM)(((...t)=>C.minus2&&C.minus2(...t)),["right"]))},"ลดตัวเลข -5",32),(0,a._)("form",null,[i,(0,a._)("input",{type:"text",onInput:n[6]||(n[6]=(...t)=>C.nickname3&&C.nickname3(...t))},null,32),s,c,(0,a._)("input",{type:"text",onInput:n[7]||(n[7]=(...t)=>C.firstname3&&C.firstname3(...t))},null,32),p,f,(0,a._)("input",{type:"text",onInput:n[8]||(n[8]=(...t)=>C.lastname3&&C.lastname3(...t))},null,32),b,h,(0,a._)("input",{type:"text",onInput:n[9]||(n[9]=(...t)=>C.age3&&C.age3(...t))},null,32),g,_,(0,a._)("input",{type:"text",onInput:n[10]||(n[10]=(...t)=>C.bday3&&C.bday3(...t))},null,32),m,v,(0,a._)("input",{type:"text",onInput:n[11]||(n[11]=(...t)=>C.branch3&&C.branch3(...t))},null,32),w,y,(0,a._)("input",{type:"text",onInput:n[12]||(n[12]=(...t)=>C.roomclass3&&C.roomclass3(...t))},null,32),d,k,(0,a._)("input",{type:"text",onInput:n[13]||(n[13]=(...t)=>C.quote3&&C.quote3(...t))},null,32),x,j,(0,a._)("input",{type:"text",onInput:n[14]||(n[14]=(...t)=>C.place3&&C.place3(...t))},null,32),z,I,(0,a._)("input",{type:"text",onInput:n[15]||(n[15]=(...t)=>C.subject3&&C.subject3(...t))},null,32)]),(0,a._)("h1",null,"แสดงชื่อเล่น : "+(0,u.zw)(O.nickname2),1),(0,a._)("h1",null,"แสดงชื่อจริง : "+(0,u.zw)(O.firstname2),1),(0,a._)("h1",null,"แสดงนามสกุล : "+(0,u.zw)(O.lastname2),1),(0,a._)("h1",null,"แสดงอายุ : "+(0,u.zw)(O.age),1),(0,a._)("h1",null,"แสดง ว/ด/ป : "+(0,u.zw)(O.bday),1),(0,a._)("h1",null,"แสดงสาขา : "+(0,u.zw)(O.branch),1),(0,a._)("h1",null,"แสดงห้อง : "+(0,u.zw)(O.roomclass),1),(0,a._)("h1",null,"แสดงคติประจำใจ : "+(0,u.zw)(O.quote),1),(0,a._)("h1",null,"แสดงสถานที่เรียนต่อ : "+(0,u.zw)(O.place),1),(0,a._)("h1",null,"แสดงวิชาที่ไม่ชอบ : "+(0,u.zw)(O.subject),1)],64)}var C={name:"App",data(){return{firstname:"Witsarut",lastname:"Intaboon",nickname2:"",firstname2:"",lastname2:"",age:"",bday:"",branch:"",roomclass:"",quote:"",place:"",subject:""}},methods:{showalert(){alert(this.firstname)},showalert2(){alert(this.lastname)},plus(){this.age++},minus(){this.age--},plus2(){this.age+=5},minus2(){this.age-=5},nickname3(t){console.log(t.target.value),this.nickname2=t.target.value},firstname3(t){console.log(t.target.value),this.firstname2=t.target.value},lastname3(t){console.log(t.target.value),this.lastname2=t.target.value},age3(t){console.log(t.target.value),this.age=t.target.value},bday3(t){console.log(t.target.value),this.bday=t.target.value},branch3(t){console.log(t.target.value),this.branch=t.target.value},roomclass3(t){console.log(t.target.value),this.roomclass=t.target.value},quote3(t){console.log(t.target.value),this.quote=t.target.value},place3(t){console.log(t.target.value),this.place=t.target.value},subject3(t){console.log(t.target.value),this.subject=t.target.value}}},q=l(744);const M=(0,q.Z)(C,[["render",O]]);var P=M;(0,e.ri)(P).mount("#app")}},n={};function l(e){var a=n[e];if(void 0!==a)return a.exports;var u=n[e]={exports:{}};return t[e](u,u.exports,l),u.exports}l.m=t,function(){var t=[];l.O=function(n,e,a,u){if(!e){var o=1/0;for(c=0;c<t.length;c++){e=t[c][0],a=t[c][1],u=t[c][2];for(var r=!0,i=0;i<e.length;i++)(!1&u||o>=u)&&Object.keys(l.O).every((function(t){return l.O[t](e[i])}))?e.splice(i--,1):(r=!1,u<o&&(o=u));if(r){t.splice(c--,1);var s=a();void 0!==s&&(n=s)}}return n}u=u||0;for(var c=t.length;c>0&&t[c-1][2]>u;c--)t[c]=t[c-1];t[c]=[e,a,u]}}(),function(){l.d=function(t,n){for(var e in n)l.o(n,e)&&!l.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){l.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){l.p=""}(),function(){var t={143:0};l.O.j=function(n){return 0===t[n]};var n=function(n,e){var a,u,o=e[0],r=e[1],i=e[2],s=0;if(o.some((function(n){return 0!==t[n]}))){for(a in r)l.o(r,a)&&(l.m[a]=r[a]);if(i)var c=i(l)}for(n&&n(e);s<o.length;s++)u=o[s],l.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return l.O(c)},e=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=l.O(void 0,[998],(function(){return l(98)}));e=l.O(e)})();
//# sourceMappingURL=app.7a4754cd.js.map