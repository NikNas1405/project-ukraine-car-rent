import{s as x,g as M,b as Xe,d as ge,r as K,j as l,e as Ze,h as Ge,i as et,a as tt,k as nt,N as ot}from"./index-1d6a483c.js";let rt=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const zn=t=>t.adverts,Kn=t=>t.filtersAdverts,at=t=>t.isLoading,it=t=>t.error,lt=t=>t.favorites,Vn=t=>t.formData,Yn=t=>t.isFilter,st=x.li`
  flex-basis: calc((100% - 29px));
  max-width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 3 * 29px) / 4);
  }
`,ct=x.div`
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
`,ut=x.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,ft=x.svg`
  fill: transparent;
  stroke: ${M.colorWhite};
  width: 18px;
  height: 18px;
  transition: 3ms ease fill;
  transition: 3ms ease stroke;

  &.active {
    fill: ${M.colorAccent};
    stroke: transparent;
  }
`,dt=x.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  height: 72px;
  overflow: hidden;
`,pt=x.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  > p {
    color: ${M.colorBlack};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`,ht=x.div`
  > span {
    color: ${M.colorBlack};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  > span:nth-child(2) {
    color: ${M.colorAccent};
  }
`,mt=x.ul`
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
`,vt=x.button`
  height: 44px;
  padding: 14px;
  background: ${M.colorAccent};
  color: ${M.colorWhite};
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
    background: ${M.colorAccent1};
  }
`,je="/project-ukraine-car-rent/assets/sprite-467b3d2f.svg",gt=({car:t,handleImageError:e,handleOpenModal:n})=>{const r=Xe(),i=ge(lt),[p,y]=K.useState(!1),{make:a,year:b,model:m,type:g,img:d,functionalities:u,rentalCompany:v,address:O,rentalPrice:T,id:D,description:k}=t,Y=O==null?void 0:O.split(", "),W=v==null?void 0:v.split(" ");K.useEffect(()=>{if(i!==null){const U=i.some(J=>J.id===D);y(U)}},[i,D]);const B=()=>{p?(r(Ge(D)),y(!1)):(r(Ze(t)),y(!0))};return l.jsxs(st,{children:[l.jsxs(ct,{children:[l.jsx("img",{src:d,alt:k,loading:"lazy",onError:e}),l.jsx(ut,{type:"button",onClick:B,className:"cursor-pointer",children:l.jsx(ft,{className:p?"active":"",children:l.jsx("use",{href:je+"#icon-heart"})})})]}),l.jsxs(dt,{children:[l.jsxs(pt,{children:[l.jsxs(ht,{children:[l.jsxs("span",{children:[a," "]}),l.jsxs("span",{children:[m,", "]}),l.jsx("span",{children:b})]}),l.jsx("p",{children:T})]}),l.jsxs(mt,{children:[l.jsx("li",{children:Y[1]}),l.jsx("li",{children:Y[2]}),l.jsx("li",{children:v}),l.jsx("li",{children:W[0]}),l.jsx("li",{children:g}),l.jsx("li",{children:m}),l.jsx("li",{children:D}),l.jsx("li",{children:u[0]})]})]}),l.jsx(vt,{onClick:()=>n(t),children:"Learn more"})]})};var ye={exports:{}},V={},Fe={exports:{}},yt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bt=yt,xt=bt;function Le(){}function ke(){}ke.resetWarningCache=Le;var Ot=function(){function t(r,i,p,y,a,b){if(b!==xt){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ke,resetWarningCache:Le};return n.PropTypes=n,n};Fe.exports=Ot();var Ue=Fe.exports,be={exports:{}},F={},xe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function p(d,u){return u.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function y(d){var u=d.offsetWidth<=0&&d.offsetHeight<=0;if(u&&!d.innerHTML)return!0;try{var v=window.getComputedStyle(d),O=v.getPropertyValue("display");return u?O!==r&&p(d,v):O===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(d){for(var u=d,v=d.getRootNode&&d.getRootNode();u&&u!==document.body;){if(v&&u===v&&(u=v.host.parentNode),y(u))return!1;u=u.parentNode}return!0}function b(d,u){var v=d.nodeName.toLowerCase(),O=i.test(v)&&!d.disabled||v==="a"&&d.href||u;return O&&a(d)}function m(d){var u=d.getAttribute("tabindex");u===null&&(u=void 0);var v=isNaN(u);return(v||u>=0)&&b(d,!v)}function g(d){var u=[].slice.call(d.querySelectorAll("*"),0).reduce(function(v,O){return v.concat(O.shadowRoot?g(O.shadowRoot):[O])},[]);return u.filter(m)}t.exports=e.default})(xe,xe.exports);var Ie=xe.exports;Object.defineProperty(F,"__esModule",{value:!0});F.resetState=Et;F.log=St;F.handleBlur=oe;F.handleFocus=re;F.markForFocusLater=Mt;F.returnFocus=Tt;F.popWithoutFocus=Dt;F.setupScopedFocus=Rt;F.teardownScopedFocus=Nt;var Ct=Ie,_t=wt(Ct);function wt(t){return t&&t.__esModule?t:{default:t}}var X=[],Q=null,Oe=!1;function Et(){X=[]}function St(){}function oe(){Oe=!0}function re(){if(Oe){if(Oe=!1,!Q)return;setTimeout(function(){if(!Q.contains(document.activeElement)){var t=(0,_t.default)(Q)[0]||Q;t.focus()}},0)}}function Mt(){X.push(document.activeElement)}function Tt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{X.length!==0&&(e=X.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Dt(){X.length>0&&X.pop()}function Rt(t){Q=t,window.addEventListener?(window.addEventListener("blur",oe,!1),document.addEventListener("focus",re,!0)):(window.attachEvent("onBlur",oe),document.attachEvent("onFocus",re))}function Nt(){Q=null,window.addEventListener?(window.removeEventListener("blur",oe),document.removeEventListener("focus",re)):(window.detachEvent("onBlur",oe),document.detachEvent("onFocus",re))}var Ce={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=y;var n=Ie,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function p(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?p(a.activeElement.shadowRoot):a.activeElement}function y(a,b){var m=(0,r.default)(a);if(!m.length){b.preventDefault();return}var g=void 0,d=b.shiftKey,u=m[0],v=m[m.length-1],O=p();if(a===O){if(!d)return;g=v}if(v===O&&!d&&(g=u),u===O&&d&&(g=v),g){b.preventDefault(),g.focus();return}var T=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),D=T!=null&&T[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(D){var k=m.indexOf(O);if(k>-1&&(k+=d?-1:1),g=m[k],typeof g>"u"){b.preventDefault(),g=d?v:u,g.focus();return}b.preventDefault(),g.focus()}}t.exports=e.default})(Ce,Ce.exports);var Pt=Ce.exports,L={},At=function(){},jt=At,j={},We={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(We);var Ft=We.exports;Object.defineProperty(j,"__esModule",{value:!0});j.canUseDOM=j.SafeNodeList=j.SafeHTMLCollection=void 0;var Lt=Ft,kt=Ut(Lt);function Ut(t){return t&&t.__esModule?t:{default:t}}var de=kt.default,It=de.canUseDOM?window.HTMLElement:{};j.SafeHTMLCollection=de.canUseDOM?window.HTMLCollection:{};j.SafeNodeList=de.canUseDOM?window.NodeList:{};j.canUseDOM=de.canUseDOM;j.default=It;Object.defineProperty(L,"__esModule",{value:!0});L.resetState=qt;L.log=zt;L.assertNodeList=Be;L.setElement=Kt;L.validateElement=_e;L.hide=Vt;L.show=Yt;L.documentNotReadyOrSSRTesting=Jt;var Wt=jt,Bt=Ht(Wt),$t=j;function Ht(t){return t&&t.__esModule?t:{default:t}}var R=null;function qt(){R&&(R.removeAttribute?R.removeAttribute("aria-hidden"):R.length!=null?R.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(R).forEach(function(t){return t.removeAttribute("aria-hidden")})),R=null}function zt(){}function Be(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Kt(t){var e=t;if(typeof e=="string"&&$t.canUseDOM){var n=document.querySelectorAll(e);Be(n,e),e=n}return R=e||R,R}function _e(t){var e=t||R;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Bt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Vt(t){var e=!0,n=!1,r=void 0;try{for(var i=_e(t)[Symbol.iterator](),p;!(e=(p=i.next()).done);e=!0){var y=p.value;y.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function Yt(t){var e=!0,n=!1,r=void 0;try{for(var i=_e(t)[Symbol.iterator](),p;!(e=(p=i.next()).done);e=!0){var y=p.value;y.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function Jt(){R=null}var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.resetState=Qt;Z.log=Xt;var te={},ne={};function Ee(t,e){t.classList.remove(e)}function Qt(){var t=document.getElementsByTagName("html")[0];for(var e in te)Ee(t,te[e]);var n=document.body;for(var r in ne)Ee(n,ne[r]);te={},ne={}}function Xt(){}var Zt=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},Gt=function(e,n){return e[n]&&(e[n]-=1),n},en=function(e,n,r){r.forEach(function(i){Zt(n,i),e.add(i)})},tn=function(e,n,r){r.forEach(function(i){Gt(n,i),n[i]===0&&e.remove(i)})};Z.add=function(e,n){return en(e.classList,e.nodeName.toLowerCase()=="html"?te:ne,n.split(" "))};Z.remove=function(e,n){return tn(e.classList,e.nodeName.toLowerCase()=="html"?te:ne,n.split(" "))};var G={};Object.defineProperty(G,"__esModule",{value:!0});G.log=on;G.resetState=rn;function nn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var $e=function t(){var e=this;nn(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var r=e.openInstances.indexOf(n);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(r){return r(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ce=new $e;function on(){console.log("portalOpenInstances ----------"),console.log(ce.openInstances.length),ce.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function rn(){ce=new $e}G.default=ce;var we={};Object.defineProperty(we,"__esModule",{value:!0});we.resetState=cn;we.log=un;var an=G,ln=sn(an);function sn(t){return t&&t.__esModule?t:{default:t}}var E=void 0,A=void 0,z=[];function cn(){for(var t=[E,A],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}E=A=null,z=[]}function un(){console.log("bodyTrap ----------"),console.log(z.length);for(var t=[E,A],e=0;e<t.length;e++){var n=t[e],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Se(){z.length!==0&&z[z.length-1].focusContent()}function fn(t,e){!E&&!A&&(E=document.createElement("div"),E.setAttribute("data-react-modal-body-trap",""),E.style.position="absolute",E.style.opacity="0",E.setAttribute("tabindex","0"),E.addEventListener("focus",Se),A=E.cloneNode(),A.addEventListener("focus",Se)),z=e,z.length>0?(document.body.firstChild!==E&&document.body.insertBefore(E,document.body.firstChild),document.body.lastChild!==A&&document.body.appendChild(A)):(E.parentElement&&E.parentElement.removeChild(E),A.parentElement&&A.parentElement.removeChild(A))}ln.default.subscribe(fn);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(h){for(var f=1;f<arguments.length;f++){var C=arguments[f];for(var o in C)Object.prototype.hasOwnProperty.call(C,o)&&(h[o]=C[o])}return h},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},i=function(){function h(f,C){for(var o=0;o<C.length;o++){var s=C[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(f,s.key,s)}}return function(f,C,o){return C&&h(f.prototype,C),o&&h(f,o),f}}(),p=K,y=Ue,a=U(y),b=F,m=B(b),g=Pt,d=U(g),u=L,v=B(u),O=Z,T=B(O),D=j,k=U(D),Y=G,W=U(Y);function B(h){if(h&&h.__esModule)return h;var f={};if(h!=null)for(var C in h)Object.prototype.hasOwnProperty.call(h,C)&&(f[C]=h[C]);return f.default=h,f}function U(h){return h&&h.__esModule?h:{default:h}}function J(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function pe(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:h}function he(h,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);h.prototype=Object.create(f&&f.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(h,f):h.__proto__=f)}var ee={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},me=function(f){return f.code==="Tab"||f.keyCode===9},N=function(f){return f.code==="Escape"||f.keyCode===27},P=0,ve=function(h){he(f,h);function f(C){J(this,f);var o=pe(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,C));return o.setOverlayRef=function(s){o.overlay=s,o.props.overlayRef&&o.props.overlayRef(s)},o.setContentRef=function(s){o.content=s,o.props.contentRef&&o.props.contentRef(s)},o.afterClose=function(){var s=o.props,w=s.appElement,S=s.ariaHideApp,_=s.htmlOpenClassName,$=s.bodyOpenClassName,H=s.parentSelector,le=H&&H().ownerDocument||document;$&&T.remove(le.body,$),_&&T.remove(le.getElementsByTagName("html")[0],_),S&&P>0&&(P-=1,P===0&&v.show(w)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(m.returnFocus(o.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),W.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(m.setupScopedFocus(o.node),m.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var s=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:s},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(s){me(s)&&(0,d.default)(o.content,s),o.props.shouldCloseOnEsc&&N(s)&&(s.stopPropagation(),o.requestClose(s))},o.handleOverlayOnClick=function(s){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(s):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(s){!o.props.shouldCloseOnOverlayClick&&s.target==o.overlay&&s.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(s){return o.ownerHandlesClose()&&o.props.onRequestClose(s)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(s,w){var S=(typeof w>"u"?"undefined":r(w))==="object"?w:{base:ee[s],afterOpen:ee[s]+"--after-open",beforeClose:ee[s]+"--before-close"},_=S.base;return o.state.afterOpen&&(_=_+" "+S.afterOpen),o.state.beforeClose&&(_=_+" "+S.beforeClose),typeof w=="string"&&w?_+" "+w:_},o.attributesFromObject=function(s,w){return Object.keys(w).reduce(function(S,_){return S[s+"-"+_]=w[_],S},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return i(f,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,s){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!s.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,s=o.appElement,w=o.ariaHideApp,S=o.htmlOpenClassName,_=o.bodyOpenClassName,$=o.parentSelector,H=$&&$().ownerDocument||document;_&&T.add(H.body,_),S&&T.add(H.getElementsByTagName("html")[0],S),w&&(P+=1,v.hide(s)),W.default.register(this)}},{key:"render",value:function(){var o=this.props,s=o.id,w=o.className,S=o.overlayClassName,_=o.defaultStyles,$=o.children,H=w?{}:_.content,le=S?{}:_.overlay;if(this.shouldBeClosed())return null;var Ye={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:n({},le,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Je=n({id:s,ref:this.setContentRef,style:n({},H,this.props.style.content),className:this.buildClassName("content",w),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Qe=this.props.contentElement(Je,$);return this.props.overlayElement(Ye,Qe)}}]),f}(p.Component);ve.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ve.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(k.default),a.default.instanceOf(D.SafeHTMLCollection),a.default.instanceOf(D.SafeNodeList),a.default.arrayOf(a.default.instanceOf(k.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=ve,t.exports=e.default})(be,be.exports);var dn=be.exports;function He(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function qe(t){function e(n){var r=this.constructor.getDerivedStateFromProps(t,n);return r??null}this.setState(e.bind(this))}function ze(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}He.__suppressDeprecationWarning=!0;qe.__suppressDeprecationWarning=!0;ze.__suppressDeprecationWarning=!0;function pn(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,r=null,i=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var p=t.displayName||t.name,y=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+p+" uses "+y+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=He,e.componentWillReceiveProps=qe),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=ze;var a=e.componentDidUpdate;e.componentDidUpdate=function(m,g,d){var u=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;a.call(this,m,g,u)}}return t}const hn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:pn},Symbol.toStringTag,{value:"Module"})),mn=et(hn);Object.defineProperty(V,"__esModule",{value:!0});V.bodyOpenClassName=V.portalClassName=void 0;var Me=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vn=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Ke=K,ue=ae(Ke),gn=tt,fe=ae(gn),yn=Ue,c=ae(yn),bn=dn,Te=ae(bn),xn=L,On=_n(xn),I=j,De=ae(I),Cn=mn;function _n(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function ae(t){return t&&t.__esModule?t:{default:t}}function wn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Re(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function En(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Sn=V.portalClassName="ReactModalPortal",Mn=V.bodyOpenClassName="ReactModal__Body--open",q=I.canUseDOM&&fe.default.createPortal!==void 0,Ne=function(e){return document.createElement(e)},Pe=function(){return q?fe.default.createPortal:fe.default.unstable_renderSubtreeIntoContainer};function se(t){return t()}var ie=function(t){En(e,t);function e(){var n,r,i,p;wn(this,e);for(var y=arguments.length,a=Array(y),b=0;b<y;b++)a[b]=arguments[b];return p=(r=(i=Re(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!q&&fe.default.unmountComponentAtNode(i.node);var m=se(i.props.parentSelector);m&&m.contains(i.node)?m.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(m){i.portal=m},i.renderPortal=function(m){var g=Pe(),d=g(i,ue.default.createElement(Te.default,Me({defaultStyles:e.defaultStyles},m)),i.node);i.portalRef(d)},r),Re(i,p)}return vn(e,[{key:"componentDidMount",value:function(){if(I.canUseDOM){q||(this.node=Ne("div")),this.node.className=this.props.portalClassName;var r=se(this.props.parentSelector);r.appendChild(this.node),!q&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=se(r.parentSelector),p=se(this.props.parentSelector);return{prevParent:i,nextParent:p}}},{key:"componentDidUpdate",value:function(r,i,p){if(I.canUseDOM){var y=this.props,a=y.isOpen,b=y.portalClassName;r.portalClassName!==b&&(this.node.className=b);var m=p.prevParent,g=p.nextParent;g!==m&&(m.removeChild(this.node),g.appendChild(this.node)),!(!r.isOpen&&!a)&&!q&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!I.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),p=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);p?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,p-i)):this.removePortal()}}},{key:"render",value:function(){if(!I.canUseDOM||!q)return null;!this.node&&q&&(this.node=Ne("div"));var r=Pe();return r(ue.default.createElement(Te.default,Me({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){On.setElement(r)}}]),e}(Ke.Component);ie.propTypes={isOpen:c.default.bool.isRequired,style:c.default.shape({content:c.default.object,overlay:c.default.object}),portalClassName:c.default.string,bodyOpenClassName:c.default.string,htmlOpenClassName:c.default.string,className:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),overlayClassName:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),appElement:c.default.oneOfType([c.default.instanceOf(De.default),c.default.instanceOf(I.SafeHTMLCollection),c.default.instanceOf(I.SafeNodeList),c.default.arrayOf(c.default.instanceOf(De.default))]),onAfterOpen:c.default.func,onRequestClose:c.default.func,closeTimeoutMS:c.default.number,ariaHideApp:c.default.bool,shouldFocusAfterRender:c.default.bool,shouldCloseOnOverlayClick:c.default.bool,shouldReturnFocusAfterClose:c.default.bool,preventScroll:c.default.bool,parentSelector:c.default.func,aria:c.default.object,data:c.default.object,role:c.default.string,contentLabel:c.default.string,shouldCloseOnEsc:c.default.bool,overlayRef:c.default.func,contentRef:c.default.func,id:c.default.string,overlayElement:c.default.func,contentElement:c.default.func};ie.defaultProps={isOpen:!1,portalClassName:Sn,bodyOpenClassName:Mn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return ue.default.createElement("div",e,n)},contentElement:function(e,n){return ue.default.createElement("div",e,n)}};ie.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Cn.polyfill)(ie);V.default=ie;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=V,r=i(n);function i(p){return p&&p.__esModule?p:{default:p}}e.default=r.default,t.exports=e.default})(ye,ye.exports);var Tn=ye.exports;const Ve=nt(Tn),Dn=t=>t.split("$")[1].toString(),Jn=t=>[...t.map(e=>({value:e,label:e}))],Qn=t=>Number(t).toLocaleString("en-US"),Rn=()=>{const t=[];for(let e=10;e<=990;e+=10)t.push({value:e,label:`${e}$`});return t},Xn=Rn(),Nn=x.div`
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
`;const An=x.div`
  overflow: hidden;
  position: relative;
  border-radius: 40px;
  margin-bottom: 14px;
  height: 248px;
  width: 461px;

  > img {
    object-fit: cover;
  }
`,jn=x.div`
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
`,Fn=x.ul`
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
`,Ln=x.p`
  color: #121417;
  line-height: 1.43;
  margin-bottom: 24px;
`,Ae=x.h3`
  color: #121417;
  font-weight: 500;
  line-height: 1.42;
  font-size: 14px;
  margin-bottom: 8px;
`,kn=x.ul`
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
`,Un=x.ul`
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
`,In=x.a`
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
`;Ve.setAppElement("#root");const Wn=({car:t,isOpen:e,closeModal:n,handleImageError:r})=>{const{make:i,year:p,model:y,type:a,img:b,address:m,rentalPrice:g,mileage:d,id:u,description:v,fuelConsumption:O,engineSize:T,accessories:D,rentalConditions:k,functionalities:Y}=t,W=m==null?void 0:m.split(", "),B=d.toLocaleString("en-US",{style:"decimal"}),U=k.split(`
`),J=U[0].split(":"),pe=J[0].trim(),he=parseInt(J[1].trim(),10),ee=Dn(g);K.useEffect(()=>{const N=document.body;return e?N.style.overflow="hidden":N.style.overflow="visible",()=>{N.style.overflow="visible"}},[e]);const me={overlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(18, 20, 23, 0.50)",zIndex:1e3,overflow:"auto"},content:{maxWidth:"fit-content",maxHeight:"fit-content",margin:"auto",overflow:"auto",inset:0,border:"none",background:"none",padding:0}};return l.jsx(Ve,{isOpen:e,onRequestClose:n,onClick:n,style:me,children:l.jsxs(Nn,{children:[l.jsx(Pn,{onClick:n,children:l.jsx("svg",{children:l.jsx("use",{href:je+"#icon-close"})})}),l.jsx(An,{children:l.jsx("img",{src:b,alt:"car",loading:"lazy",onError:r})}),l.jsxs(jn,{children:[l.jsxs("span",{children:[i," "]}),l.jsxs("span",{children:[y,", "]}),l.jsx("span",{children:p})]}),l.jsxs(Fn,{children:[l.jsx("li",{children:W[1]}),l.jsx("li",{children:W[2]}),l.jsxs("li",{children:["Id: ",u]}),l.jsxs("li",{children:["Year: ",p]}),l.jsxs("li",{children:["Type: ",a]}),l.jsxs("li",{children:["Fuel Consumption: ",O]}),l.jsxs("li",{children:["Engine Size",T]})]}),l.jsx(Ln,{children:v}),l.jsx(Ae,{children:"Accessories and functionalities: "}),l.jsxs(kn,{children:[D.map((N,P)=>l.jsx("li",{children:N},P)),Y.map((N,P)=>l.jsx("li",{children:N},P))]}),l.jsx(Ae,{children:"Rental Conditions: "}),l.jsxs(Un,{children:[U.map((N,P)=>l.jsx("li",{children:P===0?l.jsxs(l.Fragment,{children:[pe,": ",l.jsx("span",{children:he})]}):N},P)),l.jsxs("li",{children:["Mileage: ",l.jsx("span",{children:B})]}),l.jsxs("li",{children:["Price: ",l.jsxs("span",{children:[ee,"$"]})]})]}),l.jsx("div",{children:l.jsx(In,{href:"tel:+380730000000",type:"button",children:"Rental car"})})]})})},Bn=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 0;
`,$n=x.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 50px 29px;
  padding: 0;
  margin: 0;
`,Hn=x.button`
  background: transparent;
  color: ${M.colorAccent};
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
    color: ${M.colorAccent1};
  }
`,Zn=({adverts:t,showLoadMoreButton:e,handleLoadMore:n})=>{const r=ge(it),i=ge(at),[p,y]=K.useState(null),[a,b]=K.useState(!1);function m(u){b(!0),y(u)}const g=()=>{a&&b(!1),y(null)},d=u=>{u.target.src="https://media.istockphoto.com/id/1406492902/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D1%96%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D0%B2%D0%BE%D1%81%D0%BA%D0%BE%D0%BC.jpg?s=2048x2048&w=is&k=20&c=Q8L6dzJULqqLgBE270N2mRZAE3glTUbLuV7wS1X02Kw="};return l.jsxs(l.Fragment,{children:[l.jsxs(Bn,{children:[l.jsx($n,{children:t.map(u=>l.jsx(gt,{car:u,handleOpenModal:m,handleImageError:d},u.id?u.id:rt()))}),!r&&e&&!i&&l.jsx(Hn,{onClick:n,children:"Load more"})]}),p&&l.jsx(Wn,{car:p,isOpen:a,closeModal:g,handleImageError:d})]})},Gn=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  margin-top: 20px;

  > p {
    font-size: 16px;
    line-height: 1.5;
    color: ${M.colorBlack};
  }

  > div {
    width: 200px;
    height: 200px;
  }
`,eo=x(ot)`
  min-width: 100px;
  padding: 15px 20px;
  background-color: ${M.colorAccent};
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;

  &:focus,
  &:hover {
    background: ${M.colorAccent1};
  }
`;export{eo as B,Zn as C,Gn as N,Qn as a,zn as b,Kn as c,Yn as d,Vn as e,Jn as f,lt as g,rt as n,Xn as p,at as s};
