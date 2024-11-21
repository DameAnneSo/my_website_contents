import { Y as head } from "../../../chunks/index.js";
import { N as Navbar, F as Footer_classic } from "../../../chunks/Footer_classic.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website || Contact</title>`;
    $$payload2.out += `<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page provides details to reach out (and touch faith).">`;
  });
  Navbar($$payload);
  $$payload.out += `<!----> <section class="section single-page"><div class="section-title"><h2>Let's get in touch</h2> <div class="underline"></div></div> <div class="section-center page-info svelte-21zk6j"><p>If you love data visualisation as much as I do, reach out! <br> Click on my social icons below in the footer to contact me.</p> <i class="fa-solid fa-arrow-down"></i></div></section> `;
  Footer_classic($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
