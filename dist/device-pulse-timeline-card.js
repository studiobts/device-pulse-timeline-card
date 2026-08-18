var H=globalThis,N=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),de=new WeakMap,P=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(N&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=de.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&de.set(t,e))}return e}toString(){return this.cssText}},pe=n=>new P(typeof n=="string"?n:n+"",void 0,X),G=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new P(t,n,X)},ue=(n,e)=>{if(N)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},Q=N?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return pe(t)})(n):n;var{is:Ne,defineProperty:Be,getOwnPropertyDescriptor:Le,getOwnPropertyNames:Ie,getOwnPropertySymbols:je,getPrototypeOf:Ve}=Object,B=globalThis,me=B.trustedTypes,qe=me?me.emptyScript:"",We=B.reactiveElementPolyfillSupport,z=(n,e)=>n,Z={toAttribute(n,e){switch(e){case Boolean:n=n?qe:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},_e=(n,e)=>!Ne(n,e),ve={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:_e};Symbol.metadata??=Symbol("metadata"),B.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ve){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Be(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:r}=Le(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){let h=s?.call(this);r?.call(this,o),this.requestUpdate(e,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ve}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;let e=Ve(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){let t=this.properties,i=[...Ie(t),...je(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(Q(s))}else e!==void 0&&t.push(Q(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ue(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:Z).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Z;this._$Em=s;let h=o.fromAttribute(t,r.type);this[s]=h??this._$Ej?.get(s)??h,this._$Em=null}}requestUpdate(e,t,i,s=!1,r){if(e!==void 0){let o=this.constructor;if(s===!1&&(r=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??_e)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:o}=r,h=this[s];o!==!0||this._$AL.has(s)||h===void 0||this.C(s,void 0,r,h)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:"open"},g[z("elementProperties")]=new Map,g[z("finalized")]=new Map,We?.({ReactiveElement:g}),(B.reactiveElementVersions??=[]).push("2.1.2");var te=globalThis,fe=n=>n,L=te.trustedTypes,ge=L?L.createPolicy("lit-html",{createHTML:n=>n}):void 0,ie="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,se="?"+$,Ye=`<${se}>`,E=document,U=()=>E.createComment(""),O=n=>n===null||typeof n!="object"&&typeof n!="function",ne=Array.isArray,we=n=>ne(n)||typeof n?.[Symbol.iterator]=="function",ee=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,ye=/>/g,A=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),be=/'/g,xe=/"/g,Ee=/^(?:script|style|textarea|title)$/i,re=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),b=re(1),it=re(2),st=re(3),_=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Ae=new WeakMap,w=E.createTreeWalker(E,129);function Se(n,e){if(!ne(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ge!==void 0?ge.createHTML(e):e}var Ce=(n,e)=>{let t=n.length-1,i=[],s,r=e===2?"<svg>":e===3?"<math>":"",o=R;for(let h=0;h<t;h++){let a=n[h],c,u,l=-1,p=0;for(;p<a.length&&(o.lastIndex=p,u=o.exec(a),u!==null);)p=o.lastIndex,o===R?u[1]==="!--"?o=$e:u[1]!==void 0?o=ye:u[2]!==void 0?(Ee.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=A):u[3]!==void 0&&(o=A):o===A?u[0]===">"?(o=s??R,l=-1):u[1]===void 0?l=-2:(l=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?A:u[3]==='"'?xe:be):o===xe||o===be?o=A:o===$e||o===ye?o=R:(o=A,s=void 0);let d=o===A&&n[h+1].startsWith("/>")?" ":"";r+=o===R?a+Ye:l>=0?(i.push(c),a.slice(0,l)+ie+a.slice(l)+$+d):a+$+(l===-2?h:d)}return[Se(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},M=class n{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0,h=e.length-1,a=this.parts,[c,u]=Ce(e,t);if(this.el=n.createElement(c,i),w.currentNode=this.el.content,t===2||t===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=w.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(let l of s.getAttributeNames())if(l.endsWith(ie)){let p=u[o++],d=s.getAttribute(l).split($),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:r,name:m[2],strings:d,ctor:m[1]==="."?j:m[1]==="?"?V:m[1]==="@"?q:C}),s.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(Ee.test(s.tagName)){let l=s.textContent.split($),p=l.length-1;if(p>0){s.textContent=L?L.emptyScript:"";for(let d=0;d<p;d++)s.append(l[d],U()),w.nextNode(),a.push({type:2,index:++r});s.append(l[p],U())}}}else if(s.nodeType===8)if(s.data===se)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf($,l+1))!==-1;)a.push({type:7,index:r}),l+=$.length-1}r++}}static createElement(e,t){let i=E.createElement("template");return i.innerHTML=e,i}};function S(n,e,t=n,i){if(e===_)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,r=O(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=S(n,s._$AS(n,e.values),s,i)),e}var I=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??E).importNode(t,!0);w.currentNode=s;let r=w.nextNode(),o=0,h=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new k(r,r.nextSibling,this,e):a.type===1?c=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(c=new W(r,this,e)),this._$AV.push(c),a=i[++h]}o!==a?.index&&(r=w.nextNode(),o++)}return w.currentNode=E,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},k=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),O(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==_&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):we(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=M.createElement(Se(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let r=new I(s,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new M(e)),t}k(e){ne(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let r of e)s===t.length?t.push(i=new n(this.O(U()),this.O(U()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=fe(e).nextSibling;fe(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,t=this,i,s){let r=this.strings,o=!1;if(r===void 0)e=S(this,e,t,0),o=!O(e)||e!==this._$AH&&e!==_,o&&(this._$AH=e);else{let h=e,a,c;for(e=r[0],a=0;a<r.length-1;a++)c=S(this,h[i+a],t,a),c===_&&(c=this._$AH[a]),o||=!O(c)||c!==this._$AH[a],c===v?e=v:e!==v&&(e+=(c??"")+r[a+1]),this._$AH[a]=c}o&&!s&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},j=class extends C{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},V=class extends C{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},q=class extends C{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??v)===_)return;let i=this._$AH,s=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==v&&(i===v||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},W=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}},ke={M:ie,P:$,A:se,C:1,L:Ce,R:I,D:we,V:S,I:k,H:C,N:V,U:q,B:j,F:W},Ke=te.litHtmlPolyfillSupport;Ke?.(M,k),(te.litHtmlVersions??=[]).push("3.3.3");var Te=(n,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let r=t?.renderBefore??null;i._$litPart$=s=new k(e.insertBefore(U(),r),r,void 0,t??{})}return s._$AI(n),s};var oe=globalThis,y=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Te(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _}};y._$litElement$=!0,y.finalized=!0,oe.litElementHydrateSupport?.({LitElement:y});var Fe=oe.litElementPolyfillSupport;Fe?.({LitElement:y});(oe.litElementVersions??=[]).push("4.2.2");function De(n,e,t){return n?e(n):t?.(n)}var Y={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},K=n=>(...e)=>({_$litDirective$:n,values:e}),T=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Je}=ke,Pe=n=>n;var ze=()=>document.createComment(""),D=(n,e,t)=>{let i=n._$AA.parentNode,s=e===void 0?n._$AB:e._$AA;if(t===void 0){let r=i.insertBefore(ze(),s),o=i.insertBefore(ze(),s);t=new Je(r,o,n,n.options)}else{let r=t._$AB.nextSibling,o=t._$AM,h=o!==n;if(h){let a;t._$AQ?.(n),t._$AM=n,t._$AP!==void 0&&(a=n._$AU)!==o._$AU&&t._$AP(a)}if(r!==s||h){let a=t._$AA;for(;a!==r;){let c=Pe(a).nextSibling;Pe(i).insertBefore(a,s),a=c}}}return t},x=(n,e,t=n)=>(n._$AI(e,t),n),Xe={},Re=(n,e=Xe)=>n._$AH=e,Ue=n=>n._$AH,F=n=>{n._$AR(),n._$AA.remove()};var Oe=(n,e,t)=>{let i=new Map;for(let s=e;s<=t;s++)i.set(n[s],s);return i},Me=K(class extends T{constructor(n){if(super(n),n.type!==Y.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);let s=[],r=[],o=0;for(let h of n)s[o]=i?i(h,o):o,r[o]=t(h,o),o++;return{values:r,keys:s}}render(n,e,t){return this.dt(n,e,t).values}update(n,[e,t,i]){let s=Ue(n),{values:r,keys:o}=this.dt(e,t,i);if(!Array.isArray(s))return this.ut=o,r;let h=this.ut??=[],a=[],c,u,l=0,p=s.length-1,d=0,m=r.length-1;for(;l<=p&&d<=m;)if(s[l]===null)l++;else if(s[p]===null)p--;else if(h[l]===o[d])a[d]=x(s[l],r[d]),l++,d++;else if(h[p]===o[m])a[m]=x(s[p],r[m]),p--,m--;else if(h[l]===o[m])a[m]=x(s[l],r[m]),D(n,a[m+1],s[l]),l++,m--;else if(h[p]===o[d])a[d]=x(s[p],r[d]),D(n,s[l],s[p]),p--,d++;else if(c===void 0&&(c=Oe(o,d,m),u=Oe(h,l,p)),c.has(h[l]))if(c.has(h[p])){let f=u.get(o[d]),J=f!==void 0?s[f]:null;if(J===null){let he=D(n,s[l]);x(he,r[d]),a[d]=he}else a[d]=x(J,r[d]),D(n,s[l],J),s[f]=null;d++}else F(s[p]),p--;else F(s[l]),l++;for(;d<=m;){let f=D(n,a[m+1]);x(f,r[d]),a[d++]=f}for(;l<=p;){let f=s[l++];f!==null&&F(f)}return this.ut=o,Re(n,a),_}});var ae=K(class extends T{constructor(n){if(super(n),n.type!==Y.ATTRIBUTE||n.name!=="class"||n.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let t=n.element.classList;for(let i of this.st)i in e||(t.remove(i),this.st.delete(i));for(let i in e){let s=!!e[i];s===this.st.has(i)||this.nt?.has(i)||(s?(t.add(i),this.st.add(i)):(t.remove(i),this.st.delete(i)))}return _}});var He=G`
    :host {
        display: block;
        font-family: var(--paper-font-body1_-_font-family);
        --device-pulse-timeline-color-disconnected: #f85149;
        --device-pulse-timeline-color-connected: #2ea043;
    }
    .card {
        display: flex;
        flex-direction: column;
        background: var(--ha-card-background, var(--card-background-color));
        border-radius: var(--ha-card-border-radius, 12px);
    
    }
    .fit-rows {
        height: calc((var(--row-size, 1) * (var(--row-height) + var(--row-gap))) - var(--row-gap));
    }
    .header {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: flex-end;
        height: 70px;
        min-height: 70px;
    }
    .header h2 {
        font-size: 18px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin: 0;
    }
    .header p {
        font-size: 13px;
        color: var(--secondary-text-color);
        margin: 0;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow-y: auto;
    }
    
    /* Events */
    .event {
        position: relative;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        transition: filter, opacity 0.3s;
    }
    .event:hover {
        cursor: pointer;
    }
    .event:last-child {
        margin-bottom: 0;
    }
    .event.fade-in {
        animation: event-fade-in 0.8s ease-out;
    }
    /* Events: Data */
    .event-content {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        padding: 5px 10px;
        width: calc(50% - 45px);
        border: 2px solid transparent;
        transition: all 0.3s ease;
        position: relative;
    }
    .event-content:before {
        content: '';
        position: absolute;
        top: 50%;
        width: 18px;
        height: 2px;
        background: currentColor;
        transform: translateY(-50%);
        transition: opacity 0.3s ease;
        z-index: 3;
    }
    .event-content:hover {
        background: var(--primary-background-color);
        transform: scale(1.06);
        cursor: pointer;
    }
    .event-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
    }
    .event-time {
        font-size: 11px;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .event-device {
        font-size: 15px;
        font-weight: 500;
        color: var(--primary-text-color);
        line-height: 1.25;
    }
    .event-status {
        font-size: 12px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }
    .event-status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
    }
    @media (max-width: 480px) {
        .event-status {
            display: none;
        }
    }
    /* Events: Marker */
    .event-marker {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 0 4px var(--ha-card-background, var(--card-background-color));
        z-index: 2;
        transition: left 0.3s ease;
    }
    .event-marker:after {
        content: '';
        width: 6px;
        height: 6px;
        background: white;
        border-radius: 50%;
    }
    /* Events: Type */
    .event-disconnected {
        justify-content: flex-start;
    }
    .event-connected {
        justify-content: flex-end;
    }
    .event-connected:has(+ .event-disconnected),
    .event-disconnected:has(+ .event-connected) {
        margin-bottom: -15px;
    }
    .event-connected .event-marker {
        background: linear-gradient(135deg, #238636 0%, #2ea043 100%);
    }
    .event-disconnected .event-marker {
        background: linear-gradient(135deg, #da3633 0%, #f85149 100%);
    }
    .event-disconnected .event-info {
        flex-direction: row-reverse;
    }
    .event-disconnected .event-content {
        border-color: var(--device-pulse-timeline-color-disconnected);
        background-color: rgb(from var(--device-pulse-timeline-color-disconnected) r g b / 10%);
        text-align: right;
    }
    .event-disconnected .event-content::before {
        left: 100%;
        background: var(--device-pulse-timeline-color-disconnected);
    }
    .event-connected .event-content {
        border-color: var(--device-pulse-timeline-color-connected);
        background-color: rgb(from var(--device-pulse-timeline-color-connected) r g b / 10%);
        text-align: left;
    }
    .event-connected .event-content::before {
        right: 100%;
        background: var(--device-pulse-timeline-color-connected);
    }
    .event-connected .event-status {
        color: var(--device-pulse-timeline-color-connected);
    }
    .event-disconnected .event-status {
        color: var(--device-pulse-timeline-color-disconnected);
        flex-direction: row-reverse;
    }
    @keyframes event-fade-in {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Timeline */
    .timeline {
        position: relative;
        padding: 0 10px;
        margin: 0 20px;
        transition: padding 0.3s ease;
    }
    .timeline-content {
        position: relative;
        padding: 20px 0;
    }
    .timeline-content::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--divider-color);
        transform: translateX(-50%);
        transition: left 0.3s ease;
    }
    .timeline.timeline-empty .timeline-content:before {
        display: none;
    }
    .timeline-empty-state {
        text-align: center;
        padding: 30px 20px;
        color: var(--secondary-text-color);
    }
    
    /* Timeline: Marker */
    .timeline-marker {
        display: flex;
        justify-content: center;
        position: relative;
    }
    .timeline-marker.timeline-marker-date .timeline-marker-content {
        background-color: var(--secondary-background-color);
        padding: 2px 10px;
        border-radius: 10px;
        margin-bottom: 15px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.9em;
        border: 2px solid #ddd;
        box-shadow: 0 0 0 4px var(--ha-card-background, var(--card-background-color));
    }
    
    /* Timeline Option: Device Name Clip */
    .timeline-device-name-clip .event-device {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    /* Timeline Option: Layout */
    .timeline-vertical {
        overflow-y: auto;
    }
    .timeline-horizontal {
        overflow-x: auto;
    }
    .timeline-horizontal .timeline-content {
        display: flex;
        padding: 170px 0;
        width: max-content;
        min-width: 100%;
    }
    .timeline-horizontal .timeline-content::before {
        display: flex;
        left: 0;
        top: 50%;
        bottom: initial;
        width: 100%;
        height: 2px;
        transform: translateY(-50%);
    }
    .timeline-horizontal .event {
        margin: 0 25px;
        padding: 0 20px;
        justify-content: center !important;
    }
    .timeline-horizontal .event-content {
        width: auto;
        max-width: 150px;
        position: absolute;
        transform: rotate(-42deg);
    }
    .timeline-horizontal .event-disconnected .event-content {
        transform-origin: right center;
        right: calc(50% + 35px);
        bottom: calc(-50% - 30px);
    }
    .timeline-horizontal .event-connected .event-content {
        transform-origin: left center;
        left: calc(50% + 35px);
        top: calc(-50% - 30px);
    }
    .timeline-horizontal .event-content:before {
        width: 40px;
    }
    .timeline-horizontal .event-connected:has(+ .event-disconnected),
    .timeline-horizontal .event-disconnected:has(+ .event-connected),
    .timeline-horizontal .event-connected:has(+ .timeline-marker),
    .timeline-horizontal .event-disconnected:has(+ .timeline-marker) {
        margin-right: 0;
    }
    .timeline-horizontal .event.event-connected + .event-disconnected,
    .timeline-horizontal .event.event-disconnected + .event-connected,
    .timeline-horizontal .timeline-marker + .event {
        margin-left: 5px;
    }
    .timeline-horizontal .timeline-marker.timeline-marker-date .timeline-marker-content {
        margin-bottom: 0;
        transform: rotate(-42deg);
        transform-origin: center;
    
    }
    .timeline-horizontal .timeline-content.shift-single {
        padding-left: 90px;
        min-width: calc(100% - 90px);
    }
    .timeline-horizontal .timeline-content.shift-double {
        padding-left: 140px;
        min-width: calc(100% - 140px);
    }
    .timeline-horizontal.timeline-empty .timeline-content {
        padding: 0;
        justify-content: center;
    }
    
    /* Timeline Feature: Events Highlight */
    .timeline-highlighting-events .event:not(.event-highlight) {
        opacity: 0.4;
        filter: blur(3px);
    }
    .timeline-highlighting-events .event.event-highlight {
        transition: filter, opacity 0.5s;
    }
`;var Ge="1.0.7",ce=class extends y{static properties={_events:{state:!0},_forceVertical:{state:!0},_filterByDeviceId:{state:!0},_highlightByDeviceId:{state:!0}};static styles=He;constructor(){super(),this._hass=null,this._initialized=!1,this._config={},this._devices={},this._events=[],this._unsubscribes=[],this._resizeObserver=null,this._forceVertical=!1,this._filterByDeviceId=null,this._highlightByDeviceId=null,this._grid_options_rows=null}static getStubConfig(){return{title:"Network Devices Events Timeline",hours_back:24,orientation:"horizontal",device_name_clip:!0,responsive_orientation:!0,responsive_breakpoint:480}}static getConfigElement(){return document.createElement("device-pulse-timeline-editor")}set hass(e){this._hass||(this._hass=e,this._loadResources(),this._subscribeToEvents())}setConfig(e){this._config={title:e.title||"Network Devices Events Timeline",hours_back:e.hours_back||24,orientation:e.orientation||"horizontal",device_name_clip:e.device_name_clip||!0,responsive_orientation:e.responsive_orientation||!0,responsive_breakpoint:e.responsive_breakpoint||767,...e,grid_options:{rows:e.grid_options?.rows??"auto",columns:e.grid_options?.columns??"auto",...e.grid_options}},this._grid_options_rows=e.grid_options?.rows??"auto"}async _subscribeToEvents(){if(!(!this._hass?.connection||this._unsubscribes?.length))try{this._unsubscribes.push(await this._hass.connection.subscribeEvents(e=>this._handleEvent(e,"connected"),"device_pulse_device_came_online")),this._unsubscribes.push(await this._hass.connection.subscribeEvents(e=>this._handleEvent(e,"disconnected"),"device_pulse_device_went_offline"))}catch(e){console.error("Unable to subscribe to events:",e)}}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(e=>{for(let t of e){let i=t.contentRect.width;this._width=i,this._checkResponsiveBreakpoint(i)}}),this._resizeObserver.observe(this)}disconnectedCallback(){this._unsubscribe?.length&&(this._unsubscribes.forEach(e=>e()),this._unsubscribes=[]),this._resizeObserver&&this._resizeObserver.disconnect(),super.disconnectedCallback()}async _loadDevices(){let e=await this._hass.callWS({type:"config/device_registry/list"});this._devices=Object.fromEntries(e.map(t=>[t.id,t.name_by_user||t.name]))}async _loadEvents(){try{let e=await this._hass.callWS({type:"device_pulse/get_events",hours_back:this._config.hours_back.toString()});if(e&&e.events){this._initialized=!0;let t=e.events.map(i=>{let s=i.event_type==="disconnected"?i.disconnected_since:i.reconnected_at;return{type:i.event_type,device_id:i.device_id,device_name:this._devices[i.device_id]||"Unknown Device",datetime:new Date(s)}});this._events=this._sortEvents(t)}}catch(e){console.error("Unable to load Device Pulse events:",e)}}async _loadResources(){await this._loadDevices(),await this._loadEvents()}_handleEvent(e,t){let i=e.data,s=t==="disconnected"?i.disconnected_since:i.reconnected_at,r={type:t,device_id:i.device_id,device_name:this._devices[i.device_id]||"Unknown Device",datetime:new Date(s),fresh:!0};this._events=this._sortEvents([r,...this._events])}_checkResponsiveBreakpoint=e=>{this._config?.responsive_orientation&&this._config?.responsive_breakpoint?this._forceVertical=e<this._config.responsive_breakpoint:this._forceVertical=!1};_sortEvents(e){return e.sort((t,i)=>i.datetime.getTime()-t.datetime.getTime())}_filterByDevice(e){this._filterByDeviceId=e}_highlightByDevice(e){this._highlightByDeviceId=e}getCardSize(){return 4}render(){let e=new Date,t=new Date;t.setDate(e.getDate()-1);function i(c){return c.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}function s(c){return c.toDateString()===e.toDateString()?"Today":c.toDateString()===t.toDateString()?"Yesterday":c.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}let r=this._filterByDeviceId?this._events.filter(c=>c.device_id==this._filterByDeviceId):this._events,o=this._forceVertical?"vertical":this._config.orientation,h="none";o==="horizontal"&&(r[0]?.type==="disconnected"?h="double":r[1]?.type==="disconnected"&&(h="single"));let a=this._grid_options_rows&&this._grid_options_rows!=="auto";return b`
            <ha-card>
                <div class="card ${a?"fit-rows":""}">
                    <div class="header">
                        <h2>${this._config.title}</h2>
                        <p>Latest ${this._config.hours_back} hours</p>
                    </div>
                    <div class="content">
                        <div class=${ae({timeline:!0,[`timeline-${o}`]:!0,"timeline-empty":r.length===0,"timeline-highlighting-events":this._highlightByDeviceId,"timeline-device-name-clip":this._config.device_name_clip})}>
                            <div class="timeline-content shift-${h}">
                                ${De(r.length===0,()=>this._initialized?b`<div class="timeline-empty-state"> No Events occurred in the last ${this._config.hours_back} hours </div>`:b``,()=>Me(r,c=>c.datetime.getTime(),(c,u)=>{let l=r[u+1],p=!l||c.datetime.toDateString()!==l.datetime.toDateString();return b`
                                                <div class=${ae({event:!0,[`event-${c.type}`]:!0,"event-highlight":this._highlightByDeviceId===c.device_id,"fade-in":c.fresh})}>
                                                    <div class="event-marker ${c.type}"></div>
                                                    <div class="event-content" @click=${()=>this._highlightByDevice(this._highlightByDeviceId?null:c.device_id)}>
                                                        <div class="event-info">
                                                            <div class="event-time">${i(c.datetime)}</div>
                                                            <div class="event-status ${c.type}">
                                                                <span class="event-status-dot"></span>
                                                                <span class="event-status-label">${c.type==="connected"?"Connected":"Disconnected"}</span>
                                                            </div>
                                                        </div>
                                                        <div class="event-device">${c.device_name}</div>
                                                    </div>
                                                </div>
                                                ${p?b`
                                                        <div class="timeline-marker timeline-marker-date">
                                                            <div class="timeline-marker-content">${s(c.datetime)}</div>
                                                        </div>
                                                    `:""}
                                            `}))}
                            </div>
                        </div>
                    </div>
                </div>
            </ha-card>
        `}},le=class extends y{static properties={_config:{state:!0}};setConfig(e){this._config=e}_valueChanged(e){let t=e.target;if(!this._config||!t)return;let i={...this._config,...e.detail.value};i.orientation==="horizontal"&&(i={...i,device_name_clip:!0},i.responsive_orientation||(i={...i,responsive_breakpoint:null}));let s=new Event("config-changed",{bubbles:!0,composed:!0});s.detail={config:i},this.dispatchEvent(s)}_computeLabel(e){switch(e.name){case"title":return"Card Title";case"hours_back":return"Hours Back";case"orientation":return"Orientation Mode";case"device_name_clip":return"Clip Device Name";case"responsive_orientation":return"Responsive Orientation";case"responsive_breakpoint":return"Responsive Breakpoint"}}_computeHelper(e){switch(e.name){case"device_name_clip":return"Truncate device names that are too long instead of wrapping them";case"responsive_orientation":return"Automatically revert to vertical orientation if there is no enough space"}}render(){if(!this._config)return b``;let e=this._config.orientation==="vertical",t=!e&&this._config.responsive_orientation,i=[{name:"title",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"hours_back",required:!0,selector:{number:{min:1,max:24*10,step:1,mode:"box"}}},{name:"orientation",required:!0,selector:{select:{mode:"dropdown",multiple:!1,options:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}]}}},...e?[{name:"device_name_clip",required:!0,selector:{boolean:{}}}]:[{name:"responsive_orientation",required:!0,selector:{boolean:{}}},...t?[{name:"responsive_breakpoint",required:!0,selector:{number:{min:280,max:1024,step:1,mode:"slider"}}}]:[]]]}];return b`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${i}
                .computeLabel=${this._computeLabel}
                .computeHelper=${this._computeHelper}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `}};customElements.define("device-pulse-timeline",ce);customElements.define("device-pulse-timeline-editor",le);window.customCards=window.customCards||[];window.customCards.push({type:"device-pulse-timeline",name:"Device Pulse Timeline",description:"Device Pulse Integration Connection/Disconnection Events Timeline",preview:!0,documentationURL:"https://github.com/studiobts/device-pulse-timeline-card"});console.info(`%c DEVICE-PULSE-TIMELINE-CARD %c v${Ge} `,"background: #1976d2; color: white; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;","background: #ff7043; color: white; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;");
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
