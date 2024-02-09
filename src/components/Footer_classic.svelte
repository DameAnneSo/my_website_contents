<script>
  // set year
  const date = new Date().getFullYear()
</script>

<!-- footer -->
<footer class="footer">
  <ul class="social-icons">
    <!-- single item -->
    <li>
      <a href="https://www.linkedin.com/in/annesophiepereira/" target="_blank" class="social-icon">
        <i class="fab fa-linkedin" />
      </a>
    </li>
    <!-- end of single item -->
    <!-- single item -->
    <li>
      <a href="https://vis.social/@curiousdata" target="_blank" class="social-icon">
        <i class="fab fa-mastodon" />
      </a>
    </li>
    <!-- single item -->
    <li>
      <a href="https://bsky.app/profile/curiousdata.bsky.social" target="_blank" class="social-icon">
        <i class="fa-solid fa-retweet"></i>
      </a>
    </li>
    <!-- end of single item -->
  </ul>
  <p>&copy; <span id="date">{date}</span> Anne-Sophie Pereira De Sá. All rights reserved</p>
</footer>

<style>
  /*
=============== 
Footer
===============
*/

  .footer {
    height: 12rem;
    padding-bottom: 2rem;
    background-color: var(--clr-primary-1);
    display: grid;
    place-items: center;
  }

  .footer .social-icons {
    margin-bottom: 2rem;
  }

  .footer .social-icon {
    color: var(--clr-primary-5);
  }

  .footer .social-icon:hover {
    color: var(--clr-primary-7);
  }

  .footer p {
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--clr-primary-4);
  }

  .timeline-item h4 {
    text-transform: none;
  }
</style>
