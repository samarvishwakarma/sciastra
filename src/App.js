import './App.css';
import Advisor from './Components/Advisor';
import Footer from './Components/Footer';
import Members from './Components/Members';
import Navbar from './Components/Navbar';
import Team from './Components/Team';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Team/>
      <Members/>
      <Advisor/>
      <Footer/>
    </div>
  );
}

export default App;
