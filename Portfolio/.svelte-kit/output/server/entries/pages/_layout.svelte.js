import { D as getContext, E as attr, F as attr_class, G as store_get, I as unsubscribe_stores, C as pop, z as push, J as head, K as slot } from "../../chunks/index.js";
import "clsx";
import { b as base } from "../../chunks/paths.js";
import "../../chunks/client.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Navigation($$payload, $$props) {
  push();
  var $$store_subs;
  let isDropdownOpen = false;
  $$payload.out += `<nav class="nav svelte-28x0rr"><div class="main-nav svelte-28x0rr"><ul class="main-nav-links svelte-28x0rr"><li class="svelte-28x0rr"><a${attr("href", base + "/")}${attr_class("svelte-28x0rr", void 0, {
    "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === base || store_get($$store_subs ??= {}, "$page", page).url.pathname === "/"
  })}>Home</a></li> <li class="svelte-28x0rr"><a${attr("href", base + "/About_me")}${attr_class("svelte-28x0rr", void 0, {
    "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === base + "/About_me"
  })}>About Me</a></li> <li class="svelte-28x0rr"><a${attr("href", base + "/Cv")}${attr_class("svelte-28x0rr", void 0, {
    "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === base + "/Cv"
  })}>Cv</a></li></ul></div> <div class="dropdown-menu svelte-28x0rr"><button class="hamburger-button svelte-28x0rr" aria-label="Toggle menu"${attr("aria-expanded", isDropdownOpen)}>☰</button> <div${attr_class("dropdown-content svelte-28x0rr", void 0, { "active": isDropdownOpen })}><a${attr("href", base + "/Animation_page")}${attr_class("svelte-28x0rr", void 0, {
    "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === base + "/animation"
  })}>Animation</a> <a${attr("href", base + "/Art_page")}${attr_class("svelte-28x0rr", void 0, {
    "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === base + "/Art_page"
  })}>Art</a> <a${attr("href", base + "/Games_page")}${attr_class("svelte-28x0rr", void 0, {
    "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === base + "/Games_page"
  })}>Games</a> <a${attr("href", base + "/Website_page")}${attr_class("svelte-28x0rr", void 0, {
    "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === base + "/Website_page"
  })}>Websites</a></div></div></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Header($$payload) {
  $$payload.out += `<header class="svelte-hu6qmr">`;
  Navigation($$payload);
  $$payload.out += `<!----></header>`;
}
function _layout($$payload, $$props) {
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Italiana&amp;family=Poppins:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">`;
  });
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-emp6ej"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main>`;
}
export {
  _layout as default
};
