import { E as attr, C as pop, z as push, P as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="cv-container svelte-159dxnd"><div class="cv-text-box svelte-159dxnd"><h1 class="svelte-159dxnd">My Cv</h1></div> <img${attr("src", `${stringify(base)}/cv_1.png`)} alt="Cv page 1" class="cv_page1 svelte-159dxnd"> <img${attr("src", `${stringify(base)}/cv_2.png`)} alt="Cv page 2" class="cv_page2 svelte-159dxnd"></div>`;
  pop();
}
export {
  _page as default
};
