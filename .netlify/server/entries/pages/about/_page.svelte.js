import { Y as head } from "../../../chunks/index.js";
import { N as Navbar, F as Footer_classic } from "../../../chunks/Footer_classic.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website ||
    About me</title>`;
    $$payload2.out += `<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page is about my skills and career.">`;
  });
  Navbar($$payload);
  $$payload.out += `<!---->  <section class="section timeline svelte-1is75r5"><div class="section-title"><h2>My journey so far</h2> <div class="underline"></div> <div class="section-center timeline-center svelte-1is75r5"><article class="timeline-item svelte-1is75r5"><h5 class="svelte-1is75r5">2001-2008</h5> <h4>Growing an interest in News and the Web</h4> <p class="svelte-1is75r5">In Paris, I studied Humanities with a Master’s degree in History and
          another one in International Relations. <span class="number svelte-1is75r5">1</span></p></article>  <article class="timeline-item svelte-1is75r5"><h5 class="svelte-1is75r5">2008-2018</h5> <h4>Early career in Social Media analysis</h4> <p class="svelte-1is75r5">In multiple roles on the agency (Publicis) and software provider
          (Meltwater) side, I conducted analyses based on social media data, aka
          social listening. <br><br> Passionate about social justice, I also volunteered to help several NGOs
          make the most of their website and social media strategy. <br><br> In parallel, I self trained in multiple areas: data analysis (SQL, statistics,
          web scraping) and data visualisation (Tableau, Flourish).</p> <span class="number svelte-1is75r5">2</span></article>  <article class="timeline-item svelte-1is75r5"><h5 class="svelte-1is75r5">2018-now</h5> <h4>Data Analysis at LinkedIn</h4> <p class="svelte-1is75r5">By day, I leverage LinkedIn's data to develop insights to help some of
          our biggest EMEA tech clients make better marketing decisions. <br> <br> I love to educate and upskill people about data visualisation; I have hosted
          a monthly workshop for our team of 90 data analysts and inspiring sessions
          for a broader internal audience of business users. <span class="number svelte-1is75r5">3</span></p></article>  <article class="timeline-item svelte-1is75r5"><h5 class="svelte-1is75r5">Since 2020</h5> <h4>a focus on Dataviz</h4> <p class="svelte-1is75r5">I keep honing my skills via projects at LinkedIn and personal ones I
          am sharing here. <br> Long time Tableau user, I have just published my first projects with D3,
          Svelte,and Layercake in 2024. Check out my projects page!</p> <br><a href="/projects" class="btn">my portfolio</a> <span class="number svelte-1is75r5">4</span></article></div></div></section>  `;
  Footer_classic($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
