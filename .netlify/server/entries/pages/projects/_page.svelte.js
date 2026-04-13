import { a0 as head } from "../../../chunks/renderer.js";
import { P as Projects_gallery } from "../../../chunks/Projects_gallery.js";
import { N as Navbar, F as Footer_classic } from "../../../chunks/Footer_classic.js";
function _page($$renderer) {
  head("rqn88j", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website || Projects</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page lists some of my most recent projects."/>`);
  });
  Navbar($$renderer);
  $$renderer.push(`<!----> `);
  Projects_gallery($$renderer);
  $$renderer.push(`<!----> `);
  Footer_classic($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
