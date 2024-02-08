import { c as create_ssr_component, d as add_styles, e as escape, f as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
const css$1 = {
  code: ".footer_visualisation.svelte-jvzyys.svelte-jvzyys{display:grid;place-items:center;height:6 rem;padding-top:1rem}.footer_visualisation.svelte-jvzyys p.svelte-jvzyys{text-transform:capitalize;font-size:0.8rem}.footer_visualisation.svelte-jvzyys p.svelte-jvzyys,.footer_visualisation.svelte-jvzyys a.svelte-jvzyys{color:var(--clr-primary-10);transition:var(--transition)}",
  map: null
};
const Footer_portfolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { backgroundColor } = $$props;
  const date = (/* @__PURE__ */ new Date()).getFullYear();
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  $$result.css.add(css$1);
  return ` <footer class="footer_visualisation svelte-jvzyys"${add_styles({ "background-color": backgroundColor })}><a href="/" class="svelte-jvzyys">  <p class="svelte-jvzyys">© <span id="date">${escape(date)}</span> Anne-Sophie Pereira De Sá. All rights reserved</p></a></footer>`;
});
const css = {
  code: ".embed-center.svelte-95xijk{display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ct3qin_START -->${$$result.title = `<title>${escape(data.title)}</title>`, ""}<meta name="description"${add_attribute("content", data.description, 0)}><!-- HEAD_svelte-1ct3qin_END -->`, ""} <div class="embed-center svelte-95xijk"${add_styles({ "background-color": data.color })}><iframe frameborder="0" allowtransparency="true" allowfullscreen="true"${add_attribute("title", data.title, 0)} marginheight="0" marginwidth="0" scrolling="yes" style="${"width: " + escape(data.mobile_width, true) + "px; height: " + escape(
    data.mobile_height,
    true
  ) + "px; visibility: visible;"}" src="${escape(data.url, true) + "?:embed=y&:showVizHome=n&:device=" + escape("phone", true)}"></iframe></div> ${validate_component(Footer_portfolio, "Footer_portfolio").$$render($$result, { backgroundColor: data.color }, {}, {})}`;
});
export {
  Page as default
};
