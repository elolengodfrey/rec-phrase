(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(t,e,n){"use strict";n.r(e);var o=n(50),a=n(34);function r(t,e){var n=JSON.parse(t.dataset.info),o=n.name,r=n.className;switch(e){case"small":c({button:t,followName:o,followType:r,style:"follow"}),t.textContent="+";break;case"follow-back":c({button:t,followName:o,followType:r,style:"follow-back"}),t.textContent=Object(a.a)("core.follow_back");break;default:c({button:t,followName:o,followType:r,style:"follow"}),t.textContent=Object(a.a)("core.follow")}}function c(t){var e=t.button,n=t.followType,o=t.followName,a=t.style,r="",c="";switch(void 0===a?"":a){default:r="Follow ".concat(n.toLowerCase(),": ").concat(o),c="false";break;case"follow-back":r="Follow ".concat(n.toLowerCase()," back: ").concat(o),c="false";break;case"following":r="Follow ".concat(n.toLowerCase(),": ").concat(o),c="true";break;case"self":r="Edit profile"}e.setAttribute("aria-label",r),0===c.length?e.removeAttribute("aria-pressed"):e.setAttribute("aria-pressed",c)}function i(t,e){var n=JSON.parse(t.dataset.info),o=n.name,r=n.className;t.dataset.verb="follow",function(t,e){t.textContent="small"===e?"\u2713":Object(a.a)("core.following")}(t,e),t.classList.remove("crayons-btn--primary"),t.classList.remove("crayons-btn--secondary"),t.classList.add("crayons-btn--outlined"),c({button:t,followName:o,followType:r,style:"following"})}function l(t){t.dataset.verb="self",t.textContent=Object(a.a)("core.edit_profile"),c({button:t,followName:"",followType:"",style:"self"})}function s(t,e,n){var o=n.style,a=n.followStyle;t.dataset.verb="unfollow",t.classList.remove("crayons-btn--outlined"),"primary"===a?t.classList.add("crayons-btn--primary"):"secondary"===a&&t.classList.add("crayons-btn--secondary"),r(t,"follow-back"===e?e:o)}function u(t){var e,n,o,a,c,u=t.target;if(u.classList.contains("follow-action-button")||u.classList.contains("follow-user")){if("logged-out"===document.body.getAttribute("data-user-status"))return void showLoginModal();n=(e=u).dataset.verb,o=JSON.parse(e.dataset.info),a=o.style,c=Array.from(document.getElementsByClassName("follow-action-button")).filter((function(t){var e=t.dataset.info;return!!e&&JSON.parse(e).id===o.id})),c.forEach((function(t){switch(t.classList.add("showing"),n){case"follow":case"follow-back":s(t,n,o);break;case"login":r(t,a);break;case"self":l(t);break;default:i(t,a)}}));var f=u.dataset.verb;if("self"===f)return void(window.location.href="/settings");var d=JSON.parse(u.dataset.info),w=d.className,b=d.id,m=new FormData;m.append("followable_type",w),m.append("followable_id",b),m.append("verb",f),getCsrfToken().then(sendFetch("follow-creation",m)).then((function(t){200!==t.status&&showModalAfterError({response:t,element:"user",action_ing:"following",action_past:"followed",timeframe:"for a day"})}))}}function f(t,e){var n=JSON.parse(e.dataset.info),o=n.style;switch(e.classList.add("showing"),t){case"true":case"mutual":i(e,o);break;case"follow-back":r(e,t);break;case"false":s(e,"follow",n);break;case"self":l(e);break;default:r(e,o)}}function d(){var t=document.querySelectorAll(".follow-action-button.follow-user:not([data-fetched])");if(0!==t.length){var e,n,o,a={};Array.from(t,(function(t){t.dataset.fetched="fetched";var e=document.body.dataset.userStatus,n=JSON.parse(t.dataset.info),o=n.name,i=n.className;if("logged-out"===e){r(t,n.style)}else{c({button:t,followType:i,followName:o});var l=n.id;a[l]?a[l].push(t):a[l]=[t]}})),Object.keys(a).length>0&&(e=a,n=new URL("/follows/bulk_show",document.location),o=new URLSearchParams,Object.keys(e).forEach((function(t){o.append("ids[]",t)})),o.append("followable_type","User"),n.search=o,fetch(n,{method:"GET",headers:{Accept:"application/json","X-CSRF-Token":window.csrfToken,"Content-Type":"application/json"},credentials:"same-origin"}).then((function(t){return t.json()})).then((function(t){Object.keys(t).forEach((function(n){e[n].forEach((function(e){f(t[n],e)}))}))})))}}function w(){var t=document.querySelectorAll(".follow-action-button:not(.follow-user):not([data-fetched])"),e="logged-in"===document.body.getAttribute("data-user-status")?userData():null,n=e?JSON.parse(e.followed_tags).map((function(t){return t.id})):[],o=new Set(n);t.forEach((function(t){var n=t.dataset.info,a=JSON.parse(n),r=a.className;(c({button:t,followType:r,followName:a.name}),"Tag"===r&&e)?(t.dataset.fetched=!0,f(o.has(a.id)?"true":"false",t)):function(t,e){t.dataset.fetched="fetched",fetch("/follows/".concat(e.id,"?followable_type=").concat(e.className),{method:"GET",headers:{Accept:"application/json","X-CSRF-Token":window.csrfToken,"Content-Type":"application/json"},credentials:"same-origin"}).then((function(t){return t.text()})).then((function(e){f(e,t)}))}(t,a)}))}d(),w(),document.getElementById("page-content-inner").addEventListener("click",u),document.getElementById("page-content-inner").dataset.followClicksInitialized=!0;var b=new MutationObserver((function(t){t.forEach((function(t){"childList"===t.type&&(d(),w())}))}));document.querySelectorAll("[data-follow-button-container]").forEach((function(t){b.observe(t,{childList:!0,subtree:!0})})),Object(o.a)().then((function(t){t.on("change",(function(){b.disconnect()}))})),window.addEventListener("beforeunload",(function(){b.disconnect()}))},34:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(27),a=n.n(o),r=document.getElementById("i18n-translations");function c(t){return a.a.t(t)}r&&(a.a.translations=JSON.parse(r.dataset.translations)),a.a.defaultLocale="en",a.a.locale=document.body.dataset.locale},50:function(t,e,n){"use strict";function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,a,r=[],c=!0,i=!1;try{for(n=n.call(t);!(c=(o=n.next()).done)&&(r.push(o.value),!e||r.length!==e);c=!0);}catch(l){i=!0,a=l}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return r}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function r(t,e,n,o,a,r,c){try{var i=t[r](c),l=i.value}catch(s){return void n(s)}i.done?e(l):Promise.resolve(l).then(o,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var c=t.apply(e,n);function i(t){r(c,o,a,i,l,"next",t)}function l(t){r(c,o,a,i,l,"throw",t)}i(void 0)}))}}function i(t,e){e.setAttribute("aria-expanded","false"),t.classList.remove("desktop","showing"),delete t.dataset.clicked}n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return b})),n.d(e,"d",(function(){return m}));var l=document.getElementById("first-nav-link");function s(t,e){"DEV-Native-ios"===navigator.userAgent&&document.body.classList.add("dev-ios-native-body");var n=t.classList;e.addEventListener("click",(function(o){n.contains("showing")&&t.dataset.clicked?(i(t,e),e.focus()):(!function(t,e){e.setAttribute("aria-expanded","true"),t.classList.add("showing"),l&&function t(){document.activeElement!==l&&(l.focus(),window.requestAnimationFrame(t))}()}(t,e),t.dataset.clicked="clicked")})),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|DEV-Native-ios/i.test(navigator.userAgent)?t.addEventListener("focus",(function(t){e.setAttribute("aria-expanded","true")})):t.addEventListener("keyup",(function(o){"Escape"===o.key&&n.contains("showing")&&(i(t,e),e.focus())})),t.querySelector(".crayons-header__menu__dropdown").addEventListener("click",(function(n){n.stopPropagation(),i(t,e),e.focus()})),document.addEventListener("click",(function(n){n.target.closest("#member-menu-button")!==e&&i(t,e)}));var o=document.getElementById("second-last-nav-link");document.getElementById("last-nav-link").addEventListener("blur",(function(n){setTimeout((function(){document.activeElement!==o&&i(t,e)}),10)}))}function u(){var t=document.body.dataset.leftNavState,e=void 0===t?"closed":t;document.body.dataset.leftNavState="open"===e?"closed":"open"}function f(t){var e=t.target;e.nextElementSibling.classList.remove("hidden"),e.classList.add("hidden")}function d(){return w.apply(this,arguments)}function w(){return w=c((function*(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;return new Promise((function(e,n){var o=setTimeout((function(){clearInterval(a),n(new Error("Unable to resolve InstantClick"))}),t),a=setInterval((function(){"undefined"!==typeof InstantClick&&(clearTimeout(o),clearInterval(a),e(InstantClick))}))}))})),w.apply(this,arguments)}function b(t,e){t.forEach((function(t){t.onclick=u})),e.forEach((function(t){t.onclick=f}))}function m(t,e){e.filter((function(t){return o(t,2)[1]})).forEach((function(e){var n=o(e,2),a=n[0],r=n[1];t===a?(r.blur(),r.setAttribute("aria-current","page")):r.removeAttribute("aria-current")}))}}},[[100,71,2]]]);
//# sourceMappingURL=followButtons-e360a7e57864a6191c9b.chunk.js.map