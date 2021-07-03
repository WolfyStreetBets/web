import './App.css';
import { Route } from 'react-router-dom';
import Predict from './components/predict/predict';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Route exact path="/predict" component={Predict}></Route>
      <Route exact path="/" component={Home}></Route>
    </div>
  );
}

export default App;
