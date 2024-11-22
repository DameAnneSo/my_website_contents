import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.j9iW8QRK.js","_app/immutable/chunks/disclose-version.DSl3tGsY.js","_app/immutable/chunks/runtime.CcnFKi4J.js","_app/immutable/chunks/legacy.DOcX7Gls.js","_app/immutable/chunks/svelte-head.hADkoV6P.js","_app/immutable/chunks/Projects_gallery.DfA25bLb.js","_app/immutable/chunks/Footer_classic.WKEGUO1x.js","_app/immutable/chunks/events.B5qEbjbk.js"];
export const stylesheets = ["_app/immutable/assets/2.Duw3LMLj.css","_app/immutable/assets/Projects_gallery.Daja1BTz.css","_app/immutable/assets/Footer_classic.DGXWkBzf.css"];
export const fonts = [];
