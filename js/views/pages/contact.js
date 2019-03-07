const headerHtml = /* html */`
  <h1>Get in touch.</h1>
`;

const contentHtml = /* html */`
  <article>
    <p>Feel free to contact me through the following links!</p>

    <div class="flex-container">
      <a href="mailto:nasjcodes@outlook.com">
        <div class="button">
          <i class="fas fa-envelope"></i>
          <span class="link-inherit">E-mail</span>
        </div>
      </a>

      <a href="https://www.linkedin.com/in/jiansheng/" target="_blank">
        <div class="button">
          <i class="fab fa-linkedin-in"></i>
          <span class="link-inherit">LinkedIn</span>
        </div>
      </a>

      <a href="https://github.com/nasjcodes" target="_blank">
        <div class="button">
          <i class="fab fa-github"></i>
          <span class="link-inherit">GitHub</span>
        </div>
      </a>

      <a href="res/Resume_Ang-Jian-Sheng.pdf" target="_blank">
        <div class="button">
          <i class="fas fa-file"></i>
          <span class="link-inherit">Résumé</span>
        </div>
      </a>
    </div>
  </article>
`;

const contact = {
  title: 'Contact',
  header: headerHtml,
  content: contentHtml,
  centerX: true,
  centerY: true,
};

export default contact;
