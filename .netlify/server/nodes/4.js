import * as universal from '../entries/pages/blog/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/4.C_nwAAai.js","_app/immutable/chunks/disclose-version.DSl3tGsY.js","_app/immutable/chunks/runtime.CcnFKi4J.js","_app/immutable/chunks/legacy.DOcX7Gls.js","_app/immutable/chunks/svelte-head.hADkoV6P.js","_app/immutable/chunks/Footer_classic.WKEGUO1x.js","_app/immutable/chunks/events.B5qEbjbk.js"];
export const stylesheets = ["_app/immutable/assets/4.DjUXkCPq.css","_app/immutable/assets/Footer_classic.DGXWkBzf.css"];
export const fonts = [];
