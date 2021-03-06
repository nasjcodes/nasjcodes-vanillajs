const headerHtml = /* html */`
  <h1>Projects</h1>
`;

const contentHtml = /* html */`
  <article id="projects">
    <section>
      <h2 id="webdev"><i class="fas fa-code"></i> Web Development</h2>

      <ul class="list-inside">
        <li>
          <h3 class="inline"><a href="https://github.com/nasjcodes/nasjcodes.github.io" class ="link-inherit ext-link">nasjcodes.github.io (This
              website)</a></h3>
          <p>A basic single page application made with Vanilla JavaScript. Used to show and track my progress in Software
            Development.</p>
        </li>

        <li>
          <h3 class="inline"><a href="https://www.freecodecamp.org/nasjcodes" class ="link-inherit ext-link">freeCodeCamp</a></h3>
          <p>A non-profit community that has courses on coding. I have completed the following projects:</p>

          <h4 class="inline"><a href="https://www.freecodecamp.org/certification/nasjcodes/responsive-web-design" class ="link-inherit ext-link">Responsive Web Design</a></h4>
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fas fa-link"></i></span><a href="https://codepen.io/nasjcodes/full/XoqeOy">Tribute Page</a></li>
            <li><span class="fa-li"><i class="fas fa-link"></i></span><a href="https://codepen.io/nasjcodes/full/maLqgp">Survey Form</a></li>
            <li><span class="fa-li"><i class="fas fa-link"></i></span><a href="https://codepen.io/nasjcodes/full/jXKOzv">Product Landing Page</a></li>
            <li><span class="fa-li"><i class="fas fa-link"></i></span><a href="https://codepen.io/nasjcodes/full/NezpLZ">Technical Documentation Page</a></li>
            <li><span class="fa-li"><i class="fas fa-link"></i></span><a href="https://codepen.io/nasjcodes/full/qLKjae">Personal Portfolio Webpage</a></li>
          </ul>

          <h4><a href="https://www.freecodecamp.org/certification/nasjcodes/javascript-algorithms-and-data-structures" class ="link-inherit ext-link">JavaScript Algorithms and Data Structures</a></h4>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="android"><i class="fab fa-android"></i> Android</h2>

      <ul class="list-inside">
        <li>
          <h3 class="inline"><a href="https://github.com/nasjcodes/android-quotebook" class ="link-inherit ext-link">QuoteBook</a></h3>
          <p>Quotebook is a basic Android application that loops through a list of quotes. I mostly followed <a href="https://www.reddit.com/r/Android/comments/2tpjep/the_new_step_by_step_guide_detailing_how_to_get/">this</a>
            reddit thread.</p>
        </li>

        <li>
          <h3 class="inline"><a href="https://github.com/nasjcodes/snake-mobile" class ="link-inherit ext-link">Snake Mobile</a></h3>
          <p>To better understand the interactions and functions of Android compared to Java, I decided to port the <a
              href="https://materiaalit.github.io/2013-oo-programming/part2/week-12/">Worm Game</a> (Exercise 49) from
            the University of Helsinki's MOOC.</p>
        </li>
      </ul>
    </section>

  </article>
`;

const projects = {
  title: 'Projects',
  header: headerHtml,
  content: contentHtml,
  centerX: false,
  centerY: false,
};

export default projects;
