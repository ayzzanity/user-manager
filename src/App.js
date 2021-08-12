import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import SideBar from "./components/SideBar";
import Home from "./views/Home";
import Users from "./views/Users";
import About from "./views/About";

function App() {
  return (
    <Router>
      <Layout>
        <SideBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
