import { Y as head } from "../../../chunks/index.js";
import { P as Projects_gallery } from "../../../chunks/Projects_gallery.js";
import { N as Navbar, F as Footer_classic } from "../../../chunks/Footer_classic.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website || Projects</title>`;
    $$payload2.out += `<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page lists some of my most recent projects.">`;
  });
  Navbar($$payload);
  $$payload.out += `<!----> `;
  Projects_gallery($$payload);
  $$payload.out += `<!----> `;
  Footer_classic($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
