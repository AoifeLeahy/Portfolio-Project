export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Portfolio-Project/_app",
	assets: new Set([".nojekyll","art_1.png","art_2.jpg","art_2.png","background.png","cv_1.png","cv_1_copy.png","cv_2.png","favicon.png","game_1.png","game_2.png","github.png","gmail.png","picture.jpg","UFO.mp4","walk.mp4"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.DoWZUF1D.js",app:"_app/immutable/entry/app.Ca4VZ5M3.js",imports:["_app/immutable/entry/start.DoWZUF1D.js","_app/immutable/chunks/BTG9DIwE.js","_app/immutable/chunks/BfGuB-Rh.js","_app/immutable/chunks/BSTyVPFS.js","_app/immutable/chunks/DH6I1ypx.js","_app/immutable/entry/app.Ca4VZ5M3.js","_app/immutable/chunks/BfGuB-Rh.js","_app/immutable/chunks/D25cQJ4-.js","_app/immutable/chunks/CXiq9WM2.js","_app/immutable/chunks/Ze2zrYOk.js","_app/immutable/chunks/BQt2lXAr.js","_app/immutable/chunks/BSTyVPFS.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/About_me",
				pattern: /^\/About_me\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Animation_page",
				pattern: /^\/Animation_page\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Art_page",
				pattern: /^\/Art_page\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Cv",
				pattern: /^\/Cv\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Games_page",
				pattern: /^\/Games_page\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
