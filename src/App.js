import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Integrations from "./Components/Integration";
import Blog from "./Components/Blog";
import Pricing from "./Components/Pricing";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/integration" component={Integrations} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/pricing" component={Pricing} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
