const headerHtml = /* html */`
  <h1>About</h1>
`;

const contentHtml = /* html */`
  <article>
    <p>This site is used to show and track my progress in Software Development.</p>

    <section>
      <h2 id="java">Java</h2>
      <p>I started learning Java through the University of Helsinki's MOOC (Both <a href="http://moocfi.github.io/courses/2013/programming-part-1/">Part 1</a> and <a href="http://moocfi.github.io/courses/2013/programming-part-2/">Part 2</a>). This course has solidified my foundation in Object-Oriented Programming.</p>
    </section>

    <section>
      <h2 id="android">Android</h2>
      <p>I have (only) made 2 Android applications so far, and obviously have a lot more to learn. However, these are some things that I noted to improve on based on the 2 applications:</p>
      <ul>
        <li>Themes/Styles/Layouts. I have been using the default themes and styles for both applications. I could probably learn to get a consistent theme throughout the application, as well as programatically generate layouts.</li>

        <li>Fragments. I have only used 1 Fragment so far, and could probably learn to use them more frequently for better UX.</li>

        <li>Resolve bugs and add improvements to the current applications. This includes "perfecting" the UX by standardizing animations etc.</li>
      </ul>
    </section>

    <section>
      <h2 id="web">Web</h2>
      <p>To build a strong foundation in understand web programming, I decided to look at various resources following <a href="https://medium.com/zerotomastery/learn-to-code-in-2019-get-hired-and-have-fun-along-the-way-d4197f96be27">Andrei Neagoie's</a> "guide". With some basic understanding of web development, I have created this website using vanilla JS and Bootstrap. I plan continue learning HTML/CSS/JavaScript and hope to start making use of well established frameworks (e.g. React) soon.</p>
    </section>

    <h4><a href="/projects" onclick="app.route('/projects'); return false;">View my projects</a></h4>

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
