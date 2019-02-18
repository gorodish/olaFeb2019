import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <header>header</header>
        <div class="logo"></div>
        <div class="main">
          <main class="content">maincontent</main>
          <div class="left">left</div>
          <aside class="right">aside</aside>
        </div>
        <footer>
          <ul>
            <li className="footerList">About</li>
            <li className="footerList">Policies</li>
            <li className="footerList">Help</li>
            <li className="footerList">Contact</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
