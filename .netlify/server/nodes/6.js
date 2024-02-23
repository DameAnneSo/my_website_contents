import * as universal from '../entries/pages/projects/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/+page.js";
export const imports = ["_app/immutable/nodes/6.O0XqGO-D.js","_app/immutable/chunks/Footer_classic.iQzHMh0b.js","_app/immutable/chunks/scheduler.vu5OxXgN.js","_app/immutable/chunks/index.vKMwrew2.js","_app/immutable/chunks/Projects_gallery.h5uQJQF4.js"];
export const stylesheets = ["_app/immutable/assets/Footer_classic.q__GnokP.css","_app/immutable/assets/Projects_gallery.uMBopqUf.css"];
export const fonts = [];
