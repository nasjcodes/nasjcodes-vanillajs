const headerHtml = /* html */`
  <h1 class="head-lg">Hi, I'm Jian&nbspSheng.</h1>
  <p class="text-lg">Aspiring Software Developer</p>
`;

const contentHtml = /* html */`
  <div class="flex-container">
    <a href="res/Resume_Ang-Jian-Sheng.pdf" target="_blank">
      <div class="button">
        <span class="link-inherit">Résumé</span>
      </div>
    </a>

    <a href="contact" onclick="route('contact'); return false;">
        <div class="button">
          <span class="link-inherit">Contact</span>
        </div>
    </a>
  </div>
`;

const home = {
  title: 'Software Developer',
  header: headerHtml,
  content: contentHtml,
  centerX: true,
  centerY: true,
};

export default home;
