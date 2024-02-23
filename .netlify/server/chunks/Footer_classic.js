import { c as create_ssr_component, e as escape } from "./ssr.js";
const css$1 = {
  code: ".nav-logo.svelte-wd3e1d.svelte-wd3e1d{width:3.5rem}.nav-links.svelte-wd3e1d.svelte-wd3e1d{display:none}.nav.svelte-wd3e1d.svelte-wd3e1d{height:5rem;padding:1rem;display:grid;-webkit-box-align:center;align-items:center;-webkit-transition:var(--transition);transition:var(--transition)}.nav-center.svelte-wd3e1d.svelte-wd3e1d{width:100%;max-width:var(--max-width);margin:0 auto}.nav-header.svelte-wd3e1d.svelte-wd3e1d{display:grid;grid-template-columns:1fr 1fr;-webkit-box-align:center;align-items:center}.nav-btn.svelte-wd3e1d.svelte-wd3e1d{background:transparent;border-color:transparent;color:var(--clr-primary-5);font-size:2rem;cursor:pointer;justify-self:right}@media screen and (min-width: 800px){.nav-btn.svelte-wd3e1d.svelte-wd3e1d{display:none}.nav-links.svelte-wd3e1d.svelte-wd3e1d{display:grid;grid-template-columns:repeat(4, 1fr);justify-items:center;gap:2rem;justify-self:end}.nav-links.svelte-wd3e1d a.svelte-wd3e1d{text-transform:uppercase;color:var(--clr-grey-2);letter-spacing:var(--spacing);-webkit-transition:var(--transition);transition:var(--transition)}.nav-links.svelte-wd3e1d a.svelte-wd3e1d:hover{color:var(--clr-primary-5)}.nav-center.svelte-wd3e1d.svelte-wd3e1d{display:grid;grid-template-columns:auto 1fr;-webkit-box-align:center;align-items:center}}.navbar-fixed.svelte-wd3e1d.svelte-wd3e1d{position:fixed;top:0;left:0;width:100%;background-color:var(--clr-primary-9);z-index:2;box-shadow:var(--light-shadow)}.sidebar.svelte-wd3e1d.svelte-wd3e1d{position:fixed;top:0;left:0;width:100%;height:100%;background:var(--clr-primary-9);z-index:4;display:grid;place-items:center;-webkit-transition:var(--transition);transition:var(--transition);-webkit-transform:translateX(-100%);transform:translateX(-100%)}.show-sidebar.svelte-wd3e1d.svelte-wd3e1d{-webkit-transform:translateX(0);transform:translateX(0);transition:--var(transition)}.sidebar-links.svelte-wd3e1d.svelte-wd3e1d{text-align:center}.sidebar-links.svelte-wd3e1d a.svelte-wd3e1d{font-size:2rem;text-transform:uppercase;letter-spacing:var(--spacing);color:var(--clr-grey-5);transition:--var(transition);letter-spacing:--spacing;display:inline-block;margin-bottom:1.5rem}.sidebar-links.svelte-wd3e1d a.svelte-wd3e1d:hover{color:var(--clr-primary-5)}.social-icon.svelte-wd3e1d.svelte-wd3e1d{color:var(--clr-grey-5)}.social-icon.svelte-wd3e1d.svelte-wd3e1d:hover{color:var(--clr-primary-5)}.close-btn.svelte-wd3e1d.svelte-wd3e1d{position:absolute;top:1rem;right:1rem;font-size:3rem;background:transparent;border:transparent;-webkit-transition:var(--transition);transition:var(--transition);color:var(--red-dark)}.close-btn.svelte-wd3e1d.svelte-wd3e1d:hover{color:var(--clr-primary-5)}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `  <nav class="${["nav svelte-wd3e1d", ""].join(" ").trim()}" id="nav"><div class="nav-center svelte-wd3e1d"> <div class="nav-header svelte-wd3e1d"><img src="./images/logo.svg" alt="logo of website Curious data" class="nav-logo svelte-wd3e1d"> <button class="nav-btn svelte-wd3e1d" id="nav-btn" data-svelte-h="svelte-99cxaw"><i class="fas fa-bars"></i></button></div>  <ul class="nav-links svelte-wd3e1d" data-svelte-h="svelte-182rixt"><li><a href="/" class="svelte-wd3e1d">home</a></li> <li><a href="/about" class="svelte-wd3e1d">About</a></li> <li><a href="/projects" class="svelte-wd3e1d">Projects</a></li>  <li><a href="/contact" class="svelte-wd3e1d">Contact</a></li></ul></div></nav>  <aside class="${["sidebar svelte-wd3e1d", ""].join(" ").trim()}" id="sidebar"><div><button class="close-btn svelte-wd3e1d" id="close-btn" data-svelte-h="svelte-f6cwpg"><i class="fas fa-times"></i></button>  <ul class="sidebar-links svelte-wd3e1d"><li><a href="/" class="svelte-wd3e1d" data-svelte-h="svelte-uivu1q">home</a></li> <li><a href="/about" class="svelte-wd3e1d" data-svelte-h="svelte-wpe9d5">about</a></li> <li><a href="/projects" class="svelte-wd3e1d" data-svelte-h="svelte-1qfykij">projects</a></li>  <li><a href="/contact" class="svelte-wd3e1d" data-svelte-h="svelte-3rh3qb">contact</a></li></ul>  <ul class="social-icons" data-svelte-h="svelte-ozsrh1"> <li><a href="https://www.linkedin.com/in/annesophiepereira/" target="_blank" class="social-icon svelte-wd3e1d"><i class="fab fa-linkedin"></i></a></li>   <li><a href="https://vis.social/@curiousdata" target="_blank" class="social-icon svelte-wd3e1d"><i class="fab fa-mastodon"></i></a></li>  <li><a href="https://bsky.app/profile/curiousdata.bsky.social" target="_blank" class="social-icon svelte-wd3e1d"><i class="fa-solid fa-retweet"></i></a></li> </ul></div></aside> `;
});
const css = {
  code: ".footer.svelte-1hm3mbc.svelte-1hm3mbc{height:12rem;padding-bottom:2rem;background-color:var(--clr-primary-1);display:grid;place-items:center}.footer.svelte-1hm3mbc .social-icons.svelte-1hm3mbc{margin-bottom:2rem}.footer.svelte-1hm3mbc .social-icon.svelte-1hm3mbc{color:var(--clr-primary-5)}.footer.svelte-1hm3mbc .social-icon.svelte-1hm3mbc:hover{color:var(--clr-primary-7)}.footer.svelte-1hm3mbc p.svelte-1hm3mbc{font-size:1rem;text-transform:capitalize;color:var(--clr-primary-4)}",
  map: null
};
const Footer_classic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const date = (/* @__PURE__ */ new Date()).getFullYear();
  $$result.css.add(css);
  return ` <footer class="footer svelte-1hm3mbc"><ul class="social-icons svelte-1hm3mbc" data-svelte-h="svelte-mg7wpo"> <li><a href="https://www.linkedin.com/in/annesophiepereira/" target="_blank" class="social-icon svelte-1hm3mbc"><i class="fab fa-linkedin"></i></a></li>   <li><a href="https://vis.social/@curiousdata" target="_blank" class="social-icon svelte-1hm3mbc"><i class="fab fa-mastodon"></i></a></li>  <li><a href="https://bsky.app/profile/curiousdata.bsky.social" target="_blank" class="social-icon svelte-1hm3mbc"><i class="fa-solid fa-retweet"></i></a></li> </ul> <p class="svelte-1hm3mbc">© <span id="date">${escape(date)}</span> Anne-Sophie Pereira De Sá. All rights reserved</p> </footer>`;
});
export {
  Footer_classic as F,
  Navbar as N
};
