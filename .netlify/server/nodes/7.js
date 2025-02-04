import * as universal from '../entries/pages/projects/_slug_/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/7.B_qyOwxm.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/disclose-version.B9gPAMOj.js","_app/immutable/chunks/runtime.D4PKpi0J.js","_app/immutable/chunks/legacy.900hIxXp.js","_app/immutable/chunks/svelte-head.Dx-84brM.js","_app/immutable/chunks/props.DWFojzxl.js","_app/immutable/chunks/store.DPmFcVIu.js"];
export const stylesheets = ["_app/immutable/assets/7.D18Df2ZA.css"];
export const fonts = [];
