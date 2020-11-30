import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../components/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Favorites from "../pages/Favorites";
import Characters from "../pages/Characters";
import Chart from "../pages/Chart";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <>
      <CssBaseline />
      <Menu />
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chart" component={Chart} />
          <Route exact path="/:id" component={Characters} />
          <Route exact path="/favorites/:id" component={Favorites} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Routes;
