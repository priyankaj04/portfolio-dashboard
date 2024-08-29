import Header from './components/header';
import HeaderBox from './components/headerbox';
import Languages from './components/languages';
import Project from './components/project';
import Work from './components/work';
import './input.css';
import bg from './assets/bg.png'

function App() {
  return (
    <div className="w-screen h-full lg:h-screen">
      <div className='p-8 pb-5 h-1/3'>
        <Header />
        <HeaderBox />
      </div>
      <div className='bg-[#ffffff] p-8 py-5 h-2/3'>
        <Languages />
      </div>
    </div>
  );
}

export default App;
