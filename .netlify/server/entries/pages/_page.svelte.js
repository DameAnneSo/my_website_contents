import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { P as Projects_gallery } from "../../chunks/Projects_gallery.js";
import { N as Navbar, F as Footer_classic } from "../../chunks/Footer_classic.js";
const css = {
  code: ".headline_visualisation.svelte-g52409.svelte-g52409{color:var(--clr-primary-5)}.hero.svelte-g52409 .underline.svelte-g52409{margin-bottom:0;margin-left:0}.hero-img.svelte-g52409.svelte-g52409{display:none;-webkit-animation:slidefromRight 3s ease-in-out 1;animation:slidefromRight 3s ease-in-out 1}.hero-center.svelte-g52409.svelte-g52409{min-height:calc(100vh - 5rem);display:grid;place-items:center}.hero-info.svelte-g52409.svelte-g52409{color:var(--clr-grey-5);-webkit-animation:slidefromLeft 3s ease-in-out 1;animation:slidefromLeft 3s ease-in-out 1}.hero-text.svelte-g52409.svelte-g52409{margin-top:1.25rem;justify-items:start}ul.ul-questions.svelte-g52409 li.svelte-g52409::before{content:'●';color:var(--clr-primary-5);display:inline-block;width:1em;margin-left:-1em}@media screen and (min-width: 800px){.hero-img.svelte-g52409.svelte-g52409{display:block;position:relative}.hero-center.svelte-g52409.svelte-g52409{grid-template-columns:1fr 1fr;grid-template-areas:'a b'\n        'c c'}.hero-info.svelte-g52409.svelte-g52409{grid-area:a}.hero-img.svelte-g52409.svelte-g52409{grid-area:b}.hero-arrow.svelte-g52409.svelte-g52409{grid-area:c}.hero-img.svelte-g52409.svelte-g52409::before,.intro-img.svelte-g52409.svelte-g52409::before{content:'';position:absolute;width:100%;height:100%;border:0.25rem solid var(--clr-primary-5);top:1rem;right:-1rem;border-radius:var(--radius)}}@media screen and (min-width: 992px){.hero-text.svelte-g52409.svelte-g52409{padding-right:0}}.intro-title.svelte-g52409.svelte-g52409{text-align:left;margin-bottom:2rem}.intro-title.svelte-g52409 .underline.svelte-g52409{margin-left:0}.intro-center.svelte-g52409.svelte-g52409{display:grid;gap:3rem 2rem;place-items:center}.intro-img.svelte-g52409.svelte-g52409{display:block;position:relative}@media screen and (min-width: 800px){.intro-center.svelte-g52409.svelte-g52409{grid-template-columns:1fr 1fr}}.intro-img.svelte-g52409.svelte-g52409::before{right:1rem}.intro-info.svelte-g52409.svelte-g52409{align-self:center}.connect.svelte-g52409.svelte-g52409{min-height:35vh;position:relative;padding:10rem 0 5rem 0;margin:5rem 0 0 0;display:grid;place-items:center}.video-container.svelte-g52409.svelte-g52409{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;z-index:-2}.connect.svelte-g52409.svelte-g52409::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--clr-grey-11);opacity:0.7;z-index:-1}.video-banner.svelte-g52409 .section-title.svelte-g52409{margin-bottom:2rem}.video-text.svelte-g52409.svelte-g52409{max-width:30rem}.video-banner.svelte-g52409.svelte-g52409{background-color:var(--clr-primary-8);padding:3rem 5rem 7rem 5rem;text-align:center;-webkit-clip-path:polygon(0% 0%, 100% 0%, 100% 84%, 75% 84%, 84% 99%, 64% 84%, 0 84%);clip-path:polygon(0% 0%, 100% 0%, 100% 84%, 75% 84%, 84% 99%, 64% 84%, 0 84%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1dyacah_START -->${$$result.title = `<title>Curious Data, Anne-Sophie Pereira De Sá&#39;s datavisualisation website || Home</title>`, ""}<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website."><!-- HEAD_svelte-1dyacah_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}  <header class="hero svelte-g52409" data-svelte-h="svelte-1ozllmi"><div class="section-center hero-center svelte-g52409"><article class="hero-info svelte-g52409"><div class="underline svelte-g52409"></div> <h1>I&#39;m Anne-Sophie</h1> <h3>a <span class="headline_visualisation svelte-g52409">data visualisation</span> practitioner</h3></article> <article class="hero-img svelte-g52409"><img src="images/anneso_photo.png" class="hero-photo home-photo" alt="Anne-Sophie Pereira De Sá smiling, white woman with dark curly hair"></article>  <i class="hero-arrow fa-solid fa-arrow-down svelte-g52409"></i> </div></header>   <section class="section intro" data-svelte-h="svelte-1nyhdce"><div class="section-center intro-center svelte-g52409"> <article class="intro-img svelte-g52409"><img src="./images/portfolio_buffy.png" class="intro-info home-photo svelte-g52409" alt="snippet of a chart from my piece called 6 Reasons to(re)watch Buffy showing an arc diagram that displays all the payoffs and foreshadows in the TV series. The horizontal axis is the time (meaning the progression of the 144 episodes, 7 seasons) and each arc is a payoff (if above the line) or a foreshadow (if below) the horizontal line"></article>  <article class="intro-info svelte-g52409"> <div class="section-title intro-title svelte-g52409"><h2>Why Curious Data?</h2> <div class="underline svelte-g52409"></div></div>  <p class="hero-text svelte-g52409">Because the web domain Data Curious was already taken! And because my head is full of serious data questions on various topics.

        <br> <br>
        Some of the questions I have explored through the medium of datavisualisation:</p> <ul class="ul-questions svelte-g52409"><li class="svelte-g52409">What&#39;s the best recipe to win at Eurovision?</li> <li class="svelte-g52409">What companies need to know about sustainability conversations before posting on LinkedIn?</li> <li class="svelte-g52409">What makes the musical Hamilton, the TV series Buffy, and the board game Seven Wonders so great?</li></ul> <br> <a href="/about" class="btn">more about me</a></article></div></section>   ${validate_component(Projects_gallery, "Gallery").$$render($$result, {}, {}, {})}  <section class="connect svelte-g52409" data-svelte-h="svelte-1oce6o0"> <video autoplay muted loop class="video-container svelte-g52409" poster="./images/portfolio_other_banner.png"><source src="./videos/email_video.mp4" type="video/mp4">
    Sorry, your browser does not support embedded videos.</video> <div class="video-banner svelte-g52409"> <div class="section-title svelte-g52409"><h2>Let&#39;s get in touch</h2> <div class="underline"></div></div>  <p class="video-text svelte-g52409">If you love data visualisation as much as I do, reach out!</p> <a href="/contact" class="btn">contact me</a></div></section>    ${validate_component(Footer_classic, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
