import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/global.css","css/normalize.css","css/projects_each_project.css","images/2022_IIBA_Longlist.png","images/2023_IIBA_Longlist.png","images/2024_IIBA_Longlist.png","images/anneso_photo.png","images/construction.jpg","images/favicon/android-chrome-192x192.png","images/favicon/android-chrome-512x512.png","images/favicon/apple-touch-icon.png","images/favicon/favicon-16x16.png","images/favicon/favicon-32x32.png","images/favicon/favicon.ico","images/favicon/site.webmanifest","images/icon_arc-diagram.png","images/icon_data-analysis.png","images/icon_programming.png","images/logo-dark.svg","images/logo-pink.svg","images/logo.svg","images/portfolio_IMBD_best_rated_shows.gif","images/portfolio_IMBD_best_rated_shows.jpg","images/portfolio_buffy.png","images/portfolio_buffy_3.png","images/portfolio_buffy_sans.png","images/portfolio_cat.png","images/portfolio_eurovision_juries_2.png","images/portfolio_james_bond.png","images/portfolio_other_banner.png","images/portfolio_sustainability.png","images/portfolio_tedlasso.gif","images/portfolio_templates.gif","images/svg_analysis.svg","images/svg_programming.svg","images/svg_visualisation.svg","videos/email_video.mp4"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".jpg":"image/jpeg",".webmanifest":"application/manifest+json",".svg":"image/svg+xml",".gif":"image/gif",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.CJ8HJIHS.js",app:"_app/immutable/entry/app.B7yuaMhd.js",imports:["_app/immutable/entry/start.CJ8HJIHS.js","_app/immutable/chunks/DZx0IvwZ.js","_app/immutable/chunks/DVEFiCgx.js","_app/immutable/chunks/CWeFt6jb.js","_app/immutable/chunks/BoG_uaDg.js","_app/immutable/entry/app.B7yuaMhd.js","_app/immutable/chunks/DVEFiCgx.js","_app/immutable/chunks/Cxv9diCm.js","_app/immutable/chunks/Bz-gF83G.js","_app/immutable/chunks/BoG_uaDg.js","_app/immutable/chunks/BjCO2Rip.js","_app/immutable/chunks/9CErSKaS.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/about","/blog","/contact","/projects"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
