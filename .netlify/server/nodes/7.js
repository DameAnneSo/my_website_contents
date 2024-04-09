import * as universal from '../entries/pages/projects/_slug_/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/7.eTyTKPKK.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.aL9-j8ZR.js"];
export const stylesheets = ["_app/immutable/assets/7.QCEJwrJb.css"];
export const fonts = [];
