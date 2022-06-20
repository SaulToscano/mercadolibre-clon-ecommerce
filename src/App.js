//import logo from './logo.svg';
import './App.css';
import { BuyNowButton } from './Components/Atoms/Buttons/Button.BuyNow.js'
import { AddToCar } from './Components/Atoms/Buttons/Button.AddToCar'
import { NavSearch } from './Components/Atoms/Inputs/Input.NavSearch'
import { HeaderClass } from './Components/Organisms/Header/Header'

function App() {
  return (
    <div className="App">
      <BuyNowButton>TEST</BuyNowButton>
      <AddToCar>Test</AddToCar>
      <NavSearch></NavSearch>
      <HeaderClass />
    </div>
  );
}

export default App;
