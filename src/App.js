import './App.css';
import RouterComp from './Route/RouterComp';
import { StudentsData } from './Pages/StudentsData'
import Navbar  from './Pages/Navbar'

function App() {
  return (
    <div className="App">
     <Navbar className="navbar" />
      <StudentsData>
        <RouterComp />
      </StudentsData>
    </div>
  );
}

export default App;
