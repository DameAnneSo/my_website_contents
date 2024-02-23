<script>
  import Gallery from '../components/Projects_gallery.svelte'
  import Navbar from './../components/Navbar.svelte'
  import Footer from './../components/Footer_classic.svelte'
</script>

<svelte:head>
  <title>Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website || Home</title>
  <meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website." />
</svelte:head>

<Navbar />
<!-- header -->
<header class="hero">
  <div class="section-center hero-center">
    <article class="hero-info">
      <div class="underline" />
      <h1>I'm Anne-Sophie</h1>
      <h3>a <span class="headline_visualisation">data viz</span> practitioner</h3>
    </article>
    <article class="hero-img">
      <img src="images/anneso_photo.png" class="hero-photo home-photo" alt="Anne-Sophie Pereira De Sá smiling, white woman with dark curly hair" />
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
        src="./images/portfolio_buffy.png"
        class="intro-info home-photo"
        alt="snippet of a chart from my piece called 6 Reasons to(re)watch Buffy showing an arc diagram that displays all the payoffs and foreshadows in the TV series. The horizontal axis is the time (meaning the progression of the 144 episodes, 7 seasons) and each arc is a payoff (if above the line) or a foreshadow (if below) the horizontal line" />
    </article>
    <!-- intro info -->
    <article class="intro-info">
      <!-- section title -->
      <div class="section-title intro-title">
        <h2>Why Curious Data?</h2>
        <div class="underline" />
      </div>
      <!-- end of section title -->

      <p class="hero-text">
        Because the web domain Data Curious was already taken! And because my head is full of serious data questions on various topics.

        <br /> <br />
        Some of the questions I have explored through the medium of datavisualisation:
      </p>
      <ul class="ul-questions">
        <li>What's the best recipe to win at Eurovision?</li>
        <li>What companies need to know about sustainability conversations before posting on LinkedIn?</li>
        <li>What makes the musical Hamilton, the TV series Buffy, and the board game Seven Wonders so great?</li>
      </ul>

      <br />
      <a href="/about" class="btn">more about me</a>
    </article>
  </div>
</section>
<!-- end of intro -->

<!-- projects -->
<Gallery />

<!-- connect -->
<section class="connect">
  <!-- note: I removed controls because I dont want them to be displayed -->
  <video autoplay muted loop class="video-container" poster="./images/portfolio_other_banner.png">
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
    <p class="video-text">If you love data visualisation as much as I do, reach out!</p>
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
    content: '●';
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
        'a b'
        'c c';
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
      content: '';
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
    content: '';
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
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 84%, 75% 84%, 84% 99%, 64% 84%, 0 84%);
    clip-path: polygon(0% 0%, 100% 0%, 100% 84%, 75% 84%, 84% 99%, 64% 84%, 0 84%);
  }
</style>
