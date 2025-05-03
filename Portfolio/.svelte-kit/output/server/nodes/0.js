import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DPSVsnrr.js","_app/immutable/chunks/Ze2zrYOk.js","_app/immutable/chunks/BfGuB-Rh.js","_app/immutable/chunks/BTV5RAwk.js","_app/immutable/chunks/CXiq9WM2.js","_app/immutable/chunks/noVwqjNu.js","_app/immutable/chunks/BQt2lXAr.js","_app/immutable/chunks/BSTyVPFS.js","_app/immutable/chunks/DH6I1ypx.js","_app/immutable/chunks/BTG9DIwE.js"];
export const stylesheets = ["_app/immutable/assets/0.iegcbv4u.css"];
export const fonts = [];
