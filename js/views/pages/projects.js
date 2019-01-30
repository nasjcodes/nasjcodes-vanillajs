const headerHtml = /* html */`
  <h1>Projects</h1>
`;

const contentHtml = /* html */`
  <article>
    <section>
      <h2 id="webdev">Web Development</h2>
      <ul>
        <li><h4><a href="https://github.com/nasjcodes/nasjcodes.github.io">nasjcodes.github.io (This website)</a></h4>
          <p>A basic single page application made with Vanilla JavaScript. Used to show and track my progress in Software Development.</p>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="android">Android</h2>
      <ul>
        <li><h4><a href="https://github.com/nasjcodes/android-quotebook">QuoteBook</a></h4>
          <p>Quotebook is a basic Android application that loops through a list of quotes. I mostly followed <a href="https://www.reddit.com/r/Android/comments/2tpjep/the_new_step_by_step_guide_detailing_how_to_get/">this</a> reddit thread.</p>
        </li>
        <li><h4><a href="https://github.com/nasjcodes/snake-mobile">Snake Mobile</a></h4>
          <p>To better understand the interactions and functions of Android compared to Java, I decided to port the <a href="https://materiaalit.github.io/2013-oo-programming/part2/week-12/">Worm Game</a> (Exercise 49) from the University of Helsinki's MOOC.</p>
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
