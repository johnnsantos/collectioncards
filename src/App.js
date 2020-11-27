import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "antd/dist/antd.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
