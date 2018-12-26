let navbar = `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="/" onclick="app.route('/'); return false;">nasjcodes</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/about" onclick="app.route('/about'); return false;">About<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects" onclick="app.route('/projects'); return false;">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="/wrongLink">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
`;