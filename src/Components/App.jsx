import './style.css';
import { Navbar } from './Navbar';
import AnimatedRoutes from './AnimatedRoutes';
import BodyBackground from './BodyBackground';


function App() {
  return (
    <div id='App'>
    <BodyBackground/>
    <Navbar/>
    <AnimatedRoutes/>
    </div>
  );
}

export default App;
