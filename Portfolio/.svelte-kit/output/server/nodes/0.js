import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DEx8vwCj.js","_app/immutable/chunks/BOWPASnu.js","_app/immutable/chunks/ChgthINC.js","_app/immutable/chunks/GWZi3ZbF.js","_app/immutable/chunks/C9tWVvu7.js","_app/immutable/chunks/Be7ml9ym.js","_app/immutable/chunks/BstXGbx4.js","_app/immutable/chunks/BDfYO--3.js","_app/immutable/chunks/CbXmdm7u.js","_app/immutable/chunks/CWpV8jeT.js","_app/immutable/chunks/D4ii5Xfp.js","_app/immutable/chunks/BRvcUD00.js"];
export const stylesheets = ["_app/immutable/assets/0.CaJJNs6_.css"];
export const fonts = [];
