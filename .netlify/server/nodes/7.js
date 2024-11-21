import * as universal from '../entries/pages/projects/_slug_/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/7.fnKCuAie.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/disclose-version.DSl3tGsY.js","_app/immutable/chunks/runtime.CcnFKi4J.js","_app/immutable/chunks/legacy.DOcX7Gls.js","_app/immutable/chunks/svelte-head.hADkoV6P.js","_app/immutable/chunks/props.C-g1OdIf.js","_app/immutable/chunks/store.DNZFZpQu.js"];
export const stylesheets = ["_app/immutable/assets/7.D18Df2ZA.css"];
export const fonts = [];
