import './App.css';
import {Route, Switch, BrowserRouter} from "react-router-dom";
// import DefaultLayout from './container/component/default-layout';
import DefaultLayout from "./container/component/default-layout";

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          name="main-layout"
          render={(props)=><DefaultLayout {...props}></DefaultLayout>}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
