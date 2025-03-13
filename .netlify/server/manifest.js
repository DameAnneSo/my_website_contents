export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","css/global.css","css/normalize.css","css/projects_each_project.css","images/.DS_Store","images/2022_IIBA_Longlist.png","images/2023_IIBA_Longlist.png","images/2024_IIBA_Longlist.png","images/anneso_photo.png","images/construction.jpg","images/favicon/android-chrome-192x192.png","images/favicon/android-chrome-512x512.png","images/favicon/apple-touch-icon.png","images/favicon/favicon-16x16.png","images/favicon/favicon-32x32.png","images/favicon/favicon.ico","images/favicon/site.webmanifest","images/icon_arc-diagram.png","images/icon_data-analysis.png","images/icon_programming.png","images/logo-dark.svg","images/logo-pink.svg","images/logo.svg","images/portfolio_buffy.png","images/portfolio_buffy_3.png","images/portfolio_buffy_sans.png","images/portfolio_cat.png","images/portfolio_eurovision_juries_2.png","images/portfolio_james_bond.png","images/portfolio_other_banner.png","images/portfolio_sustainability.png","images/portfolio_tedlasso.gif","images/portfolio_templates.gif","images/svg_analysis.svg","images/svg_programming.svg","images/svg_visualisation.svg","videos/email_video.mp4"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".jpg":"image/jpeg",".webmanifest":"application/manifest+json",".svg":"image/svg+xml",".gif":"image/gif",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.CX-cIDcW.js","app":"_app/immutable/entry/app.BKFrRrzQ.js","imports":["_app/immutable/entry/start.CX-cIDcW.js","_app/immutable/chunks/entry.xW-sMaPi.js","_app/immutable/chunks/runtime.D4PKpi0J.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.BKFrRrzQ.js","_app/immutable/chunks/runtime.D4PKpi0J.js","_app/immutable/chunks/render.CWW8gs9f.js","_app/immutable/chunks/events.ChL1b_ov.js","_app/immutable/chunks/svelte-head.Dx-84brM.js","_app/immutable/chunks/disclose-version.B9gPAMOj.js","_app/immutable/chunks/props.DWFojzxl.js","_app/immutable/chunks/store.DPmFcVIu.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
