// App.js
// import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/Sidebar.js'

function App() {
  return (
    <div className="app">
      <Sidebar />
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