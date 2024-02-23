import { r as redirect } from "../../../../chunks/index.js";
const data = [
  {
    index: "1",
    title: "Ted Lasso's pop culture references",
    blurb: "tedlasso_viz",
    description: "A character study of Ted Lasso by the 200 pop culture references he drops in Seasons 1 and 2: what do they reveal about his upbringing, taste and relationship with others? || Curious Data website",
    url: "https://public.tableau.com/views/TedLassoPopCultureReferences/TedLassoReferences",
    mobile_width: "375",
    mobile_height: "3877",
    desktop_width: "1366",
    desktop_height_modified: "795",
    color: "#003E90",
    mobile_height_native: "3850",
    desktop_height_native: "768",
    background_gradient: ""
  },
  {
    index: "2",
    title: "Depeche Mode: an exploration of my devotion",
    blurb: "depechemode_viz",
    description: "Visualisation of the band's songs and albums || Curious Data website",
    url: "https://public.tableau.com/views/DepecheModeanexplorationofmydevotion/DEPECHEMODE",
    mobile_width: "375",
    mobile_height: "7989",
    desktop_width: "1020",
    desktop_height_modified: "6727",
    color: "#100e0f",
    mobile_height_native: "7962",
    desktop_height_native: "6700",
    background_gradient: ""
  },
  {
    index: "3",
    title: "6 reasons to (re)watch Buffy the Vampire Slayer",
    blurb: "buffy_viz",
    description: "6 reasons to (re)watch Buffy the Vampire Slayer || Curious Data website",
    url: "https://public.tableau.com/views/Six_reasons_to_watch_Buffy/BUFFY",
    mobile_width: "375",
    mobile_height: "5187",
    desktop_width: "1020",
    desktop_height_modified: "5427",
    color: "#161A1D",
    mobile_height_native: "5160",
    desktop_height_native: "5400",
    background_gradient: ""
  },
  {
    index: "4",
    title: "Eurovision: does jury bias lead to victory?",
    blurb: "eurovisionjury_viz",
    description: "Does jury bias lead to victory in the Eurovision Song Contest? An analysis || Curious Data website",
    url: "https://public.tableau.com/views/TheEurovisionSongContestdoesjurybiasleadtovictory/EUROVISION",
    mobile_width: "375",
    mobile_height: "4307",
    desktop_width: "1020",
    desktop_height_modified: "5394",
    color: "#1b1134",
    mobile_height_native: "4280",
    desktop_height_native: "5367",
    background_gradient: ""
  },
  {
    index: "5",
    title: "Things I love about my cat",
    blurb: "cat_viz",
    description: "A love letter to my cat Depeche Meowed, my cat's list of grievances against her staff",
    url: "https://public.tableau.com/views/Things_I_love_about_my_cat/ThingsIloveaboutmycat",
    mobile_width: "375",
    mobile_height: "10027",
    desktop_width: "1366",
    desktop_height_modified: "795",
    color: "#f9fafb",
    mobile_height_native: "10000",
    desktop_height_native: "768",
    background_gradient: "linear-gradient(90deg, rgba(249,250,251,1) 50%, rgba(17,24,39,1) 50%)"
  }
];
function load({ params }) {
  const project = data.find((project2) => project2.blurb === params.slug);
  if (project) {
    return project;
  }
  throw redirect(302, "/projects");
}
export {
  load
};
