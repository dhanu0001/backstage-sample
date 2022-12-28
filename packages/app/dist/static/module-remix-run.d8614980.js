"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5924],{16060:function(rr,ct,ft){ft.d(ct,{Ep:function(){return J},Gn:function(){return Ct},LX:function(){return Ue},PP:function(){return ht},RQ:function(){return ae},WK:function(){return ie},Zn:function(){return Ie},aU:function(){return C},cP:function(){return I},fp:function(){return q},i3:function(){return Be},kG:function(){return x},lX:function(){return pt},pC:function(){return Tt}});/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R.apply(this,arguments)}var C;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(C||(C={}));const je="popstate";function ht(e){e===void 0&&(e={});let{initialEntries:t=["/"],initialIndex:r,v5Compat:n=!1}=e,i;i=t.map((a,p)=>d(a,typeof a=="string"?null:a.state,p===0?"default":void 0));let l=f(r==null?i.length-1:r),o=C.Pop,c=null;function f(a){return Math.min(Math.max(a,0),i.length-1)}function m(){return i[l]}function d(a,p,w){p===void 0&&(p=null);let v=U(i?m().pathname:"/",a,p,w);return Oe(v.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(a)),v}return{get index(){return l},get action(){return o},get location(){return m()},createHref(a){return typeof a=="string"?a:J(a)},push(a,p){o=C.Push;let w=d(a,p);l+=1,i.splice(l,i.length,w),n&&c&&c({action:o,location:w})},replace(a,p){o=C.Replace;let w=d(a,p);i[l]=w,n&&c&&c({action:o,location:w})},go(a){o=C.Pop,l=f(l+a),c&&c({action:o,location:m()})},listen(a){return c=a,()=>{c=null}}}}function pt(e){e===void 0&&(e={});function t(n,i){let{pathname:l,search:o,hash:c}=n.location;return U("",{pathname:l,search:o,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:J(i)}return He(t,r,null,e)}function nr(e){e===void 0&&(e={});function t(i,l){let{pathname:o="/",search:c="",hash:f=""}=I(i.location.hash.substr(1));return U("",{pathname:o,search:c,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(i,l){let o=i.document.querySelector("base"),c="";if(o&&o.getAttribute("href")){let f=i.location.href,m=f.indexOf("#");c=m===-1?f:f.slice(0,m)}return c+"#"+(typeof l=="string"?l:J(l))}function n(i,l){Oe(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return He(t,r,n,e)}function Oe(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function mt(){return Math.random().toString(36).substr(2,8)}function Fe(e){return{usr:e.state,key:e.key}}function U(e,t,r,n){return r===void 0&&(r=null),R({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?I(t):t,{state:r,key:t&&t.key||n||mt()})}function J(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function I(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function He(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:l=!1}=n,o=i.history,c=C.Pop,f=null;function m(){c=C.Pop,f&&f({action:c,location:a.location})}function d(p,w){c=C.Push;let v=U(a.location,p,w);r&&r(v,p);let F=Fe(v),A=a.createHref(v);try{o.pushState(F,"",A)}catch{i.location.assign(A)}l&&f&&f({action:c,location:v})}function g(p,w){c=C.Replace;let v=U(a.location,p,w);r&&r(v,p);let F=Fe(v),A=a.createHref(v);o.replaceState(F,"",A),l&&f&&f({action:c,location:v})}let a={get action(){return c},get location(){return e(i,o)},listen(p){if(f)throw new Error("A history only accepts one active listener");return i.addEventListener(je,m),f=p,()=>{i.removeEventListener(je,m),f=null}},createHref(p){return t(i,p)},push:d,replace:g,go(p){return o.go(p)}};return a}var j;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(j||(j={}));function gt(e){return e.index===!0}function ye(e,t,r){return t===void 0&&(t=[]),r===void 0&&(r=new Set),e.map((n,i)=>{let l=[...t,i],o=typeof n.id=="string"?n.id:l.join("-");return x(n.index!==!0||!n.children,"Cannot specify children on an index route"),x(!r.has(o),'Found a route id collision on id "'+o+`".  Route id's must be globally unique within Data Router usages`),r.add(o),gt(n)?R({},n,{id:o}):R({},n,{id:o,children:n.children?ye(n.children,l,r):void 0})})}function q(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?I(t):t,i=Ie(n.pathname||"/",r);if(i==null)return null;let l=_e(e);yt(l);let o=null;for(let c=0;o==null&&c<l.length;++c)o=St(l[c],i);return o}function _e(e,t,r,n){return t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n=""),e.forEach((i,l)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};o.relativePath.startsWith("/")&&(x(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(n.length));let c=ae([n,o.relativePath]),f=r.concat(o);i.children&&i.children.length>0&&(x(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_e(i.children,t,f,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Et(c,i.index),routesMeta:f})}),t}function yt(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:xt(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const vt=/^:\w+$/,wt=3,bt=2,Dt=1,Rt=10,Pt=-2,Ne=e=>e==="*";function Et(e,t){let r=e.split("/"),n=r.length;return r.some(Ne)&&(n+=Pt),t&&(n+=bt),r.filter(i=>!Ne(i)).reduce((i,l)=>i+(vt.test(l)?wt:l===""?Dt:Rt),n)}function xt(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function St(e,t){let{routesMeta:r}=e,n={},i="/",l=[];for(let o=0;o<r.length;++o){let c=r[o],f=o===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",d=Ue({path:c.relativePath,caseSensitive:c.caseSensitive,end:f},m);if(!d)return null;Object.assign(n,d.params);let g=c.route;l.push({params:n,pathname:ae([i,d.pathname]),pathnameBase:jt(ae([i,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(i=ae([i,d.pathnameBase]))}return l}function Ct(e,t){return t===void 0&&(t={}),e.replace(/:(\w+)/g,(r,n)=>(x(t[n]!=null,'Missing ":'+n+'" param'),t[n])).replace(/(\/?)\*/,(r,n,i,l)=>{const o="*";return t[o]==null?l==="/*"?"/":"":""+n+t[o]})}function Ue(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Mt(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:n.reduce((m,d,g)=>{if(d==="*"){let a=c[g]||"";o=l.slice(0,l.length-a.length).replace(/(.)\/+$/,"$1")}return m[d]=At(c[g]||"",d),m},{}),pathname:l,pathnameBase:o,pattern:e}}function Mt(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),$e(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,c)=>(n.push(c),"([^\\/]+)"));return e.endsWith("*")?(n.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function At(e,t){try{return decodeURIComponent(e)}catch(r){return $e(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Ie(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function x(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function $e(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function Be(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?I(e):e;return{pathname:r?r.startsWith("/")?r:Lt(r,t):t,search:Ot(n),hash:Ft(i)}}function Lt(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ve(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tt(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=I(e):(i=R({},e),x(!i.pathname||!i.pathname.includes("?"),ve("?","pathname","search",i)),x(!i.pathname||!i.pathname.includes("#"),ve("#","pathname","hash",i)),x(!i.search||!i.search.includes("#"),ve("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,c;if(n||o==null)c=r;else{let g=t.length-1;if(o.startsWith("..")){let a=o.split("/");for(;a[0]==="..";)a.shift(),g-=1;i.pathname=a.join("/")}c=g>=0?t[g]:"/"}let f=Be(i,c),m=o&&o!=="/"&&o.endsWith("/"),d=(l||o===".")&&r.endsWith("/");return!f.pathname.endsWith("/")&&(m||d)&&(f.pathname+="/"),f}function ar(e){return e===""||e.pathname===""?"/":typeof e=="string"?I(e).pathname:e.pathname}const ae=e=>e.join("/").replace(/\/\/+/g,"/"),jt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ot=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ft=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ir=function(t,r){r===void 0&&(r={});let n=typeof r=="number"?{status:r}:r,i=new Headers(n.headers);return i.has("Content-Type")||i.set("Content-Type","application/json; charset=utf-8"),new Response(JSON.stringify(t),R({},n,{headers:i}))};class We extends Error{}class Ke{constructor(t){this.pendingKeys=new Set,this.subscriber=void 0,x(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((i,l)=>r=l),this.controller=new AbortController;let n=()=>r(new We("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",n),this.controller.signal.addEventListener("abort",n),this.data=Object.entries(t).reduce((i,l)=>{let[o,c]=l;return Object.assign(i,{[o]:this.trackPromise(o,c)})},{})}trackPromise(t,r){if(!(r instanceof Promise))return r;this.pendingKeys.add(t);let n=Promise.race([r,this.abortPromise]).then(i=>this.onSettle(n,t,null,i),i=>this.onSettle(n,t,i));return n.catch(()=>{}),Object.defineProperty(n,"_tracked",{get:()=>!0}),n}onSettle(t,r,n,i){if(this.controller.signal.aborted&&n instanceof We)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>n}),Promise.reject(n);this.pendingKeys.delete(r),this.done&&this.unlistenAbortSignal();const l=this.subscriber;return n?(Object.defineProperty(t,"_error",{get:()=>n}),l&&l(!1),Promise.reject(n)):(Object.defineProperty(t,"_data",{get:()=>i}),l&&l(!1),i)}subscribe(t){this.subscriber=t}cancel(){this.controller.abort(),this.pendingKeys.forEach((r,n)=>this.pendingKeys.delete(n));let t=this.subscriber;t&&t(!0)}async resolveData(t){let r=!1;if(!this.done){let n=()=>this.cancel();t.addEventListener("abort",n),r=await new Promise(i=>{this.subscribe(l=>{t.removeEventListener("abort",n),(l||this.done)&&i(l)})})}return r}get done(){return this.pendingKeys.size===0}get unwrappedData(){return x(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,r)=>{let[n,i]=r;return Object.assign(t,{[n]:_t(i)})},{})}}function Ht(e){return e instanceof Promise&&e._tracked===!0}function _t(e){if(!Ht(e))return e;if(e._error)throw e._error;return e._data}function or(e){return new Ke(e)}const lr=function(t,r){r===void 0&&(r=302);let n=r;typeof n=="number"?n={status:n}:typeof n.status=="undefined"&&(n.status=302);let i=new Headers(n.headers);return i.set("Location",t),new Response(null,R({},n,{headers:i}))};class ee{constructor(t,r,n){this.status=t,this.statusText=r||"",this.data=n}}function ie(e){return e instanceof ee}const we={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Nt={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};function sr(e){x(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=ye(e.routes),r=null,n=new Set,i=null,l=null,o=null,c=!1,f=q(t,e.history.location,e.basename),m=null;if(f==null){let{matches:s,route:u,error:h}=Re(t);f=s,m={[u.id]:h}}let d=!f.some(s=>s.route.loader)||e.hydrationData!=null,g,a={historyAction:e.history.action,location:e.history.location,matches:f,initialized:d,navigation:we,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||m,fetchers:new Map},p=C.Pop,w=!1,v,F=!1,A=!1,$=[],se=[],L=new Map,nt=0,Se=-1,de=new Map,he=new Set,te=new Map,Z=new Map;function $t(){return r=e.history.listen(s=>{let{action:u,location:h}=s;return re(u,h)}),a.initialized||re(C.Pop,a.location),g}function Bt(){r&&r(),n.clear(),v&&v.abort(),a.fetchers.forEach((s,u)=>Ae(u))}function Wt(s){return n.add(s),()=>n.delete(s)}function _(s){a=R({},a,s),n.forEach(u=>u(a))}function ue(s,u){var h;let y=a.actionData!=null&&a.navigation.formMethod!=null&&a.navigation.state==="loading"&&((h=a.navigation.formAction)==null?void 0:h.split("?")[0])===s.pathname,b=u.loaderData?{loaderData:De(a.loaderData,u.loaderData,u.matches||[])}:{};_(R({},y?{}:{actionData:null},u,b,{historyAction:p,location:s,initialized:!0,navigation:we,revalidation:"idle",restoreScrollPosition:a.navigation.formData?!1:st(s,u.matches||a.matches),preventScrollReset:w})),F||p===C.Pop||(p===C.Push?e.history.push(s,s.state):p===C.Replace&&e.history.replace(s,s.state)),p=C.Pop,w=!1,F=!1,A=!1,$=[],se=[]}async function Kt(s,u){if(typeof s=="number"){e.history.go(s);return}let{path:h,submission:y,error:b}=ze(s,u),S=U(a.location,h,u&&u.state),P=(u&&u.replace)===!0||y!=null?C.Replace:C.Push,D=u&&"preventScrollReset"in u?u.preventScrollReset===!0:void 0;return await re(P,S,{submission:y,pendingError:b,preventScrollReset:D,replace:u&&u.replace})}function zt(){if(Ce(),_({revalidation:"loading"}),a.navigation.state!=="submitting"){if(a.navigation.state==="idle"){re(a.historyAction,a.location,{startUninterruptedRevalidation:!0});return}re(p||a.historyAction,a.navigation.location,{overrideNavigation:a.navigation})}}async function re(s,u,h){v&&v.abort(),v=null,p=s,F=(h&&h.startUninterruptedRevalidation)===!0,kt(a.location,a.matches),w=(h&&h.preventScrollReset)===!0;let y=h&&h.overrideNavigation,b=q(t,u,e.basename);if(!b){let{matches:W,route:K,error:k}=Re(t);Le(),ue(u,{matches:W,loaderData:{},errors:{[K.id]:k}});return}if(It(a.location,u)){ue(u,{matches:b});return}v=new AbortController;let S=oe(u,v.signal,h&&h.submission),P,D;if(h&&h.pendingError)D={[V(b).route.id]:h.pendingError};else if(h&&h.submission){let W=await Vt(S,u,h.submission,b,{replace:h.replace});if(W.shortCircuited)return;P=W.pendingActionData,D=W.pendingActionError,y=R({state:"loading",location:u},h.submission)}let{shortCircuited:E,loaderData:M,errors:T}=await Gt(S,u,b,y,h&&h.submission,h&&h.replace,P,D);E||(v=null,ue(u,{matches:b,loaderData:M,errors:T}))}async function Vt(s,u,h,y,b){Ce();let S=R({state:"submitting",location:u},h);_({navigation:S});let P,D=Ee(y,u);if(!D.route.action)P=Pe(u);else if(P=await Y("action",s,D),s.signal.aborted)return{shortCircuited:!0};if(Q(P)){let E=R({state:"loading",location:U(a.location,P.location)},h);return await ce(P,E,b&&b.replace),{shortCircuited:!0}}if(X(P)){let E=V(y,D.route.id);return(b&&b.replace)!==!0&&(p=C.Push),{pendingActionError:{[E.route.id]:P.error}}}if(B(P))throw new Error("defer() is not supported in actions");return{pendingActionData:{[D.route.id]:P.data}}}async function Gt(s,u,h,y,b,S,P,D){let E=y;E||(E={state:"loading",location:u,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0});let[M,T]=Ge(a,h,b,u,A,$,se,P,D,te);if(Le(O=>!(h&&h.some(H=>H.route.id===O))||M&&M.some(H=>H.route.id===O)),M.length===0&&T.length===0)return ue(u,{matches:h,loaderData:De(a.loaderData,{},h),errors:D||null,actionData:P||null}),{shortCircuited:!0};F||(T.forEach(O=>{let[H]=O;const G=a.fetchers.get(H);let ge={state:"loading",data:G&&G.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};a.fetchers.set(H,ge)}),_(R({navigation:E,actionData:P||a.actionData||null},T.length>0?{fetchers:new Map(a.fetchers)}:{}))),Se=++nt,T.forEach(O=>{let[H]=O;return L.set(H,v)});let{results:W,loaderResults:K,fetcherResults:k}=await it(a.matches,M,T,s);if(s.signal.aborted)return{shortCircuited:!0};T.forEach(O=>{let[H]=O;return L.delete(H)});let fe=ke(W);if(fe){let O=be(a,fe);return await ce(fe,O,S),{shortCircuited:!0}}let{loaderData:me,errors:ne}=Ze(a,h,M,K,D,T,k,Z);Z.forEach((O,H)=>{O.subscribe(G=>{(G||O.done)&&Z.delete(H)})}),Qt();let Te=lt(Se);return R({loaderData:me,errors:ne},Te||T.length>0?{fetchers:new Map(a.fetchers)}:{})}function at(s){return a.fetchers.get(s)||Nt}function Jt(s,u,h,y){if(typeof AbortController=="undefined")throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");L.has(s)&&pe(s);let b=q(t,h,e.basename);if(!b){Me(s,u,new ee(404,"Not Found",null));return}let{path:S,submission:P}=ze(h,y,!0),D=Ee(b,S);if(P){Yt(s,u,S,D,P);return}te.set(s,[S,D]),Xt(s,u,S,D)}async function Yt(s,u,h,y,b){if(Ce(),te.delete(s),!y.route.action){let{error:N}=Pe(h);Me(s,u,N);return}let S=a.fetchers.get(s),P=R({state:"submitting"},b,{data:S&&S.data});a.fetchers.set(s,P),_({fetchers:new Map(a.fetchers)});let D=new AbortController,E=oe(h,D.signal,b);L.set(s,D);let M=await Y("action",E,y);if(E.signal.aborted){L.get(s)===D&&L.delete(s);return}if(Q(M)){L.delete(s),he.add(s);let N=R({state:"loading"},b,{data:void 0});a.fetchers.set(s,N),_({fetchers:new Map(a.fetchers)});let z=R({state:"loading",location:U(a.location,M.location)},b);await ce(M,z);return}if(X(M)){Me(s,u,M.error);return}B(M)&&x(!1,"defer() is not supported in actions");let T=a.navigation.location||a.location,W=oe(T,D.signal),K=a.navigation.state!=="idle"?q(t,a.navigation.location,e.basename):a.matches;x(K,"Didn't find any matches after fetcher action");let k=++nt;de.set(s,k);let fe=R({state:"loading",data:M.data},b);a.fetchers.set(s,fe);let[me,ne]=Ge(a,K,b,T,A,$,se,{[y.route.id]:M.data},void 0,te);ne.filter(N=>{let[z]=N;return z!==s}).forEach(N=>{let[z]=N,ut=a.fetchers.get(z),tr={state:"loading",data:ut&&ut.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};a.fetchers.set(z,tr),L.set(z,D)}),_({fetchers:new Map(a.fetchers)});let{results:Te,loaderResults:O,fetcherResults:H}=await it(a.matches,me,ne,W);if(D.signal.aborted)return;de.delete(s),L.delete(s),ne.forEach(N=>{let[z]=N;return L.delete(z)});let G=ke(Te);if(G){let N=be(a,G);await ce(G,N);return}let{loaderData:ge,errors:dt}=Ze(a,a.matches,me,O,void 0,ne,H,Z),qt={state:"idle",data:M.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};a.fetchers.set(s,qt);let er=lt(k);a.navigation.state==="loading"&&k>Se?(x(p,"Expected pending action"),v&&v.abort(),ue(a.navigation.location,{matches:K,loaderData:ge,errors:dt,fetchers:new Map(a.fetchers)})):(_(R({errors:dt,loaderData:De(a.loaderData,ge,K)},er?{fetchers:new Map(a.fetchers)}:{})),A=!1)}async function Xt(s,u,h,y){let b=a.fetchers.get(s),S={state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,data:b&&b.data};a.fetchers.set(s,S),_({fetchers:new Map(a.fetchers)});let P=new AbortController,D=oe(h,P.signal);L.set(s,P);let E=await Y("loader",D,y);if(B(E)&&(E=await et(E,D.signal,!0)||E),L.get(s)===P&&L.delete(s),D.signal.aborted)return;if(Q(E)){let T=be(a,E);await ce(E,T);return}if(X(E)){let T=V(a.matches,u);a.fetchers.delete(s),_({fetchers:new Map(a.fetchers),errors:{[T.route.id]:E.error}});return}x(!B(E),"Unhandled fetcher deferred data");let M={state:"idle",data:E.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};a.fetchers.set(s,M),_({fetchers:new Map(a.fetchers)})}async function ce(s,u,h){s.revalidate&&(A=!0),x(u.location,"Expected a location on the redirect navigation"),v=null;let y=h===!0?C.Replace:C.Push;await re(y,u.location,{overrideNavigation:u})}async function it(s,u,h,y){let b=await Promise.all([...u.map(D=>Y("loader",y,D)),...h.map(D=>{let[,E,M]=D;return Y("loader",oe(E,y.signal),M)})]),S=b.slice(0,u.length),P=b.slice(u.length);return await Promise.all([qe(s,u,S,y.signal,!1,a.loaderData),qe(s,h.map(D=>{let[,,E]=D;return E}),P,y.signal,!0)]),{results:b,loaderResults:S,fetcherResults:P}}function Ce(){A=!0,$.push(...Le()),te.forEach((s,u)=>{L.has(u)&&(se.push(u),pe(u))})}function Me(s,u,h){let y=V(a.matches,u);Ae(s),_({errors:{[y.route.id]:h},fetchers:new Map(a.fetchers)})}function Ae(s){L.has(s)&&pe(s),te.delete(s),de.delete(s),he.delete(s),a.fetchers.delete(s)}function pe(s){let u=L.get(s);x(u,"Expected fetch controller: "+s),u.abort(),L.delete(s)}function ot(s){for(let u of s){let y={state:"idle",data:at(u).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};a.fetchers.set(u,y)}}function Qt(){let s=[];for(let u of he){let h=a.fetchers.get(u);x(h,"Expected fetcher: "+u),h.state==="loading"&&(he.delete(u),s.push(u))}ot(s)}function lt(s){let u=[];for(let[h,y]of de)if(y<s){let b=a.fetchers.get(h);x(b,"Expected fetcher: "+h),b.state==="loading"&&(pe(h),de.delete(h),u.push(h))}return ot(u),u.length>0}function Le(s){let u=[];return Z.forEach((h,y)=>{(!s||s(y))&&(h.cancel(),u.push(y),Z.delete(y))}),u}function Zt(s,u,h){if(i=s,o=u,l=h||(y=>y.key),!c&&a.navigation===we){c=!0;let y=st(a.location,a.matches);y!=null&&_({restoreScrollPosition:y})}return()=>{i=null,o=null,l=null}}function kt(s,u){if(i&&l&&o){let h=u.map(b=>rt(b,a.loaderData)),y=l(s,h)||s.key;i[y]=o()}}function st(s,u){if(i&&l&&o){let h=u.map(S=>rt(S,a.loaderData)),y=l(s,h)||s.key,b=i[y];if(typeof b=="number")return b}return null}return g={get basename(){return e.basename},get state(){return a},get routes(){return t},initialize:$t,subscribe:Wt,enableScrollRestoration:Zt,navigate:Kt,fetch:Jt,revalidate:zt,createHref:le,getFetcher:at,deleteFetcher:Ae,dispose:Bt,_internalFetchControllers:L,_internalActiveDeferreds:Z},g}function dr(e){x(e.length>0,"You must provide a non-empty routes array to unstable_createStaticHandler");let t=ye(e);async function r(f){let{location:m,result:d}=await i(f);return d instanceof Response?d:R({location:m},d)}async function n(f,m){let{result:d}=await i(f,m);if(d instanceof Response)return d;let g=d.errors?Object.values(d.errors)[0]:void 0;if(g!==void 0){if(ie(g))return new Response(g.data,{status:g.status,statusText:g.statusText});throw g}let a=[d.actionData,d.loaderData].find(w=>w),p=Object.values(a||{})[0];return ie(p)?new Response(p.data,{status:p.status,statusText:p.statusText}):p}async function i(f,m){x(f.method!=="HEAD","query()/queryRoute() do not support HEAD requests"),x(f.signal,"query()/queryRoute() requests must contain an AbortController signal");let{location:d,matches:g,shortCircuitState:a}=c(f,m);try{if(a)return{location:d,result:a};if(f.method!=="GET"){let w=await l(f,g,Ee(g,d),m!=null);return{location:d,result:w}}let p=await o(f,g,m!=null);return{location:d,result:R({},p,{actionData:null,actionHeaders:{}})}}catch(p){if(p instanceof Response)return{location:d,result:p};throw p}}async function l(f,m,d,g){let a;if(d.route.action){if(a=await Y("action",f,d,!0,g),f.signal.aborted){let w=g?"queryRoute":"query";throw new Error(w+"() call aborted")}}else{let w=le(new URL(f.url));a=Pe(w)}if(Q(a))throw new Response(null,{status:a.status,headers:{Location:a.location}});if(B(a))throw new Error("defer() is not supported in actions");if(g){if(X(a)){let w=V(m,d.route.id);return{matches:[d],loaderData:{},actionData:null,errors:{[w.route.id]:a.error},statusCode:500,loaderHeaders:{},actionHeaders:{}}}return{matches:[d],loaderData:{},actionData:{[d.route.id]:a.data},errors:null,statusCode:200,loaderHeaders:{},actionHeaders:{}}}if(X(a)){let w=V(m,d.route.id),v=await o(f,m,g,{[w.route.id]:a.error});return R({},v,{statusCode:ie(a.error)?a.error.status:500,actionData:null,actionHeaders:R({},a.headers?{[d.route.id]:a.headers}:{})})}let p=await o(f,m,g);return R({},p,a.statusCode?{statusCode:a.statusCode}:{},{actionData:{[d.route.id]:a.data},actionHeaders:R({},a.headers?{[d.route.id]:a.headers}:{})})}async function o(f,m,d,g){let a=Ve(m,Object.keys(g||{})[0]).filter(v=>v.route.loader);if(a.length===0)return{matches:m,loaderData:{},errors:g||null,statusCode:200,loaderHeaders:{}};let p=await Promise.all([...a.map(v=>Y("loader",f,v,!0,d))]);if(f.signal.aborted){let v=d?"queryRoute":"query";throw new Error(v+"() call aborted")}p.forEach(v=>{B(v)&&v.deferredData.cancel()});let w=Qe(m,a,p,g);return R({},w,{matches:m})}function c(f,m){let d=new URL(f.url),g=U("",J(d),null,"default"),a=q(t,g);if(a&&m&&(a=a.filter(p=>p.route.id===m)),!a){let{matches:p,route:w,error:v}=Re(t);return{location:g,matches:p,shortCircuitState:{matches:p,loaderData:{},actionData:null,errors:{[w.id]:v},statusCode:404,loaderHeaders:{},actionHeaders:{}}}}return{location:g,matches:a}}return{dataRoutes:t,query:r,queryRoute:n}}function ur(e,t,r){return R({},t,{statusCode:500,errors:{[t._deepestRenderedBoundaryId||e[0].id]:r}})}function ze(e,t,r){r===void 0&&(r=!1);let n=typeof e=="string"?e:J(e);if(!t||!("formMethod"in t)&&!("formData"in t))return{path:n};if(t.formMethod!=null&&t.formMethod!=="get")return{path:n,submission:{formMethod:t.formMethod,formAction:le(I(n)),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData}};if(!t.formData)return{path:n};let i=I(n);try{let l=Xe(t.formData);r&&i.search&&tt(i.search)&&l.append("index",""),i.search="?"+l}catch{return{path:n,error:new ee(400,"Bad Request","Cannot submit binary form data using GET")}}return{path:J(i)}}function be(e,t){let{formMethod:r,formAction:n,formEncType:i,formData:l}=e.navigation;return{state:"loading",location:U(e.location,t.location),formMethod:r||void 0,formAction:n||void 0,formEncType:i||void 0,formData:l||void 0}}function Ve(e,t){let r=e;if(t){let n=e.findIndex(i=>i.route.id===t);n>=0&&(r=e.slice(0,n))}return r}function Ge(e,t,r,n,i,l,o,c,f,m){let d=f?Object.values(f)[0]:c?Object.values(c)[0]:null,g=f?Object.keys(f)[0]:void 0,p=Ve(t,g).filter((v,F)=>v.route.loader!=null&&(Ut(e.loaderData,e.matches[F],v)||l.some(A=>A===v.route.id)||Ye(e.location,e.matches[F],r,n,v,i,d))),w=[];return m&&m.forEach((v,F)=>{let[A,$]=v;o.includes(F)?w.push([F,A,$]):i&&Ye(A,$,r,A,$,i,d)&&w.push([F,A,$])}),[p,w]}function Ut(e,t,r){let n=!t||r.route.id!==t.route.id,i=e[r.route.id]===void 0;return n||i}function Je(e,t){let r=e.route.path;return e.pathname!==t.pathname||r&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ye(e,t,r,n,i,l,o){let c=xe(e),f=t.params,m=xe(n),d=i.params,g=Je(t,i)||c.toString()===m.toString()||c.search!==m.search||l;if(i.route.shouldRevalidate){let a=i.route.shouldRevalidate(R({currentUrl:c,currentParams:f,nextUrl:m,nextParams:d},r,{actionResult:o,defaultShouldRevalidate:g}));if(typeof a=="boolean")return a}return g}async function Y(e,t,r,n,i){n===void 0&&(n=!1),i===void 0&&(i=!1);let l,o,c,f=new Promise((d,g)=>c=g),m=()=>c();t.signal.addEventListener("abort",m);try{let d=r.route[e];x(d,"Could not find the "+e+' to run on the "'+r.route.id+'" route'),o=await Promise.race([d({request:t,params:r.params}),f])}catch(d){l=j.error,o=d}finally{t.signal.removeEventListener("abort",m)}if(o instanceof Response){let d=o.status,g=o.headers.get("Location");if(i)throw o;if(d>=300&&d<=399&&g!=null){if(n)throw o;return{type:j.redirect,status:d,location:g,revalidate:o.headers.get("X-Remix-Revalidate")!==null}}let a,p=o.headers.get("Content-Type");return p&&p.startsWith("application/json")?a=await o.json():a=await o.text(),l===j.error?{type:l,error:new ee(d,o.statusText,a),headers:o.headers}:{type:j.data,data:a,statusCode:o.status,headers:o.headers}}return l===j.error?{type:l,error:o}:o instanceof Ke?{type:j.deferred,deferredData:o}:{type:j.data,data:o}}function oe(e,t,r){let n=xe(e).toString(),i={signal:t};if(r){let{formMethod:l,formEncType:o,formData:c}=r;i.method=l.toUpperCase(),i.body=o==="application/x-www-form-urlencoded"?Xe(c):c}return new Request(n,i)}function Xe(e){let t=new URLSearchParams;for(let[r,n]of e.entries())x(typeof n=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),t.append(r,n);return t}function Qe(e,t,r,n,i){let l={},o=null,c,f=!1,m={};return r.forEach((d,g)=>{let a=t[g].route.id;if(x(!Q(d),"Cannot handle redirect results in processLoaderData"),X(d)){let p=V(e,a),w=d.error;n&&(w=Object.values(n)[0],n=void 0),o=Object.assign(o||{},{[p.route.id]:w}),f||(f=!0,c=ie(d.error)?d.error.status:500),d.headers&&(m[a]=d.headers)}else B(d)?(i&&i.set(a,d.deferredData),l[a]=d.deferredData.data):(l[a]=d.data,d.statusCode!=null&&d.statusCode!==200&&!f&&(c=d.statusCode),d.headers&&(m[a]=d.headers))}),n&&(o=n),{loaderData:l,errors:o,statusCode:c||200,loaderHeaders:m}}function Ze(e,t,r,n,i,l,o,c){let{loaderData:f,errors:m}=Qe(t,r,n,i,c);for(let d=0;d<l.length;d++){let[g,,a]=l[d];x(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let p=o[d];if(X(p)){let w=V(e.matches,a.route.id);m&&m[w.route.id]||(m=R({},m,{[w.route.id]:p.error})),e.fetchers.delete(g)}else{if(Q(p))throw new Error("Unhandled fetcher revalidation redirect");if(B(p))throw new Error("Unhandled fetcher deferred data");{let w={state:"idle",data:p.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};e.fetchers.set(g,w)}}}return{loaderData:f,errors:m}}function De(e,t,r){let n=R({},t);return r.forEach(i=>{let l=i.route.id;t[l]===void 0&&e[l]!==void 0&&(n[l]=e[l])}),n}function V(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function Re(e){let t=e.find(r=>r.index||r.path===""||r.path==="/")||{id:"__shim-404-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t,error:new ee(404,"Not Found",null)}}function Pe(e){let t=typeof e=="string"?e:le(e);return console.warn("You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for "+("["+t+"]")),{type:j.error,error:new ee(405,"Method Not Allowed","No action found for ["+t+"]")}}function ke(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(Q(r))return r}}function le(e){return(e.pathname||"")+(e.search||"")}function It(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function B(e){return e.type===j.deferred}function X(e){return e.type===j.error}function Q(e){return(e&&e.type)===j.redirect}async function qe(e,t,r,n,i,l){for(let o=0;o<r.length;o++){let c=r[o],f=t[o],m=e.find(g=>g.route.id===f.route.id),d=m!=null&&!Je(m,f)&&(l&&l[f.route.id])!==void 0;B(c)&&(i||d)&&await et(c,n,i).then(g=>{g&&(r[o]=g||r[o])})}}async function et(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:j.data,data:e.deferredData.unwrappedData}}catch(i){return{type:j.error,error:i}}return{type:j.data,data:e.deferredData.data}}}function tt(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function rt(e,t){let{route:r,pathname:n,params:i}=e;return{id:r.id,pathname:n,params:i,data:t[r.id],handle:r.handle}}function Ee(e,t){let r=typeof t=="string"?I(t).search:t.search;return e[e.length-1].route.index&&!tt(r||"")?e.slice(-2)[0]:e.slice(-1)[0]}function xe(e){let t=typeof window!="undefined"&&typeof window.location!="undefined"?window.location.origin:"unknown://unknown",r=typeof e=="string"?e:le(e);return new URL(r,t)}}}]);})();

//# sourceMappingURL=module-remix-run.d8614980.js.map