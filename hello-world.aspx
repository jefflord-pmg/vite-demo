<%@ Page Language="C#" AutoEventWireup="true" %>
<!doctype html>
<html lang="en">
  <head>  
    <% if (Request.QueryString["dev"] != null) { %>  <!-- or your own env check -->
      <!-- Vite HMR client + your entry -->
      <script type="module">
        import { inject } from "http://localhost:5173/@vite-plugin-checker-runtime";
        inject({
          overlayConfig: {},
          base: "/",
        });
      </script>

      <%-- <script type="module" src="http://localhost:5173/@vite/client"></script> --%>
      <script type="module" src="http://localhost:5173/src/hello-world/main.ts"></script>  <!-- or your entry -->
  <% } else { %>


<%
  
    var manifestPath = Server.MapPath("/dist/.vite/manifest.json");
    var manifestJson = System.IO.File.ReadAllText(manifestPath);
    var manifest = Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, dynamic>>(manifestJson);
    var entry = manifest["src/hello-world/main.ts"];
    manifestPath = entry["file"];

%>
      <!-- In prod: reference built assets from /dist/assets/... -->      
      <script type="module" src="/dist/<%= manifestPath %>"></script>
  <% } %>

    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.css" />
    <title>Hello World - Vite MPA Demo</title>
  </head>
  <body>
  
  
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <span class="navbar-brand">Vite MPA Demo</span>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a href="/hello-world.html">Hello World</a></li>
          <li><a href="/crud-testing.html">CRUD Testing</a></li>
        </ul>
      </div>
    </nav>

    <div id="app">
      <div class="container">
        <div class="jumbotron">
          <h1>Hello, World!</h1>
          <p>This is a Vite + jQuery 3.7.1 + Bootstrap 3.4.1 demo</p>
          <p>
            <button class="btn btn-primary btn-lg" id="alertBtn">
              Show jQuery Alert
            </button>
          </p>
        </div>
        
        <div class="row">
          <div class="col-md-4">
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">Vite</h3>
              </div>
              <div class="panel-body">
                Modern, fast dev server with HMR
              </div>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="panel panel-success">
              <div class="panel-heading">
                <h3 class="panel-title">jQuery 3.7.1</h3>
                <label for="txtCounter">txtCounter:</label>
                <input type="text" id="txtCounter" value="" >
              </div>
              <div class="panel-body">
                Classic DOM manipulation library
              </div>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">Bootstrap 3.4.1</h3>
              </div>
              <div class="panel-body">
                Legacy responsive framework
              </div>
            </div>
          </div>
        </div>
        
        <div class="well">
          <p>Click counter: <span id="counter">0</span></p>
          <button class="btn btn-default" id="incrementBtn">Increment</button>
          <button class="btn btn-warning" id="resetBtn">Reset</button>
        </div>

        <div class="alert alert-success">
          🎄 Christmas countdown: <strong id="xmasCountdown"></strong>
        </div>
      </div>
    </div>
    <%-- <script type="module" src="/src/hello-world/main.ts"></script> --%>
  </body>
</html>
