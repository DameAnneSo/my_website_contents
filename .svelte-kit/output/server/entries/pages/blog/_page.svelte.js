import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, F as Footer_classic } from "../../../chunks/Footer_classic.js";
const css = {
  code: ".blog-text.svelte-11j8zy5 h3.svelte-11j8zy5{text-transform:none}.blog-title.svelte-11j8zy5.svelte-11j8zy5{text-align:left;margin-bottom:2rem}.blog-title.svelte-11j8zy5 .underline.svelte-11j8zy5{margin-left:0}.blog-center.svelte-11j8zy5.svelte-11j8zy5{display:grid;gap:3rem 1rem;place-items:center}.blog-img.svelte-11j8zy5.svelte-11j8zy5{display:block;position:relative;width:250px}@media screen and (min-width: 800px){.blog-center.svelte-11j8zy5.svelte-11j8zy5{grid-template-columns:1fr 1fr}}.blog-img.svelte-11j8zy5.svelte-11j8zy5::before{right:1rem}.blog-info.svelte-11j8zy5.svelte-11j8zy5{align-self:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1haul5t_START -->${$$result.title = `<title>Curious Data, Anne-Sophie Pereira De Sá&#39;s datavisualisation website || Blog</title>`, ""}<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page is my blog homepage, currently in construction."><!-- HEAD_svelte-1haul5t_END -->`, ""}  ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <section class="section single-page blog" data-svelte-h="svelte-1l62sri"><div class="section-center blog-center blog-center svelte-11j8zy5"> <article class="blog-img svelte-11j8zy5"><img src="./images/construction.jpg" class="blog-info home-photo svelte-11j8zy5" alt="Anne-Sophie standing and looking at Roman ruins in Sicily. Supposed to be funny because the website is in construction. Hahaha."></article>  <article class="blog-info svelte-11j8zy5"> <div class="section-title blog-title svelte-11j8zy5"><h2>Blog in construction</h2> <div class="underline svelte-11j8zy5"></div></div>  <div class="blog-text svelte-11j8zy5"><h3 class="svelte-11j8zy5">Come back in <span class="headline_visualisation">Summer 2023!</span> <br>
          or go to <a href="https://theonlinedots.wordpress.com/" target="_blank">my current blog: The Online Dots</a></h3></div></article></div></section>  ${validate_component(Footer_classic, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
