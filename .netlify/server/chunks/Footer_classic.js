import { Z as stringify, V as escape_html, S as pop, Q as push } from "./index.js";
import { a as attr } from "./attributes.js";
function Navbar($$payload) {
  $$payload.out += `<nav${attr("class", `nav svelte-12x0e5s ${stringify([""].filter(Boolean).join(" "))}`)} id="nav"><div class="nav-center svelte-12x0e5s"><div class="nav-header svelte-12x0e5s"><img src="./images/logo.svg" alt="logo of website Curious data" class="nav-logo svelte-12x0e5s"> <button class="nav-btn svelte-12x0e5s" id="nav-btn"><i class="fas fa-bars"></i></button></div> <ul class="nav-links svelte-12x0e5s"><li><a href="/" class="svelte-12x0e5s">Home</a></li> <li><a href="/about" class="svelte-12x0e5s">About</a></li> <li><a href="/projects" class="svelte-12x0e5s">Projects</a></li> <li><a href="/contact" class="svelte-12x0e5s">Contact</a></li></ul></div></nav> <aside${attr("class", `sidebar svelte-12x0e5s ${stringify([""].filter(Boolean).join(" "))}`)} id="sidebar"><div><button class="close-btn svelte-12x0e5s" id="close-btn"><i class="fas fa-times"></i></button> <ul class="sidebar-links svelte-12x0e5s"><li><a href="/" class="svelte-12x0e5s">home</a></li> <li><a href="/about" class="svelte-12x0e5s">about</a></li> <li><a href="/projects" class="svelte-12x0e5s">projects</a></li> <li><a href="/contact" class="svelte-12x0e5s">contact</a></li></ul> <ul class="social-icons"><li><a href="https://www.linkedin.com/in/annesophiepereira/" target="_blank" class="social-icon svelte-12x0e5s"><i class="fab fa-linkedin"></i></a></li>  <li><a href="https://github.com/DameAnneSo" target="_blank" class="social-icon svelte-12x0e5s"><i class="fa-brands fa-github"></i></a></li> <li><a href="https://bsky.app/profile/curiousdata.bsky.social" target="_blank" class="social-icon svelte-12x0e5s"><i class="fa-brands fa-bluesky"></i></a></li></ul></div></aside>`;
}
function Footer_classic($$payload, $$props) {
  push();
  const date = (/* @__PURE__ */ new Date()).getFullYear();
  $$payload.out += `<footer class="footer svelte-1whhmcy"><ul class="social-icons svelte-1whhmcy"><li><a href="https://www.linkedin.com/in/annesophiepereira/" target="_blank" class="social-icon svelte-1whhmcy"><i class="fab fa-linkedin"></i></a></li>  <li><a href="https://github.com/DameAnneSo" target="_blank" class="social-icon svelte-1whhmcy"><i class="fa-brands fa-github"></i></a></li> <li><a href="https://bsky.app/profile/curiousdata.bsky.social" target="_blank" class="social-icon svelte-1whhmcy"><i class="fa-brands fa-bluesky"></i></a></li></ul> <p class="svelte-1whhmcy">© <span id="date">${escape_html(date)}</span> Anne-Sophie Pereira De Sá. All rights reserved</p></footer>`;
  pop();
}
export {
  Footer_classic as F,
  Navbar as N
};
