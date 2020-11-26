import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../components/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Favorites from "../pages/Favorites";
import Characters from "../pages/Characters";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <>
      <CssBaseline />
      <Menu />
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Characters}></Route>
          <Route exact path="/favorites/:id" component={Favorites}></Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Routes;
