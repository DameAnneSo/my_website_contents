import * as universal from '../entries/pages/contact/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/5.C485d3mj.js","_app/immutable/chunks/disclose-version.DSl3tGsY.js","_app/immutable/chunks/runtime.CcnFKi4J.js","_app/immutable/chunks/legacy.DOcX7Gls.js","_app/immutable/chunks/svelte-head.hADkoV6P.js","_app/immutable/chunks/Footer_classic.WKEGUO1x.js","_app/immutable/chunks/events.B5qEbjbk.js"];
export const stylesheets = ["_app/immutable/assets/5.B8m2DZQI.css","_app/immutable/assets/Footer_classic.DGXWkBzf.css"];
export const fonts = [];
