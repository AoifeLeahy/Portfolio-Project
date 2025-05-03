import { E as attr, C as pop, z as push, P as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="container svelte-vnknwv"><div class="art-text-box svelte-vnknwv"><h1>Art</h1></div></div> <div class="art-box-container svelte-vnknwv"><div class="art-and-description svelte-vnknwv"><div class="art-background-box svelte-vnknwv"><img${attr("src", `${stringify(base)}/art_1.png`)} alt="First artwork" class="art1 svelte-vnknwv"></div> <div class="description-box svelte-vnknwv"><p class="svelte-vnknwv">26-11-2024</p> <p class="description svelte-vnknwv">This assignment consisted of designing and creating are own character. I then had to draw the character facing in different directions.</p></div></div> <div class="art-and-description svelte-vnknwv"><div class="art-background-box svelte-vnknwv"><img${attr("src", `${stringify(base)}/art_2.png`)} alt="Second artwork" class="art2 svelte-vnknwv"></div> <div class="description-box2 svelte-vnknwv"><p class="svelte-vnknwv">25-09-2024</p> <p class="description svelte-vnknwv">I had to draw rough sketches of a character created by me in different poses. I had to pick the best pose and then design and do a final piece.</p></div></div></div>`;
  pop();
}
export {
  _page as default
};
