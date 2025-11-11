import { E as attr, C as pop, z as push, P as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="container svelte-1wgglav"><div class="animation-text-box svelte-1wgglav"><h1 class="svelte-1wgglav">Animation</h1></div></div> <div class="art-box-container svelte-1wgglav"><div class="art-and-description svelte-1wgglav"><div class="art-background-box svelte-1wgglav"><video class="art1 svelte-1wgglav" controls><source${attr("src", `${stringify(base)}/UFO.mp4`)} type="video/mp4"> Your browser does not support the video tag.</video></div> <div class="description-box svelte-1wgglav"><p class="date svelte-1wgglav">07-11-2024</p> <p class="description svelte-1wgglav">For this assignment, I had to design and create a spaceship and a city background. I then had to animate the spaceship to kidnap a person.</p></div></div> <div class="art-and-description svelte-1wgglav"><div class="art-background-box svelte-1wgglav"><video class="art2 svelte-1wgglav" controls><source${attr("src", `${stringify(base)}/walk.mp4`)} type="video/mp4"> Your browser does not support the video tag.</video></div> <div class="description-box svelte-1wgglav"><p class="date svelte-1wgglav">03-12-2024</p> <p class="description svelte-1wgglav">I had to take my character that I had already designed previously and animate it walking. The background was created by me also.</p></div></div></div>`;
  pop();
}
export {
  _page as default
};
