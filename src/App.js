import './App.css';
import {Switch , Route} from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import NavBar from './component/NavBar';

function App() {
  return (
    <div>
      <Switch>
      <Route path="/" exact component={Home}>{Home}</Route>
      <Route path="/rooms" component={Rooms}>{Rooms}</Route>
      <Route path="/singlerooms" component={SingleRoom}>{SingleRoom}</Route>
      <Route component={Error}>{Error}</Route>
      </Switch>
      <NavBar/>
    </div>
    
  );
}

export default App;
