import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { P as Projects_gallery } from "../../../chunks/Projects_gallery.js";
import { N as Navbar, F as Footer_classic } from "../../../chunks/Footer_classic.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-wf98hx_START -->${$$result.title = `<title>Curious Data, Anne-Sophie Pereira De Sá&#39;s datavisualisation website || Projects</title>`, ""}<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page lists some of my most recent projects."><!-- HEAD_svelte-wf98hx_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Projects_gallery, "Gallery").$$render($$result, {}, {}, {})} ${validate_component(Footer_classic, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
