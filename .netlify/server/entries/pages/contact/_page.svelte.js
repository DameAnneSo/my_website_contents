import { a0 as head } from "../../../chunks/renderer.js";
import { N as Navbar, F as Footer_classic } from "../../../chunks/Footer_classic.js";
function _page($$renderer) {
  head("1bv7ezn", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website || Contact</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page provides details to reach out (and touch faith)."/>`);
  });
  Navbar($$renderer);
  $$renderer.push(`<!----> <section class="section single-page"><div class="section-title"><h2>Let's get in touch</h2> <div class="underline"></div></div> <div class="section-center page-info svelte-1bv7ezn"><p>If you love data visualisation as much as I do, reach out! <br/> Click on my social icons below in the footer to contact me.</p> <i class="fa-solid fa-arrow-down"></i></div></section> `);
  Footer_classic($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
