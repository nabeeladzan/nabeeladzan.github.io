(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var U,u,oe,H,z,F={},re=[],me=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x(e,_){for(var t in _)e[t]=_[t];return e}function ie(e){var _=e.parentNode;_&&_.removeChild(e)}function ge(e,_,t){var r,i,o,l={};for(o in _)o=="key"?r=_[o]:o=="ref"?i=_[o]:l[o]=_[o];if(arguments.length>2&&(l.children=arguments.length>3?U.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return T(e,l,r,i,null)}function T(e,_,t,r,i){var o={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++oe};return i==null&&u.vnode!=null&&u.vnode(o),o}function O(e){return e.children}function A(e,_){this.props=e,this.context=_}function N(e,_){if(_==null)return e.__?N(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?N(e):null}function le(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return le(e)}}function G(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!L.__r++||z!==u.debounceRendering)&&((z=u.debounceRendering)||setTimeout)(L)}function L(){for(var e;L.__r=H.length;)e=H.sort(function(_,t){return _.__v.__b-t.__v.__b}),H=[],e.some(function(_){var t,r,i,o,l,s;_.__d&&(l=(o=(t=_).__v).__e,(s=t.__P)&&(r=[],(i=x({},o)).__v=o.__v+1,B(s,o,i,t.__n,s.ownerSVGElement!==void 0,o.__h!=null?[l]:null,r,l??N(o),o.__h),fe(r,o),o.__e!=l&&le(o)))})}function ce(e,_,t,r,i,o,l,s,p,d){var n,h,f,c,a,w,v,m=r&&r.__k||re,k=m.length;for(t.__k=[],n=0;n<_.length;n++)if((c=t.__k[n]=(c=_[n])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?T(null,c,null,null,c):Array.isArray(c)?T(O,{children:c},null,null,null):c.__b>0?T(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=t,c.__b=t.__b+1,(f=m[n])===null||f&&c.key==f.key&&c.type===f.type)m[n]=void 0;else for(h=0;h<k;h++){if((f=m[h])&&c.key==f.key&&c.type===f.type){m[h]=void 0;break}f=null}B(e,c,f=f||F,i,o,l,s,p,d),a=c.__e,(h=c.ref)&&f.ref!=h&&(v||(v=[]),f.ref&&v.push(f.ref,null,c),v.push(h,c.__c||a,c)),a!=null?(w==null&&(w=a),typeof c.type=="function"&&c.__k===f.__k?c.__d=p=ue(c,p,e):p=se(e,c,f,m,a,p),typeof t.type=="function"&&(t.__d=p)):p&&f.__e==p&&p.parentNode!=e&&(p=N(f))}for(t.__e=w,n=k;n--;)m[n]!=null&&pe(m[n],m[n]);if(v)for(n=0;n<v.length;n++)ae(v[n],v[++n],v[++n])}function ue(e,_,t){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,_=typeof r.type=="function"?ue(r,_,t):se(t,r,r,i,r.__e,_));return _}function se(e,_,t,r,i,o){var l,s,p;if(_.__d!==void 0)l=_.__d,_.__d=void 0;else if(t==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),l=null;else{for(s=o,p=0;(s=s.nextSibling)&&p<r.length;p+=1)if(s==i)break e;e.insertBefore(i,o),l=o}return l!==void 0?l:i.nextSibling}function be(e,_,t,r,i){var o;for(o in t)o==="children"||o==="key"||o in _||I(e,o,null,t[o],r);for(o in _)i&&typeof _[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===_[o]||I(e,o,_[o],t[o],r)}function K(e,_,t){_[0]==="-"?e.setProperty(_,t):e[_]=t==null?"":typeof t!="number"||me.test(_)?t:t+"px"}function I(e,_,t,r,i){var o;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||K(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||K(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")o=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=t,t?r||e.addEventListener(_,o?J:Y,o):e.removeEventListener(_,o?J:Y,o);else if(_!=="dangerouslySetInnerHTML"){if(i)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&_.indexOf("-")==-1?e.removeAttribute(_):e.setAttribute(_,t))}}function Y(e){this.l[e.type+!1](u.event?u.event(e):e)}function J(e){this.l[e.type+!0](u.event?u.event(e):e)}function B(e,_,t,r,i,o,l,s,p){var d,n,h,f,c,a,w,v,m,k,P,C,q,$,E,b=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(p=t.__h,s=_.__e=t.__e,_.__h=null,o=[s]),(d=u.__b)&&d(_);try{e:if(typeof b=="function"){if(v=_.props,m=(d=b.contextType)&&r[d.__c],k=d?m?m.props.value:d.__:r,t.__c?w=(n=_.__c=t.__c).__=n.__E:("prototype"in b&&b.prototype.render?_.__c=n=new b(v,k):(_.__c=n=new A(v,k),n.constructor=b,n.render=xe),m&&m.sub(n),n.props=v,n.state||(n.state={}),n.context=k,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),b.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=x({},n.__s)),x(n.__s,b.getDerivedStateFromProps(v,n.__s))),f=n.props,c=n.state,h)b.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==f&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,k),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,k)===!1||_.__v===t.__v){for(n.props=v,n.state=n.__s,_.__v!==t.__v&&(n.__d=!1),n.__v=_,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(S){S&&(S.__=_)}),P=0;P<n._sb.length;P++)n.__h.push(n._sb[P]);n._sb=[],n.__h.length&&l.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,k),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(f,c,a)})}if(n.context=k,n.props=v,n.__v=_,n.__P=e,C=u.__r,q=0,"prototype"in b&&b.prototype.render){for(n.state=n.__s,n.__d=!1,C&&C(_),d=n.render(n.props,n.state,n.context),$=0;$<n._sb.length;$++)n.__h.push(n._sb[$]);n._sb=[]}else do n.__d=!1,C&&C(_),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++q<25);n.state=n.__s,n.getChildContext!=null&&(r=x(x({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(a=n.getSnapshotBeforeUpdate(f,c)),E=d!=null&&d.type===O&&d.key==null?d.props.children:d,ce(e,Array.isArray(E)?E:[E],_,t,r,i,o,l,s,p),n.base=_.__e,_.__h=null,n.__h.length&&l.push(n),w&&(n.__E=n.__=null),n.__e=!1}else o==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=ke(t.__e,_,t,r,i,o,l,p);(d=u.diffed)&&d(_)}catch(S){_.__v=null,(p||o!=null)&&(_.__e=s,_.__h=!!p,o[o.indexOf(s)]=null),u.__e(S,_,t)}}function fe(e,_){u.__c&&u.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){u.__e(r,t.__v)}})}function ke(e,_,t,r,i,o,l,s){var p,d,n,h=t.props,f=_.props,c=_.type,a=0;if(c==="svg"&&(i=!0),o!=null){for(;a<o.length;a++)if((p=o[a])&&"setAttribute"in p==!!c&&(c?p.localName===c:p.nodeType===3)){e=p,o[a]=null;break}}if(e==null){if(c===null)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,f.is&&f),o=null,s=!1}if(c===null)h===f||s&&e.data===f||(e.data=f);else{if(o=o&&U.call(e.childNodes),d=(h=t.props||F).dangerouslySetInnerHTML,n=f.dangerouslySetInnerHTML,!s){if(o!=null)for(h={},a=0;a<e.attributes.length;a++)h[e.attributes[a].name]=e.attributes[a].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(be(e,f,h,i,s),n)_.__k=[];else if(a=_.props.children,ce(e,Array.isArray(a)?a:[a],_,t,r,i&&c!=="foreignObject",o,l,o?o[0]:t.__k&&N(t,0),s),o!=null)for(a=o.length;a--;)o[a]!=null&&ie(o[a]);s||("value"in f&&(a=f.value)!==void 0&&(a!==e.value||c==="progress"&&!a||c==="option"&&a!==h.value)&&I(e,"value",a,h.value,!1),"checked"in f&&(a=f.checked)!==void 0&&a!==e.checked&&I(e,"checked",a,h.checked,!1))}return e}function ae(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){u.__e(r,t)}}function pe(e,_,t){var r,i;if(u.unmount&&u.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ae(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){u.__e(o,_)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&pe(r[i],_,t||typeof e.type!="function");t||e.__e==null||ie(e.__e),e.__=e.__e=e.__d=void 0}function xe(e,_,t){return this.constructor(e,t)}function we(e,_,t){var r,i,o;u.__&&u.__(e,_),i=(r=typeof t=="function")?null:t&&t.__k||_.__k,o=[],B(_,e=(!r&&t||_).__k=ge(O,null,[e]),i||F,F,_.ownerSVGElement!==void 0,!r&&t?[t]:i?null:_.firstChild?U.call(_.childNodes):null,o,!r&&t?t:i?i.__e:_.firstChild,r),fe(o,e)}U=re.slice,u={__e:function(e,_,t,r){for(var i,o,l;_=_.__;)if((i=_.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),l=i.__d),l)return i.__E=i}catch(s){e=s}throw e}},oe=0,A.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},t),this.props)),e&&x(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),G(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),G(this))},A.prototype.render=O,H=[],L.__r=0;var de,y,W,Q,V=0,he=[],D=[],X=u.__b,Z=u.__r,ee=u.diffed,_e=u.__c,te=u.unmount;function Ce(e,_){u.__h&&u.__h(y,e,V||_),V=0;var t=y.__H||(y.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:D}),t.__[e]}function ve(e){return V=1,He(ye,e)}function He(e,_,t){var r=Ce(de++,2);if(r.t=e,!r.__c&&(r.__=[t?t(_):ye(void 0,_),function(o){var l=r.__N?r.__N[0]:r.__[0],s=r.t(l,o);l!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){y.u=!0;var i=y.shouldComponentUpdate;y.shouldComponentUpdate=function(o,l,s){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(n){return n.__c});if(p.every(function(n){return!n.__N}))return!i||i.call(this,o,l,s);var d=!1;return p.forEach(function(n){if(n.__N){var h=n.__[0];n.__=n.__N,n.__N=void 0,h!==n.__[0]&&(d=!0)}}),!(!d&&r.__c.props===o)&&(!i||i.call(this,o,l,s))}}return r.__N||r.__}function Ne(){for(var e;e=he.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(M),e.__H.__h.forEach(j),e.__H.__h=[]}catch(_){e.__H.__h=[],u.__e(_,e.__v)}}u.__b=function(e){y=null,X&&X(e)},u.__r=function(e){Z&&Z(e),de=0;var _=(y=e.__c).__H;_&&(W===y?(_.__h=[],y.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=D,t.__N=t.i=void 0})):(_.__h.forEach(M),_.__h.forEach(j),_.__h=[])),W=y},u.diffed=function(e){ee&&ee(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(he.push(_)!==1&&Q===u.requestAnimationFrame||((Q=u.requestAnimationFrame)||Pe)(Ne)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==D&&(t.__=t.__V),t.i=void 0,t.__V=D})),W=y=null},u.__c=function(e,_){_.some(function(t){try{t.__h.forEach(M),t.__h=t.__h.filter(function(r){return!r.__||j(r)})}catch(r){_.some(function(i){i.__h&&(i.__h=[])}),_=[],u.__e(r,t.__v)}}),_e&&_e(e,_)},u.unmount=function(e){te&&te(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{M(r)}catch(i){_=i}}),t.__H=void 0,_&&u.__e(_,t.__v))};var ne=typeof requestAnimationFrame=="function";function Pe(e){var _,t=function(){clearTimeout(r),ne&&cancelAnimationFrame(_),setTimeout(e)},r=setTimeout(t,100);ne&&(_=requestAnimationFrame(t))}function M(e){var _=y,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),y=_}function j(e){var _=y;e.__c=e.__(),y=_}function ye(e,_){return typeof _=="function"?_(e):_}const $e="/assets/pfp-835b67c4.png";var Ee=0;function g(e,_,t,r,i){var o,l,s={};for(l in _)l=="ref"?o=_[l]:s[l]=_[l];var p={type:e,props:s,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ee,__source:i,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(l in o)s[l]===void 0&&(s[l]=o[l]);return u.vnode&&u.vnode(p),p}function Se(){const[e,_]=ve(!1);return g("div",{onMouseOver:()=>_(!0),onMouseOut:()=>_(!1),style:{width:e?"65vw":"25vh",height:"15vh",transitionDuration:"0.5s"},children:[g("div",{children:g("a",{href:"",children:g(Te,{Open:e})})}),g(Ae,{Open:e})]})}function Te({Open:e}){return g("img",{src:$e,class:"icon-l aura-fixed profile",alt:"Profile Picture",style:{borderRadius:"50%",position:"fixed",top:"50%",left:e?"20%":"50%",transform:"translate(-50%, -50%)",transitionDuration:"0.3s"}})}function Ae({Open:e}){return g("div",{class:"top-menu",style:{transitionDuration:"0.3s",width:"60vw",zIndex:"-100",height:e?"15vh":"0vh",position:"fixed",top:"50%",left:"25%",transform:"translateY(-50%)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",backgroundColor:e?"whitesmoke":"white",borderRadius:"10px"},children:g("div",{style:{width:"100%",height:"100%",alignItems:"center",display:"flex",justifyContent:"space-evenly",opacity:e?"1":"0",transitionDuration:"0.3s"},children:[g(R,{Text:"Projects",Color:"#f7b2d9"}),g(R,{Text:"About",Color:"#b2f7e1"}),g(R,{Text:"Contact",Color:"#b2d9f7"})]})})}function R({Icon:e,Text:_,Color:t}){const[r,i]=ve(!1);return g("div",{style:{backgroundColor:t,width:"30%",height:"85%",color:r?"white":"black",fontSize:r?"3em":"1em",display:"flex",alignItems:"center",justifyContent:"center",transitionDuration:"0.3s",borderRadius:"10px"},children:_})}we(g(Se,{}),document.getElementById("app"));
