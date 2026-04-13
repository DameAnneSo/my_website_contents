import { a2 as attr_style, e as escape_html, a3 as bind_props, a0 as head, a4 as attr, a5 as stringify } from "../../../../chunks/renderer.js";
function Footer_portfolio($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let backgroundColor = $$props["backgroundColor"];
    const date = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="footer_visualisation svelte-jyndc0"${attr_style("", { "background-color": backgroundColor })}><a href="/" class="svelte-jyndc0"><p class="svelte-jyndc0">© <span id="date">${escape_html(date)}</span> Anne-Sophie Pereira De Sá. All rights reserved</p></a></footer>`);
    bind_props($$props, { backgroundColor });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    head("gygcht", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.description)}/>`);
    });
    $$renderer2.push(`<div class="embed-center svelte-gygcht"${attr_style("", { background: data.background_gradient || data.color })}><iframe frameborder="0"${attr("title", data.title)} marginheight="0" marginwidth="0" scrolling="yes"${attr_style(` width: ${stringify(data.mobile_width)}px; height: ${stringify(data.mobile_height)}px; visibility: visible;`)}${attr("src", `${stringify(data.url)}?:embed=y&:showVizHome=n&:device=${stringify("phone")}`)}></iframe></div> `);
    Footer_portfolio($$renderer2, { backgroundColor: data.background_gradient || data.color });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
