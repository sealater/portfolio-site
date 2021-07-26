// App.js
// import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/Sidebar.js'
import PageContent from './components/PageContent.js'
import Portfolio from './components/Portfolio.js'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <PageContent Title="Portfolio">
        <Portfolio />
      </PageContent>
      <header className="app__header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <footer className="app__footer">
        {/* ? Component / */}
      </footer>
    </div>
  );
}

export default App;