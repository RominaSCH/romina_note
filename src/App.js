import './App.css';
import Home from "./routes/Home";
import Add from "./routes/Add";
import Nav from "./component/Nav";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/add" component={Add} />
    </HashRouter>

  );
}

export default App;
