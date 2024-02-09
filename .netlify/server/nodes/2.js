import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.JNRo5BUo.js","_app/immutable/chunks/Footer_classic.iQzHMh0b.js","_app/immutable/chunks/scheduler.vu5OxXgN.js","_app/immutable/chunks/index.vKMwrew2.js","_app/immutable/chunks/Projects_gallery.h5uQJQF4.js"];
export const stylesheets = ["_app/immutable/assets/2.nDa89WI9.css","_app/immutable/assets/Footer_classic.q__GnokP.css","_app/immutable/assets/Projects_gallery.uMBopqUf.css"];
export const fonts = [];
