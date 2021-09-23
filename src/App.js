import './assests/App.css';
import About from './components/About';
import Main from './components/Main';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Main></Main>
      <About></About>
      <Profile></Profile>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
