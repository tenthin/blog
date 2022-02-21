import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Menu from './components/Menu';
import NavigationBar from './components/NavigationBar'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <h1>LOGIN PAGE</h1>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
