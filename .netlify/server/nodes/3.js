import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.5sYWK_9n.js","_app/immutable/chunks/Footer_classic.iQzHMh0b.js","_app/immutable/chunks/scheduler.vu5OxXgN.js","_app/immutable/chunks/index.vKMwrew2.js"];
export const stylesheets = ["_app/immutable/assets/3.gpqSLtVh.css","_app/immutable/assets/Footer_classic.q__GnokP.css"];
export const fonts = [];
