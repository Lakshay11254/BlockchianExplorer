import "./App.css";
import Header from "./components/Header";
import BlockDetails from "./components/BlockDetails";
import Transfer from "./components/Transfer";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Transactions from "./components/Transactions";
function App() {
  return (
    <>
      <Header />
      <Switch>

        <Route path="/transactions" component={Transactions} />
        {/* <Transfer/> */}
        <Route path="/transfer" component={Transfer} />
        {/* <BlockDetails /> */}
        <Route path="/blocks" component={BlockDetails} />
        <Route path="/" component={BlockDetails} />
      </Switch>
    </>
  );
}

export default App;
