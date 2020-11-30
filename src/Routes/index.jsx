import { Switch, Route } from "react-router-dom";
import Drawer from "../components/Menu/";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Drawer} />
      </Switch>
    </>
  );
};

export default Routes;
