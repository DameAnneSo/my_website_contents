import { redirect } from '@sveltejs/kit';
import data from '../../../data/portfolio_pages_info.csv';


// /** @type {import('./$types').PageLoad} */
export function load({ params }) {
 const project = data.find(project => project.blurb === params.slug)
if (project) {
  return project
 }

 //else return to the main page projects
  throw redirect(302, '/projects');
}


