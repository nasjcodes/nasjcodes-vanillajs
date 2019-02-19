const headerHtml = /* html */`
  <h1>About</h1>
`;

const contentHtml = /* html */`
  <article>
    <section>
      <h2>Jian Sheng</h2>
      <p>
        Hello! I'm an aspiring software developer who enjoys learning and building new things. I’m a self-taught
        programmer with a degree in Mechanical Engineering from the National University of Singapore. My current goal is
        to get hired as a software engineer in web/android development.
      </p>

    <a href="/res/Resume_Ang-Jian-Sheng.pdf" target="_blank">
      <div class="button">
        <span class="link-inherit">View my résumé</span>
      </div>
    </a>
    </section>

    <section>
      <h2>My Progress</h2>
      <p>The following are some major milestones in my learning journey as a developer.</p>

      <ul class="fa-ul list-inside">
        <li>
          <span><i class="fas fa-code"></i><span>
          <h3 id="web" class="inline">Web</h3>
          <p>
            To build a strong foundation in understand web programming, I decided to look at various resources following
            <a href="https://medium.com/zerotomastery/learn-to-code-in-2019-get-hired-and-have-fun-along-the-way-d4197f96be27">Andrei
              Neagoie's</a> "guide". With some basic understanding of web development, I have created this website using
            vanilla JS.
          </p>

          <p>
            As of 23 January 2019, I have completed the following comprehensive <a href="http://javascript.info/">javascript.info</a>
            tutorial. I have also completed the following <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
            courses:
          </p>

          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fas fa-link"></i></span><a href="https://www.freecodecamp.org/certification/nasjcodes/responsive-web-design">Responsive
                Web Design</a></li>
            <li><span class="fa-li"><i class="fas fa-link"></i></span><a href="https://www.freecodecamp.org/certification/nasjcodes/javascript-algorithms-and-data-structures">JavaScript
                Algorithms and Data Structures</a></li>
          </ul>

          <p>
            I plan continue learning HTML/CSS/JavaScript and hope to start making use of well-established frameworks
            (e.g. React) soon.
          </p>
        </li>

        <li>
          <span><i class="fab fa-java fa-lg"></i></span>
          <h3 id="java" class="inline">Java</h3>
          <p>
            I started learning Java through the University of Helsinki's MOOC (Both <a href="http://moocfi.github.io/courses/2013/programming-part-1/">Part1</a>
            and <a href="http://moocfi.github.io/courses/2013/programming-part-2/">Part 2</a>). This course has
            solidified my foundation in Object-Oriented Programming.
          </p>
        </li>

        <li>
          <span><i class="fab fa-android fa-lg"></i></span>
          <h3 id="android" class="inline">Android</h3>
          <p>
            I have (only) made 2 Android applications so far, and obviously have a lot more to learn. However, these are
            some things that I noted to improve on based on the 2 applications:
          </p>
          <ul>
            <li>Themes/Styles/Layouts. I have been using the default themes and styles for both applications. I could
              probably learn to get a consistent theme throughout the application, as well as programmatically generate
              layouts.</li>

            <li>Fragments. I have only used 1 Fragment so far, and could probably learn to use them more frequently for
              better UX.</li>

            <li>Resolve bugs and add improvements to the current applications. This includes "perfecting" the UX by
              standardizing animations etc.</li>
          </ul>
        </li>
      </ul>
    </section>

    <br>

    <a href="/projects" onclick="route('/projects'); return false;">
      <div class="button">
        <span class="link-inherit">View my projects</span>
      </div>
    </a>

  </article>
`;

const about = {
  title: 'About',
  header: headerHtml,
  content: contentHtml,
  centerX: false,
  centerY: false,
};

export default about;
