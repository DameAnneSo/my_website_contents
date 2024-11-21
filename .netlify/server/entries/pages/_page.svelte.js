import { Y as head } from "../../chunks/index.js";
import { P as Projects_gallery } from "../../chunks/Projects_gallery.js";
import { N as Navbar, F as Footer_classic } from "../../chunks/Footer_classic.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website || Home</title>`;
    $$payload2.out += `<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website.">`;
  });
  Navbar($$payload);
  $$payload.out += `<!----> <header class="hero svelte-574nzp"><div class="section-center hero-center svelte-574nzp"><article class="hero-info svelte-574nzp"><div class="underline svelte-574nzp"></div> <h1>I'm Anne-Sophie</h1> <h3>a <span class="headline_visualisation svelte-574nzp">dataviz</span> practitioner</h3></article> <article class="hero-img svelte-574nzp"><img src="images/anneso_photo.png" class="hero-photo home-photo" alt="Anne-Sophie Pereira De Sá smiling, white woman with dark curly hair"></article> <i class="hero-arrow fa-solid fa-arrow-down svelte-574nzp"></i></div></header>  <section class="section intro"><div class="section-center intro-center svelte-574nzp"><article class="intro-img svelte-574nzp"><img src="./images/portfolio_buffy_sans.png" class="intro-info home-photo svelte-574nzp" alt="snippet of a chart from my piece called 6 Reasons to(re)watch Buffy showing an arc diagram that displays all the payoffs and foreshadows in the TV series. The horizontal axis is the time (meaning the progression of the 144 episodes, 7 seasons) and each arc is a payoff (if above the line) or a foreshadow (if below) the horizontal line"></article> <article class="intro-info svelte-574nzp"><div class="section-title intro-title svelte-574nzp"><h2>Quantifying qualitative questions</h2> <div class="underline svelte-574nzp"></div></div> <p class="hero-text svelte-574nzp">Some of the curious questions I have explored through the medium of data visualisation:</p> <ul class="ul-questions svelte-574nzp"><li class="svelte-574nzp">What's the best recipe to win at Eurovision?</li> <li class="svelte-574nzp">Are IMDB and Rotten Tomatoes ratings similar?</li> <li class="svelte-574nzp">What makes the musical Hamilton, the TV series Buffy, and the board game Seven Wonders so great?</li></ul> <br> <a href="/about" class="btn">more about me</a></article></div></section>  `;
  Projects_gallery($$payload);
  $$payload.out += `<!----> <section class="connect svelte-574nzp"><video autoplay muted loop class="video-container svelte-574nzp" poster="./images/portfolio_other_banner.png"><source src="./videos/email_video.mp4" type="video/mp4"> Sorry, your browser does not support embedded videos.</video> <div class="video-banner svelte-574nzp"><div class="section-title svelte-574nzp"><h2>Let's get in touch</h2> <div class="underline"></div></div> <p class="video-text svelte-574nzp">If you love data visualisation as much as I do, reach out!</p> <a href="/contact" class="btn">contact me</a></div></section>  `;
  Footer_classic($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
