

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3Kf8zKWJ.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.aL9-j8ZR.js","_app/immutable/chunks/entry.Y8uTj2iA.js","_app/immutable/chunks/control.pJ1mnnAb.js"];
export const stylesheets = [];
export const fonts = [];
