import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.4ER4Isbj.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.aL9-j8ZR.js","_app/immutable/chunks/Footer_classic.sc-4yIQT.js"];
export const stylesheets = ["_app/immutable/assets/3.ncsxVz1F.css","_app/immutable/assets/Footer_classic.q__GnokP.css"];
export const fonts = [];
