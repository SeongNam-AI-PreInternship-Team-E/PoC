import { Route } from "react-router-dom";
import "./App.css";
import { DaysPage } from "./pages/DaysPage";
import { LoginPage } from "./pages/LoginPage";
import { TimePage } from "./pages/TimePage";
function App() {
  return (
    <>
      <Route component={DaysPage} path={"/"} exact />
      <Route component={LoginPage} path={"/login"} />
      <Route component={TimePage} path={"/time"} />
    </>
  );
}

export default App;
