import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Transactions from './components/Transactions';
import Welcome from './components/Welcome';

const App = ()=> {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  );
}

export default App;
