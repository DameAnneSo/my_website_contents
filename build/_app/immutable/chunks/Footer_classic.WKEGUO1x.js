import{a as F,t as S}from"./disclose-version.DSl3tGsY.js";import{i as Y}from"./legacy.DOcX7Gls.js";import{k as $,t as B,am as H,m as s,o as t,r as a,aj as m,R as u,V as p,an as j,p as O,l as R}from"./runtime.CcnFKi4J.js";import{e as o}from"./events.B5qEbjbk.js";function A(i,e,r){if(r){if(i.classList.contains(e))return;i.classList.add(e)}else{if(!i.classList.contains(e))return;i.classList.remove(e)}}var V=S('<nav class="nav svelte-12x0e5s" id="nav"><div class="nav-center svelte-12x0e5s"><div class="nav-header svelte-12x0e5s"><img src="./images/logo.svg" alt="logo of website Curious data" class="nav-logo svelte-12x0e5s"> <button class="nav-btn svelte-12x0e5s" id="nav-btn"><i class="fas fa-bars"></i></button></div> <ul class="nav-links svelte-12x0e5s"><li><a href="/" class="svelte-12x0e5s">Home</a></li> <li><a href="/about" class="svelte-12x0e5s">About</a></li> <li><a href="/projects" class="svelte-12x0e5s">Projects</a></li> <li><a href="/contact" class="svelte-12x0e5s">Contact</a></li></ul></div></nav> <aside class="sidebar svelte-12x0e5s" id="sidebar"><div><button class="close-btn svelte-12x0e5s" id="close-btn"><i class="fas fa-times"></i></button> <ul class="sidebar-links svelte-12x0e5s"><li><a href="/" class="svelte-12x0e5s">home</a></li> <li><a href="/about" class="svelte-12x0e5s">about</a></li> <li><a href="/projects" class="svelte-12x0e5s">projects</a></li> <li><a href="/contact" class="svelte-12x0e5s">contact</a></li></ul> <ul class="social-icons"><li><a href="https://www.linkedin.com/in/annesophiepereira/" target="_blank" class="social-icon svelte-12x0e5s"><i class="fab fa-linkedin"></i></a></li>  <li><a href="https://github.com/DameAnneSo" target="_blank" class="social-icon svelte-12x0e5s"><i class="fa-brands fa-github"></i></a></li> <li><a href="https://bsky.app/profile/curiousdata.bsky.social" target="_blank" class="social-icon svelte-12x0e5s"><i class="fa-brands fa-bluesky"></i></a></li></ul></div></aside>',1);function J(i){let e=j(!1);const r=function(){window.scrollY>80?u(e,!0):u(e,!1)};let c=j(!1);const l=function(){u(c,!p(c))};var n=V();o("scroll",H,r);var v=$(n),g=s(v),k=s(g),D=t(s(k),2);a(k),m(2),a(g),a(v);var f=t(v,2),x=s(f),w=s(x),_=t(w,2),b=s(_),L=s(b);a(b);var h=t(b,2),C=s(h);a(h);var d=t(h,2),N=s(d);a(d);var y=t(d,2),P=s(y);a(y),a(_),m(2),a(x),a(f),B(()=>{A(v,"navbar-fixed",p(e)),A(f,"show-sidebar",p(c))}),o("click",D,l),o("click",w,l),o("click",L,l),o("click",C,l),o("click",N,l),o("click",P,l),F(i,n)}var q=S('<footer class="footer svelte-1whhmcy"><ul class="social-icons svelte-1whhmcy"><li><a href="https://www.linkedin.com/in/annesophiepereira/" target="_blank" class="social-icon svelte-1whhmcy"><i class="fab fa-linkedin"></i></a></li>  <li><a href="https://github.com/DameAnneSo" target="_blank" class="social-icon svelte-1whhmcy"><i class="fa-brands fa-github"></i></a></li> <li><a href="https://bsky.app/profile/curiousdata.bsky.social" target="_blank" class="social-icon svelte-1whhmcy"><i class="fa-brands fa-bluesky"></i></a></li></ul> <p class="svelte-1whhmcy">&copy; <span id="date"></span> Anne-Sophie Pereira De Sá. All rights reserved</p></footer>');function K(i,e){O(e,!1);const r=new Date().getFullYear();Y();var c=q(),l=t(s(c),2),n=t(s(l));n.textContent=r,m(),a(l),a(c),F(i,c),R()}export{K as F,J as N};