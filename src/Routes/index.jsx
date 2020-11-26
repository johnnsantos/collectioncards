import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../components/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Favorites from "../pages/Favorites";
import Characters from "../pages/Characters";

const Routes = () => {
  return (
    <>
      <CssBaseline />
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Characters}></Route>
        <Route exact path="/favorites/:type" component={Favorites}></Route>
      </Switch>
    </>
  );
};

export default Routes;
