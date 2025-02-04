<script>
  import Navbar from "../../components/Navbar.svelte";
  import Footer from "../../components/Footer_classic.svelte";
</script>

<svelte:head>
  <title
    >Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website ||
    About me</title
  >
  <meta
    name="description"
    content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page is about my skills and career."
  />
</svelte:head>

<Navbar />

<!-- end of skills -->
<!-- timeline -->
<section class="section timeline">
  <!-- section title -->
  <div class="section-title">
    <h2>My journey so far</h2>
    <div class="underline"></div>
    <!-- end of section title -->
    <div class="section-center timeline-center">
      <!-- single timeline time -->
      <article class="timeline-item">
        <h5>2001-2008</h5>
        <h4>Growing an interest in News and the Web</h4>
        <p>
          In Paris, I studied Humanities with a Master’s degree in History and
          another one in International Relations.
          <!-- <br />
          During my studies, I ran a daily blog for three years and completed several
          internships, including one at the French Consulate of Sao Paulo where I
          got into following current events and the public opinion. -->
          <span class="number"> 1 </span>
        </p>
      </article>
      <!-- end single timeline time -->

      <!-- single timeline time -->
      <article class="timeline-item">
        <h5>2008-2018</h5>
        <h4>Early career in Social Media analysis</h4>
        <p>
          In multiple roles on the agency (Publicis) and software provider
          (Meltwater) side, I conducted analyses based on social media data, aka
          social listening.
          <br /><br />
          Passionate about social justice, I also volunteered to help several NGOs
          make the most of their website and social media strategy.
          <br /><br />
          In parallel, I self trained in multiple areas: data analysis (SQL, statistics,
          web scraping) and data visualisation (Tableau, Flourish).
        </p>
        <span class="number"> 2 </span>
      </article>
      <!-- end single timeline time -->

      <!-- single timeline time -->
      <article class="timeline-item">
        <h5>2018-now</h5>
        <h4>Data Analysis at LinkedIn</h4>

        <p>
          By day, I leverage LinkedIn's data to develop insights to help some of
          our biggest EMEA tech clients make better marketing decisions.
          <br />
          <br />
          I love to educate and upskill people about data visualisation; I have hosted
          a monthly workshop for our team of 90 data analysts and inspiring sessions
          for a broader internal audience of business users.
          <span class="number"> 3 </span>
        </p>
      </article>
      <!-- end single timeline time -->

      <!-- single timeline time -->
      <article class="timeline-item">
        <h5>Since 2020</h5>
        <h4>a focus on Dataviz</h4>
        <p>
          I keep honing my skills via projects at LinkedIn and personal ones I
          am sharing here.
          <br />
          Long time Tableau user, I have just published my first projects with D3,
          Svelte,and Layercake in 2024. Check out my projects page!
        </p>
        <br /><a href="/projects" class="btn">my portfolio</a>
        <span class="number"> 4 </span>
      </article>
      <!-- end single timeline time -->
    </div>
  </div>
</section>
<!--end of  timeline -->
<!-- services -->

<Footer />

<style>
  /*
=============== 
Timeline (in About page)
===============
*/
  .timeline-center {
    width: 80vw;
    max-width: 40rem;
  }

  .timeline {
    padding-bottom: 0rem;
  }
  .timeline-item {
    border-top: 2px dashed var(--clr-primary-5);
    margin: 0;
    padding: 4rem 2rem;
    position: relative;
  }

  .timeline p {
    margin-bottom: 0;
    text-align: left;
  }

  .timeline h5 {
    margin-bottom: 0.3rem;
  }
  /* only select the children elements that are even numbers */
  .timeline-item:nth-child(even) {
    border-left: 2px dashed var(--clr-primary-5);
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    margin-right: 2rem;
    padding-right: 0;
  }

  /* only select the children elements that are even numbers */
  .timeline-item:nth-child(odd) {
    border-right: 2px dashed var(--clr-primary-5);
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    margin-left: 2rem;
    padding-left: 0;
  }

  .timeline-item:first-child {
    border-top: 0;
    border-top-right-radius: 0;
  }

  .timeline-item:last-child {
    border-bottom-left-radius: 0;
  }

  .number {
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin-bottom: 0;
    background-color: var(--clr-primary-5);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: bold;
  }

  .timeline-item:nth-child(even) .number {
    left: 0;
  }

  .timeline-item:nth-child(odd) .number {
    right: 0;
    -webkit-transform: translate(50%, -50%);
    transform: translate(50%, -50%);
  }
</style>
