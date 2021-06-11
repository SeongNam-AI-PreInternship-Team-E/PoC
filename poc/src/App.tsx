import { Route } from "react-router-dom";
import "./App.css";
import { DaysPage } from "./pages/DaysPage";
import { LoginPage } from "./pages/LoginPage";
import { TimePage } from "./pages/TimePage";
function App() {
  return (
    <>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={DaysPage} />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/login"}
        component={LoginPage}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/time"}
        component={TimePage}
      />
      {/* <Route component={DaysPage} path={"/"} exact /> */}
      {/* <Route component={LoginPage} path={"/login"} />
      <Route component={TimePage} path={"/time"} /> */}
    </>
  );
}

export default App;
