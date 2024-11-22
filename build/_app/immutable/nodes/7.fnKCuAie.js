var V=Object.defineProperty;var C=i=>{throw TypeError(i)};var B=(i,e,t)=>e in i?V(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var S=(i,e,t)=>B(i,typeof e!="symbol"?e+"":e,t),m=(i,e,t)=>e.has(i)||C("Cannot "+t);var a=(i,e,t)=>(m(i,e,"read from private field"),t?t.call(i):e.get(i)),l=(i,e,t)=>e.has(i)?C("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),w=(i,e,t,o)=>(m(i,e,"write to private field"),o?o.call(i,t):e.set(i,t),t),T=(i,e,t)=>(m(i,e,"access private method"),t);import{R as F}from"../chunks/control.CYgJF_JY.js";import{a as k,t as j}from"../chunks/disclose-version.DSl3tGsY.js";import{i as M}from"../chunks/legacy.DOcX7Gls.js";import{h as $,X as A,ao as W,ap as Y,aq as H,a5 as U,p as I,t as x,l as L,o as O,m as _,aj as q,r as u,k as G,$ as K,R as X,V as y,an as J}from"../chunks/runtime.CcnFKi4J.js";import{h as Q}from"../chunks/svelte-head.hADkoV6P.js";import{p as N}from"../chunks/props.C-g1OdIf.js";function p(i,e,t,o){var r=i.__attributes??(i.__attributes={});$&&(r[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="style"&&"__styles"in i&&(i.__styles={}),e==="loading"&&(i[Y]=t),t==null?i.removeAttribute(e):typeof t!="string"&&Z(i).includes(e)?i[e]=t:i.setAttribute(e,t))}var E=new Map;function Z(i){var e=E.get(i.nodeName);if(e)return e;E.set(i.nodeName,e=[]);for(var t,o=A(i),r=Element.prototype;r!==o;){t=W(o);for(var s in t)t[s].set&&e.push(s);o=A(o)}return e}function P(i,e,t,o){var r=i.__styles??(i.__styles={});r[e]!==t&&(r[e]=t,t==null?i.style.removeProperty(e):i.style.setProperty(e,t,""))}var n,h,c,b,R;const f=class f{constructor(e){l(this,b);l(this,n,new WeakMap);l(this,h);l(this,c);w(this,c,e)}observe(e,t){var o=a(this,n).get(e)||new Set;return o.add(t),a(this,n).set(e,o),T(this,b,R).call(this).observe(e,a(this,c)),()=>{var r=a(this,n).get(e);r.delete(t),r.size===0&&(a(this,n).delete(e),a(this,h).unobserve(e))}}};n=new WeakMap,h=new WeakMap,c=new WeakMap,b=new WeakSet,R=function(){return a(this,h)??w(this,h,new ResizeObserver(e=>{for(var t of e){f.entries.set(t.target,t);for(var o of a(this,n).get(t.target)||[])o(t)}}))},S(f,"entries",new WeakMap);let D=f;var ee=new D({box:"border-box"});function te(i,e,t){var o=ee.observe(i,()=>t(i[e]));H(()=>(U(()=>t(i[e])),o))}function ie(i,e){throw new F(i,e.toString())}new TextEncoder;const oe=[{index:"1",title:"Ted Lasso's pop culture references",blurb:"tedlasso_viz",description:"A character study of Ted Lasso by the 200 pop culture references he drops in Seasons 1 and 2: what do they reveal about his upbringing, taste and relationship with others? || Curious Data website",url:"https://public.tableau.com/views/TedLassoPopCultureReferences/TedLassoReferences",mobile_width:"375",mobile_height:"3877",desktop_width:"1366",desktop_height_modified:"795",color:"#003E90",mobile_height_native:"3850",desktop_height_native:"768",background_gradient:""},{index:"2",title:"Depeche Mode: an exploration of my devotion",blurb:"depechemode_viz",description:"Visualisation of the band's songs and albums || Curious Data website",url:"https://public.tableau.com/views/DepecheModeanexplorationofmydevotion/DEPECHEMODE",mobile_width:"375",mobile_height:"7989",desktop_width:"1020",desktop_height_modified:"7327",color:"#100e0f",mobile_height_native:"7962",desktop_height_native:"7300",background_gradient:""},{index:"3",title:"6 reasons to (re)watch Buffy the Vampire Slayer",blurb:"buffy_viz",description:"6 reasons to (re)watch Buffy the Vampire Slayer || Curious Data website",url:"https://public.tableau.com/views/Six_reasons_to_watch_Buffy/BUFFY",mobile_width:"375",mobile_height:"5187",desktop_width:"1020",desktop_height_modified:"5427",color:"#161A1D",mobile_height_native:"5160",desktop_height_native:"5400",background_gradient:""},{index:"4",title:"Eurovision: does jury bias lead to victory?",blurb:"eurovisionjury_viz",description:"Does jury bias lead to victory in the Eurovision Song Contest? An analysis || Curious Data website",url:"https://public.tableau.com/views/TheEurovisionSongContestdoesjurybiasleadtovictory/EUROVISION",mobile_width:"375",mobile_height:"4307",desktop_width:"1020",desktop_height_modified:"5394",color:"#1b1134",mobile_height_native:"4280",desktop_height_native:"5367",background_gradient:""},{index:"5",title:"Things I love about my cat",blurb:"cat_viz",description:"A love letter to my cat Depeche Meowed, my cat's list of grievances against her staff",url:"https://public.tableau.com/views/Things_I_love_about_my_cat/ThingsIloveaboutmycat",mobile_width:"375",mobile_height:"10027",desktop_width:"1366",desktop_height_modified:"795",color:"#f9fafb",mobile_height_native:"10000",desktop_height_native:"768",background_gradient:"linear-gradient(90deg, rgba(249,250,251,1) 50%, rgba(17,24,39,1) 50%)"}];function re({params:i}){const e=oe.find(t=>t.blurb===i.slug);if(e)return e;throw ie(302,"/projects")}const fe=Object.freeze(Object.defineProperty({__proto__:null,load:re},Symbol.toStringTag,{value:"Module"}));var se=j('<footer class="footer_visualisation svelte-jvzyys"><a href="/" class="svelte-jvzyys"><p class="svelte-jvzyys">&copy; <span id="date"></span> Anne-Sophie Pereira De Sá. All rights reserved</p></a></footer>');function ae(i,e){I(e,!1);let t=N(e,"backgroundColor",8);const o=new Date().getFullYear();M();var r=se(),s=_(r),d=_(s),g=O(_(d));g.textContent=o,q(),u(d),u(s),u(r),x(()=>P(r,"background-color",t())),k(i,r),L()}var ne=j('<meta name="description">'),de=j('<div class="embed-center svelte-95xijk"><iframe frameborder="0" allowtransparency="true" allowfullscreen="true" marginheight="0" marginwidth="0" scrolling="yes"></iframe></div> <!>',1);function ge(i,e){I(e,!1);let t=N(e,"data",8),o=J();M();var r=de();Q(v=>{var z=ne();x(()=>{K.title=t().title,p(z,"content",t().description)}),k(v,z)});var s=G(r),d=_(s);u(s);var g=O(s,2);ae(g,{get backgroundColor(){return t().color}}),x(()=>{P(s,"background-color",t().color),p(d,"title",t().title),p(d,"style",`
width: ${(y(o)>800?t().desktop_width:t().mobile_width)??""}px; 
height: ${(y(o)>800?t().desktop_height_modified:t().mobile_height)??""}px; 
visibility: visible;`),p(d,"src",`${t().url??""}?:embed=y&:showVizHome=n&:device=${(y(o)>800?"desktop":"phone")??""}`)}),te(s,"clientWidth",v=>X(o,v)),k(i,r),L()}export{ge as component,fe as universal};