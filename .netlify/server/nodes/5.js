import * as universal from '../entries/pages/contact/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/5.BH4rSiVY.js","_app/immutable/chunks/disclose-version.B9gPAMOj.js","_app/immutable/chunks/runtime.D4PKpi0J.js","_app/immutable/chunks/legacy.900hIxXp.js","_app/immutable/chunks/svelte-head.Dx-84brM.js","_app/immutable/chunks/Footer_classic.D8wSoZeN.js","_app/immutable/chunks/events.ChL1b_ov.js"];
export const stylesheets = ["_app/immutable/assets/5.B8m2DZQI.css","_app/immutable/assets/Footer_classic.DGXWkBzf.css"];
export const fonts = [];
