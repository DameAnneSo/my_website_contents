import { Y as head } from "../../../chunks/index.js";
import { N as Navbar, F as Footer_classic } from "../../../chunks/Footer_classic.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website || Blog</title>`;
    $$payload2.out += `<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page is my blog homepage, currently in construction.">`;
  });
  Navbar($$payload);
  $$payload.out += `<!----> <section class="section single-page blog"><div class="section-center blog-center blog-center svelte-1xdb6vc"><article class="blog-img svelte-1xdb6vc"><img src="./images/construction.jpg" class="blog-info home-photo svelte-1xdb6vc" alt="Anne-Sophie standing and looking at Roman ruins in Sicily. Supposed to be funny because the website is in construction. Hahaha."></article> <article class="blog-info svelte-1xdb6vc"><div class="section-title blog-title svelte-1xdb6vc"><h2>Blog in construction</h2> <div class="underline svelte-1xdb6vc"></div></div> <div class="blog-text svelte-1xdb6vc"><h3 class="svelte-1xdb6vc">Come back in <span class="headline_visualisation">Summer 2023!</span> <br> or go to <a href="https://theonlinedots.wordpress.com/" target="_blank">my current blog: The Online Dots</a></h3></div></article></div></section> `;
  Footer_classic($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
