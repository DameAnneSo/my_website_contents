import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3._fh-r7Tn.js","_app/immutable/chunks/Bz-gF83G.js","_app/immutable/chunks/DVEFiCgx.js","_app/immutable/chunks/BpYg_QJ-.js","_app/immutable/chunks/BGqLnRo9.js","_app/immutable/chunks/Cxv9diCm.js"];
export const stylesheets = ["_app/immutable/assets/Footer_classic.CawPay32.css","_app/immutable/assets/3.BVeZb6XJ.css"];
export const fonts = [];
