import * as universal from '../entries/pages/contact/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/5.WC-A-w3a.js","_app/immutable/chunks/Footer_classic.5vvrf5uP.js","_app/immutable/chunks/scheduler.vu5OxXgN.js","_app/immutable/chunks/index.vKMwrew2.js"];
export const stylesheets = ["_app/immutable/assets/5.MfReAEWD.css","_app/immutable/assets/Footer_classic.CLpltTyB.css"];
export const fonts = [];
