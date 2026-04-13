import { a0 as head } from "../../../chunks/renderer.js";
import { N as Navbar, F as Footer_classic } from "../../../chunks/Footer_classic.js";
function _page($$renderer) {
  head("u4k2t", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website || Blog</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page is my blog homepage, currently in construction."/>`);
  });
  Navbar($$renderer);
  $$renderer.push(`<!----> <section class="section single-page blog"><div class="section-center blog-center blog-center svelte-u4k2t"><article class="blog-img svelte-u4k2t"><img src="./images/construction.jpg" class="blog-info home-photo svelte-u4k2t" alt="Anne-Sophie standing and looking at Roman ruins in Sicily. Supposed to be funny because the website is in construction. Hahaha."/></article> <article class="blog-info svelte-u4k2t"><div class="section-title blog-title svelte-u4k2t"><h2>Blog in construction</h2> <div class="underline svelte-u4k2t"></div></div> <div class="blog-text svelte-u4k2t"><h3 class="svelte-u4k2t">Come back in <span class="headline_visualisation">Summer 2023!</span> <br/> or go to <a href="https://theonlinedots.wordpress.com/" target="_blank">my current blog: The Online Dots</a></h3></div></article></div></section> `);
  Footer_classic($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
