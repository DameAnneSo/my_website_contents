

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.nIwAYlc5.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.aL9-j8ZR.js"];
export const stylesheets = [];
export const fonts = [];
