
import './App.css';
import Footer from './Components/Footer';
import Comments from './Components/Forum';
import Navbar from './Components/Navbar';
import Mainroutes from './Routes/Mainroutes';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
 <Mainroutes></Mainroutes>
 {/* <Comments></Comments> */}
<Footer></Footer>
    </div>
  );
}

export default App;
