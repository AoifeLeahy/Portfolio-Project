import { E as attr, C as pop, z as push, P as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="mainWrapper svelte-awt4gt"><div class="titleBox svelte-awt4gt"><h1 class="svelte-awt4gt">Games</h1></div> <div id="gamesBoxes" class="svelte-awt4gt"><div id="game1Box" class="svelte-awt4gt"><div class="background-box svelte-awt4gt"><div class="text-box svelte-awt4gt"><p class="title svelte-awt4gt">Crown's End</p> <p class="svelte-awt4gt">Crown's End is a game that I created during my second year module UI Programming. The goal was to capture the crown to save the village from the current King. The game was created in Javascript, HTML and Css.</p></div> <video class="art1 svelte-awt4gt" controls><source${attr("src", `${stringify(base)}/Crowns_end_recording.mp4`)} type="video/mp4"> Your browser does not support the video tag.</video></div></div> <div id="games2box" class="svelte-awt4gt"><div class="background-box svelte-awt4gt"><div class="text-box svelte-awt4gt"><p class="title svelte-awt4gt">Escape the Prison</p> <p class="svelte-awt4gt">Escape the Prison is a game made in C++ for the first year module Introduction to Object Orientated Programming. To win this game, you are playing as the prisoner and must avoid all the guards to collect the key and escape.</p></div> <video class="art2 svelte-awt4gt" controls><source${attr("src", `${stringify(base)}/escape_recording.mp4`)} type="video/mp4"> Your browser does not support the video tag.</video></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
