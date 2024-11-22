import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.C1rT6TuK.js","_app/immutable/chunks/disclose-version.DSl3tGsY.js","_app/immutable/chunks/runtime.CcnFKi4J.js","_app/immutable/chunks/legacy.DOcX7Gls.js","_app/immutable/chunks/svelte-head.hADkoV6P.js","_app/immutable/chunks/Footer_classic.WKEGUO1x.js","_app/immutable/chunks/events.B5qEbjbk.js"];
export const stylesheets = ["_app/immutable/assets/3.r2O0ZC4-.css","_app/immutable/assets/Footer_classic.DGXWkBzf.css"];
export const fonts = [];
