import * as universal from '../entries/pages/contact/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/5.DXqfuhOm.js","_app/immutable/chunks/Bz-gF83G.js","_app/immutable/chunks/DVEFiCgx.js","_app/immutable/chunks/BpYg_QJ-.js","_app/immutable/chunks/BGqLnRo9.js","_app/immutable/chunks/Cxv9diCm.js"];
export const stylesheets = ["_app/immutable/assets/Footer_classic.CawPay32.css","_app/immutable/assets/5.COjr3kP_.css"];
export const fonts = [];
