import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, F as Footer_classic } from "../../../chunks/Footer_classic.js";
const css = {
  code: ".page-info.svelte-21zk6j{text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-rgia2i_START -->${$$result.title = `<title>Curious Data, Anne-Sophie Pereira De Sá&#39;s datavisualisation website || Contact</title>`, ""}<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page provides details to reach out (and touch faith)."><!-- HEAD_svelte-rgia2i_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}  <section class="section single-page" data-svelte-h="svelte-ewf0cn"> <div class="section-title"><h2>Let&#39;s get in touch</h2> <div class="underline"></div></div>  <div class="section-center page-info svelte-21zk6j"><p>If you love data visualisation as much as I do, reach out!
      <br>
      Click on my social icons below in the footer to contact me.</p> <i class="fa-solid fa-arrow-down"></i></div></section>  ${validate_component(Footer_classic, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
