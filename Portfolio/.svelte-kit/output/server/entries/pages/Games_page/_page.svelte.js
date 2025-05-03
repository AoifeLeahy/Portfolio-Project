import { E as attr, C as pop, z as push, P as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="mainWrapper svelte-jjnrwg"><div class="titleBox svelte-jjnrwg"><h1>Games</h1></div> <div id="gamesBoxes" class="svelte-jjnrwg"><div id="game1Box" class="svelte-jjnrwg"><div class="background-box svelte-jjnrwg"><div class="text-box svelte-jjnrwg"><p class="title svelte-jjnrwg">Crown's End</p> <a href="https://ui-programming-24-25.codeberg.page/Aoife_Leahy_C00296873-UI-Programming-Module-Project/" class="svelte-jjnrwg">Live link</a><br> <a href="https://codeberg.org/UI-Programming-24-25/Aoife_Leahy_C00296873-UI-Programming-Module-Project" class="svelte-jjnrwg">Link to codeberg repository</a> <p class="svelte-jjnrwg">Crown's End is a game that I created during my second year module UI Programming. The goal was to capture the crown to save the village from the current King. The game was created in Javascript, HTML and Css.</p></div> <img${attr("src", `${stringify(base)}/game_1.png`)} alt="Game one" id="game-1-image" class="svelte-jjnrwg"></div></div> <div id="games2box"><div class="background-box svelte-jjnrwg"><div class="text-box svelte-jjnrwg"><p class="title svelte-jjnrwg">Escape the Prison</p> <a href="https://github.com/KenPowerClassroom/programming-project-semester-2-AoifeLeahy" class="svelte-jjnrwg">Github Repository</a><br> <p class="svelte-jjnrwg">Escape the Prison is a game made in C++ for the first year module Introduction to Object Orientated Programming. To win this game, you are playing as the prisoner and must avoid all the guards to collect the key and escape.</p></div> <img${attr("src", `${stringify(base)}/game_2.png`)} alt="Game one" id="game-2-image" class="svelte-jjnrwg"></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
