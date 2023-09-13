import './App.css';
import { Heading } from '@chakra-ui/react'
import Header from './Pages/Page-1/Header';
import Navbar from './Components/Navbar';
import Highlights from './Components/Highlights';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Highlights/>
    </div>
  );
}

export default App;
