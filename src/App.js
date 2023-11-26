import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import Add from './component/Add';
import Hom from './component/Hom';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Hom/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/create' element={<Add/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
