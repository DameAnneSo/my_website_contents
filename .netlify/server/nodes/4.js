import * as universal from '../entries/pages/blog/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/4._gmt13L3.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.aL9-j8ZR.js","_app/immutable/chunks/Footer_classic.RBRcKoPX.js"];
export const stylesheets = ["_app/immutable/assets/4.v7lB1rid.css","_app/immutable/assets/Footer_classic.4oWLSP2n.css"];
export const fonts = [];
