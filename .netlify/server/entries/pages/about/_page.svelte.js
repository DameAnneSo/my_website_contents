import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, F as Footer_classic } from "../../../chunks/Footer_classic.js";
const css = {
  code: ".timeline-center.svelte-1s9vfyy.svelte-1s9vfyy{width:80vw;max-width:40rem}.timeline-item.svelte-1s9vfyy.svelte-1s9vfyy{border-top:2px dashed var(--clr-primary-5);margin:0;padding:4rem 2rem;position:relative}.timeline.svelte-1s9vfyy p.svelte-1s9vfyy{margin-bottom:0;text-align:left}.timeline.svelte-1s9vfyy h5.svelte-1s9vfyy{margin-bottom:0.3rem}.timeline-item.svelte-1s9vfyy.svelte-1s9vfyy:nth-child(even){border-left:2px dashed var(--clr-primary-5);border-top-left-radius:2rem;border-bottom-left-radius:2rem;margin-right:2rem;padding-right:0}.timeline-item.svelte-1s9vfyy.svelte-1s9vfyy:nth-child(odd){border-right:2px dashed var(--clr-primary-5);border-top-right-radius:2rem;border-bottom-right-radius:2rem;margin-left:2rem;padding-left:0}.timeline-item.svelte-1s9vfyy.svelte-1s9vfyy:first-child{border-top:0;border-top-right-radius:0}.timeline-item.svelte-1s9vfyy.svelte-1s9vfyy:last-child{border-bottom-left-radius:0}.number.svelte-1s9vfyy.svelte-1s9vfyy{position:absolute;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);margin-bottom:0;background-color:var(--clr-primary-5);width:2rem;height:2rem;border-radius:50%;display:grid;place-items:center;font-weight:bold}.timeline-item.svelte-1s9vfyy:nth-child(even) .number.svelte-1s9vfyy{left:0}.timeline-item.svelte-1s9vfyy:nth-child(odd) .number.svelte-1s9vfyy{right:0;-webkit-transform:translate(50%, -50%);transform:translate(50%, -50%)}.bg-grey.svelte-1s9vfyy.svelte-1s9vfyy{background-color:var(--clr-grey-11)}.service.svelte-1s9vfyy.svelte-1s9vfyy{background:var(--clr-white);padding:3rem 1.5rem;margin-bottom:2rem;border-radius:var(--radius);text-align:center;-webkit-transition:var(--transition);transition:var(--transition)}.service-icon.svelte-1s9vfyy.svelte-1s9vfyy{height:4rem;width:4rem;margin:0 auto;margin-bottom:1.5rem;fill:#e29da8}.service.svelte-1s9vfyy .underline.svelte-1s9vfyy{width:3rem;height:0.12rem;-webkit-transition:var(--transition);transition:var(--transition)}.service.svelte-1s9vfyy p.svelte-1s9vfyy{-webkit-transition:var(--transition);transition:var(--transition)}.service.svelte-1s9vfyy.svelte-1s9vfyy:hover{background:var(--clr-primary-3);color:var(--clr-white)}.service.svelte-1s9vfyy:hover p.svelte-1s9vfyy{color:var(--clr-white)}.service.svelte-1s9vfyy:hover .underline.svelte-1s9vfyy{background:var(--clr-white)}.service.svelte-1s9vfyy:hover .service-icon.svelte-1s9vfyy{fill:var(--clr-white)}@media screen and (min-width: 676px){.services-center.svelte-1s9vfyy.svelte-1s9vfyy{display:grid;grid-template-columns:1fr 1fr;-webkit-column-gap:2rem;-moz-column-gap:2rem;column-gap:2rem}}@media screen and (min-width: 992px){.services-center.svelte-1s9vfyy.svelte-1s9vfyy{grid-template-columns:repeat(3, 1fr)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-31p2oy_START -->${$$result.title = `<title>Curious Data, Anne-Sophie Pereira De Sá&#39;s datavisualisation website ||
    About me</title>`, ""}<meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page is about my skills and career."><!-- HEAD_svelte-31p2oy_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}  <section class="section timeline svelte-1s9vfyy" data-svelte-h="svelte-90lu8r"> <div class="section-title"><h2>My journey so far</h2> <div class="underline"></div>  <div class="section-center timeline-center svelte-1s9vfyy"> <article class="timeline-item svelte-1s9vfyy"><h5 class="svelte-1s9vfyy">2001-2008</h5> <h4>Growing an interest in News and the Web</h4> <p class="svelte-1s9vfyy">I studied Humanities with a Master’s degree in History and one in
          International Relations in Paris.
          <br>
          During my studies, I ran a daily blog for three years and completed several
          internships, including one at the French Consulate of Sao Paulo where I
          got into following current events and the public opinion.
          <span class="number svelte-1s9vfyy">1</span></p></article>   <article class="timeline-item svelte-1s9vfyy"><h5 class="svelte-1s9vfyy">2008-2018</h5> <h4>Early career in Social Media analysis</h4> <p class="svelte-1s9vfyy">In multiple roles on the agency (Publicis) and software provider
          (Meltwater) side, I conducted analyses based on social media data, aka
          social listening.
          <br>
          Passionate about social justice, I also volunteered to help several NGOs
          make the most of their website and social media strategy.
          <br>
          In parallel, I self trained in multiple areas: data analysis (SQL, statistics,
          web scraping) and data visualisation.</p> <span class="number svelte-1s9vfyy">2</span></article>   <article class="timeline-item svelte-1s9vfyy"><h5 class="svelte-1s9vfyy">2018-now</h5> <h4>Data Analysis at LinkedIn</h4> <p class="svelte-1s9vfyy">By day, I leverage LinkedIn&#39;s data to develop insights to help some of
          our biggest EMEA tech clients make better marketing decisions.
          <br> <br>
          I love to educate and upskill people about data visualisation; I host a
          monthly workshop for our team of 90 data analysts, and inspiring sessions
          for a broader internal audience of business users.
          <span class="number svelte-1s9vfyy">3</span></p></article>   <article class="timeline-item svelte-1s9vfyy"><h5 class="svelte-1s9vfyy">Since 2020</h5> <h4>a focus on Dataviz</h4> <p class="svelte-1s9vfyy">I keep honing my skills via projects at LinkedIn and personal ones I
          am sharing here.
          <br>
          I am currently on a journey to learn D3 and Svelte, hence this website
          to hone my web development skills.</p> <br> <span class="number svelte-1s9vfyy">4</span></article> </div></div></section>   <section class="section bg-grey svelte-1s9vfyy" data-svelte-h="svelte-d07xb4"> <div class="section-title"><h2>What I can do</h2> <div class="underline"></div></div>  <div class="services-center section-center svelte-1s9vfyy"> <article class="service svelte-1s9vfyy"> <svg class="service-icon svelte-1s9vfyy" width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"><g><path d="m108 265.2v772.8c0 13.199 10.801 24 24 24h832.8v36l103.2-60-103.2-60v36h-808.8v-748.8h36l-60-103.2-60 103.2z"></path><path d="m297.6 918c13.199 0 24-10.801 24-24v-24h24c13.199 0 24-10.801 24-24s-10.801-24-24-24h-24v-24c0-13.199-10.801-24-24-24-13.199 0-24 10.801-24 24v24h-24c-13.199 0-24 10.801-24 24s10.801 24 24 24h24v24c0 13.199 10.797 24 24 24z"></path><path d="m432 744c13.199 0 24-10.801 24-24v-24h24c13.199 0 24-10.801 24-24s-10.801-24-24-24h-24v-24c0-13.199-10.801-24-24-24s-24 10.801-24 24v24h-24c-13.199 0-24 10.801-24 24s10.801 24 24 24h24v24c0 13.199 10.801 24 24 24z"></path><path d="m600 894c13.199 0 24-10.801 24-24v-24h24c13.199 0 24-10.801 24-24s-10.801-24-24-24h-24v-24c0-13.199-10.801-24-24-24s-24 10.801-24 24v24h-24c-13.199 0-24 10.801-24 24s10.801 24 24 24h24v24c0 13.199 10.801 24 24 24z"></path><path d="m696 610.8c13.199 0 24-10.801 24-24v-24h24c13.199 0 24-10.801 24-24s-10.801-24-24-24h-24v-24c0-13.199-10.801-24-24-24s-24 10.801-24 24v24h-24c-13.199 0-24 10.801-24 24s10.801 24 24 24h24v24c0 13.199 10.801 24 24 24z"></path><path d="m855.6 744c13.199 0 24-10.801 24-24v-24h24c13.199 0 24-10.801 24-24s-10.801-24-24-24h-24v-24c0-13.199-10.801-24-24-24-13.199 0-24 10.801-24 24v24h-24c-13.199 0-24 10.801-24 24s10.801 24 24 24h24v24c0 13.199 10.797 24 24 24z"></path><path d="m951.6 492c13.199 0 24-10.801 24-24v-24h24c13.199 0 24-10.801 24-24s-10.801-24-24-24h-24v-24c0-13.199-10.801-24-24-24-13.199 0-24 10.801-24 24v24h-24c-13.199 0-24 10.801-24 24s10.801 24 24 24h24v24c0 13.199 10.797 24 24 24z"></path></g></svg> <h4>Data analysis</h4> <div class="underline svelte-1s9vfyy"></div> <p class="svelte-1s9vfyy">A thorough investigator, I keep pushing for the so what and discard the
        information that is not compelling to my analysis.
        <br><br>
        I can deep dive into a wide variety of quantitative, qualitative, large or
        unstructured datasets.</p></article>   <article class="service svelte-1s9vfyy"> <svg class="service-icon svelte-1s9vfyy" width="1115" height="572" viewBox="0 0 1115 572" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M86.2801 528.853C86.2801 552.52 67.0921 571.708 43.4201 571.708C19.7534 571.708 0.56543 552.52 0.56543 528.853C0.56543 505.181 19.7534 485.993 43.4201 485.993C67.0921 485.993 86.2801 505.181 86.2801 528.853Z"></path><path d="M257.72 528.853C257.72 552.52 238.532 571.708 214.865 571.708C191.193 571.708 172.005 552.52 172.005 528.853C172.005 505.181 191.193 485.993 214.865 485.993C238.532 485.993 257.72 505.181 257.72 528.853Z"></path><path d="M429.147 528.853C429.147 552.52 409.959 571.708 386.292 571.708C362.62 571.708 343.432 552.52 343.432 528.853C343.432 505.181 362.62 485.993 386.292 485.993C409.959 485.993 429.147 505.181 429.147 528.853Z"></path><path d="M600.574 528.853C600.574 552.52 581.386 571.708 557.714 571.708C534.047 571.708 514.859 552.52 514.859 528.853C514.859 505.181 534.047 485.993 557.714 485.993C581.386 485.993 600.574 505.181 600.574 528.853Z"></path><path d="M772 528.853C772 552.52 752.812 571.708 729.14 571.708C705.473 571.708 686.285 552.52 686.285 528.853C686.285 505.181 705.473 485.993 729.14 485.993C752.812 485.993 772 505.181 772 528.853Z"></path><path d="M943.427 528.853C943.427 552.52 924.239 571.708 900.572 571.708C876.9 571.708 857.712 552.52 857.712 528.853C857.712 505.181 876.9 485.993 900.572 485.993C924.239 485.993 943.427 505.181 943.427 528.853Z"></path><path d="M1114.8 528.853C1114.8 552.52 1095.61 571.708 1071.94 571.708C1048.27 571.708 1029.08 552.52 1029.08 528.853C1029.08 505.181 1048.27 485.993 1071.94 485.993C1095.61 485.993 1114.8 505.181 1114.8 528.853Z"></path><path d="M1072 486C1076.04 486.057 1080.05 486.693 1083.91 487.885C1073.84 355.281 1014.07 231.365 916.539 140.952C819.017 50.5401 690.939 0.298798 557.952 0.285465C424.968 0.26984 296.885 50.4828 199.338 140.872C101.797 231.263 41.9918 355.165 31.8984 487.765C44.0026 484.109 57.1171 486.187 67.4971 493.411C75.7575 478.781 88.9505 467.573 104.716 461.775C120.481 455.978 137.798 455.978 153.565 461.775C169.33 467.572 182.524 478.781 190.784 493.411C197.07 489.088 204.414 486.557 212.029 486.083C219.644 485.609 227.242 487.208 234.018 490.713C243.133 452.948 266.06 419.964 298.273 398.255C330.492 376.541 369.674 367.681 408.096 373.411C390.517 409.405 379.132 448.099 374.408 487.875C383.804 484.932 393.944 485.463 402.976 489.375C407.679 451.266 419.044 414.287 436.555 380.109C487.033 397.412 525.32 439.099 538.268 490.869C547.508 485.859 558.346 484.661 568.461 487.526C558.466 422.536 525.211 363.386 474.873 321.072C522.285 262.906 588.207 222.75 661.647 207.302C735.084 191.859 811.593 202.057 878.42 236.198C945.248 270.334 998.347 326.354 1028.87 394.904C997.212 364.446 955.759 346.222 911.904 343.492C868.055 340.763 824.659 353.706 789.467 380.008C754.273 406.311 729.571 444.263 719.769 487.091C731.306 484.404 743.447 486.695 753.217 493.404C761.478 478.773 774.671 467.565 790.436 461.768C806.201 455.971 823.515 455.971 839.28 461.768C855.045 467.565 868.239 478.773 876.499 493.404C883.592 488.565 891.983 485.982 900.572 485.992C902.077 486.06 903.582 486.216 905.072 486.445C897.046 469.279 884.301 454.743 868.327 444.544C852.353 434.346 833.805 428.904 814.857 428.851C799.956 428.929 785.269 432.377 771.888 438.939C794.935 405.772 829.909 382.794 869.497 374.803C909.085 366.808 950.232 374.423 984.347 396.048C1018.46 417.674 1042.89 451.642 1052.55 490.855C1058.55 487.704 1065.22 486.037 1072 485.991L1072 486ZM422.48 346.747C378.054 337.861 331.912 345.554 292.778 368.377C253.638 391.195 224.215 427.565 210.07 470.607C194.898 449.263 171.903 434.779 146.1 430.315C120.294 425.846 93.7723 431.763 72.3083 446.763C88.887 400.367 119.22 360.127 159.256 331.413C199.292 302.695 247.131 286.867 296.403 286.039C345.663 285.205 394.012 299.413 434.99 326.763C430.537 333.226 426.516 339.987 422.484 346.747H422.48ZM486.12 372.517C475.032 365.429 463.214 359.549 450.875 354.965C453.162 351.325 455.281 347.575 457.703 344.028C467.943 352.731 477.45 362.257 486.12 372.517ZM729.139 171.709C676.051 171.715 623.628 183.574 575.712 206.428C527.791 229.283 485.576 262.553 452.16 303.803C395.264 265.371 325.89 249.996 258.094 260.792C190.291 271.589 129.12 307.751 86.9736 361.948C130.37 238.984 220.151 137.881 337.12 80.2547C454.094 22.6293 588.974 13.052 712.907 53.5773C836.85 94.104 940.014 181.509 1000.35 297.111C966.915 257.813 925.347 226.251 878.519 204.6C831.691 182.949 780.722 171.725 729.132 171.709H729.139Z"></path></svg> <h4>Data Visualisation</h4> <div class="underline svelte-1s9vfyy"></div> <p class="svelte-1s9vfyy">In 2021, I qualified for the Top 10 of Tableau&#39;s annual competition
        Ironviz.

        <br> <br>
        Three of my vizzes also appeared as a &#39;Viz of the Day&#39; on Tableau&#39;s Public
        Gallery.</p></article>   <article class="service svelte-1s9vfyy"> <svg class="service-icon svelte-1s9vfyy" width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"><g><path d="m1097.2 30h-994.47c-40.125 0-72.766 32.641-72.766 72.766v994.47c0 40.125 32.641 72.766 72.766 72.766h994.47c40.125 0 72.766-32.641 72.766-72.766v-994.47c0-40.125-32.641-72.766-72.766-72.766zm24.254 1067.2c0 13.371-10.879 24.254-24.254 24.254h-994.47c-13.379 0-24.254-10.883-24.254-24.254v-686.53h1043zm0-735.04h-1043v-259.43c0-13.371 10.879-24.254 24.254-24.254h994.47c13.379 0 24.254 10.883 24.254 24.254z"></path><path d="m416.75 973.07c4.7383 4.7383 10.941 7.1055 17.148 7.1055 6.207 0 12.418-2.3672 17.148-7.1055 9.4766-9.4766 9.4766-24.824 0-34.297l-172.66-172.68 172.66-172.66c9.4766-9.4766 9.4766-24.824 0-34.297-9.4766-9.4766-24.836-9.4766-34.297 0l-189.82 189.81c-4.5469 4.5469-7.1055 10.719-7.1055 17.148 0 6.4297 2.5586 12.602 7.1055 17.148z"></path><path d="m748.95 973.07c4.7383 4.7383 10.941 7.1055 17.148 7.1055 6.207 0 12.418-2.3672 17.148-7.1055l189.82-189.83c4.5469-4.5469 7.1055-10.719 7.1055-17.148 0-6.4297-2.5586-12.602-7.1055-17.148l-189.82-189.81c-9.4766-9.4766-24.836-9.4766-34.297 0-9.4766 9.4766-9.4766 24.824 0 34.297l172.66 172.66-172.66 172.68c-9.4766 9.4727-9.4766 24.824 0 34.297z"></path><path d="m267.81 220.35c0 26.211-21.246 47.457-47.457 47.457-26.211 0-47.457-21.246-47.457-47.457 0-26.211 21.246-47.457 47.457-47.457 26.211 0 47.457 21.246 47.457 47.457"></path><path d="m457.63 220.35c0 26.211-21.246 47.457-47.457 47.457-26.211 0-47.457-21.246-47.457-47.457 0-26.211 21.246-47.457 47.457-47.457 26.211 0 47.457 21.246 47.457 47.457"></path><path d="m647.46 220.35c0 26.211-21.246 47.457-47.457 47.457s-47.457-21.246-47.457-47.457c0-26.211 21.246-47.457 47.457-47.457s47.457 21.246 47.457 47.457"></path></g></svg> <h4>Automation and programming</h4> <div class="underline svelte-1s9vfyy"></div> <p class="svelte-1s9vfyy">I&#39;m used to webscraping techniques to extract data (via Webscraper.io,
        Google Sheets or Beautiful Soup) and use advanced SQL for my main job.
        <br><br>
        On my journey to learn D3 and Svelte, I have created this website with HTML,
        CSS, Javascript and Svelte.</p></article> </div></section>  ${validate_component(Footer_classic, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
