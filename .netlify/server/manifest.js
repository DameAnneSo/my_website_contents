export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","css/global.css","css/normalize.css","css/projects_each_project.css","images/.DS_Store","images/2022 IIB Awards Badge_Longlist (dark).png","images/2022 IIB Awards Badge_Longlist.png","images/2023 IIB Awards Badge_Longlist (dark).png","images/2023 IIB Awards Badge_Longlist.png","images/anneso_photo.png","images/anneso_photo_circle.png","images/construction.jpg","images/favicon/.DS_Store","images/favicon/android-chrome-192x192.png","images/favicon/android-chrome-512x512.png","images/favicon/apple-touch-icon.png","images/favicon/favicon-16x16.png","images/favicon/favicon-32x32.png","images/favicon/favicon.ico","images/favicon/site.webmanifest","images/icon_arc-diagram.png","images/icon_data-analysis.png","images/icon_programming.png","images/logo-dark.svg","images/logo-pink.svg","images/logo.svg","images/portfolio_7wonders.png","images/portfolio_7wonders_2.png","images/portfolio_7wonders_3.png","images/portfolio_7wonders_4.png","images/portfolio_DVS_member.png","images/portfolio_buffy.png","images/portfolio_buffy_2.png","images/portfolio_buffy_3.png","images/portfolio_cat.gif","images/portfolio_cat.png","images/portfolio_depechemode.png","images/portfolio_depechemode_2.png","images/portfolio_depechemode_3.png","images/portfolio_depechemode_4.png","images/portfolio_dvs_tools.gif","images/portfolio_dvs_tools.png","images/portfolio_eurovision_juries.gif","images/portfolio_eurovision_juries.png","images/portfolio_eurovision_juries_2.png","images/portfolio_eurovision_patterns.gif","images/portfolio_eurovision_patterns.png","images/portfolio_eurovision_patterns_2.png","images/portfolio_eurovision_patterns_3.png","images/portfolio_eurovision_patterns_4.png","images/portfolio_geocaching_2.png","images/portfolio_geocaching_whole.png","images/portfolio_hamilton.gif","images/portfolio_hamilton.png","images/portfolio_hamilton_1.png","images/portfolio_hamilton_2.png","images/portfolio_mandalorian.png","images/portfolio_other_banner.png","images/portfolio_sustainability.png","images/portfolio_sustainability_2.png","images/portfolio_tedlasso.gif","images/portfolio_tedlasso.png","images/portfolio_tedlasso_1.png","images/portfolio_tedlasso_2.png","images/project-4.jpeg","images/svg_analysis.svg","images/svg_programming.svg","images/svg_visualisation.svg","videos/email_video.mp4"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".jpg":"image/jpeg",".webmanifest":"application/manifest+json",".svg":"image/svg+xml",".gif":"image/gif",".jpeg":"image/jpeg",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.icT0MkB5.js","app":"_app/immutable/entry/app.JUo5-78O.js","imports":["_app/immutable/entry/start.icT0MkB5.js","_app/immutable/chunks/entry.ikZ0m1Uv.js","_app/immutable/chunks/scheduler.vu5OxXgN.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.JUo5-78O.js","_app/immutable/chunks/scheduler.vu5OxXgN.js","_app/immutable/chunks/index.vKMwrew2.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
