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
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error}>{Error}</Route>
      </Switch>
      <NavBar/>
    </div>
    
  );
}

export default App;
