<script>
  import Gallery from "../components/Projects_gallery.svelte";
  import Navbar from "./../components/Navbar.svelte";
  import Footer from "./../components/Footer_classic.svelte";
</script>

<svelte:head>
  <title
    >Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website || Home</title
  >
  <meta
    name="description"
    content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website."
  />
</svelte:head>

<Navbar />

<!-- header -->
<header class="hero">
  <div class="section-center hero-center">
    <article class="hero-info">
      <div class="underline" />
      <h1>I'm Anne-Sophie</h1>
      <h3>
        a <span class="headline_visualisation">dataviz</span> practitioner
      </h3>
      <p>
        By day, I am a senior data analyst at LinkedIn. <br />
        By evening, I keep using data visualisation to overanalyse things I like.
        <br />
        This website is a collection of personal and professional projects.
      </p>
    </article>

    <article class="hero-img">
      <img
        src="images/anneso_photo.png"
        class="hero-photo home-photo"
        alt="Anne-Sophie Pereira De Sá smiling, white woman with dark curly hair"
      />
    </article>
    <!-- <a href="#featured" class="scroll-link"> -->
    <i class="hero-arrow fa-solid fa-arrow-down" />
    <!-- </a> -->
  </div>
</header>
<!-- end of header -->

<!-- intro -->
<section class="section intro">
  <div class="section-center intro-center">
    <!-- intro img -->
    <article class="intro-img">
      <img
        src="./images/portfolio_buffy_sans.png"
        class="intro-info home-photo"
        alt="snippet of a chart from my piece called 6 Reasons to(re)watch Buffy showing an arc diagram that displays all the payoffs and foreshadows in the TV series. The horizontal axis is the time (meaning the progression of the 144 episodes, 7 seasons) and each arc is a payoff (if above the line) or a foreshadow (if below) the horizontal line"
      />
    </article>
    <!-- intro info -->
    <article class="intro-info">
      <!-- section title -->
      <div class="section-title intro-title">
        <h4>Why does data visualisation matter to me?</h4>
        <div class="underline" />
      </div>
      <!-- end of section title -->

      <p class="hero-text">I believe you can use this medium to:</p>
      <ul class="ul-questions">
        <li>Challenge preconceived ideas</li>
        <li>Make complex questions easier to grasp</li>
        <li>Inspire moments of wonder, pause, and reflection</li>
        <li>Evoke lasting emotions through beauty</li>
      </ul>

      <br />
      <a href="/about" class="btn">more about me</a>
    </article>
  </div>
</section>
<!-- end of intro -->

<section class="bg-grey">
  <!-- section title -->
  <div class="section-title">
    <h2>What I can do</h2>
    <div class="underline"></div>
  </div>
  <!-- end of section title -->

  <div class="services-center section-center">
    <!-- single service -->
    <article class="service">
      <!-- <img class="service-icon" src="./images/svg_analysis.svg" alt="analysis icon" /> -->
      <svg
        class="service-icon"
        width="1200pt"
        height="1200pt"
        version="1.1"
        viewBox="0 0 1200 1200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="m108 265.2v772.8c0 13.199 10.801 24 24 24h832.8v36l103.2-60-103.2-60v36h-808.8v-748.8h36l-60-103.2-60 103.2z"
          />
          <path
            d="m297.6 918c13.199 0 24-10.801 24-24v-24h24c13.199 0 24-10.801 24-24s-10.801-24-24-24h-24v-24c0-13.199-10.801-24-24-24-13.199 0-24 10.801-24 24v24h-24c-13.199 0-24 10.801-24 24s10.801 24 24 24h24v24c0 13.199 10.797 24 24 24z"
          />
          <path
            d="m432 744c13.199 0 24-10.801 24-24v-24h24c13.199 0 24-10.801 24-24s-10.801-24-24-24h-24v-24c0-13.199-10.801-24-24-24s-24 10.801-24 24v24h-24c-13.199 0-24 10.801-24 24s10.801 24 24 24h24v24c0 13.199 10.801 24 24 24z"
          />
          <path
            d="m600 894c13.199 0 24-10.801 24-24v-24h24c13.199 0 24-10.801 24-24s-10.801-24-24-24h-24v-24c0-13.199-10.801-24-24-24s-24 10.801-24 24v24h-24c-13.199 0-24 10.801-24 24s10.801 24 24 24h24v24c0 13.199 10.801 24 24 24z"
          />
          <path
            d="m696 610.8c13.199 0 24-10.801 24-24v-24h24c13.199 0 24-10.801 24-24s-10.801-24-24-24h-24v-24c0-13.199-10.801-24-24-24s-24 10.801-24 24v24h-24c-13.199 0-24 10.801-24 24s10.801 24 24 24h24v24c0 13.199 10.801 24 24 24z"
          />
          <path
            d="m855.6 744c13.199 0 24-10.801 24-24v-24h24c13.199 0 24-10.801 24-24s-10.801-24-24-24h-24v-24c0-13.199-10.801-24-24-24-13.199 0-24 10.801-24 24v24h-24c-13.199 0-24 10.801-24 24s10.801 24 24 24h24v24c0 13.199 10.797 24 24 24z"
          />
          <path
            d="m951.6 492c13.199 0 24-10.801 24-24v-24h24c13.199 0 24-10.801 24-24s-10.801-24-24-24h-24v-24c0-13.199-10.801-24-24-24-13.199 0-24 10.801-24 24v24h-24c-13.199 0-24 10.801-24 24s10.801 24 24 24h24v24c0 13.199 10.797 24 24 24z"
          />
        </g>
      </svg>
      <h4>Data analysis</h4>
      <div class="underline"></div>
      <p>
        A thorough investigator, I keep pushing for the 'so what?'.
        <br /><br />
        I can deep dive into quantitative, qualitative, large or unstructured datasets.
      </p>
    </article>
    <!-- end of single service -->

    <!-- single service -->
    <article class="service">
      <!-- <img class="service-icon" src="./images/svg_visualisation.svg" alt="data visusalisation icon" /> -->
      <svg
        class="service-icon"
        width="1115"
        height="572"
        viewBox="0 0 1115 572"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M86.2801 528.853C86.2801 552.52 67.0921 571.708 43.4201 571.708C19.7534 571.708 0.56543 552.52 0.56543 528.853C0.56543 505.181 19.7534 485.993 43.4201 485.993C67.0921 485.993 86.2801 505.181 86.2801 528.853Z"
        />
        <path
          d="M257.72 528.853C257.72 552.52 238.532 571.708 214.865 571.708C191.193 571.708 172.005 552.52 172.005 528.853C172.005 505.181 191.193 485.993 214.865 485.993C238.532 485.993 257.72 505.181 257.72 528.853Z"
        />
        <path
          d="M429.147 528.853C429.147 552.52 409.959 571.708 386.292 571.708C362.62 571.708 343.432 552.52 343.432 528.853C343.432 505.181 362.62 485.993 386.292 485.993C409.959 485.993 429.147 505.181 429.147 528.853Z"
        />
        <path
          d="M600.574 528.853C600.574 552.52 581.386 571.708 557.714 571.708C534.047 571.708 514.859 552.52 514.859 528.853C514.859 505.181 534.047 485.993 557.714 485.993C581.386 485.993 600.574 505.181 600.574 528.853Z"
        />
        <path
          d="M772 528.853C772 552.52 752.812 571.708 729.14 571.708C705.473 571.708 686.285 552.52 686.285 528.853C686.285 505.181 705.473 485.993 729.14 485.993C752.812 485.993 772 505.181 772 528.853Z"
        />
        <path
          d="M943.427 528.853C943.427 552.52 924.239 571.708 900.572 571.708C876.9 571.708 857.712 552.52 857.712 528.853C857.712 505.181 876.9 485.993 900.572 485.993C924.239 485.993 943.427 505.181 943.427 528.853Z"
        />
        <path
          d="M1114.8 528.853C1114.8 552.52 1095.61 571.708 1071.94 571.708C1048.27 571.708 1029.08 552.52 1029.08 528.853C1029.08 505.181 1048.27 485.993 1071.94 485.993C1095.61 485.993 1114.8 505.181 1114.8 528.853Z"
        />
        <path
          d="M1072 486C1076.04 486.057 1080.05 486.693 1083.91 487.885C1073.84 355.281 1014.07 231.365 916.539 140.952C819.017 50.5401 690.939 0.298798 557.952 0.285465C424.968 0.26984 296.885 50.4828 199.338 140.872C101.797 231.263 41.9918 355.165 31.8984 487.765C44.0026 484.109 57.1171 486.187 67.4971 493.411C75.7575 478.781 88.9505 467.573 104.716 461.775C120.481 455.978 137.798 455.978 153.565 461.775C169.33 467.572 182.524 478.781 190.784 493.411C197.07 489.088 204.414 486.557 212.029 486.083C219.644 485.609 227.242 487.208 234.018 490.713C243.133 452.948 266.06 419.964 298.273 398.255C330.492 376.541 369.674 367.681 408.096 373.411C390.517 409.405 379.132 448.099 374.408 487.875C383.804 484.932 393.944 485.463 402.976 489.375C407.679 451.266 419.044 414.287 436.555 380.109C487.033 397.412 525.32 439.099 538.268 490.869C547.508 485.859 558.346 484.661 568.461 487.526C558.466 422.536 525.211 363.386 474.873 321.072C522.285 262.906 588.207 222.75 661.647 207.302C735.084 191.859 811.593 202.057 878.42 236.198C945.248 270.334 998.347 326.354 1028.87 394.904C997.212 364.446 955.759 346.222 911.904 343.492C868.055 340.763 824.659 353.706 789.467 380.008C754.273 406.311 729.571 444.263 719.769 487.091C731.306 484.404 743.447 486.695 753.217 493.404C761.478 478.773 774.671 467.565 790.436 461.768C806.201 455.971 823.515 455.971 839.28 461.768C855.045 467.565 868.239 478.773 876.499 493.404C883.592 488.565 891.983 485.982 900.572 485.992C902.077 486.06 903.582 486.216 905.072 486.445C897.046 469.279 884.301 454.743 868.327 444.544C852.353 434.346 833.805 428.904 814.857 428.851C799.956 428.929 785.269 432.377 771.888 438.939C794.935 405.772 829.909 382.794 869.497 374.803C909.085 366.808 950.232 374.423 984.347 396.048C1018.46 417.674 1042.89 451.642 1052.55 490.855C1058.55 487.704 1065.22 486.037 1072 485.991L1072 486ZM422.48 346.747C378.054 337.861 331.912 345.554 292.778 368.377C253.638 391.195 224.215 427.565 210.07 470.607C194.898 449.263 171.903 434.779 146.1 430.315C120.294 425.846 93.7723 431.763 72.3083 446.763C88.887 400.367 119.22 360.127 159.256 331.413C199.292 302.695 247.131 286.867 296.403 286.039C345.663 285.205 394.012 299.413 434.99 326.763C430.537 333.226 426.516 339.987 422.484 346.747H422.48ZM486.12 372.517C475.032 365.429 463.214 359.549 450.875 354.965C453.162 351.325 455.281 347.575 457.703 344.028C467.943 352.731 477.45 362.257 486.12 372.517ZM729.139 171.709C676.051 171.715 623.628 183.574 575.712 206.428C527.791 229.283 485.576 262.553 452.16 303.803C395.264 265.371 325.89 249.996 258.094 260.792C190.291 271.589 129.12 307.751 86.9736 361.948C130.37 238.984 220.151 137.881 337.12 80.2547C454.094 22.6293 588.974 13.052 712.907 53.5773C836.85 94.104 940.014 181.509 1000.35 297.111C966.915 257.813 925.347 226.251 878.519 204.6C831.691 182.949 780.722 171.725 729.132 171.709H729.139Z"
        />
      </svg>
      <h4>Data Visualisation</h4>
      <div class="underline"></div>
      <p>
        Since 2024, I have started working with D3, Svelte, and Layercake.
        <br /> <br />
        Prior to that, in 2021, I qualified for the Top 10 of Tableau's annual competition
        Ironviz. Three of my vizzes also appeared as a 'Viz of the Day' on Tableau's
        Public Gallery.
      </p>
    </article>
    <!-- end of single service -->

    <!-- single service -->
    <article class="service">
      <!-- <img class="service-icon" src="./images/svg_programming.svg" alt="programming icon" /> -->
      <svg
        class="service-icon"
        width="1200pt"
        height="1200pt"
        version="1.1"
        viewBox="0 0 1200 1200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="m1097.2 30h-994.47c-40.125 0-72.766 32.641-72.766 72.766v994.47c0 40.125 32.641 72.766 72.766 72.766h994.47c40.125 0 72.766-32.641 72.766-72.766v-994.47c0-40.125-32.641-72.766-72.766-72.766zm24.254 1067.2c0 13.371-10.879 24.254-24.254 24.254h-994.47c-13.379 0-24.254-10.883-24.254-24.254v-686.53h1043zm0-735.04h-1043v-259.43c0-13.371 10.879-24.254 24.254-24.254h994.47c13.379 0 24.254 10.883 24.254 24.254z"
          />
          <path
            d="m416.75 973.07c4.7383 4.7383 10.941 7.1055 17.148 7.1055 6.207 0 12.418-2.3672 17.148-7.1055 9.4766-9.4766 9.4766-24.824 0-34.297l-172.66-172.68 172.66-172.66c9.4766-9.4766 9.4766-24.824 0-34.297-9.4766-9.4766-24.836-9.4766-34.297 0l-189.82 189.81c-4.5469 4.5469-7.1055 10.719-7.1055 17.148 0 6.4297 2.5586 12.602 7.1055 17.148z"
          />
          <path
            d="m748.95 973.07c4.7383 4.7383 10.941 7.1055 17.148 7.1055 6.207 0 12.418-2.3672 17.148-7.1055l189.82-189.83c4.5469-4.5469 7.1055-10.719 7.1055-17.148 0-6.4297-2.5586-12.602-7.1055-17.148l-189.82-189.81c-9.4766-9.4766-24.836-9.4766-34.297 0-9.4766 9.4766-9.4766 24.824 0 34.297l172.66 172.66-172.66 172.68c-9.4766 9.4727-9.4766 24.824 0 34.297z"
          />
          <path
            d="m267.81 220.35c0 26.211-21.246 47.457-47.457 47.457-26.211 0-47.457-21.246-47.457-47.457 0-26.211 21.246-47.457 47.457-47.457 26.211 0 47.457 21.246 47.457 47.457"
          />
          <path
            d="m457.63 220.35c0 26.211-21.246 47.457-47.457 47.457-26.211 0-47.457-21.246-47.457-47.457 0-26.211 21.246-47.457 47.457-47.457 26.211 0 47.457 21.246 47.457 47.457"
          />
          <path
            d="m647.46 220.35c0 26.211-21.246 47.457-47.457 47.457s-47.457-21.246-47.457-47.457c0-26.211 21.246-47.457 47.457-47.457s47.457 21.246 47.457 47.457"
          />
        </g>
      </svg>
      <h4>Automation and programming</h4>
      <div class="underline"></div>
      <p>
        I'm used to webscraping techniques to extract data (via Webscraper.io,
        Google Sheets or Beautiful Soup) and use advanced SQL for my main job.
        <br /><br />
        I have created this website with HTML, CSS, Javascript and Svelte Kit.
      </p>
    </article>
    <!-- end of single service -->
  </div>
</section>
<!-- projects -->
<Gallery />

<!-- connect -->
<section class="connect">
  <!-- note: I removed controls because I dont want them to be displayed -->
  <video
    autoplay
    muted
    loop
    class="video-container"
    poster="./images/portfolio_other_banner.png"
  >
    <source src="./videos/email_video.mp4" type="video/mp4" />
    Sorry, your browser does not support embedded videos.
  </video>

  <div class="video-banner">
    <!-- section title -->
    <div class="section-title">
      <h2>Let's get in touch</h2>
      <div class="underline" />
    </div>
    <!-- end of section title -->
    <p class="video-text">
      If you love data visualisation as much as I do, reach out!
    </p>
    <a href="/contact" class="btn"> contact me </a>
  </div>
</section>

<!-- end of connect -->

<!-- blog -->
<!-- end of blog -->
<Footer />

<style>
  /*
=============== 
Hero section
===============
*/

  .headline_visualisation {
    color: var(--clr-primary-5);
  }

  /* underline added to globals */
  .hero .underline {
    margin-bottom: 0;
    margin-left: 0;
  }

  .hero-img {
    display: none;
    -webkit-animation: slidefromRight 3s ease-in-out 1;
    animation: slidefromRight 3s ease-in-out 1;
  }

  .hero-center {
    min-height: calc(100vh - 5rem);
    display: grid;
    place-items: center;
  }

  .hero-info {
    color: var(--clr-grey-5);
    -webkit-animation: slidefromLeft 3s ease-in-out 1;
    animation: slidefromLeft 3s ease-in-out 1;
  }

  .hero-text {
    margin-top: 1.25rem;
    justify-items: start;
  }

  ul.ul-questions li::before {
    content: "●";
    color: var(--clr-primary-5);
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  /* mobile responsiveness */
  @media screen and (min-width: 800px) {
    .hero-img {
      display: block;
      position: relative;
    }
    .hero-center {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "a b"
        "c c";
    }

    .hero-info {
      grid-area: a;
    }

    .hero-img {
      grid-area: b;
    }

    .hero-arrow {
      grid-area: c;
    }

    /* home-photo added to globals */

    .hero-img::before,
    .intro-img::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.25rem solid var(--clr-primary-5);
      top: 1rem;
      right: -1rem;
      border-radius: var(--radius);
    }
  }

  @media screen and (min-width: 992px) {
    .hero-text {
      padding-right: 0;
    }
  }
  /*
=============== 
intro section
===============
*/
  /* section-title added to globals */

  .intro-title {
    text-align: left;
    margin-bottom: 2rem;
  }
  .intro-title .underline {
    margin-left: 0;
  }

  .intro-center {
    display: grid;
    gap: 3rem 2rem;
    place-items: center;
  }

  .intro-img {
    display: block;
    position: relative;
    /* justify-self: center; */
  }

  @media screen and (min-width: 800px) {
    .intro-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  .intro-img::before {
    right: 1rem;
  }

  .intro-info {
    align-self: center;
  }

  /*

 /*
=============== 
Services (in About page)
===============
*/
  /* small screen layout setup */
  /* bg-grey in globals */

  .bg-grey {
    background-color: var(--clr-grey-11);
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-bottom: 5rem;
  }

  .service {
    background: var(--clr-white);
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }

  .service-icon {
    height: 4rem;
    width: 4rem;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    /* this svg property is not working */
    fill: #e29da8;
  }

  .service .underline {
    width: 3rem;
    height: 0.12rem;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }

  .service p {
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }

  .service:hover {
    background: var(--clr-primary-3);
    color: var(--clr-white);
  }

  .service:hover p {
    color: var(--clr-white);
  }

  .service:hover .underline {
    background: var(--clr-white);
  }

  .service:hover .service-icon {
    fill: var(--clr-white);
  }

  @media screen and (min-width: 676px) {
    .services-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .services-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  /*
=============== 
Connect section 
===============
*/
  .connect {
    min-height: 35vh;
    position: relative;
    padding: 10rem 0 5rem 0;
    margin: 5rem 0 0 0;
    display: grid;
    place-items: center;
  }

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: -2;
  }

  .connect::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--clr-grey-11);
    opacity: 0.7;
    z-index: -1;
  }

  .video-banner .section-title {
    margin-bottom: 2rem;
  }

  .video-text {
    max-width: 30rem;
  }
  .video-banner {
    background-color: var(--clr-primary-8);
    padding: 3rem 5rem 7rem 5rem;
    text-align: center;
    /* I used https://bennettfeely.com/clippy/ for this shape */
    -webkit-clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 84%,
      75% 84%,
      84% 99%,
      64% 84%,
      0 84%
    );
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 84%,
      75% 84%,
      84% 99%,
      64% 84%,
      0 84%
    );
  }
</style>
