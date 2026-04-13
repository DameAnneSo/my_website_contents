import * as universal from '../entries/pages/projects/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/+page.js";
export const imports = ["_app/immutable/nodes/6.BhblZY-Z.js","_app/immutable/chunks/Bz-gF83G.js","_app/immutable/chunks/DVEFiCgx.js","_app/immutable/chunks/BpYg_QJ-.js","_app/immutable/chunks/CaaRLkje.js","_app/immutable/chunks/BGqLnRo9.js","_app/immutable/chunks/Cxv9diCm.js"];
export const stylesheets = ["_app/immutable/assets/Projects_gallery.CrNS4DtI.css","_app/immutable/assets/Footer_classic.CawPay32.css"];
export const fonts = [];
