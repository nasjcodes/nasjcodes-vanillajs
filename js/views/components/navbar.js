const navbar = /* html */`
  <a class="nav-name" href="/" onclick="route('/'); return false;">nasjcodes</a>

  <div id="menu" onclick="toggleMenu(this)">
    <div class="menu-line line1"></div>
    <div class="menu-line line2"></div>
    <div class="menu-line line3"></div>
  </div>


  <div id="navlinks">
    <a class="nav-link nav-home" href="/" onclick="route('/'); return false;">
      <div class="nav-text">Home</div>
    </a>
    <a class="nav-link" href="about" onclick="route('/about'); return false;">
      <div class="nav-text">About</div>
    </a>
    <a class="nav-link" href="projects" onclick="route('/projects'); return false;">
      <div class="nav-text">Projects</div>
    </a>
    <a class="nav-link" href="contact" onclick="route('/contact'); return false;">
      <div class="nav-text">Contact</div>
    </a>
  </div>
`;

export default navbar;
