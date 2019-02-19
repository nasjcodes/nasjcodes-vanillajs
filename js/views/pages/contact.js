const headerHtml = /* html */`
  <h1>Contact Me</h1>
`;

const contentHtml = /* html */`
  <div>
    <a href="mailto:nasjcodes@outlook.com" class="link-inherit" aria-label="Email">
      <i class="fas fa-envelope-square fa-3x icon-row" aria-hidden="true" title="Email"></i>
    </a>

    <a href="https://github.com/nasjcodes" class="link-inherit" aria-label="GitHub" target="_blank">
      <i class="fab fa-github-square fa-3x icon-row" aria-hidden="true" title="Github"></i>
    </a>

    <a href="https://www.linkedin.com/in/jiansheng/" class="link-inherit" aria-label="LinkedIn" target="_blank">
      <i class="fab fa-linkedin fa-3x icon-row" aria-hidden="true" title="LinkedIn"></i>
    </a>
  </div>

  <a href="/res/Resume_Ang-Jian-Sheng.pdf" target="_blank">
    <div class="button">
      <span class="link-inherit">Résumé</span>
    </div>
  </a>
`;

const contact = {
  title: 'Contact',
  header: headerHtml,
  content: contentHtml,
  centerX: true,
  centerY: true,
};

export default contact;
