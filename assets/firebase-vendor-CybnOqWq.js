var e=()=>void 0,t={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},n=function(e,t){if(!e)throw r(t)},r=function(e){return Error(`Firebase Database (`+t.SDK_VERSION+`) INTERNAL ASSERT FAILED: `+e)},i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)==55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},a=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[n++],o=e[n++],s=e[n++],c=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join(``)},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,get ENCODED_VALS(){return this.ENCODED_VALS_BASE+`+/=`},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+`-_.`},HAS_NATIVE_SUPPORT:typeof atob==`function`,encodeByteArray(e,t){if(!Array.isArray(e))throw Error(`encodeByteArray takes an array as a parameter`);this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(i&3)<<4|o>>4,d=(o&15)<<2|c>>6,f=c&63;s||(f=64,a||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join(``)},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;let o=t<e.length?n[e.charAt(t)]:64;++t;let c=t<e.length?n[e.charAt(t)]:64;if(++t,i==null||a==null||o==null||c==null)throw new s;let l=i<<2|a>>4;if(r.push(l),o!==64){let e=a<<4&240|o>>2;if(r.push(e),c!==64){let e=o<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=class extends Error{constructor(){super(...arguments),this.name=`DecodeBase64StringError`}},c=function(e){let t=i(e);return o.encodeByteArray(t,!0)},l=function(e){return c(e).replace(/\./g,``)},u=function(e){try{return o.decodeString(e,!0)}catch(e){console.error(`base64Decode failed: `,e)}return null};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:let n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(let n in t)!t.hasOwnProperty(n)||!p(n)||(e[n]=f(e[n],t[n]));return e}function p(e){return e!==`__proto__`}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ee(){if(typeof self<`u`)return self;if(typeof window<`u`)return window;if(typeof global<`u`)return global;throw Error(`Unable to locate global object.`)}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var te=()=>ee().__FIREBASE_DEFAULTS__,ne=()=>{if(typeof process>`u`)return;let e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},re=()=>{if(typeof document>`u`)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&u(e[1]);return t&&JSON.parse(t)},ie=()=>{try{return e()||te()||ne()||re()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ae=e=>ie()?.emulatorHosts?.[e],oe=e=>{let t=ae(e);if(!t)return;let n=t.lastIndexOf(`:`);if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return t[0]===`[`?[t.substring(1,n-1),r]:[t.substring(0,n),r]},se=()=>ie()?.config,ce=e=>ie()?.[`_${e}`],le=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e==`function`&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}};
/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ue(e){try{return(e.startsWith(`http://`)||e.startsWith(`https://`)?new URL(e).hostname:e).endsWith(`.cloudworkstations.dev`)}catch{return!1}}async function de(e){return(await fetch(e,{credentials:`include`})).ok}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function fe(e,t){if(e.uid)throw Error(`The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.`);let n={alg:`none`,type:`JWT`},r=t||`demo-project`,i=e.iat||0,a=e.sub||e.user_id;if(!a)throw Error(`mockUserToken must contain 'sub' or 'user_id' field!`);let o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:`custom`,identities:{}},...e};return[l(JSON.stringify(n)),l(JSON.stringify(o)),``].join(`.`)}var pe={};function me(){let e={prod:[],emulator:[]};for(let t of Object.keys(pe))pe[t]?e.emulator.push(t):e.prod.push(t);return e}function he(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement(`div`),t.setAttribute(`id`,e),n=!0),{created:n,element:t}}var ge=!1;function _e(e,t){if(typeof window>`u`||typeof document>`u`||!ue(window.location.host)||pe[e]===t||pe[e]||ge)return;pe[e]=t;function n(e){return`__firebase__banner__${e}`}let r=`__firebase__banner`,i=me().prod.length>0;function a(){let e=document.getElementById(r);e&&e.remove()}function o(e){e.style.display=`flex`,e.style.background=`#7faaf0`,e.style.position=`fixed`,e.style.bottom=`5px`,e.style.left=`5px`,e.style.padding=`.5em`,e.style.borderRadius=`5px`,e.style.alignItems=`center`}function s(e,t){e.setAttribute(`width`,`24`),e.setAttribute(`id`,t),e.setAttribute(`height`,`24`),e.setAttribute(`viewBox`,`0 0 24 24`),e.setAttribute(`fill`,`none`),e.style.marginLeft=`-6px`}function c(){let e=document.createElement(`span`);return e.style.cursor=`pointer`,e.style.marginLeft=`16px`,e.style.fontSize=`24px`,e.innerHTML=` &times;`,e.onclick=()=>{ge=!0,a()},e}function l(e,t){e.setAttribute(`id`,t),e.innerText=`Learn more`,e.href=`https://firebase.google.com/docs/studio/preview-apps#preview-backend`,e.setAttribute(`target`,`__blank`),e.style.paddingLeft=`5px`,e.style.textDecoration=`underline`}function u(){let e=he(r),t=n(`text`),a=document.getElementById(t)||document.createElement(`span`),u=n(`learnmore`),d=document.getElementById(u)||document.createElement(`a`),f=n(`preprendIcon`),p=document.getElementById(f)||document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);if(e.created){let t=e.element;o(t),l(d,u);let n=c();s(p,f),t.append(p,a,d,n),document.body.appendChild(t)}i?(a.innerText=`Preview backend disconnected.`,p.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(p.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,a.innerText=`Preview backend running in this workspace.`),a.setAttribute(`id`,t)}document.readyState===`loading`?window.addEventListener(`DOMContentLoaded`,u):u()}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function m(){return typeof navigator<`u`&&typeof navigator.userAgent==`string`?navigator.userAgent:``}function ve(){return typeof window<`u`&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function ye(){return typeof navigator<`u`&&navigator.userAgent===`Cloudflare-Workers`}function be(){let e=typeof chrome==`object`?chrome.runtime:typeof browser==`object`?browser.runtime:void 0;return typeof e==`object`&&e.id!==void 0}function xe(){return typeof navigator==`object`&&navigator.product===`ReactNative`}function Se(){let e=m();return e.indexOf(`MSIE `)>=0||e.indexOf(`Trident/`)>=0}function h(){return t.NODE_CLIENT===!0||t.NODE_ADMIN===!0}function Ce(){try{return typeof indexedDB==`object`}catch{return!1}}function we(){return new Promise((e,t)=>{try{let n=!0,r=`validate-browser-context-for-indexeddb-analytics-module`,i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||``)}}catch(e){t(e)}})}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Te=`FirebaseError`,Ee=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Te,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,De.prototype.create)}},De=class{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Oe(i,n):`Error`,o=`${this.serviceName}: ${a} (${r}).`;return new Ee(r,o,n)}};function Oe(e,t){return e.replace(ke,(e,n)=>{let r=t[n];return r==null?`<${n}?>`:String(r)})}var ke=/\{\$([^}]+)}/g;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ae(e){return JSON.parse(e)}function g(e){return JSON.stringify(e)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var je=function(e){let t={},n={},r={},i=``;try{let a=e.split(`.`);t=Ae(u(a[0])||``),n=Ae(u(a[1])||``),i=a[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},Me=function(e){let t=je(e).claims;return!!t&&typeof t==`object`&&t.hasOwnProperty(`iat`)},Ne=function(e){let t=je(e).claims;return typeof t==`object`&&t.admin===!0};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function _(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Pe(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Fe(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ie(e,t,n){let r={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Le(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],a=t[i];if(Re(n)&&Re(a)){if(!Le(n,a))return!1}else if(n!==a)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function Re(e){return typeof e==`object`&&!!e}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ze(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+`=`+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+`=`+encodeURIComponent(r));return t.length?`&`+t.join(`&`):``}function Be(e){let t={};return e.replace(/^\?/,``).split(`&`).forEach(e=>{if(e){let[n,r]=e.split(`=`);t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function Ve(e){let t=e.indexOf(`?`);if(!t)return``;let n=e.indexOf(`#`,t);return e.substring(t,n>0?n:void 0)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var He=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||=0;let n=this.W_;if(typeof e==`string`)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=(t<<1|t>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],a=this.chain_[2],o=this.chain_[3],s=this.chain_[4],c,l;for(let e=0;e<80;e++){e<40?e<20?(c=o^i&(a^o),l=1518500249):(c=i^a^o,l=1859775393):e<60?(c=i&a|o&(i|a),l=2400959708):(c=i^a^o,l=3395469782);let t=(r<<5|r>>>27)+c+s+l+n[e]&4294967295;s=o,o=a,a=(i<<30|i>>>2)&4294967295,i=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+o&4294967295,this.chain_[4]=this.chain_[4]+s&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);let n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;for(;r<t;){if(a===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e==`string`){for(;r<t;)if(i[a]=e.charCodeAt(r),++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){let e=[],t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}};function Ue(e,t){let n=new We(e,t);return n.subscribe.bind(n)}var We=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw Error(`Missing Observer.`);r=Ge(e,[`next`,`error`,`complete`])?e:{next:e,error:t,complete:n},r.next===void 0&&(r.next=Ke),r.error===void 0&&(r.error=Ke),r.complete===void 0&&(r.complete=Ke);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],--this.observerCount,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(e){typeof console<`u`&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Ge(e,t){if(typeof e!=`object`||!e)return!1;for(let n of t)if(n in e&&typeof e[n]==`function`)return!0;return!1}function Ke(){}function qe(e,t){return`${e} failed: ${t} argument `}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Je=function(e){let t=[],r=0;for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);if(a>=55296&&a<=56319){let t=a-55296;i++,n(i<e.length,`Surrogate pair missing trail surrogate.`);let r=e.charCodeAt(i)-56320;a=65536+(t<<10)+r}a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=a&63|128):a<65536?(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=a&63|128):(t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=a&63|128)}return t},Ye=function(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function v(e){return e&&e._delegate?e._delegate:e}var Xe=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode=`LAZY`,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}},Ze=`[DEFAULT]`,Qe=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new le;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}else if(n)return null;else throw Error(`Service ${this.name} is not available`)}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(et(e))try{this.getOrInitializeService({instanceIdentifier:Ze})}catch{}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch{}}}}clearInstance(e=Ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>`INTERNAL`in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>`_delete`in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ze){return this.instances.has(e)}getOptions(e=Ze){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);n===i&&t.resolve(r)}return r}onInit(e,t){let n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);let i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:$e(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ze){return this.component?this.component.multipleInstances?e:Ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!==`EXPLICIT`}};function $e(e){return e===Ze?void 0:e}function et(e){return e.instantiationMode===`EAGER`}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var tt=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Qe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}},nt=[],y;(function(e){e[e.DEBUG=0]=`DEBUG`,e[e.VERBOSE=1]=`VERBOSE`,e[e.INFO=2]=`INFO`,e[e.WARN=3]=`WARN`,e[e.ERROR=4]=`ERROR`,e[e.SILENT=5]=`SILENT`})(y||={});var rt={debug:y.DEBUG,verbose:y.VERBOSE,info:y.INFO,warn:y.WARN,error:y.ERROR,silent:y.SILENT},it=y.INFO,at={[y.DEBUG]:`log`,[y.VERBOSE]:`log`,[y.INFO]:`info`,[y.WARN]:`warn`,[y.ERROR]:`error`},ot=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=at[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)},st=class{constructor(e){this.name=e,this._logLevel=it,this._logHandler=ot,this._userLogHandler=null,nt.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in y))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e==`string`?rt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!=`function`)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,y.DEBUG,...e),this._logHandler(this,y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,y.VERBOSE,...e),this._logHandler(this,y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,y.INFO,...e),this._logHandler(this,y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,y.WARN,...e),this._logHandler(this,y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,y.ERROR,...e),this._logHandler(this,y.ERROR,...e)}},ct=(e,t)=>t.some(t=>e instanceof t),lt,ut;function dt(){return lt||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function ft(){return ut||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var pt=new WeakMap,mt=new WeakMap,ht=new WeakMap,gt=new WeakMap,_t=new WeakMap;function vt(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(wt(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return t.then(t=>{t instanceof IDBCursor&&pt.set(t,e)}).catch(()=>{}),_t.set(t,e),t}function yt(e){if(mt.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});mt.set(e,t)}var bt={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return mt.get(e);if(t===`objectStoreNames`)return e.objectStoreNames||ht.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function xt(e){bt=e(bt)}function St(e){return e===IDBDatabase.prototype.transaction&&!(`objectStoreNames`in IDBTransaction.prototype)?function(t,...n){let r=e.call(Tt(this),t,...n);return ht.set(r,t.sort?t.sort():[t]),wt(r)}:ft().includes(e)?function(...t){return e.apply(Tt(this),t),wt(pt.get(this))}:function(...t){return wt(e.apply(Tt(this),t))}}function Ct(e){return typeof e==`function`?St(e):(e instanceof IDBTransaction&&yt(e),ct(e,dt())?new Proxy(e,bt):e)}function wt(e){if(e instanceof IDBRequest)return vt(e);if(gt.has(e))return gt.get(e);let t=Ct(e);return t!==e&&(gt.set(e,t),_t.set(t,e)),t}var Tt=e=>_t.get(e);function Et(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=wt(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(wt(o.result),e.oldVersion,e.newVersion,wt(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var Dt=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],Ot=[`put`,`add`,`delete`,`clear`],kt=new Map;function At(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(kt.get(t))return kt.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=Ot.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Dt.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return kt.set(t,a),a}xt(e=>({...e,get:(t,n,r)=>At(t,n)||e.get(t,n,r),has:(t,n)=>!!At(t,n)||e.has(t,n)}));
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jt=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Mt(e)){let t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(` `)}};function Mt(e){return e.getComponent()?.type===`VERSION`}var Nt=`@firebase/app`,Pt=`0.14.3`,b=new st(`@firebase/app`),Ft=`@firebase/app-compat`,It=`@firebase/analytics-compat`,Lt=`@firebase/analytics`,Rt=`@firebase/app-check-compat`,zt=`@firebase/app-check`,Bt=`@firebase/auth`,Vt=`@firebase/auth-compat`,Ht=`@firebase/database`,Ut=`@firebase/data-connect`,Wt=`@firebase/database-compat`,Gt=`@firebase/functions`,Kt=`@firebase/functions-compat`,qt=`@firebase/installations`,Jt=`@firebase/installations-compat`,Yt=`@firebase/messaging`,Xt=`@firebase/messaging-compat`,Zt=`@firebase/performance`,Qt=`@firebase/performance-compat`,$t=`@firebase/remote-config`,en=`@firebase/remote-config-compat`,tn=`@firebase/storage`,nn=`@firebase/storage-compat`,rn=`@firebase/firestore`,an=`@firebase/ai`,on=`@firebase/firestore-compat`,sn=`firebase`,cn=`12.3.0`,ln=`[DEFAULT]`,un={[Nt]:`fire-core`,[Ft]:`fire-core-compat`,[Lt]:`fire-analytics`,[It]:`fire-analytics-compat`,[zt]:`fire-app-check`,[Rt]:`fire-app-check-compat`,[Bt]:`fire-auth`,[Vt]:`fire-auth-compat`,[Ht]:`fire-rtdb`,[Ut]:`fire-data-connect`,[Wt]:`fire-rtdb-compat`,[Gt]:`fire-fn`,[Kt]:`fire-fn-compat`,[qt]:`fire-iid`,[Jt]:`fire-iid-compat`,[Yt]:`fire-fcm`,[Xt]:`fire-fcm-compat`,[Zt]:`fire-perf`,[Qt]:`fire-perf-compat`,[$t]:`fire-rc`,[en]:`fire-rc-compat`,[tn]:`fire-gcs`,[nn]:`fire-gcs-compat`,[rn]:`fire-fst`,[on]:`fire-fst-compat`,[an]:`fire-vertex`,"fire-js":`fire-js`,[sn]:`fire-js-all`},dn=new Map,fn=new Map,pn=new Map;function mn(e,t){try{e.container.addComponent(t)}catch(n){b.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function hn(e){let t=e.name;if(pn.has(t))return b.debug(`There were multiple attempts to register component ${t}.`),!1;pn.set(t,e);for(let t of dn.values())mn(t,e);for(let t of fn.values())mn(t,e);return!0}function gn(e,t){let n=e.container.getProvider(`heartbeat`).getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function x(e){return e==null?!1:e.settings!==void 0}var _n=new De(`app`,`Firebase`,{"no-app":`No Firebase App '{$appName}' has been created - call initializeApp() first`,"bad-app-name":`Illegal App name: '{$appName}'`,"duplicate-app":`Firebase App named '{$appName}' already exists with different options or config`,"app-deleted":`Firebase App named '{$appName}' already deleted`,"server-app-deleted":`Firebase Server App has been deleted`,"no-options":`Need to provide options, when not being deployed to hosting via source.`,"invalid-app-argument":`firebase.{$appName}() takes either no argument or a Firebase App instance.`,"invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":`Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.`,"idb-get":`Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.`,"idb-set":`Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.`,"idb-delete":`Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.`,"finalization-registry-not-supported":`FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.`,"invalid-server-app-environment":`FirebaseServerApp is not for use in browser environments.`}),vn=class{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Xe(`app`,()=>this,`PUBLIC`))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create(`app-deleted`,{appName:this._name})}},yn=cn;function bn(e,t={}){let n=e;typeof t!=`object`&&(t={name:t});let r={name:ln,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!=`string`||!i)throw _n.create(`bad-app-name`,{appName:String(i)});if(n||=se(),!n)throw _n.create(`no-options`);let a=dn.get(i);if(a){if(Le(n,a.options)&&Le(r,a.config))return a;throw _n.create(`duplicate-app`,{appName:i})}let o=new tt(i);for(let e of pn.values())o.addComponent(e);let s=new vn(n,r,o);return dn.set(i,s),s}function xn(e=ln){let t=dn.get(e);if(!t&&e===`[DEFAULT]`&&se())return bn();if(!t)throw _n.create(`no-app`,{appName:e});return t}function Sn(e,t,n){let r=un[e]??e;n&&(r+=`-${n}`);let i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){let e=[`Unable to register library "${r}" with version "${t}":`];i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&e.push(`and`),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),b.warn(e.join(` `));return}hn(new Xe(`${r}-version`,()=>({library:r,version:t}),`VERSION`))}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Cn=`firebase-heartbeat-database`,wn=1,Tn=`firebase-heartbeat-store`,En=null;function Dn(){return En||=Et(Cn,wn,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Tn)}catch(e){console.warn(e)}}}}).catch(e=>{throw _n.create(`idb-open`,{originalErrorMessage:e.message})}),En}async function On(e){try{let t=(await Dn()).transaction(Tn),n=await t.objectStore(Tn).get(An(e));return await t.done,n}catch(e){if(e instanceof Ee)b.warn(e.message);else{let t=_n.create(`idb-get`,{originalErrorMessage:e?.message});b.warn(t.message)}}}async function kn(e,t){try{let n=(await Dn()).transaction(Tn,`readwrite`);await n.objectStore(Tn).put(t,An(e)),await n.done}catch(e){if(e instanceof Ee)b.warn(e.message);else{let t=_n.create(`idb-set`,{originalErrorMessage:e?.message});b.warn(t.message)}}}function An(e){return`${e.name}!${e.options.appId}`}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jn=1024,Mn=30,Nn=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider(`app`).getImmediate();this._storage=new In(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{let e=this.container.getProvider(`platform-logger`).getImmediate().getPlatformInfoString(),t=Pn();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>Mn){let e=Rn(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){b.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return``;let e=Pn(),{heartbeatsToSend:t,unsentEntries:n}=Fn(this._heartbeatsCache.heartbeats),r=l(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return b.warn(e),``}}};function Pn(){return new Date().toISOString().substring(0,10)}function Fn(e,t=jn){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Ln(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ln(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var In=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ce()?we().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let e=await On(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return kn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return kn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}};function Ln(e){return l(JSON.stringify({version:2,heartbeats:e})).length}function Rn(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function zn(e){hn(new Xe(`platform-logger`,e=>new jt(e),`PRIVATE`)),hn(new Xe(`heartbeat`,e=>new Nn(e),`PRIVATE`)),Sn(Nt,Pt,e),Sn(Nt,Pt,`esm2020`),Sn(`fire-js`,``)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
zn(``),Sn(`firebase`,`12.3.0`,`app`);var Bn=`@firebase/database`,Vn=`1.1.0`,Hn=``;function Un(e){Hn=e}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Wn=class{constructor(e){this.domStorage_=e,this.prefix_=`firebase:`}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),g(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ae(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}},Gn=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return _(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}},Kn=function(e){try{if(typeof window<`u`&&window[e]!==void 0){let t=window[e];return t.setItem(`firebase:sentinel`,`cache`),t.removeItem(`firebase:sentinel`),new Wn(t)}}catch{}return new Gn},qn=Kn(`localStorage`),Jn=Kn(`sessionStorage`),Yn=new st(`@firebase/database`),Xn=(function(){let e=1;return function(){return e++}})(),Zn=function(e){let t=Je(e),n=new He;n.update(t);let r=n.digest();return o.encodeByteArray(r)},Qn=function(...e){let t=``;for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)||r&&typeof r==`object`&&typeof r.length==`number`?t+=Qn.apply(null,r):typeof r==`object`?t+=g(r):t+=r,t+=` `}return t},$n=null,er=!0,tr=function(e,t){n(!t||e===!0||e===!1,`Can't turn on custom loggers persistently.`),e===!0?(Yn.logLevel=y.VERBOSE,$n=Yn.log.bind(Yn),t&&Jn.set(`logging_enabled`,!0)):typeof e==`function`?$n=e:($n=null,Jn.remove(`logging_enabled`))},S=function(...e){if(er===!0&&(er=!1,$n===null&&Jn.get(`logging_enabled`)===!0&&tr(!0)),$n){let t=Qn.apply(null,e);$n(t)}},nr=function(e){return function(...t){S(e,...t)}},rr=function(...e){let t=`FIREBASE INTERNAL ERROR: `+Qn(...e);Yn.error(t)},C=function(...e){let t=`FIREBASE FATAL ERROR: ${Qn(...e)}`;throw Yn.error(t),Error(t)},w=function(...e){let t=`FIREBASE WARNING: `+Qn(...e);Yn.warn(t)},ir=function(){typeof window<`u`&&window.location&&window.location.protocol&&window.location.protocol.indexOf(`https:`)!==-1&&w(`Insecure Firebase access from a secure page. Please use https in calls to new Firebase().`)},ar=function(e){return typeof e==`number`&&(e!==e||e===1/0||e===-1/0)},or=function(e){if(h()||document.readyState===`complete`)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,10);return}t||(t=!0,e())};document.addEventListener?(document.addEventListener(`DOMContentLoaded`,n,!1),window.addEventListener(`load`,n,!1)):document.attachEvent&&(document.attachEvent(`onreadystatechange`,()=>{document.readyState===`complete`&&n()}),window.attachEvent(`onload`,n))}},sr=`[MIN_NAME]`,cr=`[MAX_NAME]`,lr=function(e,t){if(e===t)return 0;if(e===sr||t===cr)return-1;if(t===sr||e===cr)return 1;{let n=xr(e),r=xr(t);return n===null?r===null&&e<t?-1:1:r===null?-1:n-r===0?e.length-t.length:n-r}},ur=function(e,t){return e===t?0:e<t?-1:1},dr=function(e,t){if(t&&e in t)return t[e];throw Error(`Missing required key (`+e+`) in object: `+g(t))},fr=function(e){if(typeof e!=`object`||!e)return g(e);let t=[];for(let n in e)t.push(n);t.sort();let n=`{`;for(let r=0;r<t.length;r++)r!==0&&(n+=`,`),n+=g(t[r]),n+=`:`,n+=fr(e[t[r]]);return n+=`}`,n},pr=function(e,t){let n=e.length;if(n<=t)return[e];let r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function T(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}var mr=function(e){n(!ar(e),`Invalid JSON number`);let t=1023,r,i,a,o,s;e===0?(i=0,a=0,r=1/e==-1/0?1:0):(r=e<0,e=Math.abs(e),e>=2**(1-t)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=o+t,a=Math.round(e*2**(52-o)-2**52)):(i=0,a=Math.round(e/2**(1-t-52))));let c=[];for(s=52;s;--s)c.push(a%2?1:0),a=Math.floor(a/2);for(s=11;s;--s)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();let l=c.join(``),u=``;for(s=0;s<64;s+=8){let e=parseInt(l.substr(s,8),2).toString(16);e.length===1&&(e=`0`+e),u+=e}return u.toLowerCase()},hr=function(){return!!(typeof window==`object`&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gr=function(){return typeof Windows==`object`&&typeof Windows.UI==`object`};function _r(e,t){let n=`Unknown Error`;e===`too_big`?n=`The data requested exceeds the maximum size that can be accessed with a single request.`:e===`permission_denied`?n=`Client doesn't have permission to access the desired data.`:e===`unavailable`&&(n=`The service is unavailable`);let r=Error(e+` at `+t._path.toString()+`: `+n);return r.code=e.toUpperCase(),r}var vr=RegExp(`^-?(0*)\\d{1,10}$`),yr=-2147483648,br=2147483647,xr=function(e){if(vr.test(e)){let t=Number(e);if(t>=yr&&t<=br)return t}return null},Sr=function(e){try{e()}catch(e){setTimeout(()=>{let t=e.stack||``;throw w(`Exception was thrown by user callback.`,t),e},0)}},Cr=function(){return(typeof window==`object`&&window.navigator&&window.navigator.userAgent||``).search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wr=function(e,t){let n=setTimeout(e,t);return typeof n==`number`&&typeof Deno<`u`&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n==`object`&&n.unref&&n.unref(),n},Tr=class{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,x(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(e=>this.appCheck=e)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){w(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}},Er=class{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&e.code===`auth/token-not-initialized`?(S(`Got auth/token-not-initialized error.  Treating as null token.`),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e=`Provided authentication credentials for the app named "`+this.appName_+`" are invalid. This usually indicates your app was not initialized correctly. `;`credential`in this.firebaseOptions_?e+=`Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.`:`serviceAccount`in this.firebaseOptions_?e+=`Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.`:e+=`Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.`,w(e)}},Dr=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};Dr.OWNER=`owner`;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Or=`5`,kr=`v`,Ar=`s`,jr=`r`,Mr=`f`,Nr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pr=`ls`,Fr=`p`,Ir=`ac`,Lr=`websocket`,Rr=`long_polling`,zr=class{constructor(e,t,n,r,i=!1,a=``,o=!1,s=!1,c=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=a,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=s,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(`.`)+1),this.internalHost=qn.get(`host:`+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)===`s-`}isCustomHost(){return this._domain!==`firebaseio.com`&&this._domain!==`firebaseio-demo.com`}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qn.set(`host:`+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+=`<`+this.persistenceKey+`>`),e}toURLString(){let e=this.secure?`https://`:`http://`,t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:``;return`${e}${this.host}/${t}`}};function Br(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Vr(e,t,r){n(typeof t==`string`,`typeof type must == string`),n(typeof r==`object`,`typeof params must == object`);let i;if(t===Lr)i=(e.secure?`wss://`:`ws://`)+e.internalHost+`/.ws?`;else if(t===Rr)i=(e.secure?`https://`:`http://`)+e.internalHost+`/.lp?`;else throw Error(`Unknown connection type: `+t);Br(e)&&(r.ns=e.namespace);let a=[];return T(r,(e,t)=>{a.push(e+`=`+t)}),i+a.join(`&`)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Hr=class{constructor(){this.counters_={}}incrementCounter(e,t=1){_(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return d(this.counters_)}},Ur={},Wr={};function Gr(e){let t=e.toString();return Ur[t]||(Ur[t]=new Hr),Ur[t]}function Kr(e,t){let n=e.toString();return Wr[n]||(Wr[n]=t()),Wr[n]}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qr=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Sr(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&=(this.onClose(),null);break}this.currentResponseNum++}}},Jr=`start`,Yr=`close`,Xr=`pLPCommand`,Zr=`pRTLPCB`,Qr=`id`,$r=`pw`,ei=`ser`,ti=`cb`,ni=`dframe`,ri=1870,ii=30,ai=ri-ii,oi=25e3,si=3e4,ci=class e{constructor(e,t,n,r,i,a,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=a,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=nr(e),this.stats_=Gr(t),this.urlFn=e=>(this.appCheckToken&&(e[Ir]=this.appCheckToken),Vr(t,Rr,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new qr(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_(`Timed out trying to connect.`),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(si)),or(()=>{if(this.isClosed_)return;this.scriptTagHolder=new li((...e)=>{let[t,n,r,i,a]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&=(clearTimeout(this.connectTimeoutTimer_),null),this.everConnected_=!0,t===Jr)this.id=n,this.password=r;else if(t===Yr)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error(`Unrecognized command received: `+t)},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[Jr]=`t`,e[ei]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[ti]=this.scriptTagHolder.uniqueCallbackIdentifier),e[kr]=Or,this.transportSessionId&&(e[Ar]=this.transportSessionId),this.lastSessionId&&(e[Pr]=this.lastSessionId),this.applicationId&&(e[Fr]=this.applicationId),this.appCheckToken&&(e[Ir]=this.appCheckToken),typeof location<`u`&&location.hostname&&Nr.test(location.hostname)&&(e[jr]=Mr);let t=this.urlFn(e);this.log_(`Connecting via long-poll to `+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){e.forceAllow_=!0}static forceDisallow(){e.forceDisallow_=!0}static isAvailable(){return h()?!1:e.forceAllow_?!0:!e.forceDisallow_&&typeof document<`u`&&document.createElement!=null&&!hr()&&!gr()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&=(this.scriptTagHolder.close(),null),this.myDisconnFrame&&=(document.body.removeChild(this.myDisconnFrame),null),this.connectTimeoutTimer_&&=(clearTimeout(this.connectTimeoutTimer_),null)}onClosed_(){this.isClosed_||(this.log_(`Longpoll is closing itself`),this.shutdown_(),this.onDisconnect_&&=(this.onDisconnect_(this.everConnected_),null))}close(){this.isClosed_||(this.log_(`Longpoll is being closed.`),this.shutdown_())}send(e){let t=g(e);this.bytesSent+=t.length,this.stats_.incrementCounter(`bytes_sent`,t.length);let n=c(t),r=pr(n,ai);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(h())return;this.myDisconnFrame=document.createElement(`iframe`);let n={};n[ni]=`t`,n[Qr]=e,n[$r]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display=`none`,document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=g(e).length;this.bytesReceived+=t,this.stats_.incrementCounter(`bytes_received`,t)}},li=class e{constructor(t,n,r,i){if(this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0,h())this.commandCB=t,this.onMessageCB=n;else{this.uniqueCallbackIdentifier=Xn(),window[Xr+this.uniqueCallbackIdentifier]=t,window[Zr+this.uniqueCallbackIdentifier]=n,this.myIFrame=e.createIFrame_();let r=``;this.myIFrame.src&&this.myIFrame.src.substr(0,11)===`javascript:`&&(r=`<script>document.domain="`+document.domain+`";<\/script>`);let i=`<html><body>`+r+`</body></html>`;try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){S(`frame writing exception`),e.stack&&S(e.stack),S(e)}}}static createIFrame_(){let e=document.createElement(`iframe`);if(e.style.display=`none`,document.body){document.body.appendChild(e);try{e.contentWindow.document||S(`No IE domain setting required`)}catch{e.src=`javascript:void((function(){document.open();document.domain='`+document.domain+`';document.close();})())`}}else throw`Document body has not initialized. Wait to initialize Firebase until after the document is ready.`;return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent=``,setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},0));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;let e={};e[Qr]=this.myID,e[$r]=this.myPW,e[ei]=this.currentSerial;let t=this.urlFn(e),n=``,r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ii+n.length<=ri;){let e=this.pendingSegs.shift();n=n+`&seg`+r+`=`+e.seg+`&ts`+r+`=`+e.ts+`&d`+r+`=`+e.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(oi));this.addTag(e,()=>{clearTimeout(r),n()})}addTag(e,t){h()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement(`script`);n.type=`text/javascript`,n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;(!e||e===`loaded`||e===`complete`)&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{S(`Long-poll script failed to load: `+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},1)}},ui=16384,di=45e3,fi=null;typeof MozWebSocket<`u`?fi=MozWebSocket:typeof WebSocket<`u`&&(fi=WebSocket);var pi=class e{constructor(t,n,r,i,a,o,s){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=nr(this.connId),this.stats_=Gr(n),this.connURL=e.connectionURL_(n,o,s,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,t,n,r,i){let a={};return a[kr]=Or,!h()&&typeof location<`u`&&location.hostname&&Nr.test(location.hostname)&&(a[jr]=Mr),t&&(a[Ar]=t),n&&(a[Pr]=n),r&&(a[Ir]=r),i&&(a[Fr]=i),Vr(e,Lr,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_(`Websocket connecting to `+this.connURL),this.everConnected_=!1,qn.set(`previous_websocket_failure`,!0);try{let e;if(h()){let t=this.nodeAdmin?`AdminNode`:`Node`;e={headers:{"User-Agent":`Firebase/${Or}/${Hn}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||``}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers[`X-Firebase-AppCheck`]=this.appCheckToken);let n={},r=this.connURL.indexOf(`wss://`)===0?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new fi(this.connURL,[],e)}catch(e){this.log_(`Error instantiating WebSocket.`);let t=e.message||e.data;t&&this.log_(t),this.onClosed_();return}this.mySock.onopen=()=>{this.log_(`Websocket connected.`),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_(`Websocket connection was disconnected.`),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_(`WebSocket error.  Closing connection.`);let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){e.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<`u`&&navigator.userAgent){let e=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);e&&e.length>1&&parseFloat(e[1])<4.4&&(t=!0)}return!t&&fi!==null&&!e.forceDisallow_}static previouslyFailed(){return qn.isInMemoryStorage||qn.get(`previous_websocket_failure`)===!0}markConnectionHealthy(){qn.remove(`previous_websocket_failure`)}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join(``);this.frames=null;let t=Ae(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(n(this.frames===null,`We already have a frame buffer`),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter(`bytes_received`,t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);e!==null&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=g(e);this.bytesSent+=t.length,this.stats_.incrementCounter(`bytes_sent`,t.length);let n=pr(t,ui);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&=(clearInterval(this.keepaliveTimer),null),this.mySock&&=(this.mySock.close(),null)}onClosed_(){this.isClosed_||(this.log_(`WebSocket is closing itself`),this.shutdown_(),this.onDisconnect&&=(this.onDisconnect(this.everConnected_),null))}close(){this.isClosed_||(this.log_(`WebSocket is being closed`),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_(`0`),this.resetKeepAlive()},Math.floor(di))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_(`Exception thrown from WebSocket.send():`,e.message||e.data,`Closing connection.`),setTimeout(this.onClosed_.bind(this),0)}}};pi.responsesRequiredToBeHealthy=2,pi.healthyTimeout=3e4;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var mi=class e{static get ALL_TRANSPORTS(){return[ci,pi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(t){let n=pi&&pi.isAvailable(),r=n&&!pi.previouslyFailed();if(t.webSocketOnly&&(n||w(`wss:// URL used, but browser isn't known to support websockets.  Trying anyway.`),r=!0),r)this.transports_=[pi];else{let t=this.transports_=[];for(let n of e.ALL_TRANSPORTS)n&&n.isAvailable()&&t.push(n);e.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error(`No transports available`)}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};mi.globalTransportInitialized_=!1;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hi=6e4,gi=5e3,_i=10*1024,vi=100*1024,yi=`t`,bi=`d`,xi=`s`,Si=`r`,Ci=`e`,wi=`o`,Ti=`a`,Ei=`n`,Di=`p`,Oi=`h`,ki=class{constructor(e,t,n,r,i,a,o,s,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=a,this.onReady_=o,this.onDisconnect_=s,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=nr(`c:`+this.id+`:`),this.transportManager_=new mi(t),this.log_(`Connection created`),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},0);let r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=wr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vi?(this.log_(`Connection exceeded healthy timeout but has received `+this.conn_.bytesReceived+` bytes.  Marking connection healthy.`),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_i?this.log_(`Connection exceeded healthy timeout but has sent `+this.conn_.bytesSent+` bytes.  Leaving connection alive.`):(this.log_(`Closing unhealthy connection after timeout.`),this.close()))},Math.floor(r)))}nextTransportId_(){return`c:`+this.id+`:`+ this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_(`Secondary connection lost.`),this.onSecondaryConnectionLost_()):this.log_(`closing an old connection`)}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_(`message on old connection`))}}sendRequest(e){let t={t:`d`,d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_(`cleaning up and promoting a connection: `+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yi in e){let t=e[yi];t===Ti?this.upgradeIfSecondaryHealthy_():t===Si?(this.log_(`Got a reset on secondary, closing it`),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===wi&&(this.log_(`got pong on secondary.`),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=dr(`t`,e),n=dr(`d`,e);if(t===`c`)this.onSecondaryControl_(n);else if(t===`d`)this.pendingDataMessages.push(n);else throw Error(`Unknown protocol layer: `+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_(`Secondary connection is healthy.`),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_(`sending ping on secondary.`),this.secondaryConn_.send({t:`c`,d:{t:Di,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_(`sending client ack on secondary`),this.secondaryConn_.send({t:`c`,d:{t:Ti,d:{}}}),this.log_(`Ending transmission on primary`),this.conn_.send({t:`c`,d:{t:Ei,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=dr(`t`,e),n=dr(`d`,e);t===`c`?this.onControl_(n):t===`d`&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_(`Primary connection is healthy.`),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=dr(yi,e);if(bi in e){let n=e[bi];if(t===Oi){let e={...n};this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===Ei){this.log_(`recvd end transmission on primary`),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===xi?this.onConnectionShutdown_(n):t===Si?this.onReset_(n):t===Ci?rr(`Server Error: `+n):t===wi?(this.log_(`got pong on primary.`),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rr(`Unknown control packet command: `+t)}}onHandshake_(e){let t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Or!==n&&w(`Protocol version mismatch detected`),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),wr(()=>{this.secondaryConn_&&(this.log_(`Timed out trying to upgrade.`),this.secondaryConn_.close())},Math.floor(hi))}onReset_(e){this.log_(`Reset packet received.  New host: `+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_(`Realtime connection established.`),this.conn_=e,this.state_=1,this.onReady_&&=(this.onReady_(t,this.sessionId),null),this.primaryResponsesRequired_===0?(this.log_(`Primary connection is healthy.`),this.isHealthy_=!0):wr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gi))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_(`sending ping on primary.`),this.sendData_({t:`c`,d:{t:Di,d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_(`Realtime connection failed.`),this.repoInfo_.isCacheableHost()&&(qn.remove(`host:`+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_(`Realtime connection lost.`),this.close()}onConnectionShutdown_(e){this.log_(`Connection shutdown command received. Shutting down...`),this.onKill_&&=(this.onKill_(e),null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw`Connection is not connected`;this.tx_.send(e)}close(){this.state_!==2&&(this.log_(`Closing realtime connection.`),this.state_=2,this.closeConnections_(),this.onDisconnect_&&=(this.onDisconnect_(),null))}closeConnections_(){this.log_(`Shutting down all connections`),this.conn_&&=(this.conn_.close(),null),this.secondaryConn_&&=(this.secondaryConn_.close(),null),this.healthyTimeout_&&=(clearTimeout(this.healthyTimeout_),null)}},Ai=class{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}},ji=class{constructor(e){this.allowedEvents_=e,this.listeners_={},n(Array.isArray(e)&&e.length>0,`Requires a non-empty array`)}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);let r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context)){r.splice(e,1);return}}validateEventType_(e){n(this.allowedEvents_.find(t=>t===e),`Unknown event: `+e)}},Mi=class e extends ji{static getInstance(){return new e}constructor(){super([`online`]),this.online_=!0,typeof window<`u`&&window.addEventListener!==void 0&&!ve()&&(window.addEventListener(`online`,()=>{this.online_||(this.online_=!0,this.trigger(`online`,!0))},!1),window.addEventListener(`offline`,()=>{this.online_&&(this.online_=!1,this.trigger(`online`,!1))},!1))}getInitialEvent(e){return n(e===`online`,`Unknown event type: `+e),[this.online_]}currentlyOnline(){return this.online_}},Ni=32,Pi=768,E=class{constructor(e,t){if(t===void 0){this.pieces_=e.split(`/`);let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e=``;for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==``&&(e+=`/`+this.pieces_[t]);return e||`/`}};function D(){return new E(``)}function O(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Fi(e){return e.pieces_.length-e.pieceNum_}function k(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new E(e.pieces_,t)}function Ii(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Li(e){let t=``;for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==``&&(t+=`/`+encodeURIComponent(String(e.pieces_[n])));return t||`/`}function Ri(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function zi(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new E(t,0)}function A(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof E)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split(`/`);for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new E(n,0)}function j(e){return e.pieceNum_>=e.pieces_.length}function M(e,t){let n=O(e),r=O(t);if(n===null)return t;if(n===r)return M(k(e),k(t));throw Error(`INTERNAL ERROR: innerPath (`+t+`) is not within outerPath (`+e+`)`)}function Bi(e,t){let n=Ri(e,0),r=Ri(t,0);for(let e=0;e<n.length&&e<r.length;e++){let t=lr(n[e],r[e]);if(t!==0)return t}return n.length===r.length?0:n.length<r.length?-1:1}function Vi(e,t){if(Fi(e)!==Fi(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function N(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Fi(e)>Fi(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var Hi=class{constructor(e,t){this.errorPrefix_=t,this.parts_=Ri(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Ye(this.parts_[e]);Gi(this)}};function Ui(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Ye(t),Gi(e)}function Wi(e){let t=e.parts_.pop();e.byteLength_-=Ye(t),e.parts_.length>0&&--e.byteLength_}function Gi(e){if(e.byteLength_>Pi)throw Error(e.errorPrefix_+`has a key path longer than 768 bytes (`+e.byteLength_+`).`);if(e.parts_.length>Ni)throw Error(e.errorPrefix_+`path specified exceeds the maximum depth that can be written (32) or object contains a cycle `+Ki(e))}function Ki(e){return e.parts_.length===0?``:`in property '`+e.parts_.join(`.`)+`'`}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qi=class e extends ji{static getInstance(){return new e}constructor(){super([`visible`]);let e,t;typeof document<`u`&&document.addEventListener!==void 0&&(document.hidden===void 0?document.mozHidden===void 0?document.msHidden===void 0?document.webkitHidden!==void 0&&(t=`webkitvisibilitychange`,e=`webkitHidden`):(t=`msvisibilitychange`,e=`msHidden`):(t=`mozvisibilitychange`,e=`mozHidden`):(t=`visibilitychange`,e=`hidden`)),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger(`visible`,t))},!1)}getInitialEvent(e){return n(e===`visible`,`Unknown event type: `+e),[this.visible_]}},Ji=1e3,Yi=300*1e3,Xi=30*1e3,Zi=1.3,Qi=3e4,$i=`server_kill`,ea=3,ta=class e extends Ai{constructor(t,n,r,i,a,o,s,c){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=a,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=c,this.id=e.nextPersistentConnectionId_++,this.log_=nr(`p:`+this.id+`:`),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ji,this.maxReconnectDelay_=Yi,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!h())throw Error(`Auth override specified in options, but not supported on non Node.js platforms`);qi.getInstance().on(`visible`,this.onVisible_,this),t.host.indexOf(`fblocal`)===-1&&Mi.getInstance().on(`online`,this.onOnline_,this)}sendRequest(e,t,r){let i=++this.requestNumber_,a={r:i,a:e,b:t};this.log_(g(a)),n(this.connected_,`sendRequest call when we're not connected not allowed.`),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();let t=new le,n={action:`g`,request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{let n=e.d;e.s===`ok`?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;let r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,r,i){this.initConnection_();let a=e._queryIdentifier,o=e._path.toString();this.log_(`Listen called for `+o+` `+a),this.listens.has(o)||this.listens.set(o,new Map),n(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),`listen() called for non-default but complete query`),n(!this.listens.get(o).has(a),`listen() called twice for same path/queryId.`);let s={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(a,s),this.connected_&&this.sendListen_(s)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest(`g`,t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(t){let n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_(`Listen on `+r+` for `+i);let a={p:r};t.tag&&(a.q=n._queryObject,a.t=t.tag),a.h=t.hashFn(),this.sendRequest(`q`,a,a=>{let o=a.d,s=a.s;e.warnOnListenWarnings_(o,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_(`listen response`,a),s!==`ok`&&this.removeListen_(r,i),t.onComplete&&t.onComplete(s,o))})}static warnOnListenWarnings_(e,t){if(e&&typeof e==`object`&&_(e,`w`)){let n=Pe(e,`w`);if(Array.isArray(n)&&~n.indexOf(`no_index`)){let e=`".indexOn": "`+t._queryParams.getIndex().toString()+`"`,n=t._path.toString();w(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_(`Auth token refreshed`),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest(`unauth`,{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ne(e))&&(this.log_(`Admin auth credential detected.  Reducing max reconnect time.`),this.maxReconnectDelay_=Xi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_(`App check token refreshed`),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest(`unappeck`,{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=Me(e)?`auth`:`gauth`,n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_==`object`&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,r=t.d||`error`;this.authToken_===e&&(n===`ok`?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest(`appcheck`,{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||`error`;t===`ok`?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let r=e._path.toString(),i=e._queryIdentifier;this.log_(`Unlisten called for `+r+` `+i),n(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),`unlisten() called for non-default but complete query`),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_(`Unlisten on `+e+` for `+t);let i={p:e};r&&(i.q=n,i.t=r),this.sendRequest(`n`,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_(`o`,e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:`o`,data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_(`om`,e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:`om`,data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_(`oc`,e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:`oc`,data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){let i={p:t,d:n};this.log_(`onDisconnect `+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e.s,e.d)},0)})}put(e,t,n,r){this.putInternal(`p`,e,t,n,r)}merge(e,t,n,r){this.putInternal(`m`,e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();let a={p:t,d:n};i!==void 0&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_(`Buffering put: `+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+` response`,n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_(`reportStats`,t),this.sendRequest(`s`,t,e=>{if(e.s!==`ok`){let t=e.d;this.log_(`reportStats`,`Error sending stats: `+t)}})}}onDataMessage_(e){if(`r`in e){this.log_(`from server: `+g(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if(`error`in e)throw`A server-side error has occurred: `+e.error;else `a`in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_(`handleServerMessage`,e,t),e===`d`?this.onDataUpdate_(t.p,t.d,!1,t.t):e===`m`?this.onDataUpdate_(t.p,t.d,!0,t.t):e===`c`?this.onListenRevoked_(t.p,t.q):e===`ac`?this.onAuthRevoked_(t.s,t.d):e===`apc`?this.onAppCheckRevoked_(t.s,t.d):e===`sd`?this.onSecurityDebugPacket_(t):rr(`Unrecognized action received from server: `+g(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_(`connection ready`),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){n(!this.realtime_,`Scheduling a connect when we're already connected/ing?`),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_(`Window became visible.  Reducing delay.`),this.reconnectDelay_=Ji,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_(`Browser went online.`),this.reconnectDelay_=Ji,this.realtime_||this.scheduleConnect_(0)):(this.log_(`Browser went offline.  Killing connection.`),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_(`data client disconnected`),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&=(new Date().getTime()-this.lastConnectionEstablishedTime_>Qi&&(this.reconnectDelay_=Ji),null):(this.log_(`Window isn't visible.  Delaying reconnect.`),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_(`Trying to reconnect in `+t+`ms`),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zi)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_(`Making a connection attempt`),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let t=this.onDataMessage_.bind(this),r=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+`:`+ e.nextConnectionId_++,o=this.lastSessionId,s=!1,c=null,l=function(){c?c.close():(s=!0,i())};this.realtime_={close:l,sendRequest:function(e){n(c,`sendRequest call when we're not connected not allowed.`),c.sendRequest(e)}};let u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[e,n]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?S(`getToken() completed but was canceled`):(S(`getToken() completed. Creating connection.`),this.authToken_=e&&e.accessToken,this.appCheckToken_=n&&n.token,c=new ki(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,r,i,e=>{w(e+` (`+this.repoInfo_.toString()+`)`),this.interrupt($i)},o))}catch(e){this.log_(`Failed to get token: `+e),s||(this.repoInfo_.nodeAdmin&&w(e),l())}}}interrupt(e){S(`Interrupting connection for reason: `+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&=(clearTimeout(this.establishConnectionTimer_),null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){S(`Resuming connection for reason: `+e),delete this.interruptReasons_[e],Fe(this.interruptReasons_)&&(this.reconnectDelay_=Ji,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&`h`in t.request&&t.queued&&(t.onComplete&&t.onComplete(`disconnect`),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>fr(e)).join(`$`):`default`;let r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete(`permission_denied`)}removeListen_(e,t){let n=new E(e).toString(),r;if(this.listens.has(n)){let e=this.listens.get(n);r=e.get(t),e.delete(t),e.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){S(`Auth token revoked: `+e+`/`+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e===`invalid_token`||e===`permission_denied`)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ea&&(this.reconnectDelay_=Xi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){S(`App check token revoked: `+e+`/`+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e===`invalid_token`||e===`permission_denied`)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ea&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):`msg`in e&&console.log(`FIREBASE: `+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(let e of this.listens.values())for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t=`js`;h()&&(t=this.repoInfo_.nodeAdmin?`admin_node`:`node`),e[`sdk.`+t+`.`+Hn.replace(/\./g,`-`)]=1,ve()?e[`framework.cordova`]=1:xe()&&(e[`framework.reactnative`]=1),this.reportStats(e)}shouldReconnect_(){let e=Mi.getInstance().currentlyOnline();return Fe(this.interruptReasons_)&&e}};ta.nextPersistentConnectionId_=0,ta.nextConnectionId_=0;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var P=class e{constructor(e,t){this.name=e,this.node=t}static Wrap(t,n){return new e(t,n)}},na=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new P(sr,e),r=new P(sr,t);return this.compare(n,r)!==0}minPost(){return P.MIN}},ra,ia=class extends na{static get __EMPTY_NODE(){return ra}static set __EMPTY_NODE(e){ra=e}compare(e,t){return lr(e.name,t.name)}isDefinedOn(e){throw r(`KeyIndex.isDefinedOn not expected to be called.`)}indexedValueChanged(e,t){return!1}minPost(){return P.MIN}maxPost(){return new P(cr,ra)}makePost(e,t){return n(typeof e==`string`,`KeyIndex indexValue must always be a string.`),new P(e,ra)}toString(){return`.key`}},aa=new ia,oa=class{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?n(e.key,t):1,r&&(a*=-1),a<0)e=this.isReverse_?e.left:e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},F=class e{constructor(t,n,r,i,a){this.key=t,this.value=n,this.color=r??e.RED,this.left=i??I.EMPTY_NODE,this.right=a??I.EMPTY_NODE}copy(t,n,r,i,a){return new e(t??this.key,n??this.value,r??this.color,i??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return I.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return I.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){let t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){let t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return 2**this.check_()<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error(`Red node has red child(`+this.key+`,`+this.value+`)`);if(this.right.isRed_())throw Error(`Right child of (`+this.key+`,`+this.value+`) is red`);let e=this.left.check_();if(e!==this.right.check_())throw Error(`Black depths differ`);return e+(this.isRed_()?0:1)}};F.RED=!0,F.BLACK=!1;var sa=class{copy(e,t,n,r,i){return this}insert(e,t,n){return new F(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},I=class e{constructor(t,n=e.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,F.BLACK,null,null))}remove(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,F.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(r=n,n=n.right);throw Error(`Attempted to find predecessor key for a nonexistent key.  What gives?`)}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new oa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new oa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new oa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new oa(this.root_,null,this.comparator_,!0,e)}};I.EMPTY_NODE=new sa;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ca(e,t){return lr(e.name,t.name)}function la(e,t){return lr(e,t)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ua;function da(e){ua=e}var fa=function(e){return typeof e==`number`?`number:`+mr(e):`string:`+e},pa=function(e){if(e.isLeafNode()){let t=e.val();n(typeof t==`string`||typeof t==`number`||typeof t==`object`&&_(t,`.sv`),`Priority must be a string or number.`)}else n(e===ua||e.isEmpty(),`priority of unexpected type.`);n(e===ua||e.getPriority().isEmpty(),`Priority nodes can't have a priority of their own.`)},ma,ha=class e{static set __childrenNodeConstructor(e){ma=e}static get __childrenNodeConstructor(){return ma}constructor(t,r=e.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=r,this.lazyHash_=null,n(this.value_!==void 0&&this.value_!==null,`LeafNode shouldn't be created with null/undefined value.`),pa(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new e(this.value_,t)}getImmediateChild(t){return t===`.priority`?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return j(t)?this:O(t)===`.priority`?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(t,n){return t===`.priority`?this.updatePriority(n):n.isEmpty()&&t!==`.priority`?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,r){let i=O(t);return i===null?r:r.isEmpty()&&i!==`.priority`?this:(n(i!==`.priority`||Fi(t)===1,`.priority must be the last token in a path`),this.updateImmediateChild(i,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(k(t),r)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e=``;this.priorityNode_.isEmpty()||(e+=`priority:`+fa(this.priorityNode_.val())+`:`);let t=typeof this.value_;e+=t+`:`,t===`number`?e+=mr(this.value_):e+=this.value_,this.lazyHash_=Zn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(n(t.isLeafNode(),`Unknown node type`),this.compareToLeafNode_(t))}compareToLeafNode_(t){let r=typeof t.value_,i=typeof this.value_,a=e.VALUE_TYPE_ORDER.indexOf(r),o=e.VALUE_TYPE_ORDER.indexOf(i);return n(a>=0,`Unknown leaf type: `+r),n(o>=0,`Unknown leaf type: `+i),a===o?i===`object`?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){let t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}};ha.VALUE_TYPE_ORDER=[`object`,`boolean`,`number`,`string`];
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ga,_a;function va(e){ga=e}function ya(e){_a=e}var L=new class extends na{compare(e,t){let n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return i===0?lr(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return P.MIN}maxPost(){return new P(cr,new ha(`[PRIORITY-POST]`,_a))}makePost(e,t){let n=ga(e);return new P(t,new ha(`[PRIORITY-POST]`,n))}toString(){return`.priority`}},ba=Math.log(2),xa=class{constructor(e){let t=e=>parseInt(Math.log(e)/ba,10),n=e=>parseInt(Array(e+1).join(`1`),2);this.count=t(e+1),this.current_=this.count-1;let r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}},Sa=function(e,t,n,r){e.sort(t);let i=function(t,r){let a=r-t,o,s;if(a===0)return null;if(a===1)return o=e[t],s=n?n(o):o,new F(s,o.node,F.BLACK,null,null);{let c=parseInt(a/2,10)+t,l=i(t,c),u=i(c+1,r);return o=e[c],s=n?n(o):o,new F(s,o.node,F.BLACK,l,u)}},a=function(t){let r=null,a=null,o=e.length,s=function(t,r){let a=o-t,s=o;o-=t;let l=i(a+1,s),u=e[a],d=n?n(u):u;c(new F(d,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(a=e,r=e)};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),r=2**(t.count-(e+1));n?s(r,F.BLACK):(s(r,F.BLACK),s(r,F.RED))}return a},o=new xa(e.length),s=a(o);return new I(r||t,s)},Ca,wa={},Ta=class e{static get Default(){return n(wa&&L,`ChildrenNode.ts has not been loaded`),Ca||=new e({".priority":wa},{".priority":L}),Ca}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=Pe(this.indexes_,e);if(!t)throw Error(`No index defined for `+e);return t instanceof I?t:null}hasIndex(e){return _(this.indexSet_,e.toString())}addIndex(t,r){n(t!==aa,`KeyIndex always exists and isn't meant to be added to the IndexMap.`);let i=[],a=!1,o=r.getIterator(P.Wrap),s=o.getNext();for(;s;)a||=t.isDefinedOn(s.node),i.push(s),s=o.getNext();let c;c=a?Sa(i,t.getCompare()):wa;let l=t.toString(),u={...this.indexSet_};u[l]=t;let d={...this.indexes_};return d[l]=c,new e(d,u)}addToIndexes(t,r){let i=Ie(this.indexes_,(e,i)=>{let a=Pe(this.indexSet_,i);if(n(a,`Missing index implementation for `+i),e===wa)if(a.isDefinedOn(t.node)){let e=[],n=r.getIterator(P.Wrap),i=n.getNext();for(;i;)i.name!==t.name&&e.push(i),i=n.getNext();return e.push(t),Sa(e,a.getCompare())}else return wa;else{let n=r.get(t.name),i=e;return n&&(i=i.remove(new P(t.name,n))),i.insert(t,t.node)}});return new e(i,this.indexSet_)}removeFromIndexes(t,n){let r=Ie(this.indexes_,e=>{if(e===wa)return e;{let r=n.get(t.name);return r?e.remove(new P(t.name,r)):e}});return new e(r,this.indexSet_)}},Ea,R=class e{static get EMPTY_NODE(){return Ea||=new e(new I(la),null,Ta.Default)}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&pa(this.priorityNode_),this.children_.isEmpty()&&n(!this.priorityNode_||this.priorityNode_.isEmpty(),`An empty node cannot have a priority`)}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ea}updatePriority(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)}getImmediateChild(e){if(e===`.priority`)return this.getPriority();{let t=this.children_.get(e);return t===null?Ea:t}}getChild(e){let t=O(e);return t===null?this:this.getImmediateChild(t).getChild(k(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(t,r){if(n(r,`We should always be passing snapshot nodes`),t===`.priority`)return this.updatePriority(r);{let n=new P(t,r),i,a;r.isEmpty()?(i=this.children_.remove(t),a=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,r),a=this.indexMap_.addToIndexes(n,this.children_));let o=i.isEmpty()?Ea:this.priorityNode_;return new e(i,o,a)}}updateChild(e,t){let r=O(e);if(r===null)return t;{n(O(e)!==`.priority`||Fi(e)===1,`.priority must be the last token in a path`);let i=this.getImmediateChild(r).updateChild(k(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;let n={},r=0,i=0,a=!0;if(this.forEachChild(L,(o,s)=>{n[o]=s.val(t),r++,a&&e.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1}),!t&&a&&i<2*r){let e=[];for(let t in n)e[t]=n[t];return e}else return t&&!this.getPriority().isEmpty()&&(n[`.priority`]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e=``;this.getPriority().isEmpty()||(e+=`priority:`+fa(this.getPriority().val())+`:`),this.forEachChild(L,(t,n)=>{let r=n.hash();r!==``&&(e+=`:`+t+`:`+r)}),this.lazyHash_=e===``?``:Zn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let r=this.resolveIndex_(n);if(r){let n=r.getPredecessorKey(new P(e,t));return n?n.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){let t=this.resolveIndex_(e);if(t){let e=t.minKey();return e&&e.name}else return this.children_.minKey()}getFirstChild(e){let t=this.getFirstChildName(e);return t?new P(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(t){let e=t.maxKey();return e&&e.name}else return this.children_.maxKey()}getLastChild(e){let t=this.getLastChildName(e);return t?new P(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,P.Wrap),r=n.peek();for(;r!=null&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,P.Wrap),r=n.peek();for(;r!=null&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Da?-1:0}withIndex(t){if(t===aa||this.indexMap_.hasIndex(t))return this;{let n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===aa||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{let t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){let e=this.getIterator(L),n=t.getIterator(L),r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return r===null&&i===null}else return!1;else return!1}}resolveIndex_(e){return e===aa?null:this.indexMap_.get(e.toString())}};R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var Da=new class extends R{constructor(){super(new I(la),R.EMPTY_NODE,Ta.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(P,{MIN:{value:new P(sr,R.EMPTY_NODE)},MAX:{value:new P(cr,Da)}}),ia.__EMPTY_NODE=R.EMPTY_NODE,ha.__childrenNodeConstructor=R,da(Da),ya(Da);
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Oa=!0;function z(e,t=null){if(e===null)return R.EMPTY_NODE;if(typeof e==`object`&&`.priority`in e&&(t=e[`.priority`]),n(t===null||typeof t==`string`||typeof t==`number`||typeof t==`object`&&`.sv`in t,`Invalid priority type found: `+typeof t),typeof e==`object`&&`.value`in e&&e[`.value`]!==null&&(e=e[`.value`]),typeof e!=`object`||`.sv`in e)return new ha(e,z(t));if(!(e instanceof Array)&&Oa){let n=[],r=!1;if(T(e,(e,t)=>{if(e.substring(0,1)!==`.`){let i=z(t);i.isEmpty()||(r||=!i.getPriority().isEmpty(),n.push(new P(e,i)))}}),n.length===0)return R.EMPTY_NODE;let i=Sa(n,ca,e=>e.name,la);if(r){let e=Sa(n,L.getCompare());return new R(i,z(t),new Ta({".priority":e},{".priority":L}))}else return new R(i,z(t),Ta.Default)}else{let n=R.EMPTY_NODE;return T(e,(t,r)=>{if(_(e,t)&&t.substring(0,1)!==`.`){let e=z(r);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority(z(t))}}va(z);
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ka=class extends na{constructor(e){super(),this.indexPath_=e,n(!j(e)&&O(e)!==`.priority`,`Can't create PathIndex with empty path or .priority key`)}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return i===0?lr(e.name,t.name):i}makePost(e,t){let n=z(e),r=R.EMPTY_NODE.updateChild(this.indexPath_,n);return new P(t,r)}maxPost(){let e=R.EMPTY_NODE.updateChild(this.indexPath_,Da);return new P(cr,e)}toString(){return Ri(this.indexPath_,0).join(`/`)}},Aa=new class extends na{compare(e,t){let n=e.node.compareTo(t.node);return n===0?lr(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return P.MIN}maxPost(){return P.MAX}makePost(e,t){let n=z(e);return new P(t,n)}toString(){return`.value`}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ja(e){return{type:`value`,snapshotNode:e}}function Ma(e,t){return{type:`child_added`,snapshotNode:t,childName:e}}function Na(e,t){return{type:`child_removed`,snapshotNode:t,childName:e}}function Pa(e,t,n){return{type:`child_changed`,snapshotNode:t,childName:e,oldSnap:n}}function Fa(e,t){return{type:`child_moved`,snapshotNode:t,childName:e}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ia=class{constructor(e){this.index_=e}updateChild(e,t,r,i,a,o){n(e.isIndexed(this.index_),`A node must be indexed if only a child is updated`);let s=e.getImmediateChild(t);return s.getChild(i).equals(r.getChild(i))&&s.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(Na(t,s)):n(e.isLeafNode(),`A child remove without an old child only makes sense on a leaf node`):s.isEmpty()?o.trackChildChange(Ma(t,r)):o.trackChildChange(Pa(t,r,s))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(L,(e,r)=>{t.hasChild(e)||n.trackChildChange(Na(e,r))}),t.isLeafNode()||t.forEachChild(L,(t,r)=>{if(e.hasChild(t)){let i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Pa(t,r,i))}else n.trackChildChange(Ma(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}},La=class e{constructor(t){this.indexedFilter_=new Ia(t.getIndex()),this.index_=t.getIndex(),this.startPost_=e.getStartPost_(t),this.endPost_=e.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,a){return this.matches(new P(t,n))||(n=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,a)}updateFullNode(e,t,n){t.isLeafNode()&&(t=R.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(R.EMPTY_NODE);let i=this;return t.forEachChild(L,(e,t)=>{i.matches(new P(e,t))||(r=r.updateImmediateChild(e,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}},Ra=class{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{let t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{let t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new La(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,a){return this.rangedFilter_.matches(new P(t,n))||(n=R.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,a):this.fullLimitUpdateChild_(e,t,n,i,a)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=R.EMPTY_NODE.withIndex(this.index_);let e;e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){let t=e.getNext();if(this.withinDirectionalStart(t))if(this.withinDirectionalEnd(t))r=r.updateImmediateChild(t.name,t.node),n++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(R.EMPTY_NODE);let e;e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){let t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,a){let o;if(this.reverse_){let e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();let s=e;n(s.numChildren()===this.limit_,``);let c=new P(t,r),l=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(s.hasChild(t)){let e=s.getImmediateChild(t),n=i.getChildAfterChild(this.index_,l,this.reverse_);for(;n!=null&&(n.name===t||s.hasChild(n.name));)n=i.getChildAfterChild(this.index_,n,this.reverse_);let d=n==null?1:o(n,c);if(u&&!r.isEmpty()&&d>=0)return a?.trackChildChange(Pa(t,r,e)),s.updateImmediateChild(t,r);{a?.trackChildChange(Na(t,e));let r=s.updateImmediateChild(t,R.EMPTY_NODE);return n!=null&&this.rangedFilter_.matches(n)?(a?.trackChildChange(Ma(n.name,n.node)),r.updateImmediateChild(n.name,n.node)):r}}else if(r.isEmpty())return e;else if(u)return o(l,c)>=0?(a!=null&&(a.trackChildChange(Na(l.name,l.node)),a.trackChildChange(Ma(t,r))),s.updateImmediateChild(t,r).updateImmediateChild(l.name,R.EMPTY_NODE)):e;else return e}},za=class e{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_=``,this.indexStartValue_=null,this.indexStartName_=``,this.indexEndValue_=null,this.indexEndName_=``,this.index_=L}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===``?this.startSet_:this.viewFrom_===`l`}getIndexStartValue(){return n(this.startSet_,`Only valid if start has been set`),this.indexStartValue_}getIndexStartName(){return n(this.startSet_,`Only valid if start has been set`),this.startNameSet_?this.indexStartName_:sr}hasEnd(){return this.endSet_}getIndexEndValue(){return n(this.endSet_,`Only valid if end has been set`),this.indexEndValue_}getIndexEndName(){return n(this.endSet_,`Only valid if end has been set`),this.endNameSet_?this.indexEndName_:cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==``}getLimit(){return n(this.limitSet_,`Only valid if limit has been set`),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===L}copy(){let t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}};function Ba(e){return e.loadsAllData()?new Ia(e.getIndex()):e.hasLimit()?new Ra(e):new La(e)}function Va(e){let t={};if(e.isDefault())return t;let r;if(e.index_===L?r=`$priority`:e.index_===Aa?r=`$value`:e.index_===aa?r=`$key`:(n(e.index_ instanceof ka,`Unrecognized index type!`),r=e.index_.toString()),t.orderBy=g(r),e.startSet_){let n=e.startAfterSet_?`startAfter`:`startAt`;t[n]=g(e.indexStartValue_),e.startNameSet_&&(t[n]+=`,`+g(e.indexStartName_))}if(e.endSet_){let n=e.endBeforeSet_?`endBefore`:`endAt`;t[n]=g(e.indexEndValue_),e.endNameSet_&&(t[n]+=`,`+g(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ha(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===``&&(n=e.isViewFromLeft()?`l`:`r`),t.vf=n}return e.index_!==L&&(t.i=e.index_.toString()),t}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ua=class e extends Ai{reportStats(e){throw Error(`Method not implemented.`)}static getListenId_(e,t){return t===void 0?(n(e._queryParams.isDefault(),`should have a tag if it's not a default query.`),e._path.toString()):`tag$`+t}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=nr(`p:rest:`),this.listens_={}}listen(t,n,r,i){let a=t._path.toString();this.log_(`Listen called for `+a+` `+t._queryIdentifier);let o=e.getListenId_(t,r),s={};this.listens_[o]=s;let c=Va(t._queryParams);this.restRequest_(a+`.json`,c,(e,t)=>{let n=t;if(e===404&&(n=null,e=null),e===null&&this.onDataUpdate_(a,n,!1,r),Pe(this.listens_,o)===s){let t;t=e?e===401?`permission_denied`:`rest_error:`+e:`ok`,i(t,null)}})}unlisten(t,n){let r=e.getListenId_(t,n);delete this.listens_[r]}get(e){let t=Va(e._queryParams),n=e._path.toString(),r=new le;return this.restRequest_(n+`.json`,t,(e,t)=>{let i=t;e===404&&(i=null,e=null),e===null?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format=`export`,Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);let a=(this.repoInfo_.secure?`https://`:`http://`)+this.repoInfo_.host+e+`?ns=`+this.repoInfo_.namespace+ze(t);this.log_(`Sending REST request for `+a);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&o.readyState===4){this.log_(`REST Response for `+a+` received. status:`,o.status,`response:`,o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Ae(o.responseText)}catch{w(`Failed to parse JSON response for `+a+`: `+o.responseText)}n(null,e)}else o.status!==401&&o.status!==404&&w(`Got unsuccessful REST response for `+a+` Status: `+o.status),n(o.status);n=null}},o.open(`GET`,a,!0),o.send()})}},Wa=class{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ga(){return{value:null,children:new Map}}function Ka(e,t,n){if(j(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{let r=O(t);e.children.has(r)||e.children.set(r,Ga());let i=e.children.get(r);t=k(t),Ka(i,t,n)}}function qa(e,t,n){e.value===null?Ja(e,(e,r)=>{let i=new E(t.toString()+`/`+e);qa(r,i,n)}):n(t,e.value)}function Ja(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ya=class{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t={...e};return this.last_&&T(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}},Xa=10*1e3,Za=30*1e3,Qa=300*1e3,$a=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ya(e);let n=Xa+(Za-Xa)*Math.random();wr(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;T(e,(e,r)=>{r>0&&_(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),wr(this.reportStats_.bind(this),Math.floor(Math.random()*2*Qa))}},B;(function(e){e[e.OVERWRITE=0]=`OVERWRITE`,e[e.MERGE=1]=`MERGE`,e[e.ACK_USER_WRITE=2]=`ACK_USER_WRITE`,e[e.LISTEN_COMPLETE=3]=`LISTEN_COMPLETE`})(B||={});function eo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function to(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function no(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ro=class e{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=B.ACK_USER_WRITE,this.source=eo()}operationForChild(t){if(j(this.path)){if(this.affectedTree.value!=null)return n(this.affectedTree.children.isEmpty(),`affectedTree should not have overlapping affected paths.`),this;{let n=this.affectedTree.subtree(new E(t));return new e(D(),n,this.revert)}}else return n(O(this.path)===t,`operationForChild called for unrelated child.`),new e(k(this.path),this.affectedTree,this.revert)}},io=class e{constructor(e,t){this.source=e,this.path=t,this.type=B.LISTEN_COMPLETE}operationForChild(t){return j(this.path)?new e(this.source,D()):new e(this.source,k(this.path))}},ao=class e{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=B.OVERWRITE}operationForChild(t){return j(this.path)?new e(this.source,D(),this.snap.getImmediateChild(t)):new e(this.source,k(this.path),this.snap)}},oo=class e{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=B.MERGE}operationForChild(t){if(j(this.path)){let n=this.children.subtree(new E(t));return n.isEmpty()?null:n.value?new ao(this.source,D(),n.value):new e(this.source,D(),n)}else return n(O(this.path)===t,`Can't get a merge for a child not on the path of the operation`),new e(this.source,k(this.path),this.children)}toString(){return`Operation(`+this.path+`: `+this.source.toString()+` merge: `+this.children.toString()+`)`}},V=class{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;let t=O(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}},so=class{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}};function co(e,t,n,r){let i=[],a=[];return t.forEach(t=>{t.type===`child_changed`&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push(Fa(t.childName,t.snapshotNode))}),lo(e,i,`child_removed`,t,r,n),lo(e,i,`child_added`,t,r,n),lo(e,i,`child_moved`,a,r,n),lo(e,i,`child_changed`,t,r,n),lo(e,i,`value`,t,r,n),i}function lo(e,t,n,r,i,a){let o=r.filter(e=>e.type===n);o.sort((t,n)=>fo(e,t,n)),o.forEach(n=>{let r=uo(e,n,a);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function uo(e,t,n){return t.type===`value`||t.type===`child_removed`||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function fo(e,t,n){if(t.childName==null||n.childName==null)throw r(`Should only compare child_ events.`);let i=new P(t.childName,t.snapshotNode),a=new P(n.childName,n.snapshotNode);return e.index_.compare(i,a)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function po(e,t){return{eventCache:e,serverCache:t}}function mo(e,t,n,r){return po(new V(t,n,r),e.serverCache)}function ho(e,t,n,r){return po(e.eventCache,new V(t,n,r))}function go(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function _o(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var vo,yo=()=>(vo||=new I(ur),vo),H=class e{static fromObject(t){let n=new e(null);return T(t,(e,t)=>{n=n.set(new E(e),t)}),n}constructor(e,t=yo()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:D(),value:this.value};if(j(e))return null;{let n=O(e),r=this.children.get(n);if(r!==null){let i=r.findRootMostMatchingPathAndValue(k(e),t);return i==null?null:{path:A(new E(n),i.path),value:i.value}}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(t){if(j(t))return this;{let n=O(t),r=this.children.get(n);return r===null?new e(null):r.subtree(k(t))}}set(t,n){if(j(t))return new e(n,this.children);{let r=O(t),i=(this.children.get(r)||new e(null)).set(k(t),n),a=this.children.insert(r,i);return new e(this.value,a)}}remove(t){if(j(t))return this.children.isEmpty()?new e(null):new e(null,this.children);{let n=O(t),r=this.children.get(n);if(r){let i=r.remove(k(t)),a;return a=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),this.value===null&&a.isEmpty()?new e(null):new e(this.value,a)}else return this}}get(e){if(j(e))return this.value;{let t=O(e),n=this.children.get(t);return n?n.get(k(e)):null}}setTree(t,n){if(j(t))return n;{let r=O(t),i=(this.children.get(r)||new e(null)).setTree(k(t),n),a;return a=i.isEmpty()?this.children.remove(r):this.children.insert(r,i),new e(this.value,a)}}fold(e){return this.fold_(D(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(A(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,D(),t)}findOnPath_(e,t,n){let r=this.value?n(t,this.value):!1;if(r)return r;if(j(e))return null;{let r=O(e),i=this.children.get(r);return i?i.findOnPath_(k(e),A(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,D(),t)}foreachOnPath_(t,n,r){if(j(t))return this;{this.value&&r(n,this.value);let i=O(t),a=this.children.get(i);return a?a.foreachOnPath_(k(t),A(n,i),r):new e(null)}}foreach(e){this.foreach_(D(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(A(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}},U=class e{constructor(e){this.writeTree_=e}static empty(){return new e(new H(null))}};function bo(e,t,n){if(j(t))return new U(new H(n));{let r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){let i=r.path,a=r.value,o=M(i,t);return a=a.updateChild(o,n),new U(e.writeTree_.set(i,a))}else{let r=new H(n),i=e.writeTree_.setTree(t,r);return new U(i)}}}function xo(e,t,n){let r=e;return T(n,(e,n)=>{r=bo(r,A(t,e),n)}),r}function So(e,t){if(j(t))return U.empty();{let n=e.writeTree_.setTree(t,new H(null));return new U(n)}}function Co(e,t){return wo(e,t)!=null}function wo(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return n==null?null:e.writeTree_.get(n.path).getChild(M(n.path,t))}function To(e){let t=[],n=e.writeTree_.value;return n==null?e.writeTree_.children.inorderTraversal((e,n)=>{n.value!=null&&t.push(new P(e,n.value))}):n.isLeafNode()||n.forEachChild(L,(e,n)=>{t.push(new P(e,n))}),t}function Eo(e,t){if(j(t))return e;{let n=wo(e,t);return n==null?new U(e.writeTree_.subtree(t)):new U(new H(n))}}function Do(e){return e.writeTree_.isEmpty()}function Oo(e,t){return ko(D(),e.writeTree_,t)}function ko(e,t,r){if(t.value!=null)return r.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((t,a)=>{t===`.priority`?(n(a.value!==null,`Priority writes must always be leaf nodes`),i=a.value):r=ko(A(e,t),a,r)}),!r.getChild(e).isEmpty()&&i!==null&&(r=r.updateChild(A(e,`.priority`),i)),r}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ao(e,t){return $o(t,e)}function jo(e,t,r,i,a){n(i>e.lastWriteId,`Stacking an older write on top of newer ones`),a===void 0&&(a=!0),e.allWrites.push({path:t,snap:r,writeId:i,visible:a}),a&&(e.visibleWrites=bo(e.visibleWrites,t,r)),e.lastWriteId=i}function Mo(e,t,r,i){n(i>e.lastWriteId,`Stacking an older merge on top of newer ones`),e.allWrites.push({path:t,children:r,writeId:i,visible:!0}),e.visibleWrites=xo(e.visibleWrites,t,r),e.lastWriteId=i}function No(e,t){for(let n=0;n<e.allWrites.length;n++){let r=e.allWrites[n];if(r.writeId===t)return r}return null}function Po(e,t){let r=e.allWrites.findIndex(e=>e.writeId===t);n(r>=0,`removeWrite called with nonexistent writeId.`);let i=e.allWrites[r];e.allWrites.splice(r,1);let a=i.visible,o=!1,s=e.allWrites.length-1;for(;a&&s>=0;){let t=e.allWrites[s];t.visible&&(s>=r&&Fo(t,i.path)?a=!1:N(i.path,t.path)&&(o=!0)),s--}if(a){if(o)return Io(e),!0;if(i.snap)e.visibleWrites=So(e.visibleWrites,i.path);else{let t=i.children;T(t,t=>{e.visibleWrites=So(e.visibleWrites,A(i.path,t))})}return!0}else return!1}function Fo(e,t){if(e.snap)return N(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&N(A(e.path,n),t))return!0;return!1}function Io(e){e.visibleWrites=Ro(e.allWrites,Lo,D()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Lo(e){return e.visible}function Ro(e,t,n){let i=U.empty();for(let a=0;a<e.length;++a){let o=e[a];if(t(o)){let e=o.path,t;if(o.snap)N(n,e)?(t=M(n,e),i=bo(i,t,o.snap)):N(e,n)&&(t=M(e,n),i=bo(i,D(),o.snap.getChild(t)));else if(o.children){if(N(n,e))t=M(n,e),i=xo(i,t,o.children);else if(N(e,n))if(t=M(e,n),j(t))i=xo(i,D(),o.children);else{let e=Pe(o.children,O(t));if(e){let n=e.getChild(k(t));i=bo(i,D(),n)}}}else throw r(`WriteRecord should have .snap or .children`)}}return i}function zo(e,t,n,r,i){if(!r&&!i){let r=wo(e.visibleWrites,t);if(r!=null)return r;{let r=Eo(e.visibleWrites,t);if(Do(r))return n;if(n==null&&!Co(r,D()))return null;{let e=n||R.EMPTY_NODE;return Oo(r,e)}}}else{let a=Eo(e.visibleWrites,t);if(!i&&Do(a))return n;if(!i&&n==null&&!Co(a,D()))return null;{let a=Ro(e.allWrites,function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(N(e.path,t)||N(t,e.path))},t),o=n||R.EMPTY_NODE;return Oo(a,o)}}}function Bo(e,t,n){let r=R.EMPTY_NODE,i=wo(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(L,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){let i=Eo(e.visibleWrites,t);return n.forEachChild(L,(e,t)=>{let n=Oo(Eo(i,new E(e)),t);r=r.updateImmediateChild(e,n)}),To(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}else{let n=Eo(e.visibleWrites,t);return To(n).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}function Vo(e,t,r,i,a){n(i||a,`Either existingEventSnap or existingServerSnap must exist`);let o=A(t,r);if(Co(e.visibleWrites,o))return null;{let t=Eo(e.visibleWrites,o);return Do(t)?a.getChild(r):Oo(t,a.getChild(r))}}function Ho(e,t,n,r){let i=A(t,n),a=wo(e.visibleWrites,i);if(a!=null)return a;if(r.isCompleteForChild(n)){let t=Eo(e.visibleWrites,i);return Oo(t,r.getNode().getImmediateChild(n))}else return null}function Uo(e,t){return wo(e.visibleWrites,t)}function Wo(e,t,n,r,i,a,o){let s,c=Eo(e.visibleWrites,t),l=wo(c,D());if(l!=null)s=l;else if(n!=null)s=Oo(c,n);else return[];if(s=s.withIndex(o),!s.isEmpty()&&!s.isLeafNode()){let e=[],t=o.getCompare(),n=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),c=n.getNext();for(;c&&e.length<i;)t(c,r)!==0&&e.push(c),c=n.getNext();return e}else return[]}function Go(){return{visibleWrites:U.empty(),allWrites:[],lastWriteId:-1}}function Ko(e,t,n,r){return zo(e.writeTree,e.treePath,t,n,r)}function qo(e,t){return Bo(e.writeTree,e.treePath,t)}function Jo(e,t,n,r){return Vo(e.writeTree,e.treePath,t,n,r)}function Yo(e,t){return Uo(e.writeTree,A(e.treePath,t))}function Xo(e,t,n,r,i,a){return Wo(e.writeTree,e.treePath,t,n,r,i,a)}function Zo(e,t,n){return Ho(e.writeTree,e.treePath,t,n)}function Qo(e,t){return $o(A(e.treePath,t),e.writeTree)}function $o(e,t){return{treePath:e,writeTree:t}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var es=class{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;n(t===`child_added`||t===`child_changed`||t===`child_removed`,`Only child changes supported for tracking`),n(i!==`.priority`,`Only non-priority child changes can be tracked.`);let a=this.changeMap.get(i);if(a){let n=a.type;if(t===`child_added`&&n===`child_removed`)this.changeMap.set(i,Pa(i,e.snapshotNode,a.snapshotNode));else if(t===`child_removed`&&n===`child_added`)this.changeMap.delete(i);else if(t===`child_removed`&&n===`child_changed`)this.changeMap.set(i,Na(i,a.oldSnap));else if(t===`child_changed`&&n===`child_added`)this.changeMap.set(i,Ma(i,e.snapshotNode));else if(t===`child_changed`&&n===`child_changed`)this.changeMap.set(i,Pa(i,e.snapshotNode,a.oldSnap));else throw r(`Illegal combination of changes: `+e+` occurred after `+a)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}},ts=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}},ns=class{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=this.optCompleteServerCache_==null?this.viewCache_.serverCache:new V(this.optCompleteServerCache_,!0,!1);return Zo(this.writes_,e,t)}}getChildAfterChild(e,t,n){let r=this.optCompleteServerCache_==null?_o(this.viewCache_):this.optCompleteServerCache_,i=Xo(this.writes_,r,t,1,n,e);return i.length===0?null:i[0]}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function rs(e){return{filter:e}}function os(e,t){n(t.eventCache.getNode().isIndexed(e.filter.getIndex()),`Event snap not indexed`),n(t.serverCache.getNode().isIndexed(e.filter.getIndex()),`Server snap not indexed`)}function ss(e,t,i,a,o){let s=new es,c,l;if(i.type===B.OVERWRITE){let r=i;r.source.fromUser?c=ds(e,t,r.path,r.snap,a,o,s):(n(r.source.fromServer,`Unknown source.`),l=r.source.tagged||t.serverCache.isFiltered()&&!j(r.path),c=us(e,t,r.path,r.snap,a,o,l,s))}else if(i.type===B.MERGE){let r=i;r.source.fromUser?c=ps(e,t,r.path,r.children,a,o,s):(n(r.source.fromServer,`Unknown source.`),l=r.source.tagged||t.serverCache.isFiltered(),c=hs(e,t,r.path,r.children,a,o,l,s))}else if(i.type===B.ACK_USER_WRITE){let n=i;c=n.revert?vs(e,t,n.path,a,o,s):gs(e,t,n.path,n.affectedTree,a,o,s)}else if(i.type===B.LISTEN_COMPLETE)c=_s(e,t,i.path,a,s);else throw r(`Unknown operation type: `+i.type);let u=s.getChanges();return cs(t,c,u),{viewCache:c,changes:u}}function cs(e,t,n){let r=t.eventCache;if(r.isFullyInitialized()){let i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=go(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push(ja(go(t)))}}function ls(e,t,r,i,a,o){let s=t.eventCache;if(Yo(i,r)!=null)return t;{let c,l;if(j(r))if(n(t.serverCache.isFullyInitialized(),`If change path is empty, we must have complete server data`),t.serverCache.isFiltered()){let n=_o(t),r=n instanceof R?n:R.EMPTY_NODE,a=qo(i,r);c=e.filter.updateFullNode(t.eventCache.getNode(),a,o)}else{let n=Ko(i,_o(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{let u=O(r);if(u===`.priority`){n(Fi(r)===1,`Can't have a priority with additional path components`);let a=s.getNode();l=t.serverCache.getNode();let o=Jo(i,r,a,l);c=o==null?s.getNode():e.filter.updatePriority(a,o)}else{let n=k(r),d;if(s.isCompleteForChild(u)){l=t.serverCache.getNode();let e=Jo(i,r,s.getNode(),l);d=e==null?s.getNode().getImmediateChild(u):s.getNode().getImmediateChild(u).updateChild(n,e)}else d=Zo(i,u,t.serverCache);c=d==null?s.getNode():e.filter.updateChild(s.getNode(),u,d,n,a,o)}}return mo(t,c,s.isFullyInitialized()||j(r),e.filter.filtersNodes())}}function us(e,t,n,r,i,a,o,s){let c=t.serverCache,l,u=o?e.filter:e.filter.getIndexedFilter();if(j(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){let e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{let e=O(n);if(!c.isCompleteForPath(n)&&Fi(n)>1)return t;let i=k(n),a=c.getNode().getImmediateChild(e).updateChild(i,r);l=e===`.priority`?u.updatePriority(c.getNode(),a):u.updateChild(c.getNode(),e,a,i,ts,null)}let d=ho(t,l,c.isFullyInitialized()||j(n),u.filtersNodes()),f=new ns(i,d,a);return ls(e,d,n,i,f,s)}function ds(e,t,n,r,i,a,o){let s=t.eventCache,c,l,u=new ns(i,t,a);if(j(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=mo(t,l,!0,e.filter.filtersNodes());else{let i=O(n);if(i===`.priority`)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=mo(t,l,s.isFullyInitialized(),s.isFiltered());else{let a=k(n),l=s.getNode().getImmediateChild(i),d;if(j(a))d=r;else{let e=u.getCompleteChild(i);d=e==null?R.EMPTY_NODE:Ii(a)===`.priority`&&e.getChild(zi(a)).isEmpty()?e:e.updateChild(a,r)}if(l.equals(d))c=t;else{let n=e.filter.updateChild(s.getNode(),i,d,a,u,o);c=mo(t,n,s.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function fs(e,t){return e.eventCache.isCompleteForChild(t)}function ps(e,t,n,r,i,a,o){let s=t;return r.foreach((r,c)=>{let l=A(n,r);fs(t,O(l))&&(s=ds(e,s,l,c,i,a,o))}),r.foreach((r,c)=>{let l=A(n,r);fs(t,O(l))||(s=ds(e,s,l,c,i,a,o))}),s}function ms(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function hs(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c=t,l;l=j(n)?r:new H(null).setTree(n,r);let u=t.serverCache.getNode();return l.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){let l=t.serverCache.getNode().getImmediateChild(n),u=ms(e,l,r);c=us(e,c,new E(n),u,i,a,o,s)}}),l.children.inorderTraversal((n,r)=>{let l=!t.serverCache.isCompleteForChild(n)&&r.value===null;if(!u.hasChild(n)&&!l){let l=t.serverCache.getNode().getImmediateChild(n),u=ms(e,l,r);c=us(e,c,new E(n),u,i,a,o,s)}}),c}function gs(e,t,n,r,i,a,o){if(Yo(i,n)!=null)return t;let s=t.serverCache.isFiltered(),c=t.serverCache;if(r.value!=null){if(j(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return us(e,t,n,c.getNode().getChild(n),i,a,s,o);if(j(n)){let r=new H(null);return c.getNode().forEachChild(aa,(e,t)=>{r=r.set(new E(e),t)}),hs(e,t,n,r,i,a,s,o)}else return t}else{let l=new H(null);return r.foreach((e,t)=>{let r=A(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))}),hs(e,t,n,l,i,a,s,o)}}function _s(e,t,n,r,i){let a=t.serverCache,o=ho(t,a.getNode(),a.isFullyInitialized()||j(n),a.isFiltered());return ls(e,o,n,r,ts,i)}function vs(e,t,r,i,a,o){let s;if(Yo(i,r)!=null)return t;{let c=new ns(i,t,a),l=t.eventCache.getNode(),u;if(j(r)||O(r)===`.priority`){let r;if(t.serverCache.isFullyInitialized())r=Ko(i,_o(t));else{let e=t.serverCache.getNode();n(e instanceof R,`serverChildren would be complete if leaf node`),r=qo(i,e)}r=r,u=e.filter.updateFullNode(l,r,o)}else{let n=O(r),a=Zo(i,n,t.serverCache);a==null&&t.serverCache.isCompleteForChild(n)&&(a=l.getImmediateChild(n)),u=a==null?t.eventCache.getNode().hasChild(n)?e.filter.updateChild(l,n,R.EMPTY_NODE,k(r),c,o):l:e.filter.updateChild(l,n,a,k(r),c,o),u.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=Ko(i,_o(t)),s.isLeafNode()&&(u=e.filter.updateFullNode(u,s,o)))}return s=t.serverCache.isFullyInitialized()||Yo(i,D())!=null,mo(t,u,s,e.filter.filtersNodes())}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ys=class{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let n=this.query_._queryParams,r=new Ia(n.getIndex()),i=Ba(n);this.processor_=rs(i);let a=t.serverCache,o=t.eventCache,s=r.updateFullNode(R.EMPTY_NODE,a.getNode(),null),c=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),l=new V(s,a.isFullyInitialized(),r.filtersNodes()),u=new V(c,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=po(u,l),this.eventGenerator_=new so(this.query_)}get query(){return this.query_}};function bs(e){return e.viewCache_.serverCache.getNode()}function xs(e){return go(e.viewCache_)}function Ss(e,t){let n=_o(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!j(t)&&!n.getImmediateChild(O(t)).isEmpty())?n.getChild(t):null}function Cs(e){return e.eventRegistrations_.length===0}function ws(e,t){e.eventRegistrations_.push(t)}function Ts(e,t,r){let i=[];if(r){n(t==null,`A cancel should cancel all event registrations.`);let a=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(r,a);t&&i.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){let i=e.eventRegistrations_[r];if(!i.matches(t))n.push(i);else if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Es(e,t,r,i){t.type===B.MERGE&&t.source.queryId!==null&&(n(_o(e.viewCache_),`We should always have a full cache before handling merges`),n(go(e.viewCache_),`Missing event cache, even though we have a server cache`));let a=e.viewCache_,o=ss(e.processor_,a,t,r,i);return os(e.processor_,o.viewCache),n(o.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),`Once a server snap is complete, it should never go back`),e.viewCache_=o.viewCache,Os(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Ds(e,t){let n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(L,(e,t)=>{r.push(Ma(e,t))}),n.isFullyInitialized()&&r.push(ja(n.getNode())),Os(e,r,n.getNode(),t)}function Os(e,t,n,r){let i=r?[r]:e.eventRegistrations_;return co(e.eventGenerator_,t,n,i)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ks,As=class{constructor(){this.views=new Map}};function js(e){n(!ks,`__referenceConstructor has already been defined`),ks=e}function Ms(){return n(ks,`Reference.ts has not been loaded`),ks}function Ns(e){return e.views.size===0}function Ps(e,t,r,i){let a=t.source.queryId;if(a!==null){let o=e.views.get(a);return n(o!=null,`SyncTree gave us an op for an invalid query.`),Es(o,t,r,i)}else{let n=[];for(let a of e.views.values())n=n.concat(Es(a,t,r,i));return n}}function Fs(e,t,n,r,i){let a=t._queryIdentifier,o=e.views.get(a);if(!o){let e=Ko(n,i?r:null),a=!1;e?a=!0:r instanceof R?(e=qo(n,r),a=!1):(e=R.EMPTY_NODE,a=!1);let o=po(new V(e,a,!1),new V(r,i,!1));return new ys(t,o)}return o}function Is(e,t,n,r,i,a){let o=Fs(e,t,r,i,a);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),ws(o,n),Ds(o,n)}function Ls(e,t,n,r){let i=t._queryIdentifier,a=[],o=[],s=Hs(e);if(i===`default`)for(let[t,i]of e.views.entries())o=o.concat(Ts(i,n,r)),Cs(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||a.push(i.query));else{let t=e.views.get(i);t&&(o=o.concat(Ts(t,n,r)),Cs(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||a.push(t.query)))}return s&&!Hs(e)&&a.push(new(Ms())(t._repo,t._path)),{removed:a,events:o}}function Rs(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function zs(e,t){let n=null;for(let r of e.views.values())n||=Ss(r,t);return n}function Bs(e,t){if(t._queryParams.loadsAllData())return Us(e);{let n=t._queryIdentifier;return e.views.get(n)}}function Vs(e,t){return Bs(e,t)!=null}function Hs(e){return Us(e)!=null}function Us(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ws;function Gs(e){n(!Ws,`__referenceConstructor has already been defined`),Ws=e}function Ks(){return n(Ws,`Reference.ts has not been loaded`),Ws}var qs=1,Js=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=Go(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function Ys(e,t,n,r,i){return jo(e.pendingWriteTree_,t,n,r,i),i?cc(e,new ao(eo(),t,n)):[]}function Xs(e,t,n,r){Mo(e.pendingWriteTree_,t,n,r);let i=H.fromObject(n);return cc(e,new oo(eo(),t,i))}function Zs(e,t,n=!1){let r=No(e.pendingWriteTree_,t);if(Po(e.pendingWriteTree_,t)){let t=new H(null);return r.snap==null?T(r.children,e=>{t=t.set(new E(e),!0)}):t=t.set(D(),!0),cc(e,new ro(r.path,t,n))}else return[]}function Qs(e,t,n){return cc(e,new ao(to(),t,n))}function $s(e,t,n){let r=H.fromObject(n);return cc(e,new oo(to(),t,r))}function ec(e,t){return cc(e,new io(to(),t))}function tc(e,t,n){let r=mc(e,n);if(r){let n=hc(r),i=n.path,a=n.queryId,o=M(i,t),s=new io(no(a),o);return gc(e,i,s)}else return[]}function nc(e,t,n,r,i=!1){let a=t._path,o=e.syncPointTree_.get(a),s=[];if(o&&(t._queryIdentifier===`default`||Vs(o,t))){let c=Ls(o,t,n,r);Ns(o)&&(e.syncPointTree_=e.syncPointTree_.remove(a));let l=c.removed;if(s=c.events,!i){let n=l.findIndex(e=>e._queryParams.loadsAllData())!==-1,i=e.syncPointTree_.findOnPath(a,(e,t)=>Hs(t));if(n&&!i){let t=e.syncPointTree_.subtree(a);if(!t.isEmpty()){let n=_c(t);for(let t=0;t<n.length;++t){let r=n[t],i=r.query,a=dc(e,r);e.listenProvider_.startListening(vc(i),fc(e,i),a.hashFn,a.onComplete)}}}!i&&l.length>0&&!r&&(n?e.listenProvider_.stopListening(vc(t),null):l.forEach(t=>{let n=e.queryToTagMap.get(pc(t));e.listenProvider_.stopListening(vc(t),n)}))}yc(e,l)}return s}function rc(e,t,n,r){let i=mc(e,r);if(i!=null){let r=hc(i),a=r.path,o=r.queryId,s=M(a,t),c=new ao(no(o),s,n);return gc(e,a,c)}else return[]}function ic(e,t,n,r){let i=mc(e,r);if(i){let r=hc(i),a=r.path,o=r.queryId,s=M(a,t),c=H.fromObject(n),l=new oo(no(o),s,c);return gc(e,a,l)}else return[]}function ac(e,t,r,i=!1){let a=t._path,o=null,s=!1;e.syncPointTree_.foreachOnPath(a,(e,t)=>{let n=M(e,a);o||=zs(t,n),s||=Hs(t)});let c=e.syncPointTree_.get(a);c?(s||=Hs(c),o||=zs(c,D())):(c=new As,e.syncPointTree_=e.syncPointTree_.set(a,c));let l;o==null?(l=!1,o=R.EMPTY_NODE,e.syncPointTree_.subtree(a).foreachChild((e,t)=>{let n=zs(t,D());n&&(o=o.updateImmediateChild(e,n))})):l=!0;let u=Vs(c,t);if(!u&&!t._queryParams.loadsAllData()){let r=pc(t);n(!e.queryToTagMap.has(r),`View does not exist, but we have a tag`);let i=bc();e.queryToTagMap.set(r,i),e.tagToQueryMap.set(i,r)}let d=Ao(e.pendingWriteTree_,a),f=Is(c,t,r,d,o,l);if(!u&&!s&&!i){let n=Bs(c,t);f=f.concat(xc(e,t,n))}return f}function oc(e,t,n){let r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(e,n)=>{let r=M(e,t),i=zs(n,r);if(i)return i});return zo(r,t,i,n,!0)}function sc(e,t){let n=t._path,r=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{let i=M(e,n);r||=zs(t,i)});let i=e.syncPointTree_.get(n);i?r||=zs(i,D()):(i=new As,e.syncPointTree_=e.syncPointTree_.set(n,i));let a=r!=null,o=a?new V(r,!0,!1):null,s=Ao(e.pendingWriteTree_,t._path),c=Fs(i,t,s,a?o.getNode():R.EMPTY_NODE,a);return xs(c)}function cc(e,t){return lc(t,e.syncPointTree_,null,Ao(e.pendingWriteTree_,D()))}function lc(e,t,n,r){if(j(e.path))return uc(e,t,n,r);{let i=t.get(D());n==null&&i!=null&&(n=zs(i,D()));let a=[],o=O(e.path),s=e.operationForChild(o),c=t.children.get(o);if(c&&s){let e=n?n.getImmediateChild(o):null,t=Qo(r,o);a=a.concat(lc(s,c,e,t))}return i&&(a=a.concat(Ps(i,e,r,n))),a}}function uc(e,t,n,r){let i=t.get(D());n==null&&i!=null&&(n=zs(i,D()));let a=[];return t.children.inorderTraversal((t,i)=>{let o=n?n.getImmediateChild(t):null,s=Qo(r,t),c=e.operationForChild(t);c&&(a=a.concat(uc(c,i,o,s)))}),i&&(a=a.concat(Ps(i,e,r,n))),a}function dc(e,t){let n=t.query,r=fc(e,n);return{hashFn:()=>(bs(t)||R.EMPTY_NODE).hash(),onComplete:t=>{if(t===`ok`)return r?tc(e,n._path,r):ec(e,n._path);{let r=_r(t,n);return nc(e,n,null,r)}}}}function fc(e,t){let n=pc(t);return e.queryToTagMap.get(n)}function pc(e){return e._path.toString()+`$`+e._queryIdentifier}function mc(e,t){return e.tagToQueryMap.get(t)}function hc(e){let t=e.indexOf(`$`);return n(t!==-1&&t<e.length-1,`Bad queryKey.`),{queryId:e.substr(t+1),path:new E(e.substr(0,t))}}function gc(e,t,r){let i=e.syncPointTree_.get(t);n(i,`Missing sync point for query tag that we're tracking`);let a=Ao(e.pendingWriteTree_,t);return Ps(i,r,a,null)}function _c(e){return e.fold((e,t,n)=>{if(t&&Hs(t))return[Us(t)];{let e=[];return t&&(e=Rs(t)),T(n,(t,n)=>{e=e.concat(n)}),e}})}function vc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ks())(e._repo,e._path):e}function yc(e,t){for(let n=0;n<t.length;++n){let r=t[n];if(!r._queryParams.loadsAllData()){let t=pc(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function bc(){return qs++}function xc(e,t,r){let i=t._path,a=fc(e,t),o=dc(e,r),s=e.listenProvider_.startListening(vc(t),a,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(i);if(a)n(!Hs(c.value),`If we're adding a query, it shouldn't be shadowed`);else{let t=c.fold((e,t,n)=>{if(!j(e)&&t&&Hs(t))return[Us(t).query];{let e=[];return t&&(e=e.concat(Rs(t).map(e=>e.query))),T(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){let r=t[n];e.listenProvider_.stopListening(vc(r),fc(e,r))}}return s}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Sc=class e{constructor(e){this.node_=e}getImmediateChild(t){let n=this.node_.getImmediateChild(t);return new e(n)}node(){return this.node_}},Cc=class e{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(t){let n=A(this.path_,t);return new e(this.syncTree_,n)}node(){return oc(this.syncTree_,this.path_)}},wc=function(e){return e||={},e.timestamp=e.timestamp||new Date().getTime(),e},Tc=function(e,t,r){if(!e||typeof e!=`object`)return e;if(n(`.sv`in e,`Unexpected leaf node or priority contents`),typeof e[`.sv`]==`string`)return Ec(e[`.sv`],t,r);if(typeof e[`.sv`]==`object`)return Dc(e[`.sv`],t);n(!1,`Unexpected server value: `+JSON.stringify(e,null,2))},Ec=function(e,t,r){switch(e){case`timestamp`:return r.timestamp;default:n(!1,`Unexpected server value: `+e)}},Dc=function(e,t,r){e.hasOwnProperty(`increment`)||n(!1,`Unexpected server value: `+JSON.stringify(e,null,2));let i=e.increment;typeof i!=`number`&&n(!1,`Unexpected increment value: `+i);let a=t.node();if(n(a!=null,`Expected ChildrenNode.EMPTY_NODE for nulls`),!a.isLeafNode())return i;let o=a.getValue();return typeof o==`number`?o+i:i},Oc=function(e,t,n,r){return Ac(t,new Cc(n,e),r)},kc=function(e,t,n){return Ac(e,new Sc(t),n)};function Ac(e,t,n){let r=e.getPriority().val(),i=Tc(r,t.getImmediateChild(`.priority`),n),a;if(e.isLeafNode()){let r=e,a=Tc(r.getValue(),t,n);return a!==r.getValue()||i!==r.getPriority().val()?new ha(a,z(i)):e}else{let r=e;return a=r,i!==r.getPriority().val()&&(a=a.updatePriority(new ha(i))),r.forEachChild(L,(e,r)=>{let i=Ac(r,t.getImmediateChild(e),n);i!==r&&(a=a.updateImmediateChild(e,i))}),a}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jc=class{constructor(e=``,t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}};function Mc(e,t){let n=t instanceof E?t:new E(t),r=e,i=O(n);for(;i!==null;){let e=Pe(r.node.children,i)||{children:{},childCount:0};r=new jc(i,r,e),n=k(n),i=O(n)}return r}function Nc(e){return e.node.value}function Pc(e,t){e.node.value=t,Vc(e)}function Fc(e){return e.node.childCount>0}function Ic(e){return Nc(e)===void 0&&!Fc(e)}function Lc(e,t){T(e.node.children,(n,r)=>{t(new jc(n,e,r))})}function Rc(e,t,n,r){n&&!r&&t(e),Lc(e,e=>{Rc(e,t,!0,r)}),n&&r&&t(e)}function zc(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Bc(e){return new E(e.parent===null?e.name:Bc(e.parent)+`/`+e.name)}function Vc(e){e.parent!==null&&Hc(e.parent,e.name,e)}function Hc(e,t,n){let r=Ic(n),i=_(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Vc(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Vc(e))}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Uc=/[\[\].#$\/\u0000-\u001F\u007F]/,Wc=/[\[\].#$\u0000-\u001F\u007F]/,Gc=10*1024*1024,Kc=function(e){return typeof e==`string`&&e.length!==0&&!Uc.test(e)},qc=function(e){return typeof e==`string`&&e.length!==0&&!Wc.test(e)},Jc=function(e){return e&&=e.replace(/^\/*\.info(\/|$)/,`/`),qc(e)},Yc=function(e){return e===null||typeof e==`string`||typeof e==`number`&&!ar(e)||e&&typeof e==`object`&&_(e,`.sv`)},Xc=function(e,t,n,r){r&&t===void 0||Zc(qe(e,`value`),t,n)},Zc=function(e,t,n){let r=n instanceof E?new Hi(n,e):n;if(t===void 0)throw Error(e+`contains undefined `+Ki(r));if(typeof t==`function`)throw Error(e+`contains a function `+Ki(r)+` with contents = `+t.toString());if(ar(t))throw Error(e+`contains `+t.toString()+` `+Ki(r));if(typeof t==`string`&&t.length>Gc/3&&Ye(t)>Gc)throw Error(e+`contains a string greater than 10485760 utf8 bytes `+Ki(r)+` ('`+t.substring(0,50)+`...')`);if(t&&typeof t==`object`){let n=!1,i=!1;if(T(t,(t,a)=>{if(t===`.value`)n=!0;else if(t!==`.priority`&&t!==`.sv`&&(i=!0,!Kc(t)))throw Error(e+` contains an invalid key (`+t+`) `+Ki(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ui(r,t),Zc(e,a,r),Wi(r)}),n&&i)throw Error(e+` contains ".value" child `+Ki(r)+` in addition to actual children.`)}},Qc=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];let i=Ri(r);for(let t=0;t<i.length;t++)if(!(i[t]===`.priority`&&t===i.length-1)&&!Kc(i[t]))throw Error(e+`contains an invalid key (`+i[t]+`) in path `+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}t.sort(Bi);let i=null;for(n=0;n<t.length;n++){if(r=t[n],i!==null&&N(i,r))throw Error(e+`contains a path `+i.toString()+` that is ancestor of another path `+r.toString());i=r}},$c=function(e,t,n,r){if(r&&t===void 0)return;let i=qe(e,`values`);if(!(t&&typeof t==`object`)||Array.isArray(t))throw Error(i+` must be an object containing the children to replace.`);let a=[];T(t,(e,t)=>{let r=new E(e);if(Zc(i,t,A(n,r)),Ii(r)===`.priority`&&!Yc(t))throw Error(i+`contains an invalid value for '`+r.toString()+`', which must be a valid Firebase priority (a string, finite number, server value, or null).`);a.push(r)}),Qc(i,a)},el=function(e,t,n,r){if(!(r&&n===void 0)&&!qc(n))throw Error(qe(e,t)+`was an invalid path = "`+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},tl=function(e,t,n,r){n&&=n.replace(/^\/*\.info(\/|$)/,`/`),el(e,t,n,r)},nl=function(e,t){if(O(t)===`.info`)throw Error(e+` failed = Can't modify data under /.info/`)},rl=function(e,t){let n=t.path.toString();if(typeof t.repoInfo.host!=`string`||t.repoInfo.host.length===0||!Kc(t.repoInfo.namespace)&&t.repoInfo.host.split(`:`)[0]!==`localhost`||n.length!==0&&!Jc(n))throw Error(qe(e,`url`)+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)},il=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function al(e,t){let n=null;for(let r=0;r<t.length;r++){let i=t[r],a=i.getPath();n!==null&&!Vi(a,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function ol(e,t,n){al(e,n),sl(e,e=>Vi(e,t))}function W(e,t,n){al(e,n),sl(e,e=>N(e,t)||N(t,e))}function sl(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){let i=e.eventLists_[r];if(i){let a=i.path;t(a)?(cl(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function cl(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(n!==null){e.events[t]=null;let r=n.getEventRunner();$n&&S(`event: `+n.toString()),Sr(r)}}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ll=`repo_interrupt`,ul=25,dl=class{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new il,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ga(),this.transactionQueueTree_=new jc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?`https://`:`http://`)+this.repoInfo_.host}};function fl(e,t,n){if(e.stats_=Gr(e.repoInfo_),e.forceRestClient_||Cr())e.server_=new Ua(e.repoInfo_,(t,n,r,i)=>{hl(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>gl(e,!0),0);else{if(n!=null){if(typeof n!=`object`)throw Error(`Only objects are supported for option databaseAuthVariableOverride`);try{g(n)}catch(e){throw Error(`Invalid authOverride provided: `+e)}}e.persistentConnection_=new ta(e.repoInfo_,t,(t,n,r,i)=>{hl(e,t,n,r,i)},t=>{gl(e,t)},t=>{_l(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=Kr(e.repoInfo_,()=>new $a(e.stats_,e.server_)),e.infoData_=new Wa,e.infoSyncTree_=new Js({startListening:(t,n,r,i)=>{let a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=Qs(e.infoSyncTree_,t._path,o),setTimeout(()=>{i(`ok`)},0)),a},stopListening:()=>{}}),vl(e,`connected`,!1),e.serverSyncTree_=new Js({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{let a=i(n,r);W(e.eventQueue_,t._path,a)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function pl(e){let t=e.infoData_.getNode(new E(`.info/serverTimeOffset`)).val()||0;return new Date().getTime()+t}function ml(e){return wc({timestamp:pl(e)})}function hl(e,t,n,r,i){e.dataUpdateCount++;let a=new E(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){let t=Ie(n,e=>z(e));o=ic(e.serverSyncTree_,a,t,i)}else{let t=z(n);o=rc(e.serverSyncTree_,a,t,i)}else if(r){let t=Ie(n,e=>z(e));o=$s(e.serverSyncTree_,a,t)}else{let t=z(n);o=Qs(e.serverSyncTree_,a,t)}let s=a;o.length>0&&(s=Ml(e,a)),W(e.eventQueue_,s,o)}function gl(e,t){vl(e,`connected`,t),t===!1&&Cl(e)}function _l(e,t){T(t,(t,n)=>{vl(e,t,n)})}function vl(e,t,n){let r=new E(`/.info/`+t),i=z(n);e.infoData_.updateSnapshot(r,i);let a=Qs(e.infoSyncTree_,r,i);W(e.eventQueue_,r,a)}function yl(e){return e.nextWriteId_++}function bl(e,t,n){let r=sc(e.serverSyncTree_,t);return r==null?e.server_.get(t).then(r=>{let i=z(r).withIndex(t._queryParams.getIndex());ac(e.serverSyncTree_,t,n,!0);let a;if(t._queryParams.loadsAllData())a=Qs(e.serverSyncTree_,t._path,i);else{let n=fc(e.serverSyncTree_,t);a=rc(e.serverSyncTree_,t._path,i,n)}return W(e.eventQueue_,t._path,a),nc(e.serverSyncTree_,t,n,null,!0),i},n=>(Dl(e,`get for query `+g(t)+` failed: `+n),Promise.reject(Error(n)))):Promise.resolve(r)}function xl(e,t,n,r,i){Dl(e,`set`,{path:t.toString(),value:n,priority:r});let a=ml(e),o=z(n,r),s=oc(e.serverSyncTree_,t),c=kc(o,s,a),l=yl(e),u=Ys(e.serverSyncTree_,t,c,l,!0);al(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),(n,r)=>{let a=n===`ok`;a||w(`set at `+t+` failed: `+n);let o=Zs(e.serverSyncTree_,l,!a);W(e.eventQueue_,t,o),Ol(e,i,n,r)});let d=Rl(e,t);Ml(e,d),W(e.eventQueue_,d,[])}function Sl(e,t,n,r){Dl(e,`update`,{path:t.toString(),value:n});let i=!0,a=ml(e),o={};if(T(n,(n,r)=>{i=!1,o[n]=Oc(A(t,n),z(r),e.serverSyncTree_,a)}),i)S(`update() called with empty data.  Don't do anything.`),Ol(e,r,`ok`,void 0);else{let i=yl(e),a=Xs(e.serverSyncTree_,t,o,i);al(e.eventQueue_,a),e.server_.merge(t.toString(),n,(n,a)=>{let o=n===`ok`;o||w(`update at `+t+` failed: `+n);let s=Zs(e.serverSyncTree_,i,!o),c=s.length>0?Ml(e,t):t;W(e.eventQueue_,c,s),Ol(e,r,n,a)}),T(n,n=>{let r=Rl(e,A(t,n));Ml(e,r)}),W(e.eventQueue_,t,[])}}function Cl(e){Dl(e,`onDisconnectEvents`);let t=ml(e),n=Ga();qa(e.onDisconnect_,D(),(r,i)=>{let a=Oc(r,i,e.serverSyncTree_,t);Ka(n,r,a)});let r=[];qa(n,D(),(t,n)=>{r=r.concat(Qs(e.serverSyncTree_,t,n));let i=Rl(e,t);Ml(e,i)}),e.onDisconnect_=Ga(),W(e.eventQueue_,D(),r)}function wl(e,t,n){let r;r=O(t._path)===`.info`?ac(e.infoSyncTree_,t,n):ac(e.serverSyncTree_,t,n),ol(e.eventQueue_,t._path,r)}function Tl(e,t,n){let r;r=O(t._path)===`.info`?nc(e.infoSyncTree_,t,n):nc(e.serverSyncTree_,t,n),ol(e.eventQueue_,t._path,r)}function El(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ll)}function Dl(e,...t){let n=``;e.persistentConnection_&&(n=e.persistentConnection_.id+`:`),S(n,...t)}function Ol(e,t,n,r){t&&Sr(()=>{if(n===`ok`)t(null);else{let e=(n||`error`).toUpperCase(),i=e;r&&(i+=`: `+r);let a=Error(i);a.code=e,t(a)}})}function kl(e,t,n){return oc(e.serverSyncTree_,t,n)||R.EMPTY_NODE}function Al(e,t=e.transactionQueueTree_){if(t||Ll(e,t),Nc(t)){let r=Fl(e,t);n(r.length>0,`Sending zero length transaction queue`),r.every(e=>e.status===0)&&jl(e,Bc(t),r)}else Fc(t)&&Lc(t,t=>{Al(e,t)})}function jl(e,t,r){let i=r.map(e=>e.currentWriteId),a=kl(e,t,i),o=a,s=a.hash();for(let e=0;e<r.length;e++){let i=r[e];n(i.status===0,`tryToSendTransactionQueue_: items in queue should all be run.`),i.status=1,i.retryCount++;let a=M(t,i.path);o=o.updateChild(a,i.currentOutputSnapshotRaw)}let c=o.val(!0),l=t;e.server_.put(l.toString(),c,n=>{Dl(e,`transaction put response`,{path:l.toString(),status:n});let i=[];if(n===`ok`){let n=[];for(let t=0;t<r.length;t++)r[t].status=2,i=i.concat(Zs(e.serverSyncTree_,r[t].currentWriteId)),r[t].onComplete&&n.push(()=>r[t].onComplete(null,!0,r[t].currentOutputSnapshotResolved)),r[t].unwatcher();Ll(e,Mc(e.transactionQueueTree_,t)),Al(e,e.transactionQueueTree_),W(e.eventQueue_,t,i);for(let e=0;e<n.length;e++)Sr(n[e])}else{if(n===`datastale`)for(let e=0;e<r.length;e++)r[e].status===3?r[e].status=4:r[e].status=0;else{w(`transaction at `+l.toString()+` failed: `+n);for(let e=0;e<r.length;e++)r[e].status=4,r[e].abortReason=n}Ml(e,t)}},s)}function Ml(e,t){let n=Pl(e,t),r=Bc(n),i=Fl(e,n);return Nl(e,i,r),r}function Nl(e,t,r){if(t.length===0)return;let i=[],a=[],o=t.filter(e=>e.status===0).map(e=>e.currentWriteId);for(let s=0;s<t.length;s++){let c=t[s],l=M(r,c.path),u=!1,d;if(n(l!==null,`rerunTransactionsUnderNode_: relativePath should not be null.`),c.status===4)u=!0,d=c.abortReason,a=a.concat(Zs(e.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=ul)u=!0,d=`maxretry`,a=a.concat(Zs(e.serverSyncTree_,c.currentWriteId,!0));else{let n=kl(e,c.path,o);c.currentInputSnapshot=n;let r=t[s].update(n.val());if(r!==void 0){Zc(`transaction failed: Data returned `,r,c.path);let t=z(r);typeof r==`object`&&r&&_(r,`.priority`)||(t=t.updatePriority(n.getPriority()));let i=c.currentWriteId,s=ml(e),l=kc(t,n,s);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=yl(e),o.splice(o.indexOf(i),1),a=a.concat(Ys(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),a=a.concat(Zs(e.serverSyncTree_,i,!0))}else u=!0,d=`nodata`,a=a.concat(Zs(e.serverSyncTree_,c.currentWriteId,!0))}W(e.eventQueue_,r,a),a=[],u&&(t[s].status=2,(function(e){setTimeout(e,0)})(t[s].unwatcher),t[s].onComplete&&(d===`nodata`?i.push(()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot)):i.push(()=>t[s].onComplete(Error(d),!1,null))))}Ll(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Sr(i[e]);Al(e,e.transactionQueueTree_)}function Pl(e,t){let n,r=e.transactionQueueTree_;for(n=O(t);n!==null&&Nc(r)===void 0;)r=Mc(r,n),t=k(t),n=O(t);return r}function Fl(e,t){let n=[];return Il(e,t,n),n.sort((e,t)=>e.order-t.order),n}function Il(e,t,n){let r=Nc(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Lc(t,t=>{Il(e,t,n)})}function Ll(e,t){let n=Nc(t);if(n){let e=0;for(let t=0;t<n.length;t++)n[t].status!==2&&(n[e]=n[t],e++);n.length=e,Pc(t,n.length>0?n:void 0)}Lc(t,t=>{Ll(e,t)})}function Rl(e,t){let n=Bc(Pl(e,t)),r=Mc(e.transactionQueueTree_,t);return zc(r,t=>{zl(e,t)}),zl(e,r),Rc(r,t=>{zl(e,t)}),n}function zl(e,t){let r=Nc(t);if(r){let i=[],a=[],o=-1;for(let t=0;t<r.length;t++)r[t].status===3||(r[t].status===1?(n(o===t-1,`All SENT items should be at beginning of queue.`),o=t,r[t].status=3,r[t].abortReason=`set`):(n(r[t].status===0,`Unexpected transaction status in abort`),r[t].unwatcher(),a=a.concat(Zs(e.serverSyncTree_,r[t].currentWriteId,!0)),r[t].onComplete&&i.push(r[t].onComplete.bind(null,Error(`set`),!1,null))));o===-1?Pc(t,void 0):r.length=o+1,W(e.eventQueue_,Bc(t),a);for(let e=0;e<i.length;e++)Sr(i[e])}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Bl(e){let t=``,n=e.split(`/`);for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g,` `))}catch{}t+=`/`+r}return t}function Vl(e){let t={};e.charAt(0)===`?`&&(e=e.substring(1));for(let n of e.split(`&`)){if(n.length===0)continue;let r=n.split(`=`);r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):w(`Invalid query segment '${n}' in query '${e}'`)}return t}var Hl=function(e,t){let n=Ul(e),r=n.namespace;n.domain===`firebase.com`&&C(n.host+` is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead`),(!r||r===`undefined`)&&n.domain!==`localhost`&&C(`Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com`),n.secure||ir();let i=n.scheme===`ws`||n.scheme===`wss`;return{repoInfo:new zr(n.host,n.secure,r,i,t,``,r!==n.subdomain),path:new E(n.pathString)}},Ul=function(e){let t=``,n=``,r=``,i=``,a=``,o=!0,s=`https`,c=443;if(typeof e==`string`){let l=e.indexOf(`//`);l>=0&&(s=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf(`/`);u===-1&&(u=e.length);let d=e.indexOf(`?`);d===-1&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(i=Bl(e.substring(u,d)));let f=Vl(e.substring(Math.min(e.length,d)));l=t.indexOf(`:`),l>=0?(o=s===`https`||s===`wss`,c=parseInt(t.substring(l+1),10)):l=t.length;let p=t.slice(0,l);if(p.toLowerCase()===`localhost`)n=`localhost`;else if(p.split(`.`).length<=2)n=p;else{let e=t.indexOf(`.`);r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),a=r}`ns`in f&&(a=f.ns)}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},Wl=`-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz`;(function(){let e=0,t=[];return function(r){let i=r===e;e=r;let a,o=Array(8);for(a=7;a>=0;a--)o[a]=Wl.charAt(r%64),r=Math.floor(r/64);n(r===0,`Cannot push at time == 0`);let s=o.join(``);if(i){for(a=11;a>=0&&t[a]===63;a--)t[a]=0;t[a]++}else for(a=0;a<12;a++)t[a]=Math.floor(Math.random()*64);for(a=0;a<12;a++)s+=Wl.charAt(t[a]);return n(s.length===20,`nextPushId: Length should be 20.`),s}})();
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Gl=class{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){let e=this.snapshot.ref;return this.eventType===`value`?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+`:`+this.eventType+`:`+g(this.snapshot.exportVal())}},Kl=class{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return`cancel`}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+`:cancel`}},ql=class{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return n(this.hasCancelCallback,`Raising a cancel event on a listener with no cancel callback`),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}},Jl=class e{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return j(this._path)?null:Ii(this._path)}get ref(){return new Yl(this._repo,this._path)}get _queryIdentifier(){let e=Ha(this._queryParams),t=fr(e);return t===`{}`?`default`:t}get _queryObject(){return Ha(this._queryParams)}isEqual(t){if(t=v(t),!(t instanceof e))return!1;let n=this._repo===t._repo,r=Vi(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Li(this._path)}},Yl=class e extends Jl{constructor(e,t){super(e,t,new za,!1)}get parent(){let t=zi(this._path);return t===null?null:new e(this._repo,t)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}},Xl=class e{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){let n=new E(t),r=Ql(this.ref,t);return new e(this._node.getChild(n),r,L)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,r)=>t(new e(r,Ql(this.ref,n),L)))}hasChild(e){let t=new E(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function Zl(e,t){return e=v(e),e._checkNotDeleted(`ref`),t===void 0?e._root:Ql(e._root,t)}function Ql(e,t){return e=v(e),O(e._path)===null?tl(`child`,`path`,t,!1):el(`child`,`path`,t,!1),new Yl(e._repo,A(e._path,t))}function $l(e,t){e=v(e),nl(`set`,e._path),Xc(`set`,t,e._path,!1);let n=new le;return xl(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function eu(e,t){$c(`update`,t,e._path,!1);let n=new le;return Sl(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function tu(e){e=v(e);let t=new ql(()=>{}),n=new nu(t);return bl(e._repo,e,n).then(t=>new Xl(t,new Yl(e._repo,e._path),e._queryParams.getIndex()))}var nu=class e{constructor(e){this.callbackContext=e}respondsTo(e){return e===`value`}createEvent(e,t){let n=t._queryParams.getIndex();return new Gl(`value`,this,new Xl(e.snapshotNode,new Yl(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()===`cancel`?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Kl(this,e,t):null}matches(t){return t instanceof e?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}},ru=class e{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e===`children_added`?`child_added`:e;return t=t===`children_removed`?`child_removed`:t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Kl(this,e,t):null}createEvent(e,t){n(e.childName!=null,`Child events should have a childName.`);let r=Ql(new Yl(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Gl(e.type,this,new Xl(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()===`cancel`?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(t){return t instanceof e?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}};function iu(e,t,n,r,i){let a;if(typeof r==`object`&&(a=void 0,i=r),typeof r==`function`&&(a=r),i&&i.onlyOnce){let t=n,r=(n,r)=>{Tl(e._repo,e,s),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}let o=new ql(n,a||void 0),s=t===`value`?new nu(o):new ru(t,o);return wl(e._repo,e,s),()=>Tl(e._repo,e,s)}function au(e,t,n,r){return iu(e,`value`,t,n,r)}js(Yl),Gs(Yl);
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ou=`FIREBASE_DATABASE_EMULATOR_HOST`,su={},cu=!1;function lu(e,t,n,r){let i=t.lastIndexOf(`:`),a=t.substring(0,i),o=ue(a);e.repoInfo_=new zr(t,o,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(e.authTokenProvider_=r)}function uu(e,t,n,r,i){let a=r||e.options.databaseURL;a===void 0&&(e.options.projectId||C(`Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().`),S(`Using default host for project `,e.options.projectId),a=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=Hl(a,i),s=o.repoInfo,c,l;typeof process<`u`&&(l={}[ou]),l?(c=!0,a=`http://${l}?ns=${s.namespace}`,o=Hl(a,i),s=o.repoInfo):c=!o.repoInfo.secure;let u=i&&c?new Dr(Dr.OWNER):new Er(e.name,e.options,t);rl(`Invalid Firebase Database URL`,o),j(o.path)||C(`Database URL must point to the root of a Firebase Database (not including a child path).`);let d=fu(s,e,u,new Tr(e,n));return new pu(d,e)}function du(e,t){let n=su[t];(!n||n[e.key]!==e)&&C(`Database ${t}(${e.repoInfo_}) has already been deleted.`),El(e),delete n[e.key]}function fu(e,t,n,r){let i=su[t.name];i||(i={},su[t.name]=i);let a=i[e.toURLString()];return a&&C(`Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.`),a=new dl(e,cu,n,r),i[e.toURLString()]=a,a}var pu=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type=`database`,this._instanceStarted=!1}get _repo(){return this._instanceStarted||=(fl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),!0),this._repoInternal}get _root(){return this._rootInternal||=new Yl(this._repo,D()),this._rootInternal}_delete(){return this._rootInternal!==null&&(du(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&C(`Cannot call `+e+` on a deleted database.`)}};function mu(e=xn(),t){let n=gn(e,`database`).getImmediate({identifier:t});if(!n._instanceStarted){let e=oe(`database`);e&&hu(n,...e)}return n}function hu(e,t,n,r={}){e=v(e),e._checkNotDeleted(`useEmulator`);let i=`${t}:${n}`,a=e._repoInternal;if(e._instanceStarted){if(i===e._repoInternal.repoInfo_.host&&Le(r,a.repoInfo_.emulatorOptions))return;C(`connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.`)}let o;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&C(`mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".`),o=new Dr(Dr.OWNER);else if(r.mockUserToken){let t=typeof r.mockUserToken==`string`?r.mockUserToken:fe(r.mockUserToken,e.app.options.projectId);o=new Dr(t)}ue(t)&&(de(t),_e(`Database`,!0)),lu(a,i,r,o)}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function gu(e){Un(yn),hn(new Xe(`database`,(e,{instanceIdentifier:t})=>{let n=e.getProvider(`app`).getImmediate(),r=e.getProvider(`auth-internal`),i=e.getProvider(`app-check-internal`);return uu(n,r,i,t)},`PUBLIC`).setMultipleInstances(!0)),Sn(Bn,Vn,e),Sn(Bn,Vn,`esm2020`)}ta.prototype.simpleListen=function(e,t){this.sendRequest(`q`,{p:e},t)},ta.prototype.echo=function(e,t){this.sendRequest(`echo`,{d:e},t)},gu();function _u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var vu=_u,yu=new De(`auth`,`Firebase`,_u()),bu=new st(`@firebase/auth`);function xu(e,...t){bu.logLevel<=y.WARN&&bu.warn(`Auth (${yn}): ${e}`,...t)}function Su(e,...t){bu.logLevel<=y.ERROR&&bu.error(`Auth (${yn}): ${e}`,...t)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function G(e,...t){throw Tu(e,...t)}function K(e,...t){return Tu(e,...t)}function Cu(e,t,n){let r={...vu(),[t]:n};return new De(`auth`,`Firebase`,r).create(t,{appName:e.name})}function wu(e){return Cu(e,`operation-not-supported-in-this-environment`,`Operations that alter the current user are not supported in conjunction with FirebaseServerApp`)}function Tu(e,...t){if(typeof e!=`string`){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return yu.create(e,...t)}function q(e,t,...n){if(!e)throw Tu(t,...n)}function J(e){let t=`INTERNAL ASSERTION FAILED: `+e;throw Su(t),Error(t)}function Y(e,t){e||J(t)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Eu(){return typeof self<`u`&&self.location?.href||``}function Du(){return Ou()===`http:`||Ou()===`https:`}function Ou(){return typeof self<`u`&&self.location?.protocol||null}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ku(){return typeof navigator<`u`&&navigator&&`onLine`in navigator&&typeof navigator.onLine==`boolean`&&(Du()||be()||`connection`in navigator)?navigator.onLine:!0}function Au(){if(typeof navigator>`u`)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ju=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Y(t>e,`Short delay should be less than long delay!`),this.isMobile=ve()||xe()}get(){return ku()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Mu(e,t){Y(e.emulator,`Emulator should always be set here`);let{url:n}=e.emulator;return t?`${n}${t.startsWith(`/`)?t.slice(1):t}`:n}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Nu=class{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<`u`&&`fetch`in self)return self.fetch;if(typeof globalThis<`u`&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<`u`)return fetch;J(`Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<`u`&&`Headers`in self)return self.Headers;if(typeof globalThis<`u`&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<`u`)return Headers;J(`Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<`u`&&`Response`in self)return self.Response;if(typeof globalThis<`u`&&globalThis.Response)return globalThis.Response;if(typeof Response<`u`)return Response;J(`Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}},Pu={CREDENTIAL_MISMATCH:`custom-token-mismatch`,MISSING_CUSTOM_TOKEN:`internal-error`,INVALID_IDENTIFIER:`invalid-email`,MISSING_CONTINUE_URI:`internal-error`,INVALID_PASSWORD:`wrong-password`,MISSING_PASSWORD:`missing-password`,INVALID_LOGIN_CREDENTIALS:`invalid-credential`,EMAIL_EXISTS:`email-already-in-use`,PASSWORD_LOGIN_DISABLED:`operation-not-allowed`,INVALID_IDP_RESPONSE:`invalid-credential`,INVALID_PENDING_TOKEN:`invalid-credential`,FEDERATED_USER_ID_ALREADY_LINKED:`credential-already-in-use`,MISSING_REQ_TYPE:`internal-error`,EMAIL_NOT_FOUND:`user-not-found`,RESET_PASSWORD_EXCEED_LIMIT:`too-many-requests`,EXPIRED_OOB_CODE:`expired-action-code`,INVALID_OOB_CODE:`invalid-action-code`,MISSING_OOB_CODE:`internal-error`,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:`requires-recent-login`,INVALID_ID_TOKEN:`invalid-user-token`,TOKEN_EXPIRED:`user-token-expired`,USER_NOT_FOUND:`user-token-expired`,TOO_MANY_ATTEMPTS_TRY_LATER:`too-many-requests`,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:`password-does-not-meet-requirements`,INVALID_CODE:`invalid-verification-code`,INVALID_SESSION_INFO:`invalid-verification-id`,INVALID_TEMPORARY_PROOF:`invalid-credential`,MISSING_SESSION_INFO:`missing-verification-id`,SESSION_EXPIRED:`code-expired`,MISSING_ANDROID_PACKAGE_NAME:`missing-android-pkg-name`,UNAUTHORIZED_DOMAIN:`unauthorized-continue-uri`,INVALID_OAUTH_CLIENT_ID:`invalid-oauth-client-id`,ADMIN_ONLY_OPERATION:`admin-restricted-operation`,INVALID_MFA_PENDING_CREDENTIAL:`invalid-multi-factor-session`,MFA_ENROLLMENT_NOT_FOUND:`multi-factor-info-not-found`,MISSING_MFA_ENROLLMENT_ID:`missing-multi-factor-info`,MISSING_MFA_PENDING_CREDENTIAL:`missing-multi-factor-session`,SECOND_FACTOR_EXISTS:`second-factor-already-in-use`,SECOND_FACTOR_LIMIT_EXCEEDED:`maximum-second-factor-count-exceeded`,BLOCKING_FUNCTION_ERROR_RESPONSE:`internal-error`,RECAPTCHA_NOT_ENABLED:`recaptcha-not-enabled`,MISSING_RECAPTCHA_TOKEN:`missing-recaptcha-token`,INVALID_RECAPTCHA_TOKEN:`invalid-recaptcha-token`,INVALID_RECAPTCHA_ACTION:`invalid-recaptcha-action`,MISSING_CLIENT_TYPE:`missing-client-type`,MISSING_RECAPTCHA_VERSION:`missing-recaptcha-version`,INVALID_RECAPTCHA_VERSION:`invalid-recaptcha-version`,INVALID_REQ_TYPE:`invalid-req-type`},Fu=[`/v1/accounts:signInWithCustomToken`,`/v1/accounts:signInWithEmailLink`,`/v1/accounts:signInWithIdp`,`/v1/accounts:signInWithPassword`,`/v1/accounts:signInWithPhoneNumber`,`/v1/token`],Iu=new ju(3e4,6e4);function X(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Z(e,t,n,r,i={}){return Lu(e,i,async()=>{let i={},a={};r&&(t===`GET`?a=r:i={body:JSON.stringify(r)});let o=ze({key:e.config.apiKey,...a}).slice(1),s=await e._getAdditionalHeaders();s[`Content-Type`]=`application/json`,e.languageCode&&(s[`X-Firebase-Locale`]=e.languageCode);let c={method:t,headers:s,...i};return ye()||(c.referrerPolicy=`no-referrer`),e.emulatorConfig&&ue(e.emulatorConfig.host)&&(c.credentials=`include`),Nu.fetch()(await zu(e,e.config.apiHost,n,o),c)})}async function Lu(e,t,n){e._canInitEmulator=!1;let r={...Pu,...t};try{let t=new Vu(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let a=await i.json();if(`needConfirmation`in a)throw Hu(e,`account-exists-with-different-credential`,a);if(i.ok&&!(`errorMessage`in a))return a;{let[t,n]=(i.ok?a.errorMessage:a.error.message).split(` : `);if(t===`FEDERATED_USER_ID_ALREADY_LINKED`)throw Hu(e,`credential-already-in-use`,a);if(t===`EMAIL_EXISTS`)throw Hu(e,`email-already-in-use`,a);if(t===`USER_DISABLED`)throw Hu(e,`user-disabled`,a);let o=r[t]||t.toLowerCase().replace(/[_\s]+/g,`-`);if(n)throw Cu(e,o,n);G(e,o)}}catch(t){if(t instanceof Ee)throw t;G(e,`network-request-failed`,{message:String(t)})}}async function Ru(e,t,n,r,i={}){let a=await Z(e,t,n,r,i);return`mfaPendingCredential`in a&&G(e,`multi-factor-auth-required`,{_serverResponse:a}),a}async function zu(e,t,n,r){let i=`${t}${n}?${r}`,a=e,o=a.config.emulator?Mu(e.config,i):`${e.config.apiScheme}://${i}`;return Fu.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()===`COOKIE`)?a._getPersistence()._getFinalTarget(o).toString():o}function Bu(e){switch(e){case`ENFORCE`:return`ENFORCE`;case`AUDIT`:return`AUDIT`;case`OFF`:return`OFF`;default:return`ENFORCEMENT_STATE_UNSPECIFIED`}}var Vu=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(K(this.auth,`network-request-failed`)),Iu.get())})}};function Hu(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=K(e,t,r);return i.customData._tokenResponse=n,i}function Uu(e){return e!==void 0&&e.enterprise!==void 0}var Wu=class{constructor(e){if(this.siteKey=``,this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw Error(`recaptchaKey undefined`);this.siteKey=e.recaptchaKey.split(`/`)[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Bu(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)===`ENFORCE`||this.getProviderEnforcementState(e)===`AUDIT`}isAnyProviderEnabled(){return this.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`)||this.isProviderEnabled(`PHONE_PROVIDER`)}};async function Gu(e,t){return Z(e,`GET`,`/v2/recaptchaConfig`,X(e,t))}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Ku(e,t){return Z(e,`POST`,`/v1/accounts:delete`,t)}async function qu(e,t){return Z(e,`POST`,`/v1/accounts:lookup`,t)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ju(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Yu(e,t=!1){let n=v(e),r=await n.getIdToken(t),i=Zu(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,`internal-error`);let a=typeof i.firebase==`object`?i.firebase:void 0,o=a?.sign_in_provider;return{claims:i,token:r,authTime:Ju(Xu(i.auth_time)),issuedAtTime:Ju(Xu(i.iat)),expirationTime:Ju(Xu(i.exp)),signInProvider:o||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Xu(e){return Number(e)*1e3}function Zu(e){let[t,n,r]=e.split(`.`);if(t===void 0||n===void 0||r===void 0)return Su(`JWT malformed, contained fewer than 3 sections`),null;try{let e=u(n);return e?JSON.parse(e):(Su(`Failed to decode base64 JWT payload`),null)}catch(e){return Su(`Caught error parsing JWT payload as JSON`,e?.toString()),null}}function Qu(e){let t=Zu(e);return q(t,`internal-error`),q(t.exp!==void 0,`internal-error`),q(t.iat!==void 0,`internal-error`),Number(t.exp)-Number(t.iat)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function $u(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Ee&&ed(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function ed({code:e}){return e===`auth/user-disabled`||e===`auth/user-token-expired`}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var td=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;let e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code===`auth/network-request-failed`&&this.schedule(!0);return}this.schedule()}},nd=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ju(this.lastLoginAt),this.creationTime=Ju(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function rd(e){let t=e.auth,n=await e.getIdToken(),r=await $u(e,qu(t,{idToken:n}));q(r?.users.length,t,`internal-error`);let i=r.users[0];e._notifyReloadListener(i);let a=i.providerUserInfo?.length?od(i.providerUserInfo):[],o=ad(e.providerData,a),s=e.isAnonymous,c=!(e.email&&i.passwordHash)&&!o?.length,l=s?c:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new nd(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,u)}async function id(e){let t=v(e);await rd(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ad(e,t){return[...e.filter(e=>!t.some(t=>t.providerId===e.providerId)),...t]}function od(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||``,displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function sd(e,t){let n=await Lu(e,{},async()=>{let n=ze({grant_type:`refresh_token`,refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=await zu(e,r,`/v1/token`,`key=${i}`),o=await e._getAdditionalHeaders();o[`Content-Type`]=`application/x-www-form-urlencoded`;let s={method:`POST`,headers:o,body:n};return e.emulatorConfig&&ue(e.emulatorConfig.host)&&(s.credentials=`include`),Nu.fetch()(a,s)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cd(e,t){return Z(e,`POST`,`/v2/accounts:revokeToken`,X(e,t))}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ld=class e{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,`internal-error`),q(e.idToken!==void 0,`internal-error`),q(e.refreshToken!==void 0,`internal-error`);let t=`expiresIn`in e&&e.expiresIn!==void 0?Number(e.expiresIn):Qu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,`internal-error`);let t=Qu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,`user-token-expired`),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await sd(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,n){let{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new e;return r&&(q(typeof r==`string`,`internal-error`,{appName:t}),o.refreshToken=r),i&&(q(typeof i==`string`,`internal-error`,{appName:t}),o.accessToken=i),a&&(q(typeof a==`number`,`internal-error`,{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new e,this.toJSON())}_performRefresh(){return J(`not implemented`)}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ud(e,t){q(typeof e==`string`||e===void 0,`internal-error`,{appName:t})}var dd=class e{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId=`firebase`,this.proactiveRefresh=new td(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await $u(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,`internal-error`),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Yu(this,e)}reload(){return id(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,`internal-error`),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(t){let n=new e({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,`internal-error`),this.reloadListener=e,this.reloadUserInfo&&=(this._notifyReloadListener(this.reloadUserInfo),null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await rd(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(x(this.auth.app))return Promise.reject(wu(this.auth));let e=await this.getIdToken();return await $u(this,Ku(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||``}static _fromJSON(t,n){let r=n.displayName??void 0,i=n.email??void 0,a=n.phoneNumber??void 0,o=n.photoURL??void 0,s=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:f,isAnonymous:p,providerData:ee,stsTokenManager:te}=n;q(d&&te,t,`internal-error`);let ne=ld.fromJSON(this.name,te);q(typeof d==`string`,t,`internal-error`),ud(r,t.name),ud(i,t.name),q(typeof f==`boolean`,t,`internal-error`),q(typeof p==`boolean`,t,`internal-error`),ud(a,t.name),ud(o,t.name),ud(s,t.name),ud(c,t.name),ud(l,t.name),ud(u,t.name);let re=new e({uid:d,auth:t,email:i,emailVerified:f,displayName:r,isAnonymous:p,photoURL:o,phoneNumber:a,tenantId:s,stsTokenManager:ne,createdAt:l,lastLoginAt:u});return ee&&Array.isArray(ee)&&(re.providerData=ee.map(e=>({...e}))),c&&(re._redirectEventId=c),re}static async _fromIdTokenResponse(t,n,r=!1){let i=new ld;i.updateFromServerResponse(n);let a=new e({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await rd(a),a}static async _fromGetAccountInfoResponse(t,n,r){let i=n.users[0];q(i.localId!==void 0,`internal-error`);let a=i.providerUserInfo===void 0?[]:od(i.providerUserInfo),o=!(i.email&&i.passwordHash)&&!a?.length,s=new ld;s.updateFromIdToken(r);let c=new e({uid:i.localId,auth:t,stsTokenManager:s,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new nd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(c,l),c}},fd=new Map;function Q(e){Y(e instanceof Function,`Expected a class definition`);let t=fd.get(e);return t?(Y(t instanceof e,`Instance stored in cache mismatched with class`),t):(t=new e,fd.set(e,t),t)}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pd=class{constructor(){this.type=`NONE`,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};pd.type=`NONE`;var md=pd;
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function hd(e,t,n){return`firebase:${e}:${t}:${n}`}var gd=class e{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=hd(this.userKey,r.apiKey,i),this.fullPersistenceKey=hd(`persistence`,r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e==`string`){let t=await qu(this.auth,{idToken:e}).catch(()=>void 0);return t?dd._fromGetAccountInfoResponse(this.auth,t,e):null}return dd._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r=`authUser`){if(!n.length)return new e(Q(md),t,r);let i=(await Promise.all(n.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),a=i[0]||Q(md),o=hd(r,t.config.apiKey,t.name),s=null;for(let e of n)try{let n=await e._get(o);if(n){let r;if(typeof n==`string`){let e=await qu(t,{idToken:n}).catch(()=>void 0);if(!e)break;r=await dd._fromGetAccountInfoResponse(t,e,n)}else r=dd._fromJSON(t,n);e!==a&&(s=r),a=e;break}}catch{}let c=i.filter(e=>e._shouldAllowMigration);return!a._shouldAllowMigration||!c.length?new e(a,t,r):(a=c[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async e=>{if(e!==a)try{await e._remove(o)}catch{}})),new e(a,t,r))}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function _d(e){let t=e.toLowerCase();if(t.includes(`opera/`)||t.includes(`opr/`)||t.includes(`opios/`))return`Opera`;if(xd(t))return`IEMobile`;if(t.includes(`msie`)||t.includes(`trident/`))return`IE`;if(t.includes(`edge/`))return`Edge`;if(vd(t))return`Firefox`;if(t.includes(`silk/`))return`Silk`;if(Cd(t))return`Blackberry`;if(wd(t))return`Webos`;if(yd(t))return`Safari`;if((t.includes(`chrome/`)||bd(t))&&!t.includes(`edge/`))return`Chrome`;if(Sd(t))return`Android`;{let t=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(t?.length===2)return t[1]}return`Other`}function vd(e=m()){return/firefox\//i.test(e)}function yd(e=m()){let t=e.toLowerCase();return t.includes(`safari/`)&&!t.includes(`chrome/`)&&!t.includes(`crios/`)&&!t.includes(`android`)}function bd(e=m()){return/crios\//i.test(e)}function xd(e=m()){return/iemobile/i.test(e)}function Sd(e=m()){return/android/i.test(e)}function Cd(e=m()){return/blackberry/i.test(e)}function wd(e=m()){return/webos/i.test(e)}function Td(e=m()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ed(e=m()){return Td(e)&&!!window.navigator?.standalone}function Dd(){return Se()&&document.documentMode===10}function Od(e=m()){return Td(e)||Sd(e)||wd(e)||Cd(e)||/windows phone/i.test(e)||xd(e)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function kd(e,t=[]){let n;switch(e){case`Browser`:n=_d(m());break;case`Worker`:n=`${_d(m())}-${e}`;break;default:n=e}let r=t.length?t.join(`,`):`FirebaseCore-web`;return`${n}/JsCore/${yn}/${r}`}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ad=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let r=e(t);n(r)}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(let e of t)try{e()}catch{}throw this.auth._errorFactory.create(`login-blocked`,{originalMessage:e?.message})}}};
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function jd(e,t={}){return Z(e,`GET`,`/v2/passwordPolicy`,X(e,t))}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Md=6,Nd=class{constructor(e){let t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Md,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState===`ENFORCEMENT_STATE_UNSPECIFIED`&&(this.enforcementState=`OFF`),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join(``)??``,this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&=t.meetsMinPasswordLength??!0,t.isValid&&=t.meetsMaxPasswordLength??!0,t.isValid&&=t.containsLowercaseLetter??!0,t.isValid&&=t.containsUppercaseLetter??!0,t.isValid&&=t.containsNumericCharacter??!0,t.isValid&&=t.containsNonAlphanumericCharacter??!0,t}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>=`a`&&n<=`z`,n>=`A`&&n<=`Z`,n>=`0`&&n<=`9`,this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||=t),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||=n),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||=r),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||=i)}},Pd=class{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Id(this),this.idTokenSubscription=new Id(this),this.beforeStateQueue=new Ad(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Q(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await gd.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await qu(this,{idToken:e}),n=await dd._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn(`FirebaseServerApp could not login user with provided authIdToken: `,e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(x(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let t=await this.assertedPersistence.getCurrentUser(),n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,a=await this.tryRedirectSignIn(e);(!t||t===i)&&a?.user&&(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,`argument-error`),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rd(e)}catch(e){if(e?.code!==`auth/network-request-failed`)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Au()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(x(this.app))return Promise.reject(wu(this));let t=e?v(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,`invalid-user-token`),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,`tenant-id-mismatch`),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return x(this.app)?Promise.reject(wu(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return x(this.app)?Promise.reject(wu(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Q(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion===this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?t.validatePassword(e):Promise.reject(this._errorFactory.create(`unsupported-password-policy-schema-version`,{}))}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await jd(this),t=new Nd(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new De(`auth`,`Firebase`,e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),n={providerId:`apple.com`,tokenType:`ACCESS_TOKEN`,token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await cd(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Q(e)||this._popupRedirectResolver;q(t,this,`argument-error`),this.redirectPersistenceManager=await gd.create(this,[Q(t._redirectPersistence)],`redirectUser`),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i=typeof t==`function`?t:t.next.bind(t),a=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(o,this,`internal-error`),o.then(()=>{a||i(this.currentUser)}),typeof t==`function`){let i=e.addObserver(t,n,r);return()=>{a=!0,i()}}else{let n=e.addObserver(t);return()=>{a=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,`internal-error`),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e[`X-Firebase-gmpid`]=this.app.options.appId);let t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e[`X-Firebase-Client`]=t);let n=await this._getAppCheckToken();return n&&(e[`X-Firebase-AppCheck`]=n),e}async _getAppCheckToken(){if(x(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&xu(`Error while retrieving App Check token: ${e.error}`),e?.token}};function Fd(e){return v(e)}var Id=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ue(e=>this.observer=e)}get next(){return q(this.observer,this.auth,`internal-error`),this.observer.next.bind(this.observer)}},Ld={async loadJS(){throw Error(`Unable to load external scripts`)},recaptchaV2Script:``,recaptchaEnterpriseScript:``,gapiScript:``};function Rd(e){Ld=e}function zd(e){return Ld.loadJS(e)}function Bd(){return Ld.recaptchaEnterpriseScript}function Vd(){return Ld.gapiScript}function Hd(e){return`__${e}${Math.floor(Math.random()*1e6)}`}var Ud=class{constructor(){this.enterprise=new Wd}ready(e){e()}execute(e,t){return Promise.resolve(`token`)}render(e,t){return``}},Wd=class{ready(e){e()}execute(e,t){return Promise.resolve(`token`)}render(e,t){return``}},Gd=`recaptcha-enterprise`,Kd=`NO_RECAPTCHA`,qd=class{constructor(e){this.type=Gd,this.auth=Fd(e)}async verify(e=`verify`,t=!1){async function n(e){if(!t){if(e.tenantId==null&&e._agentRecaptchaConfig!=null)return e._agentRecaptchaConfig.siteKey;if(e.tenantId!=null&&e._tenantRecaptchaConfigs[e.tenantId]!==void 0)return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{Gu(e,{clientType:`CLIENT_TYPE_WEB`,version:`RECAPTCHA_ENTERPRISE`}).then(r=>{if(r.recaptchaKey===void 0)n(Error(`recaptcha Enterprise site key undefined`));else{let n=new Wu(r);return e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function r(t,n,r){let i=window.grecaptcha;Uu(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Kd)})}):r(Error(`No reCAPTCHA enterprise script loaded.`))}return this.auth.settings.appVerificationDisabledForTesting?new Ud().execute(`siteKey`,{action:`verify`}):new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&Uu(window.grecaptcha))r(n,e,i);else{if(typeof window>`u`){i(Error(`RecaptchaVerifier is only supported in browser`));return}let t=Bd();t.length!==0&&(t+=n),zd(t).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}};async function Jd(e,t,n,r=!1,i=!1){let a=new qd(e),o;if(i)o=Kd;else try{o=await a.verify(n)}catch{o=await a.verify(n,!0)}let s={...t};if(n===`mfaSmsEnrollment`||n===`mfaSmsSignIn`){if(`phoneEnrollmentInfo`in s){let e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:`CLIENT_TYPE_WEB`,recaptchaVersion:`RECAPTCHA_ENTERPRISE`}})}else if(`phoneSignInInfo`in s){let e=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:`CLIENT_TYPE_WEB`,recaptchaVersion:`RECAPTCHA_ENTERPRISE`}})}return s}return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:`CLIENT_TYPE_WEB`}),Object.assign(s,{recaptchaVersion:`RECAPTCHA_ENTERPRISE`}),s}async function Yd(e,t,n,r,i){if(i===`EMAIL_PASSWORD_PROVIDER`)if(e._getRecaptchaConfig()?.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`)){let i=await Jd(e,t,n,n===`getOobCode`);return r(e,i)}else return r(e,t).catch(async i=>{if(i.code===`auth/missing-recaptcha-token`){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await Jd(e,t,n,n===`getOobCode`);return r(e,i)}else return Promise.reject(i)});else if(i===`PHONE_PROVIDER`)if(e._getRecaptchaConfig()?.isProviderEnabled(`PHONE_PROVIDER`)){let i=await Jd(e,t,n);return r(e,i).catch(async i=>{if(e._getRecaptchaConfig()?.getProviderEnforcementState(`PHONE_PROVIDER`)===`AUDIT`&&(i.code===`auth/missing-recaptcha-token`||i.code===`auth/invalid-app-credential`)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);let i=await Jd(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)})}else{let i=await Jd(e,t,n,!1,!0);return r(e,i)}else return Promise.reject(i+` provider is not supported.`)}async function Xd(e){let t=Fd(e),n=await Gu(t,{clientType:`CLIENT_TYPE_WEB`,version:`RECAPTCHA_ENTERPRISE`}),r=new Wu(n);t.tenantId==null?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()&&new qd(t).verify()}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Zd(e,t){let n=gn(e,`auth`);if(n.isInitialized()){let e=n.getImmediate(),r=n.getOptions();if(Le(r,t??{}))return e;G(e,`already-initialized`)}return n.initialize({options:t})}function Qd(e,t){let n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Q);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function $d(e,t,n){let r=Fd(e);q(/^https?:\/\//.test(t),r,`invalid-emulator-scheme`);let i=!!n?.disableWarnings,a=ef(t),{host:o,port:s}=tf(t),c=s===null?``:`:${s}`,l={url:`${a}//${o}${c}/`},u=Object.freeze({host:o,port:s,protocol:a.replace(`:`,``),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,`emulator-config-failed`),q(Le(l,r.config.emulator)&&Le(u,r.emulatorConfig),r,`emulator-config-failed`);return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ue(o)?(de(`${a}//${o}${c}`),_e(`Auth`,!0)):i||rf()}function ef(e){let t=e.indexOf(`:`);return t<0?``:e.substr(0,t+1)}function tf(e){let t=ef(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:``,port:null};let r=n[2].split(`@`).pop()||``,i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let e=i[1];return{host:e,port:nf(r.substr(e.length+1))}}else{let[e,t]=r.split(`:`);return{host:e,port:nf(t)}}}function nf(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}function rf(){function e(){let e=document.createElement(`p`),t=e.style;e.innerText=`Running in emulator mode. Do not use with production credentials.`,t.position=`fixed`,t.width=`100%`,t.backgroundColor=`#ffffff`,t.border=`.1em solid #000000`,t.color=`#b50000`,t.bottom=`0px`,t.left=`0px`,t.margin=`0px`,t.zIndex=`10000`,t.textAlign=`center`,e.classList.add(`firebase-emulator-warning`),document.body.appendChild(e)}typeof console<`u`&&typeof console.info==`function`&&console.info(`WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.`),typeof window<`u`&&typeof document<`u`&&(document.readyState===`loading`?window.addEventListener(`DOMContentLoaded`,e):e())}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var af=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return J(`not implemented`)}_getIdTokenResponse(e){return J(`not implemented`)}_linkToIdToken(e,t){return J(`not implemented`)}_getReauthenticationResolver(e){return J(`not implemented`)}};async function sf(e,t){return Z(e,`POST`,`/v1/accounts:signUp`,t)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function cf(e,t){return Ru(e,`POST`,`/v1/accounts:signInWithPassword`,X(e,t))}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function lf(e,t){return Ru(e,`POST`,`/v1/accounts:signInWithEmailLink`,X(e,t))}async function uf(e,t){return Ru(e,`POST`,`/v1/accounts:signInWithEmailLink`,X(e,t))}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var df=class e extends af{constructor(e,t,n,r=null){super(`password`,n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(t,n){return new e(t,n,`password`)}static _fromEmailAndCode(t,n,r=null){return new e(t,n,`emailLink`,r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e==`string`?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod===`password`)return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod===`emailLink`)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case`password`:let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:`CLIENT_TYPE_WEB`};return Yd(e,t,`signInWithPassword`,cf,`EMAIL_PASSWORD_PROVIDER`);case`emailLink`:return lf(e,{email:this._email,oobCode:this._password});default:G(e,`internal-error`)}}async _linkToIdToken(e,t){switch(this.signInMethod){case`password`:let n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:`CLIENT_TYPE_WEB`};return Yd(e,n,`signUpPassword`,sf,`EMAIL_PASSWORD_PROVIDER`);case`emailLink`:return uf(e,{idToken:t,email:this._email,oobCode:this._password});default:G(e,`internal-error`)}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function ff(e,t){return Ru(e,`POST`,`/v1/accounts:signInWithIdp`,X(e,t))}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pf=`http://localhost`,mf=class e extends af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){let n=new e(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):G(`argument-error`),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){let{providerId:n,signInMethod:r,...i}=typeof t==`string`?JSON.parse(t):t;if(!n||!r)return null;let a=new e(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return ff(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,ff(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ff(e,t)}buildRequest(){let e={requestUri:pf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ze(t)}return e}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function hf(e,t){return Z(e,`POST`,`/v1/accounts:sendVerificationCode`,X(e,t))}async function gf(e,t){return Ru(e,`POST`,`/v1/accounts:signInWithPhoneNumber`,X(e,t))}async function _f(e,t){let n=await Ru(e,`POST`,`/v1/accounts:signInWithPhoneNumber`,X(e,t));if(n.temporaryProof)throw Hu(e,`account-exists-with-different-credential`,n);return n}var vf={USER_NOT_FOUND:`user-not-found`};async function yf(e,t){let n={...t,operation:`REAUTH`};return Ru(e,`POST`,`/v1/accounts:signInWithPhoneNumber`,X(e,n),vf)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var bf=class e extends af{constructor(e){super(`phone`,`phone`),this.params=e}static _fromVerification(t,n){return new e({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new e({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(e){return gf(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return _f(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return yf(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(t){typeof t==`string`&&(t=JSON.parse(t));let{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:a}=t;return!r&&!n&&!i&&!a?null:new e({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:a})}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function xf(e){switch(e){case`recoverEmail`:return`RECOVER_EMAIL`;case`resetPassword`:return`PASSWORD_RESET`;case`signIn`:return`EMAIL_SIGNIN`;case`verifyEmail`:return`VERIFY_EMAIL`;case`verifyAndChangeEmail`:return`VERIFY_AND_CHANGE_EMAIL`;case`revertSecondFactorAddition`:return`REVERT_SECOND_FACTOR_ADDITION`;default:return null}}function Sf(e){let t=Be(Ve(e)).link,n=t?Be(Ve(t)).deep_link_id:null,r=Be(Ve(e)).deep_link_id;return(r?Be(Ve(r)).link:null)||r||n||t||e}var Cf=class e{constructor(e){let t=Be(Ve(e)),n=t.apiKey??null,r=t.oobCode??null,i=xf(t.mode??null);q(n&&r&&i,`argument-error`),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(t){let n=Sf(t);try{return new e(n)}catch{return null}}},wf=class e{constructor(){this.providerId=e.PROVIDER_ID}static credential(e,t){return df._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=Cf.parseLink(t);return q(n,`argument-error`),df._fromEmailAndCode(e,n.code,n.tenantId)}};wf.PROVIDER_ID=`password`,wf.EMAIL_PASSWORD_SIGN_IN_METHOD=`password`,wf.EMAIL_LINK_SIGN_IN_METHOD=`emailLink`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Tf=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}},Ef=class extends Tf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}},Df=class e extends Ef{constructor(){super(`facebook.com`)}static credential(t){return mf._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!(`oauthAccessToken`in t)||!t.oauthAccessToken)return null;try{return e.credential(t.oauthAccessToken)}catch{return null}}};Df.FACEBOOK_SIGN_IN_METHOD=`facebook.com`,Df.PROVIDER_ID=`facebook.com`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Of=class e extends Ef{constructor(){super(`google.com`),this.addScope(`profile`)}static credential(t,n){return mf._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return e.credential(n,r)}catch{return null}}};Of.GOOGLE_SIGN_IN_METHOD=`google.com`,Of.PROVIDER_ID=`google.com`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kf=class e extends Ef{constructor(){super(`github.com`)}static credential(t){return mf._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!(`oauthAccessToken`in t)||!t.oauthAccessToken)return null;try{return e.credential(t.oauthAccessToken)}catch{return null}}};kf.GITHUB_SIGN_IN_METHOD=`github.com`,kf.PROVIDER_ID=`github.com`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Af=class e extends Ef{constructor(){super(`twitter.com`)}static credential(t,n){return mf._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return e.credential(n,r)}catch{return null}}};Af.TWITTER_SIGN_IN_METHOD=`twitter.com`,Af.PROVIDER_ID=`twitter.com`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jf=class e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){let a=await dd._fromIdTokenResponse(t,r,i),o=Mf(r);return new e({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);let i=Mf(r);return new e({user:t,providerId:i,_tokenResponse:r,operationType:n})}};function Mf(e){return e.providerId?e.providerId:`phoneNumber`in e?`phone`:null}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Nf=class e extends Ee{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,e.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new e(t,n,r,i)}};function Pf(e,t,n,r){return(t===`reauthenticate`?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{throw n.code===`auth/multi-factor-auth-required`?Nf._fromErrorAndOperation(e,n,t,r):n})}async function Ff(e,t,n=!1){let r=await $u(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return jf._forOperation(e,`link`,r)}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function If(e,t,n=!1){let{auth:r}=e;if(x(r.app))return Promise.reject(wu(r));let i=`reauthenticate`;try{let a=await $u(e,Pf(r,i,t,e),n);q(a.idToken,r,`internal-error`);let o=Zu(a.idToken);q(o,r,`internal-error`);let{sub:s}=o;return q(e.uid===s,r,`user-mismatch`),jf._forOperation(e,i,a)}catch(e){throw e?.code===`auth/user-not-found`&&G(r,`user-mismatch`),e}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Lf(e,t,n=!1){if(x(e.app))return Promise.reject(wu(e));let r=`signIn`,i=await Pf(e,r,t),a=await jf._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}function Rf(e,t,n,r){return v(e).onIdTokenChanged(t,n,r)}function zf(e,t,n){return v(e).beforeAuthStateChanged(t,n)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Bf(e,t){return Z(e,`POST`,`/v2/accounts/mfaEnrollment:start`,X(e,t))}function Vf(e,t){return Z(e,`POST`,`/v2/accounts/mfaEnrollment:finalize`,X(e,t))}function Hf(e,t){return Z(e,`POST`,`/v2/accounts/mfaEnrollment:start`,X(e,t))}function Uf(e,t){return Z(e,`POST`,`/v2/accounts/mfaEnrollment:finalize`,X(e,t))}var Wf=`__sak`,Gf=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wf,`1`),this.storage.removeItem(Wf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}},Kf=1e3,qf=10,Jf=class extends Gf{constructor(){super(()=>window.localStorage,`LOCAL`),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Od(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;t?this.detachListener():this.stopPolling();let r=()=>{let e=this.storage.getItem(n);!t&&this.localCache[n]===e||this.notifyListeners(n,e)},i=this.storage.getItem(n);Dd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,qf):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent(`storage`,{key:e,oldValue:t,newValue:n}),!0)})},Kf)}stopPolling(){this.pollTimer&&=(clearInterval(this.pollTimer),null)}attachListener(){window.addEventListener(`storage`,this.boundEventHandler)}detachListener(){window.removeEventListener(`storage`,this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Jf.type=`LOCAL`;var Yf=Jf,Xf=1e3;function Zf(e){let t=e.replace(/[\\^$.*+?()[\]{}|]/g,`\\$&`),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function Qf(e){return`${window.location.protocol===`http:`?`__dev_`:`__HOST-`}FIREBASE_${e.split(`:`)[3]}`}var $f=class{constructor(){this.type=`COOKIE`,this.listenerUnsubscribes=new Map}_getFinalTarget(e){let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set(`finalTarget`,e),t}async _isAvailable(){return typeof isSecureContext==`boolean`&&!isSecureContext||typeof navigator>`u`||typeof document>`u`?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=Qf(e);return window.cookieStore?(await window.cookieStore.get(t))?.value:Zf(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let t=Qf(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch(`/__cookies__`,{method:`DELETE`}).catch(()=>void 0)}_addListener(e,t){if(!this._isAvailable())return;let n=Qf(e);if(window.cookieStore){let e=(e=>{let r=e.changed.find(e=>e.name===n);r&&t(r.value),e.deleted.find(e=>e.name===n)&&t(null)});return this.listenerUnsubscribes.set(t,()=>window.cookieStore.removeEventListener(`change`,e)),window.cookieStore.addEventListener(`change`,e)}let r=Zf(n),i=setInterval(()=>{let e=Zf(n);e!==r&&(t(e),r=e)},Xf);this.listenerUnsubscribes.set(t,()=>clearInterval(i))}_removeListener(e,t){let n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}};$f.type=`COOKIE`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ep=class extends Gf{constructor(){super(()=>window.sessionStorage,`SESSION`)}_addListener(e,t){}_removeListener(e,t){}};ep.type=`SESSION`;var tp=ep;
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function np(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var rp=class e{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){let n=this.receivers.find(e=>e.isListeningto(t));if(n)return n;let r=new e(t);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:`ack`,eventId:n,eventType:r});let o=Array.from(a).map(async e=>e(t.origin,i)),s=await np(o);t.ports[0].postMessage({status:`done`,eventId:n,eventType:r,response:s})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener(`message`,this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener(`message`,this.boundEventHandler)}};rp.receivers=[];
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ip(e=``,t=10){let n=``;for(let e=0;e<t;e++)n+=Math.floor(Math.random()*10);return e+n}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ap=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener(`message`,e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r=typeof MessageChannel<`u`?new MessageChannel:null;if(!r)throw Error(`connection_unavailable`);let i,a;return new Promise((o,s)=>{let c=ip(``,20);r.port1.start();let l=setTimeout(()=>{s(Error(`unsupported_event`))},n);a={messageChannel:r,onMessage(e){let t=e;if(t.data.eventId===c)switch(t.data.status){case`ack`:clearTimeout(l),i=setTimeout(()=>{s(Error(`timeout`))},3e3);break;case`done`:clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),s(Error(`invalid_response`));break}}},this.handlers.add(a),r.port1.addEventListener(`message`,a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function $(){return window}function op(e){$().location.href=e}
/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function sp(){return $().WorkerGlobalScope!==void 0&&typeof $().importScripts==`function`}async function cp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lp(){return navigator?.serviceWorker?.controller||null}function up(){return sp()?self:null}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dp=`firebaseLocalStorageDb`,fp=1,pp=`firebaseLocalStorage`,mp=`fbase_key`,hp=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener(`success`,()=>{e(this.request.result)}),this.request.addEventListener(`error`,()=>{t(this.request.error)})})}};function gp(e,t){return e.transaction([pp],t?`readwrite`:`readonly`).objectStore(pp)}function _p(){let e=indexedDB.deleteDatabase(dp);return new hp(e).toPromise()}function vp(){let e=indexedDB.open(dp,fp);return new Promise((t,n)=>{e.addEventListener(`error`,()=>{n(e.error)}),e.addEventListener(`upgradeneeded`,()=>{let t=e.result;try{t.createObjectStore(pp,{keyPath:mp})}catch(e){n(e)}}),e.addEventListener(`success`,async()=>{let n=e.result;n.objectStoreNames.contains(pp)?t(n):(n.close(),await _p(),t(await vp()))})})}async function yp(e,t,n){let r=gp(e,!0).put({[mp]:t,value:n});return new hp(r).toPromise()}async function bp(e,t){let n=gp(e,!1).get(t),r=await new hp(n).toPromise();return r===void 0?null:r.value}function xp(e,t){let n=gp(e,!0).delete(t);return new hp(n).toPromise()}var Sp=800,Cp=3,wp=class{constructor(){this.type=`LOCAL`,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||=await vp(),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>Cp)throw e;this.db&&=(this.db.close(),void 0)}}async initializeServiceWorkerMessaging(){return sp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rp._getInstance(up()),this.receiver._subscribe(`keyChanged`,async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe(`ping`,async(e,t)=>[`keyChanged`])}async initializeSender(){if(this.activeServiceWorker=await cp(),!this.activeServiceWorker)return;this.sender=new ap(this.activeServiceWorker);let e=await this.sender._send(`ping`,{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes(`keyChanged`)&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lp()!==this.activeServiceWorker))try{await this.sender._send(`keyChanged`,{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await vp();return await yp(e,Wf,`1`),await xp(e,Wf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>yp(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>bp(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=gp(e,!1).getAll();return new hp(t).toPromise()});if(!e||this.pendingWrites!==0)return[];let t=[],n=new Set;if(e.length!==0)for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sp)}stopPolling(){this.pollTimer&&=(clearInterval(this.pollTimer),null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};wp.type=`LOCAL`;var Tp=wp;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ep(e,t){return Z(e,`POST`,`/v2/accounts/mfaSignIn:start`,X(e,t))}function Dp(e,t){return Z(e,`POST`,`/v2/accounts/mfaSignIn:finalize`,X(e,t))}function Op(e,t){return Z(e,`POST`,`/v2/accounts/mfaSignIn:finalize`,X(e,t))}Hd(`rcb`),new ju(3e4,6e4);
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kp=`recaptcha`;async function Ap(e,t,n){if(!e._getRecaptchaConfig())try{await Xd(e)}catch{console.log(`Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.`)}try{let r;if(r=typeof t==`string`?{phoneNumber:t}:t,`session`in r){let t=r.session;if(`phoneNumber`in r){q(t.type===`enroll`,e,`internal-error`);let i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:`CLIENT_TYPE_WEB`}};return(await Yd(e,i,`mfaSmsEnrollment`,async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===Kd){q(n?.type===kp,e,`argument-error`);let r=await jp(e,t,n);return Bf(e,r)}return Bf(e,t)},`PHONE_PROVIDER`).catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}else{q(t.type===`signin`,e,`internal-error`);let i=r.multiFactorHint?.uid||r.multiFactorUid;q(i,e,`missing-multi-factor-info`);let a={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:`CLIENT_TYPE_WEB`}};return(await Yd(e,a,`mfaSmsSignIn`,async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===Kd){q(n?.type===kp,e,`argument-error`);let r=await jp(e,t,n);return Ep(e,r)}return Ep(e,t)},`PHONE_PROVIDER`).catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}else{let t={phoneNumber:r.phoneNumber,clientType:`CLIENT_TYPE_WEB`};return(await Yd(e,t,`sendVerificationCode`,async(e,t)=>{if(t.captchaResponse===Kd){q(n?.type===kp,e,`argument-error`);let r=await jp(e,t,n);return hf(e,r)}return hf(e,t)},`PHONE_PROVIDER`).catch(e=>Promise.reject(e))).sessionInfo}}finally{n?._reset()}}async function jp(e,t,n){q(n.type===kp,e,`argument-error`);let r=await n.verify();q(typeof r==`string`,e,`argument-error`);let i={...t};if(`phoneEnrollmentInfo`in i){let e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,a=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:a}}),i}else if(`phoneSignInInfo`in i){let e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}else return Object.assign(i,{recaptchaToken:r}),i}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Mp=class e{constructor(t){this.providerId=e.PROVIDER_ID,this.auth=Fd(t)}verifyPhoneNumber(e,t){return Ap(this.auth,e,v(t))}static credential(e,t){return bf._fromVerification(e,t)}static credentialFromResult(t){let n=t;return e.credentialFromTaggedObject(n)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?bf._fromTokenResponse(t,n):null}};Mp.PROVIDER_ID=`phone`,Mp.PHONE_SIGN_IN_METHOD=`phone`;
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Np(e,t){return t?Q(t):(q(e._popupRedirectResolver,e,`argument-error`),e._popupRedirectResolver)}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Pp=class extends af{constructor(e){super(`custom`,`custom`),this.params=e}_getIdTokenResponse(e){return ff(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ff(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ff(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Fp(e){return Lf(e.auth,new Pp(e),e.bypassAuthState)}function Ip(e){let{auth:t,user:n}=e;return q(n,t,`internal-error`),If(n,new Pp(e),e.bypassAuthState)}async function Lp(e){let{auth:t,user:n}=e;return q(n,t,`internal-error`),Ff(n,new Pp(e),e.bypassAuthState)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Rp=class{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}let s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case`signInViaPopup`:case`signInViaRedirect`:return Fp;case`linkViaPopup`:case`linkViaRedirect`:return Lp;case`reauthViaPopup`:case`reauthViaRedirect`:return Ip;default:G(this.auth,`internal-error`)}}resolve(e){Y(this.pendingPromise,`Pending promise was never set`),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Y(this.pendingPromise,`Pending promise was never set`),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}},zp=new ju(2e3,1e4),Bp=class e extends Rp{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,e.currentPopupAction&&e.currentPopupAction.cancel(),e.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return q(e,this.auth,`internal-error`),e}async onExecution(){Y(this.filter.length===1,`Popup operations only handle one event`);let e=ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(K(this.auth,`web-storage-unsupported`))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(K(this.auth,`cancelled-popup-request`))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,e.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(K(this.auth,`popup-closed-by-user`))},8e3);return}this.pollId=window.setTimeout(e,zp.get())};e()}};Bp.currentPopupAction=null;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Vp=`pendingRedirect`,Hp=new Map,Up=class extends Rp{constructor(e,t,n=!1){super(e,[`signInViaRedirect`,`linkViaRedirect`,`reauthViaRedirect`,`unknown`],t,void 0,n),this.eventId=null}async execute(){let e=Hp.get(this.auth._key());if(!e){try{let t=await Wp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Hp.set(this.auth._key(),e)}return this.bypassAuthState||Hp.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type===`signInViaRedirect`)return super.onAuthEvent(e);if(e.type===`unknown`){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Wp(e,t){let n=qp(t),r=Kp(e);if(!await r._isAvailable())return!1;let i=await r._get(n)===`true`;return await r._remove(n),i}function Gp(e,t){Hp.set(e._key(),t)}function Kp(e){return Q(e._redirectPersistence)}function qp(e){return hd(Vp,e.config.apiKey,e.name)}async function Jp(e,t,n=!1){if(x(e.app))return Promise.reject(wu(e));let r=Fd(e),i=Np(r,t),a=await new Up(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Yp=600*1e3,Xp=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$p(e)?t:(this.hasHandledPotentialRedirect=!0,t||=(this.queuedRedirectEvent=e,!0),t)}sendToConsumer(e,t){if(e.error&&!Qp(e)){let n=e.error.code?.split(`auth/`)[1]||`internal-error`;t.onError(K(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zp(e))}saveEventToCache(e){this.cachedEventUids.add(Zp(e)),this.lastProcessedEventTime=Date.now()}};function Zp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join(`-`)}function Qp({type:e,error:t}){return e===`unknown`&&t?.code===`auth/no-auth-event`}function $p(e){switch(e.type){case`signInViaRedirect`:case`linkViaRedirect`:case`reauthViaRedirect`:return!0;case`unknown`:return Qp(e);default:return!1}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function em(e,t={}){return Z(e,`GET`,`/v1/projects`,t)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var tm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nm=/^https?/;async function rm(e){if(e.config.emulator)return;let{authorizedDomains:t}=await em(e);for(let e of t)try{if(im(e))return}catch{}G(e,`unauthorized-domain`)}function im(e){let t=Eu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith(`chrome-extension://`)){let i=new URL(e);return i.hostname===``&&r===``?n===`chrome-extension:`&&e.replace(`chrome-extension://`,``)===t.replace(`chrome-extension://`,``):n===`chrome-extension:`&&i.hostname===r}if(!nm.test(n))return!1;if(tm.test(e))return r===e;let i=e.replace(/\./g,`\\.`);return RegExp(`^(.+\\.`+i+`|`+i+`)$`,`i`).test(r)}
/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var am=new ju(3e4,6e4);function om(){let e=$().___jsl;if(e?.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}function sm(e){return new Promise((t,n)=>{function r(){om(),gapi.load(`gapi.iframes`,{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{om(),n(K(e,`network-request-failed`))},timeout:am.get()})}if($().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if($().gapi?.load)r();else{let t=Hd(`iframefcb`);return $()[t]=()=>{gapi.load?r():n(K(e,`network-request-failed`))},zd(`${Vd()}?onload=${t}`).catch(e=>n(e))}}).catch(e=>{throw cm=null,e})}var cm=null;function lm(e){return cm||=sm(e),cm}
/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var um=new ju(5e3,15e3),dm=`__/auth/iframe`,fm=`emulator/auth/iframe`,pm={style:{position:`absolute`,top:`-100px`,width:`1px`,height:`1px`},"aria-hidden":`true`,tabindex:`-1`},mm=new Map([[`identitytoolkit.googleapis.com`,`p`],[`staging-identitytoolkit.sandbox.googleapis.com`,`s`],[`test-identitytoolkit.sandbox.googleapis.com`,`t`]]);function hm(e){let t=e.config;q(t.authDomain,e,`auth-domain-config-required`);let n=t.emulator?Mu(t,fm):`https://${e.config.authDomain}/${dm}`,r={apiKey:t.apiKey,appName:e.name,v:yn},i=mm.get(e.config.apiHost);i&&(r.eid=i);let a=e._getFrameworks();return a.length&&(r.fw=a.join(`,`)),`${n}?${ze(r).slice(1)}`}async function gm(e){let t=await lm(e),n=$().gapi;return q(n,e,`internal-error`),t.open({where:document.body,url:hm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pm,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=K(e,`network-request-failed`),a=$().setTimeout(()=>{r(i)},um.get());function o(){$().clearTimeout(a),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _m={location:`yes`,resizable:`yes`,statusbar:`yes`,toolbar:`no`},vm=500,ym=600,bm=`_blank`,xm=`http://localhost`,Sm=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Cm(e,t,n,r=vm,i=ym){let a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),s=``,c={..._m,width:r.toString(),height:i.toString(),top:a,left:o},l=m().toLowerCase();n&&(s=bd(l)?bm:n),vd(l)&&(t||=xm,c.scrollbars=`yes`);let u=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,``);if(Ed(l)&&s!==`_self`)return wm(t||``,s),new Sm(null);let d=window.open(t||``,s,u);q(d,e,`popup-blocked`);try{d.focus()}catch{}return new Sm(d)}function wm(e,t){let n=document.createElement(`a`);n.href=e,n.target=t;let r=document.createEvent(`MouseEvent`);r.initMouseEvent(`click`,!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Tm=`__/auth/handler`,Em=`emulator/auth/handler`,Dm=`fac`;async function Om(e,t,n,r,i,a){q(e.config.authDomain,e,`auth-domain-config-required`),q(e.config.apiKey,e,`invalid-api-key`);let o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:yn,eventId:i};if(t instanceof Tf){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||``,Fe(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(let[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof Ef){let e=t.getScopes().filter(e=>e!==``);e.length>0&&(o.scopes=e.join(`,`))}e.tenantId&&(o.tid=e.tenantId);let s=o;for(let e of Object.keys(s))s[e]===void 0&&delete s[e];let c=await e._getAppCheckToken(),l=c?`#${Dm}=${encodeURIComponent(c)}`:``;return`${km(e)}?${ze(s).slice(1)}${l}`}function km({config:e}){return e.emulator?Mu(e,Em):`https://${e.authDomain}/${Tm}`}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Am=`webStorageSupport`,jm=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tp,this._completeRedirectFn=Jp,this._overrideRedirectResult=Gp}async _openPopup(e,t,n,r){Y(this.eventManagers[e._key()]?.manager,`_initialize() not called before _openPopup()`);let i=await Om(e,t,n,Eu(),r);return Cm(e,i,ip())}async _openRedirect(e,t,n,r){await this._originValidation(e);let i=await Om(e,t,n,Eu(),r);return op(i),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Y(n,`If manager is not set, promise should be`),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await gm(e),n=new Xp(e);return t.register(`authEvent`,t=>(q(t?.authEvent,e,`invalid-auth-event`),{status:n.onEvent(t.authEvent)?`ACK`:`ERROR`}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Am,{type:Am},n=>{let r=n?.[0]?.[Am];r!==void 0&&t(!!r),G(e,`internal-error`)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Od()||yd()||Td()}},Mm=class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case`enroll`:return this._finalizeEnroll(e,t.credential,n);case`signin`:return this._finalizeSignIn(e,t.credential);default:return J(`unexpected MultiFactorSessionType`)}}},Nm=class e extends Mm{constructor(e){super(`phone`),this.credential=e}static _fromCredential(t){return new e(t)}_finalizeEnroll(e,t,n){return Vf(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Dp(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Pm=class{constructor(){}static assertion(e){return Nm._fromCredential(e)}};Pm.FACTOR_ID=`phone`;var Fm=class{static assertionForEnrollment(e,t){return Im._fromSecret(e,t)}static assertionForSignIn(e,t){return Im._fromEnrollmentId(e,t)}static async generateSecret(e){let t=e;q(t.user?.auth!==void 0,`internal-error`);let n=await Hf(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Lm._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}};Fm.FACTOR_ID=`totp`;var Im=class e extends Mm{constructor(e,t,n){super(`totp`),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(t,n){return new e(n,void 0,t)}static _fromEnrollmentId(t,n){return new e(n,t)}async _finalizeEnroll(e,t,n){return q(this.secret!==void 0,e,`argument-error`),Uf(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){q(this.enrollmentId!==void 0&&this.otp!==void 0,e,`argument-error`);let n={verificationCode:this.otp};return Op(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}},Lm=class e{constructor(e,t,n,r,i,a,o){this.sessionInfo=a,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,n){return new e(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let n=!1;return(Rm(e)||Rm(t))&&(n=!0),n&&(Rm(e)&&(e=this.auth.currentUser?.email||`unknownuser`),Rm(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Rm(e){return e===void 0||e?.length===0}var zm=`@firebase/auth`,Bm=`1.11.0`,Vm=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,`dependent-sdk-initialized-before-auth`)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Hm(e){switch(e){case`Node`:return`node`;case`ReactNative`:return`rn`;case`Worker`:return`webworker`;case`Cordova`:return`cordova`;case`WebExtension`:return`web-extension`;default:return}}function Um(e){hn(new Xe(`auth`,(t,{options:n})=>{let r=t.getProvider(`app`).getImmediate(),i=t.getProvider(`heartbeat`),a=t.getProvider(`app-check-internal`),{apiKey:o,authDomain:s}=r.options;q(o&&!o.includes(`:`),`invalid-api-key`,{appName:r.name});let c={apiKey:o,authDomain:s,clientPlatform:e,apiHost:`identitytoolkit.googleapis.com`,tokenApiHost:`securetoken.googleapis.com`,apiScheme:`https`,sdkClientVersion:kd(e)},l=new Pd(r,i,a,c);return Qd(l,n),l},`PUBLIC`).setInstantiationMode(`EXPLICIT`).setInstanceCreatedCallback((e,t,n)=>{e.getProvider(`auth-internal`).initialize()})),hn(new Xe(`auth-internal`,e=>(e=>new Vm(e))(Fd(e.getProvider(`auth`).getImmediate())),`PRIVATE`).setInstantiationMode(`EXPLICIT`)),Sn(zm,Bm,Hm(e)),Sn(zm,Bm,`esm2020`)}var Wm=ce(`authIdTokenMaxAge`)||300,Gm=null,Km=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wm)return;let i=n?.token;Gm!==i&&(Gm=i,await fetch(e,{method:i?`POST`:`DELETE`,headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qm(e=xn()){let t=gn(e,`auth`);if(t.isInitialized())return t.getImmediate();let n=Zd(e,{popupRedirectResolver:jm,persistence:[Tp,Yf,tp]}),r=ce(`authTokenSyncURL`);if(r&&typeof isSecureContext==`boolean`&&isSecureContext){let e=new URL(r,location.origin);if(location.origin===e.origin){let t=Km(e.toString());zf(n,t,()=>t(n.currentUser)),Rf(n,e=>t(e))}}let i=ae(`auth`);return i&&$d(n,`http://${i}`),n}function Jm(){return document.getElementsByTagName(`head`)?.[0]??document}Rd({loadJS(e){return new Promise((t,n)=>{let r=document.createElement(`script`);r.setAttribute(`src`,e),r.onload=t,r.onerror=e=>{let t=K(`internal-error`);t.customData=e,n(t)},r.type=`text/javascript`,r.charset=`UTF-8`,Jm().appendChild(r)})},gapiScript:`https://apis.google.com/js/api.js`,recaptchaV2Script:`https://www.google.com/recaptcha/api.js`,recaptchaEnterpriseScript:`https://www.google.com/recaptcha/enterprise.js?render=`}),Um(`Browser`);export{Zl as a,bn as c,au as i,tu as n,$l as o,mu as r,eu as s,qm as t};