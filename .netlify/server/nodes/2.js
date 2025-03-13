import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Cgr8D7cl.js","_app/immutable/chunks/disclose-version.B9gPAMOj.js","_app/immutable/chunks/runtime.D4PKpi0J.js","_app/immutable/chunks/legacy.900hIxXp.js","_app/immutable/chunks/svelte-head.Dx-84brM.js","_app/immutable/chunks/Projects_gallery.N0nu6xly.js","_app/immutable/chunks/Footer_classic.D8wSoZeN.js","_app/immutable/chunks/events.ChL1b_ov.js"];
export const stylesheets = ["_app/immutable/assets/2.C3dxaQrv.css","_app/immutable/assets/Projects_gallery.DVmVecYa.css","_app/immutable/assets/Footer_classic.DGXWkBzf.css"];
export const fonts = [];
