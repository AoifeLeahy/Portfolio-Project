export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Portfolio-Project/_app",
	assets: new Set([".nojekyll","an phiast.png","animation_ss_1.png","animation_ss_2.png","art_1.png","art_2.jpg","art_2.png","Atlas.png","background.png","Background_dingle.png","Crowns_end_recording.mp4","cv_1.png","cv_1_copy.png","cv_2.png","escape_recording.mp4","favicon.png","game_1.png","game_2.png","github.png","gmail.png","linkedIn.webp","loadingScreen.png","picture.jpg","turn around.png","UFO.mp4","walk.mp4","website_home.png","website_learning.png","website_login.png","website_options.png","website_quiz.png","website_search.png","website_search_result.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".mp4":"video/mp4",".webp":"image/webp"},
	_: {
		client: {start:"_app/immutable/entry/start.BUWn9-tF.js",app:"_app/immutable/entry/app.StD8fYOs.js",imports:["_app/immutable/entry/start.BUWn9-tF.js","_app/immutable/chunks/BRvcUD00.js","_app/immutable/chunks/ChgthINC.js","_app/immutable/chunks/CWpV8jeT.js","_app/immutable/chunks/D4ii5Xfp.js","_app/immutable/entry/app.StD8fYOs.js","_app/immutable/chunks/ChgthINC.js","_app/immutable/chunks/Dwy-EHWa.js","_app/immutable/chunks/Be7ml9ym.js","_app/immutable/chunks/C9tWVvu7.js","_app/immutable/chunks/BOWPASnu.js","_app/immutable/chunks/1Da6qQXu.js","_app/immutable/chunks/CbXmdm7u.js","_app/immutable/chunks/CWpV8jeT.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/Portfolio-Project/","/Portfolio-Project/About_me","/Portfolio-Project/Animation_page","/Portfolio-Project/Art_page","/Portfolio-Project/Cv","/Portfolio-Project/Games_page","/Portfolio-Project/Website_page"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
