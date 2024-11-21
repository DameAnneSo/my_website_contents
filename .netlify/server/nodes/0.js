

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.lPvhrczr.js","_app/immutable/chunks/disclose-version.DSl3tGsY.js","_app/immutable/chunks/runtime.CcnFKi4J.js"];
export const stylesheets = [];
export const fonts = [];
