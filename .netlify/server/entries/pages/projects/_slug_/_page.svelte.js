import { _ as add_styles, V as escape_html, $ as bind_props, S as pop, Q as push, Y as head, Z as stringify } from "../../../../chunks/index.js";
import { a as attr } from "../../../../chunks/attributes.js";
function Footer_portfolio($$payload, $$props) {
  push();
  let backgroundColor = $$props["backgroundColor"];
  const date = (/* @__PURE__ */ new Date()).getFullYear();
  $$payload.out += `<footer${add_styles({ "background-color": backgroundColor })} class="footer_visualisation svelte-jvzyys"><a href="/" class="svelte-jvzyys"><p class="svelte-jvzyys">© <span id="date">${escape_html(date)}</span> Anne-Sophie Pereira De Sá. All rights reserved</p></a></footer>`;
  bind_props($$props, { backgroundColor });
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(data.title)}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", data.description)}>`;
  });
  $$payload.out += `<div${add_styles({ "background-color": data.color })} class="embed-center svelte-95xijk"><iframe frameborder="0" allowtransparency="true" allowfullscreen="true"${attr("title", data.title)} marginheight="0" marginwidth="0" scrolling="yes"${attr("style", ` width: ${stringify(data.mobile_width)}px; height: ${stringify(data.mobile_height)}px; visibility: visible;`)}${attr("src", `${stringify(data.url)}?:embed=y&:showVizHome=n&:device=${stringify("phone")}`)}></iframe></div> `;
  Footer_portfolio($$payload, { backgroundColor: data.color });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
