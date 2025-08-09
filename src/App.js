import './App.css';
import Nav from './component/Nav';
import Resume from './component/Resume';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Template1 from './component/Template1';
import Home from './component/Home';
import ResumeExport from './component/ResumeExport';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route 
            path='/previwe' 
            element={
              <ResumeExport>
                <Resume />
              </ResumeExport>
            } 
          />
          <Route path='/template1' element={<Template1 cssFile="template" />} />
          <Route path='/template2' element={<Template1 cssFile="template2" />} />
          <Route path='/template3' element={<Template1 cssFile="template3" />} />
          <Route path='/template4' element={<Template1 cssFile="template4" />} />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
