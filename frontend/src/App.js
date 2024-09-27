import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Fotter';

function App() {
  return (

   // This is fragment tag   
  <>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </>
  );
}

export default App;
