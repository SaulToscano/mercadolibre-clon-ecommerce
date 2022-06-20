//import logo from './logo.svg';
import './App.css';
import { BuyNowButton } from './Components/Atoms/Buttons/Button.BuyNow.js'
import { AddToCar } from './Components/Atoms/Buttons/Button.AddToCar'
import { NavSearch } from './Components/Atoms/Inputs/Input.NavSearch'
import { HeaderClass } from './Components/Organisms/Header/Header'
import { AnchorLogo } from './Components/Atoms/Anchors/Anchor.logo'
import {SearchFormClass} from './Components/Molecules/Forms/Form.SearchForm'

function App() {
  return (
    <div className="App">
      <BuyNowButton>TEST</BuyNowButton>
      <AddToCar>Test</AddToCar>
      <NavSearch></NavSearch>
      <HeaderClass />
      <AnchorLogo>TESSSST</AnchorLogo>
      <SearchFormClass />
    </div>
  );
}

export default App;
