import { Q as ensure_array_like, F as attr_class, E as attr, C as pop, z as push, P as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  let currentSlide = 0;
  const slides = [
    "website_home.png",
    "website_search.png",
    "website_search_result.png",
    "website_learning.png",
    "website_options.png",
    "website_login.png",
    "website_quiz.png"
  ];
  const each_array = ensure_array_like(slides);
  const each_array_1 = ensure_array_like(slides);
  $$payload.out += `<div class="mainWrapper svelte-abxm4h"><div class="titleBox svelte-abxm4h"><h1 class="svelte-abxm4h">Website</h1></div> <div class="content-section svelte-abxm4h"><div class="content-container svelte-abxm4h"><div class="slideshow-box svelte-abxm4h" role="region" aria-label="Image slideshow"><div class="slides-wrapper svelte-abxm4h"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let slide = each_array[index];
    $$payload.out += `<div${attr_class("slide svelte-abxm4h", void 0, { "active": currentSlide === index })}><img${attr("src", `${stringify(base)}/${stringify(slide)}`)}${attr("alt", `Website screenshot ${stringify(index + 1)}`)} class="svelte-abxm4h"></div>`;
  }
  $$payload.out += `<!--]--></div> <button class="slide-arrow prev svelte-abxm4h" aria-label="Previous slide">‹</button> <button class="slide-arrow next svelte-abxm4h" aria-label="Next slide">›</button> <div class="dots-container svelte-abxm4h"><!--[-->`;
  for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
    each_array_1[index];
    $$payload.out += `<button${attr_class("dot svelte-abxm4h", void 0, { "active": currentSlide === index })}${attr("aria-label", `Go to slide ${stringify(index + 1)}`)}></button>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="description-box svelte-abxm4h"><div class="text-box svelte-abxm4h"><p class="title svelte-abxm4h">Educational Website Project</p> <p class="svelte-abxm4h">This website was created as part of a group project during the last academic year. It serves as an educational platform with interactive quizzes and informative content.</p> <p class="contributions-title svelte-abxm4h">My Contributions:</p> <ul class="svelte-abxm4h"><li class="svelte-abxm4h">Created and coded the search bar functionality</li> <li class="svelte-abxm4h">Designed and styled the navigation bar</li> <li class="svelte-abxm4h">Researched topics and implemented them into the website</li> <li class="svelte-abxm4h">Developed the page layout and structure</li></ul></div></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
