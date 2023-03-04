import './App.css';
import FetchAPI from './Components/FetchAPI';
import Search from './Components/Search';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const searchItem = (UserInput) => {   
    setInput(UserInput);
    console.log(input, "UserINput");
}
  return (
    <div className="App">
      <Search  onSearch={searchItem}/>
      <FetchAPI onInput={input} />
    </div>
  );
}

export default App;
