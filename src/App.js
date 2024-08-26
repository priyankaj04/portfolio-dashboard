import Header from './components/header';
import HeaderBox from './components/headerbox';
import Languages from './components/languages';
import Project from './components/project';
import Work from './components/work';
import './input.css';
import bg from './assets/bg.png'

function App() {
  return (
    <div className="w-full h-full" 
    // style={{background: `url(${bg})`}}
    >
      <Header />
      <HeaderBox />
      <Languages />
      <Work />
      <Project />
    </div>
  );
}

export default App;
