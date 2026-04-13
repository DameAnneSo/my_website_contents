import { a1 as attr_class, e as escape_html } from "./renderer.js";
import "clsx";
function Navbar($$renderer) {
  let isFixed = false;
  let isOpen = false;
  $$renderer.push(`<nav${attr_class("nav svelte-d8j1hi", void 0, {
    "navbar-fixed": (
      // let log =''
      // console.log = function (message) {
      //       log=''
      //       if (typeof message == 'object') {
      //           log += (JSON && JSON.stringify ? JSON.stringify(message) : message)
      //       } else {
      //           log += message;
      //       }
      //   }
      isFixed
    )
  })} id="nav"><div class="nav-center svelte-d8j1hi"><div class="nav-header svelte-d8j1hi"><img src="./images/logo.svg" alt="logo of website Curious data" class="nav-logo svelte-d8j1hi"/> <button class="nav-btn svelte-d8j1hi" id="nav-btn"><i class="fas fa-bars"></i></button></div> <ul class="nav-links svelte-d8j1hi"><li><a href="/" class="svelte-d8j1hi">Home</a></li> <li><a href="/about" class="svelte-d8j1hi">About</a></li> <li><a href="/projects" class="svelte-d8j1hi">Projects</a></li> <li><a href="/contact" class="svelte-d8j1hi">Contact</a></li></ul></div></nav> <aside${attr_class("sidebar svelte-d8j1hi", void 0, { "show-sidebar": isOpen })} id="sidebar"><div><button class="close-btn svelte-d8j1hi" id="close-btn"><i class="fas fa-times"></i></button> <ul class="sidebar-links svelte-d8j1hi"><li><a href="/" class="svelte-d8j1hi">home</a></li> <li><a href="/about" class="svelte-d8j1hi">about</a></li> <li><a href="/projects" class="svelte-d8j1hi">projects</a></li> <li><a href="/contact" class="svelte-d8j1hi">contact</a></li></ul> <ul class="social-icons"><li><a href="https://www.linkedin.com/in/annesophiepereira/" target="_blank" class="social-icon svelte-d8j1hi"><i class="fab fa-linkedin"></i></a></li>  <li><a href="https://github.com/DameAnneSo" target="_blank" class="social-icon svelte-d8j1hi"><i class="fa-brands fa-github"></i></a></li> <li><a href="https://bsky.app/profile/curiousdata.bsky.social" target="_blank" class="social-icon svelte-d8j1hi"><i class="fa-brands fa-bluesky"></i></a></li></ul></div></aside>`);
}
function Footer_classic($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const date = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="footer svelte-1f9k3as"><ul class="social-icons svelte-1f9k3as"><li><a href="https://www.linkedin.com/in/annesophiepereira/" target="_blank" class="social-icon svelte-1f9k3as"><i class="fab fa-linkedin"></i></a></li>  <li><a href="https://github.com/DameAnneSo" target="_blank" class="social-icon svelte-1f9k3as"><i class="fa-brands fa-github"></i></a></li> <li><a href="https://bsky.app/profile/curiousdata.bsky.social" target="_blank" class="social-icon svelte-1f9k3as"><i class="fa-brands fa-bluesky"></i></a></li></ul> <p class="svelte-1f9k3as">© <span id="date">${escape_html(date)}</span> Anne-Sophie Pereira De Sá. All rights reserved</p></footer>`);
  });
}
export {
  Footer_classic as F,
  Navbar as N
};
