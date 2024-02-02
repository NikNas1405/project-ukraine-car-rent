import{s as x,g as k,b as Xe,d as ye,r as K,j as s,e as Ze,h as Ge,i as et,a as tt,k as nt}from"./index-4452529d.js";let ot=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const qn=t=>t.adverts,zn=t=>t.filtersAdverts,rt=t=>t.isLoading,at=t=>t.error,lt=t=>t.favorites,Kn=t=>t.formData,Vn=t=>t.isFilter,st=x.li`
  flex-basis: calc((100% - 29px));
  max-width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 3 * 29px) / 4);
  }
`,it=x.div`
  overflow: hidden;
  position: relative;
  border-radius: 14px;
  margin-bottom: 14px;
  height: 268px;
  display: flex;
  flex-direction: column;

  > img {
    object-fit: cover;
  }
`,ct=x.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,ut=x.svg`
  fill: transparent;
  stroke: ${k.colorWhite};
  width: 18px;
  height: 18px;
  transition: 3ms ease fill;
  transition: 3ms ease stroke;

  &.active {
    fill: ${k.colorAccent};
    stroke: transparent;
  }
`,ft=x.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  height: 72px;
  overflow: hidden;
`,dt=x.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  > p {
    color: ${k.colorBlack};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`,pt=x.div`
  > span {
    color: ${k.colorBlack};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  > span:nth-child(2) {
    color: ${k.colorAccent};
  }
`,ht=x.ul`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  gap: 6px 4px;

  > li {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  > li:last-child {
    border-right: none;
    padding-right: 0;
  }
`,mt=x.button`
  height: 44px;
  padding: 14px;
  background: ${k.colorAccent};
  color: ${k.colorWhite};
  border-radius: 12px;
  border: none;

  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${k.colorAccent1};
  }
`,je="/project-ukraine-car-rent/assets/sprite-467b3d2f.svg",vt=({car:t,handleImageError:e,handleOpenModal:n})=>{const r=Xe(),l=ye(lt),[p,g]=K.useState(!1),{make:a,year:b,model:m,type:y,img:d,functionalities:u,rentalCompany:v,address:O,rentalPrice:M,id:T,description:L}=t,Y=O==null?void 0:O.split(", "),W=v==null?void 0:v.split(" ");K.useEffect(()=>{if(l!==null){const U=l.some(J=>J.id===T);g(U)}},[l,T]);const B=()=>{p?(r(Ge(T)),g(!1)):(r(Ze(t)),g(!0))};return s.jsxs(st,{children:[s.jsxs(it,{children:[s.jsx("img",{src:d,alt:L,loading:"lazy",onError:e}),s.jsx(ct,{type:"button",onClick:B,className:"cursor-pointer",children:s.jsx(ut,{className:p?"active":"",children:s.jsx("use",{href:je+"#icon-heart"})})})]}),s.jsxs(ft,{children:[s.jsxs(dt,{children:[s.jsxs(pt,{children:[s.jsxs("span",{children:[a," "]}),s.jsxs("span",{children:[m,", "]}),s.jsx("span",{children:b})]}),s.jsx("p",{children:M})]}),s.jsxs(ht,{children:[s.jsx("li",{children:Y[1]}),s.jsx("li",{children:Y[2]}),s.jsx("li",{children:v}),s.jsx("li",{children:W[0]}),s.jsx("li",{children:y}),s.jsx("li",{children:m}),s.jsx("li",{children:T}),s.jsx("li",{children:u[0]})]})]}),s.jsx(mt,{onClick:()=>n(t),children:"Learn more"})]})};var ge={exports:{}},V={},Fe={exports:{}},yt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",gt=yt,bt=gt;function Le(){}function ke(){}ke.resetWarningCache=Le;var xt=function(){function t(r,l,p,g,a,b){if(b!==bt){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ke,resetWarningCache:Le};return n.PropTypes=n,n};Fe.exports=xt();var Ue=Fe.exports,be={exports:{}},j={},xe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=y;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",l=/input|select|textarea|button|object|iframe/;function p(d,u){return u.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function g(d){var u=d.offsetWidth<=0&&d.offsetHeight<=0;if(u&&!d.innerHTML)return!0;try{var v=window.getComputedStyle(d),O=v.getPropertyValue("display");return u?O!==r&&p(d,v):O===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(d){for(var u=d,v=d.getRootNode&&d.getRootNode();u&&u!==document.body;){if(v&&u===v&&(u=v.host.parentNode),g(u))return!1;u=u.parentNode}return!0}function b(d,u){var v=d.nodeName.toLowerCase(),O=l.test(v)&&!d.disabled||v==="a"&&d.href||u;return O&&a(d)}function m(d){var u=d.getAttribute("tabindex");u===null&&(u=void 0);var v=isNaN(u);return(v||u>=0)&&b(d,!v)}function y(d){var u=[].slice.call(d.querySelectorAll("*"),0).reduce(function(v,O){return v.concat(O.shadowRoot?y(O.shadowRoot):[O])},[]);return u.filter(m)}t.exports=e.default})(xe,xe.exports);var Ie=xe.exports;Object.defineProperty(j,"__esModule",{value:!0});j.resetState=wt;j.log=Et;j.handleBlur=oe;j.handleFocus=re;j.markForFocusLater=St;j.returnFocus=Mt;j.popWithoutFocus=Tt;j.setupScopedFocus=Dt;j.teardownScopedFocus=Rt;var Ot=Ie,Ct=_t(Ot);function _t(t){return t&&t.__esModule?t:{default:t}}var X=[],Q=null,Oe=!1;function wt(){X=[]}function Et(){}function oe(){Oe=!0}function re(){if(Oe){if(Oe=!1,!Q)return;setTimeout(function(){if(!Q.contains(document.activeElement)){var t=(0,Ct.default)(Q)[0]||Q;t.focus()}},0)}}function St(){X.push(document.activeElement)}function Mt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{X.length!==0&&(e=X.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Tt(){X.length>0&&X.pop()}function Dt(t){Q=t,window.addEventListener?(window.addEventListener("blur",oe,!1),document.addEventListener("focus",re,!0)):(window.attachEvent("onBlur",oe),document.attachEvent("onFocus",re))}function Rt(){Q=null,window.addEventListener?(window.removeEventListener("blur",oe),document.removeEventListener("focus",re)):(window.detachEvent("onBlur",oe),document.detachEvent("onFocus",re))}var Ce={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;var n=Ie,r=l(n);function l(a){return a&&a.__esModule?a:{default:a}}function p(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?p(a.activeElement.shadowRoot):a.activeElement}function g(a,b){var m=(0,r.default)(a);if(!m.length){b.preventDefault();return}var y=void 0,d=b.shiftKey,u=m[0],v=m[m.length-1],O=p();if(a===O){if(!d)return;y=v}if(v===O&&!d&&(y=u),u===O&&d&&(y=v),y){b.preventDefault(),y.focus();return}var M=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),T=M!=null&&M[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(T){var L=m.indexOf(O);if(L>-1&&(L+=d?-1:1),y=m[L],typeof y>"u"){b.preventDefault(),y=d?v:u,y.focus();return}b.preventDefault(),y.focus()}}t.exports=e.default})(Ce,Ce.exports);var Pt=Ce.exports,F={},Nt=function(){},At=Nt,A={},We={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(We);var jt=We.exports;Object.defineProperty(A,"__esModule",{value:!0});A.canUseDOM=A.SafeNodeList=A.SafeHTMLCollection=void 0;var Ft=jt,Lt=kt(Ft);function kt(t){return t&&t.__esModule?t:{default:t}}var de=Lt.default,Ut=de.canUseDOM?window.HTMLElement:{};A.SafeHTMLCollection=de.canUseDOM?window.HTMLCollection:{};A.SafeNodeList=de.canUseDOM?window.NodeList:{};A.canUseDOM=de.canUseDOM;A.default=Ut;Object.defineProperty(F,"__esModule",{value:!0});F.resetState=$t;F.log=qt;F.assertNodeList=Be;F.setElement=zt;F.validateElement=_e;F.hide=Kt;F.show=Vt;F.documentNotReadyOrSSRTesting=Yt;var It=At,Wt=Ht(It),Bt=A;function Ht(t){return t&&t.__esModule?t:{default:t}}var D=null;function $t(){D&&(D.removeAttribute?D.removeAttribute("aria-hidden"):D.length!=null?D.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(D).forEach(function(t){return t.removeAttribute("aria-hidden")})),D=null}function qt(){}function Be(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function zt(t){var e=t;if(typeof e=="string"&&Bt.canUseDOM){var n=document.querySelectorAll(e);Be(n,e),e=n}return D=e||D,D}function _e(t){var e=t||D;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Wt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Kt(t){var e=!0,n=!1,r=void 0;try{for(var l=_e(t)[Symbol.iterator](),p;!(e=(p=l.next()).done);e=!0){var g=p.value;g.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!e&&l.return&&l.return()}finally{if(n)throw r}}}function Vt(t){var e=!0,n=!1,r=void 0;try{for(var l=_e(t)[Symbol.iterator](),p;!(e=(p=l.next()).done);e=!0){var g=p.value;g.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!e&&l.return&&l.return()}finally{if(n)throw r}}}function Yt(){D=null}var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.resetState=Jt;Z.log=Qt;var te={},ne={};function Ee(t,e){t.classList.remove(e)}function Jt(){var t=document.getElementsByTagName("html")[0];for(var e in te)Ee(t,te[e]);var n=document.body;for(var r in ne)Ee(n,ne[r]);te={},ne={}}function Qt(){}var Xt=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},Zt=function(e,n){return e[n]&&(e[n]-=1),n},Gt=function(e,n,r){r.forEach(function(l){Xt(n,l),e.add(l)})},en=function(e,n,r){r.forEach(function(l){Zt(n,l),n[l]===0&&e.remove(l)})};Z.add=function(e,n){return Gt(e.classList,e.nodeName.toLowerCase()=="html"?te:ne,n.split(" "))};Z.remove=function(e,n){return en(e.classList,e.nodeName.toLowerCase()=="html"?te:ne,n.split(" "))};var G={};Object.defineProperty(G,"__esModule",{value:!0});G.log=nn;G.resetState=on;function tn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var He=function t(){var e=this;tn(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var r=e.openInstances.indexOf(n);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(r){return r(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ce=new He;function nn(){console.log("portalOpenInstances ----------"),console.log(ce.openInstances.length),ce.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function on(){ce=new He}G.default=ce;var we={};Object.defineProperty(we,"__esModule",{value:!0});we.resetState=sn;we.log=cn;var rn=G,an=ln(rn);function ln(t){return t&&t.__esModule?t:{default:t}}var E=void 0,N=void 0,z=[];function sn(){for(var t=[E,N],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}E=N=null,z=[]}function cn(){console.log("bodyTrap ----------"),console.log(z.length);for(var t=[E,N],e=0;e<t.length;e++){var n=t[e],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Se(){z.length!==0&&z[z.length-1].focusContent()}function un(t,e){!E&&!N&&(E=document.createElement("div"),E.setAttribute("data-react-modal-body-trap",""),E.style.position="absolute",E.style.opacity="0",E.setAttribute("tabindex","0"),E.addEventListener("focus",Se),N=E.cloneNode(),N.addEventListener("focus",Se)),z=e,z.length>0?(document.body.firstChild!==E&&document.body.insertBefore(E,document.body.firstChild),document.body.lastChild!==N&&document.body.appendChild(N)):(E.parentElement&&E.parentElement.removeChild(E),N.parentElement&&N.parentElement.removeChild(N))}an.default.subscribe(un);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(h){for(var f=1;f<arguments.length;f++){var C=arguments[f];for(var o in C)Object.prototype.hasOwnProperty.call(C,o)&&(h[o]=C[o])}return h},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},l=function(){function h(f,C){for(var o=0;o<C.length;o++){var i=C[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(f,i.key,i)}}return function(f,C,o){return C&&h(f.prototype,C),o&&h(f,o),f}}(),p=K,g=Ue,a=U(g),b=j,m=B(b),y=Pt,d=U(y),u=F,v=B(u),O=Z,M=B(O),T=A,L=U(T),Y=G,W=U(Y);function B(h){if(h&&h.__esModule)return h;var f={};if(h!=null)for(var C in h)Object.prototype.hasOwnProperty.call(h,C)&&(f[C]=h[C]);return f.default=h,f}function U(h){return h&&h.__esModule?h:{default:h}}function J(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function pe(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:h}function he(h,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);h.prototype=Object.create(f&&f.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(h,f):h.__proto__=f)}var ee={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},me=function(f){return f.code==="Tab"||f.keyCode===9},R=function(f){return f.code==="Escape"||f.keyCode===27},P=0,ve=function(h){he(f,h);function f(C){J(this,f);var o=pe(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,C));return o.setOverlayRef=function(i){o.overlay=i,o.props.overlayRef&&o.props.overlayRef(i)},o.setContentRef=function(i){o.content=i,o.props.contentRef&&o.props.contentRef(i)},o.afterClose=function(){var i=o.props,w=i.appElement,S=i.ariaHideApp,_=i.htmlOpenClassName,H=i.bodyOpenClassName,$=i.parentSelector,se=$&&$().ownerDocument||document;H&&M.remove(se.body,H),_&&M.remove(se.getElementsByTagName("html")[0],_),S&&P>0&&(P-=1,P===0&&v.show(w)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(m.returnFocus(o.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),W.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(m.setupScopedFocus(o.node),m.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var i=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:i},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(i){me(i)&&(0,d.default)(o.content,i),o.props.shouldCloseOnEsc&&R(i)&&(i.stopPropagation(),o.requestClose(i))},o.handleOverlayOnClick=function(i){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(i):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(i){!o.props.shouldCloseOnOverlayClick&&i.target==o.overlay&&i.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(i){return o.ownerHandlesClose()&&o.props.onRequestClose(i)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(i,w){var S=(typeof w>"u"?"undefined":r(w))==="object"?w:{base:ee[i],afterOpen:ee[i]+"--after-open",beforeClose:ee[i]+"--before-close"},_=S.base;return o.state.afterOpen&&(_=_+" "+S.afterOpen),o.state.beforeClose&&(_=_+" "+S.beforeClose),typeof w=="string"&&w?_+" "+w:_},o.attributesFromObject=function(i,w){return Object.keys(w).reduce(function(S,_){return S[i+"-"+_]=w[_],S},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return l(f,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,i){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!i.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,i=o.appElement,w=o.ariaHideApp,S=o.htmlOpenClassName,_=o.bodyOpenClassName,H=o.parentSelector,$=H&&H().ownerDocument||document;_&&M.add($.body,_),S&&M.add($.getElementsByTagName("html")[0],S),w&&(P+=1,v.hide(i)),W.default.register(this)}},{key:"render",value:function(){var o=this.props,i=o.id,w=o.className,S=o.overlayClassName,_=o.defaultStyles,H=o.children,$=w?{}:_.content,se=S?{}:_.overlay;if(this.shouldBeClosed())return null;var Ye={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:n({},se,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Je=n({id:i,ref:this.setContentRef,style:n({},$,this.props.style.content),className:this.buildClassName("content",w),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Qe=this.props.contentElement(Je,H);return this.props.overlayElement(Ye,Qe)}}]),f}(p.Component);ve.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ve.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(L.default),a.default.instanceOf(T.SafeHTMLCollection),a.default.instanceOf(T.SafeNodeList),a.default.arrayOf(a.default.instanceOf(L.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=ve,t.exports=e.default})(be,be.exports);var fn=be.exports;function $e(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function qe(t){function e(n){var r=this.constructor.getDerivedStateFromProps(t,n);return r??null}this.setState(e.bind(this))}function ze(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}$e.__suppressDeprecationWarning=!0;qe.__suppressDeprecationWarning=!0;ze.__suppressDeprecationWarning=!0;function dn(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,r=null,l=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),n!==null||r!==null||l!==null){var p=t.displayName||t.name,g=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+p+" uses "+g+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=$e,e.componentWillReceiveProps=qe),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=ze;var a=e.componentDidUpdate;e.componentDidUpdate=function(m,y,d){var u=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;a.call(this,m,y,u)}}return t}const pn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:dn},Symbol.toStringTag,{value:"Module"})),hn=et(pn);Object.defineProperty(V,"__esModule",{value:!0});V.bodyOpenClassName=V.portalClassName=void 0;var Me=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mn=function(){function t(e,n){for(var r=0;r<n.length;r++){var l=n[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Ke=K,ue=ae(Ke),vn=tt,fe=ae(vn),yn=Ue,c=ae(yn),gn=fn,Te=ae(gn),bn=F,xn=Cn(bn),I=A,De=ae(I),On=hn;function Cn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function ae(t){return t&&t.__esModule?t:{default:t}}function _n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Re(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function wn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var En=V.portalClassName="ReactModalPortal",Sn=V.bodyOpenClassName="ReactModal__Body--open",q=I.canUseDOM&&fe.default.createPortal!==void 0,Pe=function(e){return document.createElement(e)},Ne=function(){return q?fe.default.createPortal:fe.default.unstable_renderSubtreeIntoContainer};function ie(t){return t()}var le=function(t){wn(e,t);function e(){var n,r,l,p;_n(this,e);for(var g=arguments.length,a=Array(g),b=0;b<g;b++)a[b]=arguments[b];return p=(r=(l=Re(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),l),l.removePortal=function(){!q&&fe.default.unmountComponentAtNode(l.node);var m=ie(l.props.parentSelector);m&&m.contains(l.node)?m.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(m){l.portal=m},l.renderPortal=function(m){var y=Ne(),d=y(l,ue.default.createElement(Te.default,Me({defaultStyles:e.defaultStyles},m)),l.node);l.portalRef(d)},r),Re(l,p)}return mn(e,[{key:"componentDidMount",value:function(){if(I.canUseDOM){q||(this.node=Pe("div")),this.node.className=this.props.portalClassName;var r=ie(this.props.parentSelector);r.appendChild(this.node),!q&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var l=ie(r.parentSelector),p=ie(this.props.parentSelector);return{prevParent:l,nextParent:p}}},{key:"componentDidUpdate",value:function(r,l,p){if(I.canUseDOM){var g=this.props,a=g.isOpen,b=g.portalClassName;r.portalClassName!==b&&(this.node.className=b);var m=p.prevParent,y=p.nextParent;y!==m&&(m.removeChild(this.node),y.appendChild(this.node)),!(!r.isOpen&&!a)&&!q&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!I.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,l=Date.now(),p=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||l+this.props.closeTimeoutMS);p?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,p-l)):this.removePortal()}}},{key:"render",value:function(){if(!I.canUseDOM||!q)return null;!this.node&&q&&(this.node=Pe("div"));var r=Ne();return r(ue.default.createElement(Te.default,Me({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){xn.setElement(r)}}]),e}(Ke.Component);le.propTypes={isOpen:c.default.bool.isRequired,style:c.default.shape({content:c.default.object,overlay:c.default.object}),portalClassName:c.default.string,bodyOpenClassName:c.default.string,htmlOpenClassName:c.default.string,className:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),overlayClassName:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),appElement:c.default.oneOfType([c.default.instanceOf(De.default),c.default.instanceOf(I.SafeHTMLCollection),c.default.instanceOf(I.SafeNodeList),c.default.arrayOf(c.default.instanceOf(De.default))]),onAfterOpen:c.default.func,onRequestClose:c.default.func,closeTimeoutMS:c.default.number,ariaHideApp:c.default.bool,shouldFocusAfterRender:c.default.bool,shouldCloseOnOverlayClick:c.default.bool,shouldReturnFocusAfterClose:c.default.bool,preventScroll:c.default.bool,parentSelector:c.default.func,aria:c.default.object,data:c.default.object,role:c.default.string,contentLabel:c.default.string,shouldCloseOnEsc:c.default.bool,overlayRef:c.default.func,contentRef:c.default.func,id:c.default.string,overlayElement:c.default.func,contentElement:c.default.func};le.defaultProps={isOpen:!1,portalClassName:En,bodyOpenClassName:Sn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return ue.default.createElement("div",e,n)},contentElement:function(e,n){return ue.default.createElement("div",e,n)}};le.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,On.polyfill)(le);V.default=le;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=V,r=l(n);function l(p){return p&&p.__esModule?p:{default:p}}e.default=r.default,t.exports=e.default})(ge,ge.exports);var Mn=ge.exports;const Ve=nt(Mn),Tn=t=>t.split("$")[1].toString(),Yn=t=>[...t.map(e=>({value:e,label:e}))],Jn=t=>Number(t).toLocaleString("en-US"),Dn=()=>{const t=[];for(let e=10;e<=990;e+=10)t.push({value:e,label:`${e}$`});return t},Qn=Dn(),Rn=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 541px;
  min-height: 752px;
  max-height: 800px;
  padding: 40px;
  border-radius: 24px;
  background-color: #fff;
`,Pn=x.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;

  > img {
    width: 100%;
    height: 100%;
  }
`;x.div`
  display: flex;
  flex-direction: column;
`;const Nn=x.div`
  overflow: hidden;
  position: relative;
  border-radius: 40px;
  margin-bottom: 14px;
  height: 248px;
  width: 461px;

  > img {
    object-fit: cover;
  }
`,An=x.div`
  margin-bottom: 8px;

  > span {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
  }

  > span:nth-child(2) {
    color: #3470ff;
  }
`,jn=x.ul`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  gap: 6px;
  margin-bottom: 14px;
  width: 400px;

  > li {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  > li:last-child {
    border-right: none;
    padding-right: 0;
  }
`,Fn=x.p`
  color: #121417;
  line-height: 1.43;
  margin-bottom: 24px;
`,Ae=x.h3`
  color: #121417;
  font-weight: 500;
  line-height: 1.42;
  font-size: 14px;
  margin-bottom: 8px;
`,Ln=x.ul`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  gap: 4px 6px;
  margin-bottom: 24px;

  > li {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  > li:last-child {
    border-right: none;
    padding-right: 0;
  }
`,kn=x.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;

  > li {
    box-sizing: border-box;
    padding: 7px 14px;
    border-radius: 35px;
    background: #f9f9f9;
    height: 32px;
    min-width: 90px;
    color: #363535;
    font-family: inherit;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.24px;

    > span {
      color: #3470ff;
      font-weight: 600;
    }
  }
`,Un=x.a`
  width: 168px;
  height: 44px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  padding: 12px;
  border-radius: 12px;
  background: #3470ff;
  text-decoration: none;
  transition: background 0.3s ease-in-out;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;Ve.setAppElement("#root");const In=({car:t,isOpen:e,closeModal:n,handleImageError:r})=>{const{make:l,year:p,model:g,type:a,img:b,address:m,rentalPrice:y,mileage:d,id:u,description:v,fuelConsumption:O,engineSize:M,accessories:T,rentalConditions:L,functionalities:Y}=t,W=m==null?void 0:m.split(", "),B=d.toLocaleString("en-US",{style:"decimal"}),U=L.split(`
`),J=U[0].split(":"),pe=J[0].trim(),he=parseInt(J[1].trim(),10),ee=Tn(y);K.useEffect(()=>{const R=document.body;return e?R.style.overflow="hidden":R.style.overflow="visible",()=>{R.style.overflow="visible"}},[e]);const me={overlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(18, 20, 23, 0.50)",zIndex:1e3,overflow:"auto"},content:{maxWidth:"fit-content",maxHeight:"fit-content",margin:"auto",overflow:"auto",inset:0,border:"none",background:"none",padding:0}};return s.jsx(Ve,{isOpen:e,onRequestClose:n,onClick:n,style:me,children:s.jsxs(Rn,{children:[s.jsx(Pn,{onClick:n,children:s.jsx("svg",{children:s.jsx("use",{href:je+"#icon-close"})})}),s.jsx(Nn,{children:s.jsx("img",{src:b,alt:"car",loading:"lazy",onError:r})}),s.jsxs(An,{children:[s.jsxs("span",{children:[l," "]}),s.jsxs("span",{children:[g,", "]}),s.jsx("span",{children:p})]}),s.jsxs(jn,{children:[s.jsx("li",{children:W[1]}),s.jsx("li",{children:W[2]}),s.jsxs("li",{children:["Id: ",u]}),s.jsxs("li",{children:["Year: ",p]}),s.jsxs("li",{children:["Type: ",a]}),s.jsxs("li",{children:["Fuel Consumption: ",O]}),s.jsxs("li",{children:["Engine Size",M]})]}),s.jsx(Fn,{children:v}),s.jsx(Ae,{children:"Accessories and functionalities: "}),s.jsxs(Ln,{children:[T.map((R,P)=>s.jsx("li",{children:R},P)),Y.map((R,P)=>s.jsx("li",{children:R},P))]}),s.jsx(Ae,{children:"Rental Conditions: "}),s.jsxs(kn,{children:[U.map((R,P)=>s.jsx("li",{children:P===0?s.jsxs(s.Fragment,{children:[pe,": ",s.jsx("span",{children:he})]}):R},P)),s.jsxs("li",{children:["Mileage: ",s.jsx("span",{children:B})]}),s.jsxs("li",{children:["Price: ",s.jsxs("span",{children:[ee,"$"]})]})]}),s.jsx("div",{children:s.jsx(Un,{href:"tel:+380730000000",type:"button",children:"Rental car"})})]})})},Wn=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 0;
`,Bn=x.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 50px 29px;
  padding: 0;
  margin: 0;
`,Hn=x.button`
  background: transparent;
  color: ${k.colorAccent};
  border: none;
  margin: 100px auto 0;
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.45;
  text-decoration-line: underline;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${k.colorAccent1};
  }
`,Xn=({adverts:t,showLoadMoreButton:e,handleLoadMore:n})=>{const r=ye(at),l=ye(rt),[p,g]=K.useState(null),[a,b]=K.useState(!1);function m(u){b(!0),g(u)}const y=()=>{a&&b(!1),g(null)},d=u=>{u.target.src="https://media.istockphoto.com/id/1406492902/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D1%96%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D0%B2%D0%BE%D1%81%D0%BA%D0%BE%D0%BC.jpg?s=2048x2048&w=is&k=20&c=Q8L6dzJULqqLgBE270N2mRZAE3glTUbLuV7wS1X02Kw="};return s.jsxs(s.Fragment,{children:[s.jsxs(Wn,{children:[s.jsx(Bn,{children:t.map(u=>s.jsx(vt,{car:u,handleOpenModal:m,handleImageError:d},u.id?u.id:ot()))}),!r&&e&&!l&&s.jsx(Hn,{onClick:n,children:"Load more"})]}),p&&s.jsx(In,{car:p,isOpen:a,closeModal:y,handleImageError:d})]})};export{Xn as C,Jn as a,qn as b,zn as c,Vn as d,Kn as e,Yn as f,lt as g,ot as n,Qn as p,rt as s};
