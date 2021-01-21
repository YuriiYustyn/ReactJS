import logo from './logo.svg';
import './App.css';
import Timer from "./components/Timer-1.js"

function App() {
  return (
    <div className="App">
      <Timer count="10" schritt="1" autostart ="2" class= "segment" />
      <Timer count="20" schritt="2" autostart="1" class="segmentt" />
    
    </div>
  );
}

export default App;
