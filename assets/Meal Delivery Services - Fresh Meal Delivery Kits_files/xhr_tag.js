!function(e){e=e||{};var t=".keep",n="x-datadome-clientid",o="x-set-cookie",r="x-sf-cc-x-set-cookie",a="x-dd-b",i="dd_ready",s="dd_blocked",d="dd_response_displayed",l="dd_response_error",c="dd_response_passed",p="dd_captcha_displayed",u="dd_captcha_error",f="dd_captcha_passed",h=null;function w(e,t){var n;(t=t||{}).context="xhr_tag","function"==typeof window.CustomEvent?n=new CustomEvent(e,{detail:t}):(h||(h=function(e,t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}),n=new h(e,t)),n&&window.dispatchEvent(n)}function v(e){var t=null,n=typeof e;if("undefined"!==n){var o=e;if("string"===n)t=[{url:o}];else if(!0===o)t=[{url:document.location.host}];else if(Array.isArray(o)){if(o.length>0){t=[];for(var r=0;r<o.length;++r){var a=o[r],i=typeof a;"string"===i?t.push({url:a}):"object"===i&&t.push(a)}}}else"object"===n&&(t=[o])}return t}var y={};y.ajaxListenerPaths=v(e.ajaxListenerPath),null==y.ajaxListenerPaths&&(y.ajaxListenerPaths=[{url:document.location.host}]),y.ajaxListenerPathsExclusion=v(e.ajaxListenerPathExclusion),null==y.ajaxListenerPathsExclusion&&(y.ajaxListenerPathsExclusion=[{url:"https://www.google-analytics.com"}]),y.withCredentials=!!e.withCredentials,y.sessionByHeader=!!e.sessionByHeader,y.allowHtmlContentTypeOnCaptcha=!!e.allowHtmlContentTypeOnCaptcha,y.endpoint="https://api-js.datadome.co/js/",null!=e.endpoint&&(y.endpoint=e.endpoint),y.overrideAbortFetch=!!e.overrideAbortFetch,y.exposeCaptchaFunction=!!e.exposeCaptchaFunction,y.disableAutoRefreshOnCaptchaPassed=!!e.disableAutoRefreshOnCaptchaPassed,y.enableTagEvents=!!e.enableTagEvents,y.isSalesforce=!!e.sfcc,window.ddCbh=y.sessionByHeader;var g=function(){try{return!!window.localStorage}catch(e){return!1}}();function m(e){var t=new RegExp("datadome=([^;]+)").exec(e);return null!=t?unescape(t[1]):null}var x=function(){if(g&&localStorage.getItem){var e=localStorage.getItem("ddSession");if(e)return e}var n=m(document.cookie);return n||t},b=function(e){try{var t=m(e),n=function(e){if("string"!=typeof e)return"";var t="://",n=e.indexOf(t);if(-1===n)return"";var o=e.substring(n+t.length),r=o.indexOf("/"),a=-1!==r?o.substring(0,r):o,i=a.indexOf(":");i>-1&&(a=a.slice(0,i));var s=a.split(".");return s.length>=2?"."+s.slice(-2).join("."):a}(window.location.origin?window.location.origin:window.location.href);g&&localStorage.setItem&&localStorage.setItem("ddSession",t);var o=new Date;o.setTime(o.getTime()+365*24*60*60*1e3);var r="; expires="+o.toGMTString();document.cookie="datadome="+t+r+"; path=/"+(n?"; domain="+n:"")}catch(e){}};function E(e,t){if("string"!=typeof t)return!1;if(null==e.host&&null==e.path&&null==e.query&&null==e.fragment)return null!=e.url&&t.indexOf(e.url)>-1;var n,o={host:"",path:"",query:"",fragment:""},r="//",a="/",i=t.indexOf(r);if(T(t)){var s=(n=t.slice(i+r.length)).indexOf(a);o.host=n.slice(0,s>-1?s:void 0)}else n=t,o.host=document.location.host;var d=n.indexOf(a),l=n.indexOf("?"),c=n.indexOf("#"),p=d>-1?d:0;return l>-1&&(o.path||(o.path=n.slice(p,l)),o.query=n.slice(l,c>-1?c:void 0)),c>-1&&(o.path||(o.path=n.slice(p,c)),o.fragment=n.slice(c)),o.path||(o.path=n.slice(p)),e.strict?Object.keys(e).filter((function(e){return"strict"!=e})).every((function(n){return"url"===n?t.indexOf(e[n])>-1:o[n].indexOf(e[n])>-1})):null!=e.host&&o.host.indexOf(e.host)>-1||null!=e.path&&o.path.indexOf(e.path)>-1||null!=e.query&&o.query.indexOf(e.query)>-1||null!=e.fragment&&o.fragment.indexOf(e.fragment)>-1||null!=e.url&&t.indexOf(e.url)>-1}function O(e,t,n){if(null==e)return!0;if(e===y.endpoint)return!1;if(0===t.length)return!0;for(var o=0;o<n.length;++o)if(E(n[o],e))return!1;for(var r=!1,a=0;a<t.length;++a)if(E(t[a],e)){r=!0;break}return r}function C(){window.scrollTo(0,0)}function T(e){return"string"==typeof e&&(-1!==e.indexOf("://")||0===e.indexOf("//"))}function H(e){var t=e.split("/")[2];t=(t=(t=(t=t.split(":")[0]).split("?")[0]).split("#")[0]).split(".").slice(-2).join(".");for(var n=["datado.me","captcha-delivery.com"],o=0;o<n.length;o++)if(t===n[o])return!0;return!1}function L(e,t){try{if(t.isTrusted&&H(t.origin)&&t.data){var n=JSON.parse(t.data);if("load"==n.eventType)y.enableTagEvents&&w(d,{responseType:n.responseType,responseUrl:n.responseUrl,rootElement:e.root||document.body});else{if(!n.cookie)return void(n.url&&setTimeout((function(){window.location.reload()}),100));y.sessionByHeader?b(n.cookie):document.cookie=n.cookie,y.enableTagEvents&&(w(f),w(c,{responseType:n.responseType})),setTimeout((function(){if(y.disableAutoRefreshOnCaptchaPassed){var t=document.querySelector('iframe[src^="'+e.captchaUrl+'"]');if(t){var n=t.parentNode;n&&n.parentNode&&n.parentNode.removeChild(n)}window.removeEventListener?window.removeEventListener("scroll",C):window.detachEvent&&window.detachEvent("on"+"scroll",C);var o=document.getElementById(e.baseId);o&&o.parentNode&&o.parentNode.removeChild(o),window.DataDomeCaptchaDisplayed=!1,window.DataDomeResponseDisplayed=!1,window.postMessage("dd_captcha_passed",window.origin)}else window.location.reload()}),500)}}}catch(e){}}function R(e,n){var o="ddStyleCaptchaBody"+Date.now(),r=L.bind(null,{captchaUrl:e,baseId:o,root:n});if(window.addEventListener?window.addEventListener("message",r,!1):window.attachEvent&&window.attachEvent("onmessage",r),window.DataDomeResponseDisplayed)return!1;var a=x(),i=!!window.navigator&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?"height: -webkit-fill-available;":"",s='<div style="'+(n?"width:100%;height:100%;background-color:#ffffff;":"height:100vh;"+i+"width:100%;position:fixed;top:0;left:0;z-index:2147483647;background-color:#ffffff;")+'">';s+='    <iframe src="'+e+"&cid="+a+'" width="100%" height="100%"'+(n?"":' style="height:100vh;')+i+'" FRAMEBORDER="0" border="0" scrolling="yes"></iframe>',s+="</div>";var d='<style id="'+o+'"> body { overflow: hidden; -webkit-transform: scale(1) !important; -moz-transform: scale(1) !important; transform: scale(1) !important; } </style>';if(a===t){var c='<div style="display:none;">'+s+"</div>";return document.body.insertAdjacentHTML("beforeend",c),y.enableTagEvents&&(w(u,{captchaUrl:e,rootElement:n||document.body,reason:"DataDome session not found"}),w(l,{responsePageUrl:e,rootElement:n||document.body,reason:"DataDome session not found"})),!1}return document.title="You have been blocked",window.addEventListener?window.addEventListener("scroll",C,!1):window.attachEvent&&window.attachEvent("onscroll",C),C(),n&&n.insertAdjacentHTML?n.insertAdjacentHTML("afterbegin",s):(document.body.insertAdjacentHTML("beforeend",d),document.body.insertAdjacentHTML("beforeend",s)),window.DataDomeCaptchaDisplayed=!0,window.DataDomeResponseDisplayed=!0,y.enableTagEvents&&w(p,{captchaUrl:e,rootElement:n||document.body}),!0}function D(e,t,n,o,r,i){if(!window.DataDomeResponseDisplayed){var d=!1;if("string"==typeof t)if(String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Array.prototype.forEach)t.trim().split(/[\r\n]+/).forEach((function(e){e.split(": ").shift().toLowerCase()===a&&(d=!0)}));else{t=t.trim().split(/[\r\n]+/);for(var l=0;l<t.length;l++){t[l].split(": ").shift().toLowerCase()===a&&(d=!0)}}else"object"==typeof t&&"Headers"===t.constructor.name&&(d=!!t.get(a));if((d||y.allowHtmlContentTypeOnCaptcha)&&e){var c=function(e,t){try{var n,o,r,a,i,s,d,l,c="string"==typeof e;if(c&&(s=e.indexOf("dd={"),d=e.indexOf("'cid':"),l=e.slice(s).indexOf("}"),o=e.indexOf("<style")>-1||e.indexOf("<script")>-1,r=e.indexOf('{"url":"')>-1,i=(a=s>-1&&d>s&&d<s+l)||r),y.allowHtmlContentTypeOnCaptcha&&c&&i&&o){if(a){var p,u,f=s+"dd=".length,h=f+e.slice(f).indexOf("}")+1,w=e.slice(f,h).replace("&#x2d;","-"),v=JSON.parse(w.replace(/'/g,'"')),g=v.s?"&s="+v.s:"",m=v.t?"&t="+v.t:"";"c"==v.rt?(p="/captcha/",u=v.e?"&e="+v.e:""):"i"==v.rt&&(p="/interstitial/",u=v.b?"&b="+v.b:""),n={url:"https://"+v.host+p+"?initialCid="+v.cid+"&hash="+v.hsh+m+g+"&referer="+encodeURIComponent(document.location.href)+u}}else if(r){var x=e.indexOf('{"url":"'),b=x+e.slice(x).indexOf("}")+1;n=JSON.parse(decodeURIComponent(e.slice(x,b).replace("&#x2d;","-")))}}else t&&(n=c?JSON.parse(e):e)}catch(e){return}return n}(e,d);c&&c.url&&H(c.url)&&(y.enableTagEvents&&w(s,{url:i,captchaUrl:c.url,responseUrl:c.url}),o&&R(c.url),n&&r&&r.abort())}}}if(y.exposeCaptchaFunction&&(window.displayDataDomeCaptchaPage=R,window.displayDataDomeResponsePage=R),y.sessionByHeader){var j=m(document.cookie);null!=j&&g&&localStorage.setItem&&localStorage.setItem("ddSession",j)}!function(e,t,a,i,s,d){var l=d?r:o;if(window.XMLHttpRequest){var c=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(){void 0!==this.addEventListener&&this.addEventListener("load",(function(n){var o=n.currentTarget;if(("text"===o.responseType||""===o.responseType||"json"===o.responseType||"blob"===o.responseType)&&O(o.responseURL,e,t)){try{for(var r,s=o.getAllResponseHeaders().trim().split(/[\r\n]+/),d=0;d<s.length;d++){var c=s[d].split(": ");if(c.shift().toLowerCase()===l){r=c[0],b(r);break}}}catch(e){}if("blob"===o.responseType&&"undefined"!=typeof FileReader){var p=new FileReader;p.onload=function(e){"string"==typeof e.target.result&&D(e.target.result,o.getAllResponseHeaders(),a,i,o,o.responseURL)},p.readAsText(o.response)}else D("json"===o.responseType?o.response:o.responseText,o.getAllResponseHeaders(),a,i,o,o.responseURL)}})),c&&c.apply(this,arguments);try{arguments.length>1&&arguments[1]&&(!T(arguments[1])||O(arguments[1],e,t))&&(y.withCredentials&&(this.withCredentials=!0),y.sessionByHeader&&(this._dd_hook||(this.setRequestHeader(n,x()),this._dd_hook=!0)))}catch(e){}}}if(s&&window.Request&&"function"==typeof window.Request){var p=window.Request;window.Request=function(){if(arguments.length>1&&arguments[1].signal)try{delete arguments[1].signal}catch(e){}return new p(arguments[0],arguments[1])}}if(window.fetch){var u=window.fetch;window.fetch=function(){if(arguments.length>1&&arguments[1]&&arguments[1].trustToken)return u.apply(this,arguments);if(s&&arguments.length>1&&arguments[1]&&void 0!==arguments[1].signal&&"string"==typeof arguments[0]&&(!T(arguments[0])||O(arguments[0],e,t)))try{delete arguments[1].signal}catch(e){}var o;if((y.sessionByHeader||y.withCredentials)&&("string"==typeof arguments[0]?o=arguments[0]:"object"==typeof arguments[0]&&"string"==typeof arguments[0].url&&(o=arguments[0].url),"string"==typeof o&&(!T(o)||O(o,e,t)))){var r="function"==typeof Headers&&"function"==typeof Headers.prototype.append;if("object"==typeof arguments[0]&&"string"==typeof arguments[0].url)y.withCredentials&&(arguments[0]["credentials"]="include"),y.sessionByHeader&&(arguments[0].headers||r&&(arguments[0].headers=new Headers),arguments[0].headers&&arguments[0].headers.append(n,x()));else if(arguments.length>=1){if(null==arguments[1]){for(var d=[],c=0;c<arguments.length;++c)d[c]=arguments[c];(arguments=d)[1]={}}y.sessionByHeader&&(null==arguments[1].headers&&(arguments[1].headers={}),r&&arguments[1].headers.constructor===Headers?arguments[1].headers.append(n,x()):arguments[1].headers[n]=x()),y.withCredentials&&(arguments[1]["credentials"]="include")}}var p=u.apply(this,arguments);return void 0===p.then||p.then((function(n){n.clone().text().then((function(o){if(y.sessionByHeader)try{var r=n.headers.get(l);r&&b(r)}catch(e){}try{var s=JSON.parse(o);O(n.url,e,t)&&D(s,n.headers,a,i,null,n.url)}catch(e){y.allowHtmlContentTypeOnCaptcha&&D(o,n.headers,a,i,null,n.url)}}))}))["catch"]((function(){})),p}}}(y.ajaxListenerPaths,y.ajaxListenerPathsExclusion,!0,!y.exposeCaptchaFunction,y.overrideAbortFetch,y.isSalesforce),y.enableTagEvents&&w(i)}(window.ddCaptchaOptions);