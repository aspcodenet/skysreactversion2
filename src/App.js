import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Footer } from './Components/Footer';
import {useState} from 'react';

function App() {


  //const numbers = [12, 92, 3]

  // let firstNumber = numbers[0]
  // let secondNumber = numbers[1]
  // let lastNumber = numbers[3]



  //const activePage = 'Home'
  const [activePage, setActivePage] = useState('Services');
  //const arrayen = useState('Home'); //2 items
  //arrayen[0]          
  //arrayen[1]   function       
  
  const onChangeActivePage = (newPage)=>{
    setActivePage(newPage)
  }

  return (
    <div>
      <button onClick={()=>onChangeActivePage('Home')}>Home</button>
      <button onClick={()=>onChangeActivePage('Services')}>Services</button>
      <Header activePage={activePage} onChangeActivePage={onChangeActivePage} />
      <Main activePage={activePage}/>
      <Footer />
    </div>
  );
}

export default App;
