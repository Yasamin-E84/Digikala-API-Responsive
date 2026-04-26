(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const $e="/Digikala-API-Responsive/",Ke=`${$e}db.json`;function Qe(e){if(typeof e!="string")return e;let s=e.replace(/^\.\/src\/img\//,"./img/").replace(/^\/Digikala-API-Responsive\/img\//,"./img/").replace(/\/Story\//g,"/story/");return s.startsWith("./img/")&&(s=`${$e}img/${s.slice(6)}`),s}function fe(e){if(Array.isArray(e))return e.map(s=>fe(s));if(e&&typeof e=="object"){const s={};return Object.entries(e).forEach(([t,i])=>{s[t]=fe(i)}),s}return Qe(e)}async function A(){const e=await fetch(Ke);if(!e.ok)throw new Error("Failed to fetch db.json");const s=await e.json();return fe(s)}function ge(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function he(e={},s={}){const t=["__proto__","constructor","prototype"];Object.keys(s).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=s[i]:ge(s[i])&&ge(e[i])&&Object.keys(s[i]).length>0&&he(e[i],s[i])})}const Ce={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function _(){const e=typeof document<"u"?document:{};return he(e,Ce),e}const Ze={document:Ce,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function V(){const e=typeof window<"u"?window:{};return he(e,Ze),e}function Je(e=""){return e.trim().split(" ").filter(s=>!!s.trim())}function et(e){const s=e;Object.keys(s).forEach(t=>{try{s[t]=null}catch{}try{delete s[t]}catch{}})}function ke(e,s=0){return setTimeout(e,s)}function ee(){return Date.now()}function tt(e){const s=V();let t;return s.getComputedStyle&&(t=s.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}function st(e,s="x"){const t=V();let i,n,r;const l=tt(e);return t.WebKitCSSMatrix?(n=l.transform||l.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(o=>o.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(n==="none"?"":n)):(r=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),s==="x"&&(t.WebKitCSSMatrix?n=r.m41:i.length===16?n=parseFloat(i[12]):n=parseFloat(i[4])),s==="y"&&(t.WebKitCSSMatrix?n=r.m42:i.length===16?n=parseFloat(i[13]):n=parseFloat(i[5])),n||0}function K(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function it(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function D(...e){const s=Object(e[0]);for(let t=1;t<e.length;t+=1){const i=e[t];if(i!=null&&!it(i)){const n=Object.keys(Object(i)).filter(r=>r!=="__proto__"&&r!=="constructor"&&r!=="prototype");for(let r=0,l=n.length;r<l;r+=1){const o=n[r],a=Object.getOwnPropertyDescriptor(i,o);a!==void 0&&a.enumerable&&(K(s[o])&&K(i[o])?i[o].__swiper__?s[o]=i[o]:D(s[o],i[o]):!K(s[o])&&K(i[o])?(s[o]={},i[o].__swiper__?s[o]=i[o]:D(s[o],i[o])):s[o]=i[o])}}}return s}function Y(e,s,t){e.style.setProperty(s,t)}function Pe({swiper:e,targetPosition:s,side:t}){const i=V(),n=-e.translate;let r=null,l;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const a=s>n?"next":"prev",d=(u,b)=>a==="next"&&u>=b||a==="prev"&&u<=b,h=()=>{l=new Date().getTime(),r===null&&(r=l);const u=Math.max(Math.min((l-r)/o,1),0),b=.5-Math.cos(u*Math.PI)/2;let f=n+b*(s-n);if(d(f,s)&&(f=s),e.wrapperEl.scrollTo({[t]:f}),d(f,s)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[t]:f})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(h)};h()}function F(e,s=""){const t=V(),i=[...e.children];return t.HTMLSlotElement&&e instanceof HTMLSlotElement&&i.push(...e.assignedElements()),s?i.filter(n=>n.matches(s)):i}function nt(e,s){const t=[s];for(;t.length>0;){const i=t.shift();if(e===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function rt(e,s){const t=V();let i=s.contains(e);return!i&&t.HTMLSlotElement&&s instanceof HTMLSlotElement&&(i=[...s.assignedElements()].includes(e),i||(i=nt(e,s))),i}function te(e){try{console.warn(e);return}catch{}}function se(e,s=[]){const t=document.createElement(e);return t.classList.add(...Array.isArray(s)?s:Je(s)),t}function lt(e,s){const t=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;s?i.matches(s)&&t.push(i):t.push(i),e=i}return t}function at(e,s){const t=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;s?i.matches(s)&&t.push(i):t.push(i),e=i}return t}function R(e,s){return V().getComputedStyle(e,null).getPropertyValue(s)}function ie(e){let s=e,t;if(s){for(t=0;(s=s.previousSibling)!==null;)s.nodeType===1&&(t+=1);return t}}function Ie(e,s){const t=[];let i=e.parentElement;for(;i;)s?i.matches(s)&&t.push(i):t.push(i),i=i.parentElement;return t}function ue(e,s,t){const i=V();return e[s==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue(s==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue(s==="width"?"margin-left":"margin-bottom"))}function q(e){return(Array.isArray(e)?e:[e]).filter(s=>!!s)}function pe(e,s=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(s):e.innerHTML=s}let ne;function ot(){const e=V(),s=_();return{smoothScroll:s.documentElement&&s.documentElement.style&&"scrollBehavior"in s.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&s instanceof e.DocumentTouch)}}function ze(){return ne||(ne=ot()),ne}let re;function dt({userAgent:e}={}){const s=ze(),t=V(),i=t.navigator.platform,n=e||t.navigator.userAgent,r={ios:!1,android:!1},l=t.screen.width,o=t.screen.height,a=n.match(/(Android);?[\s\/]+([\d.]+)?/);let d=n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const h=n.match(/(iPod)(.*OS\s([\d_]+))?/),u=!d&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),b=i==="Win32";let f=i==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&f&&s.touch&&m.indexOf(`${l}x${o}`)>=0&&(d=n.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),f=!1),a&&!b&&(r.os="android",r.android=!0),(d||u||h)&&(r.os="ios",r.ios=!0),r}function Ae(e={}){return re||(re=dt(e)),re}let le;function ct(){const e=V(),s=Ae();let t=!1;function i(){const o=e.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(i()){const o=String(e.navigator.userAgent);if(o.includes("Version/")){const[a,d]=o.split("Version/")[1].split(" ")[0].split(".").map(h=>Number(h));t=a<16||a===16&&d<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=i(),l=r||n&&s.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:l,isWebView:n}}function je(){return le||(le=ct()),le}function ft({swiper:e,on:s,emit:t}){const i=V();let n=null,r=null;const l=()=>{!e||e.destroyed||!e.initialized||(t("beforeResize"),t("resize"))},o=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(h=>{r=i.requestAnimationFrame(()=>{const{width:u,height:b}=e;let f=u,m=b;h.forEach(({contentBoxSize:v,contentRect:x,target:c})=>{c&&c!==e.el||(f=x?x.width:(v[0]||v).inlineSize,m=x?x.height:(v[0]||v).blockSize)}),(f!==u||m!==b)&&l()})}),n.observe(e.el))},a=()=>{r&&i.cancelAnimationFrame(r),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},d=()=>{!e||e.destroyed||!e.initialized||t("orientationchange")};s("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){o();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",d)}),s("destroy",()=>{a(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",d)})}function ut({swiper:e,extendParams:s,on:t,emit:i}){const n=[],r=V(),l=(d,h={})=>{const u=r.MutationObserver||r.WebkitMutationObserver,b=new u(f=>{if(e.__preventObserver__)return;if(f.length===1){i("observerUpdate",f[0]);return}const m=function(){i("observerUpdate",f[0])};r.requestAnimationFrame?r.requestAnimationFrame(m):r.setTimeout(m,0)});b.observe(d,{attributes:typeof h.attributes>"u"?!0:h.attributes,childList:e.isElement||(typeof h.childList>"u"?!0:h).childList,characterData:typeof h.characterData>"u"?!0:h.characterData}),n.push(b)},o=()=>{if(e.params.observer){if(e.params.observeParents){const d=Ie(e.hostEl);for(let h=0;h<d.length;h+=1)l(d[h])}l(e.hostEl,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}},a=()=>{n.forEach(d=>{d.disconnect()}),n.splice(0,n.length)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",o),t("destroy",a)}var pt={on(e,s,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof s!="function")return i;const n=t?"unshift":"push";return e.split(" ").forEach(r=>{i.eventsListeners[r]||(i.eventsListeners[r]=[]),i.eventsListeners[r][n](s)}),i},once(e,s,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof s!="function")return i;function n(...r){i.off(e,n),n.__emitterProxy&&delete n.__emitterProxy,s.apply(i,r)}return n.__emitterProxy=s,i.on(e,n,t)},onAny(e,s){const t=this;if(!t.eventsListeners||t.destroyed||typeof e!="function")return t;const i=s?"unshift":"push";return t.eventsAnyListeners.indexOf(e)<0&&t.eventsAnyListeners[i](e),t},offAny(e){const s=this;if(!s.eventsListeners||s.destroyed||!s.eventsAnyListeners)return s;const t=s.eventsAnyListeners.indexOf(e);return t>=0&&s.eventsAnyListeners.splice(t,1),s},off(e,s){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||e.split(" ").forEach(i=>{typeof s>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((n,r)=>{(n===s||n.__emitterProxy&&n.__emitterProxy===s)&&t.eventsListeners[i].splice(r,1)})}),t},emit(...e){const s=this;if(!s.eventsListeners||s.destroyed||!s.eventsListeners)return s;let t,i,n;return typeof e[0]=="string"||Array.isArray(e[0])?(t=e[0],i=e.slice(1,e.length),n=s):(t=e[0].events,i=e[0].data,n=e[0].context||s),i.unshift(n),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(o=>{o.apply(n,[l,...i])}),s.eventsListeners&&s.eventsListeners[l]&&s.eventsListeners[l].forEach(o=>{o.apply(n,i)})}),s}};function mt(){const e=this;let s,t;const i=e.el;typeof e.params.width<"u"&&e.params.width!==null?s=e.params.width:s=i.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?t=e.params.height:t=i.clientHeight,!(s===0&&e.isHorizontal()||t===0&&e.isVertical())&&(s=s-parseInt(R(i,"padding-left")||0,10)-parseInt(R(i,"padding-right")||0,10),t=t-parseInt(R(i,"padding-top")||0,10)-parseInt(R(i,"padding-bottom")||0,10),Number.isNaN(s)&&(s=0),Number.isNaN(t)&&(t=0),Object.assign(e,{width:s,height:t,size:e.isHorizontal()?s:t}))}function ht(){const e=this;function s(L,w){return parseFloat(L.getPropertyValue(e.getDirectionLabel(w))||0)}const t=e.params,{wrapperEl:i,slidesEl:n,rtlTranslate:r,wrongRTL:l}=e,o=e.virtual&&t.virtual.enabled,a=o?e.virtual.slides.length:e.slides.length,d=F(n,`.${e.params.slideClass}, swiper-slide`),h=o?e.virtual.slides.length:d.length;let u=[];const b=[],f=[];let m=t.slidesOffsetBefore;typeof m=="function"&&(m=t.slidesOffsetBefore.call(e));let v=t.slidesOffsetAfter;typeof v=="function"&&(v=t.slidesOffsetAfter.call(e));const x=e.snapGrid.length,c=e.slidesGrid.length,p=e.size-m-v;let g=t.spaceBetween,y=-m,T=0,C=0;if(typeof p>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*p:typeof g=="string"&&(g=parseFloat(g)),e.virtualSize=-g-m-v,d.forEach(L=>{r?L.style.marginLeft="":L.style.marginRight="",L.style.marginBottom="",L.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Y(i,"--swiper-centered-offset-before",""),Y(i,"--swiper-centered-offset-after","")),t.cssMode&&(Y(i,"--swiper-slides-offset-before",`${m}px`),Y(i,"--swiper-slides-offset-after",`${v}px`));const $=t.grid&&t.grid.rows>1&&e.grid;$?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let S;const P=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(L=>typeof t.breakpoints[L].slidesPerView<"u").length>0;for(let L=0;L<h;L+=1){S=0;const w=d[L];if(!(w&&($&&e.grid.updateSlide(L,w,d),R(w,"display")==="none"))){if(o&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(S=t.virtual.slidesPerViewAutoSlideSize),S&&w&&(t.roundLengths&&(S=Math.floor(S)),w.style[e.getDirectionLabel("width")]=`${S}px`);else if(t.slidesPerView==="auto"){P&&(w.style[e.getDirectionLabel("width")]="");const M=getComputedStyle(w),k=w.style.transform,I=w.style.webkitTransform;if(k&&(w.style.transform="none"),I&&(w.style.webkitTransform="none"),t.roundLengths)S=e.isHorizontal()?ue(w,"width"):ue(w,"height");else{const O=s(M,"width"),G=s(M,"padding-left"),z=s(M,"padding-right"),E=s(M,"margin-left"),j=s(M,"margin-right"),B=M.getPropertyValue("box-sizing");if(B&&B==="border-box")S=O+E+j;else{const{clientWidth:N,offsetWidth:Ue}=w;S=O+G+z+E+j+(Ue-N)}}k&&(w.style.transform=k),I&&(w.style.webkitTransform=I),t.roundLengths&&(S=Math.floor(S))}else S=(p-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(S=Math.floor(S)),w&&(w.style[e.getDirectionLabel("width")]=`${S}px`);w&&(w.swiperSlideSize=S),f.push(S),t.centeredSlides?(y=y+S/2+T/2+g,T===0&&L!==0&&(y=y-p/2-g),L===0&&(y=y-p/2-g),Math.abs(y)<1/1e3&&(y=0),t.roundLengths&&(y=Math.floor(y)),C%t.slidesPerGroup===0&&u.push(y),b.push(y)):(t.roundLengths&&(y=Math.floor(y)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&u.push(y),b.push(y),y=y+S+g),e.virtualSize+=S+g,T=S,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,p)+v,r&&l&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${e.virtualSize+g}px`),t.setWrapperSize&&(i.style[e.getDirectionLabel("width")]=`${e.virtualSize+g}px`),$&&e.grid.updateWrapperSize(S,u),!t.centeredSlides){const L=t.slidesPerView!=="auto"&&t.slidesPerView%1!==0,w=t.snapToSlideEdge&&!t.loop&&(t.slidesPerView==="auto"||L);let M=u.length;if(w){let I;if(t.slidesPerView==="auto"){I=1;let O=0;for(let G=f.length-1;G>=0&&(O+=f[G]+(G<f.length-1?g:0),O<=p);G-=1)I=f.length-G}else I=Math.floor(t.slidesPerView);M=Math.max(h-I,0)}const k=[];for(let I=0;I<u.length;I+=1){let O=u[I];t.roundLengths&&(O=Math.floor(O)),w?I<=M&&k.push(O):u[I]<=e.virtualSize-p&&k.push(O)}u=k,Math.floor(e.virtualSize-p)-Math.floor(u[u.length-1])>1&&(w||u.push(e.virtualSize-p))}if(o&&t.loop){const L=f[0]+g;if(t.slidesPerGroup>1){const w=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/t.slidesPerGroup),M=L*t.slidesPerGroup;for(let k=0;k<w;k+=1)u.push(u[u.length-1]+M)}for(let w=0;w<e.virtual.slidesBefore+e.virtual.slidesAfter;w+=1)t.slidesPerGroup===1&&u.push(u[u.length-1]+L),b.push(b[b.length-1]+L),e.virtualSize+=L}if(u.length===0&&(u=[0]),g!==0){const L=e.isHorizontal()&&r?"marginLeft":e.getDirectionLabel("marginRight");d.filter((w,M)=>!t.cssMode||t.loop?!0:M!==d.length-1).forEach(w=>{w.style[L]=`${g}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let L=0;f.forEach(M=>{L+=M+(g||0)}),L-=g;const w=L>p?L-p:0;u=u.map(M=>M<=0?-m:M>w?w+v:M)}if(t.centerInsufficientSlides){let L=0;if(f.forEach(w=>{L+=w+(g||0)}),L-=g,L<p){const w=(p-L)/2;u.forEach((M,k)=>{u[k]=M-w}),b.forEach((M,k)=>{b[k]=M+w})}}if(Object.assign(e,{slides:d,snapGrid:u,slidesGrid:b,slidesSizesGrid:f}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Y(i,"--swiper-centered-offset-before",`${-u[0]}px`),Y(i,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const L=-e.snapGrid[0],w=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(M=>M+L),e.slidesGrid=e.slidesGrid.map(M=>M+w)}if(h!==a&&e.emit("slidesLengthChange"),u.length!==x&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),b.length!==c&&e.emit("slidesGridLengthChange"),t.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!o&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const L=`${t.containerModifierClass}backface-hidden`,w=e.el.classList.contains(L);h<=t.maxBackfaceHiddenSlides?w||e.el.classList.add(L):w&&e.el.classList.remove(L)}}function gt(e){const s=this,t=[],i=s.virtual&&s.params.virtual.enabled;let n=0,r;typeof e=="number"?s.setTransition(e):e===!0&&s.setTransition(s.params.speed);const l=o=>i?s.slides[s.getSlideIndexByData(o)]:s.slides[o];if(s.params.slidesPerView!=="auto"&&s.params.slidesPerView>1)if(s.params.centeredSlides)(s.visibleSlides||[]).forEach(o=>{t.push(o)});else for(r=0;r<Math.ceil(s.params.slidesPerView);r+=1){const o=s.activeIndex+r;if(o>s.slides.length&&!i)break;t.push(l(o))}else t.push(l(s.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const o=t[r].offsetHeight;n=o>n?o:n}(n||n===0)&&(s.wrapperEl.style.height=`${n}px`)}function vt(){const e=this,s=e.slides,t=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<s.length;i+=1)s[i].swiperSlideOffset=(e.isHorizontal()?s[i].offsetLeft:s[i].offsetTop)-t-e.cssOverflowAdjustment()}const ve=(e,s,t)=>{s&&!e.classList.contains(t)?e.classList.add(t):!s&&e.classList.contains(t)&&e.classList.remove(t)};function xt(e=this&&this.translate||0){const s=this,t=s.params,{slides:i,rtlTranslate:n,snapGrid:r}=s;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&s.updateSlidesOffset();let l=-e;n&&(l=e),s.visibleSlidesIndexes=[],s.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*s.size:typeof o=="string"&&(o=parseFloat(o));for(let a=0;a<i.length;a+=1){const d=i[a];let h=d.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(h-=i[0].swiperSlideOffset);const u=(l+(t.centeredSlides?s.minTranslate():0)-h)/(d.swiperSlideSize+o),b=(l-r[0]+(t.centeredSlides?s.minTranslate():0)-h)/(d.swiperSlideSize+o),f=-(l-h),m=f+s.slidesSizesGrid[a],v=f>=0&&f<=s.size-s.slidesSizesGrid[a],x=f>=0&&f<s.size-1||m>1&&m<=s.size||f<=0&&m>=s.size;x&&(s.visibleSlides.push(d),s.visibleSlidesIndexes.push(a)),ve(d,x,t.slideVisibleClass),ve(d,v,t.slideFullyVisibleClass),d.progress=n?-u:u,d.originalProgress=n?-b:b}}function bt(e){const s=this;if(typeof e>"u"){const h=s.rtlTranslate?-1:1;e=s&&s.translate&&s.translate*h||0}const t=s.params,i=s.maxTranslate()-s.minTranslate();let{progress:n,isBeginning:r,isEnd:l,progressLoop:o}=s;const a=r,d=l;if(i===0)n=0,r=!0,l=!0;else{n=(e-s.minTranslate())/i;const h=Math.abs(e-s.minTranslate())<1,u=Math.abs(e-s.maxTranslate())<1;r=h||n<=0,l=u||n>=1,h&&(n=0),u&&(n=1)}if(t.loop){const h=s.getSlideIndexByData(0),u=s.getSlideIndexByData(s.slides.length-1),b=s.slidesGrid[h],f=s.slidesGrid[u],m=s.slidesGrid[s.slidesGrid.length-1],v=Math.abs(e);v>=b?o=(v-b)/m:o=(v+m-f)/m,o>1&&(o-=1)}Object.assign(s,{progress:n,progressLoop:o,isBeginning:r,isEnd:l}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&s.updateSlidesProgress(e),r&&!a&&s.emit("reachBeginning toEdge"),l&&!d&&s.emit("reachEnd toEdge"),(a&&!r||d&&!l)&&s.emit("fromEdge"),s.emit("progress",n)}const ae=(e,s,t)=>{s&&!e.classList.contains(t)?e.classList.add(t):!s&&e.classList.contains(t)&&e.classList.remove(t)};function wt(){const e=this,{slides:s,params:t,slidesEl:i,activeIndex:n}=e,r=e.virtual&&t.virtual.enabled,l=e.grid&&t.grid&&t.grid.rows>1,o=u=>F(i,`.${t.slideClass}${u}, swiper-slide${u}`)[0];let a,d,h;if(r)if(t.loop){let u=n-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${u}"]`)}else a=o(`[data-swiper-slide-index="${n}"]`);else l?(a=s.find(u=>u.column===n),h=s.find(u=>u.column===n+1),d=s.find(u=>u.column===n-1)):a=s[n];a&&(l||(h=at(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!h&&(h=s[0]),d=lt(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d===0&&(d=s[s.length-1]))),s.forEach(u=>{ae(u,u===a,t.slideActiveClass),ae(u,u===h,t.slideNextClass),ae(u,u===d,t.slidePrevClass)}),e.emitSlidesClasses()}const J=(e,s)=>{if(!e||e.destroyed||!e.params)return;const t=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,i=s.closest(t());if(i){let n=i.querySelector(`.${e.params.lazyPreloaderClass}`);!n&&e.isElement&&(i.shadowRoot?n=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(n=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),n&&!n.lazyPreloaderManaged&&n.remove())})),n&&!n.lazyPreloaderManaged&&n.remove()}},oe=(e,s)=>{if(!e.slides[s])return;const t=e.slides[s].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},me=e=>{if(!e||e.destroyed||!e.params)return;let s=e.params.lazyPreloadPrevNext;const t=e.slides.length;if(!t||!s||s<0)return;s=Math.min(s,t);const i=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),n=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const l=n,o=[l-s];o.push(...Array.from({length:s}).map((a,d)=>l+i+d)),e.slides.forEach((a,d)=>{o.includes(a.column)&&oe(e,d)});return}const r=n+i-1;if(e.params.rewind||e.params.loop)for(let l=n-s;l<=r+s;l+=1){const o=(l%t+t)%t;(o<n||o>r)&&oe(e,o)}else for(let l=Math.max(n-s,0);l<=Math.min(r+s,t-1);l+=1)l!==n&&(l>r||l<n)&&oe(e,l)};function yt(e){const{slidesGrid:s,params:t}=e,i=e.rtlTranslate?e.translate:-e.translate;let n;for(let r=0;r<s.length;r+=1)typeof s[r+1]<"u"?i>=s[r]&&i<s[r+1]-(s[r+1]-s[r])/2?n=r:i>=s[r]&&i<s[r+1]&&(n=r+1):i>=s[r]&&(n=r);return t.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function St(e){const s=this,t=s.rtlTranslate?s.translate:-s.translate,{snapGrid:i,params:n,activeIndex:r,realIndex:l,snapIndex:o}=s;let a=e,d;const h=f=>{let m=f-s.virtual.slidesBefore;return m<0&&(m=s.virtual.slides.length+m),m>=s.virtual.slides.length&&(m-=s.virtual.slides.length),m};if(typeof a>"u"&&(a=yt(s)),i.indexOf(t)>=0)d=i.indexOf(t);else{const f=Math.min(n.slidesPerGroupSkip,a);d=f+Math.floor((a-f)/n.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),a===r&&!s.params.loop){d!==o&&(s.snapIndex=d,s.emit("snapIndexChange"));return}if(a===r&&s.params.loop&&s.virtual&&s.params.virtual.enabled){s.realIndex=h(a);return}const u=s.grid&&n.grid&&n.grid.rows>1;let b;if(s.virtual&&n.virtual.enabled)n.loop?b=h(a):b=a;else if(u){const f=s.slides.find(v=>v.column===a);let m=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(s.slides.indexOf(f),0)),b=Math.floor(m/n.grid.rows)}else if(s.slides[a]){const f=s.slides[a].getAttribute("data-swiper-slide-index");f?b=parseInt(f,10):b=a}else b=a;Object.assign(s,{previousSnapIndex:o,snapIndex:d,previousRealIndex:l,realIndex:b,previousIndex:r,activeIndex:a}),s.initialized&&me(s),s.emit("activeIndexChange"),s.emit("snapIndexChange"),(s.initialized||s.params.runCallbacksOnInit)&&(l!==b&&s.emit("realIndexChange"),s.emit("slideChange"))}function Tt(e,s){const t=this,i=t.params;let n=e.closest(`.${i.slideClass}, swiper-slide`);!n&&t.isElement&&s&&s.length>1&&s.includes(e)&&[...s.slice(s.indexOf(e)+1,s.length)].forEach(o=>{!n&&o.matches&&o.matches(`.${i.slideClass}, swiper-slide`)&&(n=o)});let r=!1,l;if(n){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===n){r=!0,l=o;break}}if(n&&r)t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=l;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Lt={updateSize:mt,updateSlides:ht,updateAutoHeight:gt,updateSlidesOffset:vt,updateSlidesProgress:xt,updateProgress:bt,updateSlidesClasses:wt,updateActiveIndex:St,updateClickedSlide:Tt};function Mt(e=this.isHorizontal()?"x":"y"){const s=this,{params:t,rtlTranslate:i,translate:n,wrapperEl:r}=s;if(t.virtualTranslate)return i?-n:n;if(t.cssMode)return n;let l=st(r,e);return l+=s.cssOverflowAdjustment(),i&&(l=-l),l||0}function Et(e,s){const t=this,{rtlTranslate:i,params:n,wrapperEl:r,progress:l}=t;let o=0,a=0;const d=0;t.isHorizontal()?o=i?-e:e:a=e,n.roundLengths&&(o=Math.floor(o),a=Math.floor(a)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:a,n.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-a:n.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():a-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${a}px, ${d}px)`);let h;const u=t.maxTranslate()-t.minTranslate();u===0?h=0:h=(e-t.minTranslate())/u,h!==l&&t.updateProgress(e),t.emit("setTranslate",t.translate,s)}function $t(){return-this.snapGrid[0]}function Ct(){return-this.snapGrid[this.snapGrid.length-1]}function kt(e=0,s=this.params.speed,t=!0,i=!0,n){const r=this,{params:l,wrapperEl:o}=r;if(r.animating&&l.preventInteractionOnTransition)return!1;const a=r.minTranslate(),d=r.maxTranslate();let h;if(i&&e>a?h=a:i&&e<d?h=d:h=e,r.updateProgress(h),l.cssMode){const u=r.isHorizontal();if(s===0)o[u?"scrollLeft":"scrollTop"]=-h;else{if(!r.support.smoothScroll)return Pe({swiper:r,targetPosition:-h,side:u?"left":"top"}),!0;o.scrollTo({[u?"left":"top"]:-h,behavior:"smooth"})}return!0}return s===0?(r.setTransition(0),r.setTranslate(h),t&&(r.emit("beforeTransitionStart",s,n),r.emit("transitionEnd"))):(r.setTransition(s),r.setTranslate(h),t&&(r.emit("beforeTransitionStart",s,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(b){!r||r.destroyed||b.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var Pt={getTranslate:Mt,setTranslate:Et,minTranslate:$t,maxTranslate:Ct,translateTo:kt};function It(e,s){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${e}ms`,t.wrapperEl.style.transitionDelay=e===0?"0ms":""),t.emit("setTransition",e,s)}function Oe({swiper:e,runCallbacks:s,direction:t,step:i}){const{activeIndex:n,previousIndex:r}=e;let l=t;l||(n>r?l="next":n<r?l="prev":l="reset"),e.emit(`transition${i}`),s&&l==="reset"?e.emit(`slideResetTransition${i}`):s&&n!==r&&(e.emit(`slideChangeTransition${i}`),l==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`))}function zt(e=!0,s){const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Oe({swiper:t,runCallbacks:e,direction:s,step:"Start"}))}function At(e=!0,s){const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Oe({swiper:t,runCallbacks:e,direction:s,step:"End"}))}var jt={setTransition:It,transitionStart:zt,transitionEnd:At};function Ot(e=0,s,t=!0,i,n){typeof e=="string"&&(e=parseInt(e,10));const r=this;let l=e;l<0&&(l=0);const{params:o,snapGrid:a,slidesGrid:d,previousIndex:h,activeIndex:u,rtlTranslate:b,wrapperEl:f,enabled:m}=r;if(!m&&!i&&!n||r.destroyed||r.animating&&o.preventInteractionOnTransition)return!1;typeof s>"u"&&(s=r.params.speed);const v=Math.min(r.params.slidesPerGroupSkip,l);let x=v+Math.floor((l-v)/r.params.slidesPerGroup);x>=a.length&&(x=a.length-1);const c=-a[x];if(o.normalizeSlideIndex)for(let $=0;$<d.length;$+=1){const S=-Math.floor(c*100),P=Math.floor(d[$]*100),L=Math.floor(d[$+1]*100);typeof d[$+1]<"u"?S>=P&&S<L-(L-P)/2?l=$:S>=P&&S<L&&(l=$+1):S>=P&&(l=$)}if(r.initialized&&l!==u&&(!r.allowSlideNext&&(b?c>r.translate&&c>r.minTranslate():c<r.translate&&c<r.minTranslate())||!r.allowSlidePrev&&c>r.translate&&c>r.maxTranslate()&&(u||0)!==l))return!1;l!==(h||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(c);let p;l>u?p="next":l<u?p="prev":p="reset";const g=r.virtual&&r.params.virtual.enabled;if(!(g&&n)&&(b&&-c===r.translate||!b&&c===r.translate))return r.updateActiveIndex(l),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),o.effect!=="slide"&&r.setTranslate(c),p!=="reset"&&(r.transitionStart(t,p),r.transitionEnd(t,p)),!1;if(o.cssMode){const $=r.isHorizontal(),S=b?c:-c;if(s===0)g&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),g&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[$?"scrollLeft":"scrollTop"]=S})):f[$?"scrollLeft":"scrollTop"]=S,g&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return Pe({swiper:r,targetPosition:S,side:$?"left":"top"}),!0;f.scrollTo({[$?"left":"top"]:S,behavior:"smooth"})}return!0}const C=je().isSafari;return g&&!n&&C&&r.isElement&&r.virtual.update(!1,!1,l),r.setTransition(s),r.setTranslate(c),r.updateActiveIndex(l),r.updateSlidesClasses(),r.emit("beforeTransitionStart",s,i),r.transitionStart(t,p),s===0?r.transitionEnd(t,p):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(S){!r||r.destroyed||S.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,p))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function Ht(e=0,s,t=!0,i){typeof e=="string"&&(e=parseInt(e,10));const n=this;if(n.destroyed)return;typeof s>"u"&&(s=n.params.speed);const r=n.grid&&n.params.grid&&n.params.grid.rows>1;let l=e;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)l=l+n.virtual.slidesBefore;else{let o;if(r){const v=l*n.params.grid.rows;o=n.slides.find(x=>x.getAttribute("data-swiper-slide-index")*1===v).column}else o=n.getSlideIndexByData(l);const a=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:d,slidesOffsetBefore:h,slidesOffsetAfter:u}=n.params,b=d||!!h||!!u;let f=n.params.slidesPerView;f==="auto"?f=n.slidesPerViewDynamic():(f=Math.ceil(parseFloat(n.params.slidesPerView,10)),b&&f%2===0&&(f=f+1));let m=a-o<f;if(b&&(m=m||o<Math.ceil(f/2)),i&&b&&n.params.slidesPerView!=="auto"&&!r&&(m=!1),m){const v=b?o<n.activeIndex?"prev":"next":o-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?o+1:o-a+1,slideRealIndex:v==="next"?n.realIndex:void 0})}if(r){const v=l*n.params.grid.rows;l=n.slides.find(x=>x.getAttribute("data-swiper-slide-index")*1===v).column}else l=n.getSlideIndexByData(l)}return requestAnimationFrame(()=>{n.slideTo(l,s,t,i)}),n}function Bt(e,s=!0,t){const i=this,{enabled:n,params:r,animating:l}=i;if(!n||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);let o=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(o=Math.max(i.slidesPerViewDynamic("current",!0),1));const a=i.activeIndex<r.slidesPerGroupSkip?1:o,d=i.virtual&&r.virtual.enabled;if(r.loop){if(l&&!d&&r.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+a,e,s,t)}),!0}return r.rewind&&i.isEnd?i.slideTo(0,e,s,t):i.slideTo(i.activeIndex+a,e,s,t)}function qt(e,s=!0,t){const i=this,{params:n,snapGrid:r,slidesGrid:l,rtlTranslate:o,enabled:a,animating:d}=i;if(!a||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);const h=i.virtual&&n.virtual.enabled;if(n.loop){if(d&&!h&&n.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const u=o?i.translate:-i.translate;function b(p){return p<0?-Math.floor(Math.abs(p)):Math.floor(p)}const f=b(u),m=r.map(p=>b(p)),v=n.freeMode&&n.freeMode.enabled;let x=r[m.indexOf(f)-1];if(typeof x>"u"&&(n.cssMode||v)){let p;r.forEach((g,y)=>{f>=g&&(p=y)}),typeof p<"u"&&(x=v?r[p]:r[p>0?p-1:p])}let c=0;if(typeof x<"u"&&(c=l.indexOf(x),c<0&&(c=i.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(c=c-i.slidesPerViewDynamic("previous",!0)+1,c=Math.max(c,0))),n.rewind&&i.isBeginning){const p=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(p,e,s,t)}else if(n.loop&&i.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{i.slideTo(c,e,s,t)}),!0;return i.slideTo(c,e,s,t)}function Vt(e,s=!0,t){const i=this;if(!i.destroyed)return typeof e>"u"&&(e=i.params.speed),i.slideTo(i.activeIndex,e,s,t)}function Dt(e,s=!0,t,i=.5){const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);let r=n.activeIndex;const l=Math.min(n.params.slidesPerGroupSkip,r),o=l+Math.floor((r-l)/n.params.slidesPerGroup),a=n.rtlTranslate?n.translate:-n.translate;if(a>=n.snapGrid[o]){const d=n.snapGrid[o],h=n.snapGrid[o+1];a-d>(h-d)*i&&(r+=n.params.slidesPerGroup)}else{const d=n.snapGrid[o-1],h=n.snapGrid[o];a-d<=(h-d)*i&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,e,s,t)}function Gt(){const e=this;if(e.destroyed)return;const{params:s,slidesEl:t}=e,i=s.slidesPerView==="auto"?e.slidesPerViewDynamic():s.slidesPerView;let n=e.getSlideIndexWhenGrid(e.clickedIndex),r;const l=e.isElement?"swiper-slide":`.${s.slideClass}`,o=e.grid&&e.params.grid&&e.params.grid.rows>1;if(s.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),s.centeredSlides?e.slideToLoop(r):n>(o?(e.slides.length-i)/2-(e.params.grid.rows-1):e.slides.length-i)?(e.loopFix(),n=e.getSlideIndex(F(t,`${l}[data-swiper-slide-index="${r}"]`)[0]),ke(()=>{e.slideTo(n)})):e.slideTo(n)}else e.slideTo(n)}var Ft={slideTo:Ot,slideToLoop:Ht,slideNext:Bt,slidePrev:qt,slideReset:Vt,slideToClosest:Dt,slideToClickedSlide:Gt};function _t(e,s){const t=this,{params:i,slidesEl:n}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const r=()=>{F(n,`.${i.slideClass}, swiper-slide`).forEach((m,v)=>{m.setAttribute("data-swiper-slide-index",v)})},l=()=>{const f=F(n,`.${i.slideBlankClass}`);f.forEach(m=>{m.remove()}),f.length>0&&(t.recalcSlides(),t.updateSlides())},o=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||o)&&l();const a=i.slidesPerGroup*(o?i.grid.rows:1),d=t.slides.length%a!==0,h=o&&t.slides.length%i.grid.rows!==0,u=f=>{for(let m=0;m<f;m+=1){const v=t.isElement?se("swiper-slide",[i.slideBlankClass]):se("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(v)}};if(d){if(i.loopAddBlankSlides){const f=a-t.slides.length%a;u(f),t.recalcSlides(),t.updateSlides()}else te("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(h){if(i.loopAddBlankSlides){const f=i.grid.rows-t.slides.length%i.grid.rows;u(f),t.recalcSlides(),t.updateSlides()}else te("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();const b=i.centeredSlides||!!i.slidesOffsetBefore||!!i.slidesOffsetAfter;t.loopFix({slideRealIndex:e,direction:b?void 0:"next",initial:s})}function Nt({slideRealIndex:e,slideTo:s=!0,direction:t,setTranslate:i,activeSlideIndex:n,initial:r,byController:l,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:d,allowSlidePrev:h,allowSlideNext:u,slidesEl:b,params:f}=a,{centeredSlides:m,slidesOffsetBefore:v,slidesOffsetAfter:x,initialSlide:c}=f,p=m||!!v||!!x;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&f.virtual.enabled){s&&(!p&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):p&&a.snapIndex<f.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=h,a.allowSlideNext=u,a.emit("loopFix");return}let g=f.slidesPerView;g==="auto"?g=a.slidesPerViewDynamic():(g=Math.ceil(parseFloat(f.slidesPerView,10)),p&&g%2===0&&(g=g+1));const y=f.slidesPerGroupAuto?g:f.slidesPerGroup;let T=p?Math.max(y,Math.ceil(g/2)):y;T%y!==0&&(T+=y-T%y),T+=f.loopAdditionalSlides,a.loopedSlides=T;const C=a.grid&&f.grid&&f.grid.rows>1;d.length<g+T||a.params.effect==="cards"&&d.length<g+T*2?te("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):C&&f.grid.fill==="row"&&te("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const $=[],S=[],P=C?Math.ceil(d.length/f.grid.rows):d.length,L=r&&P-c<g&&!p;let w=L?c:a.activeIndex;typeof n>"u"?n=a.getSlideIndex(d.find(E=>E.classList.contains(f.slideActiveClass))):w=n;const M=t==="next"||!t,k=t==="prev"||!t;let I=0,O=0;const z=(C?d[n].column:n)+(p&&typeof i>"u"?-g/2+.5:0);if(z<T){I=Math.max(T-z,y);for(let E=0;E<T-z;E+=1){const j=E-Math.floor(E/P)*P;if(C){const B=P-j-1;for(let N=d.length-1;N>=0;N-=1)d[N].column===B&&$.push(N)}else $.push(P-j-1)}}else if(z+g>P-T){O=Math.max(z-(P-T*2),y),L&&(O=Math.max(O,g-P+c+1));for(let E=0;E<O;E+=1){const j=E-Math.floor(E/P)*P;C?d.forEach((B,N)=>{B.column===j&&S.push(N)}):S.push(j)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),a.params.effect==="cards"&&d.length<g+T*2&&(S.includes(n)&&S.splice(S.indexOf(n),1),$.includes(n)&&$.splice($.indexOf(n),1)),k&&$.forEach(E=>{d[E].swiperLoopMoveDOM=!0,b.prepend(d[E]),d[E].swiperLoopMoveDOM=!1}),M&&S.forEach(E=>{d[E].swiperLoopMoveDOM=!0,b.append(d[E]),d[E].swiperLoopMoveDOM=!1}),a.recalcSlides(),f.slidesPerView==="auto"?a.updateSlides():C&&($.length>0&&k||S.length>0&&M)&&a.slides.forEach((E,j)=>{a.grid.updateSlide(j,E,a.slides)}),f.watchSlidesProgress&&a.updateSlidesOffset(),s){if($.length>0&&k){if(typeof e>"u"){const E=a.slidesGrid[w],B=a.slidesGrid[w+I]-E;o?a.setTranslate(a.translate-B):(a.slideTo(w+Math.ceil(I),0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-B,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-B))}else if(i){const E=C?$.length/f.grid.rows:$.length;a.slideTo(a.activeIndex+E,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(S.length>0&&M)if(typeof e>"u"){const E=a.slidesGrid[w],B=a.slidesGrid[w-O]-E;o?a.setTranslate(a.translate-B):(a.slideTo(w-O,0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-B,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-B))}else{const E=C?S.length/f.grid.rows:S.length;a.slideTo(a.activeIndex-E,0,!1,!0)}}if(a.allowSlidePrev=h,a.allowSlideNext=u,a.controller&&a.controller.control&&!l){const E={slideRealIndex:e,direction:t,setTranslate:i,activeSlideIndex:n,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(j=>{!j.destroyed&&j.params.loop&&j.loopFix({...E,slideTo:j.params.slidesPerView===f.slidesPerView?s:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...E,slideTo:a.controller.control.params.slidesPerView===f.slidesPerView?s:!1})}a.emit("loopFix")}function Rt(){const e=this,{params:s,slidesEl:t}=e;if(!s.loop||!t||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach(n=>{const r=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;i[r]=n}),e.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),i.forEach(n=>{t.append(n)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Wt={loopCreate:_t,loopFix:Nt,loopDestroy:Rt};function Yt(e){const s=this;if(!s.params.simulateTouch||s.params.watchOverflow&&s.isLocked||s.params.cssMode)return;const t=s.params.touchEventsTarget==="container"?s.el:s.wrapperEl;s.isElement&&(s.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=e?"grabbing":"grab",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1})}function Xt(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Ut={setGrabCursor:Yt,unsetGrabCursor:Xt};function Kt(e,s=this){function t(i){if(!i||i===_()||i===V())return null;i.assignedSlot&&(i=i.assignedSlot);const n=i.closest(e);return!n&&!i.getRootNode?null:n||t(i.getRootNode().host)}return t(s)}function xe(e,s,t){const i=V(),{params:n}=e,r=n.edgeSwipeDetection,l=n.edgeSwipeThreshold;return r&&(t<=l||t>=i.innerWidth-l)?r==="prevent"?(s.preventDefault(),!0):!1:!0}function Qt(e){const s=this,t=_();let i=e;i.originalEvent&&(i=i.originalEvent);const n=s.touchEventsData;if(i.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==i.pointerId)return;n.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(n.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){xe(s,i,i.targetTouches[0].pageX);return}const{params:r,touches:l,enabled:o}=s;if(!o||!r.simulateTouch&&i.pointerType==="mouse"||s.animating&&r.preventInteractionOnTransition)return;!s.animating&&r.cssMode&&r.loop&&s.loopFix();let a=i.target;if(r.touchEventsTarget==="wrapper"&&!rt(a,s.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||n.isTouched&&n.isMoved)return;const d=!!r.noSwipingClass&&r.noSwipingClass!=="",h=i.composedPath?i.composedPath():i.path;d&&i.target&&i.target.shadowRoot&&h&&(a=h[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,b=!!(i.target&&i.target.shadowRoot);if(r.noSwiping&&(b?Kt(u,a):a.closest(u))){s.allowClick=!0;return}if(r.swipeHandler&&!a.closest(r.swipeHandler))return;l.currentX=i.pageX,l.currentY=i.pageY;const f=l.currentX,m=l.currentY;if(!xe(s,i,f))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=f,l.startY=m,n.touchStartTime=ee(),s.allowClick=!0,s.updateSize(),s.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let v=!0;a.matches(n.focusableElements)&&(v=!1,a.nodeName==="SELECT"&&(n.isTouched=!1)),t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==a&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!a.matches(n.focusableElements))&&t.activeElement.blur();const x=v&&s.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||x)&&!a.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&s.freeMode&&s.animating&&!r.cssMode&&s.freeMode.onTouchStart(),s.emit("touchStart",i)}function Zt(e){const s=_(),t=this,i=t.touchEventsData,{params:n,touches:r,rtlTranslate:l,enabled:o}=t;if(!o||!n.simulateTouch&&e.pointerType==="mouse")return;let a=e;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(i.touchId!==null||a.pointerId!==i.pointerId))return;let d;if(a.type==="touchmove"){if(d=[...a.changedTouches].find(T=>T.identifier===i.touchId),!d||d.identifier!==i.touchId)return}else d=a;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",a);return}const h=d.pageX,u=d.pageY;if(a.preventedByNestedSwiper){r.startX=h,r.startY=u;return}if(!t.allowTouchMove){a.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(r,{startX:h,startY:u,currentX:h,currentY:u}),i.touchStartTime=ee());return}if(n.touchReleaseOnEdges&&!n.loop)if(t.isVertical()){if(u<r.startY&&t.translate<=t.maxTranslate()||u>r.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(l&&(h>r.startX&&-t.translate<=t.maxTranslate()||h<r.startX&&-t.translate>=t.minTranslate()))return;if(!l&&(h<r.startX&&t.translate<=t.maxTranslate()||h>r.startX&&t.translate>=t.minTranslate()))return}if(s.activeElement&&s.activeElement.matches(i.focusableElements)&&s.activeElement!==a.target&&a.pointerType!=="mouse"&&s.activeElement.blur(),s.activeElement&&a.target===s.activeElement&&a.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",a),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=h,r.currentY=u;const b=r.currentX-r.startX,f=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(b**2+f**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let T;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:b*b+f*f>=25&&(T=Math.atan2(Math.abs(f),Math.abs(b))*180/Math.PI,i.isScrolling=t.isHorizontal()?T>n.touchAngle:90-T>n.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",a),typeof i.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(i.startMoving=!0),i.isScrolling||a.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!n.cssMode&&a.cancelable&&a.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&a.stopPropagation();let m=t.isHorizontal()?b:f,v=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(m=Math.abs(m)*(l?1:-1),v=Math.abs(v)*(l?1:-1)),r.diff=m,m*=n.touchRatio,l&&(m=-m,v=-v);const x=t.touchesDirection;t.swipeDirection=m>0?"prev":"next",t.touchesDirection=v>0?"prev":"next";const c=t.params.loop&&!n.cssMode,p=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(c&&p&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(T)}i.allowMomentumBounce=!1,n.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",a)}if(new Date().getTime(),n._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&x!==t.touchesDirection&&c&&p&&Math.abs(m)>=1){Object.assign(r,{startX:h,startY:u,currentX:h,currentY:u,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",a),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let g=!0,y=n.resistanceRatio;if(n.touchReleaseOnEdges&&(y=0),m>0?(c&&p&&i.allowThresholdMove&&i.currentTranslate>(n.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(n.slidesPerView!=="auto"&&t.slides.length-n.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(g=!1,n.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+m)**y))):m<0&&(c&&p&&i.allowThresholdMove&&i.currentTranslate<(n.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(n.slidesPerView!=="auto"&&t.slides.length-n.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(n.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(g=!1,n.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-m)**y))),g&&(a.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),n.threshold>0)if(Math.abs(m)>n.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{i.currentTranslate=i.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&t.freeMode||n.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function Jt(e){const s=this,t=s.touchEventsData;let i=e;i.originalEvent&&(i=i.originalEvent);let n;if(i.type==="touchend"||i.type==="touchcancel"){if(n=[...i.changedTouches].find(T=>T.identifier===t.touchId),!n||n.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;n=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(s.browser.isSafari||s.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:l,touches:o,rtlTranslate:a,slidesGrid:d,enabled:h}=s;if(!h||!l.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&s.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&l.grabCursor&&s.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}l.grabCursor&&t.isMoved&&t.isTouched&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!1);const u=ee(),b=u-t.touchStartTime;if(s.allowClick){const T=i.path||i.composedPath&&i.composedPath();s.updateClickedSlide(T&&T[0]||i.target,T),s.emit("tap click",i),b<300&&u-t.lastClickTime<300&&s.emit("doubleTap doubleClick",i)}if(t.lastClickTime=ee(),ke(()=>{s.destroyed||(s.allowClick=!0)}),!t.isTouched||!t.isMoved||!s.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let f;if(l.followFinger?f=a?s.translate:-s.translate:f=-t.currentTranslate,l.cssMode)return;if(l.freeMode&&l.freeMode.enabled){s.freeMode.onTouchEnd({currentPos:f});return}const m=f>=-s.maxTranslate()&&!s.params.loop;let v=0,x=s.slidesSizesGrid[0];for(let T=0;T<d.length;T+=T<l.slidesPerGroupSkip?1:l.slidesPerGroup){const C=T<l.slidesPerGroupSkip-1?1:l.slidesPerGroup;typeof d[T+C]<"u"?(m||f>=d[T]&&f<d[T+C])&&(v=T,x=d[T+C]-d[T]):(m||f>=d[T])&&(v=T,x=d[d.length-1]-d[d.length-2])}let c=null,p=null;l.rewind&&(s.isBeginning?p=l.virtual&&l.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1:s.isEnd&&(c=0));const g=(f-d[v])/x,y=v<l.slidesPerGroupSkip-1?1:l.slidesPerGroup;if(b>l.longSwipesMs){if(!l.longSwipes){s.slideTo(s.activeIndex);return}s.swipeDirection==="next"&&(g>=l.longSwipesRatio?s.slideTo(l.rewind&&s.isEnd?c:v+y):s.slideTo(v)),s.swipeDirection==="prev"&&(g>1-l.longSwipesRatio?s.slideTo(v+y):p!==null&&g<0&&Math.abs(g)>l.longSwipesRatio?s.slideTo(p):s.slideTo(v))}else{if(!l.shortSwipes){s.slideTo(s.activeIndex);return}s.navigation&&(i.target===s.navigation.nextEl||i.target===s.navigation.prevEl)?i.target===s.navigation.nextEl?s.slideTo(v+y):s.slideTo(v):(s.swipeDirection==="next"&&s.slideTo(c!==null?c:v+y),s.swipeDirection==="prev"&&s.slideTo(p!==null?p:v))}}function be(){const e=this,{params:s,el:t}=e;if(t&&t.offsetWidth===0)return;s.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:n,snapGrid:r}=e,l=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const o=l&&s.loop;if((s.slidesPerView==="auto"||s.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!o){const a=l?e.virtual.slides:e.slides;e.slideTo(a.length-1,0,!1,!0)}else e.params.loop&&!l?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=n,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function es(e){const s=this;s.enabled&&(s.allowClick||(s.params.preventClicks&&e.preventDefault(),s.params.preventClicksPropagation&&s.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function ts(){const e=this,{wrapperEl:s,rtlTranslate:t,enabled:i}=e;if(!i)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-s.scrollLeft:e.translate=-s.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let n;const r=e.maxTranslate()-e.minTranslate();r===0?n=0:n=(e.translate-e.minTranslate())/r,n!==e.progress&&e.updateProgress(t?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ss(e){const s=this;J(s,e.target),!(s.params.cssMode||s.params.slidesPerView!=="auto"&&!s.params.autoHeight)&&s.update()}function is(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const He=(e,s)=>{const t=_(),{params:i,el:n,wrapperEl:r,device:l}=e,o=!!i.nested,a=s==="on"?"addEventListener":"removeEventListener",d=s;!n||typeof n=="string"||(t[a]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),n[a]("touchstart",e.onTouchStart,{passive:!1}),n[a]("pointerdown",e.onTouchStart,{passive:!1}),t[a]("touchmove",e.onTouchMove,{passive:!1,capture:o}),t[a]("pointermove",e.onTouchMove,{passive:!1,capture:o}),t[a]("touchend",e.onTouchEnd,{passive:!0}),t[a]("pointerup",e.onTouchEnd,{passive:!0}),t[a]("pointercancel",e.onTouchEnd,{passive:!0}),t[a]("touchcancel",e.onTouchEnd,{passive:!0}),t[a]("pointerout",e.onTouchEnd,{passive:!0}),t[a]("pointerleave",e.onTouchEnd,{passive:!0}),t[a]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&n[a]("click",e.onClick,!0),i.cssMode&&r[a]("scroll",e.onScroll),i.updateOnWindowResize?e[d](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",be,!0):e[d]("observerUpdate",be,!0),n[a]("load",e.onLoad,{capture:!0}))};function ns(){const e=this,{params:s}=e;e.onTouchStart=Qt.bind(e),e.onTouchMove=Zt.bind(e),e.onTouchEnd=Jt.bind(e),e.onDocumentTouchStart=is.bind(e),s.cssMode&&(e.onScroll=ts.bind(e)),e.onClick=es.bind(e),e.onLoad=ss.bind(e),He(e,"on")}function rs(){He(this,"off")}var ls={attachEvents:ns,detachEvents:rs};const we=(e,s)=>e.grid&&s.grid&&s.grid.rows>1;function as(){const e=this,{realIndex:s,initialized:t,params:i,el:n}=e,r=i.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const l=_(),o=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",a=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?e.el:l.querySelector(i.breakpointsBase),d=e.getBreakpoint(r,o,a);if(!d||e.currentBreakpoint===d)return;const u=(d in r?r[d]:void 0)||e.originalParams,b=we(e,i),f=we(e,u),m=e.params.grabCursor,v=u.grabCursor,x=i.enabled;b&&!f?(n.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!b&&f&&(n.classList.add(`${i.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&i.grid.fill==="column")&&n.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),m&&!v?e.unsetGrabCursor():!m&&v&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(C=>{if(typeof u[C]>"u")return;const $=i[C]&&i[C].enabled,S=u[C]&&u[C].enabled;$&&!S&&e[C].disable(),!$&&S&&e[C].enable()});const c=u.direction&&u.direction!==i.direction,p=i.loop&&(u.slidesPerView!==i.slidesPerView||c),g=i.loop;c&&t&&e.changeDirection(),D(e.params,u);const y=e.params.enabled,T=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),x&&!y?e.disable():!x&&y&&e.enable(),e.currentBreakpoint=d,e.emit("_beforeBreakpoint",u),t&&(p?(e.loopDestroy(),e.loopCreate(s),e.updateSlides()):!g&&T?(e.loopCreate(s),e.updateSlides()):g&&!T&&e.loopDestroy()),e.emit("breakpoint",u)}function os(e,s="window",t){if(!e||s==="container"&&!t)return;let i=!1;const n=V(),r=s==="window"?n.innerHeight:t.clientHeight,l=Object.keys(e).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const a=parseFloat(o.substr(1));return{value:r*a,point:o}}return{value:o,point:o}});l.sort((o,a)=>parseInt(o.value,10)-parseInt(a.value,10));for(let o=0;o<l.length;o+=1){const{point:a,value:d}=l[o];s==="window"?n.matchMedia(`(min-width: ${d}px)`).matches&&(i=a):d<=t.clientWidth&&(i=a)}return i||"max"}var ds={setBreakpoint:as,getBreakpoint:os};function cs(e,s){const t=[];return e.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(n=>{i[n]&&t.push(s+n)}):typeof i=="string"&&t.push(s+i)}),t}function fs(){const e=this,{classNames:s,params:t,rtl:i,el:n,device:r}=e,l=cs(["initialized",t.direction,{"free-mode":e.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);s.push(...l),n.classList.add(...s),e.emitContainerClasses()}function us(){const e=this,{el:s,classNames:t}=e;!s||typeof s=="string"||(s.classList.remove(...t),e.emitContainerClasses())}var ps={addClasses:fs,removeClasses:us};function ms(){const e=this,{isLocked:s,params:t}=e,{slidesOffsetBefore:i}=t;if(i){const n=e.slides.length-1,r=e.slidesGrid[n]+e.slidesSizesGrid[n]+i*2;e.isLocked=e.size>r}else e.isLocked=e.snapGrid.length===1;t.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),t.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),s&&s!==e.isLocked&&(e.isEnd=!1),s!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var hs={checkOverflow:ms},ye={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function gs(e,s){return function(i={}){const n=Object.keys(i)[0],r=i[n];if(typeof r!="object"||r===null){D(s,i);return}if(e[n]===!0&&(e[n]={enabled:!0}),n==="navigation"&&e[n]&&e[n].enabled&&!e[n].prevEl&&!e[n].nextEl&&(e[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&e[n]&&e[n].enabled&&!e[n].el&&(e[n].auto=!0),!(n in e&&"enabled"in r)){D(s,i);return}typeof e[n]=="object"&&!("enabled"in e[n])&&(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),D(s,i)}}const de={eventsEmitter:pt,update:Lt,translate:Pt,transition:jt,slide:Ft,loop:Wt,grabCursor:Ut,events:ls,breakpoints:ds,checkOverflow:hs,classes:ps},ce={};class H{constructor(...s){let t,i;s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?i=s[0]:[t,i]=s,i||(i={}),i=D({},i),t&&!i.el&&(i.el=t);const n=_();if(i.el&&typeof i.el=="string"&&n.querySelectorAll(i.el).length>1){const a=[];return n.querySelectorAll(i.el).forEach(d=>{const h=D({},i,{el:d});a.push(new H(h))}),a}const r=this;r.__swiper__=!0,r.support=ze(),r.device=Ae({userAgent:i.userAgent}),r.browser=je(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],i.modules&&Array.isArray(i.modules)&&i.modules.forEach(a=>{typeof a=="function"&&r.modules.indexOf(a)<0&&r.modules.push(a)});const l={};r.modules.forEach(a=>{a({params:i,swiper:r,extendParams:gs(i,l),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const o=D({},ye,l);return r.params=D({},o,ce,i),r.originalParams=D({},r.params),r.passedParams=D({},i),r.params&&r.params.on&&Object.keys(r.params.on).forEach(a=>{r.on(a,r.params.on[a])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(s){return this.isHorizontal()?s:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[s]}getSlideIndex(s){const{slidesEl:t,params:i}=this,n=F(t,`.${i.slideClass}, swiper-slide`),r=ie(n[0]);return ie(s)-r}getSlideIndexByData(s){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===s))}getSlideIndexWhenGrid(s){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?s=Math.floor(s/this.params.grid.rows):this.params.grid.fill==="row"&&(s=s%Math.ceil(this.slides.length/this.params.grid.rows))),s}recalcSlides(){const s=this,{slidesEl:t,params:i}=s;s.slides=F(t,`.${i.slideClass}, swiper-slide`)}enable(){const s=this;s.enabled||(s.enabled=!0,s.params.grabCursor&&s.setGrabCursor(),s.emit("enable"))}disable(){const s=this;s.enabled&&(s.enabled=!1,s.params.grabCursor&&s.unsetGrabCursor(),s.emit("disable"))}setProgress(s,t){const i=this;s=Math.min(Math.max(s,0),1);const n=i.minTranslate(),l=(i.maxTranslate()-n)*s+n;i.translateTo(l,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const s=this;if(!s.params._emitClasses||!s.el)return;const t=s.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(s.params.containerModifierClass)===0);s.emit("_containerClasses",t.join(" "))}getSlideClasses(s){const t=this;return t.destroyed?"":s.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const s=this;if(!s.params._emitClasses||!s.el)return;const t=[];s.slides.forEach(i=>{const n=s.getSlideClasses(i);t.push({slideEl:i,classNames:n}),s.emit("_slideClass",i,n)}),s.emit("_slideClasses",t)}slidesPerViewDynamic(s="current",t=!1){const i=this,{params:n,slides:r,slidesGrid:l,slidesSizesGrid:o,size:a,activeIndex:d}=i;let h=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let u=r[d]?Math.ceil(r[d].swiperSlideSize):0,b;for(let f=d+1;f<r.length;f+=1)r[f]&&!b&&(u+=Math.ceil(r[f].swiperSlideSize),h+=1,u>a&&(b=!0));for(let f=d-1;f>=0;f-=1)r[f]&&!b&&(u+=r[f].swiperSlideSize,h+=1,u>a&&(b=!0))}else if(s==="current")for(let u=d+1;u<r.length;u+=1)(t?l[u]+o[u]-l[d]<a:l[u]-l[d]<a)&&(h+=1);else for(let u=d-1;u>=0;u-=1)l[d]-l[u]<a&&(h+=1);return h}update(){const s=this;if(!s||s.destroyed)return;const{snapGrid:t,params:i}=s;i.breakpoints&&s.setBreakpoint(),[...s.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{l.complete&&J(s,l)}),s.updateSize(),s.updateSlides(),s.updateProgress(),s.updateSlidesClasses();function n(){const l=s.rtlTranslate?s.translate*-1:s.translate,o=Math.min(Math.max(l,s.maxTranslate()),s.minTranslate());s.setTranslate(o),s.updateActiveIndex(),s.updateSlidesClasses()}let r;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)n(),i.autoHeight&&s.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&s.isEnd&&!i.centeredSlides){const l=s.virtual&&i.virtual.enabled?s.virtual.slides:s.slides;r=s.slideTo(l.length-1,0,!1,!0)}else r=s.slideTo(s.activeIndex,0,!1,!0);r||n()}i.watchOverflow&&t!==s.snapGrid&&s.checkOverflow(),s.emit("update")}changeDirection(s,t=!0){const i=this,n=i.params.direction;return s||(s=n==="horizontal"?"vertical":"horizontal"),s===n||s!=="horizontal"&&s!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${n}`),i.el.classList.add(`${i.params.containerModifierClass}${s}`),i.emitContainerClasses(),i.params.direction=s,i.slides.forEach(r=>{s==="vertical"?r.style.width="":r.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(s){const t=this;t.rtl&&s==="rtl"||!t.rtl&&s==="ltr"||(t.rtl=s==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(s){const t=this;if(t.mounted)return!0;let i=s||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let l=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(n()):F(i,n())[0];return!l&&t.params.createElements&&(l=se("div",t.params.wrapperClass),i.append(l),F(i,`.${t.params.slideClass}`).forEach(o=>{l.append(o)})),Object.assign(t,{el:i,wrapperEl:l,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:l,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||R(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||R(i,"direction")==="rtl"),wrongRTL:R(l,"display")==="-webkit-box"}),!0}init(s){const t=this;if(t.initialized||t.mount(s)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const n=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(r=>{r.complete?J(t,r):r.addEventListener("load",l=>{J(t,l.target)})}),me(t),t.initialized=!0,me(t),t.emit("init"),t.emit("afterInit"),t}destroy(s=!0,t=!0){const i=this,{params:n,el:r,wrapperEl:l,slides:o}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),t&&(i.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),l&&l.removeAttribute("style"),o&&o.length&&o.forEach(a=>{a.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(a=>{i.off(a)}),s!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),et(i)),i.destroyed=!0),null}static extendDefaults(s){D(ce,s)}static get extendedDefaults(){return ce}static get defaults(){return ye}static installModule(s){H.prototype.__modules__||(H.prototype.__modules__=[]);const t=H.prototype.__modules__;typeof s=="function"&&t.indexOf(s)<0&&t.push(s)}static use(s){return Array.isArray(s)?(s.forEach(t=>H.installModule(t)),H):(H.installModule(s),H)}}Object.keys(de).forEach(e=>{Object.keys(de[e]).forEach(s=>{H.prototype[s]=de[e][s]})});H.use([ft,ut]);function Be(e,s,t,i){return e.params.createElements&&Object.keys(i).forEach(n=>{if(!t[n]&&t.auto===!0){let r=F(e.el,`.${i[n]}`)[0];r||(r=se("div",i[n]),r.className=i[n],e.el.append(r)),t[n]=r,s[n]=r}}),t}const Se='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function W({swiper:e,extendParams:s,on:t,emit:i}){s({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Se};function n(f){let m;return f&&typeof f=="string"&&e.isElement&&(m=e.el.querySelector(f)||e.hostEl.querySelector(f),m)?m:(f&&(typeof f=="string"&&(m=[...document.querySelectorAll(f)]),e.params.uniqueNavElements&&typeof f=="string"&&m&&m.length>1&&e.el.querySelectorAll(f).length===1?m=e.el.querySelector(f):m&&m.length===1&&(m=m[0])),f&&!m?f:m)}function r(f,m){const v=e.params.navigation;f=q(f),f.forEach(x=>{x&&(x.classList[m?"add":"remove"](...v.disabledClass.split(" ")),x.tagName==="BUTTON"&&(x.disabled=m),e.params.watchOverflow&&e.enabled&&x.classList[e.isLocked?"add":"remove"](v.lockClass))})}function l(){const{nextEl:f,prevEl:m}=e.navigation;if(e.params.loop){r(m,!1),r(f,!1);return}r(m,e.isBeginning&&!e.params.rewind),r(f,e.isEnd&&!e.params.rewind)}function o(f){f.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function a(f){f.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function d(){const f=e.params.navigation;if(e.params.navigation=Be(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(f.nextEl||f.prevEl))return;let m=n(f.nextEl),v=n(f.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:v}),m=q(m),v=q(v);const x=(c,p)=>{if(c){if(f.addIcons&&c.matches(".swiper-button-next,.swiper-button-prev")&&!c.querySelector("svg")){const g=document.createElement("div");pe(g,Se),c.appendChild(g.querySelector("svg")),g.remove()}c.addEventListener("click",p==="next"?a:o)}!e.enabled&&c&&c.classList.add(...f.lockClass.split(" "))};m.forEach(c=>x(c,"next")),v.forEach(c=>x(c,"prev"))}function h(){let{nextEl:f,prevEl:m}=e.navigation;f=q(f),m=q(m);const v=(x,c)=>{x.removeEventListener("click",c==="next"?a:o),x.classList.remove(...e.params.navigation.disabledClass.split(" "))};f.forEach(x=>v(x,"next")),m.forEach(x=>v(x,"prev"))}t("init",()=>{e.params.navigation.enabled===!1?b():(d(),l())}),t("toEdge fromEdge lock unlock",()=>{l()}),t("destroy",()=>{h()}),t("enable disable",()=>{let{nextEl:f,prevEl:m}=e.navigation;if(f=q(f),m=q(m),e.enabled){l();return}[...f,...m].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),t("click",(f,m)=>{let{nextEl:v,prevEl:x}=e.navigation;v=q(v),x=q(x);const c=m.target;let p=x.includes(c)||v.includes(c);if(e.isElement&&!p){const g=m.path||m.composedPath&&m.composedPath();g&&(p=g.find(y=>v.includes(y)||x.includes(y)))}if(e.params.navigation.hideOnClick&&!p){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===c||e.pagination.el.contains(c)))return;let g;v.length?g=v[0].classList.contains(e.params.navigation.hiddenClass):x.length&&(g=x[0].classList.contains(e.params.navigation.hiddenClass)),i(g===!0?"navigationShow":"navigationHide"),[...v,...x].filter(y=>!!y).forEach(y=>y.classList.toggle(e.params.navigation.hiddenClass))}});const u=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),d(),l()},b=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(e.navigation,{enable:u,disable:b,update:l,init:d,destroy:h})}function X(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function vs({swiper:e,extendParams:s,on:t,emit:i}){const n="swiper-pagination";s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:c=>c,formatFractionTotal:c=>c,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let r,l=0;function o(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function a(c,p){const{bulletActiveClass:g}=e.params.pagination;c&&(c=c[`${p==="prev"?"previous":"next"}ElementSibling`],c&&(c.classList.add(`${g}-${p}`),c=c[`${p==="prev"?"previous":"next"}ElementSibling`],c&&c.classList.add(`${g}-${p}-${p}`)))}function d(c,p,g){if(c=c%g,p=p%g,p===c+1)return"next";if(p===c-1)return"previous"}function h(c){const p=c.target.closest(X(e.params.pagination.bulletClass));if(!p)return;c.preventDefault();const g=ie(p)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===g)return;const y=d(e.realIndex,g,e.slides.length);y==="next"?e.slideNext():y==="previous"?e.slidePrev():e.slideToLoop(g)}else e.slideTo(g)}function u(){const c=e.rtl,p=e.params.pagination;if(o())return;let g=e.pagination.el;g=q(g);let y,T;const C=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,$=e.params.loop?Math.ceil(C/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(T=e.previousRealIndex||0,y=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(y=e.snapIndex,T=e.previousSnapIndex):(T=e.previousIndex||0,y=e.activeIndex||0),p.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const S=e.pagination.bullets;let P,L,w;if(p.dynamicBullets&&(r=ue(S[0],e.isHorizontal()?"width":"height"),g.forEach(M=>{M.style[e.isHorizontal()?"width":"height"]=`${r*(p.dynamicMainBullets+4)}px`}),p.dynamicMainBullets>1&&T!==void 0&&(l+=y-(T||0),l>p.dynamicMainBullets-1?l=p.dynamicMainBullets-1:l<0&&(l=0)),P=Math.max(y-l,0),L=P+(Math.min(S.length,p.dynamicMainBullets)-1),w=(L+P)/2),S.forEach(M=>{const k=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(I=>`${p.bulletActiveClass}${I}`)].map(I=>typeof I=="string"&&I.includes(" ")?I.split(" "):I).flat();M.classList.remove(...k)}),g.length>1)S.forEach(M=>{const k=ie(M);k===y?M.classList.add(...p.bulletActiveClass.split(" ")):e.isElement&&M.setAttribute("part","bullet"),p.dynamicBullets&&(k>=P&&k<=L&&M.classList.add(...`${p.bulletActiveClass}-main`.split(" ")),k===P&&a(M,"prev"),k===L&&a(M,"next"))});else{const M=S[y];if(M&&M.classList.add(...p.bulletActiveClass.split(" ")),e.isElement&&S.forEach((k,I)=>{k.setAttribute("part",I===y?"bullet-active":"bullet")}),p.dynamicBullets){const k=S[P],I=S[L];for(let O=P;O<=L;O+=1)S[O]&&S[O].classList.add(...`${p.bulletActiveClass}-main`.split(" "));a(k,"prev"),a(I,"next")}}if(p.dynamicBullets){const M=Math.min(S.length,p.dynamicMainBullets+4),k=(r*M-r)/2-w*r,I=c?"right":"left";S.forEach(O=>{O.style[e.isHorizontal()?I:"top"]=`${k}px`})}}g.forEach((S,P)=>{if(p.type==="fraction"&&(S.querySelectorAll(X(p.currentClass)).forEach(L=>{L.textContent=p.formatFractionCurrent(y+1)}),S.querySelectorAll(X(p.totalClass)).forEach(L=>{L.textContent=p.formatFractionTotal($)})),p.type==="progressbar"){let L;p.progressbarOpposite?L=e.isHorizontal()?"vertical":"horizontal":L=e.isHorizontal()?"horizontal":"vertical";const w=(y+1)/$;let M=1,k=1;L==="horizontal"?M=w:k=w,S.querySelectorAll(X(p.progressbarFillClass)).forEach(I=>{I.style.transform=`translate3d(0,0,0) scaleX(${M}) scaleY(${k})`,I.style.transitionDuration=`${e.params.speed}ms`})}p.type==="custom"&&p.renderCustom?(pe(S,p.renderCustom(e,y+1,$)),P===0&&i("paginationRender",S)):(P===0&&i("paginationRender",S),i("paginationUpdate",S)),e.params.watchOverflow&&e.enabled&&S.classList[e.isLocked?"add":"remove"](p.lockClass)})}function b(){const c=e.params.pagination;if(o())return;const p=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let g=e.pagination.el;g=q(g);let y="";if(c.type==="bullets"){let T=e.params.loop?Math.ceil(p/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&T>p&&(T=p);for(let C=0;C<T;C+=1)c.renderBullet?y+=c.renderBullet.call(e,C,c.bulletClass):y+=`<${c.bulletElement} ${e.isElement?'part="bullet"':""} class="${c.bulletClass}"></${c.bulletElement}>`}c.type==="fraction"&&(c.renderFraction?y=c.renderFraction.call(e,c.currentClass,c.totalClass):y=`<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`),c.type==="progressbar"&&(c.renderProgressbar?y=c.renderProgressbar.call(e,c.progressbarFillClass):y=`<span class="${c.progressbarFillClass}"></span>`),e.pagination.bullets=[],g.forEach(T=>{c.type!=="custom"&&pe(T,y||""),c.type==="bullets"&&e.pagination.bullets.push(...T.querySelectorAll(X(c.bulletClass)))}),c.type!=="custom"&&i("paginationRender",g[0])}function f(){e.params.pagination=Be(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const c=e.params.pagination;if(!c.el)return;let p;typeof c.el=="string"&&e.isElement&&(p=e.el.querySelector(c.el)),!p&&typeof c.el=="string"&&(p=[...document.querySelectorAll(c.el)]),p||(p=c.el),!(!p||p.length===0)&&(e.params.uniqueNavElements&&typeof c.el=="string"&&Array.isArray(p)&&p.length>1&&(p=[...e.el.querySelectorAll(c.el)],p.length>1&&(p=p.find(g=>Ie(g,".swiper")[0]===e.el))),Array.isArray(p)&&p.length===1&&(p=p[0]),Object.assign(e.pagination,{el:p}),p=q(p),p.forEach(g=>{c.type==="bullets"&&c.clickable&&g.classList.add(...(c.clickableClass||"").split(" ")),g.classList.add(c.modifierClass+c.type),g.classList.add(e.isHorizontal()?c.horizontalClass:c.verticalClass),c.type==="bullets"&&c.dynamicBullets&&(g.classList.add(`${c.modifierClass}${c.type}-dynamic`),l=0,c.dynamicMainBullets<1&&(c.dynamicMainBullets=1)),c.type==="progressbar"&&c.progressbarOpposite&&g.classList.add(c.progressbarOppositeClass),c.clickable&&g.addEventListener("click",h),e.enabled||g.classList.add(c.lockClass)}))}function m(){const c=e.params.pagination;if(o())return;let p=e.pagination.el;p&&(p=q(p),p.forEach(g=>{g.classList.remove(c.hiddenClass),g.classList.remove(c.modifierClass+c.type),g.classList.remove(e.isHorizontal()?c.horizontalClass:c.verticalClass),c.clickable&&(g.classList.remove(...(c.clickableClass||"").split(" ")),g.removeEventListener("click",h))})),e.pagination.bullets&&e.pagination.bullets.forEach(g=>g.classList.remove(...c.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const c=e.params.pagination;let{el:p}=e.pagination;p=q(p),p.forEach(g=>{g.classList.remove(c.horizontalClass,c.verticalClass),g.classList.add(e.isHorizontal()?c.horizontalClass:c.verticalClass)})}),t("init",()=>{e.params.pagination.enabled===!1?x():(f(),b(),u())}),t("activeIndexChange",()=>{typeof e.snapIndex>"u"&&u()}),t("snapIndexChange",()=>{u()}),t("snapGridLengthChange",()=>{b(),u()}),t("destroy",()=>{m()}),t("enable disable",()=>{let{el:c}=e.pagination;c&&(c=q(c),c.forEach(p=>p.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),t("lock unlock",()=>{u()}),t("click",(c,p)=>{const g=p.target,y=q(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&y&&y.length>0&&!g.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&g===e.navigation.nextEl||e.navigation.prevEl&&g===e.navigation.prevEl))return;const T=y[0].classList.contains(e.params.pagination.hiddenClass);i(T===!0?"paginationShow":"paginationHide"),y.forEach(C=>C.classList.toggle(e.params.pagination.hiddenClass))}});const v=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:c}=e.pagination;c&&(c=q(c),c.forEach(p=>p.classList.remove(e.params.pagination.paginationDisabledClass))),f(),b(),u()},x=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:c}=e.pagination;c&&(c=q(c),c.forEach(p=>p.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:v,disable:x,render:b,update:u,init:f,destroy:m})}function xs({swiper:e,extendParams:s,on:t,emit:i,params:n}){e.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,l,o=n&&n.autoplay?n.autoplay.delay:3e3,a=n&&n.autoplay?n.autoplay.delay:3e3,d,h=new Date().getTime(),u,b,f,m,v,x;function c(z){!e||e.destroyed||!e.wrapperEl||z.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",c),!(x||z.detail&&z.detail.bySwiperTouchMove)&&P())}const p=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(a=d,u=!1);const z=e.autoplay.paused?d:h+a-new Date().getTime();e.autoplay.timeLeft=z,i("autoplayTimeLeft",z,z/o),l=requestAnimationFrame(()=>{p()})},g=()=>{let z;return e.virtual&&e.params.virtual.enabled?z=e.slides.find(j=>j.classList.contains("swiper-slide-active")):z=e.slides[e.activeIndex],z?parseInt(z.getAttribute("data-swiper-autoplay"),10):void 0},y=()=>{let z=e.params.autoplay.delay;const E=g();return!Number.isNaN(E)&&E>0&&(z=E),z},T=z=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(l),p();let E=z;typeof E>"u"&&(E=y(),o=E,a=E),d=E;const j=e.params.speed,B=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(j,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,j,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(j,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,j,!0,!0),i("autoplay")),e.params.cssMode&&(h=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return E>0?(clearTimeout(r),r=setTimeout(()=>{B()},E)):requestAnimationFrame(()=>{B()}),E},C=()=>{h=new Date().getTime(),e.autoplay.running=!0,T(),i("autoplayStart")},$=()=>{e.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(l),i("autoplayStop")},S=(z,E)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(r),z||(v=!0);const j=()=>{i("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",c):P()};if(e.autoplay.paused=!0,E){j();return}d=(d||e.params.autoplay.delay)-(new Date().getTime()-h),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),j())},P=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(h=new Date().getTime(),v?(v=!1,T(d)):T(),e.autoplay.paused=!1,i("autoplayResume"))},L=()=>{if(e.destroyed||!e.autoplay.running)return;const z=_();z.visibilityState==="hidden"&&(v=!0,S(!0)),z.visibilityState==="visible"&&P()},w=z=>{z.pointerType==="mouse"&&(v=!0,x=!0,!(e.animating||e.autoplay.paused)&&S(!0))},M=z=>{z.pointerType==="mouse"&&(x=!1,e.autoplay.paused&&P())},k=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",w),e.el.addEventListener("pointerleave",M))},I=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",w),e.el.removeEventListener("pointerleave",M))},O=()=>{_().addEventListener("visibilitychange",L)},G=()=>{_().removeEventListener("visibilitychange",L)};t("init",()=>{e.params.autoplay.enabled&&(k(),O(),C())}),t("destroy",()=>{I(),G(),e.autoplay.running&&$()}),t("_freeModeStaticRelease",()=>{(f||v)&&P()}),t("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?$():S(!0,!0)}),t("beforeTransitionStart",(z,E,j)=>{e.destroyed||!e.autoplay.running||(j||!e.params.autoplay.disableOnInteraction?S(!0,!0):$())}),t("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){$();return}b=!0,f=!1,v=!1,m=setTimeout(()=>{v=!0,f=!0,S(!0)},200)}}),t("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!b)){if(clearTimeout(m),clearTimeout(r),e.params.autoplay.disableOnInteraction){f=!1,b=!1;return}f&&e.params.cssMode&&P(),f=!1,b=!1}}),t("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(d=y(),o=y())}),Object.assign(e.autoplay,{start:C,stop:$,pause:S,resume:P})}const bs=await A();async function ws(){try{const e=bs.Story.map(s=>`
        <div class="swiper-slide">
          <div class="flex flex-col justify-center items-center p-2 gap-2 w-23">
            <div class="rounded-full overflow-hidden w-22 h-22 bg-linear-to-b from-[#95489c] to-[#c84198] p-0.5">
              <div class="bg-white rounded-full w-full h-full p-1">
                <img src="${s.img}" alt="" class="rounded-full" />
              </div>
            </div>
            <span class="font-Iran text-xs text-[#574a6d] line-clamp-2 text-center w-full">${s.text}</span>
          </div>
        </div>
      `);document.querySelector(".story-wrapper").innerHTML=e.join(""),new H(".Story",{modules:[W],slidesPerView:10.5,spaceBetween:0,navigation:{nextEl:".story-next",prevEl:".story-prev"}})}catch(e){console.log(e.message)}}const ys={mobile:`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M7 1h10a3 3 0 013 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V4a3 3 0 013-3zm0 2a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H7zm5 17a2 2 0 100-4 2 2 0 000 4z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,laptop:`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v8.723l2.858 4.762A1 1 0 0122 20H2a1 1 0 01-.857-1.515L4 13.723V5zm2 8h12V6H6v7zm-.434 2l-1.8 3h16.468l-1.8-3H5.566z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"digital-products":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M7 3h10c1.56 0 2.898 1.066 2.994 2.5l.006.167v2.869a3.5 3.5 0 011.001 6.627L21 18a2 2 0 01-2 2v1h-2v-1H7v1H5v-1a2 2 0 01-2-2v-2.837a3.5 3.5 0 011-6.628V5.667c0-1.461 1.28-2.581 2.821-2.662L7 3zm1 11h8v-2l.005-.192A3.501 3.501 0 0118 8.837v-3.17c0-.3-.35-.614-.867-.661L17 5H7c-.543 0-.936.292-.993.592L6 5.667l.001 3.17A3.5 3.5 0 018 12v2zm-5-2a1.5 1.5 0 013 0v3a1 1 0 001 1h10a1 1 0 001-1v-3l.007-.145A1.5 1.5 0 0121 12l-.007.145A1.5 1.5 0 0119.5 13.5H19V18H5v-4.5h-.5A1.5 1.5 0 013 12z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"home-kitchen":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 25"
    >
      <path
        d="M5.738 5.989v2.99h-1.5V5.99h1.5zM5.738 12.968v2.991h-1.5v-2.991h1.5zM18.806 20.793a.877.877 0 11-1.754 0 .877.877 0 011.754 0z"
      ></path>
      <path
        fill-rule="evenodd"
        d="M15.571 7.711V1.95a.95.95 0 00-.95-.95H1.95a.95.95 0 00-.95.95V24h22v-3.414c0-.926-.42-1.753-1.078-2.304l.89-10.57h-3.72v-1h-2.5v1h-1.02zM3 3v7.253h7.13V9.71a2 2 0 012-2h1.441V3H3zm9.684 19v-1.414c0-1.001.49-1.888 1.243-2.433l-.212-2.516h-1.584a2 2 0 01-2-2v-1.884H3V22h9.684zm.532-12.291H12.13v3.928h1.416l-.331-3.928zm2.468 9.877H20a1 1 0 011 1V22h-6.316v-1.414a1 1 0 011-1zm-.46-9.875l.662 7.867h1.294v-.869h-.69v-1.5h2.875v1.5h-.685v.869h1.294l.663-7.867h-5.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"home-appliances":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 25"
    >
      <path
        d="M5.738 5.989v2.99h-1.5V5.99h1.5zM5.738 12.968v2.991h-1.5v-2.991h1.5zM18.806 20.793a.877.877 0 11-1.754 0 .877.877 0 011.754 0z"
      ></path>
      <path
        fill-rule="evenodd"
        d="M15.571 7.711V1.95a.95.95 0 00-.95-.95H1.95a.95.95 0 00-.95.95V24h22v-3.414c0-.926-.42-1.753-1.078-2.304l.89-10.57h-3.72v-1h-2.5v1h-1.02zM3 3v7.253h7.13V9.71a2 2 0 012-2h1.441V3H3zm9.684 19v-1.414c0-1.001.49-1.888 1.243-2.433l-.212-2.516h-1.584a2 2 0 01-2-2v-1.884H3V22h9.684zm.532-12.291H12.13v3.928h1.416l-.331-3.928zm2.468 9.877H20a1 1 0 011 1V22h-6.316v-1.414a1 1 0 011-1zm-.46-9.875l.662 7.867h1.294v-.869h-.69v-1.5h2.875v1.5h-.685v.869h1.294l.663-7.867h-5.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"beauty-health":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M16.05 3.25c3.277 0 5.95 2.568 5.95 5.757a5.622 5.622 0 01-1.32 3.616c-.63.755-3.262 3.505-7.964 8.325a1 1 0 01-1.434-.002c-4.639-4.784-7.247-7.506-7.87-8.215A5.627 5.627 0 012 9.007C2 5.818 4.673 3.25 7.95 3.25c1.53 0 2.967.564 4.05 1.539a6.048 6.048 0 014.05-1.539zm3.095 8.091c.552-.66.855-1.475.855-2.334 0-2.066-1.76-3.757-3.95-3.757-1.312 0-2.51.611-3.243 1.612a1 1 0 01-1.614 0C10.46 5.861 9.261 5.25 7.95 5.25 5.76 5.25 4 6.941 4 9.007c0 .891.326 1.733.916 2.405.557.635 2.932 3.117 7.086 7.403 4.194-4.304 6.594-6.817 7.143-7.474zm-10.352.452a1 1 0 011.414 0L12 13.586l4.793-4.793a1 1 0 111.414 1.414l-5.5 5.5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,fashion:`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M4.317 12.449L6 11.887V20a1 1 0 001 1h10a1 1 0 001-1v-8.113l1.684.562a1 1 0 001.23-.543l2-4.5a1 1 0 00-.542-1.334l-5-2A1 1 0 0017 4h-2a1 1 0 00-.993.883l-.011.273C13.93 6.234 13.196 7 12 7c-1.253 0-2-.84-2-2a1 1 0 00-1-1H7a1 1 0 00-.371.072l-5 2a1 1 0 00-.543 1.334l2 4.5a1 1 0 001.23.543zm-.981-4.906L7.193 6h.92l.05.19C8.622 7.821 10.038 9 12 9c2.037 0 3.485-1.271 3.887-3h.92l3.858 1.543-1.21 2.721-2.138-.713A1 1 0 0016 10.5V19H8v-8.5a1 1 0 00-1.316-.949l-2.139.713-1.21-2.721z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"gold-silver":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.785 0c.557 0 1.009.448 1.009 1v3l4.411 3.33c.552.417.85 1.086.787 1.772l-.232 2.523c-.423 4.614-3.123 8.721-7.21 10.971l-2.068 1.139a1 1 0 01-.964 0L9.45 22.596a13.995 13.995 0 01-7.21-10.971l-.232-2.523a1.99 1.99 0 01.787-1.772L7.206 4V1c0-.552.452-1 1.009-1zm2.697 7.788a7.062 7.062 0 01-5.323 4.118l1.768 2.559c.294.426.294.987 0 1.413l-1.886 2.729a1.268 1.268 0 01-2.082 0l-1.886-2.729a1.242 1.242 0 010-1.413l1.768-2.559a7.06 7.06 0 01-5.323-4.118l-1.5 1.133.232 2.523a11.996 11.996 0 006.18 9.404l1.088.599a1 1 0 00.964 0l1.088-.599a11.996 11.996 0 006.18-9.404l.231-2.523zM12 13.77l-.969 1.402.969 1.401.969-1.401L12 13.77zM14.775 2H9.224v2.493a1 1 0 01-.398.798L7.191 6.525C7.841 8.541 9.749 10 11.999 10s4.157-1.459 4.808-3.475l-1.635-1.234a1.002 1.002 0 01-.398-.798V2z"
      ></path>
    </svg>
  `,automotive:`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <path
        d="M3.179 9.91c.073-.393.497-.638.91-.493.8.282 1.827.728 2.27 1.006.407.256.4.372.387.64l-.003.05c-.003.075-.072.137-.156.137H3.382c-.236 0-.415-.191-.377-.401l.174-.938zM13.912 9.417c.412-.145.837.1.91.494l.173.938c.039.21-.14.401-.377.401h-3.205c-.084 0-.152-.062-.156-.138l-.002-.049c-.014-.268-.02-.384.386-.64.443-.278 1.47-.724 2.271-1.006z"
      ></path>
      <path
        fill-rule="evenodd"
        d="M3.043 4.116A2.25 2.25 0 014.987 3h8.027c.8 0 1.54.425 1.943 1.116l1.475 2.529.54-.216a.75.75 0 01.557 1.392l-.484.194c.136.47.205.958.205 1.452V15a.75.75 0 01-.75.75h-.75A.75.75 0 0115 15v-1.51c-3.96.825-8.044.828-12 .011V15a.75.75 0 01-.75.75H1.5A.75.75 0 01.75 15v-2.625c0-.027.001-.052.003-.076a.945.945 0 01-.003-.072v-2.76c0-.494.07-.982.205-1.452L.472 7.82a.75.75 0 11.557-1.392l.54.216 1.474-2.529zm-.435 4.509h13.046c.064.275.096.557.096.842v2.316l-.275.065a28.06 28.06 0 01-13.225-.055V9.467c0-.285.033-.567.096-.842h.262zM4.987 4.5a.75.75 0 00-.648.372L3.025 7.125h11.95l-1.313-2.253a.75.75 0 00-.648-.372H4.987z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"books-art":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M6.293 6.793L5 8.086 3.414 6.5 6.5 3.414 11.086 8 8 11.086 6.414 9.5l1.293-1.293a1 1 0 00-1.414-1.414zm-5 .414L6.586 12.5l-3.28 3.28a.994.994 0 00-.275.474l-1.496 5.483a1 1 0 001.228 1.228l5.483-1.496a.993.993 0 00.474-.274l3.28-3.28 5.293 5.292a1 1 0 001.414 0l4.5-4.5a1 1 0 000-1.414L17.914 12l3.879-3.879a3 3 0 000-4.242L20.62 2.707a3 3 0 00-4.242 0L12.5 6.586 7.207 1.293a1 1 0 00-1.414 0l-4.5 4.5a1 1 0 000 1.414zM6.074 19.99l-1.563-1.563-.586 2.149 2.15-.586zM15.5 6.414L18.086 9 8 19.086 5.414 16.5 15.5 6.414zm4 1.172L16.914 5l.879-.879a1 1 0 011.414 0l1.172 1.172a1 1 0 010 1.414l-.879.879zm-4.5 10.5L13.414 16.5l3.086-3.086L21.086 18 18 21.086 16.414 19.5l1.293-1.293a1 1 0 00-1.414-1.414L15 18.086z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"tools-equipment":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M21.207 16.793l-6.833-6.834A6.502 6.502 0 004.975 2.42 1 1 0 004.755 4l3.036 3.036a.5.5 0 11-.707.707L4.05 4.708a1 1 0 00-1.58.219 6.502 6.502 0 007.464 9.42l6.86 6.86a3.121 3.121 0 104.414-4.414zm-11.38-4.52A4.5 4.5 0 013.73 7.217l1.94 1.94a2.5 2.5 0 003.536-3.536l-1.94-1.94a4.503 4.503 0 015.032 6.152 1 1 0 00.215 1.093l7.28 7.28a1.121 1.121 0 01-1.586 1.586l-7.3-7.3a1 1 0 00-1.08-.22z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"medical-health":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.999 4.017a2 2 0 012 2v14.984a2 2 0 01-2 2H3.001a2 2 0 01-2-2V9.273a2 2 0 012-2H9.84V6.017a2 2 0 012-2h9.159zm-9.408 5.256h-8.59v11.728h8.59V9.273zm9.408-3.256H11.84v1.271a2 2 0 011.751 1.985v3.229h1.932v-2.25h1.5v2.25h2.25v1.5h-2.25v2.25h-1.5v-2.25h-1.932v7h7.408V6.018zm-10.66 12.219v1.5H4.252v-1.5h6.087zm-1.044-7.93c.69 0 1.25.56 1.25 1.25v4.264c0 .69-.56 1.25-1.25 1.25H5.297c-.69 0-1.25-.56-1.25-1.25v-4.264c0-.69.56-1.25 1.25-1.25zm-.25 1.5H5.547v3.764h3.498v-3.764zM20.919.999v2h-9v-2h9z"
      ></path>
    </svg>
  `,"sports-travel":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M6.293 6.793L5 8.086 3.414 6.5 6.5 3.414 11.086 8 8 11.086 6.414 9.5l1.293-1.293a1 1 0 00-1.414-1.414zm-5 .414L6.586 12.5l-3.28 3.28a.994.994 0 00-.275.474l-1.496 5.483a1 1 0 001.228 1.228l5.483-1.496a.993.993 0 00.474-.274l3.28-3.28 5.293 5.292a1 1 0 001.414 0l4.5-4.5a1 1 0 000-1.414L17.914 12l3.879-3.879a3 3 0 000-4.242L20.62 2.707a3 3 0 00-4.242 0L12.5 6.586 7.207 1.293a1 1 0 00-1.414 0l-4.5 4.5a1 1 0 000 1.414zM6.074 19.99l-1.563-1.563-.586 2.149 2.15-.586zM15.5 6.414L18.086 9 8 19.086 5.414 16.5 15.5 6.414zm4 1.172L16.914 5l.879-.879a1 1 0 011.414 0l1.172 1.172a1 1 0 010 1.414l-.879.879zm-4.5 10.5L13.414 16.5l3.086-3.086L21.086 18 18 21.086 16.414 19.5l1.293-1.293a1 1 0 00-1.414-1.414L15 18.086z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"gift-card":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M12 5.197l1.168-1.752a1 1 0 111.664 1.11L13.202 7l7.63 11.445c.022.034.042.068.06.103.628.148 1.255.311 1.883.49a1 1 0 11-.55 1.924C18.814 19.986 15.406 19.5 12 19.5c-3.406 0-6.814.487-10.225 1.462a1 1 0 01-.55-1.924c.628-.179 1.255-.342 1.883-.49.018-.035.038-.07.06-.103L10.798 7l-1.63-2.445a1 1 0 111.664-1.11L12 5.197zm-6.13 12.8c.897-.145 1.794-.259 2.69-.34.024-.064.054-.127.092-.187l2.5-4a1 1 0 011.696 0l2.5 4c.038.06.068.123.091.187.898.081 1.794.195 2.691.34L12 8.804l-6.13 9.195zm7.147-.483L12 15.887l-1.017 1.627a37.471 37.471 0 012.034 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,supermarket:`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M18 4a2 2 0 00-2-2h-3a2 2 0 00-2 2v1.535a4.007 4.007 0 00-1.874 2.467A5.108 5.108 0 009 8l-.217.005A5 5 0 004 13H3a1 1 0 00-.99 1.141l1 7A1 1 0 004 22h16a1 1 0 00.99-.859l1-7A1 1 0 0021 13h-1V9l-.007-.232a4 4 0 00-1.992-3.232L18 4zM4.867 20l-.714-5h15.694l-.714 5H4.867zM16 7h-3a2 2 0 00-1.924 1.45 5.003 5.003 0 012.919 4.318L14 13h4V9a2 2 0 00-1.85-1.995L16 7zm-9.995 5.824A3 3 0 0112 13H6l.005-.176zM16 4h-3v1h3V4zm-1 14v-2H9v2h6z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"kids-baby-toys":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <path d="M11.25 10.5H15V12h-3.75v-1.5z"></path>
      <path
        fill-rule="evenodd"
        d="M3 3h12a2.25 2.25 0 012.25 2.25v7.5A2.25 2.25 0 0115 15H3a2.25 2.25 0 01-2.25-2.25v-7.5A2.25 2.25 0 013 3zm0 1.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h3v-2.69l-.97.97-1.06-1.06.988-.989A2.25 2.25 0 116 5.378V4.5H3zm3 3.75V7.5a.75.75 0 10-.75.75H6zm1.5-2.872V4.5H15a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H7.5v-2.69l.97.97 1.06-1.06-.988-.989A2.25 2.25 0 107.5 5.378zm0 2.872h.75a.75.75 0 10-.75-.75v.75z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"local-products":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.5 1v3l-3 3V4l3-3zM11.5 9v2.984L8.5 9v3l3 3v8.005L7 23l-.5-1C8 22 9 21.395 9 20c0-1.6-1.12-2.72-2.464-4.064C4.52 13.92 2 11.4 2 6h6.5l3 3zM12.5 9v2.984L15.5 9v3l-3 3v8.005L17 23l.5-1C16 22 15 20.895 15 19.5c0-1.6 1.12-2.64 2.464-3.888C19.48 13.74 22 11.4 22 6h-6.5l-3 3zM8.5 4V1l3 3v3l-3-3z"
      ></path>
    </svg>
  `,"pet-shop":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 22c-2.267 0-4.414-.855-6.09-2.356C4.622 18.49 4 17.023 4 15.5c0-2.07 1.336-3.788 3.521-4.744-.323-.493-.521-1.084-.521-1.756C7 7.343 8.343 6 10 6c.768 0 1.468.289 2 .764A2.986 2.986 0 0114 6c1.657 0 3 1.343 3 3 0 .672-.198 1.263-.521 1.756C18.664 11.712 20 13.43 20 15.5c0 1.523-.622 2.99-1.91 4.144A8.93 8.93 0 0112 22zM8 4.5C8 3.12 8.895 2 10 2s2 .895 2 2-.895 2-2 2-2-.895-2-2zm4 0c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2zM4.5 9C3.672 9 3 8.104 3 7s.672-2 1.5-2S6 5.896 6 7s-.672 2-1.5 2zM19.5 9C18.672 9 18 8.104 18 7s.672-2 1.5-2S21 5.896 21 7s-.672 2-1.5 2z"
      ></path>
    </svg>
  `},Q="/Digikala-API-Responsive/",Ss=await A();async function Ts(){try{let e=function(i){t.forEach(o=>{const a=o.querySelector(".pain-subject"),d=o.querySelector(".menu-title"),h=o.querySelector(".menu");a.classList.remove("block"),a.classList.add("hidden"),d.classList.remove("text-[#ed1944]"),d.classList.add("text-[#574a6d]"),h.classList.remove("bg-white","!bg-white"),h.classList.add("bg-[#f0f0f1]")});const n=i.querySelector(".pain-subject"),r=i.querySelector(".menu-title"),l=i.querySelector(".menu");n.classList.remove("hidden"),n.classList.add("block"),r.classList.remove("text-[#574a6d]"),r.classList.add("text-[#ed1944]"),l.classList.remove("bg-[#f0f0f1]"),l.classList.add("bg-white")};const s=`
      <div
        class="annoying hidden group-hover/grand:block transition-all duration-200 h-[65vh] absolute top-full right-0 overflow-x-visible z-10"
      >
        <div
          class="direction direction-ltr h-full overflow-y-scroll scroll-smooth overflow-x-visible"
        >
          <div class="annoying-topics h-full w-50 overflow-x-visible">
            ${Ss.megaMenu.map((i,n)=>{const r=Math.min(i.columns.length,4),l=`${r*13.75}rem`;return`
      <div class="pain group w-auto overflow-x-visible">
        <div
          class="menu group/parent border-spacing-color annoying-topics-title direction-rtl w-full h-12 bg-[#f0f0f1] gap-2 p-2 flex justify-start items-center text-[#574a6d] hover:text-[#ed1944] transition hover:bg-white"
        >
          ${ys[i.icon]}
          <span
            class="menu-title font-Iran text-xs ml-2 ${n===0?"text-[#ed1944]":"text-[#574a6d]"}"
          >
            ${i.title}
          </span>

          <div
            class="pain-subject ${n===0?"block":"hidden"} h-[65vh] p-3 absolute bg-white top-0 right-full overflow-x-hidden overflow-auto"
            style="width: ${l}; min-width: 13.75rem;"
          >
            <a
              href="${i.topLink.url}"
              class="flex gap-2 w-full justify-start items-start"
            >
              <span
                class="font-Iran mt-1 w-fit text-xs text-[#008eb2]"
              >
                ${i.topLink.title}
              </span>

              <svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                style="fill: #008eb2"
                width="18"
                height="18"
              >
                <defs>
                  <symbol
                    id="chevronLeft"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                    ></path>
                  </symbol>
                </defs>
                <g>
                  <path
                    d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                  ></path>
                </g>
              </svg>
            </a>

            <div
              class="subjects gap-x gap-y-1 mt-3 grid"
              style="grid-template-columns: repeat(${r}, 13.75rem);"
            >
              ${i.columns.map(o=>o.type==="grouped"?`
                      <div class="w-55 p-2 flex flex-col gap-2">
                        <div
                          class="titles w-full flex flex-row gap-1 border-r-2 border-r-[#ed1944] pr-2 group/child justify-start items-center"
                        >
                          <span
                            class="font-Iran text-[14px] font-bold text-black group-hover/child:text-[#ed1944]"
                          >
                            ${o.title}
                          </span>
                          <img
                            src="${Q}img/Header/left-black.svg"
                            alt=""
                            class="w-4.5 block group-hover/child:hidden"
                          />
                          <img
                            src="${Q}img/Header/left-red.svg"
                            alt=""
                            class="w-4.5 hidden group-hover/child:block"
                          />
                        </div>

                        ${o.sections.map(a=>`
                              <div class="flex flex-col gap-2">
                                <span
                                  class="font-Iran text-xs font-bold text-[#424750]"
                                >
                                  ${a.title}
                                </span>

                                ${a.items.map(d=>`
                                      <div class="child">
                                        <a
                                          href="${d.url}"
                                          class="font-Iran text-xs text-[#a2a2a2] hover:text-[#ed1944]"
                                        >
                                          ${d.title}
                                        </a>
                                      </div>
                                    `).join("")}
                              </div>
                            `).join("")}
                      </div>
                    `:o.type==="simple"?`
                      <div class="w-55 p-2 flex flex-col gap-2">
                        <div
                          class="titles w-full flex flex-row gap-1 border-r-2 border-r-[#ed1944] pr-2 group/child justify-start items-center"
                        >
                          <span
                            class="font-Iran text-[14px] font-bold text-black group-hover/child:text-[#ed1944]"
                          >
                            ${o.title}
                          </span>
                          <img
                            src="${Q}img/Header/left-black.svg"
                            alt=""
                            class="w-4.5 block group-hover/child:hidden"
                          />
                          <img
                            src="${Q}img/Header/left-red.svg"
                            alt=""
                            class="w-4.5 hidden group-hover/child:block"
                          />
                        </div>

                        ${o.items.map(a=>`
                              <div class="child">
                                <a
                                  href="${a.url}"
                                  class="font-Iran text-xs text-[#a2a2a2] hover:text-[#ed1944]"
                                >
                                  ${a.title}
                                </a>
                              </div>
                            `).join("")}
                      </div>
                    `:"").join("")}
            </div>
          </div>
        </div>
      </div>
    `}).join("")}
          </div>
        </div>
      </div>
    `;document.querySelector(".mega-menu-container").innerHTML=s;const t=document.querySelectorAll(".mega-menu-container .pain");t.length>0&&e(t[0]),t.forEach(i=>{i.addEventListener("mouseenter",()=>{e(i)})})}catch(e){console.error(e.message)}}function Ls(){const e=document.querySelector(".console"),s=document.querySelector(".history"),t=document.querySelector(".category"),i=document.querySelector(".bg-close");!e||!s||!t||e.addEventListener("click",function(){s.classList.add("!flex"),i?.classList.add("!block"),t.addEventListener("click",function(){s.classList.remove("!flex"),i?.classList.remove("!block")}),i?.addEventListener("click",function(){i?.classList.remove("!block"),s.classList.remove("!flex")})})}const qe=await A(),Ve="/Digikala-API-Responsive/";function De(){new H(".locswiper",{modules:[W],loop:!1,slidesPerView:5.1,spaceBetween:10,rtl:!0,navigation:{nextEl:".city-next",prevEl:".city-prev"},breakpoints:{0:{slidesPerView:2.2,spaceBetween:8},640:{slidesPerView:3.2,spaceBetween:10},768:{slidesPerView:4.2,spaceBetween:10},1024:{slidesPerView:5.1,spaceBetween:10}}})}try{const e=qe.locationCity.map(s=>`
                  <div
                    class="swiper-slide flex h-14 items-center justify-between rounded-full border border-gray-300 !w-auto bg-white py-2 px-1 text-md font-semibold text-slate-700"
                  >
                    <span class="font-Iran desktop:text-sm mobile:text-[12px]">${s.city}</span>
                    <img src="${Ve}img/Header/left-black.svg" alt="">
                  </div>
        `);document.querySelector(".locswiperkid").innerHTML=e.join(" ")}catch(e){console.error(e.message)}try{const e=qe.cities.map(s=>`
                  <div class="cities w-full flex justify-between items-center py-2 border-b border-[#eaeaec] pb-2">
              <div class="cities-item flex justify-center items-center gap-x-1 cursor-pointer">
                <span class="font-Iran text-sm">${s.city}</span>
                <span class="font-Iran text-sm text-[#878b90]">در ${s.province}</span>
              </div>
              <img src="${Ve}img/Header/left-black.svg" alt="" />
            </div>
        `);document.querySelector(".cities-list").innerHTML=e.join(" ")}catch(e){console.error(e.message)}const Ge=document.querySelector(".loc-modal"),Ms=document.querySelector(".location-choose"),Es=document.querySelector(".loc-close"),U=document.querySelector(".cover-bg-loc-full");function $s(){Ge.classList.remove("hidden"),U.classList.remove("hidden"),U.classList.remove("hidden"),document.body.classList.add("overflow-hidden")}function Fe(){Ge.classList.add("hidden"),U.classList.add("hidden"),U.classList.add("hidden"),document.body.classList.remove("overflow-hidden")}Ms.addEventListener("click",$s);Es.addEventListener("click",Fe);U.addEventListener("click",Fe);const _e=document.querySelector(".loc-scroll"),Cs=document.querySelector(".loc-divider");function Ne(){Cs.classList.toggle("hidden",_e.scrollTop<=20)}Ne();_e.addEventListener("scroll",Ne);De();const ks=await A();async function Re(){try{const e=ks.navbar.map(t=>`
        <div class="nav-items cursor-pointer items-end flex justify-end gap-2 h-10 flex-col group">
          <a class="flex items-center gap-1" href="${t.link}">
            <img src=${t.img} class="w-4.5" />
            <span class="font-Iran text-[12px] text-[#3f3f3f]">
              ${t.title}
            </span>
          </a>
          <div class="underline w-3 h-0.5 opacity-0 bg-[#ed1944] rounded-full group-hover:opacity-100 group-hover:w-full transition-all duration-300"></div>
        </div>`);document.querySelector(".navigation").innerHTML=e.join(" "),document.querySelectorAll(".nav-items").forEach(t=>{t.addEventListener("mouseenter",function(i){const n=i.currentTarget.getBoundingClientRect(),r=i.clientX-n.left,l=n.width,o=i.currentTarget;o.classList.remove("items-start","items-end"),r<l/2?o.classList.add("items-end"):o.classList.add("items-start")})})}catch(e){console.error(e.message)}}function Ps(){const e=document.querySelector("[data-desktop-header]"),s=document.querySelector("[data-header-category]");if(!e||!s)return;const t=window.matchMedia("(min-width: 1024px)");let i=window.scrollY;function n(l){s.classList.toggle("-translate-y-full",l),s.style.height=l?"0px":"40px",s.style.opacity=l?"0":"1",s.style.pointerEvents=l?"none":""}function r(){if(!t.matches){n(!1),s.style.height="",s.style.opacity="",s.style.pointerEvents="",i=window.scrollY;return}const l=window.scrollY,o=l-i;l<=0?n(!1):o>0?n(!0):o<0&&n(!1),i=l}window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),s.style.transition="transform 280ms ease, height 280ms ease, opacity 220ms ease",s.style.overflow="hidden",s.style.height="40px",r()}Re();Ps();async function Is(){let e=document.querySelector(".cover-bg"),s=document.querySelector(".items-categories");s.addEventListener("mouseenter",function(){e.classList.add("!block")}),s.addEventListener("mouseleave",function(){e.classList.remove("!block")})}async function We(){try{const s=(await A()).slider.map(i=>`
      <div class="swiper-slide">
        <a href="${i.link}" class="block w-full h-full">
          <img
            src="${i.src}"
            alt="${i.title}"
            title="${i.title}"
            class="w-full h-full block object-cover desktop:block mobile:hidden"
          />
          <img
            src="${i.Msrc}"
            alt="${i.title}"
            title="${i.title}"
            class="h-full block object-cover desktop:hidden mobile:block w-110 rounded-xl"
          />
        </a>
      </div>
    `),t=document.querySelector(".slider-wrapper");t.innerHTML=s.join(""),new H(".Slider",{modules:[W,vs,xs],slidesPerView:1,spaceBetween:8,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{0:{slidesPerView:1.1,centeredSlides:!0,spaceBetween:2},1024:{slidesPerView:1,centeredSlides:!1,spaceBetween:0}}})}catch(e){console.error(e.message)}}We();async function zs(){const e=document.querySelector(".MLocation"),s=document.querySelector(".loc-modal"),t=document.querySelector(".cover-bg-loc-full");e.addEventListener("click",()=>{s.classList.remove("hidden"),t.classList.remove("hidden")})}const As=await A(),js="/Digikala-API-Responsive/";async function Ye(){try{const i=As.HotSearh.map(n=>`
    <div class="swiper-slide cursor-pointer !flex !flex-row !items-center gap-2 !w-auto rounded-full border border-gray-300 bg-white py-2 px-2">
      <span class="font-Iran text-sm font-semibold text-slate-700 whitespace-nowrap">${n.title}</span>
      <img src="${js}img/Header/left-black.svg" alt="" class="w-4 h-4 shrink-0" />
    </div>
  `);document.querySelector(".hot-wrapper").innerHTML=i.join(" ")}catch(i){console.log(i.message)}new H(".Search-hot-swiper",{slidesPerView:"auto",spaceBetween:8});const e=document.querySelector(".close-MSearch-popup"),s=document.querySelector(".MSearch-popup");document.querySelector(".MSearch").addEventListener("click",()=>{s.classList.remove("translate-y-full","invisible","opacity-0","pointer-events-none")}),e.addEventListener("click",()=>{s.classList.add("translate-y-full","invisible","opacity-0","pointer-events-none")})}Ye();async function Xe(){const e=await A();try{const s=e.services.map(t=>`
    <div class="services-items flex flex-col py-2 box-border rounded-lg border border-[#d7d7d7] justify-between items-center w-1/6 h-18 ${t.active?"bg-[#e40138]":"bg-white"}">

      <img src="${t.Simg}" alt="" class="w-10">

      <span class="font-Iran text-[12px] font-normal text-center
        ${t.active?"text-white":"text-black"}">
        ${t.Stitle}
      </span>

    </div>
  `);document.querySelector(".services").innerHTML=s.join(" ")}catch(s){console.error(s.message)}}Xe();async function Os(){try{const r=(await A()).list.map(l=>`
                <div class="flex flex-col w-20 justify-center items-center gap-1 h-30">
          <a href="${l.link}" class="flex flex-col justify-start items-center gap-1 h-full">
            <img src="${l.icon}" alt="" class="w-12" />
            <span class="w-16 font-Iran text-[12px] text-center leading-6"
              >${l.text}</span
            ></a
          >
        </div>
            `);document.querySelector(".list").innerHTML=r.join("")}catch(n){console.log(n.message)}try{const r=(await A()).listModal.map(l=>`
                <div class="flex flex-col desktop:w-20 mobile:w-30 justify-center items-center gap-1 h-30">
          <a href="${l.link}" class="flex flex-col justify-start items-center gap-1 h-full">
            <img src="${l.icon}" alt="" class="w-12" />
            <span class="w-16 font-Iran text-[12px] text-center leading-6"
              >${l.text}</span
            ></a
          >
        </div>
            `);document.querySelector(".list-modal-container").innerHTML=r.join("")}catch(n){console.log(n.message)}try{const r=(await A()).modalService.map(l=>`
                <div
              class="flex justify-between items-start desktop:w-70 mobile:w-[98%] desktop:min-h-30  mobile:min-h-22 desktop:border border-[#eaeaec] mobile:border-b desktop:rounded-lg p-4 gap-2"
            >
              <img src="${l.pic}" alt="" class="w-13" />
              <div class="flex flex-col justify-start desktop:w-50 mobile:w-full items-center gap-2">
                <div class="flex justify-between w-full items-center">
                  <h3 class="font-Iran text-sm font-bold">${l.title}</h3>
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    style="width: 24px; height: 24px; fill: #a1a3a8"
                    width="24"
                    height="24"
                  >
                    <defs>
                      <symbol
                        id="arrowLeft"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z"
                          clip-rule="evenodd"
                        ></path>
                      </symbol>
                    </defs>
                    <g>
                      <path
                        fill-rule="evenodd"
                        d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z"
                        clip-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p class="font-Iran text-xs text-[#666] leading-6 w-full text-right line-clamp-2">
${l.text}                </p>
              </div>
            </div>
            `);document.querySelector(".list-modal-services").innerHTML=r.join("")}catch(n){console.log(n.message)}const e=document.querySelector(".closelist"),s=document.querySelector(".list-modal"),t=document.querySelector(".more-list"),i=document.querySelector(".cover-bg-loc-full");t.addEventListener("click",()=>{s.classList.remove("hidden"),s.classList.add("flex"),i.classList.remove("hidden"),document.body.classList.add("overflow-hidden")}),e.addEventListener("click",()=>{s.classList.add("hidden"),s.classList.remove("flex"),i.classList.add("hidden"),document.body.classList.remove("overflow-hidden")})}const Te="/Digikala-API-Responsive/";async function Hs(){try{let s=(await A()).amazingmobile.map(i=>`
        <div class="cursor-pointer shrink-0 ${i.border?"rounded-tr-lg rounded-br-lg":""} h-60 overflow-hidden !w-[130px]">
          <div class="w-full h-full flex flex-col bg-white justify-center items-center gap-1 p-2">
            <img src="${i.img}" alt="" />
            <p class="font-Iran text-[#777b81] text-[12px] text-right w-full line-clamp-2 leading-6 text-black">
              ${i.title}
            </p>
            <div class="flex justify-between items-start w-full">
              <div class="font-number text-[12px] font-bold text-white bg-[#d32f2f] px-1.5 py-0.5 rounded-full">
                ${i.discount}
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="flex justify-center items-center gap-1">
                  <span class="font-number text-sm">${i.newPrice}</span>
                  <img src="${Te}img/inc/toman.svg" alt="">
                </div>
                <span class="font-number text-sm text-[#cdced1] line-through ml-4">
                  ${i.oldPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      `);const t=`
        <div class="bg-white w-40 shrink-0 ml-4 h-70 rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center">
          <div class="p-2 rounded-full border-2 border-black">
            <img src="${Te}img/inc/blackleft.svg" alt="" />
          </div>
          <span class="font-Iran text-[14px] text-[#574a6d] leading-6 my-2">
            مشاهده همه
          </span>
        </div>
    `;document.querySelector(".mobile-amazing-items").innerHTML+=s.join("")+t}catch(e){console.log(e.message)}}const Z="/Digikala-API-Responsive/";async function Bs(){function e(t){const i=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return String(t).replace(/\d/g,n=>i[Number(n)])}function s(){const t=document.querySelectorAll(".second"),i=document.querySelectorAll(".minute"),n=document.querySelectorAll(".hour");if(!t.length&&!i.length&&!n.length)return;const r=new Date,l=new Date;l.setHours(24,0,0,0);let o=Math.floor((l-r)/1e3);o<=0&&(l.setDate(l.getDate()+1),o=Math.floor((l-r)/1e3));const a=e(String(Math.floor(o/3600)).padStart(2,"0")),d=e(String(Math.floor(o%3600/60)).padStart(2,"0")),h=e(String(o%60).padStart(2,"0"));n.forEach(u=>{u.textContent=a,u.classList.add("font-number")}),i.forEach(u=>{u.textContent=d,u.classList.add("font-number")}),t.forEach(u=>{u.textContent=h,u.classList.add("font-number")})}setInterval(s,1e3),s();try{const i=(await A()).ads.map(n=>`
        <div class="desktop:min-w-60 desktop:w-[24%] mobile:w-[45%] mobile:h-30 desktop:h-auto desktop:rounded-2xl mobile:rounded-lg overflow-hidden">
          <img src="${n.img}" alt="" title="${n.title}" class="w-full h-full object-cover" />
        </div>
      `);document.querySelector(".ads").innerHTML=i.join("")}catch(t){console.log(t.message)}try{const i=(await A()).ads2.map(n=>`
        <div class="desktop:min-w-60 desktop:w-[24%] mobile:w-[45%] mobile:h-30 desktop:h-auto desktop:rounded-2xl mobile:rounded-lg overflow-hidden">
          <img src="${n.img}" alt="" title="${n.title}" class="w-full h-full object-cover" />
        </div>
      `);document.querySelector(".ads2").innerHTML=i.join("")}catch(t){console.log(t.message)}try{let t=await A(),i=t.incredible.map(a=>`
        <div class="swiper-slide cursor-pointer ${a.border?"rounded-tr-lg rounded-br-lg":""} overflow-hidden !w-[152px]">
          <div class="w-full h-full flex flex-col bg-white justify-center items-center gap-1 p-2">
            <img src="${a.img}" alt="" />
            <p class="font-Iran text-[#777b81] text-[12px] text-right w-full">
              ${a.title}
            </p>
            <div class="flex justify-between items-start w-full">
              <div class="font-number text-[12px] font-bold text-white bg-[#d32f2f] px-1.5 py-0.5 rounded-full">
                ${a.discount}
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="flex justify-center items-center gap-1">
                  <span class="font-number text-sm">${a.newPrice}</span>
                  <img src="${Z}img/inc/toman.svg" alt="">
                </div>
                <span class="font-number text-sm text-[#cdced1] line-through ml-4">
                  ${a.oldPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      `);const n=`
      <div class="swiper-slide !w-[160px] pl-4">
        <div class="bg-white w-full h-[260px] rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center">
          <div class="p-2 rounded-full border-2 border-[#19bfd3]">
            <img src="${Z}img/inc/blueleft.svg" alt="" />
          </div>
          <span class="font-Iran text-[14px] text-[#574a6d] leading-6 my-2">
            مشاهده همه
          </span>
        </div>
      </div>
    `;document.querySelector(".inc-wrapper").innerHTML+=i.join("")+n;const r=t.incredible.map(a=>`
        <div class="cursor-pointer shrink-0 ${a.border?"rounded-tr-lg rounded-br-lg":""} h-60 overflow-hidden !w-[130px]">
          <div class="w-full h-full flex flex-col bg-white justify-center items-center gap-1 p-2">
            <img src="${a.img}" alt="" />
            <p class="font-Iran text-[#777b81] text-[12px] text-right w-full line-clamp-2 leading-6 text-black">
              ${a.title}
            </p>
            <div class="flex justify-between items-start w-full">
              <div class="font-number text-[12px] font-bold text-white bg-[#d32f2f] px-1.5 py-0.5 rounded-full">
                ${a.discount}
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="flex justify-center items-center gap-1">
                  <span class="font-number text-sm">${a.newPrice}</span>
                  <img src="${Z}img/inc/toman.svg" alt="">
                </div>
                <span class="font-number text-sm text-[#cdced1] line-through ml-4">
                  ${a.oldPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      `),l=`
      <div class="bg-white w-40 shrink-0 ml-4 h-70 rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center">
        <div class="p-2 rounded-full border-2 border-black">
          <img src="${Z}img/inc/blackleft.svg" alt="" />
        </div>
        <span class="font-Iran text-[14px] text-[#574a6d] leading-6 my-2">
          مشاهده همه
        </span>
      </div>
    `,o=document.querySelector(".mobile-incredible-items");o&&(o.innerHTML=r.join("")+l)}catch(t){console.log(t.message)}new H(".inc-swiper",{modules:[W],slidesPerView:"auto",spaceBetween:2,navigation:{nextEl:".inc-next",prevEl:".inc-prev"}})}async function qs(){try{const s=(await A()).amazing.map(t=>`
        <div class="w-20 h-20 relative bg-white rounded-full flex justify-center items-center">
                <img src="${t.img}" alt="" class="rounded-full w-[80%]">
                <div class="absolute rounded-full bg-[#d32f2f] font-number text-[14px] px-1.5 py-0.5 text-white bottom-0 right-0">${t.discount}</div>
            </div>
      `);document.querySelector(".amazing-items").innerHTML=s.join("")}catch(e){console.log(e.message)}}async function Vs(){try{const s=(await A()).grouping;let t="";for(let i=0;i<s.length;i+=2){const n=s[i],r=s[i+1];t+=`
        <div class="swiper-slide !w-[120px]">
          ${n?`
            <div class="flex flex-col justify-between items-center w-full h-[200px] cursor-pointer">
              <div class="flex flex-col justify-center items-center w-full gap-2">
                <img src="${n.img}" alt="${n.title}" class="w-25">
                <span class="font-Iran text-[12px] text-center font-semibold">${n.title}</span>
              </div>
            </div>
          `:""}

          ${r?`
            <div class="flex flex-col justify-between items-center w-full h-[200px] cursor-pointer">
              <div class="flex flex-col justify-center items-center w-full gap-2">
                <img src="${r.img}" alt="${r.title}" class="w-25">
                <span class="font-Iran text-[12px] text-center font-semibold">${r.title}</span>
              </div>
            </div>
          `:""}
        </div>
      `}document.querySelector(".grouping-wrapper").innerHTML=t}catch(e){console.log(e.message)}try{const s=(await A()).grouping;let t="";for(let i=0;i<s.length;i+=2){const n=s[i],r=s[i+1];t+=`
      <div class="flex flex-col gap-2 shrink-0 w-[90px]">
        ${n?`
          <div class="flex flex-col justify-center items-center w-full cursor-pointer">
            <div class="flex flex-col justify-center items-center w-full gap-1">
              <img src="${n.img}" alt="${n.title}" class="w-20">
              <span class="font-Iran text-[10px] text-center">${n.title}</span>
            </div>
          </div>
        `:""}

        ${r?`
          <div class="flex flex-col justify-center items-center w-full cursor-pointer">
            <div class="flex flex-col justify-center items-center w-full gap-1">
              <img src="${r.img}" alt="${r.title}" class="w-20">
              <span class="font-Iran text-[10px] text-center">${r.title}</span>
            </div>
          </div>
        `:""}
      </div>
    `}document.querySelector(".grouping-mobile").innerHTML=t}catch(e){console.log(e.message)}new H(".grouping-swiper",{modules:[W],slidesPerView:7.5,spaceBetween:60,navigation:{nextEl:".grouping-next",prevEl:".grouping-prev"}})}async function Ds(){try{const s=(await A()).partner.map(t=>`
                <div class="${t.mobile?"mobile:block desktop:block":"mobile:hidden desktop:block"} desktop:rounded-2xl mobile:rounded-lg overflow-hidden cursor-pointer ${t.mobile,"mobile:w-[95%] desktop:w-[49%]"} " title="${t.title}">
                    <img src="${t.img}" alt="${t.title}" class="w-full object-cover">
                </div>
            `);document.querySelector(".partnership").innerHTML=s.join("")}catch(e){console.log(e.message)}try{const s=(await A()).partner2.map(t=>`
                <div class="rounded-2xl overflow-hidden cursor-pointer w-[49%]" title="${t.title}">
                    <img src="${t.img}" alt="${t.title}" class="w-full object-cover">
                </div>
            `);document.querySelector(".partnership2").innerHTML=s.join("")}catch(e){console.log(e.message)}try{let s=(await A()).partner.map(t=>`
            <div class="w-[95%] border border-[#eaeaec] rounded-lg overflow-hidden cursor-pointer ${t.id==2?"block":"hidden"}">
              <img src="${t.img}" alt="" title="${t.title}" class="w-full h-full object-cover" />
            </div>
          `);document.querySelector(".partner-mobile-1").innerHTML=s.join("")}catch(e){console.log(e.message)}try{let s=(await A()).partner2.map(t=>`
            <div class="w-[95%] border border-[#eaeaec] rounded-lg overflow-hidden cursor-pointer">
              <img src="${t.img}" alt="" title="${t.title}" class="w-full h-full object-cover" />
            </div>
          `);document.querySelector(".partner-mobile-2").innerHTML=s.join("")}catch(e){console.log(e.message)}}async function Gs(){try{const s=(await A()).brands.map(t=>`
        <div class="swiper-slide !w-[135px]">
          <a href="${t.url||"#"}" title="${t.title}" class="w-full h-26 border-r border-[#f0f0f1] flex justify-center items-center px-2">
            <img src="${t.img}" alt="${t.title}" class="w-[85%] object-contain" />
          </a>
        </div>
      `);document.querySelector(".brands-wrapper").innerHTML=s.join("")}catch(e){console.log(e.message)}try{const s=(await A()).brands.map(t=>`
        <a href="${t.url||"#"}" title="${t.title}" class="shrink-0 w-[80px] h-[100px] rounded-lg border border-[#e0e0e2] bg-[#f5f5f5] flex flex-col justify-center items-center gap-2 px-1">
          <img src="${t.img}" alt="${t.title}" class="w-[75%] object-contain mix-blend-multiply" />
          <span class="font-Iran text-[12px] text-[#3f4064] text-center w-full truncate">${t.title}</span>
        </a>
      `);document.querySelector(".brands-mobile").innerHTML=s.join("")}catch(e){console.log(e.message)}new H(".brands-swiper",{modules:[W],slidesPerView:8,spaceBetween:8,navigation:{nextEl:".brands-next",prevEl:".brands-prev"}})}const Le="/Digikala-API-Responsive/";async function Fs(){try{const s=((await A()).options2||[]).map(t=>{const i=(t.images||[]).map((n,r,l)=>{const o=r===0,a=r===l.length-1;return`
            <div class="w-[50%] h-35 flex justify-center items-center ${o?"border-l border-b border-[#f0f0f1]":""} ${a?"border-r border-t border-[#f0f0f1]":""}">
              <img src="${n}" alt="${t.title}" class="w-[80%] object-contain" />
            </div>
          `}).join("");return`
        <div class="w-[25%] min-h-[300px] border-l border-[#f0f0f1] p-4 flex flex-col justify-between items-start">
          <div class="w-full flex flex-col gap-1">
            <h3 class="font-Iran text-[16px] text-[#23254e] font-semibold">${t.title}</h3>
            <span class="font-Iran text-[11px] text-[#b1b3b8]">${t.subtitle||""}</span>
          </div>

          <div class="w-full flex flex-wrap items-center mt-3">
            ${i}
          </div>

          <a href="${t.url||"#"}" class="w-full flex justify-center items-center gap-1 mt-3 font-Iran text-[16px] text-[#19bfd3]">
            مشاهده
            <img src="${Le}img/blueleftsmall.svg" alt="" class="w-6">
          </a>
        </div>
      `});document.querySelector(".options2").innerHTML=s.join("")}catch(e){console.log(e.message)}try{const s=((await A()).options||[]).map(t=>{const i=(t.images||[]).map((n,r,l)=>{const o=r===0,a=r===l.length-1;return`
            <div class="w-[50%] h-35 flex justify-center items-center ${o?"border-l border-b border-[#f0f0f1]":""} ${a?"border-r border-t border-[#f0f0f1]":""}">
              <img src="${n}" alt="${t.title}" class="w-[80%] object-contain" />
            </div>
          `}).join("");return`
        <div class="w-[25%] min-h-[300px] border-l border-[#f0f0f1] p-4 flex flex-col justify-between items-start">
          <div class="w-full flex flex-col gap-1">
            <h3 class="font-Iran text-[16px] text-[#23254e] font-semibold">${t.title}</h3>
            <span class="font-Iran text-[11px] text-[#b1b3b8]">${t.subtitle||""}</span>
          </div>

          <div class="w-full flex flex-wrap items-center mt-3">
            ${i}
          </div>

          <a href="${t.url||"#"}" class="w-full flex justify-center items-center gap-1 mt-3 font-Iran text-[16px] text-[#19bfd3]">
            مشاهده
            <img src="${Le}img/blueleftsmall.svg" alt="" class="w-6">
          </a>
        </div>
      `});document.querySelector(".options").innerHTML=s.join("")}catch(e){console.log(e.message)}}const Me="/Digikala-API-Responsive/";function _s(e){const s=e.map(i=>`
              <div
                class="w-[170px] h-[280px] bg-white border border-[#e0e0e2] rounded-lg flex flex-col justify-start items-center gap-2 shrink-0"
              >
              <div class="bg-[#f0f0f1] w-full p-2">
                <img
                  src="${i.img}"
                  alt=""
                  class="w-full h-[130px] object-cover mix-blend-multiply"
                />
                </div>
                <div class="w-full p-2 flex flex-col justify-start items-start gap-2">
                <div class="w-full flex flex-col justify-start items-start gap-1">
                  <p class="font-Iran text-[14px] text-[#3f4064] line-clamp-2">
                    ${i.title}
                  </p>
                </div>
                <div class="w-full flex flex-col justify-center items-center gap-1">
                  <div class="w-full flex justify-start items-center">
                      <span class="font-number text-white bg-[#d32f2f] rounded-full px-3 py-0.5 text-[12px] ${i.discount?"block":"hidden"}">${i.discount||""}</span>
                      <span class="font-number text-[#b4b6ba] text-[12px] line-through ${i.discount?"block":"hidden"}">${i.oldPrice||""}</span>
                  </div>
                  <div class="w-full flex justify-start items-center gap-1">
                    <span class="font-number desktop:text-[22px] mobile:text-[14px] text-[#3f4064] font-bold">${i.newPrice}</span>
                    <img src="${Me}img/inc/toman.svg" alt="" class="w-4" />
                  </div>
                </div>
                </div>
              </div>
            `),t=`
                <div class="bg-white w-[170px] h-[270px] flex flex-col justify-center items-center gap-2
                ">
                <div class="p-2 flex justify-center items-center border-2 border-black rounded-full">
                    <img src="${Me}img/leftgraybig.svg" alt="" class="w-6" /></div>
                    <span class="font-Iran text-[14px] text-[#574a6d] leading-6 my-2">
                        مشاهده همه
                    </span>
                </div>
        `;return s.join("")+t}async function Ns(){try{const e=await A();[{className:".optionsM1",data:e.optionsM1||[]},{className:".optionsM2",data:e.optionsM2||[]},{className:".optionsM3",data:e.optionsM3||[]},{className:".optionsM4",data:e.optionsM4||[]},{className:".optionsM5",data:e.optionsM5||[]},{className:".optionsM6",data:e.optionsM6||[]},{className:".optionsM7",data:e.optionsM7||[]},{className:".optionsM8",data:e.optionsM8||[]}].forEach(t=>{const i=document.querySelector(t.className);i&&(i.innerHTML=_s(t.data))})}catch(e){console.log(e.message)}}async function Rs(){try{const s=(await A()).indemand||[];let t="";for(let i=0;i<s.length;i+=3){const n=s[i],r=s[i+1],l=s[i+2];t+=`
        <div class="swiper-slide">
          <div class="w-full flex flex-col justify-start items-start py-2">
            ${n?`
                <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 border-b border-[#f0f0f1] p-4">
                <img src="${n.img}" alt="${n.title}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${n.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${n.title}</p>
              </div>
            `:""}
            ${r?`
              <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 border-b border-[#f0f0f1] p-4">
                <img src="${r.img}" alt="${r.title}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${r.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${r.title}</p>
              </div>
            `:""}
            ${l?`
              <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 p-4">
                <img src="${l.img}" alt="${l.title}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${l.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${l.title}</p>
              </div>
            `:""}
          </div>
        </div>
      `}document.querySelector(".indemand-wrapper").innerHTML=t}catch(e){console.log(e.message)}try{const s=(await A()).indemand||[];let t="";for(let i=0;i<s.length;i+=3){const n=s[i],r=s[i+1],l=s[i+2];t+=`
        <div class="swiper-slide">
          <div class="w-full flex flex-col justify-start items-start gap-2">
            ${n?`
              <div class="w-full h-[100px] cursor-pointer flex justify-between items-center border border-[#e0e0e2] rounded-xl pl-2">
              <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
              <img src="${n.img}" alt="${n.title}" class="h-full object-contain mix-blend-multiply" /></div>
              <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${n.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${n.title}</p>
              </div>
            `:""}
            ${r?`
              <div class="w-full h-[100px] flex justify-between cursor-pointer items-center border border-[#e0e0e2] rounded-xl pL-2">
                <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
                <img src="${r.img}" alt="${r.title}" class="h-full object-contain mix-blend-multiply" /></div>
                <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${r.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${r.title}</p>
              </div>
            `:""}
            ${l?`
              <div class="w-full h-[100px] flex justify-between items-center cursor-pointer border border-[#e0e0e2] rounded-xl pl-2">
                <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
                <img src="${l.img}" alt="${l.title}" class="h-full object-contain mix-blend-multiply" /></div>
                <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${l.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${l.title}</p>
              </div>
            `:""}
          </div>
        </div>
      `}document.querySelector(".indemand-mobile-wrapper").innerHTML=t}catch(e){console.log(e.message)}new H(".indemand-swiper",{modules:[W],slidesPerView:3.3,spaceBetween:20,navigation:{nextEl:".indemand-next",prevEl:".indemand-prev"}}),new H(".indemand-mobile-swiper",{slidesPerView:1.2,spaceBetween:10})}const Ws="/Digikala-API-Responsive/";async function Ys(){try{const s=((await A()).chosen||[]).map(t=>`
        <div class="h-[286px] border-l border-b border-[#f0f0f1] px-2 pt-2 pb-3 flex flex-col justify-between items-start" dir="rtl">
          <div class="w-full h-[182px] flex justify-center items-center">
            <img src="${t.img}" alt="${t.title}" class="max-h-full w-[78%] object-contain" />
          </div>
          <div class="w-full flex flex-col gap-1">
            <div class="w-full flex justify-between items-end">
              <span class="font-number text-white bg-[#d32f2f] rounded-full min-w-10 h-6 px-2 text-[14px] leading-6 text-center ${t.discount?"block":"hidden"}">${t.discount||""}</span>
              <div class="flex justify-end items-end gap-1">
                <span class="font-number text-[18px] leading-none text-[#2f2f56] font-bold">${t.newPrice}</span>
<img src="${Ws}img/inc/toman.svg" alt="" class="w-5">             
 </div>
            </div>
            <span class="font-number text-[13px] text-[#c7c9ce] line-through self-end ml-6 ${t.oldPrice?"block":"hidden"}">${t.oldPrice||""}</span>
          </div>
        </div>
      `);document.querySelector(".chosen-items").innerHTML=s.join("")}catch(e){console.log(e.message)}}async function Xs(){try{const s=(await A()).hot||[];let t="";for(let i=0;i<s.length;i+=3){const n=s[i],r=s[i+1],l=s[i+2];t+=`
        <div class="swiper-slide">
          <div class="w-full flex flex-col justify-start items-start py-2">
            ${n?`
                <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 border-b border-[#f0f0f1] p-4">
                <img src="${n.img}" alt="${n.title}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${n.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${n.title}</p>
              </div>
            `:""}
            ${r?`
              <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 border-b border-[#f0f0f1] p-4">
                <img src="${r.img}" alt="${r.title}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${r.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${r.title}</p>
              </div>
            `:""}
            ${l?`
              <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 p-4">
                <img src="${l.img}" alt="${l.title}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${l.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${l.title}</p>
              </div>
            `:""}
          </div>
        </div>
      `}document.querySelector(".hot-wrapper").innerHTML=t}catch(e){console.log(e.message)}try{const s=(await A()).hot||[];let t="";for(let i=0;i<s.length;i+=3){const n=s[i],r=s[i+1],l=s[i+2];t+=`
        <div class="swiper-slide">
          <div class="w-full flex flex-col justify-start items-start gap-2">
            ${n?`
              <div class="w-full h-[100px] cursor-pointer flex justify-between items-center border border-[#e0e0e2] rounded-xl pl-2">
              <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
              <img src="${n.img}" alt="${n.title}" class="h-full object-contain mix-blend-multiply" /></div>
              <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${n.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${n.title}</p>
              </div>
            `:""}
            ${r?`
              <div class="w-full h-[100px] flex justify-between cursor-pointer items-center border border-[#e0e0e2] rounded-xl pL-2">
                <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
                <img src="${r.img}" alt="${r.title}" class="h-full object-contain mix-blend-multiply" /></div>
                <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${r.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${r.title}</p>
              </div>
            `:""}
            ${l?`
              <div class="w-full h-[100px] flex justify-between items-center cursor-pointer border border-[#e0e0e2] rounded-xl pl-2">
                <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
                <img src="${l.img}" alt="${l.title}" class="h-full object-contain mix-blend-multiply" /></div>
                <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${l.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${l.title}</p>
              </div>
            `:""}
          </div>
        </div>
      `}document.querySelector(".hot-mobile-wrapper").innerHTML=t}catch(e){console.log(e.message)}new H(".hot-swiper",{modules:[W],slidesPerView:3.3,spaceBetween:20,navigation:{nextEl:".hot-next",prevEl:".hot-prev"}}),new H(".hot-mobile-swiper",{slidesPerView:1.2,spaceBetween:10})}const Us=await A();async function Ks(){try{const s=(Us.blog||[]).map(t=>`
                <div class="flex-col gap-2 rounded-xl overflow-hidden border border-[#eaeaec] desktop:h-75 mobile:h-60 ${t.mobile?"mobile:block":"mobile:hidden desktop:block"}">
                <img src="${t.img}" alt="${t.title}" class="w-full object-cover">
                <div class="px-4 py-2">
                <span class="font-Iran desktop:text-[13px] mobile:text-[13px]">${t.title}</span></div>
            </div>
            `);document.querySelector(".blog-items").innerHTML=s.join("")}catch(e){console.log(e.message)}}function Qs(){document.addEventListener("click",e=>{const s=document;e.target.closest(".footer-back-top")&&(e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}));const t=e.target.closest("[data-acc-btn]");if(t){const i=t.getAttribute("data-acc-target"),n=s.querySelector(i),r=t.querySelector(".footer-acc-chevron");if(n){const l=!n.classList.contains("hidden");n.classList.toggle("hidden",l),t.setAttribute("aria-expanded",String(!l)),r?.classList.toggle("rotate-180",!l)}}if(e.target.closest("[data-bragging-more-m]")){const i=s.querySelector("#bragging-text-m"),n=s.querySelector("#bragging-fade-m"),r=s.querySelector("[data-bragging-more-m]"),l=r?.querySelector("span"),o=r?.querySelector("img");i?.classList.contains("max-h-none")?(i.classList.remove("max-h-none"),i.classList.add("max-h-[3.6em]"),n?.classList.remove("hidden"),l&&(l.textContent="مشاهده بیشتر"),o?.classList.remove("rotate-180")):(i?.classList.remove("max-h-[3.6em]"),i?.classList.add("max-h-none"),n?.classList.add("hidden"),l&&(l.textContent="مشاهده کمتر"),o?.classList.add("rotate-180"))}if(e.target.closest("[data-bragging-more-d]")){const i=s.querySelector("#bragging-text-d"),n=s.querySelector("#bragging-fade-d"),r=s.querySelector("[data-bragging-more-d]"),l=r?.querySelector("span"),o=r?.querySelector("img");i?.classList.contains("max-h-none")?(i.classList.remove("max-h-none"),i.classList.add("max-h-[3.6em]"),n?.classList.remove("hidden"),l&&(l.textContent="مشاهده بیشتر"),o?.classList.remove("rotate-180")):(i?.classList.remove("max-h-[3.6em]"),i?.classList.add("max-h-none"),n?.classList.add("hidden"),l&&(l.textContent="مشاهده کمتر"),o?.classList.add("rotate-180"))}})}const Zs="/Digikala-API-Responsive/";function Js(e){const s=e.tag?.variant==="orange",t=s?"bg-[#feebde]":"bg-[#dbf3e6]",i=s?"bg-[#ff8042]":"bg-[#029a49]";return`
    <a href="${e.href||"#"}" class="block w-full rounded-lg p-5 no-underline text-inherit ${t}">
      <div class="mb-2.5 flex items-center justify-start gap-3">
        <h3 class="m-0 font-Iran text-[17px] font-bold text-black">${e.title||""}</h3>
        <img class="h-5 w-5" src="${e.titleIcon||""}" alt="" />
      </div>

      <div class="flex w-fit items-center gap-2 rounded-br-sm rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl px-3 py-0.5 ${i}">
        <img class="h-[18px] w-[18px] -scale-x-100 brightness-0 invert" src="${e.tag?.icon||""}" alt="" />
        <p class="m-0 font-Iran text-xs font-bold text-white">${e.tag?.text||""}</p>
      </div>

      <div class="mt-9 flex w-full justify-end">
        <img class="h-[120px] w-[120px] object-contain sm:h-[130px] sm:w-[130px]" src="${e.illustration||""}" alt="" />
      </div>
    </a>
  `}function ei(e,s){return`
    <details class="group rounded-xl border border-[#f0f0f1] bg-white p-3">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-bold text-[#3f4064]">
        <span>${e||""}</span>
        <img src="${Zs}img/fixed-button/down.svg" alt="" class="h-5 w-5 transition-transform group-open:rotate-180" />
      </summary>
      <p class="mt-3 text-sm leading-7 text-[#3f4064]">${s||""}</p>
    </details>
  `}function ti(){const e=document.querySelector("[data-fixed-super]"),s=document.querySelector("[data-fixed-help]");if(!e&&!s)return;const t=e?.querySelector("[data-fixed-super-open]"),i=e?.querySelector("[data-fixed-super-backdrop]"),n=e?.querySelector("[data-fixed-super-panel]"),r=e?.querySelectorAll("[data-fixed-super-close]")||[],l=e?.querySelector("[data-super-label-collapsed]"),o=e?.querySelector("[data-super-label-expanded]"),a=s?.querySelector("[data-help-open]"),d=s?.querySelectorAll("[data-help-close]")||[],h=s?.querySelector("[data-help-panel]"),u=s?.querySelector("[data-help-close]:not([data-help-panel] [data-help-close])"),b=s?.querySelector("[data-help-mobile-bubble]"),f=s?.querySelector("[data-help-mobile-float]"),m=s?.querySelector("[data-help-mobile-link]"),v=s?.querySelector("[data-help-mobile-link-text]"),x="w-[140px]",c="w-[300px]";let p=!1,g=window.scrollY,y=!1;function T(w){!t||!i||!n||(i.classList.toggle("hidden",!w),n.classList.toggle("hidden",!w),t.setAttribute("aria-expanded",w?"true":"false"))}function C(w){!t||!l||!o||(t.classList.toggle(x,!w),t.classList.toggle(c,w),l.classList.toggle("hidden",w),o.classList.toggle("hidden",!w),o.classList.toggle("flex",w))}function $(){!a||!h||(a.classList.add("hidden"),u&&(u.classList.remove("hidden"),u.classList.add("flex")),h.classList.remove("hidden"),h.classList.add("flex"),T(!1))}function S(){!a||!h||(a.classList.remove("hidden"),u&&(u.classList.add("hidden"),u.classList.remove("flex")),h.classList.add("hidden"),h.classList.remove("flex"))}function P(w){m&&(m.classList.toggle("max-w-[220px]",w),m.classList.toggle("justify-between",w),m.classList.toggle("px-3",w),m.classList.toggle("gap-2",w),m.classList.toggle("max-w-14",!w),m.classList.toggle("justify-center",!w),m.classList.toggle("px-0",!w),m.classList.toggle("gap-0",!w),v?.classList.toggle("hidden",!w))}function L(){const M=document.documentElement.scrollHeight-window.innerHeight;if(M<=0)return;const k=window.scrollY;k!==g&&(y=!0);const I=k/M;g=k,C(I>=.1),y&&I>=.1&&window.innerWidth<1024&&!p&&(p=!0,P(!1),b?.classList.add("hidden"),setTimeout(()=>{f?.classList.remove("hidden"),f?.classList.add("animate-bounce")},2e3))}t?.addEventListener("click",()=>T(!0)),i?.addEventListener("click",()=>T(!1)),r.forEach(w=>w.addEventListener("click",()=>T(!1))),a?.addEventListener("click",$),d.forEach(w=>w.addEventListener("click",S)),document.addEventListener("keydown",w=>{w.key==="Escape"&&(S(),T(!1))}),window.addEventListener("scroll",L,{passive:!0}),C(!1),T(!1),P(!0),b?.classList.add("hidden"),f?.classList.add("hidden"),f?.classList.remove("animate-bounce"),S(),L()}function si(){const e=document.querySelector("[data-fixed-super]"),s=document.querySelector("[data-fixed-help]");!e||!s||A().then(t=>{const i=t.fixedSupermarket;if(i){const r=e.querySelector("[data-super-label-collapsed]"),l=e.querySelector("[data-super-title-short]"),o=e.querySelector("[data-super-tagline]"),a=e.querySelector("[data-fixed-super-basket-img]"),d=e.querySelector("[data-fixed-super-modal-title]"),h=e.querySelector("[data-fixed-super-modal-sub]"),u=e.querySelector("[data-fixed-super-cards]");r&&(r.textContent=i.buttonTitle||"سوپرمارکت"),l&&(l.textContent=i.buttonTitle||"سوپرمارکت"),o&&(o.textContent=i.buttonTagline||"تنوع بالا و پرتخفیف"),a&&(a.src=i.basketIcon||""),d&&(d.textContent=i.modalTitle||""),h&&(h.textContent=i.modalSubtitle||""),u&&Array.isArray(i.cards)&&(u.innerHTML=i.cards.map(Js).join(""))}const n=t.fixedHelp;if(n){const r=s.querySelector("[data-help-icon]"),l=s.querySelector("[data-help-icon-mobile]"),o=s.querySelector("[data-help-mobile-bubble-text]"),a=s.querySelector("[data-help-mobile-float-text]"),d=s.querySelector("[data-help-mobile-link-text]"),h=s.querySelector("[data-help-h-title]"),u=s.querySelector("[data-help-greeting]"),b=s.querySelector("[data-help-intro]"),f=s.querySelector("[data-help-faq]"),m=s.querySelector("[data-help-call]"),v=s.querySelector("[data-help-mobile-link]");r&&(r.src=n.icon||""),l&&(l.src=n.icon||""),o&&(o.textContent="پشتیبانی دیجی‌کالا اینجاست"),a&&(a.textContent="پشتیبانی دیجی‌کالا اینجاست"),d&&(d.textContent="پشتیبانی"),h&&(h.textContent=n.headerTitle||"پشتیبانی آنلاین"),u&&(u.textContent=n.greeting||"سلام 👋👋"),b&&(b.textContent=n.intro||""),f&&Array.isArray(n.faq)&&(f.innerHTML=n.faq.map(x=>ei(x.question,x.answer)).join("")),n.callUs?.href&&(m&&(m.href=n.callUs.href),v&&(v.href=n.callUs.href))}}).catch(t=>console.log(t.message)).finally(ti)}si();const ii=await A();async function ni(){try{const e=ii.menu.map(s=>{const t=s.text.includes("دسته")||s.type==="category";return`
        <div class="tab-menu-item flex h-full flex-col items-center justify-center gap-1">
          <a
            href="${t?"#":s.href}"
            class="tab-menu-item flex h-full flex-col items-center justify-center gap-1"
            ${t?"data-tabs-open":""}
          >
            <img src="${s.icon}" alt="" class="w-6" />
            <span class="font-Iran text-[12px] text-[#3f4064]">${s.text}</span>
          </a>
        </div>
      `});document.querySelector(".tab-menu").innerHTML=e.join("")}catch(e){console.log(e.message)}}const Ee="/Digikala-API-Responsive/";async function ri(){try{let e=function(){return`
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M4 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm0 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm1 11a1 1 0 100 2h4a1 1 0 100-2h-4z" clip-rule="evenodd"></path>
        </svg>
      `},s=function(x){return x.map(c=>`
            <a
              href="${c.url}"
              class="block py-2 font-Iran text-[13px] leading-7 text-[#81858b]"
            >
              ${c.title}
            </a>
          `).join("")},t=function(x){return x.map(c=>`
            <div class="mb-4">
              <span class="mb-2 block font-Iran text-[13px] font-bold text-[#424750]">
                ${c.title}
              </span>

              <div class="flex flex-col">
                ${s(c.items)}
              </div>
            </div>
          `).join("")},i=function(x){return x.type==="grouped"?`
          <div class="mb-5">
            <div class="mb-3 flex items-center gap-1 border-r-2 border-r-[#ef4056] pr-2">
              <span class="font-Iran text-[14px] font-bold text-[#23254e]">
                ${x.title}
              </span>

              <img
                src="${Ee}img/Header/left-black.svg"
                alt=""
                class="h-4 w-4"
              />
            </div>

            ${t(x.sections)}
          </div>
        `:x.type==="simple"?`
          <div class="mb-5">
            <div class="mb-3 flex items-center gap-1 border-r-2 border-r-[#ef4056] pr-2">
              <span class="font-Iran text-[14px] font-bold text-[#23254e]">
                ${x.title}
              </span>

              <img
                src="${Ee}img/Header/left-black.svg"
                alt=""
                class="h-4 w-4"
              />
            </div>

            <div class="flex flex-col">
              ${s(x.items)}
            </div>
          </div>
        `:""},n=function(x){return`
        <div>
          <a
            href="${x.topLink.url}"
            class="mb-4 flex items-center gap-1 font-Iran text-xs text-[#008eb2]"
          >
            <span>${x.topLink.title}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="fill: #008eb2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
              ></path>
            </svg>
          </a>

          ${x.columns.map(c=>i(c)).join("")}
        </div>
      `},r=function(x){const c=h.querySelectorAll("[data-tabs-item]");c.forEach(g=>{g.classList.remove("bg-white","text-[#ef4056]","border-r-2","border-r-[#ef4056]"),g.classList.add("bg-[#f0f0f1]","text-[#424750]","border-r-transparent")});const p=c[x];p&&(p.classList.remove("bg-[#f0f0f1]","text-[#424750]","border-r-transparent"),p.classList.add("bg-white","text-[#ef4056]","border-r-2","border-r-[#ef4056]"),u.innerHTML=n(a.megaMenu[x]),u.scrollTop=0)},l=function(x){x.preventDefault(),v()&&(d.classList.remove("hidden"),d.classList.add("block"),requestAnimationFrame(()=>{f?.classList.remove("opacity-0"),m?.classList.remove("translate-y-full")}),document.body.classList.add("overflow-hidden"),r(0))},o=function(){f?.classList.add("opacity-0"),m?.classList.add("translate-y-full"),window.setTimeout(()=>{d.classList.add("hidden"),d.classList.remove("block")},280),document.body.classList.remove("overflow-hidden")};const a=await A(),d=document.querySelector("[data-tabs]"),h=document.querySelector("[data-tabs-list]"),u=document.querySelector("[data-tabs-content]"),b=document.querySelector("[data-tabs-close]"),f=document.querySelector("[data-tabs-backdrop]"),m=document.querySelector("[data-tabs-sheet]");if(!d||!h||!u)return;const v=()=>window.matchMedia("(max-width: 1023px)").matches;h.innerHTML=a.megaMenu.map((x,c)=>`
          <button
            type="button"
            class="flex min-h-[74px] w-full flex-col items-center justify-center gap-1 border-b border-[#e0e0e2] border-r-2 border-r-transparent bg-[#f0f0f1] px-1 text-[#424750] transition-colors duration-200"
            data-tabs-item
            data-tabs-index="${c}"
          >
            <span class="flex h-5 w-5 items-center justify-center text-current">
              ${e(x.icon)}
            </span>

            <span class="line-clamp-2 text-center font-Iran text-[11px] leading-5">
              ${x.title}
            </span>
          </button>
        `).join(""),h.querySelectorAll("[data-tabs-item]").forEach(x=>{x.addEventListener("click",()=>{r(Number(x.dataset.tabsIndex))})}),document.addEventListener("click",x=>{x.target.closest("[data-tabs-open]")&&l(x)}),b?.addEventListener("click",o),f?.addEventListener("click",o),document.addEventListener("keydown",x=>{x.key==="Escape"&&!d.classList.contains("hidden")&&o()})}catch(e){console.log(e.message)}}Ts();Is();Ls();Re();De();Xe();Ye();zs();ws();We();Os();Hs();Bs();qs();Vs();Ds();Gs();Fs();Ns();Rs();Ys();Xs();Ks();Qs();ni();ri();
