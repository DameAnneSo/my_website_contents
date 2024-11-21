import * as universal from '../entries/pages/projects/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/+page.js";
export const imports = ["_app/immutable/nodes/6.C28ooBQW.js","_app/immutable/chunks/disclose-version.DSl3tGsY.js","_app/immutable/chunks/runtime.CcnFKi4J.js","_app/immutable/chunks/legacy.DOcX7Gls.js","_app/immutable/chunks/svelte-head.hADkoV6P.js","_app/immutable/chunks/Projects_gallery.CyDgHvq_.js","_app/immutable/chunks/Footer_classic.WKEGUO1x.js","_app/immutable/chunks/events.B5qEbjbk.js"];
export const stylesheets = ["_app/immutable/assets/Projects_gallery._QLEMljG.css","_app/immutable/assets/Footer_classic.DGXWkBzf.css"];
export const fonts = [];
