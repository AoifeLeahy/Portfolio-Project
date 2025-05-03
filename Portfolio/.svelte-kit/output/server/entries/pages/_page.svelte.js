import { E as attr, C as pop, z as push, P as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="home-page svelte-sszase"><div class="container svelte-sszase"><div class="name-box svelte-sszase"><h1>Aoife Leahy</h1></div> <div class="image-box svelte-sszase"><img${attr("src", `${stringify(base)}/background.png`)} alt="Forest background" class="svelte-sszase"></div></div></div>`;
  pop();
}
export {
  _page as default
};
