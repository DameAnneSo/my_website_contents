import * as universal from '../entries/pages/blog/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/4.D0YEx6F6.js","_app/immutable/chunks/index.30ImaL5r.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.aL9-j8ZR.js","_app/immutable/chunks/Footer_classic.sc-4yIQT.js"];
export const stylesheets = ["_app/immutable/assets/4.v7lB1rid.css","_app/immutable/assets/Footer_classic.q__GnokP.css"];
export const fonts = [];
