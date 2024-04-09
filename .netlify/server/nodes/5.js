import * as universal from '../entries/pages/contact/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/5.aGZKirO6.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.aL9-j8ZR.js","_app/immutable/chunks/Footer_classic.sc-4yIQT.js"];
export const stylesheets = ["_app/immutable/assets/5.MfReAEWD.css","_app/immutable/assets/Footer_classic.q__GnokP.css"];
export const fonts = [];
