import './App.css';
import Home from "./routes/Home";
import Nav from "./component/Nav";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
    </HashRouter>
  );
}

export default App;
