import './App.css';
import Header from './componenets/Header';
import Stock from './componenets/Stock';
import Mainpage from './componenets/mainpage';
import Foot from './componenets/Foot';
function App() {
  return (
    <div className="App">
      <Header/>
      <Stock/>
      <Mainpage/>
      <Foot/>
    </div>
  );
}

export default App;
