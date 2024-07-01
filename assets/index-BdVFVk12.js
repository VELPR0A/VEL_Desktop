function s0(e,t){for(var i=0;i<t.length;i++){const n=t[i];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(n,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();var kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ml(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sh={exports:{}},vs={},Eh={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r=Symbol.for("react.element"),a0=Symbol.for("react.portal"),l0=Symbol.for("react.fragment"),c0=Symbol.for("react.strict_mode"),d0=Symbol.for("react.profiler"),h0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),p0=Symbol.for("react.forward_ref"),f0=Symbol.for("react.suspense"),m0=Symbol.for("react.memo"),g0=Symbol.for("react.lazy"),Vc=Symbol.iterator;function x0(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var Ph={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nh=Object.assign,Mh={};function qn(e,t,i){this.props=e,this.context=t,this.refs=Mh,this.updater=i||Ph}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Th(){}Th.prototype=qn.prototype;function Tl(e,t,i){this.props=e,this.context=t,this.refs=Mh,this.updater=i||Ph}var Ll=Tl.prototype=new Th;Ll.constructor=Tl;Nh(Ll,qn.prototype);Ll.isPureReactComponent=!0;var Wc=Array.isArray,Lh=Object.prototype.hasOwnProperty,Dl={current:null},Dh={key:!0,ref:!0,__self:!0,__source:!0};function Oh(e,t,i){var n,o={},s=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)Lh.call(t,n)&&!Dh.hasOwnProperty(n)&&(o[n]=t[n]);var j=arguments.length-2;if(j===1)o.children=i;else if(1<j){for(var E=Array(j),F=0;F<j;F++)E[F]=arguments[F+2];o.children=E}if(e&&e.defaultProps)for(n in j=e.defaultProps,j)o[n]===void 0&&(o[n]=j[n]);return{$$typeof:_r,type:e,key:s,ref:l,props:o,_owner:Dl.current}}function y0(e,t){return{$$typeof:_r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===_r}function v0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var Hc=/\/+/g;function Xs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?v0(""+e.key):t.toString(36)}function ko(e,t,i,n,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case _r:case a0:l=!0}}if(l)return l=e,o=o(l),e=n===""?"."+Xs(l,0):n,Wc(o)?(i="",e!=null&&(i=e.replace(Hc,"$&/")+"/"),ko(o,t,i,"",function(F){return F})):o!=null&&(Ol(o)&&(o=y0(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Hc,"$&/")+"/")+e)),t.push(o)),1;if(l=0,n=n===""?".":n+":",Wc(e))for(var j=0;j<e.length;j++){s=e[j];var E=n+Xs(s,j);l+=ko(s,t,i,E,o)}else if(E=x0(e),typeof E=="function")for(e=E.call(e),j=0;!(s=e.next()).done;)s=s.value,E=n+Xs(s,j++),l+=ko(s,t,i,E,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function no(e,t,i){if(e==null)return e;var n=[],o=0;return ko(e,n,"","",function(s){return t.call(i,s,o++)}),n}function w0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},So={transition:null},b0={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:So,ReactCurrentOwner:Dl};function Ih(){throw Error("act(...) is not supported in production builds of React.")}Ne.Children={map:no,forEach:function(e,t,i){no(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return no(e,function(){t++}),t},toArray:function(e){return no(e,function(t){return t})||[]},only:function(e){if(!Ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ne.Component=qn;Ne.Fragment=l0;Ne.Profiler=d0;Ne.PureComponent=Tl;Ne.StrictMode=c0;Ne.Suspense=f0;Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0;Ne.act=Ih;Ne.cloneElement=function(e,t,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Nh({},e.props),o=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Dl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var j=e.type.defaultProps;for(E in t)Lh.call(t,E)&&!Dh.hasOwnProperty(E)&&(n[E]=t[E]===void 0&&j!==void 0?j[E]:t[E])}var E=arguments.length-2;if(E===1)n.children=i;else if(1<E){j=Array(E);for(var F=0;F<E;F++)j[F]=arguments[F+2];n.children=j}return{$$typeof:_r,type:e.type,key:o,ref:s,props:n,_owner:l}};Ne.createContext=function(e){return e={$$typeof:u0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:h0,_context:e},e.Consumer=e};Ne.createElement=Oh;Ne.createFactory=function(e){var t=Oh.bind(null,e);return t.type=e,t};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(e){return{$$typeof:p0,render:e}};Ne.isValidElement=Ol;Ne.lazy=function(e){return{$$typeof:g0,_payload:{_status:-1,_result:e},_init:w0}};Ne.memo=function(e,t){return{$$typeof:m0,type:e,compare:t===void 0?null:t}};Ne.startTransition=function(e){var t=So.transition;So.transition={};try{e()}finally{So.transition=t}};Ne.unstable_act=Ih;Ne.useCallback=function(e,t){return vt.current.useCallback(e,t)};Ne.useContext=function(e){return vt.current.useContext(e)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};Ne.useEffect=function(e,t){return vt.current.useEffect(e,t)};Ne.useId=function(){return vt.current.useId()};Ne.useImperativeHandle=function(e,t,i){return vt.current.useImperativeHandle(e,t,i)};Ne.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};Ne.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};Ne.useMemo=function(e,t){return vt.current.useMemo(e,t)};Ne.useReducer=function(e,t,i){return vt.current.useReducer(e,t,i)};Ne.useRef=function(e){return vt.current.useRef(e)};Ne.useState=function(e){return vt.current.useState(e)};Ne.useSyncExternalStore=function(e,t,i){return vt.current.useSyncExternalStore(e,t,i)};Ne.useTransition=function(){return vt.current.useTransition()};Ne.version="18.3.1";Eh.exports=Ne;var we=Eh.exports;const nt=Ml(we),A0=s0({__proto__:null,default:nt},[we]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0=we,C0=Symbol.for("react.element"),k0=Symbol.for("react.fragment"),S0=Object.prototype.hasOwnProperty,E0=j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P0={key:!0,ref:!0,__self:!0,__source:!0};function zh(e,t,i){var n,o={},s=null,l=null;i!==void 0&&(s=""+i),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)S0.call(t,n)&&!P0.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:C0,type:e,key:s,ref:l,props:o,_owner:E0.current}}vs.Fragment=k0;vs.jsx=zh;vs.jsxs=zh;Sh.exports=vs;var r=Sh.exports,Ca={},Rh={exports:{}},Tt={},Bh={exports:{}},Fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(g,x){var z=g.length;g.push(x);e:for(;0<z;){var H=z-1>>>1,ie=g[H];if(0<o(ie,x))g[H]=x,g[z]=ie,z=H;else break e}}function i(g){return g.length===0?null:g[0]}function n(g){if(g.length===0)return null;var x=g[0],z=g.pop();if(z!==x){g[0]=z;e:for(var H=0,ie=g.length,O=ie>>>1;H<O;){var Q=2*(H+1)-1,ee=g[Q],$=Q+1,ce=g[$];if(0>o(ee,z))$<ie&&0>o(ce,ee)?(g[H]=ce,g[$]=z,H=$):(g[H]=ee,g[Q]=z,H=Q);else if($<ie&&0>o(ce,z))g[H]=ce,g[$]=z,H=$;else break e}}return x}function o(g,x){var z=g.sortIndex-x.sortIndex;return z!==0?z:g.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,j=l.now();e.unstable_now=function(){return l.now()-j}}var E=[],F=[],_=1,C=null,D=3,V=!1,k=!1,I=!1,U=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(g){for(var x=i(F);x!==null;){if(x.callback===null)n(F);else if(x.startTime<=g)n(F),x.sortIndex=x.expirationTime,t(E,x);else break;x=i(F)}}function y(g){if(I=!1,u(g),!k)if(i(E)!==null)k=!0,v(w);else{var x=i(F);x!==null&&h(y,x.startTime-g)}}function w(g,x){k=!1,I&&(I=!1,p(K),K=-1),V=!0;var z=D;try{for(u(x),C=i(E);C!==null&&(!(C.expirationTime>x)||g&&!A());){var H=C.callback;if(typeof H=="function"){C.callback=null,D=C.priorityLevel;var ie=H(C.expirationTime<=x);x=e.unstable_now(),typeof ie=="function"?C.callback=ie:C===i(E)&&n(E),u(x)}else n(E);C=i(E)}if(C!==null)var O=!0;else{var Q=i(F);Q!==null&&h(y,Q.startTime-x),O=!1}return O}finally{C=null,D=z,V=!1}}var f=!1,N=null,K=-1,Y=5,R=-1;function A(){return!(e.unstable_now()-R<Y)}function L(){if(N!==null){var g=e.unstable_now();R=g;var x=!0;try{x=N(!0,g)}finally{x?b():(f=!1,N=null)}}else f=!1}var b;if(typeof a=="function")b=function(){a(L)};else if(typeof MessageChannel<"u"){var c=new MessageChannel,d=c.port2;c.port1.onmessage=L,b=function(){d.postMessage(null)}}else b=function(){U(L,0)};function v(g){N=g,f||(f=!0,b())}function h(g,x){K=U(function(){g(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(g){g.callback=null},e.unstable_continueExecution=function(){k||V||(k=!0,v(w))},e.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<g?Math.floor(1e3/g):5},e.unstable_getCurrentPriorityLevel=function(){return D},e.unstable_getFirstCallbackNode=function(){return i(E)},e.unstable_next=function(g){switch(D){case 1:case 2:case 3:var x=3;break;default:x=D}var z=D;D=x;try{return g()}finally{D=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(g,x){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var z=D;D=g;try{return x()}finally{D=z}},e.unstable_scheduleCallback=function(g,x,z){var H=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?H+z:H):z=H,g){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=z+ie,g={id:_++,callback:x,priorityLevel:g,startTime:z,expirationTime:ie,sortIndex:-1},z>H?(g.sortIndex=z,t(F,g),i(E)===null&&g===i(F)&&(I?(p(K),K=-1):I=!0,h(y,z-H))):(g.sortIndex=ie,t(E,g),k||V||(k=!0,v(w))),g},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(g){var x=D;return function(){var z=D;D=x;try{return g.apply(this,arguments)}finally{D=z}}}})(Fh);Bh.exports=Fh;var N0=Bh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0=we,Mt=N0;function be(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uh=new Set,Cr={};function hn(e,t){Rn(e,t),Rn(e+"Capture",t)}function Rn(e,t){for(Cr[e]=t,e=0;e<t.length;e++)Uh.add(t[e])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ka=Object.prototype.hasOwnProperty,T0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yc={},_c={};function L0(e){return ka.call(_c,e)?!0:ka.call(Yc,e)?!1:T0.test(e)?_c[e]=!0:(Yc[e]=!0,!1)}function D0(e,t,i,n){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O0(e,t,i,n){if(t===null||typeof t>"u"||D0(e,t,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function wt(e,t,i,n,o,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){lt[e]=new wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];lt[t]=new wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){lt[e]=new wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){lt[e]=new wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){lt[e]=new wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){lt[e]=new wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){lt[e]=new wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){lt[e]=new wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){lt[e]=new wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Il=/[\-:]([a-z])/g;function zl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Il,zl);lt[t]=new wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Il,zl);lt[t]=new wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Il,zl);lt[t]=new wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){lt[e]=new wt(e,1,!1,e.toLowerCase(),null,!1,!1)});lt.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){lt[e]=new wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rl(e,t,i,n){var o=lt.hasOwnProperty(t)?lt[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(O0(t,i,o,n)&&(i=null),n||o===null?L0(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):o.mustUseProperty?e[o.propertyName]=i===null?o.type===3?!1:"":i:(t=o.attributeName,n=o.attributeNamespace,i===null?e.removeAttribute(t):(o=o.type,i=o===3||o===4&&i===!0?"":""+i,n?e.setAttributeNS(n,t,i):e.setAttribute(t,i))))}var bi=M0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),xn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),Bl=Symbol.for("react.strict_mode"),Sa=Symbol.for("react.profiler"),Gh=Symbol.for("react.provider"),Vh=Symbol.for("react.context"),Fl=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),Ul=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),Wh=Symbol.for("react.offscreen"),Xc=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=Xc&&e[Xc]||e["@@iterator"],typeof e=="function"?e:null)}var He=Object.assign,Qs;function lr(e){if(Qs===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);Qs=t&&t[1]||""}return`
`+Qs+e}var qs=!1;function Ks(e,t){if(!e||qs)return"";qs=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(F){var n=F}Reflect.construct(e,[],t)}else{try{t.call()}catch(F){n=F}e.call(t.prototype)}else{try{throw Error()}catch(F){n=F}e()}}catch(F){if(F&&n&&typeof F.stack=="string"){for(var o=F.stack.split(`
`),s=n.stack.split(`
`),l=o.length-1,j=s.length-1;1<=l&&0<=j&&o[l]!==s[j];)j--;for(;1<=l&&0<=j;l--,j--)if(o[l]!==s[j]){if(l!==1||j!==1)do if(l--,j--,0>j||o[l]!==s[j]){var E=`
`+o[l].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=l&&0<=j);break}}}finally{qs=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?lr(e):""}function I0(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=Ks(e.type,!1),e;case 11:return e=Ks(e.type.render,!1),e;case 1:return e=Ks(e.type,!0),e;default:return""}}function Na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yn:return"Fragment";case xn:return"Portal";case Sa:return"Profiler";case Bl:return"StrictMode";case Ea:return"Suspense";case Pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vh:return(e.displayName||"Context")+".Consumer";case Gh:return(e._context.displayName||"Context")+".Provider";case Fl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ul:return t=e.displayName||null,t!==null?t:Na(e.type)||"Memo";case Pi:t=e._payload,e=e._init;try{return Na(e(t))}catch{}}return null}function z0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Na(t);case 8:return t===Bl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R0(e){var t=Hh(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){n=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oo(e){e._valueTracker||(e._valueTracker=R0(e))}function Yh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=Hh(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}function Vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ma(e,t){var i=t.checked;return He({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Qc(e,t){var i=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;i=Yi(t.value!=null?t.value:i),e._wrapperState={initialChecked:n,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _h(e,t){t=t.checked,t!=null&&Rl(e,"checked",t,!1)}function Ta(e,t){_h(e,t);var i=Yi(t.value),n=t.type;if(i!=null)n==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?La(e,t.type,i):t.hasOwnProperty("defaultValue")&&La(e,t.type,Yi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qc(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function La(e,t,i){(t!=="number"||Vo(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var cr=Array.isArray;function Tn(e,t,i,n){if(e=e.options,t){t={};for(var o=0;o<i.length;o++)t["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=t.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&n&&(e[i].defaultSelected=!0)}else{for(i=""+Yi(i),t=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Da(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(be(91));return He({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kc(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(be(92));if(cr(i)){if(1<i.length)throw Error(be(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Yi(i)}}function Xh(e,t){var i=Yi(t.value),n=Yi(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),n!=null&&(e.defaultValue=""+n)}function Zc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,qh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,i,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},B0=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(e){B0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pr[t]=pr[e]})});function Kh(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||pr.hasOwnProperty(e)&&pr[e]?(""+t).trim():t+"px"}function Zh(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var n=i.indexOf("--")===0,o=Kh(i,t[i],n);i==="float"&&(i="cssFloat"),n?e.setProperty(i,o):e[i]=o}}var F0=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ia(e,t){if(t){if(F0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(be(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(be(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(be(61))}if(t.style!=null&&typeof t.style!="object")throw Error(be(62))}}function za(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ra=null;function Gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ba=null,Ln=null,Dn=null;function Jc(e){if(e=qr(e)){if(typeof Ba!="function")throw Error(be(280));var t=e.stateNode;t&&(t=Cs(t),Ba(e.stateNode,e.type,t))}}function Jh(e){Ln?Dn?Dn.push(e):Dn=[e]:Ln=e}function $h(){if(Ln){var e=Ln,t=Dn;if(Dn=Ln=null,Jc(e),t)for(e=0;e<t.length;e++)Jc(t[e])}}function eu(e,t){return e(t)}function tu(){}var Zs=!1;function iu(e,t,i){if(Zs)return e(t,i);Zs=!0;try{return eu(e,t,i)}finally{Zs=!1,(Ln!==null||Dn!==null)&&(tu(),$h())}}function Sr(e,t){var i=e.stateNode;if(i===null)return null;var n=Cs(i);if(n===null)return null;i=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(be(231,t,typeof i));return i}var Fa=!1;if(xi)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Fa=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Fa=!1}function U0(e,t,i,n,o,s,l,j,E){var F=Array.prototype.slice.call(arguments,3);try{t.apply(i,F)}catch(_){this.onError(_)}}var fr=!1,Wo=null,Ho=!1,Ua=null,G0={onError:function(e){fr=!0,Wo=e}};function V0(e,t,i,n,o,s,l,j,E){fr=!1,Wo=null,U0.apply(G0,arguments)}function W0(e,t,i,n,o,s,l,j,E){if(V0.apply(this,arguments),fr){if(fr){var F=Wo;fr=!1,Wo=null}else throw Error(be(198));Ho||(Ho=!0,Ua=F)}}function un(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function nu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $c(e){if(un(e)!==e)throw Error(be(188))}function H0(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(be(188));return t!==e?null:e}for(var i=e,n=t;;){var o=i.return;if(o===null)break;var s=o.alternate;if(s===null){if(n=o.return,n!==null){i=n;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===i)return $c(o),e;if(s===n)return $c(o),t;s=s.sibling}throw Error(be(188))}if(i.return!==n.return)i=o,n=s;else{for(var l=!1,j=o.child;j;){if(j===i){l=!0,i=o,n=s;break}if(j===n){l=!0,n=o,i=s;break}j=j.sibling}if(!l){for(j=s.child;j;){if(j===i){l=!0,i=s,n=o;break}if(j===n){l=!0,n=s,i=o;break}j=j.sibling}if(!l)throw Error(be(189))}}if(i.alternate!==n)throw Error(be(190))}if(i.tag!==3)throw Error(be(188));return i.stateNode.current===i?e:t}function ru(e){return e=H0(e),e!==null?ou(e):null}function ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ou(e);if(t!==null)return t;e=e.sibling}return null}var su=Mt.unstable_scheduleCallback,ed=Mt.unstable_cancelCallback,Y0=Mt.unstable_shouldYield,_0=Mt.unstable_requestPaint,Xe=Mt.unstable_now,X0=Mt.unstable_getCurrentPriorityLevel,Vl=Mt.unstable_ImmediatePriority,au=Mt.unstable_UserBlockingPriority,Yo=Mt.unstable_NormalPriority,Q0=Mt.unstable_LowPriority,lu=Mt.unstable_IdlePriority,ws=null,ri=null;function q0(e){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(ws,e,void 0,(e.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:J0,K0=Math.log,Z0=Math.LN2;function J0(e){return e>>>=0,e===0?32:31-(K0(e)/Z0|0)|0}var ao=64,lo=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _o(e,t){var i=e.pendingLanes;if(i===0)return 0;var n=0,o=e.suspendedLanes,s=e.pingedLanes,l=i&268435455;if(l!==0){var j=l&~o;j!==0?n=dr(j):(s&=l,s!==0&&(n=dr(s)))}else l=i&~o,l!==0?n=dr(l):s!==0&&(n=dr(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(n&4&&(n|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)i=31-qt(t),o=1<<i,n|=e[i],t&=~o;return n}function $0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function em(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-qt(s),j=1<<l,E=o[l];E===-1?(!(j&i)||j&n)&&(o[l]=$0(j,t)):E<=t&&(e.expiredLanes|=j),s&=~j}}function Ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cu(){var e=ao;return ao<<=1,!(ao&4194240)&&(ao=64),e}function Js(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Xr(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qt(t),e[t]=i}function tm(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<i;){var o=31-qt(i),s=1<<o;t[o]=0,n[o]=-1,e[o]=-1,i&=~s}}function Wl(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-qt(i),o=1<<n;o&t|e[n]&t&&(e[n]|=t),i&=~o}}var Oe=0;function du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hu,Hl,uu,pu,fu,Va=!1,co=[],Ii=null,zi=null,Ri=null,Er=new Map,Pr=new Map,Mi=[],im="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function td(e,t){switch(e){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function ir(e,t,i,n,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:s,targetContainers:[o]},t!==null&&(t=qr(t),t!==null&&Hl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function nm(e,t,i,n,o){switch(t){case"focusin":return Ii=ir(Ii,e,t,i,n,o),!0;case"dragenter":return zi=ir(zi,e,t,i,n,o),!0;case"mouseover":return Ri=ir(Ri,e,t,i,n,o),!0;case"pointerover":var s=o.pointerId;return Er.set(s,ir(Er.get(s)||null,e,t,i,n,o)),!0;case"gotpointercapture":return s=o.pointerId,Pr.set(s,ir(Pr.get(s)||null,e,t,i,n,o)),!0}return!1}function mu(e){var t=Ji(e.target);if(t!==null){var i=un(t);if(i!==null){if(t=i.tag,t===13){if(t=nu(i),t!==null){e.blockedOn=t,fu(e.priority,function(){uu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);Ra=n,i.target.dispatchEvent(n),Ra=null}else return t=qr(i),t!==null&&Hl(t),e.blockedOn=i,!1;t.shift()}return!0}function id(e,t,i){Eo(e)&&i.delete(t)}function rm(){Va=!1,Ii!==null&&Eo(Ii)&&(Ii=null),zi!==null&&Eo(zi)&&(zi=null),Ri!==null&&Eo(Ri)&&(Ri=null),Er.forEach(id),Pr.forEach(id)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Va||(Va=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,rm)))}function Nr(e){function t(o){return nr(o,e)}if(0<co.length){nr(co[0],e);for(var i=1;i<co.length;i++){var n=co[i];n.blockedOn===e&&(n.blockedOn=null)}}for(Ii!==null&&nr(Ii,e),zi!==null&&nr(zi,e),Ri!==null&&nr(Ri,e),Er.forEach(t),Pr.forEach(t),i=0;i<Mi.length;i++)n=Mi[i],n.blockedOn===e&&(n.blockedOn=null);for(;0<Mi.length&&(i=Mi[0],i.blockedOn===null);)mu(i),i.blockedOn===null&&Mi.shift()}var On=bi.ReactCurrentBatchConfig,Xo=!0;function om(e,t,i,n){var o=Oe,s=On.transition;On.transition=null;try{Oe=1,Yl(e,t,i,n)}finally{Oe=o,On.transition=s}}function sm(e,t,i,n){var o=Oe,s=On.transition;On.transition=null;try{Oe=4,Yl(e,t,i,n)}finally{Oe=o,On.transition=s}}function Yl(e,t,i,n){if(Xo){var o=Wa(e,t,i,n);if(o===null)la(e,t,n,Qo,i),td(e,n);else if(nm(o,e,t,i,n))n.stopPropagation();else if(td(e,n),t&4&&-1<im.indexOf(e)){for(;o!==null;){var s=qr(o);if(s!==null&&hu(s),s=Wa(e,t,i,n),s===null&&la(e,t,n,Qo,i),s===o)break;o=s}o!==null&&n.stopPropagation()}else la(e,t,n,null,i)}}var Qo=null;function Wa(e,t,i,n){if(Qo=null,e=Gl(n),e=Ji(e),e!==null)if(t=un(e),t===null)e=null;else if(i=t.tag,i===13){if(e=nu(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qo=e,null}function gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X0()){case Vl:return 1;case au:return 4;case Yo:case Q0:return 16;case lu:return 536870912;default:return 16}default:return 16}}var Li=null,_l=null,Po=null;function xu(){if(Po)return Po;var e,t=_l,i=t.length,n,o="value"in Li?Li.value:Li.textContent,s=o.length;for(e=0;e<i&&t[e]===o[e];e++);var l=i-e;for(n=1;n<=l&&t[i-n]===o[s-n];n++);return Po=o.slice(e,1<n?1-n:void 0)}function No(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ho(){return!0}function nd(){return!1}function Lt(e){function t(i,n,o,s,l){this._reactName=i,this._targetInst=o,this.type=n,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(i=e[j],this[j]=i?i(s):s[j]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ho:nd,this.isPropagationStopped=nd,this}return He(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Lt(Kn),Qr=He({},Kn,{view:0,detail:0}),am=Lt(Qr),$s,ea,rr,bs=He({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?($s=e.screenX-rr.screenX,ea=e.screenY-rr.screenY):ea=$s=0,rr=e),$s)},movementY:function(e){return"movementY"in e?e.movementY:ea}}),rd=Lt(bs),lm=He({},bs,{dataTransfer:0}),cm=Lt(lm),dm=He({},Qr,{relatedTarget:0}),ta=Lt(dm),hm=He({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),um=Lt(hm),pm=He({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fm=Lt(pm),mm=He({},Kn,{data:0}),od=Lt(mm),gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ym[e])?!!t[e]:!1}function Ql(){return vm}var wm=He({},Qr,{key:function(e){if(e.key){var t=gm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bm=Lt(wm),Am=He({},bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=Lt(Am),jm=He({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),Cm=Lt(jm),km=He({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=Lt(km),Em=He({},bs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pm=Lt(Em),Nm=[9,13,27,32],ql=xi&&"CompositionEvent"in window,mr=null;xi&&"documentMode"in document&&(mr=document.documentMode);var Mm=xi&&"TextEvent"in window&&!mr,yu=xi&&(!ql||mr&&8<mr&&11>=mr),ad=" ",ld=!1;function vu(e,t){switch(e){case"keyup":return Nm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function Tm(e,t){switch(e){case"compositionend":return wu(t);case"keypress":return t.which!==32?null:(ld=!0,ad);case"textInput":return e=t.data,e===ad&&ld?null:e;default:return null}}function Lm(e,t){if(vn)return e==="compositionend"||!ql&&vu(e,t)?(e=xu(),Po=_l=Li=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yu&&t.locale!=="ko"?null:t.data;default:return null}}var Dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dm[e.type]:t==="textarea"}function bu(e,t,i,n){Jh(n),t=qo(t,"onChange"),0<t.length&&(i=new Xl("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var gr=null,Mr=null;function Om(e){Lu(e,0)}function As(e){var t=An(e);if(Yh(t))return e}function Im(e,t){if(e==="change")return t}var Au=!1;if(xi){var ia;if(xi){var na="oninput"in document;if(!na){var dd=document.createElement("div");dd.setAttribute("oninput","return;"),na=typeof dd.oninput=="function"}ia=na}else ia=!1;Au=ia&&(!document.documentMode||9<document.documentMode)}function hd(){gr&&(gr.detachEvent("onpropertychange",ju),Mr=gr=null)}function ju(e){if(e.propertyName==="value"&&As(Mr)){var t=[];bu(t,Mr,e,Gl(e)),iu(Om,t)}}function zm(e,t,i){e==="focusin"?(hd(),gr=t,Mr=i,gr.attachEvent("onpropertychange",ju)):e==="focusout"&&hd()}function Rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return As(Mr)}function Bm(e,t){if(e==="click")return As(t)}function Fm(e,t){if(e==="input"||e==="change")return As(t)}function Um(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:Um;function Tr(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var o=i[n];if(!ka.call(t,o)||!Jt(e[o],t[o]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pd(e,t){var i=ud(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=ud(i)}}function Cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ku(){for(var e=window,t=Vo();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Vo(e.document)}return t}function Kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gm(e){var t=ku(),i=e.focusedElem,n=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Cu(i.ownerDocument.documentElement,i)){if(n!==null&&Kl(i)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=i.textContent.length,s=Math.min(n.start,o);n=n.end===void 0?s:Math.min(n.end,o),!e.extend&&s>n&&(o=n,n=s,s=o),o=pd(i,s);var l=pd(i,n);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vm=xi&&"documentMode"in document&&11>=document.documentMode,wn=null,Ha=null,xr=null,Ya=!1;function fd(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ya||wn==null||wn!==Vo(n)||(n=wn,"selectionStart"in n&&Kl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),xr&&Tr(xr,n)||(xr=n,n=qo(Ha,"onSelect"),0<n.length&&(t=new Xl("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=wn)))}function uo(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var bn={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},ra={},Su={};xi&&(Su=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function js(e){if(ra[e])return ra[e];if(!bn[e])return e;var t=bn[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Su)return ra[e]=t[i];return e}var Eu=js("animationend"),Pu=js("animationiteration"),Nu=js("animationstart"),Mu=js("transitionend"),Tu=new Map,md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(e,t){Tu.set(e,t),hn(t,[e])}for(var oa=0;oa<md.length;oa++){var sa=md[oa],Wm=sa.toLowerCase(),Hm=sa[0].toUpperCase()+sa.slice(1);Xi(Wm,"on"+Hm)}Xi(Eu,"onAnimationEnd");Xi(Pu,"onAnimationIteration");Xi(Nu,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(Mu,"onTransitionEnd");Rn("onMouseEnter",["mouseout","mouseover"]);Rn("onMouseLeave",["mouseout","mouseover"]);Rn("onPointerEnter",["pointerout","pointerover"]);Rn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ym=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function gd(e,t,i){var n=e.type||"unknown-event";e.currentTarget=i,W0(n,t,void 0,e),e.currentTarget=null}function Lu(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],o=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var l=n.length-1;0<=l;l--){var j=n[l],E=j.instance,F=j.currentTarget;if(j=j.listener,E!==s&&o.isPropagationStopped())break e;gd(o,j,F),s=E}else for(l=0;l<n.length;l++){if(j=n[l],E=j.instance,F=j.currentTarget,j=j.listener,E!==s&&o.isPropagationStopped())break e;gd(o,j,F),s=E}}}if(Ho)throw e=Ua,Ho=!1,Ua=null,e}function Be(e,t){var i=t[Ka];i===void 0&&(i=t[Ka]=new Set);var n=e+"__bubble";i.has(n)||(Du(t,e,2,!1),i.add(n))}function aa(e,t,i){var n=0;t&&(n|=4),Du(i,e,n,t)}var po="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[po]){e[po]=!0,Uh.forEach(function(i){i!=="selectionchange"&&(Ym.has(i)||aa(i,!1,e),aa(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[po]||(t[po]=!0,aa("selectionchange",!1,t))}}function Du(e,t,i,n){switch(gu(t)){case 1:var o=om;break;case 4:o=sm;break;default:o=Yl}i=o.bind(null,t,i,e),o=void 0,!Fa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,i,{capture:!0,passive:o}):e.addEventListener(t,i,!0):o!==void 0?e.addEventListener(t,i,{passive:o}):e.addEventListener(t,i,!1)}function la(e,t,i,n,o){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var j=n.stateNode.containerInfo;if(j===o||j.nodeType===8&&j.parentNode===o)break;if(l===4)for(l=n.return;l!==null;){var E=l.tag;if((E===3||E===4)&&(E=l.stateNode.containerInfo,E===o||E.nodeType===8&&E.parentNode===o))return;l=l.return}for(;j!==null;){if(l=Ji(j),l===null)return;if(E=l.tag,E===5||E===6){n=s=l;continue e}j=j.parentNode}}n=n.return}iu(function(){var F=s,_=Gl(i),C=[];e:{var D=Tu.get(e);if(D!==void 0){var V=Xl,k=e;switch(e){case"keypress":if(No(i)===0)break e;case"keydown":case"keyup":V=bm;break;case"focusin":k="focus",V=ta;break;case"focusout":k="blur",V=ta;break;case"beforeblur":case"afterblur":V=ta;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Cm;break;case Eu:case Pu:case Nu:V=um;break;case Mu:V=Sm;break;case"scroll":V=am;break;case"wheel":V=Pm;break;case"copy":case"cut":case"paste":V=fm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=sd}var I=(t&4)!==0,U=!I&&e==="scroll",p=I?D!==null?D+"Capture":null:D;I=[];for(var a=F,u;a!==null;){u=a;var y=u.stateNode;if(u.tag===5&&y!==null&&(u=y,p!==null&&(y=Sr(a,p),y!=null&&I.push(Dr(a,y,u)))),U)break;a=a.return}0<I.length&&(D=new V(D,k,null,i,_),C.push({event:D,listeners:I}))}}if(!(t&7)){e:{if(D=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",D&&i!==Ra&&(k=i.relatedTarget||i.fromElement)&&(Ji(k)||k[yi]))break e;if((V||D)&&(D=_.window===_?_:(D=_.ownerDocument)?D.defaultView||D.parentWindow:window,V?(k=i.relatedTarget||i.toElement,V=F,k=k?Ji(k):null,k!==null&&(U=un(k),k!==U||k.tag!==5&&k.tag!==6)&&(k=null)):(V=null,k=F),V!==k)){if(I=rd,y="onMouseLeave",p="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(I=sd,y="onPointerLeave",p="onPointerEnter",a="pointer"),U=V==null?D:An(V),u=k==null?D:An(k),D=new I(y,a+"leave",V,i,_),D.target=U,D.relatedTarget=u,y=null,Ji(_)===F&&(I=new I(p,a+"enter",k,i,_),I.target=u,I.relatedTarget=U,y=I),U=y,V&&k)t:{for(I=V,p=k,a=0,u=I;u;u=mn(u))a++;for(u=0,y=p;y;y=mn(y))u++;for(;0<a-u;)I=mn(I),a--;for(;0<u-a;)p=mn(p),u--;for(;a--;){if(I===p||p!==null&&I===p.alternate)break t;I=mn(I),p=mn(p)}I=null}else I=null;V!==null&&xd(C,D,V,I,!1),k!==null&&U!==null&&xd(C,U,k,I,!0)}}e:{if(D=F?An(F):window,V=D.nodeName&&D.nodeName.toLowerCase(),V==="select"||V==="input"&&D.type==="file")var w=Im;else if(cd(D))if(Au)w=Fm;else{w=Rm;var f=zm}else(V=D.nodeName)&&V.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(w=Bm);if(w&&(w=w(e,F))){bu(C,w,i,_);break e}f&&f(e,D,F),e==="focusout"&&(f=D._wrapperState)&&f.controlled&&D.type==="number"&&La(D,"number",D.value)}switch(f=F?An(F):window,e){case"focusin":(cd(f)||f.contentEditable==="true")&&(wn=f,Ha=F,xr=null);break;case"focusout":xr=Ha=wn=null;break;case"mousedown":Ya=!0;break;case"contextmenu":case"mouseup":case"dragend":Ya=!1,fd(C,i,_);break;case"selectionchange":if(Vm)break;case"keydown":case"keyup":fd(C,i,_)}var N;if(ql)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else vn?vu(e,i)&&(K="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(K="onCompositionStart");K&&(yu&&i.locale!=="ko"&&(vn||K!=="onCompositionStart"?K==="onCompositionEnd"&&vn&&(N=xu()):(Li=_,_l="value"in Li?Li.value:Li.textContent,vn=!0)),f=qo(F,K),0<f.length&&(K=new od(K,e,null,i,_),C.push({event:K,listeners:f}),N?K.data=N:(N=wu(i),N!==null&&(K.data=N)))),(N=Mm?Tm(e,i):Lm(e,i))&&(F=qo(F,"onBeforeInput"),0<F.length&&(_=new od("onBeforeInput","beforeinput",null,i,_),C.push({event:_,listeners:F}),_.data=N))}Lu(C,t)})}function Dr(e,t,i){return{instance:e,listener:t,currentTarget:i}}function qo(e,t){for(var i=t+"Capture",n=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=Sr(e,i),s!=null&&n.unshift(Dr(e,s,o)),s=Sr(e,t),s!=null&&n.push(Dr(e,s,o))),e=e.return}return n}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xd(e,t,i,n,o){for(var s=t._reactName,l=[];i!==null&&i!==n;){var j=i,E=j.alternate,F=j.stateNode;if(E!==null&&E===n)break;j.tag===5&&F!==null&&(j=F,o?(E=Sr(i,s),E!=null&&l.unshift(Dr(i,E,j))):o||(E=Sr(i,s),E!=null&&l.push(Dr(i,E,j)))),i=i.return}l.length!==0&&e.push({event:t,listeners:l})}var _m=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function yd(e){return(typeof e=="string"?e:""+e).replace(_m,`
`).replace(Xm,"")}function fo(e,t,i){if(t=yd(t),yd(e)!==t&&i)throw Error(be(425))}function Ko(){}var _a=null,Xa=null;function Qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,Qm=typeof clearTimeout=="function"?clearTimeout:void 0,vd=typeof Promise=="function"?Promise:void 0,qm=typeof queueMicrotask=="function"?queueMicrotask:typeof vd<"u"?function(e){return vd.resolve(null).then(e).catch(Km)}:qa;function Km(e){setTimeout(function(){throw e})}function ca(e,t){var i=t,n=0;do{var o=i.nextSibling;if(e.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"){if(n===0){e.removeChild(o),Nr(t);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=o}while(i);Nr(t)}function Bi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),ii="__reactFiber$"+Zn,Or="__reactProps$"+Zn,yi="__reactContainer$"+Zn,Ka="__reactEvents$"+Zn,Zm="__reactListeners$"+Zn,Jm="__reactHandles$"+Zn;function Ji(e){var t=e[ii];if(t)return t;for(var i=e.parentNode;i;){if(t=i[yi]||i[ii]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=wd(e);e!==null;){if(i=e[ii])return i;e=wd(e)}return t}e=i,i=e.parentNode}return null}function qr(e){return e=e[ii]||e[yi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(be(33))}function Cs(e){return e[Or]||null}var Za=[],jn=-1;function Qi(e){return{current:e}}function Ue(e){0>jn||(e.current=Za[jn],Za[jn]=null,jn--)}function Re(e,t){jn++,Za[jn]=e.current,e.current=t}var _i={},gt=Qi(_i),jt=Qi(!1),sn=_i;function Bn(e,t){var i=e.type.contextTypes;if(!i)return _i;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in i)o[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ct(e){return e=e.childContextTypes,e!=null}function Zo(){Ue(jt),Ue(gt)}function bd(e,t,i){if(gt.current!==_i)throw Error(be(168));Re(gt,t),Re(jt,i)}function Ou(e,t,i){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(be(108,z0(e)||"Unknown",o));return He({},i,n)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_i,sn=gt.current,Re(gt,e),Re(jt,jt.current),!0}function Ad(e,t,i){var n=e.stateNode;if(!n)throw Error(be(169));i?(e=Ou(e,t,sn),n.__reactInternalMemoizedMergedChildContext=e,Ue(jt),Ue(gt),Re(gt,e)):Ue(jt),Re(jt,i)}var pi=null,ks=!1,da=!1;function Iu(e){pi===null?pi=[e]:pi.push(e)}function $m(e){ks=!0,Iu(e)}function qi(){if(!da&&pi!==null){da=!0;var e=0,t=Oe;try{var i=pi;for(Oe=1;e<i.length;e++){var n=i[e];do n=n(!0);while(n!==null)}pi=null,ks=!1}catch(o){throw pi!==null&&(pi=pi.slice(e+1)),su(Vl,qi),o}finally{Oe=t,da=!1}}return null}var Cn=[],kn=0,$o=null,es=0,It=[],zt=0,an=null,fi=1,mi="";function Ki(e,t){Cn[kn++]=es,Cn[kn++]=$o,$o=e,es=t}function zu(e,t,i){It[zt++]=fi,It[zt++]=mi,It[zt++]=an,an=e;var n=fi;e=mi;var o=32-qt(n)-1;n&=~(1<<o),i+=1;var s=32-qt(t)+o;if(30<s){var l=o-o%5;s=(n&(1<<l)-1).toString(32),n>>=l,o-=l,fi=1<<32-qt(t)+o|i<<o|n,mi=s+e}else fi=1<<s|i<<o|n,mi=e}function Zl(e){e.return!==null&&(Ki(e,1),zu(e,1,0))}function Jl(e){for(;e===$o;)$o=Cn[--kn],Cn[kn]=null,es=Cn[--kn],Cn[kn]=null;for(;e===an;)an=It[--zt],It[zt]=null,mi=It[--zt],It[zt]=null,fi=It[--zt],It[zt]=null}var Nt=null,Pt=null,Ge=!1,Qt=null;function Ru(e,t){var i=Ft(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function jd(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Nt=e,Pt=Bi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Nt=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=an!==null?{id:fi,overflow:mi}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=Ft(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Nt=e,Pt=null,!0):!1;default:return!1}}function Ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $a(e){if(Ge){var t=Pt;if(t){var i=t;if(!jd(e,t)){if(Ja(e))throw Error(be(418));t=Bi(i.nextSibling);var n=Nt;t&&jd(e,t)?Ru(n,i):(e.flags=e.flags&-4097|2,Ge=!1,Nt=e)}}else{if(Ja(e))throw Error(be(418));e.flags=e.flags&-4097|2,Ge=!1,Nt=e}}}function Cd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nt=e}function mo(e){if(e!==Nt)return!1;if(!Ge)return Cd(e),Ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qa(e.type,e.memoizedProps)),t&&(t=Pt)){if(Ja(e))throw Bu(),Error(be(418));for(;t;)Ru(e,t),t=Bi(t.nextSibling)}if(Cd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(be(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Pt=Bi(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=Nt?Bi(e.stateNode.nextSibling):null;return!0}function Bu(){for(var e=Pt;e;)e=Bi(e.nextSibling)}function Fn(){Pt=Nt=null,Ge=!1}function $l(e){Qt===null?Qt=[e]:Qt.push(e)}var eg=bi.ReactCurrentBatchConfig;function or(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(be(309));var n=i.stateNode}if(!n)throw Error(be(147,e));var o=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var j=o.refs;l===null?delete j[s]:j[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(be(284));if(!i._owner)throw Error(be(290,e))}return e}function go(e,t){throw e=Object.prototype.toString.call(t),Error(be(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kd(e){var t=e._init;return t(e._payload)}function Fu(e){function t(p,a){if(e){var u=p.deletions;u===null?(p.deletions=[a],p.flags|=16):u.push(a)}}function i(p,a){if(!e)return null;for(;a!==null;)t(p,a),a=a.sibling;return null}function n(p,a){for(p=new Map;a!==null;)a.key!==null?p.set(a.key,a):p.set(a.index,a),a=a.sibling;return p}function o(p,a){return p=Vi(p,a),p.index=0,p.sibling=null,p}function s(p,a,u){return p.index=u,e?(u=p.alternate,u!==null?(u=u.index,u<a?(p.flags|=2,a):u):(p.flags|=2,a)):(p.flags|=1048576,a)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function j(p,a,u,y){return a===null||a.tag!==6?(a=xa(u,p.mode,y),a.return=p,a):(a=o(a,u),a.return=p,a)}function E(p,a,u,y){var w=u.type;return w===yn?_(p,a,u.props.children,y,u.key):a!==null&&(a.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Pi&&kd(w)===a.type)?(y=o(a,u.props),y.ref=or(p,a,u),y.return=p,y):(y=zo(u.type,u.key,u.props,null,p.mode,y),y.ref=or(p,a,u),y.return=p,y)}function F(p,a,u,y){return a===null||a.tag!==4||a.stateNode.containerInfo!==u.containerInfo||a.stateNode.implementation!==u.implementation?(a=ya(u,p.mode,y),a.return=p,a):(a=o(a,u.children||[]),a.return=p,a)}function _(p,a,u,y,w){return a===null||a.tag!==7?(a=rn(u,p.mode,y,w),a.return=p,a):(a=o(a,u),a.return=p,a)}function C(p,a,u){if(typeof a=="string"&&a!==""||typeof a=="number")return a=xa(""+a,p.mode,u),a.return=p,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case ro:return u=zo(a.type,a.key,a.props,null,p.mode,u),u.ref=or(p,null,a),u.return=p,u;case xn:return a=ya(a,p.mode,u),a.return=p,a;case Pi:var y=a._init;return C(p,y(a._payload),u)}if(cr(a)||er(a))return a=rn(a,p.mode,u,null),a.return=p,a;go(p,a)}return null}function D(p,a,u,y){var w=a!==null?a.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return w!==null?null:j(p,a,""+u,y);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ro:return u.key===w?E(p,a,u,y):null;case xn:return u.key===w?F(p,a,u,y):null;case Pi:return w=u._init,D(p,a,w(u._payload),y)}if(cr(u)||er(u))return w!==null?null:_(p,a,u,y,null);go(p,u)}return null}function V(p,a,u,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(u)||null,j(a,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ro:return p=p.get(y.key===null?u:y.key)||null,E(a,p,y,w);case xn:return p=p.get(y.key===null?u:y.key)||null,F(a,p,y,w);case Pi:var f=y._init;return V(p,a,u,f(y._payload),w)}if(cr(y)||er(y))return p=p.get(u)||null,_(a,p,y,w,null);go(a,y)}return null}function k(p,a,u,y){for(var w=null,f=null,N=a,K=a=0,Y=null;N!==null&&K<u.length;K++){N.index>K?(Y=N,N=null):Y=N.sibling;var R=D(p,N,u[K],y);if(R===null){N===null&&(N=Y);break}e&&N&&R.alternate===null&&t(p,N),a=s(R,a,K),f===null?w=R:f.sibling=R,f=R,N=Y}if(K===u.length)return i(p,N),Ge&&Ki(p,K),w;if(N===null){for(;K<u.length;K++)N=C(p,u[K],y),N!==null&&(a=s(N,a,K),f===null?w=N:f.sibling=N,f=N);return Ge&&Ki(p,K),w}for(N=n(p,N);K<u.length;K++)Y=V(N,p,K,u[K],y),Y!==null&&(e&&Y.alternate!==null&&N.delete(Y.key===null?K:Y.key),a=s(Y,a,K),f===null?w=Y:f.sibling=Y,f=Y);return e&&N.forEach(function(A){return t(p,A)}),Ge&&Ki(p,K),w}function I(p,a,u,y){var w=er(u);if(typeof w!="function")throw Error(be(150));if(u=w.call(u),u==null)throw Error(be(151));for(var f=w=null,N=a,K=a=0,Y=null,R=u.next();N!==null&&!R.done;K++,R=u.next()){N.index>K?(Y=N,N=null):Y=N.sibling;var A=D(p,N,R.value,y);if(A===null){N===null&&(N=Y);break}e&&N&&A.alternate===null&&t(p,N),a=s(A,a,K),f===null?w=A:f.sibling=A,f=A,N=Y}if(R.done)return i(p,N),Ge&&Ki(p,K),w;if(N===null){for(;!R.done;K++,R=u.next())R=C(p,R.value,y),R!==null&&(a=s(R,a,K),f===null?w=R:f.sibling=R,f=R);return Ge&&Ki(p,K),w}for(N=n(p,N);!R.done;K++,R=u.next())R=V(N,p,K,R.value,y),R!==null&&(e&&R.alternate!==null&&N.delete(R.key===null?K:R.key),a=s(R,a,K),f===null?w=R:f.sibling=R,f=R);return e&&N.forEach(function(L){return t(p,L)}),Ge&&Ki(p,K),w}function U(p,a,u,y){if(typeof u=="object"&&u!==null&&u.type===yn&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case ro:e:{for(var w=u.key,f=a;f!==null;){if(f.key===w){if(w=u.type,w===yn){if(f.tag===7){i(p,f.sibling),a=o(f,u.props.children),a.return=p,p=a;break e}}else if(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Pi&&kd(w)===f.type){i(p,f.sibling),a=o(f,u.props),a.ref=or(p,f,u),a.return=p,p=a;break e}i(p,f);break}else t(p,f);f=f.sibling}u.type===yn?(a=rn(u.props.children,p.mode,y,u.key),a.return=p,p=a):(y=zo(u.type,u.key,u.props,null,p.mode,y),y.ref=or(p,a,u),y.return=p,p=y)}return l(p);case xn:e:{for(f=u.key;a!==null;){if(a.key===f)if(a.tag===4&&a.stateNode.containerInfo===u.containerInfo&&a.stateNode.implementation===u.implementation){i(p,a.sibling),a=o(a,u.children||[]),a.return=p,p=a;break e}else{i(p,a);break}else t(p,a);a=a.sibling}a=ya(u,p.mode,y),a.return=p,p=a}return l(p);case Pi:return f=u._init,U(p,a,f(u._payload),y)}if(cr(u))return k(p,a,u,y);if(er(u))return I(p,a,u,y);go(p,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,a!==null&&a.tag===6?(i(p,a.sibling),a=o(a,u),a.return=p,p=a):(i(p,a),a=xa(u,p.mode,y),a.return=p,p=a),l(p)):i(p,a)}return U}var Un=Fu(!0),Uu=Fu(!1),ts=Qi(null),is=null,Sn=null,ec=null;function tc(){ec=Sn=is=null}function ic(e){var t=ts.current;Ue(ts),e._currentValue=t}function el(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function In(e,t){is=e,ec=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(At=!0),e.firstContext=null)}function Gt(e){var t=e._currentValue;if(ec!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(is===null)throw Error(be(308));Sn=e,is.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var $i=null;function nc(e){$i===null?$i=[e]:$i.push(e)}function Gu(e,t,i,n){var o=t.interleaved;return o===null?(i.next=i,nc(t)):(i.next=o.next,o.next=i),t.interleaved=i,vi(e,n)}function vi(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Ni=!1;function rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fi(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,Te&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,vi(e,i)}return o=n.interleaved,o===null?(t.next=t,nc(n)):(t.next=o.next,o.next=t),n.interleaved=t,vi(e,i)}function Mo(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,Wl(e,i)}}function Sd(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var o=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var l={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};s===null?o=s=l:s=s.next=l,i=i.next}while(i!==null);s===null?o=s=t:s=s.next=t}else o=s=t;i={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function ns(e,t,i,n){var o=e.updateQueue;Ni=!1;var s=o.firstBaseUpdate,l=o.lastBaseUpdate,j=o.shared.pending;if(j!==null){o.shared.pending=null;var E=j,F=E.next;E.next=null,l===null?s=F:l.next=F,l=E;var _=e.alternate;_!==null&&(_=_.updateQueue,j=_.lastBaseUpdate,j!==l&&(j===null?_.firstBaseUpdate=F:j.next=F,_.lastBaseUpdate=E))}if(s!==null){var C=o.baseState;l=0,_=F=E=null,j=s;do{var D=j.lane,V=j.eventTime;if((n&D)===D){_!==null&&(_=_.next={eventTime:V,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var k=e,I=j;switch(D=t,V=i,I.tag){case 1:if(k=I.payload,typeof k=="function"){C=k.call(V,C,D);break e}C=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=I.payload,D=typeof k=="function"?k.call(V,C,D):k,D==null)break e;C=He({},C,D);break e;case 2:Ni=!0}}j.callback!==null&&j.lane!==0&&(e.flags|=64,D=o.effects,D===null?o.effects=[j]:D.push(j))}else V={eventTime:V,lane:D,tag:j.tag,payload:j.payload,callback:j.callback,next:null},_===null?(F=_=V,E=C):_=_.next=V,l|=D;if(j=j.next,j===null){if(j=o.shared.pending,j===null)break;D=j,j=D.next,D.next=null,o.lastBaseUpdate=D,o.shared.pending=null}}while(!0);if(_===null&&(E=C),o.baseState=E,o.firstBaseUpdate=F,o.lastBaseUpdate=_,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);cn|=l,e.lanes=l,e.memoizedState=C}}function Ed(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=i,typeof o!="function")throw Error(be(191,o));o.call(n)}}}var Kr={},oi=Qi(Kr),Ir=Qi(Kr),zr=Qi(Kr);function en(e){if(e===Kr)throw Error(be(174));return e}function oc(e,t){switch(Re(zr,t),Re(Ir,e),Re(oi,Kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oa(t,e)}Ue(oi),Re(oi,t)}function Gn(){Ue(oi),Ue(Ir),Ue(zr)}function Wu(e){en(zr.current);var t=en(oi.current),i=Oa(t,e.type);t!==i&&(Re(Ir,e),Re(oi,i))}function sc(e){Ir.current===e&&(Ue(oi),Ue(Ir))}var Ve=Qi(0);function rs(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=[];function ac(){for(var e=0;e<ha.length;e++)ha[e]._workInProgressVersionPrimary=null;ha.length=0}var To=bi.ReactCurrentDispatcher,ua=bi.ReactCurrentBatchConfig,ln=0,We=null,$e=null,tt=null,os=!1,yr=!1,Rr=0,tg=0;function ut(){throw Error(be(321))}function lc(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Jt(e[i],t[i]))return!1;return!0}function cc(e,t,i,n,o,s){if(ln=s,We=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?og:sg,e=i(n,o),yr){s=0;do{if(yr=!1,Rr=0,25<=s)throw Error(be(301));s+=1,tt=$e=null,t.updateQueue=null,To.current=ag,e=i(n,o)}while(yr)}if(To.current=ss,t=$e!==null&&$e.next!==null,ln=0,tt=$e=We=null,os=!1,t)throw Error(be(300));return e}function dc(){var e=Rr!==0;return Rr=0,e}function ei(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?We.memoizedState=tt=e:tt=tt.next=e,tt}function Vt(){if($e===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=tt===null?We.memoizedState:tt.next;if(t!==null)tt=t,$e=e;else{if(e===null)throw Error(be(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},tt===null?We.memoizedState=tt=e:tt=tt.next=e}return tt}function Br(e,t){return typeof t=="function"?t(e):t}function pa(e){var t=Vt(),i=t.queue;if(i===null)throw Error(be(311));i.lastRenderedReducer=e;var n=$e,o=n.baseQueue,s=i.pending;if(s!==null){if(o!==null){var l=o.next;o.next=s.next,s.next=l}n.baseQueue=o=s,i.pending=null}if(o!==null){s=o.next,n=n.baseState;var j=l=null,E=null,F=s;do{var _=F.lane;if((ln&_)===_)E!==null&&(E=E.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),n=F.hasEagerState?F.eagerState:e(n,F.action);else{var C={lane:_,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};E===null?(j=E=C,l=n):E=E.next=C,We.lanes|=_,cn|=_}F=F.next}while(F!==null&&F!==s);E===null?l=n:E.next=j,Jt(n,t.memoizedState)||(At=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=E,i.lastRenderedState=n}if(e=i.interleaved,e!==null){o=e;do s=o.lane,We.lanes|=s,cn|=s,o=o.next;while(o!==e)}else o===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function fa(e){var t=Vt(),i=t.queue;if(i===null)throw Error(be(311));i.lastRenderedReducer=e;var n=i.dispatch,o=i.pending,s=t.memoizedState;if(o!==null){i.pending=null;var l=o=o.next;do s=e(s,l.action),l=l.next;while(l!==o);Jt(s,t.memoizedState)||(At=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),i.lastRenderedState=s}return[s,n]}function Hu(){}function Yu(e,t){var i=We,n=Vt(),o=t(),s=!Jt(n.memoizedState,o);if(s&&(n.memoizedState=o,At=!0),n=n.queue,hc(Qu.bind(null,i,n,e),[e]),n.getSnapshot!==t||s||tt!==null&&tt.memoizedState.tag&1){if(i.flags|=2048,Fr(9,Xu.bind(null,i,n,o,t),void 0,null),rt===null)throw Error(be(349));ln&30||_u(i,t,o)}return o}function _u(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Xu(e,t,i,n){t.value=i,t.getSnapshot=n,qu(t)&&Ku(e)}function Qu(e,t,i){return i(function(){qu(t)&&Ku(e)})}function qu(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Jt(e,i)}catch{return!0}}function Ku(e){var t=vi(e,1);t!==null&&Kt(t,e,1,-1)}function Pd(e){var t=ei();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=rg.bind(null,We,e),[t.memoizedState,e]}function Fr(e,t,i,n){return e={tag:e,create:t,destroy:i,deps:n,next:null},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e)),e}function Zu(){return Vt().memoizedState}function Lo(e,t,i,n){var o=ei();We.flags|=e,o.memoizedState=Fr(1|t,i,void 0,n===void 0?null:n)}function Ss(e,t,i,n){var o=Vt();n=n===void 0?null:n;var s=void 0;if($e!==null){var l=$e.memoizedState;if(s=l.destroy,n!==null&&lc(n,l.deps)){o.memoizedState=Fr(t,i,s,n);return}}We.flags|=e,o.memoizedState=Fr(1|t,i,s,n)}function Nd(e,t){return Lo(8390656,8,e,t)}function hc(e,t){return Ss(2048,8,e,t)}function Ju(e,t){return Ss(4,2,e,t)}function $u(e,t){return Ss(4,4,e,t)}function ep(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tp(e,t,i){return i=i!=null?i.concat([e]):null,Ss(4,4,ep.bind(null,t,e),i)}function uc(){}function ip(e,t){var i=Vt();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&lc(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function np(e,t){var i=Vt();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&lc(t,n[1])?n[0]:(e=e(),i.memoizedState=[e,t],e)}function rp(e,t,i){return ln&21?(Jt(i,t)||(i=cu(),We.lanes|=i,cn|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=i)}function ig(e,t){var i=Oe;Oe=i!==0&&4>i?i:4,e(!0);var n=ua.transition;ua.transition={};try{e(!1),t()}finally{Oe=i,ua.transition=n}}function op(){return Vt().memoizedState}function ng(e,t,i){var n=Gi(e);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},sp(e))ap(t,i);else if(i=Gu(e,t,i,n),i!==null){var o=yt();Kt(i,e,n,o),lp(i,t,n)}}function rg(e,t,i){var n=Gi(e),o={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(sp(e))ap(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,j=s(l,i);if(o.hasEagerState=!0,o.eagerState=j,Jt(j,l)){var E=t.interleaved;E===null?(o.next=o,nc(t)):(o.next=E.next,E.next=o),t.interleaved=o;return}}catch{}finally{}i=Gu(e,t,o,n),i!==null&&(o=yt(),Kt(i,e,n,o),lp(i,t,n))}}function sp(e){var t=e.alternate;return e===We||t!==null&&t===We}function ap(e,t){yr=os=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function lp(e,t,i){if(i&4194240){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,Wl(e,i)}}var ss={readContext:Gt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},og={readContext:Gt,useCallback:function(e,t){return ei().memoizedState=[e,t===void 0?null:t],e},useContext:Gt,useEffect:Nd,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,Lo(4194308,4,ep.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var i=ei();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var n=ei();return t=i!==void 0?i(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ng.bind(null,We,e),[n.memoizedState,e]},useRef:function(e){var t=ei();return e={current:e},t.memoizedState=e},useState:Pd,useDebugValue:uc,useDeferredValue:function(e){return ei().memoizedState=e},useTransition:function(){var e=Pd(!1),t=e[0];return e=ig.bind(null,e[1]),ei().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var n=We,o=ei();if(Ge){if(i===void 0)throw Error(be(407));i=i()}else{if(i=t(),rt===null)throw Error(be(349));ln&30||_u(n,t,i)}o.memoizedState=i;var s={value:i,getSnapshot:t};return o.queue=s,Nd(Qu.bind(null,n,s,e),[e]),n.flags|=2048,Fr(9,Xu.bind(null,n,s,i,t),void 0,null),i},useId:function(){var e=ei(),t=rt.identifierPrefix;if(Ge){var i=mi,n=fi;i=(n&~(1<<32-qt(n)-1)).toString(32)+i,t=":"+t+"R"+i,i=Rr++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=tg++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sg={readContext:Gt,useCallback:ip,useContext:Gt,useEffect:hc,useImperativeHandle:tp,useInsertionEffect:Ju,useLayoutEffect:$u,useMemo:np,useReducer:pa,useRef:Zu,useState:function(){return pa(Br)},useDebugValue:uc,useDeferredValue:function(e){var t=Vt();return rp(t,$e.memoizedState,e)},useTransition:function(){var e=pa(Br)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:Hu,useSyncExternalStore:Yu,useId:op,unstable_isNewReconciler:!1},ag={readContext:Gt,useCallback:ip,useContext:Gt,useEffect:hc,useImperativeHandle:tp,useInsertionEffect:Ju,useLayoutEffect:$u,useMemo:np,useReducer:fa,useRef:Zu,useState:function(){return fa(Br)},useDebugValue:uc,useDeferredValue:function(e){var t=Vt();return $e===null?t.memoizedState=e:rp(t,$e.memoizedState,e)},useTransition:function(){var e=fa(Br)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:Hu,useSyncExternalStore:Yu,useId:op,unstable_isNewReconciler:!1};function _t(e,t){if(e&&e.defaultProps){t=He({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function tl(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:He({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Es={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var n=yt(),o=Gi(e),s=gi(n,o);s.payload=t,i!=null&&(s.callback=i),t=Fi(e,s,o),t!==null&&(Kt(t,e,o,n),Mo(t,e,o))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=yt(),o=Gi(e),s=gi(n,o);s.tag=1,s.payload=t,i!=null&&(s.callback=i),t=Fi(e,s,o),t!==null&&(Kt(t,e,o,n),Mo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=yt(),n=Gi(e),o=gi(i,n);o.tag=2,t!=null&&(o.callback=t),t=Fi(e,o,n),t!==null&&(Kt(t,e,n,i),Mo(t,e,n))}};function Md(e,t,i,n,o,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,l):t.prototype&&t.prototype.isPureReactComponent?!Tr(i,n)||!Tr(o,s):!0}function cp(e,t,i){var n=!1,o=_i,s=t.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(o=Ct(t)?sn:gt.current,n=t.contextTypes,s=(n=n!=null)?Bn(e,o):_i),t=new t(i,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Es,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Td(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&Es.enqueueReplaceState(t,t.state,null)}function il(e,t,i,n){var o=e.stateNode;o.props=i,o.state=e.memoizedState,o.refs={},rc(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=Gt(s):(s=Ct(t)?sn:gt.current,o.context=Bn(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(tl(e,t,s,i),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Es.enqueueReplaceState(o,o.state,null),ns(e,i,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var i="",n=t;do i+=I0(n),n=n.return;while(n);var o=i}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function ma(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function nl(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var lg=typeof WeakMap=="function"?WeakMap:Map;function dp(e,t,i){i=gi(-1,i),i.tag=3,i.payload={element:null};var n=t.value;return i.callback=function(){ls||(ls=!0,pl=n),nl(e,t)},i}function hp(e,t,i){i=gi(-1,i),i.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;i.payload=function(){return n(o)},i.callback=function(){nl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(i.callback=function(){nl(e,t),typeof n!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),i}function Ld(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new lg;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(i)||(o.add(i),e=Ag.bind(null,e,t,i),t.then(e,e))}function Dd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Od(e,t,i,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=gi(-1,1),t.tag=2,Fi(i,t,1))),i.lanes|=1),e)}var cg=bi.ReactCurrentOwner,At=!1;function xt(e,t,i,n){t.child=e===null?Uu(t,null,i,n):Un(t,e.child,i,n)}function Id(e,t,i,n,o){i=i.render;var s=t.ref;return In(t,o),n=cc(e,t,i,n,s,o),i=dc(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wi(e,t,o)):(Ge&&i&&Zl(t),t.flags|=1,xt(e,t,n,o),t.child)}function zd(e,t,i,n,o){if(e===null){var s=i.type;return typeof s=="function"&&!wc(s)&&s.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=s,up(e,t,s,n,o)):(e=zo(i.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var l=s.memoizedProps;if(i=i.compare,i=i!==null?i:Tr,i(l,n)&&e.ref===t.ref)return wi(e,t,o)}return t.flags|=1,e=Vi(s,n),e.ref=t.ref,e.return=t,t.child=e}function up(e,t,i,n,o){if(e!==null){var s=e.memoizedProps;if(Tr(s,n)&&e.ref===t.ref)if(At=!1,t.pendingProps=n=s,(e.lanes&o)!==0)e.flags&131072&&(At=!0);else return t.lanes=e.lanes,wi(e,t,o)}return rl(e,t,i,n,o)}function pp(e,t,i){var n=t.pendingProps,o=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Pn,Et),Et|=i;else{if(!(i&1073741824))return e=s!==null?s.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Re(Pn,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:i,Re(Pn,Et),Et|=n}else s!==null?(n=s.baseLanes|i,t.memoizedState=null):n=i,Re(Pn,Et),Et|=n;return xt(e,t,o,i),t.child}function fp(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function rl(e,t,i,n,o){var s=Ct(i)?sn:gt.current;return s=Bn(t,s),In(t,o),i=cc(e,t,i,n,s,o),n=dc(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wi(e,t,o)):(Ge&&n&&Zl(t),t.flags|=1,xt(e,t,i,o),t.child)}function Rd(e,t,i,n,o){if(Ct(i)){var s=!0;Jo(t)}else s=!1;if(In(t,o),t.stateNode===null)Do(e,t),cp(t,i,n),il(t,i,n,o),n=!0;else if(e===null){var l=t.stateNode,j=t.memoizedProps;l.props=j;var E=l.context,F=i.contextType;typeof F=="object"&&F!==null?F=Gt(F):(F=Ct(i)?sn:gt.current,F=Bn(t,F));var _=i.getDerivedStateFromProps,C=typeof _=="function"||typeof l.getSnapshotBeforeUpdate=="function";C||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(j!==n||E!==F)&&Td(t,l,n,F),Ni=!1;var D=t.memoizedState;l.state=D,ns(t,n,l,o),E=t.memoizedState,j!==n||D!==E||jt.current||Ni?(typeof _=="function"&&(tl(t,i,_,n),E=t.memoizedState),(j=Ni||Md(t,i,j,n,D,E,F))?(C||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=E),l.props=n,l.state=E,l.context=F,n=j):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,Vu(e,t),j=t.memoizedProps,F=t.type===t.elementType?j:_t(t.type,j),l.props=F,C=t.pendingProps,D=l.context,E=i.contextType,typeof E=="object"&&E!==null?E=Gt(E):(E=Ct(i)?sn:gt.current,E=Bn(t,E));var V=i.getDerivedStateFromProps;(_=typeof V=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(j!==C||D!==E)&&Td(t,l,n,E),Ni=!1,D=t.memoizedState,l.state=D,ns(t,n,l,o);var k=t.memoizedState;j!==C||D!==k||jt.current||Ni?(typeof V=="function"&&(tl(t,i,V,n),k=t.memoizedState),(F=Ni||Md(t,i,F,n,D,k,E)||!1)?(_||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,k,E),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,k,E)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||j===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),l.props=n,l.state=k,l.context=E,n=F):(typeof l.componentDidUpdate!="function"||j===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),n=!1)}return ol(e,t,i,n,s,o)}function ol(e,t,i,n,o,s){fp(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return o&&Ad(t,i,!1),wi(e,t,s);n=t.stateNode,cg.current=t;var j=l&&typeof i.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=Un(t,e.child,null,s),t.child=Un(t,null,j,s)):xt(e,t,j,s),t.memoizedState=n.state,o&&Ad(t,i,!0),t.child}function mp(e){var t=e.stateNode;t.pendingContext?bd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bd(e,t.context,!1),oc(e,t.containerInfo)}function Bd(e,t,i,n,o){return Fn(),$l(o),t.flags|=256,xt(e,t,i,n),t.child}var sl={dehydrated:null,treeContext:null,retryLane:0};function al(e){return{baseLanes:e,cachePool:null,transitions:null}}function gp(e,t,i){var n=t.pendingProps,o=Ve.current,s=!1,l=(t.flags&128)!==0,j;if((j=l)||(j=e!==null&&e.memoizedState===null?!1:(o&2)!==0),j?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Re(Ve,o&1),e===null)return $a(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,s?(n=t.mode,s=t.child,l={mode:"hidden",children:l},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Ms(l,n,0,null),e=rn(e,n,i,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=al(i),t.memoizedState=sl,e):pc(t,l));if(o=e.memoizedState,o!==null&&(j=o.dehydrated,j!==null))return dg(e,t,l,n,j,o,i);if(s){s=n.fallback,l=t.mode,o=e.child,j=o.sibling;var E={mode:"hidden",children:n.children};return!(l&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=E,t.deletions=null):(n=Vi(o,E),n.subtreeFlags=o.subtreeFlags&14680064),j!==null?s=Vi(j,s):(s=rn(s,l,i,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,l=e.child.memoizedState,l=l===null?al(i):{baseLanes:l.baseLanes|i,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~i,t.memoizedState=sl,n}return s=e.child,e=s.sibling,n=Vi(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=i),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n}function pc(e,t){return t=Ms({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,i,n){return n!==null&&$l(n),Un(t,e.child,null,i),e=pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dg(e,t,i,n,o,s,l){if(i)return t.flags&256?(t.flags&=-257,n=ma(Error(be(422))),xo(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,o=t.mode,n=Ms({mode:"visible",children:n.children},o,0,null),s=rn(s,o,l,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&Un(t,e.child,null,l),t.child.memoizedState=al(l),t.memoizedState=sl,s);if(!(t.mode&1))return xo(e,t,l,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var j=n.dgst;return n=j,s=Error(be(419)),n=ma(s,n,void 0),xo(e,t,l,n)}if(j=(l&e.childLanes)!==0,At||j){if(n=rt,n!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|l)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,vi(e,o),Kt(n,e,o,-1))}return vc(),n=ma(Error(be(421))),xo(e,t,l,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jg.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,Pt=Bi(o.nextSibling),Nt=t,Ge=!0,Qt=null,e!==null&&(It[zt++]=fi,It[zt++]=mi,It[zt++]=an,fi=e.id,mi=e.overflow,an=t),t=pc(t,n.children),t.flags|=4096,t)}function Fd(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),el(e.return,t,i)}function ga(e,t,i,n,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=i,s.tailMode=o)}function xp(e,t,i){var n=t.pendingProps,o=n.revealOrder,s=n.tail;if(xt(e,t,n.children,i),n=Ve.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fd(e,i,t);else if(e.tag===19)Fd(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Re(Ve,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(i=t.child,o=null;i!==null;)e=i.alternate,e!==null&&rs(e)===null&&(o=i),i=i.sibling;i=o,i===null?(o=t.child,t.child=null):(o=i.sibling,i.sibling=null),ga(t,!1,o,i,s);break;case"backwards":for(i=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&rs(e)===null){t.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}ga(t,!0,i,null,s);break;case"together":ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Do(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wi(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(be(153));if(t.child!==null){for(e=t.child,i=Vi(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Vi(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function hg(e,t,i){switch(t.tag){case 3:mp(t),Fn();break;case 5:Wu(t);break;case 1:Ct(t.type)&&Jo(t);break;case 4:oc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Re(ts,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Re(Ve,Ve.current&1),t.flags|=128,null):i&t.child.childLanes?gp(e,t,i):(Re(Ve,Ve.current&1),e=wi(e,t,i),e!==null?e.sibling:null);Re(Ve,Ve.current&1);break;case 19:if(n=(i&t.childLanes)!==0,e.flags&128){if(n)return xp(e,t,i);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Re(Ve,Ve.current),n)break;return null;case 22:case 23:return t.lanes=0,pp(e,t,i)}return wi(e,t,i)}var yp,ll,vp,wp;yp=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};ll=function(){};vp=function(e,t,i,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,en(oi.current);var s=null;switch(i){case"input":o=Ma(e,o),n=Ma(e,n),s=[];break;case"select":o=He({},o,{value:void 0}),n=He({},n,{value:void 0}),s=[];break;case"textarea":o=Da(e,o),n=Da(e,n),s=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ko)}Ia(i,n);var l;i=null;for(F in o)if(!n.hasOwnProperty(F)&&o.hasOwnProperty(F)&&o[F]!=null)if(F==="style"){var j=o[F];for(l in j)j.hasOwnProperty(l)&&(i||(i={}),i[l]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(Cr.hasOwnProperty(F)?s||(s=[]):(s=s||[]).push(F,null));for(F in n){var E=n[F];if(j=o!=null?o[F]:void 0,n.hasOwnProperty(F)&&E!==j&&(E!=null||j!=null))if(F==="style")if(j){for(l in j)!j.hasOwnProperty(l)||E&&E.hasOwnProperty(l)||(i||(i={}),i[l]="");for(l in E)E.hasOwnProperty(l)&&j[l]!==E[l]&&(i||(i={}),i[l]=E[l])}else i||(s||(s=[]),s.push(F,i)),i=E;else F==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,j=j?j.__html:void 0,E!=null&&j!==E&&(s=s||[]).push(F,E)):F==="children"?typeof E!="string"&&typeof E!="number"||(s=s||[]).push(F,""+E):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(F)?(E!=null&&F==="onScroll"&&Be("scroll",e),s||j===E||(s=[])):(s=s||[]).push(F,E))}i&&(s=s||[]).push("style",i);var F=s;(t.updateQueue=F)&&(t.flags|=4)}};wp=function(e,t,i,n){i!==n&&(t.flags|=4)};function sr(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function ug(e,t,i){var n=t.pendingProps;switch(Jl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return Ct(t.type)&&Zo(),pt(t),null;case 3:return n=t.stateNode,Gn(),Ue(jt),Ue(gt),ac(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(mo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qt!==null&&(gl(Qt),Qt=null))),ll(e,t),pt(t),null;case 5:sc(t);var o=en(zr.current);if(i=t.type,e!==null&&t.stateNode!=null)vp(e,t,i,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(be(166));return pt(t),null}if(e=en(oi.current),mo(t)){n=t.stateNode,i=t.type;var s=t.memoizedProps;switch(n[ii]=t,n[Or]=s,e=(t.mode&1)!==0,i){case"dialog":Be("cancel",n),Be("close",n);break;case"iframe":case"object":case"embed":Be("load",n);break;case"video":case"audio":for(o=0;o<hr.length;o++)Be(hr[o],n);break;case"source":Be("error",n);break;case"img":case"image":case"link":Be("error",n),Be("load",n);break;case"details":Be("toggle",n);break;case"input":Qc(n,s),Be("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},Be("invalid",n);break;case"textarea":Kc(n,s),Be("invalid",n)}Ia(i,s),o=null;for(var l in s)if(s.hasOwnProperty(l)){var j=s[l];l==="children"?typeof j=="string"?n.textContent!==j&&(s.suppressHydrationWarning!==!0&&fo(n.textContent,j,e),o=["children",j]):typeof j=="number"&&n.textContent!==""+j&&(s.suppressHydrationWarning!==!0&&fo(n.textContent,j,e),o=["children",""+j]):Cr.hasOwnProperty(l)&&j!=null&&l==="onScroll"&&Be("scroll",n)}switch(i){case"input":oo(n),qc(n,s,!0);break;case"textarea":oo(n),Zc(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Ko)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qh(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(i,{is:n.is}):(e=l.createElement(i),i==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,i),e[ii]=t,e[Or]=n,yp(e,t,!1,!1),t.stateNode=e;e:{switch(l=za(i,n),i){case"dialog":Be("cancel",e),Be("close",e),o=n;break;case"iframe":case"object":case"embed":Be("load",e),o=n;break;case"video":case"audio":for(o=0;o<hr.length;o++)Be(hr[o],e);o=n;break;case"source":Be("error",e),o=n;break;case"img":case"image":case"link":Be("error",e),Be("load",e),o=n;break;case"details":Be("toggle",e),o=n;break;case"input":Qc(e,n),o=Ma(e,n),Be("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=He({},n,{value:void 0}),Be("invalid",e);break;case"textarea":Kc(e,n),o=Da(e,n),Be("invalid",e);break;default:o=n}Ia(i,o),j=o;for(s in j)if(j.hasOwnProperty(s)){var E=j[s];s==="style"?Zh(e,E):s==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&qh(e,E)):s==="children"?typeof E=="string"?(i!=="textarea"||E!=="")&&kr(e,E):typeof E=="number"&&kr(e,""+E):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Cr.hasOwnProperty(s)?E!=null&&s==="onScroll"&&Be("scroll",e):E!=null&&Rl(e,s,E,l))}switch(i){case"input":oo(e),qc(e,n,!1);break;case"textarea":oo(e),Zc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Yi(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Tn(e,!!n.multiple,s,!1):n.defaultValue!=null&&Tn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ko)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)wp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(be(166));if(i=en(zr.current),en(oi.current),mo(t)){if(n=t.stateNode,i=t.memoizedProps,n[ii]=t,(s=n.nodeValue!==i)&&(e=Nt,e!==null))switch(e.tag){case 3:fo(n.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(n.nodeValue,i,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[ii]=t,t.stateNode=n}return pt(t),null;case 13:if(Ue(Ve),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ge&&Pt!==null&&t.mode&1&&!(t.flags&128))Bu(),Fn(),t.flags|=98560,s=!1;else if(s=mo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(be(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(be(317));s[ii]=t}else Fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pt(t),s=!1}else Qt!==null&&(gl(Qt),Qt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Ve.current&1?et===0&&(et=3):vc())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return Gn(),ll(e,t),e===null&&Lr(t.stateNode.containerInfo),pt(t),null;case 10:return ic(t.type._context),pt(t),null;case 17:return Ct(t.type)&&Zo(),pt(t),null;case 19:if(Ue(Ve),s=t.memoizedState,s===null)return pt(t),null;if(n=(t.flags&128)!==0,l=s.rendering,l===null)if(n)sr(s,!1);else{if(et!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=rs(e),l!==null){for(t.flags|=128,sr(s,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=i,i=t.child;i!==null;)s=i,e=n,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Re(Ve,Ve.current&1|2),t.child}e=e.sibling}s.tail!==null&&Xe()>Wn&&(t.flags|=128,n=!0,sr(s,!1),t.lanes=4194304)}else{if(!n)if(e=rs(l),e!==null){if(t.flags|=128,n=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),sr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Ge)return pt(t),null}else 2*Xe()-s.renderingStartTime>Wn&&i!==1073741824&&(t.flags|=128,n=!0,sr(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(i=s.last,i!==null?i.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Xe(),t.sibling=null,i=Ve.current,Re(Ve,n?i&1|2:i&1),t):(pt(t),null);case 22:case 23:return yc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Et&1073741824&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(be(156,t.tag))}function pg(e,t){switch(Jl(t),t.tag){case 1:return Ct(t.type)&&Zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),Ue(jt),Ue(gt),ac(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return sc(t),null;case 13:if(Ue(Ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(be(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ue(Ve),null;case 4:return Gn(),null;case 10:return ic(t.type._context),null;case 22:case 23:return yc(),null;case 24:return null;default:return null}}var yo=!1,ft=!1,fg=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function En(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){_e(e,t,n)}else i.current=null}function cl(e,t,i){try{i()}catch(n){_e(e,t,n)}}var Ud=!1;function mg(e,t){if(_a=Xo,e=ku(),Kl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var o=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var l=0,j=-1,E=-1,F=0,_=0,C=e,D=null;t:for(;;){for(var V;C!==i||o!==0&&C.nodeType!==3||(j=l+o),C!==s||n!==0&&C.nodeType!==3||(E=l+n),C.nodeType===3&&(l+=C.nodeValue.length),(V=C.firstChild)!==null;)D=C,C=V;for(;;){if(C===e)break t;if(D===i&&++F===o&&(j=l),D===s&&++_===n&&(E=l),(V=C.nextSibling)!==null)break;C=D,D=C.parentNode}C=V}i=j===-1||E===-1?null:{start:j,end:E}}else i=null}i=i||{start:0,end:0}}else i=null;for(Xa={focusedElem:e,selectionRange:i},Xo=!1,Ce=t;Ce!==null;)if(t=Ce,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ce=e;else for(;Ce!==null;){t=Ce;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var I=k.memoizedProps,U=k.memoizedState,p=t.stateNode,a=p.getSnapshotBeforeUpdate(t.elementType===t.type?I:_t(t.type,I),U);p.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var u=t.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(be(163))}}catch(y){_e(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,Ce=e;break}Ce=t.return}return k=Ud,Ud=!1,k}function vr(e,t,i){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&cl(t,i,s)}o=o.next}while(o!==n)}}function Ps(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var n=i.create;i.destroy=n()}i=i.next}while(i!==t)}}function dl(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function bp(e){var t=e.alternate;t!==null&&(e.alternate=null,bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ii],delete t[Or],delete t[Ka],delete t[Zm],delete t[Jm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ap(e){return e.tag===5||e.tag===3||e.tag===4}function Gd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ap(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hl(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Ko));else if(n!==4&&(e=e.child,e!==null))for(hl(e,t,i),e=e.sibling;e!==null;)hl(e,t,i),e=e.sibling}function ul(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ul(e,t,i),e=e.sibling;e!==null;)ul(e,t,i),e=e.sibling}var st=null,Xt=!1;function ji(e,t,i){for(i=i.child;i!==null;)jp(e,t,i),i=i.sibling}function jp(e,t,i){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(ws,i)}catch{}switch(i.tag){case 5:ft||En(i,t);case 6:var n=st,o=Xt;st=null,ji(e,t,i),st=n,Xt=o,st!==null&&(Xt?(e=st,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):st.removeChild(i.stateNode));break;case 18:st!==null&&(Xt?(e=st,i=i.stateNode,e.nodeType===8?ca(e.parentNode,i):e.nodeType===1&&ca(e,i),Nr(e)):ca(st,i.stateNode));break;case 4:n=st,o=Xt,st=i.stateNode.containerInfo,Xt=!0,ji(e,t,i),st=n,Xt=o;break;case 0:case 11:case 14:case 15:if(!ft&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var s=o,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&cl(i,t,l),o=o.next}while(o!==n)}ji(e,t,i);break;case 1:if(!ft&&(En(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(j){_e(i,t,j)}ji(e,t,i);break;case 21:ji(e,t,i);break;case 22:i.mode&1?(ft=(n=ft)||i.memoizedState!==null,ji(e,t,i),ft=n):ji(e,t,i);break;default:ji(e,t,i)}}function Vd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new fg),t.forEach(function(n){var o=Cg.bind(null,e,n);i.has(n)||(i.add(n),n.then(o,o))})}}function Ht(e,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var o=i[n];try{var s=e,l=t,j=l;e:for(;j!==null;){switch(j.tag){case 5:st=j.stateNode,Xt=!1;break e;case 3:st=j.stateNode.containerInfo,Xt=!0;break e;case 4:st=j.stateNode.containerInfo,Xt=!0;break e}j=j.return}if(st===null)throw Error(be(160));jp(s,l,o),st=null,Xt=!1;var E=o.alternate;E!==null&&(E.return=null),o.return=null}catch(F){_e(o,t,F)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cp(t,e),t=t.sibling}function Cp(e,t){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ht(t,e),$t(e),n&4){try{vr(3,e,e.return),Ps(3,e)}catch(I){_e(e,e.return,I)}try{vr(5,e,e.return)}catch(I){_e(e,e.return,I)}}break;case 1:Ht(t,e),$t(e),n&512&&i!==null&&En(i,i.return);break;case 5:if(Ht(t,e),$t(e),n&512&&i!==null&&En(i,i.return),e.flags&32){var o=e.stateNode;try{kr(o,"")}catch(I){_e(e,e.return,I)}}if(n&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,l=i!==null?i.memoizedProps:s,j=e.type,E=e.updateQueue;if(e.updateQueue=null,E!==null)try{j==="input"&&s.type==="radio"&&s.name!=null&&_h(o,s),za(j,l);var F=za(j,s);for(l=0;l<E.length;l+=2){var _=E[l],C=E[l+1];_==="style"?Zh(o,C):_==="dangerouslySetInnerHTML"?qh(o,C):_==="children"?kr(o,C):Rl(o,_,C,F)}switch(j){case"input":Ta(o,s);break;case"textarea":Xh(o,s);break;case"select":var D=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var V=s.value;V!=null?Tn(o,!!s.multiple,V,!1):D!==!!s.multiple&&(s.defaultValue!=null?Tn(o,!!s.multiple,s.defaultValue,!0):Tn(o,!!s.multiple,s.multiple?[]:"",!1))}o[Or]=s}catch(I){_e(e,e.return,I)}}break;case 6:if(Ht(t,e),$t(e),n&4){if(e.stateNode===null)throw Error(be(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(I){_e(e,e.return,I)}}break;case 3:if(Ht(t,e),$t(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(I){_e(e,e.return,I)}break;case 4:Ht(t,e),$t(e);break;case 13:Ht(t,e),$t(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(gc=Xe())),n&4&&Vd(e);break;case 22:if(_=i!==null&&i.memoizedState!==null,e.mode&1?(ft=(F=ft)||_,Ht(t,e),ft=F):Ht(t,e),$t(e),n&8192){if(F=e.memoizedState!==null,(e.stateNode.isHidden=F)&&!_&&e.mode&1)for(Ce=e,_=e.child;_!==null;){for(C=Ce=_;Ce!==null;){switch(D=Ce,V=D.child,D.tag){case 0:case 11:case 14:case 15:vr(4,D,D.return);break;case 1:En(D,D.return);var k=D.stateNode;if(typeof k.componentWillUnmount=="function"){n=D,i=D.return;try{t=n,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(I){_e(n,i,I)}}break;case 5:En(D,D.return);break;case 22:if(D.memoizedState!==null){Hd(C);continue}}V!==null?(V.return=D,Ce=V):Hd(C)}_=_.sibling}e:for(_=null,C=e;;){if(C.tag===5){if(_===null){_=C;try{o=C.stateNode,F?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(j=C.stateNode,E=C.memoizedProps.style,l=E!=null&&E.hasOwnProperty("display")?E.display:null,j.style.display=Kh("display",l))}catch(I){_e(e,e.return,I)}}}else if(C.tag===6){if(_===null)try{C.stateNode.nodeValue=F?"":C.memoizedProps}catch(I){_e(e,e.return,I)}}else if((C.tag!==22&&C.tag!==23||C.memoizedState===null||C===e)&&C.child!==null){C.child.return=C,C=C.child;continue}if(C===e)break e;for(;C.sibling===null;){if(C.return===null||C.return===e)break e;_===C&&(_=null),C=C.return}_===C&&(_=null),C.sibling.return=C.return,C=C.sibling}}break;case 19:Ht(t,e),$t(e),n&4&&Vd(e);break;case 21:break;default:Ht(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(Ap(i)){var n=i;break e}i=i.return}throw Error(be(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(kr(o,""),n.flags&=-33);var s=Gd(e);ul(e,s,o);break;case 3:case 4:var l=n.stateNode.containerInfo,j=Gd(e);hl(e,j,l);break;default:throw Error(be(161))}}catch(E){_e(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gg(e,t,i){Ce=e,kp(e)}function kp(e,t,i){for(var n=(e.mode&1)!==0;Ce!==null;){var o=Ce,s=o.child;if(o.tag===22&&n){var l=o.memoizedState!==null||yo;if(!l){var j=o.alternate,E=j!==null&&j.memoizedState!==null||ft;j=yo;var F=ft;if(yo=l,(ft=E)&&!F)for(Ce=o;Ce!==null;)l=Ce,E=l.child,l.tag===22&&l.memoizedState!==null?Yd(o):E!==null?(E.return=l,Ce=E):Yd(o);for(;s!==null;)Ce=s,kp(s),s=s.sibling;Ce=o,yo=j,ft=F}Wd(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,Ce=s):Wd(e)}}function Wd(e){for(;Ce!==null;){var t=Ce;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ft||Ps(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ft)if(i===null)n.componentDidMount();else{var o=t.elementType===t.type?i.memoizedProps:_t(t.type,i.memoizedProps);n.componentDidUpdate(o,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ed(t,s,n);break;case 3:var l=t.updateQueue;if(l!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}Ed(t,l,i)}break;case 5:var j=t.stateNode;if(i===null&&t.flags&4){i=j;var E=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&i.focus();break;case"img":E.src&&(i.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var F=t.alternate;if(F!==null){var _=F.memoizedState;if(_!==null){var C=_.dehydrated;C!==null&&Nr(C)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(be(163))}ft||t.flags&512&&dl(t)}catch(D){_e(t,t.return,D)}}if(t===e){Ce=null;break}if(i=t.sibling,i!==null){i.return=t.return,Ce=i;break}Ce=t.return}}function Hd(e){for(;Ce!==null;){var t=Ce;if(t===e){Ce=null;break}var i=t.sibling;if(i!==null){i.return=t.return,Ce=i;break}Ce=t.return}}function Yd(e){for(;Ce!==null;){var t=Ce;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Ps(4,t)}catch(E){_e(t,i,E)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(E){_e(t,o,E)}}var s=t.return;try{dl(t)}catch(E){_e(t,s,E)}break;case 5:var l=t.return;try{dl(t)}catch(E){_e(t,l,E)}}}catch(E){_e(t,t.return,E)}if(t===e){Ce=null;break}var j=t.sibling;if(j!==null){j.return=t.return,Ce=j;break}Ce=t.return}}var xg=Math.ceil,as=bi.ReactCurrentDispatcher,fc=bi.ReactCurrentOwner,Ut=bi.ReactCurrentBatchConfig,Te=0,rt=null,Ke=null,at=0,Et=0,Pn=Qi(0),et=0,Ur=null,cn=0,Ns=0,mc=0,wr=null,bt=null,gc=0,Wn=1/0,hi=null,ls=!1,pl=null,Ui=null,vo=!1,Di=null,cs=0,br=0,fl=null,Oo=-1,Io=0;function yt(){return Te&6?Xe():Oo!==-1?Oo:Oo=Xe()}function Gi(e){return e.mode&1?Te&2&&at!==0?at&-at:eg.transition!==null?(Io===0&&(Io=cu()),Io):(e=Oe,e!==0||(e=window.event,e=e===void 0?16:gu(e.type)),e):1}function Kt(e,t,i,n){if(50<br)throw br=0,fl=null,Error(be(185));Xr(e,i,n),(!(Te&2)||e!==rt)&&(e===rt&&(!(Te&2)&&(Ns|=i),et===4&&Ti(e,at)),kt(e,n),i===1&&Te===0&&!(t.mode&1)&&(Wn=Xe()+500,ks&&qi()))}function kt(e,t){var i=e.callbackNode;em(e,t);var n=_o(e,e===rt?at:0);if(n===0)i!==null&&ed(i),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(i!=null&&ed(i),t===1)e.tag===0?$m(_d.bind(null,e)):Iu(_d.bind(null,e)),qm(function(){!(Te&6)&&qi()}),i=null;else{switch(du(n)){case 1:i=Vl;break;case 4:i=au;break;case 16:i=Yo;break;case 536870912:i=lu;break;default:i=Yo}i=Dp(i,Sp.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function Sp(e,t){if(Oo=-1,Io=0,Te&6)throw Error(be(327));var i=e.callbackNode;if(zn()&&e.callbackNode!==i)return null;var n=_o(e,e===rt?at:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ds(e,n);else{t=n;var o=Te;Te|=2;var s=Pp();(rt!==e||at!==t)&&(hi=null,Wn=Xe()+500,nn(e,t));do try{wg();break}catch(j){Ep(e,j)}while(!0);tc(),as.current=s,Te=o,Ke!==null?t=0:(rt=null,at=0,t=et)}if(t!==0){if(t===2&&(o=Ga(e),o!==0&&(n=o,t=ml(e,o))),t===1)throw i=Ur,nn(e,0),Ti(e,n),kt(e,Xe()),i;if(t===6)Ti(e,n);else{if(o=e.current.alternate,!(n&30)&&!yg(o)&&(t=ds(e,n),t===2&&(s=Ga(e),s!==0&&(n=s,t=ml(e,s))),t===1))throw i=Ur,nn(e,0),Ti(e,n),kt(e,Xe()),i;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(be(345));case 2:Zi(e,bt,hi);break;case 3:if(Ti(e,n),(n&130023424)===n&&(t=gc+500-Xe(),10<t)){if(_o(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){yt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=qa(Zi.bind(null,e,bt,hi),t);break}Zi(e,bt,hi);break;case 4:if(Ti(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var l=31-qt(n);s=1<<l,l=t[l],l>o&&(o=l),n&=~s}if(n=o,n=Xe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*xg(n/1960))-n,10<n){e.timeoutHandle=qa(Zi.bind(null,e,bt,hi),n);break}Zi(e,bt,hi);break;case 5:Zi(e,bt,hi);break;default:throw Error(be(329))}}}return kt(e,Xe()),e.callbackNode===i?Sp.bind(null,e):null}function ml(e,t){var i=wr;return e.current.memoizedState.isDehydrated&&(nn(e,t).flags|=256),e=ds(e,t),e!==2&&(t=bt,bt=i,t!==null&&gl(t)),e}function gl(e){bt===null?bt=e:bt.push.apply(bt,e)}function yg(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var o=i[n],s=o.getSnapshot;o=o.value;try{if(!Jt(s(),o))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ti(e,t){for(t&=~mc,t&=~Ns,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-qt(t),n=1<<i;e[i]=-1,t&=~n}}function _d(e){if(Te&6)throw Error(be(327));zn();var t=_o(e,0);if(!(t&1))return kt(e,Xe()),null;var i=ds(e,t);if(e.tag!==0&&i===2){var n=Ga(e);n!==0&&(t=n,i=ml(e,n))}if(i===1)throw i=Ur,nn(e,0),Ti(e,t),kt(e,Xe()),i;if(i===6)throw Error(be(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zi(e,bt,hi),kt(e,Xe()),null}function xc(e,t){var i=Te;Te|=1;try{return e(t)}finally{Te=i,Te===0&&(Wn=Xe()+500,ks&&qi())}}function dn(e){Di!==null&&Di.tag===0&&!(Te&6)&&zn();var t=Te;Te|=1;var i=Ut.transition,n=Oe;try{if(Ut.transition=null,Oe=1,e)return e()}finally{Oe=n,Ut.transition=i,Te=t,!(Te&6)&&qi()}}function yc(){Et=Pn.current,Ue(Pn)}function nn(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Qm(i)),Ke!==null)for(i=Ke.return;i!==null;){var n=i;switch(Jl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Zo();break;case 3:Gn(),Ue(jt),Ue(gt),ac();break;case 5:sc(n);break;case 4:Gn();break;case 13:Ue(Ve);break;case 19:Ue(Ve);break;case 10:ic(n.type._context);break;case 22:case 23:yc()}i=i.return}if(rt=e,Ke=e=Vi(e.current,null),at=Et=t,et=0,Ur=null,mc=Ns=cn=0,bt=wr=null,$i!==null){for(t=0;t<$i.length;t++)if(i=$i[t],n=i.interleaved,n!==null){i.interleaved=null;var o=n.next,s=i.pending;if(s!==null){var l=s.next;s.next=o,n.next=l}i.pending=n}$i=null}return e}function Ep(e,t){do{var i=Ke;try{if(tc(),To.current=ss,os){for(var n=We.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}os=!1}if(ln=0,tt=$e=We=null,yr=!1,Rr=0,fc.current=null,i===null||i.return===null){et=1,Ur=t,Ke=null;break}e:{var s=e,l=i.return,j=i,E=t;if(t=at,j.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var F=E,_=j,C=_.tag;if(!(_.mode&1)&&(C===0||C===11||C===15)){var D=_.alternate;D?(_.updateQueue=D.updateQueue,_.memoizedState=D.memoizedState,_.lanes=D.lanes):(_.updateQueue=null,_.memoizedState=null)}var V=Dd(l);if(V!==null){V.flags&=-257,Od(V,l,j,s,t),V.mode&1&&Ld(s,F,t),t=V,E=F;var k=t.updateQueue;if(k===null){var I=new Set;I.add(E),t.updateQueue=I}else k.add(E);break e}else{if(!(t&1)){Ld(s,F,t),vc();break e}E=Error(be(426))}}else if(Ge&&j.mode&1){var U=Dd(l);if(U!==null){!(U.flags&65536)&&(U.flags|=256),Od(U,l,j,s,t),$l(Vn(E,j));break e}}s=E=Vn(E,j),et!==4&&(et=2),wr===null?wr=[s]:wr.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=dp(s,E,t);Sd(s,p);break e;case 1:j=E;var a=s.type,u=s.stateNode;if(!(s.flags&128)&&(typeof a.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ui===null||!Ui.has(u)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=hp(s,j,t);Sd(s,y);break e}}s=s.return}while(s!==null)}Mp(i)}catch(w){t=w,Ke===i&&i!==null&&(Ke=i=i.return);continue}break}while(!0)}function Pp(){var e=as.current;return as.current=ss,e===null?ss:e}function vc(){(et===0||et===3||et===2)&&(et=4),rt===null||!(cn&268435455)&&!(Ns&268435455)||Ti(rt,at)}function ds(e,t){var i=Te;Te|=2;var n=Pp();(rt!==e||at!==t)&&(hi=null,nn(e,t));do try{vg();break}catch(o){Ep(e,o)}while(!0);if(tc(),Te=i,as.current=n,Ke!==null)throw Error(be(261));return rt=null,at=0,et}function vg(){for(;Ke!==null;)Np(Ke)}function wg(){for(;Ke!==null&&!Y0();)Np(Ke)}function Np(e){var t=Lp(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?Mp(e):Ke=t,fc.current=null}function Mp(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=pg(i,t),i!==null){i.flags&=32767,Ke=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{et=6,Ke=null;return}}else if(i=ug(i,t,Et),i!==null){Ke=i;return}if(t=t.sibling,t!==null){Ke=t;return}Ke=t=e}while(t!==null);et===0&&(et=5)}function Zi(e,t,i){var n=Oe,o=Ut.transition;try{Ut.transition=null,Oe=1,bg(e,t,i,n)}finally{Ut.transition=o,Oe=n}return null}function bg(e,t,i,n){do zn();while(Di!==null);if(Te&6)throw Error(be(327));i=e.finishedWork;var o=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(be(177));e.callbackNode=null,e.callbackPriority=0;var s=i.lanes|i.childLanes;if(tm(e,s),e===rt&&(Ke=rt=null,at=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||vo||(vo=!0,Dp(Yo,function(){return zn(),null})),s=(i.flags&15990)!==0,i.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var l=Oe;Oe=1;var j=Te;Te|=4,fc.current=null,mg(e,i),Cp(i,e),Gm(Xa),Xo=!!_a,Xa=_a=null,e.current=i,gg(i),_0(),Te=j,Oe=l,Ut.transition=s}else e.current=i;if(vo&&(vo=!1,Di=e,cs=o),s=e.pendingLanes,s===0&&(Ui=null),q0(i.stateNode),kt(e,Xe()),t!==null)for(n=e.onRecoverableError,i=0;i<t.length;i++)o=t[i],n(o.value,{componentStack:o.stack,digest:o.digest});if(ls)throw ls=!1,e=pl,pl=null,e;return cs&1&&e.tag!==0&&zn(),s=e.pendingLanes,s&1?e===fl?br++:(br=0,fl=e):br=0,qi(),null}function zn(){if(Di!==null){var e=du(cs),t=Ut.transition,i=Oe;try{if(Ut.transition=null,Oe=16>e?16:e,Di===null)var n=!1;else{if(e=Di,Di=null,cs=0,Te&6)throw Error(be(331));var o=Te;for(Te|=4,Ce=e.current;Ce!==null;){var s=Ce,l=s.child;if(Ce.flags&16){var j=s.deletions;if(j!==null){for(var E=0;E<j.length;E++){var F=j[E];for(Ce=F;Ce!==null;){var _=Ce;switch(_.tag){case 0:case 11:case 15:vr(8,_,s)}var C=_.child;if(C!==null)C.return=_,Ce=C;else for(;Ce!==null;){_=Ce;var D=_.sibling,V=_.return;if(bp(_),_===F){Ce=null;break}if(D!==null){D.return=V,Ce=D;break}Ce=V}}}var k=s.alternate;if(k!==null){var I=k.child;if(I!==null){k.child=null;do{var U=I.sibling;I.sibling=null,I=U}while(I!==null)}}Ce=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,Ce=l;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Ce=p;break e}Ce=s.return}}var a=e.current;for(Ce=a;Ce!==null;){l=Ce;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,Ce=u;else e:for(l=a;Ce!==null;){if(j=Ce,j.flags&2048)try{switch(j.tag){case 0:case 11:case 15:Ps(9,j)}}catch(w){_e(j,j.return,w)}if(j===l){Ce=null;break e}var y=j.sibling;if(y!==null){y.return=j.return,Ce=y;break e}Ce=j.return}}if(Te=o,qi(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(ws,e)}catch{}n=!0}return n}finally{Oe=i,Ut.transition=t}}return!1}function Xd(e,t,i){t=Vn(i,t),t=dp(e,t,1),e=Fi(e,t,1),t=yt(),e!==null&&(Xr(e,1,t),kt(e,t))}function _e(e,t,i){if(e.tag===3)Xd(e,e,i);else for(;t!==null;){if(t.tag===3){Xd(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ui===null||!Ui.has(n))){e=Vn(i,e),e=hp(t,e,1),t=Fi(t,e,1),e=yt(),t!==null&&(Xr(t,1,e),kt(t,e));break}}t=t.return}}function Ag(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&i,rt===e&&(at&i)===i&&(et===4||et===3&&(at&130023424)===at&&500>Xe()-gc?nn(e,0):mc|=i),kt(e,t)}function Tp(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var i=yt();e=vi(e,t),e!==null&&(Xr(e,t,i),kt(e,i))}function jg(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Tp(e,i)}function Cg(e,t){var i=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(be(314))}n!==null&&n.delete(t),Tp(e,i)}var Lp;Lp=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||jt.current)At=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return At=!1,hg(e,t,i);At=!!(e.flags&131072)}else At=!1,Ge&&t.flags&1048576&&zu(t,es,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Do(e,t),e=t.pendingProps;var o=Bn(t,gt.current);In(t,i),o=cc(null,t,n,e,o,i);var s=dc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ct(n)?(s=!0,Jo(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,rc(t),o.updater=Es,t.stateNode=o,o._reactInternals=t,il(t,n,e,i),t=ol(null,t,n,!0,s,i)):(t.tag=0,Ge&&s&&Zl(t),xt(null,t,o,i),t=t.child),t;case 16:n=t.elementType;e:{switch(Do(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=Sg(n),e=_t(n,e),o){case 0:t=rl(null,t,n,e,i);break e;case 1:t=Rd(null,t,n,e,i);break e;case 11:t=Id(null,t,n,e,i);break e;case 14:t=zd(null,t,n,_t(n.type,e),i);break e}throw Error(be(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:_t(n,o),rl(e,t,n,o,i);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:_t(n,o),Rd(e,t,n,o,i);case 3:e:{if(mp(t),e===null)throw Error(be(387));n=t.pendingProps,s=t.memoizedState,o=s.element,Vu(e,t),ns(t,n,null,i);var l=t.memoizedState;if(n=l.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=Vn(Error(be(423)),t),t=Bd(e,t,n,i,o);break e}else if(n!==o){o=Vn(Error(be(424)),t),t=Bd(e,t,n,i,o);break e}else for(Pt=Bi(t.stateNode.containerInfo.firstChild),Nt=t,Ge=!0,Qt=null,i=Uu(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Fn(),n===o){t=wi(e,t,i);break e}xt(e,t,n,i)}t=t.child}return t;case 5:return Wu(t),e===null&&$a(t),n=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,l=o.children,Qa(n,o)?l=null:s!==null&&Qa(n,s)&&(t.flags|=32),fp(e,t),xt(e,t,l,i),t.child;case 6:return e===null&&$a(t),null;case 13:return gp(e,t,i);case 4:return oc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Un(t,null,n,i):xt(e,t,n,i),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:_t(n,o),Id(e,t,n,o,i);case 7:return xt(e,t,t.pendingProps,i),t.child;case 8:return xt(e,t,t.pendingProps.children,i),t.child;case 12:return xt(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,s=t.memoizedProps,l=o.value,Re(ts,n._currentValue),n._currentValue=l,s!==null)if(Jt(s.value,l)){if(s.children===o.children&&!jt.current){t=wi(e,t,i);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var j=s.dependencies;if(j!==null){l=s.child;for(var E=j.firstContext;E!==null;){if(E.context===n){if(s.tag===1){E=gi(-1,i&-i),E.tag=2;var F=s.updateQueue;if(F!==null){F=F.shared;var _=F.pending;_===null?E.next=E:(E.next=_.next,_.next=E),F.pending=E}}s.lanes|=i,E=s.alternate,E!==null&&(E.lanes|=i),el(s.return,i,t),j.lanes|=i;break}E=E.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(be(341));l.lanes|=i,j=l.alternate,j!==null&&(j.lanes|=i),el(l,i,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}xt(e,t,o.children,i),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,In(t,i),o=Gt(o),n=n(o),t.flags|=1,xt(e,t,n,i),t.child;case 14:return n=t.type,o=_t(n,t.pendingProps),o=_t(n.type,o),zd(e,t,n,o,i);case 15:return up(e,t,t.type,t.pendingProps,i);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:_t(n,o),Do(e,t),t.tag=1,Ct(n)?(e=!0,Jo(t)):e=!1,In(t,i),cp(t,n,o),il(t,n,o,i),ol(null,t,n,!0,e,i);case 19:return xp(e,t,i);case 22:return pp(e,t,i)}throw Error(be(156,t.tag))};function Dp(e,t){return su(e,t)}function kg(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,i,n){return new kg(e,t,i,n)}function wc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sg(e){if(typeof e=="function")return wc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fl)return 11;if(e===Ul)return 14}return 2}function Vi(e,t){var i=e.alternate;return i===null?(i=Ft(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function zo(e,t,i,n,o,s){var l=2;if(n=e,typeof e=="function")wc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case yn:return rn(i.children,o,s,t);case Bl:l=8,o|=8;break;case Sa:return e=Ft(12,i,t,o|2),e.elementType=Sa,e.lanes=s,e;case Ea:return e=Ft(13,i,t,o),e.elementType=Ea,e.lanes=s,e;case Pa:return e=Ft(19,i,t,o),e.elementType=Pa,e.lanes=s,e;case Wh:return Ms(i,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gh:l=10;break e;case Vh:l=9;break e;case Fl:l=11;break e;case Ul:l=14;break e;case Pi:l=16,n=null;break e}throw Error(be(130,e==null?e:typeof e,""))}return t=Ft(l,i,t,o),t.elementType=e,t.type=n,t.lanes=s,t}function rn(e,t,i,n){return e=Ft(7,e,n,t),e.lanes=i,e}function Ms(e,t,i,n){return e=Ft(22,e,n,t),e.elementType=Wh,e.lanes=i,e.stateNode={isHidden:!1},e}function xa(e,t,i){return e=Ft(6,e,null,t),e.lanes=i,e}function ya(e,t,i){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eg(e,t,i,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Js(0),this.expirationTimes=Js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function bc(e,t,i,n,o,s,l,j,E){return e=new Eg(e,t,i,j,E),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ft(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(s),e}function Pg(e,t,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:i}}function Op(e){if(!e)return _i;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(be(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(be(171))}if(e.tag===1){var i=e.type;if(Ct(i))return Ou(e,i,t)}return t}function Ip(e,t,i,n,o,s,l,j,E){return e=bc(i,n,!0,e,o,s,l,j,E),e.context=Op(null),i=e.current,n=yt(),o=Gi(i),s=gi(n,o),s.callback=t??null,Fi(i,s,o),e.current.lanes=o,Xr(e,o,n),kt(e,n),e}function Ts(e,t,i,n){var o=t.current,s=yt(),l=Gi(o);return i=Op(i),t.context===null?t.context=i:t.pendingContext=i,t=gi(s,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Fi(o,t,l),e!==null&&(Kt(e,o,l,s),Mo(e,o,l)),l}function hs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Ac(e,t){Qd(e,t),(e=e.alternate)&&Qd(e,t)}function Ng(){return null}var zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function jc(e){this._internalRoot=e}Ls.prototype.render=jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(be(409));Ts(e,t,null,null)};Ls.prototype.unmount=jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Ts(null,e,null,null)}),t[yi]=null}};function Ls(e){this._internalRoot=e}Ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Mi.length&&t!==0&&t<Mi[i].priority;i++);Mi.splice(i,0,e),i===0&&mu(e)}};function Cc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qd(){}function Mg(e,t,i,n,o){if(o){if(typeof n=="function"){var s=n;n=function(){var F=hs(l);s.call(F)}}var l=Ip(t,n,e,0,null,!1,!1,"",qd);return e._reactRootContainer=l,e[yi]=l.current,Lr(e.nodeType===8?e.parentNode:e),dn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var j=n;n=function(){var F=hs(E);j.call(F)}}var E=bc(e,0,!1,null,null,!1,!1,"",qd);return e._reactRootContainer=E,e[yi]=E.current,Lr(e.nodeType===8?e.parentNode:e),dn(function(){Ts(t,E,i,n)}),E}function Os(e,t,i,n,o){var s=i._reactRootContainer;if(s){var l=s;if(typeof o=="function"){var j=o;o=function(){var E=hs(l);j.call(E)}}Ts(t,l,e,o)}else l=Mg(i,t,e,o,n);return hs(l)}hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=dr(t.pendingLanes);i!==0&&(Wl(t,i|1),kt(t,Xe()),!(Te&6)&&(Wn=Xe()+500,qi()))}break;case 13:dn(function(){var n=vi(e,1);if(n!==null){var o=yt();Kt(n,e,1,o)}}),Ac(e,1)}};Hl=function(e){if(e.tag===13){var t=vi(e,134217728);if(t!==null){var i=yt();Kt(t,e,134217728,i)}Ac(e,134217728)}};uu=function(e){if(e.tag===13){var t=Gi(e),i=vi(e,t);if(i!==null){var n=yt();Kt(i,e,t,n)}Ac(e,t)}};pu=function(){return Oe};fu=function(e,t){var i=Oe;try{return Oe=e,t()}finally{Oe=i}};Ba=function(e,t,i){switch(t){case"input":if(Ta(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var o=Cs(n);if(!o)throw Error(be(90));Yh(n),Ta(n,o)}}}break;case"textarea":Xh(e,i);break;case"select":t=i.value,t!=null&&Tn(e,!!i.multiple,t,!1)}};eu=xc;tu=dn;var Tg={usingClientEntryPoint:!1,Events:[qr,An,Cs,Jh,$h,xc]},ar={findFiberByHostInstance:Ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lg={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ru(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Ng,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{ws=wo.inject(Lg),ri=wo}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tg;Tt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cc(t))throw Error(be(200));return Pg(e,t,null,i)};Tt.createRoot=function(e,t){if(!Cc(e))throw Error(be(299));var i=!1,n="",o=zp;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=bc(e,1,!1,null,null,i,!1,n,o),e[yi]=t.current,Lr(e.nodeType===8?e.parentNode:e),new jc(t)};Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(be(188)):(e=Object.keys(e).join(","),Error(be(268,e)));return e=ru(t),e=e===null?null:e.stateNode,e};Tt.flushSync=function(e){return dn(e)};Tt.hydrate=function(e,t,i){if(!Ds(t))throw Error(be(200));return Os(null,e,t,!0,i)};Tt.hydrateRoot=function(e,t,i){if(!Cc(e))throw Error(be(405));var n=i!=null&&i.hydratedSources||null,o=!1,s="",l=zp;if(i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onRecoverableError!==void 0&&(l=i.onRecoverableError)),t=Ip(t,null,e,1,i??null,o,!1,s,l),e[yi]=t.current,Lr(e),n)for(e=0;e<n.length;e++)i=n[e],o=i._getVersion,o=o(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,o]:t.mutableSourceEagerHydrationData.push(i,o);return new Ls(t)};Tt.render=function(e,t,i){if(!Ds(t))throw Error(be(200));return Os(null,e,t,!1,i)};Tt.unmountComponentAtNode=function(e){if(!Ds(e))throw Error(be(40));return e._reactRootContainer?(dn(function(){Os(null,null,e,!1,function(){e._reactRootContainer=null,e[yi]=null})}),!0):!1};Tt.unstable_batchedUpdates=xc;Tt.unstable_renderSubtreeIntoContainer=function(e,t,i,n){if(!Ds(i))throw Error(be(200));if(e==null||e._reactInternals===void 0)throw Error(be(38));return Os(e,t,i,!1,n)};Tt.version="18.3.1-next-f1338f8080-20240426";function Rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rp)}catch(e){console.error(e)}}Rp(),Rh.exports=Tt;var Dg=Rh.exports,Kd=Dg;Ca.createRoot=Kd.createRoot,Ca.hydrateRoot=Kd.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},Gr.apply(this,arguments)}var Oi;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Oi||(Oi={}));const Zd="popstate";function Og(e){e===void 0&&(e={});function t(n,o){let{pathname:s,search:l,hash:j}=n.location;return xl("",{pathname:s,search:l,hash:j},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(n,o){return typeof o=="string"?o:us(o)}return zg(t,i,null,e)}function Ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ig(){return Math.random().toString(36).substr(2,8)}function Jd(e,t){return{usr:e.state,key:e.key,idx:t}}function xl(e,t,i,n){return i===void 0&&(i=null),Gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jn(t):t,{state:i,key:t&&t.key||n||Ig()})}function us(e){let{pathname:t="/",search:i="",hash:n=""}=e;return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Jn(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substr(i),e=e.substr(0,i));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function zg(e,t,i,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:s=!1}=n,l=o.history,j=Oi.Pop,E=null,F=_();F==null&&(F=0,l.replaceState(Gr({},l.state,{idx:F}),""));function _(){return(l.state||{idx:null}).idx}function C(){j=Oi.Pop;let U=_(),p=U==null?null:U-F;F=U,E&&E({action:j,location:I.location,delta:p})}function D(U,p){j=Oi.Push;let a=xl(I.location,U,p);F=_()+1;let u=Jd(a,F),y=I.createHref(a);try{l.pushState(u,"",y)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;o.location.assign(y)}s&&E&&E({action:j,location:I.location,delta:1})}function V(U,p){j=Oi.Replace;let a=xl(I.location,U,p);F=_();let u=Jd(a,F),y=I.createHref(a);l.replaceState(u,"",y),s&&E&&E({action:j,location:I.location,delta:0})}function k(U){let p=o.location.origin!=="null"?o.location.origin:o.location.href,a=typeof U=="string"?U:us(U);return a=a.replace(/ $/,"%20"),Ze(p,"No window.location.(origin|href) available to create URL for href: "+a),new URL(a,p)}let I={get action(){return j},get location(){return e(o,l)},listen(U){if(E)throw new Error("A history only accepts one active listener");return o.addEventListener(Zd,C),E=U,()=>{o.removeEventListener(Zd,C),E=null}},createHref(U){return t(o,U)},createURL:k,encodeLocation(U){let p=k(U);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:D,replace:V,go(U){return l.go(U)}};return I}var $d;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($d||($d={}));function Rg(e,t,i){return i===void 0&&(i="/"),Bg(e,t,i,!1)}function Bg(e,t,i,n){let o=typeof t=="string"?Jn(t):t,s=kc(o.pathname||"/",i);if(s==null)return null;let l=Fp(e);Fg(l);let j=null;for(let E=0;j==null&&E<l.length;++E){let F=Kg(s);j=Qg(l[E],F,n)}return j}function Fp(e,t,i,n){t===void 0&&(t=[]),i===void 0&&(i=[]),n===void 0&&(n="");let o=(s,l,j)=>{let E={relativePath:j===void 0?s.path||"":j,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};E.relativePath.startsWith("/")&&(Ze(E.relativePath.startsWith(n),'Absolute route path "'+E.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),E.relativePath=E.relativePath.slice(n.length));let F=Wi([n,E.relativePath]),_=i.concat(E);s.children&&s.children.length>0&&(Ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+F+'".')),Fp(s.children,t,_,F)),!(s.path==null&&!s.index)&&t.push({path:F,score:_g(F,s.index),routesMeta:_})};return e.forEach((s,l)=>{var j;if(s.path===""||!((j=s.path)!=null&&j.includes("?")))o(s,l);else for(let E of Up(s.path))o(s,l,E)}),t}function Up(e){let t=e.split("/");if(t.length===0)return[];let[i,...n]=t,o=i.endsWith("?"),s=i.replace(/\?$/,"");if(n.length===0)return o?[s,""]:[s];let l=Up(n.join("/")),j=[];return j.push(...l.map(E=>E===""?s:[s,E].join("/"))),o&&j.push(...l),j.map(E=>e.startsWith("/")&&E===""?"/":E)}function Fg(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:Xg(t.routesMeta.map(n=>n.childrenIndex),i.routesMeta.map(n=>n.childrenIndex)))}const Ug=/^:[\w-]+$/,Gg=3,Vg=2,Wg=1,Hg=10,Yg=-2,eh=e=>e==="*";function _g(e,t){let i=e.split("/"),n=i.length;return i.some(eh)&&(n+=Yg),t&&(n+=Vg),i.filter(o=>!eh(o)).reduce((o,s)=>o+(Ug.test(s)?Gg:s===""?Wg:Hg),n)}function Xg(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Qg(e,t,i){let{routesMeta:n}=e,o={},s="/",l=[];for(let j=0;j<n.length;++j){let E=n[j],F=j===n.length-1,_=s==="/"?t:t.slice(s.length)||"/",C=th({path:E.relativePath,caseSensitive:E.caseSensitive,end:F},_),D=E.route;if(!C&&F&&i&&!n[n.length-1].route.index&&(C=th({path:E.relativePath,caseSensitive:E.caseSensitive,end:!1},_)),!C)return null;Object.assign(o,C.params),l.push({params:o,pathname:Wi([s,C.pathname]),pathnameBase:e1(Wi([s,C.pathnameBase])),route:D}),C.pathnameBase!=="/"&&(s=Wi([s,C.pathnameBase]))}return l}function th(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,n]=qg(e.path,e.caseSensitive,e.end),o=t.match(i);if(!o)return null;let s=o[0],l=s.replace(/(.)\/+$/,"$1"),j=o.slice(1);return{params:n.reduce((F,_,C)=>{let{paramName:D,isOptional:V}=_;if(D==="*"){let I=j[C]||"";l=s.slice(0,s.length-I.length).replace(/(.)\/+$/,"$1")}const k=j[C];return V&&!k?F[D]=void 0:F[D]=(k||"").replace(/%2F/g,"/"),F},{}),pathname:s,pathnameBase:l,pattern:e}}function qg(e,t,i){t===void 0&&(t=!1),i===void 0&&(i=!0),Bp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,j,E)=>(n.push({paramName:j,isOptional:E!=null}),E?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Kg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function kc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,n=e.charAt(i);return n&&n!=="/"?null:e.slice(i)||"/"}function Zg(e,t){t===void 0&&(t="/");let{pathname:i,search:n="",hash:o=""}=typeof e=="string"?Jn(e):e;return{pathname:i?i.startsWith("/")?i:Jg(i,t):t,search:t1(n),hash:i1(o)}}function Jg(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function va(e,t,i,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $g(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Gp(e,t){let i=$g(e);return t?i.map((n,o)=>o===e.length-1?n.pathname:n.pathnameBase):i.map(n=>n.pathnameBase)}function Vp(e,t,i,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=Jn(e):(o=Gr({},e),Ze(!o.pathname||!o.pathname.includes("?"),va("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),va("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),va("#","search","hash",o)));let s=e===""||o.pathname==="",l=s?"/":o.pathname,j;if(l==null)j=i;else{let C=t.length-1;if(!n&&l.startsWith("..")){let D=l.split("/");for(;D[0]==="..";)D.shift(),C-=1;o.pathname=D.join("/")}j=C>=0?t[C]:"/"}let E=Zg(o,j),F=l&&l!=="/"&&l.endsWith("/"),_=(s||l===".")&&i.endsWith("/");return!E.pathname.endsWith("/")&&(F||_)&&(E.pathname+="/"),E}const Wi=e=>e.join("/").replace(/\/\/+/g,"/"),e1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),t1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,i1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function n1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wp=["post","put","patch","delete"];new Set(Wp);const r1=["get",...Wp];new Set(r1);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},Vr.apply(this,arguments)}const Sc=we.createContext(null),o1=we.createContext(null),pn=we.createContext(null),Is=we.createContext(null),fn=we.createContext({outlet:null,matches:[],isDataRoute:!1}),Hp=we.createContext(null);function s1(e,t){let{relative:i}=t===void 0?{}:t;Zr()||Ze(!1);let{basename:n,navigator:o}=we.useContext(pn),{hash:s,pathname:l,search:j}=_p(e,{relative:i}),E=l;return n!=="/"&&(E=l==="/"?n:Wi([n,l])),o.createHref({pathname:E,search:j,hash:s})}function Zr(){return we.useContext(Is)!=null}function zs(){return Zr()||Ze(!1),we.useContext(Is).location}function Yp(e){we.useContext(pn).static||we.useLayoutEffect(e)}function Dt(){let{isDataRoute:e}=we.useContext(fn);return e?v1():a1()}function a1(){Zr()||Ze(!1);let e=we.useContext(Sc),{basename:t,future:i,navigator:n}=we.useContext(pn),{matches:o}=we.useContext(fn),{pathname:s}=zs(),l=JSON.stringify(Gp(o,i.v7_relativeSplatPath)),j=we.useRef(!1);return Yp(()=>{j.current=!0}),we.useCallback(function(F,_){if(_===void 0&&(_={}),!j.current)return;if(typeof F=="number"){n.go(F);return}let C=Vp(F,JSON.parse(l),s,_.relative==="path");e==null&&t!=="/"&&(C.pathname=C.pathname==="/"?t:Wi([t,C.pathname])),(_.replace?n.replace:n.push)(C,_.state,_)},[t,n,l,s,e])}function _p(e,t){let{relative:i}=t===void 0?{}:t,{future:n}=we.useContext(pn),{matches:o}=we.useContext(fn),{pathname:s}=zs(),l=JSON.stringify(Gp(o,n.v7_relativeSplatPath));return we.useMemo(()=>Vp(e,JSON.parse(l),s,i==="path"),[e,l,s,i])}function l1(e,t){return c1(e,t)}function c1(e,t,i,n){Zr()||Ze(!1);let{navigator:o}=we.useContext(pn),{matches:s}=we.useContext(fn),l=s[s.length-1],j=l?l.params:{};l&&l.pathname;let E=l?l.pathnameBase:"/";l&&l.route;let F=zs(),_;if(t){var C;let U=typeof t=="string"?Jn(t):t;E==="/"||(C=U.pathname)!=null&&C.startsWith(E)||Ze(!1),_=U}else _=F;let D=_.pathname||"/",V=D;if(E!=="/"){let U=E.replace(/^\//,"").split("/");V="/"+D.replace(/^\//,"").split("/").slice(U.length).join("/")}let k=Rg(e,{pathname:V}),I=f1(k&&k.map(U=>Object.assign({},U,{params:Object.assign({},j,U.params),pathname:Wi([E,o.encodeLocation?o.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?E:Wi([E,o.encodeLocation?o.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),s,i,n);return t&&I?we.createElement(Is.Provider,{value:{location:Vr({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Oi.Pop}},I):I}function d1(){let e=y1(),t=n1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return we.createElement(we.Fragment,null,we.createElement("h2",null,"Unexpected Application Error!"),we.createElement("h3",{style:{fontStyle:"italic"}},t),i?we.createElement("pre",{style:o},i):null,null)}const h1=we.createElement(d1,null);class u1 extends we.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){console.error("React Router caught the following error during render",t,i)}render(){return this.state.error!==void 0?we.createElement(fn.Provider,{value:this.props.routeContext},we.createElement(Hp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p1(e){let{routeContext:t,match:i,children:n}=e,o=we.useContext(Sc);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),we.createElement(fn.Provider,{value:t},n)}function f1(e,t,i,n){var o;if(t===void 0&&(t=[]),i===void 0&&(i=null),n===void 0&&(n=null),e==null){var s;if((s=i)!=null&&s.errors)e=i.matches;else return null}let l=e,j=(o=i)==null?void 0:o.errors;if(j!=null){let _=l.findIndex(C=>C.route.id&&(j==null?void 0:j[C.route.id])!==void 0);_>=0||Ze(!1),l=l.slice(0,Math.min(l.length,_+1))}let E=!1,F=-1;if(i&&n&&n.v7_partialHydration)for(let _=0;_<l.length;_++){let C=l[_];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(F=_),C.route.id){let{loaderData:D,errors:V}=i,k=C.route.loader&&D[C.route.id]===void 0&&(!V||V[C.route.id]===void 0);if(C.route.lazy||k){E=!0,F>=0?l=l.slice(0,F+1):l=[l[0]];break}}}return l.reduceRight((_,C,D)=>{let V,k=!1,I=null,U=null;i&&(V=j&&C.route.id?j[C.route.id]:void 0,I=C.route.errorElement||h1,E&&(F<0&&D===0?(k=!0,U=null):F===D&&(k=!0,U=C.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,D+1)),a=()=>{let u;return V?u=I:k?u=U:C.route.Component?u=we.createElement(C.route.Component,null):C.route.element?u=C.route.element:u=_,we.createElement(p1,{match:C,routeContext:{outlet:_,matches:p,isDataRoute:i!=null},children:u})};return i&&(C.route.ErrorBoundary||C.route.errorElement||D===0)?we.createElement(u1,{location:i.location,revalidation:i.revalidation,component:I,error:V,children:a(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):a()},null)}var Xp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xp||{}),ps=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ps||{});function m1(e){let t=we.useContext(Sc);return t||Ze(!1),t}function g1(e){let t=we.useContext(o1);return t||Ze(!1),t}function x1(e){let t=we.useContext(fn);return t||Ze(!1),t}function Qp(e){let t=x1(),i=t.matches[t.matches.length-1];return i.route.id||Ze(!1),i.route.id}function y1(){var e;let t=we.useContext(Hp),i=g1(ps.UseRouteError),n=Qp(ps.UseRouteError);return t!==void 0?t:(e=i.errors)==null?void 0:e[n]}function v1(){let{router:e}=m1(Xp.UseNavigateStable),t=Qp(ps.UseNavigateStable),i=we.useRef(!1);return Yp(()=>{i.current=!0}),we.useCallback(function(o,s){s===void 0&&(s={}),i.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Vr({fromRouteId:t},s)))},[e,t])}function Ye(e){Ze(!1)}function w1(e){let{basename:t="/",children:i=null,location:n,navigationType:o=Oi.Pop,navigator:s,static:l=!1,future:j}=e;Zr()&&Ze(!1);let E=t.replace(/^\/*/,"/"),F=we.useMemo(()=>({basename:E,navigator:s,static:l,future:Vr({v7_relativeSplatPath:!1},j)}),[E,j,s,l]);typeof n=="string"&&(n=Jn(n));let{pathname:_="/",search:C="",hash:D="",state:V=null,key:k="default"}=n,I=we.useMemo(()=>{let U=kc(_,E);return U==null?null:{location:{pathname:U,search:C,hash:D,state:V,key:k},navigationType:o}},[E,_,C,D,V,k,o]);return I==null?null:we.createElement(pn.Provider,{value:F},we.createElement(Is.Provider,{children:i,value:I}))}function b1(e){let{children:t,location:i}=e;return l1(yl(t),i)}new Promise(()=>{});function yl(e,t){t===void 0&&(t=[]);let i=[];return we.Children.forEach(e,(n,o)=>{if(!we.isValidElement(n))return;let s=[...t,o];if(n.type===we.Fragment){i.push.apply(i,yl(n.props.children,s));return}n.type!==Ye&&Ze(!1),!n.props.index||!n.props.children||Ze(!1);let l={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=yl(n.props.children,s)),i.push(l)}),i}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},vl.apply(this,arguments)}function A1(e,t){if(e==null)return{};var i={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(t.indexOf(o)>=0)&&(i[o]=e[o]);return i}function j1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function C1(e,t){return e.button===0&&(!t||t==="_self")&&!j1(e)}const k1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],S1="6";try{window.__reactRouterVersion=S1}catch{}const E1="startTransition",ih=A0[E1];function P1(e){let{basename:t,children:i,future:n,window:o}=e,s=we.useRef();s.current==null&&(s.current=Og({window:o,v5Compat:!0}));let l=s.current,[j,E]=we.useState({action:l.action,location:l.location}),{v7_startTransition:F}=n||{},_=we.useCallback(C=>{F&&ih?ih(()=>E(C)):E(C)},[E,F]);return we.useLayoutEffect(()=>l.listen(_),[l,_]),we.createElement(w1,{basename:t,children:i,location:j.location,navigationType:j.action,navigator:l,future:n})}const N1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,T1=we.forwardRef(function(t,i){let{onClick:n,relative:o,reloadDocument:s,replace:l,state:j,target:E,to:F,preventScrollReset:_,unstable_viewTransition:C}=t,D=A1(t,k1),{basename:V}=we.useContext(pn),k,I=!1;if(typeof F=="string"&&M1.test(F)&&(k=F,N1))try{let u=new URL(window.location.href),y=F.startsWith("//")?new URL(u.protocol+F):new URL(F),w=kc(y.pathname,V);y.origin===u.origin&&w!=null?F=w+y.search+y.hash:I=!0}catch{}let U=s1(F,{relative:o}),p=L1(F,{replace:l,state:j,target:E,preventScrollReset:_,relative:o,unstable_viewTransition:C});function a(u){n&&n(u),u.defaultPrevented||p(u)}return we.createElement("a",vl({},D,{href:k||U,onClick:I||s?n:a,ref:i,target:E}))});var nh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(nh||(nh={}));var rh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rh||(rh={}));function L1(e,t){let{target:i,replace:n,state:o,preventScrollReset:s,relative:l,unstable_viewTransition:j}=t===void 0?{}:t,E=Dt(),F=zs(),_=_p(e,{relative:l});return we.useCallback(C=>{if(C1(C,i)){C.preventDefault();let D=n!==void 0?n:us(F)===us(_);E(e,{replace:D,state:o,preventScrollReset:s,relative:l,unstable_viewTransition:j})}},[F,E,_,n,o,i,e,s,l,j])}const qp="/VEL_Desktop/assets/Celular-ZhJuagjZ.png",Kp="/VEL_Desktop/assets/Perfil-CNIZ932Z.png";var Zp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},oh=nt.createContext&&nt.createContext(Zp),D1=["attr","size","title"];function O1(e,t){if(e==null)return{};var i=I1(e,t),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function I1(e,t){if(e==null)return{};var i={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;i[n]=e[n]}return i}function fs(){return fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},fs.apply(this,arguments)}function sh(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,n)}return i}function ms(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?sh(Object(i),!0).forEach(function(n){z1(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):sh(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function z1(e,t,i){return t=R1(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function R1(e){var t=B1(e,"string");return typeof t=="symbol"?t:t+""}function B1(e,t){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Jp(e){return e&&e.map((t,i)=>nt.createElement(t.tag,ms({key:i},t.attr),Jp(t.child)))}function Qe(e){return t=>nt.createElement(F1,fs({attr:ms({},e.attr)},t),Jp(e.child))}function F1(e){var t=i=>{var{attr:n,size:o,title:s}=e,l=O1(e,D1),j=o||i.size||"1em",E;return i.className&&(E=i.className),e.className&&(E=(E?E+" ":"")+e.className),nt.createElement("svg",fs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,n,l,{className:E,style:ms(ms({color:e.color||i.color},i.style),e.style),height:j,width:j,xmlns:"http://www.w3.org/2000/svg"}),s&&nt.createElement("title",null,s),e.children)};return oh!==void 0?nt.createElement(oh.Consumer,null,i=>t(i)):t(Zp)}function $p(e){return Qe({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function ef(e){return Qe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function U1(e){return Qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function ah(e){return Qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function ni(e){return Qe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}const Wr="/VEL_Desktop/assets/VEL-VYUBDbRM.png",G1="/VEL_Desktop/assets/En-D2mSISao.png",tf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUuSURBVHgBzVlNbBtFFP5mdhMkIrkGJBBSojbHKkX0BqmEMAeSa4EoDckBCPREpSYxPxdEUg6oEjhJJW6pqnBoiUIqOPYHicABlxOpIJQbaZMTEiKNlEqN7Xl8M2u7sb21s/6J+klee2Zn337z3sz7GSvUi6EvEvC952EkAaijUBKHIO7uKWxC1Bog/JibMFjGwofLqAMq0ujjM3E8jtNQZowEbkHMKqB/oZRV/t6C5LYCqV6M1y7e6yTBY1C6l2Q72LcMo89gYXxtr6/cG0FLrAOTJDFKYnN8ahEms4FI0F1QaoLPHuNrf9grUV1rAN6cfgsd5m+aMgeRFyCZ6ejkLMw6NTxOOQOc5L/Q5keMUHYNVNfgyMwMtfYGib1L4atoKqhRrZao1SVcTI4jEkFnUvkOxvzD1mRxbTUbdq0qzHKNPoY29RrmxzfLh4SbuEDOmqRV5CysbJMbde/K8J0hqCTozCr3Hbn9glubJDmSmim/5ZW0hlNvc/T7JDjC7/vYTyid5vUsjvQL/rh2o9hdHDA0c8jtLKgTFbvUrRU5yR+D/HSifmxRzhWIToV6AuX1cNMsol13F9bjAxN7hptBLoeT406DnmiQnEWMLoaTlOuOTDkCT3EBGXIpvN5dA+39zOZABUHtJ3mdCARgjpdvaY67iAoxByifGpJkfqLrMNkXK8YFCvmVWjxotei7Tqs9qDRyYQ5YBt08rOpNZio/U9QBK5sa8tcpjhZhKFR+LySbLn0dd7byz2MnO8bWVGBiQYKfVLjcglkljWZgNyFt43UIjFnkzdPBEJuVANuRw5c1RZvuQkvAsAi5ZblpUkxE1k4QAa4jp29wjZ5ES6BW+Y6jNLFmTqfqMJ+KuS9BDK2AVkzjdMLn4j/EdbERKTO0C1l0H5+NNT+JyCOb+xNaf+rT99HF6DuRd6ZWQVjSPnc3na+i/3KQq9RuP1zCqu7SvaT4uYqoUMq6srh1M/H6EgLVG/BBmpM8EGTNxX4rz5q+k/0krgcq3EktBO4mXjthjQrnL7OHSXzgQR+OoE5Ygpv5GqJJyHuEUo1Flx9w2iRBtUl/1pqd2BhsDbNGgrKCHanbBC2Dx4pQ5LbmDvsJWnrxqMEIqz+zQjeDFS7iQURFYROI2XAuodiW1dAx0dHLgv+U7yr+4dRhtLd1YidCPN69CcRd01XHRIKN8arDcsu7GXOOnvvEQ0YHPlKkB03BrgTDMCcMgy3wIcv2Z5APtvuz2DG3eWMuxGmfh0tY1XuMOFv1xe0ioxgj0Jl8Yz1cw/YEgqcPRr/kuBb7h7+cdZmoMaV5YTHlR5M06MBYbk8YQuJ4kME/iUvJd1yzeKPdm2JztKJWcLVrto+1xKRLgRolZiMN1KvhSYZbe6+7c5s8SnOYIZadGp9xdn0tLdjDUMgxlf4EFye+LnZXDLSmVngWuX0s3C20d4He4C9888HY7u7wLHBkmvUxK/39Iul5PM1Qz3DdJcpvhWcz9iAH+mk3q6YmEmWwsgvk7unjoUOqCnA7m4s2rF5unFyPS3IFl8vNuhteVSG/X7uC5/r/o7SvKOwJJpDr7qi3MWLWF56idT7nydbHjBZnqw2vnbBeSs7TOb9CMzxFn7PkTKLboh+B2BJV66Q7NRDlYVt1Y+Gj+VqPRTtEt0ckKjdFV/AyyW7THTHdN2naYYO+607JIbrPMiDD8GhLAQX7zSw7dw73GLW+rzyobA7BErIs+F1NzbJVoZuiDpJw/m8IJsEituj5jeZcZpy/We/fEP8DQzIU3BaYX6cAAAAASUVORK5CYII=",nf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXoSURBVHgBvVldTBxVFD6zbFtsLS5QHxo2YZtSk9YaCLUFE1vWxCKmL5AQA/hAqQ+tiSmLLY9YrDGpwQpr+qAmLagpxaQGE62hVMOuviw1KRAojcXqolA1WrrdRWgRdjzfnRlYYGbZmbV8yWR/5u6d737n3PNzVyKrqGhykz0ll6Kym0jKI0l2kEwOcU+iEMlSkEjmKzpAUfJRR72PLEAyNbq02UHrqZakqKdw62bHjqxMKsjZTDuyMijtkXV8rRXDwtMzNDYR4WuSen/6nQJ8DY/fCfItH0Vtb1JHXTDRRyZGEMQ20Im01DWemqInqXzPNnJmbCQzAFlv1zVBlsm3JUp0ZYKV71WTTW6pfSHfcaho57xKVgGiF6/eBNkgSVIjnX/9Y7JM8OXmZmf6Bs+Hr+wXZvw/AaKVZy7R2N1IC50/VkemCAqTyp3lu7e5G8oKk1bNCPDV4+1+ujL0q4/WSGXUVhdaOsam+0uVXFPVvodGDsDcH7F18Cz6V+7UG5Oy7Bs2a/HO7Ir3q5+j1ULxU9k0PjHpGs582kGD3ZfJkGDV6YPOjEdPtR0poXVrUmg1Ucjh6qtrPxeGt7rv0VB3QPt+wQcrml1ki/Z8/0aFi0kumwBO3eofou7BURHjzAJxEkrVluST3vwAx0o60NQZorW2LZo/LsiUW9zsKcl3Y5KlQOyqPPO1eIVjW8GD2TlBAIuEKlBsKR5PW4+X1N6bt1M1UysKsnrOTRt+ufDagWWrg3K8Kib2gBVwEQK13uQrISb+ic8IXXpiQIC9JzsoPDebDhWVXZwSPYGH6kmPCUGufM8TPOnzlsgBmJstRA1lz4jPb3UGdMdhZ9dwQqCZWQ8+KwRlcsM39ACzAlDOKvae/ExcUOcQzwMSSq7W92WIwdRqFYJclXDSdxk5rjYJCoN4wDgUBr3qgvTuL50LZtcDuLClHOBmZ4puq2YDzrHTe7v6hBssPGCjKCg0q1yqLxOvZoI+FhEYGc9jE9tyCywSbGH/hC+BHMJIoSi9MoVSuKdsrhlBzGxGEqJJNlZQkgzNGw+fXx0RGwjEGsoKVL9RoBUCCCsYg3xuFtsVN8i1kSy7zNZ2AEwL4OGx5AAsGCFLG2cldqqKO7CLHWblxwOhDgBf04Pq6OJ9wGDjJErQNDRFVloYzJ8sQDBk1gRQB+Twu3jqaCpb8XGVEzKJFIoNEYlCRHtGfft3uvFM+T4idvVKMVQPYk5JCto5jfQPj0+Y3ijoT7CTQQI7Fv6GCytHzoV6MDFyrhWMI6jL8qid5Kifo3+pXuKOB5gYOxVxsHswyKQigpgGLBjkrJgXUFwn2s8EqV/zFbPAw1FABNQU9xuv+jFWbT8vNpnsNE+QG347Ov5A1ekQm8qhZ2ZtM2ARRr6kmTdRaD5rFAVwn90uCG5qmIl64U960IKwVsclCwRu+C3EMFqw8izZh/cKwbX2FqOIX6M26yj1sTNvWHQHkIK/anWgUXkH9RTz8skDxfYkVe+2eEp21er9EOY9fPYbS72IHlC4GhFEkcEKtlH7sRp8XuhJdr0YCPx4+wjv5lS1N5gHPqPcj6gK/xWZJrNAyNm33Ulvv/TsstytAeqxEEFWr4aGLoumafHJQgW3nZs2tqJ+e5gNux7gXijPxu5OHow9r1nc/A5194dzitL/jtwvNBsXk8XRT3qoL/inl037Tuz3y7vzwe6u4czdbnT6q0USm+/Lvlt+unC8Yuk9/WqGD3Iu/jDiO3z2iuU+OBFgbpDjDOSnKVup3pj4x2+8s50ZabV6/XKy4EBMEGDsTtjLynmMxsU/gGFzh3Pco63+63m8EpFpkt08UO2Dbwfo6Kc9ofA/U69ytjgVb3xiR8A4t5HmGp2ZadVIafHOV4yAGIpsdc5/ncJT9700ndJIXyw/D7RGcAlR7raK+MTVpeVgkM2KURcqoca8wWZUD9ApcOsPPvmf89KUvSURYtYILiLLf0NwT422lWfZwlNlc/2m/g0hMRn5Hr/rI5vko9m5Aat/Q/wHMhzOLVv848QAAAAASUVORK5CYII=",rf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVYSURBVHgBvVlNaFxVFP7ufS8RDKSjQkRIabMsqbQ7TUCMqyytGtKaLNRqFqJgfvzZmelGCpqfgrvEEhDbGFNUdJEWwdRFRlemaKwbadrJRkGMgRSbmbnX79w3M81kXufnvWk+yMv7ue/c751z7rnnnFGIilMf9sD3jsHYHkAdh7IJWCTcM4VNWLUOWP6ZazBYxvw7y4gAVdfoE1MJPIi3oMwwCVyHNWuAXqGUNZ5vwea2AqleK48H+aydBLuhdBfJtvDeMow+g/mR9VqnrI2gEGvBOEmcJrEZvrUAk9lAXdAHodQo3+3mtN/VSlRXG4AXJ19Ci7lBU+Zg7ROwmcn6yQlMmhoeoZw+fuTf0OZ7DFJ2FVTW4ODUFLX2Aom9SuFraCioUa0WqdVFfDY2groIOpPaL2HMX7waL/pWoyG+qjBNH30ATeo5zI1s7h0SbuICOTHJ/SInENkmd9rNleGcISgn6Mxq7zhy+wXnmyQ5ODG195FXcjUw8TJHv0GCg/x/B/sJpVM8nsXRXotfr/xYvF0ccGrqsFtZUCejrdIGQHmdXDQLaNYdBX/0iw89M84QcAk2uxHyIp3ZDvGkn3/tiI4tylmC1ROhSpBIofzzyJAL4Fws0GCgvR942Vf2oiPHUAB0onHgriPxMCR0BfP9RC0eEi0GGhTtQaWQC/kqpYaK5CxmePiC/vIv6oU1ByiMJrRjzgpKfUJ5T5aP48pW/ix2ssO8Svr5iXt4PHkPyf1O0eIbJpPMC0EEyMdTY36a4sQi3Pr8LrpUqmykMQvQekkIapeVANv3XhgFn7MpNAK7CWlJKMLAbRH2unDTHNQTa3LtD0E3hSwcbmWe34/IUFwwOE4Ta+Z0+AZREKRVSX5gkkTF4QsLKTi3PDY3rWAnQtjSaoUZz7OavnWYPhUt7ll7YNdVZ+h5FtGQzf3G4zHNSRhi9C1EgdavVR9khhAFSkmkSMhenIiREByoYUy0+BlwSlRPWCsjXcOYWHmkENzMO3v9sFYCdyX/5QfoGURBwEl2ErXJZLEVO3Wa2W3stpsRoI/+0sWQIP6YN6eELXWZH/A5415U95EaZp0atKvYsUdRL2QftZ6lDfpDfdhkZ2Ilux4rQmtvchWbq9C2C1FgM7PMTNIMyL3A7l0hVsYTwNA6MKskiFXEyVRsdoFJBlMj2+jSoEsKft9V/AMTRxjx2yNF/CLULA+FxRaTLLdJqBbhlk9YzTlGfMlmJhAV4nONghT4sMtyGhBs9qexY27yQZhjy3UrHbZBCau+66smLI5KB4LdB6OfclyL9wc+mnaJnjGlWtQ+E0yM5iWyq6BipF2mldvjmfwiSlPr5QlrMN/DuDD2ilzerUmavSS1eINaXCpJxSUYKyWrlBrUo4i19xSLyC3XrShnJ773PJXwTNkbWL38Hzp7/2SaQ00yey6WnVIjm085lKm4auONNkSHyPia8l/n6v+j5InsHFp9y+fv4+Lo1eLtMhFiaoXHkNvHwl2gvfMMeb/j4tvDu2+H92YGJ1kfs9LfL5Kex26GepR+17P3UbhHSSMHus19VdREohaI7AK52/pE6JCKAtzKptOG1cvxyTHZgJj10l6z7oZXUcgvV5bweO8/lPYxhT3EMjHtWr3xiMlieJPW+YCdrfe4W5ytNLx60LgwNueWvVWPcEUvOpOEVnFV0CQNSz3mugZWedhWHZh/d67aa/U10aVFonJJdhaeJtltxrIUNZqiHTYY+W+VNNF9FlQZ7j7SQFeQ/0f4/Bxuc9f6qrxR2RiCJWRZ8LuammWrQgdFHSLh/M8QTIKtlaLnZ5pzmRXatag/Q/wPcl8bodvOoF8AAAAASUVORK5CYII=",of="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUgSURBVHgBzVlNTFxVFP7OfQMmkuCoicYE0rJsqGl3BhIjLipdVsW2loVadaWJwPizk2Fjmig/TdxBCRsrEhpdUjQRXYiupFHUXenPysQ4NqFJmZl7/c59wwzz4/zP2JPw5r377jv3u+fvnnMQ1EtnPx5CJDgG64YAOQ5xUThE/TtBAk52AMc/ew0WG1h+bwN1kNQ0+9RsFA/iHYgdI4Df4ew2YH4gl23e34FL3wm5Bt289vJdDwEOQswAwXZxbAPWTGF5fKfaJasDqMC6MEkQ5wlsnl+twCZvoyYyvRCZ4LeDXPabaoGaShPw8swr6LLXqco0nHsKLjlTOzgle4sSHiefEW7yLxj7LUbJuwKVl+Do7Cyl9iKBvU7m22gqUaJGVinVVXwWG0dNAL1K3Zew9k8+TWZtq9mktiqYo40+gA55HkvjicIppVW8D05V0ipwSsrbps/7tZJcswQVA/Rqdfc8uHaRt02CHJ2eLXwV5D2dm36Vs98iwFH+3kM7ScwmrxdwdNjh1/Ufs8PZCWdnD3vPgpypz0ubQBL002lW0Gn69u0xp+LA0hnclf8NnFIYKRaRJJYMhRIMpfc9H0eKAfpwQNuQATSbxDHgF0QJ79nyE6V4SKUYSlClJ7JZUnoaq1oBTsnJaYJ8M3/Mg13AXmpMHyPhIIZ4PVOai/QUcN0k42nURzzuMMXf7hz7QM/r/FnWrsCYNd7FIz4rAXartz1K0+/afFiTvXoHQIw33ZUn81gEkxFiM3STIS+VyrTAeVczqw3zfhWmowfVUBA57Y+0fW04N115Tdnmho7TBg1zOqkGYBj1c+rt9SDFDJf9ykRiNCENwN2ehxPySM+gEhlhGmcoQZHD/KB6VWk242QyC1LMIu0lVjRPvdEEi7ybyIyo2k7w+6uohlLp33g9ZihuhhhzE7WQSy7wu+d4k9mYmSCYqdwEzf3wdWgKHu2mn1+Tzco/vEY1zETrSgg0qGpulwUpb1Cd6/w9mQlNGXvDPIGN1LxGOD9aOWEtS5qE4gR3O58Z6KckL+XA0RRcKo4GSAEmMjVEfaQ7TSfjBbGRzoARbwr1UogpwUAtCSaL3dhrMO9T50HHNrd8kuCm+dzoma41zA4Bui3s4SgHGk8S1EPTqM5LK1HAitC6G/Ri+x2Ma81Z2whZx+rPbhEgtqDGff/RgBb8Jqz45Qg6qzy22kKMo5AuxRZmM7AXkfLZTKksRZ1HPeolhpAmmoL8t9a0wIfb0NsQYGdkDnv2ho9nhQFV5AueApqz6a560XQqTBr8KTTIzsPTfvns+LlP5jSoMRcrlqIwGzFNTlotezmQNQbyfICaXACP4HLsNX2MZF90BnFK8ToltlbURXCpFYaPFbScvO29wOzq2exI9p1WURbjBHipoZOlXvLZj7ZCED/YVCpufaiqBU8g3cbCXUlTM4c/8Pm7YweHS/dmRmdYH7PSbxfIIGA3Qx6n3Q0VviqdzWgjB+Yxv6tWqlt574O7a06VnFKWgfdsGm3JerlhcFpEqVqvFKr1IAVlmfyyvoYnh/8mt0/J7GGGm1u+1dsYMHWGt6mdj1jjfMDT4kK56ZUT1suxJe/2Th71RZKqxNRxLHZoh4K1i3YNnATYlT4sv79U6bPamujaIpF0nIXSMwS7yxOGtYbdpB5uM/LfzGuiR9xD7Pn1+wa6QH+P8P1F3OWp9VVxo7I5APPAsuD3NTXLVkEfWR0i4My/IZgEO6dFz89U5wYrtGv1/hviX0cVD3JFw6grAAAAAElFTkSuQmCC";var mt=function(){return mt=Object.assign||function(t){for(var i,n=1,o=arguments.length;n<o;n++){i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},mt.apply(this,arguments)};function Hr(e,t,i){if(i||arguments.length===2)for(var n=0,o=t.length,s;n<o;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}var Fe="-ms-",Ar="-moz-",De="-webkit-",sf="comm",Rs="rule",Ec="decl",V1="@import",af="@keyframes",W1="@layer",lf=Math.abs,Pc=String.fromCharCode,wl=Object.assign;function H1(e,t){return it(e,0)^45?(((t<<2^it(e,0))<<2^it(e,1))<<2^it(e,2))<<2^it(e,3):0}function cf(e){return e.trim()}function ui(e,t){return(e=t.exec(e))?e[0]:e}function Pe(e,t,i){return e.replace(t,i)}function Ro(e,t,i){return e.indexOf(t,i)}function it(e,t){return e.charCodeAt(t)|0}function Hn(e,t,i){return e.slice(t,i)}function ti(e){return e.length}function df(e){return e.length}function ur(e,t){return t.push(e),e}function Y1(e,t){return e.map(t).join("")}function lh(e,t){return e.filter(function(i){return!ui(i,t)})}var Bs=1,Yn=1,hf=0,Wt=0,qe=0,$n="";function Fs(e,t,i,n,o,s,l,j){return{value:e,root:t,parent:i,type:n,props:o,children:s,line:Bs,column:Yn,length:l,return:"",siblings:j}}function Ei(e,t){return wl(Fs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function gn(e){for(;e.root;)e=Ei(e.root,{children:[e]});ur(e,e.siblings)}function _1(){return qe}function X1(){return qe=Wt>0?it($n,--Wt):0,Yn--,qe===10&&(Yn=1,Bs--),qe}function Zt(){return qe=Wt<hf?it($n,Wt++):0,Yn++,qe===10&&(Yn=1,Bs++),qe}function on(){return it($n,Wt)}function Bo(){return Wt}function Us(e,t){return Hn($n,e,t)}function bl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Q1(e){return Bs=Yn=1,hf=ti($n=e),Wt=0,[]}function q1(e){return $n="",e}function wa(e){return cf(Us(Wt-1,Al(e===91?e+2:e===40?e+1:e)))}function K1(e){for(;(qe=on())&&qe<33;)Zt();return bl(e)>2||bl(qe)>3?"":" "}function Z1(e,t){for(;--t&&Zt()&&!(qe<48||qe>102||qe>57&&qe<65||qe>70&&qe<97););return Us(e,Bo()+(t<6&&on()==32&&Zt()==32))}function Al(e){for(;Zt();)switch(qe){case e:return Wt;case 34:case 39:e!==34&&e!==39&&Al(qe);break;case 40:e===41&&Al(e);break;case 92:Zt();break}return Wt}function J1(e,t){for(;Zt()&&e+qe!==57;)if(e+qe===84&&on()===47)break;return"/*"+Us(t,Wt-1)+"*"+Pc(e===47?e:Zt())}function $1(e){for(;!bl(on());)Zt();return Us(e,Wt)}function ex(e){return q1(Fo("",null,null,null,[""],e=Q1(e),0,[0],e))}function Fo(e,t,i,n,o,s,l,j,E){for(var F=0,_=0,C=l,D=0,V=0,k=0,I=1,U=1,p=1,a=0,u="",y=o,w=s,f=n,N=u;U;)switch(k=a,a=Zt()){case 40:if(k!=108&&it(N,C-1)==58){Ro(N+=Pe(wa(a),"&","&\f"),"&\f",lf(F?j[F-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:N+=wa(a);break;case 9:case 10:case 13:case 32:N+=K1(k);break;case 92:N+=Z1(Bo()-1,7);continue;case 47:switch(on()){case 42:case 47:ur(tx(J1(Zt(),Bo()),t,i,E),E);break;default:N+="/"}break;case 123*I:j[F++]=ti(N)*p;case 125*I:case 59:case 0:switch(a){case 0:case 125:U=0;case 59+_:p==-1&&(N=Pe(N,/\f/g,"")),V>0&&ti(N)-C&&ur(V>32?dh(N+";",n,i,C-1,E):dh(Pe(N," ","")+";",n,i,C-2,E),E);break;case 59:N+=";";default:if(ur(f=ch(N,t,i,F,_,o,j,u,y=[],w=[],C,s),s),a===123)if(_===0)Fo(N,t,f,f,y,s,C,j,w);else switch(D===99&&it(N,3)===110?100:D){case 100:case 108:case 109:case 115:Fo(e,f,f,n&&ur(ch(e,f,f,0,0,o,j,u,o,y=[],C,w),w),o,w,C,j,n?y:w);break;default:Fo(N,f,f,f,[""],w,0,j,w)}}F=_=V=0,I=p=1,u=N="",C=l;break;case 58:C=1+ti(N),V=k;default:if(I<1){if(a==123)--I;else if(a==125&&I++==0&&X1()==125)continue}switch(N+=Pc(a),a*I){case 38:p=_>0?1:(N+="\f",-1);break;case 44:j[F++]=(ti(N)-1)*p,p=1;break;case 64:on()===45&&(N+=wa(Zt())),D=on(),_=C=ti(u=N+=$1(Bo())),a++;break;case 45:k===45&&ti(N)==2&&(I=0)}}return s}function ch(e,t,i,n,o,s,l,j,E,F,_,C){for(var D=o-1,V=o===0?s:[""],k=df(V),I=0,U=0,p=0;I<n;++I)for(var a=0,u=Hn(e,D+1,D=lf(U=l[I])),y=e;a<k;++a)(y=cf(U>0?V[a]+" "+u:Pe(u,/&\f/g,V[a])))&&(E[p++]=y);return Fs(e,t,i,o===0?Rs:j,E,F,_,C)}function tx(e,t,i,n){return Fs(e,t,i,sf,Pc(_1()),Hn(e,2,-2),0,n)}function dh(e,t,i,n,o){return Fs(e,t,i,Ec,Hn(e,0,n),Hn(e,n+1,-1),n,o)}function uf(e,t,i){switch(H1(e,t)){case 5103:return De+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+e+e;case 4789:return Ar+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return De+e+Ar+e+Fe+e+e;case 5936:switch(it(e,t+11)){case 114:return De+e+Fe+Pe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return De+e+Fe+Pe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return De+e+Fe+Pe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return De+e+Fe+e+e;case 6165:return De+e+Fe+"flex-"+e+e;case 5187:return De+e+Pe(e,/(\w+).+(:[^]+)/,De+"box-$1$2"+Fe+"flex-$1$2")+e;case 5443:return De+e+Fe+"flex-item-"+Pe(e,/flex-|-self/g,"")+(ui(e,/flex-|baseline/)?"":Fe+"grid-row-"+Pe(e,/flex-|-self/g,""))+e;case 4675:return De+e+Fe+"flex-line-pack"+Pe(e,/align-content|flex-|-self/g,"")+e;case 5548:return De+e+Fe+Pe(e,"shrink","negative")+e;case 5292:return De+e+Fe+Pe(e,"basis","preferred-size")+e;case 6060:return De+"box-"+Pe(e,"-grow","")+De+e+Fe+Pe(e,"grow","positive")+e;case 4554:return De+Pe(e,/([^-])(transform)/g,"$1"+De+"$2")+e;case 6187:return Pe(Pe(Pe(e,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),e,"")+e;case 5495:case 3959:return Pe(e,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return Pe(Pe(e,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+Fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+e+e;case 4200:if(!ui(e,/flex-|baseline/))return Fe+"grid-column-align"+Hn(e,t)+e;break;case 2592:case 3360:return Fe+Pe(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(n,o){return t=o,ui(n.props,/grid-\w+-end/)})?~Ro(e+(i=i[t].value),"span",0)?e:Fe+Pe(e,"-start","")+e+Fe+"grid-row-span:"+(~Ro(i,"span",0)?ui(i,/\d+/):+ui(i,/\d+/)-+ui(e,/\d+/))+";":Fe+Pe(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(n){return ui(n.props,/grid-\w+-start/)})?e:Fe+Pe(Pe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Pe(e,/(.+)-inline(.+)/,De+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ti(e)-1-t>6)switch(it(e,t+1)){case 109:if(it(e,t+4)!==45)break;case 102:return Pe(e,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+Ar+(it(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ro(e,"stretch",0)?uf(Pe(e,"stretch","fill-available"),t,i)+e:e}break;case 5152:case 5920:return Pe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,s,l,j,E,F){return Fe+o+":"+s+F+(l?Fe+o+"-span:"+(j?E:+E-+s)+F:"")+e});case 4949:if(it(e,t+6)===121)return Pe(e,":",":"+De)+e;break;case 6444:switch(it(e,it(e,14)===45?18:11)){case 120:return Pe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+(it(e,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+Fe+"$2box$3")+e;case 100:return Pe(e,":",":"+Fe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Pe(e,"scroll-","scroll-snap-")+e}return e}function gs(e,t){for(var i="",n=0;n<e.length;n++)i+=t(e[n],n,e,t)||"";return i}function ix(e,t,i,n){switch(e.type){case W1:if(e.children.length)break;case V1:case Ec:return e.return=e.return||e.value;case sf:return"";case af:return e.return=e.value+"{"+gs(e.children,n)+"}";case Rs:if(!ti(e.value=e.props.join(",")))return""}return ti(i=gs(e.children,n))?e.return=e.value+"{"+i+"}":""}function nx(e){var t=df(e);return function(i,n,o,s){for(var l="",j=0;j<t;j++)l+=e[j](i,n,o,s)||"";return l}}function rx(e){return function(t){t.root||(t=t.return)&&e(t)}}function ox(e,t,i,n){if(e.length>-1&&!e.return)switch(e.type){case Ec:e.return=uf(e.value,e.length,i);return;case af:return gs([Ei(e,{value:Pe(e.value,"@","@"+De)})],n);case Rs:if(e.length)return Y1(i=e.props,function(o){switch(ui(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gn(Ei(e,{props:[Pe(o,/:(read-\w+)/,":"+Ar+"$1")]})),gn(Ei(e,{props:[o]})),wl(e,{props:lh(i,n)});break;case"::placeholder":gn(Ei(e,{props:[Pe(o,/:(plac\w+)/,":"+De+"input-$1")]})),gn(Ei(e,{props:[Pe(o,/:(plac\w+)/,":"+Ar+"$1")]})),gn(Ei(e,{props:[Pe(o,/:(plac\w+)/,Fe+"input-$1")]})),gn(Ei(e,{props:[o]})),wl(e,{props:lh(i,n)});break}return""})}}var sx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},St={},_n=typeof process<"u"&&St!==void 0&&(St.REACT_APP_SC_ATTR||St.SC_ATTR)||"data-styled",pf="active",ff="data-styled-version",Gs="6.1.11",Nc=`/*!sc*/
`,Mc=typeof window<"u"&&"HTMLElement"in window,ax=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&St!==void 0&&St.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&St.REACT_APP_SC_DISABLE_SPEEDY!==""?St.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&St.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&St!==void 0&&St.SC_DISABLE_SPEEDY!==void 0&&St.SC_DISABLE_SPEEDY!==""&&St.SC_DISABLE_SPEEDY!=="false"&&St.SC_DISABLE_SPEEDY),lx={},Vs=Object.freeze([]),Xn=Object.freeze({});function mf(e,t,i){return i===void 0&&(i=Xn),e.theme!==i.theme&&e.theme||t||i.theme}var gf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dx=/(^-|-$)/g;function hh(e){return e.replace(cx,"-").replace(dx,"")}var hx=/(a)(d)/gi,bo=52,uh=function(e){return String.fromCharCode(e+(e>25?39:97))};function jl(e){var t,i="";for(t=Math.abs(e);t>bo;t=t/bo|0)i=uh(t%bo)+i;return(uh(t%bo)+i).replace(hx,"$1-$2")}var ba,xf=5381,Nn=function(e,t){for(var i=t.length;i;)e=33*e^t.charCodeAt(--i);return e},yf=function(e){return Nn(xf,e)};function vf(e){return jl(yf(e)>>>0)}function ux(e){return e.displayName||e.name||"Component"}function Aa(e){return typeof e=="string"&&!0}var wf=typeof Symbol=="function"&&Symbol.for,bf=wf?Symbol.for("react.memo"):60115,px=wf?Symbol.for("react.forward_ref"):60112,fx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Af={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gx=((ba={})[px]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ba[bf]=Af,ba);function ph(e){return("type"in(t=e)&&t.type.$$typeof)===bf?Af:"$$typeof"in e?gx[e.$$typeof]:fx;var t}var xx=Object.defineProperty,yx=Object.getOwnPropertyNames,fh=Object.getOwnPropertySymbols,vx=Object.getOwnPropertyDescriptor,wx=Object.getPrototypeOf,mh=Object.prototype;function jf(e,t,i){if(typeof t!="string"){if(mh){var n=wx(t);n&&n!==mh&&jf(e,n,i)}var o=yx(t);fh&&(o=o.concat(fh(t)));for(var s=ph(e),l=ph(t),j=0;j<o.length;++j){var E=o[j];if(!(E in mx||i&&i[E]||l&&E in l||s&&E in s)){var F=vx(t,E);try{xx(e,E,F)}catch{}}}}return e}function Qn(e){return typeof e=="function"}function Tc(e){return typeof e=="object"&&"styledComponentId"in e}function tn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Cl(e,t){if(e.length===0)return"";for(var i=e[0],n=1;n<e.length;n++)i+=e[n];return i}function Yr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kl(e,t,i){if(i===void 0&&(i=!1),!i&&!Yr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=kl(e[n],t[n]);else if(Yr(t))for(var n in t)e[n]=kl(e[n],t[n]);return e}function Lc(e,t){Object.defineProperty(e,"toString",{value:t})}function Jr(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var bx=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var i=0,n=0;n<t;n++)i+=this.groupSizes[n];return i},e.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;t>=s;)if((s<<=1)<0)throw Jr(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var l=o;l<s;l++)this.groupSizes[l]=0}for(var j=this.indexOfGroup(t+1),E=(l=0,i.length);l<E;l++)this.tag.insertRule(j,i[l])&&(this.groupSizes[t]++,j++)},e.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],n=this.indexOfGroup(t),o=n+i;this.groupSizes[t]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n,l=o;l<s;l++)i+="".concat(this.tag.getRule(l)).concat(Nc);return i},e}(),Uo=new Map,xs=new Map,Go=1,Ao=function(e){if(Uo.has(e))return Uo.get(e);for(;xs.has(Go);)Go++;var t=Go++;return Uo.set(e,t),xs.set(t,e),t},Ax=function(e,t){Go=t+1,Uo.set(e,t),xs.set(t,e)},jx="style[".concat(_n,"][").concat(ff,'="').concat(Gs,'"]'),Cx=new RegExp("^".concat(_n,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kx=function(e,t,i){for(var n,o=i.split(","),s=0,l=o.length;s<l;s++)(n=o[s])&&e.registerName(t,n)},Sx=function(e,t){for(var i,n=((i=t.textContent)!==null&&i!==void 0?i:"").split(Nc),o=[],s=0,l=n.length;s<l;s++){var j=n[s].trim();if(j){var E=j.match(Cx);if(E){var F=0|parseInt(E[1],10),_=E[2];F!==0&&(Ax(_,F),kx(e,_,E[3]),e.getTag().insertRules(F,o)),o.length=0}else o.push(j)}}};function Ex(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Cf=function(e){var t=document.head,i=e||t,n=document.createElement("style"),o=function(j){var E=Array.from(j.querySelectorAll("style[".concat(_n,"]")));return E[E.length-1]}(i),s=o!==void 0?o.nextSibling:null;n.setAttribute(_n,pf),n.setAttribute(ff,Gs);var l=Ex();return l&&n.setAttribute("nonce",l),i.insertBefore(n,s),n},Px=function(){function e(t){this.element=Cf(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var n=document.styleSheets,o=0,s=n.length;o<s;o++){var l=n[o];if(l.ownerNode===i)return l}throw Jr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},e}(),Nx=function(){function e(t){this.element=Cf(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var n=document.createTextNode(i);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Mx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),gh=Mc,Tx={isServer:!Mc,useCSSOMInjection:!ax},ys=function(){function e(t,i,n){t===void 0&&(t=Xn),i===void 0&&(i={});var o=this;this.options=mt(mt({},Tx),t),this.gs=i,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Mc&&gh&&(gh=!1,function(s){for(var l=document.querySelectorAll(jx),j=0,E=l.length;j<E;j++){var F=l[j];F&&F.getAttribute(_n)!==pf&&(Sx(s,F),F.parentNode&&F.parentNode.removeChild(F))}}(this)),Lc(this,function(){return function(s){for(var l=s.getTag(),j=l.length,E="",F=function(C){var D=function(p){return xs.get(p)}(C);if(D===void 0)return"continue";var V=s.names.get(D),k=l.getGroup(C);if(V===void 0||k.length===0)return"continue";var I="".concat(_n,".g").concat(C,'[id="').concat(D,'"]'),U="";V!==void 0&&V.forEach(function(p){p.length>0&&(U+="".concat(p,","))}),E+="".concat(k).concat(I,'{content:"').concat(U,'"}').concat(Nc)},_=0;_<j;_++)F(_);return E}(o)})}return e.registerId=function(t){return Ao(t)},e.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new e(mt(mt({},this.options),t),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(i){var n=i.useCSSOMInjection,o=i.target;return i.isServer?new Mx(o):n?new Px(o):new Nx(o)}(this.options),new bx(t)));var t},e.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},e.prototype.registerName=function(t,i){if(Ao(t),this.names.has(t))this.names.get(t).add(i);else{var n=new Set;n.add(i),this.names.set(t,n)}},e.prototype.insertRules=function(t,i,n){this.registerName(t,i),this.getTag().insertRules(Ao(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ao(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Lx=/&/g,Dx=/^\s*\/\/.*$/gm;function kf(e,t){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=kf(i.children,t)),i})}function Ox(e){var t,i,n,o=Xn,s=o.options,l=s===void 0?Xn:s,j=o.plugins,E=j===void 0?Vs:j,F=function(D,V,k){return k.startsWith(i)&&k.endsWith(i)&&k.replaceAll(i,"").length>0?".".concat(t):D},_=E.slice();_.push(function(D){D.type===Rs&&D.value.includes("&")&&(D.props[0]=D.props[0].replace(Lx,i).replace(n,F))}),l.prefix&&_.push(ox),_.push(ix);var C=function(D,V,k,I){V===void 0&&(V=""),k===void 0&&(k=""),I===void 0&&(I="&"),t=I,i=V,n=new RegExp("\\".concat(i,"\\b"),"g");var U=D.replace(Dx,""),p=ex(k||V?"".concat(k," ").concat(V," { ").concat(U," }"):U);l.namespace&&(p=kf(p,l.namespace));var a=[];return gs(p,nx(_.concat(rx(function(u){return a.push(u)})))),a};return C.hash=E.length?E.reduce(function(D,V){return V.name||Jr(15),Nn(D,V.name)},xf).toString():"",C}var Ix=new ys,Sl=Ox(),Sf=nt.createContext({shouldForwardProp:void 0,styleSheet:Ix,stylis:Sl});Sf.Consumer;nt.createContext(void 0);function El(){return we.useContext(Sf)}var zx=function(){function e(t,i){var n=this;this.inject=function(o,s){s===void 0&&(s=Sl);var l=n.name+s.hash;o.hasNameForId(n.id,l)||o.insertRules(n.id,l,s(n.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,Lc(this,function(){throw Jr(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Sl),this.name+t.hash},e}(),Rx=function(e){return e>="A"&&e<="Z"};function xh(e){for(var t="",i=0;i<e.length;i++){var n=e[i];if(i===1&&n==="-"&&e[0]==="-")return e;Rx(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Ef=function(e){return e==null||e===!1||e===""},Pf=function(e){var t,i,n=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!Ef(s)&&(Array.isArray(s)&&s.isCss||Qn(s)?n.push("".concat(xh(o),":"),s,";"):Yr(s)?n.push.apply(n,Hr(Hr(["".concat(o," {")],Pf(s),!1),["}"],!1)):n.push("".concat(xh(o),": ").concat((t=o,(i=s)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in sx||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return n};function Hi(e,t,i,n){if(Ef(e))return[];if(Tc(e))return[".".concat(e.styledComponentId)];if(Qn(e)){if(!Qn(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return Hi(o,t,i,n)}var s;return e instanceof zx?i?(e.inject(i,n),[e.getName(n)]):[e]:Yr(e)?Pf(e):Array.isArray(e)?Array.prototype.concat.apply(Vs,e.map(function(l){return Hi(l,t,i,n)})):[e.toString()]}function Nf(e){for(var t=0;t<e.length;t+=1){var i=e[t];if(Qn(i)&&!Tc(i))return!1}return!0}var Bx=yf(Gs),Fx=function(){function e(t,i,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Nf(t),this.componentId=i,this.baseHash=Nn(Bx,i),this.baseStyle=n,ys.registerId(i)}return e.prototype.generateAndInjectStyles=function(t,i,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=tn(o,this.staticRulesId);else{var s=Cl(Hi(this.rules,t,i,n)),l=jl(Nn(this.baseHash,s)>>>0);if(!i.hasNameForId(this.componentId,l)){var j=n(s,".".concat(l),void 0,this.componentId);i.insertRules(this.componentId,l,j)}o=tn(o,l),this.staticRulesId=l}else{for(var E=Nn(this.baseHash,n.hash),F="",_=0;_<this.rules.length;_++){var C=this.rules[_];if(typeof C=="string")F+=C;else if(C){var D=Cl(Hi(C,t,i,n));E=Nn(E,D+_),F+=D}}if(F){var V=jl(E>>>0);i.hasNameForId(this.componentId,V)||i.insertRules(this.componentId,V,n(F,".".concat(V),void 0,this.componentId)),o=tn(o,V)}}return o},e}(),Dc=nt.createContext(void 0);Dc.Consumer;var ja={};function Ux(e,t,i){var n=Tc(e),o=e,s=!Aa(e),l=t.attrs,j=l===void 0?Vs:l,E=t.componentId,F=E===void 0?function(y,w){var f=typeof y!="string"?"sc":hh(y);ja[f]=(ja[f]||0)+1;var N="".concat(f,"-").concat(vf(Gs+f+ja[f]));return w?"".concat(w,"-").concat(N):N}(t.displayName,t.parentComponentId):E,_=t.displayName,C=_===void 0?function(y){return Aa(y)?"styled.".concat(y):"Styled(".concat(ux(y),")")}(e):_,D=t.displayName&&t.componentId?"".concat(hh(t.displayName),"-").concat(t.componentId):t.componentId||F,V=n&&o.attrs?o.attrs.concat(j).filter(Boolean):j,k=t.shouldForwardProp;if(n&&o.shouldForwardProp){var I=o.shouldForwardProp;if(t.shouldForwardProp){var U=t.shouldForwardProp;k=function(y,w){return I(y,w)&&U(y,w)}}else k=I}var p=new Fx(i,D,n?o.componentStyle:void 0);function a(y,w){return function(f,N,K){var Y=f.attrs,R=f.componentStyle,A=f.defaultProps,L=f.foldedComponentIds,b=f.styledComponentId,c=f.target,d=nt.useContext(Dc),v=El(),h=f.shouldForwardProp||v.shouldForwardProp,g=mf(N,d,A)||Xn,x=function(ee,$,ce){for(var S,P=mt(mt({},$),{className:void 0,theme:ce}),B=0;B<ee.length;B+=1){var q=Qn(S=ee[B])?S(P):S;for(var m in q)P[m]=m==="className"?tn(P[m],q[m]):m==="style"?mt(mt({},P[m]),q[m]):q[m]}return $.className&&(P.className=tn(P.className,$.className)),P}(Y,N,g),z=x.as||c,H={};for(var ie in x)x[ie]===void 0||ie[0]==="$"||ie==="as"||ie==="theme"&&x.theme===g||(ie==="forwardedAs"?H.as=x.forwardedAs:h&&!h(ie,z)||(H[ie]=x[ie]));var O=function(ee,$){var ce=El(),S=ee.generateAndInjectStyles($,ce.styleSheet,ce.stylis);return S}(R,x),Q=tn(L,b);return O&&(Q+=" "+O),x.className&&(Q+=" "+x.className),H[Aa(z)&&!gf.has(z)?"class":"className"]=Q,H.ref=K,we.createElement(z,H)}(u,y,w)}a.displayName=C;var u=nt.forwardRef(a);return u.attrs=V,u.componentStyle=p,u.displayName=C,u.shouldForwardProp=k,u.foldedComponentIds=n?tn(o.foldedComponentIds,o.styledComponentId):"",u.styledComponentId=D,u.target=n?o.target:e,Object.defineProperty(u,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=n?function(w){for(var f=[],N=1;N<arguments.length;N++)f[N-1]=arguments[N];for(var K=0,Y=f;K<Y.length;K++)kl(w,Y[K],!0);return w}({},o.defaultProps,y):y}}),Lc(u,function(){return".".concat(u.styledComponentId)}),s&&jf(u,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),u}function yh(e,t){for(var i=[e[0]],n=0,o=t.length;n<o;n+=1)i.push(t[n],e[n+1]);return i}var vh=function(e){return Object.assign(e,{isCss:!0})};function Mf(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(Qn(e)||Yr(e))return vh(Hi(yh(Vs,Hr([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Hi(n):vh(Hi(yh(n,t)))}function Pl(e,t,i){if(i===void 0&&(i=Xn),!t)throw Jr(1,t);var n=function(o){for(var s=[],l=1;l<arguments.length;l++)s[l-1]=arguments[l];return e(t,i,Mf.apply(void 0,Hr([o],s,!1)))};return n.attrs=function(o){return Pl(e,t,mt(mt({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Pl(e,t,mt(mt({},i),o))},n}var Tf=function(e){return Pl(Ux,e)},ot=Tf;gf.forEach(function(e){ot[e]=Tf(e)});var Gx=function(){function e(t,i){this.rules=t,this.componentId=i,this.isStatic=Nf(t),ys.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,i,n,o){var s=o(Cl(Hi(this.rules,i,n,o)),""),l=this.componentId+t;n.insertRules(l,l,s)},e.prototype.removeStyles=function(t,i){i.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,i,n,o){t>2&&ys.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,i,n,o)},e}();function Vx(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var n=Mf.apply(void 0,Hr([e],t,!1)),o="sc-global-".concat(vf(JSON.stringify(n))),s=new Gx(n,o),l=function(E){var F=El(),_=nt.useContext(Dc),C=nt.useRef(F.styleSheet.allocateGSInstance(o)).current;return F.styleSheet.server&&j(C,E,F.styleSheet,_,F.stylis),nt.useLayoutEffect(function(){if(!F.styleSheet.server)return j(C,E,F.styleSheet,_,F.stylis),function(){return s.removeStyles(C,F.styleSheet)}},[C,E,F.styleSheet,_,F.stylis]),null};function j(E,F,_,C,D){if(s.isStatic)s.renderStyles(E,lx,_,D);else{var V=mt(mt({},F),{theme:mf(F,C,l.defaultProps)});s.renderStyles(E,V,_,D)}}return nt.memo(l)}const Wx=ot.div.attrs({className:"container"})`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.container * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

.blue{
  color: #0785D2;
}

.pointer{cursor: pointer;}

.container > div{
  width: 100%;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}


 nav{
    background-color: #fff;
    width: 100%;
    height: 71px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
 }

 .logo {
    background-image: url('/images/logo.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 400px;
    height: 100px; 
 }

.ul
{
    display: flex;
    align-items: center;
}

.ul li
{
    margin: 0 30px;
    font-size: 1.35em;
}

.ul li a
{
    color: var(--branco);
}

.Login {
    font-size: 0.8em;
    color: #222;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }
  
  .login:focus, .Login:hover {
    color: #222;
  }
  
.Login:focus:after, .Login:hover:after {
    width: 100%;
    left: 0%;
  }
  
  .Login:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #F38342;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }

  /*Botão Cadastro*/
.Cadastro {
    --primary-color: #F38342;
    --secondary-color: #fff;
    --hover-color: #d9d9d9;
    --arrow-width: 10px;
    --arrow-stroke: 2px;
    box-sizing: border-box;
    border: 0;
    border-radius: 10px;
    color: var(--secondary-color);
    padding: 1em 1.8em;
    background: var(--primary-color);
    display: flex;
    transition: 0.2s background;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
  }
  
  .Cadastro .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .Cadastro .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
  }
  
  .Cadastro .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }
  
  .Cadastro:hover {
    background-color: var(--hover-color);
  }
  
  .Cadastro:hover .arrow {
    background: var(--secondary-color);
  }
  
  .Cadastro:hover .arrow:before {
    right: 0;
  }

  /*Video*/
  .Video {
    width: 100%;
    height: 694px; /* Ajuste conforme necessário */
    background-image: url('/images/videos/altaQualidade.gif');
    background-size: cover; /* Para cobrir toda a área da div */
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
  }

.Video .conteudo {
    height: 100%;
    width: 100%;
    background-color: #33333380;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 54px;
}

.conteudo h1 {
  font-size: 2.5em;
  color: #fff;
  font-weight: bolder;
  margin-bottom: 40px;
}

.conteudo h2 {
  font-size: 1.5em;
  color: #fff;
  font-weight: 500;
  margin-bottom:40px;
}

.torneProdutividade {
  background-color: #F38342;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
}

  /* Frase diga adeu as comandas de papel */
  .Frase {
    width: 100%;
    height: 280px;
    background-color: #005A8D;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: "Roboto", sans-serif;
    flex-direction: column;
    gap: 30px;
  }

  h1{
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 6px;
  }

p{
    text-align: center;
    font-size: 29px;
}


/*Simplificando suas entregas*/
.solution-description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 76px;
    margin-bottom: 100px;
  }

  .simplificando{
    font-size: 42px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    margin-top: 20px;
  }

  .um{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
  }

.imgNotebook {
  width: 95%;
  max-width: 700px;
}

  /* App.css */
.app-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .solution-description h2 {
    color: #333;
    text-align: center;
  }
  
  .solution-description .highlight {
    color: #F38342;
  }
  
  .solution-description p {
    color: #555;
    line-height: 1.6;
    text-align: center;
    font-size: 20px;
    width: 100%;
    max-width: 674px;
  }
  
  .dois{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }


  #avaliacoes{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 0;
  }

  #avaliacoes .avaliacao{
    width: 80%;
    max-width: 900px;
    padding: 20px 80px;
    color: #fff;
    font-family: "Poppins";
    background-color: #005A8D;
    border-radius: 20px;
  }

  .avaliacao p{
    font-size: 1.6em;
  }

  .avaliacao > div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    margin-top: 50px;
  }

  .avaliacao > div img{
    border-radius: 50%;
  }

  .avaliacao div div{
    display: flex;
    flex-direction: column;
  }

  .starB{color: #000;}
  .starW{color: #fff;}

  /*Funcionalidades*/
  .Funcionalidades {
    width: 100%;
    padding: 20px;
    background-color: #F3F0ED;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 90px;
    text-align: center;
  }

  .Funcionalidades p {
    font-size: 14px;
    font-weight: bold;
    color: #F38342;
  }

  .Funcionalidades h1 {
    font-size: 40px;
    font-weight: 300;
    color: #F38342;
  }

  .Func {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 100px;
  }

  .facilUsabilidade { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .usabilidade {
    background-image: url('/images/icons/usabilidade.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
  }

  .gestaoSimplificada { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .gestao {
    background-image: url('/images/icons/gestao-da-informacao.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
  }

  .gerenciamentoComandas { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .Comandas {
    background-image: url('/images/icons/fatura.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
  }

  .Financeiro { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .educacao {
    background-image: url('/images/icons/cofrinho.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
  }


  /*Pagamentos*/
  .NossosPlanos {
    background-color: #ECF3FB;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    padding: 25px;
  }

  .NossosPlanos h1 {
    font-size: 52px;
    font-family: "Roboto", sans-serif;
    color: #333;
    text-align: center;
  }

  .TiposPlanos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
  }

  .TiposPlanos p:first-of-type{
    font-size: 1.2em;
    padding: 10px;
  }


  /* DESPERTE*/

  .Desperte {
    width: 279px;
    height: 400px;
    padding: 4px;
    border-radius: 15px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #000;
    background-image: linear-gradient(to top, #005A8D, #F38342);
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 0;
}

.Desperte:nth-of-type(3){
  background-image: linear-gradient(to bottom, #005A8D, #F38342);
}

.Desperte > div{
  position: relative;
  z-index: 2;
}

.Desperte:nth-of-type(3) > div{
  position: relative;
  top: -15px;
}

.Desperte:nth-of-type(3)::before{
  content: "Mais Vendidos";
  position: relative;
  width: 200px;
  height: 15px;
  left: 25px;
  top: -10px;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  border-radius: 0 0 17px 17px;
  background-color: #005A8D;
  z-index: 3;
}

.Desperte::after{
  content: "";
  position: absolute;
  display: block;
  width: 231px;
  height: 350px;
  border-radius: 15px;
  padding: 20px;
  background-color: #ffffff;
  z-index: 0;
}

.tituloCard {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #474747;
}

.conteudoPlano {
    font-size: 15px;
    color: #666666;
    margin-bottom: 20px;
}

.precoVelho {
    text-decoration: line-through;
    color: #ff0000;
    font-size: 16px;
    margin-right: 90px;
}

.precoNovo {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 20px;
}

.buttonCard {
  background-color: #F38342;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.buttonCard:hover {
    background-color: #e6692e;
}



/* Footer */

/* Add these styles to your existing styles.css file */

footer {
  display: flex;
  flex-direction: column;
  font-family: "Biryani";
}

footer .branco{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;
  background-color: #fff;
}

footer > .branco img{
  max-width: 200px;
}

footer > .branco a{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  color: #005A8D;
  font-weight: bold;
}

footer > .branco a:hover{
  color: #e6692e;
}

footer > .branco div{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
}

footer > .azul{
  display: flex;
  justify-content: space-between;
}

footer > .azul{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #fff;
  padding: 5px 20px;
  background-color: #005A8D;
}

footer > .azul span{
  padding: 5px;
  display: flex;
  gap: 100px;
}

footer > .azul span a{
  font-size: 1.1em;
  color: #fff;
}

footer > .azul span a:hover{
  color: #e6692e;
}


footer > .azul span p{
  font-size: 1.1em;
}

@media screen and (min-width: 1070px) { 
  footer > .branco div{
    gap: 30px;
    flex-direction: row;
  }
}

@media screen and (min-width: 880px) { 
  footer > .azul{
    justify-content: space-between;
    padding: 5px 20px;
  }
}
`,Je=Vx`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;function wh(){const e=Dt(),t=()=>window.scrollTo(0,3400),i=n=>{const o=n.target;let s=0;o.classList[1]==1?s=119.9:o.classList[1]==2?s=219.9:o.classList[1]==3?s=269.9:s=539.9,localStorage.setItem("Plano",s),e("/pagamento")};return r.jsxs(Wx,{children:[r.jsx(Je,{}),r.jsxs("div",{className:"container",children:[r.jsx("div",{className:"nav-bar",children:r.jsxs("nav",{children:[r.jsx("img",{src:Wr,alt:"Logo VEL",style:{width:"65px",borderRadius:"10px"}}),r.jsxs("ul",{className:"ul",children:[r.jsx("li",{children:r.jsx("a",{style:{cursor:"pointer"},onClick:()=>e("/sobrenos"),children:"Sobre"})}),r.jsx("li",{className:"pointer",onClick:t,children:r.jsx("a",{children:"Nossos Planos"})}),r.jsx("li",{children:r.jsx("a",{onClick:()=>e("/inicialingles"),style:{cursor:"pointer"},className:"idioma",children:r.jsx("img",{src:G1,alt:"English Logo",style:{width:"35px"}})})}),r.jsx("li",{children:r.jsx("a",{onClick:()=>e("/login"),children:r.jsx("button",{className:"Login",children:"Login"})})}),r.jsxs("button",{className:"Cadastro",onClick:t,children:["Começe Agora",r.jsxs("div",{className:"arrow-wrapper",children:[" ",r.jsx("div",{className:"arrow"})]})]})]})]})}),r.jsx("div",{className:"Video",children:r.jsxs("div",{className:"conteudo",children:[r.jsxs("h1",{children:["Simplificando a gestão ",r.jsx("br",{})," de entregas para você"]}),r.jsxs("h2",{children:["Descubra o segredo para entregas mais",r.jsx("br",{}),"eficientes e lucrativas!"]}),r.jsx("button",{onClick:t,className:"torneProdutividade",children:"Torne sua produtividade 3X maior"})]})}),r.jsxs("div",{className:"Frase",children:[r.jsx("h1",{children:"DIGA ADEUS AS COMANDAS DE PAPEL!"}),r.jsxs("p",{children:["Com a VEL, você digitaliza seus pedidos e elimina a necessidade"," ",r.jsx("br",{})," de impressões. Isso significa menos papel, menos custos e um ambiente",r.jsx("br",{})," mais sustentável."]})]}),r.jsxs("div",{className:"solution-description",children:[r.jsx("h1",{className:"simplificando",children:"Simplificando Sua Gestão de Entregas"}),r.jsxs("div",{className:"um",children:[r.jsx("img",{src:qp,alt:"Celular",className:"imgNotebook"}),r.jsxs("div",{className:"dois",children:[r.jsxs("h2",{children:["A Solução Completa para"," ",r.jsx("span",{className:"highlight",children:"Restaurantes"})," e ",r.jsx("br",{})," ",r.jsx("span",{className:"highlight",children:"Empresas de Motoboys"})]}),r.jsx("p",{children:"Diga adeus às complicações da gestão de entregas e adote uma plataforma que transforma a relação entre restaurantes, empresas de motoboys e seus entregadores. Desenvolvida para proporcionar eficiência, transparência e segurança, nossa solução digital oferece uma visão integrada de todo o seu fluxo de trabalho e finanças, tudo em um só lugar."}),r.jsx("p",{children:"Deixe as planilhas no passado e venha para o futuro da gestão de entregas, com toda a praticidade e confiabilidade que você precisa para levar seu negócio ao próximo nível."})]})]})]}),r.jsxs("div",{className:"Funcionalidades",children:[r.jsx("h1",{children:"Temos como Funcionalidades"}),r.jsxs("div",{className:"Func",children:[r.jsxs("div",{className:"facilUsabilidade",children:[r.jsx("div",{className:"usabilidade"}),r.jsxs("p",{children:["FÁCIL ",r.jsx("br",{})," USABILIDADE"]})]}),r.jsxs("div",{className:"gestaoSimplificada",children:[r.jsx("div",{className:"gestao"}),r.jsxs("p",{children:["GESTÃO ",r.jsx("br",{})," SIMPLIFICADA"]})]}),r.jsxs("div",{className:"gerenciamentoComandas",children:[r.jsx("div",{className:"Comandas"}),r.jsxs("p",{children:["GERENCIAMENTO DE ",r.jsx("br",{})," COMANDAS DIGITAIS"]})]}),r.jsxs("div",{className:"Financeiro",children:[r.jsx("div",{className:"educacao"}),r.jsxs("p",{children:["ACESSO A ED.FINANCEIRA ",r.jsx("br",{})," PARA ENTREGADORES"]})]})]})]}),r.jsx("div",{id:"avaliacoes",children:r.jsxs("div",{className:"avaliacao",children:[r.jsx("p",{children:'"Adorei! Agora consigo organizar minhas entregas e entregadores de uma forma muito mais organizada usando a plataforma da VEL! Não me arrependo nem um pouco de ter fechado o contrato."'}),r.jsxs("div",{children:[r.jsx("img",{src:Kp,alt:"Imagem de perfil"}),r.jsxs("div",{children:[r.jsx("span",{children:"Johny Ownes"}),r.jsxs("span",{children:[r.jsx(ni,{className:"starW"}),r.jsx(ni,{className:"starW"}),r.jsx(ni,{className:"starW"}),r.jsx(ni,{className:"starW"}),r.jsx(ni,{className:"starB"})]})]})]})]})}),r.jsxs("div",{className:"NossosPlanos",children:[r.jsxs("h1",{children:["Temos o ",r.jsx("span",{className:"blue",children:"plano perfeito"})," para sua"," ",r.jsx("span",{className:"blue",children:"empresa"}),"!"]}),r.jsx("p",{children:"Comece agora a simplificar a gestão de sua empresa"}),r.jsxs("div",{className:"TiposPlanos",children:[r.jsx("div",{className:"Desperte",children:r.jsxs("div",{children:[r.jsx("h2",{className:"tituloCard",children:"Desperte"}),r.jsxs("p",{className:"conteudoPlano",children:[" ","Acesso a toda nossa plataforma e cadastre até 10 entregadores"]}),r.jsx("p",{className:"precoVelho",children:"R$ 149,90"}),r.jsx("p",{className:"precoNovo",children:"R$ 119,90/mês"}),r.jsx("button",{onClick:i,className:"buttonCard 1",children:"Comece grátis"})]})}),r.jsx("div",{className:"Desperte",children:r.jsxs("div",{children:[r.jsx("h2",{className:"tituloCard",children:"Conquiste"}),r.jsxs("p",{className:"conteudoPlano",children:[" ","Acesso a toda nossa plataforma e cadastre até 30 entregadores"]}),r.jsx("p",{className:"precoVelho",children:"R$ 279,90"}),r.jsx("p",{className:"precoNovo",children:"R$ 219,90/mês"}),r.jsx("button",{onClick:i,className:"buttonCard 2",children:"Comece grátis"})]})}),r.jsx("div",{className:"Desperte",children:r.jsxs("div",{children:[r.jsx("h2",{className:"tituloCard",children:"Domine"}),r.jsxs("p",{className:"conteudoPlano",children:[" ","Acesso a toda nossa plataforma e cadastre até 60 entregadores"]}),r.jsx("p",{className:"precoVelho",children:"R$ 339,90"}),r.jsx("p",{className:"precoNovo",children:"R$ 269,90/mês"}),r.jsx("button",{onClick:i,className:"buttonCard 3",children:"Comece grátis"})]})}),r.jsx("div",{className:"Desperte",children:r.jsxs("div",{children:[r.jsx("h2",{className:"tituloCard",children:"Transforme"}),r.jsxs("p",{className:"conteudoPlano",children:[" ","Acesso a toda nossa plataforma e cadastro ilimitado de entregadores"," "]}),r.jsx("p",{className:"precoVelho",children:"R$ 669,90"}),r.jsx("p",{className:"precoNovo",children:"R$ 539,90/mês"}),r.jsx("button",{onClick:i,className:"buttonCard 4",children:"Comece grátis"})]})})]})]}),r.jsxs("footer",{children:[r.jsxs("div",{className:"branco",children:[r.jsx("img",{src:Wr,alt:"Icone da empresa"}),r.jsxs("div",{className:"icones",children:[r.jsxs("a",{href:"https://www.linkedin.com/company/vel-br",target:"_blank",children:[" ",r.jsx("img",{src:tf,alt:""}),"linkedin.com/company/vel-br/"]}),r.jsxs("a",{href:"https://www.instagram.com/vel_proa/",target:"_blank",children:[" ",r.jsx("img",{src:nf,alt:""}),"@vel_proa"]}),r.jsxs("a",{href:"https://github.com/VELPR0A",target:"_blank",children:[" ",r.jsx("img",{src:rf,alt:""}),"github.com/VELPR0A"]}),r.jsxs("a",{href:"#",target:"_blank",children:[" ",r.jsx("img",{src:of,alt:""}),"virtualeasylog@gmail.com"]})]})]}),r.jsxs("div",{className:"azul",children:[r.jsx("span",{children:r.jsx("p",{children:"© 2024 VEL. Todos os direitos reservados."})}),r.jsxs("span",{children:[r.jsx("a",{href:"#",children:"Termos de Uso"}),r.jsx("a",{href:"#",children:"Política de Privacidade"})]})]})]})]})]})}const Hx="/VEL_Desktop/assets/pt-BKj_9geC.png",Yx=ot.div.attrs({className:"container"})`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.container * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

.blue{
  color: #0785D2;
}

.pointer{cursor: pointer;}

.container > div{
  width: 100%;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}


 nav{
    background-color: #fff;
    width: 100%;
    height: 71px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
 }

 .logo {
    background-image: url('/images/logo.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 400px;
    height: 100px; 
 }

.ul
{
    display: flex;
    align-items: center;
}

.ul li
{
    margin: 0 30px;
    font-size: 1.35em;
}

.ul li a
{
    color: var(--branco);
}

.Login {
    font-size: 0.8em;
    color: #222;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }
  
  .login:focus, .Login:hover {
    color: #222;
  }
  
.Login:focus:after, .Login:hover:after {
    width: 100%;
    left: 0%;
  }
  
  .Login:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #F38342;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }

  /*Botão Cadastro*/
.Cadastro {
    --primary-color: #F38342;
    --secondary-color: #fff;
    --hover-color: #d9d9d9;
    --arrow-width: 10px;
    --arrow-stroke: 2px;
    box-sizing: border-box;
    border: 0;
    border-radius: 10px;
    color: var(--secondary-color);
    padding: 1em 1.8em;
    background: var(--primary-color);
    display: flex;
    transition: 0.2s background;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
  }
  
  .Cadastro .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .Cadastro .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
  }
  
  .Cadastro .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }
  
  .Cadastro:hover {
    background-color: var(--hover-color);
  }
  
  .Cadastro:hover .arrow {
    background: var(--secondary-color);
  }
  
  .Cadastro:hover .arrow:before {
    right: 0;
  }

  /*Video*/
  .Video {
    width: 100%;
    height: 694px; /* Ajuste conforme necessário */
    background-image: url('/images/videos/altaQualidade.gif');
    background-size: cover; /* Para cobrir toda a área da div */
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
  }

.Video .conteudo {
    height: 100%;
    width: 100%;
    background-color: #33333380;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 54px;
}

.conteudo h1 {
  font-size: 2.5em;
  color: #fff;
  font-weight: bolder;
  margin-bottom: 40px;
}

.conteudo h2 {
  font-size: 1.5em;
  color: #fff;
  font-weight: 500;
  margin-bottom:40px;
}

.torneProdutividade {
  background-color: #F38342;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
}

  /* Frase diga adeu as comandas de papel */
  .Frase {
    width: 100%;
    height: 280px;
    background-color: #005A8D;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: "Roboto", sans-serif;
    flex-direction: column;
    gap: 30px;
  }

  h1{
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 6px;
  }

p{
    text-align: center;
    font-size: 29px;
}


/*Simplificando suas entregas*/
.solution-description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 76px;
    margin-bottom: 100px;
  }

  .simplificando{
    font-size: 42px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    margin-top: 20px;
  }

  .um{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
  }

.imgNotebook {
  width: 95%;
  max-width: 700px;
}

  /* App.css */
.app-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .solution-description h2 {
    color: #333;
    text-align: center;
  }
  
  .solution-description .highlight {
    color: #F38342;
  }
  
  .solution-description p {
    color: #555;
    line-height: 1.6;
    text-align: center;
    font-size: 20px;
    width: 100%;
    max-width: 674px;
  }
  
  .dois{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }


  #avaliacoes{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 0;
  }

  #avaliacoes .avaliacao{
    width: 80%;
    max-width: 900px;
    padding: 20px 80px;
    color: #fff;
    font-family: "Poppins";
    background-color: #005A8D;
    border-radius: 20px;
  }

  .avaliacao p{
    font-size: 1.6em;
  }

  .avaliacao > div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    margin-top: 50px;
  }

  .avaliacao > div img{
    border-radius: 50%;
  }

  .avaliacao div div{
    display: flex;
    flex-direction: column;
  }

  .starB{color: #000;}
  .starW{color: #fff;}

  /*Funcionalidades*/
  .Funcionalidades {
    width: 100%;
    padding: 20px;
    background-color: #F3F0ED;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 90px;
    text-align: center;
  }

  .Funcionalidades p {
    font-size: 14px;
    font-weight: bold;
    color: #F38342;
  }

  .Funcionalidades h1 {
    font-size: 40px;
    font-weight: 300;
    color: #F38342;
  }

  .Func {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 100px;
  }

  .facilUsabilidade { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .usabilidade {
    background-image: url('/images/icons/usabilidade.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
  }

  .gestaoSimplificada { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .gestao {
    background-image: url('/images/icons/gestao-da-informacao.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
  }

  .gerenciamentoComandas { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .Comandas {
    background-image: url('/images/icons/fatura.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
  }

  .Financeiro { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .educacao {
    background-image: url('/images/icons/cofrinho.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
  }


  /*Pagamentos*/
  .NossosPlanos {
    background-color: #ECF3FB;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    padding: 25px;
  }

  .NossosPlanos h1 {
    font-size: 52px;
    font-family: "Roboto", sans-serif;
    color: #333;
    text-align: center;
  }

  .TiposPlanos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
  }

  .TiposPlanos p:first-of-type{
    font-size: 1.2em;
    padding: 10px;
  }


  /* DESPERTE*/

  .Desperte {
    width: 279px;
    height: 400px;
    padding: 4px;
    border-radius: 15px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #000;
    background-image: linear-gradient(to top, #005A8D, #F38342);
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 0;
}

.Desperte:nth-of-type(3){
  background-image: linear-gradient(to bottom, #005A8D, #F38342);
}

.Desperte > div{
  position: relative;
  z-index: 2;
}

.Desperte:nth-of-type(3) > div{
  position: relative;
  top: -15px;
}

.Desperte:nth-of-type(3)::before{
  content: "Best seller";
  position: relative;
  width: 200px;
  height: 15px;
  left: 25px;
  top: -10px;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  border-radius: 0 0 17px 17px;
  background-color: #005A8D;
  z-index: 3;
}

.Desperte::after{
  content: "";
  position: absolute;
  display: block;
  width: 231px;
  height: 350px;
  border-radius: 15px;
  padding: 20px;
  background-color: #ffffff;
  z-index: 0;
}

.tituloCard {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #474747;
}

.conteudoPlano {
    font-size: 15px;
    color: #666666;
    margin-bottom: 20px;
}

.precoVelho {
    text-decoration: line-through;
    color: #ff0000;
    font-size: 16px;
    margin-right: 90px;
}

.precoNovo {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 20px;
}

.buttonCard {
  background-color: #F38342;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.buttonCard:hover {
    background-color: #e6692e;
}



/* Footer */

/* Add these styles to your existing styles.css file */

footer {
  display: flex;
  flex-direction: column;
  font-family: "Biryani";
}

footer .branco{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;
  background-color: #fff;
}

footer > .branco img{
  max-width: 200px;
}

footer > .branco a{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  color: #005A8D;
  font-weight: bold;
}

footer > .branco a:hover{
  color: #e6692e;
}

footer > .branco div{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
}

footer > .azul{
  display: flex;
  justify-content: space-between;
}

footer > .azul{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #fff;
  padding: 5px 20px;
  background-color: #005A8D;
}

footer > .azul span{
  padding: 5px;
  display: flex;
  gap: 100px;
}

footer > .azul span a{
  font-size: 1.1em;
  color: #fff;
}

footer > .azul span a:hover{
  color: #e6692e;
}


footer > .azul span p{
  font-size: 1.1em;
}

@media screen and (min-width: 1070px) { 
  footer > .branco div{
    gap: 30px;
    flex-direction: row;
  }
}

@media screen and (min-width: 880px) { 
  footer > .azul{
    justify-content: space-between;
    padding: 5px 20px;
  }
}
`;function _x(){const e=()=>window.scrollTo(0,3400),t=Dt(),i=n=>{const o=n.target;let s=0;o.classList[1]==1?s=119.9:o.classList[1]==2?s=219.9:o.classList[1]==3?s=269.9:s=539.9,localStorage.setItem("Plano",s),t("/pagamento")};return r.jsxs(Yx,{children:[r.jsx(Je,{}),r.jsxs("div",{className:"container",children:[r.jsx("div",{className:"nav-bar",children:r.jsxs("nav",{children:[r.jsx("img",{src:Wr,alt:"Logo VEL",style:{width:"65px",borderRadius:"10px"}}),r.jsxs("ul",{className:"ul",children:[r.jsx("li",{children:r.jsx("a",{onClick:()=>t("/sobrenosen"),style:{cursor:"pointer"},children:"About"})}),r.jsx("li",{className:"pointer",onClick:e,children:r.jsx("a",{children:"Our Plans"})}),r.jsx("li",{children:r.jsx("a",{onClick:()=>t("/"),style:{cursor:"pointer"},className:"idioma",children:r.jsx("img",{src:Hx,alt:"Portuguese Logo",style:{width:"35px"}})})}),r.jsx("li",{children:r.jsx("a",{onClick:()=>t("/login"),children:r.jsx("button",{className:"Login",children:"Login"})})}),r.jsxs("button",{className:"Cadastro",onClick:e,children:["Get Started",r.jsxs("div",{className:"arrow-wrapper",children:[" ",r.jsx("div",{className:"arrow"})]})]})]})]})}),r.jsx("div",{className:"Video",children:r.jsxs("div",{className:"conteudo",children:[r.jsxs("h1",{children:["Simplifying delivery management ",r.jsx("br",{})," for you"]}),r.jsx("h2",{children:"Discover the secret to more efficient and profitable deliveries!"}),r.jsx("button",{onClick:e,className:"torneProdutividade",children:"Boost your productivity by 3X"})]})}),r.jsxs("div",{className:"Frase",children:[r.jsx("h1",{children:"SAY GOODBYE TO PAPER ORDERS!"}),r.jsx("p",{children:"With VEL, you digitize your orders and eliminate the need for printing. This means less paper, lower costs, and a more sustainable environment."})]}),r.jsxs("div",{className:"solution-description",children:[r.jsx("h1",{className:"simplificando",children:"Simplifying Your Delivery Management"}),r.jsxs("div",{className:"um",children:[r.jsx("img",{src:qp,alt:"Celular",className:"imgNotebook"}),r.jsxs("div",{className:"dois",children:[r.jsxs("h2",{children:["The Complete Solution for ",r.jsx("span",{className:"highlight",children:"Restaurants"})," and ",r.jsx("br",{})," ",r.jsx("span",{className:"highlight",children:"Courier Companies"})]}),r.jsx("p",{children:"Say goodbye to delivery management complications and adopt a platform that transforms the relationship between restaurants, courier companies, and their couriers. Developed to provide efficiency, transparency, and security, our digital solution offers an integrated view of your entire workflow and finances, all in one place."}),r.jsx("p",{children:"Leave spreadsheets in the past and step into the future of delivery management, with all the practicality and reliability you need to take your business to the next level."})]})]})]}),r.jsxs("div",{className:"Funcionalidades",children:[r.jsx("h1",{children:"We Offer Features Like"}),r.jsxs("div",{className:"Func",children:[r.jsxs("div",{className:"facilUsabilidade",children:[r.jsx("div",{className:"usabilidade"}),r.jsxs("p",{children:["EASY ",r.jsx("br",{})," USABILITY"]})]}),r.jsxs("div",{className:"gestaoSimplificada",children:[r.jsx("div",{className:"gestao"}),r.jsxs("p",{children:["SIMPLIFIED ",r.jsx("br",{})," MANAGEMENT"]})]}),r.jsxs("div",{className:"gerenciamentoComandas",children:[r.jsx("div",{className:"Comandas"}),r.jsxs("p",{children:["DIGITAL ORDER ",r.jsx("br",{})," MANAGEMENT"]})]}),r.jsxs("div",{className:"Financeiro",children:[r.jsx("div",{className:"educacao"}),r.jsxs("p",{children:["ACCESS TO FINANCIAL ",r.jsx("br",{})," EDUCATION FOR COURIERS"]})]})]})]}),r.jsx("div",{id:"avaliacoes",children:r.jsxs("div",{className:"avaliacao",children:[r.jsx("p",{children:'"I love it! Now I can organize my deliveries and couriers in a much more organized way using the VEL platform! I have no regrets at all about signing the contract."'}),r.jsxs("div",{children:[r.jsx("img",{src:Kp,alt:"Profile Image"}),r.jsxs("div",{children:[r.jsx("span",{children:"Johny Ownes"}),r.jsxs("span",{children:[r.jsx(ni,{className:"starW"}),r.jsx(ni,{className:"starW"}),r.jsx(ni,{className:"starW"}),r.jsx(ni,{className:"starW"}),r.jsx(ni,{className:"starB"})]})]})]})]})}),r.jsxs("div",{className:"NossosPlanos",children:[r.jsxs("h1",{children:["We have the ",r.jsx("span",{className:"blue",children:"perfect plan"})," for your ",r.jsx("span",{className:"blue",children:"company"}),"!"]}),r.jsx("p",{children:"Start simplifying your company management now"}),r.jsxs("div",{className:"TiposPlanos",children:[r.jsx("div",{className:"Desperte",children:r.jsxs("div",{children:[r.jsx("h2",{className:"tituloCard",children:"Awaken"}),r.jsx("p",{className:"conteudoPlano",children:" Access our entire platform and register up to 10 couriers"}),r.jsx("p",{className:"precoVelho",children:"R$ 149,90"}),r.jsx("p",{className:"precoNovo",children:"R$ 119,90/month"}),r.jsx("button",{onClick:i,className:"buttonCard 1",children:"Start for free"})]})}),r.jsx("div",{className:"Desperte",children:r.jsxs("div",{children:[r.jsx("h2",{className:"tituloCard",children:"Conquer"}),r.jsx("p",{className:"conteudoPlano",children:" Access our entire platform and register up to 30 couriers"}),r.jsx("p",{className:"precoVelho",children:"R$ 279,90"}),r.jsx("p",{className:"precoNovo",children:"R$ 219,90/month"}),r.jsx("button",{onClick:i,className:"buttonCard 2",children:"Start for free"})]})}),r.jsx("div",{className:"Desperte",children:r.jsxs("div",{children:[r.jsx("h2",{className:"tituloCard",children:"Dominate"}),r.jsx("p",{className:"conteudoPlano",children:" Access our entire platform and register up to 60 couriers"}),r.jsx("p",{className:"precoVelho",children:"R$ 339,90"}),r.jsx("p",{className:"precoNovo",children:"R$ 269,90/month"}),r.jsx("button",{onClick:i,className:"buttonCard 3",children:"Start for free"})]})}),r.jsx("div",{className:"Desperte",children:r.jsxs("div",{children:[r.jsx("h2",{className:"tituloCard",children:"Transform"}),r.jsx("p",{className:"conteudoPlano",children:" Access our entire platform and register unlimited couriers "}),r.jsx("p",{className:"precoVelho",children:"R$ 669,90"}),r.jsx("p",{className:"precoNovo",children:"R$ 539,90/month"}),r.jsx("button",{onClick:i,className:"buttonCard 4",children:"Start for free"})]})})]})]}),r.jsxs("footer",{children:[r.jsxs("div",{className:"branco",children:[r.jsx("img",{src:Wr,alt:"Icone da empresa"}),r.jsxs("div",{className:"icones",children:[r.jsxs("a",{href:"https://www.linkedin.com/company/vel-br",target:"_blank",children:[" ",r.jsx("img",{src:tf,alt:""}),"linkedin.com/company/vel-br/"]}),r.jsxs("a",{href:"https://www.instagram.com/vel_proa/",target:"_blank",children:[" ",r.jsx("img",{src:nf,alt:""}),"@vel_proa"]}),r.jsxs("a",{href:"https://github.com/VELPR0A",target:"_blank",children:[" ",r.jsx("img",{src:rf,alt:""}),"github.com/VELPR0A"]}),r.jsxs("a",{href:"#",target:"_blank",children:[" ",r.jsx("img",{src:of,alt:""}),"virtualeasylog@gmail.com"]})]})]}),r.jsxs("div",{className:"azul",children:[r.jsx("span",{children:r.jsx("p",{children:"© 2024 VEL. All rights reserved."})}),r.jsxs("span",{children:[r.jsx("a",{href:"#",children:"Terms of use"}),r.jsx("a",{href:"#",children:"Privacy Policy"})]})]})]})]})]})}function Xx(e){return Qe({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"},child:[]}]})(e)}function Qx(e){return Qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.76C231.1-7.586 280.3-7.586 310.6 22.76L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.78L22.76 310.6C-7.586 280.3-7.586 231.1 22.76 200.8L80.78 142.7H112.6z"},child:[]}]})(e)}function bh(e){return Qe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"},child:[]}]})(e)}function qx(e){return Qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Discount_1"},child:[{tag:"path",attr:{d:"M21.953,12c0,0.591 -0.346,1.124 -0.839,1.61c-0.295,0.29 -0.639,0.568 -0.942,0.85c-0.242,0.225 -0.46,0.446 -0.562,0.692c-0.107,0.257 -0.114,0.576 -0.105,0.913c0.011,0.416 0.056,0.855 0.059,1.265c0.006,0.691 -0.123,1.304 -0.526,1.708c-0.404,0.403 -1.017,0.532 -1.708,0.526c-0.41,-0.004 -0.849,-0.048 -1.264,-0.059c-0.337,-0.009 -0.657,-0.002 -0.914,0.105c-0.246,0.102 -0.467,0.32 -0.692,0.562c-0.282,0.303 -0.56,0.647 -0.85,0.941c-0.486,0.494 -1.019,0.84 -1.61,0.84c-0.591,-0 -1.124,-0.346 -1.61,-0.84c-0.29,-0.294 -0.568,-0.638 -0.85,-0.941c-0.225,-0.242 -0.447,-0.46 -0.692,-0.562c-0.257,-0.107 -0.577,-0.114 -0.913,-0.105c-0.416,0.011 -0.855,0.055 -1.265,0.059c-0.691,0.006 -1.305,-0.123 -1.708,-0.526c-0.404,-0.404 -0.532,-1.017 -0.526,-1.708c0.003,-0.41 0.048,-0.849 0.059,-1.265c0.009,-0.337 0.002,-0.656 -0.105,-0.914c-0.102,-0.245 -0.32,-0.466 -0.562,-0.691c-0.302,-0.282 -0.646,-0.56 -0.941,-0.85c-0.493,-0.486 -0.84,-1.019 -0.84,-1.61c0,-0.591 0.347,-1.124 0.84,-1.61c0.295,-0.29 0.639,-0.568 0.941,-0.85c0.242,-0.225 0.46,-0.446 0.562,-0.691c0.107,-0.258 0.114,-0.577 0.105,-0.914c-0.011,-0.416 -0.056,-0.855 -0.059,-1.265c-0.006,-0.691 0.122,-1.304 0.526,-1.708c0.403,-0.403 1.017,-0.532 1.708,-0.526c0.41,0.004 0.849,0.048 1.265,0.059c0.336,0.009 0.656,0.002 0.913,-0.105c0.245,-0.102 0.467,-0.32 0.692,-0.562c0.282,-0.303 0.56,-0.647 0.85,-0.941c0.486,-0.494 1.019,-0.84 1.61,-0.84c0.591,0 1.124,0.346 1.61,0.84c0.29,0.294 0.568,0.638 0.85,0.941c0.225,0.242 0.446,0.46 0.692,0.562c0.257,0.107 0.577,0.114 0.914,0.105c0.415,-0.011 0.854,-0.055 1.264,-0.059c0.691,-0.006 1.304,0.123 1.708,0.526c0.403,0.404 0.532,1.017 0.526,1.708c-0.003,0.41 -0.048,0.849 -0.059,1.265c-0.009,0.337 -0.002,0.656 0.105,0.913c0.102,0.246 0.32,0.467 0.562,0.692c0.303,0.282 0.647,0.56 0.942,0.85c0.493,0.486 0.839,1.019 0.839,1.61Zm-1,0c0,-0.188 -0.088,-0.355 -0.206,-0.518c-0.164,-0.226 -0.388,-0.437 -0.622,-0.646c-0.583,-0.521 -1.205,-1.04 -1.439,-1.604c-0.242,-0.585 -0.177,-1.399 -0.136,-2.178c0.017,-0.315 0.027,-0.622 -0.015,-0.895c-0.029,-0.191 -0.08,-0.365 -0.204,-0.489c-0.125,-0.125 -0.299,-0.176 -0.49,-0.205c-0.273,-0.042 -0.58,-0.032 -0.895,-0.015c-0.779,0.041 -1.593,0.106 -2.177,-0.136c-0.565,-0.234 -1.084,-0.855 -1.605,-1.439c-0.209,-0.234 -0.42,-0.458 -0.646,-0.622c-0.163,-0.118 -0.33,-0.206 -0.518,-0.206c-0.187,0 -0.355,0.088 -0.518,0.206c-0.226,0.164 -0.437,0.388 -0.646,0.622c-0.521,0.584 -1.04,1.205 -1.605,1.439c-0.584,0.242 -1.398,0.177 -2.177,0.136c-0.315,-0.017 -0.622,-0.027 -0.895,0.015c-0.192,0.029 -0.365,0.08 -0.49,0.205c-0.125,0.124 -0.175,0.298 -0.204,0.489c-0.042,0.273 -0.032,0.58 -0.016,0.895c0.042,0.779 0.107,1.593 -0.135,2.177c-0.234,0.565 -0.855,1.084 -1.439,1.605c-0.234,0.209 -0.458,0.42 -0.622,0.646c-0.118,0.163 -0.206,0.33 -0.206,0.518c0,0.188 0.088,0.355 0.206,0.518c0.164,0.226 0.388,0.437 0.622,0.646c0.584,0.521 1.205,1.04 1.439,1.605c0.242,0.584 0.177,1.398 0.135,2.177c-0.016,0.315 -0.026,0.622 0.016,0.895c0.029,0.191 0.079,0.365 0.204,0.489c0.125,0.125 0.298,0.176 0.49,0.205c0.273,0.042 0.58,0.032 0.895,0.015c0.779,-0.041 1.593,-0.106 2.177,0.136c0.565,0.234 1.084,0.855 1.605,1.439c0.209,0.234 0.42,0.458 0.646,0.622c0.163,0.118 0.331,0.206 0.518,0.206c0.188,-0 0.355,-0.088 0.518,-0.206c0.226,-0.164 0.437,-0.388 0.646,-0.622c0.521,-0.584 1.04,-1.205 1.605,-1.439c0.584,-0.242 1.398,-0.177 2.177,-0.136c0.315,0.017 0.622,0.027 0.895,-0.015c0.191,-0.029 0.365,-0.08 0.49,-0.205c0.124,-0.124 0.175,-0.298 0.204,-0.489c0.042,-0.273 0.032,-0.58 0.015,-0.895c-0.041,-0.779 -0.106,-1.593 0.136,-2.178c0.234,-0.564 0.856,-1.083 1.439,-1.604c0.234,-0.209 0.458,-0.42 0.622,-0.646c0.118,-0.163 0.206,-0.33 0.206,-0.518Zm-10.531,-1.762c-0.396,0.396 -1.039,0.396 -1.435,-0c-0.396,-0.396 -0.396,-1.04 -0,-1.436c0.396,-0.396 1.039,-0.396 1.435,0c0.396,0.396 0.396,1.04 0,1.436Zm4.471,-1.838c0.195,-0.195 0.512,-0.195 0.707,0c0.195,0.195 0.195,0.512 -0,0.707l-6.493,6.493c-0.195,0.195 -0.512,0.195 -0.707,0c-0.195,-0.195 -0.195,-0.512 -0,-0.707l6.493,-6.493Zm-1.315,5.363c0.396,-0.396 1.039,-0.396 1.435,0c0.396,0.396 0.396,1.04 0,1.436c-0.396,0.396 -1.039,0.396 -1.435,-0c-0.397,-0.396 -0.397,-1.04 -0,-1.436Z"},child:[]}]}]})(e)}function $r(e,t){return{method:e,body:JSON.stringify(t),headers:{Accept:"application/json","Content-Type":"application/json"}}}function Kx({valorPlano:e}){const t=({icone:n,titulo:o,texto:s})=>r.jsxs("button",{children:[n,r.jsx("h3",{children:o}),r.jsx("p",{children:s})]}),i=n=>{const o={RazaoSocial:document.querySelector("#IRazaoSocial").value,CNPJ:document.querySelector("#ICNPJ").value,Email:document.querySelector("#IEmail").value,Tel:document.querySelector("#ITelefone").value,Cupom:document.querySelector("#ICupom").value,Valor:e};if(o.RazaoSocial.length<=1||o.CNPJ.length<=1||o.Email.length<=1||o.Tel.length<=1||o.Valor.length<=1)return alert("Preencha todos os campos!");fetch("<URL AQUI>",$r("POST",o)).then(s=>s.json()).then(s=>s.data?(alert("Pagamento confirmado! Seu comprovante e senha serão enviados por email. "),window.location="/pages/paginaLogin.html"):alert("Erro na validação do pagamento!")).catch(s=>alert("Erro ao fazer a requisição!"))};return r.jsxs("div",{className:"container",children:[r.jsx("nav",{children:r.jsx("img",{src:Wr,alt:"Logo da empresa"})}),r.jsxs("main",{children:[r.jsxs("article",{children:[r.jsxs("form",{target:"#",children:[r.jsxs("h2",{children:["Complete seu cadastro na ",r.jsx("span",{className:"laranja",children:"VEL"})]}),r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"IRazaoSocial",children:"Razão Social"}),r.jsx("input",{type:"text",name:"RazaoSocial",id:"IRazaoSocial"})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"ICNPJ",children:"CNPJ"}),r.jsx("input",{required:!0,minLength:14,type:"number",name:"CNPJ",id:"ICNPJ"})]})]}),r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"IEmail",children:"Email"}),r.jsx("input",{autoComplete:"on",required:!0,type:"email",name:"Email",id:"IEmail"})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"ITelefone",children:"Telefone"}),r.jsx("input",{autoComplete:"on",required:!0,minLength:11,type:"tel",name:"Telefone",id:"ITelefone",placeholder:"0 0000-0000"})]})]}),r.jsx("div",{children:r.jsxs("div",{children:[r.jsxs("label",{htmlFor:"ICupom",children:[r.jsx(qx,{}),"Possui algum cupom ?"]}),r.jsxs("div",{children:[r.jsx("input",{type:"text",name:"Cupom",id:"ICupom",placeholder:"porTodaVel60"}),r.jsx("input",{type:"button",value:"REMOVER"})]})]})})]})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"Como será o pagamento ?"}),r.jsx(t,{icone:r.jsx(bh,{}),titulo:"Cartão de Crédito",texto:"até 12x"}),r.jsx(t,{icone:r.jsx(Xx,{}),titulo:"PayPal",texto:"até 12x"}),r.jsx(t,{icone:r.jsx(Qx,{}),titulo:"Pix",texto:"à vista"}),r.jsx(t,{icone:r.jsx(bh,{}),titulo:"Cartão de Débito",texto:"à vista"})]}),r.jsxs("footer",{children:[r.jsx("hr",{}),r.jsxs("p",{children:[r.jsx(U1,{})," Nós da Virtual Easy Log estamos comprometidos em oferecer uma ótima experiência. Por isso oferecemos uma garantia de 7 dias ou seu dinheiro de volta."]})]})]}),r.jsxs("aside",{children:[r.jsx("h2",{children:"Resumo"}),r.jsxs("p",{children:[r.jsx("span",{children:"Subtotal"})," ",r.jsxs("span",{children:["R$ ",e,"/mês"]})]}),r.jsxs("p",{children:[r.jsx("span",{children:"TOTAL"})," ",r.jsxs("span",{children:[r.jsxs("strong",{children:["R$ ",e]})," ",r.jsx("br",{})," em 12x de R$ ",(e/12).toFixed(2)]})]}),r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx("h4",{children:"TRANSFORME"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx(ah,{})," Acesso a toda nossa plataforma"]}),r.jsxs("li",{children:[r.jsx(ah,{})," Cadastro ilimitado de entregadores"]})]})]}),r.jsx("input",{type:"submit",onClick:i,value:"CONFIRMAR PAGAMENTO"}),r.jsx("p",{children:"Ao preencher o formulário você permite que a Virtual Easy Log salve suas informações."})]})]})]})]})}const Zx=ot.div.attrs({className:"container"})`
@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.container{ 
    min-height: 100vh;
    width: 100%;
    background-color: #ECF3FB; 
    font-family: "Roboto";
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.container *{
    margin: 0;
    padding: 0;
}

nav > img{
    width: 100px;
}

.laranja{ color: #F38342 }

.container main{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 10px;
}

form h2{
    width: 100%;
    font-size: 2em;
    font-family: "Biryani";
}

form > div{
    width: 100%;
}

form > div > div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 98%;
}

form > div > div > div{
    display: flex;
    flex-direction: column;
    width: 48%;
}

form > div > div:last-of-type > div{
    width: 99%;
}

form > div > div:last-of-type > div div{
    display: flex;
}

.container form > div > div:last-of-type > div div input[type=button]{
    width: 40%;
    max-width: 150px;
    margin-left: 10px;
    color: #fff;
    font-size: 0.9em;
    background-color: #F38342;
}

.container form div input{
    width: 100%;
    padding: 10px;
    margin: 10px 0px;
    background-color: #ECF3FB;
    border: 1px solid #000;
    border-radius: 5px;
}

.container form svg{
    font-size: 1.5em;
    vertical-align: middle;
    margin-right: 10px;
}

section{
    text-align: center;
}

section h2{
    font-size: 24px;
    text-align: left;
}

.container section > button{
    display: inline-block;
    background-color: #CADBDE;
    padding: 20px;
    width: 200px;
    margin: 10px;
    text-align: left;
    border: 0;
    border-radius: 5px;
}

section > button svg{
    font-size: 1.4em;
    color: #F38342;
}

.container section > button h3{
    margin: 10px 0;
    color: #333333;
    font-weight: 500;
    font-size: 1em;
}

section > button p{
    color: #222222;
    font-size: 0.9em;
}

aside{
    width: 100%;
}

aside h2{
    font-family: "Biryani", sans-serif;
    font-size: 1.5em;
}

aside > p:first-of-type{
    font-size: 1em;
    border-bottom: 3px solid #082D3D;
}

aside > p:first-of-type span:last-of-type{
    float: right;
}

.container aside > p:last-of-type{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3em;
    margin: 20px 0;
}

aside > p:last-of-type span:last-of-type strong{
    font-size: 1.4em;
}

aside > div{
    text-align: center;
}

.container aside > div > div{
    width: 94%;
    margin: auto;
    padding: 20px;
    text-align: left;
    background-color: #E8E8E8;
    border: 1px solid #000;
    border-radius: 5px;
}

aside > div > div h4{
    font-size: 2em;
}

.container aside > div > div ul{
    list-style-type: none;
    margin: 15px 0;
}

.container aside > div > div li{
    margin: 10px 0;
}

aside > div > div li svg{
    color: #F38342;
}

.container aside > div > input[type=submit]{
    background-color: #F38342;
    margin: 20px 0;
    padding: 15px;
    width: 95%;
    font-size: 1.6em;
    font-weight: bold;
    color: #fff;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
}

.container footer{
    padding: 10px;
}

.container footer > p{
    display: flex;
    margin: 20px 0;
}

.container footer > p svg{
    font-size: 1.2em;
    margin: 0 5px;
}

@media screen and (min-width: 1000px) {
    .container{
        display: flex;
        align-items: center;
        overflow: hidden;
        align-items: flex-start;
    }
    
    .container main{
        flex-direction: row;
        width: 98vw;
        justify-content: space-around;
    }

    .container main article{
        padding: 20px;
        max-width: 1000px;
    }

    .container main form > div{
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .container section h2{
        margin: 30px 0 !important;
    }

    .container form > div > div:last-of-type input[type=text]{
        max-width: 460px;
    }

    .container main aside{
        max-width: 500px;
    }
}
`;function Jx(){return Dt(),r.jsxs(Zx,{children:[r.jsx(Je,{}),r.jsx(Kx,{valorPlano:localStorage.getItem("Plano")})]})}const Lf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQCSURBVHgB7ZvrcdpAEMf/ZPw9LuE6iEtQCe7ASgUhFZhUYFIBdAAdQCqAVIBSwbmDy92wslZnvU7osRrxm7nBGO60Xu3r9mRACAa40HjEnStWGcoOQ0NBAF9wp5C7Ykq4K6aEB8jgnQbY6x2Hy0aTzEhSskVbelG8XfCZUulhigqyMr+S/N3WSXaxiNUZl6koh6xkx2Tf9WU1mi7gXp8hGCoaT0wpq5D5i5Avk6UckFnMT7vAGoHYdZ6Qja/4bIGJHf/sOLuxuL4PvcaJ1n8nObfoEzLPrR1JiNWQO26Y1YUMd+fXpNCm11vZsQ+ZwwmymFDIn3/YsUTet91d/IurRST0PqHPHmkoOyI7vnlz3ZzfvVtAX1Am0N5dd3cxQiBkbVvPilwSiDEVCoLesY0yKtZeeQraiM+SVsAXZiWdKaTgOopqKvklhMmKqODUeMM1ufXotoG2N6xASyZgjAFx1xOpHCfIWErxZNBi3Ip8/TKk+1TIwi3ngDGxAryldwkCoCJwVOsV2cB2MAse52axjLCHIEy+ExBhaNidEbfLZoF42JvG3EhDICzWtJav7SlBWiv8gUyO9PrYNv490A64sChaZBfwUZ4A0jiznxVa9HPc8ckJJVp1O1qrnO8FH6VtgATyUUW/pHS+KZmTOMX8Qrm51QUvqWdAfu+nCGdVZaFg/9Cy4ZPQq4JMahWzuComQgltg29SIIAkeMw8YyjMNdrr0fckJbBezQlDQ41mY4RZjbdViTE0rPReQRDeLlthDMhktZRNJLl4ulXZYCyY1YiINSZ/Rq0wJmxf8ooR8XbVMSTAssALRsDrJAYfGfcGE2zwZrSnFHmPw5KAeshg7AVb0WdL0ZBCMheWq5QUVkf0KixvxItXSgpTzqkPn2dpWdbpI8WTyudVWLP8gG6vzY+Cn2tkjDEUFEd0k9TIldOFuXu1yqrmu9u0Au7d1Uz+jLpRvWCyhwNvSqVeWj42/P6p9zjkmfAyYB5PqTu0xFOwCpi3ZvEoRpeY7ODeLR4hEHKBYxvBSLFvTeJKxRorNr/bYE1uNEgGIDd4NfmHg2rjSs2aTyGWLgayqjVzO/6o2tLIbaN2C7lIbD4/4up+3tNns1FGVOIiCVlLNBtlpJj8syuauYhqMDeiAFr73clBwa+RVVS4mZxey1BUuJmeVQAmq0gzkS5QxnxiDtUnS5OdLnBlnE3LR+onjcmf9/g1isJcYduCbUiNwqxsNztr4nixx6+CY8wJUkZqFbrA3eYTe2rSc5C7TR76Y4vS88eWAHOjICulLlLbyjBT/S/+Jpisgd6ogi2oeRTmSkU2ml6D6RYqNos8EAe3MieJ5yKmZGiKP7Pq2i0p8Ppdu7OkjeN/ziSp/ewvckcAAAAASUVORK5CYII=",Df="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAcCAYAAADcO8kVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANPSURBVHgB5ViBldowDFXe6wBscN6g6Qa+DbgNGCEbkA2gE8AG3AZhA+gESSdINnDt5psoxnEcSu7g+t/TMzGSLX9LshOiLwxFlGoptCgttZadFhFj+40eANrZhW5SPFaJlkgbicdGyzlpW/u/0M0Bj2/U6m+o7X+lucF2JCQlFjI0Rsn0xMh8aWDOS0ToVqIvd32lj4CeZavl6JGaOZwG7NdMT47MtXSIMPPs0fJNEGYj4INNoQP+f6fPgp48Y45mAT3J9PKRMUUosvTzim1GwWyOTo1Z0GcAztRji3UXGjHuipG4HNDJY6PvQ+Estg7VC6SAXcQBUiA1pUe/GCMR89sxt/Qo0M6c1HVB3Hj0Vmq8YBecWP27snVlxAcbrTuaGyhkGZzNAjqSScaip3B0OYG5zXuMwdOhYDZTiTmyPuuToH8FwnKt+hekyyIix5Buzjvhvhuw4+Sk6LPEnEbmvBobc+6xhhJpu5pEFAw4Gd6ch+5ibDd4ZOCZk7UasOHH8hJ9vCYtBuxixpbOWMWQrjXIWBiWeA5Gh7P7h8gFCl+qOHZ7T8TwRW8G7KIKP/Mjd9YsuMJC9W+ShZqWLtx2Z6PHJXrEJmXObnzp4CGMz7V0xswpEqp/khpZ2z+4I7WaeAHyDOxKfyfibP4WT58vqk3tkF1GE6GuT8ksMWRQ54B5EftBNwCpYkSgq9LyngSu4Mhta3PxQcs2CZw+INoQYF81GmbX0HTfJfXTuuHH282MPztU9x51ifKh0Nype5z5Dw6k9MGz/txXfLmc1NTz/j7OCpoJqrt8FlE1CgSUgaJWYEBJMwKOl/cgR3X3rC38r0eKfRoabKX63zd8UqvuhS/D5Hd5nVfdfWUSOYyEDKVg7NTjhEh3vCQwkaA2rIzRd4qHOR0ayG+0FXWfK4OfLnFS7ayullefPhZj5AWtoDgYf35Re1ruh06xhCIAkiTEhNsUokKoPH3CeTaOG3LOzB9JA7dmDywRxt6QcY450qOIcaG6j9dGBBOze3N9IXuzdyJsVOn8b6PzDKmoJaGiG3ATMSGANCMCXcL57WtfKIyfWnK705jDXAwrSHPLxe5poLrvPv/1hdML1b2R13NfDZ4K97zHfCkgneYq4NH4A7LCit2JZOYpAAAAAElFTkSuQmCC",Of="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAV6SURBVHgB5VyLkaM4EO3JwCGQwTkEMjhnMITgDEwG6wzsDDwZDBl4M2AuAiaDd2jcOhpZIAmJj/delcpbg76P/qkl9o3+BwBR1v7s6fH7V1t2/O+dKBrfbfl4oz8MeCxSkXCgBwnq37vQfv4IYpiMoi1/0zMRSgL+actvLt/i9/vt8Sv7aeiVoRbRlmNbPtsCUZq2XNtSsAqF9vvTD70a2hnnbTkzAZqMqi2lekaReDlimJBPQzLOKcgwxnkNYiyE1KxCwQbVY6ydHoO2CmUf2nIzCCloRvCYaqw7bRHtxE7ChsxOiBg31zaLtgSeWC1sSDmHyoyMf+CxP2grYLshvUxGC0PM4Uxrg/X6U0jJ0aPNjtvtUxLIXg4+c5gVvDCtOvexRY4EdLp8Tg3qxBi675zWQjv4uzCwZ0ddaXtkHPNlIWiysRbzWcyumRM4iYUcA+pWLDWZUWfP0iLJ+0Vhc9qvGsOIhTYukTXqeuk9ezJNzoU8wcSu45HEQtWb3Tvq5oKUPQVALBIBhF5D6ieDQUrmUV+rRUETIDxM42MzxHhBLyEK6OKDxpOUQ6gqDPSjF1s66i1vX8Sg3iqh9DyF2xQvpPasF/UiQiaWibfmrbvcJjqThm5TOOqC8Yihlolf8AjIvETZ0i7ZRg5dbLIfeJ4tqkYqjuABb4HtspRijS4IzAeeXxdTI+EuvTyQ0XaXMp7wIGYZb2TYlUmDsfhHi7Yg2WpjxAucPzElRLOkiRBeKWrP4lo4uk1jQanAb0MNfNPqIlWIIoAu6i0pAmLhx5ExoiVTk3HC89b/aHihaH3VLhsT0wguO5dEWthuXA0ylFH77/gCXch/oQQQb/QeqlI832ZI6qKlhaXglyBDsV+aE0U/kMooEdDtlO++/fKiNSnXgTrT92HoJ4dGkz+YMRYQ5PzMYYggPJ8/XQfqTbeD6CemzxgPp2eRFmOMAv0klCLgIop8Npi7QT+UKCgE6KcHco/6s0mLZSxFUAWy5nwrOI5bhFkImyvCcybSEznrpwTEKQH88i25kKiMfIEuB1LD39AVS0lLDDBxly8bBrGJJbfrERDqHrShlQ2LgDbrZtU9EWoeZEOtDkG7WayVPA6AsCvhUo1+rHLkzkKSxxltEHBEvz4d1APuT9mPm40s9LfzJwoEG/qMZoJhbKcf0PNCc44D1Jb/9wBZNZN1QP/sxpscJN5TWfqXpFSUGgZZlSFZd64TRA76J4vJM2YGKcGbz5iBNVl78TcvchYmpV6MlDG4yFmAlP0qkuIDg5xc/H1uUt7ReZ9qU6RoMDlf6FKdc5NygiPNsDkYkz5QQqB/PW1anLIGDFIKSggOFRohiTm9AkxStCejSOD5QnSFjUbdT7BJCrp7KieaCPQvRHvfrtoEhtQH/TRpEDl4vpS4HSnhGKFw1JHep7A8L0PIgf3Dipy2AiNG2A3U8XLJLnLQ3eOVEtKg28ResJFo9t3lDg31ccYpNnJg/zCr9x2BkJ6kbj8YPqRwvXpIfUbalAYBMGzIwdKm8SV/NviSwnV3U8TbQk6J8YO0n3q0FkJImdh/xmqh7MYBGzu3GprArKTwGMEJdGGMc1oanoY2p0jAccPJUr8IJTIpxkjhxWivUFAkEHAWhcjb4dFg42e7dbQTC6lhv4CTcZ2kd/ZXl5YhGKRYgzf004kXz36dn9ch5lbC3EB/J+sixTudKNzvx0gdrboVbQl4hN8YemOIyMbD8dE3ph6pzo05SRF9fNk8EwK3GIthCVK4nw+5eJai29jYqwH9S4iF5XkSUrgvnbwq8PwRekFbAhs8NTHbJi4ZKdxfIeyIzLlsR30kMJxzuaYihfvL0N9Vn1P0uzh4IUn/axKWkAobzfL/C0A0U5EtqJ3lAAAAAElFTkSuQmCC",If="/VEL_Desktop/assets/ODS9-DzXKnVX-.png",zf="/VEL_Desktop/assets/ODS08-DwFa5mAv.png",Rf="/VEL_Desktop/assets/ODS11-bMZ9q5ix.png",Bf="/VEL_Desktop/assets/telescopio-Ca2TMDby.webp",Ff="/VEL_Desktop/assets/Diogo-CeMDiSkv.png",Uf="/VEL_Desktop/assets/Elias-C4SnrC3O.png",Gf="/VEL_Desktop/assets/Emilly-CUPSdD4D.png",Vf="/VEL_Desktop/assets/Gabrielle-Cp2K4prU.png",Wf="/VEL_Desktop/assets/Gustavo-BLd62Hyw.png",Hf="/VEL_Desktop/assets/Iago-D3xfcYcZ.png",Yf="/VEL_Desktop/assets/Isabella-BiOKVWfc.png",_f=ot.div.attrs({className:"container"})`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

.container{
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
  background-color: #ECF3FB;
}

.imagem-fundo {
  width: 100vw;
  background-image: url('/images/fotomoto1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}

.transparencia {
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
  background-color: #333333d8;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}

.transparencia .titulo {
color: #fff;
margin-bottom: 25px;
}

.transparencia h1 {
  color: #333;
  font-size: 38px;
  font-weight: bold;
  text-align: center;
}

.MVV {
max-width: 1125px;
display: grid;
grid-template-rows: repeat(2, 50%);
grid-template-columns: repeat(2, 50%);
}

.card li{
width: 100%;
margin: 15px 0;
text-align: left;
font-size: 1.25em;
}

.missao{
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  grid-column: 1 / 1;
  grid-row: 1 / 3;
  margin: 5px;
  padding: 10px;
}

.iconMissao {
  width: 70px;
  height: 70px;
  background-image: url('../../assets/images/icons/Missao.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}

.missao p {
  padding: 40px;
}

.visao{
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 5px;
  gap: 50px;
  padding: 10px;
}

.visao p {
  width: 100%;
}

.valor{
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 50px;
  padding: 10px;
  margin: 5px;
}

.valor p {
  width: 100%;
}

.conteudo{
padding: 20px;
}

.ODS {
  width: 100vw;
  height: 800px;
  background-color: #ecf3fb;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 20px;
}

.ODS h1{
text-align: center;
width: 100%;
padding: 10px;
}

.cardODS {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  max-width: 1200px;
  width: 95%;
  gap: 20px;
  padding: 10px;
}

.cardODS li{
font-size: 1.25em;
margin: 2px 15px;
}

.ODS4{
  width: 30%;
  max-width: 300px;
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  border-radius: 30px;
  box-shadow: 10px 0px 4px 1px #f38342c5;
}

.iconOds04 {
width: 102px;
height: 102px;
}

.ODS8{
  width: 30%;
  max-width: 300px;
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  border-radius: 30px;
  box-shadow: 10px 0px 4px 1px #f38342c5;
}

.ODS11{
  width: 30%;
  max-width: 300px;
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  border-radius: 30px;
  box-shadow: 10px 0px 4px 1px #f38342c5;
}

.ODS11 p,.ODS8 p, .ODS4 p {  
width: 100%;
padding: 10px;
}

.team-section {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 40px;
  background-color: #005A8D;
  padding: 20px;
}

.visaoFuturo{
  display: flex;
  align-items: center;
  max-width: 1200px;
  gap: 50px;
  margin: auto;
}

.visaoFuturo img {
  width: 30%;
}

.visaoFuturo div{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  font-size: 1.25em;
}

.visaoFuturo div h2{
  text-align: center;
  font-size: 2em;
}

.team-section h1 {
  color: #fff;
}


.team-container {
  width: 100vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #005A8D;
}

.team-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  text-align: center;
  width: 200px;
}

.team-avatar {
  position: relative;
  border-radius: 50%;
  height: 100px;
  margin: 0 auto 10px;
  width: 100px;
}

.team-name {
  font-size: 1.2em;
  margin: 10px 0;
}

.team-role {
  color: #666;
  font-size: 0.9em;
  margin: 5px 0 15px;
}

.team-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.team-icon-link {
  color: #333;
  font-size: 1.2em;
}


@media screen and (max-width: 870px){
.MVV {
  display: grid;
  grid-template-rows: repeat(3, 35%);
  grid-template-columns: repeat(3, 100%);
}

.missao{
  grid-column: 1;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 50px;
  padding: 10px;
  margin: 5px;
}

.visao{
  grid-column: 1;
  grid-row: 2;
}

.valor{
  grid-column: 1;
  grid-row: 3;
}

.visaoFuturo{
  flex-direction: column;
}

.visaoFuturo div{
  padding: 10px;
}
}
`,$x=[{name:"Diogo Antonny",role:"Scrum Master | Desenvolvedor Full-stack",github:"https://github.com/DiogoJP202",linkedin:"https://www.linkedin.com/in/diogo-antonny/",img:Ff},{name:"Elias Andrade",role:"Adm de Banco de Dados | Desenvolvedor Back-End",github:"https://github.com/EliasAndrad",linkedin:"https://www.linkedin.com/in/elias-andrade-/",img:Uf},{name:"Emilly Freitas",role:"Desevolvedora Front-end | Designer",github:"https://github.com/EmillyMLFreitas",linkedin:"https://www.linkedin.com/in/emillymlfreitas/",img:Gf},{name:"Gabrielle Correa",role:"Desenvolvedora Front-end | Designer",github:"https://github.com/gabriellecorrea",linkedin:"https://www.linkedin.com/in/gabriellecorrealeme/",img:Vf},{name:"Gustavo Teixeira",role:"Financeiro | Desenvolvedor Front-End",github:"https://github.com/PettaDev",linkedin:"https://www.linkedin.com/in/gustavoteixeira2005/",img:Wf},{name:"Iago Matheus",role:"Desenvolvedor Full-Stack | Designer ",github:"https://github.com/IagoMat",linkedin:"https://www.linkedin.com/in/iagomatheus/",img:Hf},{name:"Isabella Ribas",role:"PO | Desenvolvadora Full stack",github:"https://github.com/Isabella2709",linkedin:"https://www.linkedin.com/in/isabella-ribas-46579b176/",img:Yf}];function ey(){return r.jsxs(_f,{children:[r.jsx(Je,{}),r.jsxs("div",{className:"container",children:[r.jsx("div",{className:"imagem-fundo",children:r.jsxs("div",{className:"transparencia",children:[r.jsx("h1",{className:"titulo",children:" Como te ajudamos nas suas entregas"}),r.jsxs("div",{className:"MVV",children:[r.jsxs("div",{className:"missao card",children:[r.jsx("img",{src:Of,alt:""}),r.jsxs("div",{className:"conteudo",children:[r.jsx("h1",{children:"Nossa Missão"}),r.jsx("li",{children:"Proporcionar uma solução eficiente e transparente para a gestão de entregas."}),r.jsx("li",{children:"Eliminar o uso de papel."}),r.jsx("li",{children:"Garantir remuneração justa e precisa para os entregadores."})]})]}),r.jsxs("div",{className:"visao card",children:[r.jsx("img",{src:Lf,alt:""}),r.jsxs("div",{className:"conteudo",children:[r.jsx("h1",{children:"Nossa Visão"}),r.jsx("li",{children:"Ser a plataforma líder na gestão de entregas."}),r.jsx("li",{children:"Excelência no atendimento às necessidades de restaurantes."}),r.jsx("li",{children:"Excelência no atendimento às necessidades de empresas de entregadores."})]})]}),r.jsxs("div",{className:"valor card",children:[r.jsx("img",{src:Df,alt:""}),r.jsxs("div",{className:"texto",children:[r.jsx("h1",{children:"Nossos Valores"}),r.jsx("li",{children:"Transparência, eficiência e segurança são os pilares da atuação."}),r.jsx("li",{children:"Importância de uma gestão financeira clara."}),r.jsx("li",{children:"Valorização do trabalho dos entregadores."})]})]})]})]})}),r.jsxs("div",{className:"ODS",children:[r.jsx("h1",{children:"O que estamos contribuindo para um desenvolvimento sustentável "}),r.jsxs("div",{className:"cardODS",children:[r.jsxs("div",{className:"ODS4",children:[r.jsx("img",{src:If,alt:"",className:"iconOds04"}),r.jsx("h1",{children:"ODS 09"})]}),r.jsxs("div",{className:"ODS8",children:[r.jsx("img",{src:zf,alt:"",className:"iconOds04"}),r.jsx("h1",{children:"ODS 08"})]}),r.jsxs("div",{className:"ODS11",children:[r.jsx("img",{src:Rf,alt:"",className:"iconOds04"}),r.jsx("h1",{children:"ODS 11"})]})]})]}),r.jsxs("div",{className:"visaoFuturo",children:[r.jsx("img",{src:Bf,alt:"Icone de um telescopio"}),r.jsxs("div",{children:[r.jsx("h2",{children:"Visão de Futuro"}),r.jsx("p",{children:"Quanto ao futuro do nosso projeto, planejamos desenvolver parcerias estratégicas com restaurantes e empresas de motoboys para expandir nossa base de clientes e a presença da nossa plataforma em toda a região de São Paulo."}),r.jsx("p",{children:"Também visamos parcerias com educadores financeiros, assim podemos implementar nosso projeto de finanças pessoais completamente gratuito para os entregadores, que são guerreiros e guerreiras que lutam todos os dias para realizar suas entregas."})]})]}),r.jsxs("div",{className:"team-section",children:[r.jsx("h1",{children:"Nossa Equipe"}),r.jsx("div",{className:"team-container",children:$x.map((e,t)=>r.jsxs("div",{className:"team-card",children:[r.jsx("img",{src:e.img,className:"team-avatar"}),r.jsx("h3",{className:"team-name",children:e.name}),r.jsx("p",{className:"team-role",children:e.role}),r.jsxs("div",{className:"team-icons",children:[r.jsx("a",{className:"team-icon-link",href:e.github,target:"_blank",rel:"noopener noreferrer",children:r.jsx($p,{})}),r.jsx("a",{className:"team-icon-link",href:e.linkedin,target:"_blank",rel:"noopener noreferrer",children:r.jsx(ef,{})})]})]},t))})]})]})]})}const ty=[{name:"Diogo Antonny",role:"Scrum Master | Full-stack Developer",github:"https://github.com/DiogoJP202",linkedin:"https://www.linkedin.com/in/diogo-antonny/",img:Ff},{name:"Elias Andrade",role:"Database Administrator | Back-End Developer",github:"https://github.com/EliasAndrad",linkedin:"https://www.linkedin.com/in/elias-andrade-/",img:Uf},{name:"Emilly Freitas",role:"Front-end Developer | Designer",github:"https://github.com/EmillyMLFreitas",linkedin:"https://www.linkedin.com/in/emillymlfreitas/",img:Gf},{name:"Gabrielle Correa",role:"Front-end Developer | Designer",github:"https://github.com/gabriellecorrea",linkedin:"https://www.linkedin.com/in/gabriellecorrealeme/",img:Vf},{name:"Gustavo Teixeira",role:"Finance | Front-End Developer",github:"https://github.com/PettaDev",linkedin:"https://www.linkedin.com/in/gustavoteixeira2005/",img:Wf},{name:"Isabella Ribas",role:"PO | Full-stack Developer",github:"https://github.com/Isabella2709",linkedin:"https://www.linkedin.com/in/isabella-ribas-46579b176/",img:Yf},{name:"Iago Matheus",role:"Full-Stack Developer | Designer",github:"https://github.com/IagoMat",linkedin:"https://www.linkedin.com/in/iagomatheus/",img:Hf}];function iy(){return r.jsxs(_f,{children:[r.jsx(Je,{}),r.jsxs("div",{className:"container",children:[r.jsx("div",{className:"imagem-fundo",children:r.jsxs("div",{className:"transparencia",children:[r.jsx("h1",{className:"titulo",children:"How we help with your deliveries"}),r.jsxs("div",{className:"MVV",children:[r.jsxs("div",{className:"missao card",children:[r.jsx("img",{src:Of,alt:""}),r.jsxs("div",{className:"conteudo",children:[r.jsx("h1",{children:"Our Mission"}),r.jsx("li",{children:"Provide an efficient and transparent solution for delivery management."}),r.jsx("li",{children:"Eliminate paper usage."}),r.jsx("li",{children:"Ensure fair and accurate compensation for delivery personnel."})]})]}),r.jsxs("div",{className:"visao card",children:[r.jsx("img",{src:Lf,alt:""}),r.jsxs("div",{className:"conteudo",children:[r.jsx("h1",{children:"Our Vision"}),r.jsx("li",{children:"To be the leading platform in delivery management."}),r.jsx("li",{children:"Excellence in meeting restaurant needs."}),r.jsx("li",{children:"Excellence in meeting delivery company needs."})]})]}),r.jsxs("div",{className:"valor card",children:[r.jsx("img",{src:Df,alt:""}),r.jsxs("div",{className:"texto",children:[r.jsx("h1",{children:"Our Values"}),r.jsx("li",{children:"Transparency, efficiency, and security are the pillars of our work."}),r.jsx("li",{children:"Importance of clear financial management."}),r.jsx("li",{children:"Valuing the work of delivery personnel."})]})]})]})]})}),r.jsxs("div",{className:"ODS",children:[r.jsx("h1",{children:"What we are contributing to sustainable development"}),r.jsxs("div",{className:"cardODS",children:[r.jsxs("div",{className:"ODS4",children:[r.jsx("img",{src:If,alt:"",className:"iconOds04"}),r.jsx("h1",{children:"ODS 09"})]}),r.jsxs("div",{className:"ODS8",children:[r.jsx("img",{src:zf,alt:"",className:"iconOds04"}),r.jsx("h1",{children:"ODS 08"})]}),r.jsxs("div",{className:"ODS11",children:[r.jsx("img",{src:Rf,alt:"",className:"iconOds04"}),r.jsx("h1",{children:"ODS 11"})]})]})]}),r.jsxs("div",{className:"visaoFuturo",children:[r.jsx("img",{src:Bf,alt:"Icon of a telescope"}),r.jsxs("div",{children:[r.jsx("h2",{children:"Future Vision"}),r.jsx("p",{children:"Regarding the future of our project, we plan to develop strategic partnerships with restaurants and delivery companies to expand our customer base and the presence of our platform throughout the São Paulo region."}),r.jsx("p",{children:"We also aim for partnerships with financial educators, so we can implement our completely free personal finance project for couriers, who are warriors fighting every day to make their deliveries."})]})]}),r.jsxs("div",{className:"team-section",children:[r.jsx("h1",{children:"Our Team"}),r.jsx("div",{className:"team-container",children:ty.map((e,t)=>r.jsxs("div",{className:"team-card",children:[r.jsx("img",{src:e.img,className:"team-avatar"}),r.jsx("h3",{className:"team-name",children:e.name}),r.jsx("p",{className:"team-role",children:e.role}),r.jsxs("div",{className:"team-icons",children:[r.jsx("a",{className:"team-icon-link",href:e.github,target:"_blank",rel:"noopener noreferrer",children:r.jsx($p,{})}),r.jsx("a",{className:"team-icon-link",href:e.linkedin,target:"_blank",rel:"noopener noreferrer",children:r.jsx(ef,{})})]})]},t))})]})]})]})}const ny="/VEL_Desktop/images/VEL.png",ry=ot.div.attrs({className:"container"})`

.container {
  display: flex;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.LogoVEL{
  width: 50%;
  max-width: 300px;
  padding: 50px;
}

.form{
  width: 100%;
}

.imagem-fundo{
    background-image: url('/images/fotomoto.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 80%;
    height: 100vh;
}

.login-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    min-width: 400px;
    max-width: 600px;
    width: 50%;
    text-align: center;
}

.titulo{
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: bolder;
    font-family: "Biryani", sans-serif;
}

.form-group {
    margin-bottom: 15px;
}

.remember{
    padding-left: 10px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-family: "Biryani", sans-serif;
    font-size: 13px;
    color: #333;
    margin-right: 320px;
}

.form-group input {
    width: 360px;
    height: 48px;
    background-color: #f2f2f2;
    border-style: none;
    border-radius: 6px;
  }

  .form-group input::placeholder {
    color: #94a3b8;
    font-size: 15px;
  }
  

.form-group-checkbox{
    display: flex; 
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
}

.form-group-checkbox a{
    margin-left: 56px;
    text-decoration: none;
    color: #0080C0;
}

input[type=submit] {
    width: 80%;
    height: 40px;
    background-color: #F38342;
    color: #fff;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
    transition: all .5s;
}

input[type=submit]:hover{
  color: #000;
  border: 1px solid #000;
}
  
.login-options {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
}

.login-options p{
  font-size: 1em;
}
  
.login-options input {
    margin-right: 5px;
}

.login-options a {
    margin-top: 10px;
    color: #0080C0;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    font-family: "Biryani", sans-serif;
}
  
/*Continue com o google*/
.button {
    width: 80%;
    display: flex;
    justify-content: center;
    padding: 0.5rem 1.4rem;
    margin: auto;
    font-size: 0.875rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    gap: 0.75rem;
    color: rgb(65, 63, 63);
    background-color: #fff;
    cursor: pointer;
    transition: all .6s ease;
  }
  
  .button svg {
    height: 24px;
  }
  
  .button:hover {
    transform: scale(1.02);
  }


  /* label senha */

  .group {
    display: flex;
    line-height: 30px;
    align-items: center;
    position: relative;
    width: 90%;
    margin-bottom: 10px;
  }
  
  .input {
    width: 100%;
    height: 48px;
    line-height: 30px;
    padding: 0 5rem;
    padding-left: 3rem;
    border: 2px solid transparent;
    border-radius: 10px;
    outline: none;
    background-color: #f2f2f2;
    color: #0d0c22;
    transition: .5s ease;
  }
  
  .input::placeholder {
    color: #94a3b8;
    font-size: 15px;
  }
  
  .input:focus, input:hover {
    outline: none;
    background-color: #fff;
  }
  
  .icon {
    position: absolute;
    left: 1rem;
    fill: none;
    width: 1rem;
    height: 1rem;
  }




  /* UI verse button */

  /* The switch - the box around the slider */
  .switch {
    font-size: 9.8px;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
   }
 
 /* Hide default HTML checkbox */
 .switch input {
  opacity: 1;
  width: 0;
  height: 0;
 }
 
 /* The slider */
 .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  background: #fff;
  transition: .4s;
  border-radius: 35px;
  border: 1px solid #ccc;
 }
 
 .slider:before {
  position: absolute;
  content: "";
  height: 1.9em;
  width: 1.9em;
  border-radius: 16px;
  left: 2px;
  top: 0;
  bottom: 0;
  background-color: white;
  box-shadow: 0 2px 5px #999999;
  transition: .4s;
 }
 
 input:checked + .slider {
  background-color: #005A8D;
  border: 1px solid transparent;
 }
 
 input:checked + .slider:before {
  transform: translateX(1.5em);
 }

form{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}


`;function oy(){const e=Dt(),t=i=>{i.preventDefault();const n={email:document.querySelector("#email").value.toLowerCase(),senha:document.querySelector("#senha").value};if(n.email.length<=1||n.senha.length<=1)return alert("Preencha todos os campos!");fetch("https://vel-tnpo.onrender.com/login/usuario",$r("POST",n)).then(o=>o.json()).then(o=>{console.log(o),o.isproprietario?(alert("Login de proprietário validado com sucesso!"),localStorage.setItem("User",JSON.stringify(o.id)),e("/dashboard")):o.isproprietario?alert("Senha ou login inválidos!"):(alert("Login de atendente validado com sucesso!"),localStorage.setItem("User",JSON.stringify(o.id)),e("/atendente"))}).catch(o=>{alert("Senha ou login inválidos!")})};return r.jsxs(ry,{children:[r.jsx(Je,{}),r.jsxs("div",{className:"container",children:[r.jsx("div",{className:"imagem-fundo"}),r.jsxs("div",{className:"login-form",children:[r.jsx("img",{src:ny,className:"LogoVEL",alt:"Logo VEl"}),r.jsxs("div",{className:"form",children:[r.jsx("h2",{className:"titulo",children:"Que bom ver você de novo"}),r.jsxs("form",{children:[r.jsx("div",{className:"group",children:r.jsx("input",{required:!0,className:"input",type:"email",id:"email",placeholder:"Email"})}),r.jsxs("div",{className:"group",children:[r.jsx("svg",{stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"icon",children:r.jsx("path",{d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",strokeLinejoin:"round",strokeLinecap:"round"})}),r.jsx("input",{required:!0,className:"input",type:"password",id:"senha",placeholder:"Senha"})]}),r.jsxs("div",{className:"form-group-checkbox",children:[r.jsxs("label",{className:"switch",children:[r.jsx("input",{type:"checkbox"}),r.jsx("span",{className:"slider"})]}),r.jsx("label",{className:"remember",htmlFor:"remember",children:"Lembre-me"}),r.jsx("a",{onClick:()=>e("/recuperarsenha"),style:{cursor:"pointer"},children:"Esqueceu sua senha?"})]}),r.jsx("input",{type:"submit",onClick:t,value:"Entrar"})]}),r.jsx("div",{className:"Continuar-google",children:r.jsxs("button",{className:"button",children:[r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 262",children:[r.jsx("path",{fill:"#4285F4",d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"}),r.jsx("path",{fill:"#34A853",d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"}),r.jsx("path",{fill:"#FBBC05",d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"}),r.jsx("path",{fill:"#EB4335",d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"})]}),"Continue with Google"]})}),r.jsx("div",{className:"login-options",children:r.jsxs("p",{children:["Não garantiu seu plano?"," ",r.jsx("a",{onClick:()=>e("/inicial"),style:{cursor:"pointer"},children:"cadastre-se agora"})]})})]})]})]})]})}const Ws="/VEL_Desktop/assets/logoExemplo-CoQ5q-gt.png",sy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE6SURBVHgBxVbRDYIwED2M/zoCG8gIOIG6gU4gm4ATuIJOACs4gW4gTlDfRUlIae2VIrzkhbS84+WOttdIKRUT0RFckhvXKIouzQCxWzw2grgaPHFAoeR4tr+g/FDMhBk18NHqWMy1iQy8GYRnMCY7uEw7w3wC5s1AN7vhn1R6BEpADtSSuBmNiDkNgyWyKE3zfzEDU5cotIyVjzYoMyyK9fdQcIEXUB1cRnzkIdWOuhp1s9J0zpBlQ+NVrmS4g0loZplQF4NHNivAhzDoRFOhXSbL+7SlOY9/XMGVTwBn+/BZ5kYzGO3p00KcgLbijUw9wWVMPfQ+2g46/Qx8GnTcBEO6tNEsszTB+xBmkzbPxHIFcGbFe8owvfplllM/xGDpEnEZa+oPn9gXZ1Z8BwtBwFUbH0h2I36xzxvURAVT6DVQPwAAAABJRU5ErkJggg==",ay="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG6SURBVHgBzZbtccIwDIYVrv8LEzRMULoBI7ABdIJmg6QTkE5AN2CE0AkYIWEC6ASqlMh3Si4pliG9Pnc6jGzr9accAAIR38jOOD4lWQoimmIYZwwfbBLxKEg/BhsV2YuUjwH9L5OATswhiqILG5W/wM4U0E5GNnURqByTfaIRq3AyNAWqyy2Bolrdj4qWdi4i03q5CPJVylc6/zUm4M9JlRMRKUkwgwD6ZlyRvZM9kWXKz4dp5v5QtyX9PJMtxRWTLTqxOM5ZBhq3anqWf63qcp89xuaAlZ22O1W/6Yr0LfVMlR87dVsOSNaamezza6ftN/xGz4w5G3EKTXvqjmR71a7Qg+iZ9RYH0rHlOnHnWAQS5c+UcOEZy3SdOEvNJVsNrR4fpLtfJw6YwrBoCp6iroOVHbb3dSE+EyHCtbgSNudpJvRZ5H12z2IBIc8qtk+oldAPgXUky7WBJq35H45wcroZOfxrUBKHZ9v7rJo6A4VHW5dOE7gVVGmw41+hesnE59hdi/sAAWDzFu+lfKLDcgAjlpSpiQfKowvfjI/wBUbAR9h9sH94tHVtDjAG2P6GWsFfgs2rlEEgP1yM0vIpix7zAAAAAElFTkSuQmCC",ly="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALGSURBVHgBtdZNSFRRFMDx+8Ym0iSniaQwy6SyxKxl9GFK2EYyiCCxNkEEbioCixa1ita1yixbCCWE1Da0CMI+ISEIAyuoTVCZUw5ias7xf7x3YBje6Mw4c+DHfTNv3jv3vnfvueOZFCEiS2jCqEUddqAcpQhhGWL4g894jQcY9DxvyqQbJCpDG57gr2QWk3iBQyhYKFE1uvEDM7K4mMYthPwSrUEHfkru443ePznhe8lv9GFtPF8AHfhn8hf1aJf4O+XAwyWxzz1fMYH9cyNkCgttP8ZN/kKX0EWSBgPui1aUmPxGPbYVkHU1BzcyTKgL+wra0YcoCrHS2HnhF0F81HfYiJhkFuf0DrRbUBq/I8ercBSdeItR/E+4rlfL1y54Pj2axoTreTDp3HMurqR9hxFs1OS0GzCIh5pfv8del0NLZFh79chnBAM6q7AZTWLLVeJTqMFOdxx1ozsldqZ/Ebv2rqIZYXd+uXZKR7gpqfefcBy/jC3YzzCEp67HZp73pPerdBqNXd8jJNLrXxldDXz4njS6a2LX5mP3udv1sCvhNzq6Wp8RLhSRgHtHiTHj2vj3xfww4N5pYsRMFuH3aA67ZG04jTPGTvd9Jgfhl3A7uhClCt12ye+hOuE3KzCG3/qBJ7DOpBtuVvmF7okR8d8be6BFI4RjOhPRKmm8Q03YKZmHduI+6lDkOl6Oy3gpqQvJXMLdYqt5NqGJh3ABZS5xCRpwE2N+CXUJnMS4LC60hPXjhLhdnrYQLWILgQ4q4rkT2jbgPGqw3viXu3Tjq7FbXi8GMAktfQe9pAmku3KVO7kHumlqtVlqsgtdu9+MneU9GE45CjfqYlQYW3z1CTQZuySyCS3m1zN6bPpOjF2nB9CMrcbuo+ncRytTi8k2xK7DChzBXXzA1DyT6o7Yf/O5CW5WhCqcdbN11HVgGPqvTcujmQV9k0QCbnr4twAAAABJRU5ErkJggg==",cy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIGSURBVHgBnZXPS1VBFMfnvp69DAypaFEYQRAFriJq4SKyTYGtbBVBSIuiRYRQi3btohb9A+nCjQtXii5048aVOwUVF/5aiYqCiuKv5/FzuIMO49y57/qFD3PfzLnfN3PPnBljMiQiN2FKUu3BTxNRKTJWD/ftcwWaMStdxCjxxiux+JjRYyg7v1vgO7N6BnUmTwS1wqjEtQa/4VbIoE4/KBxK7foWMvoBRwVM9uG5b9IEq4FgTfsCzMISbEDVjk2eWxodnwImavwG6m1MBR7CFxiHv6FldQWM/pvshFyGK25fWdJUNgbirzNWTpLkyB+g78Dv031Uha2A0UvQZZRNrSL4s4SlW2EEXvlLyTK6C+uSLc3UGLRDQ55ZBxxIXMd2hi0xo0vwHjYlXyvQmjezpzAMOzlmWm/NeWa6LdqgX9LdnaUhiZxR/nKfQK+clYYrnfVtU6us4a8Ms9emiHjhKswHjD7qeMkJbMzx0go4DPTvnhphcoNGP9w/eCC24t3Z0HyAO56J1ty0PiQ28C1Nn/MP4zABy6Amj6DNpDeLK417QRHvqkkCPVJcW9DuTrtB0oOqiDR7neLeJpKefFr9cxJOry+N65DQlURnCe7BO+i2M/RrTkviKzSZWmWX2+kZ/Ym9E6wTsrBNs+h1b5uiRlb+WV2NxJrYeTwDA3DNpDt6MBJrTgDsgNDh1WEhowAAAABJRU5ErkJggg==",dy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAdCAYAAABfeMd1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE5SURBVHgBtZXtTcMwEIZfV/yHEbwBMAEegQ3KBrBB2QB1AtQJCBMkbMAGdAOygXunulXq1rm7OH2kU+XonKe58weQEWNcUvxHmZDyPSzwhKgnpDl/kmiRjZ9hx1O0Y6Jccodp+DHRAvPhS6I5JUXR3JKLomtIzkQ1ksMi6aAQHaEH71FPCyU3mE4g0Sf9bqTEGgnzkqJK8oNyzcd4RWljX+jJAyZA876GL5G+hJM72Dk5AyWJh6LmEm44oH/NddQekoHiQ5Pv0ss9bPTOuT7dKeJ+cXzpYF8WK48k+uXGSonck2+Ke9joOVJ5rwtJVlFB3viAfUM1PGlz8yUcKFaYGWmfrCka2OA+8dL2WklDK6iDESr70iJpacIWdvxwkEu20oQJ9Pn12xRENaxd/iQdMW8Ut6ino55udrLgOmr6Uk43AAAAAElFTkSuQmCC",Nl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGhSURBVHgB1ZY9LwRBHMafdaeQiLcP4K5AoqDQiuRyIlEp0BFR+ACXi/5QaqktEtrrFDoSCuRQEnLXS4hQqIxnYsRmk53971txv+SX2c3Mf57s3OzNAhFQSjm0Sq/UPw26iqzg5AX6pILRfUWkDSd9VuFcIE30Uio5VcmcHZCxBDmzkkHS4CHIGZYMkgZH4UsySBrcgJwHySBp8B7k1JEm3K0ngh19hLThpL103xJ6TPuQFZy8rJ+M3tBH6tIS2gUHMdDLzmac5uiZ4zgKEclbJte/1wIdoyO0kwEzprtCN8z15t81a071OHpHr+kla1qQwgm2AjZQyfT301faVOZEYjsVUFOThtZUMNuecXV66Ll3LXWVsNCisvNGe8zYc3rrqW1Z6j6U71Xz/3NNwo4unjDXo+Zeh06zKVjquum8LVhysqyb1rsxV8LLMOi9ySM6ZbNsLtWbbEAYjKTBXfj9MDig73QOMYh7Hi/y/bw37+gaYhDniTUls9zasA2ZarBmh34iJkmCl5GALL652iv4BdnRDOzhTs3RXZUu39T1Z/0AP69ZotJ5nn0AAAAASUVORK5CYII=",Xf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAdCAYAAABbjRdIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIUSURBVHgBtVbRccIwDHV6/W+6gTdoO0EZIRuQDWADsgHpBGGFTmA6AWwQOkHYQLWLBS86hagffXe+BEmWniRHuHBGENFrfJSK6lQUxckZUDgjYjCaUJ1jsGdnwIPFKMYp76jLqPfOgEdnwyu87+P6ius9rgUHdAaYMovw8P4Ry9bE56fTyVwxWZFUCrogxLVk47g2cQ10wyLrKpD1yQ72rLKfq70MFmiMXgRhlILc3J4gA9V0H8lBQ6IsOeCO5lHhph4Uy+yAGe5p5rTloAcg1sa1pnHGZTLcgLDD5iKj7HALJJKDDonQpY/lRGsaB4wYa4V5RXr/OJNK2bMSdgdmHIRiKzIahPNA49IPnGGuyFb4G7eCLgcAwZs7kKVeYpnwcLRAjqRca/S1pCDrs6hX7Eu6ZT2A/JoR2ssJclY4+Pz8loo4SZL9Mf+cHVmWccUEXkgfPz4/T4ruyWlQmuqzvAWZ/DQ6qVN6tsEg2mlshR5PY5/t5Qn1sKcV/sKvnv7vO1vLgPLIB1EmOUF2dDudPJa8IIWfRge+G3baY2Y0HksHss3GACRSkBp89rJMc+hkUNL/7zQsJbsgDAaRMcNDIDLs2WulWLCSLkOU/yQb4aAS9hykgT01kPdTtS8n5Fj/Wil9bfE3ul3l8aPhCO/LzPYdZCdt0x1/0yD9voEwXeX+EnDyo7b6sF5SE97c+P7IMJfqB0YBgHs/8UQUAAAAAElFTkSuQmCC",Qf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAZCAYAAADTyxWqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADtSURBVHgBrZXtDYIwFEUfDQMwAm6gGzCCI7gBbCBOoE6gGzgCdQLcADZghOetVm0MDf06yU35QU8ubVOIImDmAjnym4ZCweQKGfiHpBCMNhwsw4Q10vM80kdUIxPbkbmDpMRwQaqld8WCqMbQu4gUuUVS6DZb8iCfEVUYbkhBngizjdpyPHYhom8z3UZ9VkkRCIj2uk1JkWTqgFAa7mrNDpQIkWVZi3GDjBTJazchfGjhmVKCJdz9XS2uSJuwRK7sh3RpOSWRGS27JDJD2iaTGS0Hm0z4yHCERmRFCQ/6p+WaU/ydDKG6tk5a1jwBLejQ3oXawCgAAAAASUVORK5CYII=",qf="/VEL_Desktop/assets/VEL2-Bft5tNit.png",Kf=ot.div.attrs({className:"container"})`
  @charset "UTF-8";
  @import url("https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

  .laranja {
    color: #f38342;
  }

  .MenuLateral{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 19vw !important;
    height: 100vh;
    color: #fff;
    background-color: #005a8d;
    background-image: linear-gradient(to bottom, #005a8d, #087dbf);
  }

  .MenuLateral h1 {
    text-align: center;
    font-size: 1.5em;
    margin-top: 10px;
  }

  .MenuLateral .ToggleButton {
    position: relative;
    display: block;
    width: 100%;
    left: 90%;
    transition: all 0.5s;
  }

  .MenuLateral .ToggleButton img {
    cursor: pointer;
  }

  .MenuLateral main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .MenuLateral main .logoEmpresa {
    width: 100%;
    text-align: center;
  }

  .logoEmpresa div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imgEmpresa {
    width: 100%;
    max-width: 100px;
  }

  .logoEmpresa div::after {
    content: "";
    display: block;
    position: relative;
    top: -25px;
    left: 30px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #0f0;
    background-image: radial-gradient(#06ef06, #01b001);
  }

  .nomeEmpresa {
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .MenuLateral ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
  }

  .MenuLateral ul li {
    position: relative;
  }

  .MenuLateral ul li a {
    display: flex;
    align-items: center;
  }

  .MenuLateral ul li a img {
    width: 30px;
    margin-right: 10px;
  }

  .MenuLateral ul li:nth-child(4) a img {
    width: 20px;
    margin-left: 5px !important;
  }

  .pageSelected {
    font-weight: 700;
  }

  .pageSelected::before {
    content: "";
    display: block;
    position: absolute;
    left: -30%;
    width: 15px;
    height: 50px;
    margin: -10px 0px 0px 0px;
    background-color: #32b5ff;
    animation: breath 1.5s infinite alternate-reverse;
  }

  .MenuLateral ul a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 400;
  }

  @keyframes breath {
    from {
      background-color: #32b5ff;
    }

    to {
      background-color: #32b4ff30;
    }
  }

  .desaparecer {
    transition: all 0.5s;
    opacity: 0 !important;
  }

  .shrinkedAside {
    transition: all 1s;
    width: 170px !important;
  }

  .flip {
    transform: rotateY(175deg);
  }

  footer {
    margin-bottom: 10px;
  }
`;function si({pagina:e}){function t(o){const s=o.target,l=[document.querySelector("header"),document.querySelector("main .logoEmpresa h2"),document.querySelector("footer > h2")],j=document.querySelectorAll(".spanName"),E=document.querySelector(".MenuLateral"),F=document.querySelector(".ToggleButton"),_=document.querySelectorAll(".MenuLateral ul li");if(s.classList.contains("flip")){s.classList.remove("flip"),l.map(C=>C.classList.remove("desaparecer"));for(let C=0;C<=j.length-1;C++)j[C].classList.remove("desaparecer");E.classList.remove("shrinkedAside"),F.style.left="90%";for(let C=0;C<=_.length-1;C++)_[C].style.left="unset"}else{s.classList.add("flip"),l.map(C=>C.classList.add("desaparecer"));for(let C=0;C<=j.length-1;C++)j[C].classList.add("desaparecer");E.classList.add("shrinkedAside"),F.style.left="80%",console.log(_.length);for(let C=0;C<=_.length-1;C++)_[C].style.left="40%"}}const i=o=>e===o?"pageSelected":"",n=Dt();return r.jsx(Kf,{children:r.jsxs("aside",{className:"MenuLateral",children:[r.jsx("header",{style:{display:"flex",justifyContent:"center"},children:r.jsx("img",{src:qf,className:"LogoVEL",alt:"Logo VEl",style:{width:"60%",margin:"30px 0"}})}),r.jsx("div",{className:"ToggleButton",children:r.jsx("img",{src:Qf,alt:"Menu para fechar menu lateral",onClick:t})}),r.jsxs("main",{children:[r.jsxs("div",{className:"logoEmpresa",children:[r.jsx("div",{children:r.jsx("img",{src:Ws,alt:"Logo de usuário",className:"imgEmpresa",onClick:()=>n("/perfilempresa"),style:{cursor:"pointer"}})}),r.jsx("h2",{className:"nomeEmpresa",children:"Nome Empresa"})]}),r.jsxs("ul",{children:[r.jsx("li",{className:i("Dashboard"),children:r.jsxs("a",{style:{cursor:"pointer"},onClick:()=>n("/dashboard"),children:[r.jsx("img",{src:sy,alt:"Icone de Dashboard"}),r.jsx("span",{className:"spanName",children:"Dashboard"})]})}),r.jsx("li",{className:i("Pagamentos"),children:r.jsxs("a",{style:{cursor:"pointer"},onClick:()=>n("/pagamentos"),children:[r.jsx("img",{src:ay,alt:"Icone de pagamento"}),r.jsx("span",{className:"spanName",children:"Pagamentos"})]})}),r.jsx("li",{className:i("Entregadores"),children:r.jsxs("a",{style:{cursor:"pointer"},onClick:()=>n("/entregadores"),children:[r.jsx("img",{src:ly,alt:"Icone de entregador"}),r.jsx("span",{className:"spanName",children:"Entregadores"})]})}),r.jsx("li",{className:i("Faturamento"),children:r.jsxs("a",{style:{cursor:"pointer"},onClick:()=>n("/faturamento"),children:[r.jsx("img",{src:cy,alt:"Icone de faturamento"}),r.jsx("span",{className:"spanName",children:"Faturamento"})]})}),r.jsx("li",{className:i("Contrato"),children:r.jsxs("a",{style:{cursor:"pointer"},onClick:()=>n("/contratoempregador"),children:[r.jsx("img",{src:dy,alt:"Icone de contrato"}),r.jsx("span",{className:"spanName",children:"Contrato"})]})}),r.jsx("li",{className:i("Coordenadores"),children:r.jsxs("a",{style:{cursor:"pointer"},onClick:()=>n("/coordenador"),children:[r.jsx("img",{src:Nl,alt:"Icone de coordenador"}),r.jsx("span",{className:"spanName",children:"Coordenadores"})]})})]})]}),r.jsxs("footer",{children:[r.jsx("h2",{children:"Suporte"}),r.jsx("ul",{children:r.jsx("li",{className:i("Configuração"),children:r.jsxs("a",{style:{cursor:"pointer"},onClick:()=>n("/configuracao"),children:[r.jsx("img",{src:Xf,alt:"Icone de Configuração"}),r.jsx("span",{className:"spanName",children:"Configuração"})]})})})]})]})})}var Zf={exports:{}};(function(e){(function(t,i){e.exports?(i.default=i,e.exports=t&&t.document?i(t):i):(t.Highcharts&&t.Highcharts.error(16,!0),t.Highcharts=i(t))})(typeof window<"u"?window:kh,function(t){var i={};function n(o,s,l,j){o.hasOwnProperty(s)||(o[s]=j.apply(null,l),typeof CustomEvent=="function"&&t.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:s,module:o[s]}})))}return n(i,"Core/Globals.js",[],function(){var o,s;return(s=o||(o={})).SVG_NS="http://www.w3.org/2000/svg",s.product="Highcharts",s.version="11.4.3",s.win=t!==void 0?t:{},s.doc=s.win.document,s.svg=s.doc&&s.doc.createElementNS&&!!s.doc.createElementNS(s.SVG_NS,"svg").createSVGRect,s.userAgent=s.win.navigator&&s.win.navigator.userAgent||"",s.isChrome=s.userAgent.indexOf("Chrome")!==-1,s.isFirefox=s.userAgent.indexOf("Firefox")!==-1,s.isMS=/(edge|msie|trident)/i.test(s.userAgent)&&!s.win.opera,s.isSafari=!s.isChrome&&s.userAgent.indexOf("Safari")!==-1,s.isTouchDevice=/(Mobile|Android|Windows Phone)/.test(s.userAgent),s.isWebKit=s.userAgent.indexOf("AppleWebKit")!==-1,s.deg2rad=2*Math.PI/360,s.hasBidiBug=s.isFirefox&&4>parseInt(s.userAgent.split("Firefox/")[1],10),s.marginNames=["plotTop","marginRight","marginBottom","plotLeft"],s.noop=function(){},s.supportsPassiveEvents=function(){let l=!1;if(!s.isMS){let j=Object.defineProperty({},"passive",{get:function(){l=!0}});s.win.addEventListener&&s.win.removeEventListener&&(s.win.addEventListener("testPassive",s.noop,j),s.win.removeEventListener("testPassive",s.noop,j))}return l}(),s.charts=[],s.composed=[],s.dateFormats={},s.seriesTypes={},s.symbolSizes={},s.chartCount=0,o}),n(i,"Core/Utilities.js",[i["Core/Globals.js"]],function(o){let s,{charts:l,doc:j,win:E}=o;function F(c,d,v,h){let g=d?"Highcharts error":"Highcharts warning";c===32&&(c=`${g}: Deprecated member`);let x=U(c),z=x?`${g} #${c}: www.highcharts.com/errors/${c}/`:c.toString();if(h!==void 0){let H="";x&&(z+="?"),R(h,function(ie,O){H+=`
 - ${O}: ${ie}`,x&&(z+=encodeURI(O)+"="+encodeURI(ie))}),z+=H}L(o,"displayError",{chart:v,code:c,message:z,params:h},function(){if(d)throw Error(z);E.console&&F.messages.indexOf(z)===-1&&console.warn(z)}),F.messages.push(z)}function _(c,d){return parseInt(c,d||10)}function C(c){return typeof c=="string"}function D(c){let d=Object.prototype.toString.call(c);return d==="[object Array]"||d==="[object Array Iterator]"}function V(c,d){return!!c&&typeof c=="object"&&(!d||!D(c))}function k(c){return V(c)&&typeof c.nodeType=="number"}function I(c){let d=c&&c.constructor;return!!(V(c,!0)&&!k(c)&&d&&d.name&&d.name!=="Object")}function U(c){return typeof c=="number"&&!isNaN(c)&&c<1/0&&c>-1/0}function p(c){return c!=null}function a(c,d,v){let h,g=C(d)&&!p(v),x=(z,H)=>{p(z)?c.setAttribute(H,z):g?(h=c.getAttribute(H))||H!=="class"||(h=c.getAttribute(H+"Name")):c.removeAttribute(H)};return C(d)?x(v,d):R(d,x),h}function u(c){return D(c)?c:[c]}function y(c,d){let v;for(v in c||(c={}),d)c[v]=d[v];return c}function w(){let c=arguments,d=c.length;for(let v=0;v<d;v++){let h=c[v];if(h!=null)return h}}function f(c,d){y(c.style,d)}function N(c){return Math.pow(10,Math.floor(Math.log(c)/Math.LN10))}function K(c,d){return c>1e14?c:parseFloat(c.toPrecision(d||14))}(F||(F={})).messages=[],Math.easeInOutSine=function(c){return-.5*(Math.cos(Math.PI*c)-1)};let Y=Array.prototype.find?function(c,d){return c.find(d)}:function(c,d){let v,h=c.length;for(v=0;v<h;v++)if(d(c[v],v))return c[v]};function R(c,d,v){for(let h in c)Object.hasOwnProperty.call(c,h)&&d.call(v||c[h],c[h],h,c)}function A(c,d,v){function h(z,H){let ie=c.removeEventListener;ie&&ie.call(c,z,H,!1)}function g(z){let H,ie;c.nodeName&&(d?(H={})[d]=!0:H=z,R(H,function(O,Q){if(z[Q])for(ie=z[Q].length;ie--;)h(Q,z[Q][ie].fn)}))}let x=typeof c=="function"&&c.prototype||c;if(Object.hasOwnProperty.call(x,"hcEvents")){let z=x.hcEvents;if(d){let H=z[d]||[];v?(z[d]=H.filter(function(ie){return v!==ie.fn}),h(d,v)):(g(z),z[d]=[])}else g(z),delete x.hcEvents}}function L(c,d,v,h){if(v=v||{},j.createEvent&&(c.dispatchEvent||c.fireEvent&&c!==o)){let g=j.createEvent("Events");g.initEvent(d,!0,!0),v=y(g,v),c.dispatchEvent?c.dispatchEvent(v):c.fireEvent(d,v)}else if(c.hcEvents){v.target||y(v,{preventDefault:function(){v.defaultPrevented=!0},target:c,type:d});let g=[],x=c,z=!1;for(;x.hcEvents;)Object.hasOwnProperty.call(x,"hcEvents")&&x.hcEvents[d]&&(g.length&&(z=!0),g.unshift.apply(g,x.hcEvents[d])),x=Object.getPrototypeOf(x);z&&g.sort((H,ie)=>H.order-ie.order),g.forEach(H=>{H.fn.call(c,v)===!1&&v.preventDefault()})}h&&!v.defaultPrevented&&h.call(c,v)}R({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(c,d){o[d]=function(v){return F(32,!1,void 0,{[`Highcharts.${d}`]:`use Array.${c}`}),Array.prototype[c].apply(v,[].slice.call(arguments,1))}});let b=function(){let c=Math.random().toString(36).substring(2,9)+"-",d=0;return function(){return"highcharts-"+(s?"":c)+d++}}();return E.jQuery&&(E.jQuery.fn.highcharts=function(){let c=[].slice.call(arguments);if(this[0])return c[0]?(new o[C(c[0])?c.shift():"Chart"](this[0],c[0],c[1]),this):l[a(this[0],"data-highcharts-chart")]}),{addEvent:function(c,d,v,h={}){let g=typeof c=="function"&&c.prototype||c;Object.hasOwnProperty.call(g,"hcEvents")||(g.hcEvents={});let x=g.hcEvents;o.Point&&c instanceof o.Point&&c.series&&c.series.chart&&(c.series.chart.runTrackerClick=!0);let z=c.addEventListener;z&&z.call(c,d,v,!!o.supportsPassiveEvents&&{passive:h.passive===void 0?d.indexOf("touch")!==-1:h.passive,capture:!1}),x[d]||(x[d]=[]);let H={fn:v,order:typeof h.order=="number"?h.order:1/0};return x[d].push(H),x[d].sort((ie,O)=>ie.order-O.order),function(){A(c,d,v)}},arrayMax:function(c){let d=c.length,v=c[0];for(;d--;)c[d]>v&&(v=c[d]);return v},arrayMin:function(c){let d=c.length,v=c[0];for(;d--;)c[d]<v&&(v=c[d]);return v},attr:a,clamp:function(c,d,v){return c>d?c<v?c:v:d},clearTimeout:function(c){p(c)&&clearTimeout(c)},correctFloat:K,createElement:function(c,d,v,h,g){let x=j.createElement(c);return d&&y(x,d),g&&f(x,{padding:"0",border:"none",margin:"0"}),v&&f(x,v),h&&h.appendChild(x),x},crisp:(c,d=0,v)=>{let h=d%2/2,g=v?-1:1;return(Math.round(c*g-h)+h)*g},css:f,defined:p,destroyObjectProperties:function(c,d,v){R(c,function(h,g){h!==d&&(h!=null&&h.destroy)&&h.destroy(),(h!=null&&h.destroy||!v)&&delete c[g]})},diffObjects:function(c,d,v,h){let g={};return function x(z,H,ie,O){let Q=v?H:z;R(z,function(ee,$){if(!O&&h&&h.indexOf($)>-1&&H[$]){ee=u(ee),ie[$]=[];for(let ce=0;ce<Math.max(ee.length,H[$].length);ce++)H[$][ce]&&(ee[ce]===void 0?ie[$][ce]=H[$][ce]:(ie[$][ce]={},x(ee[ce],H[$][ce],ie[$][ce],O+1)))}else V(ee,!0)&&!ee.nodeType?(ie[$]=D(ee)?[]:{},x(ee,H[$]||{},ie[$],O+1),Object.keys(ie[$]).length!==0||$==="colorAxis"&&O===0||delete ie[$]):(z[$]!==H[$]||$ in z&&!($ in H))&&$!=="__proto__"&&$!=="constructor"&&(ie[$]=Q[$])})}(c,d,g,0),g},discardElement:function(c){c&&c.parentElement&&c.parentElement.removeChild(c)},erase:function(c,d){let v=c.length;for(;v--;)if(c[v]===d){c.splice(v,1);break}},error:F,extend:y,extendClass:function(c,d){let v=function(){};return v.prototype=new c,y(v.prototype,d),v},find:Y,fireEvent:L,getClosestDistance:function(c,d){let v,h,g,x=!d;return c.forEach(z=>{if(z.length>1)for(g=z.length-1;g>0;g--)(h=z[g]-z[g-1])<0&&!x?(d==null||d(),d=void 0):h&&(v===void 0||h<v)&&(v=h)}),v},getMagnitude:N,getNestedProperty:function(c,d){let v=c.split(".");for(;v.length&&p(d);){let h=v.shift();if(h===void 0||h==="__proto__")return;if(h==="this"){let x;return V(d)&&(x=d["@this"]),x??d}let g=d[h];if(!p(g)||typeof g=="function"||typeof g.nodeType=="number"||g===E)return;d=g}return d},getStyle:function c(d,v,h){let g;if(v==="width"){let z=Math.min(d.offsetWidth,d.scrollWidth),H=d.getBoundingClientRect&&d.getBoundingClientRect().width;return H<z&&H>=z-1&&(z=Math.floor(H)),Math.max(0,z-(c(d,"padding-left",!0)||0)-(c(d,"padding-right",!0)||0))}if(v==="height")return Math.max(0,Math.min(d.offsetHeight,d.scrollHeight)-(c(d,"padding-top",!0)||0)-(c(d,"padding-bottom",!0)||0));let x=E.getComputedStyle(d,void 0);return x&&(g=x.getPropertyValue(v),w(h,v!=="opacity")&&(g=_(g))),g},inArray:function(c,d,v){return F(32,!1,void 0,{"Highcharts.inArray":"use Array.indexOf"}),d.indexOf(c,v)},insertItem:function(c,d){let v,h=c.options.index,g=d.length;for(v=c.options.isInternal?g:0;v<g+1;v++)if(!d[v]||U(h)&&h<w(d[v].options.index,d[v]._i)||d[v].options.isInternal){d.splice(v,0,c);break}return v},isArray:D,isClass:I,isDOMElement:k,isFunction:function(c){return typeof c=="function"},isNumber:U,isObject:V,isString:C,keys:function(c){return F(32,!1,void 0,{"Highcharts.keys":"use Object.keys"}),Object.keys(c)},merge:function(){let c,d=arguments,v={},h=function(x,z){return typeof x!="object"&&(x={}),R(z,function(H,ie){ie!=="__proto__"&&ie!=="constructor"&&(!V(H,!0)||I(H)||k(H)?x[ie]=z[ie]:x[ie]=h(x[ie]||{},H))}),x};d[0]===!0&&(v=d[1],d=Array.prototype.slice.call(d,2));let g=d.length;for(c=0;c<g;c++)v=h(v,d[c]);return v},normalizeTickInterval:function(c,d,v,h,g){let x,z=c;v=w(v,N(c));let H=c/v;for(!d&&(d=g?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],h===!1&&(v===1?d=d.filter(function(ie){return ie%1==0}):v<=.1&&(d=[1/v]))),x=0;x<d.length&&(z=d[x],(!g||!(z*v>=c))&&(g||!(H<=(d[x]+(d[x+1]||d[x]))/2)));x++);return K(z*v,-Math.round(Math.log(.001)/Math.LN10))},objectEach:R,offset:function(c){let d=j.documentElement,v=c.parentElement||c.parentNode?c.getBoundingClientRect():{top:0,left:0,width:0,height:0};return{top:v.top+(E.pageYOffset||d.scrollTop)-(d.clientTop||0),left:v.left+(E.pageXOffset||d.scrollLeft)-(d.clientLeft||0),width:v.width,height:v.height}},pad:function(c,d,v){return Array((d||2)+1-String(c).replace("-","").length).join(v||"0")+c},pick:w,pInt:_,pushUnique:function(c,d){return 0>c.indexOf(d)&&!!c.push(d)},relativeLength:function(c,d,v){return/%$/.test(c)?d*parseFloat(c)/100+(v||0):parseFloat(c)},removeEvent:A,replaceNested:function(c,...d){let v,h;do for(h of(v=c,d))c=c.replace(h[0],h[1]);while(c!==v);return c},splat:u,stableSort:function(c,d){let v,h,g=c.length;for(h=0;h<g;h++)c[h].safeI=h;for(c.sort(function(x,z){return(v=d(x,z))===0?x.safeI-z.safeI:v}),h=0;h<g;h++)delete c[h].safeI},syncTimeout:function(c,d,v){return d>0?setTimeout(c,d,v):(c.call(0,v),-1)},timeUnits:{millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,month:24192e5,year:314496e5},uniqueKey:b,useSerialIds:function(c){return s=w(c,s)},wrap:function(c,d,v){let h=c[d];c[d]=function(){let g=arguments,x=this;return v.apply(this,[function(){return h.apply(x,arguments.length?arguments:g)}].concat([].slice.call(arguments)))}}}}),n(i,"Core/Chart/ChartDefaults.js",[],function(){return{alignThresholds:!1,panning:{enabled:!1,type:"x"},styledMode:!1,borderRadius:0,colorCount:10,allowMutatingData:!0,ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{},position:{}},reflow:!0,type:"line",zooming:{singleTouch:!1,resetButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}}},width:null,height:null,borderColor:"#334eff",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"}}),n(i,"Core/Color/Palettes.js",[],function(){return{colors:["#2caffe","#544fc5","#00e272","#fe6a35","#6b8abc","#d568fb","#2ee0ca","#fa4b42","#feb56a","#91e8e1"]}}),n(i,"Core/Time.js",[i["Core/Globals.js"],i["Core/Utilities.js"]],function(o,s){let{win:l}=o,{defined:j,error:E,extend:F,isNumber:_,isObject:C,merge:D,objectEach:V,pad:k,pick:I,splat:U,timeUnits:p}=s,a=o.isSafari&&l.Intl&&l.Intl.DateTimeFormat.prototype.formatRange,u=o.isSafari&&l.Intl&&!l.Intl.DateTimeFormat.prototype.formatRange;class y{constructor(f){this.options={},this.useUTC=!1,this.variableTimezone=!1,this.Date=l.Date,this.getTimezoneOffset=this.timezoneOffsetFunction(),this.update(f)}get(f,N){if(this.variableTimezone||this.timezoneOffset){let K=N.getTime(),Y=K-this.getTimezoneOffset(N);N.setTime(Y);let R=N["getUTC"+f]();return N.setTime(K),R}return this.useUTC?N["getUTC"+f]():N["get"+f]()}set(f,N,K){if(this.variableTimezone||this.timezoneOffset){if(f==="Milliseconds"||f==="Seconds"||f==="Minutes"&&this.getTimezoneOffset(N)%36e5==0)return N["setUTC"+f](K);let Y=this.getTimezoneOffset(N),R=N.getTime()-Y;N.setTime(R),N["setUTC"+f](K);let A=this.getTimezoneOffset(N);return R=N.getTime()+A,N.setTime(R)}return this.useUTC||a&&f==="FullYear"?N["setUTC"+f](K):N["set"+f](K)}update(f={}){let N=I(f.useUTC,!0);this.options=f=D(!0,this.options,f),this.Date=f.Date||l.Date||Date,this.useUTC=N,this.timezoneOffset=N&&f.timezoneOffset||void 0,this.getTimezoneOffset=this.timezoneOffsetFunction(),this.variableTimezone=N&&!!(f.getTimezoneOffset||f.timezone)}makeTime(f,N,K,Y,R,A){let L,b,c;return this.useUTC?(L=this.Date.UTC.apply(0,arguments),b=this.getTimezoneOffset(L),L+=b,b!==(c=this.getTimezoneOffset(L))?L+=c-b:b-36e5!==this.getTimezoneOffset(L-36e5)||u||(L-=36e5)):L=new this.Date(f,N,I(K,1),I(Y,0),I(R,0),I(A,0)).getTime(),L}timezoneOffsetFunction(){let f=this,N=this.options,K=N.getTimezoneOffset;return this.useUTC?N.timezone?Y=>{try{let R=`shortOffset,${N.timezone||""}`,[A,L,b,c,d=0]=(y.formatCache[R]=y.formatCache[R]||Intl.DateTimeFormat("en",{timeZone:N.timezone,timeZoneName:"shortOffset"})).format(Y).split(/(GMT|:)/).map(Number),v=-(36e5*(b+d/60));if(_(v))return v}catch{E(34)}return 0}:this.useUTC&&K?Y=>6e4*K(Y.valueOf()):()=>6e4*(f.timezoneOffset||0):Y=>6e4*new Date(Y.toString()).getTimezoneOffset()}dateFormat(f,N,K){if(!j(N)||isNaN(N))return o.defaultOptions.lang&&o.defaultOptions.lang.invalidDate||"";f=I(f,"%Y-%m-%d %H:%M:%S");let Y=this,R=new this.Date(N),A=this.get("Hours",R),L=this.get("Day",R),b=this.get("Date",R),c=this.get("Month",R),d=this.get("FullYear",R),v=o.defaultOptions.lang,h=v&&v.weekdays,g=v&&v.shortWeekdays;return V(F({a:g?g[L]:h[L].substr(0,3),A:h[L],d:k(b),e:k(b,2," "),w:L,b:v.shortMonths[c],B:v.months[c],m:k(c+1),o:c+1,y:d.toString().substr(2,2),Y:d,H:k(A),k:A,I:k(A%12||12),l:A%12||12,M:k(this.get("Minutes",R)),p:A<12?"AM":"PM",P:A<12?"am":"pm",S:k(this.get("Seconds",R)),L:k(Math.floor(N%1e3),3)},o.dateFormats),function(x,z){for(;f.indexOf("%"+z)!==-1;)f=f.replace("%"+z,typeof x=="function"?x.call(Y,N):x)}),K?f.substr(0,1).toUpperCase()+f.substr(1):f}resolveDTLFormat(f){return C(f,!0)?f:{main:(f=U(f))[0],from:f[1],to:f[2]}}getTimeTicks(f,N,K,Y){let R,A,L,b,c=this,d=c.Date,v=[],h={},g=new d(N),x=f.unitRange,z=f.count||1;if(Y=I(Y,1),j(N)){c.set("Milliseconds",g,x>=p.second?0:z*Math.floor(c.get("Milliseconds",g)/z)),x>=p.second&&c.set("Seconds",g,x>=p.minute?0:z*Math.floor(c.get("Seconds",g)/z)),x>=p.minute&&c.set("Minutes",g,x>=p.hour?0:z*Math.floor(c.get("Minutes",g)/z)),x>=p.hour&&c.set("Hours",g,x>=p.day?0:z*Math.floor(c.get("Hours",g)/z)),x>=p.day&&c.set("Date",g,x>=p.month?1:Math.max(1,z*Math.floor(c.get("Date",g)/z))),x>=p.month&&(c.set("Month",g,x>=p.year?0:z*Math.floor(c.get("Month",g)/z)),A=c.get("FullYear",g)),x>=p.year&&(A-=A%z,c.set("FullYear",g,A)),x===p.week&&(b=c.get("Day",g),c.set("Date",g,c.get("Date",g)-b+Y+(b<Y?-7:0))),A=c.get("FullYear",g);let H=c.get("Month",g),ie=c.get("Date",g),O=c.get("Hours",g);N=g.getTime(),(c.variableTimezone||!c.useUTC)&&j(K)&&(L=K-N>4*p.month||c.getTimezoneOffset(N)!==c.getTimezoneOffset(K));let Q=g.getTime();for(R=1;Q<K;)v.push(Q),x===p.year?Q=c.makeTime(A+R*z,0):x===p.month?Q=c.makeTime(A,H+R*z):L&&(x===p.day||x===p.week)?Q=c.makeTime(A,H,ie+R*z*(x===p.day?1:7)):L&&x===p.hour&&z>1?Q=c.makeTime(A,H,ie,O+R*z):Q+=x*z,R++;v.push(Q),x<=p.hour&&v.length<1e4&&v.forEach(function(ee){ee%18e5==0&&c.dateFormat("%H%M%S%L",ee)==="000000000"&&(h[ee]="day")})}return v.info=F(f,{higherRanks:h,totalRange:x*z}),v}getDateFormat(f,N,K,Y){let R=this.dateFormat("%m-%d %H:%M:%S.%L",N),A="01-01 00:00:00.000",L={millisecond:15,second:12,minute:9,hour:6,day:3},b="millisecond",c=b;for(b in p){if(f===p.week&&+this.dateFormat("%w",N)===K&&R.substr(6)===A.substr(6)){b="week";break}if(p[b]>f){b=c;break}if(L[b]&&R.substr(L[b])!==A.substr(L[b]))break;b!=="week"&&(c=b)}return this.resolveDTLFormat(Y[b]).main}}return y.formatCache={},y}),n(i,"Core/Defaults.js",[i["Core/Chart/ChartDefaults.js"],i["Core/Globals.js"],i["Core/Color/Palettes.js"],i["Core/Time.js"],i["Core/Utilities.js"]],function(o,s,l,j,E){let{isTouchDevice:F}=s,{fireEvent:_,merge:C}=E,D={colors:l.colors,symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],decimalPoint:".",numericSymbols:["k","M","G","T","P","E"],resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{buttonTheme:{fill:"#f7f7f7",padding:8,r:2,stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontSize:"0.8em",fontWeight:"normal"},states:{hover:{fill:"#e6e6e6"},select:{fill:"#e6e9ff",style:{color:"#000000",fontWeight:"bold"}},disabled:{style:{color:"#cccccc"}}}}},time:{Date:void 0,getTimezoneOffset:void 0,timezone:void 0,timezoneOffset:0,useUTC:!0},chart:o,title:{style:{color:"#333333",fontWeight:"bold"},text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{style:{color:"#666666",fontSize:"0.8em"},text:"",align:"center",widthAdjust:-44},caption:{margin:15,style:{color:"#666666",fontSize:"0.8em"},text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},legend:{enabled:!0,align:"center",alignColumns:!0,className:"highcharts-no-tooltip",layout:"horizontal",itemMarginBottom:2,itemMarginTop:2,labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{style:{fontSize:"0.8em"},activeColor:"#0022ff",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"0.8em",textDecoration:"none",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#666666",textDecoration:"line-through"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontSize:"0.8em",fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:{duration:300,easing:k=>Math.sqrt(1-Math.pow(k-1,2))},borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %e %b, %H:%M:%S.%L",second:"%A, %e %b, %H:%M:%S",minute:"%A, %e %b, %H:%M",hour:"%A, %e %b, %H:%M",day:"%A, %e %b %Y",week:"Week from %A, %e %b %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerShape:"callout",hideDelay:500,padding:8,shape:"callout",shared:!1,snap:F?25:10,headerFormat:'<span style="font-size: 0.8em">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',backgroundColor:"#ffffff",borderWidth:void 0,shadow:!0,stickOnContact:!1,style:{color:"#333333",cursor:"default",fontSize:"0.8em"},useHTML:!1},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"0.6em"},text:"Highcharts.com"}};D.chart.styledMode=!1;let V=new j(D.time);return{defaultOptions:D,defaultTime:V,getOptions:function(){return D},setOptions:function(k){return _(s,"setOptions",{options:k}),C(!0,D,k),(k.time||k.global)&&(s.time?s.time.update(C(D.global,D.time,k.global,k.time)):s.time=V),D}}}),n(i,"Core/Color/Color.js",[i["Core/Globals.js"],i["Core/Utilities.js"]],function(o,s){let{isNumber:l,merge:j,pInt:E}=s;class F{static parse(C){return C?new F(C):F.None}constructor(C){let D,V,k,I;this.rgba=[NaN,NaN,NaN,NaN],this.input=C;let U=o.Color;if(U&&U!==F)return new U(C);if(typeof C=="object"&&C.stops!==void 0)this.stops=C.stops.map(p=>new F(p[1]));else if(typeof C=="string"){if(this.input=C=F.names[C.toLowerCase()]||C,C.charAt(0)==="#"){let p=C.length,a=parseInt(C.substr(1),16);p===7?V=[(16711680&a)>>16,(65280&a)>>8,255&a,1]:p===4&&(V=[(3840&a)>>4|(3840&a)>>8,(240&a)>>4|240&a,(15&a)<<4|15&a,1])}if(!V)for(k=F.parsers.length;k--&&!V;)(D=(I=F.parsers[k]).regex.exec(C))&&(V=I.parse(D))}V&&(this.rgba=V)}get(C){let D=this.input,V=this.rgba;if(typeof D=="object"&&this.stops!==void 0){let k=j(D);return k.stops=[].slice.call(k.stops),this.stops.forEach((I,U)=>{k.stops[U]=[k.stops[U][0],I.get(C)]}),k}return V&&l(V[0])?C!=="rgb"&&(C||V[3]!==1)?C==="a"?`${V[3]}`:"rgba("+V.join(",")+")":"rgb("+V[0]+","+V[1]+","+V[2]+")":D}brighten(C){let D=this.rgba;if(this.stops)this.stops.forEach(function(V){V.brighten(C)});else if(l(C)&&C!==0)for(let V=0;V<3;V++)D[V]+=E(255*C),D[V]<0&&(D[V]=0),D[V]>255&&(D[V]=255);return this}setOpacity(C){return this.rgba[3]=C,this}tweenTo(C,D){let V=this.rgba,k=C.rgba;if(!l(V[0])||!l(k[0]))return C.input||"none";let I=k[3]!==1||V[3]!==1;return(I?"rgba(":"rgb(")+Math.round(k[0]+(V[0]-k[0])*(1-D))+","+Math.round(k[1]+(V[1]-k[1])*(1-D))+","+Math.round(k[2]+(V[2]-k[2])*(1-D))+(I?","+(k[3]+(V[3]-k[3])*(1-D)):"")+")"}}return F.names={white:"#ffffff",black:"#000000"},F.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(_){return[E(_[1]),E(_[2]),E(_[3]),parseFloat(_[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(_){return[E(_[1]),E(_[2]),E(_[3]),1]}}],F.None=new F(""),F}),n(i,"Core/Animation/Fx.js",[i["Core/Color/Color.js"],i["Core/Globals.js"],i["Core/Utilities.js"]],function(o,s,l){let{parse:j}=o,{win:E}=s,{isNumber:F,objectEach:_}=l;class C{constructor(V,k,I){this.pos=NaN,this.options=k,this.elem=V,this.prop=I}dSetter(){let V=this.paths,k=V&&V[0],I=V&&V[1],U=this.now||0,p=[];if(U!==1&&k&&I)if(k.length===I.length&&U<1)for(let a=0;a<I.length;a++){let u=k[a],y=I[a],w=[];for(let f=0;f<y.length;f++){let N=u[f],K=y[f];F(N)&&F(K)&&!(y[0]==="A"&&(f===4||f===5))?w[f]=N+U*(K-N):w[f]=K}p.push(w)}else p=I;else p=this.toD||[];this.elem.attr("d",p,void 0,!0)}update(){let V=this.elem,k=this.prop,I=this.now,U=this.options.step;this[k+"Setter"]?this[k+"Setter"]():V.attr?V.element&&V.attr(k,I,null,!0):V.style[k]=I+this.unit,U&&U.call(V,I,this)}run(V,k,I){let U=this,p=U.options,a=function(w){return!a.stopped&&U.step(w)},u=E.requestAnimationFrame||function(w){setTimeout(w,13)},y=function(){for(let w=0;w<C.timers.length;w++)C.timers[w]()||C.timers.splice(w--,1);C.timers.length&&u(y)};V!==k||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=V,this.end=k,this.unit=I,this.now=this.start,this.pos=0,a.elem=this.elem,a.prop=this.prop,a()&&C.timers.push(a)===1&&u(y)):(delete p.curAnim[this.prop],p.complete&&Object.keys(p.curAnim).length===0&&p.complete.call(this.elem))}step(V){let k,I,U=+new Date,p=this.options,a=this.elem,u=p.complete,y=p.duration,w=p.curAnim;return a.attr&&!a.element?k=!1:V||U>=y+this.startTime?(this.now=this.end,this.pos=1,this.update(),w[this.prop]=!0,I=!0,_(w,function(f){f!==!0&&(I=!1)}),I&&u&&u.call(a),k=!1):(this.pos=p.easing((U-this.startTime)/y),this.now=this.start+(this.end-this.start)*this.pos,this.update(),k=!0),k}initPath(V,k,I){let U=V.startX,p=V.endX,a=I.slice(),u=V.isArea,y=u?2:1,w,f,N,K,Y=k&&k.slice();if(!Y)return[a,a];function R(L,b){for(;L.length<f;){let c=L[0],d=b[f-L.length];if(d&&c[0]==="M"&&(d[0]==="C"?L[0]=["C",c[1],c[2],c[1],c[2],c[1],c[2]]:L[0]=["L",c[1],c[2]]),L.unshift(c),u){let v=L.pop();L.push(L[L.length-1],v)}}}function A(L){for(;L.length<f;){let b=L[Math.floor(L.length/y)-1].slice();if(b[0]==="C"&&(b[1]=b[5],b[2]=b[6]),u){let c=L[Math.floor(L.length/y)].slice();L.splice(L.length/2,0,b,c)}else L.push(b)}}if(U&&p&&p.length){for(N=0;N<U.length;N++){if(U[N]===p[0]){w=N;break}if(U[0]===p[p.length-U.length+N]){w=N,K=!0;break}if(U[U.length-1]===p[p.length-U.length+N]){w=U.length-N;break}}w===void 0&&(Y=[])}return Y.length&&F(w)&&(f=a.length+w*y,K?(R(Y,a),A(a)):(R(a,Y),A(Y))),[Y,a]}fillSetter(){C.prototype.strokeSetter.apply(this,arguments)}strokeSetter(){this.elem.attr(this.prop,j(this.start).tweenTo(j(this.end),this.pos),void 0,!0)}}return C.timers=[],C}),n(i,"Core/Animation/AnimationUtilities.js",[i["Core/Animation/Fx.js"],i["Core/Utilities.js"]],function(o,s){let{defined:l,getStyle:j,isArray:E,isNumber:F,isObject:_,merge:C,objectEach:D,pick:V}=s;function k(U){return _(U)?C({duration:500,defer:0},U):{duration:U?500:0,defer:0}}function I(U,p){let a=o.timers.length;for(;a--;)o.timers[a].elem!==U||p&&p!==o.timers[a].prop||(o.timers[a].stopped=!0)}return{animate:function(U,p,a){let u,y="",w,f,N;_(a)||(N=arguments,a={duration:N[2],easing:N[3],complete:N[4]}),F(a.duration)||(a.duration=400),a.easing=typeof a.easing=="function"?a.easing:Math[a.easing]||Math.easeInOutSine,a.curAnim=C(p),D(p,function(K,Y){I(U,Y),f=new o(U,a,Y),w=void 0,Y==="d"&&E(p.d)?(f.paths=f.initPath(U,U.pathArray,p.d),f.toD=p.d,u=0,w=1):U.attr?u=U.attr(Y):(u=parseFloat(j(U,Y))||0,Y!=="opacity"&&(y="px")),w||(w=K),typeof w=="string"&&w.match("px")&&(w=w.replace(/px/g,"")),f.run(u,w,y)})},animObject:k,getDeferredAnimation:function(U,p,a){let u=k(p),y=a?[a]:U.series,w=0,f=0;return y.forEach(N=>{let K=k(N.options.animation);w=_(p)&&l(p.defer)?u.defer:Math.max(w,K.duration+K.defer),f=Math.min(u.duration,K.duration)}),U.renderer.forExport&&(w=0),{defer:Math.max(0,w-f),duration:Math.min(w,f)}},setAnimation:function(U,p){p.renderer.globalAnimation=V(U,p.options.chart.animation,!0)},stop:I}}),n(i,"Core/Renderer/HTML/AST.js",[i["Core/Globals.js"],i["Core/Utilities.js"]],function(o,s){let{SVG_NS:l,win:j}=o,{attr:E,createElement:F,css:_,error:C,isFunction:D,isString:V,objectEach:k,splat:I}=s,{trustedTypes:U}=j,p=U&&D(U.createPolicy)&&U.createPolicy("highcharts",{createHTML:w=>w}),a=p?p.createHTML(""):"",u=function(){try{return!!new DOMParser().parseFromString(a,"text/html")}catch{return!1}}();class y{static filterUserAttributes(f){return k(f,(N,K)=>{let Y=!0;y.allowedAttributes.indexOf(K)===-1&&(Y=!1),["background","dynsrc","href","lowsrc","src"].indexOf(K)!==-1&&(Y=V(N)&&y.allowedReferences.some(R=>N.indexOf(R)===0)),Y||(C(33,!1,void 0,{"Invalid attribute in config":`${K}`}),delete f[K]),V(N)&&f[K]&&(f[K]=N.replace(/</g,"&lt;"))}),f}static parseStyle(f){return f.split(";").reduce((N,K)=>{let Y=K.split(":").map(A=>A.trim()),R=Y.shift();return R&&Y.length&&(N[R.replace(/-([a-z])/g,A=>A[1].toUpperCase())]=Y.join(":")),N},{})}static setElementHTML(f,N){f.innerHTML=y.emptyHTML,N&&new y(N).addToDOM(f)}constructor(f){this.nodes=typeof f=="string"?this.parseMarkup(f):f}addToDOM(f){return function N(K,Y){let R;return I(K).forEach(function(A){let L,b=A.tagName,c=A.textContent?o.doc.createTextNode(A.textContent):void 0,d=y.bypassHTMLFiltering;if(b)if(b==="#text")L=c;else if(y.allowedTags.indexOf(b)!==-1||d){let v=b==="svg"?l:Y.namespaceURI||l,h=o.doc.createElementNS(v,b),g=A.attributes||{};k(A,function(x,z){z!=="tagName"&&z!=="attributes"&&z!=="children"&&z!=="style"&&z!=="textContent"&&(g[z]=x)}),E(h,d?g:y.filterUserAttributes(g)),A.style&&_(h,A.style),c&&h.appendChild(c),N(A.children||[],h),L=h}else C(33,!1,void 0,{"Invalid tagName in config":b});L&&Y.appendChild(L),R=L}),R}(this.nodes,f)}parseMarkup(f){let N,K=[];if(f=f.trim().replace(/ style=(["'])/g," data-style=$1"),u)N=new DOMParser().parseFromString(p?p.createHTML(f):f,"text/html");else{let R=F("div");R.innerHTML=f,N={body:R}}let Y=(R,A)=>{let L=R.nodeName.toLowerCase(),b={tagName:L};L==="#text"&&(b.textContent=R.textContent||"");let c=R.attributes;if(c){let d={};[].forEach.call(c,v=>{v.name==="data-style"?b.style=y.parseStyle(v.value):d[v.name]=v.value}),b.attributes=d}if(R.childNodes.length){let d=[];[].forEach.call(R.childNodes,v=>{Y(v,d)}),d.length&&(b.children=d)}A.push(b)};return[].forEach.call(N.body.childNodes,R=>Y(R,K)),K}}return y.allowedAttributes=["alt","aria-controls","aria-describedby","aria-expanded","aria-haspopup","aria-hidden","aria-label","aria-labelledby","aria-live","aria-pressed","aria-readonly","aria-roledescription","aria-selected","class","clip-path","color","colspan","cx","cy","d","dx","dy","disabled","fill","filterUnits","flood-color","flood-opacity","height","href","id","in","markerHeight","markerWidth","offset","opacity","orient","padding","paddingLeft","paddingRight","patternUnits","r","refX","refY","role","scope","slope","src","startOffset","stdDeviation","stroke","stroke-linecap","stroke-width","style","tableValues","result","rowspan","summary","target","tabindex","text-align","text-anchor","textAnchor","textLength","title","type","valign","width","x","x1","x2","xlink:href","y","y1","y2","zIndex"],y.allowedReferences=["https://","http://","mailto:","/","../","./","#"],y.allowedTags=["a","abbr","b","br","button","caption","circle","clipPath","code","dd","defs","div","dl","dt","em","feComponentTransfer","feDropShadow","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feOffset","feMerge","feMergeNode","filter","h1","h2","h3","h4","h5","h6","hr","i","img","li","linearGradient","marker","ol","p","path","pattern","pre","rect","small","span","stop","strong","style","sub","sup","svg","table","text","textPath","thead","title","tbody","tspan","td","th","tr","u","ul","#text"],y.emptyHTML=a,y.bypassHTMLFiltering=!1,y}),n(i,"Core/Templating.js",[i["Core/Defaults.js"],i["Core/Utilities.js"]],function(o,s){let{defaultOptions:l,defaultTime:j}=o,{extend:E,getNestedProperty:F,isArray:_,isNumber:C,isObject:D,pick:V,pInt:k}=s,I={add:(a,u)=>a+u,divide:(a,u)=>u!==0?a/u:"",eq:(a,u)=>a==u,each:function(a){let u=arguments[arguments.length-1];return!!_(a)&&a.map((y,w)=>U(u.body,E(D(y)?y:{"@this":y},{"@index":w,"@first":w===0,"@last":w===a.length-1}))).join("")},ge:(a,u)=>a>=u,gt:(a,u)=>a>u,if:a=>!!a,le:(a,u)=>a<=u,lt:(a,u)=>a<u,multiply:(a,u)=>a*u,ne:(a,u)=>a!=u,subtract:(a,u)=>a-u,unless:a=>!a};function U(a="",u,y){let w=/\{([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= #\(\)]+)\}/g,f=/\(([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= ]+)\)/g,N=[],K=/f$/,Y=/\.([0-9])/,R=l.lang,A=y&&y.time||j,L=y&&y.numberFormatter||p,b=(g="")=>{let x;return g==="true"||g!=="false"&&((x=Number(g)).toString()===g?x:F(g,u))},c,d,v=0,h;for(;(c=w.exec(a))!==null;){let g=f.exec(c[1]);g&&(c=g,h=!0),d&&d.isBlock||(d={ctx:u,expression:c[1],find:c[0],isBlock:c[1].charAt(0)==="#",start:c.index,startInner:c.index+c[0].length,length:c[0].length});let x=c[1].split(" ")[0].replace("#","");I[x]&&(d.isBlock&&x===d.fn&&v++,d.fn||(d.fn=x));let z=c[1]==="else";if(d.isBlock&&d.fn&&(c[1]===`/${d.fn}`||z))if(v)!z&&v--;else{let H=d.startInner,ie=a.substr(H,c.index-H);d.body===void 0?(d.body=ie,d.startInner=c.index+c[0].length):d.elseBody=ie,d.find+=ie+c[0],z||(N.push(d),d=void 0)}else d.isBlock||N.push(d);if(g&&!(d!=null&&d.isBlock))break}return N.forEach(g=>{let x,z,{body:H,elseBody:ie,expression:O,fn:Q}=g;if(Q){let ee=[g],$=O.split(" ");for(z=I[Q].length;z--;)ee.unshift(b($[z+1]));x=I[Q].apply(u,ee),g.isBlock&&typeof x=="boolean"&&(x=U(x?H:ie,u,y))}else{let ee=O.split(":");if(x=b(ee.shift()||""),ee.length&&typeof x=="number"){let $=ee.join(":");if(K.test($)){let ce=parseInt(($.match(Y)||["","-1"])[1],10);x!==null&&(x=L(x,ce,R.decimalPoint,$.indexOf(",")>-1?R.thousandsSep:""))}else x=A.dateFormat($,x)}}a=a.replace(g.find,V(x,""))}),h?U(a,u,y):a}function p(a,u,y,w){let f,N;a=+a||0,u=+u;let K=l.lang,Y=(a.toString().split(".")[1]||"").split("e")[0].length,R=a.toString().split("e"),A=u;u===-1?u=Math.min(Y,20):C(u)?u&&R[1]&&R[1]<0&&((N=u+ +R[1])>=0?(R[0]=(+R[0]).toExponential(N).split("e")[0],u=N):(R[0]=R[0].split(".")[0]||0,a=u<20?(R[0]*Math.pow(10,R[1])).toFixed(u):0,R[1]=0)):u=2;let L=(Math.abs(R[1]?R[0]:a)+Math.pow(10,-Math.max(u,Y)-1)).toFixed(u),b=String(k(L)),c=b.length>3?b.length%3:0;return y=V(y,K.decimalPoint),w=V(w,K.thousandsSep),f=(a<0?"-":"")+(c?b.substr(0,c)+w:""),0>+R[1]&&!A?f="0":f+=b.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+w),u?f+=y+L.slice(-u):+f==0&&(f="0"),R[1]&&+f!=0&&(f+="e"+R[1]),f}return{dateFormat:function(a,u,y){return j.dateFormat(a,u,y)},format:U,helpers:I,numberFormat:p}}),n(i,"Core/Renderer/RendererRegistry.js",[i["Core/Globals.js"]],function(o){var s,l;let j;return(l=s||(s={})).rendererTypes={},l.getRendererType=function(E=j){return l.rendererTypes[E]||l.rendererTypes[j]},l.registerRendererType=function(E,F,_){l.rendererTypes[E]=F,(!j||_)&&(j=E,o.Renderer=F)},s}),n(i,"Core/Renderer/RendererUtilities.js",[i["Core/Utilities.js"]],function(o){var s;let{clamp:l,pick:j,pushUnique:E,stableSort:F}=o;return(s||(s={})).distribute=function _(C,D,V){let k=C,I=k.reducedLen||D,U=(b,c)=>b.target-c.target,p=[],a=C.length,u=[],y=p.push,w,f,N,K=!0,Y,R,A=0,L;for(w=a;w--;)A+=C[w].size;if(A>I){for(F(C,(b,c)=>(c.rank||0)-(b.rank||0)),N=(L=C[0].rank===C[C.length-1].rank)?a/2:-1,f=L?N:a-1;N&&A>I;)Y=C[w=Math.floor(f)],E(u,w)&&(A-=Y.size),f+=N,L&&f>=C.length&&(N/=2,f=N);u.sort((b,c)=>c-b).forEach(b=>y.apply(p,C.splice(b,1)))}for(F(C,U),C=C.map(b=>({size:b.size,targets:[b.target],align:j(b.align,.5)}));K;){for(w=C.length;w--;)Y=C[w],R=(Math.min.apply(0,Y.targets)+Math.max.apply(0,Y.targets))/2,Y.pos=l(R-Y.size*Y.align,0,D-Y.size);for(w=C.length,K=!1;w--;)w>0&&C[w-1].pos+C[w-1].size>C[w].pos&&(C[w-1].size+=C[w].size,C[w-1].targets=C[w-1].targets.concat(C[w].targets),C[w-1].align=.5,C[w-1].pos+C[w-1].size>D&&(C[w-1].pos=D-C[w-1].size),C.splice(w,1),K=!0)}return y.apply(k,p),w=0,C.some(b=>{let c=0;return(b.targets||[]).some(()=>(k[w].pos=b.pos+c,V!==void 0&&Math.abs(k[w].pos-k[w].target)>V?(k.slice(0,w+1).forEach(d=>delete d.pos),k.reducedLen=(k.reducedLen||D)-.1*D,k.reducedLen>.1*D&&_(k,D,V),!0):(c+=k[w].size,w++,!1)))}),F(k,U),k},s}),n(i,"Core/Renderer/SVG/SVGElement.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Color/Color.js"],i["Core/Globals.js"],i["Core/Utilities.js"]],function(o,s,l,j){let{animate:E,animObject:F,stop:_}=o,{deg2rad:C,doc:D,svg:V,SVG_NS:k,win:I}=l,{addEvent:U,attr:p,createElement:a,crisp:u,css:y,defined:w,erase:f,extend:N,fireEvent:K,isArray:Y,isFunction:R,isObject:A,isString:L,merge:b,objectEach:c,pick:d,pInt:v,pushUnique:h,replaceNested:g,syncTimeout:x,uniqueKey:z}=j;class H{_defaultGetter(O){let Q=d(this[O+"Value"],this[O],this.element?this.element.getAttribute(O):null,0);return/^[\-0-9\.]+$/.test(Q)&&(Q=parseFloat(Q)),Q}_defaultSetter(O,Q,ee){ee.setAttribute(Q,O)}add(O){let Q,ee=this.renderer,$=this.element;return O&&(this.parentGroup=O),this.textStr!==void 0&&this.element.nodeName==="text"&&ee.buildText(this),this.added=!0,(!O||O.handleZ||this.zIndex)&&(Q=this.zIndexSetter()),Q||(O?O.element:ee.box).appendChild($),this.onAdd&&this.onAdd(),this}addClass(O,Q){let ee=Q?"":this.attr("class")||"";return(O=(O||"").split(/ /g).reduce(function($,ce){return ee.indexOf(ce)===-1&&$.push(ce),$},ee?[ee]:[]).join(" "))!==ee&&this.attr("class",O),this}afterSetters(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)}align(O,Q,ee,$=!0){let ce,S,P,B,q={},m=this.renderer,T=m.alignedObjects,M=!!O;O?(this.alignOptions=O,this.alignByTranslate=Q,this.alignTo=ee):(O=this.alignOptions||{},Q=this.alignByTranslate,ee=this.alignTo);let G=!ee||L(ee)?ee||"renderer":void 0;G&&(M&&h(T,this),ee=void 0);let W=d(ee,m[G],m),J=O.align,ne=O.verticalAlign;return ce=(W.x||0)+(O.x||0),S=(W.y||0)+(O.y||0),J==="right"?P=1:J==="center"&&(P=2),P&&(ce+=((W.width||0)-(O.width||0))/P),q[Q?"translateX":"x"]=Math.round(ce),ne==="bottom"?B=1:ne==="middle"&&(B=2),B&&(S+=((W.height||0)-(O.height||0))/B),q[Q?"translateY":"y"]=Math.round(S),$&&(this[this.placed?"animate":"attr"](q),this.placed=!0),this.alignAttr=q,this}alignSetter(O){let Q={left:"start",center:"middle",right:"end"};Q[O]&&(this.alignValue=O,this.element.setAttribute("text-anchor",Q[O]))}animate(O,Q,ee){let $=F(d(Q,this.renderer.globalAnimation,!0)),ce=$.defer;return D.hidden&&($.duration=0),$.duration!==0?(ee&&($.complete=ee),x(()=>{this.element&&E(this,O,$)},ce)):(this.attr(O,void 0,ee||$.complete),c(O,function(S,P){$.step&&$.step.call(this,S,{prop:P,pos:1,elem:this})},this)),this}applyTextOutline(O){let Q=this.element;O.indexOf("contrast")!==-1&&(O=O.replace(/contrast/g,this.renderer.getContrast(Q.style.fill)));let ee=O.split(" "),$=ee[ee.length-1],ce=ee[0];if(ce&&ce!=="none"&&l.svg){this.fakeTS=!0,ce=ce.replace(/(^[\d\.]+)(.*?)$/g,function(m,T,M){return 2*Number(T)+M}),this.removeTextOutline();let S=D.createElementNS(k,"tspan");p(S,{class:"highcharts-text-outline",fill:$,stroke:$,"stroke-width":ce,"stroke-linejoin":"round"});let P=Q.querySelector("textPath")||Q;[].forEach.call(P.childNodes,m=>{let T=m.cloneNode(!0);T.removeAttribute&&["fill","stroke","stroke-width","stroke"].forEach(M=>T.removeAttribute(M)),S.appendChild(T)});let B=0;[].forEach.call(P.querySelectorAll("text tspan"),m=>{B+=Number(m.getAttribute("dy"))});let q=D.createElementNS(k,"tspan");q.textContent="​",p(q,{x:Number(Q.getAttribute("x")),dy:-B}),S.appendChild(q),P.insertBefore(S,P.firstChild)}}attr(O,Q,ee,$){let{element:ce}=this,S=H.symbolCustomAttribs,P,B,q=this,m;return typeof O=="string"&&Q!==void 0&&(P=O,(O={})[P]=Q),typeof O=="string"?q=(this[O+"Getter"]||this._defaultGetter).call(this,O,ce):(c(O,function(T,M){m=!1,$||_(this,M),this.symbolName&&S.indexOf(M)!==-1&&(B||(this.symbolAttr(O),B=!0),m=!0),this.rotation&&(M==="x"||M==="y")&&(this.doTransform=!0),m||(this[M+"Setter"]||this._defaultSetter).call(this,T,M,ce)},this),this.afterSetters()),ee&&ee.call(this),q}clip(O){if(O&&!O.clipPath){let Q=z()+"-",ee=this.renderer.createElement("clipPath").attr({id:Q}).add(this.renderer.defs);N(O,{clipPath:ee,id:Q,count:0}),O.add(ee)}return this.attr("clip-path",O?`url(${this.renderer.url}#${O.id})`:"none")}crisp(O,Q){Q=Math.round(Q||O.strokeWidth||0);let ee=O.x||this.x||0,$=O.y||this.y||0,ce=(O.width||this.width||0)+ee,S=(O.height||this.height||0)+$,P=u(ee,Q),B=u($,Q);return N(O,{x:P,y:B,width:u(ce,Q)-P,height:u(S,Q)-B}),w(O.strokeWidth)&&(O.strokeWidth=Q),O}complexColor(O,Q,ee){let $=this.renderer,ce,S,P,B,q,m,T,M,G,W,J=[],ne;K(this.renderer,"complexColor",{args:arguments},function(){if(O.radialGradient?S="radialGradient":O.linearGradient&&(S="linearGradient"),S){if(P=O[S],q=$.gradients,m=O.stops,G=ee.radialReference,Y(P)&&(O[S]=P={x1:P[0],y1:P[1],x2:P[2],y2:P[3],gradientUnits:"userSpaceOnUse"}),S==="radialGradient"&&G&&!w(P.gradientUnits)&&(B=P,P=b(P,$.getRadialAttr(G,B),{gradientUnits:"userSpaceOnUse"})),c(P,function(oe,se){se!=="id"&&J.push(se,oe)}),c(m,function(oe){J.push(oe)}),q[J=J.join(",")])W=q[J].attr("id");else{P.id=W=z();let oe=q[J]=$.createElement(S).attr(P).add($.defs);oe.radAttr=B,oe.stops=[],m.forEach(function(se){se[1].indexOf("rgba")===0?(T=(ce=s.parse(se[1])).get("rgb"),M=ce.get("a")):(T=se[1],M=1);let ue=$.createElement("stop").attr({offset:se[0],"stop-color":T,"stop-opacity":M}).add(oe);oe.stops.push(ue)})}ne="url("+$.url+"#"+W+")",ee.setAttribute(Q,ne),ee.gradient=J,O.toString=function(){return ne}}})}css(O){let Q=this.styles,ee={},$=this.element,ce,S=!Q;if(Q&&c(O,function(P,B){Q&&Q[B]!==P&&(ee[B]=P,S=!0)}),S){Q&&(O=N(Q,ee)),O.width===null||O.width==="auto"?delete this.textWidth:$.nodeName.toLowerCase()==="text"&&O.width&&(ce=this.textWidth=v(O.width)),N(this.styles,O),ce&&!V&&this.renderer.forExport&&delete O.width;let P=b(O);$.namespaceURI===this.SVG_NS&&(["textOutline","textOverflow","width"].forEach(B=>P&&delete P[B]),P.color&&(P.fill=P.color)),y($,P)}return this.added&&(this.element.nodeName==="text"&&this.renderer.buildText(this),O.textOutline&&this.applyTextOutline(O.textOutline)),this}dashstyleSetter(O){let Q,ee=this["stroke-width"];if(ee==="inherit"&&(ee=1),O=O&&O.toLowerCase()){let $=O.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(Q=$.length;Q--;)$[Q]=""+v($[Q])*d(ee,NaN);O=$.join(",").replace(/NaN/g,"none"),this.element.setAttribute("stroke-dasharray",O)}}destroy(){var B;let O=this,Q=O.element||{},ee=O.renderer,$=Q.ownerSVGElement,ce=Q.nodeName==="SPAN"&&O.parentGroup||void 0,S,P;if(Q.onclick=Q.onmouseout=Q.onmouseover=Q.onmousemove=Q.point=null,_(O),O.clipPath&&$){let q=O.clipPath;[].forEach.call($.querySelectorAll("[clip-path],[CLIP-PATH]"),function(m){m.getAttribute("clip-path").indexOf(q.element.id)>-1&&m.removeAttribute("clip-path")}),O.clipPath=q.destroy()}if(O.connector=(B=O.connector)==null?void 0:B.destroy(),O.stops){for(P=0;P<O.stops.length;P++)O.stops[P].destroy();O.stops.length=0,O.stops=void 0}for(O.safeRemoveChild(Q);ce&&ce.div&&ce.div.childNodes.length===0;)S=ce.parentGroup,O.safeRemoveChild(ce.div),delete ce.div,ce=S;O.alignOptions&&f(ee.alignedObjects,O),c(O,function(q,m){O[m]&&O[m].parentGroup===O&&O[m].destroy&&O[m].destroy(),delete O[m]})}dSetter(O,Q,ee){Y(O)&&(typeof O[0]=="string"&&(O=this.renderer.pathToSegments(O)),this.pathArray=O,O=O.reduce(($,ce,S)=>ce&&ce.join?(S?$+" ":"")+ce.join(" "):(ce||"").toString(),"")),/(NaN| {2}|^$)/.test(O)&&(O="M 0 0"),this[Q]!==O&&(ee.setAttribute(Q,O),this[Q]=O)}fillSetter(O,Q,ee){typeof O=="string"?ee.setAttribute(Q,O):O&&this.complexColor(O,Q,ee)}hrefSetter(O,Q,ee){ee.setAttributeNS("http://www.w3.org/1999/xlink",Q,O)}getBBox(O,Q){let ee,$,ce,S,{alignValue:P,element:B,renderer:q,styles:m,textStr:T}=this,{cache:M,cacheKeys:G}=q,W=B.namespaceURI===this.SVG_NS,J=d(Q,this.rotation,0),ne=q.styledMode?B&&H.prototype.getStyle.call(B,"font-size"):m.fontSize;if(w(T)&&((S=T.toString()).indexOf("<")===-1&&(S=S.replace(/[0-9]/g,"0")),S+=["",q.rootFontSize,ne,J,this.textWidth,P,m.textOverflow,m.fontWeight].join(",")),S&&!O&&(ee=M[S]),!ee){if(W||q.forExport){try{ce=this.fakeTS&&function(oe){let se=B.querySelector(".highcharts-text-outline");se&&y(se,{display:oe})},R(ce)&&ce("none"),ee=B.getBBox?N({},B.getBBox()):{width:B.offsetWidth,height:B.offsetHeight,x:0,y:0},R(ce)&&ce("")}catch{}(!ee||ee.width<0)&&(ee={x:0,y:0,width:0,height:0})}else ee=this.htmlGetBBox();$=ee.height,W&&(ee.height=$={"11px,17":14,"13px,20":16}[`${ne||""},${Math.round($)}`]||$),J&&(ee=this.getRotatedBox(ee,J))}if(S&&(T===""||ee.height>0)){for(;G.length>250;)delete M[G.shift()];M[S]||G.push(S),M[S]=ee}return ee}getRotatedBox(O,Q){let{x:ee,y:$,width:ce,height:S}=O,{alignValue:P,translateY:B,rotationOriginX:q=0,rotationOriginY:m=0}=this,T={right:1,center:.5}[P||0]||0,M=Number(this.element.getAttribute("y")||0)-(B?0:$),G=Q*C,W=(Q-90)*C,J=Math.cos(G),ne=Math.sin(G),oe=ce*J,se=ce*ne,ue=Math.cos(W),pe=Math.sin(W),[[Z,X],[te,re]]=[q,m].map(ke=>[ke-ke*J,ke*ne]),ae=ee+T*(ce-oe)+Z+re+M*ue,de=ae+oe,le=de-S*ue,he=le-oe,fe=$+M-T*se-X+te+M*pe,me=fe+se,ge=me-S*pe,xe=ge-se,ye=Math.min(ae,de,le,he),je=Math.min(fe,me,ge,xe),Ae=Math.max(ae,de,le,he)-ye,ve=Math.max(fe,me,ge,xe)-je;return{x:ye,y:je,width:Ae,height:ve}}getStyle(O){return I.getComputedStyle(this.element||this,"").getPropertyValue(O)}hasClass(O){return(""+this.attr("class")).split(" ").indexOf(O)!==-1}hide(){return this.attr({visibility:"hidden"})}htmlGetBBox(){return{height:0,width:0,x:0,y:0}}constructor(O,Q){this.onEvents={},this.opacity=1,this.SVG_NS=k,this.element=Q==="span"||Q==="body"?a(Q):D.createElementNS(this.SVG_NS,Q),this.renderer=O,this.styles={},K(this,"afterInit")}on(O,Q){let{onEvents:ee}=this;return ee[O]&&ee[O](),ee[O]=U(this.element,O,Q),this}opacitySetter(O,Q,ee){let $=Number(Number(O).toFixed(3));this.opacity=$,ee.setAttribute(Q,$)}reAlign(){var O;(O=this.alignOptions)!=null&&O.width&&this.alignOptions.align!=="left"&&(this.alignOptions.width=this.getBBox().width,this.placed=!1,this.align())}removeClass(O){return this.attr("class",(""+this.attr("class")).replace(L(O)?RegExp(`(^| )${O}( |$)`):O," ").replace(/ +/g," ").trim())}removeTextOutline(){let O=this.element.querySelector("tspan.highcharts-text-outline");O&&this.safeRemoveChild(O)}safeRemoveChild(O){let Q=O.parentNode;Q&&Q.removeChild(O)}setRadialReference(O){let Q=this.element.gradient&&this.renderer.gradients[this.element.gradient];return this.element.radialReference=O,Q&&Q.radAttr&&Q.animate(this.renderer.getRadialAttr(O,Q.radAttr)),this}setTextPath(O,Q){Q=b(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},Q);let ee=this.renderer.url,$=this.text||this,ce=$.textPath,{attributes:S,enabled:P}=Q;if(O=O||ce&&ce.path,ce&&ce.undo(),O&&P){let B=U($,"afterModifyTree",q=>{if(O&&P){let m=O.attr("id");m||O.attr("id",m=z());let T={x:0,y:0};w(S.dx)&&(T.dx=S.dx,delete S.dx),w(S.dy)&&(T.dy=S.dy,delete S.dy),$.attr(T),this.attr({transform:""}),this.box&&(this.box=this.box.destroy());let M=q.nodes.slice(0);q.nodes.length=0,q.nodes[0]={tagName:"textPath",attributes:N(S,{"text-anchor":S.textAnchor,href:`${ee}#${m}`}),children:M}}});$.textPath={path:O,undo:B}}else $.attr({dx:0,dy:0}),delete $.textPath;return this.added&&($.textCache="",this.renderer.buildText($)),this}shadow(O){var ce;let{renderer:Q}=this,ee=b(((ce=this.parentGroup)==null?void 0:ce.rotation)===90?{offsetX:-1,offsetY:-1}:{},A(O)?O:{}),$=Q.shadowDefinition(ee);return this.attr({filter:O?`url(${Q.url}#${$})`:"none"})}show(O=!0){return this.attr({visibility:O?"inherit":"visible"})}"stroke-widthSetter"(O,Q,ee){this[Q]=O,ee.setAttribute(Q,O)}strokeWidth(){if(!this.renderer.styledMode)return this["stroke-width"]||0;let O=this.getStyle("stroke-width"),Q=0,ee;return/px$/.test(O)?Q=v(O):O!==""&&(p(ee=D.createElementNS(k,"rect"),{width:O,"stroke-width":0}),this.element.parentNode.appendChild(ee),Q=ee.getBBox().width,ee.parentNode.removeChild(ee)),Q}symbolAttr(O){let Q=this;H.symbolCustomAttribs.forEach(function(ee){Q[ee]=d(O[ee],Q[ee])}),Q.attr({d:Q.renderer.symbols[Q.symbolName](Q.x,Q.y,Q.width,Q.height,Q)})}textSetter(O){O!==this.textStr&&(delete this.textPxLength,this.textStr=O,this.added&&this.renderer.buildText(this),this.reAlign())}titleSetter(O){let Q=this.element,ee=Q.getElementsByTagName("title")[0]||D.createElementNS(this.SVG_NS,"title");Q.insertBefore?Q.insertBefore(ee,Q.firstChild):Q.appendChild(ee),ee.textContent=g(d(O,""),[/<[^>]*>/g,""]).replace(/&lt;/g,"<").replace(/&gt;/g,">")}toFront(){let O=this.element;return O.parentNode.appendChild(O),this}translate(O,Q){return this.attr({translateX:O,translateY:Q})}updateTransform(O="transform"){var M;let{element:Q,matrix:ee,rotation:$=0,rotationOriginX:ce,rotationOriginY:S,scaleX:P,scaleY:B,translateX:q=0,translateY:m=0}=this,T=["translate("+q+","+m+")"];w(ee)&&T.push("matrix("+ee.join(",")+")"),$&&(T.push("rotate("+$+" "+d(ce,Q.getAttribute("x"),0)+" "+d(S,Q.getAttribute("y")||0)+")"),((M=this.text)==null?void 0:M.element.tagName)==="SPAN"&&this.text.attr({rotation:$,rotationOriginX:(ce||0)-this.padding,rotationOriginY:(S||0)-this.padding})),(w(P)||w(B))&&T.push("scale("+d(P,1)+" "+d(B,1)+")"),T.length&&!(this.text||this).textPath&&Q.setAttribute(O,T.join(" "))}visibilitySetter(O,Q,ee){O==="inherit"?ee.removeAttribute(Q):this[Q]!==O&&ee.setAttribute(Q,O),this[Q]=O}xGetter(O){return this.element.nodeName==="circle"&&(O==="x"?O="cx":O==="y"&&(O="cy")),this._defaultGetter(O)}zIndexSetter(O,Q){let ee=this.renderer,$=this.parentGroup,ce=($||ee).element||ee.box,S=this.element,P=ce===ee.box,B,q,m,T=!1,M,G=this.added,W;if(w(O)?(S.setAttribute("data-z-index",O),O=+O,this[Q]===O&&(G=!1)):w(this[Q])&&S.removeAttribute("data-z-index"),this[Q]=O,G){for((O=this.zIndex)&&$&&($.handleZ=!0),W=(B=ce.childNodes).length-1;W>=0&&!T;W--)M=!w(m=(q=B[W]).getAttribute("data-z-index")),q!==S&&(O<0&&M&&!P&&!W?(ce.insertBefore(S,B[W]),T=!0):(v(m)<=O||M&&(!w(O)||O>=0))&&(ce.insertBefore(S,B[W+1]),T=!0));T||(ce.insertBefore(S,B[P?3:0]),T=!0)}return T}}return H.symbolCustomAttribs=["anchorX","anchorY","clockwise","end","height","innerR","r","start","width","x","y"],H.prototype.strokeSetter=H.prototype.fillSetter,H.prototype.yGetter=H.prototype.xGetter,H.prototype.matrixSetter=H.prototype.rotationOriginXSetter=H.prototype.rotationOriginYSetter=H.prototype.rotationSetter=H.prototype.scaleXSetter=H.prototype.scaleYSetter=H.prototype.translateXSetter=H.prototype.translateYSetter=H.prototype.verticalAlignSetter=function(ie,O){this[O]=ie,this.doTransform=!0},H}),n(i,"Core/Renderer/SVG/SVGLabel.js",[i["Core/Renderer/SVG/SVGElement.js"],i["Core/Utilities.js"]],function(o,s){let{defined:l,extend:j,isNumber:E,merge:F,pick:_,removeEvent:C}=s;class D extends o{constructor(k,I,U,p,a,u,y,w,f,N){let K;super(k,"g"),this.paddingLeftSetter=this.paddingSetter,this.paddingRightSetter=this.paddingSetter,this.textStr=I,this.x=U,this.y=p,this.anchorX=u,this.anchorY=y,this.baseline=f,this.className=N,this.addClass(N==="button"?"highcharts-no-tooltip":"highcharts-label"),N&&this.addClass("highcharts-"+N),this.text=k.text(void 0,0,0,w).attr({zIndex:1}),typeof a=="string"&&((K=/^url\((.*?)\)$/.test(a))||this.renderer.symbols[a])&&(this.symbolKey=a),this.bBox=D.emptyBBox,this.padding=3,this.baselineOffset=0,this.needsBox=k.styledMode||K,this.deferredAttr={},this.alignFactor=0}alignSetter(k){let I={left:0,center:.5,right:1}[k];I!==this.alignFactor&&(this.alignFactor=I,this.bBox&&E(this.xSetting)&&this.attr({x:this.xSetting}))}anchorXSetter(k,I){this.anchorX=k,this.boxAttr(I,Math.round(k)-this.getCrispAdjust()-this.xSetting)}anchorYSetter(k,I){this.anchorY=k,this.boxAttr(I,k-this.ySetting)}boxAttr(k,I){this.box?this.box.attr(k,I):this.deferredAttr[k]=I}css(k){if(k){let I={};k=F(k),D.textProps.forEach(U=>{k[U]!==void 0&&(I[U]=k[U],delete k[U])}),this.text.css(I),"fontSize"in I||"fontWeight"in I?this.updateTextPadding():("width"in I||"textOverflow"in I)&&this.updateBoxSize()}return o.prototype.css.call(this,k)}destroy(){C(this.element,"mouseenter"),C(this.element,"mouseleave"),this.text&&this.text.destroy(),this.box&&(this.box=this.box.destroy()),o.prototype.destroy.call(this)}fillSetter(k,I){k&&(this.needsBox=!0),this.fill=k,this.boxAttr(I,k)}getBBox(k,I){this.textStr&&this.bBox.width===0&&this.bBox.height===0&&this.updateBoxSize();let{padding:U,height:p=0,translateX:a=0,translateY:u=0,width:y=0}=this,w=_(this.paddingLeft,U),f=I??(this.rotation||0),N={width:y,height:p,x:a+this.bBox.x-w,y:u+this.bBox.y-U+this.baselineOffset};return f&&(N=this.getRotatedBox(N,f)),N}getCrispAdjust(){return(this.renderer.styledMode&&this.box?this.box.strokeWidth():this["stroke-width"]?parseInt(this["stroke-width"],10):0)%2/2}heightSetter(k){this.heightSetting=k}onAdd(){this.text.add(this),this.attr({text:_(this.textStr,""),x:this.x||0,y:this.y||0}),this.box&&l(this.anchorX)&&this.attr({anchorX:this.anchorX,anchorY:this.anchorY})}paddingSetter(k,I){E(k)?k!==this[I]&&(this[I]=k,this.updateTextPadding()):this[I]=void 0}rSetter(k,I){this.boxAttr(I,k)}strokeSetter(k,I){this.stroke=k,this.boxAttr(I,k)}"stroke-widthSetter"(k,I){k&&(this.needsBox=!0),this["stroke-width"]=k,this.boxAttr(I,k)}"text-alignSetter"(k){this.textAlign=k}textSetter(k){k!==void 0&&this.text.attr({text:k}),this.updateTextPadding(),this.reAlign()}updateBoxSize(){let k,I=this.text,U={},p=this.padding,a=this.bBox=(!E(this.widthSetting)||!E(this.heightSetting)||this.textAlign)&&l(I.textStr)?I.getBBox(void 0,0):D.emptyBBox;this.width=this.getPaddedWidth(),this.height=(this.heightSetting||a.height||0)+2*p;let u=this.renderer.fontMetrics(I);if(this.baselineOffset=p+Math.min((this.text.firstLineMetrics||u).b,a.height||1/0),this.heightSetting&&(this.baselineOffset+=(this.heightSetting-u.h)/2),this.needsBox&&!I.textPath){if(!this.box){let y=this.box=this.symbolKey?this.renderer.symbol(this.symbolKey):this.renderer.rect();y.addClass((this.className==="button"?"":"highcharts-label-box")+(this.className?" highcharts-"+this.className+"-box":"")),y.add(this)}k=this.getCrispAdjust(),U.x=k,U.y=(this.baseline?-this.baselineOffset:0)+k,U.width=Math.round(this.width),U.height=Math.round(this.height),this.box.attr(j(U,this.deferredAttr)),this.deferredAttr={}}}updateTextPadding(){let k=this.text;if(!k.textPath){this.updateBoxSize();let I=this.baseline?0:this.baselineOffset,U=_(this.paddingLeft,this.padding);l(this.widthSetting)&&this.bBox&&(this.textAlign==="center"||this.textAlign==="right")&&(U+={center:.5,right:1}[this.textAlign]*(this.widthSetting-this.bBox.width)),(U!==k.x||I!==k.y)&&(k.attr("x",U),k.hasBoxWidthChanged&&(this.bBox=k.getBBox(!0)),I!==void 0&&k.attr("y",I)),k.x=U,k.y=I}}widthSetter(k){this.widthSetting=E(k)?k:void 0}getPaddedWidth(){let k=this.padding,I=_(this.paddingLeft,k),U=_(this.paddingRight,k);return(this.widthSetting||this.bBox.width||0)+I+U}xSetter(k){this.x=k,this.alignFactor&&(k-=this.alignFactor*this.getPaddedWidth(),this["forceAnimate:x"]=!0),this.xSetting=Math.round(k),this.attr("translateX",this.xSetting)}ySetter(k){this.ySetting=this.y=Math.round(k),this.attr("translateY",this.ySetting)}}return D.emptyBBox={width:0,height:0,x:0,y:0},D.textProps=["color","direction","fontFamily","fontSize","fontStyle","fontWeight","lineHeight","textAlign","textDecoration","textOutline","textOverflow","whiteSpace","width"],D}),n(i,"Core/Renderer/SVG/Symbols.js",[i["Core/Utilities.js"]],function(o){let{defined:s,isNumber:l,pick:j}=o;function E(C,D,V,k,I){let U=[];if(I){let p=I.start||0,a=j(I.r,V),u=j(I.r,k||V),y=2e-4/Math.max(a,1),w=Math.abs((I.end||0)-p-2*Math.PI)<y,f=(I.end||0)-y,N=I.innerR,K=j(I.open,w),Y=Math.cos(p),R=Math.sin(p),A=Math.cos(f),L=Math.sin(f),b=j(I.longArc,f-p-Math.PI<y?0:1),c=["A",a,u,0,b,j(I.clockwise,1),C+a*A,D+u*L];c.params={start:p,end:f,cx:C,cy:D},U.push(["M",C+a*Y,D+u*R],c),s(N)&&((c=["A",N,N,0,b,s(I.clockwise)?1-I.clockwise:0,C+N*Y,D+N*R]).params={start:f,end:p,cx:C,cy:D},U.push(K?["M",C+N*A,D+N*L]:["L",C+N*A,D+N*L],c)),K||U.push(["Z"])}return U}function F(C,D,V,k,I){return I&&I.r?_(C,D,V,k,I):[["M",C,D],["L",C+V,D],["L",C+V,D+k],["L",C,D+k],["Z"]]}function _(C,D,V,k,I){let U=(I==null?void 0:I.r)||0;return[["M",C+U,D],["L",C+V-U,D],["A",U,U,0,0,1,C+V,D+U],["L",C+V,D+k-U],["A",U,U,0,0,1,C+V-U,D+k],["L",C+U,D+k],["A",U,U,0,0,1,C,D+k-U],["L",C,D+U],["A",U,U,0,0,1,C+U,D],["Z"]]}return{arc:E,callout:function(C,D,V,k,I){let U=Math.min(I&&I.r||0,V,k),p=U+6,a=I&&I.anchorX,u=I&&I.anchorY||0,y=_(C,D,V,k,{r:U});if(!l(a)||a<V&&a>0&&u<k&&u>0)return y;if(C+a>V-p)if(u>D+p&&u<D+k-p)y.splice(3,1,["L",C+V,u-6],["L",C+V+6,u],["L",C+V,u+6],["L",C+V,D+k-U]);else if(a<V){let w=u<D+p,f=w?D:D+k;y.splice(w?2:5,0,["L",a,u],["L",C+V-U,f])}else y.splice(3,1,["L",C+V,k/2],["L",a,u],["L",C+V,k/2],["L",C+V,D+k-U]);else if(C+a<p)if(u>D+p&&u<D+k-p)y.splice(7,1,["L",C,u+6],["L",C-6,u],["L",C,u-6],["L",C,D+U]);else if(a>0){let w=u<D+p,f=w?D:D+k;y.splice(w?1:6,0,["L",a,u],["L",C+U,f])}else y.splice(7,1,["L",C,k/2],["L",a,u],["L",C,k/2],["L",C,D+U]);else u>k&&a<V-p?y.splice(5,1,["L",a+6,D+k],["L",a,D+k+6],["L",a-6,D+k],["L",C+U,D+k]):u<0&&a>p&&y.splice(1,1,["L",a-6,D],["L",a,D-6],["L",a+6,D],["L",V-U,D]);return y},circle:function(C,D,V,k){return E(C+V/2,D+k/2,V/2,k/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},diamond:function(C,D,V,k){return[["M",C+V/2,D],["L",C+V,D+k/2],["L",C+V/2,D+k],["L",C,D+k/2],["Z"]]},rect:F,roundedRect:_,square:F,triangle:function(C,D,V,k){return[["M",C+V/2,D],["L",C+V,D+k],["L",C,D+k],["Z"]]},"triangle-down":function(C,D,V,k){return[["M",C,D],["L",C+V,D],["L",C+V/2,D+k],["Z"]]}}}),n(i,"Core/Renderer/SVG/TextBuilder.js",[i["Core/Renderer/HTML/AST.js"],i["Core/Globals.js"],i["Core/Utilities.js"]],function(o,s,l){let{doc:j,SVG_NS:E,win:F}=s,{attr:_,extend:C,fireEvent:D,isString:V,objectEach:k,pick:I}=l;return class{constructor(U){let p=U.styles;this.renderer=U.renderer,this.svgElement=U,this.width=U.textWidth,this.textLineHeight=p&&p.lineHeight,this.textOutline=p&&p.textOutline,this.ellipsis=!!(p&&p.textOverflow==="ellipsis"),this.noWrap=!!(p&&p.whiteSpace==="nowrap")}buildSVG(){let U=this.svgElement,p=U.element,a=U.renderer,u=I(U.textStr,"").toString(),y=u.indexOf("<")!==-1,w=p.childNodes,f=!U.added&&a.box,N=[u,this.ellipsis,this.noWrap,this.textLineHeight,this.textOutline,U.getStyle("font-size"),this.width].join(",");if(N!==U.textCache){U.textCache=N,delete U.actualWidth;for(let K=w.length;K--;)p.removeChild(w[K]);if(y||this.ellipsis||this.width||U.textPath||u.indexOf(" ")!==-1&&(!this.noWrap||/<br.*?>/g.test(u))){if(u!==""){f&&f.appendChild(p);let K=new o(u);this.modifyTree(K.nodes),K.addToDOM(p),this.modifyDOM(),this.ellipsis&&(p.textContent||"").indexOf("…")!==-1&&U.attr("title",this.unescapeEntities(U.textStr||"",["&lt;","&gt;"])),f&&f.removeChild(p)}}else p.appendChild(j.createTextNode(this.unescapeEntities(u)));V(this.textOutline)&&U.applyTextOutline&&U.applyTextOutline(this.textOutline)}}modifyDOM(){let U,p=this.svgElement,a=_(p.element,"x");for(p.firstLineMetrics=void 0;(U=p.element.firstChild)&&/^[\s\u200B]*$/.test(U.textContent||" ");)p.element.removeChild(U);[].forEach.call(p.element.querySelectorAll("tspan.highcharts-br"),(f,N)=>{f.nextSibling&&f.previousSibling&&(N===0&&f.previousSibling.nodeType===1&&(p.firstLineMetrics=p.renderer.fontMetrics(f.previousSibling)),_(f,{dy:this.getLineHeight(f.nextSibling),x:a}))});let u=this.width||0;if(!u)return;let y=(f,N)=>{let K=f.textContent||"",Y=K.replace(/([^\^])-/g,"$1- ").split(" "),R=!this.noWrap&&(Y.length>1||p.element.childNodes.length>1),A=this.getLineHeight(N),L=0,b=p.actualWidth;if(this.ellipsis)K&&this.truncate(f,K,void 0,0,Math.max(0,u-.8*A),(c,d)=>c.substring(0,d)+"…");else if(R){let c=[],d=[];for(;N.firstChild&&N.firstChild!==f;)d.push(N.firstChild),N.removeChild(N.firstChild);for(;Y.length;)Y.length&&!this.noWrap&&L>0&&(c.push(f.textContent||""),f.textContent=Y.join(" ").replace(/- /g,"-")),this.truncate(f,void 0,Y,L===0&&b||0,u,(v,h)=>Y.slice(0,h).join(" ").replace(/- /g,"-")),b=p.actualWidth,L++;d.forEach(v=>{N.insertBefore(v,f)}),c.forEach(v=>{N.insertBefore(j.createTextNode(v),f);let h=j.createElementNS(E,"tspan");h.textContent="​",_(h,{dy:A,x:a}),N.insertBefore(h,f)})}},w=f=>{[].slice.call(f.childNodes).forEach(N=>{N.nodeType===F.Node.TEXT_NODE?y(N,f):(N.className.baseVal.indexOf("highcharts-br")!==-1&&(p.actualWidth=0),w(N))})};w(p.element)}getLineHeight(U){let p=U.nodeType===F.Node.TEXT_NODE?U.parentElement:U;return this.textLineHeight?parseInt(this.textLineHeight.toString(),10):this.renderer.fontMetrics(p||this.svgElement.element).h}modifyTree(U){let p=(a,u)=>{let{attributes:y={},children:w,style:f={},tagName:N}=a,K=this.renderer.styledMode;if(N==="b"||N==="strong"?K?y.class="highcharts-strong":f.fontWeight="bold":(N==="i"||N==="em")&&(K?y.class="highcharts-emphasized":f.fontStyle="italic"),f&&f.color&&(f.fill=f.color),N==="br"){y.class="highcharts-br",a.textContent="​";let Y=U[u+1];Y&&Y.textContent&&(Y.textContent=Y.textContent.replace(/^ +/gm,""))}else N==="a"&&w&&w.some(Y=>Y.tagName==="#text")&&(a.children=[{children:w,tagName:"tspan"}]);N!=="#text"&&N!=="a"&&(a.tagName="tspan"),C(a,{attributes:y,style:f}),w&&w.filter(Y=>Y.tagName!=="#text").forEach(p)};U.forEach(p),D(this.svgElement,"afterModifyTree",{nodes:U})}truncate(U,p,a,u,y,w){let f,N,K=this.svgElement,{rotation:Y}=K,R=[],A=a?1:0,L=(p||a||"").length,b=L,c=function(d,v){let h=v||d,g=U.parentNode;if(g&&R[h]===void 0&&g.getSubStringLength)try{R[h]=u+g.getSubStringLength(0,a?h+1:h)}catch{}return R[h]};if(K.rotation=0,u+(N=c(U.textContent.length))>y){for(;A<=L;)b=Math.ceil((A+L)/2),a&&(f=w(a,b)),N=c(b,f&&f.length-1),A===L?A=L+1:N>y?L=b-1:A=b;L===0?U.textContent="":p&&L===p.length-1||(U.textContent=f||w(p||a,b))}a&&a.splice(0,b),K.actualWidth=N,K.rotation=Y}unescapeEntities(U,p){return k(this.renderer.escapes,function(a,u){p&&p.indexOf(a)!==-1||(U=U.toString().replace(RegExp(a,"g"),u))}),U}}}),n(i,"Core/Renderer/SVG/SVGRenderer.js",[i["Core/Renderer/HTML/AST.js"],i["Core/Defaults.js"],i["Core/Color/Color.js"],i["Core/Globals.js"],i["Core/Renderer/RendererRegistry.js"],i["Core/Renderer/SVG/SVGElement.js"],i["Core/Renderer/SVG/SVGLabel.js"],i["Core/Renderer/SVG/Symbols.js"],i["Core/Renderer/SVG/TextBuilder.js"],i["Core/Utilities.js"]],function(o,s,l,j,E,F,_,C,D,V){let k,{defaultOptions:I}=s,{charts:U,deg2rad:p,doc:a,isFirefox:u,isMS:y,isWebKit:w,noop:f,SVG_NS:N,symbolSizes:K,win:Y}=j,{addEvent:R,attr:A,createElement:L,crisp:b,css:c,defined:d,destroyObjectProperties:v,extend:h,isArray:g,isNumber:x,isObject:z,isString:H,merge:ie,pick:O,pInt:Q,replaceNested:ee,uniqueKey:$}=V;class ce{constructor(P,B,q,m,T,M,G){let W,J,ne=this.createElement("svg").attr({version:"1.1",class:"highcharts-root"}),oe=ne.element;G||ne.css(this.getStyle(m||{})),P.appendChild(oe),A(P,"dir","ltr"),P.innerHTML.indexOf("xmlns")===-1&&A(oe,"xmlns",this.SVG_NS),this.box=oe,this.boxWrapper=ne,this.alignedObjects=[],this.url=this.getReferenceURL(),this.createElement("desc").add().element.appendChild(a.createTextNode("Created with Highcharts 11.4.3")),this.defs=this.createElement("defs").add(),this.allowHTML=M,this.forExport=T,this.styledMode=G,this.gradients={},this.cache={},this.cacheKeys=[],this.imgCount=0,this.rootFontSize=ne.getStyle("font-size"),this.setSize(B,q,!1),u&&P.getBoundingClientRect&&((W=function(){c(P,{left:0,top:0}),J=P.getBoundingClientRect(),c(P,{left:Math.ceil(J.left)-J.left+"px",top:Math.ceil(J.top)-J.top+"px"})})(),this.unSubPixelFix=R(Y,"resize",W))}definition(P){return new o([P]).addToDOM(this.defs.element)}getReferenceURL(){if((u||w)&&a.getElementsByTagName("base").length){if(!d(k)){let P=$(),B=new o([{tagName:"svg",attributes:{width:8,height:8},children:[{tagName:"defs",children:[{tagName:"clipPath",attributes:{id:P},children:[{tagName:"rect",attributes:{width:4,height:4}}]}]},{tagName:"rect",attributes:{id:"hitme",width:8,height:8,"clip-path":`url(#${P})`,fill:"rgba(0,0,0,0.001)"}}]}]).addToDOM(a.body);c(B,{position:"fixed",top:0,left:0,zIndex:9e5});let q=a.elementFromPoint(6,6);k=(q&&q.id)==="hitme",a.body.removeChild(B)}if(k)return ee(Y.location.href.split("#")[0],[/<[^>]*>/g,""],[/([\('\)])/g,"\\$1"],[/ /g,"%20"])}return""}getStyle(P){return this.style=h({fontFamily:"Helvetica, Arial, sans-serif",fontSize:"1rem"},P),this.style}setStyle(P){this.boxWrapper.css(this.getStyle(P))}isHidden(){return!this.boxWrapper.getBBox().width}destroy(){let P=this.defs;return this.box=null,this.boxWrapper=this.boxWrapper.destroy(),v(this.gradients||{}),this.gradients=null,this.defs=P.destroy(),this.unSubPixelFix&&this.unSubPixelFix(),this.alignedObjects=null,null}createElement(P){return new this.Element(this,P)}getRadialAttr(P,B){return{cx:P[0]-P[2]/2+(B.cx||0)*P[2],cy:P[1]-P[2]/2+(B.cy||0)*P[2],r:(B.r||0)*P[2]}}shadowDefinition(P){let B=[`highcharts-drop-shadow-${this.chartIndex}`,...Object.keys(P).map(m=>`${m}-${P[m]}`)].join("-").toLowerCase().replace(/[^a-z0-9\-]/g,""),q=ie({color:"#000000",offsetX:1,offsetY:1,opacity:.15,width:5},P);return this.defs.element.querySelector(`#${B}`)||this.definition({tagName:"filter",attributes:{id:B,filterUnits:q.filterUnits},children:[{tagName:"feDropShadow",attributes:{dx:q.offsetX,dy:q.offsetY,"flood-color":q.color,"flood-opacity":Math.min(5*q.opacity,1),stdDeviation:q.width/2}}]}),B}buildText(P){new D(P).buildSVG()}getContrast(P){let B=l.parse(P).rgba.map(m=>{let T=m/255;return T<=.03928?T/12.92:Math.pow((T+.055)/1.055,2.4)}),q=.2126*B[0]+.7152*B[1]+.0722*B[2];return 1.05/(q+.05)>(q+.05)/.05?"#FFFFFF":"#000000"}button(P,B,q,m,T={},M,G,W,J,ne){let oe=this.label(P,B,q,J,void 0,void 0,ne,void 0,"button"),se=this.styledMode,ue=arguments,pe=0;T=ie(I.global.buttonTheme,T),se&&(delete T.fill,delete T.stroke,delete T["stroke-width"]);let Z=T.states||{},X=T.style||{};delete T.states,delete T.style;let te=[o.filterUserAttributes(T)],re=[X];return se||["hover","select","disabled"].forEach((ae,de)=>{te.push(ie(te[0],o.filterUserAttributes(ue[de+5]||Z[ae]||{}))),re.push(te[de+1].style),delete te[de+1].style}),R(oe.element,y?"mouseover":"mouseenter",function(){pe!==3&&oe.setState(1)}),R(oe.element,y?"mouseout":"mouseleave",function(){pe!==3&&oe.setState(pe)}),oe.setState=(ae=0)=>{if(ae!==1&&(oe.state=pe=ae),oe.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][ae]),!se){oe.attr(te[ae]);let de=re[ae];z(de)&&oe.css(de)}},oe.attr(te[0]),!se&&(oe.css(h({cursor:"default"},X)),ne&&oe.text.css({pointerEvents:"none"})),oe.on("touchstart",ae=>ae.stopPropagation()).on("click",function(ae){pe!==3&&m.call(oe,ae)})}crispLine(P,B){let[q,m]=P;return d(q[1])&&q[1]===m[1]&&(q[1]=m[1]=b(q[1],B)),d(q[2])&&q[2]===m[2]&&(q[2]=m[2]=b(q[2],B)),P}path(P){let B=this.styledMode?{}:{fill:"none"};return g(P)?B.d=P:z(P)&&h(B,P),this.createElement("path").attr(B)}circle(P,B,q){let m=z(P)?P:P===void 0?{}:{x:P,y:B,r:q},T=this.createElement("circle");return T.xSetter=T.ySetter=function(M,G,W){W.setAttribute("c"+G,M)},T.attr(m)}arc(P,B,q,m,T,M){let G;z(P)?(B=(G=P).y,q=G.r,m=G.innerR,T=G.start,M=G.end,P=G.x):G={innerR:m,start:T,end:M};let W=this.symbol("arc",P,B,q,q,G);return W.r=q,W}rect(P,B,q,m,T,M){let G=z(P)?P:P===void 0?{}:{x:P,y:B,r:T,width:Math.max(q||0,0),height:Math.max(m||0,0)},W=this.createElement("rect");return this.styledMode||(M!==void 0&&(G["stroke-width"]=M,h(G,W.crisp(G))),G.fill="none"),W.rSetter=function(J,ne,oe){W.r=J,A(oe,{rx:J,ry:J})},W.rGetter=function(){return W.r||0},W.attr(G)}roundedRect(P){return this.symbol("roundedRect").attr(P)}setSize(P,B,q){this.width=P,this.height=B,this.boxWrapper.animate({width:P,height:B},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:O(q,!0)?void 0:0}),this.alignElements()}g(P){let B=this.createElement("g");return P?B.attr({class:"highcharts-"+P}):B}image(P,B,q,m,T,M){let G={preserveAspectRatio:"none"};x(B)&&(G.x=B),x(q)&&(G.y=q),x(m)&&(G.width=m),x(T)&&(G.height=T);let W=this.createElement("image").attr(G),J=function(ne){W.attr({href:P}),M.call(W,ne)};if(M){W.attr({href:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="});let ne=new Y.Image;R(ne,"load",J),ne.src=P,ne.complete&&J({})}else W.attr({href:P});return W}symbol(P,B,q,m,T,M){let G,W,J,ne,oe=this,se=/^url\((.*?)\)$/,ue=se.test(P),pe=!ue&&(this.symbols[P]?P:"circle"),Z=pe&&this.symbols[pe];if(Z)typeof B=="number"&&(W=Z.call(this.symbols,B||0,q||0,m||0,T||0,M)),G=this.path(W),oe.styledMode||G.attr("fill","none"),h(G,{symbolName:pe||void 0,x:B,y:q,width:m,height:T}),M&&h(G,M);else if(ue){J=P.match(se)[1];let X=G=this.image(J);X.imgwidth=O(M&&M.width,K[J]&&K[J].width),X.imgheight=O(M&&M.height,K[J]&&K[J].height),ne=te=>te.attr({width:te.width,height:te.height}),["width","height"].forEach(te=>{X[`${te}Setter`]=function(re,ae){this[ae]=re;let{alignByTranslate:de,element:le,width:he,height:fe,imgwidth:me,imgheight:ge}=this,xe=ae==="width"?me:ge,ye=1;M&&M.backgroundSize==="within"&&he&&fe&&me&&ge?(ye=Math.min(he/me,fe/ge),A(le,{width:Math.round(me*ye),height:Math.round(ge*ye)})):le&&xe&&le.setAttribute(ae,xe),!de&&me&&ge&&this.translate(((he||0)-me*ye)/2,((fe||0)-ge*ye)/2)}}),d(B)&&X.attr({x:B,y:q}),X.isImg=!0,d(X.imgwidth)&&d(X.imgheight)?ne(X):(X.attr({width:0,height:0}),L("img",{onload:function(){let te=U[oe.chartIndex];this.width===0&&(c(this,{position:"absolute",top:"-999em"}),a.body.appendChild(this)),K[J]={width:this.width,height:this.height},X.imgwidth=this.width,X.imgheight=this.height,X.element&&ne(X),this.parentNode&&this.parentNode.removeChild(this),oe.imgCount--,oe.imgCount||!te||te.hasLoaded||te.onload()},src:J}),this.imgCount++)}return G}clipRect(P,B,q,m){return this.rect(P,B,q,m,0)}text(P,B,q,m){let T={};if(m&&(this.allowHTML||!this.forExport))return this.html(P,B,q);T.x=Math.round(B||0),q&&(T.y=Math.round(q)),d(P)&&(T.text=P);let M=this.createElement("text").attr(T);return m&&(!this.forExport||this.allowHTML)||(M.xSetter=function(G,W,J){let ne=J.getElementsByTagName("tspan"),oe=J.getAttribute(W);for(let se=0,ue;se<ne.length;se++)(ue=ne[se]).getAttribute(W)===oe&&ue.setAttribute(W,G);J.setAttribute(W,G)}),M}fontMetrics(P){let B=Q(F.prototype.getStyle.call(P,"font-size")||0),q=B<24?B+3:Math.round(1.2*B),m=Math.round(.8*q);return{h:q,b:m,f:B}}rotCorr(P,B,q){let m=P;return B&&q&&(m=Math.max(m*Math.cos(B*p),4)),{x:-P/3*Math.sin(B*p),y:m}}pathToSegments(P){let B=[],q=[],m={A:8,C:7,H:2,L:3,M:3,Q:5,S:5,T:3,V:2};for(let T=0;T<P.length;T++)H(q[0])&&x(P[T])&&q.length===m[q[0].toUpperCase()]&&P.splice(T,0,q[0].replace("M","L").replace("m","l")),typeof P[T]=="string"&&(q.length&&B.push(q.slice(0)),q.length=0),q.push(P[T]);return B.push(q.slice(0)),B}label(P,B,q,m,T,M,G,W,J){return new _(this,P,B,q,m,T,M,G,W,J)}alignElements(){this.alignedObjects.forEach(P=>P.align())}}return h(ce.prototype,{Element:F,SVG_NS:N,escapes:{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},symbols:C,draw:f}),E.registerRendererType("svg",ce,!0),ce}),n(i,"Core/Renderer/HTML/HTMLElement.js",[i["Core/Renderer/HTML/AST.js"],i["Core/Globals.js"],i["Core/Renderer/SVG/SVGElement.js"],i["Core/Utilities.js"]],function(o,s,l,j){let{composed:E}=s,{attr:F,css:_,createElement:C,defined:D,extend:V,pInt:k,pushUnique:I}=j;function U(y,w,f){var K;let N=((K=this.div)==null?void 0:K.style)||f.style;l.prototype[`${w}Setter`].call(this,y,w,f),N&&(N[w]=y)}let p=(y,w)=>{var f;if(!y.div){let N=F(y.element,"class"),K=y.css,Y=C("div",N?{className:N}:void 0,{position:"absolute",left:`${y.translateX||0}px`,top:`${y.translateY||0}px`,...y.styles,display:y.display,opacity:y.opacity,visibility:y.visibility},((f=y.parentGroup)==null?void 0:f.div)||w);y.classSetter=(R,A,L)=>{L.setAttribute("class",R),Y.className=R},y.translateXSetter=y.translateYSetter=(R,A)=>{y[A]=R,Y.style[A==="translateX"?"left":"top"]=`${R}px`,y.doTransform=!0},y.opacitySetter=y.visibilitySetter=U,y.css=R=>(K.call(y,R),R.cursor&&(Y.style.cursor=R.cursor),R.pointerEvents&&(Y.style.pointerEvents=R.pointerEvents),y),y.on=function(){return l.prototype.on.apply({element:Y,onEvents:y.onEvents},arguments),y},y.div=Y}return y.div};class a extends l{static compose(w){I(E,this.compose)&&(w.prototype.html=function(f,N,K){return new a(this,"span").attr({text:f,x:Math.round(N),y:Math.round(K)})})}constructor(w,f){super(w,f),this.css({position:"absolute",...w.styledMode?{}:{fontFamily:w.style.fontFamily,fontSize:w.style.fontSize}}),this.element.style.whiteSpace="nowrap"}getSpanCorrection(w,f,N){this.xCorr=-w*N,this.yCorr=-f}css(w){let f,{element:N}=this,K=N.tagName==="SPAN"&&w&&"width"in w,Y=K&&w.width;return K&&(delete w.width,this.textWidth=k(Y)||void 0,f=!0),(w==null?void 0:w.textOverflow)==="ellipsis"&&(w.whiteSpace="nowrap",w.overflow="hidden"),V(this.styles,w),_(N,w),f&&this.updateTransform(),this}htmlGetBBox(){let{element:w}=this;return{x:w.offsetLeft,y:w.offsetTop,width:w.offsetWidth,height:w.offsetHeight}}updateTransform(){var g;if(!this.added){this.alignOnAdd=!0;return}let{element:w,renderer:f,rotation:N,rotationOriginX:K,rotationOriginY:Y,styles:R,textAlign:A="left",textWidth:L,translateX:b=0,translateY:c=0,x:d=0,y:v=0}=this,h=R.whiteSpace;if(_(w,{marginLeft:`${b}px`,marginTop:`${c}px`}),w.tagName==="SPAN"){let x=[N,A,w.innerHTML,L,this.textAlign].join(","),z=-(((g=this.parentGroup)==null?void 0:g.padding)*1)||0,H,ie=!1;if(L!==this.oldTextWidth){let ce=this.textPxLength?this.textPxLength:(_(w,{width:"",whiteSpace:h||"nowrap"}),w.offsetWidth),S=L||0;(S>this.oldTextWidth||ce>S)&&(/[ \-]/.test(w.textContent||w.innerText)||w.style.textOverflow==="ellipsis")&&(_(w,{width:ce>S||N?L+"px":"auto",display:"block",whiteSpace:h||"normal"}),this.oldTextWidth=L,ie=!0)}this.hasBoxWidthChanged=ie,x!==this.cTT&&(H=f.fontMetrics(w).b,D(N)&&(N!==(this.oldRotation||0)||A!==this.oldAlign)&&this.setSpanRotation(N,z,z),this.getSpanCorrection(!D(N)&&this.textPxLength||w.offsetWidth,H,{left:0,center:.5,right:1}[A]));let{xCorr:O=0,yCorr:Q=0}=this,ee=(K??d)-O-d-z,$=(Y??v)-Q-v-z;_(w,{left:`${d+O}px`,top:`${v+Q}px`,transformOrigin:`${ee}px ${$}px`}),this.cTT=x,this.oldRotation=N,this.oldAlign=A}}setSpanRotation(w,f,N){_(this.element,{transform:`rotate(${w}deg)`,transformOrigin:`${f}% ${N}px`})}add(w){let f,N=this.renderer.box.parentNode,K=[];if(this.parentGroup=w,w&&!(f=w.div)){let Y=w;for(;Y;)K.push(Y),Y=Y.parentGroup;for(let R of K.reverse())f=p(R,N)}return(f||N).appendChild(this.element),this.added=!0,this.alignOnAdd&&this.updateTransform(),this}textSetter(w){w!==this.textStr&&(delete this.bBox,delete this.oldTextWidth,o.setElementHTML(this.element,w??""),this.textStr=w,this.doTransform=!0)}alignSetter(w){this.alignValue=this.textAlign=w,this.doTransform=!0}xSetter(w,f){this[f]=w,this.doTransform=!0}}let u=a.prototype;return u.visibilitySetter=u.opacitySetter=U,u.ySetter=u.rotationSetter=u.rotationOriginXSetter=u.rotationOriginYSetter=u.xSetter,a}),n(i,"Core/Axis/AxisDefaults.js",[],function(){var o,s;return(s=o||(o={})).xAxis={alignTicks:!0,allowDecimals:void 0,panningEnabled:!0,zIndex:2,zoomEnabled:!0,dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e %b"},week:{main:"%e %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,gridLineDashStyle:"Solid",gridZIndex:1,labels:{autoRotationLimit:80,distance:15,enabled:!0,indentation:10,overflow:"justify",reserveSpace:void 0,rotation:void 0,staggerLines:0,step:0,useHTML:!1,zIndex:7,style:{color:"#333333",cursor:"default",fontSize:"0.8em"}},maxPadding:.01,minorGridLineDashStyle:"Solid",minorTickLength:2,minorTickPosition:"outside",minorTicksPerMajor:5,minPadding:.01,offset:void 0,reversed:void 0,reversedStacks:!1,showEmpty:!0,showFirstLabel:!0,showLastLabel:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",useHTML:!1,x:0,y:0,style:{color:"#666666",fontSize:"0.8em"}},type:"linear",uniqueNames:!0,visible:!0,minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#333333",lineWidth:1,gridLineColor:"#e6e6e6",gridLineWidth:void 0,tickColor:"#333333"},s.yAxis={reversedStacks:!0,endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:void 0},startOnTick:!0,title:{text:"Values"},stackLabels:{animation:{},allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){let{numberFormatter:l}=this.axis.chart;return l(this.total||0,-1)},style:{color:"#000000",fontSize:"0.7em",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},o}),n(i,"Core/Foundation.js",[i["Core/Utilities.js"]],function(o){var s;let{addEvent:l,isFunction:j,objectEach:E,removeEvent:F}=o;return(s||(s={})).registerEventOptions=function(_,C){_.eventOptions=_.eventOptions||{},E(C.events,function(D,V){_.eventOptions[V]!==D&&(_.eventOptions[V]&&(F(_,V,_.eventOptions[V]),delete _.eventOptions[V]),j(D)&&(_.eventOptions[V]=D,l(_,V,D,{order:0})))})},s}),n(i,"Core/Axis/Tick.js",[i["Core/Templating.js"],i["Core/Globals.js"],i["Core/Utilities.js"]],function(o,s,l){let{deg2rad:j}=s,{clamp:E,correctFloat:F,defined:_,destroyObjectProperties:C,extend:D,fireEvent:V,isNumber:k,merge:I,objectEach:U,pick:p}=l;return class{constructor(a,u,y,w,f){this.isNew=!0,this.isNewLabel=!0,this.axis=a,this.pos=u,this.type=y||"",this.parameters=f||{},this.tickmarkOffset=this.parameters.tickmarkOffset,this.options=this.parameters.options,V(this,"init"),y||w||this.addLabel()}addLabel(){let a=this,u=a.axis,y=u.options,w=u.chart,f=u.categories,N=u.logarithmic,K=u.names,Y=a.pos,R=p(a.options&&a.options.labels,y.labels),A=u.tickPositions,L=Y===A[0],b=Y===A[A.length-1],c=(!R.step||R.step===1)&&u.tickInterval===1,d=A.info,v=a.label,h,g,x,z=this.parameters.category||(f?p(f[Y],K[Y],Y):Y);N&&k(z)&&(z=F(N.lin2log(z))),u.dateTime&&(d?h=(g=w.time.resolveDTLFormat(y.dateTimeLabelFormats[!y.grid&&d.higherRanks[Y]||d.unitName])).main:k(z)&&(h=u.dateTime.getXDateFormat(z,y.dateTimeLabelFormats||{}))),a.isFirst=L,a.isLast=b;let H={axis:u,chart:w,dateTimeLabelFormat:h,isFirst:L,isLast:b,pos:Y,tick:a,tickPositionInfo:d,value:z};V(this,"labelFormat",H);let ie=ee=>R.formatter?R.formatter.call(ee,ee):R.format?(ee.text=u.defaultLabelFormatter.call(ee),o.format(R.format,ee,w)):u.defaultLabelFormatter.call(ee),O=ie.call(H,H),Q=g&&g.list;Q?a.shortenLabel=function(){for(x=0;x<Q.length;x++)if(D(H,{dateTimeLabelFormat:Q[x]}),v.attr({text:ie.call(H,H)}),v.getBBox().width<u.getSlotWidth(a)-2*(R.padding||0))return;v.attr({text:""})}:a.shortenLabel=void 0,c&&u._addedPlotLB&&a.moveLabel(O,R),_(v)||a.movedLabel?v&&v.textStr!==O&&!c&&(!v.textWidth||R.style.width||v.styles.width||v.css({width:null}),v.attr({text:O}),v.textPxLength=v.getBBox().width):(a.label=v=a.createLabel(O,R),a.rotation=0)}createLabel(a,u,y){let w=this.axis,f=w.chart,N=_(a)&&u.enabled?f.renderer.text(a,y==null?void 0:y.x,y==null?void 0:y.y,u.useHTML).add(w.labelGroup):void 0;return N&&(f.styledMode||N.css(I(u.style)),N.textPxLength=N.getBBox().width),N}destroy(){C(this,this.axis)}getPosition(a,u,y,w){let f=this.axis,N=f.chart,K=w&&N.oldChartHeight||N.chartHeight,Y={x:a?F(f.translate(u+y,void 0,void 0,w)+f.transB):f.left+f.offset+(f.opposite?(w&&N.oldChartWidth||N.chartWidth)-f.right-f.left:0),y:a?K-f.bottom+f.offset-(f.opposite?f.height:0):F(K-f.translate(u+y,void 0,void 0,w)-f.transB)};return Y.y=E(Y.y,-1e5,1e5),V(this,"afterGetPosition",{pos:Y}),Y}getLabelPosition(a,u,y,w,f,N,K,Y){let R,A,L=this.axis,b=L.transA,c=L.isLinked&&L.linkedParent?L.linkedParent.reversed:L.reversed,d=L.staggerLines,v=L.tickRotCorr||{x:0,y:0},h=w||L.reserveSpaceDefault?0:-L.labelOffset*(L.labelAlign==="center"?.5:1),g=f.distance,x={};return R=L.side===0?y.rotation?-g:-y.getBBox().height:L.side===2?v.y+g:Math.cos(y.rotation*j)*(v.y-y.getBBox(!1,0).height/2),_(f.y)&&(R=L.side===0&&L.horiz?f.y+R:f.y),a=a+p(f.x,[0,1,0,-1][L.side]*g)+h+v.x-(N&&w?N*b*(c?-1:1):0),u=u+R-(N&&!w?N*b*(c?1:-1):0),d&&(A=K/(Y||1)%d,L.opposite&&(A=d-A-1),u+=L.labelOffset/d*A),x.x=a,x.y=Math.round(u),V(this,"afterGetLabelPosition",{pos:x,tickmarkOffset:N,index:K}),x}getLabelSize(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0}getMarkPath(a,u,y,w,f=!1,N){return N.crispLine([["M",a,u],["L",a+(f?0:-y),u+(f?y:0)]],w)}handleOverflow(a){let u=this.axis,y=u.options.labels,w=a.x,f=u.chart.chartWidth,N=u.chart.spacing,K=p(u.labelLeft,Math.min(u.pos,N[3])),Y=p(u.labelRight,Math.max(u.isRadial?0:u.pos+u.len,f-N[1])),R=this.label,A=this.rotation,L={left:0,center:.5,right:1}[u.labelAlign||R.attr("align")],b=R.getBBox().width,c=u.getSlotWidth(this),d={},v=c,h=1,g,x,z;A||y.overflow!=="justify"?A<0&&w-L*b<K?z=Math.round(w/Math.cos(A*j)-K):A>0&&w+L*b>Y&&(z=Math.round((f-w)/Math.cos(A*j))):(g=w-L*b,x=w+(1-L)*b,g<K?v=a.x+v*(1-L)-K:x>Y&&(v=Y-a.x+v*L,h=-1),(v=Math.min(c,v))<c&&u.labelAlign==="center"&&(a.x+=h*(c-v-L*(c-Math.min(b,v)))),(b>v||u.autoRotation&&(R.styles||{}).width)&&(z=v)),z&&(this.shortenLabel?this.shortenLabel():(d.width=Math.floor(z)+"px",(y.style||{}).textOverflow||(d.textOverflow="ellipsis"),R.css(d)))}moveLabel(a,u){let y=this,w=y.label,f=y.axis,N=!1,K;w&&w.textStr===a?(y.movedLabel=w,N=!0,delete y.label):U(f.ticks,function(Y){N||Y.isNew||Y===y||!Y.label||Y.label.textStr!==a||(y.movedLabel=Y.label,N=!0,Y.labelPos=y.movedLabel.xy,delete Y.label)}),!N&&(y.labelPos||w)&&(K=y.labelPos||w.xy,y.movedLabel=y.createLabel(a,u,K),y.movedLabel&&y.movedLabel.attr({opacity:0}))}render(a,u,y){let w=this.axis,f=w.horiz,N=this.pos,K=p(this.tickmarkOffset,w.tickmarkOffset),Y=this.getPosition(f,N,K,u),R=Y.x,A=Y.y,L=w.pos,b=L+w.len,c=f?R:A;!w.chart.polar&&this.isNew&&(F(c)<L||c>b)&&(y=0);let d=p(y,this.label&&this.label.newOpacity,1);y=p(y,1),this.isActive=!0,this.renderGridLine(u,y),this.renderMark(Y,y),this.renderLabel(Y,u,d,a),this.isNew=!1,V(this,"afterRender")}renderGridLine(a,u){let y=this.axis,w=y.options,f={},N=this.pos,K=this.type,Y=p(this.tickmarkOffset,y.tickmarkOffset),R=y.chart.renderer,A=this.gridLine,L,b=w.gridLineWidth,c=w.gridLineColor,d=w.gridLineDashStyle;this.type==="minor"&&(b=w.minorGridLineWidth,c=w.minorGridLineColor,d=w.minorGridLineDashStyle),A||(y.chart.styledMode||(f.stroke=c,f["stroke-width"]=b||0,f.dashstyle=d),K||(f.zIndex=1),a&&(u=0),this.gridLine=A=R.path().attr(f).addClass("highcharts-"+(K?K+"-":"")+"grid-line").add(y.gridGroup)),A&&(L=y.getPlotLinePath({value:N+Y,lineWidth:A.strokeWidth(),force:"pass",old:a,acrossPanes:!1}))&&A[a||this.isNew?"attr":"animate"]({d:L,opacity:u})}renderMark(a,u){let y=this.axis,w=y.options,f=y.chart.renderer,N=this.type,K=y.tickSize(N?N+"Tick":"tick"),Y=a.x,R=a.y,A=p(w[N!=="minor"?"tickWidth":"minorTickWidth"],!N&&y.isXAxis?1:0),L=w[N!=="minor"?"tickColor":"minorTickColor"],b=this.mark,c=!b;K&&(y.opposite&&(K[0]=-K[0]),b||(this.mark=b=f.path().addClass("highcharts-"+(N?N+"-":"")+"tick").add(y.axisGroup),y.chart.styledMode||b.attr({stroke:L,"stroke-width":A})),b[c?"attr":"animate"]({d:this.getMarkPath(Y,R,K[0],b.strokeWidth(),y.horiz,f),opacity:u}))}renderLabel(a,u,y,w){let f=this.axis,N=f.horiz,K=f.options,Y=this.label,R=K.labels,A=R.step,L=p(this.tickmarkOffset,f.tickmarkOffset),b=a.x,c=a.y,d=!0;Y&&k(b)&&(Y.xy=a=this.getLabelPosition(b,c,Y,N,R,L,w,A),(!this.isFirst||this.isLast||K.showFirstLabel)&&(!this.isLast||this.isFirst||K.showLastLabel)?!N||R.step||R.rotation||u||y===0||this.handleOverflow(a):d=!1,A&&w%A&&(d=!1),d&&k(a.y)?(a.opacity=y,Y[this.isNewLabel?"attr":"animate"](a).show(!0),this.isNewLabel=!1):(Y.hide(),this.isNewLabel=!0))}replaceMovedLabel(){let a=this.label,u=this.axis;a&&!this.isNew&&(a.animate({opacity:0},void 0,a.destroy),delete this.label),u.isDirty=!0,this.label=this.movedLabel,delete this.movedLabel}}}),n(i,"Core/Axis/Axis.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Axis/AxisDefaults.js"],i["Core/Color/Color.js"],i["Core/Defaults.js"],i["Core/Foundation.js"],i["Core/Globals.js"],i["Core/Axis/Tick.js"],i["Core/Utilities.js"]],function(o,s,l,j,E,F,_,C){let{animObject:D}=o,{xAxis:V,yAxis:k}=s,{defaultOptions:I}=j,{registerEventOptions:U}=E,{deg2rad:p}=F,{arrayMax:a,arrayMin:u,clamp:y,correctFloat:w,defined:f,destroyObjectProperties:N,erase:K,error:Y,extend:R,fireEvent:A,getClosestDistance:L,insertItem:b,isArray:c,isNumber:d,isString:v,merge:h,normalizeTickInterval:g,objectEach:x,pick:z,relativeLength:H,removeEvent:ie,splat:O,syncTimeout:Q}=C,ee=(ce,S)=>g(S,void 0,void 0,z(ce.options.allowDecimals,S<.5||ce.tickAmount!==void 0),!!ce.tickAmount);R(I,{xAxis:V,yAxis:h(V,k)});class ${constructor(S,P,B){this.init(S,P,B)}init(S,P,B=this.coll){let q=B==="xAxis",m=this.isZAxis||(S.inverted?!q:q);this.chart=S,this.horiz=m,this.isXAxis=q,this.coll=B,A(this,"init",{userOptions:P}),this.opposite=z(P.opposite,this.opposite),this.side=z(P.side,this.side,m?this.opposite?0:2:this.opposite?1:3),this.setOptions(P);let T=this.options,M=T.labels,G=T.type;this.userOptions=P,this.minPixelPadding=0,this.reversed=z(T.reversed,this.reversed),this.visible=T.visible,this.zoomEnabled=T.zoomEnabled,this.hasNames=G==="category"||T.categories===!0,this.categories=c(T.categories)&&T.categories||(this.hasNames?[]:void 0),this.names||(this.names=[],this.names.keys={}),this.plotLinesAndBandsGroups={},this.positiveValuesOnly=!!this.logarithmic,this.isLinked=f(T.linkedTo),this.ticks={},this.labelEdge=[],this.minorTicks={},this.plotLinesAndBands=[],this.alternateBands={},this.len??(this.len=0),this.minRange=this.userMinRange=T.minRange||T.maxZoom,this.range=T.range,this.offset=T.offset||0,this.max=void 0,this.min=void 0;let W=z(T.crosshair,O(S.options.tooltip.crosshairs)[q?0:1]);this.crosshair=W===!0?{}:W,S.axes.indexOf(this)===-1&&(q?S.axes.splice(S.xAxis.length,0,this):S.axes.push(this),b(this,S[this.coll])),S.orderItems(this.coll),this.series=this.series||[],S.inverted&&!this.isZAxis&&q&&!f(this.reversed)&&(this.reversed=!0),this.labelRotation=d(M.rotation)?M.rotation:void 0,U(this,T),A(this,"afterInit")}setOptions(S){let P=this.horiz?{labels:{autoRotation:[-45],padding:4},margin:15}:{labels:{padding:1},title:{rotation:90*this.side}};this.options=h(P,I[this.coll],S),A(this,"afterSetOptions",{userOptions:S})}defaultLabelFormatter(){let S=this.axis,{numberFormatter:P}=this.chart,B=d(this.value)?this.value:NaN,q=S.chart.time,m=S.categories,T=this.dateTimeLabelFormat,M=I.lang,G=M.numericSymbols,W=M.numericSymbolMagnitude||1e3,J=S.logarithmic?Math.abs(B):S.tickInterval,ne=G&&G.length,oe,se;if(m)se=`${this.value}`;else if(T)se=q.dateFormat(T,B);else if(ne&&G&&J>=1e3)for(;ne--&&se===void 0;)J>=(oe=Math.pow(W,ne+1))&&10*B%oe==0&&G[ne]!==null&&B!==0&&(se=P(B/oe,-1)+G[ne]);return se===void 0&&(se=Math.abs(B)>=1e4?P(B,-1):P(B,-1,void 0,"")),se}getSeriesExtremes(){let S,P=this;A(this,"getSeriesExtremes",null,function(){P.hasVisibleSeries=!1,P.dataMin=P.dataMax=P.threshold=void 0,P.softThreshold=!P.isXAxis,P.series.forEach(B=>{if(B.reserveSpace()){let q=B.options,m,T=q.threshold,M,G;if(P.hasVisibleSeries=!0,P.positiveValuesOnly&&0>=(T||0)&&(T=void 0),P.isXAxis)(m=B.xData)&&m.length&&(m=P.logarithmic?m.filter(W=>W>0):m,M=(S=B.getXExtremes(m)).min,G=S.max,d(M)||M instanceof Date||(m=m.filter(d),M=(S=B.getXExtremes(m)).min,G=S.max),m.length&&(P.dataMin=Math.min(z(P.dataMin,M),M),P.dataMax=Math.max(z(P.dataMax,G),G)));else{let W=B.applyExtremes();d(W.dataMin)&&(M=W.dataMin,P.dataMin=Math.min(z(P.dataMin,M),M)),d(W.dataMax)&&(G=W.dataMax,P.dataMax=Math.max(z(P.dataMax,G),G)),f(T)&&(P.threshold=T),(!q.softThreshold||P.positiveValuesOnly)&&(P.softThreshold=!1)}}})}),A(this,"afterGetSeriesExtremes")}translate(S,P,B,q,m,T){var pe;let M=this.linkedParent||this,G=q&&M.old?M.old.min:M.min;if(!d(G))return NaN;let W=M.minPixelPadding,J=(M.isOrdinal||((pe=M.brokenAxis)==null?void 0:pe.hasBreaks)||M.logarithmic&&m)&&M.lin2val,ne=1,oe=0,se=q&&M.old?M.old.transA:M.transA,ue=0;return se||(se=M.transA),B&&(ne*=-1,oe=M.len),M.reversed&&(ne*=-1,oe-=ne*(M.sector||M.len)),P?(ue=(S=S*ne+oe-W)/se+G,J&&(ue=M.lin2val(ue))):(J&&(S=M.val2lin(S)),ue=ne*(S-G)*se+oe+ne*W+(d(T)?se*T:0),M.isRadial||(ue=w(ue))),ue}toPixels(S,P){return this.translate(S,!1,!this.horiz,void 0,!0)+(P?0:this.pos)}toValue(S,P){return this.translate(S-(P?0:this.pos),!0,!this.horiz,void 0,!0)}getPlotLinePath(S){let P=this,B=P.chart,q=P.left,m=P.top,T=S.old,M=S.value,G=S.lineWidth,W=T&&B.oldChartHeight||B.chartHeight,J=T&&B.oldChartWidth||B.chartWidth,ne=P.transB,oe=S.translatedValue,se=S.force,ue,pe,Z,X,te;function re(de,le,he){return se!=="pass"&&(de<le||de>he)&&(se?de=y(de,le,he):te=!0),de}let ae={value:M,lineWidth:G,old:T,force:se,acrossPanes:S.acrossPanes,translatedValue:oe};return A(this,"getPlotLinePath",ae,function(de){ue=Z=(oe=y(oe=z(oe,P.translate(M,void 0,void 0,T)),-1e5,1e5))+ne,pe=X=W-oe-ne,d(oe)?P.horiz?(pe=m,X=W-P.bottom+(B.scrollablePixelsY||0),ue=Z=re(ue,q,q+P.width)):(ue=q,Z=J-P.right+(B.scrollablePixelsX||0),pe=X=re(pe,m,m+P.height)):(te=!0,se=!1),de.path=te&&!se?void 0:B.renderer.crispLine([["M",ue,pe],["L",Z,X]],G||1)}),ae.path}getLinearTickPositions(S,P,B){let q,m,T,M=w(Math.floor(P/S)*S),G=w(Math.ceil(B/S)*S),W=[];if(w(M+S)===M&&(T=20),this.single)return[P];for(q=M;q<=G&&(W.push(q),(q=w(q+S,T))!==m);)m=q;return W}getMinorTickInterval(){let{minorTicks:S,minorTickInterval:P}=this.options;return S===!0?z(P,"auto"):S!==!1?P:void 0}getMinorTickPositions(){let S=this.options,P=this.tickPositions,B=this.minorTickInterval,q=this.pointRangePadding||0,m=(this.min||0)-q,T=(this.max||0)+q,M=T-m,G=[],W;if(M&&M/B<this.len/3){let J=this.logarithmic;if(J)this.paddedTicks.forEach(function(ne,oe,se){oe&&G.push.apply(G,J.getLogTickPositions(B,se[oe-1],se[oe],!0))});else if(this.dateTime&&this.getMinorTickInterval()==="auto")G=G.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(B),m,T,S.startOfWeek));else for(W=m+(P[0]-m)%B;W<=T&&W!==G[0];W+=B)G.push(W)}return G.length!==0&&this.trimTicks(G),G}adjustForMinRange(){let S=this.options,P=this.logarithmic,{max:B,min:q,minRange:m}=this,T,M,G,W;this.isXAxis&&m===void 0&&!P&&(m=f(S.min)||f(S.max)||f(S.floor)||f(S.ceiling)?null:Math.min(5*(L(this.series.map(J=>{var ne;return(J.xIncrement?(ne=J.xData)==null?void 0:ne.slice(0,2):J.xData)||[]}))||0),this.dataMax-this.dataMin)),d(B)&&d(q)&&d(m)&&B-q<m&&(M=this.dataMax-this.dataMin>=m,T=(m-B+q)/2,G=[q-T,z(S.min,q-T)],M&&(G[2]=P?P.log2lin(this.dataMin):this.dataMin),W=[(q=a(G))+m,z(S.max,q+m)],M&&(W[2]=P?P.log2lin(this.dataMax):this.dataMax),(B=u(W))-q<m&&(G[0]=B-m,G[1]=z(S.min,B-m),q=a(G))),this.minRange=m,this.min=q,this.max=B}getClosest(){let S,P;if(this.categories)P=1;else{let B=[];this.series.forEach(function(q){var T;let m=q.closestPointRange;((T=q.xData)==null?void 0:T.length)===1?B.push(q.xData[0]):!q.noSharedTooltip&&f(m)&&q.reserveSpace()&&(P=f(P)?Math.min(P,m):m)}),B.length&&(B.sort((q,m)=>q-m),S=L([B]))}return S&&P?Math.min(S,P):S||P}nameToX(S){let P=c(this.options.categories),B=P?this.categories:this.names,q=S.options.x,m;return S.series.requireSorting=!1,f(q)||(q=this.options.uniqueNames&&B?P?B.indexOf(S.name):z(B.keys[S.name],-1):S.series.autoIncrement()),q===-1?!P&&B&&(m=B.length):m=q,m!==void 0?(this.names[m]=S.name,this.names.keys[S.name]=m):S.x&&(m=S.x),m}updateNames(){let S=this,P=this.names;P.length>0&&(Object.keys(P.keys).forEach(function(B){delete P.keys[B]}),P.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(B=>{B.xIncrement=null,(!B.points||B.isDirtyData)&&(S.max=Math.max(S.max,B.xData.length-1),B.processData(),B.generatePoints()),B.data.forEach(function(q,m){let T;q!=null&&q.options&&q.name!==void 0&&(T=S.nameToX(q))!==void 0&&T!==q.x&&(q.x=T,B.xData[m]=T)})}))}setAxisTranslation(){let S=this,P=S.max-S.min,B=S.linkedParent,q=!!S.categories,m=S.isXAxis,T=S.axisPointRange||0,M,G=0,W=0,J,ne=S.transA;(m||q||T)&&(M=S.getClosest(),B?(G=B.minPointOffset,W=B.pointRangePadding):S.series.forEach(function(oe){let se=q?1:m?z(oe.options.pointRange,M,0):S.axisPointRange||0,ue=oe.options.pointPlacement;if(T=Math.max(T,se),!S.single||q){let pe=oe.is("xrange")?!m:m;G=Math.max(G,pe&&v(ue)?0:se/2),W=Math.max(W,pe&&ue==="on"?0:se)}}),J=S.ordinal&&S.ordinal.slope&&M?S.ordinal.slope/M:1,S.minPointOffset=G*=J,S.pointRangePadding=W*=J,S.pointRange=Math.min(T,S.single&&q?1:P),m&&M&&(S.closestPointRange=M)),S.translationSlope=S.transA=ne=S.staticScale||S.len/(P+W||1),S.transB=S.horiz?S.left:S.bottom,S.minPixelPadding=ne*G,A(this,"afterSetAxisTranslation")}minFromRange(){let{max:S,min:P}=this;return d(S)&&d(P)&&S-P||void 0}setTickInterval(S){var Ae,ve,ke,Se;let{categories:P,chart:B,dataMax:q,dataMin:m,dateTime:T,isXAxis:M,logarithmic:G,options:W,softThreshold:J}=this,ne=d(this.threshold)?this.threshold:void 0,oe=this.minRange||0,{ceiling:se,floor:ue,linkedTo:pe,softMax:Z,softMin:X}=W,te=d(pe)&&((Ae=B[this.coll])==null?void 0:Ae[pe]),re=W.tickPixelInterval,ae=W.maxPadding,de=W.minPadding,le=0,he,fe=d(W.tickInterval)&&W.tickInterval>=0?W.tickInterval:void 0,me,ge,xe,ye;if(T||P||te||this.getTickAmount(),xe=z(this.userMin,W.min),ye=z(this.userMax,W.max),te?(this.linkedParent=te,he=te.getExtremes(),this.min=z(he.min,he.dataMin),this.max=z(he.max,he.dataMax),W.type!==te.options.type&&Y(11,!0,B)):(J&&f(ne)&&d(q)&&d(m)&&(m>=ne?(me=ne,de=0):q<=ne&&(ge=ne,ae=0)),this.min=z(xe,me,m),this.max=z(ye,ge,q)),d(this.max)&&d(this.min)&&(G&&(this.positiveValuesOnly&&!S&&0>=Math.min(this.min,z(m,this.min))&&Y(10,!0,B),this.min=w(G.log2lin(this.min),16),this.max=w(G.log2lin(this.max),16)),this.range&&d(m)&&(this.userMin=this.min=xe=Math.max(m,this.minFromRange()||0),this.userMax=ye=this.max,this.range=void 0)),A(this,"foundExtremes"),this.adjustForMinRange(),d(this.min)&&d(this.max)){if(!d(this.userMin)&&d(X)&&X<this.min&&(this.min=xe=X),!d(this.userMax)&&d(Z)&&Z>this.max&&(this.max=ye=Z),P||this.axisPointRange||(ve=this.stacking)!=null&&ve.usePercentage||te||!(le=this.max-this.min)||(!f(xe)&&de&&(this.min-=le*de),f(ye)||!ae||(this.max+=le*ae)),!d(this.userMin)&&d(ue)&&(this.min=Math.max(this.min,ue)),!d(this.userMax)&&d(se)&&(this.max=Math.min(this.max,se)),J&&d(m)&&d(q)){let Ee=ne||0;!f(xe)&&this.min<Ee&&m>=Ee?this.min=W.minRange?Math.min(Ee,this.max-oe):Ee:!f(ye)&&this.max>Ee&&q<=Ee&&(this.max=W.minRange?Math.max(Ee,this.min+oe):Ee)}!B.polar&&this.min>this.max&&(f(W.min)?this.max=this.min:f(W.max)&&(this.min=this.max)),le=this.max-this.min}if(this.min!==this.max&&d(this.min)&&d(this.max)?te&&!fe&&re===te.options.tickPixelInterval?this.tickInterval=fe=te.tickInterval:this.tickInterval=z(fe,this.tickAmount?le/Math.max(this.tickAmount-1,1):void 0,P?1:le*re/Math.max(this.len,re)):this.tickInterval=1,M&&!S){let Ee=this.min!==((ke=this.old)==null?void 0:ke.min)||this.max!==((Se=this.old)==null?void 0:Se.max);this.series.forEach(function(Ie){var Le;Ie.forceCrop=(Le=Ie.forceCropping)==null?void 0:Le.call(Ie),Ie.processData(Ee)}),A(this,"postProcessData",{hasExtremesChanged:Ee})}this.setAxisTranslation(),A(this,"initialAxisTranslation"),this.pointRange&&!fe&&(this.tickInterval=Math.max(this.pointRange,this.tickInterval));let je=z(W.minTickInterval,T&&!this.series.some(Ee=>Ee.noSharedTooltip)?this.closestPointRange:0);!fe&&this.tickInterval<je&&(this.tickInterval=je),T||G||fe||(this.tickInterval=ee(this,this.tickInterval)),this.tickAmount||(this.tickInterval=this.unsquish()),this.setTickPositions()}setTickPositions(){var J,ne;let S=this.options,P=S.tickPositions,B=S.tickPositioner,q=this.getMinorTickInterval(),m=!this.isPanning,T=m&&S.startOnTick,M=m&&S.endOnTick,G=[],W;if(this.tickmarkOffset=this.categories&&S.tickmarkPlacement==="between"&&this.tickInterval===1?.5:0,this.minorTickInterval=q==="auto"&&this.tickInterval?this.tickInterval/S.minorTicksPerMajor:q,this.single=this.min===this.max&&f(this.min)&&!this.tickAmount&&(this.min%1==0||S.allowDecimals!==!1),P)G=P.slice();else if(d(this.min)&&d(this.max)){if(!((J=this.ordinal)!=null&&J.positions)&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200))G=[this.min,this.max],Y(19,!1,this.chart);else if(this.dateTime)G=this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval,S.units),this.min,this.max,S.startOfWeek,(ne=this.ordinal)==null?void 0:ne.positions,this.closestPointRange,!0);else if(this.logarithmic)G=this.logarithmic.getLogTickPositions(this.tickInterval,this.min,this.max);else{let oe=this.tickInterval,se=oe;for(;se<=2*oe&&(G=this.getLinearTickPositions(this.tickInterval,this.min,this.max),this.tickAmount&&G.length>this.tickAmount);)this.tickInterval=ee(this,se*=1.1)}G.length>this.len&&(G=[G[0],G[G.length-1]])[0]===G[1]&&(G.length=1),B&&(this.tickPositions=G,(W=B.apply(this,[this.min,this.max]))&&(G=W))}this.tickPositions=G,this.paddedTicks=G.slice(0),this.trimTicks(G,T,M),!this.isLinked&&d(this.min)&&d(this.max)&&(this.single&&G.length<2&&!this.categories&&!this.series.some(oe=>oe.is("heatmap")&&oe.options.pointPlacement==="between")&&(this.min-=.5,this.max+=.5),P||W||this.adjustTickAmount()),A(this,"afterSetTickPositions")}trimTicks(S,P,B){let q=S[0],m=S[S.length-1],T=!this.isOrdinal&&this.minPointOffset||0;if(A(this,"trimTicks"),!this.isLinked){if(P&&q!==-1/0)this.min=q;else for(;this.min-T>S[0];)S.shift();if(B)this.max=m;else for(;this.max+T<S[S.length-1];)S.pop();S.length===0&&f(q)&&!this.options.tickPositions&&S.push((m+q)/2)}}alignToOthers(){let S,P=this,B=P.chart,q=[this],m=P.options,T=B.options.chart,M=this.coll==="yAxis"&&T.alignThresholds,G=[];if(P.thresholdAlignment=void 0,(T.alignTicks!==!1&&m.alignTicks||M)&&m.startOnTick!==!1&&m.endOnTick!==!1&&!P.logarithmic){let W=ne=>{let{horiz:oe,options:se}=ne;return[oe?se.left:se.top,se.width,se.height,se.pane].join(",")},J=W(this);B[this.coll].forEach(function(ne){let{series:oe}=ne;oe.length&&oe.some(se=>se.visible)&&ne!==P&&W(ne)===J&&(S=!0,q.push(ne))})}if(S&&M){q.forEach(J=>{let ne=J.getThresholdAlignment(P);d(ne)&&G.push(ne)});let W=G.length>1?G.reduce((J,ne)=>J+=ne,0)/G.length:void 0;q.forEach(J=>{J.thresholdAlignment=W})}return S}getThresholdAlignment(S){if((!d(this.dataMin)||this!==S&&this.series.some(P=>P.isDirty||P.isDirtyData))&&this.getSeriesExtremes(),d(this.threshold)){let P=y((this.threshold-(this.dataMin||0))/((this.dataMax||0)-(this.dataMin||0)),0,1);return this.options.reversed&&(P=1-P),P}}getTickAmount(){let S=this.options,P=S.tickPixelInterval,B=S.tickAmount;f(S.tickInterval)||B||!(this.len<P)||this.isRadial||this.logarithmic||!S.startOnTick||!S.endOnTick||(B=2),!B&&this.alignToOthers()&&(B=Math.ceil(this.len/P)+1),B<4&&(this.finalTickAmt=B,B=5),this.tickAmount=B}adjustTickAmount(){let S=this,{finalTickAmt:P,max:B,min:q,options:m,tickPositions:T,tickAmount:M,thresholdAlignment:G}=S,W=T==null?void 0:T.length,J=z(S.threshold,S.softThreshold?0:null),ne,oe,se=S.tickInterval,ue,pe=()=>T.push(w(T[T.length-1]+se)),Z=()=>T.unshift(w(T[0]-se));if(d(G)&&(ue=G<.5?Math.ceil(G*(M-1)):Math.floor(G*(M-1)),m.reversed&&(ue=M-1-ue)),S.hasData()&&d(q)&&d(B)){let X=()=>{S.transA*=(W-1)/(M-1),S.min=m.startOnTick?T[0]:Math.min(q,T[0]),S.max=m.endOnTick?T[T.length-1]:Math.max(B,T[T.length-1])};if(d(ue)&&d(S.threshold)){for(;T[ue]!==J||T.length!==M||T[0]>q||T[T.length-1]<B;){for(T.length=0,T.push(S.threshold);T.length<M;)T[ue]===void 0||T[ue]>S.threshold?Z():pe();if(se>8*S.tickInterval)break;se*=2}X()}else if(W<M){for(;T.length<M;)T.length%2||q===J?pe():Z();X()}if(f(P)){for(oe=ne=T.length;oe--;)(P===3&&oe%2==1||P<=2&&oe>0&&oe<ne-1)&&T.splice(oe,1);S.finalTickAmt=void 0}}}setScale(){var T,M;let{coll:S,stacking:P}=this,B=!1,q=!1;this.series.forEach(G=>{B=B||G.isDirtyData||G.isDirty,q=q||G.xAxis&&G.xAxis.isDirty||!1}),this.setAxisSize();let m=this.len!==(this.old&&this.old.len);m||B||q||this.isLinked||this.forceRedraw||this.userMin!==(this.old&&this.old.userMin)||this.userMax!==(this.old&&this.old.userMax)||this.alignToOthers()?(P&&S==="yAxis"&&P.buildStacks(),this.forceRedraw=!1,this.userMinRange||(this.minRange=void 0),this.getSeriesExtremes(),this.setTickInterval(),P&&S==="xAxis"&&P.buildStacks(),this.isDirty||(this.isDirty=m||this.min!==((T=this.old)==null?void 0:T.min)||this.max!==((M=this.old)==null?void 0:M.max))):P&&P.cleanStacks(),B&&delete this.allExtremes,A(this,"afterSetScale")}setExtremes(S,P,B=!0,q,m){this.series.forEach(T=>{delete T.kdTree}),A(this,"setExtremes",m=R(m,{min:S,max:P}),T=>{this.userMin=T.min,this.userMax=T.max,this.eventArgs=T,B&&this.chart.redraw(q)})}setAxisSize(){let S=this.chart,P=this.options,B=P.offsets||[0,0,0,0],q=this.horiz,m=this.width=Math.round(H(z(P.width,S.plotWidth-B[3]+B[1]),S.plotWidth)),T=this.height=Math.round(H(z(P.height,S.plotHeight-B[0]+B[2]),S.plotHeight)),M=this.top=Math.round(H(z(P.top,S.plotTop+B[0]),S.plotHeight,S.plotTop)),G=this.left=Math.round(H(z(P.left,S.plotLeft+B[3]),S.plotWidth,S.plotLeft));this.bottom=S.chartHeight-T-M,this.right=S.chartWidth-m-G,this.len=Math.max(q?m:T,0),this.pos=q?G:M}getExtremes(){let S=this.logarithmic;return{min:S?w(S.lin2log(this.min)):this.min,max:S?w(S.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}}getThreshold(S){let P=this.logarithmic,B=P?P.lin2log(this.min):this.min,q=P?P.lin2log(this.max):this.max;return S===null||S===-1/0?S=B:S===1/0?S=q:B>S?S=B:q<S&&(S=q),this.translate(S,0,1,0,1)}autoLabelAlign(S){let P=(z(S,0)-90*this.side+720)%360,B={align:"center"};return A(this,"autoLabelAlign",B,function(q){P>15&&P<165?q.align="right":P>195&&P<345&&(q.align="left")}),B.align}tickSize(S){let P=this.options,B=z(P[S==="tick"?"tickWidth":"minorTickWidth"],S==="tick"&&this.isXAxis&&!this.categories?1:0),q=P[S==="tick"?"tickLength":"minorTickLength"],m;B&&q&&(P[S+"Position"]==="inside"&&(q=-q),m=[q,B]);let T={tickSize:m};return A(this,"afterTickSize",T),T.tickSize}labelMetrics(){let S=this.chart.renderer,P=this.ticks,B=P[Object.keys(P)[0]]||{};return this.chart.renderer.fontMetrics(B.label||B.movedLabel||S.box)}unsquish(){let S=this.options.labels,P=S.padding||0,B=this.horiz,q=this.tickInterval,m=this.len/(((this.categories?1:0)+this.max-this.min)/q),T=S.rotation,M=w(.8*this.labelMetrics().h),G=Math.max(this.max-this.min,0),W=function(ue){let pe=(ue+2*P)/(m||1);return(pe=pe>1?Math.ceil(pe):1)*q>G&&ue!==1/0&&m!==1/0&&G&&(pe=Math.ceil(G/q)),w(pe*q)},J=q,ne,oe=Number.MAX_VALUE,se;if(B){if(!S.staggerLines&&(d(T)?se=[T]:m<S.autoRotationLimit&&(se=S.autoRotation)),se){let ue,pe;for(let Z of se)(Z===T||Z&&Z>=-90&&Z<=90)&&(pe=(ue=W(Math.abs(M/Math.sin(p*Z))))+Math.abs(Z/360))<oe&&(oe=pe,ne=Z,J=ue)}}else J=W(.75*M);return this.autoRotation=se,this.labelRotation=z(ne,d(T)?T:0),S.step?q:J}getSlotWidth(S){let P=this.chart,B=this.horiz,q=this.options.labels,m=Math.max(this.tickPositions.length-(this.categories?0:1),1),T=P.margin[3];if(S&&d(S.slotWidth))return S.slotWidth;if(B&&q.step<2)return q.rotation?0:(this.staggerLines||1)*this.len/m;if(!B){let M=q.style.width;if(M!==void 0)return parseInt(String(M),10);if(T)return T-P.spacing[3]}return .33*P.chartWidth}renderUnsquish(){let S=this.chart,P=S.renderer,B=this.tickPositions,q=this.ticks,m=this.options.labels,T=m.style,M=this.horiz,G=this.getSlotWidth(),W=Math.max(1,Math.round(G-(M?2*(m.padding||0):m.distance||0))),J={},ne=this.labelMetrics(),oe=T.textOverflow,se,ue,pe=0,Z,X;if(v(m.rotation)||(J.rotation=m.rotation||0),B.forEach(function(te){let re=q[te];re.movedLabel&&re.replaceMovedLabel(),re&&re.label&&re.label.textPxLength>pe&&(pe=re.label.textPxLength)}),this.maxLabelLength=pe,this.autoRotation)pe>W&&pe>ne.h?J.rotation=this.labelRotation:this.labelRotation=0;else if(G&&(se=W,!oe))for(ue="clip",X=B.length;!M&&X--;)(Z=q[B[X]].label)&&(Z.styles.textOverflow==="ellipsis"?Z.css({textOverflow:"clip"}):Z.textPxLength>G&&Z.css({width:G+"px"}),Z.getBBox().height>this.len/B.length-(ne.h-ne.f)&&(Z.specificTextOverflow="ellipsis"));J.rotation&&(se=pe>.5*S.chartHeight?.33*S.chartHeight:pe,oe||(ue="ellipsis")),this.labelAlign=m.align||this.autoLabelAlign(this.labelRotation),this.labelAlign&&(J.align=this.labelAlign),B.forEach(function(te){let re=q[te],ae=re&&re.label,de=T.width,le={};ae&&(ae.attr(J),re.shortenLabel?re.shortenLabel():se&&!de&&T.whiteSpace!=="nowrap"&&(se<ae.textPxLength||ae.element.tagName==="SPAN")?(le.width=se+"px",oe||(le.textOverflow=ae.specificTextOverflow||ue),ae.css(le)):!ae.styles.width||le.width||de||ae.css({width:null}),delete ae.specificTextOverflow,re.rotation=J.rotation)},this),this.tickRotCorr=P.rotCorr(ne.b,this.labelRotation||0,this.side!==0)}hasData(){return this.series.some(function(S){return S.hasData()})||this.options.showEmpty&&f(this.min)&&f(this.max)}addTitle(S){let P,B=this.chart.renderer,q=this.horiz,m=this.opposite,T=this.options.title,M=this.chart.styledMode;this.axisTitle||((P=T.textAlign)||(P=(q?{low:"left",middle:"center",high:"right"}:{low:m?"right":"left",middle:"center",high:m?"left":"right"})[T.align]),this.axisTitle=B.text(T.text||"",0,0,T.useHTML).attr({zIndex:7,rotation:T.rotation||0,align:P}).addClass("highcharts-axis-title"),M||this.axisTitle.css(h(T.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0),M||T.style.width||this.isRadial||this.axisTitle.css({width:this.len+"px"}),this.axisTitle[S?"show":"hide"](S)}generateTick(S){let P=this.ticks;P[S]?P[S].addLabel():P[S]=new _(this,S)}createGroups(){let{axisParent:S,chart:P,coll:B,options:q}=this,m=P.renderer,T=(M,G,W)=>m.g(M).attr({zIndex:W}).addClass(`highcharts-${B.toLowerCase()}${G} `+(this.isRadial?`highcharts-radial-axis${G} `:"")+(q.className||"")).add(S);this.axisGroup||(this.gridGroup=T("grid","-grid",q.gridZIndex),this.axisGroup=T("axis","",q.zIndex),this.labelGroup=T("axis-labels","-labels",q.labels.zIndex))}getOffset(){let S=this,{chart:P,horiz:B,options:q,side:m,ticks:T,tickPositions:M,coll:G}=S,W=P.inverted&&!S.isZAxis?[1,0,3,2][m]:m,J=S.hasData(),ne=q.title,oe=q.labels,se=d(q.crossing),ue=P.axisOffset,pe=P.clipOffset,Z=[-1,1,1,-1][m],X,te=0,re,ae=0,de=0,le,he;if(S.showAxis=X=J||q.showEmpty,S.staggerLines=S.horiz&&oe.staggerLines||void 0,S.createGroups(),J||S.isLinked?(M.forEach(function(fe){S.generateTick(fe)}),S.renderUnsquish(),S.reserveSpaceDefault=m===0||m===2||{1:"left",3:"right"}[m]===S.labelAlign,z(oe.reserveSpace,!se&&null,S.labelAlign==="center"||null,S.reserveSpaceDefault)&&M.forEach(function(fe){de=Math.max(T[fe].getLabelSize(),de)}),S.staggerLines&&(de*=S.staggerLines),S.labelOffset=de*(S.opposite?-1:1)):x(T,function(fe,me){fe.destroy(),delete T[me]}),ne!=null&&ne.text&&ne.enabled!==!1&&(S.addTitle(X),X&&!se&&ne.reserveSpace!==!1&&(S.titleOffset=te=S.axisTitle.getBBox()[B?"height":"width"],ae=f(re=ne.offset)?0:z(ne.margin,B?5:10))),S.renderLine(),S.offset=Z*z(q.offset,ue[m]?ue[m]+(q.margin||0):0),S.tickRotCorr=S.tickRotCorr||{x:0,y:0},he=m===0?-S.labelMetrics().h:m===2?S.tickRotCorr.y:0,le=Math.abs(de)+ae,de&&(le-=he,le+=Z*(B?z(oe.y,S.tickRotCorr.y+Z*oe.distance):z(oe.x,Z*oe.distance))),S.axisTitleMargin=z(re,le),S.getMaxLabelDimensions&&(S.maxLabelDimensions=S.getMaxLabelDimensions(T,M)),G!=="colorAxis"&&pe){let fe=this.tickSize("tick");ue[m]=Math.max(ue[m],(S.axisTitleMargin||0)+te+Z*S.offset,le,M&&M.length&&fe?fe[0]+Z*S.offset:0);let me=!S.axisLine||q.offset?0:S.axisLine.strokeWidth()/2;pe[W]=Math.max(pe[W],me)}A(this,"afterGetOffset")}getLinePath(S){let P=this.chart,B=this.opposite,q=this.offset,m=this.horiz,T=this.left+(B?this.width:0)+q,M=P.chartHeight-this.bottom-(B?this.height:0)+q;return B&&(S*=-1),P.renderer.crispLine([["M",m?this.left:T,m?M:this.top],["L",m?P.chartWidth-this.right:T,m?M:P.chartHeight-this.bottom]],S)}renderLine(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))}getTitlePosition(S){let P=this.horiz,B=this.left,q=this.top,m=this.len,T=this.options.title,M=P?B:q,G=this.opposite,W=this.offset,J=T.x,ne=T.y,oe=this.chart.renderer.fontMetrics(S),se=S?Math.max(S.getBBox(!1,0).height-oe.h-1,0):0,ue={low:M+(P?0:m),middle:M+m/2,high:M+(P?m:0)}[T.align],pe=(P?q+this.height:B)+(P?1:-1)*(G?-1:1)*(this.axisTitleMargin||0)+[-se,se,oe.f,-se][this.side],Z={x:P?ue+J:pe+(G?this.width:0)+W+J,y:P?pe+ne-(G?this.height:0)+W:ue+ne};return A(this,"afterGetTitlePosition",{titlePosition:Z}),Z}renderMinorTick(S,P){let B=this.minorTicks;B[S]||(B[S]=new _(this,S,"minor")),P&&B[S].isNew&&B[S].render(null,!0),B[S].render(null,!1,1)}renderTick(S,P,B){let q=this.isLinked,m=this.ticks;(!q||S>=this.min&&S<=this.max||this.grid&&this.grid.isColumn)&&(m[S]||(m[S]=new _(this,S)),B&&m[S].isNew&&m[S].render(P,!0,-1),m[S].render(P))}render(){let S,P,B=this,q=B.chart,m=B.logarithmic,T=q.renderer,M=B.options,G=B.isLinked,W=B.tickPositions,J=B.axisTitle,ne=B.ticks,oe=B.minorTicks,se=B.alternateBands,ue=M.stackLabels,pe=M.alternateGridColor,Z=M.crossing,X=B.tickmarkOffset,te=B.axisLine,re=B.showAxis,ae=D(T.globalAnimation);if(B.labelEdge.length=0,B.overlap=!1,[ne,oe,se].forEach(function(de){x(de,function(le){le.isActive=!1})}),d(Z)){let de=this.isXAxis?q.yAxis[0]:q.xAxis[0],le=[1,-1,-1,1][this.side];if(de){let he=de.toPixels(Z,!0);B.horiz&&(he=de.len-he),B.offset=le*he}}if(B.hasData()||G){let de=B.chart.hasRendered&&B.old&&d(B.old.min);B.minorTickInterval&&!B.categories&&B.getMinorTickPositions().forEach(function(le){B.renderMinorTick(le,de)}),W.length&&(W.forEach(function(le,he){B.renderTick(le,he,de)}),X&&(B.min===0||B.single)&&(ne[-1]||(ne[-1]=new _(B,-1,null,!0)),ne[-1].render(-1))),pe&&W.forEach(function(le,he){P=W[he+1]!==void 0?W[he+1]+X:B.max-X,he%2==0&&le<B.max&&P<=B.max+(q.polar?-X:X)&&(se[le]||(se[le]=new F.PlotLineOrBand(B,{})),S=le+X,se[le].options={from:m?m.lin2log(S):S,to:m?m.lin2log(P):P,color:pe,className:"highcharts-alternate-grid"},se[le].render(),se[le].isActive=!0)}),B._addedPlotLB||(B._addedPlotLB=!0,(M.plotLines||[]).concat(M.plotBands||[]).forEach(function(le){B.addPlotBandOrLine(le)}))}[ne,oe,se].forEach(function(de){let le=[],he=ae.duration;x(de,function(fe,me){fe.isActive||(fe.render(me,!1,0),fe.isActive=!1,le.push(me))}),Q(function(){let fe=le.length;for(;fe--;)de[le[fe]]&&!de[le[fe]].isActive&&(de[le[fe]].destroy(),delete de[le[fe]])},de!==se&&q.hasRendered&&he?he:0)}),te&&(te[te.isPlaced?"animate":"attr"]({d:this.getLinePath(te.strokeWidth())}),te.isPlaced=!0,te[re?"show":"hide"](re)),J&&re&&(J[J.isNew?"attr":"animate"](B.getTitlePosition(J)),J.isNew=!1),ue&&ue.enabled&&B.stacking&&B.stacking.renderStackTotals(),B.old={len:B.len,max:B.max,min:B.min,transA:B.transA,userMax:B.userMax,userMin:B.userMin},B.isDirty=!1,A(this,"afterRender")}redraw(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(S){S.render()})),this.series.forEach(function(S){S.isDirty=!0})}getKeepProps(){return this.keepProps||$.keepProps}destroy(S){let P=this,B=P.plotLinesAndBands,q=this.eventOptions;if(A(this,"destroy",{keepEvents:S}),S||ie(P),[P.ticks,P.minorTicks,P.alternateBands].forEach(function(m){N(m)}),B){let m=B.length;for(;m--;)B[m].destroy()}for(let m in["axisLine","axisTitle","axisGroup","gridGroup","labelGroup","cross","scrollbar"].forEach(function(T){P[T]&&(P[T]=P[T].destroy())}),P.plotLinesAndBandsGroups)P.plotLinesAndBandsGroups[m]=P.plotLinesAndBandsGroups[m].destroy();x(P,function(m,T){P.getKeepProps().indexOf(T)===-1&&delete P[T]}),this.eventOptions=q}drawCrosshair(S,P){let B=this.crosshair,q=z(B&&B.snap,!0),m=this.chart,T,M,G,W=this.cross,J;if(A(this,"drawCrosshair",{e:S,point:P}),S||(S=this.cross&&this.cross.e),B&&(f(P)||!q)!==!1){if(q?f(P)&&(M=z(this.coll!=="colorAxis"?P.crosshairPos:null,this.isXAxis?P.plotX:this.len-P.plotY)):M=S&&(this.horiz?S.chartX-this.pos:this.len-S.chartY+this.pos),f(M)&&(J={value:P&&(this.isXAxis?P.x:z(P.stackY,P.y)),translatedValue:M},m.polar&&R(J,{isCrosshair:!0,chartX:S&&S.chartX,chartY:S&&S.chartY,point:P}),T=this.getPlotLinePath(J)||null),!f(T)){this.hideCrosshair();return}G=this.categories&&!this.isRadial,W||(this.cross=W=m.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(G?"category ":"thin ")+(B.className||"")).attr({zIndex:z(B.zIndex,2)}).add(),!m.styledMode&&(W.attr({stroke:B.color||(G?l.parse("#ccd3ff").setOpacity(.25).get():"#cccccc"),"stroke-width":z(B.width,1)}).css({"pointer-events":"none"}),B.dashStyle&&W.attr({dashstyle:B.dashStyle}))),W.show().attr({d:T}),G&&!B.width&&W.attr({"stroke-width":this.transA}),this.cross.e=S}else this.hideCrosshair();A(this,"afterDrawCrosshair",{e:S,point:P})}hideCrosshair(){this.cross&&this.cross.hide(),A(this,"afterHideCrosshair")}update(S,P){let B=this.chart;S=h(this.userOptions,S),this.destroy(!0),this.init(B,S),B.isDirtyBox=!0,z(P,!0)&&B.redraw()}remove(S){let P=this.chart,B=this.coll,q=this.series,m=q.length;for(;m--;)q[m]&&q[m].remove(!1);K(P.axes,this),K(P[B]||[],this),P.orderItems(B),this.destroy(),P.isDirtyBox=!0,z(S,!0)&&P.redraw()}setTitle(S,P){this.update({title:S},P)}setCategories(S,P){this.update({categories:S},P)}}return $.keepProps=["coll","extKey","hcEvents","len","names","series","userMax","userMin"],$}),n(i,"Core/Axis/DateTimeAxis.js",[i["Core/Utilities.js"]],function(o){var s;let{addEvent:l,getMagnitude:j,normalizeTickInterval:E,timeUnits:F}=o;return function(_){function C(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)}function D(){if(this.options.type!=="datetime"){this.dateTime=void 0;return}this.dateTime||(this.dateTime=new V(this))}_.compose=function(k){return k.keepProps.includes("dateTime")||(k.keepProps.push("dateTime"),k.prototype.getTimeTicks=C,l(k,"afterSetOptions",D)),k};class V{constructor(I){this.axis=I}normalizeTimeTickInterval(I,U){let p=U||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],a=p[p.length-1],u=F[a[0]],y=a[1],w;for(w=0;w<p.length&&(u=F[(a=p[w])[0]],y=a[1],!p[w+1]||!(I<=(u*y[y.length-1]+F[p[w+1][0]])/2));w++);u===F.year&&I<5*u&&(y=[1,2,5]);let f=E(I/u,y,a[0]==="year"?Math.max(j(I/u),1):1);return{unitRange:u,count:f,unitName:a[0]}}getXDateFormat(I,U){let{axis:p}=this,a=p.chart.time;return p.closestPointRange?a.getDateFormat(p.closestPointRange,I,p.options.startOfWeek,U)||a.resolveDTLFormat(U.year).main:a.resolveDTLFormat(U.day).main}}_.Additions=V}(s||(s={})),s}),n(i,"Core/Axis/LogarithmicAxis.js",[i["Core/Utilities.js"]],function(o){var s;let{addEvent:l,normalizeTickInterval:j,pick:E}=o;return function(F){function _(V){let k=V.userOptions,I=this.logarithmic;k.type!=="logarithmic"?this.logarithmic=void 0:I||(I=this.logarithmic=new D(this))}function C(){let V=this.logarithmic;V&&(this.lin2val=function(k){return V.lin2log(k)},this.val2lin=function(k){return V.log2lin(k)})}F.compose=function(V){return V.keepProps.includes("logarithmic")||(V.keepProps.push("logarithmic"),l(V,"init",_),l(V,"afterInit",C)),V};class D{constructor(k){this.axis=k}getLogTickPositions(k,I,U,p){let a=this.axis,u=a.len,y=a.options,w=[];if(p||(this.minorAutoInterval=void 0),k>=.5)k=Math.round(k),w=a.getLinearTickPositions(k,I,U);else if(k>=.08){let f,N,K,Y,R,A,L,b=Math.floor(I);for(f=k>.3?[1,2,4]:k>.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9],N=b;N<U+1&&!L;N++)for(K=0,Y=f.length;K<Y&&!L;K++)(R=this.log2lin(this.lin2log(N)*f[K]))>I&&(!p||A<=U)&&A!==void 0&&w.push(A),A>U&&(L=!0),A=R}else{let f=this.lin2log(I),N=this.lin2log(U),K=p?a.getMinorTickInterval():y.tickInterval,Y=y.tickPixelInterval/(p?5:1),R=p?u/a.tickPositions.length:u;k=j(k=E(K==="auto"?null:K,this.minorAutoInterval,(N-f)*Y/(R||1))),w=a.getLinearTickPositions(k,f,N).map(this.log2lin),p||(this.minorAutoInterval=k/5)}return p||(a.tickInterval=k),w}lin2log(k){return Math.pow(10,k)}log2lin(k){return Math.log(k)/Math.LN10}}F.Additions=D}(s||(s={})),s}),n(i,"Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js",[i["Core/Utilities.js"]],function(o){var s;let{erase:l,extend:j,isNumber:E}=o;return function(F){let _;function C(a){return this.addPlotBandOrLine(a,"plotBands")}function D(a,u){let y=this.userOptions,w=new _(this,a);if(this.visible&&(w=w.render()),w){if(this._addedPlotLB||(this._addedPlotLB=!0,(y.plotLines||[]).concat(y.plotBands||[]).forEach(f=>{this.addPlotBandOrLine(f)})),u){let f=y[u]||[];f.push(a),y[u]=f}this.plotLinesAndBands.push(w)}return w}function V(a){return this.addPlotBandOrLine(a,"plotLines")}function k(a,u,y){y=y||this.options;let w=this.getPlotLinePath({value:u,force:!0,acrossPanes:y.acrossPanes}),f=[],N=this.horiz,K=!E(this.min)||!E(this.max)||a<this.min&&u<this.min||a>this.max&&u>this.max,Y=this.getPlotLinePath({value:a,force:!0,acrossPanes:y.acrossPanes}),R,A=1,L;if(Y&&w)for(K&&(L=Y.toString()===w.toString(),A=0),R=0;R<Y.length;R+=2){let b=Y[R],c=Y[R+1],d=w[R],v=w[R+1];(b[0]==="M"||b[0]==="L")&&(c[0]==="M"||c[0]==="L")&&(d[0]==="M"||d[0]==="L")&&(v[0]==="M"||v[0]==="L")&&(N&&d[1]===b[1]?(d[1]+=A,v[1]+=A):N||d[2]!==b[2]||(d[2]+=A,v[2]+=A),f.push(["M",b[1],b[2]],["L",c[1],c[2]],["L",v[1],v[2]],["L",d[1],d[2]],["Z"])),f.isFlat=L}return f}function I(a){this.removePlotBandOrLine(a)}function U(a){let u=this.plotLinesAndBands,y=this.options,w=this.userOptions;if(u){let f=u.length;for(;f--;)u[f].id===a&&u[f].destroy();[y.plotLines||[],w.plotLines||[],y.plotBands||[],w.plotBands||[]].forEach(function(N){for(f=N.length;f--;)(N[f]||{}).id===a&&l(N,N[f])})}}function p(a){this.removePlotBandOrLine(a)}F.compose=function(a,u){let y=u.prototype;return y.addPlotBand||(_=a,j(y,{addPlotBand:C,addPlotLine:V,addPlotBandOrLine:D,getPlotBandPath:k,removePlotBand:I,removePlotLine:p,removePlotBandOrLine:U})),u}}(s||(s={})),s}),n(i,"Core/Axis/PlotLineOrBand/PlotLineOrBand.js",[i["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],i["Core/Utilities.js"]],function(o,s){let{arrayMax:l,arrayMin:j,defined:E,destroyObjectProperties:F,erase:_,fireEvent:C,merge:D,objectEach:V,pick:k}=s;class I{static compose(p){return o.compose(I,p)}constructor(p,a){this.axis=p,this.options=a,this.id=a.id}render(){C(this,"render");let{axis:p,options:a}=this,{horiz:u,logarithmic:y}=p,{color:w,events:f,zIndex:N=0}=a,K={},Y=p.chart.renderer,R=a.to,A=a.from,L=a.value,b=a.borderWidth,c=a.label,{label:d,svgElem:v}=this,h=[],g,x=E(A)&&E(R),z=E(L),H=!v,ie={class:"highcharts-plot-"+(x?"band ":"line ")+(a.className||"")},O=x?"bands":"lines";if(!p.chart.styledMode&&(z?(ie.stroke=w||"#999999",ie["stroke-width"]=k(a.width,1),a.dashStyle&&(ie.dashstyle=a.dashStyle)):x&&(ie.fill=w||"#e6e9ff",b&&(ie.stroke=a.borderColor,ie["stroke-width"]=b))),K.zIndex=N,O+="-"+N,(g=p.plotLinesAndBandsGroups[O])||(p.plotLinesAndBandsGroups[O]=g=Y.g("plot-"+O).attr(K).add()),v||(this.svgElem=v=Y.path().attr(ie).add(g)),E(L))h=p.getPlotLinePath({value:(y==null?void 0:y.log2lin(L))??L,lineWidth:v.strokeWidth(),acrossPanes:a.acrossPanes});else{if(!(E(A)&&E(R)))return;h=p.getPlotBandPath((y==null?void 0:y.log2lin(A))??A,(y==null?void 0:y.log2lin(R))??R,a)}return!this.eventsAdded&&f&&(V(f,(Q,ee)=>{v==null||v.on(ee,$=>{f[ee].apply(this,[$])})}),this.eventsAdded=!0),(H||!v.d)&&(h!=null&&h.length)?v.attr({d:h}):v&&(h?(v.show(),v.animate({d:h})):v.d&&(v.hide(),d&&(this.label=d=d.destroy()))),c&&(E(c.text)||E(c.formatter))&&(h!=null&&h.length)&&p.width>0&&p.height>0&&!h.isFlat?(c=D({align:u&&x?"center":void 0,x:u?!x&&4:10,verticalAlign:!u&&x?"middle":void 0,y:u?x?16:10:x?6:-4,rotation:u&&!x?90:0},c),this.renderLabel(c,h,x,N)):d&&d.hide(),this}renderLabel(p,a,u,y){let w=this.axis,f=w.chart.renderer,N=this.label;N||(this.label=N=f.text(this.getLabelText(p),0,0,p.useHTML).attr({align:p.textAlign||p.align,rotation:p.rotation,class:"highcharts-plot-"+(u?"band":"line")+"-label "+(p.className||""),zIndex:y}),w.chart.styledMode||N.css(D({fontSize:"0.8em",textOverflow:"ellipsis"},p.style)),N.add());let K=a.xBounds||[a[0][1],a[1][1],u?a[2][1]:a[0][1]],Y=a.yBounds||[a[0][2],a[1][2],u?a[2][2]:a[0][2]],R=j(K),A=j(Y);if(N.align(p,!1,{x:R,y:A,width:l(K)-R,height:l(Y)-A}),!N.alignValue||N.alignValue==="left"){let L=p.clip?w.width:w.chart.chartWidth;N.css({width:(N.rotation===90?w.height-(N.alignAttr.y-w.top):L-(N.alignAttr.x-w.left))+"px"})}N.show(!0)}getLabelText(p){return E(p.formatter)?p.formatter.call(this):p.text}destroy(){_(this.axis.plotLinesAndBands,this),delete this.axis,F(this)}}return I}),n(i,"Core/Tooltip.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Templating.js"],i["Core/Globals.js"],i["Core/Renderer/RendererUtilities.js"],i["Core/Renderer/RendererRegistry.js"],i["Core/Utilities.js"]],function(o,s,l,j,E,F){var _;let{animObject:C}=o,{format:D}=s,{composed:V,doc:k,isSafari:I}=l,{distribute:U}=j,{addEvent:p,clamp:a,css:u,discardElement:y,extend:w,fireEvent:f,isArray:N,isNumber:K,isString:Y,merge:R,pick:A,pushUnique:L,splat:b,syncTimeout:c}=F;class d{constructor(h,g,x){this.allowShared=!0,this.crosshairs=[],this.distance=0,this.isHidden=!0,this.isSticky=!1,this.options={},this.outside=!1,this.chart=h,this.init(h,g),this.pointer=x}bodyFormatter(h){return h.map(function(g){let x=g.series.tooltipOptions;return(x[(g.point.formatPrefix||"point")+"Formatter"]||g.point.tooltipFormatter).call(g.point,x[(g.point.formatPrefix||"point")+"Format"]||"")})}cleanSplit(h){this.chart.series.forEach(function(g){let x=g&&g.tt;x&&(!x.isActive||h?g.tt=x.destroy():x.isActive=!1)})}defaultFormatter(h){let g,x=this.points||b(this);return(g=(g=[h.tooltipFooterHeaderFormatter(x[0])]).concat(h.bodyFormatter(x))).push(h.tooltipFooterHeaderFormatter(x[0],!0)),g}destroy(){this.label&&(this.label=this.label.destroy()),this.split&&(this.cleanSplit(!0),this.tt&&(this.tt=this.tt.destroy())),this.renderer&&(this.renderer=this.renderer.destroy(),y(this.container)),F.clearTimeout(this.hideTimer)}getAnchor(h,g){let x,{chart:z,pointer:H}=this,ie=z.inverted,O=z.plotTop,Q=z.plotLeft;if((h=b(h))[0].series&&h[0].series.yAxis&&!h[0].series.yAxis.options.reversedStacks&&(h=h.slice().reverse()),this.followPointer&&g)g.chartX===void 0&&(g=H.normalize(g)),x=[g.chartX-Q,g.chartY-O];else if(h[0].tooltipPos)x=h[0].tooltipPos;else{let ee=0,$=0;h.forEach(function(ce){let S=ce.pos(!0);S&&(ee+=S[0],$+=S[1])}),ee/=h.length,$/=h.length,this.shared&&h.length>1&&g&&(ie?ee=g.chartX:$=g.chartY),x=[ee-Q,$-O]}return x.map(Math.round)}getClassName(h,g,x){let z=this.options,H=h.series,ie=H.options;return[z.className,"highcharts-label",x&&"highcharts-tooltip-header",g?"highcharts-tooltip-box":"highcharts-tooltip",!x&&"highcharts-color-"+A(h.colorIndex,H.colorIndex),ie&&ie.className].filter(Y).join(" ")}getLabel(){let h=this,g=this.chart.styledMode,x=this.options,z=this.split&&this.allowShared,H=this.container,ie=this.chart.renderer;if(this.label){let O=!this.label.hasClass("highcharts-label");(!z&&O||z&&!O)&&this.destroy()}if(!this.label){if(this.outside){let O=this.chart.options.chart.style,Q=E.getRendererType();this.container=H=l.doc.createElement("div"),H.className="highcharts-tooltip-container",u(H,{position:"absolute",top:"1px",pointerEvents:"none",zIndex:Math.max(this.options.style.zIndex||0,(O&&O.zIndex||0)+3)}),this.renderer=ie=new Q(H,0,0,O,void 0,void 0,ie.styledMode)}if(z?this.label=ie.g("tooltip"):(this.label=ie.label("",0,0,x.shape,void 0,void 0,x.useHTML,void 0,"tooltip").attr({padding:x.padding,r:x.borderRadius}),g||this.label.attr({fill:x.backgroundColor,"stroke-width":x.borderWidth||0}).css(x.style).css({pointerEvents:x.style.pointerEvents||(this.shouldStickOnContact()?"auto":"none")})),h.outside){let O=this.label;[O.xSetter,O.ySetter].forEach((Q,ee)=>{O[ee?"ySetter":"xSetter"]=$=>{Q.call(O,h.distance),O[ee?"y":"x"]=$,H&&(H.style[ee?"top":"left"]=`${$}px`)}})}this.label.attr({zIndex:8}).shadow(x.shadow).add()}return H&&!H.parentElement&&l.doc.body.appendChild(H),this.label}getPlayingField(){let{body:h,documentElement:g}=k,{chart:x,distance:z,outside:H}=this;return{width:H?Math.max(h.scrollWidth,g.scrollWidth,h.offsetWidth,g.offsetWidth,g.clientWidth)-2*z:x.chartWidth,height:H?Math.max(h.scrollHeight,g.scrollHeight,h.offsetHeight,g.offsetHeight,g.clientHeight):x.chartHeight}}getPosition(h,g,x){var ae,de;let{distance:z,chart:H,outside:ie,pointer:O}=this,{inverted:Q,plotLeft:ee,plotTop:$,polar:ce}=H,{plotX:S=0,plotY:P=0}=x,B={},q=Q&&x.h||0,{height:m,width:T}=this.getPlayingField(),M=O.getChartPosition(),G=le=>le*M.scaleX,W=le=>le*M.scaleY,J=le=>{let he=le==="x";return[le,he?T:m,he?h:g].concat(ie?[he?G(h):W(g),he?M.left-z+G(S+ee):M.top-z+W(P+$),0,he?T:m]:[he?h:g,he?S+ee:P+$,he?ee:$,he?ee+H.plotWidth:$+H.plotHeight])},ne=J("y"),oe=J("x"),se,ue=!!x.negative;!ce&&((de=(ae=H.hoverSeries)==null?void 0:ae.yAxis)!=null&&de.reversed)&&(ue=!ue);let pe=!this.followPointer&&A(x.ttBelow,!ce&&!Q===ue),Z=function(le,he,fe,me,ge,xe,ye){let je=ie?le==="y"?W(z):G(z):z,Ae=(fe-me)/2,ve=me<ge-z,ke=ge+z+me<he,Se=ge-je-fe+Ae,Ee=ge+je-Ae;if(pe&&ke)B[le]=Ee;else if(!pe&&ve)B[le]=Se;else if(ve)B[le]=Math.min(ye-me,Se-q<0?Se:Se-q);else{if(!ke)return!1;B[le]=Math.max(xe,Ee+q+fe>he?Ee:Ee+q)}},X=function(le,he,fe,me,ge){if(ge<z||ge>he-z)return!1;ge<fe/2?B[le]=1:ge>he-me/2?B[le]=he-me-2:B[le]=ge-fe/2},te=function(le){[ne,oe]=[oe,ne],se=le},re=()=>{Z.apply(0,ne)!==!1?X.apply(0,oe)!==!1||se||(te(!0),re()):se?B.x=B.y=0:(te(!0),re())};return(Q&&!ce||this.len>1)&&te(),re(),B}hide(h){let g=this;F.clearTimeout(this.hideTimer),h=A(h,this.options.hideDelay),this.isHidden||(this.hideTimer=c(function(){let x=g.getLabel();g.getLabel().animate({opacity:0},{duration:h&&150,complete:()=>{x.hide(),g.container&&g.container.remove()}}),g.isHidden=!0},h))}init(h,g){this.chart=h,this.options=g,this.crosshairs=[],this.isHidden=!0,this.split=g.split&&!h.inverted&&!h.polar,this.shared=g.shared||this.split,this.outside=A(g.outside,!!(h.scrollablePixelsX||h.scrollablePixelsY))}shouldStickOnContact(h){return!!(!this.followPointer&&this.options.stickOnContact&&(!h||this.pointer.inClass(h.target,"highcharts-tooltip")))}move(h,g,x,z){let H=this,ie=C(!H.isHidden&&H.options.animation),O=H.followPointer||(H.len||0)>1,Q={x:h,y:g};O||(Q.anchorX=x,Q.anchorY=z),ie.step=()=>H.drawTracker(),H.getLabel().animate(Q,ie)}refresh(h,g){let{chart:x,options:z,pointer:H,shared:ie}=this,O=b(h),Q=O[0],ee=[],$=z.format,ce=z.formatter||this.defaultFormatter,S=x.styledMode,P={};if(!z.enabled||!Q.series)return;F.clearTimeout(this.hideTimer),this.allowShared=!(!N(h)&&h.series&&h.series.noSharedTooltip),this.followPointer=!this.split&&Q.series.tooltipOptions.followPointer;let B=this.getAnchor(h,g),q=B[0],m=B[1];ie&&this.allowShared?(H.applyInactiveState(O),O.forEach(function(G){G.setState("hover"),ee.push(G.getLabelConfig())}),(P=Q.getLabelConfig()).points=ee):P=Q.getLabelConfig(),this.len=ee.length;let T=Y($)?D($,P,x):ce.call(P,this),M=Q.series;if(this.distance=A(M.tooltipOptions.distance,16),T===!1)this.hide();else{if(this.split&&this.allowShared)this.renderSplit(T,O);else{let G=q,W=m;if(g&&H.isDirectTouch&&(G=g.chartX-x.plotLeft,W=g.chartY-x.plotTop),x.polar||M.options.clip===!1||O.some(J=>H.isDirectTouch||J.series.shouldShowTooltip(G,W))){let J=this.getLabel();(!z.style.width||S)&&J.css({width:(this.outside?this.getPlayingField():x.spacingBox).width+"px"}),J.attr({text:T&&T.join?T.join(""):T}),J.addClass(this.getClassName(Q),!0),S||J.attr({stroke:z.borderColor||Q.color||M.color||"#666666"}),this.updatePosition({plotX:q,plotY:m,negative:Q.negative,ttBelow:Q.ttBelow,h:B[2]||0})}else{this.hide();return}}this.isHidden&&this.label&&this.label.attr({opacity:1}).show(),this.isHidden=!1}f(this,"refresh")}renderSplit(h,g){var he;let x=this,{chart:z,chart:{chartWidth:H,chartHeight:ie,plotHeight:O,plotLeft:Q,plotTop:ee,scrollablePixelsY:$=0,scrollablePixelsX:ce,styledMode:S},distance:P,options:B,options:{positioner:q},pointer:m}=x,{scrollLeft:T=0,scrollTop:M=0}=((he=z.scrollablePlotArea)==null?void 0:he.scrollingContainer)||{},G=x.outside&&typeof ce!="number"?k.documentElement.getBoundingClientRect():{left:T,right:T+H,top:M,bottom:M+ie},W=x.getLabel(),J=this.renderer||z.renderer,ne=!!(z.xAxis[0]&&z.xAxis[0].opposite),{left:oe,top:se}=m.getChartPosition(),ue=ee+M,pe=0,Z=O-$;function X(fe,me,ge,xe,ye=!0){let je,Ae;return ge?(je=ne?0:Z,Ae=a(fe-xe/2,G.left,G.right-xe-(x.outside?oe:0))):(je=me-ue,Ae=a(Ae=ye?fe-xe-P:fe+P,ye?Ae:G.left,G.right)),{x:Ae,y:je}}Y(h)&&(h=[!1,h]);let te=h.slice(0,g.length+1).reduce(function(fe,me,ge){if(me!==!1&&me!==""){let xe=g[ge-1]||{isHeader:!0,plotX:g[0].plotX,plotY:O,series:{}},ye=xe.isHeader,je=ye?x:xe.series,Ae=je.tt=function(Ie,Le,ct){let ze=Ie,{isHeader:ai,series:Ai}=Le;if(!ze){let li={padding:B.padding,r:B.borderRadius};S||(li.fill=B.backgroundColor,li["stroke-width"]=B.borderWidth??1),ze=J.label("",0,0,B[ai?"headerShape":"shape"],void 0,void 0,B.useHTML).addClass(x.getClassName(Le,!0,ai)).attr(li).add(W)}return ze.isActive=!0,ze.attr({text:ct}),S||ze.css(B.style).attr({stroke:B.borderColor||Le.color||Ai.color||"#333333"}),ze}(je.tt,xe,me.toString()),ve=Ae.getBBox(),ke=ve.width+Ae.strokeWidth();ye&&(pe=ve.height,Z+=pe,ne&&(ue-=pe));let{anchorX:Se,anchorY:Ee}=function(Ie){let Le,ct,{isHeader:ze,plotX:ai=0,plotY:Ai=0,series:li}=Ie;if(ze)Le=Math.max(Q+ai,Q),ct=ee+O/2;else{let{xAxis:dt,yAxis:ht}=li;Le=dt.pos+a(ai,-P,dt.len+P),li.shouldShowTooltip(0,ht.pos-ee+Ai,{ignoreX:!0})&&(ct=ht.pos+Ai)}return{anchorX:Le=a(Le,G.left-P,G.right+P),anchorY:ct}}(xe);if(typeof Ee=="number"){let Ie=ve.height+1,Le=q?q.call(x,ke,Ie,xe):X(Se,Ee,ye,ke);fe.push({align:q?0:void 0,anchorX:Se,anchorY:Ee,boxWidth:ke,point:xe,rank:A(Le.rank,ye?1:0),size:Ie,target:Le.y,tt:Ae,x:Le.x})}else Ae.isActive=!1}return fe},[]);!q&&te.some(fe=>{let{outside:me}=x,ge=(me?oe:0)+fe.anchorX;return ge<G.left&&ge+fe.boxWidth<G.right||ge<oe-G.left+fe.boxWidth&&G.right-ge>ge})&&(te=te.map(fe=>{let{x:me,y:ge}=X(fe.anchorX,fe.anchorY,fe.point.isHeader,fe.boxWidth,!1);return w(fe,{target:ge,x:me})})),x.cleanSplit(),U(te,Z);let re={left:oe,right:oe};te.forEach(function(fe){let{x:me,boxWidth:ge,isHeader:xe}=fe;!xe&&(x.outside&&oe+me<re.left&&(re.left=oe+me),!xe&&x.outside&&re.left+ge>re.right&&(re.right=oe+me))}),te.forEach(function(fe){let{x:me,anchorX:ge,anchorY:xe,pos:ye,point:{isHeader:je}}=fe,Ae={visibility:ye===void 0?"hidden":"inherit",x:me,y:(ye||0)+ue,anchorX:ge,anchorY:xe};if(x.outside&&me<ge){let ve=oe-re.left;ve>0&&(je||(Ae.x=me+ve,Ae.anchorX=ge+ve),je&&(Ae.x=(re.right-re.left)/2,Ae.anchorX=ge+ve))}fe.tt.attr(Ae)});let{container:ae,outside:de,renderer:le}=x;if(de&&ae&&le){let{width:fe,height:me,x:ge,y:xe}=W.getBBox();le.setSize(fe+ge,me+xe,!1),ae.style.left=re.left+"px",ae.style.top=se+"px"}I&&W.attr({opacity:W.opacity===1?.999:1})}drawTracker(){if(!this.shouldStickOnContact()){this.tracker&&(this.tracker=this.tracker.destroy());return}let h=this.chart,g=this.label,x=this.shared?h.hoverPoints:h.hoverPoint;if(!g||!x)return;let z={x:0,y:0,width:0,height:0},H=this.getAnchor(x),ie=g.getBBox();H[0]+=h.plotLeft-(g.translateX||0),H[1]+=h.plotTop-(g.translateY||0),z.x=Math.min(0,H[0]),z.y=Math.min(0,H[1]),z.width=H[0]<0?Math.max(Math.abs(H[0]),ie.width-H[0]):Math.max(Math.abs(H[0]),ie.width),z.height=H[1]<0?Math.max(Math.abs(H[1]),ie.height-Math.abs(H[1])):Math.max(Math.abs(H[1]),ie.height),this.tracker?this.tracker.attr(z):(this.tracker=g.renderer.rect(z).addClass("highcharts-tracker").add(g),h.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}styledModeFormat(h){return h.replace('style="font-size: 0.8em"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"')}tooltipFooterHeaderFormatter(h,g){let x=h.series,z=x.tooltipOptions,H=x.xAxis,ie=H&&H.dateTime,O={isFooter:g,labelConfig:h},Q=z.xDateFormat,ee=z[g?"footerFormat":"headerFormat"];return f(this,"headerFormatter",O,function($){ie&&!Q&&K(h.key)&&(Q=ie.getXDateFormat(h.key,z.dateTimeLabelFormats)),ie&&Q&&(h.point&&h.point.tooltipDateKeys||["key"]).forEach(function(ce){ee=ee.replace("{point."+ce+"}","{point."+ce+":"+Q+"}")}),x.chart.styledMode&&(ee=this.styledModeFormat(ee)),$.text=D(ee,{point:h,series:x},this.chart)}),O.text}update(h){this.destroy(),this.init(this.chart,R(!0,this.options,h))}updatePosition(h){let{chart:g,container:x,distance:z,options:H,pointer:ie,renderer:O}=this,{height:Q=0,width:ee=0}=this.getLabel(),{left:$,top:ce,scaleX:S,scaleY:P}=ie.getChartPosition(),B=(H.positioner||this.getPosition).call(this,ee,Q,h),q=(h.plotX||0)+g.plotLeft,m=(h.plotY||0)+g.plotTop,T;O&&x&&(H.positioner&&(B.x+=$-z,B.y+=ce-z),T=(H.borderWidth||0)+2*z+2,O.setSize(ee+T,Q+T,!1),(S!==1||P!==1)&&(u(x,{transform:`scale(${S}, ${P})`}),q*=S,m*=P),q+=$-B.x,m+=ce-B.y),this.move(Math.round(B.x),Math.round(B.y||0),q,m)}}return(_=d||(d={})).compose=function(v){L(V,"Core.Tooltip")&&p(v,"afterInit",function(){let h=this.chart;h.options.tooltip&&(h.tooltip=new _(h,h.options.tooltip,this))})},d}),n(i,"Core/Series/Point.js",[i["Core/Renderer/HTML/AST.js"],i["Core/Animation/AnimationUtilities.js"],i["Core/Defaults.js"],i["Core/Templating.js"],i["Core/Utilities.js"]],function(o,s,l,j,E){let{animObject:F}=s,{defaultOptions:_}=l,{format:C}=j,{addEvent:D,crisp:V,erase:k,extend:I,fireEvent:U,getNestedProperty:p,isArray:a,isFunction:u,isNumber:y,isObject:w,merge:f,pick:N,syncTimeout:K,removeEvent:Y,uniqueKey:R}=E;class A{animateBeforeDestroy(){let b=this,c={x:b.startXPos,opacity:0},d=b.getGraphicalProps();d.singular.forEach(function(v){b[v]=b[v].animate(v==="dataLabel"?{x:b[v].startXPos,y:b[v].startYPos,opacity:0}:c)}),d.plural.forEach(function(v){b[v].forEach(function(h){h.element&&h.animate(I({x:b.startXPos},h.startYPos?{x:h.startXPos,y:h.startYPos}:{}))})})}applyOptions(b,c){let d=this.series,v=d.options.pointValKey||d.pointValKey;return I(this,b=A.prototype.optionsToObject.call(this,b)),this.options=this.options?I(this.options,b):b,b.group&&delete this.group,b.dataLabels&&delete this.dataLabels,v&&(this.y=A.prototype.getNestedProperty.call(this,v)),this.selected&&(this.state="select"),"name"in this&&c===void 0&&d.xAxis&&d.xAxis.hasNames&&(this.x=d.xAxis.nameToX(this)),this.x===void 0&&d?c===void 0?this.x=d.autoIncrement():this.x=c:y(b.x)&&d.options.relativeXValue&&(this.x=d.autoIncrement(b.x)),this.isNull=this.isValid&&!this.isValid(),this.formatPrefix=this.isNull?"null":"point",this}destroy(){if(!this.destroyed){let b=this,c=b.series,d=c.chart,v=c.options.dataSorting,h=d.hoverPoints,g=F(b.series.chart.renderer.globalAnimation),x=()=>{for(let z in(b.graphic||b.graphics||b.dataLabel||b.dataLabels)&&(Y(b),b.destroyElements()),b)delete b[z]};b.legendItem&&d.legend.destroyItem(b),h&&(b.setState(),k(h,b),h.length||(d.hoverPoints=null)),b===d.hoverPoint&&b.onMouseOut(),v&&v.enabled?(this.animateBeforeDestroy(),K(x,g.duration)):x(),d.pointCount--}this.destroyed=!0}destroyElements(b){let c=this,d=c.getGraphicalProps(b);d.singular.forEach(function(v){c[v]=c[v].destroy()}),d.plural.forEach(function(v){c[v].forEach(function(h){h&&h.element&&h.destroy()}),delete c[v]})}firePointEvent(b,c,d){let v=this,h=this.series.options;v.manageEvent(b),b==="click"&&h.allowPointSelect&&(d=function(g){!v.destroyed&&v.select&&v.select(null,g.ctrlKey||g.metaKey||g.shiftKey)}),U(v,b,c,d)}getClassName(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(this.colorIndex!==void 0?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")}getGraphicalProps(b){let c,d,v=this,h=[],g={singular:[],plural:[]};for((b=b||{graphic:1,dataLabel:1}).graphic&&h.push("graphic","connector"),b.dataLabel&&h.push("dataLabel","dataLabelPath","dataLabelUpper"),d=h.length;d--;)v[c=h[d]]&&g.singular.push(c);return["graphic","dataLabel"].forEach(function(x){let z=x+"s";b[x]&&v[z]&&g.plural.push(z)}),g}getLabelConfig(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}}getNestedProperty(b){return b?b.indexOf("custom.")===0?p(b,this.options):this[b]:void 0}getZone(){let b=this.series,c=b.zones,d=b.zoneAxis||"y",v,h=0;for(v=c[0];this[d]>=v.value;)v=c[++h];return this.nonZonedColor||(this.nonZonedColor=this.color),v&&v.color&&!this.options.color?this.color=v.color:this.color=this.nonZonedColor,v}hasNewShapeType(){return(this.graphic&&(this.graphic.symbolName||this.graphic.element.nodeName))!==this.shapeType}constructor(b,c,d){this.formatPrefix="point",this.visible=!0,this.series=b,this.applyOptions(c,d),this.id??(this.id=R()),this.resolveColor(),b.chart.pointCount++,U(this,"afterInit")}isValid(){return(y(this.x)||this.x instanceof Date)&&y(this.y)}optionsToObject(b){let c=this.series,d=c.options.keys,v=d||c.pointArrayMap||["y"],h=v.length,g={},x,z=0,H=0;if(y(b)||b===null)g[v[0]]=b;else if(a(b))for(!d&&b.length>h&&((x=typeof b[0])=="string"?g.name=b[0]:x==="number"&&(g.x=b[0]),z++);H<h;)d&&b[z]===void 0||(v[H].indexOf(".")>0?A.prototype.setNestedProperty(g,b[z],v[H]):g[v[H]]=b[z]),z++,H++;else typeof b=="object"&&(g=b,b.dataLabels&&(c.hasDataLabels=()=>!0),b.marker&&(c._hasPointMarkers=!0));return g}pos(b,c=this.plotY){if(!this.destroyed){let{plotX:d,series:v}=this,{chart:h,xAxis:g,yAxis:x}=v,z=0,H=0;if(y(d)&&y(c))return b&&(z=g?g.pos:h.plotLeft,H=x?x.pos:h.plotTop),h.inverted&&g&&x?[x.len-c+H,g.len-d+z]:[d+z,c+H]}}resolveColor(){let b=this.series,c=b.chart.options.chart,d=b.chart.styledMode,v,h,g=c.colorCount,x;delete this.nonZonedColor,b.options.colorByPoint?(d||(v=(h=b.options.colors||b.chart.options.colors)[b.colorCounter],g=h.length),x=b.colorCounter,b.colorCounter++,b.colorCounter===g&&(b.colorCounter=0)):(d||(v=b.color),x=b.colorIndex),this.colorIndex=N(this.options.colorIndex,x),this.color=N(this.options.color,v)}setNestedProperty(b,c,d){return d.split(".").reduce(function(v,h,g,x){let z=x.length-1===g;return v[h]=z?c:w(v[h],!0)?v[h]:{},v[h]},b),b}shouldDraw(){return!this.isNull}tooltipFormatter(b){let c=this.series,d=c.tooltipOptions,v=N(d.valueDecimals,""),h=d.valuePrefix||"",g=d.valueSuffix||"";return c.chart.styledMode&&(b=c.chart.tooltip.styledModeFormat(b)),(c.pointArrayMap||["y"]).forEach(function(x){x="{point."+x,(h||g)&&(b=b.replace(RegExp(x+"}","g"),h+x+"}"+g)),b=b.replace(RegExp(x+"}","g"),x+":,."+v+"f}")}),C(b,{point:this,series:this.series},c.chart)}update(b,c,d,v){let h,g=this,x=g.series,z=g.graphic,H=x.chart,ie=x.options;function O(){g.applyOptions(b);let Q=z&&g.hasMockGraphic,ee=g.y===null?!Q:Q;z&&ee&&(g.graphic=z.destroy(),delete g.hasMockGraphic),w(b,!0)&&(z&&z.element&&b&&b.marker&&b.marker.symbol!==void 0&&(g.graphic=z.destroy()),b!=null&&b.dataLabels&&g.dataLabel&&(g.dataLabel=g.dataLabel.destroy())),h=g.index,x.updateParallelArrays(g,h),ie.data[h]=w(ie.data[h],!0)||w(b,!0)?g.options:N(b,ie.data[h]),x.isDirty=x.isDirtyData=!0,!x.fixedBox&&x.hasCartesianSeries&&(H.isDirtyBox=!0),ie.legendType==="point"&&(H.isDirtyLegend=!0),c&&H.redraw(d)}c=N(c,!0),v===!1?O():g.firePointEvent("update",{options:b},O)}remove(b,c){this.series.removePoint(this.series.data.indexOf(this),b,c)}select(b,c){let d=this,v=d.series,h=v.chart;b=N(b,!d.selected),this.selectedStaging=b,d.firePointEvent(b?"select":"unselect",{accumulate:c},function(){d.selected=d.options.selected=b,v.options.data[v.data.indexOf(d)]=d.options,d.setState(b&&"select"),c||h.getSelectedPoints().forEach(function(g){let x=g.series;g.selected&&g!==d&&(g.selected=g.options.selected=!1,x.options.data[x.data.indexOf(g)]=g.options,g.setState(h.hoverPoints&&x.options.inactiveOtherPoints?"inactive":""),g.firePointEvent("unselect"))})}),delete this.selectedStaging}onMouseOver(b){let{inverted:c,pointer:d}=this.series.chart;d&&(b=b?d.normalize(b):d.getChartCoordinatesFromPoint(this,c),d.runPointActions(b,this))}onMouseOut(){let b=this.series.chart;this.firePointEvent("mouseOut"),this.series.options.inactiveOtherPoints||(b.hoverPoints||[]).forEach(function(c){c.setState()}),b.hoverPoints=b.hoverPoint=null}manageEvent(b){var v,h,g,x,z;let c=f(this.series.options.point,this.options),d=(v=c.events)==null?void 0:v[b];u(d)&&(!((h=this.hcEvents)!=null&&h[b])||((x=(g=this.hcEvents)==null?void 0:g[b])==null?void 0:x.map(H=>H.fn).indexOf(d))===-1)?(D(this,b,d),this.hasImportedEvents=!0):this.hasImportedEvents&&!d&&((z=this.hcEvents)!=null&&z[b])&&(Y(this,b),delete this.hcEvents[b],Object.keys(this.hcEvents)||(this.hasImportedEvents=!1))}setState(b,c){var M;let d=this.series,v=this.state,h=d.options.states[b||"normal"]||{},g=_.plotOptions[d.type].marker&&d.options.marker,x=g&&g.enabled===!1,z=g&&g.states&&g.states[b||"normal"]||{},H=z.enabled===!1,ie=this.marker||{},O=d.chart,Q=g&&d.markerAttribs,ee=d.halo,$,ce,S,P=d.stateMarkerGraphic,B;if((b=b||"")===this.state&&!c||this.selected&&b!=="select"||h.enabled===!1||b&&(H||x&&z.enabled===!1)||b&&ie.states&&ie.states[b]&&ie.states[b].enabled===!1)return;if(this.state=b,Q&&($=d.markerAttribs(this,b)),this.graphic&&!this.hasMockGraphic){if(v&&this.graphic.removeClass("highcharts-point-"+v),b&&this.graphic.addClass("highcharts-point-"+b),!O.styledMode){ce=d.pointAttribs(this,b),S=N(O.options.chart.animation,h.animation);let G=ce.opacity;d.options.inactiveOtherPoints&&y(G)&&(this.dataLabels||[]).forEach(function(W){W&&!W.hasClass("highcharts-data-label-hidden")&&(W.animate({opacity:G},S),W.connector&&W.connector.animate({opacity:G},S))}),this.graphic.animate(ce,S)}$&&this.graphic.animate($,N(O.options.chart.animation,z.animation,g.animation)),P&&P.hide()}else b&&z&&(B=ie.symbol||d.symbol,P&&P.currentSymbol!==B&&(P=P.destroy()),$&&(P?P[c?"animate":"attr"]({x:$.x,y:$.y}):B&&(d.stateMarkerGraphic=P=O.renderer.symbol(B,$.x,$.y,$.width,$.height).add(d.markerGroup),P.currentSymbol=B)),!O.styledMode&&P&&this.state!=="inactive"&&P.attr(d.pointAttribs(this,b))),P&&(P[b&&this.isInside?"show":"hide"](),P.element.point=this,P.addClass(this.getClassName(),!0));let q=h.halo,m=this.graphic||P,T=m&&m.visibility||"inherit";q&&q.size&&m&&T!=="hidden"&&!this.isCluster?(ee||(d.halo=ee=O.renderer.path().add(m.parentGroup)),ee.show()[c?"animate":"attr"]({d:this.haloPath(q.size)}),ee.attr({class:"highcharts-halo highcharts-color-"+N(this.colorIndex,d.colorIndex)+(this.className?" "+this.className:""),visibility:T,zIndex:-1}),ee.point=this,O.styledMode||ee.attr(I({fill:this.color||d.color,"fill-opacity":q.opacity},o.filterUserAttributes(q.attributes||{})))):(M=ee==null?void 0:ee.point)!=null&&M.haloPath&&!ee.point.destroyed&&ee.animate({d:ee.point.haloPath(0)},null,ee.hide),U(this,"afterSetState",{state:b})}haloPath(b){let c=this.pos();return c?this.series.chart.renderer.symbols.circle(V(c[0],1)-b,c[1]-b,2*b,2*b):[]}}return A}),n(i,"Core/Pointer.js",[i["Core/Color/Color.js"],i["Core/Globals.js"],i["Core/Utilities.js"]],function(o,s,l){var j;let{parse:E}=o,{charts:F,composed:_,isTouchDevice:C}=s,{addEvent:D,attr:V,css:k,extend:I,find:U,fireEvent:p,isNumber:a,isObject:u,objectEach:y,offset:w,pick:f,pushUnique:N,splat:K}=l;class Y{applyInactiveState(A){let L=[],b;(A||[]).forEach(function(c){b=c.series,L.push(b),b.linkedParent&&L.push(b.linkedParent),b.linkedSeries&&(L=L.concat(b.linkedSeries)),b.navigatorSeries&&L.push(b.navigatorSeries)}),this.chart.series.forEach(function(c){L.indexOf(c)===-1?c.setState("inactive",!0):c.options.inactiveOtherPoints&&c.setAllPointsToState("inactive")})}destroy(){let A=this;this.eventsToUnbind.forEach(L=>L()),this.eventsToUnbind=[],!s.chartCount&&(Y.unbindDocumentMouseUp&&(Y.unbindDocumentMouseUp=Y.unbindDocumentMouseUp()),Y.unbindDocumentTouchEnd&&(Y.unbindDocumentTouchEnd=Y.unbindDocumentTouchEnd())),clearInterval(A.tooltipTimeout),y(A,function(L,b){A[b]=void 0})}getSelectionMarkerAttrs(A,L){let b={args:{chartX:A,chartY:L},attrs:{},shapeType:"rect"};return p(this,"getSelectionMarkerAttrs",b,c=>{let d,{chart:v,zoomHor:h,zoomVert:g}=this,{mouseDownX:x=0,mouseDownY:z=0}=v,H=c.attrs;H.x=v.plotLeft,H.y=v.plotTop,H.width=h?1:v.plotWidth,H.height=g?1:v.plotHeight,h&&(d=A-x,H.width=Math.max(1,Math.abs(d)),H.x=(d>0?0:d)+x),g&&(d=L-z,H.height=Math.max(1,Math.abs(d)),H.y=(d>0?0:d)+z)}),b}drag(A){let{chart:L}=this,{mouseDownX:b=0,mouseDownY:c=0}=L,{panning:d,panKey:v,selectionMarkerFill:h}=L.options.chart,g=L.plotLeft,x=L.plotTop,z=L.plotWidth,H=L.plotHeight,ie=u(d)?d.enabled:d,O=v&&A[`${v}Key`],Q=A.chartX,ee=A.chartY,$,ce=this.selectionMarker;if((!ce||!ce.touch)&&(Q<g?Q=g:Q>g+z&&(Q=g+z),ee<x?ee=x:ee>x+H&&(ee=x+H),this.hasDragged=Math.sqrt(Math.pow(b-Q,2)+Math.pow(c-ee,2)),this.hasDragged>10)){$=L.isInsidePlot(b-g,c-x,{visiblePlotOnly:!0});let{shapeType:S,attrs:P}=this.getSelectionMarkerAttrs(Q,ee);(L.hasCartesianSeries||L.mapView)&&this.hasZoom&&$&&!O&&!ce&&(this.selectionMarker=ce=L.renderer[S](),ce.attr({class:"highcharts-selection-marker",zIndex:7}).add(),L.styledMode||ce.attr({fill:h||E("#334eff").setOpacity(.25).get()})),ce&&ce.attr(P),$&&!ce&&ie&&L.pan(A,d)}}dragStart(A){let L=this.chart;L.mouseIsDown=A.type,L.cancelClick=!1,L.mouseDownX=A.chartX,L.mouseDownY=A.chartY}getSelectionBox(A){let L={args:{marker:A},result:A.getBBox()};return p(this,"getSelectionBox",L),L.result}drop(A){let L,{chart:b,selectionMarker:c}=this;for(let d of b.axes)d.isPanning&&(d.isPanning=!1,(d.options.startOnTick||d.options.endOnTick||d.series.some(v=>v.boosted))&&(d.forceRedraw=!0,d.setExtremes(d.userMin,d.userMax,!1),L=!0));if(L&&b.redraw(),c&&A){if(this.hasDragged){let d=this.getSelectionBox(c);b.transform({axes:b.axes.filter(v=>v.zoomEnabled&&(v.coll==="xAxis"&&this.zoomX||v.coll==="yAxis"&&this.zoomY)),selection:{originalEvent:A,xAxis:[],yAxis:[],...d},from:d})}a(b.index)&&(this.selectionMarker=c.destroy())}b&&a(b.index)&&(k(b.container,{cursor:b._cursor}),b.cancelClick=this.hasDragged>10,b.mouseIsDown=!1,this.hasDragged=0,this.pinchDown=[])}findNearestKDPoint(A,L,b){let c;return A.forEach(function(d){let v=!(d.noSharedTooltip&&L)&&0>d.options.findNearestPointBy.indexOf("y"),h=d.searchPoint(b,v);u(h,!0)&&h.series&&(!u(c,!0)||function(g,x){var O,Q;let z=g.distX-x.distX,H=g.dist-x.dist,ie=((O=x.series.group)==null?void 0:O.zIndex)-((Q=g.series.group)==null?void 0:Q.zIndex);return z!==0&&L?z:H!==0?H:ie!==0?ie:g.series.index>x.series.index?-1:1}(c,h)>0)&&(c=h)}),c}getChartCoordinatesFromPoint(A,L){let{xAxis:b,yAxis:c}=A.series,d=A.shapeArgs;if(b&&c){let v=A.clientX??A.plotX??0,h=A.plotY||0;return A.isNode&&d&&a(d.x)&&a(d.y)&&(v=d.x,h=d.y),L?{chartX:c.len+c.pos-h,chartY:b.len+b.pos-v}:{chartX:v+b.pos,chartY:h+c.pos}}if(d&&d.x&&d.y)return{chartX:d.x,chartY:d.y}}getChartPosition(){if(this.chartPosition)return this.chartPosition;let{container:A}=this.chart,L=w(A);this.chartPosition={left:L.left,top:L.top,scaleX:1,scaleY:1};let{offsetHeight:b,offsetWidth:c}=A;return c>2&&b>2&&(this.chartPosition.scaleX=L.width/c,this.chartPosition.scaleY=L.height/b),this.chartPosition}getCoordinates(A){let L={xAxis:[],yAxis:[]};for(let b of this.chart.axes)L[b.isXAxis?"xAxis":"yAxis"].push({axis:b,value:b.toValue(A[b.horiz?"chartX":"chartY"])});return L}getHoverData(A,L,b,c,d,v){let h=[],g=function(O){return O.visible&&!(!d&&O.directTouch)&&f(O.options.enableMouseTracking,!0)},x=L,z,H={chartX:v?v.chartX:void 0,chartY:v?v.chartY:void 0,shared:d};p(this,"beforeGetHoverData",H),z=x&&!x.stickyTracking?[x]:b.filter(O=>O.stickyTracking&&(H.filter||g)(O));let ie=c&&A||!v?A:this.findNearestKDPoint(z,d,v);return x=ie&&ie.series,ie&&(d&&!x.noSharedTooltip?(z=b.filter(function(O){return H.filter?H.filter(O):g(O)&&!O.noSharedTooltip})).forEach(function(O){let Q=U(O.points,function(ee){return ee.x===ie.x&&!ee.isNull});u(Q)&&(O.boosted&&O.boost&&(Q=O.boost.getPoint(Q)),h.push(Q))}):h.push(ie)),p(this,"afterGetHoverData",H={hoverPoint:ie}),{hoverPoint:H.hoverPoint,hoverSeries:x,hoverPoints:h}}getPointFromEvent(A){let L=A.target,b;for(;L&&!b;)b=L.point,L=L.parentNode;return b}onTrackerMouseOut(A){let L=this.chart,b=A.relatedTarget,c=L.hoverSeries;this.isDirectTouch=!1,!c||!b||c.stickyTracking||this.inClass(b,"highcharts-tooltip")||this.inClass(b,"highcharts-series-"+c.index)&&this.inClass(b,"highcharts-tracker")||c.onMouseOut()}inClass(A,L){let b=A,c;for(;b;){if(c=V(b,"class")){if(c.indexOf(L)!==-1)return!0;if(c.indexOf("highcharts-container")!==-1)return!1}b=b.parentElement}}constructor(A,L){var b;this.hasDragged=0,this.pointerCaptureEventsToUnbind=[],this.eventsToUnbind=[],this.options=L,this.chart=A,this.runChartClick=!!((b=L.chart.events)!=null&&b.click),this.pinchDown=[],this.setDOMEvents(),p(this,"afterInit")}normalize(A,L){let b=A.touches,c=b?b.length?b.item(0):f(b.changedTouches,A.changedTouches)[0]:A;L||(L=this.getChartPosition());let d=c.pageX-L.left,v=c.pageY-L.top;return I(A,{chartX:Math.round(d/=L.scaleX),chartY:Math.round(v/=L.scaleY)})}onContainerClick(A){let L=this.chart,b=L.hoverPoint,c=this.normalize(A),d=L.plotLeft,v=L.plotTop;!L.cancelClick&&(b&&this.inClass(c.target,"highcharts-tracker")?(p(b.series,"click",I(c,{point:b})),L.hoverPoint&&b.firePointEvent("click",c)):(I(c,this.getCoordinates(c)),L.isInsidePlot(c.chartX-d,c.chartY-v,{visiblePlotOnly:!0})&&p(L,"click",c)))}onContainerMouseDown(A){var b;let L=(1&(A.buttons||A.button))==1;A=this.normalize(A),s.isFirefox&&A.button!==0&&this.onContainerMouseMove(A),(A.button===void 0||L)&&(this.zoomOption(A),L&&((b=A.preventDefault)==null||b.call(A)),this.dragStart(A))}onContainerMouseLeave(A){let{pointer:L}=F[f(Y.hoverChartIndex,-1)]||{};A=this.normalize(A),this.onContainerMouseMove(A),L&&A.relatedTarget&&!this.inClass(A.relatedTarget,"highcharts-tooltip")&&(L.reset(),L.chartPosition=void 0)}onContainerMouseEnter(){delete this.chartPosition}onContainerMouseMove(A){let L=this.chart,b=L.tooltip,c=this.normalize(A);this.setHoverChartIndex(A),(L.mouseIsDown==="mousedown"||this.touchSelect(c))&&this.drag(c),!L.openMenu&&(this.inClass(c.target,"highcharts-tracker")||L.isInsidePlot(c.chartX-L.plotLeft,c.chartY-L.plotTop,{visiblePlotOnly:!0}))&&!(b&&b.shouldStickOnContact(c))&&(this.inClass(c.target,"highcharts-no-tooltip")?this.reset(!1,0):this.runPointActions(c))}onDocumentTouchEnd(A){this.onDocumentMouseUp(A)}onContainerTouchMove(A){this.touchSelect(A)?this.onContainerMouseMove(A):this.touch(A)}onContainerTouchStart(A){this.touchSelect(A)?this.onContainerMouseDown(A):(this.zoomOption(A),this.touch(A,!0))}onDocumentMouseMove(A){let L=this.chart,b=L.tooltip,c=this.chartPosition,d=this.normalize(A,c);!c||L.isInsidePlot(d.chartX-L.plotLeft,d.chartY-L.plotTop,{visiblePlotOnly:!0})||b&&b.shouldStickOnContact(d)||this.inClass(d.target,"highcharts-tracker")||this.reset()}onDocumentMouseUp(A){var L,b;(b=(L=F[f(Y.hoverChartIndex,-1)])==null?void 0:L.pointer)==null||b.drop(A)}pinch(A){let L=this,{chart:b,hasZoom:c,lastTouches:d}=L,v=[].map.call(A.touches||[],H=>L.normalize(H)),h=v.length,g=h===1&&(L.inClass(A.target,"highcharts-tracker")&&b.runTrackerClick||L.runChartClick),x=b.tooltip,z=h===1&&f(x==null?void 0:x.options.followTouchMove,!0);h>1?L.initiated=!0:z&&(L.initiated=!1),c&&L.initiated&&!g&&A.cancelable!==!1&&A.preventDefault(),A.type==="touchstart"?(L.pinchDown=v,L.res=!0):z?this.runPointActions(L.normalize(A)):d&&(p(b,"touchpan",{originalEvent:A,touches:v},()=>{let H=ie=>{let O=ie[0],Q=ie[1]||O;return{x:O.chartX,y:O.chartY,width:Q.chartX-O.chartX,height:Q.chartY-O.chartY}};b.transform({axes:b.axes.filter(ie=>ie.zoomEnabled&&(this.zoomHor&&ie.horiz||this.zoomVert&&!ie.horiz)),to:H(v),from:H(d),trigger:A.type})}),L.res&&(L.res=!1,this.reset(!1,0))),L.lastTouches=v}reset(A,L){let b=this.chart,c=b.hoverSeries,d=b.hoverPoint,v=b.hoverPoints,h=b.tooltip,g=h&&h.shared?v:d;A&&g&&K(g).forEach(function(x){x.series.isCartesian&&x.plotX===void 0&&(A=!1)}),A?h&&g&&K(g).length&&(h.refresh(g),h.shared&&v?v.forEach(function(x){x.setState(x.state,!0),x.series.isCartesian&&(x.series.xAxis.crosshair&&x.series.xAxis.drawCrosshair(null,x),x.series.yAxis.crosshair&&x.series.yAxis.drawCrosshair(null,x))}):d&&(d.setState(d.state,!0),b.axes.forEach(function(x){x.crosshair&&d.series[x.coll]===x&&x.drawCrosshair(null,d)}))):(d&&d.onMouseOut(),v&&v.forEach(function(x){x.setState()}),c&&c.onMouseOut(),h&&h.hide(L),this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove()),b.axes.forEach(function(x){x.hideCrosshair()}),b.hoverPoints=b.hoverPoint=void 0)}runPointActions(A,L,b){let c=this.chart,d=c.series,v=c.tooltip&&c.tooltip.options.enabled?c.tooltip:void 0,h=!!v&&v.shared,g=L||c.hoverPoint,x=g&&g.series||c.hoverSeries,z=(!A||A.type!=="touchmove")&&(!!L||x&&x.directTouch&&this.isDirectTouch),H=this.getHoverData(g,x,d,z,h,A);g=H.hoverPoint,x=H.hoverSeries;let ie=H.hoverPoints,O=x&&x.tooltipOptions.followPointer&&!x.tooltipOptions.split,Q=h&&x&&!x.noSharedTooltip;if(g&&(b||g!==c.hoverPoint||v&&v.isHidden)){if((c.hoverPoints||[]).forEach(function(ee){ie.indexOf(ee)===-1&&ee.setState()}),c.hoverSeries!==x&&x.onMouseOver(),this.applyInactiveState(ie),(ie||[]).forEach(function(ee){ee.setState("hover")}),c.hoverPoint&&c.hoverPoint.firePointEvent("mouseOut"),!g.series)return;c.hoverPoints=ie,c.hoverPoint=g,g.firePointEvent("mouseOver",void 0,()=>{v&&g&&v.refresh(Q?ie:g,A)})}else if(O&&v&&!v.isHidden){let ee=v.getAnchor([{}],A);c.isInsidePlot(ee[0],ee[1],{visiblePlotOnly:!0})&&v.updatePosition({plotX:ee[0],plotY:ee[1]})}this.unDocMouseMove||(this.unDocMouseMove=D(c.container.ownerDocument,"mousemove",ee=>{var $,ce;return(ce=($=F[Y.hoverChartIndex??-1])==null?void 0:$.pointer)==null?void 0:ce.onDocumentMouseMove(ee)}),this.eventsToUnbind.push(this.unDocMouseMove)),c.axes.forEach(function(ee){let $,ce=f((ee.crosshair||{}).snap,!0);!ce||($=c.hoverPoint)&&$.series[ee.coll]===ee||($=U(ie,S=>S.series&&S.series[ee.coll]===ee)),$||!ce?ee.drawCrosshair(A,$):ee.hideCrosshair()})}setDOMEvents(){let A=this.chart.container,L=A.ownerDocument;A.onmousedown=this.onContainerMouseDown.bind(this),A.onmousemove=this.onContainerMouseMove.bind(this),A.onclick=this.onContainerClick.bind(this),this.eventsToUnbind.push(D(A,"mouseenter",this.onContainerMouseEnter.bind(this)),D(A,"mouseleave",this.onContainerMouseLeave.bind(this))),Y.unbindDocumentMouseUp||(Y.unbindDocumentMouseUp=D(L,"mouseup",this.onDocumentMouseUp.bind(this)));let b=this.chart.renderTo.parentElement;for(;b&&b.tagName!=="BODY";)this.eventsToUnbind.push(D(b,"scroll",()=>{delete this.chartPosition})),b=b.parentElement;this.eventsToUnbind.push(D(A,"touchstart",this.onContainerTouchStart.bind(this),{passive:!1}),D(A,"touchmove",this.onContainerTouchMove.bind(this),{passive:!1})),Y.unbindDocumentTouchEnd||(Y.unbindDocumentTouchEnd=D(L,"touchend",this.onDocumentTouchEnd.bind(this),{passive:!1})),this.setPointerCapture(),D(this.chart,"redraw",this.setPointerCapture.bind(this))}setPointerCapture(){var d,v;if(!C)return;let A=this.pointerCaptureEventsToUnbind,L=this.chart,b=L.container,c=f((d=L.options.tooltip)==null?void 0:d.followTouchMove,!0)&&L.series.some(h=>h.options.findNearestPointBy.indexOf("y")>-1);!this.hasPointerCapture&&c?(A.push(D(b,"pointerdown",h=>{var g,x;(g=h.target)!=null&&g.hasPointerCapture(h.pointerId)&&((x=h.target)==null||x.releasePointerCapture(h.pointerId))}),D(b,"pointermove",h=>{var g,x;(x=(g=L.pointer)==null?void 0:g.getPointFromEvent(h))==null||x.onMouseOver(h)})),L.styledMode||k(b,{"touch-action":"none"}),b.className+=" highcharts-no-touch-action",this.hasPointerCapture=!0):this.hasPointerCapture&&!c&&(A.forEach(h=>h()),A.length=0,L.styledMode||k(b,{"touch-action":f((v=L.options.chart.style)==null?void 0:v["touch-action"],"manipulation")}),b.className=b.className.replace(" highcharts-no-touch-action",""),this.hasPointerCapture=!1)}setHoverChartIndex(A){var c;let L=this.chart,b=s.charts[f(Y.hoverChartIndex,-1)];b&&b!==L&&((c=b.pointer)==null||c.onContainerMouseLeave(A||{relatedTarget:L.container})),b&&b.mouseIsDown||(Y.hoverChartIndex=L.index)}touch(A,L){let b,{chart:c,pinchDown:d=[]}=this;this.setHoverChartIndex(),A.touches.length===1?(A=this.normalize(A),c.isInsidePlot(A.chartX-c.plotLeft,A.chartY-c.plotTop,{visiblePlotOnly:!0})&&!c.openMenu?(L&&this.runPointActions(A),A.type==="touchmove"&&(b=!!d[0]&&Math.pow(d[0].chartX-A.chartX,2)+Math.pow(d[0].chartY-A.chartY,2)>=16),f(b,!0)&&this.pinch(A)):L&&this.reset()):A.touches.length===2&&this.pinch(A)}touchSelect(A){return!!(this.chart.zooming.singleTouch&&A.touches&&A.touches.length===1)}zoomOption(A){let L=this.chart,b=L.inverted,c=L.zooming.type||"",d,v;/touch/.test(A.type)&&(c=f(L.zooming.pinchType,c)),this.zoomX=d=/x/.test(c),this.zoomY=v=/y/.test(c),this.zoomHor=d&&!b||v&&b,this.zoomVert=v&&!b||d&&b,this.hasZoom=d||v}}return(j=Y||(Y={})).compose=function(R){N(_,"Core.Pointer")&&D(R,"beforeRender",function(){this.pointer=new j(this,this.options)})},Y}),n(i,"Core/Legend/Legend.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Templating.js"],i["Core/Globals.js"],i["Core/Series/Point.js"],i["Core/Renderer/RendererUtilities.js"],i["Core/Utilities.js"]],function(o,s,l,j,E,F){var _;let{animObject:C,setAnimation:D}=o,{format:V}=s,{composed:k,marginNames:I}=l,{distribute:U}=E,{addEvent:p,createElement:a,css:u,defined:y,discardElement:w,find:f,fireEvent:N,isNumber:K,merge:Y,pick:R,pushUnique:A,relativeLength:L,stableSort:b,syncTimeout:c}=F;class d{constructor(h,g){this.allItems=[],this.initialItemY=0,this.itemHeight=0,this.itemMarginBottom=0,this.itemMarginTop=0,this.itemX=0,this.itemY=0,this.lastItemY=0,this.lastLineHeight=0,this.legendHeight=0,this.legendWidth=0,this.maxItemWidth=0,this.maxLegendWidth=0,this.offsetWidth=0,this.padding=0,this.pages=[],this.symbolHeight=0,this.symbolWidth=0,this.titleHeight=0,this.totalItemWidth=0,this.widthOption=0,this.chart=h,this.setOptions(g),g.enabled&&(this.render(),p(this.chart,"endResize",function(){this.legend.positionCheckboxes()})),p(this.chart,"render",()=>{this.options.enabled&&this.proximate&&(this.proximatePositions(),this.positionItems())})}setOptions(h){let g=R(h.padding,8);this.options=h,this.chart.styledMode||(this.itemStyle=h.itemStyle,this.itemHiddenStyle=Y(this.itemStyle,h.itemHiddenStyle)),this.itemMarginTop=h.itemMarginTop,this.itemMarginBottom=h.itemMarginBottom,this.padding=g,this.initialItemY=g-5,this.symbolWidth=R(h.symbolWidth,16),this.pages=[],this.proximate=h.layout==="proximate"&&!this.chart.inverted,this.baseline=void 0}update(h,g){let x=this.chart;this.setOptions(Y(!0,this.options,h)),this.destroy(),x.isDirtyLegend=x.isDirtyBox=!0,R(g,!0)&&x.redraw(),N(this,"afterUpdate",{redraw:g})}colorizeItem(h,g){let{area:x,group:z,label:H,line:ie,symbol:O}=h.legendItem||{};if(z==null||z[g?"removeClass":"addClass"]("highcharts-legend-item-hidden"),!this.chart.styledMode){let{itemHiddenStyle:Q={}}=this,ee=Q.color,{fillColor:$,fillOpacity:ce,lineColor:S,marker:P}=h.options,B=q=>(!g&&(q.fill&&(q.fill=ee),q.stroke&&(q.stroke=ee)),q);H==null||H.css(Y(g?this.itemStyle:Q)),ie==null||ie.attr(B({stroke:S||h.color})),O&&O.attr(B(P&&O.isMarker?h.pointAttribs():{fill:h.color})),x==null||x.attr(B({fill:$||h.color,"fill-opacity":$?1:ce??.75}))}N(this,"afterColorizeItem",{item:h,visible:g})}positionItems(){this.allItems.forEach(this.positionItem,this),this.chart.isResizing||this.positionCheckboxes()}positionItem(h){let{group:g,x=0,y:z=0}=h.legendItem||{},H=this.options,ie=H.symbolPadding,O=!H.rtl,Q=h.checkbox;if(g&&g.element){let ee={translateX:O?x:this.legendWidth-x-2*ie-4,translateY:z};g[y(g.translateY)?"animate":"attr"](ee,void 0,()=>{N(this,"afterPositionItem",{item:h})})}Q&&(Q.x=x,Q.y=z)}destroyItem(h){let g=h.checkbox,x=h.legendItem||{};for(let z of["group","label","line","symbol"])x[z]&&(x[z]=x[z].destroy());g&&w(g),h.legendItem=void 0}destroy(){for(let h of this.getAllItems())this.destroyItem(h);for(let h of["clipRect","up","down","pager","nav","box","title","group"])this[h]&&(this[h]=this[h].destroy());this.display=null}positionCheckboxes(){let h,g=this.group&&this.group.alignAttr,x=this.clipHeight||this.legendHeight,z=this.titleHeight;g&&(h=g.translateY,this.allItems.forEach(function(H){let ie,O=H.checkbox;O&&(ie=h+z+O.y+(this.scrollOffset||0)+3,u(O,{left:g.translateX+H.checkboxOffset+O.x-20+"px",top:ie+"px",display:this.proximate||ie>h-6&&ie<h+x-6?"":"none"}))},this))}renderTitle(){let h=this.options,g=this.padding,x=h.title,z,H=0;x.text&&(this.title||(this.title=this.chart.renderer.label(x.text,g-3,g-4,void 0,void 0,void 0,h.useHTML,void 0,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(x.style),this.title.add(this.group)),x.width||this.title.css({width:this.maxLegendWidth+"px"}),H=(z=this.title.getBBox()).height,this.offsetWidth=z.width,this.contentGroup.attr({translateY:H})),this.titleHeight=H}setText(h){let g=this.options;h.legendItem.label.attr({text:g.labelFormat?V(g.labelFormat,h,this.chart):g.labelFormatter.call(h)})}renderItem(h){let g=h.legendItem=h.legendItem||{},x=this.chart,z=x.renderer,H=this.options,ie=H.layout==="horizontal",O=this.symbolWidth,Q=H.symbolPadding||0,ee=this.itemStyle,$=this.itemHiddenStyle,ce=ie?R(H.itemDistance,20):0,S=!H.rtl,P=!h.series,B=!P&&h.series.drawLegendSymbol?h.series:h,q=B.options,m=!!this.createCheckboxForItem&&q&&q.showCheckbox,T=H.useHTML,M=h.options.className,G=g.label,W=O+Q+ce+(m?20:0);!G&&(g.group=z.g("legend-item").addClass("highcharts-"+B.type+"-series highcharts-color-"+h.colorIndex+(M?" "+M:"")+(P?" highcharts-series-"+h.index:"")).attr({zIndex:1}).add(this.scrollGroup),g.label=G=z.text("",S?O+Q:-Q,this.baseline||0,T),x.styledMode||G.css(Y(h.visible?ee:$)),G.attr({align:S?"left":"right",zIndex:2}).add(g.group),!this.baseline&&(this.fontMetrics=z.fontMetrics(G),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,G.attr("y",this.baseline),this.symbolHeight=R(H.symbolHeight,this.fontMetrics.f),H.squareSymbol&&(this.symbolWidth=R(H.symbolWidth,Math.max(this.symbolHeight,16)),W=this.symbolWidth+Q+ce+(m?20:0),S&&G.attr("x",this.symbolWidth+Q))),B.drawLegendSymbol(this,h),this.setItemEvents&&this.setItemEvents(h,G,T)),m&&!h.checkbox&&this.createCheckboxForItem&&this.createCheckboxForItem(h),this.colorizeItem(h,h.visible),(x.styledMode||!ee.width)&&G.css({width:(H.itemWidth||this.widthOption||x.spacingBox.width)-W+"px"}),this.setText(h);let J=G.getBBox(),ne=this.fontMetrics&&this.fontMetrics.h||0;h.itemWidth=h.checkboxOffset=H.itemWidth||g.labelWidth||J.width+W,this.maxItemWidth=Math.max(this.maxItemWidth,h.itemWidth),this.totalItemWidth+=h.itemWidth,this.itemHeight=h.itemHeight=Math.round(g.labelHeight||(J.height>1.5*ne?J.height:ne))}layoutItem(h){let g=this.options,x=this.padding,z=g.layout==="horizontal",H=h.itemHeight,ie=this.itemMarginBottom,O=this.itemMarginTop,Q=z?R(g.itemDistance,20):0,ee=this.maxLegendWidth,$=g.alignColumns&&this.totalItemWidth>ee?this.maxItemWidth:h.itemWidth,ce=h.legendItem||{};z&&this.itemX-x+$>ee&&(this.itemX=x,this.lastLineHeight&&(this.itemY+=O+this.lastLineHeight+ie),this.lastLineHeight=0),this.lastItemY=O+this.itemY+ie,this.lastLineHeight=Math.max(H,this.lastLineHeight),ce.x=this.itemX,ce.y=this.itemY,z?this.itemX+=$:(this.itemY+=O+H+ie,this.lastLineHeight=H),this.offsetWidth=this.widthOption||Math.max((z?this.itemX-x-(h.checkbox?0:Q):$)+x,this.offsetWidth)}getAllItems(){let h=[];return this.chart.series.forEach(function(g){let x=g&&g.options;g&&R(x.showInLegend,!y(x.linkedTo)&&void 0,!0)&&(h=h.concat((g.legendItem||{}).labels||(x.legendType==="point"?g.data:g)))}),N(this,"afterGetAllItems",{allItems:h}),h}getAlignment(){let h=this.options;return this.proximate?h.align.charAt(0)+"tv":h.floating?"":h.align.charAt(0)+h.verticalAlign.charAt(0)+h.layout.charAt(0)}adjustMargins(h,g){let x=this.chart,z=this.options,H=this.getAlignment();H&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(ie,O){ie.test(H)&&!y(h[O])&&(x[I[O]]=Math.max(x[I[O]],x.legend[(O+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][O]*z[O%2?"x":"y"]+R(z.margin,12)+g[O]+(x.titleOffset[O]||0)))})}proximatePositions(){let h,g=this.chart,x=[],z=this.options.align==="left";for(let H of(this.allItems.forEach(function(ie){let O,Q,ee=z,$,ce;ie.yAxis&&(ie.xAxis.options.reversed&&(ee=!ee),ie.points&&(O=f(ee?ie.points:ie.points.slice(0).reverse(),function(S){return K(S.plotY)})),Q=this.itemMarginTop+ie.legendItem.label.getBBox().height+this.itemMarginBottom,ce=ie.yAxis.top-g.plotTop,$=ie.visible?(O?O.plotY:ie.yAxis.height)+(ce-.3*Q):ce+ie.yAxis.height,x.push({target:$,size:Q,item:ie}))},this),U(x,g.plotHeight)))h=H.item.legendItem||{},K(H.pos)&&(h.y=g.plotTop-g.spacing[0]+H.pos)}render(){let h=this.chart,g=h.renderer,x=this.options,z=this.padding,H=this.getAllItems(),ie,O,Q,ee=this.group,$,ce=this.box;this.itemX=z,this.itemY=this.initialItemY,this.offsetWidth=0,this.lastItemY=0,this.widthOption=L(x.width,h.spacingBox.width-z),$=h.spacingBox.width-2*z-x.x,["rm","lm"].indexOf(this.getAlignment().substring(0,2))>-1&&($/=2),this.maxLegendWidth=this.widthOption||$,ee||(this.group=ee=g.g("legend").addClass(x.className||"").attr({zIndex:7}).add(),this.contentGroup=g.g().attr({zIndex:1}).add(ee),this.scrollGroup=g.g().add(this.contentGroup)),this.renderTitle(),b(H,(S,P)=>(S.options&&S.options.legendIndex||0)-(P.options&&P.options.legendIndex||0)),x.reversed&&H.reverse(),this.allItems=H,this.display=ie=!!H.length,this.lastLineHeight=0,this.maxItemWidth=0,this.totalItemWidth=0,this.itemHeight=0,H.forEach(this.renderItem,this),H.forEach(this.layoutItem,this),O=(this.widthOption||this.offsetWidth)+z,Q=this.lastItemY+this.lastLineHeight+this.titleHeight,Q=this.handleOverflow(Q)+z,ce||(this.box=ce=g.rect().addClass("highcharts-legend-box").attr({r:x.borderRadius}).add(ee)),h.styledMode||ce.attr({stroke:x.borderColor,"stroke-width":x.borderWidth||0,fill:x.backgroundColor||"none"}).shadow(x.shadow),O>0&&Q>0&&ce[ce.placed?"animate":"attr"](ce.crisp.call({},{x:0,y:0,width:O,height:Q},ce.strokeWidth())),ee[ie?"show":"hide"](),h.styledMode&&ee.getStyle("display")==="none"&&(O=Q=0),this.legendWidth=O,this.legendHeight=Q,ie&&this.align(),this.proximate||this.positionItems(),N(this,"afterRender")}align(h=this.chart.spacingBox){let g=this.chart,x=this.options,z=h.y;/(lth|ct|rth)/.test(this.getAlignment())&&g.titleOffset[0]>0?z+=g.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&g.titleOffset[2]>0&&(z-=g.titleOffset[2]),z!==h.y&&(h=Y(h,{y:z})),g.hasRendered||(this.group.placed=!1),this.group.align(Y(x,{width:this.legendWidth,height:this.legendHeight,verticalAlign:this.proximate?"top":x.verticalAlign}),!0,h)}handleOverflow(h){let g=this,x=this.chart,z=x.renderer,H=this.options,ie=H.y,O=H.verticalAlign==="top",Q=this.padding,ee=H.maxHeight,$=H.navigation,ce=R($.animation,!0),S=$.arrowSize||12,P=this.pages,B=this.allItems,q=function(oe){typeof oe=="number"?ne.attr({height:oe}):ne&&(g.clipRect=ne.destroy(),g.contentGroup.clip()),g.contentGroup.div&&(g.contentGroup.div.style.clip=oe?"rect("+Q+"px,9999px,"+(Q+oe)+"px,0)":"auto")},m=function(oe){return g[oe]=z.circle(0,0,1.3*S).translate(S/2,S/2).add(J),x.styledMode||g[oe].attr("fill","rgba(0,0,0,0.0001)"),g[oe]},T,M,G,W=x.spacingBox.height+(O?-ie:ie)-Q,J=this.nav,ne=this.clipRect;return H.layout!=="horizontal"||H.verticalAlign==="middle"||H.floating||(W/=2),ee&&(W=Math.min(W,ee)),P.length=0,h&&W>0&&h>W&&$.enabled!==!1?(this.clipHeight=T=Math.max(W-20-this.titleHeight-Q,0),this.currentPage=R(this.currentPage,1),this.fullHeight=h,B.forEach((oe,se)=>{let ue=(G=oe.legendItem||{}).y||0,pe=Math.round(G.label.getBBox().height),Z=P.length;(!Z||ue-P[Z-1]>T&&(M||ue)!==P[Z-1])&&(P.push(M||ue),Z++),G.pageIx=Z-1,M&&((B[se-1].legendItem||{}).pageIx=Z-1),se===B.length-1&&ue+pe-P[Z-1]>T&&ue>P[Z-1]&&(P.push(ue),G.pageIx=Z),ue!==M&&(M=ue)}),ne||(ne=g.clipRect=z.clipRect(0,Q-2,9999,0),g.contentGroup.clip(ne)),q(T),J||(this.nav=J=z.g().attr({zIndex:1}).add(this.group),this.up=z.symbol("triangle",0,0,S,S).add(J),m("upTracker").on("click",function(){g.scroll(-1,ce)}),this.pager=z.text("",15,10).addClass("highcharts-legend-navigation"),!x.styledMode&&$.style&&this.pager.css($.style),this.pager.add(J),this.down=z.symbol("triangle-down",0,0,S,S).add(J),m("downTracker").on("click",function(){g.scroll(1,ce)})),g.scroll(0),h=W):J&&(q(),this.nav=J.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0),h}scroll(h,g){let x=this.chart,z=this.pages,H=z.length,ie=this.clipHeight,O=this.options.navigation,Q=this.pager,ee=this.padding,$=this.currentPage+h;$>H&&($=H),$>0&&(g!==void 0&&D(g,x),this.nav.attr({translateX:ee,translateY:ie+this.padding+7+this.titleHeight,visibility:"inherit"}),[this.up,this.upTracker].forEach(function(ce){ce.attr({class:$===1?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),Q.attr({text:$+"/"+H}),[this.down,this.downTracker].forEach(function(ce){ce.attr({x:18+this.pager.getBBox().width,class:$===H?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),x.styledMode||(this.up.attr({fill:$===1?O.inactiveColor:O.activeColor}),this.upTracker.css({cursor:$===1?"default":"pointer"}),this.down.attr({fill:$===H?O.inactiveColor:O.activeColor}),this.downTracker.css({cursor:$===H?"default":"pointer"})),this.scrollOffset=-z[$-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=$,this.positionCheckboxes(),c(()=>{N(this,"afterScroll",{currentPage:$})},C(R(g,x.renderer.globalAnimation,!0)).duration))}setItemEvents(h,g,x){let z=this,H=h.legendItem||{},ie=z.chart.renderer.boxWrapper,O=h instanceof j,Q="highcharts-legend-"+(O?"point":"series")+"-active",ee=z.chart.styledMode,$=x?[g,H.symbol]:[H.group],ce=S=>{z.allItems.forEach(P=>{h!==P&&[P].concat(P.linkedSeries||[]).forEach(B=>{B.setState(S,!O)})})};for(let S of $)S&&S.on("mouseover",function(){h.visible&&ce("inactive"),h.setState("hover"),h.visible&&ie.addClass(Q),ee||g.css(z.options.itemHoverStyle)}).on("mouseout",function(){z.chart.styledMode||g.css(Y(h.visible?z.itemStyle:z.itemHiddenStyle)),ce(""),ie.removeClass(Q),h.setState()}).on("click",function(P){let B="legendItemClick",q=function(){h.setVisible&&h.setVisible(),ce(h.visible?"inactive":"")};ie.removeClass(Q),P={browserEvent:P},h.firePointEvent?h.firePointEvent(B,P,q):N(h,B,P,q)})}createCheckboxForItem(h){h.checkbox=a("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:h.selected,defaultChecked:h.selected},this.options.itemCheckboxStyle,this.chart.container),p(h.checkbox,"click",function(g){let x=g.target;N(h.series||h,"checkboxClick",{checked:x.checked,item:h},function(){h.select()})})}}return(_=d||(d={})).compose=function(v){A(k,"Core.Legend")&&p(v,"beforeMargins",function(){this.legend=new _(this,this.options.legend)})},d}),n(i,"Core/Legend/LegendSymbol.js",[i["Core/Utilities.js"]],function(o){var s;let{extend:l,merge:j,pick:E}=o;return function(F){function _(C,D,V){var b;let k=this.legendItem=this.legendItem||{},{chart:I,options:U}=this,{baseline:p=0,symbolWidth:a,symbolHeight:u}=C,y=this.symbol||"circle",w=u/2,f=I.renderer,N=k.group,K=p-Math.round(u*(V?.4:.3)),Y={},R,A=U.marker,L=0;if(I.styledMode||(Y["stroke-width"]=Math.min(U.lineWidth||0,24),U.dashStyle?Y.dashstyle=U.dashStyle:U.linecap==="square"||(Y["stroke-linecap"]="round")),k.line=f.path().addClass("highcharts-graph").attr(Y).add(N),V&&(k.area=f.path().addClass("highcharts-area").add(N)),Y["stroke-linecap"]&&(L=Math.min(k.line.strokeWidth(),a)/2),a){let c=[["M",L,K],["L",a-L,K]];k.line.attr({d:c}),(b=k.area)==null||b.attr({d:[...c,["L",a-L,p],["L",L,p]]})}if(A&&A.enabled!==!1&&a){let c=Math.min(E(A.radius,w),w);y.indexOf("url")===0&&(A=j(A,{width:u,height:u}),c=0),k.symbol=R=f.symbol(y,a/2-c,K-c,2*c,2*c,l({context:"legend"},A)).addClass("highcharts-point").add(N),R.isMarker=!0}}F.areaMarker=function(C,D){_.call(this,C,D,!0)},F.lineMarker=_,F.rectangle=function(C,D){let V=D.legendItem||{},k=C.options,I=C.symbolHeight,U=k.squareSymbol,p=U?I:C.symbolWidth;V.symbol=this.chart.renderer.rect(U?(C.symbolWidth-I)/2:0,C.baseline-I+1,p,I,E(C.options.symbolRadius,I/2)).addClass("highcharts-point").attr({zIndex:3}).add(V.group)}}(s||(s={})),s}),n(i,"Core/Series/SeriesDefaults.js",[],function(){return{lineWidth:2,allowPointSelect:!1,crisp:!0,showCheckbox:!1,animation:{duration:1e3},enableMouseTracking:!0,events:{},marker:{enabledThreshold:2,lineColor:"#ffffff",lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:150},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{animation:{},align:"center",borderWidth:0,defer:!0,formatter:function(){let{numberFormatter:o}=this.series.chart;return typeof this.y!="number"?"":o(this.y,-1)},padding:5,style:{fontSize:"0.7em",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:150},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:150},opacity:.2}},stickyTracking:!0,turboThreshold:1e3,findNearestPointBy:"x"}}),n(i,"Core/Series/SeriesRegistry.js",[i["Core/Globals.js"],i["Core/Defaults.js"],i["Core/Series/Point.js"],i["Core/Utilities.js"]],function(o,s,l,j){var E;let{defaultOptions:F}=s,{extend:_,extendClass:C,merge:D}=j;return function(V){function k(I,U){let p=F.plotOptions||{},a=U.defaultOptions,u=U.prototype;return u.type=I,u.pointClass||(u.pointClass=l),!V.seriesTypes[I]&&(a&&(p[I]=a),V.seriesTypes[I]=U,!0)}V.seriesTypes=o.seriesTypes,V.registerSeriesType=k,V.seriesType=function(I,U,p,a,u){let y=F.plotOptions||{};if(U=U||"",y[I]=D(y[U],p),delete V.seriesTypes[I],k(I,C(V.seriesTypes[U]||function(){},a)),V.seriesTypes[I].prototype.type=I,u){class w extends l{}_(w.prototype,u),V.seriesTypes[I].prototype.pointClass=w}return V.seriesTypes[I]}}(E||(E={})),E}),n(i,"Core/Series/Series.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Defaults.js"],i["Core/Foundation.js"],i["Core/Globals.js"],i["Core/Legend/LegendSymbol.js"],i["Core/Series/Point.js"],i["Core/Series/SeriesDefaults.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Renderer/SVG/SVGElement.js"],i["Core/Utilities.js"]],function(o,s,l,j,E,F,_,C,D,V){let{animObject:k,setAnimation:I}=o,{defaultOptions:U}=s,{registerEventOptions:p}=l,{svg:a,win:u}=j,{seriesTypes:y}=C,{arrayMax:w,arrayMin:f,clamp:N,correctFloat:K,crisp:Y,defined:R,destroyObjectProperties:A,diffObjects:L,erase:b,error:c,extend:d,find:v,fireEvent:h,getClosestDistance:g,getNestedProperty:x,insertItem:z,isArray:H,isNumber:ie,isString:O,merge:Q,objectEach:ee,pick:$,removeEvent:ce,splat:S,syncTimeout:P}=V;class B{constructor(){this.zoneAxis="y"}init(m,T){let M;h(this,"init",{options:T});let G=this,W=m.series;this.eventsToUnbind=[],G.chart=m,G.options=G.setOptions(T);let J=G.options,ne=J.visible!==!1;G.linkedSeries=[],G.bindAxes(),d(G,{name:J.name,state:"",visible:ne,selected:J.selected===!0}),p(this,J);let oe=J.events;(oe&&oe.click||J.point&&J.point.events&&J.point.events.click||J.allowPointSelect)&&(m.runTrackerClick=!0),G.getColor(),G.getSymbol(),G.parallelArrays.forEach(function(se){G[se+"Data"]||(G[se+"Data"]=[])}),G.isCartesian&&(m.hasCartesianSeries=!0),W.length&&(M=W[W.length-1]),G._i=$(M&&M._i,-1)+1,G.opacity=G.options.opacity,m.orderItems("series",z(this,W)),J.dataSorting&&J.dataSorting.enabled?G.setDataSortingOptions():G.points||G.data||G.setData(J.data,!1),h(this,"afterInit")}is(m){return y[m]&&this instanceof y[m]}bindAxes(){let m,T=this,M=T.options,G=T.chart;h(this,"bindAxes",null,function(){(T.axisTypes||[]).forEach(function(W){(G[W]||[]).forEach(function(J){m=J.options,($(M[W],0)===J.index||M[W]!==void 0&&M[W]===m.id)&&(z(T,J.series),T[W]=J,J.isDirty=!0)}),T[W]||T.optionalAxis===W||c(18,!0,G)})}),h(this,"afterBindAxes")}updateParallelArrays(m,T,M){let G=m.series,W=ie(T)?function(J){let ne=J==="y"&&G.toYData?G.toYData(m):m[J];G[J+"Data"][T]=ne}:function(J){Array.prototype[T].apply(G[J+"Data"],M)};G.parallelArrays.forEach(W)}hasData(){return this.visible&&this.dataMax!==void 0&&this.dataMin!==void 0||this.visible&&this.yData&&this.yData.length>0}hasMarkerChanged(m,T){let M=m.marker,G=T.marker||{};return M&&(G.enabled&&!M.enabled||G.symbol!==M.symbol||G.height!==M.height||G.width!==M.width)}autoIncrement(m){let T=this.options,M=T.pointIntervalUnit,G=T.relativeXValue,W=this.chart.time,J=this.xIncrement,ne,oe;return J=$(J,T.pointStart,0),this.pointInterval=oe=$(this.pointInterval,T.pointInterval,1),G&&ie(m)&&(oe*=m),M&&(ne=new W.Date(J),M==="day"?W.set("Date",ne,W.get("Date",ne)+oe):M==="month"?W.set("Month",ne,W.get("Month",ne)+oe):M==="year"&&W.set("FullYear",ne,W.get("FullYear",ne)+oe),oe=ne.getTime()-J),G&&ie(m)?J+oe:(this.xIncrement=J+oe,J)}setDataSortingOptions(){let m=this.options;d(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1}),R(m.pointRange)||(m.pointRange=1)}setOptions(m){var ae,de;let T,M=this.chart,G=M.options.plotOptions,W=M.userOptions||{},J=Q(m),ne=M.styledMode,oe={plotOptions:G,userOptions:J};h(this,"setOptions",oe);let se=oe.plotOptions[this.type],ue=W.plotOptions||{},pe=ue.series||{},Z=U.plotOptions[this.type]||{},X=ue[this.type]||{};this.userOptions=oe.userOptions;let te=Q(se,G.series,X,J);this.tooltipOptions=Q(U.tooltip,(ae=U.plotOptions.series)==null?void 0:ae.tooltip,Z==null?void 0:Z.tooltip,M.userOptions.tooltip,(de=ue.series)==null?void 0:de.tooltip,X.tooltip,J.tooltip),this.stickyTracking=$(J.stickyTracking,X.stickyTracking,pe.stickyTracking,!!this.tooltipOptions.shared&&!this.noSharedTooltip||te.stickyTracking),se.marker===null&&delete te.marker,this.zoneAxis=te.zoneAxis||"y";let re=this.zones=(te.zones||[]).map(le=>({...le}));return(te.negativeColor||te.negativeFillColor)&&!te.zones&&(T={value:te[this.zoneAxis+"Threshold"]||te.threshold||0,className:"highcharts-negative"},ne||(T.color=te.negativeColor,T.fillColor=te.negativeFillColor),re.push(T)),re.length&&R(re[re.length-1].value)&&re.push(ne?{}:{color:this.color,fillColor:this.fillColor}),h(this,"afterSetOptions",{options:te}),te}getName(){return $(this.options.name,"Series "+(this.index+1))}getCyclic(m,T,M){let G,W,J=this.chart,ne=`${m}Index`,oe=`${m}Counter`,se=(M==null?void 0:M.length)||J.options.chart.colorCount;!T&&(R(W=$(m==="color"?this.options.colorIndex:void 0,this[ne]))?G=W:(J.series.length||(J[oe]=0),G=J[oe]%se,J[oe]+=1),M&&(T=M[G])),G!==void 0&&(this[ne]=G),this[m]=T}getColor(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.color="#cccccc":this.getCyclic("color",this.options.color||U.plotOptions[this.type].color,this.chart.options.colors)}getPointsCollection(){return(this.hasGroupedData?this.points:this.data)||[]}getSymbol(){let m=this.options.marker;this.getCyclic("symbol",m.symbol,this.chart.options.symbols)}findPointIndex(m,T){let M,G,W,J=m.id,ne=m.x,oe=this.points,se=this.options.dataSorting;if(J){let ue=this.chart.get(J);ue instanceof F&&(M=ue)}else if(this.linkedParent||this.enabledDataSorting||this.options.relativeXValue){let ue=pe=>!pe.touched&&pe.index===m.index;if(se&&se.matchByName?ue=pe=>!pe.touched&&pe.name===m.name:this.options.relativeXValue&&(ue=pe=>!pe.touched&&pe.options.x===m.x),!(M=v(oe,ue)))return}return M&&(W=M&&M.index)!==void 0&&(G=!0),W===void 0&&ie(ne)&&(W=this.xData.indexOf(ne,T)),W!==-1&&W!==void 0&&this.cropped&&(W=W>=this.cropStart?W-this.cropStart:W),!G&&ie(W)&&oe[W]&&oe[W].touched&&(W=void 0),W}updateData(m,T){let M=this.options,G=M.dataSorting,W=this.points,J=[],ne=this.requireSorting,oe=m.length===W.length,se,ue,pe,Z,X=!0;if(this.xIncrement=null,m.forEach(function(te,re){let ae,de=R(te)&&this.pointClass.prototype.optionsToObject.call({series:this},te)||{},le=de.x;de.id||ie(le)?((ae=this.findPointIndex(de,Z))===-1||ae===void 0?J.push(te):W[ae]&&te!==M.data[ae]?(W[ae].update(te,!1,null,!1),W[ae].touched=!0,ne&&(Z=ae+1)):W[ae]&&(W[ae].touched=!0),(!oe||re!==ae||G&&G.enabled||this.hasDerivedData)&&(se=!0)):J.push(te)},this),se)for(ue=W.length;ue--;)(pe=W[ue])&&!pe.touched&&pe.remove&&pe.remove(!1,T);else!oe||G&&G.enabled?X=!1:(m.forEach(function(te,re){te===W[re].y||W[re].destroyed||W[re].update(te,!1,null,!1)}),J.length=0);return W.forEach(function(te){te&&(te.touched=!1)}),!!X&&(J.forEach(function(te){this.addPoint(te,!1,null,null,!1)},this),this.xIncrement===null&&this.xData&&this.xData.length&&(this.xIncrement=w(this.xData),this.autoIncrement()),!0)}setData(m,T=!0,M,G){var Ae;let W=this,J=W.points,ne=J&&J.length||0,oe=W.options,se=W.chart,ue=oe.dataSorting,pe=W.xAxis,Z=oe.turboThreshold,X=this.xData,te=this.yData,re=W.pointArrayMap,ae=re&&re.length,de=oe.keys,le,he,fe,me=0,ge=1,xe=null,ye;se.options.chart.allowMutatingData||(oe.data&&delete W.options.data,W.userOptions.data&&delete W.userOptions.data,ye=Q(!0,m));let je=(m=ye||m||[]).length;if(ue&&ue.enabled&&(m=this.sortData(m)),se.options.chart.allowMutatingData&&G!==!1&&je&&ne&&!W.cropped&&!W.hasGroupedData&&W.visible&&!W.boosted&&(fe=this.updateData(m,M)),!fe){if(W.xIncrement=null,W.colorCounter=0,this.parallelArrays.forEach(function(ve){W[ve+"Data"].length=0}),Z&&je>Z)if(ie(xe=W.getFirstValidPoint(m)))for(le=0;le<je;le++)X[le]=this.autoIncrement(),te[le]=m[le];else if(H(xe))if(ae)if(xe.length===ae)for(le=0;le<je;le++)X[le]=this.autoIncrement(),te[le]=m[le];else for(le=0;le<je;le++)he=m[le],X[le]=he[0],te[le]=he.slice(1,ae+1);else if(de&&(me=de.indexOf("x"),ge=de.indexOf("y"),me=me>=0?me:0,ge=ge>=0?ge:1),xe.length===1&&(ge=0),me===ge)for(le=0;le<je;le++)X[le]=this.autoIncrement(),te[le]=m[le][ge];else for(le=0;le<je;le++)he=m[le],X[le]=he[me],te[le]=he[ge];else c(12,!1,se);else for(le=0;le<je;le++)he={series:W},W.pointClass.prototype.applyOptions.apply(he,[m[le]]),W.updateParallelArrays(he,le);for(te&&O(te[0])&&c(14,!0,se),W.data=[],W.options.data=W.userOptions.data=m,le=ne;le--;)(Ae=J[le])==null||Ae.destroy();pe&&(pe.minRange=pe.userMinRange),W.isDirty=se.isDirtyBox=!0,W.isDirtyData=!!J,M=!1}oe.legendType==="point"&&(this.processData(),this.generatePoints()),T&&se.redraw(M)}sortData(m){let T=this,M=T.options.dataSorting.sortKey||"y",G=function(W,J){return R(J)&&W.pointClass.prototype.optionsToObject.call({series:W},J)||{}};return m.forEach(function(W,J){m[J]=G(T,W),m[J].index=J},this),m.concat().sort((W,J)=>{let ne=x(M,W),oe=x(M,J);return oe<ne?-1:oe>ne?1:0}).forEach(function(W,J){W.x=J},this),T.linkedSeries&&T.linkedSeries.forEach(function(W){let J=W.options,ne=J.data;J.dataSorting&&J.dataSorting.enabled||!ne||(ne.forEach(function(oe,se){ne[se]=G(W,oe),m[se]&&(ne[se].x=m[se].x,ne[se].index=se)}),W.setData(ne,!1))}),m}getProcessedData(m){let T=this,M=T.xAxis,G=T.options.cropThreshold,W=M==null?void 0:M.logarithmic,J=T.isCartesian,ne,oe,se=0,ue,pe,Z,X=T.xData,te=T.yData,re=!1,ae=X.length;M&&(pe=(ue=M.getExtremes()).min,Z=ue.max,re=!!(M.categories&&!M.names.length)),J&&T.sorted&&!m&&(!G||ae>G||T.forceCrop)&&(X[ae-1]<pe||X[0]>Z?(X=[],te=[]):T.yData&&(X[0]<pe||X[ae-1]>Z)&&(X=(ne=this.cropData(T.xData,T.yData,pe,Z)).xData,te=ne.yData,se=ne.start,oe=!0));let de=g([W?X.map(W.log2lin):X],()=>T.requireSorting&&!re&&c(15,!1,T.chart));return{xData:X,yData:te,cropped:oe,cropStart:se,closestPointRange:de}}processData(m){let T=this.xAxis;if(this.isCartesian&&!this.isDirty&&!T.isDirty&&!this.yAxis.isDirty&&!m)return!1;let M=this.getProcessedData();this.cropped=M.cropped,this.cropStart=M.cropStart,this.processedXData=M.xData,this.processedYData=M.yData,this.closestPointRange=this.basePointRange=M.closestPointRange,h(this,"afterProcessData")}cropData(m,T,M,G){let W=m.length,J,ne,oe=0,se=W;for(J=0;J<W;J++)if(m[J]>=M){oe=Math.max(0,J-1);break}for(ne=J;ne<W;ne++)if(m[ne]>G){se=ne+1;break}return{xData:m.slice(oe,se),yData:T.slice(oe,se),start:oe,end:se}}generatePoints(){let m=this.options,T=this.processedData||m.data,M=this.processedXData,G=this.processedYData,W=this.pointClass,J=M.length,ne=this.cropStart||0,oe=this.hasGroupedData,se=m.keys,ue=[],pe=m.dataGrouping&&m.dataGrouping.groupAll?ne:0,Z,X,te,re,ae=this.data;if(!ae&&!oe){let de=[];de.length=T.length,ae=this.data=de}for(se&&oe&&(this.options.keys=!1),re=0;re<J;re++)X=ne+re,oe?((te=new W(this,[M[re]].concat(S(G[re])))).dataGroup=this.groupMap[pe+re],te.dataGroup.options&&(te.options=te.dataGroup.options,d(te,te.dataGroup.options),delete te.dataLabels)):(te=ae[X])||T[X]===void 0||(ae[X]=te=new W(this,T[X],M[re])),te&&(te.index=oe?pe+re:X,ue[re]=te);if(this.options.keys=se,ae&&(J!==(Z=ae.length)||oe))for(re=0;re<Z;re++)re!==ne||oe||(re+=J),ae[re]&&(ae[re].destroyElements(),ae[re].plotX=void 0);this.data=ae,this.points=ue,h(this,"afterGeneratePoints")}getXExtremes(m){return{min:f(m),max:w(m)}}getExtremes(m,T){let M=this.xAxis,G=this.yAxis,W=[],J=this.requireSorting&&!this.is("column")?1:0,ne=!!G&&G.positiveValuesOnly,oe=T||this.getExtremesFromAll||this.options.getExtremesFromAll,{processedXData:se,processedYData:ue}=this,pe,Z,X,te,re,ae,de,le=0,he=0,fe=0;if(this.cropped&&oe){let ye=this.getProcessedData(!0);se=ye.xData,ue=ye.yData}let me=(m=m||this.stackedYData||ue||[]).length,ge=se||this.xData;for(M&&(le=(pe=M.getExtremes()).min,he=pe.max),ae=0;ae<me;ae++)if(te=ge[ae],Z=(ie(re=m[ae])||H(re))&&((ie(re)?re>0:re.length)||!ne),X=T||this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!M||(ge[ae+J]||te)>=le&&(ge[ae-J]||te)<=he,Z&&X)if(de=re.length)for(;de--;)ie(re[de])&&(W[fe++]=re[de]);else W[fe++]=re;let xe={activeYData:W,dataMin:f(W),dataMax:w(W)};return h(this,"afterGetExtremes",{dataExtremes:xe}),xe}applyExtremes(){let m=this.getExtremes();return this.dataMin=m.dataMin,this.dataMax=m.dataMax,m}getFirstValidPoint(m){let T=m.length,M=0,G=null;for(;G===null&&M<T;)G=m[M],M++;return G}translate(){var he;this.processedXData||this.processData(),this.generatePoints();let m=this.options,T=m.stacking,M=this.xAxis,G=M.categories,W=this.enabledDataSorting,J=this.yAxis,ne=this.points,oe=ne.length,se=this.pointPlacementToXValue(),ue=!!se,pe=m.threshold,Z=m.startFromThreshold?pe:0,X,te,re,ae,de=Number.MAX_VALUE;function le(fe){return N(fe,-1e5,1e5)}for(X=0;X<oe;X++){let fe,me=ne[X],ge=me.x,xe,ye,je=me.y,Ae=me.low,ve=T&&((he=J.stacking)==null?void 0:he.stacks[(this.negStacks&&je<(Z?0:pe)?"-":"")+this.stackKey]);te=M.translate(ge,!1,!1,!1,!0,se),me.plotX=ie(te)?K(le(te)):void 0,T&&this.visible&&ve&&ve[ge]&&(ae=this.getStackIndicator(ae,ge,this.index),!me.isNull&&ae.key&&(ye=(xe=ve[ge]).points[ae.key]),xe&&H(ye)&&(Ae=ye[0],je=ye[1],Ae===Z&&ae.key===ve[ge].base&&(Ae=$(ie(pe)?pe:J.min)),J.positiveValuesOnly&&R(Ae)&&Ae<=0&&(Ae=void 0),me.total=me.stackTotal=$(xe.total),me.percentage=R(me.y)&&xe.total?me.y/xe.total*100:void 0,me.stackY=je,this.irregularWidths||xe.setOffset(this.pointXOffset||0,this.barW||0,void 0,void 0,void 0,this.xAxis))),me.yBottom=R(Ae)?le(J.translate(Ae,!1,!0,!1,!0)):void 0,this.dataModify&&(je=this.dataModify.modifyValue(je,X)),ie(je)&&me.plotX!==void 0&&(fe=ie(fe=J.translate(je,!1,!0,!1,!0))?le(fe):void 0),me.plotY=fe,me.isInside=this.isPointInside(me),me.clientX=ue?K(M.translate(ge,!1,!1,!1,!0,se)):te,me.negative=(me.y||0)<(pe||0),me.category=$(G&&G[me.x],me.x),me.isNull||me.visible===!1||(re!==void 0&&(de=Math.min(de,Math.abs(te-re))),re=te),me.zone=this.zones.length?me.getZone():void 0,!me.graphic&&this.group&&W&&(me.isNew=!0)}this.closestPointRangePx=de,h(this,"afterTranslate")}getValidPoints(m,T,M){let G=this.chart;return(m||this.points||[]).filter(function(W){let{plotX:J,plotY:ne}=W;return!!((M||!W.isNull&&ie(ne))&&(!T||G.isInsidePlot(J,ne,{inverted:G.inverted})))&&W.visible!==!1})}getClipBox(){let{chart:m,xAxis:T,yAxis:M}=this,{x:G,y:W,width:J,height:ne}=Q(m.clipBox);return T&&T.len!==m.plotSizeX&&(J=T.len),M&&M.len!==m.plotSizeY&&(ne=M.len),m.inverted&&!this.invertible&&([J,ne]=[ne,J]),{x:G,y:W,width:J,height:ne}}getSharedClipKey(){return this.sharedClipKey=(this.options.xAxis||0)+","+(this.options.yAxis||0),this.sharedClipKey}setClip(){let{chart:m,group:T,markerGroup:M}=this,G=m.sharedClips,W=m.renderer,J=this.getClipBox(),ne=this.getSharedClipKey(),oe=G[ne];oe?oe.animate(J):G[ne]=oe=W.clipRect(J),T&&T.clip(this.options.clip===!1?void 0:oe),M&&M.clip()}animate(m){let{chart:T,group:M,markerGroup:G}=this,W=T.inverted,J=k(this.options.animation),ne=[this.getSharedClipKey(),J.duration,J.easing,J.defer].join(","),oe=T.sharedClips[ne],se=T.sharedClips[ne+"m"];if(m&&M){let ue=this.getClipBox();if(oe)oe.attr("height",ue.height);else{ue.width=0,W&&(ue.x=T.plotHeight),oe=T.renderer.clipRect(ue),T.sharedClips[ne]=oe;let pe={x:-99,y:-99,width:W?T.plotWidth+199:99,height:W?99:T.plotHeight+199};se=T.renderer.clipRect(pe),T.sharedClips[ne+"m"]=se}M.clip(oe),G==null||G.clip(se)}else if(oe&&!oe.hasClass("highcharts-animating")){let ue=this.getClipBox(),pe=J.step;(G!=null&&G.element.childNodes.length||T.series.length>1)&&(J.step=function(Z,X){pe&&pe.apply(X,arguments),X.prop==="width"&&(se!=null&&se.element)&&se.attr(W?"height":"width",Z+99)}),oe.addClass("highcharts-animating").animate(ue,J)}}afterAnimate(){this.setClip(),ee(this.chart.sharedClips,(m,T,M)=>{m&&!this.chart.container.querySelector(`[clip-path="url(#${m.id})"]`)&&(m.destroy(),delete M[T])}),this.finishedAnimating=!0,h(this,"afterAnimate")}drawPoints(m=this.points){let T,M,G,W,J,ne,oe,se=this.chart,ue=se.styledMode,{colorAxis:pe,options:Z}=this,X=Z.marker,te=this[this.specialGroup||"markerGroup"],re=this.xAxis,ae=$(X.enabled,!re||!!re.isRadial||null,this.closestPointRangePx>=X.enabledThreshold*X.radius);if(X.enabled!==!1||this._hasPointMarkers)for(T=0;T<m.length;T++)if(W=(G=(M=m[T]).graphic)?"animate":"attr",J=M.marker||{},ne=!!M.marker,(ae&&J.enabled===void 0||J.enabled)&&!M.isNull&&M.visible!==!1){let de=$(J.symbol,this.symbol,"rect");oe=this.markerAttribs(M,M.selected&&"select"),this.enabledDataSorting&&(M.startXPos=re.reversed?-(oe.width||0):re.width);let le=M.isInside!==!1;if(!G&&le&&((oe.width||0)>0||M.hasImage)&&(M.graphic=G=se.renderer.symbol(de,oe.x,oe.y,oe.width,oe.height,ne?J:X).add(te),this.enabledDataSorting&&se.hasRendered&&(G.attr({x:M.startXPos}),W="animate")),G&&W==="animate"&&G[le?"show":"hide"](le).animate(oe),G){let he=this.pointAttribs(M,ue||!M.selected?void 0:"select");ue?pe&&G.css({fill:he.fill}):G[W](he)}G&&G.addClass(M.getClassName(),!0)}else G&&(M.graphic=G.destroy())}markerAttribs(m,T){let M=this.options,G=M.marker,W=m.marker||{},J=W.symbol||G.symbol,ne={},oe,se,ue=$(W.radius,G&&G.radius);T&&(oe=G.states[T],ue=$((se=W.states&&W.states[T])&&se.radius,oe&&oe.radius,ue&&ue+(oe&&oe.radiusPlus||0))),m.hasImage=J&&J.indexOf("url")===0,m.hasImage&&(ue=0);let pe=m.pos();return ie(ue)&&pe&&(M.crisp&&(pe[0]=Y(pe[0],m.hasImage?0:J==="rect"?(G==null?void 0:G.lineWidth)||0:1)),ne.x=pe[0]-ue,ne.y=pe[1]-ue),ue&&(ne.width=ne.height=2*ue),ne}pointAttribs(m,T){let M=this.options.marker,G=m&&m.options,W=G&&G.marker||{},J=G&&G.color,ne=m&&m.color,oe=m&&m.zone&&m.zone.color,se,ue,pe=this.color,Z,X,te=$(W.lineWidth,M.lineWidth),re=1;return pe=J||oe||ne||pe,Z=W.fillColor||M.fillColor||pe,X=W.lineColor||M.lineColor||pe,T=T||"normal",se=M.states[T]||{},te=$((ue=W.states&&W.states[T]||{}).lineWidth,se.lineWidth,te+$(ue.lineWidthPlus,se.lineWidthPlus,0)),Z=ue.fillColor||se.fillColor||Z,{stroke:X=ue.lineColor||se.lineColor||X,"stroke-width":te,fill:Z,opacity:re=$(ue.opacity,se.opacity,re)}}destroy(m){let T,M,G,W=this,J=W.chart,ne=/AppleWebKit\/533/.test(u.navigator.userAgent),oe=W.data||[];for(h(W,"destroy",{keepEventsForUpdate:m}),this.removeEvents(m),(W.axisTypes||[]).forEach(function(se){(G=W[se])&&G.series&&(b(G.series,W),G.isDirty=G.forceRedraw=!0)}),W.legendItem&&W.chart.legend.destroyItem(W),T=oe.length;T--;)(M=oe[T])&&M.destroy&&M.destroy();for(let se of W.zones)A(se,void 0,!0);V.clearTimeout(W.animationTimeout),ee(W,function(se,ue){se instanceof D&&!se.survive&&se[ne&&ue==="group"?"hide":"destroy"]()}),J.hoverSeries===W&&(J.hoverSeries=void 0),b(J.series,W),J.orderItems("series"),ee(W,function(se,ue){m&&ue==="hcEvents"||delete W[ue]})}applyZones(){let{area:m,chart:T,graph:M,zones:G,points:W,xAxis:J,yAxis:ne,zoneAxis:oe}=this,{inverted:se,renderer:ue}=T,pe=this[`${oe}Axis`],{isXAxis:Z,len:X=0}=pe||{},te=((M==null?void 0:M.strokeWidth())||0)/2+1,re=(ae,de=0,le=0)=>{se&&(le=X-le);let{translated:he=0,lineClip:fe}=ae,me=le-he;fe==null||fe.push(["L",de,Math.abs(me)<te?le-te*(me<=0?-1:1):he])};if(G.length&&(M||m)&&pe&&ie(pe.min)){let ae=pe.getExtremes().max,de=fe=>{fe.forEach((me,ge)=>{(me[0]==="M"||me[0]==="L")&&(fe[ge]=[me[0],Z?X-me[1]:me[1],Z?me[2]:X-me[2]])})};if(G.forEach(fe=>{fe.lineClip=[],fe.translated=N(pe.toPixels($(fe.value,ae),!0)||0,0,X)}),M&&!this.showLine&&M.hide(),m&&m.hide(),oe==="y"&&W.length<J.len)for(let fe of W){let{plotX:me,plotY:ge,zone:xe}=fe,ye=xe&&G[G.indexOf(xe)-1];xe&&re(xe,me,ge),ye&&re(ye,me,ge)}let le=[],he=pe.toPixels(pe.getExtremes().min,!0);G.forEach(fe=>{var Ie,Le;let me=fe.lineClip||[],ge=Math.round(fe.translated||0);J.reversed&&me.reverse();let{clip:xe,simpleClip:ye}=fe,je=0,Ae=0,ve=J.len,ke=ne.len;Z?(je=ge,ve=he):(Ae=ge,ke=he);let Se=[["M",je,Ae],["L",ve,Ae],["L",ve,ke],["L",je,ke],["Z"]],Ee=[Se[0],...me,Se[1],Se[2],...le,Se[3],Se[4]];le=me.reverse(),he=ge,se&&(de(Ee),m&&de(Se)),xe?(xe.animate({d:Ee}),ye==null||ye.animate({d:Se})):(xe=fe.clip=ue.path(Ee),m&&(ye=fe.simpleClip=ue.path(Se))),M&&((Ie=fe.graph)==null||Ie.clip(xe)),m&&((Le=fe.area)==null||Le.clip(ye))})}else this.visible&&(M&&M.show(),m&&m.show())}plotGroup(m,T,M,G,W){let J=this[m],ne=!J,oe={visibility:M,zIndex:G||.1};return R(this.opacity)&&!this.chart.styledMode&&this.state!=="inactive"&&(oe.opacity=this.opacity),J||(this[m]=J=this.chart.renderer.g().add(W)),J.addClass("highcharts-"+T+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(R(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(J.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0),J.attr(oe)[ne?"attr":"animate"](this.getPlotBox(T)),J}getPlotBox(m){let T=this.xAxis,M=this.yAxis,G=this.chart,W=G.inverted&&!G.polar&&T&&this.invertible&&m==="series";return G.inverted&&(T=M,M=this.xAxis),{translateX:T?T.left:G.plotLeft,translateY:M?M.top:G.plotTop,rotation:W?90:0,rotationOriginX:W?(T.len-M.len)/2:0,rotationOriginY:W?(T.len+M.len)/2:0,scaleX:W?-1:1,scaleY:1}}removeEvents(m){let{eventsToUnbind:T}=this;m||ce(this),T.length&&(T.forEach(M=>{M()}),T.length=0)}render(){var ue,pe,Z,X,te;let m=this,{chart:T,options:M,hasRendered:G}=m,W=k(M.animation),J=m.visible?"inherit":"hidden",ne=M.zIndex,oe=T.seriesGroup,se=m.finishedAnimating?0:W.duration;h(this,"render"),m.plotGroup("group","series",J,ne,oe),m.markerGroup=m.plotGroup("markerGroup","markers",J,ne,oe),M.clip!==!1&&m.setClip(),se&&((ue=m.animate)==null||ue.call(m,!0)),m.drawGraph&&(m.drawGraph(),m.applyZones()),m.visible&&m.drawPoints(),(pe=m.drawDataLabels)==null||pe.call(m),(Z=m.redrawPoints)==null||Z.call(m),M.enableMouseTracking&&((X=m.drawTracker)==null||X.call(m)),se&&((te=m.animate)==null||te.call(m)),G||(se&&W.defer&&(se+=W.defer),m.animationTimeout=P(()=>{m.afterAnimate()},se||0)),m.isDirty=!1,m.hasRendered=!0,h(m,"afterRender")}redraw(){let m=this.isDirty||this.isDirtyData;this.translate(),this.render(),m&&delete this.kdTree}reserveSpace(){return this.visible||!this.chart.options.chart.ignoreHiddenSeries}searchPoint(m,T){let{xAxis:M,yAxis:G}=this,W=this.chart.inverted;return this.searchKDTree({clientX:W?M.len-m.chartY+M.pos:m.chartX-M.pos,plotY:W?G.len-m.chartX+G.pos:m.chartY-G.pos},T,m)}buildKDTree(m){this.buildingKdTree=!0;let T=this,M=T.options.findNearestPointBy.indexOf("y")>-1?2:1;delete T.kdTree,P(function(){T.kdTree=function G(W,J,ne){let oe,se,ue=W==null?void 0:W.length;if(ue)return oe=T.kdAxisArray[J%ne],W.sort((pe,Z)=>(pe[oe]||0)-(Z[oe]||0)),{point:W[se=Math.floor(ue/2)],left:G(W.slice(0,se),J+1,ne),right:G(W.slice(se+1),J+1,ne)}}(T.getValidPoints(void 0,!T.directTouch),M,M),T.buildingKdTree=!1},T.options.kdNow||(m==null?void 0:m.type)==="touchstart"?0:1)}searchKDTree(m,T,M){let G=this,[W,J]=this.kdAxisArray,ne=T?"distX":"dist",oe=(G.options.findNearestPointBy||"").indexOf("y")>-1?2:1,se=!!G.isBubble;if(this.kdTree||this.buildingKdTree||this.buildKDTree(M),this.kdTree)return function ue(pe,Z,X,te){var xe;let re=Z.point,ae=G.kdAxisArray[X%te],de,le,he=re;(function(ye,je){var ct;let Ae=ye[W],ve=je[W],ke=R(Ae)&&R(ve)?Ae-ve:null,Se=ye[J],Ee=je[J],Ie=R(Se)&&R(Ee)?Se-Ee:0,Le=se&&((ct=je.marker)==null?void 0:ct.radius)||0;je.dist=Math.sqrt((ke&&ke*ke||0)+Ie*Ie)-Le,je.distX=R(ke)?Math.abs(ke)-Le:Number.MAX_VALUE})(pe,re);let fe=(pe[ae]||0)-(re[ae]||0)+(se&&((xe=re.marker)==null?void 0:xe.radius)||0),me=fe<0?"left":"right",ge=fe<0?"right":"left";return Z[me]&&(he=(de=ue(pe,Z[me],X+1,te))[ne]<he[ne]?de:re),Z[ge]&&Math.sqrt(fe*fe)<he[ne]&&(he=(le=ue(pe,Z[ge],X+1,te))[ne]<he[ne]?le:he),he}(m,this.kdTree,oe,oe)}pointPlacementToXValue(){let{options:m,xAxis:T}=this,M=m.pointPlacement;return M==="between"&&(M=T.reversed?-.5:.5),ie(M)?M*(m.pointRange||T.pointRange):0}isPointInside(m){let{chart:T,xAxis:M,yAxis:G}=this,{plotX:W=-1,plotY:J=-1}=m;return J>=0&&J<=(G?G.len:T.plotHeight)&&W>=0&&W<=(M?M.len:T.plotWidth)}drawTracker(){var Z;let m=this,T=m.options,M=T.trackByArea,G=[].concat((M?m.areaPath:m.graphPath)||[]),W=m.chart,J=W.pointer,ne=W.renderer,oe=((Z=W.options.tooltip)==null?void 0:Z.snap)||0,se=()=>{T.enableMouseTracking&&W.hoverSeries!==m&&m.onMouseOver()},ue="rgba(192,192,192,"+(a?1e-4:.002)+")",pe=m.tracker;pe?pe.attr({d:G}):m.graph&&(m.tracker=pe=ne.path(G).attr({visibility:m.visible?"inherit":"hidden",zIndex:2}).addClass(M?"highcharts-tracker-area":"highcharts-tracker-line").add(m.group),W.styledMode||pe.attr({"stroke-linecap":"round","stroke-linejoin":"round",stroke:ue,fill:M?ue:"none","stroke-width":m.graph.strokeWidth()+(M?0:2*oe)}),[m.tracker,m.markerGroup,m.dataLabelsGroup].forEach(X=>{X&&(X.addClass("highcharts-tracker").on("mouseover",se).on("mouseout",te=>{J==null||J.onTrackerMouseOut(te)}),T.cursor&&!W.styledMode&&X.css({cursor:T.cursor}),X.on("touchstart",se))})),h(this,"afterDrawTracker")}addPoint(m,T,M,G,W){let J,ne,oe=this.options,se=this.data,ue=this.chart,pe=this.xAxis,Z=pe&&pe.hasNames&&pe.names,X=oe.data,te=this.xData;T=$(T,!0);let re={series:this};this.pointClass.prototype.applyOptions.apply(re,[m]);let ae=re.x;if(ne=te.length,this.requireSorting&&ae<te[ne-1])for(J=!0;ne&&te[ne-1]>ae;)ne--;this.updateParallelArrays(re,"splice",[ne,0,0]),this.updateParallelArrays(re,ne),Z&&re.name&&(Z[ae]=re.name),X.splice(ne,0,m),(J||this.processedData)&&(this.data.splice(ne,0,null),this.processData()),oe.legendType==="point"&&this.generatePoints(),M&&(se[0]&&se[0].remove?se[0].remove(!1):(se.shift(),this.updateParallelArrays(re,"shift"),X.shift())),W!==!1&&h(this,"addPoint",{point:re}),this.isDirty=!0,this.isDirtyData=!0,T&&ue.redraw(G)}removePoint(m,T,M){let G=this,W=G.data,J=W[m],ne=G.points,oe=G.chart,se=function(){ne&&ne.length===W.length&&ne.splice(m,1),W.splice(m,1),G.options.data.splice(m,1),G.updateParallelArrays(J||{series:G},"splice",[m,1]),J&&J.destroy(),G.isDirty=!0,G.isDirtyData=!0,T&&oe.redraw()};I(M,oe),T=$(T,!0),J?J.firePointEvent("remove",null,se):se()}remove(m,T,M,G){let W=this,J=W.chart;function ne(){W.destroy(G),J.isDirtyLegend=J.isDirtyBox=!0,J.linkSeries(G),$(m,!0)&&J.redraw(T)}M!==!1?h(W,"remove",null,ne):ne()}update(m,T){var de,le,he;h(this,"update",{options:m=L(m,this.userOptions)});let M=this,G=M.chart,W=M.userOptions,J=M.initialType||M.type,ne=G.options.plotOptions,oe=y[J].prototype,se=M.finishedAnimating&&{animation:!1},ue={},pe,Z,X=["colorIndex","eventOptions","navigatorSeries","symbolIndex","baseSeries"],te=m.type||W.type||G.options.chart.type,re=!(this.hasDerivedData||te&&te!==this.type||m.pointStart!==void 0||m.pointInterval!==void 0||m.relativeXValue!==void 0||m.joinBy||m.mapData||["dataGrouping","pointStart","pointInterval","pointIntervalUnit","keys"].some(fe=>M.hasOptionChanged(fe)));te=te||J,re&&(X.push("data","isDirtyData","isDirtyCanvas","points","processedData","processedXData","processedYData","xIncrement","cropped","_hasPointMarkers","hasDataLabels","nodes","layout","level","mapMap","mapData","minY","maxY","minX","maxX","transformGroups"),m.visible!==!1&&X.push("area","graph"),M.parallelArrays.forEach(function(fe){X.push(fe+"Data")}),m.data&&(m.dataSorting&&d(M.options.dataSorting,m.dataSorting),this.setData(m.data,!1))),m=Q(W,{index:W.index===void 0?M.index:W.index,pointStart:((de=ne==null?void 0:ne.series)==null?void 0:de.pointStart)??W.pointStart??((le=M.xData)==null?void 0:le[0])},!re&&{data:M.options.data},m,se),re&&m.data&&(m.data=M.options.data),(X=["group","markerGroup","dataLabelsGroup","transformGroup"].concat(X)).forEach(function(fe){X[fe]=M[fe],delete M[fe]});let ae=!1;if(y[te]){if(ae=te!==M.type,M.remove(!1,!1,!1,!0),ae)if(G.propFromSeries(),Object.setPrototypeOf)Object.setPrototypeOf(M,y[te].prototype);else{let fe=Object.hasOwnProperty.call(M,"hcEvents")&&M.hcEvents;for(Z in oe)M[Z]=void 0;d(M,y[te].prototype),fe?M.hcEvents=fe:delete M.hcEvents}}else c(17,!0,G,{missingModuleFor:te});if(X.forEach(function(fe){M[fe]=X[fe]}),M.init(G,m),re&&this.points)for(let fe of((pe=M.options).visible===!1?(ue.graphic=1,ue.dataLabel=1):(this.hasMarkerChanged(pe,W)&&(ue.graphic=1),(he=M.hasDataLabels)!=null&&he.call(M)||(ue.dataLabel=1)),this.points))fe&&fe.series&&(fe.resolveColor(),Object.keys(ue).length&&fe.destroyElements(ue),pe.showInLegend===!1&&fe.legendItem&&G.legend.destroyItem(fe));M.initialType=J,G.linkSeries(),G.setSortedData(),ae&&M.linkedSeries.length&&(M.isDirtyData=!0),h(this,"afterUpdate"),$(T,!0)&&G.redraw(!!re&&void 0)}setName(m){this.name=this.options.name=this.userOptions.name=m,this.chart.isDirtyLegend=!0}hasOptionChanged(m){var ne,oe;let T=this.chart,M=this.options[m],G=T.options.plotOptions,W=this.userOptions[m],J=$((ne=G==null?void 0:G[this.type])==null?void 0:ne[m],(oe=G==null?void 0:G.series)==null?void 0:oe[m]);return W&&!R(J)?M!==W:M!==$(J,M)}onMouseOver(){let m=this.chart,T=m.hoverSeries,M=m.pointer;M==null||M.setHoverChartIndex(),T&&T!==this&&T.onMouseOut(),this.options.events.mouseOver&&h(this,"mouseOver"),this.setState("hover"),m.hoverSeries=this}onMouseOut(){let m=this.options,T=this.chart,M=T.tooltip,G=T.hoverPoint;T.hoverSeries=null,G&&G.onMouseOut(),this&&m.events.mouseOut&&h(this,"mouseOut"),M&&!this.stickyTracking&&(!M.shared||this.noSharedTooltip)&&M.hide(),T.series.forEach(function(W){W.setState("",!0)})}setState(m,T){let M=this,G=M.options,W=M.graph,J=G.inactiveOtherPoints,ne=G.states,oe=$(ne[m||"normal"]&&ne[m||"normal"].animation,M.chart.options.chart.animation),se=G.lineWidth,ue=G.opacity;if(m=m||"",M.state!==m&&([M.group,M.markerGroup,M.dataLabelsGroup].forEach(function(pe){pe&&(M.state&&pe.removeClass("highcharts-series-"+M.state),m&&pe.addClass("highcharts-series-"+m))}),M.state=m,!M.chart.styledMode)){if(ne[m]&&ne[m].enabled===!1)return;if(m&&(se=ne[m].lineWidth||se+(ne[m].lineWidthPlus||0),ue=$(ne[m].opacity,ue)),W&&!W.dashstyle&&ie(se))for(let pe of[W,...this.zones.map(Z=>Z.graph)])pe==null||pe.animate({"stroke-width":se},oe);J||[M.group,M.markerGroup,M.dataLabelsGroup,M.labelBySeries].forEach(function(pe){pe&&pe.animate({opacity:ue},oe)})}T&&J&&M.points&&M.setAllPointsToState(m||void 0)}setAllPointsToState(m){this.points.forEach(function(T){T.setState&&T.setState(m)})}setVisible(m,T){var oe;let M=this,G=M.chart,W=G.options.chart.ignoreHiddenSeries,J=M.visible;M.visible=m=M.options.visible=M.userOptions.visible=m===void 0?!J:m;let ne=m?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(se=>{var ue;(ue=M[se])==null||ue[ne]()}),(G.hoverSeries===M||((oe=G.hoverPoint)==null?void 0:oe.series)===M)&&M.onMouseOut(),M.legendItem&&G.legend.colorizeItem(M,m),M.isDirty=!0,M.options.stacking&&G.series.forEach(se=>{se.options.stacking&&se.visible&&(se.isDirty=!0)}),M.linkedSeries.forEach(se=>{se.setVisible(m,!1)}),W&&(G.isDirtyBox=!0),h(M,ne),T!==!1&&G.redraw()}show(){this.setVisible(!0)}hide(){this.setVisible(!1)}select(m){this.selected=m=this.options.selected=m===void 0?!this.selected:m,this.checkbox&&(this.checkbox.checked=m),h(this,m?"select":"unselect")}shouldShowTooltip(m,T,M={}){return M.series=this,M.visiblePlotOnly=!0,this.chart.isInsidePlot(m,T,M)}drawLegendSymbol(m,T){var M;(M=E[this.options.legendSymbol||"rectangle"])==null||M.call(this,m,T)}}return B.defaultOptions=_,B.types=C.seriesTypes,B.registerType=C.registerSeriesType,d(B.prototype,{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,directTouch:!1,invertible:!0,isCartesian:!0,kdAxisArray:["clientX","plotY"],parallelArrays:["x","y"],pointClass:F,requireSorting:!0,sorted:!0}),C.series=B,B}),n(i,"Core/Chart/Chart.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Axis/Axis.js"],i["Core/Defaults.js"],i["Core/Templating.js"],i["Core/Foundation.js"],i["Core/Globals.js"],i["Core/Renderer/RendererRegistry.js"],i["Core/Series/Series.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Renderer/SVG/SVGRenderer.js"],i["Core/Time.js"],i["Core/Utilities.js"],i["Core/Renderer/HTML/AST.js"],i["Core/Axis/Tick.js"]],function(o,s,l,j,E,F,_,C,D,V,k,I,U,p){let{animate:a,animObject:u,setAnimation:y}=o,{defaultOptions:w,defaultTime:f}=l,{numberFormat:N}=j,{registerEventOptions:K}=E,{charts:Y,doc:R,marginNames:A,svg:L,win:b}=F,{seriesTypes:c}=D,{addEvent:d,attr:v,createElement:h,css:g,defined:x,diffObjects:z,discardElement:H,erase:ie,error:O,extend:Q,find:ee,fireEvent:$,getStyle:ce,isArray:S,isNumber:P,isObject:B,isString:q,merge:m,objectEach:T,pick:M,pInt:G,relativeLength:W,removeEvent:J,splat:ne,syncTimeout:oe,uniqueKey:se}=I;class ue{static chart(Z,X,te){return new ue(Z,X,te)}constructor(Z,X,te){this.sharedClips={};let re=[...arguments];(q(Z)||Z.nodeName)&&(this.renderTo=re.shift()),this.init(re[0],re[1])}setZoomOptions(){let Z=this.options.chart,X=Z.zooming;this.zooming={...X,type:M(Z.zoomType,X.type),key:M(Z.zoomKey,X.key),pinchType:M(Z.pinchType,X.pinchType),singleTouch:M(Z.zoomBySingleTouch,X.singleTouch,!1),resetButton:m(X.resetButton,Z.resetZoomButton)}}init(Z,X){$(this,"init",{args:arguments},function(){let te=m(w,Z),re=te.chart;this.userOptions=Q({},Z),this.margin=[],this.spacing=[],this.labelCollectors=[],this.callback=X,this.isResizing=0,this.options=te,this.axes=[],this.series=[],this.time=Z.time&&Object.keys(Z.time).length?new k(Z.time):F.time,this.numberFormatter=re.numberFormatter||N,this.styledMode=re.styledMode,this.hasCartesianSeries=re.showAxes,this.index=Y.length,Y.push(this),F.chartCount++,K(this,re),this.xAxis=[],this.yAxis=[],this.pointCount=this.colorCounter=this.symbolCounter=0,this.setZoomOptions(),$(this,"afterInit"),this.firstRender()})}initSeries(Z){let X=this.options.chart,te=Z.type||X.type,re=c[te];re||O(17,!0,this,{missingModuleFor:te});let ae=new re;return typeof ae.init=="function"&&ae.init(this,Z),ae}setSortedData(){this.getSeriesOrderByLinks().forEach(function(Z){Z.points||Z.data||!Z.enabledDataSorting||Z.setData(Z.options.data,!1)})}getSeriesOrderByLinks(){return this.series.concat().sort(function(Z,X){return Z.linkedSeries.length||X.linkedSeries.length?X.linkedSeries.length-Z.linkedSeries.length:0})}orderItems(Z,X=0){let te=this[Z],re=this.options[Z]=ne(this.options[Z]).slice(),ae=this.userOptions[Z]=this.userOptions[Z]?ne(this.userOptions[Z]).slice():[];if(this.hasRendered&&(re.splice(X),ae.splice(X)),te)for(let de=X,le=te.length;de<le;++de){let he=te[de];he&&(he.index=de,he instanceof C&&(he.name=he.getName()),he.options.isInternal||(re[de]=he.options,ae[de]=he.userOptions))}}isInsidePlot(Z,X,te={}){var ve;let{inverted:re,plotBox:ae,plotLeft:de,plotTop:le,scrollablePlotBox:he}=this,{scrollLeft:fe=0,scrollTop:me=0}=te.visiblePlotOnly&&((ve=this.scrollablePlotArea)==null?void 0:ve.scrollingContainer)||{},ge=te.series,xe=te.visiblePlotOnly&&he||ae,ye=te.inverted?X:Z,je=te.inverted?Z:X,Ae={x:ye,y:je,isInsidePlot:!0,options:te};if(!te.ignoreX){let ke=ge&&(re&&!this.polar?ge.yAxis:ge.xAxis)||{pos:de,len:1/0},Se=te.paneCoordinates?ke.pos+ye:de+ye;Se>=Math.max(fe+de,ke.pos)&&Se<=Math.min(fe+de+xe.width,ke.pos+ke.len)||(Ae.isInsidePlot=!1)}if(!te.ignoreY&&Ae.isInsidePlot){let ke=!re&&te.axis&&!te.axis.isXAxis&&te.axis||ge&&(re?ge.xAxis:ge.yAxis)||{pos:le,len:1/0},Se=te.paneCoordinates?ke.pos+je:le+je;Se>=Math.max(me+le,ke.pos)&&Se<=Math.min(me+le+xe.height,ke.pos+ke.len)||(Ae.isInsidePlot=!1)}return $(this,"afterIsInsidePlot",Ae),Ae.isInsidePlot}redraw(Z){$(this,"beforeRedraw");let X=this.hasCartesianSeries?this.axes:this.colorAxis||[],te=this.series,re=this.pointer,ae=this.legend,de=this.userOptions.legend,le=this.renderer,he=le.isHidden(),fe=[],me,ge,xe,ye=this.isDirtyBox,je=this.isDirtyLegend,Ae;for(le.rootFontSize=le.boxWrapper.getStyle("font-size"),this.setResponsive&&this.setResponsive(!1),y(!!this.hasRendered&&Z,this),he&&this.temporaryDisplay(),this.layOutTitles(!1),xe=te.length;xe--;)if(((Ae=te[xe]).options.stacking||Ae.options.centerInCategory)&&(ge=!0,Ae.isDirty)){me=!0;break}if(me)for(xe=te.length;xe--;)(Ae=te[xe]).options.stacking&&(Ae.isDirty=!0);te.forEach(function(ve){ve.isDirty&&(ve.options.legendType==="point"?(typeof ve.updateTotals=="function"&&ve.updateTotals(),je=!0):de&&(de.labelFormatter||de.labelFormat)&&(je=!0)),ve.isDirtyData&&$(ve,"updatedData")}),je&&ae&&ae.options.enabled&&(ae.render(),this.isDirtyLegend=!1),ge&&this.getStacks(),X.forEach(function(ve){ve.updateNames(),ve.setScale()}),this.getMargins(),X.forEach(function(ve){ve.isDirty&&(ye=!0)}),X.forEach(function(ve){let ke=ve.min+","+ve.max;ve.extKey!==ke&&(ve.extKey=ke,fe.push(function(){$(ve,"afterSetExtremes",Q(ve.eventArgs,ve.getExtremes())),delete ve.eventArgs})),(ye||ge)&&ve.redraw()}),ye&&this.drawChartBox(),$(this,"predraw"),te.forEach(function(ve){(ye||ve.isDirty)&&ve.visible&&ve.redraw(),ve.isDirtyData=!1}),re&&re.reset(!0),le.draw(),$(this,"redraw"),$(this,"render"),he&&this.temporaryDisplay(!0),fe.forEach(function(ve){ve.call()})}get(Z){let X=this.series;function te(ae){return ae.id===Z||ae.options&&ae.options.id===Z}let re=ee(this.axes,te)||ee(this.series,te);for(let ae=0;!re&&ae<X.length;ae++)re=ee(X[ae].points||[],te);return re}getAxes(){let Z=this.userOptions;for(let X of($(this,"getAxes"),["xAxis","yAxis"]))for(let te of Z[X]=ne(Z[X]||{}))new s(this,te,X);$(this,"afterGetAxes")}getSelectedPoints(){return this.series.reduce((Z,X)=>(X.getPointsCollection().forEach(te=>{M(te.selectedStaging,te.selected)&&Z.push(te)}),Z),[])}getSelectedSeries(){return this.series.filter(function(Z){return Z.selected})}setTitle(Z,X,te){this.applyDescription("title",Z),this.applyDescription("subtitle",X),this.applyDescription("caption",void 0),this.layOutTitles(te)}applyDescription(Z,X){let te=this,re=this.options[Z]=m(this.options[Z],X),ae=this[Z];ae&&X&&(this[Z]=ae=ae.destroy()),re&&!ae&&((ae=this.renderer.text(re.text,0,0,re.useHTML).attr({align:re.align,class:"highcharts-"+Z,zIndex:re.zIndex||4}).add()).update=function(de,le){te.applyDescription(Z,de),te.layOutTitles(le)},this.styledMode||ae.css(Q(Z==="title"?{fontSize:this.options.isStock?"1em":"1.2em"}:{},re.style)),this[Z]=ae)}layOutTitles(Z=!0){let X=[0,0,0],te=this.renderer,re=this.spacingBox;["title","subtitle","caption"].forEach(function(de){let le=this[de],he=this.options[de],fe=he.verticalAlign||"top",me=de==="title"?fe==="top"?-3:0:fe==="top"?X[0]+2:0;if(le){le.css({width:(he.width||re.width+(he.widthAdjust||0))+"px"});let ge=te.fontMetrics(le).b,xe=Math.round(le.getBBox(he.useHTML).height);le.align(Q({y:fe==="bottom"?ge:me+ge,height:xe},he),!1,"spacingBox"),he.floating||(fe==="top"?X[0]=Math.ceil(X[0]+xe):fe==="bottom"&&(X[2]=Math.ceil(X[2]+xe)))}},this),X[0]&&(this.options.title.verticalAlign||"top")==="top"&&(X[0]+=this.options.title.margin),X[2]&&this.options.caption.verticalAlign==="bottom"&&(X[2]+=this.options.caption.margin);let ae=!this.titleOffset||this.titleOffset.join(",")!==X.join(",");this.titleOffset=X,$(this,"afterLayOutTitles"),!this.isDirtyBox&&ae&&(this.isDirtyBox=this.isDirtyLegend=ae,this.hasRendered&&Z&&this.isDirtyBox&&this.redraw())}getContainerBox(){return{width:ce(this.renderTo,"width",!0)||0,height:ce(this.renderTo,"height",!0)||0}}getChartSize(){let Z=this.options.chart,X=Z.width,te=Z.height,re=this.getContainerBox();this.chartWidth=Math.max(0,X||re.width||600),this.chartHeight=Math.max(0,W(te,this.chartWidth)||(re.height>1?re.height:400)),this.containerBox=re}temporaryDisplay(Z){let X=this.renderTo,te;if(Z)for(;X&&X.style;)X.hcOrigStyle&&(g(X,X.hcOrigStyle),delete X.hcOrigStyle),X.hcOrigDetached&&(R.body.removeChild(X),X.hcOrigDetached=!1),X=X.parentNode;else for(;X&&X.style&&(R.body.contains(X)||X.parentNode||(X.hcOrigDetached=!0,R.body.appendChild(X)),(ce(X,"display",!1)==="none"||X.hcOricDetached)&&(X.hcOrigStyle={display:X.style.display,height:X.style.height,overflow:X.style.overflow},te={display:"block",overflow:"hidden"},X!==this.renderTo&&(te.height=0),g(X,te),X.offsetWidth||X.style.setProperty("display","block","important")),(X=X.parentNode)!==R.body););}setClassName(Z){this.container.className="highcharts-container "+(Z||"")}getContainer(){var xe;let Z=this.options,X=Z.chart,te="data-highcharts-chart",re=se(),ae,de=this.renderTo;de||(this.renderTo=de=X.renderTo),q(de)&&(this.renderTo=de=R.getElementById(de)),de||O(13,!0,this);let le=G(v(de,te));P(le)&&Y[le]&&Y[le].hasRendered&&Y[le].destroy(),v(de,te,this.index),de.innerHTML=U.emptyHTML,X.skipClone||de.offsetWidth||this.temporaryDisplay(),this.getChartSize();let he=this.chartHeight,fe=this.chartWidth;g(de,{overflow:"hidden"}),this.styledMode||(ae=Q({position:"relative",overflow:"hidden",width:fe+"px",height:he+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)",userSelect:"none","touch-action":"manipulation",outline:"none"},X.style||{}));let me=h("div",{id:re},ae,de);this.container=me,this.getChartSize(),fe===this.chartWidth||(fe=this.chartWidth,this.styledMode||g(me,{width:M((xe=X.style)==null?void 0:xe.width,fe+"px")})),this.containerBox=this.getContainerBox(),this._cursor=me.style.cursor;let ge=X.renderer||!L?_.getRendererType(X.renderer):V;if(this.renderer=new ge(me,fe,he,void 0,X.forExport,Z.exporting&&Z.exporting.allowHTML,this.styledMode),y(void 0,this),this.setClassName(X.className),this.styledMode)for(let ye in Z.defs)this.renderer.definition(Z.defs[ye]);else this.renderer.setStyle(X.style);this.renderer.chartIndex=this.index,$(this,"afterGetContainer")}getMargins(Z){let{spacing:X,margin:te,titleOffset:re}=this;this.resetMargins(),re[0]&&!x(te[0])&&(this.plotTop=Math.max(this.plotTop,re[0]+X[0])),re[2]&&!x(te[2])&&(this.marginBottom=Math.max(this.marginBottom,re[2]+X[2])),this.legend&&this.legend.display&&this.legend.adjustMargins(te,X),$(this,"getMargins"),Z||this.getAxisMargins()}getAxisMargins(){let Z=this,X=Z.axisOffset=[0,0,0,0],te=Z.colorAxis,re=Z.margin,ae=function(de){de.forEach(function(le){le.visible&&le.getOffset()})};Z.hasCartesianSeries?ae(Z.axes):te&&te.length&&ae(te),A.forEach(function(de,le){x(re[le])||(Z[de]+=X[le])}),Z.setChartSize()}getOptions(){return z(this.userOptions,w)}reflow(Z){var ae;let X=this,te=X.containerBox,re=X.getContainerBox();(ae=X.pointer)==null||delete ae.chartPosition,!X.isPrinting&&!X.isResizing&&te&&re.width&&((re.width!==te.width||re.height!==te.height)&&(I.clearTimeout(X.reflowTimeout),X.reflowTimeout=oe(function(){X.container&&X.setSize(void 0,void 0,!1)},Z?100:0)),X.containerBox=re)}setReflow(){let Z=this,X=te=>{var re;(re=Z.options)!=null&&re.chart.reflow&&Z.hasLoaded&&Z.reflow(te)};if(typeof ResizeObserver=="function")new ResizeObserver(X).observe(Z.renderTo);else{let te=d(b,"resize",X);d(this,"destroy",te)}}setSize(Z,X,te){let re=this,ae=re.renderer;re.isResizing+=1,y(te,re);let de=ae.globalAnimation;re.oldChartHeight=re.chartHeight,re.oldChartWidth=re.chartWidth,Z!==void 0&&(re.options.chart.width=Z),X!==void 0&&(re.options.chart.height=X),re.getChartSize();let{chartWidth:le,chartHeight:he,scrollablePixelsX:fe=0,scrollablePixelsY:me=0}=re;(re.isDirtyBox||le!==re.oldChartWidth||he!==re.oldChartHeight)&&(re.styledMode||(de?a:g)(re.container,{width:`${le+fe}px`,height:`${he+me}px`},de),re.setChartSize(!0),ae.setSize(le,he,de),re.axes.forEach(function(ge){ge.isDirty=!0,ge.setScale()}),re.isDirtyLegend=!0,re.isDirtyBox=!0,re.layOutTitles(),re.getMargins(),re.redraw(de),re.oldChartHeight=void 0,$(re,"resize"),setTimeout(()=>{re&&$(re,"endResize")},u(de).duration)),re.isResizing-=1}setChartSize(Z){let X,te,re,ae,{chartHeight:de,chartWidth:le,inverted:he,spacing:fe,renderer:me}=this,ge=this.clipOffset,xe=Math[he?"floor":"round"];this.plotLeft=X=Math.round(this.plotLeft),this.plotTop=te=Math.round(this.plotTop),this.plotWidth=re=Math.max(0,Math.round(le-X-this.marginRight)),this.plotHeight=ae=Math.max(0,Math.round(de-te-this.marginBottom)),this.plotSizeX=he?ae:re,this.plotSizeY=he?re:ae,this.spacingBox=me.spacingBox={x:fe[3],y:fe[0],width:le-fe[3]-fe[1],height:de-fe[0]-fe[2]},this.plotBox=me.plotBox={x:X,y:te,width:re,height:ae},ge&&(this.clipBox={x:xe(ge[3]),y:xe(ge[0]),width:xe(this.plotSizeX-ge[1]-ge[3]),height:xe(this.plotSizeY-ge[0]-ge[2])}),Z||(this.axes.forEach(function(ye){ye.setAxisSize(),ye.setAxisTranslation()}),me.alignElements()),$(this,"afterSetChartSize",{skipAxes:Z})}resetMargins(){$(this,"resetMargins");let Z=this,X=Z.options.chart,te=X.plotBorderWidth||0,re=te/2;["margin","spacing"].forEach(function(ae){let de=X[ae],le=B(de)?de:[de,de,de,de];["Top","Right","Bottom","Left"].forEach(function(he,fe){Z[ae][fe]=M(X[ae+he],le[fe])})}),A.forEach(function(ae,de){Z[ae]=M(Z.margin[de],Z.spacing[de])}),Z.axisOffset=[0,0,0,0],Z.clipOffset=[re,re,re,re],Z.plotBorderWidth=te}drawChartBox(){let Z=this.options.chart,X=this.renderer,te=this.chartWidth,re=this.chartHeight,ae=this.styledMode,de=this.plotBGImage,le=Z.backgroundColor,he=Z.plotBackgroundColor,fe=Z.plotBackgroundImage,me=this.plotLeft,ge=this.plotTop,xe=this.plotWidth,ye=this.plotHeight,je=this.plotBox,Ae=this.clipRect,ve=this.clipBox,ke=this.chartBackground,Se=this.plotBackground,Ee=this.plotBorder,Ie,Le,ct,ze="animate";ke||(this.chartBackground=ke=X.rect().addClass("highcharts-background").add(),ze="attr"),ae?Ie=Le=ke.strokeWidth():(Le=(Ie=Z.borderWidth||0)+(Z.shadow?8:0),ct={fill:le||"none"},(Ie||ke["stroke-width"])&&(ct.stroke=Z.borderColor,ct["stroke-width"]=Ie),ke.attr(ct).shadow(Z.shadow)),ke[ze]({x:Le/2,y:Le/2,width:te-Le-Ie%2,height:re-Le-Ie%2,r:Z.borderRadius}),ze="animate",Se||(ze="attr",this.plotBackground=Se=X.rect().addClass("highcharts-plot-background").add()),Se[ze](je),!ae&&(Se.attr({fill:he||"none"}).shadow(Z.plotShadow),fe&&(de?(fe!==de.attr("href")&&de.attr("href",fe),de.animate(je)):this.plotBGImage=X.image(fe,me,ge,xe,ye).add())),Ae?Ae.animate({width:ve.width,height:ve.height}):this.clipRect=X.clipRect(ve),ze="animate",Ee||(ze="attr",this.plotBorder=Ee=X.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add()),ae||Ee.attr({stroke:Z.plotBorderColor,"stroke-width":Z.plotBorderWidth||0,fill:"none"}),Ee[ze](Ee.crisp({x:me,y:ge,width:xe,height:ye},-Ee.strokeWidth())),this.isDirtyBox=!1,$(this,"afterDrawChartBox")}propFromSeries(){let Z,X,te,re=this,ae=re.options.chart,de=re.options.series;["inverted","angular","polar"].forEach(function(le){for(X=c[ae.type],te=ae[le]||X&&X.prototype[le],Z=de&&de.length;!te&&Z--;)(X=c[de[Z].type])&&X.prototype[le]&&(te=!0);re[le]=te})}linkSeries(Z){let X=this,te=X.series;te.forEach(function(re){re.linkedSeries.length=0}),te.forEach(function(re){let{linkedTo:ae}=re.options;if(q(ae)){let de;(de=ae===":previous"?X.series[re.index-1]:X.get(ae))&&de.linkedParent!==re&&(de.linkedSeries.push(re),re.linkedParent=de,de.enabledDataSorting&&re.setDataSortingOptions(),re.visible=M(re.options.visible,de.options.visible,re.visible))}}),$(this,"afterLinkSeries",{isUpdating:Z})}renderSeries(){this.series.forEach(function(Z){Z.translate(),Z.render()})}render(){var me;let Z=this.axes,X=this.colorAxis,te=this.renderer,re=this.options.chart.axisLayoutRuns||2,ae=ge=>{ge.forEach(xe=>{xe.visible&&xe.render()})},de=0,le=!0,he,fe=0;for(let ge of(this.setTitle(),$(this,"beforeMargins"),(me=this.getStacks)==null||me.call(this),this.getMargins(!0),this.setChartSize(),Z)){let{options:xe}=ge,{labels:ye}=xe;if(this.hasCartesianSeries&&ge.horiz&&ge.visible&&ye.enabled&&ge.series.length&&ge.coll!=="colorAxis"&&!this.polar){de=xe.tickLength,ge.createGroups();let je=new p(ge,0,"",!0),Ae=je.createLabel("x",ye);if(je.destroy(),Ae&&M(ye.reserveSpace,!P(xe.crossing))&&(de=Ae.getBBox().height+ye.distance+Math.max(xe.offset||0,0)),de){Ae==null||Ae.destroy();break}}}for(this.plotHeight=Math.max(this.plotHeight-de,0);(le||he||re>1)&&fe<re;){let ge=this.plotWidth,xe=this.plotHeight;for(let ye of Z)fe===0?ye.setScale():(ye.horiz&&le||!ye.horiz&&he)&&ye.setTickInterval(!0);fe===0?this.getAxisMargins():this.getMargins(),le=ge/this.plotWidth>(fe?1:1.1),he=xe/this.plotHeight>(fe?1:1.05),fe++}this.drawChartBox(),this.hasCartesianSeries?ae(Z):X&&X.length&&ae(X),this.seriesGroup||(this.seriesGroup=te.g("series-group").attr({zIndex:3}).shadow(this.options.chart.seriesGroupShadow).add()),this.renderSeries(),this.addCredits(),this.setResponsive&&this.setResponsive(),this.hasRendered=!0}addCredits(Z){let X=this,te=m(!0,this.options.credits,Z);te.enabled&&!this.credits&&(this.credits=this.renderer.text(te.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){te.href&&(b.location.href=te.href)}).attr({align:te.position.align,zIndex:8}),X.styledMode||this.credits.css(te.style),this.credits.add().align(te.position),this.credits.update=function(re){X.credits=X.credits.destroy(),X.addCredits(re)})}destroy(){let Z,X=this,te=X.axes,re=X.series,ae=X.container,de=ae&&ae.parentNode;for($(X,"destroy"),X.renderer.forExport?ie(Y,X):Y[X.index]=void 0,F.chartCount--,X.renderTo.removeAttribute("data-highcharts-chart"),J(X),Z=te.length;Z--;)te[Z]=te[Z].destroy();for(this.scroller&&this.scroller.destroy&&this.scroller.destroy(),Z=re.length;Z--;)re[Z]=re[Z].destroy();["title","subtitle","chartBackground","plotBackground","plotBGImage","plotBorder","seriesGroup","clipRect","credits","pointer","rangeSelector","legend","resetZoomButton","tooltip","renderer"].forEach(function(le){let he=X[le];he&&he.destroy&&(X[le]=he.destroy())}),ae&&(ae.innerHTML=U.emptyHTML,J(ae),de&&H(ae)),T(X,function(le,he){delete X[he]})}firstRender(){var re;let Z=this,X=Z.options;Z.getContainer(),Z.resetMargins(),Z.setChartSize(),Z.propFromSeries(),Z.getAxes();let te=S(X.series)?X.series:[];X.series=[],te.forEach(function(ae){Z.initSeries(ae)}),Z.linkSeries(),Z.setSortedData(),$(Z,"beforeRender"),Z.render(),(re=Z.pointer)==null||re.getChartPosition(),Z.renderer.imgCount||Z.hasLoaded||Z.onload(),Z.temporaryDisplay(!0)}onload(){this.callbacks.concat([this.callback]).forEach(function(Z){Z&&this.index!==void 0&&Z.apply(this,[this])},this),$(this,"load"),$(this,"render"),x(this.index)&&this.setReflow(),this.warnIfA11yModuleNotLoaded(),this.hasLoaded=!0}warnIfA11yModuleNotLoaded(){let{options:Z,title:X}=this;!Z||this.accessibility||(this.renderer.boxWrapper.attr({role:"img","aria-label":(X&&X.element.textContent||"").replace(/</g,"&lt;")}),Z.accessibility&&Z.accessibility.enabled===!1||O('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',!1,this))}addSeries(Z,X,te){let re,ae=this;return Z&&(X=M(X,!0),$(ae,"addSeries",{options:Z},function(){re=ae.initSeries(Z),ae.isDirtyLegend=!0,ae.linkSeries(),re.enabledDataSorting&&re.setData(Z.data,!1),$(ae,"afterAddSeries",{series:re}),X&&ae.redraw(te)})),re}addAxis(Z,X,te,re){return this.createAxis(X?"xAxis":"yAxis",{axis:Z,redraw:te,animation:re})}addColorAxis(Z,X,te){return this.createAxis("colorAxis",{axis:Z,redraw:X,animation:te})}createAxis(Z,X){let te=new s(this,X.axis,Z);return M(X.redraw,!0)&&this.redraw(X.animation),te}showLoading(Z){let X=this,te=X.options,re=te.loading,ae=function(){de&&g(de,{left:X.plotLeft+"px",top:X.plotTop+"px",width:X.plotWidth+"px",height:X.plotHeight+"px"})},de=X.loadingDiv,le=X.loadingSpan;de||(X.loadingDiv=de=h("div",{className:"highcharts-loading highcharts-loading-hidden"},null,X.container)),le||(X.loadingSpan=le=h("span",{className:"highcharts-loading-inner"},null,de),d(X,"redraw",ae)),de.className="highcharts-loading",U.setElementHTML(le,M(Z,te.lang.loading,"")),X.styledMode||(g(de,Q(re.style,{zIndex:10})),g(le,re.labelStyle),X.loadingShown||(g(de,{opacity:0,display:""}),a(de,{opacity:re.style.opacity||.5},{duration:re.showDuration||0}))),X.loadingShown=!0,ae()}hideLoading(){let Z=this.options,X=this.loadingDiv;X&&(X.className="highcharts-loading highcharts-loading-hidden",this.styledMode||a(X,{opacity:0},{duration:Z.loading.hideDuration||100,complete:function(){g(X,{display:"none"})}})),this.loadingShown=!1}update(Z,X,te,re){let ae,de,le,he=this,fe={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},me=Z.isResponsiveOptions,ge=[];$(he,"update",{options:Z}),me||he.setResponsive(!1,!0),Z=z(Z,he.options),he.userOptions=m(he.userOptions,Z);let xe=Z.chart;xe&&(m(!0,he.options.chart,xe),this.setZoomOptions(),"className"in xe&&he.setClassName(xe.className),("inverted"in xe||"polar"in xe||"type"in xe)&&(he.propFromSeries(),ae=!0),"alignTicks"in xe&&(ae=!0),"events"in xe&&K(this,xe),T(xe,function(Ae,ve){he.propsRequireUpdateSeries.indexOf("chart."+ve)!==-1&&(de=!0),he.propsRequireDirtyBox.indexOf(ve)!==-1&&(he.isDirtyBox=!0),he.propsRequireReflow.indexOf(ve)===-1||(he.isDirtyBox=!0,me||(le=!0))}),!he.styledMode&&xe.style&&he.renderer.setStyle(he.options.chart.style||{})),!he.styledMode&&Z.colors&&(this.options.colors=Z.colors),Z.time&&(this.time===f&&(this.time=new k(Z.time)),m(!0,he.options.time,Z.time)),T(Z,function(Ae,ve){he[ve]&&typeof he[ve].update=="function"?he[ve].update(Ae,!1):typeof he[fe[ve]]=="function"?he[fe[ve]](Ae):ve!=="colors"&&he.collectionsWithUpdate.indexOf(ve)===-1&&m(!0,he.options[ve],Z[ve]),ve!=="chart"&&he.propsRequireUpdateSeries.indexOf(ve)!==-1&&(de=!0)}),this.collectionsWithUpdate.forEach(function(Ae){Z[Ae]&&(ne(Z[Ae]).forEach(function(ve,ke){let Se,Ee=x(ve.id);Ee&&(Se=he.get(ve.id)),!Se&&he[Ae]&&(Se=he[Ae][M(ve.index,ke)])&&(Ee&&x(Se.options.id)||Se.options.isInternal)&&(Se=void 0),Se&&Se.coll===Ae&&(Se.update(ve,!1),te&&(Se.touched=!0)),!Se&&te&&he.collectionsWithInit[Ae]&&(he.collectionsWithInit[Ae][0].apply(he,[ve].concat(he.collectionsWithInit[Ae][1]||[]).concat([!1])).touched=!0)}),te&&he[Ae].forEach(function(ve){ve.touched||ve.options.isInternal?delete ve.touched:ge.push(ve)}))}),ge.forEach(function(Ae){Ae.chart&&Ae.remove&&Ae.remove(!1)}),ae&&he.axes.forEach(function(Ae){Ae.update({},!1)}),de&&he.getSeriesOrderByLinks().forEach(function(Ae){Ae.chart&&Ae.update({},!1)},this);let ye=xe&&xe.width,je=xe&&(q(xe.height)?W(xe.height,ye||he.chartWidth):xe.height);le||P(ye)&&ye!==he.chartWidth||P(je)&&je!==he.chartHeight?he.setSize(ye,je,re):M(X,!0)&&he.redraw(re),$(he,"afterUpdate",{options:Z,redraw:X,animation:re})}setSubtitle(Z,X){this.applyDescription("subtitle",Z),this.layOutTitles(X)}setCaption(Z,X){this.applyDescription("caption",Z),this.layOutTitles(X)}showResetZoom(){let Z=this,X=w.lang,te=Z.zooming.resetButton,re=te.theme,ae=te.relativeTo==="chart"||te.relativeTo==="spacingBox"?null:"plotBox";function de(){Z.zoomOut()}$(this,"beforeShowResetZoom",null,function(){Z.resetZoomButton=Z.renderer.button(X.resetZoom,null,null,de,re).attr({align:te.position.align,title:X.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(te.position,!1,ae)}),$(this,"afterShowResetZoom")}zoomOut(){$(this,"selection",{resetSelection:!0},()=>this.transform({reset:!0,trigger:"zoom"}))}pan(Z,X){let te=this,re=typeof X=="object"?X:{enabled:X,type:"x"},ae=re.type,de=ae&&te[{x:"xAxis",xy:"axes",y:"yAxis"}[ae]].filter(he=>he.options.panningEnabled&&!he.options.isInternal),le=te.options.chart;le!=null&&le.panning&&(le.panning=re),$(this,"pan",{originalEvent:Z},()=>{te.transform({axes:de,event:Z,to:{x:Z.chartX-(te.mouseDownX||0),y:Z.chartY-(te.mouseDownY||0)},trigger:"pan"}),g(te.container,{cursor:"move"})})}transform(Z){var xe;let{axes:X=this.axes,event:te,from:re={},reset:ae,selection:de,to:le={},trigger:he}=Z,{inverted:fe}=this,me=!1,ge;for(let ye of((xe=this.hoverPoints)==null||xe.forEach(je=>je.setState()),X)){let{horiz:je,len:Ae,minPointOffset:ve=0,options:ke,reversed:Se}=ye,Ee=je?"width":"height",Ie=je?"x":"y",Le=M(le[Ee],ye.len),ct=M(re[Ee],ye.len),ze=10>Math.abs(Le)?1:Le/ct,ai=(re[Ie]||0)+ct/2-ye.pos,Ai=ai-((le[Ie]??ye.pos)+Le/2-ye.pos)/ze,li=Se&&!fe||!Se&&fe?-1:1;if(!ae&&(ai<0||ai>ye.len))continue;let dt=ye.toValue(Ai,!0)+(de?0:ve*li),ht=ye.toValue(Ai+Ae/ze,!0)-(de?0:ve*li||0),ci=ye.allExtremes;if(dt>ht&&([dt,ht]=[ht,dt]),ze===1&&!ae&&ye.coll==="yAxis"&&!ci){for(let Gc of ye.series){let io=Gc.getExtremes(Gc.getProcessedData(!0).yData,!0);ci??(ci={dataMin:Number.MAX_VALUE,dataMax:-Number.MAX_VALUE}),P(io.dataMin)&&P(io.dataMax)&&(ci.dataMin=Math.min(io.dataMin,ci.dataMin),ci.dataMax=Math.max(io.dataMax,ci.dataMax))}ye.allExtremes=ci}let{dataMin:r0,dataMax:o0,min:Ic,max:zc}=Q(ye.getExtremes(),ci||{}),Rc=r0??ke.min,Bc=o0??ke.max,Hs=ht-dt,Fc=ye.categories?0:Math.min(Hs,Bc-Rc),Ys=Rc-Fc*(x(ke.min)?0:ke.minPadding),_s=Bc+Fc*(x(ke.max)?0:ke.maxPadding),Uc=ye.allowZoomOutside||ze===1||he!=="zoom"&&ze>1,eo=Math.min(ke.min??Ys,Ys,Uc?Ic:Ys),to=Math.max(ke.max??_s,_s,Uc?zc:_s);(!ye.isOrdinal||ze!==1||ae)&&(dt<eo&&(dt=eo,ze>=1&&(ht=dt+Hs)),ht>to&&(ht=to,ze>=1&&(dt=ht-Hs)),(ae||ye.series.length&&(dt!==Ic||ht!==zc)&&dt>=eo&&ht<=to)&&(de?de[ye.coll].push({axis:ye,min:dt,max:ht}):(ye.isPanning=he!=="zoom",ye.setExtremes(ae?void 0:dt,ae?void 0:ht,!1,!1,{move:Ai,trigger:he,scale:ze}),!ae&&(dt>eo||ht<to)&&he!=="mousewheel"&&(ge=!0)),me=!0),te&&(this[je?"mouseDownX":"mouseDownY"]=te[je?"chartX":"chartY"]))}return me&&(de?$(this,"selection",de,()=>{delete Z.selection,Z.trigger="zoom",this.transform(Z)}):(ge&&!this.resetZoomButton?this.showResetZoom():!ge&&this.resetZoomButton&&(this.resetZoomButton=this.resetZoomButton.destroy()),this.redraw(he==="zoom"&&(this.options.chart.animation??this.pointCount<100)))),me}}return Q(ue.prototype,{callbacks:[],collectionsWithInit:{xAxis:[ue.prototype.addAxis,[!0]],yAxis:[ue.prototype.addAxis,[!1]],series:[ue.prototype.addSeries]},collectionsWithUpdate:["xAxis","yAxis","series"],propsRequireDirtyBox:["backgroundColor","borderColor","borderWidth","borderRadius","plotBackgroundColor","plotBackgroundImage","plotBorderColor","plotBorderWidth","plotShadow","shadow"],propsRequireReflow:["margin","marginTop","marginRight","marginBottom","marginLeft","spacing","spacingTop","spacingRight","spacingBottom","spacingLeft"],propsRequireUpdateSeries:["chart.inverted","chart.polar","chart.ignoreHiddenSeries","chart.type","colors","plotOptions","time","tooltip"]}),ue}),n(i,"Extensions/ScrollablePlotArea.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Globals.js"],i["Core/Renderer/RendererRegistry.js"],i["Core/Utilities.js"]],function(o,s,l,j){let{stop:E}=o,{composed:F}=s,{addEvent:_,createElement:C,css:D,defined:V,merge:k,pushUnique:I}=j;function U(){let u=this.scrollablePlotArea;(this.scrollablePixelsX||this.scrollablePixelsY)&&!u&&(this.scrollablePlotArea=u=new a(this)),u==null||u.applyFixed()}function p(){this.chart.scrollablePlotArea&&(this.chart.scrollablePlotArea.isDirty=!0)}class a{static compose(y,w,f){I(F,this.compose)&&(_(y,"afterInit",p),_(w,"afterSetChartSize",N=>this.afterSetSize(N.target,N)),_(w,"render",U),_(f,"show",p))}static afterSetSize(y,w){let f,N,K,{minWidth:Y,minHeight:R}=y.options.chart.scrollablePlotArea||{},{clipBox:A,plotBox:L,inverted:b,renderer:c}=y;if(!c.forExport&&(Y?(y.scrollablePixelsX=f=Math.max(0,Y-y.chartWidth),f&&(y.scrollablePlotBox=k(y.plotBox),L.width=y.plotWidth+=f,A[b?"height":"width"]+=f,K=!0)):R&&(y.scrollablePixelsY=N=Math.max(0,R-y.chartHeight),V(N)&&(y.scrollablePlotBox=k(y.plotBox),L.height=y.plotHeight+=N,A[b?"width":"height"]+=N,K=!1)),V(K)&&!w.skipAxes))for(let d of y.axes)d.horiz===K&&(d.setAxisSize(),d.setAxisTranslation())}constructor(y){var v;let w,f=y.options.chart,N=l.getRendererType(),K=f.scrollablePlotArea||{},Y=this.moveFixedElements.bind(this),R={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};y.scrollablePixelsX&&(R.overflowX="auto"),y.scrollablePixelsY&&(R.overflowY="auto"),this.chart=y;let A=this.parentDiv=C("div",{className:"highcharts-scrolling-parent"},{position:"relative"},y.renderTo),L=this.scrollingContainer=C("div",{className:"highcharts-scrolling"},R,A),b=this.innerContainer=C("div",{className:"highcharts-inner-container"},void 0,L),c=this.fixedDiv=C("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:(((v=f.style)==null?void 0:v.zIndex)||0)+2,top:0},void 0,!0),d=this.fixedRenderer=new N(c,y.chartWidth,y.chartHeight,f.style);this.mask=d.path().attr({fill:f.backgroundColor||"#fff","fill-opacity":K.opacity??.85,zIndex:-1}).addClass("highcharts-scrollable-mask").add(),L.parentNode.insertBefore(c,L),D(y.renderTo,{overflow:"visible"}),_(y,"afterShowResetZoom",Y),_(y,"afterApplyDrilldown",Y),_(y,"afterLayOutTitles",Y),_(L,"scroll",()=>{let{pointer:h,hoverPoint:g}=y;h&&(delete h.chartPosition,g&&(w=g),h.runPointActions(void 0,w,!0))}),b.appendChild(y.container)}applyFixed(){var P;let{chart:y,fixedRenderer:w,isDirty:f,scrollingContainer:N}=this,{axisOffset:K,chartWidth:Y,chartHeight:R,container:A,plotHeight:L,plotLeft:b,plotTop:c,plotWidth:d,scrollablePixelsX:v=0,scrollablePixelsY:h=0}=y,{scrollPositionX:g=0,scrollPositionY:x=0}=y.options.chart.scrollablePlotArea||{},z=Y+v,H=R+h;w.setSize(Y,R),(f??!0)&&(this.isDirty=!1,this.moveFixedElements()),E(y.container),D(A,{width:`${z}px`,height:`${H}px`}),y.renderer.boxWrapper.attr({width:z,height:H,viewBox:[0,0,z,H].join(" ")}),(P=y.chartBackground)==null||P.attr({width:z,height:H}),D(N,{width:`${Y}px`,height:`${R}px`}),V(f)||(N.scrollLeft=v*g,N.scrollTop=h*x);let ie=c-K[0]-1,O=b-K[3]-1,Q=c+L+K[2]+1,ee=b+d+K[1]+1,$=b+d-v,ce=c+L-h,S=[["M",0,0]];v?S=[["M",0,ie],["L",b-1,ie],["L",b-1,Q],["L",0,Q],["Z"],["M",$,ie],["L",Y,ie],["L",Y,Q],["L",$,Q],["Z"]]:h&&(S=[["M",O,0],["L",O,c-1],["L",ee,c-1],["L",ee,0],["Z"],["M",O,ce],["L",O,R],["L",ee,R],["L",ee,ce],["Z"]]),y.redrawTrigger!=="adjustHeight"&&this.mask.attr({d:S})}moveFixedElements(){let y,{container:w,inverted:f,scrollablePixelsX:N,scrollablePixelsY:K}=this.chart,Y=this.fixedRenderer,R=a.fixedSelectors;for(let A of(N&&!f?y=".highcharts-yaxis":N&&f||K&&!f?y=".highcharts-xaxis":K&&f&&(y=".highcharts-yaxis"),y&&R.push(`${y}:not(.highcharts-radial-axis)`,`${y}-labels:not(.highcharts-radial-axis-labels)`),R))[].forEach.call(w.querySelectorAll(A),L=>{(L.namespaceURI===Y.SVG_NS?Y.box:Y.box.parentNode).appendChild(L),L.style.pointerEvents="auto"})}}return a.fixedSelectors=[".highcharts-breadcrumbs-group",".highcharts-contextbutton",".highcharts-caption",".highcharts-credits",".highcharts-drillup-button",".highcharts-legend",".highcharts-legend-checkbox",".highcharts-navigator-series",".highcharts-navigator-xaxis",".highcharts-navigator-yaxis",".highcharts-navigator",".highcharts-range-selector-group",".highcharts-reset-zoom",".highcharts-scrollbar",".highcharts-subtitle",".highcharts-title"],a}),n(i,"Core/Axis/Stacking/StackItem.js",[i["Core/Templating.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(o,s,l){let{format:j}=o,{series:E}=s,{destroyObjectProperties:F,fireEvent:_,isNumber:C,pick:D}=l;return class{constructor(V,k,I,U,p){let a=V.chart.inverted,u=V.reversed;this.axis=V;let y=this.isNegative=!!I!=!!u;this.options=k=k||{},this.x=U,this.total=null,this.cumulative=null,this.points={},this.hasValidPoints=!1,this.stack=p,this.leftCliff=0,this.rightCliff=0,this.alignOptions={align:k.align||(a?y?"left":"right":"center"),verticalAlign:k.verticalAlign||(a?"middle":y?"bottom":"top"),y:k.y,x:k.x},this.textAlign=k.textAlign||(a?y?"right":"left":"center")}destroy(){F(this,this.axis)}render(V){let k=this.axis.chart,I=this.options,U=I.format,p=U?j(U,this,k):I.formatter.call(this);if(this.label)this.label.attr({text:p,visibility:"hidden"});else{this.label=k.renderer.label(p,null,void 0,I.shape,void 0,void 0,I.useHTML,!1,"stack-labels");let a={r:I.borderRadius||0,text:p,padding:D(I.padding,5),visibility:"hidden"};k.styledMode||(a.fill=I.backgroundColor,a.stroke=I.borderColor,a["stroke-width"]=I.borderWidth,this.label.css(I.style||{})),this.label.attr(a),this.label.added||this.label.add(V)}this.label.labelrank=k.plotSizeY,_(this,"afterRender")}setOffset(V,k,I,U,p,a){let{alignOptions:u,axis:y,label:w,options:f,textAlign:N}=this,K=y.chart,Y=this.getStackBox({xOffset:V,width:k,boxBottom:I,boxTop:U,defaultX:p,xAxis:a}),{verticalAlign:R}=u;if(w&&Y){let A=w.getBBox(void 0,0),L=w.padding,b=D(f.overflow,"justify")==="justify",c;u.x=f.x||0,u.y=f.y||0;let{x:d,y:v}=this.adjustStackPosition({labelBox:A,verticalAlign:R,textAlign:N});Y.x-=d,Y.y-=v,w.align(u,!1,Y),(c=K.isInsidePlot(w.alignAttr.x+u.x+d,w.alignAttr.y+u.y+v))||(b=!1),b&&E.prototype.justifyDataLabel.call(y,w,u,w.alignAttr,A,Y),w.attr({x:w.alignAttr.x,y:w.alignAttr.y,rotation:f.rotation,rotationOriginX:A.width*{left:0,center:.5,right:1}[f.textAlign||"center"],rotationOriginY:A.height/2}),D(!b&&f.crop,!0)&&(c=C(w.x)&&C(w.y)&&K.isInsidePlot(w.x-L+(w.width||0),w.y)&&K.isInsidePlot(w.x+L,w.y)),w[c?"show":"hide"]()}_(this,"afterSetOffset",{xOffset:V,width:k})}adjustStackPosition({labelBox:V,verticalAlign:k,textAlign:I}){let U={bottom:0,middle:1,top:2,right:1,center:0,left:-1},p=U[k],a=U[I];return{x:V.width/2+V.width/2*a,y:V.height/2*p}}getStackBox(V){let k=this.axis,I=k.chart,{boxTop:U,defaultX:p,xOffset:a,width:u,boxBottom:y}=V,w=k.stacking.usePercentage?100:D(U,this.total,0),f=k.toPixels(w),N=V.xAxis||I.xAxis[0],K=D(p,N.translate(this.x))+a,Y=Math.abs(f-k.toPixels(y||C(k.min)&&k.logarithmic&&k.logarithmic.lin2log(k.min)||0)),R=I.inverted,A=this.isNegative;return R?{x:(A?f:f-Y)-I.plotLeft,y:N.height-K-u,width:Y,height:u}:{x:K+N.transB-I.plotLeft,y:(A?f-Y:f)-I.plotTop,width:u,height:Y}}}}),n(i,"Core/Axis/Stacking/StackingAxis.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Axis/Axis.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Axis/Stacking/StackItem.js"],i["Core/Utilities.js"]],function(o,s,l,j,E){var F;let{getDeferredAnimation:_}=o,{series:{prototype:C}}=l,{addEvent:D,correctFloat:V,defined:k,destroyObjectProperties:I,fireEvent:U,isArray:p,isNumber:a,objectEach:u,pick:y}=E;function w(){let c=this.inverted;this.axes.forEach(d=>{d.stacking&&d.stacking.stacks&&d.hasVisibleSeries&&(d.stacking.oldStacks=d.stacking.stacks)}),this.series.forEach(d=>{let v=d.xAxis&&d.xAxis.options||{};d.options.stacking&&d.reserveSpace()&&(d.stackKey=[d.type,y(d.options.stack,""),c?v.top:v.left,c?v.height:v.width].join(","))})}function f(){var d;let c=this.stacking;if(c){let v=c.stacks;u(v,(h,g)=>{I(h),delete v[g]}),(d=c.stackTotalGroup)==null||d.destroy()}}function N(){this.stacking||(this.stacking=new b(this))}function K(c,d,v,h){return!k(c)||c.x!==d||h&&c.stackKey!==h?c={x:d,index:0,key:h,stackKey:h}:c.index++,c.key=[v,d,c.index].join(","),c}function Y(){let c,d=this,v=d.yAxis,h=d.stackKey||"",g=v.stacking.stacks,x=d.processedXData,z=d.options.stacking,H=d[z+"Stacker"];H&&[h,"-"+h].forEach(ie=>{var ce;let O=x.length,Q,ee,$;for(;O--;)Q=x[O],c=d.getStackIndicator(c,Q,d.index,ie),ee=(ce=g[ie])==null?void 0:ce[Q],($=ee==null?void 0:ee.points[c.key||""])&&H.call(d,$,ee,O)})}function R(c,d,v){let h=d.total?100/d.total:0;c[0]=V(c[0]*h),c[1]=V(c[1]*h),this.stackedYData[v]=c[1]}function A(c){(this.is("column")||this.is("columnrange"))&&(this.options.centerInCategory&&!this.options.stacking&&this.chart.series.length>1?C.setStackedPoints.call(this,c,"group"):c.stacking.resetStacks())}function L(c,d){var se,ue;let v,h,g,x,z,H,ie,O,Q,ee=d||this.options.stacking;if(!ee||!this.reserveSpace()||({group:"xAxis"}[ee]||"yAxis")!==c.coll)return;let $=this.processedXData,ce=this.processedYData,S=[],P=ce.length,B=this.options,q=B.threshold||0,m=B.startFromThreshold?q:0,T=B.stack,M=d?`${this.type},${ee}`:this.stackKey||"",G="-"+M,W=this.negStacks,J=c.stacking,ne=J.stacks,oe=J.oldStacks;for(J.stacksTouched+=1,ie=0;ie<P;ie++){O=$[ie],Q=ce[ie],H=(v=this.getStackIndicator(v,O,this.index)).key||"",ne[z=(h=W&&Q<(m?0:q))?G:M]||(ne[z]={}),ne[z][O]||((se=oe[z])!=null&&se[O]?(ne[z][O]=oe[z][O],ne[z][O].total=null):ne[z][O]=new j(c,c.options.stackLabels,!!h,O,T)),g=ne[z][O],Q!==null?(g.points[H]=g.points[this.index]=[y(g.cumulative,m)],k(g.cumulative)||(g.base=H),g.touched=J.stacksTouched,v.index>0&&this.singleStacks===!1&&(g.points[H][0]=g.points[this.index+","+O+",0"][0])):(delete g.points[H],delete g.points[this.index]);let pe=g.total||0;ee==="percent"?(x=h?M:G,pe=W&&((ue=ne[x])!=null&&ue[O])?(x=ne[x][O]).total=Math.max(x.total||0,pe)+Math.abs(Q)||0:V(pe+(Math.abs(Q)||0))):ee==="group"?(p(Q)&&(Q=Q[0]),Q!==null&&pe++):pe=V(pe+(Q||0)),ee==="group"?g.cumulative=(pe||1)-1:g.cumulative=V(y(g.cumulative,m)+(Q||0)),g.total=pe,Q!==null&&(g.points[H].push(g.cumulative),S[ie]=g.cumulative,g.hasValidPoints=!0)}ee==="percent"&&(J.usePercentage=!0),ee!=="group"&&(this.stackedYData=S),J.oldStacks={}}class b{constructor(d){this.oldStacks={},this.stacks={},this.stacksTouched=0,this.axis=d}buildStacks(){let d,v,h=this.axis,g=h.series,x=h.coll==="xAxis",z=h.options.reversedStacks,H=g.length;for(this.resetStacks(),this.usePercentage=!1,v=H;v--;)d=g[z?v:H-v-1],x&&d.setGroupedPoints(h),d.setStackedPoints(h);if(!x)for(v=0;v<H;v++)g[v].modifyStacks();U(h,"afterBuildStacks")}cleanStacks(){this.oldStacks&&(this.stacks=this.oldStacks,u(this.stacks,d=>{u(d,v=>{v.cumulative=v.total})}))}resetStacks(){u(this.stacks,d=>{u(d,(v,h)=>{a(v.touched)&&v.touched<this.stacksTouched?(v.destroy(),delete d[h]):(v.total=null,v.cumulative=null)})})}renderStackTotals(){var H;let d=this.axis,v=d.chart,h=v.renderer,g=this.stacks,x=_(v,((H=d.options.stackLabels)==null?void 0:H.animation)||!1),z=this.stackTotalGroup=this.stackTotalGroup||h.g("stack-labels").attr({zIndex:6,opacity:0}).add();z.translate(v.plotLeft,v.plotTop),u(g,ie=>{u(ie,O=>{O.render(z)})}),z.animate({opacity:1},x)}}return(F||(F={})).compose=function(c,d,v){let h=d.prototype,g=v.prototype;h.getStacks||(D(c,"init",N),D(c,"destroy",f),h.getStacks=w,g.getStackIndicator=K,g.modifyStacks=Y,g.percentStacker=R,g.setGroupedPoints=A,g.setStackedPoints=L)},F}),n(i,"Series/Line/LineSeries.js",[i["Core/Series/Series.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(o,s,l){let{defined:j,merge:E,isObject:F}=l;class _ extends o{drawGraph(){let D=this.options,V=(this.gappedPath||this.getGraphPath).call(this),k=this.chart.styledMode;[this,...this.zones].forEach((I,U)=>{let p,a=I.graph,u=a?"animate":"attr",y=I.dashStyle||D.dashStyle;a?(a.endX=this.preventGraphAnimation?null:V.xMap,a.animate({d:V})):V.length&&(I.graph=a=this.chart.renderer.path(V).addClass("highcharts-graph"+(U?` highcharts-zone-graph-${U-1} `:" ")+(U&&I.className||"")).attr({zIndex:1}).add(this.group)),a&&!k&&(p={stroke:!U&&D.lineColor||I.color||this.color||"#cccccc","stroke-width":D.lineWidth||0,fill:this.fillGraph&&this.color||"none"},y?p.dashstyle=y:D.linecap!=="square"&&(p["stroke-linecap"]=p["stroke-linejoin"]="round"),a[u](p).shadow(U<2&&D.shadow&&E({filterUnits:"userSpaceOnUse"},F(D.shadow)?D.shadow:{}))),a&&(a.startX=V.xMap,a.isArea=V.isArea)})}getGraphPath(D,V,k){let I=this,U=I.options,p=[],a=[],u,y=U.step,w=(D=D||I.points).reversed;return w&&D.reverse(),(y={right:1,center:2}[y]||y&&3)&&w&&(y=4-y),(D=this.getValidPoints(D,!1,!(U.connectNulls&&!V&&!k))).forEach(function(f,N){let K,Y=f.plotX,R=f.plotY,A=D[N-1],L=f.isNull||typeof R!="number";(f.leftCliff||A&&A.rightCliff)&&!k&&(u=!0),L&&!j(V)&&N>0?u=!U.connectNulls:L&&!V?u=!0:(N===0||u?K=[["M",f.plotX,f.plotY]]:I.getPointSpline?K=[I.getPointSpline(D,f,N)]:y?(K=y===1?[["L",A.plotX,R]]:y===2?[["L",(A.plotX+Y)/2,A.plotY],["L",(A.plotX+Y)/2,R]]:[["L",Y,A.plotY]]).push(["L",Y,R]):K=[["L",Y,R]],a.push(f.x),y&&(a.push(f.x),y===2&&a.push(f.x)),p.push.apply(p,K),u=!1)}),p.xMap=a,I.graphPath=p,p}}return _.defaultOptions=E(o.defaultOptions,{legendSymbol:"lineMarker"}),s.registerSeriesType("line",_),_}),n(i,"Series/Area/AreaSeriesDefaults.js",[],function(){return{threshold:0,legendSymbol:"areaMarker"}}),n(i,"Series/Area/AreaSeries.js",[i["Series/Area/AreaSeriesDefaults.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(o,s,l){let{seriesTypes:{line:j}}=s,{extend:E,merge:F,objectEach:_,pick:C}=l;class D extends j{drawGraph(){this.areaPath=[],super.drawGraph.apply(this);let{areaPath:k,options:I}=this;[this,...this.zones].forEach((U,p)=>{let a={},u=U.fillColor||I.fillColor,y=U.area,w=y?"animate":"attr";y?(y.endX=this.preventGraphAnimation?null:k.xMap,y.animate({d:k})):(a.zIndex=0,(y=U.area=this.chart.renderer.path(k).addClass("highcharts-area"+(p?` highcharts-zone-area-${p-1} `:" ")+(p&&U.className||"")).add(this.group)).isArea=!0),this.chart.styledMode||(a.fill=u||U.color||this.color,a["fill-opacity"]=u?1:I.fillOpacity??.75,y.css({pointerEvents:this.stickyTracking?"none":"auto"})),y[w](a),y.startX=k.xMap,y.shiftUnit=I.step?2:1})}getGraphPath(k){let I,U,p,a=j.prototype.getGraphPath,u=this.options,y=u.stacking,w=this.yAxis,f=[],N=[],K=this.index,Y=w.stacking.stacks[this.stackKey],R=u.threshold,A=Math.round(w.getThreshold(u.threshold)),L=C(u.connectNulls,y==="percent"),b=function(x,z,H){let ie=k[x],O=y&&Y[ie.x].points[K],Q=ie[H+"Null"]||0,ee=ie[H+"Cliff"]||0,$,ce,S=!0;ee||Q?($=(Q?O[0]:O[1])+ee,ce=O[0]+ee,S=!!Q):!y&&k[z]&&k[z].isNull&&($=ce=R),$!==void 0&&(N.push({plotX:I,plotY:$===null?A:w.getThreshold($),isNull:S,isCliff:!0}),f.push({plotX:I,plotY:ce===null?A:w.getThreshold(ce),doCurve:!1}))};k=k||this.points,y&&(k=this.getStackPoints(k));for(let x=0,z=k.length;x<z;++x)y||(k[x].leftCliff=k[x].rightCliff=k[x].leftNull=k[x].rightNull=void 0),U=k[x].isNull,I=C(k[x].rectPlotX,k[x].plotX),p=y?C(k[x].yBottom,A):A,U&&!L||(L||b(x,x-1,"left"),U&&!y&&L||(N.push(k[x]),f.push({x,plotX:I,plotY:p})),L||b(x,x+1,"right"));let c=a.call(this,N,!0,!0);f.reversed=!0;let d=a.call(this,f,!0,!0),v=d[0];v&&v[0]==="M"&&(d[0]=["L",v[1],v[2]]);let h=c.concat(d);h.length&&h.push(["Z"]);let g=a.call(this,N,!1,L);return h.xMap=c.xMap,this.areaPath=h,g}getStackPoints(k){let I=this,U=[],p=[],a=this.xAxis,u=this.yAxis,y=u.stacking.stacks[this.stackKey],w={},f=u.series,N=f.length,K=u.options.reversedStacks?1:-1,Y=f.indexOf(I);if(k=k||this.points,this.options.stacking){for(let A=0;A<k.length;A++)k[A].leftNull=k[A].rightNull=void 0,w[k[A].x]=k[A];_(y,function(A,L){A.total!==null&&p.push(L)}),p.sort(function(A,L){return A-L});let R=f.map(A=>A.visible);p.forEach(function(A,L){let b=0,c,d;if(w[A]&&!w[A].isNull)U.push(w[A]),[-1,1].forEach(function(v){let h=v===1?"rightNull":"leftNull",g=y[p[L+v]],x=0;if(g){let z=Y;for(;z>=0&&z<N;){let H=f[z].index;!(c=g.points[H])&&(H===I.index?w[A][h]=!0:R[z]&&(d=y[A].points[H])&&(x-=d[1]-d[0])),z+=K}}w[A][v===1?"rightCliff":"leftCliff"]=x});else{let v=Y;for(;v>=0&&v<N;){let h=f[v].index;if(c=y[A].points[h]){b=c[1];break}v+=K}b=C(b,0),b=u.translate(b,0,1,0,1),U.push({isNull:!0,plotX:a.translate(A,0,0,0,1),x:A,plotY:b,yBottom:b})}})}return U}}return D.defaultOptions=F(j.defaultOptions,o),E(D.prototype,{singleStacks:!1}),s.registerSeriesType("area",D),D}),n(i,"Series/Spline/SplineSeries.js",[i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(o,s){let{line:l}=o.seriesTypes,{merge:j,pick:E}=s;class F extends l{getPointSpline(C,D,V){let k,I,U,p,a=D.plotX||0,u=D.plotY||0,y=C[V-1],w=C[V+1];function f(K){return K&&!K.isNull&&K.doCurve!==!1&&!D.isCliff}if(f(y)&&f(w)){let K=y.plotX||0,Y=y.plotY||0,R=w.plotX||0,A=w.plotY||0,L=0;k=(1.5*a+K)/2.5,I=(1.5*u+Y)/2.5,U=(1.5*a+R)/2.5,p=(1.5*u+A)/2.5,U!==k&&(L=(p-I)*(U-a)/(U-k)+u-p),I+=L,p+=L,I>Y&&I>u?(I=Math.max(Y,u),p=2*u-I):I<Y&&I<u&&(I=Math.min(Y,u),p=2*u-I),p>A&&p>u?(p=Math.max(A,u),I=2*u-p):p<A&&p<u&&(p=Math.min(A,u),I=2*u-p),D.rightContX=U,D.rightContY=p,D.controlPoints={low:[k,I],high:[U,p]}}let N=["C",E(y.rightContX,y.plotX,0),E(y.rightContY,y.plotY,0),E(k,a,0),E(I,u,0),a,u];return y.rightContX=y.rightContY=void 0,N}}return F.defaultOptions=j(l.defaultOptions),o.registerSeriesType("spline",F),F}),n(i,"Series/AreaSpline/AreaSplineSeries.js",[i["Series/Spline/SplineSeries.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(o,s,l){let{area:j,area:{prototype:E}}=s.seriesTypes,{extend:F,merge:_}=l;class C extends o{}return C.defaultOptions=_(o.defaultOptions,j.defaultOptions),F(C.prototype,{getGraphPath:E.getGraphPath,getStackPoints:E.getStackPoints,drawGraph:E.drawGraph}),s.registerSeriesType("areaspline",C),C}),n(i,"Series/Column/ColumnSeriesDefaults.js",[],function(){return{borderRadius:3,centerInCategory:!1,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:void 0,verticalAlign:void 0,y:void 0},startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"}}),n(i,"Series/Column/ColumnSeries.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Color/Color.js"],i["Series/Column/ColumnSeriesDefaults.js"],i["Core/Globals.js"],i["Core/Series/Series.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(o,s,l,j,E,F,_){let{animObject:C}=o,{parse:D}=s,{noop:V}=j,{clamp:k,crisp:I,defined:U,extend:p,fireEvent:a,isArray:u,isNumber:y,merge:w,pick:f,objectEach:N}=_;class K extends E{animate(R){let A,L,b=this,c=this.yAxis,d=c.pos,v=c.reversed,h=b.options,{clipOffset:g,inverted:x}=this.chart,z={},H=x?"translateX":"translateY";R&&g?(z.scaleY=.001,L=k(c.toPixels(h.threshold),d,d+c.len),x?(L+=v?-Math.floor(g[0]):Math.ceil(g[2]),z.translateX=L-c.len):(L+=v?Math.ceil(g[0]):-Math.floor(g[2]),z.translateY=L),b.clipBox&&b.setClip(),b.group.attr(z)):(A=Number(b.group.attr(H)),b.group.animate({scaleY:1},p(C(b.options.animation),{step:function(ie,O){b.group&&(z[H]=A+O.pos*(d-A),b.group.attr(z))}})))}init(R,A){super.init.apply(this,arguments);let L=this;(R=L.chart).hasRendered&&R.series.forEach(function(b){b.type===L.type&&(b.isDirty=!0)})}getColumnMetrics(){var Q,ee;let R=this,A=R.options,L=R.xAxis,b=R.yAxis,c=L.options.reversedStacks,d=L.reversed&&!c||!L.reversed&&c,v={},h,g=0;A.grouping===!1?g=1:R.chart.series.forEach(function($){let ce,S=$.yAxis,P=$.options;$.type===R.type&&$.reserveSpace()&&b.len===S.len&&b.pos===S.pos&&(P.stacking&&P.stacking!=="group"?(v[h=$.stackKey]===void 0&&(v[h]=g++),ce=v[h]):P.grouping!==!1&&(ce=g++),$.columnIndex=ce)});let x=Math.min(Math.abs(L.transA)*(!((Q=L.brokenAxis)!=null&&Q.hasBreaks)&&((ee=L.ordinal)==null?void 0:ee.slope)||A.pointRange||L.closestPointRange||L.tickInterval||1),L.len),z=x*A.groupPadding,H=(x-2*z)/(g||1),ie=Math.min(A.maxPointWidth||L.len,f(A.pointWidth,H*(1-2*A.pointPadding))),O=(R.columnIndex||0)+(d?1:0);return R.columnMetrics={width:ie,offset:(H-ie)/2+(z+O*H-x/2)*(d?-1:1),paddedWidth:H,columnCount:g},R.columnMetrics}crispCol(R,A,L,b){let c=this.borderWidth,d=this.chart.inverted;return b=I(A+b,c,d)-(A=I(A,c,d)),this.options.crisp&&(L=I(R+L,c)-(R=I(R,c))),{x:R,y:A,width:L,height:b}}adjustForMissingColumns(R,A,L,b){var c;if(!L.isNull&&b.columnCount>1){let d=this.xAxis.series.filter(x=>x.visible).map(x=>x.index),v=0,h=0;N((c=this.xAxis.stacking)==null?void 0:c.stacks,x=>{if(typeof L.x=="number"){let z=x[L.x.toString()];if(z&&u(z.points[this.index])){let H=Object.keys(z.points).filter(ie=>!ie.match(",")&&z.points[ie]&&z.points[ie].length>1).map(parseFloat).filter(ie=>d.indexOf(ie)!==-1).sort((ie,O)=>O-ie);v=H.indexOf(this.index),h=H.length}}}),v=this.xAxis.reversed?h-1-v:v;let g=(h-1)*b.paddedWidth+A;R=(L.plotX||0)+g/2-A-v*b.paddedWidth}return R}translate(){let R=this,A=R.chart,L=R.options,b=R.dense=R.closestPointRange*R.xAxis.transA<2,c=R.borderWidth=f(L.borderWidth,b?0:1),d=R.xAxis,v=R.yAxis,h=L.threshold,g=f(L.minPointLength,5),x=R.getColumnMetrics(),z=x.width,H=R.pointXOffset=x.offset,ie=R.dataMin,O=R.dataMax,Q=R.translatedThreshold=v.getThreshold(h),ee=R.barW=Math.max(z,1+2*c);L.pointPadding&&(ee=Math.ceil(ee)),E.prototype.translate.apply(R),R.points.forEach(function($){let ce=f($.yBottom,Q),S=999+Math.abs(ce),P=$.plotX||0,B=k($.plotY,-S,v.len+S),q,m=Math.min(B,ce),T=Math.max(B,ce)-m,M=z,G=P+H,W=ee;g&&Math.abs(T)<g&&(T=g,q=!v.reversed&&!$.negative||v.reversed&&$.negative,y(h)&&y(O)&&$.y===h&&O<=h&&(v.min||0)<h&&(ie!==O||(v.max||0)<=h)&&(q=!q,$.negative=!$.negative),m=Math.abs(m-Q)>g?ce-g:Q-(q?g:0)),U($.options.pointWidth)&&(G-=Math.round(((M=W=Math.ceil($.options.pointWidth))-z)/2)),L.centerInCategory&&!L.stacking&&(G=R.adjustForMissingColumns(G,M,$,x)),$.barX=G,$.pointWidth=M,$.tooltipPos=A.inverted?[k(v.len+v.pos-A.plotLeft-B,v.pos-A.plotLeft,v.len+v.pos-A.plotLeft),d.len+d.pos-A.plotTop-G-W/2,T]:[d.left-A.plotLeft+G+W/2,k(B+v.pos-A.plotTop,v.pos-A.plotTop,v.len+v.pos-A.plotTop),T],$.shapeType=R.pointClass.prototype.shapeType||"roundedRect",$.shapeArgs=R.crispCol(G,$.isNull?Q:m,W,$.isNull?0:T)}),a(this,"afterColumnTranslate")}drawGraph(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")}pointAttribs(R,A){let L=this.options,b=this.pointAttrToOptions||{},c=b.stroke||"borderColor",d=b["stroke-width"]||"borderWidth",v,h,g,x=R&&R.color||this.color,z=R&&R[c]||L[c]||x,H=R&&R.options.dashStyle||L.dashStyle,ie=R&&R[d]||L[d]||this[d]||0,O=f(R&&R.opacity,L.opacity,1);R&&this.zones.length&&(h=R.getZone(),x=R.options.color||h&&(h.color||R.nonZonedColor)||this.color,h&&(z=h.borderColor||z,H=h.dashStyle||H,ie=h.borderWidth||ie)),A&&R&&(g=(v=w(L.states[A],R.options.states&&R.options.states[A]||{})).brightness,x=v.color||g!==void 0&&D(x).brighten(v.brightness).get()||x,z=v[c]||z,ie=v[d]||ie,H=v.dashStyle||H,O=f(v.opacity,O));let Q={fill:x,stroke:z,"stroke-width":ie,opacity:O};return H&&(Q.dashstyle=H),Q}drawPoints(R=this.points){let A,L=this,b=this.chart,c=L.options,d=b.renderer,v=c.animationLimit||250;R.forEach(function(h){let g=h.plotY,x=h.graphic,z=!!x,H=x&&b.pointCount<v?"animate":"attr";y(g)&&h.y!==null?(A=h.shapeArgs,x&&h.hasNewShapeType()&&(x=x.destroy()),L.enabledDataSorting&&(h.startXPos=L.xAxis.reversed?-(A&&A.width||0):L.xAxis.width),!x&&(h.graphic=x=d[h.shapeType](A).add(h.group||L.group),x&&L.enabledDataSorting&&b.hasRendered&&b.pointCount<v&&(x.attr({x:h.startXPos}),z=!0,H="animate")),x&&z&&x[H](w(A)),b.styledMode||x[H](L.pointAttribs(h,h.selected&&"select")).shadow(h.allowShadow!==!1&&c.shadow),x&&(x.addClass(h.getClassName(),!0),x.attr({visibility:h.visible?"inherit":"hidden"}))):x&&(h.graphic=x.destroy())})}drawTracker(R=this.points){let A,L=this,b=L.chart,c=b.pointer,d=function(v){let h=c==null?void 0:c.getPointFromEvent(v);c&&h&&L.options.enableMouseTracking&&(c.isDirectTouch=!0,h.onMouseOver(v))};R.forEach(function(v){A=u(v.dataLabels)?v.dataLabels:v.dataLabel?[v.dataLabel]:[],v.graphic&&(v.graphic.element.point=v),A.forEach(function(h){(h.div||h.element).point=v})}),L._hasTracking||(L.trackerGroups.forEach(function(v){L[v]&&(L[v].addClass("highcharts-tracker").on("mouseover",d).on("mouseout",function(h){c==null||c.onTrackerMouseOut(h)}).on("touchstart",d),!b.styledMode&&L.options.cursor&&L[v].css({cursor:L.options.cursor}))}),L._hasTracking=!0),a(this,"afterDrawTracker")}remove(){let R=this,A=R.chart;A.hasRendered&&A.series.forEach(function(L){L.type===R.type&&(L.isDirty=!0)}),E.prototype.remove.apply(R,arguments)}}return K.defaultOptions=w(E.defaultOptions,l),p(K.prototype,{directTouch:!0,getSymbol:V,negStacks:!0,trackerGroups:["group","dataLabelsGroup"]}),F.registerSeriesType("column",K),K}),n(i,"Core/Series/DataLabel.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Templating.js"],i["Core/Utilities.js"]],function(o,s,l){var j;let{getDeferredAnimation:E}=o,{format:F}=s,{defined:_,extend:C,fireEvent:D,isArray:V,isString:k,merge:I,objectEach:U,pick:p,pInt:a,splat:u}=l;return function(y){function w(){return L(this).some(c=>c==null?void 0:c.enabled)}function f(c,d,v,h,g){var B;let{chart:x,enabledDataSorting:z}=this,H=this.isCartesian&&x.inverted,ie=c.plotX,O=c.plotY,Q=v.rotation||0,ee=_(ie)&&_(O)&&x.isInsidePlot(ie,Math.round(O),{inverted:H,paneCoordinates:!0,series:this}),$=Q===0&&p(v.overflow,z?"none":"justify")==="justify",ce=this.visible&&c.visible!==!1&&_(ie)&&(c.series.forceDL||z&&!$||ee||p(v.inside,!!this.options.stacking)&&h&&x.isInsidePlot(ie,H?h.x+1:h.y+h.height-1,{inverted:H,paneCoordinates:!0,series:this})),S=c.pos();if(ce&&S){var P;let q=d.getBBox(),m=d.getBBox(void 0,0),T={right:1,center:.5}[v.align||0]||0,M={bottom:1,middle:.5}[v.verticalAlign||0]||0;if(h=C({x:S[0],y:Math.round(S[1]),width:0,height:0},h||{}),v.alignTo==="plotEdges"&&this.isCartesian&&(h[H?"x":"y"]=0,h[H?"width":"height"]=((B=this.yAxis)==null?void 0:B.len)||0),C(v,{width:q.width,height:q.height}),P=h,z&&this.xAxis&&!$&&this.setDataLabelStartPos(c,d,g,ee,P),d.align(I(v,{width:m.width,height:m.height}),!1,h,!1),d.alignAttr.x+=T*(m.width-q.width),d.alignAttr.y+=M*(m.height-q.height),d[d.placed?"animate":"attr"]({x:d.alignAttr.x+(q.width-m.width)/2,y:d.alignAttr.y+(q.height-m.height)/2,rotationOriginX:(d.width||0)/2,rotationOriginY:(d.height||0)/2}),$&&h.height>=0)this.justifyDataLabel(d,v,d.alignAttr,q,h,g);else if(p(v.crop,!0)){let{x:G,y:W}=d.alignAttr;ce=x.isInsidePlot(G,W,{paneCoordinates:!0,series:this})&&x.isInsidePlot(G+q.width-1,W+q.height-1,{paneCoordinates:!0,series:this})}v.shape&&!Q&&d[g?"attr":"animate"]({anchorX:S[0],anchorY:S[1]})}g&&z&&(d.placed=!1),ce||z&&!$?(d.show(),d.placed=!0):(d.hide(),d.placed=!1)}function N(){return this.plotGroup("dataLabelsGroup","data-labels",this.hasRendered?"inherit":"hidden",this.options.dataLabels.zIndex||6)}function K(c){let d=this.hasRendered||0,v=this.initDataLabelsGroup().attr({opacity:+d});return!d&&v&&(this.visible&&v.show(),this.options.animation?v.animate({opacity:1},c):v.attr({opacity:1})),v}function Y(c){var ce;let d;c=c||this.points;let v=this,h=v.chart,g=v.options,x=h.renderer,{backgroundColor:z,plotBackgroundColor:H}=h.options.chart,ie=x.getContrast(k(H)&&H||k(z)&&z||"#000000"),O=L(v),{animation:Q,defer:ee}=O[0],$=ee?E(h,Q,v):{defer:0,duration:0};D(this,"drawDataLabels"),(ce=v.hasDataLabels)!=null&&ce.call(v)&&(d=this.initDataLabels($),c.forEach(S=>{var q,m;let P=S.dataLabels||[];u(A(O,S.dlOptions||((q=S.options)==null?void 0:q.dataLabels))).forEach((T,M)=>{var de;let G=T.enabled&&(S.visible||S.dataLabelOnHidden)&&(!S.isNull||S.dataLabelOnNull)&&function(le,he){let fe=he.filter;if(fe){let me=fe.operator,ge=le[fe.property],xe=fe.value;return me===">"&&ge>xe||me==="<"&&ge<xe||me===">="&&ge>=xe||me==="<="&&ge<=xe||me==="=="&&ge==xe||me==="==="&&ge===xe||me==="!="&&ge!=xe||me==="!=="&&ge!==xe}return!0}(S,T),{backgroundColor:W,borderColor:J,distance:ne,style:oe={}}=T,se,ue,pe,Z,X={},te=P[M],re=!te,ae;if(G&&(ue=p(T[S.formatPrefix+"Format"],T.format),se=S.getLabelConfig(),pe=_(ue)?F(ue,se,h):(T[S.formatPrefix+"Formatter"]||T.formatter).call(se,T),Z=T.rotation,!h.styledMode&&(oe.color=p(T.color,oe.color,k(v.color)?v.color:void 0,"#000000"),oe.color==="contrast"?(W!=="none"&&(ae=W),S.contrastColor=x.getContrast(ae!=="auto"&&ae||S.color||v.color),oe.color=ae||!_(ne)&&T.inside||0>a(ne||0)||g.stacking?S.contrastColor:ie):delete S.contrastColor,g.cursor&&(oe.cursor=g.cursor)),X={r:T.borderRadius||0,rotation:Z,padding:T.padding,zIndex:1},h.styledMode||(X.fill=W==="auto"?S.color:W,X.stroke=J==="auto"?S.color:J,X["stroke-width"]=T.borderWidth),U(X,(le,he)=>{le===void 0&&delete X[he]})),!te||G&&_(pe)&&!!te.div==!!T.useHTML&&(te.rotation&&T.rotation||te.rotation===T.rotation)||(te=void 0,re=!0),G&&_(pe)&&(te?X.text=pe:(te=x.label(pe,0,0,T.shape,void 0,void 0,T.useHTML,void 0,"data-label")).addClass(" highcharts-data-label-color-"+S.colorIndex+" "+(T.className||"")+(T.useHTML?" highcharts-tracker":"")),te)){te.options=T,te.attr(X),h.styledMode||te.css(oe).shadow(T.shadow);let le=T[S.formatPrefix+"TextPath"]||T.textPath;le&&!T.useHTML&&(te.setTextPath(((de=S.getDataLabelPath)==null?void 0:de.call(S,te))||S.graphic,le),S.dataLabelPath&&!le.enabled&&(S.dataLabelPath=S.dataLabelPath.destroy())),te.added||te.add(d),v.alignDataLabel(S,te,T,void 0,re),te.isActive=!0,P[M]&&P[M]!==te&&P[M].destroy(),P[M]=te}});let B=P.length;for(;B--;)P[B]&&P[B].isActive?P[B].isActive=!1:((m=P[B])==null||m.destroy(),P.splice(B,1));S.dataLabel=P[0],S.dataLabels=P})),D(this,"afterDrawDataLabels")}function R(c,d,v,h,g,x){let z=this.chart,H=d.align,ie=d.verticalAlign,O=c.box?0:c.padding||0,Q=z.inverted?this.yAxis:this.xAxis,ee=Q?Q.left-z.plotLeft:0,$=z.inverted?this.xAxis:this.yAxis,ce=$?$.top-z.plotTop:0,{x:S=0,y:P=0}=d,B,q;return(B=(v.x||0)+O+ee)<0&&(H==="right"&&S>=0?(d.align="left",d.inside=!0):S-=B,q=!0),(B=(v.x||0)+h.width-O+ee)>z.plotWidth&&(H==="left"&&S<=0?(d.align="right",d.inside=!0):S+=z.plotWidth-B,q=!0),(B=v.y+O+ce)<0&&(ie==="bottom"&&P>=0?(d.verticalAlign="top",d.inside=!0):P-=B,q=!0),(B=(v.y||0)+h.height-O+ce)>z.plotHeight&&(ie==="top"&&P<=0?(d.verticalAlign="bottom",d.inside=!0):P+=z.plotHeight-B,q=!0),q&&(d.x=S,d.y=P,c.placed=!x,c.align(d,void 0,g)),q}function A(c,d){let v=[],h;if(V(c)&&!V(d))v=c.map(function(g){return I(g,d)});else if(V(d)&&!V(c))v=d.map(function(g){return I(c,g)});else if(V(c)||V(d)){if(V(c)&&V(d))for(h=Math.max(c.length,d.length);h--;)v[h]=I(c[h],d[h])}else v=I(c,d);return v}function L(c){var v,h;let d=c.chart.options.plotOptions;return u(A(A((v=d==null?void 0:d.series)==null?void 0:v.dataLabels,(h=d==null?void 0:d[c.type])==null?void 0:h.dataLabels),c.options.dataLabels))}function b(c,d,v,h,g){let x=this.chart,z=x.inverted,H=this.xAxis,ie=H.reversed,O=((z?d.height:d.width)||0)/2,Q=c.pointWidth,ee=Q?Q/2:0;d.startXPos=z?g.x:ie?-O-ee:H.width-O+ee,d.startYPos=z?ie?this.yAxis.height-O+ee:-O-ee:g.y,h?d.visibility==="hidden"&&(d.show(),d.attr({opacity:0}).animate({opacity:1})):d.attr({opacity:1}).animate({opacity:0},void 0,d.hide),x.hasRendered&&(v&&d.attr({x:d.startXPos,y:d.startYPos}),d.placed=!0)}y.compose=function(c){let d=c.prototype;d.initDataLabels||(d.initDataLabels=K,d.initDataLabelsGroup=N,d.alignDataLabel=f,d.drawDataLabels=Y,d.justifyDataLabel=R,d.setDataLabelStartPos=b,d.hasDataLabels=w)}}(j||(j={})),j}),n(i,"Series/Column/ColumnDataLabel.js",[i["Core/Series/DataLabel.js"],i["Core/Globals.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(o,s,l,j){var E;let{composed:F}=s,{series:_}=l,{merge:C,pick:D,pushUnique:V}=j;return function(k){function I(U,p,a,u,y){let w=this.chart.inverted,f=U.series,N=(f.xAxis?f.xAxis.len:this.chart.plotSizeX)||0,K=(f.yAxis?f.yAxis.len:this.chart.plotSizeY)||0,Y=U.dlBox||U.shapeArgs,R=D(U.below,U.plotY>D(this.translatedThreshold,K)),A=D(a.inside,!!this.options.stacking);if(Y){if(u=C(Y),!(a.overflow==="allow"&&a.crop===!1)){u.y<0&&(u.height+=u.y,u.y=0);let L=u.y+u.height-K;L>0&&L<u.height-1&&(u.height-=L)}w&&(u={x:K-u.y-u.height,y:N-u.x-u.width,width:u.height,height:u.width}),A||(w?(u.x+=R?0:u.width,u.width=0):(u.y+=R?u.height:0,u.height=0))}a.align=D(a.align,!w||A?"center":R?"right":"left"),a.verticalAlign=D(a.verticalAlign,w||A?"middle":R?"top":"bottom"),_.prototype.alignDataLabel.call(this,U,p,a,u,y),a.inside&&U.contrastColor&&p.css({color:U.contrastColor})}k.compose=function(U){o.compose(_),V(F,"ColumnDataLabel")&&(U.prototype.alignDataLabel=I)}}(E||(E={})),E}),n(i,"Series/Bar/BarSeries.js",[i["Series/Column/ColumnSeries.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(o,s,l){let{extend:j,merge:E}=l;class F extends o{}return F.defaultOptions=E(o.defaultOptions,{}),j(F.prototype,{inverted:!0}),s.registerSeriesType("bar",F),F}),n(i,"Series/Scatter/ScatterSeriesDefaults.js",[],function(){return{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}}}),n(i,"Series/Scatter/ScatterSeries.js",[i["Series/Scatter/ScatterSeriesDefaults.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(o,s,l){let{column:j,line:E}=s.seriesTypes,{addEvent:F,extend:_,merge:C}=l;class D extends E{applyJitter(){let k=this,I=this.options.jitter,U=this.points.length;I&&this.points.forEach(function(p,a){["x","y"].forEach(function(u,y){if(I[u]&&!p.isNull){let w=`plot${u.toUpperCase()}`,f=k[`${u}Axis`],N=I[u]*f.transA;if(f&&!f.logarithmic){let K=Math.max(0,(p[w]||0)-N),Y=Math.min(f.len,(p[w]||0)+N);p[w]=K+(Y-K)*function(R){let A=1e4*Math.sin(R);return A-Math.floor(A)}(a+y*U),u==="x"&&(p.clientX=p.plotX)}}})})}drawGraph(){this.options.lineWidth?super.drawGraph():this.graph&&(this.graph=this.graph.destroy())}}return D.defaultOptions=C(E.defaultOptions,o),_(D.prototype,{drawTracker:j.prototype.drawTracker,sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"]}),F(D,"afterTranslate",function(){this.applyJitter()}),s.registerSeriesType("scatter",D),D}),n(i,"Series/CenteredUtilities.js",[i["Core/Globals.js"],i["Core/Series/Series.js"],i["Core/Utilities.js"]],function(o,s,l){var j,E;let{deg2rad:F}=o,{fireEvent:_,isNumber:C,pick:D,relativeLength:V}=l;return(E=j||(j={})).getCenter=function(){let k=this.options,I=this.chart,U=2*(k.slicedOffset||0),p=I.plotWidth-2*U,a=I.plotHeight-2*U,u=k.center,y=Math.min(p,a),w=k.thickness,f,N=k.size,K=k.innerSize||0,Y,R;typeof N=="string"&&(N=parseFloat(N)),typeof K=="string"&&(K=parseFloat(K));let A=[D(u[0],"50%"),D(u[1],"50%"),D(N&&N<0?void 0:k.size,"100%"),D(K&&K<0?void 0:k.innerSize||0,"0%")];for(!I.angular||this instanceof s||(A[3]=0),Y=0;Y<4;++Y)R=A[Y],f=Y<2||Y===2&&/%$/.test(R),A[Y]=V(R,[p,a,y,A[2]][Y])+(f?U:0);return A[3]>A[2]&&(A[3]=A[2]),C(w)&&2*w<A[2]&&w>0&&(A[3]=A[2]-2*w),_(this,"afterGetCenter",{positions:A}),A},E.getStartAndEndRadians=function(k,I){let U=C(k)?k:0,p=C(I)&&I>U&&I-U<360?I:U+360;return{start:F*(U+-90),end:F*(p+-90)}},j}),n(i,"Series/Pie/PiePoint.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Series/Point.js"],i["Core/Utilities.js"]],function(o,s,l){let{setAnimation:j}=o,{addEvent:E,defined:F,extend:_,isNumber:C,pick:D,relativeLength:V}=l;class k extends s{getConnectorPath(U){let p=U.dataLabelPosition,a=U.options||{},u=a.connectorShape,y=this.connectorShapes[u]||u;return p&&y.call(this,{...p.computed,alignment:p.alignment},p.connectorPosition,a)||[]}getTranslate(){return this.sliced&&this.slicedTranslation||{translateX:0,translateY:0}}haloPath(U){let p=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(p.x,p.y,p.r+U,p.r+U,{innerR:p.r-1,start:p.start,end:p.end,borderRadius:p.borderRadius})}constructor(U,p,a){super(U,p,a),this.half=0,this.name??(this.name="Slice");let u=y=>{this.slice(y.type==="select")};E(this,"select",u),E(this,"unselect",u)}isValid(){return C(this.y)&&this.y>=0}setVisible(U,p=!0){U!==this.visible&&this.update({visible:U??!this.visible},p,void 0,!1)}slice(U,p,a){let u=this.series;j(a,u.chart),p=D(p,!0),this.sliced=this.options.sliced=U=F(U)?U:!this.sliced,u.options.data[u.data.indexOf(this)]=this.options,this.graphic&&this.graphic.animate(this.getTranslate())}}return _(k.prototype,{connectorShapes:{fixedOffset:function(I,U,p){let a=U.breakAt,u=U.touchingSliceAt,y=p.softConnector?["C",I.x+(I.alignment==="left"?-5:5),I.y,2*a.x-u.x,2*a.y-u.y,a.x,a.y]:["L",a.x,a.y];return[["M",I.x,I.y],y,["L",u.x,u.y]]},straight:function(I,U){let p=U.touchingSliceAt;return[["M",I.x,I.y],["L",p.x,p.y]]},crookedLine:function(I,U,p){let{breakAt:a,touchingSliceAt:u}=U,{series:y}=this,[w,f,N]=y.center,K=N/2,{plotLeft:Y,plotWidth:R}=y.chart,A=I.alignment==="left",{x:L,y:b}=I,c=a.x;if(p.crookDistance){let v=V(p.crookDistance,1);c=A?w+K+(R+Y-w-K)*(1-v):Y+(w-K)*v}else c=w+(f-b)*Math.tan((this.angle||0)-Math.PI/2);let d=[["M",L,b]];return(A?c<=L&&c>=a.x:c>=L&&c<=a.x)&&d.push(["L",c,b]),d.push(["L",a.x,a.y],["L",u.x,u.y]),d}}}),k}),n(i,"Series/Pie/PieSeriesDefaults.js",[],function(){return{borderRadius:3,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{connectorPadding:5,connectorShape:"crookedLine",crookDistance:void 0,distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,lineWidth:void 0,states:{hover:{brightness:.1}}}}),n(i,"Series/Pie/PieSeries.js",[i["Series/CenteredUtilities.js"],i["Series/Column/ColumnSeries.js"],i["Core/Globals.js"],i["Series/Pie/PiePoint.js"],i["Series/Pie/PieSeriesDefaults.js"],i["Core/Series/Series.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Renderer/SVG/Symbols.js"],i["Core/Utilities.js"]],function(o,s,l,j,E,F,_,C,D){let{getStartAndEndRadians:V}=o,{noop:k}=l,{clamp:I,extend:U,fireEvent:p,merge:a,pick:u}=D;class y extends F{animate(f){let N=this,K=N.points,Y=N.startAngleRad;f||K.forEach(function(R){let A=R.graphic,L=R.shapeArgs;A&&L&&(A.attr({r:u(R.startR,N.center&&N.center[3]/2),start:Y,end:Y}),A.animate({r:L.r,start:L.start,end:L.end},N.options.animation))})}drawEmpty(){let f,N,K=this.startAngleRad,Y=this.endAngleRad,R=this.options;this.total===0&&this.center?(f=this.center[0],N=this.center[1],this.graph||(this.graph=this.chart.renderer.arc(f,N,this.center[1]/2,0,K,Y).addClass("highcharts-empty-series").add(this.group)),this.graph.attr({d:C.arc(f,N,this.center[2]/2,0,{start:K,end:Y,innerR:this.center[3]/2})}),this.chart.styledMode||this.graph.attr({"stroke-width":R.borderWidth,fill:R.fillColor||"none",stroke:R.color||"#cccccc"})):this.graph&&(this.graph=this.graph.destroy())}drawPoints(){let f=this.chart.renderer;this.points.forEach(function(N){N.graphic&&N.hasNewShapeType()&&(N.graphic=N.graphic.destroy()),N.graphic||(N.graphic=f[N.shapeType](N.shapeArgs).add(N.series.group),N.delayedRendering=!0)})}generatePoints(){super.generatePoints(),this.updateTotals()}getX(f,N,K,Y){let R=this.center,A=this.radii?this.radii[K.index]||0:R[2]/2,L=Y.dataLabelPosition,b=(L==null?void 0:L.distance)||0,c=Math.asin(I((f-R[1])/(A+b),-1,1));return R[0]+Math.cos(c)*(A+b)*(N?-1:1)+(b>0?(N?-1:1)*(Y.padding||0):0)}hasData(){return!!this.processedXData.length}redrawPoints(){let f,N,K,Y,R=this,A=R.chart;this.drawEmpty(),R.group&&!A.styledMode&&R.group.shadow(R.options.shadow),R.points.forEach(function(L){let b={};N=L.graphic,!L.isNull&&N?(Y=L.shapeArgs,f=L.getTranslate(),A.styledMode||(K=R.pointAttribs(L,L.selected&&"select")),L.delayedRendering?(N.setRadialReference(R.center).attr(Y).attr(f),A.styledMode||N.attr(K).attr({"stroke-linejoin":"round"}),L.delayedRendering=!1):(N.setRadialReference(R.center),A.styledMode||a(!0,b,K),a(!0,b,Y,f),N.animate(b)),N.attr({visibility:L.visible?"inherit":"hidden"}),N.addClass(L.getClassName(),!0)):N&&(L.graphic=N.destroy())})}sortByAngle(f,N){f.sort(function(K,Y){return K.angle!==void 0&&(Y.angle-K.angle)*N})}translate(f){p(this,"translate"),this.generatePoints();let N=this.options,K=N.slicedOffset,Y=V(N.startAngle,N.endAngle),R=this.startAngleRad=Y.start,A=(this.endAngleRad=Y.end)-R,L=this.points,b=N.ignoreHiddenPoint,c=L.length,d,v,h,g,x,z,H,ie=0;for(f||(this.center=f=this.getCenter()),z=0;z<c;z++){H=L[z],d=R+ie*A,H.isValid()&&(!b||H.visible)&&(ie+=H.percentage/100),v=R+ie*A;let O={x:f[0],y:f[1],r:f[2]/2,innerR:f[3]/2,start:Math.round(1e3*d)/1e3,end:Math.round(1e3*v)/1e3};H.shapeType="arc",H.shapeArgs=O,(h=(v+d)/2)>1.5*Math.PI?h-=2*Math.PI:h<-Math.PI/2&&(h+=2*Math.PI),H.slicedTranslation={translateX:Math.round(Math.cos(h)*K),translateY:Math.round(Math.sin(h)*K)},g=Math.cos(h)*f[2]/2,x=Math.sin(h)*f[2]/2,H.tooltipPos=[f[0]+.7*g,f[1]+.7*x],H.half=h<-Math.PI/2||h>Math.PI/2?1:0,H.angle=h}p(this,"afterTranslate")}updateTotals(){let f=this.points,N=f.length,K=this.options.ignoreHiddenPoint,Y,R,A=0;for(Y=0;Y<N;Y++)(R=f[Y]).isValid()&&(!K||R.visible)&&(A+=R.y);for(Y=0,this.total=A;Y<N;Y++)(R=f[Y]).percentage=A>0&&(R.visible||!K)?R.y/A*100:0,R.total=A}}return y.defaultOptions=a(F.defaultOptions,E),U(y.prototype,{axisTypes:[],directTouch:!0,drawGraph:void 0,drawTracker:s.prototype.drawTracker,getCenter:o.getCenter,getSymbol:k,invertible:!1,isCartesian:!1,noSharedTooltip:!0,pointAttribs:s.prototype.pointAttribs,pointClass:j,requireSorting:!1,searchPoint:k,trackerGroups:["group","dataLabelsGroup"]}),_.registerSeriesType("pie",y),y}),n(i,"Series/Pie/PieDataLabel.js",[i["Core/Series/DataLabel.js"],i["Core/Globals.js"],i["Core/Renderer/RendererUtilities.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(o,s,l,j,E){var F;let{composed:_,noop:C}=s,{distribute:D}=l,{series:V}=j,{arrayMax:k,clamp:I,defined:U,pick:p,pushUnique:a,relativeLength:u}=E;return function(y){let w={radialDistributionY:function(R,A){var L;return(((L=A.dataLabelPosition)==null?void 0:L.top)||0)+R.distributeBox.pos},radialDistributionX:function(R,A,L,b,c){let d=c.dataLabelPosition;return R.getX(L<((d==null?void 0:d.top)||0)+2||L>((d==null?void 0:d.bottom)||0)-2?b:L,A.half,A,c)},justify:function(R,A,L,b){var c;return b[0]+(R.half?-1:1)*(L+(((c=A.dataLabelPosition)==null?void 0:c.distance)||0))},alignToPlotEdges:function(R,A,L,b){let c=R.getBBox().width;return A?c+b:L-c-b},alignToConnectors:function(R,A,L,b){let c=0,d;return R.forEach(function(v){(d=v.dataLabel.getBBox().width)>c&&(c=d)}),A?c+b:L-c-b}};function f(R,A){let{center:L,options:b}=this,c=L[2]/2,d=R.angle||0,v=Math.cos(d),h=Math.sin(d),g=L[0]+v*c,x=L[1]+h*c,z=Math.min((b.slicedOffset||0)+(b.borderWidth||0),A/5);return{natural:{x:g+v*A,y:x+h*A},computed:{},alignment:A<0?"center":R.half?"right":"left",connectorPosition:{breakAt:{x:g+v*z,y:x+h*z},touchingSliceAt:{x:g,y:x}},distance:A}}function N(){var ce;let R=this,A=R.points,L=R.chart,b=L.plotWidth,c=L.plotHeight,d=L.plotLeft,v=Math.round(L.chartWidth/3),h=R.center,g=h[2]/2,x=h[1],z=[[],[]],H=[0,0,0,0],ie=R.dataLabelPositioners,O,Q,ee,$=0;R.visible&&((ce=R.hasDataLabels)!=null&&ce.call(R))&&(A.forEach(S=>{(S.dataLabels||[]).forEach(P=>{P.shortened&&(P.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),P.shortened=!1)})}),V.prototype.drawDataLabels.apply(R),A.forEach(S=>{(S.dataLabels||[]).forEach((P,B)=>{var M;let q=h[2]/2,m=P.options,T=u((m==null?void 0:m.distance)||0,q);B===0&&z[S.half].push(S),!U((M=m==null?void 0:m.style)==null?void 0:M.width)&&P.getBBox().width>v&&(P.css({width:Math.round(.7*v)+"px"}),P.shortened=!0),P.dataLabelPosition=this.getDataLabelPosition(S,T),$=Math.max($,T)})}),z.forEach((S,P)=>{let B=S.length,q=[],m,T,M=0,G;B&&(R.sortByAngle(S,P-.5),$>0&&(m=Math.max(0,x-g-$),T=Math.min(x+g+$,L.plotHeight),S.forEach(W=>{(W.dataLabels||[]).forEach(J=>{var oe;let ne=J.dataLabelPosition;ne&&ne.distance>0&&(ne.top=Math.max(0,x-g-ne.distance),ne.bottom=Math.min(x+g+ne.distance,L.plotHeight),M=J.getBBox().height||21,W.distributeBox={target:(((oe=J.dataLabelPosition)==null?void 0:oe.natural.y)||0)-ne.top+M/2,size:M,rank:W.y},q.push(W.distributeBox))})}),D(q,G=T+M-m,G/5)),S.forEach(W=>{(W.dataLabels||[]).forEach(J=>{let ne=J.options||{},oe=W.distributeBox,se=J.dataLabelPosition,ue=(se==null?void 0:se.natural.y)||0,pe=ne.connectorPadding||0,Z=0,X=ue,te="inherit";if(se){if(q&&U(oe)&&se.distance>0&&(oe.pos===void 0?te="hidden":(ee=oe.size,X=ie.radialDistributionY(W,J))),ne.justify)Z=ie.justify(W,J,g,h);else switch(ne.alignTo){case"connectors":Z=ie.alignToConnectors(S,P,b,d);break;case"plotEdges":Z=ie.alignToPlotEdges(J,P,b,d);break;default:Z=ie.radialDistributionX(R,W,X,ue,J)}if(se.attribs={visibility:te,align:se.alignment},se.posAttribs={x:Z+(ne.x||0)+({left:pe,right:-pe}[se.alignment]||0),y:X+(ne.y||0)-J.getBBox().height/2},se.computed.x=Z,se.computed.y=X,p(ne.crop,!0)){let re;Z-(Q=J.getBBox().width)<pe&&P===1?(re=Math.round(Q-Z+pe),H[3]=Math.max(re,H[3])):Z+Q>b-pe&&P===0&&(re=Math.round(Z+Q-b+pe),H[1]=Math.max(re,H[1])),X-ee/2<0?H[0]=Math.max(Math.round(-X+ee/2),H[0]):X+ee/2>c&&(H[2]=Math.max(Math.round(X+ee/2-c),H[2])),se.sideOverflow=re}}})}))}),(k(H)===0||this.verifyDataLabelOverflow(H))&&(this.placeDataLabels(),this.points.forEach(S=>{(S.dataLabels||[]).forEach(P=>{var T;let{connectorColor:B,connectorWidth:q=1}=P.options||{},m=P.dataLabelPosition;if(q){let M;O=P.connector,m&&m.distance>0?(M=!O,O||(P.connector=O=L.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+S.colorIndex+(S.className?" "+S.className:"")).add(R.dataLabelsGroup)),L.styledMode||O.attr({"stroke-width":q,stroke:B||S.color||"#666666"}),O[M?"attr":"animate"]({d:S.getConnectorPath(P)}),O.attr({visibility:(T=m.attribs)==null?void 0:T.visibility})):O&&(P.connector=O.destroy())}})})))}function K(){this.points.forEach(R=>{(R.dataLabels||[]).forEach(A=>{var b;let L=A.dataLabelPosition;L?(L.sideOverflow&&(A.css({width:Math.max(A.getBBox().width-L.sideOverflow,0)+"px",textOverflow:(((b=A.options)==null?void 0:b.style)||{}).textOverflow||"ellipsis"}),A.shortened=!0),A.attr(L.attribs),A[A.moved?"animate":"attr"](L.posAttribs),A.moved=!0):A&&A.attr({y:-9999})}),delete R.distributeBox},this)}function Y(R){let A=this.center,L=this.options,b=L.center,c=L.minSize||80,d=c,v=L.size!==null;return!v&&(b[0]!==null?d=Math.max(A[2]-Math.max(R[1],R[3]),c):(d=Math.max(A[2]-R[1]-R[3],c),A[0]+=(R[3]-R[1])/2),b[1]!==null?d=I(d,c,A[2]-Math.max(R[0],R[2])):(d=I(d,c,A[2]-R[0]-R[2]),A[1]+=(R[0]-R[2])/2),d<A[2]?(A[2]=d,A[3]=Math.min(L.thickness?Math.max(0,d-2*L.thickness):Math.max(0,u(L.innerSize||0,d)),d),this.translate(A),this.drawDataLabels&&this.drawDataLabels()):v=!0),v}y.compose=function(R){if(o.compose(V),a(_,"PieDataLabel")){let A=R.prototype;A.dataLabelPositioners=w,A.alignDataLabel=C,A.drawDataLabels=N,A.getDataLabelPosition=f,A.placeDataLabels=K,A.verifyDataLabelOverflow=Y}}}(F||(F={})),F}),n(i,"Extensions/OverlappingDataLabels.js",[i["Core/Utilities.js"]],function(o){let{addEvent:s,fireEvent:l,objectEach:j,pick:E}=o;function F(D){let V=D.length,k=(w,f)=>!(f.x>=w.x+w.width||f.x+f.width<=w.x||f.y>=w.y+w.height||f.y+f.height<=w.y),I,U,p,a,u,y=!1;for(let w=0;w<V;w++)(I=D[w])&&(I.oldOpacity=I.opacity,I.newOpacity=1,I.absoluteBox=function(f){var N,K;if(f&&(!f.alignAttr||f.placed)){let Y=f.box?0:f.padding||0,R=f.alignAttr||{x:f.attr("x"),y:f.attr("y")},A=f.getBBox();return f.width=A.width,f.height=A.height,{x:R.x+(((N=f.parentGroup)==null?void 0:N.translateX)||0)+Y,y:R.y+(((K=f.parentGroup)==null?void 0:K.translateY)||0)+Y,width:(f.width||0)-2*Y,height:(f.height||0)-2*Y}}}(I));D.sort((w,f)=>(f.labelrank||0)-(w.labelrank||0));for(let w=0;w<V;++w){a=(U=D[w])&&U.absoluteBox;for(let f=w+1;f<V;++f)u=(p=D[f])&&p.absoluteBox,a&&u&&U!==p&&U.newOpacity!==0&&p.newOpacity!==0&&U.visibility!=="hidden"&&p.visibility!=="hidden"&&k(a,u)&&((U.labelrank<p.labelrank?U:p).newOpacity=0)}for(let w of D)_(w,this)&&(y=!0);y&&l(this,"afterHideAllOverlappingLabels")}function _(D,V){let k,I,U=!1;return D&&(I=D.newOpacity,D.oldOpacity!==I&&(D.hasClass("highcharts-data-label")?(D[I?"removeClass":"addClass"]("highcharts-data-label-hidden"),k=function(){V.styledMode||D.css({pointerEvents:I?"auto":"none"})},U=!0,D[D.isOld?"animate":"attr"]({opacity:I},void 0,k),l(V,"afterHideOverlappingLabel")):D.attr({opacity:I})),D.isOld=!0),U}function C(){var k;let D=this,V=[];for(let I of D.labelCollectors||[])V=V.concat(I());for(let I of D.yAxis||[])I.stacking&&I.options.stackLabels&&!I.options.stackLabels.allowOverlap&&j(I.stacking.stacks,U=>{j(U,p=>{p.label&&V.push(p.label)})});for(let I of D.series||[])if(I.visible&&((k=I.hasDataLabels)!=null&&k.call(I))){let U=p=>{for(let a of p)a.visible&&(a.dataLabels||[]).forEach(u=>{var w;let y=u.options||{};u.labelrank=E(y.labelrank,a.labelrank,(w=a.shapeArgs)==null?void 0:w.height),y.allowOverlap??Number(y.distance)>0?(u.oldOpacity=u.opacity,u.newOpacity=1,_(u,D)):V.push(u)})};U(I.nodes||[]),U(I.points)}this.hideOverlappingLabels(V)}return{compose:function(D){let V=D.prototype;V.hideOverlappingLabels||(V.hideOverlappingLabels=F,s(D,"render",C))}}}),n(i,"Extensions/BorderRadius.js",[i["Core/Defaults.js"],i["Core/Globals.js"],i["Core/Utilities.js"]],function(o,s,l){let{defaultOptions:j}=o,{noop:E}=s,{addEvent:F,extend:_,isObject:C,merge:D,relativeLength:V}=l,k={radius:0,scope:"stack",where:void 0},I=E,U=E;function p(f,N,K,Y,R={}){let A=I(f,N,K,Y,R),{innerR:L=0,r:b=K,start:c=0,end:d=0}=R;if(R.open||!R.borderRadius)return A;let v=d-c,h=Math.sin(v/2),g=Math.max(Math.min(V(R.borderRadius||0,b-L),(b-L)/2,b*h/(1+h)),0),x=Math.min(g,v/Math.PI*2*L),z=A.length-1;for(;z--;)(function(H,ie,O){let Q,ee,$,ce=H[ie],S=H[ie+1];if(S[0]==="Z"&&(S=H[0]),(ce[0]==="M"||ce[0]==="L")&&S[0]==="A"?(Q=ce,ee=S,$=!0):ce[0]==="A"&&(S[0]==="M"||S[0]==="L")&&(Q=S,ee=ce),Q&&ee&&ee.params){let P=ee[1],B=ee[5],q=ee.params,{start:m,end:T,cx:M,cy:G}=q,W=B?P-O:P+O,J=W?Math.asin(O/W):0,ne=B?J:-J,oe=Math.cos(J)*W;$?(q.start=m+ne,Q[1]=M+oe*Math.cos(m),Q[2]=G+oe*Math.sin(m),H.splice(ie+1,0,["A",O,O,0,0,1,M+P*Math.cos(q.start),G+P*Math.sin(q.start)])):(q.end=T-ne,ee[6]=M+P*Math.cos(q.end),ee[7]=G+P*Math.sin(q.end),H.splice(ie+1,0,["A",O,O,0,0,1,M+oe*Math.cos(T),G+oe*Math.sin(T)])),ee[4]=Math.abs(q.end-q.start)<Math.PI?0:1}})(A,z,z>1?x:g);return A}function a(){var f,N;if(this.options.borderRadius&&!(this.chart.is3d&&this.chart.is3d())){let{options:K,yAxis:Y}=this,R=K.stacking==="percent",A=(N=(f=j.plotOptions)==null?void 0:f[this.type])==null?void 0:N.borderRadius,L=u(K.borderRadius,C(A)?A:{}),b=Y.options.reversed;for(let c of this.points){let{shapeArgs:d}=c;if(c.shapeType==="roundedRect"&&d){let{width:v=0,height:h=0,y:g=0}=d,x=g,z=h;if(L.scope==="stack"&&c.stackTotal){let Q=Y.translate(R?100:c.stackTotal,!1,!0,!1,!0),ee=Y.translate(K.threshold||0,!1,!0,!1,!0),$=this.crispCol(0,Math.min(Q,ee),0,Math.abs(Q-ee));x=$.y,z=$.height}let H=(c.negative?-1:1)*(b?-1:1)==-1,ie=L.where;!ie&&this.is("waterfall")&&Math.abs((c.yBottom||0)-(this.translatedThreshold||0))>this.borderWidth&&(ie="all"),ie||(ie="end");let O=Math.min(V(L.radius,v),v/2,ie==="all"?h/2:1/0)||0;ie==="end"&&(H&&(x-=O),z+=O),_(d,{brBoxHeight:z,brBoxY:x,r:O})}}}}function u(f,N){return C(f)||(f={radius:f||0}),D(k,N,f)}function y(){let f=u(this.options.borderRadius);for(let N of this.points){let K=N.shapeArgs;K&&(K.borderRadius=V(f.radius,(K.r||0)-(K.innerR||0)))}}function w(f,N,K,Y,R={}){let A=U(f,N,K,Y,R),{r:L=0,brBoxHeight:b=Y,brBoxY:c=N}=R,d=N-c,v=c+b-(N+Y),h=d-L>-.1?0:L,g=v-L>-.1?0:L,x=Math.max(h&&d,0),z=Math.max(g&&v,0),H=[f+h,N],ie=[f+K-h,N],O=[f+K,N+h],Q=[f+K,N+Y-g],ee=[f+K-g,N+Y],$=[f+g,N+Y],ce=[f,N+Y-g],S=[f,N+h],P=(B,q)=>Math.sqrt(Math.pow(B,2)-Math.pow(q,2));if(x){let B=P(h,h-x);H[0]-=B,ie[0]+=B,O[1]=S[1]=N+h-x}if(Y<h-x){let B=P(h,h-x-Y);O[0]=Q[0]=f+K-h+B,ee[0]=Math.min(O[0],ee[0]),$[0]=Math.max(Q[0],$[0]),ce[0]=S[0]=f+h-B,O[1]=S[1]=N+Y}if(z){let B=P(g,g-z);ee[0]+=B,$[0]-=B,Q[1]=ce[1]=N+Y-g+z}if(Y<g-z){let B=P(g,g-z-Y);O[0]=Q[0]=f+K-g+B,ie[0]=Math.min(O[0],ie[0]),H[0]=Math.max(Q[0],H[0]),ce[0]=S[0]=f+g-B,Q[1]=ce[1]=N}return A.length=0,A.push(["M",...H],["L",...ie],["A",h,h,0,0,1,...O],["L",...Q],["A",g,g,0,0,1,...ee],["L",...$],["A",g,g,0,0,1,...ce],["L",...S],["A",h,h,0,0,1,...H],["Z"]),A}return{compose:function(f,N,K){let Y=f.types.pie;if(!N.symbolCustomAttribs.includes("borderRadius")){let R=K.prototype.symbols;F(f,"afterColumnTranslate",a,{order:9}),F(Y,"afterTranslate",y),N.symbolCustomAttribs.push("borderRadius","brBoxHeight","brBoxY"),I=R.arc,U=R.roundedRect,R.arc=p,R.roundedRect=w}},optionsToObject:u}}),n(i,"Core/Responsive.js",[i["Core/Utilities.js"]],function(o){var s;let{diffObjects:l,extend:j,find:E,merge:F,pick:_,uniqueKey:C}=o;return function(D){function V(I,U){let p=I.condition;(p.callback||function(){return this.chartWidth<=_(p.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=_(p.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=_(p.minWidth,0)&&this.chartHeight>=_(p.minHeight,0)}).call(this)&&U.push(I._id)}function k(I,U){let p=this.options.responsive,a=this.currentResponsive,u=[],y;!U&&p&&p.rules&&p.rules.forEach(N=>{N._id===void 0&&(N._id=C()),this.matchResponsiveRule(N,u)},this);let w=F(...u.map(N=>E((p||{}).rules||[],K=>K._id===N)).map(N=>N&&N.chartOptions));w.isResponsiveOptions=!0,u=u.toString()||void 0;let f=a&&a.ruleIds;u!==f&&(a&&this.update(a.undoOptions,I,!0),u?((y=l(w,this.options,!0,this.collectionsWithUpdate)).isResponsiveOptions=!0,this.currentResponsive={ruleIds:u,mergedOptions:w,undoOptions:y},this.update(w,I,!0)):this.currentResponsive=void 0)}D.compose=function(I){let U=I.prototype;return U.matchResponsiveRule||j(U,{matchResponsiveRule:V,setResponsive:k}),I}}(s||(s={})),s}),n(i,"masters/highcharts.src.js",[i["Core/Globals.js"],i["Core/Utilities.js"],i["Core/Defaults.js"],i["Core/Animation/Fx.js"],i["Core/Animation/AnimationUtilities.js"],i["Core/Renderer/HTML/AST.js"],i["Core/Templating.js"],i["Core/Renderer/RendererRegistry.js"],i["Core/Renderer/RendererUtilities.js"],i["Core/Renderer/SVG/SVGElement.js"],i["Core/Renderer/SVG/SVGRenderer.js"],i["Core/Renderer/HTML/HTMLElement.js"],i["Core/Axis/Axis.js"],i["Core/Axis/DateTimeAxis.js"],i["Core/Axis/LogarithmicAxis.js"],i["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],i["Core/Axis/Tick.js"],i["Core/Tooltip.js"],i["Core/Series/Point.js"],i["Core/Pointer.js"],i["Core/Legend/Legend.js"],i["Core/Legend/LegendSymbol.js"],i["Core/Chart/Chart.js"],i["Extensions/ScrollablePlotArea.js"],i["Core/Axis/Stacking/StackingAxis.js"],i["Core/Axis/Stacking/StackItem.js"],i["Core/Series/Series.js"],i["Core/Series/SeriesRegistry.js"],i["Series/Column/ColumnDataLabel.js"],i["Series/Pie/PieDataLabel.js"],i["Core/Series/DataLabel.js"],i["Extensions/OverlappingDataLabels.js"],i["Extensions/BorderRadius.js"],i["Core/Responsive.js"],i["Core/Color/Color.js"],i["Core/Time.js"]],function(o,s,l,j,E,F,_,C,D,V,k,I,U,p,a,u,y,w,f,N,K,Y,R,A,L,b,c,d,v,h,g,x,z,H,ie,O){return o.AST=F,o.Axis=U,o.Chart=R,o.Color=ie,o.DataLabel=g,o.Fx=j,o.HTMLElement=I,o.Legend=K,o.LegendSymbol=Y,o.OverlappingDataLabels=o.OverlappingDataLabels||x,o.PlotLineOrBand=u,o.Point=f,o.Pointer=N,o.RendererRegistry=C,o.Series=c,o.SeriesRegistry=d,o.StackItem=b,o.SVGElement=V,o.SVGRenderer=k,o.Templating=_,o.Tick=y,o.Time=O,o.Tooltip=w,o.animate=E.animate,o.animObject=E.animObject,o.chart=R.chart,o.color=ie.parse,o.dateFormat=_.dateFormat,o.defaultOptions=l.defaultOptions,o.distribute=D.distribute,o.format=_.format,o.getDeferredAnimation=E.getDeferredAnimation,o.getOptions=l.getOptions,o.numberFormat=_.numberFormat,o.seriesType=d.seriesType,o.setAnimation=E.setAnimation,o.setOptions=l.setOptions,o.stop=E.stop,o.time=l.defaultTime,o.timers=j.timers,z.compose(o.Series,o.SVGElement,o.SVGRenderer),v.compose(o.Series.types.column),g.compose(o.Series),p.compose(o.Axis),I.compose(o.SVGRenderer),K.compose(o.Chart),a.compose(o.Axis),x.compose(o.Chart),h.compose(o.Series.types.pie),u.compose(o.Axis),N.compose(o.Chart),H.compose(o.Chart),A.compose(o.Axis,o.Chart,o.Series),L.compose(o.Axis,o.Chart,o.Series),w.compose(o.Pointer),s.extend(o,s),o}),i["masters/highcharts.src.js"]._modules=i,i["masters/highcharts.src.js"]})})(Zf);var hy=Zf.exports;const Mn=Ml(hy);var Jf={exports:{}};(function(e,t){(function(i,n){e.exports=n(we)})(typeof self<"u"?self:kh,function(i){return function(n){function o(l){if(s[l])return s[l].exports;var j=s[l]={i:l,l:!1,exports:{}};return n[l].call(j.exports,j,j.exports,o),j.l=!0,j.exports}var s={};return o.m=n,o.c=s,o.d=function(l,j,E){o.o(l,j)||Object.defineProperty(l,j,{configurable:!1,enumerable:!0,get:E})},o.n=function(l){var j=l&&l.__esModule?function(){return l.default}:function(){return l};return o.d(j,"a",j),j},o.o=function(l,j){return Object.prototype.hasOwnProperty.call(l,j)},o.p="",o(o.s=0)}([function(n,o,s){function l(){return l=Object.assign?Object.assign.bind():function(a){for(var u=1;u<arguments.length;u++){var y=arguments[u];for(var w in y)Object.prototype.hasOwnProperty.call(y,w)&&(a[w]=y[w])}return a},l.apply(this,arguments)}function j(a){return C(a)||_(a)||F(a)||E()}function E(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(a,u){if(a){if(typeof a=="string")return D(a,u);var y=Object.prototype.toString.call(a).slice(8,-1);return y==="Object"&&a.constructor&&(y=a.constructor.name),y==="Map"||y==="Set"?Array.from(a):y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)?D(a,u):void 0}}function _(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function C(a){if(Array.isArray(a))return D(a)}function D(a,u){(u==null||u>a.length)&&(u=a.length);for(var y=0,w=new Array(u);y<u;y++)w[y]=a[y];return w}function V(a){"@babel/helpers - typeof";return(V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u})(a)}Object.defineProperty(o,"__esModule",{value:!0}),s.d(o,"HighchartsReact",function(){return p});var k=s(1),I=s.n(k),U=typeof window<"u"?k.useLayoutEffect:k.useEffect,p=Object(k.memo)(Object(k.forwardRef)(function(a,u){var y=Object(k.useRef)(),w=Object(k.useRef)(),f=Object(k.useRef)(a.constructorType),N=Object(k.useRef)(a.highcharts);return U(function(){function K(){var R=a.highcharts||(typeof window>"u"?"undefined":V(window))==="object"&&window.Highcharts,A=a.constructorType||"chart";R?R[A]?a.options?w.current=R[A](y.current,a.options,a.callback):console.warn('The "options" property was not passed.'):console.warn('The "constructorType" property is incorrect or some required module is not imported.'):console.warn('The "highcharts" property was not passed.')}if(w.current){if(a.allowChartUpdate!==!1)if(a.constructorType!==f.current||a.highcharts!==N.current)f.current=a.constructorType,N.current=a.highcharts,K();else if(!a.immutable&&w.current){var Y;(Y=w.current).update.apply(Y,[a.options].concat(j(a.updateArgs||[!0,!0])))}else K()}else K()},[a.options,a.allowChartUpdate,a.updateArgs,a.containerProps,a.highcharts,a.constructorType]),U(function(){return function(){w.current&&(w.current.destroy(),w.current=null)}},[]),Object(k.useImperativeHandle)(u,function(){return{get chart(){return w.current},container:y}},[]),I.a.createElement("div",l({},a.containerProps,{ref:y}))}));o.default=p},function(n,o){n.exports=i}])})})(Jf);var uy=Jf.exports;const Oc=Ml(uy);function py({valorDespesa:e,valorGanho:t}){const i={chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1},title:{text:`${(e/(t+e)*100).toFixed(2)}%`,align:"center",verticalAlign:"middle",y:60,style:{fontSize:"1.1em"}},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},accessibility:{point:{valueSuffix:"%"}},plotOptions:{pie:{dataLabels:{enabled:!0,distance:-50,style:{fontWeight:"bold",color:"white"}},startAngle:-90,endAngle:90,center:["50%","75%"],size:"110%"}},series:[{type:"pie",name:"Porcentagem",innerSize:"50%",data:[["Gastos",e],["Ganhos",t]]}]};return r.jsx(Oc,{highcharts:Mn,options:i})}function fy({listaFaturamento:e}){const t={chart:{type:"column"},title:{text:"",align:"left"},xAxis:{type:"week"},yAxis:{min:0,title:{text:"Faturamento"}},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{name:"Faturado R$",data:[["Segunda",12e3],["Terça",45e3],["Quarta",3e4],["Quinta",400],["Sexta",25e3],["Sábado",15e3],["Domingo",11e3]]},{name:"Meta R$",data:[["Segunda",12e3],["Terça",45e3],["Quarta",3e4],["Quinta",400],["Sexta",25e3],["Sábado",12e3],["Domingo",5e3]]}]};return r.jsx(Oc,{highcharts:Mn,options:t})}const my="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbeSURBVHgB5ZvNTxtHGMbfmTU2mLbQBlCIVDBqD3GUKBB6aKSkIa3U5lbIH9CQQ3JN0lukSglqldxScm0PJVV7LeSWVqpCSg89NAn5UMmhVYBKoQLamBZjG7MznWfsNWvsBX/sGuz8pLHXa7Pimfdj3pmdZeQxj+ZifQaT3ZIbBxnJkDqF1pxuFpF0mxaCHnAS06ZkkwfaG8bJQxi5zP2nsjnQEBskzj9UH7spW2SxREjSuBDyZjJeP9bTxSLkIq6Jh4UZY/2c0ykqT7AjktjIqimGetobpskFyhav3dpgl9RhH1WO8YQpT5fbCSWLh3vXBePDnLFTtE2U6wkliX88v3pKJaVh8si9i0IiScqh/e0NI1QkRYnXyawxqVxcnKedx3AiGhgqJikWLP7+XCzk53yUqWGLdirKCxJCHi80DAoSD+EBzm6rX4dop1NEB2wpvqqEWxTYAZuKr0rhFgV0AHf6Qie3ahUO1P/tN/godDj9xFG8zurVKjyNmkt0BxoTl5y/z8PjudggN9hXVCMw4oPhNv+N3PMbqOo4d0CqCdJqNNC1sQbIcfs6TpdrSThQFm72N65+nuf8OtrqBntKNYppyuP2NYIsywd8tRPn+UjPPjNkLF/rVrewWz9jeR3rLwBYcMkc4+X+c1XQJBPPqUw++u7PnHNB1avh1gAdam+go52NW17jysQ8PVlIZD5/ffJ1chN75teWr4vH+8kjVpKC7j6L0Zd3/9FtJSlpO0Hmr8MaI6XdnnHmqvi9LQEaCL+i26H2+sz5iZkoXflp3rED8p1fXDHJbXhqcZV8eGGMjpGLwM0Hwk2ZzwvRNfr24XO6Nxen2aVV+v73/3THWEA0zqHBU+x8fOuZDhdcryVokBvI1Koy8UcLsT7yeDmqtdFHZ9/aRR1NdfpzSmTKyotRU3vD6NRSjnALy2NmIklyA7g+Fl65YVZmZQaJ74M3X9bHEDm1GNfHEA1vAOicM72v0bUT7bpdPNpKRzqC+rvFlTW6/suiazkDK1I+wXmIU2VAOFgsqlCA1Sdmo/ozcsP5w61Zv28J+tTf1OuO++GPZd0B6LReNXKUi6HuIPk4o4O0DQkY1l+Irbtx756g429P7mui2Fo6JFz6X6UQXT4pZJca+KkSTNnG745mPzX61hPY7JJzPMPyZ3p3katw1ulTwpuoQoxO/Zs5DrfAnZnO4BjOrEyPzI6h0muUAzVjqPP8xgOS1Be//q1jFgzsbdLCwbm3W+jqRGrsR1ZHA1ZViJi3Rgk3YWnxrpNy7yV9DMF3n8UzwxgsPbBvfYzvVO7/6bu7ddb/eXYl6xpWmCDxoS4opDwuBvbbfNy1dJevtrcDdz5/uEXHcD5QDD1ZhOi4ft9Y3aHQsRdH5QLLY2nHc9c/0hmks1skLRRDaJaFZyKpavDeXEyHBbwDtYIVMuWACQ6XUi6Ry8A6mI2hWcnrnnb94pwMIYHKEHnBYmJmmdyAQbya1Hi6gGG5KWIeVrQzoyo7JLurG6axG0EnWDiVwEUj5AzHC3kIsrVlfXtND1pVIrMS2zcPI46eccvWaR22jigHQWySk5ST5DFO1kfie/+Nl/Qx6vtPfvxLD3UoePQooWIdXjGWrg8wUrhR2qYQ0z7TYJOGx+WtZX1kcIi3Jy2UrjhvCcaCRz4g/OI7beQWhlSWP9CqF/Nc3eWUj82s/9l7u6l/7yt55+voJIwUEI4wcQNk+rBaxEwNuIw8d/3NYh/AA66d2JNTzeEchki3hGuEuIO3lHhT3KQKsFnmtwj6swsgp4KoHCRnY3jXV04E9GYez11/K+tXimS0XovPlEqP5+PDqifOUY3DiI2E2wKncZzxKcnkGL0ImGLIOsyI11mf0TjVMkLeCdu2qWRlE5PkENUwTNKg/XOWeG19KW9QDaJjfcPmpJxxJOGvx+5KzzN/hZm2x7pFjvieV1lEmPIC1RBChXM4z5a0vBUENvGqieN1qgGEoOv72/JvSnYsn5J1gcsqUjwvez1mOhmDjvw4iof7M1MM4AJUnUwzUx7fbBf2lothU3OxkDTYbaKq2qGlhYfL2XtrUWUdUJBwUNCUCRfCBWmHh4BUOapQ4aDg+SIumKgL9OzUUQBZfTXqL1g4KPEZm9ggJ72nLUTbDaOIWJMXSnnGpqSVAoybOgy2uRRGyZpYDnSVIjz192WSSoY0oi7l6r6ezZF31F31y+HW8h43de3GvO4EvWnZo+fs4N4m3TAMOVau6PVLuox+2LAx3s+k7GecH1MpuPT7gAzP0soHai46llhuGNmxz9I6MbUQ65Mku4XJQ5zLbtUZIeKsKatTIFKoe4ZMDaVSNS4nVTxPumVhJ/4H6DYdxbu8LwcAAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg==",gy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfcSURBVHgB3Zt/bFPXFce/9/p3fpCEkJCkBZxuBQXoSGgndUyjibZpm7p1Wbtff2wjVEObJk206rRV6jqIVk2btKlBWqtJ+6Oha4dWOhE6rWy0tAmopQq0CSQFGhriotL8KsSUBNtx/G7PeXFoEuz62e+a/PhIL7Zfrp/8vffcc8497z6BLNPVH6p1CFWtpGODgPLTKT4K48cUwfgRMAyckDACMSU6byv3tSKLCGimo08VenyhBkj5bfpYjZki0yUIhVbDUPujYW9LTaUIQiPaxPMICyHqpcQW2BOcFAXRPB4zGmvKfQFowLZ406wdYge9rcWNozUSU1vtdkLG4tm8XTnhJinEFswRdi0hI/HdQ+NbyCk1IUvmnRaKnaRqXF/ua0aapCXedGa5UTJx4wHMP5oiY57GdJyiZfEd/SG/W8p9gsIW5itkBRFD1VmdBpbEs3CPFK9Saz/mO2l0QErxC0r4FBY74FPFL0jhU1joAJnsH6ZzW6jCGfrdbofcxzqSNUkq3vTqC1V4HFpLVHtyIzuS/z8B3f2hBukQT2GRICAbqkrdu68/P4sFPc+ToGiBND7mqZydA1xn9i6JnYtJOEMjXOjOHX88wflPMEfdIfqwSInFVN30GsGMkfc4F888T0R89XmNayOfzVGPRCfQGRjAm739CAwHcflqGBMxA/k+N8qK8lHjL8Mdn6lAcX4Oss300XdOnTTnumaUUvhH20m0tJ9BT/9FGPQ5EU/jBIryvLh74xr87Ksbs9oJXHChl1bzPf/pGKGEJhoZgUbOXPgQO/7Viq7zg2l9rzDHi23UAT/evAFOh4Rupnt+8+qucLgeGnmj53384u//TVs4E6Qp8ecXjuKRPa/gamQCumHP7+IaI+IOT0ihTXxgKIhfPX0QA8FRZApPl/8cfwfbnzpAHRCFbuRkcTUuXuAuaODDj67igeYDuDQagg5eO3MeO59rRYzq2TpRk1VlyK7hUC00laP2Hn0bPR9cgk5efOss9re/A52w6XPhVTpieiozH4Ui2Nd+GrrhCPGHfUfMcKkTrkhJQ0o/NHCoqw/vX7yCbMDzfu/RU9CJg+4gSSmwARo4dLLXUruqm0uworggZTsHOaJlFO/XUns+Dp08hyRpQkYow6h0KkNVUuCHXd4dSJ0mPHrfZtTcUgGvy0GO8X8ooph+751r4aJ47nJKuJ0O5Ho9yPO4kONx03t6dTvxHmWFDU/sx+DlUZQV5kELUqxykvDUw2CBwctjKdvUrffjm3/cgy9VrcQPNq0zR/Nbd6xO+b1by4sRnTBw7N0L1H4NdEBGVMjprRZPH52IpWzTQfn9o9/djBXLCvC3g8dRsXQJrMCW+blVpegd0JeEirh4LXAqOp6iAx57/jBupwXMCOUBPf2X8NAvN8Eq1ZVl6BvUepMW2pLnPK87ZZuRsTBeJlN/q28Ajzd8DWsqimEVNv2+oRGtIY/Fa+nOpXnWV2Kcvj787Mv455EuhMetiVlekIthyiBHw+PQAS9wJP2Qy9DAzcX5abXnVPixfx/Gr595yRSViqX5PgTJcnTl+oLF06JGSwHj85+9CZnA0+AeigBP/v8YFTkiSdvluF3mwR2gBUO9J/kPNJDO/J0NV3b+eqAdW59oMQsfYwlM2+N0oiDXg9GIHrM3IDolTcBOaOCW5UVYWWwvZeACyCN7DuG+vzyHZw+fxJVpncAJECc+V8O6lrhGwPHz3/zWKyEaYBP29t/btNaM4Sziig3HxOZ/5PR50yEe7/0AvKLl67ed6sO6laVYXZ65lU0hDfzJzGtPDYU5e9C2y2KYsr0XO86ai5Fzg3oSEx+luROGwu9/WId7bGZ57OnXlXqLJuO8gBbTn6KEwtKW2mo8/9D38XD9F1FemF4kSESIQiLdeMSGVcthG8No45dJ8TFjP7KAl0brJ9QJB3/3Izy57W7UUJZmZxG17Su3Y1WJfQNVUrTw6/TqLYe8rG4w4uysnRYnLxzrwSvd58zRtMoXVq/Arvu/bimTTPk7xjxFXL29NgzdQ+EmMoPtuEHwzYu9r3fjQEdvymLnSnKiz2y/11zf20VANFeVerZOvo/DtTyHoruzNxiDnNib5/qx57UuHDt7ARdnFT/vvPUmNN3/DSzxeaADEVOVVfHdGjMm4Knh8KvkCmsxRwySBfCyt5MWPgFaxKyuWIaffnkjluToEU4JXdvaMl/t1McZ4udq9G8U00edmbGkva2EbuAptRuLEHOuz9qcdN16PuL28u5KvVWDuSdA4bxx9snrxNcUiaARUw9iEWFANVYl2JKWsJLDm3gpnd6FRQCtC3atL028KTlpGSvq8uykmaI17Z0DAtEQ60hMUvFs/iJmfIcvgIVJgLx73aftwk6ZaJ/uD/mVwwx/fiwcTOFVdvbeTrHAOsCScMZS6ZovxBfEPJ8CinyUVeGM5bo9XzDi8tTM1yjAXn18zG1ZOJPhMzahBip98Z42P+YagaAxoR7M5BmbjO7YcNw0p8Ecp8KcskZGPZWZCJ/8vk0mnSGa6VJa9vVYQ7VRQWhnVYm9x03t35iPY3aCuWk5S8/ZsXnHsNvhUC12RX9ySc2YDxvmhuuFUvVCyrvIBWdeGhP8LK06AaFaIqO+5nn7LG0yTlONQEFVGzHpl1JVU2f4IUXBjE5hkQbdMxQUShUdUnXSfO7UNcLJ+BgyhzT9q/2dkAAAAA5lWElmTU0AKgAAAAgAAAAAAAAA0lOTAAAAAElFTkSuQmCC";function xy({valores:e}){const t={chart:{zooming:{type:"x"}},title:{text:"Faturamento Mensal",align:"left"},subtitle:{text:(document.ontouchstart===void 0,"Clique e puxe o gráfico para ampliar"),align:"left"},xAxis:{type:"datetime"},yAxis:{title:{text:"Ganhos mensais"}},legend:{enabled:!1},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,Mn.getOptions().colors[0]],[1,Mn.color(Mn.getOptions().colors[0]).setOpacity(0).get("rgba")]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:1}},threshold:null}},series:[{type:"area",name:"Faturamento - R$",data:e.map(i=>[new Date(i.data).getTime(),i.ganho]).sort((i,n)=>i[0]-n[0])}]};return r.jsx(Oc,{highcharts:Mn,options:t})}function jr(e){return e.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}const yy=ot.div.attrs({className:"container"})`
@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "biryani";
}


.container1{
    display: grid;
    grid-template-rows: repeat(5, 20%);
    grid-template-columns: repeat(4, 25%);
    background-color: #ECF3FB;
    width: 83vw;
    width: -webkit-fill-available !important;
    height: 100vh;
    padding: 10px;
}

.item{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    border-radius: 10px;
}

.item > main{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.item h2{
    font-size: 2em;
    color: #404040;
}

.item h3{
    font-size: 1.2em;
    color: #7f7f7f;
}

.item h4{
    font-size: 0.9em;
    color: #7f7f7f;
}

.item h4 span{
    margin-right: 10px;
}

.En h2{
    font-size: 1.1em;
    color: #404040; 
}

.En h2 span{
    font-size: 2.1em;
}

.Graf1{
    grid-column: 1 / 3;
    grid-row: 2 / 4;
}

.Graf2{
    grid-column: 3;
    grid-row: 2 / 4;
}

.Graf1 h2, .Graf2 h2{
    font-size: 1.3em;
    color: #333333;
}

.Graf1 h3, .Graf2 h3{
    font-size: 2em;
    color: #404040;
}

.Graf1 p, .Graf2 p{
    font-size: 0.9em;
    color: #7f7f7f;
}

.Graf1 p span, .Graf2 p span{
    margin-right: 10px;
}


.Graf3{
    grid-column: 1 / 4;
    grid-row: 4 / 6;
}

.Graf1, .Graf2{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.Graf1 > .conteudo, .Graf2 > .conteudo{
    width: 100%;
    height: 100%;
}

.Graf1 > .conteudo > div, .Graf2 > .conteudo > div{
    height: 68%;
}

.Graf3 > div{
    width: 98%;
    height: 98%;
}

.ListaEn{
    grid-column: 4;
    grid-row: 2 / 6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
}

.ListaEn h2{
    width: 100%;
    font-size: 1.1em;
    text-align: left;
}

.ListaEn ul{
    width: 100%;
    list-style-type: none;
    height: 90%;
    margin-top: 10px;
    overflow-y: hidden;
}

.ListaEn ul li{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.ListaEn ul .on::after{
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #6BDACC;
    border-radius: 50%;
}

.ListaEn ul .off::after{
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #2B2B36;
    border-radius: 50%;
}

.ListaEn ul li .EnID{
    color: #00aaff;
}

.ListaEn footer{
    display: flex;
}

footer div{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    font-size: 0.8em;
}

footer div:first-of-type{
    border-right: 1px solid #00000017;
}

.online::before{
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #6BDACC;
    border-radius: 50%;
}

.offline::before{
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #2B2B36;
    border-radius: 50%;
}

#root{
    display: flex;
}

@media screen and (max-width: 1399px) {
    .container{
        grid-template-rows: repeat(6, 16.66%);
        grid-template-columns: repeat(4, 25%);
    }

    .FD{
        grid-column: 1 / 3;
        grid-row: 1;
    }

    .FS{
        grid-column: 3 / 5;
        grid-row: 1;
    }

    .TP{
        grid-column: 1 / 3;
        grid-row: 2;
    }

    .En{
        grid-column: 3 / 6;
        grid-row: 2; 
    }

    .Graf1{
        grid-column: 1 / 3;
        grid-row: 3 / 5;
    }
    
    .Graf2{
        grid-column: 3;
        grid-row: 3 / 5;
    }
    
    .Graf3{
        grid-column: 1 / 4;
        grid-row: 5 / 7;
    }
    
    .ListaEn{
        grid-column: 4;
        grid-row: 3 / 7;
    }

    .Graf1 > .conteudo > div, .Graf2 > .conteudo > div{
        height: 52%;
    }
}

@media screen and (max-width: 929px) {
    .item > main{
        gap: 0 !important;
    }

    .container{
        grid-template-rows: repeat(6, 16.66%);
        grid-template-columns: repeat(4, 25%);
    }

    .Graf2{
        grid-column: 3 / 5;
        grid-row: 3 / 5;
    }
    
    .Graf3{
        grid-column: 1 / 3;
        grid-row: 5 / 7;
    }
    
    .ListaEn{
        grid-column: 3 / 5;
        grid-row: 5 / 7;
    }
}

@media screen and (max-height: 850px) {
    .item > main{
        display: flex;
        flex-direction: column;
        gap: 0px !important;
    }

    .item .valorEn{
        font-size: 1em !important;
        color: #404040;
    }
    
    .item h2{
        font-size: 1em !important;
        color: #404040;
    }
}
`;function vy(){const[e,t]=we.useState([]),[i,n]=we.useState([]),o=async()=>{try{const D=await(await fetch(`https://vel-tnpo.onrender.com/entregador/${JSON.parse(localStorage.getItem("User"))}`)).json();t(D)}catch(C){console.log("Erro na requisição de dados",C),alert("Erro na requisição de dados, tente recarregar a página!")}},s=async()=>{try{const D=await(await fetch(`https://vel-tnpo.onrender.com/faturamento/${JSON.parse(localStorage.getItem("User"))}`)).json();n(D)}catch(C){console.log("Erro na requisição de dados",C),alert("Erro na requisição de dados, tente recarregar a página!")}};we.useEffect(()=>{o(),s()},[]);const l=C=>{const D=new Date;if(C==0){const V=D.getDate();return i.reduce((I,U)=>(U.data.slice(8,10)==V&&(I+=U.ganho),I),0)}else if(C==1){const V=D.getMonth();return i.reduce((I,U)=>(U.data.slice(5,7)==V+1&&(I+=U.ganho),I),0)}else{if(C==2)return i.reduce((k,I)=>(I.despesa&&(k+=I.despesa),k),0);if(C==3){const V=new Date(D.getFullYear(),D.getMonth(),D.getDate()),k=new Date(V.setDate(V.getDate()-V.getDay()+1)),I=new Date(V.setDate(V.getDate()-V.getDay()+7));return i.reduce((p,a)=>{const u=new Date(a.data);return u>=k&&u<=I&&(p+=a.ganho),p},0)}}},j=({titulo:C,divClasse:D,h2Classe:V,escolha:k})=>r.jsxs("div",{className:D,children:[r.jsxs("main",{children:[r.jsxs("h2",{children:["R$ ",r.jsx("span",{className:V,children:jr(l(k))})]}),r.jsx("h3",{children:C})]}),r.jsx("aside",{children:r.jsx("img",{src:my,alt:"Ícone de dinheiro"})})]}),E=({divClass:C,h2:D,grafico:V})=>r.jsx("div",{className:C,children:r.jsxs("div",{className:"conteudo",children:[r.jsx("h2",{children:D}),r.jsxs("h3",{children:["R$ ",r.jsx("span",{children:jr(1e3)})]}),V]})}),F=({divClass:C,h2:D})=>{let V=i.map(p=>p.despesa);V=V.reduce((p,a)=>(a&&(p+=a),p),0);const I=new Date().getMonth(),U=i.reduce((p,a)=>(a.data.slice(5,7)==I+1&&(p+=a.ganho),p),0);return r.jsx("div",{className:C,children:r.jsxs("div",{className:"conteudo",children:[r.jsx("h2",{children:D}),r.jsxs("h3",{children:["R$ ",r.jsx("span",{children:jr(V)})]}),r.jsx(py,{valorDespesa:V,valorGanho:U})]})})},_=({idCpf:C,nome:D,status:V})=>r.jsx("li",{className:V?"on":"off",children:r.jsxs("div",{children:[D,r.jsx("br",{}),r.jsxs("span",{className:"EnID",children:["ID: #",C]})]})});return r.jsxs(yy,{style:{display:"flex"},children:[r.jsx(Je,{}),r.jsx(si,{pagina:"Dashboard"}),r.jsxs("div",{className:"container1",children:[r.jsx(j,{titulo:"Faturamento Diário",divClasse:"item FD",h2Classe:"valorFD",escolha:"0"}),r.jsx(j,{titulo:"Faturamento Semanal",divClasse:"item FS",h2Classe:"valorFS",escolha:"3"}),r.jsx(j,{titulo:"Total a pagar",divClasse:"item TP",h2Classe:"valorTP",escolha:"2"}),r.jsxs("div",{className:"item En",children:[r.jsxs("main",{children:[r.jsxs("h2",{children:[r.jsx("span",{className:"valorEn",children:e.length})," Cadastrados"]}),r.jsx("h3",{children:"Entregadores"})]}),r.jsx("aside",{children:r.jsx("img",{src:gy,alt:"Ícone de capacete"})})]}),r.jsx(E,{divClass:"item Graf1",h2:"Metas",grafico:r.jsx(fy,{})}),r.jsx(F,{divClass:"item Graf2",h2:"Gastos e Ganhos Mensais"}),r.jsx("div",{className:"item Graf3",children:r.jsx(xy,{valores:i})}),r.jsxs("div",{className:"item ListaEn",children:[r.jsx("h2",{children:"Status dos Entregadores"}),r.jsx("ul",{children:e.map(C=>r.jsx(_,{idCpf:C.idCpf,nome:C.nome,status:C.status},C.idCpf))}),r.jsxs("footer",{children:[r.jsx("div",{className:"online",children:"On-line"}),r.jsx("div",{className:"offline",children:"Off-line"})]})]})]})]})}const wy=ot.div.attrs({className:"container"})`
  
  .container1 {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 500px;
    height: 500px;
  }
  
  .container1 h2 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
  }
  
  .container1 p {
    margin-bottom: 20px;
    color: #666;
  }
  
  .container1 input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-style: none;
    border-radius: 5px;
    background-color: #E1E1E1;
    font-size: 16px;
  }
  
  .container1 button {
    background-color: #F38342;
    color: white;
    width: 150px;
    height: 40px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .container1 button:hover {
    background-color: #e65c00;
  }
`;function by(){const e=Dt(),t={display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",margin:"0",backgroundColor:"#005A8D"};return r.jsxs(wy,{style:t,children:[r.jsx(Je,{}),r.jsxs("div",{className:"container1",children:[r.jsx("h2",{children:"Recuperar senha"}),r.jsx("p",{children:"Um código será enviado para seu e-mail, coloque-o abaixo."}),r.jsxs("form",{children:[r.jsx("input",{type:"email",placeholder:"Coloque seu e-mail aqui",required:!0}),r.jsx("button",{onClick:()=>e("/codigovalidacao"),children:"Enviar código"})]})]})]})}const Ay=ot.div.attrs({className:"container"})`

.container1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #004a77;
  font-family: "Roboto", sans-serif;
}

.code-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.code-container h2 {
  margin-bottom: 10px;
  color: #333;
}

.code-container p {
  margin-bottom: 20px;
  color: #666;
}

.code-inputs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.code-inputs input {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.code-container button {
  background-color: #f2702b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.code-container button:hover {
  background-color: #e05a18;
}
`,jy=()=>{const[e,t]=we.useState(new Array(6).fill("")),i=(s,l)=>{if(isNaN(s.target.value))return!1;const j=[...e];j[l]=s.target.value,t(j),s.target.nextSibling&&s.target.nextSibling.focus()},n=()=>{console.log("Resend code")};Dt();const o={margin:"0",padding:"0"};return r.jsxs(Ay,{style:o,children:[r.jsx(Je,{}),r.jsx("div",{className:"container1",children:r.jsxs("div",{className:"code-container",children:[r.jsx("h2",{children:"Coloque o código abaixo"}),r.jsx("p",{children:"O código foi enviado por e-mail. Insira-o nos campos na ordem certa"}),r.jsx("div",{className:"code-inputs",children:e.map((s,l)=>r.jsx("input",{type:"text",maxLength:"1",value:s,onChange:j=>i(j,l)},l))}),r.jsx("p",{children:"Se necessário, peça um novo envio do código em 30 segundos"}),r.jsx("button",{onClick:n,children:"Reenviar código"})]})})]})};function $f({pagina:e}){function t(o){const s=o.target,l=[document.querySelector("header"),document.querySelector("main .logoEmpresa h2"),document.querySelector("footer > h2")],j=document.querySelectorAll(".spanName"),E=document.querySelector(".MenuLateral"),F=document.querySelector(".ToggleButton"),_=document.querySelectorAll(".MenuLateral ul li");if(s.classList.contains("flip")){s.classList.remove("flip"),l.map(C=>C.classList.remove("desaparecer"));for(let C=0;C<=j.length-1;C++)j[C].classList.remove("desaparecer");E.classList.remove("shrinkedAside"),F.style.left="90%";for(let C=0;C<=_.length-1;C++)_[C].style.left="unset"}else{s.classList.add("flip"),l.map(C=>C.classList.add("desaparecer"));for(let C=0;C<=j.length-1;C++)j[C].classList.add("desaparecer");E.classList.add("shrinkedAside"),F.style.left="80%",console.log(_.length);for(let C=0;C<=_.length-1;C++)_[C].style.left="40%"}}const i=o=>e===o?"pageSelected":"",n=Dt();return r.jsx(Kf,{children:r.jsxs("aside",{className:"MenuLateral",children:[r.jsx("header",{style:{display:"flex",justifyContent:"center"},children:r.jsx("img",{src:qf,className:"LogoVEL",alt:"Logo VEl",style:{width:"60%",margin:"30px 0"}})}),r.jsx("div",{className:"ToggleButton",children:r.jsx("img",{src:Qf,alt:"Menu para fechar menu lateral",onClick:t})}),r.jsxs("main",{children:[r.jsxs("div",{className:"logoEmpresa",children:[r.jsx("div",{children:r.jsx("img",{src:Ws,alt:"Logo de usuário",className:"imgEmpresa",onClick:()=>n("/perfilempresa"),style:{cursor:"pointer"}})}),r.jsx("h2",{className:"nomeEmpresa",children:"Nome Empresa"})]}),r.jsxs("ul",{children:[r.jsx("li",{className:i("Coordenadores"),children:r.jsxs("a",{onClick:()=>n("/atribuirentrega"),style:{cursor:"pointer"},children:[r.jsx("img",{src:Nl,alt:"Icone de coordenador"}),r.jsx("span",{className:"spanName",children:"Atribuir"})]})}),r.jsx("li",{className:i("Atendente"),children:r.jsxs("a",{onClick:()=>n("/atendente"),style:{cursor:"pointer"},children:[r.jsx("img",{src:Nl,alt:"Icone de atendente"}),r.jsx("span",{className:"spanName",children:"Adicionar"})]})})]})]}),r.jsxs("footer",{children:[r.jsx("h2",{children:"Suporte"}),r.jsx("ul",{children:r.jsx("li",{className:i("Configuração"),children:r.jsxs("a",{onClick:()=>n("/Configuracao"),style:{cursor:"pointer"},children:[r.jsx("img",{src:Xf,alt:"Icone de Configuração"}),r.jsx("span",{className:"spanName",children:"Configuração"})]})})})]})]})})}const Cy="_header_rdhoa_1",ky="_header_title_rdhoa_29",Sy="_header_empresa_rdhoa_45",jo={header:Cy,header_title:ky,header_empresa:Sy};function e0({titulo:e,empresa:t}){return r.jsxs("div",{className:jo.header,children:[r.jsx("h1",{className:jo.header_title,children:e}),r.jsx("h2",{className:`${jo.header_empresa} ${jo.header_title}`,children:t})]})}const Ey="_conteiner_pomew_1",Py="_modalFormConteiner_pomew_23",Ny="_modalFormGrupo_pomew_39",My="_modalBotoes_pomew_147",Ty="_modalBotaoEnviar_pomew_161",Ci={conteiner:Ey,modalFormConteiner:Py,modalFormGrupo:Ny,modalBotoes:My,modalBotaoEnviar:Ty},Ly="_modalBackdrop_1hjvz_1",Dy="_modalConteiner_1hjvz_19",Oy="_modalBotaoFechar_1hjvz_45",Iy="_modalTitulo_1hjvz_73",zy="_modalSubTitulo_1hjvz_89",Ry="_modalForm_1hjvz_99",By="_modalImagemContainer_1hjvz_111",Fy="_modalImagem_1hjvz_111",Uy="_modalFormConteiner_1hjvz_175",Gy="_modalFormGrupo_1hjvz_191",Vy="_modalBotoes_1hjvz_249",Wy="_modalBotaoEnviar_1hjvz_265",Hy="_cancelar_1hjvz_291",di={modalBackdrop:Ly,modalConteiner:Dy,modalBotaoFechar:Oy,modalTitulo:Iy,modalSubTitulo:zy,modalForm:Ry,modalImagemContainer:By,modalImagem:Fy,modalFormConteiner:Uy,modalFormGrupo:Gy,modalBotoes:Vy,modalBotaoEnviar:Wy,cancelar:Hy};function Yy({isOpen:e,onClose:t}){return e?r.jsx("div",{className:di.modalBackdrop,children:r.jsxs("dialog",{className:di.modalConteiner,open:!0,children:[r.jsx("h2",{className:di.modalTitulo,children:"Atribuir Pedido"}),r.jsx("h3",{className:`${di.modalTitulo} ${di.modalSubTitulo}`,children:"Deseja confirmar este pedido?"}),r.jsxs("div",{className:di.modalBotoes,children:[r.jsx("button",{type:"button",className:`${di.modalBotaoEnviar} ${di.cancelar}`,onClick:t,children:"CANCELAR"}),r.jsx("button",{type:"submit",className:di.modalBotaoEnviar,children:"CONFIRMAR"})]})]})}):null}function _y(){const[e,t]=we.useState(!1),i=async n=>{n.preventDefault();const o={nome:document.querySelector("#nome").value,telefone:document.querySelector("#telefone").value,endereco:document.querySelector("#endereco").value,valor:Number(document.querySelector("#valor").value),descricao:document.querySelector("#descricao").value,formaPagamento:Number(document.querySelector("#formaPagamento").value),idUsuario:Number(JSON.parse(localStorage.getItem("User")))};console.log(o.idUsuario);try{const l=await(await fetch(`https://vel-tnpo.onrender.com/pedido/adicionar/${o.idUsuario}`,$r("POST",o))).json();console.log(l),alert("Pedido Enviado!"),document.querySelector("form").reset()}catch(s){alert("Erro em tentar se comunicar com o servidor, tente mais tarde. Se o erro persistir entre em contato."),console.log(s)}t(!1)};return r.jsxs("form",{className:Ci.conteiner,onSubmit:i,children:[r.jsxs("div",{className:Ci.modalFormConteiner,children:[r.jsxs("div",{className:Ci.modalFormGrupo,children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"nome",children:"Nome do cliente:"}),r.jsx("input",{type:"text",id:"nome",required:!0,maxLength:100})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"telefone",children:"Telefone:"}),r.jsx("input",{type:"tel",id:"telefone",required:!0,maxLength:14})]})]}),r.jsx("div",{className:Ci.modalFormGrupo,children:r.jsxs("div",{children:[r.jsx("label",{htmlFor:"endereco",children:"Endereço:"}),r.jsx("input",{type:"text",id:"endereco",required:!0,maxLength:255})]})}),r.jsxs("div",{className:Ci.modalFormGrupo,children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"valor",children:"Valor:"}),r.jsx("input",{type:"number",id:"valor",step:"0.01",min:1,required:!0,maxLength:9})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"formaPagamento",children:"Forma de pagamento:"}),r.jsxs("select",{name:"formaPagamento",defaultValue:2,id:"formaPagamento",maxLength:255,required:!0,children:[r.jsx("option",{value:"1",children:"Dinheiro"}),r.jsx("option",{value:"2",children:"PIX"}),r.jsx("option",{value:"3",children:"Boleto"}),r.jsx("option",{value:"4",children:"Cartão Débito"}),r.jsx("option",{value:"5",children:"Cartão Crédito"})]})]})]}),r.jsx("div",{className:Ci.modalFormGrupo,children:r.jsxs("div",{children:[r.jsx("label",{htmlFor:"descricao",children:"Descrição do pedido:"}),r.jsx("textarea",{id:"descricao"})]})})]}),r.jsx("div",{className:Ci.modalBotoes,children:r.jsx("button",{type:"button",className:Ci.modalBotaoEnviar,onClick:()=>t(!0),children:"ENVIAR"})}),r.jsx(Yy,{isOpen:e,onClose:()=>t(!1)})]})}const Xy="_conteiner_hi4ga_43",Qy="_conteudoPrincipal_hi4ga_51",Ah={conteiner:Xy,conteudoPrincipal:Qy};function qy(){return r.jsxs("div",{className:Ah.conteiner,children:[r.jsx($f,{pagina:"Atendente"}),r.jsxs("div",{className:Ah.conteudoPrincipal,children:[r.jsx(e0,{titulo:"Adicionar Pedido",empresa:""}),r.jsx(_y,{})]})]})}function Ky(){return r.jsxs(r.Fragment,{children:[r.jsx(Je,{}),r.jsx(qy,{})]})}function Zy(e){return r.jsx(r.Fragment,{children:r.jsxs("div",{className:"Pedidos",children:[r.jsxs("h3",{children:["ID: ",e.id]}),r.jsx("p",{children:e.endereco})]})})}const Jy="_modalBackdrop_26y8z_1",$y="_modalConteiner_26y8z_19",ev="_modalBotaoFechar_26y8z_45",tv="_modalTitulo_26y8z_73",iv="_modalSubTitulo_26y8z_89",nv="_modalForm_26y8z_99",rv="_modalImagemContainer_26y8z_111",ov="_modalImagem_26y8z_111",sv="_modalFormConteiner_26y8z_175",av="_modalFormGrupo_26y8z_191",lv="_modalBotoes_26y8z_249",cv="_modalBotaoEnviar_26y8z_265",dv="_cancelar_26y8z_291",hv="_IDPedido_26y8z_317",uv="_IDEntregador_26y8z_319",Ot={modalBackdrop:Jy,modalConteiner:$y,modalBotaoFechar:ev,modalTitulo:tv,modalSubTitulo:iv,modalForm:nv,modalImagemContainer:rv,modalImagem:ov,modalFormConteiner:sv,modalFormGrupo:av,modalBotoes:lv,modalBotaoEnviar:cv,cancelar:dv,IDPedido:hv,IDEntregador:uv},pv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR9SURBVHgBtVddTFtlGH6+r5TBLHMTTXQxyswSNTFGZjQuwTg00ajZn2YGCoOabLgskQkUnDpHYcMpo/ztwoxdOH7WgmQbixc6NYM4M/VCLoxRL0zGEhLuHMwy1p72fD6nlR6xp7Ql65u0fIfzfe/zvs/7870VWImUH38ekEe4Wg890oyRpgFkKCLtnVs8Obh3zVYI1canq7DhfYTlHETEQzXPQUVaMNx0Ol11qYG3fVIAR86bXNXzcwO63Ibhuqkle8q6iv5nQD//q1YGvMOzFqsd+0mpizq+hJTj0PVaqsuBTT+MocaJhDNxA+TTUOF2SMcF+PZfTw/YAMwrOAAp9hDwbkRUBUbc5+Lvq3qLoWkf8OSj0NGK4YYRawP0D2nkwxDCB5s4j6G6GWtgE9BFwH7clN24Q5VC6W9DiSBj2w2f+2J8v7PzISjVwlUJEPbA/26/tQHYw7Ml1HMJShvA8HtTJnBFBxWI3bTQAOzBWN3sEgXlHSXcuY8GPEKwHgy7B5FA7zIJVtF7P4T2KnSxl+cn4W+okXB2PEiFh0lbkKVxDfZgYlL43d/T20oyUUkDXkC593eUtbui74xE87tdULIUQm7hu6uxd8pkc/6vAHRVyJUDErtiHhvAEBPM1lLIKK3PkJrzuLUwinOHrsFKdp/YgHCw2dJLgwGpN9GzZ/nUR313xcOniV7Y9Uk6UWQC+xo2mNSpKq5Kgcgks/PEYlysY2hBs5Ev+Y5uJlY1gXuwIDzx8Dk7pqyB/xuXiPYyG8VexuZXqGDr8gYwiwWMZPwa0vYiDWE3E9uhazuXnPsXWCKZnKmdZqmcgryHsVPfQeZ+C6f3M+zoWpuw1xYKc8/nQM5LrOGtmBeb4Gv00JDZZOpzkEoGq+b5fTr6KW9/HWP1cyjTXAzDBOQqScCjpLMY0D+CI+8yAoHZhKqwEIlMxN90lvQpUsmTq8YJ9hWpHYH2w2OkbzATVak9thJfA70/HqPc33jBcs+uznxmdl4yFZl5nJYIO8q8zbDjNzLyTbKEXJnHyeT6TBj2gkK6I3CTcR9rTDO5jPob86RMjKQy6gnxuzCdrSbVlZ0bkV9wmS3vKMqOFSHLYgIP1f+Jmb+LmRDTkHlGzZ7KpgEmcHn341i/5mcmxy1oC5tZm1eYJ08gS2LG2P/OL2x922FTB9ml1sFX34Usiglcc3I1+t6a4mofsiVG8kLcGQPWfppG7uazCMyPcyBgZ8r1Rfv07QaMTjeo5lNPDHh0NMI6cEdvGJuogB4eREXnj4gETya9jTIGjI9Tmxb7uEl1bGRt47U1xP77CkTuGZbWH1ChIxkb4Dy2jswdIK3VMUCjmdQv6Q+JncvnNqaOT1HzsQ8B+04quMjSugI91JLSgMq2+xDJr+XqNd4lA7weEwCTAy9K38E5RK9DWuzsrI7eRk7vhKUB0XFHtXKuepJ9wAtpf4p5cgPLSPo/YQxxel08wllLTRDAMMzO8eYB/t3IieMQwkVfYPSNUDqqMgOOG9DOmcxmjMQzUUB/4yVkKP8AbbHbYdst6rMAAAAASUVORK5CYII=",fv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYWSURBVHgBxVZrTBRXFP7msbsgyy6ixVYrRUt8AFqqEg01jVpD08S0RruiQNRaA6lWrAjG/uomTWqVl7FBo6aGtgLqxlq1TVMTU0yqgUZtFR/4qKVRAypQHgvLzu7M9Ju1gAR0wZh4kpm5c+7jO/ec7557gOckwqBHOp0ibkRaIahh8Co2SGIERMECHzqgohGauxWJaOM4bTDLCUH7U/PjIYqJgDYbgjABOh8QTsQ1aLjLbyj/wzlUhaY3cUw1dJxGRc4V6nUMCdjYXa1tGkR9LUfM5PQmau+z7SVYGL8ydN3E6Y0EOgazpRJej58eiKUuhXhvsv8v+MR8uHJuDg44tSAJEtZwZ3YI+mFOrkT8hno4hV4XZu4ehs6O0YA/Fro8jyCTadARqGP3w7VEwdKvRkPyvgtNSEKTlo0TeR2PB07JD0OUmAVVWMiFSvg9Rms9CCa6LmDptkmQTflsN8FjycGRj5sCfek7bFA6oiCZ4+j64/SO3hd41dZwdMk72HJD8G+FYFbh11YzfrO5Mt2KtajIrX2iAZm7TXC7N7M1Cx7tAxzJux/QryyOgKIdJ1QBynOOdg8X4SiKhEc+BF2sh699I3Hm0/LfIGoSdF8OJ9i5GxnBZE+WD+UbP6eRZxCC/B596YYWGv8Jn81wfGnvVsswoYQuOIo/xuzD68gj6Bz49fVksgWCmEs2u/Dd+ksYrExs34IbthIsKzhGsrX2dgjDuYEP2SgK/CGt6Byu1c7C+DAa8fJ+6uL43KOFt9h9BVbrTu6mE0MRg3yetlk8Xr2e0sRoOnghWuTF+DnbawDvg66dQYV7Hxz0wAPys9Lpx7OWdTssaPZVwqMvxfe5/8hQ1SLI0hakhblRlnvwUeYNKOmf2aBFzIDga8Y1+2WcY2yfLNzclgg8UO2QdAkhwnjqCHww7zLSC8+wfye/JJRe/lhwg4ia/gP9doVkHIWJ7hcwoaAUor8agkmEqkdx7ksc+QpDNY4cGcd2BOe0kqz/8lybacZ06n6V4fhiJJPFPC62hjHYhIwigeBlA4Jb9LFkbSNqreswpV6CLzSRgCugm96n3kegNgI2c24dA/YTAckTjvdqXgyzdEFUltC4eGMpGZbQeOhqC8ryDsCxrRImqZzgZqbN0n4Jv0W/C7sQjfH+ESh1NlBT9f8zOMnIv0njUoymyN128AmHw2mGa1MDNGUV/9Nw3bo6kLMflR9zG7mjakidS/A0Ist1fEc9BFZCr3MxBZIlOdB54NM6yOZUdi3GjfCP+oHr0l5eiamBVDlUMQ+7y3nDuYggwpXFQy65GKsFPYt9y1wryDzswgJcD88KeKNbJrReZDwbsLx4OoYqRnYThXos2v7iw92EyCdJiBgsLozuGVSWfQe6N43gc2EKz+7RG3HX8A1JkmtYjqHLVZiVOCnQjLV2QhwTB7MUg5pfeslSc7ILifPPEtyLmhN/9+iTk29DCUlFfNVcTE0JRUKKhpHJLairDF59JLwdA0mO6rU4o/A1nrNd8CnvwLW5NegCjhIrxI5FzOlz6K1XuXmWQrgATauCKF2A4r004DrLCxfQYwt7c+n+9hqkhd/h3ckzzUs9qKihzHirWW/VEvAQJOkUVN8YFhGToPpXkMEJSCvs4kCjBDpLXTUObKpFRrGNXErsG6P0rW9BM6Wjvi0zaL5OL1xFUPISCsmWwHDs4X17q8+YlcUx8Gkz2WeUQvxiLHnBakQM6QtssFe2ltJ1Tcw6p+i+i7Cyrvo6p7kf8LICFn/SXCYfV9AioVuMYkFpHQGfVN2flY6iMTDjPVqYxLw6hTfX77Da1sPdvoZZh3eXdh5GGrS43cxeXRiKGMc1rdDJHXuCl7eZu2Xc9ooY6X2D5JtBXSIvCCuMdKurXTSG51r8k4Uf3Wy6B//pRrhc6oCrpW9P4p2wF83yzKc5hwJjZ4dfGUU+8NJQp5LFNEYzbiUCCl0M0VVWqOfJ3puQxQbEtt5DdaQJkX7j4tiFio2HnwZ4YJnjlBFtpkFyJD0QT+BpNGAyMxUNFGz8b6HJF6FUbTA88uyAH2dMjN2KDv9wmIRI+KJrAnX385T/AKo5Xk2xL/u3AAAAAElFTkSuQmCC";function mv({isOpen:e,onClose:t,pedido:i,entregador:n}){return e?(console.log(i.value,n.value),r.jsx("div",{className:Ot.modalBackdrop,children:r.jsxs("dialog",{className:Ot.modalConteiner,open:!0,children:[r.jsx("h2",{className:Ot.modalTitulo,children:"Atribuir Entrega"}),r.jsx("h3",{className:`${Ot.modalTitulo} ${Ot.modalSubTitulo}`,children:"Deseja confirmar esta entrega?"}),r.jsxs("div",{className:Ot.IDs,children:[r.jsxs("div",{className:Ot.IDPedido,children:[r.jsx("img",{src:pv}),r.jsxs("p",{children:["ID pedido: #",i.value]})]}),r.jsxs("div",{className:Ot.IDEntregador,children:[r.jsx("img",{src:fv}),r.jsxs("p",{children:["ID entregador: #",n.value]})]})]}),r.jsxs("div",{className:Ot.modalBotoes,children:[r.jsx("button",{type:"button",className:`${Ot.modalBotaoEnviar} ${Ot.cancelar}`,onClick:t,children:"CANCELAR"}),r.jsx("button",{type:"submit",className:Ot.modalBotaoEnviar,children:"CONFIRMAR"})]})]})})):null}function gv(){const[e,t]=we.useState(!1);let i=document.querySelector("#IDEntregador"),n=document.querySelector("#IDPedido");function o(){i=document.querySelector("#IDEntregador").value,n=document.querySelector("#IDPedido").value,console.log(i,n),t(!0)}return r.jsx(r.Fragment,{children:r.jsx("div",{className:"Input",children:r.jsxs("form",{children:[r.jsx("label",{className:"Titulo-Form",children:"ID do Pedido"}),r.jsx("input",{className:"ID-Pedido",id:"IDPedido",type:"text",placeholder:"Insira o ID do Pedido"}),r.jsx("label",{className:"Titulo-Form",children:"ID do Entregador"}),r.jsx("input",{className:"ID-Entregador",id:"IDEntregador",type:"text",placeholder:"Insira o ID do Entregador"}),r.jsx("div",{className:"Botao",children:r.jsx("button",{type:"button",onClick:()=>o(),children:"ENVIAR"})}),r.jsx(mv,{isOpen:e,onClose:()=>t(!1),pedido:n,entregador:i})]})})})}const xv=ot.div.attrs({className:"container"})`

  .container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 83vw;
    width: -webkit-fill-available !important;
    min-height: 100vh;
  }

  .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #005A8D;
    color: #fff;
    width: 80%;
    height: 5em;
    border-radius: 15px;
    margin: 2em 0 1em 0;
    font-size: 1.3em;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
  }

  .Conteudo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80%;
    width: 95%;
  }

  .Quadro {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 30%;
    height: 100%;
    padding: 1.5em 2em;
    border-radius: 10px;
    overflow-y: scroll;
    scrollbar-width: none;
  }

  .Quadro h2 {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.3em;
    margin-bottom: 0.6em;
  }

  .Pedidos {
    display: flex;
    flex-direction: column;
    justify-content: left;
    border-bottom: 1px solid #CADBDE;
    margin-bottom: 1em;
  }

  .Pedidos h3 {
    color: #0080c0;
    font-weight: 600;
  }

  .Quadro-Input {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 32%;
    padding: 1.5em 2.5em;
    border-radius: 10px;
    height: fit-content;
  }

  .Quadro-Input h2 {
    display: flex;
    justify-content: center;
    font-size: 1.3em;
    margin-bottom: 0.6em;
  }

  .Quadro-Input label {
    font-weight: 550;
  }

  .ListaEn ul {
    width: 100%;
    list-style-type: none;
    height: 90%;
    margin-top: 10px;
    overflow-y: hidden;
  }

  .ListaEn ul li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #CADBDE;
    margin-bottom: 0.7em;
    padding-right: 0.3em;
  }

  .ListaEn ul .on::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #6bdacc;
    border-radius: 50%;
  }

  .ListaEn ul .off::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #2b2b36;
    border-radius: 50%;
  }

  .ListaEn ul li .EnID {
    color: #0080c0;
    font-weight: 600;
  }

  .entregador {
    font-weight: 600;
  }

  .ListaEn footer {
    display: flex;
    justify-content: center;
  }

  footer div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    font-size: 0.8em;
  }

  footer div:first-of-type {
    border-right: 1px solid #00000017;
  }

  .online::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #6bdacc;
    border-radius: 50%;
  }

  .offline::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #2b2b36;
    border-radius: 50%;
  }

  .ID-Pedido,
  .ID-Entregador {
    background-color: #ECF3FB;
    border: none;
    border-radius: 10px;
    height: 40px;
    padding-left: 1em;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 1em;
  }

  .Botao {
    display: flex;
    justify-content: center;
    margin-top: 2em;
  }

  .Botao button {
    width: fit-content;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background: #005A8D;
    font-size: 1.2em;
    font-weight: 500;
    padding: 0.5em 1.5em;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`,yv=[{id:"#0424",endereco:"R. dos Pinheiros - Pinheiros, São Paulo - SP, 08142-640"},{id:"#0425",endereco:"R. das Laranjeiras - Jardim Gaivotas, São Paulo - SP, 04849-531"},{id:"#0426",endereco:"R. Iguatemi - Itaim Bibi, São Paulo - SP, 01451-011"},{id:"#0427",endereco:"R. Guaicurus - Lapa, São Paulo - SP, 05033-000"},{id:"#0428",endereco:"Av. Cruzeiro do Sul - Santana, São Paulo - SP, 02030-100"},{id:"#0429",endereco:"Av. Braz Leme - Santana, São Paulo - SP, 02022-011"}];function vv(){const e={display:"flex",backgroundColor:"#ECF3FB"};return r.jsxs(xv,{style:e,children:[r.jsx($f,{pagina:"Coordenadores"}),r.jsxs("section",{className:"container1",children:[r.jsx("div",{className:"titulo",children:r.jsx("h1",{children:"Atribuir Entrega"})}),r.jsxs("div",{className:"Conteudo",children:[r.jsxs("div",{className:"Quadro",children:[r.jsx("h2",{children:"Lista de Pedidos"}),yv.map(t=>r.jsx(Zy,{id:t.id,endereco:t.endereco},t.id))]}),r.jsx("div",{className:"Quadro",children:r.jsxs("div",{className:"item ListaEn",children:[r.jsx("h2",{children:"Status dos Entregadores"}),r.jsxs("ul",{children:[r.jsx("li",{className:"on",children:r.jsxs("div",{className:"entregador",children:["Amélia Fagundes",r.jsx("br",{}),r.jsx("span",{className:"EnID",children:"ID: #001"})]})}),r.jsx("li",{className:"on",children:r.jsxs("div",{className:"entregador",children:["Paula Ribeiro",r.jsx("br",{}),r.jsx("span",{className:"EnID",children:"ID: #002"})]})}),r.jsx("li",{className:"off",children:r.jsxs("div",{className:"entregador",children:["Leonardo Magalhães",r.jsx("br",{}),r.jsx("span",{className:"EnID",children:"ID: #003"})]})}),r.jsx("li",{className:"off",children:r.jsxs("div",{className:"entregador",children:["Giovane Chaves",r.jsx("br",{}),r.jsx("span",{className:"EnID",children:"ID: #004"})]})}),r.jsx("li",{className:"on",children:r.jsxs("div",{className:"entregador",children:["Vanda Santana",r.jsx("br",{}),r.jsx("span",{className:"EnID",children:"ID: #005"})]})}),r.jsx("li",{className:"on",children:r.jsxs("div",{className:"entregador",children:["Francisco Nogueira",r.jsx("br",{}),r.jsx("span",{className:"EnID",children:"ID: #006"})]})}),r.jsx("li",{className:"off",children:r.jsxs("div",{className:"entregador",children:["Rita Pinheiro",r.jsx("br",{}),r.jsx("span",{className:"EnID",children:"ID: #007"})]})}),r.jsx("li",{className:"off",children:r.jsxs("div",{className:"entregador",children:["Milton Alvarez",r.jsx("br",{}),r.jsx("span",{className:"EnID",children:"ID: #008"})]})})]}),r.jsxs("footer",{children:[r.jsx("div",{className:"online",children:"On-line"}),r.jsx("div",{className:"offline",children:"Off-line"})]})]})}),r.jsxs("div",{className:"Quadro-Input",children:[r.jsx("h2",{children:"Atribuir Entrega"}),r.jsx(gv,{})]})]})]})]})}function wv(){return r.jsxs(r.Fragment,{children:[r.jsx(Je,{}),r.jsx(vv,{})]})}function bv(e){return Qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 1c3.681 0 7 2.565 7 6v4.539c0 .642.189 1.269.545 1.803l2.2 3.298A1.517 1.517 0 0 1 20.482 19H15.5a3.5 3.5 0 1 1-7 0H3.519a1.518 1.518 0 0 1-1.265-2.359l2.2-3.299A3.25 3.25 0 0 0 5 11.539V7c0-3.435 3.318-6 7-6ZM6.5 7v4.539a4.75 4.75 0 0 1-.797 2.635l-2.2 3.298-.003.01.001.007.004.006.006.004.007.001h16.964l.007-.001.006-.004.004-.006.001-.006a.017.017 0 0 0-.003-.01l-2.199-3.299a4.753 4.753 0 0 1-.798-2.635V7c0-2.364-2.383-4.5-5.5-4.5S6.5 4.636 6.5 7ZM14 19h-4a2 2 0 1 0 4 0Z"},child:[]}]})(e)}function Av(e){return Qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"},child:[]}]})(e)}function jv(e){return Qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"},child:[]}]})(e)}function Cv(e){return Qe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M800 384h-32V261.872C768 115.024 661.744 0 510.816 0 359.28 0 256 117.472 256 261.872V384h-32c-70.592 0-128 57.408-128 128v384c0 70.592 57.408 128 128 128h576c70.592 0 128-57.408 128-128V512c0-70.592-57.408-128-128-128zM320 261.872C320 152.784 394.56 64 510.816 64 625.872 64 704 150.912 704 261.872V384H320V261.872zM864.001 896c0 35.28-28.72 64-64 64h-576c-35.28 0-64-28.72-64-64V512c0-35.28 28.72-64 64-64h576c35.28 0 64 28.72 64 64v384zm-352-320c-35.344 0-64 28.656-64 64 0 23.632 12.96 44.032 32 55.12V800c0 17.664 14.336 32 32 32s32-14.336 32-32V695.12c19.04-11.088 32-31.504 32-55.12 0-35.344-28.656-64-64-64z"},child:[]}]})(e)}function kv(e){return Qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"32",d:"M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 56v120a32 32 0 0 0 32 32h120m-232 80h160m-160 80h160"},child:[]}]})(e)}function Sv(e){return Qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M262.29 192.31a64 64 0 1 0 57.4 57.4 64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22 155.3 155.3 0 0 1-21.46-12.57 16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22 155.3 155.3 0 0 1 21.46 12.57 16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z"},child:[]}]})(e)}function Rt(e){return Qe({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,88H152V32Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-61.66a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,164.69V120a8,8,0,0,1,16,0v44.69l10.34-10.35A8,8,0,0,1,157.66,154.34Z"},child:[]}]})(e)}function Ev(e){return Qe({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M146.2,46.45a6,6,0,0,1,7.35-4.25,84.24,84.24,0,0,1,60.25,60.25,6,6,0,0,1-4.25,7.35,5.94,5.94,0,0,1-1.55.2,6,6,0,0,1-5.8-4.45A72.34,72.34,0,0,0,150.45,53.8,6,6,0,0,1,146.2,46.45ZM142.45,85.8C157,89.68,166.32,99,170.2,113.55A6,6,0,0,0,176,118a5.94,5.94,0,0,0,1.55-.2,6,6,0,0,0,4.25-7.35c-5-18.71-17.54-31.25-36.25-36.25a6,6,0,1,0-3.1,11.6Zm79.44,97A54.25,54.25,0,0,1,168,230C89.7,230,26,166.3,26,88A54.25,54.25,0,0,1,73.17,34.11,14,14,0,0,1,87.73,42.5l21.1,47.1a14,14,0,0,1-1.12,13.28,6,6,0,0,1-.42.57L86.22,128.51a1.89,1.89,0,0,0,0,1.67c7.66,15.68,24.1,32,40,39.65a1.88,1.88,0,0,0,1.68-.06l24.69-21a4.81,4.81,0,0,1,.56-.42,14,14,0,0,1,13.28-1.22l47.24,21.17A14,14,0,0,1,221.89,182.83ZM210,181.32a2,2,0,0,0-1.21-2l-47.25-21.17a1.92,1.92,0,0,0-1.6.1l-24.68,21c-.18.15-.37.29-.56.42a14,14,0,0,1-13.77,1c-18.36-8.87-36.66-27-45.53-45.19a14,14,0,0,1,.91-13.73,4.73,4.73,0,0,1,.43-.57L97.79,96.09a2,2,0,0,0,0-1.67L76.74,47.31A2,2,0,0,0,74.9,46h-.23A42.24,42.24,0,0,0,38,88c0,71.68,58.32,130,130,130A42.24,42.24,0,0,0,210,181.32Z"},child:[]}]})(e)}function Pv(e){return Qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(e)}function Nv(e){return Qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"},child:[]}]})(e)}const Mv=ot.div.attrs({className:"container"})`
  .container1 a {
    text-decoration: none;
    color: #222222;
  }

  .container1 a:hover {
    color: #f38342;
  }

  .container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 83vw;
    width: -webkit-fill-available !important;
    min-height: 100vh;
  }

  .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #005a8d;
    color: #fff;
    width: 90%;
    height: 5em;
    border-radius: 15px;
    margin: 2em 0 1em 0;
    font-size: 1.3em;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
  }

  .Quadro {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 90%;
    border-radius: 10px;
    padding: 2em;
  }

  .Modo-Escuro,
  .Notificacoes,
  .AlterarSenha,
  .Privacidade,
  .Termos,
  .Contato,
  .Idioma {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #222222;
    border-bottom: 1px solid #cadbde;
    margin-bottom: 0.5em;
    padding-bottom: 0.5em;
  }

  .Sair {
    color: #222222;
  }

  .Icone-titulo {
    display: flex;
    align-items: center;
  }

  .Icone {
    padding: 0 1em 0 1em;
  }

  .Icone svg {
    font-size: 1.5em;
    color: #005a8d;
  }

  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .toggle-input {
    display: none;
  }

  .toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 34px;
    border-radius: 17px;
    background-color: #ccc;
    cursor: pointer;
    transition: background-color 0.4s ease;
  }

  .toggle-label:before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.4s ease;
  }

  .toggle-input:checked + .toggle-label {
    background-color: #f38342;
  }

  .toggle-input:checked + .toggle-label:before {
    transform: translateX(26px);
  }

  .pageSelected::before {
    left: -38% !important;
  }
`;function Tv(){const e=Dt(),t={display:"flex",flexDirection:"row",width:"100%"};return r.jsxs(Mv,{style:t,children:[r.jsx(si,{pagina:"Configuração"}),r.jsxs("section",{className:"container1",children:[r.jsx("div",{className:"titulo",children:r.jsx("h1",{children:"Configurações"})}),r.jsxs("div",{className:"Quadro",children:[r.jsxs("div",{className:"Modo-Escuro",children:[r.jsxs("div",{className:"Icone-titulo",children:[r.jsx("div",{className:"Icone",children:r.jsx(Nv,{})}),r.jsx("h2",{children:"Modo Escuro"})]}),r.jsxs("div",{className:"toggle-switch",children:[r.jsx("input",{className:"toggle-input",id:"toggle",type:"checkbox"}),r.jsx("label",{className:"toggle-label",htmlFor:"toggle"})]})]}),r.jsxs("div",{className:"Notificacoes",children:[r.jsxs("div",{className:"Icone-titulo",children:[r.jsx("div",{className:"Icone",children:r.jsx(bv,{})}),r.jsx("h2",{children:"Notificações"})]}),r.jsxs("div",{className:"toggle-switch",children:[r.jsx("input",{className:"toggle-input",id:"toggle2",type:"checkbox"}),r.jsx("label",{className:"toggle-label",htmlFor:"toggle2"})]})]}),r.jsx("div",{className:"AlterarSenha",children:r.jsx("a",{href:"#",children:r.jsxs("div",{className:"Icone-titulo",children:[r.jsx("div",{className:"Icone",children:r.jsx(jv,{})}),r.jsx("h2",{children:"Alterar Senha"})]})})}),r.jsx("div",{className:"Privacidade",children:r.jsx("a",{href:"#",children:r.jsxs("div",{className:"Icone-titulo",children:[r.jsx("div",{className:"Icone",children:r.jsx(Cv,{})}),r.jsx("h2",{children:"Política de Privacidade"})]})})}),r.jsx("div",{className:"Termos",children:r.jsx("a",{href:"#",children:r.jsxs("div",{className:"Icone-titulo",children:[r.jsx("div",{className:"Icone",children:r.jsx(kv,{})}),r.jsx("h2",{children:"Termos de Uso"})]})})}),r.jsx("div",{className:"Contato",children:r.jsx("a",{href:"#",children:r.jsxs("div",{className:"Icone-titulo",children:[r.jsx("div",{className:"Icone",children:r.jsx(Ev,{})}),r.jsx("h2",{children:"Contato"})]})})}),r.jsx("div",{className:"Idioma",children:r.jsx("a",{href:"#",children:r.jsxs("div",{className:"Icone-titulo",children:[r.jsx("div",{className:"Icone",children:r.jsx(Av,{})}),r.jsx("h2",{children:"Idioma"})]})})}),r.jsx("div",{className:"Sair",children:r.jsx("a",{onClick:()=>e("/inicial"),style:{cursor:"pointer"},children:r.jsxs("div",{className:"Icone-titulo",children:[r.jsx("div",{className:"Icone",children:r.jsx(Pv,{})}),r.jsx("h2",{children:"Sair"})]})})})]})]})]})}function Lv(){return r.jsxs(r.Fragment,{children:[r.jsx(Je,{}),r.jsx(Tv,{})]})}const Dv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANwSURBVHgBxVZZSFRRGP7OuXc0Sy2zwrJ9oYWil4iQVggiiHaxpqge2jewDYooHwJpMyqQElrQ1MCnhAgKSglbIAkskKCkqCBss3HM5c7c03dnxh3nXmesPubMPfec85/vP/f8G/CPIWxXpOfEwaXmQIl5EGoyFAZDwsVnHaA+cYsKGP7HKDnyBQ7QM2FWlsSbhP3sbYEQ07m5hp7xjQoUQ+9/CgW7atFrwozzM3mKPM7ORm+g8IMy2YiPv4i8HYYzQvfZxYC8zt4oRAbFXxGMuJ0o2eMNT7j+3BR+vnL2hiF63IdmrkbB4YaOg+33kn4mBbosZW88+gYTYGIchqTdwfsys3VQtk27tG38GDPQlxAiA6kJmzoNBf7d2UkQrkqa/jj0PbwwxDCUHGi0XkInjFnxl8gsxENT21pfgoQCq+zlhIJSL9mpsV2q4GezAkFloEmxkoOBr6kHF4hpAWsOy4e9MMwniFWNMPUSWM4OdQ1+0QKNTaIZylfPLT2MPF7ooh6GbEBMy0QoVxnW5YzEbXzUQyqlwhZ6KUNcNS3vHg97BSa1Lj5UaC+H13Cfd0HK+ewXhggRaytm+tIg5G4Iowamdpwn/gBnsALBc8A/LaB2aNCwJRXIZWNQ0IfyhDOgmwvgGOJpIPCj/Q49HBgaXkgl02hWU19L4yXIP1wF53hF+1yO9My4kJWqWseiwvJdkY+Ms3ux/Wp/RzISn6nsCOhjEkN+qOxNvTNpCjR5GfUNt7DxwnAHArWUSUaMjA+dUJYjEgi1Cn7TssKTcOcmhVloBfAGuk1ykNA0e3MfXfZiBcB0DfX7ETac24yllxK7rTGbmuhO3+nHA4OE0l9NybeIBkLMhJI3kOR7QeJ9WHlhUNucp7mZ1+aFpg1oz4cLs/pheOJ6Tpyg1mMRNYSXhlLBvYqgxz6D0VzAEHexe8a3jMD0r6PGVrqair6AsO6PLiiwteciahlNPsGznSEpk4tHI2pSVc+YO8u+TFyYpSNl4BKmmKMwVVrQDyMhxDEUHsx2LpzJ+vQrFpB0I9+sdObM6YN4wAS/FoX7PZFp6z4ziRa5g1pnUPWRYdcq9Q6+uLms4AKFcmSErQgUy4nzINUubryI23Wp9tRDxGhrcDOzrnUkOsKO2JSTCh9TmBK8Z8HMIKrwq+U07h79if+JP6AiEnBd3jJEAAAAAElFTkSuQmCC",Ov=ot.div.attrs({className:"container"})`
  @import url("https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

  section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: 83vw;
    width: -webkit-fill-available !important;
  }

  section > h1 {
    width: 80%;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    font-size: 2.4em;
    color: #fff;
    background-color: #005a8d;
    border-radius: 20px;
    box-shadow: 1px 1px 3px #00000074;
  }

  section #itens {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    text-align: center;
    margin: 20px 0;
  }

  section #itens div {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 3px 5px #00000059;
    margin: 5px;
    width: 230px;
  }

  section #itens div h2 {
    font-size: 1.1em;
  }

  section #itens div p {
    font-size: 1.9em;
    font-weight: bold;
  }

  #tabela {
    max-width: 1700px;
    width: 95%;
    max-height: 610px;
    height: 50%;
    padding: 30px;
    margin: auto;
    background-color: #fff;
    border-radius: 25px;
  }

  #tabela > header {
    text-align: center;
  }

  #tabela > main > header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    margin: 40px 0;
    background-color: #f3f6f9;
    border-radius: 10px;
  }

  #tabela input[type="month"] {
    padding: 10px;
    color: #087dbf;
    border: 2px solid #f38342;
    border-radius: 10px;
  }

  #tabela main > ul {
    list-style: none;
  }

  #tabela main > ul > li {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #c6d8db;
  }

  .Nome,
  .Id,
  .DataPag,
  .Valor {
    text-align: center;
    width: 25%;
  }

  .Nome {
    text-align: left;
  }

  #card {
    position: absolute;
    max-width: 1000px;
    width: 80vw;
    background-color: #ecf3fb;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    z-index: 2;
  }

  #cardBackground {
    content: "";
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #00000060;
    z-index: 1;
  }

  #card h2 {
    width: 95%;
    margin: 20px auto;
    padding: 20px;
    font-size: 2em;
    color: #fff;
    text-align: center;
    background-color: #005a8d;
    border-radius: 10px;
  }

  #card > div:first-of-type {
    width: 200px;
    padding: 10px;
    margin: 20px;
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
  }

  #card > div:first-of-type h3 {
    color: #005a8d;
    font-size: 1.35em;
  }

  #card > div:first-of-type p {
    color: #005a8d;
    font-size: 1.25em;
    font-weight: 600;
  }

  #card > div:last-of-type {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }

  #card > div:last-of-type p {
    font-size: 1.1em;
    padding: 7px;
    background-color: #fff;
    border-radius: 10px;
  }

  #card > div:last-of-type p:first-of-type {
    width: 70%;
  }

  #card > div:last-of-type p:last-of-type {
    text-align: center;
    width: 30%;
  }

  #card li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    gap: 10px;
    width: 95%;
    background-color: #fff;
    margin: 20px auto;
    padding: 5px 20px;
    border-radius: 10px;
  }

  #card li > p {
    font-size: 1.3em;
  }

  #card > button {
    float: right;
    margin: 20px;
    padding: 5px 25px;
    font-size: 1.5em;
    font-weight: 700;
    color: #fff;
    border: 0;
    border-radius: 5px;
    background-color: #f38342;
    cursor: pointer;
  }

  .ativado {
    display: none !important;
  }
`;function Iv(){const[e,t]=we.useState([]),[i,n]=we.useState([]),o=async()=>{try{const a=await(await fetch(`https://vel-tnpo.onrender.com/entregador/${JSON.parse(localStorage.getItem("User"))}`)).json();t(a)}catch(p){console.log("Erro na requisição de dados",p),alert("Erro na requisição de dados, tente recarregar a página!")}},s=async()=>{try{const a=await(await fetch(`https://vel-tnpo.onrender.com/faturamento/${JSON.parse(localStorage.getItem("User"))}`)).json();n(a)}catch(p){console.log("Erro na requisição de dados",p),alert("Erro na requisição de dados, tente recarregar a página!")}};we.useEffect(()=>{o(),s()},[]);const l=p=>{const a=new Date;if(p==0){const u=a.getDate();return i.reduce((w,f)=>(f.data.slice(8,10)==u&&(w+=f.ganho),w),0)}else if(p==1){const u=a.getMonth();return i.reduce((w,f)=>(f.data.slice(5,7)==u+1&&(w+=f.ganho),w),0)}else{if(p==2)return i.reduce((y,w)=>(w.despesa&&(y+=w.despesa),y),0);if(p==3){const u=new Date(a.getFullYear(),a.getMonth(),a.getDate()),y=new Date(u.setDate(u.getDate()-u.getDay()+1)),w=new Date(u.setDate(u.getDate()-u.getDay()+7));return i.reduce((N,K)=>{const Y=new Date(K.data);return Y>=y&&Y<=w&&(N+=K.ganho),N},0)}}},j=({titulo:p})=>r.jsx("h1",{children:p}),E=({titulo:p,escolha:a})=>r.jsxs("div",{children:[r.jsx("h2",{children:p}),r.jsxs("p",{children:["R$ ",jr(l(a))]})]}),F=()=>{const p=document.querySelector("#card"),a=document.querySelector("#cardBackground");p.classList.contains("ativado")?(p.classList.remove("ativado"),a.classList.remove("ativado")):(p.classList.add("ativado"),a.classList.add("ativado"))},_=({nome:p,id:a,dataPag:u,valor:y})=>r.jsxs("li",{children:[r.jsx("span",{style:{cursor:"pointer"},className:"Nome",onClick:F,children:p}),r.jsx("span",{className:"Id",children:a}),r.jsx("span",{className:"DataPag",children:u}),r.jsxs("span",{className:"Valor",children:["R$ ",jr(y)]})]}),C=({nome:p,idEntrega:a,valor:u,endereco:y})=>r.jsxs("li",{children:[r.jsx("img",{src:Dv,alt:"Icone capacete"}),r.jsxs("div",{children:[r.jsxs("h3",{children:["Cliente: ",p," ",r.jsx("span",{className:"idEntrega",children:a})]}),r.jsx("p",{children:y})]}),r.jsxs("p",{children:["R$ ",u]})]}),D=new Date,V=D.getFullYear(),k=String(D.getMonth()+1).padStart(2,"0"),I=`${V}-${k}`;console.log(e);const U={display:"flex",backgroundColor:"#ecf3fb",margin:"0",padding:"0",boxSizing:"border-box"};return r.jsxs(Ov,{style:U,children:[r.jsx(Je,{}),r.jsx("div",{id:"cardBackground",className:"ativado"}),r.jsxs("div",{id:"card",className:"ativado",children:[r.jsx("h2",{children:"Relatório de Entrega"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Valor Total"}),r.jsxs("p",{children:["R$ ",r.jsx("span",{className:"valorEntrega",children:"539,00"})]})]}),r.jsxs("div",{children:[r.jsxs("p",{children:["Entregador:"," ",r.jsx("span",{className:"entregador",children:"Jefferoson Souza Silva"})]}),r.jsxs("p",{children:["Data: ",r.jsx("span",{className:"date",children:"15/04/2024"})]})]}),r.jsx(C,{nome:"José Ronaldo",idEntrega:"#1000",valor:"50",endereco:"R. dos Pinheiros - Pinheiros, São Paulo - SP, 081142-640"}),r.jsx("button",{onClick:F,children:"Voltar"})]}),r.jsx(si,{pagina:"Pagamentos"}),r.jsxs("section",{children:[r.jsx(j,{titulo:"Pagamentos"}),r.jsxs("div",{id:"itens",children:[r.jsx(E,{titulo:"Faturamento Diário",escolha:0}),r.jsx(E,{titulo:"Faturamento Semanal",escolha:3}),r.jsx(E,{titulo:"Faturamento Mensal",escolha:1})]}),r.jsxs("div",{id:"tabela",children:[r.jsx("header",{children:r.jsx("input",{type:"month",defaultValue:I,name:"Data",id:"IData"})}),r.jsxs("main",{children:[r.jsxs("header",{children:[r.jsx("h3",{className:"Nome",children:"Nome"}),r.jsx("h3",{className:"Id",children:"ID"}),r.jsx("h3",{className:"DataPag",children:"Data de Pagamento"}),r.jsx("h3",{className:"Valor",children:"Valor"})]}),r.jsxs("ul",{children:[r.jsx(_,{nome:"Jefferoson Souza Silva",id:"#0001",dataPag:"20/04/2024",valor:"530"}),r.jsx(_,{nome:"Antônio Carlos",id:"#0002",dataPag:"22/04/2024",valor:"700"})]})]})]})]})]})}const zv="_header_9zayq_1",Rv="_header_title_9zayq_29",Bv="_header_empresa_9zayq_45",Co={header:zv,header_title:Rv,header_empresa:Bv};function Fv(){return r.jsxs("div",{className:Co.header,children:[r.jsx("h1",{className:Co.header_title,children:"Entregadores"}),r.jsx("h2",{className:`${Co.header_empresa} ${Co.header_title}`,children:"Menu Food & Drink"})]})}const Uv="_conteiner_4kvrg_1",Gv="_botaoAdicionar_4kvrg_45",Vv="_tabelaCoordenador_4kvrg_87",Wv="_status_4kvrg_165",Hv="_statusCor_4kvrg_175",Yv="_online_4kvrg_197",_v="_offline_4kvrg_205",Xv="_botaoPerfil_4kvrg_215",ki={conteiner:Uv,botaoAdicionar:Gv,tabelaCoordenador:Vv,status:Wv,statusCor:Hv,online:Yv,offline:_v,botaoPerfil:Xv},Qv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAgCAYAAACVU7GwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUYSURBVHgB3Zd7aNtVFMdvkj62pK+srZUaa98thSGsoBOFjbVOHZubzurKSjfZVmFzE2VTwepgs/jHUIcyFRSpOp1sUHHU+Ro+xhS1qH+sFNr03bSldE2abOsjaRM/pyYjCc2apI/BDhzOff3O+d5zzj33/nTq5pEuJyenMCUlpSY1NTXBZrO1+yZi1BJTbm5uMqLQ4/Hs02g06+BE2scZ+26pQWkLCgqyp6amHqEtvAYwCd45C6C+9F+86KCKi4tTAXNgenr6UYAUMdQDD8EzoAD0W1dXl3mxQWny8/MTAbEag5VOp3MLYw74otvtfh5gZfCzzAkQE+2TSPeigQJMOobL4fV0N2m12hGMf45hCc8lnU5XQ/8Z2l8wVgr3A745WM98QWlKSkoMY2NjJgxWAWYrRpMY76O/l7BdgO16vd6A8VcZrxZA8J/wk/DR7OxsS3d3d6BSFSVxnDPwxCqaawFTTfsagP5Anmbsl/b2dgmZAnTc+Pj4Mbyyje4p+DD8PlwIV3Z2dpqDdUfsKTnSGF7Dzqvo3g8QDwY/Adi5uLi4f1tbW6/41hLO+ImJib2sr2TZaWQd/SzWraLfSIJ3zGYjLFBpaWmJCQkJeYTkcZRthg0MS7E74nK5zmNoaHh4+Bp9jx+gdIA/B+Aq1r8VExPzUVtbmzUvL28HfSNhFW+5Iwbl9cpqvPAY3TJkHEbO0/4Rg9+zU9ts33lDVsvaSrriobcBNCkhB9BTjH3T19fXEcpuKFA6AG1G7gbISuQy+AxGPsZAG/lyxd8r/lRaWho7Ojq6k3XV3pN3hPWT3ul74SJ01qobUAAodnIXSrbCu1F4O0Mt8AmUfMAJGVVzkHjIarWKh/bD71Kj3rBYLOO+ucnJyRdo/k0o/wkbFLs7AZgN8Cj8Ekob+vv7rSqEV/yJo72M3KqTHII/hesA5POQcjgc6+Lj4/PZ4HHCfvlGunT+naSkpG6A6WlmIu9mRy6j0ThYXl5+taWlJSQwvLACY4cBInXoJN/Vmc3m66ewqKgoEX0vs9H02NjYQyMjI46wQdnt9j5y6Sweukg3HyXbMbR9cHDQzfPiallZmTUYnDepD9CsgU/x7St4IsBocnLyPeiRV8HX5FeDmoN0wQMCgLywAOIHlDQDLIXh/cj7mFtuMBjMhGImT6QOURL24YVDdM8gj5J79mCdePtpdEmRPcghGFJzUFgVHe8VSPKq/58dEt566kwjILZJyCSpyZfX8aIz+NvMzEw9c1K1v2JjBwE9MZe9sK8Zb5jWAqQC5Q/BLnmgyWVLzXoxlDGK5RbWvkdzD1fKORXGoYn07tOYTCYjibyS6v4axkwAquzp6Zn1iLN2OVeK1Co9G6oaGBi4HI4RrYqMPBxzK175FUO1gEoEXEWoxQDagJB31YfhAooG1HUCTDPA5F29U16XwfNZWVlGxIMAUuTfTyoCihqUvAYAJc8UDSdwV0VFRcBJZq4Y8TDys97eXlskuqMG5TX8M6IRb+xqamq6M0CxVruR+VipTSpCmhcouWgBdIzmHYRzk5xQGc/IyDAARp6+30qtUxHSvEAJUb1bMV4P7yGMJoY0vL2eQMq91+B7gS4pqBklWq28u2+T3yiSfgUAN8KXqOC/qyhIpxaAqFs2qnYJzfWcNAch2wG/iRebVBQU9Y9DMHEVPSDVHQ/pkSMdHR0C0qWioAUJnxBXyF+IC3AKYTsbLSChhfwZdZJT75BfdjxVr241+g+gZIic5rKnEAAAAABJRU5ErkJggg==",qv="_modalBackdrop_ykwj0_1",Kv="_modalConteiner_ykwj0_19",Zv="_modalBotaoFechar_ykwj0_45",Jv="_modalPerfilTitulo_ykwj0_73",$v="_modalForm_ykwj0_91",e2="_modalImagemContainer_ykwj0_103",t2="_modalImagem_ykwj0_103",i2="_modalFormConteiner_ykwj0_167",n2="_modalFormGrupo_ykwj0_183",r2="_modalBotoes_ykwj0_241",o2="_modalBotaoEnviar_ykwj0_255",Yt={modalBackdrop:qv,modalConteiner:Kv,modalBotaoFechar:Zv,modalPerfilTitulo:Jv,modalForm:$v,modalImagemContainer:e2,modalImagem:t2,modalFormConteiner:i2,modalFormGrupo:n2,modalBotoes:r2,modalBotaoEnviar:o2};function t0({isOpen:e,onClose:t}){if(!e)return null;const i=o=>{o.preventDefault();const s={idCnpj:JSON.parse(localStorage.getItem("User")),nome:document.querySelector("#nome").value,idCpf:document.querySelector("#cpf").value,telefone:document.querySelector("#telefone").value,email:document.querySelector("#email").value,contaBancaria:document.querySelector("#contaBancaria").value,turno:document.querySelector("#turno").value};console.log(s),n($r("POST",s))},n=async o=>{try{const s=await fetch("https://vel-tnpo.onrender.com/entregador/adicionar",o);if(console.log(s),s.status>199&&s.status<399)console.log(s),alert("Usuário cadastrado com sucesso!");else throw alert("Entregador cadastrado com sucesso!"),new Error(s.status)}catch(s){console.log(s),alert("Erro ao cadastrar usuário.")}};return r.jsx("div",{className:Yt.modalBackdrop,children:r.jsxs("dialog",{className:Yt.modalConteiner,open:!0,children:[r.jsx("button",{className:Yt.modalBotaoFechar,onClick:t,children:"✖"}),r.jsx("h2",{className:Yt.modalPerfilTitulo,children:"CADASTRAR ENTREGADOR"}),r.jsxs("form",{className:Yt.modalForm,onSubmit:i,children:[r.jsxs("div",{className:Yt.modalImagemContainer,children:[r.jsx("label",{htmlFor:"fotoPerfil",children:"📸"}),r.jsx("input",{type:"file",id:"fotoPerfil"})]}),r.jsxs("div",{className:Yt.modalFormConteiner,children:[r.jsxs("div",{className:Yt.modalFormGrupo,children:[r.jsx("label",{htmlFor:"nome",children:"Nome:"}),r.jsx("input",{required:!0,type:"text",id:"nome"}),r.jsx("label",{htmlFor:"cpf",children:"CPF:"}),r.jsx("input",{required:!0,type:"text",minLength:11,maxLength:14,id:"cpf"}),r.jsx("label",{htmlFor:"telefone",children:"Telefone:"}),r.jsx("input",{required:!0,type:"tel",id:"telefone"})]}),r.jsxs("div",{className:Yt.modalFormGrupo,children:[r.jsx("label",{htmlFor:"email",children:"E-mail:"}),r.jsx("input",{required:!0,type:"email",id:"email"}),r.jsx("label",{htmlFor:"contaBancaria",children:"Conta Bancária:"}),r.jsx("input",{required:!0,type:"text",id:"contaBancaria"}),r.jsx("label",{htmlFor:"turno",children:"Turno:"}),r.jsxs("select",{name:"turno",id:"turno",children:[r.jsx("option",{value:"1",children:"Manhã"}),r.jsx("option",{value:"2",children:"Tarde"}),r.jsx("option",{value:"3",children:"Noite"})]})]})]}),r.jsx("div",{className:Yt.modalBotoes,children:r.jsx("button",{type:"submit",className:Yt.modalBotaoEnviar,children:"CADASTRAR"})})]})]})})}const s2="_modalPerfilBackdrop_1sznp_1",a2="_modalPerfilConteiner_1sznp_19",l2="_modalPerfilBotaoFechar_1sznp_45",c2="_modalPerfilHeader_1sznp_73",d2="_modalPerfilStatusCor_1sznp_87",h2="_online_1sznp_115",u2="_offline_1sznp_125",p2="_modalPerfilTitulo_1sznp_149",f2="_modalImagemContainer_1sznp_167",m2="_modalPerfilInfoEntregador_1sznp_195",g2="_modalPerfilGrupo_1sznp_217",x2="_modalPerfilCampo_1sznp_235",y2="_modalPerfilCampoDest_1sznp_263",v2="_modalPerfilBotoes_1sznp_287",w2="_modaPerfilBotaoEnviar_1sznp_301",b2="_modalPerfilBotaoAlterar_1sznp_339",A2="_modalForm_1sznp_379",j2="_modalImagem_1sznp_167",C2="_modalFormConteiner_1sznp_455",k2="_modalFormGrupo_1sznp_469",S2="_modalBotoes_1sznp_527",E2="_modalBotaoEnviar_1sznp_543",P2="_cancelar_1sznp_605",Me={modalPerfilBackdrop:s2,modalPerfilConteiner:a2,modalPerfilBotaoFechar:l2,modalPerfilHeader:c2,modalPerfilStatusCor:d2,online:h2,offline:u2,modalPerfilTitulo:p2,modalImagemContainer:f2,modalPerfilInfoEntregador:m2,modalPerfilGrupo:g2,modalPerfilCampo:x2,modalPerfilCampoDest:y2,modalPerfilBotoes:v2,modaPerfilBotaoEnviar:w2,modalPerfilBotaoAlterar:b2,modalForm:A2,modalImagem:j2,modalFormConteiner:C2,modalFormGrupo:k2,modalBotoes:S2,modalBotaoEnviar:E2,cancelar:P2},N2="/VEL_Desktop/assets/iconeAlterar-DTaLQoRE.svg";function i0({isOpen:e,onClose:t,entregador:i}){const[n,o]=we.useState("view"),[s,l]=we.useState(""),[j,E]=we.useState(""),[F,_]=we.useState(""),[C,D]=we.useState(""),[V,k]=we.useState(""),[I,U]=we.useState("");we.useEffect(()=>{i&&(l(i.nome),E(i.idCpf),_(i.telefone),D(i.email),k(i.contaBancaria),U(i.turno))},[i]);function p(){o("edit")}function a(){o("view")}if(!e||!i)return null;const u=w=>{w.preventDefault(),console.log("user");const f={idCnpj:JSON.parse(localStorage.getItem("User")),nome:document.querySelector("#nome").value,idCpf:document.querySelector("#cpf").value,telefone:document.querySelector("#telefone").value,email:document.querySelector("#email").value,contaBancaria:document.querySelector("#contaBancaria").value,turno:document.querySelector("#turno").value};y($r("PUT",f))},y=async w=>{try{const f=await fetch(`https://vel-tnpo.onrender.com/entregador/editar/${document.querySelector("#cpf").value}`,w);if(console.log(f),f.status>199&&f.status<399)console.log(f),alert("Usuário atualizado com sucesso!"),a();else throw new Error(f.status)}catch(f){console.log(f),alert("Erro ao atualizar usuário.")}};return r.jsx("div",{className:Me.modalPerfilBackdrop,children:r.jsxs("dialog",{className:Me.modalPerfilConteiner,open:!0,children:[r.jsx("button",{className:Me.modalPerfilBotaoFechar,onClick:t,children:"✖"}),r.jsx("div",{className:`${Me.modalPerfilStatusCor} ${i.status==="Online"?Me.online:Me.offline}`,children:r.jsx("p",{children:i.id})}),r.jsxs("h2",{className:Me.modalPerfilTitulo,children:[n==="edit"&&"EDITAR ","ENTREGADOR"]}),n==="view"?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:Me.modalImagemContainer,children:r.jsx("p",{children:"🛵"})}),r.jsxs("div",{className:Me.modalPerfilInfoEntregador,children:[r.jsxs("div",{className:Me.modalPerfilGrupo,children:[r.jsxs("div",{className:Me.modalPerfilCampo,children:[r.jsx("p",{className:Me.modalPerfilCampoDest,children:"Nome:"}),r.jsx("p",{children:s})]}),r.jsxs("div",{className:Me.modalPerfilCampo,children:[r.jsx("p",{className:Me.modalPerfilCampoDest,children:"CPF:"}),r.jsx("p",{children:j})]}),r.jsxs("div",{className:Me.modalPerfilCampo,children:[r.jsx("p",{className:Me.modalPerfilCampoDest,children:"Telefone:"}),r.jsx("p",{children:F})]})]}),r.jsxs("div",{className:Me.modalPerfilGrupo,children:[r.jsxs("div",{className:Me.modalPerfilCampo,children:[r.jsx("p",{className:Me.modalPerfilCampoDest,children:"Email:"}),r.jsx("p",{children:C})]}),r.jsxs("div",{className:Me.modalPerfilCampo,children:[r.jsx("p",{className:Me.modalPerfilCampoDest,children:"Conta Bancaria:"}),r.jsx("p",{children:V})]}),r.jsxs("div",{className:Me.modalPerfilCampo,children:[r.jsx("p",{className:Me.modalPerfilCampoDest,children:"Turno:"}),r.jsx("p",{children:I})]})]})]}),r.jsxs("div",{className:Me.modalPerfilBotoes,children:[r.jsx("button",{type:"submit",className:Me.modaPerfilBotaoEnviar,children:"Valor a pagar: R$580,00"}),r.jsx("button",{className:Me.modalPerfilBotaoAlterar,onClick:p,children:r.jsx("img",{src:N2,alt:"Alterar"})})]})]}):r.jsxs("form",{className:Me.modalForm,onSubmit:u,children:[r.jsxs("div",{className:Me.modalImagemContainer,children:[r.jsx("label",{htmlFor:"fotoPerfil",children:"✏️"}),r.jsx("input",{type:"file",id:"fotoPerfil"})]}),r.jsxs("div",{className:Me.modalFormConteiner,children:[r.jsxs("div",{className:Me.modalFormGrupo,children:[r.jsx("label",{htmlFor:"nome",children:"Nome:"}),r.jsx("input",{type:"text",value:s,onChange:w=>l(w.target.value),id:"nome"}),r.jsx("label",{htmlFor:"cpf",children:"CPF:"}),r.jsx("input",{type:"text",value:j,onChange:w=>E(w.target.value),id:"cpf"}),r.jsx("label",{htmlFor:"telefone",children:"Telefone:"}),r.jsx("input",{type:"tel",value:F,onChange:w=>_(w.target.value),id:"telefone"})]}),r.jsxs("div",{className:Me.modalFormGrupo,children:[r.jsx("label",{htmlFor:"email",children:"E-mail:"}),r.jsx("input",{type:"email",value:C,onChange:w=>D(w.target.value),id:"email"}),r.jsx("label",{htmlFor:"contaBancaria",children:"Conta Bancária:"}),r.jsx("input",{type:"text",value:V,onChange:w=>k(w.target.value),id:"contaBancaria"}),r.jsx("label",{htmlFor:"turno",children:"Turno:"}),r.jsxs("select",{name:"turno",value:I,onChange:w=>U(w.target.value),id:"turno",children:[r.jsx("option",{value:"1",children:"Manhã"}),r.jsx("option",{value:"2",children:"Tarde"}),r.jsx("option",{value:"3",children:"Noite"})]})]})]}),r.jsxs("div",{className:Me.modalBotoes,children:[r.jsx("button",{type:"button",className:`${Me.modalBotaoEnviar} ${Me.cancelar}`,onClick:a,children:"Cancelar"}),r.jsx("input",{type:"submit",value:"Enviar",className:Me.modalBotaoEnviar})]})]})]})})}function M2(){const[e,t]=we.useState(!1),[i,n]=we.useState(!1),[o,s]=we.useState(null);function l(){t(C=>!C)}function j(C){s(C),n(D=>!D)}const[E,F]=we.useState([]),_=async()=>{try{const D=await(await fetch(`https://vel-tnpo.onrender.com/entregador/${JSON.parse(localStorage.getItem("User"))}`)).json();F(D)}catch(C){console.log("Erro na requisição de dados",C),alert("Erro na requisição de dados, tente recarregar a página!")}};return we.useEffect(()=>{_()},[]),console.log(E),r.jsxs("div",{className:ki.conteiner,children:[r.jsx("button",{className:ki.botaoAdicionar,onClick:l,children:"+ Novo Cadastro"}),r.jsx(t0,{isOpen:e,onClose:l}),r.jsx(i0,{isOpen:i,onClose:()=>j(null),entregador:o}),r.jsxs("table",{className:ki.tabelaCoordenador,children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nome"}),r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Perfil"})]})}),r.jsx("tbody",{children:E.map(C=>r.jsxs("tr",{children:[r.jsx("td",{children:C.nome}),r.jsx("td",{children:C.idCpf}),r.jsxs("td",{className:`${ki.status} ${C.status?ki.online:ki.offline}`,children:[r.jsx("div",{className:ki.statusCor}),`${C.status?"Online":"Offline"}`]}),r.jsx("td",{children:r.jsx("button",{className:ki.botaoPerfil,onClick:()=>j(C),children:r.jsx("img",{src:Qv,alt:"Perfil"})})})]},C.idCpf))})]})]})}const T2="_conteiner_hi4ga_43",L2="_conteudoPrincipal_hi4ga_51",jh={conteiner:T2,conteudoPrincipal:L2};function D2(){return r.jsxs("div",{className:jh.conteiner,children:[r.jsx(si,{pagina:"Entregadores"}),r.jsxs("div",{className:jh.conteudoPrincipal,children:[r.jsx(Fv,{}),r.jsx(M2,{})]})]})}function O2(){return r.jsxs(r.Fragment,{children:[r.jsx(Je,{}),r.jsx(D2,{})]})}const I2=ot.div.attrs({className:"container"})`

  .Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 83vw;
    width: -webkit-fill-available !important;
    min-height: 100vh;
  }

  header {
    text-align: center;
  }

  input[type="month"] {
    padding: 10px;
    color: #087dbf;
    border: 2px solid #f38342;
    border-radius: 10px;
  }

  .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #005a8d;
    color: #fff;
    width: 80%;
    height: 5em;
    border-radius: 15px;
    margin: 50px;
    font-size: 1.3em;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
  }

  .Boxes-Superior {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin-bottom: 20px;
  }

  .FaturamentoDiário,
  .FaturamentoSemanal,
  .FaturamentoMensal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    width: 230px;
    margin: 5px;
    box-shadow: 1px 3px 5px #00000059;
    padding: 10px;
    text-align: center;
  }

  .FaturamentoDiário h3,
  .FaturamentoSemanal h3,
  .FaturamentoMensal h3 {
    font-weight: 800;
    font-size: 1.1em;
    color: #222222;
  }

  .FaturamentoDiário p,
  .FaturamentoSemanal p,
  .FaturamentoMensal p {
    font-weight: 800;
    font-size: 1.7em;
    color: #222222;
  }

  .Quadro {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 90%;
    padding: 1.5em 2.5em;
    border-radius: 10px;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    height: 50%;
  }

  .Titulo-Tabela {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ecf3fb;
    border-radius: 10px;
    padding: 0 2.5em;
    margin: 1em 0;
  }

  .Titulo-Tabela h3 {
    padding: 0.4em;
    color: #222222;
  }

  .Tabela {
    padding: 0 1em;
  }

  .Dados {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #cadbde;
    padding: 0 1.1em;
  }

  .Dados p {
    padding: 0.5em;
    font-weight: 600;
  }

  .Nome {
    width: 40%;
    display: flex;
    align-items: center;
    color: #222222;
  }

  .ID {
    width: 10%;
    display: flex;
    align-items: center;
    color: #222222;
  }

  .Data {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #222222;
  }

  .Valor {
    width: 20%;
    display: flex;
    align-items: center;
    color: #0cc95b;
  }

  .ValorNegativo {
    width: 20%;
    display: flex;
    align-items: center;
    color: #f00404;
  }

  .Boxes-Inferior {
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: end;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 25px;
  }

  .Despesas,
  .Receitas {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    width: 15em;
    margin: 1em;
    padding: 0.3em 1em;
  }

  .Despesas {
    box-shadow: 0 7px rgba(217, 0, 62);
  }

  .Despesas h3,
  .Receitas h3 {
    font-weight: 800;
    font-size: 1.1em;
    color: #222222;
  }

  .Despesas p {
    font-weight: 800;
    font-size: 1.7em;
    color: #d9003e;
  }

  .Receitas {
    box-shadow: 0 7px rgba(12, 201, 91);
  }

  .Receitas p {
    font-weight: 800;
    font-size: 1.7em;
    color: #0cc95b;
  }

  @media screen and (max-width: 1090px) {
    .Quadro {
      height: 37%;
    }
  }
`;function z2(){const e={display:"flex",backgroundColor:"#ECF3FB"};return r.jsxs(I2,{style:e,children:[r.jsx(si,{pagina:"Faturamento"}),r.jsxs("section",{className:"Container",children:[r.jsx("div",{className:"titulo",children:r.jsx("h1",{children:"Faturamento"})}),r.jsxs("div",{className:"Boxes-Superior",children:[r.jsxs("div",{className:"FaturamentoDiário",children:[r.jsx("h3",{children:"Faturamento Diário"}),r.jsx("p",{children:"R$ 1.230,00"})]}),r.jsxs("div",{className:"FaturamentoSemanal",children:[r.jsx("h3",{children:"Faturamento Semanal"}),r.jsx("p",{children:"R$ 4.125,00"})]}),r.jsxs("div",{className:"FaturamentoMensal",children:[r.jsx("h3",{children:"Faturamento Mensal"}),r.jsx("p",{children:"R$ 12.000,00"})]})]}),r.jsxs("div",{className:"Quadro",children:[r.jsx("header",{children:r.jsx("input",{type:"month",name:"Data",id:"IData"})}),r.jsxs("div",{className:"Titulo-Tabela",children:[r.jsx("div",{className:"Nome",children:r.jsx("h3",{children:"Nome"})}),r.jsx("div",{className:"ID",children:r.jsx("h3",{children:"ID"})}),r.jsx("div",{className:"Data",children:r.jsx("h3",{children:"Data de Pagamento"})}),r.jsx("div",{className:"Valor",children:r.jsx("h3",{children:"Valor"})})]}),r.jsxs("section",{className:"Tabela",children:[r.jsxs("div",{className:"Dados",children:[r.jsx("div",{className:"Nome",children:r.jsx("p",{children:"Pedido Wesley silva"})}),r.jsx("div",{className:"ID",children:r.jsx("p",{children:"#0423"})}),r.jsx("div",{className:"Data",children:r.jsx("p",{children:"20/04/2024"})}),r.jsx("div",{className:"Valor",children:r.jsx("p",{children:"R$ 53,00"})})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("div",{className:"Nome",children:r.jsx("p",{children:"Coordenador Antonio Carlos"})}),r.jsx("div",{className:"ID",children:r.jsx("p",{children:"#0002"})}),r.jsx("div",{className:"Data",children:r.jsx("p",{children:"22/04/2024"})}),r.jsx("div",{className:"ValorNegativo",children:r.jsx("p",{children:"R$ 700,00"})})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("div",{className:"Nome",children:r.jsx("p",{children:"Pedido Maria"})}),r.jsx("div",{className:"ID",children:r.jsx("p",{children:"#0424"})}),r.jsx("div",{className:"Data",children:r.jsx("p",{children:"27/04/2024"})}),r.jsx("div",{className:"Valor",children:r.jsx("p",{children:"R$ 90,00"})})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("div",{className:"Nome",children:r.jsx("p",{children:"Pedido Vanessa"})}),r.jsx("div",{className:"ID",children:r.jsx("p",{children:"#0425"})}),r.jsx("div",{className:"Data",children:r.jsx("p",{children:"29/04/2024"})}),r.jsx("div",{className:"Valor",children:r.jsx("p",{children:"R$ 40,00"})})]})]})]}),r.jsxs("div",{className:"Boxes-Inferior",children:[r.jsxs("div",{className:"Despesas",children:[r.jsx("h3",{children:"Despesas"}),r.jsx("p",{children:"R$ 1.510,00"})]}),r.jsxs("div",{className:"Receitas",children:[r.jsx("h3",{children:"Receitas"}),r.jsx("p",{children:"R$ 13.510,00"})]})]})]})]})}function R2(){return r.jsxs(r.Fragment,{children:[r.jsx(Je,{}),r.jsx(z2,{})]})}function n0(e){return Qe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z"},child:[]}]})(e)}function Bt(e){return Qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z"},child:[]}]})(e)}const B2=ot.div.attrs({className:"container"})`

.Container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 83vw;
  width: -webkit-fill-available !important;
  min-height: 100vh;
}

.titulo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #005A8D;
  color: #fff;
  width: 80%;
  height: 5em;
  border-radius: 15px;
  margin: 2em 0 1em 0;
  font-size: 1.3em;
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
}

.Quadro {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 90%;
  padding: 1.5em 2.5em;
  border-radius: 10px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: 75%;
}

.Superior {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1em 1em;
}

.Superior h2 {
  font-size: 1.9em;
  color: #222222;
}

.Botao-NovoContrato {
  width: 200px;
  height: 2.2em;
  border: 2px solid #005A8D;
  border-radius: 17px;
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  font-size: 1.2em;
  font-weight: 700;
  padding: 0.1em;
  color: #005A8D;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
}

.Botao-NovoContrato:hover, 
.Botao-Empresa:hover {
  background: #005A8D;
  color: white;
}

.Botao-NovoContrato svg {
  font-size: 0.6em;
}

.Botao-NovoContrato p {
  display: flex;
  align-items: center;
}

.Botoes {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.Botoes a {
  text-decoration: none;
}

.Botao-Entregador {
  width: 200px;
  border: 2px solid #005A8D;
  background-color: #005A8D;
  border-radius: 20px;
  color: #ffffff;
  font-size: 1.2em;
  font-weight: 700;
  display: flex;
  justify-content: center;
}

.Botao-Empresa {
  width: 200px;
  border: 2px solid #005A8D;
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  font-size: 1.2em;
  font-weight: 700;
  padding: 0.1em;
  color: #005A8D;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.Titulo-Tabela {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: v#ECF3FB;
  border-radius: 10px;
  padding: 0 2.5em;
  margin: 1em 0;
}

.Titulo-Tabela h3 {
  padding: 0.4em;
}

.Tabela {
  padding: 0 1em;
}

.Dados {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #CADBDE;
  padding: 0 1.1em;
}

.Dados p {
  padding: 0.5em;
  font-weight: 600;
}

.Icones {
  color: #005A8D;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.ID {
  width: 10%;
}

.ID-Empresa {
  width: 20%;
  display: flex;
  justify-content: center;
  text-align: center;
}

.Cliente {
  width: 40%;
  display: flex;
}
`;function F2(){const e={backgroundColor:"#ECF3FB",display:"flex"},t=Dt();return r.jsxs(B2,{style:e,children:[r.jsx(si,{pagina:"Contrato"}),r.jsxs("section",{className:"Container",children:[r.jsx("div",{className:"titulo",children:r.jsx("h1",{children:"Contratos"})}),r.jsxs("div",{className:"Quadro",children:[r.jsxs("div",{className:"Superior",children:[r.jsx("h2",{children:"Meus Contratos"}),r.jsxs("button",{className:"Botao-NovoContrato",children:[r.jsx(n0,{}),r.jsx("p",{children:"Novo Cadastro"})]})]}),r.jsxs("div",{className:"Botoes",children:[r.jsx("a",{onClick:()=>t("/contratoempregador"),style:{cursor:"pointer"},children:r.jsx("button",{className:"Botao-Empresa",children:"Empresa"})}),r.jsx("button",{className:"Botao-Entregador",children:"Entregador"})]}),r.jsxs("div",{className:"Titulo-Tabela",children:[r.jsx("div",{className:"ID",children:r.jsx("h3",{children:"ID"})}),r.jsx("div",{className:"Cliente",children:r.jsx("h3",{children:"Cliente"})}),r.jsx("div",{className:"ID-Empresa",children:r.jsx("h3",{children:"ID Empresa"})}),r.jsx("h3",{children:"Ver"})]}),r.jsxs("section",{className:"Tabela",children:[r.jsxs("div",{className:"Dados",children:[r.jsx("div",{className:"ID",children:r.jsx("p",{children:"1001"})}),r.jsx("div",{className:"Cliente",children:r.jsx("p",{children:"Doubly Souza Silva"})}),r.jsx("div",{className:"ID-Empresa",children:r.jsx("p",{children:"01"})}),r.jsxs("div",{className:"Icones",children:[r.jsx(Rt,{}),r.jsx(Bt,{})]})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("div",{className:"ID",children:r.jsx("p",{children:"1002"})}),r.jsx("div",{className:"Cliente",children:r.jsx("p",{children:"Don Carlos"})}),r.jsx("div",{className:"ID-Empresa",children:r.jsx("p",{children:"06"})}),r.jsxs("div",{className:"Icones",children:[r.jsx(Rt,{}),r.jsx(Bt,{})]})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("div",{className:"ID",children:r.jsx("p",{children:"1003"})}),r.jsx("div",{className:"Cliente",children:r.jsx("p",{children:"Jefferson Souza Silva"})}),r.jsx("div",{className:"ID-Empresa",children:r.jsx("p",{children:"03"})}),r.jsxs("div",{className:"Icones",children:[r.jsx(Rt,{}),r.jsx(Bt,{})]})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("div",{className:"ID",children:r.jsx("p",{children:"1004"})}),r.jsx("div",{className:"Cliente",children:r.jsx("p",{children:"Douglas dos Santos"})}),r.jsx("div",{className:"ID-Empresa",children:r.jsx("p",{children:"03"})}),r.jsxs("div",{className:"Icones",children:[r.jsx(Rt,{}),r.jsx(Bt,{})]})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("div",{className:"ID",children:r.jsx("p",{children:"1005"})}),r.jsx("div",{className:"Cliente",children:r.jsx("p",{children:"Loney Silva"})}),r.jsx("div",{className:"ID-Empresa",children:r.jsx("p",{children:"03"})}),r.jsxs("div",{className:"Icones",children:[r.jsx(Rt,{}),r.jsx(Bt,{})]})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("div",{className:"ID",children:r.jsx("p",{children:"1006"})}),r.jsx("div",{className:"Cliente",children:r.jsx("p",{children:"André Costa"})}),r.jsx("div",{className:"ID-Empresa",children:r.jsx("p",{children:"05"})}),r.jsxs("div",{className:"Icones",children:[r.jsx(Rt,{}),r.jsx(Bt,{})]})]})]})]})]})]})}function U2(){return r.jsxs(r.Fragment,{children:[r.jsx(Je,{}),r.jsx(F2,{})]})}const G2=ot.div.attrs({className:"container"})`

  .Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 83vw;
    width: -webkit-fill-available !important;
    min-height: 100vh;
  }

  .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #005A8D;
    color: #fff;
    width: 80%;
    height: 5em;
    border-radius: 15px;
    margin: 2em 0 1em 0;
    font-size: 1.3em;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
  }

  .Quadro {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 90%;
    padding: 1.5em 2.5em;
    border-radius: 10px;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    height: 75%;
  }

  .Superior {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1em 1em;
  }

  .Superior h2 {
    font-size: 1.9em;
    color: #222222;
  }

  .Botao-NovoContrato {
    width: 200px;
    height: 2.2em;
    border: 2px solid #005A8D;
    border-radius: 17px;
    transition: all 0.3s;
    cursor: pointer;
    background: white;
    font-size: 1.2em;
    font-weight: 700;
    color: #005A8D;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }

  .Botao-NovoContrato:hover,
  .Botao-Entregador:hover {
    background: #005A8D;
    color: white;
  }

  .Botao-NovoContrato svg {
    font-size: 0.6em;
  }

  .Botao-NovoContrato p {
    display: flex;
  }

  .Botoes {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .Botoes a {
    text-decoration: none;
  }

  .Botao-Empresa {
    width: 200px;
    border: 2px solid #005A8D;
    background-color: #005A8D;
    border-radius: 20px;
    color: #ffffff;
    font-size: 1.2em;
    font-weight: 700;
    display: flex;
    justify-content: center;
  }

  .Botao-Entregador {
    width: 200px;
    border: 2px solid #005A8D;
    border-radius: 20px;
    transition: all 0.3s;
    cursor: pointer;
    background: white;
    font-size: 1.2em;
    font-weight: 700;
    padding: 0.1em;
    color: #005A8D;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .Titulo-Tabela {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ECF3FB;
    border-radius: 10px;
    padding: 0 2.5em;
    margin: 1em 0;
  }

  .Titulo-Tabela h3 {
    padding: 0.4em;
    color: #222222;
  }

  .Tabela {
    padding: 0 1em;
  }

  .Dados {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #CADBDE;
    padding: 0 1.1em;
  }

  .Dados p {
    padding: 0.5em;
    font-weight: 600;
  }

  .Icones {
    color: #005A8D;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  .Cliente {
    width: 40%;
  }
`;function V2(){const e={display:"flex",backgroundColor:"#ECF3FB"};return Dt(),r.jsxs(G2,{style:e,children:[r.jsx(si,{pagina:"Contrato"}),r.jsxs("section",{className:"Container",children:[r.jsx("div",{className:"titulo",children:r.jsx("h1",{children:"Contratos"})}),r.jsxs("div",{className:"Quadro",children:[r.jsxs("div",{className:"Superior",children:[r.jsx("h2",{children:"Meus Contratos"}),r.jsxs("button",{className:"Botao-NovoContrato",children:[r.jsx(n0,{}),r.jsx("p",{children:"Novo Contrato"})]})]}),r.jsxs("div",{className:"Botoes",children:[r.jsx("button",{className:"Botao-Empresa",children:"Empresa"}),r.jsx(T1,{to:"/contratoentregador",children:r.jsx("button",{className:"Botao-Entregador",children:"Entregador"})})]}),r.jsxs("div",{className:"Titulo-Tabela",children:[r.jsx("h3",{children:"ID"}),r.jsx("h3",{children:"Cliente"}),r.jsx("h3",{children:"Ver"})]}),r.jsxs("section",{className:"Tabela",children:[r.jsxs("div",{className:"Dados",children:[r.jsx("p",{children:"01"}),r.jsx("div",{className:"Cliente",children:r.jsx("p",{children:"Restaurante da Cida"})}),r.jsxs("div",{className:"Icones",children:[r.jsx(Rt,{}),r.jsx(Bt,{})]})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("p",{children:"02"}),r.jsx("div",{className:"Cliente",children:r.jsx("p",{children:"Restaurante La Luna Culinária"})}),r.jsxs("div",{className:"Icones",children:[r.jsx(Rt,{}),r.jsx(Bt,{})]})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("p",{children:"03"}),r.jsx("div",{className:"Cliente",children:r.jsx("p",{children:"Restaurante Chefs Garden"})}),r.jsxs("div",{className:"Icones",children:[r.jsx(Rt,{}),r.jsx(Bt,{})]})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("p",{children:"04"}),r.jsx("div",{className:"Cliente",children:r.jsx("p",{children:"LeveMoto Dom Casmurro"})}),r.jsxs("div",{className:"Icones",children:[r.jsx(Rt,{}),r.jsx(Bt,{})]})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("p",{children:"05"}),r.jsx("div",{className:"Cliente",children:r.jsx("p",{children:"Restaurante Quincas Borba"})}),r.jsxs("div",{className:"Icones",children:[r.jsx(Rt,{}),r.jsx(Bt,{})]})]}),r.jsxs("div",{className:"Dados",children:[r.jsx("p",{children:"06"}),r.jsx("div",{className:"Cliente",children:r.jsx("p",{children:"Living MotoClube"})}),r.jsxs("div",{className:"Icones",children:[r.jsx(Rt,{}),r.jsx(Bt,{})]})]})]})]})]})]})}function W2(){return r.jsxs(r.Fragment,{children:[r.jsx(Je,{}),r.jsx(V2,{})]})}const H2="_conteiner_94jg4_1",Y2="_botaoAdicionar_94jg4_43",_2="_tabelaCoordenador_94jg4_85",X2="_status_94jg4_163",Q2="_statusCor_94jg4_173",q2="_online_94jg4_195",K2="_offline_94jg4_203",Z2="_botaoPerfil_94jg4_213",Si={conteiner:H2,botaoAdicionar:Y2,tabelaCoordenador:_2,status:X2,statusCor:Q2,online:q2,offline:K2,botaoPerfil:Z2},J2="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15%2027.1875C17.1396%2027.1906%2019.2419%2026.6279%2021.0938%2025.5563V21.5625C21.0938%2020.4436%2020.6493%2019.3706%2019.8581%2018.5794C19.0669%2017.7882%2017.9939%2017.3438%2016.875%2017.3438H13.125C12.0061%2017.3438%2010.9331%2017.7882%2010.1419%2018.5794C9.35072%2019.3706%208.90625%2020.4436%208.90625%2021.5625V25.5563C10.7581%2026.6279%2012.8604%2027.1906%2015%2027.1875ZM23.9063%2021.5625V23.3194C25.5276%2021.5837%2026.6064%2019.4121%2027.0101%2017.0716C27.4139%2014.731%2027.1249%2012.3235%2026.1787%2010.1449C25.2326%207.96638%2023.6705%206.11177%2021.6845%204.80908C19.6985%203.50639%2017.3751%202.81239%2015%202.81239C12.6249%202.81239%2010.3015%203.50639%208.31549%204.80908C6.32949%206.11177%204.7674%207.96638%203.82125%2010.1449C2.8751%2012.3235%202.58613%2014.731%202.98986%2017.0716C3.39359%2019.4121%204.47243%2021.5837%206.09375%2023.3194V21.5625C6.09319%2020.1128%206.54077%2018.6983%207.3752%2017.5128C8.20962%2016.3273%209.39011%2015.4287%2010.755%2014.94C10.047%2014.1256%209.58815%2013.1248%209.43325%2012.0568C9.27835%2010.9889%209.43392%209.89889%209.88139%208.91691C10.3289%207.93493%2011.0494%207.10239%2011.9569%206.5186C12.8645%205.9348%2013.9209%205.62439%2015%205.62439C16.0791%205.62439%2017.1355%205.9348%2018.0431%206.5186C18.9506%207.10239%2019.6711%207.93493%2020.1186%208.91691C20.5661%209.89889%2020.7216%2010.9889%2020.5667%2012.0568C20.4119%2013.1248%2019.953%2014.1256%2019.245%2014.94C20.6099%2015.4287%2021.7904%2016.3273%2022.6248%2017.5128C23.4592%2018.6983%2023.9068%2020.1128%2023.9063%2021.5625ZM15%2030C18.9782%2030%2022.7936%2028.4196%2025.6066%2025.6066C28.4196%2022.7936%2030%2018.9782%2030%2015C30%2011.0218%2028.4196%207.20644%2025.6066%204.3934C22.7936%201.58035%2018.9782%200%2015%200C11.0218%200%207.20644%201.58035%204.3934%204.3934C1.58035%207.20644%200%2011.0218%200%2015C0%2018.9782%201.58035%2022.7936%204.3934%2025.6066C7.20644%2028.4196%2011.0218%2030%2015%2030ZM17.8125%2011.25C17.8125%2011.9959%2017.5162%2012.7113%2016.9887%2013.2387C16.4613%2013.7662%2015.7459%2014.0625%2015%2014.0625C14.2541%2014.0625%2013.5387%2013.7662%2013.0113%2013.2387C12.4838%2012.7113%2012.1875%2011.9959%2012.1875%2011.25C12.1875%2010.5041%2012.4838%209.78871%2013.0113%209.26126C13.5387%208.73382%2014.2541%208.4375%2015%208.4375C15.7459%208.4375%2016.4613%208.73382%2016.9887%209.26126C17.5162%209.78871%2017.8125%2010.5041%2017.8125%2011.25Z'%20fill='%23005A8D'/%3e%3c/svg%3e";function $2(){const[e,t]=we.useState(!1),[i,n]=we.useState(!1),[o,s]=we.useState(null);function l(){t(C=>!C)}function j(C){s(C),n(D=>!D)}const[E,F]=we.useState([]),_=async()=>{try{const D=await(await fetch(`https://vel-tnpo.onrender.com/coordenador/${JSON.parse(localStorage.getItem("User"))}`)).json();F(D)}catch(C){console.log("Erro na requisição de dados",C),alert("Erro na requisição de dados, tente recarregar a página!")}};return we.useEffect(()=>{_()},[]),console.log(E),r.jsxs("div",{className:Si.conteiner,children:[r.jsx("button",{className:Si.botaoAdicionar,onClick:l,children:"+ Novo Cadastro"}),r.jsx(t0,{isOpen:e,onClose:l}),r.jsx(i0,{isOpen:i,onClose:()=>j(null),entregador:o}),r.jsxs("table",{className:Si.tabelaCoordenador,children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nome"}),r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Perfil"})]})}),r.jsx("tbody",{children:E.map(C=>r.jsxs("tr",{children:[r.jsx("td",{children:C.nome}),r.jsx("td",{children:C.idCpf}),r.jsxs("td",{className:`${Si.status} ${C.status?Si.online:Si.offline}`,children:[r.jsx("div",{className:Si.statusCor}),`${C.status?"Online":"Offline"}`]}),r.jsx("td",{children:r.jsx("button",{className:Si.botaoPerfil,onClick:()=>j(C),children:r.jsx("img",{src:J2,alt:"Perfil"})})})]},C.idCpf))})]})]})}const ew="_conteiner_qmjb5_43",tw="_conteudoPrincipal_qmjb5_53",Ch={conteiner:ew,conteudoPrincipal:tw};function iw(){return r.jsxs("div",{className:Ch.conteiner,children:[r.jsx(si,{pagina:"Coordenadores"}),r.jsxs("div",{className:Ch.conteudoPrincipal,children:[r.jsx(e0,{titulo:"Coordenadores",empresa:"Menu Food & Drink"}),r.jsx($2,{})]})]})}function nw(){return r.jsxs(r.Fragment,{children:[r.jsx(Je,{}),r.jsx(iw,{})]})}function rw(e){return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"ImagemPerfilEmpresa",children:r.jsx("img",{src:Ws,alt:"Logo de Usuário"})}),r.jsx("div",{className:"NomeEmpresa",children:r.jsx("h1",{children:e.nomeEmpresa})}),r.jsxs("div",{className:"Colunas",children:[r.jsxs("div",{className:"Coluna1",children:[r.jsxs("div",{className:"Label",children:[r.jsx("h2",{children:"Proprietário"}),r.jsx("p",{children:e.nomeProprietario})]}),r.jsxs("div",{className:"Label",children:[r.jsx("h2",{children:"Telefone"}),r.jsx("p",{children:e.telefone})]}),r.jsxs("div",{className:"Label",children:[r.jsx("h2",{children:"Forma de Pagamento"}),r.jsx("p",{children:e.formaPagamento})]}),r.jsxs("div",{className:"Label",children:[r.jsx("h2",{children:"Plano"}),r.jsx("p",{children:e.plano})]})]}),r.jsxs("div",{className:"Coluna2",children:[r.jsxs("div",{className:"Label",children:[r.jsx("h2",{children:"E-mail"}),r.jsx("p",{children:e.email})]}),r.jsxs("div",{className:"Label",children:[r.jsx("h2",{children:"CNPJ"}),r.jsx("p",{children:e.cnpj})]}),r.jsxs("div",{className:"Label",children:[r.jsx("h2",{children:"Data de Cadastro"}),r.jsx("p",{children:e.dataCadastro})]})]})]})]})}const ow=ot.div.attrs({className:"container"})`
  body {
    background-color: var(--color3);
  }

  .TelaPerfilEmpresa {
    display: flex;
  }

  .Container {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100vw;
    width: -webkit-fill-available !important;
    margin: 20px;
    min-height: 100vh;
  }

  .Container svg {
    font-size: 2em;
    color: var(--color4);
  }

  .Icone {
    padding: 1em 1em 5em;
  }

  .ImagemPerfilEmpresa {
    display: flex;
    justify-content: center;
  }

  .ImagemPerfilEmpresa img {
    width: 12em;
    position: absolute;
    top: 6%;
  }

  .Quadro {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 100%;
    border-radius: 20px;
    padding: 4em 3em;
  }

  .Quadro .NomeEmpresa {
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    color: #222222;
  }

  .Quadro .Label {
    font-size: 0.9em;
    color: #222222;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
    margin-bottom: 1em;
  }

  .Label p {
    font-size: 1.7em;
    color: #9e9e9e;
  }

  .BotaoEditar {
    display: flex;
    justify-content: end;
  }

  .BotaoEditar a {
    text-decoration: none;
  }

  .edit-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color4);
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
    text-decoration: none !important;
  }

  .edit-svgIcon {
    width: 17px;
    transition-duration: 0.3s;
  }

  .edit-svgIcon path {
    fill: white;
  }

  .edit-button:hover {
    width: 120px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: rgb(255, 69, 69);
    align-items: center;
  }

  .edit-button:hover .edit-svgIcon {
    width: 20px;
    transition-duration: 0.3s;
    transform: translateY(60%);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  .edit-button::before {
    display: none;
    content: "Editar";
    color: white;
    transition-duration: 0.3s;
    font-size: 2px;
  }

  .edit-button:hover::before {
    display: block;
    padding-right: 10px;
    font-size: 13px;
    opacity: 1;
    transform: translateY(0px);
    transition-duration: 0.3s;
  }

  .Colunas {
    display: flex;
    justify-content: space-between;
  }

  .Coluna1,
  .Coluna2 {
    width: 45%;
  }
`;var sw=[{empresa:"Menu - Food & Drink",proprietario:"Wesley Santana",telefone:"(11)95678-4321",pagamento:"Cartão de Crédito",plano:"Transforme",email:"food&drink@gmail.com",cnpj:"123.456.789-10",cadastro:"10/11/2018"}];function aw(){const e={backgroundColor:"#ECF3FB",display:"flex"},t=Dt();return r.jsxs(ow,{style:e,children:[r.jsx(si,{}),r.jsxs("section",{className:"Container",children:[r.jsx("div",{className:"Icone",children:r.jsx("a",{onClick:()=>t("/configuracao"),style:{cursor:"pointer"},children:r.jsx(Sv,{})})}),r.jsxs("div",{className:"Quadro",children:[r.jsx("div",{className:"BotaoEditar",children:r.jsx("a",{onClick:()=>t("/editarperfilempresa"),style:{cursor:"pointer"},children:r.jsx("button",{class:"edit-button",children:r.jsx("svg",{class:"edit-svgIcon",viewBox:"0 0 512 512",children:r.jsx("path",{d:"M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"})})})})}),sw.map(i=>r.jsx(rw,{nomeEmpresa:i.empresa,nomeProprietario:i.proprietario,telefone:i.telefone,formaPagamento:i.pagamento,plano:i.plano,email:i.email,cnpj:i.cnpj,dataCadastro:i.cadastro}))]})]})]})}function lw(){return r.jsxs(r.Fragment,{children:[r.jsx(Je,{}),r.jsx(aw,{})]})}function cw(e){return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"ImagemPerfilEmpresa",children:r.jsx("img",{src:Ws,alt:"Logo de Usuário"})}),r.jsx("div",{className:"NomeEmpresa",children:r.jsx("h1",{children:e.nomeEmpresa})}),r.jsxs("div",{className:"Colunas",children:[r.jsxs("div",{className:"Coluna1",children:[r.jsx("div",{className:"Formulario",children:r.jsxs("form",{children:[r.jsxs("div",{className:"Proprietario",children:[r.jsx("label",{className:"Titulo-Form",children:"Proprietário"}),r.jsx("input",{type:"text",placeholder:"Insira o nome do proprietário"})]}),r.jsxs("div",{className:"Telefone",children:[r.jsx("label",{className:"Titulo-Form",children:"Telefone"}),r.jsx("input",{type:"text",placeholder:"Insira um nome de telefone"})]}),r.jsxs("div",{className:"FormadePagamento",children:[r.jsx("h2",{children:"Forma de Pagamento"}),r.jsxs("select",{name:"",id:"",children:[r.jsx("option",{children:"Cartão de Crédito"}),r.jsx("option",{children:"Pix"})]})]})]})}),r.jsxs("div",{className:"Label",children:[r.jsx("h2",{children:"Plano"}),r.jsx("p",{children:e.plano})]})]}),r.jsxs("div",{className:"Coluna2",children:[r.jsx("div",{className:"Formulario",children:r.jsx("form",{children:r.jsxs("div",{className:"Email",children:[r.jsx("label",{className:"Titulo-Form",children:"E-mail"}),r.jsx("input",{type:"email",placeholder:"Insira um E-mail"})]})})}),r.jsxs("div",{className:"Label",children:[r.jsx("h2",{children:"CNPJ"}),r.jsx("p",{children:e.cnpj})]}),r.jsxs("div",{className:"Label",children:[r.jsx("h2",{children:"Data de Cadastro"}),r.jsx("p",{children:e.dataCadastro})]})]})]}),r.jsx("div",{className:"Botao",children:r.jsx("a",{href:"../pages/paginaPerfilEmpresa.html",children:r.jsx("button",{className:"Botao-Salvar",type:"submit",children:"Salvar"})})})]})}const dw=ot.div.attrs({className:"container"})`

  .Container {
    display: flex;
    width: 100vw;
    min-height: 100vh;
  }

  .ImagemPerfilEmpresa {
    display: flex;
    justify-content: center;
  }

  .ImagemPerfilEmpresa img {
    width: 12em;
    position: absolute;
    top: 6%;
  }

  .Quadro {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 100%;
    padding: 7em 3em;
    margin-top: 8em;
  }

  .Quadro .NomeEmpresa {
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    color: #222222;
  }

  .Quadro .Label {
    font-size: 0.9em;
    color: #222222;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
    margin-bottom: 1em;
  }

  .Label p {
    font-size: 1.7em;
    color: #9e9e9e;
  }

  .BotaoEditar {
    display: flex;
    justify-content: end;
  }

  .Colunas {
    display: flex;
    justify-content: space-between;
  }

  .Coluna1,
  .Coluna2 {
    width: 45%;
  }

  .Proprietario,
  .Telefone,
  .Email {
    display: flex;
    flex-direction: column;
  }

  .Titulo-Form {
    font-size: 1.4em;
    color: #222222;
    font-weight: bold;
  }

  input {
    background-color: #ECF3FB;
    border: none;
    border-radius: 10px;
    height: 40px;
    padding-left: 1em;
    margin-bottom: 1em;
  }

  .FormadePagamento {
    margin-bottom: 1em;
  }

  .FormadePagamento h2 {
    font-size: 1.4em;
    color: #222222;
  }

  select {
    border: none;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
    font-size: 1.4em;
    width: 100%;
    color: #222222;
  }
  .Botao {
    display: flex;
    justify-content: end;
  }

  .Botao a {
    text-decoration: none;
  }

  .Botao-Salvar {
    width: 200px;
    border: 2px solid #005A8D;
    border-radius: 10px;
    transition: all 0.3s;
    cursor: pointer;
    background: white;
    font-size: 1.2em;
    font-weight: 700;
    padding: 0.1em;
    color: #005A8D;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .Botao-Salvar:hover {
    background: #005A8D;
    color: white;
  }
`;var hw=[{empresa:"Menu - Food & Drink",pagamento:"Cartão de Crédito",plano:"Transforme",cnpj:"123.456.789-10",cadastro:"10/11/2018"}];function uw(){const e={backgroundColor:"#ECF3FB",display:"flex"};return r.jsxs(dw,{style:e,children:[r.jsx(si,{}),r.jsx("section",{className:"Container",children:r.jsx("div",{className:"Quadro",children:hw.map(t=>r.jsx(cw,{nomeEmpresa:t.empresa,nomeProprietario:t.proprietario,telefone:t.telefone,formaPagamento:t.pagamento,plano:t.plano,email:t.email,cnpj:t.cnpj,dataCadastro:t.cadastro}))})})]})}function pw(){return r.jsxs(r.Fragment,{children:[r.jsx(Je,{}),r.jsx(uw,{})]})}Ca.createRoot(document.getElementById("root")).render(r.jsx(nt.StrictMode,{children:r.jsx(P1,{children:r.jsxs(b1,{children:[r.jsx(Ye,{path:"/",element:r.jsx(wh,{})}),r.jsx(Ye,{path:"/inicial",element:r.jsx(wh,{})}),r.jsx(Ye,{path:"/inicialingles",element:r.jsx(_x,{})}),r.jsx(Ye,{path:"/pagamento",element:r.jsx(Jx,{})}),r.jsx(Ye,{path:"/sobrenos",element:r.jsx(ey,{})}),r.jsx(Ye,{path:"/sobrenosen",element:r.jsx(iy,{})}),r.jsx(Ye,{path:"/login",element:r.jsx(oy,{})}),r.jsx(Ye,{path:"/dashboard",element:r.jsx(vy,{})}),r.jsx(Ye,{path:"/recuperarsenha",element:r.jsx(by,{})}),r.jsx(Ye,{path:"/codigovalidacao",element:r.jsx(jy,{})}),r.jsx(Ye,{path:"/atendente",element:r.jsx(Ky,{})}),r.jsx(Ye,{path:"/atribuirentrega",element:r.jsx(wv,{})}),r.jsx(Ye,{path:"/pagamentos",element:r.jsx(Iv,{})}),r.jsx(Ye,{path:"/entregadores",element:r.jsx(O2,{})}),r.jsx(Ye,{path:"/faturamento",element:r.jsx(R2,{})}),r.jsx(Ye,{path:"/configuracao",element:r.jsx(Lv,{})}),r.jsx(Ye,{path:"/contratoentregador",element:r.jsx(U2,{})}),r.jsx(Ye,{path:"/contratoempregador",element:r.jsx(W2,{})}),r.jsx(Ye,{path:"/coordenador",element:r.jsx(nw,{})}),r.jsx(Ye,{path:"/perfilempresa",element:r.jsx(lw,{})}),r.jsx(Ye,{path:"/editarperfilempresa",element:r.jsx(pw,{})})]})})}));
