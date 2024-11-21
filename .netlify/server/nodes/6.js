import * as universal from '../entries/pages/projects/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/+page.js";
export const imports = ["_app/immutable/nodes/6.H7hw6PKI.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.aL9-j8ZR.js","_app/immutable/chunks/Projects_gallery.3i8AiFDW.js","_app/immutable/chunks/Footer_classic.RBRcKoPX.js"];
export const stylesheets = ["_app/immutable/assets/Projects_gallery.uMBopqUf.css","_app/immutable/assets/Footer_classic.4oWLSP2n.css"];
export const fonts = [];
