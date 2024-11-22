<script>
import Navbar from "../../components/Navbar.svelte";
import Footer from "../../components/Footer_classic.svelte";
</script>

<svelte:head>
  <title>Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website || Blog</title>
  <meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page is my blog homepage, currently in construction." />
</svelte:head>
<!-- about -->

<Navbar/>
<section class="section single-page blog">
  <div class="section-center blog-center blog-center">
    <!-- about img -->
    <article class="blog-img">
      <img
        src="./images/construction.jpg"
        class="blog-info home-photo"
        alt="Anne-Sophie standing and looking at Roman ruins in Sicily. Supposed to be funny because the website is in construction. Hahaha." />
    </article>
    <!-- blog info -->
    <article class="blog-info">
      <!-- section title -->
      <div class="section-title blog-title">
        <h2>Blog in construction</h2>
        <div class="underline"></div>
      </div>
      <!-- end of section title -->
      <div class="blog-text">
        <h3>
          Come back in <span class="headline_visualisation">Summer 2023!</span>
          <br />
          or go to <a href="https://theonlinedots.wordpress.com/" target="_blank">my current blog: The Online Dots</a>
        </h3>
      </div>
    </article>
  </div>
</section>
<!-- end of about -->
<Footer/>

<style>
/*
=============== 
Blog Page
===============
*/


.blog-text h3{
  text-transform:none;
}

.blog-title {
    text-align: left;
    margin-bottom: 2rem;
  }
.blog-title .underline {
    margin-left: 0;
  }

.blog-center {
    display: grid;
    gap: 3rem 1rem;
    place-items: center;
  }

.blog-img {
    display: block;
    position: relative;
    width: 250px;
  }

@media screen and (min-width: 800px) {
    .blog-center {
      grid-template-columns: 1fr 1fr;
    }
  }
    .blog-img::before {
    right: 1rem;
  }

  .blog-info {
    align-self: center;
  }

</style>
