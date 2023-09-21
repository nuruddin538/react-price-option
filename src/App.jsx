import { BarChart } from 'recharts';
import './App.css';
import MyChart from './components/LineChart/LineChart';
import NavBar from './components/NavBar/NavBar';
import Phones from './components/Phones/Phones';
import PriceOptions from './components/PriceOptions/PriceOptions';

// import DaisyNav from './components/DaisyNav/DaisyNav';
function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-center text-5xl bg-sky-700">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <MyChart></MyChart>
      <Phones></Phones>
    </>
  );
}

export default App;
