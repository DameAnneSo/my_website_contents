import * as universal from '../entries/pages/projects/_slug_/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/7.HyUPp0Oq.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.vu5OxXgN.js","_app/immutable/chunks/index.vKMwrew2.js"];
export const stylesheets = ["_app/immutable/assets/7.QCEJwrJb.css"];
export const fonts = [];
