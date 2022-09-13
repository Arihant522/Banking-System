
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Headers';
import ViewCustomer from './Pages/viewcustomer';
import Transfer from './Pages/Transfer';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/viewCustomer' element={<ViewCustomer/>}/>
          <Route path='/Transfer' element={<Transfer/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
